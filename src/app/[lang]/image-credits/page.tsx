import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { LegalDocSwitcher } from '@/components/LegalDocument';
import { ArrowUpRight } from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';
import { imageCredits, licenseUrl } from '@/lib/image-credits';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Billedkreditering | SKIND' : 'Image credits | SKIND',
    description: isDa
      ? 'Ophav og licens for fotos og illustrationer i SKINDs artikler om hudsygdomme.'
      : 'Authors and licences for the photos and illustrations in SKIND’s articles on skin conditions.',
    robots: { index: false, follow: true },
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/image-credits/`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/image-credits/',
        da: 'https://www.skinchange.dk/da/image-credits/',
        en: 'https://www.skinchange.dk/en/image-credits/',
      },
    },
  };
}

// Article, author, licence and source columns of the table (lg and up).
const COLUMNS =
  'grid grid-cols-[minmax(0,1.25fr)_minmax(0,1.6fr)_minmax(196px,0.8fr)_minmax(212px,0.8fr)]';

export default function ImageCreditsPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';
  // Entries are keyed by the image path, which also serves as the thumbnail.
  const rows = Object.entries(imageCredits).sort(([, a], [, b]) =>
    (isDa ? a.labelDa : a.labelEn).localeCompare(isDa ? b.labelDa : b.labelEn, lang),
  );
  const title = isDa ? 'Billedkreditering' : 'Image credits';
  const publicDomain = isDa ? 'Offentligt domæne' : 'Public domain';
  const headers = isDa ? ['Artikel', 'Ophav', 'Licens', 'Kilde'] : ['Article', 'Author', 'Licence', 'Source'];

  return (
    <main className="min-h-screen bg-paper">
      <Navigation lang={lang} />

      <header className="mx-auto flex max-w-page animate-fokus flex-col gap-3 px-5 pb-5 pt-4 md:px-10 lg:grid lg:animate-none lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:gap-y-0 lg:pb-14 lg:pt-12 xl:px-20">
        {/* Title and switcher on the left from lg; on small screens the switcher moves below the intro. */}
        <div className="contents lg:col-span-6 lg:flex lg:animate-fokus lg:flex-col lg:gap-5">
          <h1 className="font-display text-[36px] font-extrabold leading-none tracking-[-0.05em] min-[360px]:text-[40px] lg:text-[64px] lg:leading-[0.92] xl:text-[80px] min-[1440px]:text-[88px]">
            {title}
          </h1>
          <LegalDocSwitcher
            lang={lang}
            current="credits"
            compact
            className="order-last -mb-2 -mt-1 py-2 lg:order-none lg:m-0 lg:self-start lg:p-1"
          />
        </div>
        <div className="contents lg:col-span-5 lg:col-start-8 lg:flex lg:animate-fokus lg:flex-col lg:gap-3.5 lg:[animation-delay:100ms]">
          <p className="text-base leading-[1.6] text-body lg:text-[17px]">
            {isDa
              ? 'Fotos og illustrationer i vores artikler om hudsygdomme stammer fra Wikimedia Commons og bruges i henhold til deres licenser. Billeder under Creative Commons-licens er beskåret og nedskaleret til hjemmesiden. Billeder i offentligt domæne kræver ingen kreditering, men vi angiver ophavet af hensyn til gennemsigtighed.'
              : 'The photos and illustrations in our articles on skin conditions come from Wikimedia Commons and are used under their licences. Images under a Creative Commons licence have been cropped and resized for the website. Public-domain images need no credit, but we list their origin for transparency.'}
          </p>
          <p className="text-base leading-[1.6] text-body lg:text-[17px]">
            {isDa ? 'Spørgsmål om et billede? Skriv til ' : 'Questions about an image? Write to '}
            <a
              href="mailto:info@skinchange.ai"
              className="text-brand underline underline-offset-[3px] transition-colors hover:text-brand-ink"
            >
              info@skinchange.ai
            </a>
            .
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-page px-4 pb-[72px] md:px-10 lg:pb-32 xl:px-20">
        {/* Table from lg */}
        <div className="hidden overflow-hidden rounded-[28px] border border-line bg-white lg:block">
          <div role="table" aria-label={title} className="flex flex-col text-[15px]">
            <div role="rowgroup">
              <div role="row" className={`${COLUMNS} bg-ink text-white`}>
                {headers.map((header) => (
                  <span
                    key={header}
                    role="columnheader"
                    className="px-6 py-[18px] text-[13px] font-semibold uppercase tracking-[0.08em]"
                  >
                    {header}
                  </span>
                ))}
              </div>
            </div>
            <div role="rowgroup">
              {rows.map(([image, c]) => {
                const license = licenseUrl(c.license, lang);
                return (
                  <div
                    key={c.slug}
                    role="row"
                    className={`${COLUMNS} items-center border-t border-line-soft transition-colors hover:bg-paper`}
                  >
                    <div role="cell" className="px-6 py-2.5">
                      <Link href={`/${lang}/blog/${c.slug}`} className="group flex items-center gap-3.5 font-semibold text-ink">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt=""
                          width={44}
                          height={44}
                          loading="lazy"
                          decoding="async"
                          className="block size-11 shrink-0 rounded-xl object-cover"
                        />
                        <span className="underline decoration-line-strong underline-offset-4 transition-colors group-hover:decoration-ink">
                          {isDa ? c.labelDa : c.labelEn}
                        </span>
                      </Link>
                    </div>
                    <div role="cell" className="px-6 py-2.5 leading-[1.45] text-body">
                      {c.author}
                    </div>
                    <div role="cell" className="px-6 py-2.5">
                      {license ? (
                        <a
                          href={license}
                          target="_blank"
                          rel="license noopener noreferrer"
                          className="inline-flex h-7 items-center whitespace-nowrap rounded-full bg-brand-tint px-3 text-[13px] font-semibold text-brand-ink transition-colors hover:text-brand"
                        >
                          {c.license}
                        </a>
                      ) : (
                        <span className="inline-flex h-7 items-center whitespace-nowrap rounded-full bg-paper-deep px-3 text-[13px] font-semibold text-body">
                          {publicDomain}
                        </span>
                      )}
                    </div>
                    <div role="cell" className="px-6 py-2.5">
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-brand underline underline-offset-[3px] transition-colors hover:text-brand-ink"
                      >
                        Wikimedia Commons
                        <ArrowUpRight size={14} className="shrink-0" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stacked list on small screens */}
        <ul aria-label={title} className="flex flex-col rounded-3xl border border-line bg-white px-4 py-1 lg:hidden">
          {rows.map(([image, c]) => {
            const license = licenseUrl(c.license, lang);
            return (
              <li key={c.slug} className="flex items-start gap-3 border-t border-line-soft py-3.5 first:border-t-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="block size-12 shrink-0 rounded-[14px] object-cover"
                />
                <div className="flex min-w-0 grow flex-col gap-[3px]">
                  <Link
                    href={`/${lang}/blog/${c.slug}`}
                    className="self-start text-base font-semibold text-ink underline decoration-line-strong underline-offset-4"
                  >
                    {isDa ? c.labelDa : c.labelEn}
                  </Link>
                  <span className="text-[13px] leading-[1.45] text-body">{c.author}</span>
                  <div className="mt-[5px] flex flex-wrap items-center gap-3">
                    {license ? (
                      <a
                        href={license}
                        target="_blank"
                        rel="license noopener noreferrer"
                        className="flex h-[26px] items-center whitespace-nowrap rounded-full bg-brand-tint px-2.5 text-[12px] font-semibold text-brand-ink"
                      >
                        {c.license}
                      </a>
                    ) : (
                      <span className="flex h-[26px] items-center whitespace-nowrap rounded-full bg-paper-deep px-2.5 text-[12px] font-semibold text-body">
                        {publicDomain}
                      </span>
                    )}
                    <a
                      href={c.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-brand underline underline-offset-[3px]"
                    >
                      Wikimedia Commons
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
