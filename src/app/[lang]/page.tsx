import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import PeterSection from '@/components/PeterSection';
import PartnersSection from '@/components/PartnersSection';
import UserGuideSection from '@/components/UserGuideSection';
import FeedbackSection from '@/components/FeedbackSection';
import DiseasesSection from '@/components/DiseasesSection';
import AvailabilitySection from '@/components/AvailabilitySection';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Script from 'next/script';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa 
      ? 'Online Hudlæge | Få Diagnose inden for 48 Timer | SKIND' 
      : 'Online Dermatologist | Get Diagnosis Within 48 Hours | SKIND',
    description: isDa 
      ? 'Certificerede hudlæger online. Diagnose af akne, eksem, psoriasis og hudkræft inden for 48 timer. Kun 298 kr. MitID verificeret.' 
      : 'Certified dermatologists online. Diagnosis for acne, eczema, psoriasis and skin cancer within 48 hours. Only €40. MitID verified.',
    keywords: isDa 
      ? 'online hudlæge, teledermatologi, hudlæge online, akne behandling, eksem behandling, psoriasis behandling, hudkræft tjek, modermærker, online recept'
      : 'online dermatologist, teledermatology, acne treatment, eczema treatment, psoriasis treatment, skin cancer check, online prescription',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da',
        da: 'https://www.skinchange.dk/da',
        en: 'https://www.skinchange.dk/en',
      },
    },
  };
}

export default function HomePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  // Offer Schema for pricing (page-level — org schema lives in layout.tsx)
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: isDa ? 'Online Hudlæge Konsultation' : 'Online Dermatologist Consultation',
    description: isDa 
      ? 'Professionel diagnose af hudsygdomme inden for 48 timer'
      : 'Professional diagnosis of skin conditions within 48 hours',
    price: isDa ? '298' : '40',
    priceCurrency: isDa ? 'DKK' : 'EUR',
    availability: 'https://schema.org/InStock',
    offeredBy: {
      '@type': 'MedicalOrganization',
      '@id': 'https://www.skinchange.dk/#organization',
      name: 'SKIND'
    },
    serviceType: 'Telemedicine'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isDa ? 'Forside' : 'Home',
        item: `https://www.skinchange.dk/${lang}`
      }
    ]
  };

  return (
    <>
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navigation lang={lang} />
        <Hero lang={lang} />
        <Stats lang={lang} />
        <PartnersSection lang={lang} />
        <Features lang={lang} />
        <DiseasesSection lang={lang} />
        <PeterSection lang={lang} />
        <UserGuideSection lang={lang} />
        <FeedbackSection lang={lang} />
        <AvailabilitySection lang={lang} />
        <Footer lang={lang} />
      </main>
    </>
  );
}

