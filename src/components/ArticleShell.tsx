import type { ReactNode } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageCredit from '@/components/ImageCredit';
import ArticleToc from '@/components/ArticleToc';
import { ArrowRight, ChevronRight } from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';
import '@/styles/article.css';

interface ArticleShellProps {
  lang: Language;
  crumb: ReactNode;
  category: ReactNode;
  date: ReactNode;
  readTime: ReactNode;
  title: ReactNode;
  image: { src: string; alt: string };
  // The article's intro and body; styled by src/styles/article.css
  children: ReactNode;
}

// ArticleToc builds the table of contents from the h2 headings inside this element.
const CONTENT_ID = 'article-content';

// Page chrome for every blog article: header with breadcrumb, meta, title, author and hero image,
// then the article with its table of contents (a left rail on desktop, a collapsible card on phones).
export default function ArticleShell({ lang, crumb, category, date, readTime, title, image, children }: ArticleShellProps) {
  const isDa = lang === 'da';
  const crumbLink = 'flex min-h-11 items-center text-body underline underline-offset-4 transition-colors hover:text-ink lg:min-h-0';

  return (
    <main className="min-h-screen bg-paper">
      <Navigation lang={lang} />

      <header className="mx-auto flex max-w-page flex-col gap-3.5 px-5 pt-2 md:px-10 lg:gap-[22px] lg:pt-8 xl:px-20">
        <nav aria-label={isDa ? 'Brødkrumme' : 'Breadcrumb'} className="flex items-center gap-2 text-sm text-muted lg:gap-2.5 lg:text-[15px]">
          <Link href={`/${lang}`} className={crumbLink}>
            {isDa ? 'Forside' : 'Home'}
          </Link>
          <ChevronRight size={13} className="shrink-0 lg:h-3.5 lg:w-3.5" />
          <Link href={`/${lang}/blog`} className={crumbLink}>
            Blog
          </Link>
          <ChevronRight size={13} className="shrink-0 lg:h-3.5 lg:w-3.5" />
          <span aria-current="page" className="font-semibold text-ink">
            {crumb}
          </span>
        </nav>

        <div className="flex animate-fokus flex-wrap items-center gap-2 text-[13px] text-muted lg:gap-3 lg:text-[15px]">
          <span className="flex h-[26px] items-center rounded-full bg-brand-tint px-2.5 font-semibold text-brand-ink lg:h-[30px] lg:px-3 lg:text-sm">
            {category}
          </span>
          <span>{date}</span>
          <span aria-hidden="true">•</span>
          <span>{readTime}</span>
        </div>

        <h1 className="animate-fokus font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink [animation-delay:70ms] md:text-[44px] lg:max-w-[1060px] lg:text-[56px] lg:leading-[1.02] lg:tracking-[-0.045em] lg:[animation-delay:80ms] xl:text-[64px]">
          {title}
        </h1>

        <div className="flex items-center gap-3 lg:animate-fokus lg:[animation-delay:140ms]">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-signal lg:h-11 lg:w-11 lg:text-[15px]"
          >
            SC
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="text-[15px] font-bold text-ink lg:text-base">SkinChange.AI</strong>
            <span className="text-[13px] text-muted lg:text-sm">{isDa ? 'Medicinsk redaktion' : 'Medical editorial team'}</span>
          </span>
        </div>
      </header>

      <figure className="mx-auto mt-[22px] max-w-page animate-fokus px-3 [animation-delay:140ms] md:px-10 lg:mt-12 lg:[animation-delay:200ms] xl:px-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          width={1600}
          height={900}
          fetchPriority="high"
          className="block h-60 w-full rounded-[28px] bg-paper-deep object-cover sm:h-[320px] md:h-[400px] lg:h-[520px] lg:rounded-[36px] xl:h-[600px]"
        />
        <ImageCredit src={image.src} lang={lang} />
      </figure>

      <div className="mx-auto max-w-page px-4 pb-[72px] pt-6 md:px-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pb-32 lg:pt-[72px] xl:px-20">
        <aside className="md:max-w-[720px] lg:col-span-4 lg:max-w-none lg:self-stretch xl:col-span-3">
          <div className="flex flex-col gap-6 lg:sticky lg:top-[112px] lg:max-h-[calc(100vh-128px)] lg:overflow-y-auto lg:overscroll-contain">
            <ArticleToc lang={lang} contentId={CONTENT_ID} />

            <div className="relative hidden shrink-0 flex-col gap-3 overflow-hidden rounded-3xl bg-ink p-6 text-white lg:flex">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[70px] -top-[70px] h-[200px] w-[200px] rounded-full border border-signal/[0.22]"
              />
              <p className="relative font-display text-xl font-bold leading-[1.2]">
                {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
              </p>
              <Link
                href={`/${lang}/download`}
                className="group relative flex h-12 items-center justify-center gap-2 rounded-full bg-white text-[15px] font-semibold text-ink transition hover:-translate-y-px active:scale-[0.98]"
              >
                {isDa ? 'Download appen' : 'Download the app'}
                <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
              </Link>
            </div>
          </div>
        </aside>

        <article
          id={CONTENT_ID}
          className="article-content px-1 pt-7 md:max-w-[720px] md:px-0 lg:col-span-7 lg:col-start-6 lg:max-w-none lg:pt-0 xl:col-start-5"
        >
          {children}
        </article>
      </div>

      <Footer lang={lang} />
    </main>
  );
}
