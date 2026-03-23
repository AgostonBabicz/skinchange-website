import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Image from 'next/image';
import Script from 'next/script';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Download appen | SKIND' : 'Download the app | SKIND',
    description: isDa
      ? 'Download SKIND-appen nu og få professionel hudlægehjælp på under 48 timer. Certificerede dermatologer · MitID-verificeret · Kun 298 kr.'
      : 'Download SKIND now and get professional dermatologist help in under 48 hours. Certified dermatologists · MitID verified · Only 298 DKK.',
    keywords: isDa
      ? ['hudlæge app', 'modermærke app', 'tjek modermærke app', 'hudkræft app', 'hudlæge download']
      : ['dermatologist app', 'skin check app', 'skin cancer app', 'download dermatologist'],
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/download`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/download',
        da: 'https://www.skinchange.dk/da/download',
        en: 'https://www.skinchange.dk/en/download',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: isDa ? 'da_DK' : 'en_US',
      url: `https://www.skinchange.dk/${params.lang}/download`,
      title: isDa ? 'Download SKIND appen | SKIND' : 'Download the SKIND app | SKIND',
      description: isDa
        ? 'Få professionel dermatologisk hjælp direkte på din telefon. Kun 298 kr.'
        : 'Get professional dermatological help directly on your phone. Only 298 DKK.',
      images: [
        {
          url: 'https://www.skinchange.dk/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'SKIND App',
        },
      ],
    },
  };
}

export default function DownloadPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SKIND',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'MedicalApplication',
    offers: {
      '@type': 'Offer',
      price: isDa ? '298' : '40',
      priceCurrency: isDa ? 'DKK' : 'EUR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '312',
      bestRating: '5',
      worstRating: '1',
    },
    description: isDa
      ? 'Professionel online hudlæge. Diagnose af akne, eksem, psoriasis og hudkræft inden for 48 timer.'
      : 'Professional online dermatologist. Diagnosis of acne, eczema, psoriasis and skin cancer within 48 hours.',
    url: `https://www.skinchange.dk/${lang}/download`,
    screenshot: 'https://www.skinchange.dk/Download_page_mockup.png',
  };

  return (
    <>
      {/* AppLinks — enables "Open in app" deep link buttons in Google mobile SERPs */}
      <Script
        id="apple-itunes-app"
        dangerouslySetInnerHTML={{
          __html: `<meta name="apple-itunes-app" content="app-id=6479356965, app-argument=https://www.skinchange.dk/${lang}/download">`,
        }}
      />
      <Script
        id="android-app-links"
        dangerouslySetInnerHTML={{
          __html: `<link rel="alternate" href="android-app://com.skinchange.ai.patientapp/https/www.skinchange.dk/${lang}/download">`,
        }}
      />

      {/* SoftwareApplication structured data */}
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <main className="min-h-screen bg-[#1a237e]">
        <Navigation lang={lang} />

        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
                {isDa ? 'Download SKIND' : 'Download SKIND'}
              </h1>
              <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                {isDa
                  ? 'Få adgang til professionel dermatologisk hjælp direkte på din telefon. Tilgængelig på både iPhone og Android.'
                  : 'Get access to professional dermatological help directly on your phone. Available on both iPhone and Android.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* App Store */}
                <a
                  href="https://apps.apple.com/us/app/skind/id6479356965"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-20 w-52 hover:scale-105 transition-transform"
                >
                  <Image
                    src="/App_store_download.svg"
                    alt="Download on App Store"
                    fill
                    className="object-contain"
                  />
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.skinchange.ai.patientapp&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-20 w-52 hover:scale-105 transition-transform"
                >
                  <Image
                    src="/Play_store_download.png"
                    alt="Get it on Google Play"
                    fill
                    className="object-contain"
                  />
                </a>
              </div>

              {/* Features */}
              <div className="mt-16 grid grid-cols-2 gap-6 max-w-lg mx-auto">
                {[
                  isDa ? 'Sikker MitID login' : 'Secure MitID login',
                  isDa ? '48 timers diagnose' : '48 hour diagnosis',
                  isDa ? 'Certificerede hudlæger' : 'Certified dermatologists',
                  isDa ? 'Behandling inden for 48 timer' : 'Treatment within 48 hours',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center justify-center text-white/80">
                    <svg className="w-5 h-5 text-[#00e5ff] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
    </>
  );
}
