import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'app')!;

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'SKIND Appen – Download til iPhone & Android'
      : 'The SKIND App – Download for iPhone & Android',
    description: isDa
      ? 'SKIND appen er tilgængelig til iPhone (iOS 14+) og Android (8+). Download fra App Store eller Google Play.'
      : 'The SKIND app is available for iPhone (iOS 14+) and Android (8+). Download from the App Store or Google Play.',
    keywords: isDa
      ? 'SKIND app download, hudlæge app iPhone, hudlæge app Android'
      : 'SKIND app download, dermatologist app iPhone, dermatologist app Android',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/app`,
    },
  };
}

export default function AppPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
