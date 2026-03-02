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
      ? 'En simpel guide til, hvordan du bruger SkinChange appen til at få hjælp til dit hudproblem.' 
      : 'A simple guide on how to use the SkinChange app to get help with your skin problem.',
  };
}

export default function GuidePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const steps = isDa ? [
    {
      title: '1. Download appen',
      description: 'Hent SkinChange fra App Store eller Google Play. Appen er gratis at downloade.'
    },
    {
      title: '2. Opret profil',
      description: 'Registrer dig med dit telefonnummer og verificer din identitet med MitID.'
    },
    {
      title: '3. Tag billeder',
      description: 'Tag klare, velbelyste billeder af dit hudproblem fra flere vinkler.'
    },
    {
      title: '4. Besvar spørgsmål',
      description: 'Besvar nogle simple spørgsmål om dine symptomer og medicinske historie.'
    },
    {
      title: '5. Betal',
      description: 'Betal sikkert i appen. Prisen er 298 kr. for én hudlidelse.'
    },
    {
      title: '6. Modtag diagnose',
      description: 'En hudlæge gennemgår din sag og sender dig svar inden for 48 timer.'
    }
  ] : [
    {
      title: '1. Download the app',
      description: 'Get SkinChange from the App Store or Google Play. The app is free to download.'
    },
    {
      title: '2. Create profile',
      description: 'Register with your phone number and verify your identity with MitID.'
    },
    {
      title: '3. Take photos',
      description: 'Take clear, well-lit photos of your skin problem from multiple angles.'
    },
    {
      title: '4. Answer questions',
      description: 'Answer some simple questions about your symptoms and medical history.'
    },
    {
      title: '5. Pay',
      description: 'Pay securely in the app. The price is €40 for one skin condition.'
    },
    {
      title: '6. Receive diagnosis',
      description: 'A dermatologist reviews your case and sends you a response within 48 hours.'
    }
  ];

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

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1a237e] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
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
