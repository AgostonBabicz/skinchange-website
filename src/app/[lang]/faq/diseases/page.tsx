import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'diseases')!;

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Hudsygdomme – Symptomer, Årsager og Behandling | SKIND'
      : 'Skin Conditions – Symptoms, Causes and Treatment | SKIND',
    description: isDa
      ? 'Lær om de mest almindelige hudsygdomme: hvad de er, hvordan de ser ud, og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.'
      : 'Learn about the most common skin conditions: what they are, what they look like, and what treatment options are available. Get help from a dermatologist via SKIND.',
    keywords: isDa
      ? 'hudsygdomme, hudlidelser, acne, eksem, psoriasis, hudlæge online'
      : 'skin conditions, skin diseases, acne, eczema, psoriasis, online dermatologist',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/diseases`,
    },
  };
}

export default function DiseasesPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
