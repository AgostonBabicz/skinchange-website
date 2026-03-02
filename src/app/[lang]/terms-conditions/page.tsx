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
    title: isDa ? 'Vilkår og Betingelser | SKIND' : 'Terms and Conditions | SKIND',
    description: isDa 
      ? 'Læs vores vilkår og betingelser for brug af SkinChange platformen.' 
      : 'Read our terms and conditions for using the SkinChange platform.',
  };
}

export default function TermsPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display text-center">
            {isDa ? 'Vilkår og Betingelser' : 'Terms and Conditions'}
          </h1>
          <p className="text-gray-500 text-center mb-16">
            {isDa ? 'Sidst opdateret: Marts 2025' : 'Last updated: March 2025'}
          </p>

          <div className="prose prose-lg max-w-none text-gray-600">
            {isDa ? (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">1. Indledning</h2>
                <p className="mb-4">
                  Disse vilkår og betingelser (&quot;Vilkår&quot;) regulerer din brug af SkinChange appen og hjemmesiden (&quot;Tjenesten&quot;), som ejes og drives af SkinChange.AI ApS, CVR-nummer 43156179 (&quot;os&quot;, &quot;vi&quot; eller &quot;vores&quot;).
                </p>
                <p className="mb-4">
                  Ved at bruge Tjenesten accepterer du disse Vilkår. Hvis du ikke accepterer Vilkårene, må du ikke bruge Tjenesten.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">2. Tjenestebeskrivelse</h2>
                <p className="mb-4">
                  SkinChange er en digital platform, der forbinder patienter med certificerede hudlæger til online konsultation og diagnostisering af hudsygdomme. Tjenesten er ikke en erstatning for akut lægehjælp eller fysiske lægebesøg i nødstilfælde.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">3. Registrering og Konto</h2>
                <p className="mb-4">
                  For at bruge Tjenesten skal du oprette en konto og verificere din identitet via MitID. Du er ansvarlig for at sikre, at alle oplysninger, du giver os, er nøjagtige, aktuelle og komplette. Du må ikke dele din konto eller adgangskoder med andre.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">4. Betaling og Priser</h2>
                <p className="mb-4">
                  En konsultation koster 298 DKK pr. hudlidelse. Prisen inkluderer diagnose, behandlingsplan og opfølgning. Receptgebyr på 39 DKK tillægges ved behov for recept. Betaling sker forud via de betalingsmetoder, der tilbydes i appen.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">5. Tilbagebetalingspolitik</h2>
                <p className="mb-4">
                  Hvis vores læger ikke kan stille en diagnose, tilbyder vi enten en delvis refusion eller prioriteret henvisning til fysisk fremmøde. Der ydes ikke refusion, hvis du selv vælger at annullere en konsultation efter, at lægen er begyndt vurderingen.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">6. Fortrolighed og Databeskyttelse</h2>
                <p className="mb-4">
                  Vi behandler dine personoplysninger i overensstemmelse med vores Privatlivspolitik og gældende databeskyttelseslovgivning (GDPR). Ved at bruge Tjenesten accepterer du vores Privatlivspolitik.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">7. Ansvarsbegrænsning</h2>
                <p className="mb-4">
                  SkinChange er et supplement til, ikke en erstatning for, traditionel lægehjælp. I nødsituationer skal du altid kontakte lægevagten eller ringe 112. Vores læger træffer deres bedste faglige vurdering baseret på de billeder og oplysninger, du leverer.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">8. Immaterielle Rettigheder</h2>
                <p className="mb-4">
                  Alt indhold på Tjenesten, herunder tekst, grafik, logoer og software, er ejet af SkinChange.AI ApS eller vores licensgivere og er beskyttet af ophavsret og andre immaterielle rettigheder.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">9. Ændringer af Vilkår</h2>
                <p className="mb-4">
                  Vi forbeholder os ret til at ændre disse Vilkår til enhver tid. Ændringer træder i kraft straks efter offentliggørelse på vores hjemmeside. Fortsat brug af Tjenesten efter ændringer udgør accept af de nye Vilkår.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">10. Kontakt</h2>
                <p className="mb-4">
                  Hvis du har spørgsmål til disse Vilkår, kan du kontakte os på info@skinchange.ai.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  These terms and conditions (&quot;Terms&quot;) govern your use of the SkinChange app and website (&quot;Service&quot;), which is owned and operated by SkinChange.AI ApS, CVR number 43156179 (&quot;us&quot;, &quot;we&quot; or &quot;our&quot;).
                </p>
                <p className="mb-4">
                  By using the Service, you accept these Terms. If you do not accept the Terms, you must not use the Service.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">2. Service Description</h2>
                <p className="mb-4">
                  SkinChange is a digital platform that connects patients with certified dermatologists for online consultation and diagnosis of skin conditions. The Service is not a substitute for emergency medical care or physical doctor visits in emergencies.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">3. Registration and Account</h2>
                <p className="mb-4">
                  To use the Service, you must create an account and verify your identity via MitID. You are responsible for ensuring that all information you provide to us is accurate, current, and complete. You must not share your account or passwords with others.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">4. Payment and Pricing</h2>
                <p className="mb-4">
                  A consultation costs €40 per skin condition. The price includes diagnosis, treatment plan, and follow-up. Prescription fee of €5 is added if a prescription is needed. Payment is made in advance via the payment methods offered in the app.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">5. Refund Policy</h2>
                <p className="mb-4">
                  If our doctors cannot make a diagnosis, we offer either a partial refund or prioritized referral for a physical appointment. No refund is given if you choose to cancel a consultation after the doctor has begun the assessment.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">6. Privacy and Data Protection</h2>
                <p className="mb-4">
                  We process your personal data in accordance with our Privacy Policy and applicable data protection legislation (GDPR). By using the Service, you accept our Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  SkinChange is a supplement to, not a replacement for, traditional medical care. In emergencies, you should always contact emergency services or call 112. Our doctors make their best professional assessment based on the images and information you provide.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">8. Intellectual Property</h2>
                <p className="mb-4">
                  All content on the Service, including text, graphics, logos, and software, is owned by SkinChange.AI ApS or our licensors and is protected by copyright and other intellectual property rights.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to change these Terms at any time. Changes take effect immediately after publication on our website. Continued use of the Service after changes constitutes acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">10. Contact</h2>
                <p className="mb-4">
                  If you have questions about these Terms, you can contact us at info@skinchange.ai.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
