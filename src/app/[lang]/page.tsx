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
      ? 'Online Hudlæge | Få Diagnose inden for 48 Timer | SkinChange' 
      : 'Online Dermatologist | Get Diagnosis Within 48 Hours | SkinChange',
    description: isDa 
      ? 'Konsultation med certificerede hudlæger online. Behandling af akne, eksem, psoriasis, rosacea og hudkræft. Diagnose inden for 48 timer. Kun 298 kr. MitID verificeret.' 
      : 'Consultation with certified dermatologists online. Treatment for acne, eczema, psoriasis, rosacea and skin cancer. Diagnosis within 48 hours. Only €40. MitID verified.',
    keywords: isDa 
      ? 'online hudlæge, teledermatologi, hudlæge online, akne behandling, eksem behandling, psoriasis behandling, hudkræft tjek, modermærker, online recept'
      : 'online dermatologist, teledermatology, acne treatment, eczema treatment, psoriasis treatment, skin cancer check, online prescription',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}`,
    },
  };
}

export default function HomePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  // Service Schema for SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'SkinChange',
    description: isDa 
      ? 'Online hudlæge konsultation med certificerede dermatologer'
      : 'Online dermatologist consultation with certified dermatologists',
    url: 'https://www.skinchange.dk',
    logo: 'https://www.skinchange.dk/skinchange-website/Logo_without_background.svg',
    image: 'https://www.skinchange.dk/skinchange-website/Download_page_mockup.png',
    telephone: '+45-XXX-XXXX',
    email: 'info@skinchange.ai',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hindbærhaven 48',
      addressLocality: 'Vejle',
      postalCode: '7120',
      addressCountry: 'DK'
    },
    medicalSpecialty: 'Dermatology',
    priceRange: isDa ? '298 DKK' : '€40',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '15000'
    }
  };

  // Offer Schema for pricing
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
      '@type': 'MedicalBusiness',
      name: 'SkinChange'
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
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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

