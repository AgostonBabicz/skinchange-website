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
      ? 'Certificerede dermatologer online. Få diagnose og behandlingsplan for akne, eksem, psoriasis og hudkræft inden for 48 timer. Kun 298 kr. · MitID verificeret.'
      : 'Certified dermatologists online. Get diagnosis and treatment plan for acne, eczema, psoriasis and skin cancer within 48 hours. Only 298 DKK. · MitID verified.',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isDa ? 'Hvad kan SKIND hjælpe med?' : 'What can SKIND help with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'SKIND hjælper med en bred vifte af hudproblemer, herunder akne, eksem, psoriasis, rosacea, forkølelsessår, kønsvorter og mistanke om hudkræft eller modermærkeforandringer.'
            : 'SKIND helps with a wide range of skin problems, including acne, eczema, psoriasis, rosacea, cold sores, genital warts, and suspected skin cancer or mole changes.',
        }
      },
      {
        '@type': 'Question',
        name: isDa ? 'Hvor lang tid tager det at få en diagnose?' : 'How long does it take to get a diagnosis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'Du modtager en diagnose og behandlingsplan inden for 48 timer efter at have uploadet dine billeder og betalt konsultationen.'
            : 'You receive a diagnosis and treatment plan within 48 hours of uploading your photos and paying for the consultation.',
        }
      },
      {
        '@type': 'Question',
        name: isDa ? 'Er SKIND sikker at bruge?' : 'Is SKIND safe to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'Ja. SKIND er MitID-verificeret, og alle hudlæger er certificerede Speciallæger i hudsygdomme. Dine billeder er krypteret og behandles fortroligt.'
            : 'Yes. SKIND is MitID verified, and all dermatologists are certified Specialists in Skin Diseases. Your photos are encrypted and treated confidentially.',
        }
      },
      {
        '@type': 'Question',
        name: isDa ? 'Hvad koster en konsultation?' : 'How much does a consultation cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'En konsultation koster 298 kr. Dette inkluderer diagnose, behandlingsplan og opfølgning.'
            : 'A consultation costs 298 DKK. This includes diagnosis, treatment plan and follow-up.',
        }
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

