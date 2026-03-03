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
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">INTRODUKTION</h2>
                <p className="mb-4">
                  Denne privatlivspolitik styrer din brug af de tjenester, der leveres af SkinChange.AI ApS (i det følgende benævnt &apos;SkinChange.AI&apos;, &apos;vi&apos;, &apos;os&apos; eller &apos;vores&apos;). Vores hovedformål er (1) at hjælpe med identificering og sporing af ændringer i hud via vores Skin Monitoring APP, og (2) igennem Skind at give brugere hurtigt svar på hudforespørgsler fra vores team af hudlæger.
                </p>
                <p className="mb-4">
                  Hvis du har spørgsmål eller kommentarer til denne privatlivspolitik, kan du kontakte os på info@skinchange.ai.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">Dataansvarlig</h2>
                <p className="mb-4">
                  SkinChange.AI er dataansvarlig for de personoplysninger, der indsamles fra brugere. Vi er forpligtet til at behandle dine personoplysninger i overensstemmelse med den europæiske generelle databeskyttelsesforordning (GDPR) og gældende lokal lovgivning. Hvis du bor uden for EU, kan lokale databeskyttelseslove også finde anvendelse, men vi vil følge GDPR-standarderne.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">BRUGERAFGIVNE OPLYSNINGER</h2>
                <p className="mb-4">
                  Vi indsamler kun de oplysninger, der er nødvendige for en tilfredsstillende og sikker brug af vores produkter. Du vil blive bedt om at give eksplicit og specifikt samtykke til hver kategori af oplysninger, vi indsamler, og du kan til enhver tid trække dit samtykke tilbage ved at kontakte os på info@skinchange.ai.
                </p>
                <p className="mb-4">
                  Når du registrerer dig til vores applikation, indsamler vi følgende oplysninger:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>E-mailadresse:</strong> For at sende et login-link til at verificere din identitet og give adgang til vores tjenester.</li>
                  <li><strong>Transaktionsrelaterede oplysninger:</strong> Dette inkluderer alle oplysninger, der er nødvendige for fakturering eller køb, du foretager.</li>
                  <li><strong>Billeder:</strong> Hvis du uploader billeder af din hud til analyse, opbevares de sikkert med det formål at levere vores service.</li>
                  <li><strong>Supportdata:</strong> Enhver information, du giver, når du kontakter vores supportteam.</li>
                  <li><strong>Valgfri personlige oplysninger:</strong> Du kan vælge at uploade personlige detaljer såsom navn, fødselsdato, adresse og telefonnummer. Med undtagelse af telefonnummeret er disse data påkrævet for identitetsbekræftelse af de danske sundhedsmyndigheder og bruges til dette formål. Telefonnummeret benyttes til login og eventuelle nødopkald.</li>
                  <li><strong>Sundhedsrelaterede data:</strong> Når du uploader en sag i Skind, vil du blive bedt om sundhedsrelaterede data, der er relevante for sagen.</li>
                </ul>
                <p className="mb-4">
                  <strong>Formål med brug:</strong> Disse data bruges til brugerautentifikation, personliggjort service og opfyldelse af lovmæssige forpligtelser såsom identitetsbekræftelse. Vi vil også bruge dine kontaktoplysninger til at sende dig vigtige meddelelser, undervisningsmaterialer og, med dit samtykke, markedsføringsmaterialer.
                </p>
                <p className="mb-4">
                  Du kan administrere dine præferencer for at modtage markedsføringsmeddelelser direkte i appen eller ved at sende en e-mail til os på info@skinchange.ai.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">AUTOMATISK INDSAMLET INFORMATION</h2>
                <p className="mb-4">
                  Vi indsamler visse oplysninger automatisk for at forbedre appoplevelsen:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Enhedsoplysninger:</strong> Inklusive typen af mobilenhed, operativsystemversion og unikke enhedsidentifikatorer.</li>
                  <li><strong>Interaktionsdata:</strong> Data om, hvordan du bruger appen, såsom brug af funktioner og uploadet indhold.</li>
                </ul>
                <p className="mb-4">
                  <strong>Formål med brug:</strong> Automatisk indsamlede data hjælper os med at fejlfinde problemer, forbedre appens ydeevne og forbedre brugeroplevelsen.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">COOKIES OG SPORINGSTEKNOLOGIER</h2>
                <p className="mb-4">
                  Vi bruger cookies og lignende teknologier til at forbedre appoplevelsen. Cookies hjælper med at gemme præferencer og forbedre ydeevnen. Du kan administrere eller deaktivere cookies via dine browserindstillinger.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">LOKATIONSOPLYSNINGER</h2>
                <p className="mb-4">
                  Vores applikation indsamler <strong>ikke</strong> præcise realtids-lokationsoplysninger, da det ikke er nødvendigt for kvaliteten af vores tjenester.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">DELING AF DATA MED TREDJEPART</h2>
                <p className="mb-4">
                  Vi sælger ikke dine personoplysninger eller deler dem med tredjeparter til markedsføringsformål. Anonymiserede og aggregerede data kan blive delt med tredjepartstjenesteudbydere for at forbedre vores applikation, men disse data kan ikke spores tilbage til dig.
                </p>
                <p className="mb-4">
                  Vi deler data med betroede tredjepartsleverandører, som er bundet af vores privatlivspolitikker og GDPR. Disse leverandører inkluderer:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Cloud-lagringsudbydere:</strong> Til sikker lagring af data.</li>
                  <li><strong>Medicinske klinik-partnere:</strong> Til diagnosticering og vedligeholdelse af korrekt diagnostik.</li>
                  <li><strong>Videnskabelige institutioner:</strong> Til at forstå appens brugsmønstre og forbedre funktionaliteten.</li>
                  <li><strong>Analysetjenester:</strong> Til at forstå brugsmønstre og forbedre funktionaliteten.</li>
                  <li><strong>Betalingsudbydere:</strong> For at sikre en tidssvarende og sikker betalingsmulighed.</li>
                </ul>
                <p className="mb-4">
                  Vi kan også videregive dine oplysninger:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Hvis krævet af loven:</strong> For at overholde juridiske forpligtelser eller svare på juridiske processer.</li>
                  <li><strong>For at beskytte sikkerhed:</strong> Hvis vi mener, at det er nødvendigt at beskytte brugernes sikkerhed eller rettigheder, undersøge svig eller overholde myndigheders anmodning.</li>
                  <li><strong>I tilfælde af fusion eller opkøb:</strong> Du vil blive underrettet via e-mail og/eller en fremtrædende meddelelse på vores hjemmeside, hvis der sker ændringer i ejerskab eller brugen af dine data.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">BRUGERNES RETTIGHEDER I HENHOLD TIL GDPR</h2>
                <p className="mb-4">
                  Som bruger har du specifikke rettigheder i henhold til GDPR vedrørende dine personoplysninger. Disse inkluderer:
                </p>
                <ol className="list-decimal pl-6 mb-4 space-y-2">
                  <li><strong>Ret til indsigt:</strong> Du kan til enhver tid anmode om en kopi af de personoplysninger, vi har om dig. Kontakt os venligst på info@skinchange.ai for at anmode herom.</li>
                  <li><strong>Ret til berigtigelse:</strong> Du har ret til at rette unøjagtigheder i dine personoplysninger. Dette kan gøres via dine kontoindstillinger eller ved at sende en e-mail til os.</li>
                  <li><strong>Ret til sletning (&quot;Retten til at blive glemt&quot;):</strong> Du kan anmode om sletning af dine personoplysninger, med visse juridiske betingelser. Data, der er kritiske for appenes funktionalitet, kan opbevares, indtil din konto slettes.</li>
                  <li><strong>Ret til begrænsning af behandling:</strong> Du kan anmode om, at vi begrænser behandlingen af dine data under visse betingelser (f.eks. under tvister vedrørende nøjagtighed).</li>
                  <li><strong>Ret til dataportabilitet:</strong> Du kan anmode om en kopi af de personoplysninger, du har givet, i et maskinlæsbart format. Dette vil blive leveret til dig via e-mail eller et downloadlink.</li>
                  <li><strong>Ret til indsigelse:</strong> Du kan gøre indsigelse mod behandlingen af dine data, også i tilfælde af direkte markedsføring. For at udøve denne ret kan du justere dine indstillinger i appsene eller sende os en e-mail på info@skinchange.ai.</li>
                  <li><strong>Ret til at trække samtykke tilbage:</strong> Du kan til enhver tid trække dit samtykke til databehandling tilbage ved at sende os en e-mail eller bruge indstillingerne i appsene.</li>
                </ol>
                <p className="mb-4">
                  Når du anmoder om indsigt, berigtigelse, sletning eller dataportabilitet, kan vi kræve yderligere oplysninger for at bekræfte din identitet, før vi imødekommer din anmodning og sikrer sikkerheden af dine data.
                </p>
                <p className="mb-4">
                  Du har ret til at klage over behandlingen af dine personoplysninger til tilsynsmyndigheden, som i Danmark er Datatilsynet: Borgergade 28, 1300 København K, Telefonnummer: +45 3319 3200, E-mail: dt@datatilsynet.dk
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">DATABEVARINGSPOLITIK</h2>
                <p className="mb-4">
                  Vi opbevarer brugerafgivne oplysninger, så længe din konto er aktiv og i en rimelig periode derefter. Automatisk indsamlede data opbevares i op til 24 måneder.
                </p>
                <p className="mb-4">
                  <strong>Opbevaringsperioder:</strong>
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Billeder og sundhedsrelaterede data:</strong> Opbevares i 6 måneder efter kontosletning, med mindre lovkrav kræver længere opbevaring.</li>
                  <li><strong>Transaktions- og supportdata:</strong> Opbevares i op til 7 år til juridiske og revisionsformål.</li>
                  <li><strong>Automatisk indsamlede data:</strong> Opbevares i 12 måneder efter inaktivitet.</li>
                </ul>
                <p className="mb-4">
                  Du kan til enhver tid anmode om sletning af data ved at kontakte info@skinchange.ai.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SLETNING AF KONTO</h2>
                <p className="mb-4">
                  Du kan administrere dine datapræferencer i appsene ved at justere privatlivsindstillingerne eller kontakte os direkte. For at anmode om kontosletning, send venligst en e-mail til info@skinchange.ai. Bemærk, at afinstallation af appsene ikke automatisk sletter dine data.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">BØRN</h2>
                <p className="mb-4">
                  Vores tjenester er beregnet til personer på 18 år og derover, eller den lovlige alder i din jurisdiktion for samtykke til internettjenester. Vi indsamler ikke bevidst data fra børn under denne alder. Hvis en forælder eller værge bliver opmærksom på, at deres barn har givet os personlige oplysninger uden deres samtykke, skal de kontakte os på info@skinchange.ai, og vi vil straks slette sådanne data.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SIKKERHED</h2>
                <p className="mb-4">
                  Vi er forpligtet til at beskytte dine personoplysninger. Vi bruger sikkerhedsforanstaltninger i overensstemmelse med branchestandarder, herunder:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Kryptering:</strong> Alle følsomme data (f.eks. billeder, personlige oplysninger) krypteres under overførsel.</li>
                  <li><strong>Adgangskontrol:</strong> Kun autoriseret personale med et legitimt behov kan få adgang til dine personoplysninger.</li>
                  <li><strong>Regelmæssige revisioner:</strong> Vi udfører regelmæssige sikkerhedsrevisioner for at sikre sikkerheden af vores systemer. I tilfælde af et sikkerhedsbrud vil vi underrette de berørte brugere inden for 72 timer, i overensstemmelse med GDPR og anden gældende lovgivning.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">ÆNDRINGER I DENNE PRIVATLIVSPOLITIK</h2>
                <p className="mb-4">
                  Vi kan opdatere denne privatlivspolitik fra tid til anden. Du vil blive underrettet om væsentlige ændringer via e-mail eller gennem appen. Fortsat brug af appsene efter disse ændringer indikerer din accept af den opdaterede politik.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">DIT SAMTYKKE</h2>
                <p className="mb-4">
                  Vi overholder den europæiske generelle databeskyttelsesforordning (&quot;GDPR&quot;). Ved at bruge vores tjenester giver du samtykke til vores behandling af dine oplysninger som beskrevet i denne privatlivspolitik nu og som ændret af os. &quot;Behandling&quot; betyder brug af cookies på en computer/håndholdt enhed eller brug eller håndtering af oplysninger på enhver måde, herunder, men ikke begrænset til, indsamling, lagring, sletning, brug, kombination og videregivelse af oplysninger, som alle vil finde sted inden for EU. Hvis du bor uden for Danmark, vil dine oplysninger blive overført, behandlet og opbevaret der i overensstemmelse med Danmarks privatlivsstandarder, som overholder GDPR.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">KONTAKT OS</h2>
                <p className="mb-4">
                  Hvis du har spørgsmål om privatliv under brug af vores tjenester eller spørgsmål om vores praksis, bedes du kontakte os via e-mail på info@skinchange.ai.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">INTRODUCTION</h2>
                <p className="mb-4">
                  This privacy policy governs your use of the services provided by SkinChange.AI ApS (hereinafter referred to as &apos;SkinChange.AI&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;). Our main purposes are (1) to assist with the identification and tracking of skin changes via our Skin Monitoring APP, and (2) to provide users with quick responses to skin-related inquiries from our team of dermatologists through Skind.
                </p>
                <p className="mb-4">
                  If you have any questions or comments about this privacy policy, you can contact us at info@skinchange.ai.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">Data controller</h2>
                <p className="mb-4">
                  SkinChange.AI is the controller for the personal data collected from users. We are committed to handling your personal data in compliance with the European General Data Protection Regulation (GDPR) and applicable local laws. If you reside outside the EU, local data protection laws may also apply, but we will follow the GDPR standards.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">USER PROVIDED INFORMATION</h2>
                <p className="mb-4">
                  We collect only the information necessary for the satisfactory and safe use of our products. You will be asked to give explicit and specific consent for each category of information we collect, and you can withdraw your consent at any time by contacting us at info@skinchange.ai.
                </p>
                <p className="mb-4">
                  When you register for our application, the following information is collected:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Email address:</strong> For sending a sign-in link to verify your identity and grant access to our services.</li>
                  <li><strong>Transaction-related information:</strong> This includes any information required for billing or purchases you make.</li>
                  <li><strong>Images:</strong> If you upload pictures of your skin for analysis, they are stored securely for the purpose of providing the service.</li>
                  <li><strong>Support data:</strong> Any information you provide when contacting our support team.</li>
                  <li><strong>Optional Personal Data:</strong> You may choose to upload personal details, such as name, date of birth, address, and phone number. Except for the phone number this is required for identity verification by Danish health authorities and is used for this purpose. Your phone number is used for login and emergency calls.</li>
                  <li><strong>Health related data:</strong> When uploading a case in Skind you will be prompted for health-related data, relevant for the case in question.</li>
                </ul>
                <p className="mb-4">
                  <strong>Purpose of Use:</strong> This data is used for user authentication, providing personalized service, and fulfilling legal obligations such as identity verification. We will also use your contact information to send you important notifications, training materials, and, with your consent, marketing materials. You will be able to manage your preferences for receiving marketing communications directly in the app or by emailing us at info@skinchange.ai.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">AUTOMATICALLY COLLECTED INFORMATION</h2>
                <p className="mb-4">
                  We collect certain information automatically to enhance the app experience:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Device Information:</strong> Including mobile device type, operating system version, and unique device identifiers.</li>
                  <li><strong>Interaction Data:</strong> Data on how you use the app, such as feature usage and uploaded content.</li>
                </ul>
                <p className="mb-4">
                  <strong>Purpose of Use:</strong> Automatically collected data helps us troubleshoot issues, improve app performance, and enhance user experience.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">COOKIES AND TRACKING TECHNOLOGIES</h2>
                <p className="mb-4">
                  We use cookies and similar technologies to improve the app experience. Cookies help store preferences and enhance performance. You can manage or disable cookies through your browser settings.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">LOCATION INFORMATION</h2>
                <p className="mb-4">
                  Our application does <strong>not</strong> collect precise real-time location information as it is not necessary for the quality of our service.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">THIRD PARTY DATA SHARING</h2>
                <p className="mb-4">
                  We do not sell your personal data or share it with third parties for marketing purposes. Anonymized and aggregated data may be shared with third-party service providers to improve our application, but this data cannot be traced back to you.
                </p>
                <p className="mb-4">
                  We share data with trusted third-party providers who are bound by our privacy policies and the GDPR. These providers include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Cloud Storage Providers:</strong> For securely storing data.</li>
                  <li><strong>Medical clinic partners:</strong> For apply and maintain proper diagnostics</li>
                  <li><strong>Science institutions:</strong> For understanding app usage patterns and improving functionality.</li>
                  <li><strong>Analytics Services:</strong> For understanding app usage patterns and improving functionality.</li>
                  <li><strong>Payment providers:</strong> For state of the art service and secure payment options.</li>
                </ul>
                <p className="mb-4">
                  We may also disclose your information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>As required by law</strong> (e.g., to comply with legal obligations or respond to legal processes).</li>
                  <li><strong>To protect safety</strong> (e.g., if we believe it&apos;s necessary to protect the safety or rights of users, investigate fraud, or comply with government requests).</li>
                  <li><strong>In the event of a merger or acquisition:</strong> You will be notified via email and/or a prominent notice on our website if there is a change in ownership or use of your data.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">USER RIGHTS UNDER GDPR</h2>
                <p className="mb-4">
                  As a user, you have specific rights under GDPR regarding your personal data. These include:
                </p>
                <ol className="list-decimal pl-6 mb-4 space-y-2">
                  <li><strong>Right to Access:</strong> You may request a copy of the personal data we hold about you at any time. Please contact us at info@skinchange.ai to make a request.</li>
                  <li><strong>Right to Rectification:</strong> You have the right to correct any inaccuracies in your personal data. This can be done via your account settings or by emailing us.</li>
                  <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You can request the deletion of your personal data, subject to certain legal conditions. Data that is critical to the functioning of the apps may be retained until your account is deleted.</li>
                  <li><strong>Right to Restrict Processing:</strong> You can request that we limit the processing of your data under certain conditions (e.g., during disputes regarding accuracy).</li>
                  <li><strong>Right to Data Portability:</strong> You can request a copy of the personal data you have provided in a machine-readable format. This will be provided to you via email or a download link.</li>
                  <li><strong>Right to Object:</strong> You may object to the processing of your data, particularly in cases of direct marketing. To exercise this right, adjust your settings within the apps or email us at info@skinchange.ai.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You may withdraw your consent to data processing at any time by emailing us or using the settings within the apps.</li>
                </ol>
                <p className="mb-4">
                  When you request access, rectification, erasure, or portability, we may require additional information to verify your identity before fulfilling your request, ensuring the security of your data.
                </p>
                <p className="mb-4">
                  You have the right to complain regarding the processing of personal data concerning you to the supervisory authority, which in Denmark is the Danish Data Protection Agency: Datatilsynet Borgergade 28, 1300 København K, Phone no.: +45 3319 3200, E-mail: dt@datatilsynet.dk
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">DATA RETENTION POLICY</h2>
                <p className="mb-4">
                  We retain user-provided information for as long as your account remains active and for a reasonable time thereafter, subject to legal requirements. Automatically collected data is retained for up to 24 months.
                </p>
                <p className="mb-4">
                  <strong>Retention Periods:</strong>
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Images and health-related data:</strong> Retained for 6 months after account deletion, unless legally required to retain for longer.</li>
                  <li><strong>Transaction and support data:</strong> Retained for legal and audit purposes for up to 7 years.</li>
                  <li><strong>Automatically collected data:</strong> Retained for 12 months after inactivity.</li>
                </ul>
                <p className="mb-4">
                  You can request data deletion at any time by contacting info@skinchange.ai.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">OPT-OUT MECHANISM</h2>
                <p className="mb-4">
                  You can manage your data preferences within the apps by adjusting the privacy settings or contacting us directly. To request account deletion, please email info@skinchange.ai. Note that uninstalling the app will not automatically delete your data.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">CHILDREN</h2>
                <p className="mb-4">
                  Our services are intended for individuals aged 18 and older, or the legal age in your jurisdiction for consent to internet services. We do not knowingly collect data from children under this age. If a parent or guardian becomes aware that their child has provided us with personal information without their consent, they should contact us at info@skinchange.ai, and we will promptly delete such data.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SECURITY</h2>
                <p className="mb-4">
                  We are committed to safeguarding your personal data. We use industry-standard security measures, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Encryption:</strong> All sensitive data (e.g., images, personal data) is encrypted in transit.</li>
                  <li><strong>Access Controls:</strong> Only authorized personnel with a legitimate need can access your personal data.</li>
                  <li><strong>Regular Audits:</strong> We conduct regular security audits to ensure the safety of our systems. In the event of a security breach, we will notify affected users within 72 hours, in compliance with GDPR and other applicable laws.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. You will be notified of any material changes via email or through the app. Continued use of the app after these changes indicates your acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">YOUR CONSENT</h2>
                <p className="mb-4">
                  We adhere to the European General Data Protection Regulation (&quot;GDPR&quot;). By using our services, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. &quot;Processing,&quot; means using cookies on a computer/handheld device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining, and disclosing information, all of which activities will take place within the European Union (EU). Also, if you reside outside the country of Denmark your information will be transferred, processed, and stored there under the country of Denmark&apos;s privacy standards, which is in compliance with the European General Data Protection Regulation (&quot;GDPR&quot;).
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">CONTACT US</h2>
                <p className="mb-4">
                  If you have any questions regarding privacy while using our services, or have questions about our practices, please contact us via email at info@skinchange.ai.
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
