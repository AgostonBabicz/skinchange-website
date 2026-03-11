import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'contact')!;

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Kontakt & Support – SKIND Online Hudlæge'
      : 'Contact & Support – SKIND Online Dermatologist',
    description: isDa
      ? 'Kontakt SKIND support. Vi besvarer alle henvendelser uden ugrundet ophold på info@skinchange.ai.'
      : 'Contact SKIND support. We respond to all inquiries without delay at info@skinchange.ai.',
    keywords: isDa
      ? 'SKIND kontakt, hudlæge support, online hudlæge hjælp'
      : 'SKIND contact, dermatologist support, online dermatologist help',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/contact`,
    },
  };
}

export default function ContactPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
