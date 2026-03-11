import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import UserGuideSection from '@/components/UserGuideSection';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Sådan bruger du appen | SKIND' : 'How to use the app | SKIND',
    description: isDa 
      ? 'En simpel guide til, hvordan du bruger SKIND appen til at få hjælp til dit hudproblem.' 
      : 'A simple guide on how to use the SKIND app to get help with your skin problem.',
  };
}

export default function GuidePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation lang={lang} />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a237e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
            {isDa ? 'Sådan bruger du SKIND' : 'How to use SKIND'}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {isDa 
              ? 'Følg disse simple trin for at få professionel hjælp til dit hudproblem'
              : 'Follow these simple steps to get professional help with your skin problem'}
          </p>
        </div>
      </section>

      

      {/* User Guide Carousel */}
      <UserGuideSection lang={lang} />

      {/* CTA */}
      <section className="py-20 bg-[#1a237e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
            {isDa ? 'Klar til at komme i gang?' : 'Ready to get started?'}
          </h2>
          <p className="text-xl text-white/70 mb-8">
            {isDa 
              ? 'Download appen i dag og få hjælp til dit hudproblem inden for 48 timer'
              : 'Download the app today and get help with your skin problem within 48 hours'}
          </p>
          <a 
            href={`/${lang}/download`}
            className="inline-flex items-center bg-white text-[#1a237e] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:shadow-2xl"
          >
            {isDa ? 'Download appen' : 'Download the app'}
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
