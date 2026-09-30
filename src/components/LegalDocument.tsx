import { Fragment } from 'react';
import Link from 'next/link';
import Markdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Disclosure, TocNav, type TocEntry } from '@/components/Accordion';
import { CalendarIcon } from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';

// Shared layout for the privacy policy and the terms (and the document switcher, also used on
// the image credits page). The documents are markdown; "## N. TITLE" sections become numbered
// headings, "### N.N Title" subsections white cards, and the headings feed the table of contents.

export type LegalDocKey = 'privacy' | 'terms' | 'credits';

const LEGAL_DOCS: { key: LegalDocKey; path: string; da: string; en: string }[] = [
  { key: 'privacy', path: 'privacy-policy', da: 'Privatlivspolitik', en: 'Privacy Policy' },
  { key: 'terms', path: 'terms-conditions', da: 'Vilkår & Betingelser', en: 'Terms & Conditions' },
  { key: 'credits', path: 'image-credits', da: 'Billedkreditering', en: 'Image credits' },
];

// Pills that scroll sideways on small screens and form one segmented control from lg.
// Vertical spacing is left to the caller (the scroll row needs room for focus rings).
export function LegalDocSwitcher({
  lang,
  current,
  className = '',
  compact = false,
}: {
  lang: Language;
  current: LegalDocKey;
  className?: string;
  compact?: boolean;
}) {
  const isDa = lang === 'da';
  return (
    <nav
      aria-label={isDa ? 'Juridiske dokumenter' : 'Legal documents'}
      className={`no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:-mx-10 md:px-10 lg:mx-0 lg:gap-1 lg:overflow-visible lg:rounded-full lg:border lg:border-line lg:bg-white ${className}`}
    >
      {LEGAL_DOCS.map((doc) => {
        const active = doc.key === current;
        return (
          <Link
            key={doc.key}
            href={`/${lang}/${doc.path}`}
            aria-current={active ? 'page' : undefined}
            className={`flex h-11 shrink-0 items-center whitespace-nowrap rounded-full px-4 text-[14px] font-semibold transition-colors ${
              compact ? 'lg:px-3.5 xl:px-[18px] xl:text-[15px]' : 'lg:px-5 lg:text-[15px]'
            } ${
              active
                ? 'bg-ink text-white'
                : 'border border-line bg-white text-ink hover:border-line-strong lg:border-0 lg:bg-transparent lg:hover:bg-paper'
            }`}
          >
            {isDa ? doc.da : doc.en}
          </Link>
        );
      })}
    </nav>
  );
}

/* ---------- Markdown → sections ---------- */

interface Section {
  level: 2 | 3;
  id: string;
  number: string | null;
  title: string;
  label: string;
  body: string;
}

// Words that stay in capitals when an UPPERCASE heading is set in sentence case, and names with their own casing.
const KEEP_UPPERCASE = new Set(['SKIND', 'GDPR', 'EU', 'EØS', 'EEA', 'DPO', 'CVR', 'AI']);
const PROPER_CASE: Record<string, string> = { DANISH: 'Danish', APS: 'ApS' };

function sentenceCase(text: string): string {
  if (/[a-zæøåäöüé]/.test(text)) return text; // already mixed case
  const lowered = text
    .replace(/[A-ZÆØÅÄÖÜÉ]+/g, (word) => (KEEP_UPPERCASE.has(word) ? word : PROPER_CASE[word] ?? word.toLowerCase()))
    .replace(/skinchange\.ai/gi, 'SkinChange.AI')
    .replace(/Danish health act/g, 'Danish Health Act');
  return lowered.replace(/[a-zæøåäöüé]/, (first) => first.toUpperCase());
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'oe')
    .replace(/å/g, 'aa')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Line breaks inside blockquotes (addresses) and list items are meant as real breaks; the
// Danish texts write them as soft breaks, which markdown would join into one line.
function hardenLineBreaks(markdown: string): string {
  return markdown
    .replace(/^(>.*\S) ?\n(?=>[ \t]*\S)/gm, '$1  \n')
    .replace(/^(.*\S) ?\n(?= {2,}\S)/gm, '$1  \n');
}

function parseDocument(markdown: string): { intro: string; sections: Section[] } {
  // The date is shown in the page header, so the document's own first line is dropped.
  const source = hardenLineBreaks(markdown.replace(/^(?:Sidst opdateret|Last updated):[^\n]*\n+/, ''));
  const sections: Section[] = [];
  const usedIds = new Set<string>();
  let intro = '';

  for (const line of source.split('\n')) {
    const heading = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!heading) {
      const last = sections[sections.length - 1];
      if (last) last.body += `${line}\n`;
      else intro += `${line}\n`;
      continue;
    }
    const level = heading[1].length === 2 ? 2 : 3;
    const numbered = level === 2 ? /^(\d+\.)\s+(.+)$/.exec(heading[2]) : null;
    const number = numbered ? numbered[1] : null;
    const title = sentenceCase(numbered ? numbered[2] : heading[2]);
    const label = number ? `${number} ${title}` : title;
    const base = slugify(label) || 'section';
    let id = base;
    for (let n = 2; usedIds.has(id); n += 1) id = `${base}-${n}`;
    usedIds.add(id);
    sections.push({ level, id, number, title, label, body: '' });
  }
  return { intro, sections };
}

/* ---------- Markdown rendering ---------- */

const remarkPlugins = [remarkGfm];

// react-markdown hands each renderer its syntax-tree node as a prop; it must not reach the DOM.
function withoutNode<T extends { node?: unknown }>(props: T): Omit<T, 'node'> {
  const rest = { ...props };
  delete rest.node;
  return rest;
}

// Block elements carry their own top margin; wrappers reset it on their first child.
const components: Components = {
  p: (props) => <p {...withoutNode(props)} className="mt-3 lg:mt-[14px]" />,
  strong: (props) => <strong {...withoutNode(props)} className="font-bold text-ink" />,
  a: (props) => (
    <a
      {...withoutNode(props)}
      className="break-words text-brand underline underline-offset-[3px] transition-colors hover:text-brand-ink"
    />
  ),
  ul: (props) => <ul {...withoutNode(props)} className="mt-2 flex flex-col gap-1.5 lg:mt-2.5" />,
  li: ({ children, ...props }) => (
    <li {...withoutNode(props)} className="flex gap-2.5 lg:gap-3">
      <span aria-hidden="true" className="mt-[11px] size-1.5 shrink-0 rounded-full bg-brand lg:mt-3" />
      <div className="min-w-0 [&>:first-child]:mt-0">{children}</div>
    </li>
  ),
  blockquote: (props) => (
    <blockquote
      {...withoutNode(props)}
      className="mt-4 rounded-[20px] bg-brand-tint px-5 py-4 text-ink lg:mt-5 lg:rounded-[22px] lg:px-6 lg:py-5 [&>:first-child]:mt-0"
    />
  ),
  hr: (props) => <hr {...withoutNode(props)} className="my-8 border-line-strong lg:my-10" />,
};

// For values inside definition lists: same styling, without the paragraph around the text.
const inlineComponents: Components = { ...components, p: ({ children }) => <>{children}</> };

function Prose({ markdown }: { markdown: string }) {
  return (
    <Markdown remarkPlugins={remarkPlugins} components={components}>
      {markdown}
    </Markdown>
  );
}

function Inline({ markdown }: { markdown: string }) {
  return (
    <Markdown remarkPlugins={remarkPlugins} components={inlineComponents}>
      {markdown}
    </Markdown>
  );
}

// The company's details ("- **Navn:** …", "- **CVR-nummer:** …") become a white key/value card.
const COMPANY_DETAILS = /^- \*\*(?:Navn|Name):\*\*.*(?:\n- \*\*[^*\n]+:\*\*.*)*/m;
const LABELLED_LINE = /^- \*\*([^*]+?):\*\*\s*(.*)$/;

function CompanyDetails({ block }: { block: string }) {
  const rows = block
    .split('\n')
    .map((line) => LABELLED_LINE.exec(line))
    .filter((row): row is RegExpExecArray => row !== null);
  return (
    <dl className="my-3.5 rounded-[20px] border border-line bg-white px-[18px] py-1 text-[15px] leading-[1.5] lg:my-[18px] lg:rounded-[22px] lg:px-6 lg:py-2 lg:text-base lg:leading-[1.7]">
      {rows.map((row) => (
        <div
          key={row[1]}
          className="border-t border-line-soft py-3 first:border-t-0 lg:grid lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-x-4 lg:py-2.5"
        >
          <dt className="text-[13px] font-semibold text-muted lg:text-base lg:text-ink">{row[1]}</dt>
          <dd className="mt-0.5 text-ink lg:mt-0 lg:text-ink-2">
            <Inline markdown={row[2]} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function SectionBody({ markdown }: { markdown: string }) {
  const details = COMPANY_DETAILS.exec(markdown);
  return (
    <div className="[&>:first-child]:mt-0">
      {details ? (
        <>
          <Prose markdown={markdown.slice(0, details.index)} />
          <CompanyDetails block={details[0]} />
          <Prose markdown={markdown.slice(details.index + details[0].length)} />
        </>
      ) : (
        <Prose markdown={markdown} />
      )}
    </div>
  );
}

// "**Label:** text" paragraphs of a subsection card become a label/text grid.
const LABELLED_PARAGRAPH = /^\*\*([^*]+?):\*\*\s+([\s\S]+)$/;

function CardBody({ markdown }: { markdown: string }) {
  const rows = markdown
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => LABELLED_PARAGRAPH.exec(paragraph));
  if (rows.length === 0 || rows.some((row) => row === null)) return <SectionBody markdown={markdown} />;

  return (
    <dl className="text-[15px] leading-[1.6] lg:text-base lg:leading-[1.65]">
      {(rows as RegExpExecArray[]).map((row) => (
        <div
          key={row[1]}
          className="border-t border-line-soft py-3 first:border-t-0 lg:grid lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-x-5 lg:py-3.5"
        >
          <dt className="text-[13px] font-semibold text-muted lg:text-base lg:text-ink">{row[1]}</dt>
          <dd className="mt-0.5 lg:mt-0">
            <Inline markdown={row[2]} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Page ---------- */

interface LegalDocumentProps {
  lang: Language;
  current: Exclude<LegalDocKey, 'credits'>;
  title: string;
  /** "Sidst opdateret: …" / "Last updated: …", shown as a chip under the title. */
  updated: string;
  markdown: string;
}

export default function LegalDocument({ lang, current, title, updated, markdown }: LegalDocumentProps) {
  const isDa = lang === 'da';
  const { intro, sections } = parseDocument(markdown);
  const mainSections = sections.filter((section) => section.level === 2);
  const toc: TocEntry[] = sections.map((section) => ({ id: section.id, label: section.label, level: section.level }));
  const contentsLabel = isDa ? 'Indhold' : 'Contents';
  const count = mainSections.length;
  const summary = `${contentsLabel} · ${count} ${isDa ? 'afsnit' : count === 1 ? 'section' : 'sections'}`;

  return (
    <main className="min-h-screen bg-paper">
      <Navigation lang={lang} />

      <header className="mx-auto flex max-w-page flex-col px-5 pb-4 pt-4 md:px-10 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-x-8 lg:gap-y-6 lg:pb-16 lg:pt-12 xl:px-20">
        <div className="flex animate-fokus flex-col items-start gap-3.5 lg:gap-5">
          <h1 className="font-display text-[40px] font-extrabold leading-none tracking-[-0.05em] lg:text-[72px] lg:leading-[0.92] xl:text-[88px]">
            {title}
          </h1>
          <span className="flex h-8 items-center gap-2 rounded-full border border-line bg-white px-3 text-[13px] text-body lg:h-[34px] lg:px-3.5 lg:text-[14px]">
            <CalendarIcon className="size-3.5 shrink-0 lg:size-[15px]" />
            {updated}
          </span>
        </div>
        <LegalDocSwitcher
          lang={lang}
          current={current}
          className="-mb-2 mt-3 py-2 lg:m-0 lg:animate-fokus lg:p-1 lg:[animation-delay:100ms]"
        />
      </header>

      <div className="mx-auto max-w-page pb-[72px] lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:px-10 lg:pb-32 xl:px-20">
        {/* Table of contents: collapsible card on small screens */}
        <nav aria-label={contentsLabel} className="px-4 md:px-10 lg:hidden">
          <Disclosure label={summary} className="overflow-hidden rounded-[22px] border border-line bg-white md:max-w-[760px]">
            <ol className="flex flex-col px-5 pb-3.5">
              {mainSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex min-h-11 items-center border-t border-line-soft py-2 text-[15px] leading-[1.35] text-body transition-colors hover:text-brand"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </Disclosure>
        </nav>

        {/* Table of contents: sticky card from lg */}
        <nav
          aria-label={contentsLabel}
          className="hidden lg:sticky lg:top-28 lg:col-span-4 lg:flex lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:overflow-y-auto lg:overscroll-contain lg:rounded-3xl lg:border lg:border-line lg:bg-white lg:p-5"
        >
          <span
            aria-hidden="true"
            className="px-2.5 pb-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted"
          >
            {contentsLabel}
          </span>
          <TocNav entries={toc} />
        </nav>

        <article className="px-5 pt-8 text-base leading-[1.7] text-ink-2 md:max-w-[840px] md:px-10 lg:col-span-7 lg:col-start-6 lg:max-w-none lg:px-0 lg:pt-0 lg:text-[17px] [&>:first-child]:mt-0">
          {intro.trim() && <SectionBody markdown={intro} />}
          {sections.map((section, index) =>
            section.level === 2 ? (
              <Fragment key={section.id}>
                <h2
                  id={section.id}
                  className="mb-3 mt-11 font-display text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink lg:mb-[14px] lg:mt-14 lg:text-[28px]"
                >
                  {section.number && (
                    <>
                      <span className="text-brand">{section.number}</span>{' '}
                    </>
                  )}
                  {section.title}
                </h2>
                <SectionBody markdown={section.body} />
              </Fragment>
            ) : (
              <section
                key={section.id}
                aria-labelledby={section.id}
                className={`${
                  sections[index - 1]?.level === 3 ? 'mt-3 lg:mt-4' : 'mt-6 lg:mt-7'
                } rounded-[22px] border border-line bg-white px-5 pb-2 pt-[22px] lg:rounded-3xl lg:px-[30px] lg:pb-3 lg:pt-7`}
              >
                <h3
                  id={section.id}
                  className="mb-1.5 font-display text-[19px] font-bold leading-[1.3] text-ink lg:mb-2 lg:text-[21px]"
                >
                  {section.title}
                </h3>
                <CardBody markdown={section.body} />
              </section>
            ),
          )}
        </article>
      </div>

      <Footer lang={lang} />
    </main>
  );
}
