import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'how-it-works')!;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Sådan fungerer SKIND – Online Hudlæge på 48 timer'
      : 'How SKIND Works – Online Dermatologist in 48 Hours',
    description: isDa
      ? 'Lær hvordan SKIND fungerer: download appen, upload billeder og få normalt svar fra læger med dansk autorisation inden 48 timer.'
      : 'Learn how SKIND works: download the app, upload photos and usually get an answer from doctors with Danish authorisation within 48 hours.',
    keywords: isDa
      ? 'online hudlæge, teledermatologi, hudlæge online, 48-timers diagnose'
      : 'online dermatologist, teledermatology, 48 hour diagnosis',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/how-it-works/`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/faq/how-it-works/',
        da: 'https://www.skinchange.dk/da/faq/how-it-works/',
        en: 'https://www.skinchange.dk/en/faq/how-it-works/',
      },
    },
  };
}

export default function HowItWorksPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
