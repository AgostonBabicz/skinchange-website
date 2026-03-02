import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Om os | SKIND' : 'About us | SKIND',
    description: isDa 
      ? 'Lær mere om SkinChange og vores mission med at gøre dermatologisk behandling tilgængelig for alle.' 
      : 'Learn more about SkinChange and our mission to make dermatological care accessible to everyone.',
  };
}

export default function AboutPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen bg-[#1a237e]">
      <Navigation lang={lang} />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display text-center">
            {isDa ? 'Om SKIND' : 'About SKIND'}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-center leading-relaxed">
            {isDa 
              ? 'Vi er på en mission for at gøre dermatologisk behandling tilgængelig for alle danskere. Ingen ventetider, ingen besvær - bare professionel hudpleje når du har brug for det.'
              : 'We are on a mission to make dermatological care accessible to all Danes. No waiting times, no hassle - just professional skin care when you need it.'}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-6">
              {isDa ? 'Vores historie' : 'Our story'}
            </h2>
            <p className="text-gray-600 mb-6">
              {isDa
                ? 'SkinChange blev grundlagt med en klar vision: at revolutionere måden, vi får adgang til dermatologisk behandling på. Ved at kombinere teknologi og medicinsk ekspertise har vi skabt en platform, der gør det muligt at få professionel hjælp til hudproblemer uanset hvor du befinder dig.'
                : 'SkinChange was founded with a clear vision: to revolutionize the way we access dermatological care. By combining technology and medical expertise, we have created a platform that makes it possible to get professional help for skin problems no matter where you are.'}
            </p>

            <h2 className="text-3xl font-bold text-[#1a237e] mb-6 mt-12">
              {isDa ? 'Vores mission' : 'Our mission'}
            </h2>
            <p className="text-gray-600 mb-6">
              {isDa
                ? 'Vi tror på, at alle fortjener adgang til kvalitetsbehandling af hudsygdomme. Gennem vores platform tilbyder vi hurtig, sikker og professionel hjælp fra certificerede hudlæger.'
                : 'We believe everyone deserves access to quality treatment for skin diseases. Through our platform, we offer fast, secure, and professional help from certified dermatologists.'}
            </p>

            <h2 className="text-3xl font-bold text-[#1a237e] mb-6 mt-12">
              {isDa ? 'Kontakt os' : 'Contact us'}
            </h2>
            <p className="text-gray-600 mb-4">
              {isDa ? 'Har du spørgsmål eller brug for hjælp? Kontakt os på:' : 'Do you have questions or need help? Contact us at:'}
            </p>
            <p className="text-[#304ffe] font-medium">
              info@skinchange.ai
            </p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
