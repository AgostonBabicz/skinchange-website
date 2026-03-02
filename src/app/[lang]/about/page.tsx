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

      {/* Peter Bjerring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/skinchange-website/Peter.jpeg"
                  alt="Peter Bjerring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#304ffe] font-semibold mb-4 uppercase tracking-wider text-sm">
                {isDa ? 'Førende hudlæge' : 'Leading Dermatologist'}
              </p>
              <h2 className="text-4xl font-bold text-[#1a237e] mb-4 font-display">
                Peter Bjerring
              </h2>
              <p className="text-xl text-[#304ffe] font-medium mb-6">
                {isDa ? 'Speciallæge i hudsygdomme' : 'Specialist in skin diseases'}
              </p>
              <div className="prose prose-lg text-gray-600">
                {isDa ? (
                  <>
                    <p className="mb-4">
                      Peter Bjerring er speciallæge i hudsygdomme og har praktiseret dermatologi i mere end 30 år. Han har arbejdet på flere af Danmarks førende hospitaler og har specialiseret sig i både medicinsk og kosmetisk dermatologi.
                    </p>
                    <p className="mb-4">
                      Som grundlægger af SkinChange har Peter visionen om at gøre specialistbehandling af hudsygdomme tilgængelig for alle danskere, uanset hvor de bor. Han tror på, at teknologi kan hjælpe med at overvinde barrierer i sundhedsvæsenet og give patienter hurtigere adgang til kvalificeret hjælp.
                    </p>
                    <p className="mb-4">
                      Peter er medlem af Dansk Dermatologisk Selskab og har publiseret adskillige videnskabelige artikler om hudsygdomme. Han er kendt for sin empatiske tilgang og evne til at forklare komplekse medicinske problemstillinger på en forståelig måde.
                    </p>
                    <p>
                      Med over 15.000 behandlede patienter gennem SkinChange har Peter bevist, at digital dermatologi ikke blot er mulig, men ofte også foretrukken af patienterne for dens bekvemmelighed og hurtighed.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-4">
                      Peter Bjerring is a specialist in skin diseases and has practiced dermatology for more than 30 years. He has worked at several of Denmark&apos;s leading hospitals and has specialized in both medical and cosmetic dermatology.
                    </p>
                    <p className="mb-4">
                      As the founder of SkinChange, Peter&apos;s vision is to make specialist treatment of skin diseases accessible to all Danes, regardless of where they live. He believes that technology can help overcome barriers in the healthcare system and give patients faster access to qualified help.
                    </p>
                    <p className="mb-4">
                      Peter is a member of the Danish Dermatological Society and has published numerous scientific articles on skin diseases. He is known for his empathetic approach and ability to explain complex medical issues in an understandable way.
                    </p>
                    <p>
                      With over 15,000 patients treated through SkinChange, Peter has proven that digital dermatology is not only possible but often preferred by patients for its convenience and speed.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brian Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#304ffe] font-semibold mb-4 uppercase tracking-wider text-sm">
                {isDa ? 'CTO & Medstifter' : 'CTO & Co-founder'}
              </p>
              <h2 className="text-4xl font-bold text-[#1a237e] mb-4 font-display">
                Brian
              </h2>
              <p className="text-xl text-[#304ffe] font-medium mb-6">
                {isDa ? 'Teknisk Direktør' : 'Chief Technology Officer'}
              </p>
              <div className="prose prose-lg text-gray-600">
                {isDa ? (
                  <>
                    <p className="mb-4">
                      Brian er medstifter og teknisk direktør hos SkinChange. Med en baggrund inden for softwareudvikling og sundhedsteknologi har Brian været afgørende for at bygge den sikre og brugervenlige platform, som tusindvis af danskere bruger i dag.
                    </p>
                    <p>
                      Hans fokus på datasikkerhed og compliance har sikret, at SkinChange lever op til alle gældende regler omkring databeskyttelse i sundhedssektoren, herunder GDPR og kravene til sundhedsapplikationer.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-4">
                      Brian is co-founder and CTO at SkinChange. With a background in software development and health technology, Brian has been instrumental in building the secure and user-friendly platform that thousands of Danes use today.
                    </p>
                    <p>
                      His focus on data security and compliance has ensured that SkinChange meets all applicable regulations regarding data protection in the healthcare sector, including GDPR and the requirements for health applications.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/skinchange-website/About_us_Brian.png"
                  alt="Brian"
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
              <a href="mailto:info@skinchange.ai" className="hover:underline">info@skinchange.ai</a>
            </p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
