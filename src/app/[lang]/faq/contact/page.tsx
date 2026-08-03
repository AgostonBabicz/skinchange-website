import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'contact')!;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Kontakt & Support – SKIND Online Hudlæge'
      : 'Contact & Support – SKIND Online Dermatologist',
    description: isDa
      ? 'Kontakt SKIND support. Vi besvarer alle henvendelser hurtigst muligt på info@skinchange.ai eller +45 20 60 75 88.'
      : 'Contact SKIND support. We respond to all enquiries without undue delay at info@skinchange.ai or +45 20 60 75 88.',
    keywords: isDa
      ? 'SKIND kontakt, hudlægesupport, online hudlægehjælp'
      : 'SKIND contact, dermatologist support, online dermatologist help',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/contact/`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/faq/contact/',
        da: 'https://www.skinchange.dk/da/faq/contact/',
        en: 'https://www.skinchange.dk/en/faq/contact/',
      },
    },
  };
}

export default function ContactPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
