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
            ? 'SKIND hjælper med en bred vifte af hudproblemer, herunder akne, eksem, psoriasis, rosacea, forkølelsessår og kønsvorter. Vi vurderer også mistænkelige modermærker og hudforandringer og henviser videre ved behov.'
            : 'SKIND helps with a wide range of skin problems, including acne, eczema, psoriasis, rosacea, cold sores and genital warts. We also assess suspicious moles and skin changes and refer you onward when needed.',
        }
      },
      {
        '@type': 'Question',
        name: isDa ? 'Hvor lang tid tager det at få svar?' : 'How long does it take to get a response?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'Du modtager normalt en vurdering og behandlingsplan inden for 48 timer, efter du har indsendt og betalt din sag. De fleste sager besvares inden for 24 timer.'
            : 'You normally receive an assessment and treatment plan within 48 hours of submitting and paying for your case. Most cases are answered within 24 hours.',
        }
      },
      {
        '@type': 'Question',
        name: isDa ? 'Er SKIND sikker at bruge?' : 'Is SKIND safe to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'Ja. SKIND er MitID-verificeret, og alle vores læger er speciallæger i hud- og kønssygdomme. Dine billeder er krypterede og behandles fortroligt.'
            : 'Yes. SKIND is MitID verified, and all our doctors are authorised specialists in dermatology and venereology. Your photos are encrypted and treated confidentially.',
        }
      },
      {
        '@type': 'Question',
        name: isDa ? 'Hvad koster en konsultation?' : 'How much does a consultation cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isDa
            ? 'En konsultation koster 298 kr. og dækker én hudlidelse. Prisen inkluderer vurdering, behandlingsplan og opfølgende spørgsmål om den pågældende sag.'
            : 'A consultation costs 298 DKK and covers one skin condition. The price includes the assessment, a treatment plan and follow-up questions about that case.',
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

