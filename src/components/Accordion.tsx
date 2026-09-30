'use client';

import { useEffect, useId, useState, type ReactNode } from 'react';
import { ChevronDown, PlusIcon } from '@/components/ui/Icons';

// Collapsible parts of the "Fokus" design: the FAQ accordion, the legal pages' collapsible
// table of contents and their section index.
// Panels are always rendered, so every answer is in the static HTML even while it is closed (SEO).
// A closed panel is folded with grid-template-rows 0fr → 1fr and hidden from assistive technology
// with visibility, which only switches off once the 320 ms fold has finished.

function Collapse({
  id,
  open,
  labelledBy,
  children,
}: {
  id: string;
  open: boolean;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-[320ms] ease-soft ${
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div
        id={id}
        role={labelledBy ? 'region' : undefined}
        aria-labelledby={labelledBy}
        className={`min-h-0 overflow-hidden transition-[visibility] duration-[320ms] ${open ? '' : 'invisible'}`}
      >
        {children}
      </div>
    </div>
  );
}

export interface AccordionItem {
  /** Question, or the name of a group of questions. */
  title: ReactNode;
  /** Small secondary label next to the title, e.g. "5 spørgsmål". */
  meta?: ReactNode;
  /** Answer text (wrapped in a paragraph) or nested content such as another accordion. */
  content: ReactNode;
}

type Variant = 'faq' | 'group' | 'nested';

// faq and group: rows inside a white card on mobile, hairline rows on the paper background from lg.
// nested: the questions inside an open group, as an inset card.
const VARIANTS: Record<
  Variant,
  { list: string; item: string; button: string; label: string; meta: string; icon: string; iconSvg: string; panel: string }
> = {
  faq: {
    list: 'overflow-hidden rounded-3xl border border-line bg-white lg:overflow-visible lg:rounded-none lg:border-x-0 lg:border-b-0 lg:bg-transparent',
    item: 'border-t border-line first:border-t-0 lg:border-b lg:border-t-0',
    button:
      'min-h-16 gap-3.5 py-3.5 pl-5 pr-4 text-[17px] lg:min-h-[76px] lg:gap-6 lg:pl-0 lg:pr-3 lg:text-[21px] lg:tracking-[-0.01em] lg:hover:bg-white',
    label: '',
    meta: '',
    icon: 'size-8 lg:size-9',
    iconSvg: 'size-4 lg:size-[18px]',
    panel:
      'px-5 pb-5 text-[15px] leading-[1.6] text-body lg:pb-[26px] lg:pl-0 lg:pr-[72px] lg:text-[17px] lg:leading-[1.65]',
  },
  group: {
    list: 'overflow-hidden rounded-3xl border border-line bg-white lg:overflow-visible lg:rounded-none lg:border-x-0 lg:border-b-0 lg:bg-transparent',
    item: 'border-t border-line first:border-t-0 lg:border-b lg:border-t-0',
    button:
      'min-h-16 gap-3.5 py-3.5 pl-5 pr-4 text-[17px] lg:min-h-[76px] lg:gap-6 lg:pl-0 lg:pr-3 lg:text-[21px] lg:tracking-[-0.01em] lg:hover:bg-white',
    label: 'flex flex-col gap-0.5 lg:flex-row lg:items-baseline lg:gap-3',
    meta: 'font-sans text-[13px] font-medium tracking-normal text-muted lg:text-[15px]',
    icon: 'size-8 lg:size-9',
    iconSvg: 'size-4 lg:size-[18px]',
    panel: 'px-4 pb-4 lg:px-0 lg:pb-6',
  },
  nested: {
    list: 'overflow-hidden rounded-[18px] bg-paper lg:rounded-3xl lg:border lg:border-line lg:bg-white',
    item: 'border-t border-line first:border-t-0',
    button: 'min-h-14 gap-3 py-3 pl-4 pr-3 text-[15px] lg:min-h-16 lg:gap-5 lg:pl-6 lg:pr-4 lg:text-[18px] lg:hover:bg-paper',
    label: '',
    meta: '',
    icon: 'size-7 lg:size-8',
    iconSvg: 'size-3.5 lg:size-4',
    panel:
      'px-4 pb-4 text-[14px] leading-[1.6] text-body lg:px-6 lg:pb-5 lg:pr-16 lg:text-base lg:leading-[1.65]',
  },
};

interface AccordionProps {
  items: AccordionItem[];
  variant?: Variant;
  /** Level of the heading that wraps each toggle button. */
  headingLevel?: 2 | 3;
  /** Index of the item that starts open; -1 starts with everything closed. */
  defaultOpen?: number;
  /** Let several items be open at once (default: opening one closes the others). */
  multiple?: boolean;
}

export default function Accordion({
  items,
  variant = 'faq',
  headingLevel = 2,
  defaultOpen = 0,
  multiple = false,
}: AccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(defaultOpen >= 0 && defaultOpen < items.length ? [defaultOpen] : []);
  const s = VARIANTS[variant];
  const Heading = headingLevel === 3 ? 'h3' : 'h2';

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : multiple ? [...current, index] : [index],
    );

  return (
    <div className={s.list}>
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div key={index} className={s.item}>
            <Heading>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={`flex w-full items-center justify-between text-left font-display font-semibold leading-[1.3] text-ink transition-colors focus-visible:outline-offset-[-3px] ${s.button}`}
              >
                {item.meta ? (
                  <span className={s.label}>
                    <span>{item.title}</span>{' '}
                    <span className={s.meta}>{item.meta}</span>
                  </span>
                ) : (
                  <span>{item.title}</span>
                )}
                <span
                  aria-hidden="true"
                  className={`flex shrink-0 items-center justify-center rounded-full [transition:transform_320ms_cubic-bezier(0.22,1,0.36,1),background-color_320ms_linear,color_320ms_linear] ${s.icon} ${
                    isOpen ? 'rotate-45 bg-brand text-white' : 'bg-brand-tint text-brand'
                  }`}
                >
                  <PlusIcon strokeWidth={2.2} className={s.iconSvg} />
                </span>
              </button>
            </Heading>
            <Collapse id={panelId} open={isOpen} labelledBy={buttonId}>
              <div className={s.panel}>{typeof item.content === 'string' ? <p>{item.content}</p> : item.content}</div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
}

// A single collapsible card, used for the table of contents on small screens.
export function Disclosure({
  label,
  children,
  className = '',
}: {
  label: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const panelId = `${useId()}-panel`;
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-14 w-full items-center justify-between gap-3 pl-5 pr-4 text-left text-[15px] font-semibold text-ink focus-visible:outline-offset-[-3px]"
      >
        {label}
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-[320ms] ease-soft ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <Collapse id={panelId} open={open}>
        {children}
      </Collapse>
    </div>
  );
}

export interface TocEntry {
  id: string;
  label: string;
  level: 2 | 3;
}

// Section index for the legal pages on large screens. Marks the section being read: the last
// top-level heading that has scrolled past the floating navigation (the first one at the top).
export function TocNav({ entries }: { entries: TocEntry[] }) {
  const sectionIds = entries.filter((entry) => entry.level === 2).map((entry) => entry.id);
  const idsKey = sectionIds.join(' ');
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const headings = idsKey
      .split(' ')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      let current = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > 140) break;
        current = heading.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [idsKey]);

  return (
    <ol className="flex flex-col">
      {entries.map((entry) => {
        const current = entry.id === active;
        const tone =
          entry.level === 3
            ? 'pl-[30px] text-[14px] font-normal text-body hover:bg-paper'
            : current
              ? 'bg-brand-tint pl-2.5 text-[15px] font-bold text-ink'
              : 'pl-2.5 text-[15px] font-semibold text-ink hover:bg-paper';
        return (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              aria-current={current ? 'true' : undefined}
              className={`flex min-h-9 items-center rounded-[10px] py-1 pr-2.5 leading-[1.35] transition-colors ${tone}`}
            >
              {entry.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
