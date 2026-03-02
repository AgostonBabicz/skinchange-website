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

export default function HomePage({ params: { lang } }: PageProps) {
  return (
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
  );
}
