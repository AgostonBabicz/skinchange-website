import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FAQ_ICONS, faqCountLabel, faqQuestionCount } from '@/components/FaqCategoryPage';
import { ArrowRight, QuestionIcon } from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';
import { FaqCategory, faqCategories } from '@/lib/faq-data';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'FAQ: Ofte Stillede Spørgsmål om Online Hudlæge | SKIND' : 'FAQ: Frequently Asked Questions About Online Dermatology | SKIND',
    description: isDa
      ? 'Få svar på alt om online hudlægekonsultation hos SKIND. Pris, sikkerhed, behandling af akne, eksem, psoriasis og meget mere. Svar inden for 48 timer.'
      : 'Get answers about online dermatologist consultations at SKIND. Pricing, security, treatment for acne, eczema, psoriasis and more. Response within 48 hours.',
    keywords: isDa
      ? 'online hudlæge, teledermatologi, hudlæge online, aknebehandling, eksembehandling, psoriasisbehandling, hudkræfttjek, modermærker, recept online'
      : 'online dermatologist, teledermatology, acne treatment, eczema treatment, psoriasis treatment, skin cancer check, online prescription',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/faq/',
        da: 'https://www.skinchange.dk/da/faq/',
        en: 'https://www.skinchange.dk/en/faq/',
      },
    },
  };
}

interface TileProps {
  cat: FaqCategory;
  lang: Language;
}

// Tiles lift on hover from lg; the arrow slides along.
const tileMotion =
  'transition-[transform,box-shadow] duration-[320ms] ease-soft lg:hover:-translate-y-1 lg:hover:shadow-lift';
const arrowMotion = 'transition-transform duration-[320ms] ease-soft group-hover:translate-x-1';

function tileText(cat: FaqCategory, lang: Language) {
  const isDa = lang === 'da';
  return {
    href: `/${lang}/faq/${cat.slug}`,
    title: isDa ? cat.titleDa : cat.titleEn,
    description: isDa ? cat.descriptionDa : cat.descriptionEn,
    countLabel: faqCountLabel(faqQuestionCount(cat, lang), lang),
    Icon: FAQ_ICONS[cat.slug] ?? QuestionIcon,
  };
}

// "How it works": ink tile with cyan rings, two rows tall from lg.
function FeaturedTile({ cat, lang }: TileProps) {
  const { href, title, description, countLabel, Icon } = tileText(cat, lang);
  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-2.5 overflow-hidden rounded-[28px] bg-ink p-6 text-white lg:row-span-2 lg:gap-4 lg:rounded-[32px] lg:p-8 xl:p-10 ${tileMotion}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 size-[260px] rounded-full border border-signal/20 lg:hidden"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[140px] -right-[140px] hidden size-[480px] rounded-full border border-signal/[0.14] lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[60px] -right-[60px] hidden size-[320px] rounded-full border border-signal/[0.22] lg:block"
      />
      <span className="flex size-11 items-center justify-center rounded-[14px] bg-signal/[0.12] text-signal lg:size-14 lg:rounded-[18px]">
        <Icon strokeWidth={1.8} className="size-[22px] lg:size-7" />
      </span>
      <h2 className="mt-1 font-display text-[26px] font-bold leading-[1.1] tracking-[-0.025em] lg:mt-4 lg:text-[36px] lg:leading-none lg:tracking-[-0.035em] xl:text-[44px]">
        {title}
      </h2>
      <p className="text-[15px] leading-[1.55] text-on-ink-soft lg:text-[18px]">{description}</p>
      <span className="relative mt-1.5 flex items-center justify-between text-[15px] font-semibold lg:mt-auto lg:text-base">
        {countLabel}
        <span className={`flex size-11 items-center justify-center rounded-full bg-signal text-ink lg:size-12 ${arrowMotion}`}>
          <ArrowRight className="size-[18px] lg:size-5" />
        </span>
      </span>
    </Link>
  );
}

// White category tile: a row with the icon on the left on small screens, a tile from lg.
function CategoryTile({ cat, lang }: TileProps) {
  const { href, title, description, countLabel, Icon } = tileText(cat, lang);
  return (
    <Link
      href={href}
      className={`group flex items-start gap-4 rounded-3xl border border-line bg-white p-5 text-ink lg:flex-col lg:items-stretch lg:gap-3 lg:rounded-[32px] lg:p-8 ${tileMotion}`}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-brand-tint text-brand lg:size-12 lg:rounded-2xl">
        <Icon strokeWidth={1.8} className="size-[22px] lg:size-6" />
      </span>
      {/* The text column sits next to the icon on small screens; from lg its parts join the tile's column. */}
      <div className="flex min-w-0 grow flex-col gap-1 lg:contents">
        <h2 className="font-display text-[19px] font-bold leading-[1.2] tracking-[-0.015em] lg:mt-1 lg:text-[26px] lg:leading-[1.15] lg:tracking-[-0.02em]">
          {title}
        </h2>
        <p className="text-[14px] leading-[1.5] text-body lg:text-base lg:leading-[1.55]">{description}</p>
        <span className="mt-1.5 flex items-center justify-between text-[14px] font-semibold text-body lg:mt-auto lg:text-[15px]">
          {countLabel}
          <ArrowRight className={`size-5 shrink-0 text-brand lg:size-[22px] ${arrowMotion}`} />
        </span>
      </div>
    </Link>
  );
}

// Skin conditions: wide paper tile with the names of all sub-groups as chips.
function DiseasesTile({ cat, lang }: TileProps) {
  const { href, title, description, countLabel, Icon } = tileText(cat, lang);
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-2.5 overflow-hidden rounded-[28px] bg-paper-deep py-6 text-ink lg:col-span-3 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0 lg:rounded-[32px] lg:p-10 ${tileMotion}`}
    >
      {/* Text column from lg; on small screens its parts stack in the tile, with the count below the chips. */}
      <div className="contents lg:col-span-4 lg:flex lg:flex-col lg:gap-3">
        <span className="mx-6 flex size-11 items-center justify-center rounded-[14px] bg-white text-brand lg:mx-0 lg:size-12 lg:rounded-2xl">
          <Icon strokeWidth={1.8} className="size-[22px] lg:size-6" />
        </span>
        <h2 className="mx-6 mt-1 font-display text-[26px] font-bold leading-[1.1] tracking-[-0.025em] lg:mx-0 lg:text-[36px] lg:leading-[1.05] lg:tracking-[-0.03em]">
          {title}
        </h2>
        <p className="mx-6 text-[14px] leading-[1.5] text-body lg:mx-0 lg:text-base lg:leading-[1.55]">{description}</p>
        <span className="order-last mx-6 mt-1.5 flex items-center justify-between text-[14px] font-semibold text-body lg:order-none lg:mx-0 lg:mt-2 lg:justify-start lg:gap-3 lg:text-[15px]">
          {countLabel}
          <ArrowRight className={`size-5 shrink-0 text-brand lg:size-[22px] ${arrowMotion}`} />
        </span>
      </div>
      <div
        aria-hidden="true"
        className="no-scrollbar mt-1.5 flex gap-2 overflow-x-auto px-6 lg:col-span-7 lg:col-start-6 lg:mt-0 lg:flex-wrap lg:content-center lg:overflow-visible lg:px-0"
      >
        {(cat.subGroups ?? []).map((sg) => (
          <span
            key={sg.slug}
            className="flex h-9 shrink-0 items-center whitespace-nowrap rounded-full bg-white px-3.5 text-[14px] font-medium text-ink"
          >
            {lang === 'da' ? sg.nameDa : sg.nameEn}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function FAQPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isDa ? 'FAQ Kategorier' : 'FAQ Categories',
    itemListElement: faqCategories.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: isDa ? cat.titleDa : cat.titleEn,
      url: `https://www.skinchange.dk/${lang}/faq/${cat.slug}/`
    }))
  };

  const featured = faqCategories.find((cat) => cat.slug === 'how-it-works');
  const diseases = faqCategories.find((cat) => cat.slug === 'diseases');
  const others = faqCategories.filter((cat) => cat !== featured && cat !== diseases);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="min-h-screen bg-paper">
        <Navigation lang={lang} />

        <header className="mx-auto flex max-w-page flex-col gap-3 px-5 pb-8 pt-4 md:px-10 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:gap-y-0 lg:pb-16 lg:pt-12 xl:px-20">
          <h1 className="animate-fokus font-display text-[44px] font-extrabold leading-none tracking-[-0.05em] lg:col-span-8 lg:text-[64px] lg:leading-[0.95] xl:text-[80px]">
            {isDa ? 'Ofte stillede spørgsmål' : 'Frequently Asked Questions'}
          </h1>
          <p className="animate-fokus text-[17px] leading-[1.5] text-body [animation-delay:90ms] lg:col-span-4 lg:col-start-9 lg:text-[20px] lg:[animation-delay:100ms]">
            {isDa
              ? 'Find svar på de mest almindelige spørgsmål om SKIND'
              : 'Find answers to the most common questions about SKIND'}
          </p>
        </header>

        <nav
          aria-label={isDa ? 'Kategorier' : 'Categories'}
          className="mx-auto flex max-w-page flex-col gap-3 px-4 md:px-10 lg:grid lg:auto-rows-[minmax(250px,auto)] lg:grid-cols-3 lg:gap-6 xl:px-20"
        >
          {featured && <FeaturedTile cat={featured} lang={lang} />}
          {others.map((cat) => (
            <CategoryTile key={cat.slug} cat={cat} lang={lang} />
          ))}
          {diseases && <DiseasesTile cat={diseases} lang={lang} />}
        </nav>

        <section className="mx-auto max-w-page px-4 pb-[72px] pt-12 md:px-10 lg:pb-32 lg:pt-24 xl:px-20">
          <div className="flex flex-col gap-4 rounded-[28px] border border-line bg-white px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:rounded-[32px] lg:px-14 lg:py-11">
            <h2 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] lg:text-[40px] lg:leading-[1.05]">
              {isDa ? 'Har du flere spørgsmål?' : 'Have more questions?'}
            </h2>
            <Link
              href={`/${lang}/contact`}
              className="group flex h-[54px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-[17px] font-semibold text-white shadow-cta transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-px hover:bg-brand-hover hover:shadow-cta-hover active:scale-[0.98] lg:h-14"
            >
              {isDa ? 'Kontakt os' : 'Contact us'}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </section>

        <Footer lang={lang} />
      </main>
    </>
  );
}
