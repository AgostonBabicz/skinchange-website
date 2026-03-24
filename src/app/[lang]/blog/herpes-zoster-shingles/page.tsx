import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Link from 'next/link';
import Script from 'next/script';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return isDa
    ? {
        title: 'Hvad er Helvedesild? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om helvedesild (herpes zoster): hvad det er, hvorfor det opstår, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'hvad er helvedesild, helvedesild symptomer, helvedesild årsager, helvedesild behandling, herpes zoster, hudlæge helvedesild, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            da: 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            en: 'https://www.skinchange.dk/en/blog/herpes-zoster-shingles',
          },
        },
      }
    : {
        title: 'What is Shingles (Herpes Zoster)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about shingles: what it is, why it happens, who gets it and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'what is shingles, shingles symptoms, shingles causes, shingles treatment, herpes zoster, dermatologist shingles, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/herpes-zoster-shingles',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            da: 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            en: 'https://www.skinchange.dk/en/blog/herpes-zoster-shingles',
          },
        },
      };
}

export default function HerpesZosterShinglesPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Helvedesild? Årsager, Symptomer og Behandling'
      : 'What is Shingles (Herpes Zoster)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til helvedesild: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to shingles: what it is, causes, symptoms and treatment options.',
    image: '/blog-herpes-zoster.jpg',
    datePublished: '2026-03-16',
    dateModified: '2026-03-16',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#peter-bjerring',
      name: 'Peter Bjerring',
      jobTitle: isDa ? 'Speciallæge i hudsygdomme' : 'Consultant Dermatologist',
      url: `https://www.skinchange.dk/${lang}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SKIND',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.skinchange.dk/SKIND_logo_dark.svg',
      },
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: isDa
      ? [
          {
            '@type': 'Question',
            name: 'Hvad er helvedesild?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Helvedesild er en viral infektion forårsaget af varicella-zoster-virus – den samme virus, der giver skoldkopper. Efter at man har haft skoldkopper, forbliver virussen inaktiv i nervesystemet og kan reaktivere sig år senere og give et smertefuldt udslæt langs en nervebane.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvem er i risiko for at få helvedesild?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alle, der har haft skoldkopper, kan i princippet udvikle helvedesild. Risikoen stiger markant efter 50-årsalderen og er øget hos personer med svækket immunforsvar, fx på grund af sygdom, immunsupprimerende medicin eller kronisk stress.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp ved helvedesild?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg lægehjælp straks ved første tegn på helvedesild – brændende smerte eller prikken fulgt af udslæt. Tidlig antiviralbehandling (inden for 72 timer) mindsker varighed og risiko for komplikationer. SKIND giver dig adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is shingles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Shingles is a viral infection caused by the varicella-zoster virus — the same virus that causes chickenpox. After chickenpox, the virus remains dormant in the nervous system and can reactivate years later, producing a painful rash along a nerve pathway.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who is at risk of developing shingles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Anyone who has had chickenpox can potentially develop shingles. The risk increases significantly after the age of 50 and is higher in people with a weakened immune system, for example due to illness, immunosuppressive medication or chronic stress.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for shingles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek medical attention immediately at the first signs of shingles — burning pain or tingling followed by a rash. Early antiviral treatment (within 72 hours) reduces duration and the risk of complications. SKIND gives you access to a dermatologist within 48 hours.',
            },
          },
        ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Navigation lang={lang} />

        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href={`/${lang}`} className="hover:text-[#304ffe]">
                {isDa ? 'Forside' : 'Home'}
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-[#304ffe]">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">
                {isDa ? 'Hvad er Helvedesild?' : 'What is Shingles?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">16. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Helvedesild? Årsager, Symptomer og Behandling'
                : 'What is Shingles (Herpes Zoster)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-herpes-zoster.jpg"
                alt={
                  isDa
                    ? 'Helvedesild – viral hudlidelse behandling'
                    : 'Shingles – viral skin condition treatment'
                }
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/60 to-transparent" />
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#304ffe] to-[#1a237e] rounded-full flex items-center justify-center text-white font-bold text-xs">
                SC
              </div>
              <div>
                <p className="font-semibold text-gray-900">SkinChange.AI</p>
                <p className="text-sm text-gray-600">
                  {isDa ? 'Medicinsk redaktion' : 'Medical editorial team'}
                </p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                {isDa ? (
                  <>
                    <strong>Helvedesild (herpes zoster) er en smertefuld viral infektion</strong>, der
                    rammer omkring én million mennesker i USA alene hvert år og er langt mere udbredt i
                    Europa. Det er ikke en ny infektion – det er en reaktivering af en virus, du allerede
                    bærer.
                  </>
                ) : (
                  <>
                    <strong>Shingles (herpes zoster) is a painful viral infection</strong> that affects
                    around one million people in the US alone each year and is similarly prevalent across
                    Europe. It is not a new infection — it is a reactivation of a virus you already carry.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad helvedesild er, hvad der forårsager reaktiveringen, hvordan det ser ud, og hvad du kan gøre for at reducere varighed og risiko for komplikationer.'
                  : 'In this article we explain exactly what shingles is, what causes the reactivation, what it looks like, and what you can do to reduce its duration and the risk of complications.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is shingles */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er helvedesild?' : 'What is shingles?'}
              </h2>
              <p>
                {isDa
                  ? 'Helvedesild er en viral infektion forårsaget af varicella-zoster-virus (VZV) – den samme virus, der er ansvarlig for skoldkopper (varicella). Når man som barn – eller som voksen – har haft skoldkopper og er kommet sig igen, uddøer virussen ikke. Den trækker sig tilbage ind i nervesystemet og ligger inaktiv i sensoriske nerveceller (dorsale rodganglia), potentielt i årtier.'
                  : 'Shingles is a viral infection caused by the varicella-zoster virus (VZV) — the same virus responsible for chickenpox (varicella). When you recover from chickenpox, the virus does not die out. It retreats into the nervous system and lies dormant in sensory nerve cells (dorsal root ganglia), potentially for decades.'}
              </p>
              <p>
                {isDa
                  ? 'Når immunforsvaret svækkes — af alder, sygdom, stress eller medicin — kan virussen reaktivere sig, rejse langs nervebaner og nå huden, hvor den forårsager det karakteristiske helvedesilds-udslæt.'
                  : 'When the immune system weakens — through age, illness, stress or medication — the virus can reactivate, travel along nerve pathways and reach the skin, where it causes the characteristic shingles rash.'}
              </p>
              <p>
                {isDa
                  ? 'Helvedesild er ikke smitsomt i samme forstand som skoldkopper: man kan ikke "få helvedesild" fra en person med helvedesild, men hvis man aldrig har haft skoldkopper eller ikke er vaccineret, kan man smitte sig med VZV fra blærerne og dermed få skoldkopper.'
                  : 'Shingles is not contagious in the same way as chickenpox: you cannot "catch shingles" from someone who has it, but if you have never had chickenpox or are unvaccinated, you can contract VZV from the blisters and subsequently develop chickenpox.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser helvedesild ud?' : 'What does shingles look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Helvedesild forløber typisk i faser og følger et karakteristisk mønster:'
                  : 'Shingles typically progresses in stages and follows a characteristic pattern:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Prodromalfase (1–5 dage):' : 'Prodromal phase (1–5 days):'}</strong>{' '}
                  {isDa
                    ? 'Brændende, prikkende eller ømhed langs en bestemt del af kroppen – typisk på én side af kroppen. Feber, træthed og lyssensitivitet kan forekomme.'
                    : 'Burning, tingling or tenderness along a specific part of the body — typically on one side. Fever, fatigue and sensitivity to light may occur.'}
                </li>
                <li>
                  <strong>{isDa ? 'Udslætsfase (2–4 uger):' : 'Rash phase (2–4 weeks):'}</strong>{' '}
                  {isDa
                    ? 'Et smertefuldt, rødt udslæt opstår i et bånd eller klynge langs nervebanen – oftest rundt om torso, men kan ramme ansigt, øjne og mund. Inden for få dage udvikles væskefyldte blærer, der derefter brister og danner gule skorper.'
                    : 'A painful red rash appears in a band or cluster along the nerve path — most often around the torso, but can affect the face, eyes and mouth. Within a few days fluid-filled blisters develop, which then burst and form yellow crusts.'}
                </li>
                <li>
                  <strong>{isDa ? 'Helingsfase:' : 'Healing phase:'}</strong>{' '}
                  {isDa
                    ? 'Skorperne falder af i løbet af 2–4 uger. Huden kan efterlade pletter eller ar, men dette er ikke altid tilfældet.'
                    : 'The crusts fall off within 2–4 weeks. The skin may leave marks or scars, but this is not always the case.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Det er afgørende at bemærke, at herpes zoster ophthalmicus – helvedesild nær øjet – er en alvorlig tilstand der kan true synet, og som kræver øjeblikkelig lægebehandling.'
                  : 'It is crucial to note that herpes zoster ophthalmicus — shingles near the eye — is a serious condition that can threaten vision and requires immediate medical attention.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår helvedesild?' : 'Why does shingles happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Reaktiveringen af VZV sker, når immunforsvaret ikke længere er stærkt nok til at holde virussen inaktiv. De vigtigste udløsende faktorer er:'
                  : 'Reactivation of VZV occurs when the immune system is no longer strong enough to keep the virus dormant. The main triggering factors are:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Alder' : 'Age'}
              </h3>
              <p>
                {isDa
                  ? 'Det immunforsvar, der holder VZV inaktivt, svækkes naturligt med alderen. Risikoen for helvedesild stiger markant efter 50 år, og mere end halvdelen af alle tilfælde sker hos personer over 60. Cirka ét ud af tre mennesker vil udvikle helvedesild i løbet af deres liv.'
                  : 'The immune response that keeps VZV dormant naturally weakens with age. The risk of shingles increases markedly after age 50, and more than half of all cases occur in people over 60. Approximately one in three people will develop shingles during their lifetime.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Svækket immunforsvar' : 'Weakened immune system'}
              </h3>
              <p>
                {isDa
                  ? 'Tilstande som HIV/AIDS, autoimmune sygdomme, kræft og organtransplantation — samt immunsupprimerende behandlinger — øger risikoen for helvedesild betydeligt. Disse personer kan også have mere alvorlige og langvarige udbrud.'
                  : 'Conditions such as HIV/AIDS, autoimmune diseases, cancer and organ transplantation — as well as immunosuppressive therapies — significantly increase the risk of shingles. These individuals may also experience more severe and prolonged outbreaks.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Stress' : 'Stress'}
              </h3>
              <p>
                {isDa
                  ? 'Alvorlig fysisk eller psykisk stress kan midlertidigt svække immunforsvaret og dermed øge risikoen for reaktivering af VZV. Mange patienter kan sætte deres første udbrud i sammenhæng med en særligt belastende periode.'
                  : 'Severe physical or psychological stress can temporarily weaken the immune system, thereby increasing the risk of VZV reactivation. Many patients can link their first outbreak to a particularly stressful period.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får helvedesild?' : 'Who gets shingles?'}
              </h2>
              <p>
                {isDa
                  ? 'Enhver, der har haft skoldkopper, bærer VZV og kan potentielt udvikle helvedesild. Visse grupper er dog i særlig høj risiko:'
                  : 'Anyone who has had chickenpox carries VZV and can potentially develop shingles. Certain groups are at particularly high risk:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Ældre voksne (50+):' : 'Older adults (50+):'}</strong>{' '}
                  {isDa
                    ? 'Risikoen stiger kraftigt med alderen. Over 80-årige har 8–10 gange højere risiko end 20-årige.'
                    : 'Risk increases sharply with age. Adults over 80 have 8–10 times the risk compared to those in their 20s.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkede personer:' : 'Immunocompromised individuals:'}</strong>{' '}
                  {isDa
                    ? 'Kræftpatienter i behandling, HIV-positive, og dem på langvarig steroid- eller biologisk behandling.'
                    : 'Cancer patients undergoing treatment, HIV-positive individuals, and those on long-term steroid or biological therapy.'}
                </li>
                <li>
                  <strong>
                    {isDa
                      ? 'Dem der fik skoldkopper i en ung alder:'
                      : 'Those who had chickenpox at a young age:'}
                  </strong>{' '}
                  {isDa
                    ? 'Tidlig skoldkoppesinfektion, særligt i de første 12 levemåneder, er forbundet med øget risiko for helvedesild i barndommen og ung voksenalder.'
                    : 'Early chickenpox infection, particularly in the first 12 months of life, is associated with an increased risk of shingles in childhood and young adulthood.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Behandling og forebyggelse' : 'Treatment and prevention'}
              </h2>
              <p>
                {isDa
                  ? 'Tidlig behandling er afgørende. Jo hurtigere du starter antiviralbehandling, desto kortere og mildere bliver udbruddet:'
                  : 'Early treatment is crucial. The sooner you start antiviral therapy, the shorter and milder the outbreak:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Antivirale lægemidler' : '💊 Antiviral medications'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Aciclovir, valaciclovir eller famciclovir bør startes inden for 72 timer fra udslættets opståen. De afkorter udbruddet og reducerer risikoen for post-herpeticsk neuralgi (PHN).'
                      : 'Aciclovir, valaciclovir or famciclovir should be started within 72 hours of rash onset. They shorten the outbreak and reduce the risk of post-herpetic neuralgia (PHN).'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Smertebehandling' : '🩺 Pain management'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Paracetamol, NSAIDs og i sværere tilfælde opioider, tricykliske antidepressiva eller gabapentin kan bruges til at håndtere de ofte intense smerter under og efter udbruddet.'
                      : 'Paracetamol, NSAIDs and in more severe cases opioids, tricyclic antidepressants or gabapentin can be used to manage the often intense pain during and after the outbreak.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💉 Vaccination' : '💉 Vaccination'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Helvedesildvaccinen (rekombinant zostervaccine, Shingrix) anbefales til alle over 50 år, selv hvis man tidligere har haft helvedesild. Den reducerer risikoen for helvedesild med op til 90% og risikoen for PHN med over 85%.'
                      : 'The shingles vaccine (recombinant zoster vaccine, Shingrix) is recommended for all adults over 50, even if they have previously had shingles. It reduces the risk of shingles by up to 90% and the risk of PHN by over 85%.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '⚠️ Post-herpeticsk neuralgi (PHN)' : '⚠️ Post-herpetic neuralgia (PHN)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'PHN er den mest almindelige komplikation til helvedesild: vedvarende neuropatiske smerter, der varer måneder eller år efter at huden er helet. Tidlig antiviralbehandling er den vigtigste forebyggende faktor. Søg hjælp straks, hvis smerterne fortsætter efter heling.'
                      : 'PHN is the most common complication of shingles: persistent neuropathic pain lasting months or years after the skin has healed. Early antiviral treatment is the most important preventive factor. Seek help immediately if pain persists after healing.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Helvedesild er klassificeret som 1E91 Zoster i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden er karakteriseret ved et smertefuldt udslæt med dermatomal fordeling, forårsaget af reaktivering af varicella-zoster-virus, og behandles med antivirale midler og smertebehandling.'
                    : "Shingles is classified as 1E91 Zoster in the WHO's International Classification of Diseases (ICD-11). The condition is characterised by a painful rash with a dermatomal distribution, caused by reactivation of the varicella-zoster virus, and is treated with antivirals and pain management."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Kan man få helvedesild mere end én gang?'
                      : 'Can you get shingles more than once?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja. Selvom de fleste mennesker kun oplever ét udbrud, kan helvedesild vende tilbage – særligt hos immunsvækkede personer. Vaccination reducerer risikoen for tilbagefald.'
                      : 'Yes. Although most people only experience one outbreak, shingles can recur — particularly in immunocompromised individuals. Vaccination reduces the risk of recurrence.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Er helvedesild smitsomt over for andre?'
                      : 'Is shingles contagious to others?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Virussen kan kun smitte fra de åbne blærer, ikke via luften. Personer, der aldrig har haft skoldkopper eller er uvaccinerede, kan smitte sig med VZV fra blærerne og få skoldkopper – ikke helvedesild. Undgå kontakt med gravide, nyfødte og immunsvækkede, mens blærerne er aktive.'
                      : 'The virus can only spread from open blisters, not through the air. Individuals who have never had chickenpox or are unvaccinated can contract VZV from the blisters and develop chickenpox — not shingles. Avoid contact with pregnant women, newborns and immunocompromised individuals while blisters are active.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Hvornår skal jeg kontakte en læge?'
                      : 'When should I contact a doctor?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Straks ved mistanke om helvedesild – specielt ved udslæt nær øjet, ved feber, eller ved kraftige smerter. Antiviralbehandling er bedst inden for 72 timer fra udslættets start. SKIND giver dig adgang til en hudlæge inden for 48 timer.'
                      : 'Immediately upon suspicion of shingles — especially with a rash near the eye, fever, or severe pain. Antiviral treatment works best within 72 hours of rash onset. SKIND gives you access to a dermatologist within 48 hours.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en diagnose inden for 48 timer' : 'Get a diagnosis within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig diagnose og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal diagnosis and treatment plan from a certified dermatologist — no hospital waiting list.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${lang}/download`}
                    className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#1a237e] rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    {isDa ? 'Download appen' : 'Download the app'}
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-sm text-gray-500">
                  <strong>{isDa ? 'Ansvarsfraskrivelse:' : 'Disclaimer:'}</strong>{' '}
                  {isDa
                    ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Kontakt altid en hudlæge for personlig rådgivning.'
                    : 'This article is for informational purposes only and does not replace professional medical advice. Always consult a dermatologist for personal guidance.'}
                </p>
              </div>
            </div>
          </div>
        </article>

        <Footer lang={lang} />
      </main>
    </>
  );
}
