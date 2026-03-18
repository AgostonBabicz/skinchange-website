import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'FAQ: Ofte Stillede Spørgsmål om Online Hudlæge | SKIND' : 'FAQ: Frequently Asked Questions About Online Dermatology | SKIND',
    description: isDa 
      ? 'Få svar på alt om online hudlæge konsultation hos SKIND. Pris, sikkerhed, behandling af akne, eksem, psoriasis og meget mere. Diagnose inden for 48 timer.' 
      : 'Get answers about online dermatologist consultations at SKIND. Pricing, security, treatment for acne, eczema, psoriasis and more. Diagnosis within 48 hours.',
    keywords: isDa 
      ? 'online hudlæge, teledermatologi, hudlæge online, akne behandling, eksem behandling, psoriasis behandling, hudkræft tjek, modermærker, recept online'
      : 'online dermatologist, teledermatology, acne treatment, eczema treatment, psoriasis treatment, skin cancer check, online prescription',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/faq',
        da: 'https://www.skinchange.dk/da/faq',
        en: 'https://www.skinchange.dk/en/faq',
      },
    },
  };
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
      url: `https://www.skinchange.dk/${lang}/faq/${cat.slug}`
    }))
  };

  return (
    <>
      <Script
        id="faq-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Navigation lang={lang} />

        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display text-center">
              {isDa ? 'Ofte stillede spørgsmål' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-600 text-center mb-16">
              {isDa
                ? 'Find svar på de mest almindelige spørgsmål om SKIND'
                : 'Find answers to the most common questions about SKIND'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqCategories.map(cat => {
                const title = isDa ? cat.titleDa : cat.titleEn;
                const description = isDa ? cat.descriptionDa : cat.descriptionEn;
                const subGroupCount = cat.subGroups
                  ? cat.subGroups.reduce((sum, sg) => sum + (isDa ? sg.questions.da.length : sg.questions.en.length), 0)
                  : 0;
                const count = (isDa ? cat.questions.da.length : cat.questions.en.length) + subGroupCount;
                const countLabel = isDa
                  ? `${count} spørgsmål`
                  : `${count} question${count !== 1 ? 's' : ''}`;

                return (
                  <Link
                    key={cat.slug}
                    href={`/${lang}/faq/${cat.slug}`}
                    className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="text-5xl mb-4">{cat.icon}</div>
                    <h2 className="text-2xl font-bold text-[#1a237e] mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{countLabel}</span>
                      <span className="text-[#304ffe] text-xl group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">
                {isDa ? 'Har du flere spørgsmål?' : 'Have more questions?'}
              </p>
              <a
                href="mailto:info@skinchange.ai"
                className="inline-flex items-center justify-center bg-[#304ffe] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a237e] transition-colors"
              >
                {isDa ? 'Kontakt os' : 'Contact us'}
              </a>
            </div>
          </div>
        </section>

        <Footer lang={lang} />
      </main>
    </>
  );
}
