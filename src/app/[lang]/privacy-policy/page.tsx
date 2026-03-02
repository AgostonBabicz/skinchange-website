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
    title: isDa ? 'Privatlivspolitik | SKIND' : 'Privacy Policy | SKIND',
    description: isDa 
      ? 'Læs vores privatlivspolitik for at forstå, hvordan vi behandler dine personoplysninger.' 
      : 'Read our privacy policy to understand how we process your personal data.',
  };
}

export default function PrivacyPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display text-center">
            {isDa ? 'Privatlivspolitik' : 'Privacy Policy'}
          </h1>
          <p className="text-gray-500 text-center mb-16">
            {isDa ? 'Sidst opdateret: Marts 2025' : 'Last updated: March 2025'}
          </p>

          <div className="prose prose-lg max-w-none text-gray-600">
            {isDa ? (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">1. Indledning</h2>
                <p className="mb-4">
                  SkinChange.AI ApS (&quot;vi&quot;, &quot;os&quot; eller &quot;vores&quot;) respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger, opbevarer og beskytter dine data, når du bruger vores app og hjemmeside.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">2. Dataansvarlig</h2>
                <p className="mb-4">
                  SkinChange.AI ApS er dataansvarlig for behandlingen af dine personoplysninger. Du kan kontakte os på:
                </p>
                <p className="mb-4">
                  <strong>SkinChange.AI ApS</strong><br />
                  CVR: 43156179<br />
                  Email: info@skinchange.ai
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">3. Hvilke oplysninger indsamler vi?</h2>
                <p className="mb-4">Vi indsamler følgende typer oplysninger:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Personlige oplysninger:</strong> Navn, CPR-nummer, kontaktoplysninger (email, telefon), adresse.</li>
                  <li><strong>Sundhedsoplysninger:</strong> Billeder af hudforandringer, beskrivelse af symptomer, medicinsk historie relateret til hudsygdomme, diagnoser, behandlingsplaner og recepter.</li>
                  <li><strong>Tekniske oplysninger:</strong> Enhedsoplysninger, IP-adresse, browseroplysninger, app-brugsdata.</li>
                  <li><strong>Betalingsoplysninger:</strong> Transaktionsdetaljer (behandles af vores betalingsudbydere).</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">4. Formål med databehandling</h2>
                <p className="mb-4">Vi behandler dine oplysninger til følgende formål:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>At levere vores sundhedstjenester og diagnosticere hudsygdomme</li>
                  <li>At kommunikere med dig om din behandling</li>
                  <li>At sende recepter til apoteker</li>
                  <li>At behandle betalinger</li>
                  <li>At forbedre vores tjenester</li>
                  <li>At overholde lovgivningsmæssige krav</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">5. Retligt grundlag</h2>
                <p className="mb-4">
                  Behandlingen af dine personoplysninger sker på følgende retlige grundlag:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Sundhedsoplysninger:</strong> Artikel 9(2)(h) i GDPR - sundhedsbehandling</li>
                  <li><strong>Kontaktoplysninger:</strong> Artikel 6(1)(b) i GDPR - kontrakt</li>
                  <li><strong>Betaling:</strong> Artikel 6(1)(b) i GDPR - kontrakt</li>
                  <li><strong>Tekniske data:</strong> Artikel 6(1)(f) i GDPR - legitim interesse</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">6. Datasikkerhed</h2>
                <p className="mb-4">
                  Vi implementerer strenge tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine data:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>End-to-end kryptering af alle dataoverførsler</li>
                  <li>Sikker opbevaring på danske servere</li>
                  <li>MitID-verificering af brugeridentitet</li>
                  <li>Regelmæssige sikkerhedsaudits</li>
                  <li>Begrænset adgang for autoriseret personale</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">7. Deling af data</h2>
                <p className="mb-4">
                  Vi deler kun dine oplysninger i følgende tilfælde:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Med de hudlæger, der behandler din sag</li>
                  <li>Med apoteker (ved receptudstedelse)</li>
                  <li>Med vores betalingsudbydere</li>
                  <li>Når det kræves ved lov</li>
                </ul>
                <p className="mb-4">
                  Vi sælger aldrig dine data til tredjeparter.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">8. Opbevaringsperiode</h2>
                <p className="mb-4">
                  Vi opbevarer dine sundhedsoplysninger i henhold til journalføringsloven (typisk 10 år efter sidste kontakt). Andre oplysninger opbevares kun så længe det er nødvendigt for de formål, de blev indsamlet til.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">9. Dine rettigheder</h2>
                <p className="mb-4">Du har følgende rettigheder:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ret til indsigt i dine oplysninger</li>
                  <li>Ret til berigtigelse af unøjagtige oplysninger</li>
                  <li>Ret til sletning (med forbehold for journalføringspligt)</li>
                  <li>Ret til begrænsning af behandling</li>
                  <li>Ret til dataportabilitet</li>
                  <li>Ret til at gøre indsigelse mod behandling</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">10. Kontakt</h2>
                <p className="mb-4">
                  Hvis du har spørgsmål om denne privatlivspolitik eller ønsker at udøve dine rettigheder, kan du kontakte os på info@skinchange.ai.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  SkinChange.AI ApS (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect your data when you use our app and website.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">2. Data Controller</h2>
                <p className="mb-4">
                  SkinChange.AI ApS is the data controller for the processing of your personal data. You can contact us at:
                </p>
                <p className="mb-4">
                  <strong>SkinChange.AI ApS</strong><br />
                  CVR: 43156179<br />
                  Email: info@skinchange.ai
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">3. What Information Do We Collect?</h2>
                <p className="mb-4">We collect the following types of information:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Personal information:</strong> Name, CPR number, contact information (email, phone), address.</li>
                  <li><strong>Health information:</strong> Photos of skin conditions, description of symptoms, medical history related to skin diseases, diagnoses, treatment plans, and prescriptions.</li>
                  <li><strong>Technical information:</strong> Device information, IP address, browser information, app usage data.</li>
                  <li><strong>Payment information:</strong> Transaction details (processed by our payment providers).</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">4. Purpose of Data Processing</h2>
                <p className="mb-4">We process your information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To provide our healthcare services and diagnose skin conditions</li>
                  <li>To communicate with you about your treatment</li>
                  <li>To send prescriptions to pharmacies</li>
                  <li>To process payments</li>
                  <li>To improve our services</li>
                  <li>To comply with legal requirements</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">5. Legal Basis</h2>
                <p className="mb-4">
                  The processing of your personal data is based on the following legal grounds:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Health information:</strong> Article 9(2)(h) of the GDPR - healthcare treatment</li>
                  <li><strong>Contact information:</strong> Article 6(1)(b) of the GDPR - contract</li>
                  <li><strong>Payment:</strong> Article 6(1)(b) of the GDPR - contract</li>
                  <li><strong>Technical data:</strong> Article 6(1)(f) of the GDPR - legitimate interest</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">6. Data Security</h2>
                <p className="mb-4">
                  We implement strict technical and organizational security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>End-to-end encryption of all data transfers</li>
                  <li>Secure storage on Danish servers</li>
                  <li>MitID verification of user identity</li>
                  <li>Regular security audits</li>
                  <li>Limited access for authorized personnel only</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">7. Data Sharing</h2>
                <p className="mb-4">
                  We only share your information in the following cases:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>With the dermatologists who treat your case</li>
                  <li>With pharmacies (when issuing prescriptions)</li>
                  <li>With our payment providers</li>
                  <li>When required by law</li>
                </ul>
                <p className="mb-4">
                  We never sell your data to third parties.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">8. Retention Period</h2>
                <p className="mb-4">
                  We retain your health information in accordance with the Records Act (typically 10 years after last contact). Other information is only kept as long as necessary for the purposes for which they were collected.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">9. Your Rights</h2>
                <p className="mb-4">You have the following rights:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Right to access your information</li>
                  <li>Right to rectification of inaccurate information</li>
                  <li>Right to erasure (subject to record-keeping obligations)</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">10. Contact</h2>
                <p className="mb-4">
                  If you have questions about this privacy policy or wish to exercise your rights, you can contact us at info@skinchange.ai.
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
