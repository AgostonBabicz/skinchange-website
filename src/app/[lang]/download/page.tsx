import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckIcon } from '@/components/ui/Icons';
import { Language } from '@/lib/i18n';
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
    screenshot: `https://www.skinchange.dk/app/flow-${lang}.png`,
  };

  const features = [
    isDa ? 'Sikker MitID login' : 'Secure MitID login',
    isDa ? '48 timers diagnose' : '48 hour diagnosis',
    isDa ? 'Certificerede hudlæger' : 'Certified dermatologists',
    isDa ? 'Behandling inden for 48 timer' : 'Treatment within 48 hours',
  ];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <main className="min-h-screen overflow-x-clip bg-paper">
        <Navigation lang={lang} />

        <section className="mx-auto flex max-w-page flex-col gap-[22px] px-5 pb-[72px] pt-4 md:px-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:gap-y-0 lg:pb-32 lg:pt-10 xl:px-20">
          <div className="flex flex-col items-start gap-[22px] lg:col-span-6 lg:gap-7">
            <h1 className="animate-fokus font-display text-[46px] font-extrabold leading-[0.95] tracking-[-0.05em] lg:text-[72px] xl:text-[88px]">
              Download SKIND
            </h1>
            <p className="animate-fokus text-lg leading-normal text-body [animation-delay:100ms] lg:max-w-[560px] lg:text-[22px]">
              {isDa
                ? 'Få adgang til professionel dermatologisk hjælp direkte på din telefon. Tilgængelig på både iPhone og Android.'
                : 'Get access to professional dermatological help directly on your phone. Available on both iPhone and Android.'}
            </p>
            <div className="flex animate-fokus items-center gap-2.5 [animation-delay:180ms] lg:gap-3.5">
              <a
                href="https://apps.apple.com/dk/app/skind/id6479356965"
                target="_blank"
                rel="noopener noreferrer"
                className="flex transition-transform duration-150 hover:-translate-y-0.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/App_store_download.svg" alt="Download on App Store" width={180} height={60} className="block h-[50px] w-[150px] lg:h-[60px] lg:w-[180px]" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.skinchange.ai.patientapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex transition-transform duration-150 hover:-translate-y-0.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Play_store_download.png" alt="Get it on Google Play" width={202} height={60} className="block h-[50px] w-[168px] lg:h-[60px] lg:w-[202px]" />
              </a>
            </div>
            <ul className="mt-3 hidden w-full animate-fokus list-none grid-cols-2 gap-x-8 gap-y-4 border-t border-line p-0 pt-7 [animation-delay:260ms] lg:grid">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[17px] font-medium">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <CheckIcon size={16} strokeWidth={2.4} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-1.5 h-[350px] overflow-hidden rounded-[32px] bg-brand-tint lg:col-span-6 lg:mt-0 lg:h-[680px] lg:rounded-[48px]">
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/[0.12] lg:h-[900px] lg:w-[900px] lg:border-brand/10" />
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 hidden h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/[0.16] lg:block" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/app/flow-${lang}.webp`}
              alt={isDa
                ? 'De syv skærme i SKIND-appen: startskærm, fotos, placering, spørgsmål, kontaktoplysninger, betaling og diagnose'
                : 'The seven screens of the SKIND app: home, photos, location, questions, contact details, payment and diagnosis'}
              width={1200}
              height={1200}
              fetchPriority="high"
              className="absolute left-1/2 top-1/2 ml-[-170px] mt-[-170px] h-[340px] w-[340px] animate-rise-flat lg:ml-[-320px] lg:mt-[-320px] lg:h-[640px] lg:w-[640px]"
            />
          </div>

          <ul className="m-0 flex list-none flex-col rounded-3xl border border-line bg-white p-0 lg:hidden">
            {features.map((feature, i) => (
              <li key={feature} className={`flex min-h-14 items-center gap-3 px-[18px] text-base font-medium ${i > 0 ? 'border-t border-line-soft' : ''}`}>
                <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <CheckIcon size={15} strokeWidth={2.4} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <Footer lang={lang} />
      </main>
    </>
  );
}
