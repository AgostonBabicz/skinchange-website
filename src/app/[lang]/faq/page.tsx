import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Script from 'next/script';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'FAQ: Ofte Stillede Spørgsmål om Online Hudlæge | SKIND' : 'FAQ: Frequently Asked Questions About Online Dermatology | SKIND',
    description: isDa 
      ? 'Få svar på alt om online hudlæge konsultation hos SKIND. Pris, sikkerhed, behandling af akne, eksem, psoriasis og meget mere. Diagnose inden for 48 timer.' 
      : 'Get answers about online dermatologist consultations at SKIND. Pricing, security, treatment for acne, eczema, psoriasis and more. Diagnosis within 48 hours.',
    keywords: isDa 
      ? 'online hudlæge, teledermatologi, hudlæge online, akne behandling, eksem behandling, psoriasis behandling, hudkræft tjek, modermærker, recept online'
      : 'online dermatologist, teledermatology, acne treatment, eczema treatment, psoriasis treatment, skin cancer check, online prescription',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/faq`,
    },
  };
}

const faqs = {
  da: [
    {
      question: 'Hvordan fungerer SKIND?',
      answer: 'Download vores app, opret en profil med MitID, tag billeder af dit hudproblem og besvar nogle spørgsmål om dine symptomer. En certificeret hudlæge gennemgår din sag og sender dig en diagnose og behandlingsplan inden for 48 timer. Du modtager svaret direkte i appen.'
    },
    {
      question: 'Hvad koster det?',
      answer: 'En konsultation koster 298 DKK (€40). Prisen dækker én hudlidelse og inkluderer diagnose og behandlingsplan.'
    },
    {
      question: 'Er det sikkert at bruge SKIND?',
      answer: 'Ja, absolut. Vi bruger MitID til sikker login og verificering af din identitet. Alle billeder og data gemmes sikkert på servere i EU. Vores platform overholder alle gældende regler om databeskyttelse i sundhedssektoren i EU, herunder GDPR. Vi deler aldrig dine data med tredjeparter uden dit samtykke.'
    },
    {
      question: 'Hvilke hudproblemer kan I hjælpe med?',
      answer: 'Vi kan diagnosticere og behandle de fleste almindelige hudsygdomme, herunder akne, eksem, psoriasis, rosacea, skæl, seboroisk dermatitis, fotsvamp, neglesvamp, herpes simplex (forkølelsessår), kønsvorter, soleksem, og mange andre tilstande. Vi kan også vurdere mistænkelige modermærker og hudforandringer og henvise videre ved behov.'
    },
    {
      question: 'Hvad hvis jeres læger ikke kan vurdere sagen og stille en diagnose?',
      answer: 'Hvis de informationer du giver, er utilstrækkelige for at vores læger kan lave en ordentlig vurdering, bliver du ikke opkrævet.'
    },
    {
      question: 'Hvor hurtigt får jeg svar?',
      answer: 'Vi garanterer svar inden for 48 timer, men de fleste patienter modtager deres diagnose inden for 24 timer. Du får besked i appen så snart lægen har gennemgået din sag.'
    },
    {
      question: 'Er SKIND dækket af sygesikringen?',
      answer: 'Nej, SKIND er en privat sundhedstjeneste og dækkes ikke af den offentlige sygesikring. Prisen er 298 DKK (€40) pr. konsultation, og du betaler direkte i appen.'
    },
    {
      question: 'Hvilke enheder understøtter appen?',
      answer: 'SKIND appen er tilgængelig til både iPhone (iOS 14 eller nyere) og Android (Android 8 eller nyere). Du kan downloade appen fra App Store eller Google Play.'
    },
    {
      question: 'Kan jeg bruge SKIND til mine børn?',
      answer: 'Ja, du kan oprette sager for dine børn under 18 år gennem din egen profil.'
    },
    {
      question: 'Hvor hurtigt får jeg svar på henvendelser?',
      answer: 'Vi besvarer alle henvendelser uden ugrundet ophold. I tider med travlhed og uden for normal arbejdstid må der forventes længere svartid.'
    },
    {
      question: 'Kan jeg ringe til jer?',
      answer: 'Vi foretrækker email kontakt for at sikre dokumentation og kvalitetssikring.'
    }
  ],
  en: [
    {
      question: 'How does SKIND work?',
      answer: 'Download our app, create a profile with MitID, take photos of your skin problem and answer some questions about your symptoms. A certified dermatologist reviews your case and sends you a diagnosis and treatment plan within 48 hours. You receive the response directly in the app.'
    },
    {
      question: 'What does it cost?',
      answer: 'A consultation costs 298 DKK (€40). The price covers one skin condition and includes diagnosis and treatment plan.'
    },
    {
      question: 'Is it safe to use SKIND?',
      answer: 'Yes, absolutely. We use MitID for secure login and verification of your identity. All photos and data are stored securely on servers in the EU. Our platform complies with all applicable regulations regarding data protection in the healthcare sector in the EU, including GDPR. We never share your data with third parties without your consent.'
    },
    {
      question: 'What skin problems can you help with?',
      answer: 'We can diagnose and treat most common skin conditions, including acne, eczema, psoriasis, rosacea, dandruff, seborrheic dermatitis, athlete\'s foot, nail fungus, herpes simplex (cold sores), genital warts, sun eczema, and many other conditions. We can also assess suspicious moles and skin changes and refer you further if needed.'
    },
    {
      question: 'What if your doctors cannot assess the case and make a diagnosis?',
      answer: 'If the information you provide is insufficient for our doctors to make a proper assessment, you will not be charged.'
    },
    {
      question: 'Is SKIND covered by health insurance?',
      answer: 'No, SKIND is a private healthcare service and is not covered by public health insurance. The price is 298 DKK (€40) per consultation, and you pay directly in the app.'
    },
    {
      question: 'Which devices does the app support?',
      answer: 'The SKIND app is available for both iPhone (iOS 14 or newer) and Android (Android 8 or newer). You can download the app from the App Store or Google Play.'
    },
    {
      question: 'Can I use SKIND for my children?',
      answer: 'Yes, you can create cases for your children under 18 through your own profile.'
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'We respond to all inquiries without delay. At times of hurry and outside normal business hours more time should be expected.'
    },
    {
      question: 'Can I call you?',
      answer: 'We prefer email contact to ensure documentation and quality assurance.'
    }
  ]
};

export default function FAQPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';
  const questions = isDa ? faqs.da : faqs.en;

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
    </>
  );
}
