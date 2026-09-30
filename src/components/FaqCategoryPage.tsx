import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Accordion, { type AccordionItem } from '@/components/Accordion';
import {
  ArrowLeft,
  ArrowRight,
  CardIcon,
  ChevronRight,
  LockIcon,
  MagnifierIcon,
  MailIcon,
  PhoneIcon,
  QuestionIcon,
  RouteIcon,
} from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';
import { FaqCategory, FaqQuestion, faqCategories } from '@/lib/faq-data';

interface Props {
  category: FaqCategory;
  lang: Language;
}

// Stroke icon per FAQ category (shared with the FAQ overview page).
export const FAQ_ICONS: Record<string, typeof RouteIcon> = {
  'how-it-works': RouteIcon,
  pricing: CardIcon,
  'privacy-security': LockIcon,
  app: PhoneIcon,
  contact: MailIcon,
  diseases: MagnifierIcon,
};

// Number of questions in a category: its own questions plus those of all its sub-groups.
export function faqQuestionCount(cat: FaqCategory, lang: Language): number {
  const isDa = lang === 'da';
  const subGroupCount = cat.subGroups
    ? cat.subGroups.reduce((sum, sg) => sum + (isDa ? sg.questions.da.length : sg.questions.en.length), 0)
    : 0;
  return (isDa ? cat.questions.da.length : cat.questions.en.length) + subGroupCount;
}

export function faqCountLabel(count: number, lang: Language): string {
  return lang === 'da' ? `${count} spørgsmål` : `${count} question${count !== 1 ? 's' : ''}`;
}

export default function FaqCategoryPage({ category, lang }: Props) {
  const isDa = lang === 'da';
  const title = isDa ? category.titleDa : category.titleEn;
  const topLevelQuestions = isDa ? category.questions.da : category.questions.en;
  const hasSubGroups = category.subGroups && category.subGroups.length > 0;

  // Build all questions for JSON-LD schema (top-level + all sub-group questions)
  const allQuestions: FaqQuestion[] = [
    ...topLevelQuestions,
    ...(category.subGroups ?? []).flatMap(sg => isDa ? sg.questions.da : sg.questions.en),
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'FAQ',
        item: `https://www.skinchange.dk/${lang}/faq/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: `https://www.skinchange.dk/${lang}/faq/${category.slug}/`,
      },
    ],
  };

  const Icon = FAQ_ICONS[category.slug] ?? QuestionIcon;
  const categoriesLabel = isDa ? 'Kategorier' : 'Categories';
  const backLabel = isDa ? 'Tilbage til FAQ' : 'Back to FAQ';

  const questionItems: AccordionItem[] = topLevelQuestions.map((q) => ({ title: q.question, content: q.answer }));

  // Sub-groups (e.g. one per disease): each group is a titled row that opens its own question accordion.
  const groupItems: AccordionItem[] = (category.subGroups ?? []).map((sg) => {
    const sgQuestions = isDa ? sg.questions.da : sg.questions.en;
    return {
      title: isDa ? sg.nameDa : sg.nameEn,
      meta: faqCountLabel(sgQuestions.length, lang),
      content: (
        <Accordion
          variant="nested"
          headingLevel={3}
          items={sgQuestions.map((q) => ({ title: q.question, content: q.answer }))}
        />
      ),
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-paper">
        <Navigation lang={lang} />

        <nav
          aria-label={isDa ? 'Brødkrumme' : 'Breadcrumb'}
          className="mx-auto flex max-w-page items-center gap-2 px-5 pt-3 text-[14px] text-muted md:px-10 lg:gap-2.5 lg:pt-7 lg:text-[15px] xl:px-20"
        >
          <Link
            href={`/${lang}/faq`}
            className="flex min-h-11 items-center text-body underline underline-offset-4 transition-colors hover:text-ink lg:min-h-0"
          >
            FAQ
          </Link>
          <ChevronRight className="size-[13px] shrink-0 lg:size-3.5" />
          <span aria-current="page" className="font-semibold text-ink">
            {title}
          </span>
        </nav>

        <div className="mx-auto max-w-page pb-[72px] lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:px-10 lg:pb-32 lg:pt-10 xl:px-20">
          {/* Category list: sidebar card from lg */}
          <nav
            aria-label={categoriesLabel}
            className="hidden lg:sticky lg:top-28 lg:col-span-3 lg:flex lg:flex-col lg:gap-1 lg:rounded-[28px] lg:border lg:border-line lg:bg-white lg:p-3"
          >
            {faqCategories.map((cat) => {
              const current = cat.slug === category.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/${lang}/faq/${cat.slug}`}
                  aria-current={current ? 'page' : undefined}
                  className={`flex min-h-12 items-center justify-between gap-2 rounded-2xl px-3.5 text-[15px] transition-colors ${
                    current ? 'bg-ink font-semibold text-white' : 'font-medium text-ink hover:bg-paper'
                  }`}
                >
                  {isDa ? cat.titleDa : cat.titleEn}
                  <span className={`text-[13px] ${current ? 'text-signal' : 'text-muted'}`}>
                    {faqQuestionCount(cat, lang)}
                  </span>
                </Link>
              );
            })}
            <Link
              href={`/${lang}/faq`}
              className="mt-2 flex min-h-12 items-center gap-2 border-t border-line-soft px-3.5 text-[15px] font-semibold text-brand transition-colors hover:text-brand-ink"
            >
              <ArrowLeft size={16} className="shrink-0" />
              {backLabel}
            </Link>
          </nav>

          <div className="lg:col-span-8 lg:col-start-5">
            {/* Header */}
            <header className="flex animate-fokus flex-col items-start gap-3 px-5 pb-5 pt-2 md:px-10 lg:gap-4 lg:p-0">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-tint text-brand lg:size-14 lg:rounded-[18px]">
                <Icon strokeWidth={1.8} className="size-6 lg:size-7" />
              </span>
              <h1 className="font-display text-[36px] font-extrabold leading-[1.02] tracking-[-0.045em] lg:mt-1 lg:text-[56px] lg:leading-[0.98] xl:text-[64px]">
                {title}
              </h1>
              <p className="text-[17px] leading-[1.5] text-body lg:text-[20px]">
                {isDa ? category.descriptionDa : category.descriptionEn}
              </p>
            </header>

            {/* Category chips: small screens */}
            <nav
              aria-label={categoriesLabel}
              className="no-scrollbar -mt-2 flex gap-2 overflow-x-auto px-5 py-2 md:px-10 lg:hidden"
            >
              {faqCategories.map((cat) => {
                const current = cat.slug === category.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/${lang}/faq/${cat.slug}`}
                    aria-current={current ? 'page' : undefined}
                    className={`flex h-11 shrink-0 items-center whitespace-nowrap rounded-full px-4 text-[14px] transition-colors ${
                      current
                        ? 'bg-ink font-semibold text-white'
                        : 'border border-line bg-white font-medium text-ink hover:border-line-strong'
                    }`}
                  >
                    {isDa ? cat.titleDa : cat.titleEn}
                  </Link>
                );
              })}
            </nav>

            {/* Questions */}
            <div className="px-4 pt-4 md:px-10 lg:mt-10 lg:p-0">
              <div className="flex flex-col gap-4 lg:gap-10">
                {questionItems.length > 0 && <Accordion items={questionItems} />}
                {hasSubGroups && <Accordion variant="group" multiple items={groupItems} />}
              </div>
              <Link
                href={`/${lang}/faq`}
                className="mt-3 flex min-h-12 items-center gap-2 px-1 text-[15px] font-semibold text-brand transition-colors hover:text-brand-ink lg:hidden"
              >
                <ArrowLeft size={16} className="shrink-0" />
                {backLabel}
              </Link>
            </div>

            {/* Contact CTA */}
            <div className="px-4 pt-9 md:px-10 lg:mt-14 lg:p-0">
              <div className="flex flex-col gap-4 rounded-[28px] bg-brand-tint px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-10 lg:py-9">
                <h2 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[32px]">
                  {isDa ? 'Har du flere spørgsmål?' : 'Have more questions?'}
                </h2>
                <Link
                  href={`/${lang}/contact`}
                  className="group flex h-[54px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-brand px-[26px] text-[17px] font-semibold text-white shadow-cta transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-hover hover:shadow-cta-hover active:scale-[0.98]"
                >
                  {isDa ? 'Kontakt os' : 'Contact us'}
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-[3px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer lang={lang} />
      </main>
    </>
  );
}
