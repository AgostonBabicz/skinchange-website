import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'how-it-works')!;

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Sådan fungerer SKIND – Online Hudlæge på 48 timer'
      : 'How SKIND Works – Online Dermatologist in 48 Hours',
    description: isDa
      ? 'Lær hvordan SKIND fungerer: download appen, upload billeder og få svar fra en certificeret hudlæge inden for 48 timer.'
      : 'Learn how SKIND works: download the app, upload photos and get an answer from a certified dermatologist within 48 hours.',
    keywords: isDa
      ? 'online hudlæge, teledermatologi, hudlæge online, 48 timer diagnose'
      : 'online dermatologist, teledermatology, 48 hour diagnosis',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/how-it-works`,
    },
  };
}

export default function HowItWorksPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
