import { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslation, Language } from '@/lib/i18n';
import { Apple, Play } from 'lucide-react';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Download appen | SKIND' : 'Download the app | SKIND',
    description: isDa 
      ? 'Download SkinChange appen og få adgang til professionel dermatologisk hjælp på din telefon.' 
      : 'Download the SkinChange app and access professional dermatological help on your phone.',
  };
}

export default function DownloadPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen bg-[#1a237e]">
      <Navigation lang={lang} />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
                {isDa ? 'Download SKIND' : 'Download SKIND'}
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {isDa 
                  ? 'Få adgang til professionel dermatologisk hjælp direkte på din telefon. Tilgængelig på både iPhone og Android.'
                  : 'Get access to professional dermatological help directly on your phone. Available on both iPhone and Android.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store */}
                <a 
                  href="#" 
                  className="flex items-center bg-white text-[#1a237e] px-6 py-4 rounded-xl hover:bg-white/90 transition-all"
                >
                  <Apple className="w-8 h-8 mr-3" />
                  <div>
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="font-bold text-lg">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a 
                  href="#"
                  className="flex items-center bg-white text-[#1a237e] px-6 py-4 rounded-xl hover:bg-white/90 transition-all"
                >
                  <Play className="w-8 h-8 mr-3" fill="currentColor" />
                  <div>
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="font-bold text-lg">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Features */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  isDa ? 'Sikker MitID login' : 'Secure MitID login',
                  isDa ? '48 timers diagnose' : '48 hour diagnosis',
                  isDa ? 'Recept til apoteket' : 'Prescription to pharmacy',
                  isDa ? 'Opfølgning inkluderet' : 'Follow-up included',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-white/80">
                    <svg className="w-5 h-5 text-[#00e5ff] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="hidden lg:block">
              <div className="relative mx-auto w-72">
                <div className="relative">
                  <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-[#304ffe] rounded-[2rem] p-5 aspect-[9/19]">
                      <div className="text-white font-bold text-lg mb-8">SKIND</div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {isDa ? 'Velkommen' : 'Welcome'}
                      </h3>
                      <p className="text-white/70 text-sm mb-6">
                        {isDa 
                          ? 'Din personlige hudklinik'
                          : 'Your personal skin clinic'}
                      </p>
                      <button className="w-full bg-white text-[#304ffe] font-bold py-3 rounded-xl">
                        {isDa ? 'Kom i gang' : 'Get started'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
