import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';
import FaqCategoryPage from '@/components/FaqCategoryPage';

interface PageProps {
  params: { lang: Language };
}

const category = faqCategories.find(c => c.slug === 'privacy-security')!;

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa
      ? 'Sikkerhed & Privatliv – SKIND Online Hudlæge'
      : 'Privacy & Security – SKIND Online Dermatologist',
    description: isDa
      ? 'SKIND bruger MitID og gemmer alle data på EU-servere. GDPR-kompatibel og sikker behandling af dine helbredsoplysninger.'
      : 'SKIND uses MitID and stores all data on EU servers. GDPR-compliant and secure handling of your health information.',
    keywords: isDa
      ? 'SKIND sikkerhed, GDPR hudlæge, datasikkerhed sundhed, MitID login'
      : 'SKIND security, GDPR dermatology, health data security, MitID',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq/privacy-security`,
    },
  };
}

export default function PrivacySecurityPage({ params: { lang } }: PageProps) {
  return <FaqCategoryPage category={category} lang={lang} />;
}
