import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'FAQ | SKIND' : 'FAQ | SKIND',
    description: isDa 
      ? 'Find svar på ofte stillede spørgsmål om SkinChange og vores online dermatologiske tjenester.' 
      : 'Find answers to frequently asked questions about SkinChange and our online dermatology services.',
  };
}

const faqs = {
  da: [
    {
      question: 'Hvordan fungerer SkinChange?',
      answer: 'Du tager billeder af dit hudproblem, besvarer nogle spørgsmål, og sender det til vores certificerede hudlæger. Du får svar inden for 48 timer med diagnose og behandlingsplan.'
    },
    {
      question: 'Hvad koster det?',
      answer: 'En konsultation koster 395 kr. Prisen inkluderer diagnose, behandlingsplan og opfølgning. Eventuelt receptgebyr tillægges ved behov.'
    },
    {
      question: 'Er det sikkert?',
      answer: 'Ja, vi bruger MitID til sikker login og alle data er krypteret. Vores platform opfylder alle gældende regler omkring databeskyttelse i sundhedssektoren.'
    },
    {
      question: 'Hvilke hudproblemer kan I hjælpe med?',
      answer: 'Vi kan diagnosticere og behandle almindelige hudsygdomme som akne, eksem, psoriasis, rosacea, hudkræft (mistanke) og mange andre tilstande.'
    },
    {
      question: 'Hvad hvis I ikke kan stille en diagnose?',
      answer: 'I sjældne tilfælde hvor vi ikke kan stille en diagnose via telemedicin, henviser vi dig til fysisk fremmøde hos en hudlæge.'
    }
  ],
  en: [
    {
      question: 'How does SkinChange work?',
      answer: 'You take photos of your skin problem, answer some questions, and send it to our certified dermatologists. You will receive a response within 48 hours with diagnosis and treatment plan.'
    },
    {
      question: 'What does it cost?',
      answer: 'A consultation costs 395 DKK. The price includes diagnosis, treatment plan and follow-up. Prescription fees may be added if needed.'
    },
    {
      question: 'Is it safe?',
      answer: 'Yes, we use MitID for secure login and all data is encrypted. Our platform complies with all applicable regulations regarding data protection in the healthcare sector.'
    },
    {
      question: 'What skin problems can you help with?',
      answer: 'We can diagnose and treat common skin diseases such as acne, eczema, psoriasis, rosacea, skin cancer (suspicion) and many other conditions.'
    },
    {
      question: 'What if you cannot make a diagnosis?',
      answer: 'In rare cases where we cannot make a diagnosis via telemedicine, we will refer you to physical attendance with a dermatologist.'
    }
  ]
};

export default function FAQPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';
  const questions = isDa ? faqs.da : faqs.en;

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display text-center">
            {isDa ? 'Ofte stillede spørgsmål' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16">
            {isDa 
              ? 'Find svar på de mest almindelige spørgsmål om SkinChange'
              : 'Find answers to the most common questions about SkinChange'}
          </p>

          <div className="space-y-6">
            {questions.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#1a237e] mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              {isDa 
                ? 'Har du flere spørgsmål?'
                : 'Have more questions?'}
            </p>
            <a 
              href="mailto:info@skinchange.ai"
              className="inline-flex items-center justify-center bg-[#304ffe] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a237e] transition-colors"
            >
              {isDa ? 'Kontakt os' : 'Contact us'}
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
