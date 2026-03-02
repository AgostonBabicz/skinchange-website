import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
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
      <Features lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
