import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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

export default function ImageCreditsPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';
  const rows = Object.values(imageCredits).sort((a, b) =>
    (isDa ? a.labelDa : a.labelEn).localeCompare(isDa ? b.labelDa : b.labelEn, lang),
  );
  const linkClass = 'text-primary underline underline-offset-2 hover:text-primary-900';

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
            {isDa ? 'Billedkreditering' : 'Image credits'}
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            {isDa
              ? 'Fotos og illustrationer i vores artikler om hudsygdomme stammer fra Wikimedia Commons og bruges i henhold til deres licenser. Billeder under Creative Commons-licens er beskåret og nedskaleret til hjemmesiden. Billeder i offentligt domæne kræver ingen kreditering, men vi angiver ophavet af hensyn til gennemsigtighed.'
              : 'The photos and illustrations in our articles on skin conditions come from Wikimedia Commons and are used under their licences. Images under a Creative Commons licence have been cropped and resized for the website. Public-domain images need no credit, but we list their origin for transparency.'}
          </p>
          <p className="text-gray-600 mb-12">
            {isDa ? 'Spørgsmål om et billede? Skriv til ' : 'Questions about an image? Write to '}
            <a href="mailto:info@skinchange.ai" className={linkClass}>info@skinchange.ai</a>.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 text-primary-900">
                  <th className="py-3 pr-4 font-semibold">{isDa ? 'Artikel' : 'Article'}</th>
                  <th className="py-3 pr-4 font-semibold">{isDa ? 'Ophav' : 'Author'}</th>
                  <th className="py-3 pr-4 font-semibold">{isDa ? 'Licens' : 'Licence'}</th>
                  <th className="py-3 font-semibold">{isDa ? 'Kilde' : 'Source'}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {rows.map((c) => {
                  const license = licenseUrl(c.license, lang);
                  return (
                    <tr key={c.slug} className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4">
                        <Link href={`/${lang}/blog/${c.slug}`} className={linkClass}>
                          {isDa ? c.labelDa : c.labelEn}
                        </Link>
                      </td>
                      <td className="py-3 pr-4">{c.author}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">
                        {license ? (
                          <a href={license} target="_blank" rel="license noopener noreferrer" className={linkClass}>
                            {c.license}
                          </a>
                        ) : isDa ? (
                          'Offentligt domæne'
                        ) : (
                          'Public domain'
                        )}
                      </td>
                      <td className="py-3">
                        <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          Wikimedia Commons
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
