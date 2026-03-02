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
      answer: 'Du downloader vores app, opretter en profil med MitID, tager billeder af dit hudproblem og besvarer nogle spørgsmål om dine symptomer. En certificeret hudlæge gennemgår din sag og sender dig en diagnose og behandlingsplan inden for 48 timer. Du modtager svar direkte i appen, og hvis nødvendigt, kan du få en recept sendt til dit apotek.'
    },
    {
      question: 'Hvad koster det?',
      answer: 'En konsultation koster 298 kr. Prisen dækker én hudlidelse og inkluderer diagnose, behandlingsplan og opfølgning. Eventuelt receptgebyr (39 kr.) tillægges ved behov. Betalingen sker sikkert gennem appen inden lægen begynder vurderingen.'
    },
    {
      question: 'Er det sikkert at bruge SkinChange?',
      answer: 'Ja, absolut. Vi bruger MitID til sikker login og verificering af din identitet. Alle billeder og data sendes krypteret og gemmes sikkert på danske servere. Vores platform overholder alle gældende regler om databeskyttelse i sundhedssektoren, herunder GDPR og patientsikkerhedsloven. Vi deler aldrig dine data med tredjeparter uden dit samtykke.'
    },
    {
      question: 'Hvilke hudproblemer kan I hjælpe med?',
      answer: 'Vi kan diagnosticere og behandle de fleste almindelige hudsygdomme, herunder akne, eksem, psoriasis, rosacea, skæl, seboroisk dermatitis, fotsvamp, neglesvamp, herpes simplex (forkølelsessår), kønsvorter, soleksem, og mange andre tilstande. Vi kan også vurdere mistænkelige modermærker og hudforandringer og henvise videre ved behov.'
    },
    {
      question: 'Hvad hvis I ikke kan stille en diagnose via appen?',
      answer: 'I sjældne tilfælde hvor vi ikke kan stille en sikker diagnose via telemedicin, henviser vi dig til fysisk fremmøde hos en hudlæge. I sådanne tilfælde tilbyder vi enten en delvis refusion af konsultationsgebyret eller en prioriteret henvisning, afhængigt af situationen.'
    },
    {
      question: 'Kan jeg få recept gennem SkinChange?',
      answer: 'Ja, hvis din behandling kræver receptpligtig medicin, kan vores læger udskrive recepter direkte i appen. Recepten sendes elektronisk til dit foretrukne apotek, hvor du kan afhente medicinen. Der tilkommer et receptgebyr på 39 kr. pr. recept.'
    },
    {
      question: 'Hvor hurtigt får jeg svar?',
      answer: 'Vi garanterer svar inden for 48 timer, men de fleste patienter modtager deres diagnose inden for 24 timer. Du får besked i appen så snart lægen har gennemgået din sag.'
    },
    {
      question: 'Er SkinChange dækket af sygesikringen?',
      answer: 'Nej, SkinChange er en privat sundhedstjeneste og dækkes ikke af den offentlige sygesikring. Prisen er 298 kr. pr. konsultation, og du betaler direkte i appen.'
    },
    {
      question: 'Hvilke enheder understøtter appen?',
      answer: 'SkinChange appen er tilgængelig til både iPhone (iOS 14 eller nyere) og Android (Android 8 eller nyere). Du kan downloade appen fra App Store eller Google Play.'
    },
    {
      question: 'Kan jeg bruge SkinChange til mine børn?',
      answer: 'Ja, du kan oprette sager for dine børn under 18 år gennem din egen profil. Børn under 15 år skal have en forælder eller værges accept.'
    }
  ],
  en: [
    {
      question: 'How does SkinChange work?',
      answer: 'Download our app, create a profile with MitID, take photos of your skin problem and answer some questions about your symptoms. A certified dermatologist reviews your case and sends you a diagnosis and treatment plan within 48 hours. You receive the response directly in the app, and if necessary, you can have a prescription sent to your pharmacy.'
    },
    {
      question: 'What does it cost?',
      answer: 'A consultation costs €40. The price covers one skin condition and includes diagnosis, treatment plan and follow-up. Prescription fee (€5) may be added if needed. Payment is made securely through the app before the doctor begins the assessment.'
    },
    {
      question: 'Is it safe to use SkinChange?',
      answer: 'Yes, absolutely. We use MitID for secure login and verification of your identity. All photos and data are sent encrypted and stored securely on Danish servers. Our platform complies with all applicable regulations regarding data protection in the healthcare sector, including GDPR. We never share your data with third parties without your consent.'
    },
    {
      question: 'What skin problems can you help with?',
      answer: 'We can diagnose and treat most common skin conditions, including acne, eczema, psoriasis, rosacea, dandruff, seborrheic dermatitis, athlete\'s foot, nail fungus, herpes simplex (cold sores), genital warts, sun eczema, and many other conditions. We can also assess suspicious moles and skin changes and refer you further if needed.'
    },
    {
      question: 'What if you cannot make a diagnosis via the app?',
      answer: 'In rare cases where we cannot make a definitive diagnosis via telemedicine, we will refer you to a physical appointment with a dermatologist. In such cases, we offer either a partial refund of the consultation fee or a prioritized referral, depending on the situation.'
    },
    {
      question: 'Can I get prescriptions through SkinChange?',
      answer: 'Yes, if your treatment requires prescription medication, our doctors can issue prescriptions directly in the app. The prescription is sent electronically to your preferred pharmacy where you can pick up the medication. A prescription fee of €5 per prescription applies.'
    },
    {
      question: 'How quickly do I get a response?',
      answer: 'We guarantee a response within 48 hours, but most patients receive their diagnosis within 24 hours. You will be notified in the app as soon as the doctor has reviewed your case.'
    },
    {
      question: 'Is SkinChange covered by health insurance?',
      answer: 'No, SkinChange is a private healthcare service and is not covered by public health insurance. The price is €40 per consultation, and you pay directly in the app.'
    },
    {
      question: 'Which devices does the app support?',
      answer: 'The SkinChange app is available for both iPhone (iOS 14 or newer) and Android (Android 8 or newer). You can download the app from the App Store or Google Play.'
    },
    {
      question: 'Can I use SkinChange for my children?',
      answer: 'Yes, you can create cases for your children under 18 through your own profile. Children under 15 require a parent or guardian\'s consent.'
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
