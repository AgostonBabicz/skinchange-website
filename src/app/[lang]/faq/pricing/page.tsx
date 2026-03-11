import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'pricing')!;

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Pris & Forsikring – SKIND Online Hudlæge'
      : 'Pricing & Insurance – SKIND Online Dermatologist',
    description: isDa
      ? 'En SKIND konsultation koster 298 DKK (€40). Find ud af hvad der er inkluderet og om forsikringsdækning.'
      : 'A SKIND consultation costs 298 DKK (€40). Find out what is included and about insurance coverage.',
    keywords: isDa
      ? 'online hudlæge pris, teledermatologi pris, 298 DKK hudlæge'
      : 'online dermatologist price, teledermatology cost, dermatology consultation fee',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/pricing`,
    },
  };
}

export default function PricingPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
