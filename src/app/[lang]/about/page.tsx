import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Om os | SKIND' : 'About us | SKIND',
    description: isDa 
      ? 'Lær mere om SKIND og vores mission med at gøre dermatologisk behandling tilgængelig for alle.' 
      : 'Learn more about SKIND and our mission to make dermatological care accessible to everyone.',
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

      {/* Peter Bjerring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/skinchange-website/Peter.jpeg"
                  alt="Peter Bjerring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#304ffe] font-semibold mb-2">
                {isDa ? 'Mød vores førende hudlæge' : 'Meet our leading dermatologist'}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
                Peter Bjerring
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {isDa 
                  ? 'Ekspert i dermatologi, laserbehandlinger og hudkræft. Adjungeret professor, Aalborg Universitet. 300+ publikationer, 500+ internationale foredrag.' 
                  : 'Expert in dermatology, laser treatments and skin cancer. Adjunct professor, Aalborg University. 300+ publications, 500+ international lectures.'}
              </p>
              <button className="text-[#304ffe] font-semibold hover:underline">
                {isDa ? 'Læs mere' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brian Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
                Brian Vangsgaard
              </h2>
              <p className="text-[#304ffe] font-semibold mb-4">
                CEO
              </p>
              <p className="text-lg text-gray-600">
                {isDa 
                  ? 'Motiveret af at have haft hudkræft 3 gange, hvor jeg har oplevet et udfordrende behandlingsforløb samt at hudkræften blev overset og fejldiagnosticeret af ellers dygtige læger, valgte jeg at kaste mig ind i at blive en del af løsningen, der vil hjælpe alle med hudproblemer – store som små.'
                  : 'Motivated by having had skin cancer 3 times, where I experienced a challenging treatment course and where the skin cancer was overlooked and misdiagnosed by otherwise skilled doctors, I chose to throw myself into becoming part of the solution that will help everyone with skin problems - big or small.'}
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/skinchange-website/About_us_Brian.png"
                  alt="Brian Vangsgaard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1a237e] mb-6">
              {isDa ? 'Vores historie' : 'Our story'}
            </h2>
            <p className="text-gray-600 mb-6">
              {isDa
                ? 'SKIND blev grundlagt med en klar vision: at revolutionere måden, vi får adgang til dermatologisk behandling på. Ved at kombinere teknologi og medicinsk ekspertise har vi skabt en platform, der gør det muligt at få professionel hjælp til hudproblemer uanset hvor du befinder dig.'
                : 'SKIND was founded with a clear vision: to revolutionize the way we access dermatological care. By combining technology and medical expertise, we have created a platform that makes it possible to get professional help for skin problems no matter where you are.'}
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
              <a href="mailto:info@skinchange.ai" className="hover:underline">info@skinchange.ai</a>
            </p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
