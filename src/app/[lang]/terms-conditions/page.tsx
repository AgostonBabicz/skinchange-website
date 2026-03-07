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
    title: isDa ? 'Vilkår & Betingelser | SKIND' : 'Terms & Conditions | SKIND',
    description: isDa 
      ? 'Læs vores vilkår og betingelser for brug af SKIND platformen.' 
      : 'Read our terms and conditions for using the SKIND platform.',
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
            {isDa ? 'Vilkår & Betingelser' : 'Terms & Conditions'}
          </h1>
          <p className="text-gray-500 text-center mb-16">
            {isDa ? 'Sidst opdateret: Marts 2025' : 'Last updated: March 2025'}
          </p>

          <div className="prose prose-lg max-w-none text-gray-600">
            {isDa ? (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">AFTALE</h2>
                <p className="mb-4">
                  Venligst læs alle vilkår grundigt, før du bruger vores tjenester. SkinChange.AI ApS (SkinChange.AI) er virksomheden bag appen og de relaterede tjenester, som findes på www.skinchangeai.com. Ved at bruge tjenesterne leveret af SkinChange.AI accepterer du disse Vilkår for Brug samt de regler for privatlivspolitik, der er angivet på hjemmesiden. Hvis du ikke accepterer disse vilkår, er du ikke berettiget til at benytte tjenesterne. For at bruge SkinChange.AI&apos;s tjenester skal du være fyldt 18 år og have juridisk beføjelse til at indgå bindende aftaler. Hvis du bliver opmærksom på, at brugere ikke opfylder disse krav, bedes du kontakte SkinChange.AI på info@skinchange.ai, så vi kan tage de nødvendige foranstaltninger.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">OPDATERINGER</h2>
                <p className="mb-4">
                  Tjenesterne forbedres løbende, og nogle gange ændres servicevilkårene og brugsbetingelserne i overensstemmelse hermed. Hvis en ændring kræver en ny godkendelse fra brugeren, vil brugeren blive spurgt/kontaktet direkte. Du vil altid kunne finde den nyeste version på vores hjemmeside: www.skinchangeai.com.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">PRODUKT/TJENESTER</h2>
                <p className="mb-4">
                  SkinChange.AI ApS tilbyder tjenester gennem to apps: Skin Monitoring App og Skind (SkinChange.AI&apos;s klinik App). Skin Monitoring-appen er et værktøj beregnet til raske personer, der ønsker at holde øje med udviklingen af deres hud, og appen giver hverken medicinske vurderinger eller diagnoser. Skind er en gebyrbaseret tjeneste, der er designet specifikt til at imødekomme dine dermatologiske behov. Skind er for nuværende kun tilgængelig i Europa. Vores service muliggør oprettelse og håndtering af medicinske sager i Skind. Hver sag bliver vurderet af to certificerede hudlæger, typisk inden for 48 timer, for at give en endelig diagnose af brugerens aktuelle medicinske tilstand. I overensstemmelse med gældende lovgivning skal en ansvarlig læge udpeges til at sikre korrekt vurdering og kvalitet. Den ansvarlige læge udfører regelmæssige reviews af sagerne. Skind understøtter brugerne gennem hele sagsindsendelsesprocessen og guider dem i at give detaljerede medicinske beskrivelser, indsende relevante billeder og besvare essentielle spørgsmål for at lette vurderingen af deres sag. Brugerne kan til enhver tid oprette en ny sag, og i denne session kan de grundigt beskrive deres medicinske situation gennem billeder, angivelse af placering og besvarelse af udvalgte spørgsmål. Brugerne har også mulighed for at ændre deres personlige oplysninger, der er gemt i de to apps, når som helst. For at holde vores brugere informeret om opdateringer vedrørende status for deres sager og hud-monitorering, anvender Skind push-notifikationer, som kan deaktiveres når som helst via indstillinger i appen. Derudover sender vi emails omkring status på indsendte sager for at sikre, at relevant information modtages så hurtigt som muligt.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">OPHAVSRET OSV.</h2>
                <p className="mb-4">
                  Servicen og indholdet tilhører SkinChange.AI ApS. Vi giver dig tilbagekaldelig tilladelse til at gøre brug af SkinChange.AI&apos;s tjeneste og tilbagekaldelig tilladelse til personlig, ikke-kommerciel brug af indholdet (samlet benævnt &quot;adgang&quot;). Denne adgang forbliver i kraft, indtil den kan opsiges af dig eller SkinChange.AI ApS. Du lover og accepterer, at du bruger tjenesten og indholdet SkinChange.AI til din egen personlige, ikke-kommercielle brug, og at du ikke vil videredistribuerer eller overføre SkinChange.AI ydelser eller indholdet. Enhver professionel brug skal godkendes i særskilt aftale med SkinChange.AI ApS.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SIKKERHED</h2>
                <p className="mb-4">
                  Datasikkerhed er af højeste prioritet, og sikkerhedsprotokollen revideres regelmæssigt. Data leveret til SkinChange.AI ApS er sikret med sikkerhedsforanstaltninger for at undgå datalækage og misbrug. Ethvert misbrug og forsøg på at få adgang til data, der leveres af andre brugere uanset metode, vil resultere i øjeblikkelig annullering af adgangen til tjenesterne og retsforfølgning, når det anses for rimeligt.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">BRUGERDATA OG AKTIVITET</h2>
                <p className="mb-4">
                  Brugeren accepterer at holde brugeroplysninger fortrolige for at undgå, at tredjepart får adgang til kontoen. Brugeren accepterer, at al information og aktivitet under dennes konto er brugerens ansvar. Brugeren accepterer, at al information og aktivitet under dennes profil(er) er brugerens ansvar. Brugeren accepterer, at hvis nogen fremsætter et krav mod SkinChange.AI ApS relateret til brugerindhold, som brugeren har leveret, eller et krav på grund af misbrug fra brugerens side, så vil brugeren, i det omfang det er tilladt i henhold til lokal lovgivning, holde SkinChange.AI ApS skadesløs fra og mod alle skader, tab og udgifter af enhver art (herunder rimelige advokatsalærer og omkostninger), der opstår som følge af et sådant krav. SkinChange.AI forbeholder sig ret til at opsige din konto og adgang til tilknyttede tjenester, med eller uden årsag, og med eller uden varsel. I et sådant tilfælde er SkinChange.AI ApS ansvarlig for at slette alle brugerdata.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">BETALING</h2>
                <p className="mb-4">
                  Der er kun betaling i Skind. Alle betalinger forfalder efter afslutningen af hver sag, efter indsendelse af alle nødvendige oplysninger, der kræves for, at vores hudlæger kan fortsætte med deres evalueringer. Betaling opkræves via brugerens valgte betalingsmetode ved afslutningen af sagen. Hver betalingstransaktion er unik og fornyes ikke automatisk; hver ny sag kræver en separat betaling efter afslutningen. Hvis vi ikke ser os i stand til at behandle sagen grundet manglende, ugyldige eller uklare data, vil der ikke blive trukket et beløb fra brugerens konto/kort. Bemærk, at der ikke er nogen refusion, når betalingen er behandlet, da betalingen svarer direkte til de ydelser, der leveres for hvert enkelt tilfælde.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SERVICEBEGRÆNSNINGER</h2>
                <p className="mb-4">
                  SkinChange.AI vil gøre en stor indsats for at holde SkinChange.AI ApS tjenesten løbende operationel. Visse tekniske problemer, vedligeholdelse, test eller opdateringer, på grund af f.eks. lovmæssige krav, kan dog resultere i midlertidig nedetid for vores tjenester. SkinChange.AI forbeholder sig ret til, med jævne mellemrum og til enhver tid, at ændre eller afbryde, midlertidigt eller permanent, funktioner og funktioner i SkinChange.AI tjenesterne. Hvor det er muligt, vil vi underrette brugerne på forhånd om afbrydelse af tjenesten. Nedetid vil alle være uden ansvar over for brugeren, undtagen hvor det er forbudt ved lov. Mens Skind (SkinChange.AI&apos;s Clinic App) letter indsendelse af hudbilleder til vurdering, er det vigtigt at forstå, at den faktiske diagnose og rådgivning om hudtilstande leveres af autoriserede hudlæger. Brugere er ansvarlige for at indsende klare og nøjagtige billeder af deres hud. Fortolkningen og diagnosen af disse billeder udføres af hudlæger. Men servicen leveret af vores apps bør ikke benyttes som det primære middel til at dække ens dermatologiske pleje. Brugere skal forstå, at det ultimative ansvar for opfølgning på deres hudpleje og enhver medicinsk rådgivning hviler på dem selv. Vores apps er ikke egnede til nødsituationer. I tilfælde af en nødsituation skal du altid kontakte din lokale alarmcentral.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SKADESLØSHOLDELSE</h2>
                <p className="mb-4">
                  Du accepterer at holde SkinChange.AI ApS skadesløs fra og mod alle skader, tab og udgifter af enhver art (herunder rimelige advokatsalærer og omkostninger), der opstår som følge af eller relateret til: (1) din overtrædelse af Aftalerne eller nogen af dem; (2) din brug eller misbrug af tjenesterne; (3) indholdet eller genstanden for enhver information, du giver SkinChange.AI; eller (4) enhver uagtsom og/eller ulovlig handling eller undladelse af dig i forbindelse med din brug eller misbrug af tjenesterne, eller enhver information leveret af SkinChange.AI ApS, herunder men ikke begrænset til krænkelse af tredjeparts intellektuelle ejendomsrettigheder, privatlivsrettigheder eller uagtsom eller ulovlig adfærd.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">ANSVARSBEGRÆNSNING</h2>
                <p className="mb-4">
                  I alle tilfælde, der opstår som følge af brugen af eller manglende evne til at bruge SkinChange.AI ApS tjenester, herunder men ikke begrænset til dens funktionaliteter eller sikkerhedsfunktioner, er appsene eller andre services fra SkinChange.AI ikke ansvarlig for indirekte, tilfældige eller følgeskader. Brugere rådes til at overholde minimumssystemkravene som anbefalet af os for at sikre optimal applikationsydelse. Du accepterer, at dit eneste og eksklusive middel til eventuelle problemer eller utilfredshed med tjenesten SkinChange.AI ApS er at afinstallere enhver SkinChange.AI software og stoppe brugen af SkinChange.AI ApS tjenesten. Du accepterer, at SkinChange.AI ApS ikke har nogen forpligtelse eller ansvar som følge af eller relateret til tredjepartsapplikationer. Dit eneste og eksklusive middel, som med hensyn til SkinChange.AI ApS, for eventuelle problemer eller utilfredshed med tredjepartsapplikationer eller indholdet deraf, er at afinstallere og/eller stoppe med at bruge sådanne tredjepartsapplikationer. Under ingen omstændigheder vil SkinChange.AI ApS, dets ledere, aktionærer, medarbejdere, agenter, direktører, datterselskaber, tilknyttede virksomheder, efterfølgere, overdragere, leverandører eller licensgivere være ansvarlige for: (1) tab eller skade, herunder indirekte, særlige, tilfældige, strafbare eller eksemplariske skader (2) enhver: (a) tab af brug; (b) tab af data; (c) tab af forretning; (d) tab af fortjeneste; eller (e) beskadigelse af enheder, i det omfang du kunne have undgået en sådan skade ved at følge vores råd om at anvende opdateringer til tjenesterne eller indholdet, eller hvis en sådan skade skyldes, at du ikke har fulgt korrekt installationsinstruktioner eller have de minimumskrav til systemkrav, der er anbefalet af os, i alle tilfælde, der opstår som følge af brug af eller manglende evne til at bruge tjenesterne fra SkinChange.AI, tredjepartsapplikationer eller tredjeparts applikationsindhold, uden hensyn til, om SkinChange.AI er blevet advaret om muligheden for disse skader, og selvom et middel ikke opfylder dets væsentlige formål; (3) krav vedrørende SkinChange.AI tjenesten, tredjepartsapplikationer eller tredjeparts applikationsindhold, der overstiger de beløb, du har betalt til SkinChange.AI under de pågældende tidligere tolv måneder, eller (4) manglende opfyldelse eller utilstrækkelig opfyldelse eller forsinkelse af de forpligtelser, der følger af aftalerne, forårsaget af force majeure eller enhver årsag, der ikke med rimelighed kan forudses eller uden for SkinChange.AI ApS rimelige kontrol.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">GDPR</h2>
                <p className="mb-4">
                  SkinChange.AI ApS er forpligtet til at beskytte dine personlige data og respektere dit privatliv. Vi overholder GDPR-reglerne. For detaljerede oplysninger om, hvordan vi indsamler, bruger og beskytter dine data, og for at lære om dine rettigheder under GDPR, henvises vi til vores Privatlivspolitik.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">KONTAKT OS</h2>
                <p className="mb-4">
                  For spørgsmål eller bekymringer vedrørende disse servicevilkår, er du velkommen til at kontakte os på info@skinchange.ai. Husk at du ikke bør sende emails med helbredsoplysninger eller andre personlige data. Ved at bruge tjenesterne fra SkinChange.AI ApS accepterer du de vilkår og betingelser, der er beskrevet ovenfor. SkinChange.AI ApS, Hindbærhaven 48, 7120 Vejle Ø, Danmark, info@skinchange.ai. Hvis du har en klage kan du kontakte os på: info@skinchange.ai. Du kan også rette din klage direkte til Styrelsen for Patientklager via stpk@stpk.dk.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">AGREEMENT</h2>
                <p className="mb-4">
                  Please review all the Terms carefully before using our services. SkinChange.AI ApS (SkinChange.AI) is the company behind the Apps and related services can be found on www.skinchangeai.com. By using the services provided by SkinChange.AI, you agree to these Terms of Service and Use and to the Privacy Policy rules set forth on the homepage. If you do not agree with these terms, you are not eligible to use the services. To use the SkinChange.AI services, you must be 18 years old and have the power to form legally binding contracts. If you become aware that users do not fulfill these requirements, please contact SkinChange.AI at info@skinchange.ai, and we will take the necessary measures.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">UPDATES</h2>
                <p className="mb-4">
                  The services are ongoingly improved, and sometimes the Terms of Service and Use will be changed accordingly. If a change will require a new approval from the user, the user will be prompted/contacted directly. You will always be able to find the latest version on our website: www.skinchangeai.com.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">PRODUCT/SERVICES</h2>
                <p className="mb-4">
                  SkinChange.AI provides services through two apps: Skin Monitoring APP and Skind (SkinChange.AI&apos;s Clinic App). The Skin Monitoring app is a tool for healthy people who wants to keep an eye on the development of their skin, and it does not provide any medical assessment and no diagnosis. Skind is a fee-based service designed specifically to address your dermatological needs. Skind is currently only available in Europe. Our service facilitates the creation and management of medical cases within our application. Each case is evaluated by two certified dermatologists, typically within 48 hours, to provide a diagnosis of the user&apos;s current medical condition. In accordance with applicable legislation, a responsible physician must be appointed to ensure accurate evaluations and maintain quality. The responsible physician conducts regular reviews of the cases. Skind supports users through the entire case submission process, guiding them in providing detailed medical descriptions, submitting relevant images, and answering essential questions to assist in the evaluation of their case. Users may initiate the creation of a new case at any time, and during this session, they can thoroughly describe their medical situation through images, location identification, and responses to critical questions. Users also have the flexibility to modify their personal information stored within the application at any time. To keep our users informed of any updates regarding the status of their cases, the app utilizes push notifications, which can be disabled at any time through the mobile app&apos;s settings. Additionally we will send transactional emails about the status of submitted cases, to ensure important information to be available as soon as possible.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">COPYRIGHTS ETC.</h2>
                <p className="mb-4">
                  The service of SkinChange.AI and the content are the property of SkinChange.AI ApS. We grant you revocable permission to make use of the SkinChange.AI&apos;s service, and revocable permission to make personal, non-commercial use of the content (collectively, &quot;Access&quot;). This Access shall remain in effect until it may be terminated by you or SkinChange.AI. You promise and agree that you are using the SkinChange.AI Service and Content for your own personal, non-commercial use and that you will not redistribute or transfer the SkinChange.AI Service or the Content. Any professional use needs to be approved in separate agreement with SkinChange.AI.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SECURITY</h2>
                <p className="mb-4">
                  Data safety is of highest priority, and the safety protocol is audited regularly. Data provided to SkinChange.AI is secured with safety measures to avoid data leak and misuse. Any misuse and attempt to access data, provided by other users regardless of the method, will result in immediate cancellation of access to the services and legal prosecutions, when found reasonable.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">USER DATA AND ACTIVITY</h2>
                <p className="mb-4">
                  The user agrees to keeping user information confidential in order to avoid third party gaining access to the account. The user agrees that all information and activity under its account is of the responsibility of the user. The user agrees that all information and activity under its profile(s) is of the responsibility of the user. The user agrees that if anyone brings a claim against SkinChange.AI related to user content that the user has provided, or a claim due to misuse by the user, then, to the extent permissible under local law, the user will indemnify and hold SkinChange.AI harmless from and against all damages, losses, and expenses of any kind (including reasonable attorney fees and costs) arising out of such claim. SkinChange.AI reserves the right to terminate your account and access to associated services, with or without cause, and with or without notice. In such an event SkinChange.AI is responsible to delete all user data.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">PAYMENT</h2>
                <p className="mb-4">
                  Only Skind include payments. Users may engage with SkinChange.AI services on a per-case basis. All fees are due upon the completion of each case, following the submission of all necessary information required for our dermatologists to proceed with their evaluations. Payment is collected via the user&apos;s selected payment method at the conclusion of the case. Each payment transaction is unique and does not auto-renew; every new case requires a separate payment upon completion. Please note that there are no refunds once payment has been processed, as the payment corresponds directly to the services rendered for each individual case.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">SERVICE LIMITATIONS</h2>
                <p className="mb-4">
                  SkinChange.AI will make reasonable efforts to keep the SkinChange.AI service operational. However, certain technical difficulties, maintenance or testing, or updates required to reflect needed changes due to e.g. regulatory requirements, may result in temporary down time of our services. SkinChange.AI reserves the right, periodically and at any time, to modify or discontinue, temporarily or permanently, functions and features of the SkinChange.AI service. Where possible we will notify the users in advance of discontinuing service. Down time will all be without liability towards the user, except where prohibited by law. While Skind facilitates the submission of skin images for assessment, it is important to understand that actual diagnosis and advice on skin conditions are provided by licensed dermatologists. Users are responsible for uploading clear and accurate pictures of their skin. The interpretation and diagnosis of these images are undertaken by dermatologists. However the services provided by our apps should not be relied upon as the primary means of managing one&apos;s dermatological care. Users must understand that ultimate responsibility for following up on their skin care and any medical advice rests with them. Our apps are not suited for emergencies. In the event of an emergency you should always contact your local emergency services.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">INDEMNIFICATION</h2>
                <p className="mb-4">
                  You agree to indemnify and hold SkinChange.AI harmless from and against all damages, losses, and expenses of any kind (including reasonable attorney fees and costs) arising out of or related to: (1) your breach of the Agreements or any one of them; (2) your use or misuse of the services; (3) the content or subject matter of any information you provide to SkinChange.AI; or (4) any negligent and/or wrongful act or omission by you in your use or misuse of the services, or any information provided by SkinChange.AI, including but without limitation, infringement of third party intellectual property rights, privacy rights, or negligent or wrongful conduct.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">LIMITATION OF LIABILITY</h2>
                <p className="mb-4">
                  In all cases arising from the use of or the inability to use the SkinChange.AI services, including but not limited to its functionalities or security features, the apps or any other service from SkinChange.AI shall not be liable for any indirect, incidental, or consequential damages. Users are advised to comply with the minimum system requirements as advised by us to ensure optimal application performance. You agree that your sole and exclusive remedy for any problems or dissatisfaction with the SkinChange.AI service is to uninstall any SkinChange.AI software and to stop using the SkinChange.AI service. You agree that SkinChange.AI has no obligation or liability arising from or related to third party applications. Your sole and exclusive remedy, as with respect to SkinChange.AI, for any problems or dissatisfaction with third party applications or the content thereof, is to uninstall and/or stop using any such third party applications. In no event will SkinChange.AI, its officers, shareholders, employees, agents, directors, subsidiaries, affiliates, successors, assigns, suppliers, or licensors be liable for: (1) any loss or damage including any indirect, special, incidental, punitive or exemplary, damages (2) any: (a) loss of use; (b) loss of data; (c) loss of business; (d) loss of profits; or (e) damage to devices, to the extent you could have avoided such damage by following our advice to apply updates to the services or content or if such damage is caused by you failing to correctly follow installation instructions or have in place the minimum system requirements advised by us, In all cases arising out of the use of or inability to use the SkinChange.AI service, devices, third party applications, or third party application content, regardless of legal theory, without regard to whether SkinChange.AI has been warned of the possibility of those damages, and even if a remedy fails of its essential purpose; (3) aggregate liability for all claims relating to the SkinChange.AI service, third party applications, or third party application content more than the amounts paid by you to SkinChange.AI during the prior twelve months in question; or (4) non-performance or inadequate performance or delay to the obligations deriving from the agreements caused by force majeure or any cause which is not reasonably foreseeable or beyond SkinChange.AI&apos;s reasonable control.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">GDPR COMPLIANCE</h2>
                <p className="mb-4">
                  SkinChange.AI is committed to protecting your personal data and respecting your privacy. We comply with the GDPR regulations. For detailed information about how we collect, use, and protect your data, and to learn about your rights under GDPR, please refer to our Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">CONTACT US</h2>
                <p className="mb-4">
                  For any questions or concerns about these Terms of Service, please feel free to contact us at info@skinchange.ai. Please be aware that you should never include medical or other personal data in an email. By using the services of SkinChange.AI, you agree to the terms and conditions outlined above. SkinChange.AI ApS, Hindbærhaven 48, 7120 Vejle Ø, Denmark, info@skinchange.ai. If you have a complaint, you can contact us at: info@skinchange.ai. You can also address your complaint directly to the Danish Patient Complaints Authority (Styrelsen for Patientklager) via stpk@stpk.dk.
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
