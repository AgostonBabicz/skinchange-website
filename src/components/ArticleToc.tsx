'use client';

import { useEffect, useId, useState } from 'react';
import { ChevronDown } from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';

interface ArticleTocProps {
  lang: Language;
  // id of the element that holds the article; its h2 headings become the entries
  contentId: string;
}

interface TocEntry {
  id: string;
  text: string;
}

// A section becomes current once its heading passes this line (px from the top of the viewport).
// It sits just below the page's scroll-padding-top (112px), so a heading reached from the list is current.
const ACTIVE_LINE = 120;

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'oe')
    .replace(/å/g, 'aa')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Table of contents built from the article's h2 headings once the page has loaded.
// Phones: a collapsible card above the article. Desktop: an always-open card in the sticky left rail.
export default function ArticleToc({ lang, contentId }: ArticleTocProps) {
  const isDa = lang === 'da';
  const label = isDa ? 'Indhold' : 'Contents';
  const listId = useId();
  const [entries, setEntries] = useState<TocEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const content = document.getElementById(contentId);
    if (!content) return;
    const headings = Array.from(content.querySelectorAll('h2'));
    if (headings.length === 0) return;

    // Stable ids from the heading text; an id that is already there is kept.
    const taken = new Set<string>();
    const found = headings.map((heading, index) => {
      const text = (heading.textContent ?? '').replace(/\s+/g, ' ').trim();
      if (!heading.id) {
        const base = slugify(text) || `section-${index + 1}`;
        let id = base;
        for (let n = 2; taken.has(id) || document.getElementById(id); n += 1) id = `${base}-${n}`;
        heading.id = id;
      }
      taken.add(heading.id);
      return { id: heading.id, text };
    });
    setEntries(found);

    // The ids only exist from now on, so honour a #section in the address of the first load.
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const target = hash ? document.getElementById(hash) : null;
    if (target && headings.includes(target as HTMLHeadingElement)) {
      const root = document.documentElement;
      const behavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      target.scrollIntoView();
      root.style.scrollBehavior = behavior;
    }

    // The current section is the last one whose heading has passed the line; before the first, the first.
    const update = () => {
      let current = found[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > ACTIVE_LINE + 1) break;
        current = heading.id;
      }
      setActiveId(current);
    };
    update();

    // Follows the scroll position itself (once per frame), so a jump such as Home or the iPhone
    // status-bar tap, which skips every heading at once, still lands on the right entry.
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, [contentId]);

  return (
    <nav aria-label={label} className="shrink-0 overflow-hidden rounded-[22px] border border-line bg-white lg:rounded-3xl lg:p-5">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={listId}
        className="flex min-h-14 w-full items-center justify-between gap-3 pl-5 pr-4 text-left text-[15px] font-semibold text-ink focus-visible:outline-offset-[-3px] lg:hidden"
      >
        {label}
        <ChevronDown size={18} className={`shrink-0 transition-transform duration-[320ms] ease-soft ${open ? 'rotate-180' : ''}`} />
      </button>
      <p
        aria-hidden="true"
        className="hidden px-2.5 pb-2 text-[13px] font-semibold uppercase leading-normal tracking-[0.08em] text-muted lg:block"
      >
        {label}
      </p>

      <div
        id={listId}
        className={`grid transition-[grid-template-rows,visibility] duration-[320ms] ease-soft lg:visible lg:grid-rows-[1fr] ${
          open ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ol className="flex flex-col px-5 pb-3.5 lg:gap-0.5 lg:p-0">
            {entries.map((entry) => {
              const active = entry.id === activeId;
              return (
                <li key={entry.id}>
                  <a
                    href={`#${entry.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`flex min-h-11 items-center border-t border-line-soft py-2 text-[15px] leading-[1.35] transition-colors focus-visible:outline-offset-[-3px] lg:min-h-10 lg:gap-2.5 lg:rounded-xl lg:border-0 lg:px-2.5 lg:py-1.5 ${
                      active ? 'font-semibold text-ink lg:bg-brand-tint' : 'text-body hover:text-ink'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`hidden h-1.5 w-1.5 shrink-0 rounded-full bg-brand transition-opacity lg:block ${active ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {entry.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
}
