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
        title: 'Hvad er Herpes Simplex Virus (HSV)? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om herpes simplex virus: hvad det er, hvordan HSV-1 og HSV-2 adskiller sig, hvordan udbrud ser ud, og hvilke behandlingsmuligheder der findes. Få hjælp via SKIND.',
        keywords:
          'hvad er herpes simplex, HSV-1, HSV-2, forkølelsessår, genital herpes, herpes behandling, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/herpes-simplex-virus',
        },
      }
    : {
        title: 'What is Herpes Simplex Virus (HSV)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about herpes simplex virus: what it is, how HSV-1 and HSV-2 differ, what outbreaks look like, and what treatment options are available. Get help via SKIND.',
        keywords:
          'what is herpes simplex, HSV-1, HSV-2, cold sores, genital herpes, herpes treatment, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/herpes-simplex-virus',
        },
      };
}

export default function HerpesSimplexVirusPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Herpes Simplex Virus (HSV)? Årsager, Symptomer og Behandling'
      : 'What is Herpes Simplex Virus (HSV)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til herpes simplex virus: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to herpes simplex virus: what it is, causes, symptoms and treatment options.',
    image: 'https://www.skinchange.dk/blog/herpes-simplex-virus.jpg',
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: {
      '@type': 'Organization',
      name: 'SkinChange.AI',
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
            name: 'Hvad er herpes simplex virus (HSV)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Herpes simplex virus (HSV) er en almindelig, livslang viral infektion. HSV-1 forårsager typisk forkølelsessår om munden, mens HSV-2 primært er knyttet til genital herpes. Virus forbliver inaktivt i nervesystemet efter den første infektion og kan reaktivere og give udbrud.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser et HSV-udbrud ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Et udbrud begynder typisk med prikken eller kløe i det berørte område, efterfulgt af væskefyldte blærer. Blærerne brister og danner skorper, og symptomerne forsvinder normalt inden for 2–4 uger. Virus forbliver i kroppen og kan forårsage fremtidige udbrud.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan smitter herpes simplex virus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HSV smitter gennem direkte kontakt med inficeret hud eller kropsvæsker – for eksempel ved kysse, oralsex eller samleje. Virus kan smitte selv uden synlige blærer (asymptomatisk smitte). Der er ingen kur, men antivirale lægemidler som aciclovir kan afkorte og mildne udbrud.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge hjælp for HSV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg lægehjælp ved hyppige eller svære udbrud, ved usikkerhed om diagnosen, eller hvis du er gravid og har genital herpes. SKIND giver dig adgang til en certificeret hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is herpes simplex virus (HSV)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Herpes simplex virus (HSV) is a common, lifelong viral infection. HSV-1 typically causes oral herpes (cold sores), while HSV-2 is primarily associated with genital herpes. After the initial infection, the virus lies dormant in the nervous system and can reactivate, causing outbreaks.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does an HSV outbreak look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An outbreak typically begins with tingling or itching in the affected area, followed by fluid-filled blisters. The blisters eventually burst and form crusts, with symptoms usually clearing within 2–4 weeks. The virus remains in the body and can cause future outbreaks.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does herpes simplex virus spread?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HSV spreads through direct contact with infected skin or bodily fluids — for example through kissing, oral sex or intercourse. The virus can be transmitted even without visible blisters (asymptomatic shedding). There is no cure, but antiviral medications such as aciclovir can shorten and reduce the severity of outbreaks.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek help for HSV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek medical advice for frequent or severe outbreaks, if you are unsure of your diagnosis, or if you are pregnant and have genital herpes. SKIND gives you access to a certified dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Herpes Simplex Virus?' : 'What is Herpes Simplex Virus?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">15. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Herpes Simplex Virus (HSV)? Årsager, Symptomer og Behandling'
                : 'What is Herpes Simplex Virus (HSV)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                alt={
                  isDa
                    ? 'Herpes simplex virus – hudlidelse behandling'
                    : 'Herpes simplex virus – skin condition treatment'
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
                    <strong>Herpes simplex virus (HSV) er en af de mest udbredte virale infektioner på verdensplan</strong> — det anslås,
                    at mere end to tredjedele af jordens befolkning under 50 år bærer HSV-1-infektionen. Trods udbredelsen er der
                    stadig megen forvirring og stigma forbundet med diagnosen.
                  </>
                ) : (
                  <>
                    <strong>Herpes simplex virus (HSV) is one of the most widespread viral infections in the world</strong> — it is
                    estimated that more than two-thirds of the global population under 50 carry HSV-1. Despite its prevalence, there
                    is still considerable confusion and stigma surrounding the diagnosis.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad HSV er, hvad der adskiller HSV-1 fra HSV-2, hvordan et udbrud ser ud, og hvad du kan gøre ved det.'
                  : 'In this article we explain exactly what HSV is, how HSV-1 differs from HSV-2, what an outbreak looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er herpes simplex virus?' : 'What is herpes simplex virus?'}
              </h2>
              <p>
                {isDa
                  ? 'Herpes simplex virus (HSV) er en livslang viral infektion, der forårsager udbrud af små, smertefulde blærer på huden og slimhinderne. Der findes to typer:'
                  : 'Herpes simplex virus (HSV) is a lifelong viral infection that causes outbreaks of small, painful blisters on the skin and mucous membranes. There are two main types:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>HSV-1:</strong>{' '}
                  {isDa
                    ? 'Typisk ansvarlig for oral herpes, der giver forkølelsessår (herpes labialis) omkring munden og læberne. HSV-1 er ekstremt almindelig og smitter oftest i barndommen via kysses eller berøring.'
                    : 'Typically responsible for oral herpes, causing cold sores (herpes labialis) around the mouth and lips. HSV-1 is extremely common and is most often transmitted in childhood through kissing or touching.'}
                </li>
                <li>
                  <strong>HSV-2:</strong>{' '}
                  {isDa
                    ? 'Primært relateret til genital herpes, der forårsager udbrud på kønsorganerne eller i det omkringliggende område. HSV-2 smitter næsten udelukkende ved seksualkontakt.'
                    : 'Primarily associated with genital herpes, causing outbreaks on the genitals or surrounding areas. HSV-2 is transmitted almost exclusively through sexual contact.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Det er vigtigt at forstå, at HSV ikke er lig med manglende hygiejne eller promiskuøs adfærd. Virussen er overordentlig smitsom og kan overføres selv af mennesker, der ikke ved, at de er smittet.'
                  : 'It is important to understand that HSV is not a sign of poor hygiene or promiscuous behaviour. The virus is highly contagious and can be transmitted by people who do not know they are infected.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser et HSV-udbrud ud?' : 'What does an HSV outbreak look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Et udbrud følger typisk et forudsigeligt mønster. Mange mennesker oplever varselsymptomer, inden blærerne opstår:'
                  : 'An outbreak typically follows a predictable pattern. Many people experience warning symptoms before the blisters appear:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Prodromalfasen (varselsymptomer)' : 'Prodromal phase (warning symptoms)'}
              </h3>
              <p>
                {isDa
                  ? 'Udbruddet begynder typisk med prikken, brænden, kløe eller følelsesløshed i det berørte område – ofte 1–2 dage inden blærerne opstår. Nogle oplever også lokal ømhed eller hævede lymfeknuder.'
                  : 'The outbreak typically begins with tingling, burning, itching or numbness in the affected area — often 1–2 days before the blisters appear. Some people also experience local tenderness or swollen lymph nodes.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Blærefasen' : 'Blister phase'}
              </h3>
              <p>
                {isDa
                  ? 'Herefter opstår der klynger af små, væskefyldte blærer på et rødmet underlag. Blærerne er typisk smertefulde. For HSV-1 sidder de oftest ved mundvigen eller på læberne; for HSV-2 på eller omkring kønsorganerne, sæderne eller lårene.'
                  : 'Clusters of small, fluid-filled blisters then appear on a reddened base. The blisters are typically painful. With HSV-1 they usually form at the corner of the mouth or on the lips; with HSV-2 on or around the genitals, buttocks or thighs.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Helningsfasen' : 'Healing phase'}
              </h3>
              <p>
                {isDa
                  ? 'Blærerne brister og danner sår, som efterfølgende dækkes af en skorpe. Symptomerne forsvinder normalt inden for 2–4 uger ved det første udbrud og hurtigere ved efterfølgende udbrud. Huden heler oftest uden arvæv.'
                  : 'The blisters burst and form ulcers, which are subsequently covered by a crust. Symptoms usually clear within 2–4 weeks during the first outbreak and more quickly during subsequent outbreaks. The skin usually heals without scarring.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor sker det – og hvad udløser udbrud?' : 'Why does it happen — and what triggers outbreaks?'}
              </h2>
              <p>
                {isDa
                  ? 'HSV smitter gennem direkte kontakt med inficeret hud eller kropsvæsker. Virussen trænger ind i huden eller slimhinderne og etablerer sig herefter i de sensoriske nerveceller tæt ved rygmarven, hvor den forbliver inaktiv (latent) resten af livet. Visse faktorer kan reaktivere virussen og udløse et nyt udbrud:'
                  : 'HSV spreads through direct contact with infected skin or bodily fluids. The virus penetrates the skin or mucous membranes and then establishes itself in sensory nerve cells near the spinal cord, where it remains dormant (latent) for life. Certain factors can reactivate the virus and trigger a new outbreak:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Stress og træthed:' : 'Stress and fatigue:'}</strong>{' '}
                  {isDa
                    ? 'Psykisk eller fysisk stress er en af de hyppigste udløsere.'
                    : 'Psychological or physical stress is one of the most common triggers.'}
                </li>
                <li>
                  <strong>{isDa ? 'Svækket immunsystem:' : 'Weakened immune system:'}</strong>{' '}
                  {isDa
                    ? 'Sygdom, medicinering (f.eks. immunsuppressiva) eller HIV kan øge hyppigheden af udbrud.'
                    : 'Illness, medication (e.g. immunosuppressants) or HIV can increase the frequency of outbreaks.'}
                </li>
                <li>
                  <strong>{isDa ? 'Sollys (UV-stråling):' : 'Sunlight (UV radiation):'}</strong>{' '}
                  {isDa
                    ? 'Langvarig soleksponering er en velkendt udløser for forkølelsessår (HSV-1).'
                    : 'Prolonged sun exposure is a well-known trigger for cold sores (HSV-1).'}
                </li>
                <li>
                  <strong>{isDa ? 'Hormonelle ændringer:' : 'Hormonal changes:'}</strong>{' '}
                  {isDa
                    ? 'Menstruation kan udløse HSV-2-udbrud hos kvinder.'
                    : 'Menstruation can trigger HSV-2 outbreaks in women.'}
                </li>
                <li>
                  <strong>{isDa ? 'Sygdom med feber:' : 'Febrile illness:'}</strong>{' '}
                  {isDa
                    ? 'Forkølelse, influenza og andre infektioner kan reaktivere virussen.'
                    : 'Colds, influenza and other infections can reactivate the virus.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Asymptomatisk smitte er også mulig: virussen kan udskilles fra huden (viral shedding) selv uden synlige blærer, hvilket er grunden til, at HSV kan smitte videre, selvom der ikke er synlige tegn på udbrud.'
                  : 'Asymptomatic transmission is also possible: the virus can shed from the skin (viral shedding) even without visible blisters, which is why HSV can be transmitted even when there are no visible signs of an outbreak.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får HSV?' : 'Who gets HSV?'}
              </h2>
              <p>
                {isDa
                  ? 'HSV er ekstremt udbredt på globalt plan:'
                  : 'HSV is extremely widespread globally:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>HSV-1:</strong>{' '}
                  {isDa
                    ? 'WHO estimerer, at ca. 67% af verdens befolkning under 50 år er inficeret med HSV-1. De fleste smittes i barndommen og mærker aldrig symptomer.'
                    : 'The WHO estimates that approximately 67% of the global population under 50 is infected with HSV-1. Most are infected in childhood and never experience symptoms.'}
                </li>
                <li>
                  <strong>HSV-2:</strong>{' '}
                  {isDa
                    ? 'Ca. 11% af verdens befolkning under 50 år bærer HSV-2. Prævalensen er højere hos kvinder end mænd.'
                    : 'Approximately 11% of the global population under 50 carries HSV-2. Prevalence is higher in women than men.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Mange smittede oplever aldrig tydelige symptomer eller bemærker kun milde tegn, som de tilskriver andre årsager. HSV kan derfor bæres og spredes uvidende.'
                  : 'Many infected individuals never experience noticeable symptoms, or only notice mild signs that they attribute to other causes. HSV can therefore be carried and spread unknowingly.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Behandling og håndtering af HSV' : 'Treatment and management of HSV'}
              </h2>
              <p>
                {isDa
                  ? 'Der er i dag ingen kur mod HSV — virussen forbliver i kroppen livet ud. Antivirale lægemidler kan imidlertid afkorte udbrud, mindske symptomerne og reducere smitterisikoen:'
                  : 'There is currently no cure for HSV — the virus remains in the body for life. However, antiviral medications can shorten outbreaks, reduce symptoms and lower the risk of transmission:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Episodisk behandling' : '💊 Episodic treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Antivirale midler som aciclovir, valaciclovir eller famciclovir tages ved udbrudets første tegn og afkorter blærefasen markant. Jo tidligere behandlingen startes, jo bedre effekt.'
                      : 'Antiviral agents such as aciclovir, valaciclovir or famciclovir are taken at the first signs of an outbreak and significantly shorten the blister phase. The earlier treatment is started, the better the effect.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🛡️ Suppressionsbehandling (daglig antiviral)' : '🛡️ Suppressive therapy (daily antiviral)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved hyppige udbrud (6 eller flere om året) eller af hensyn til partnerbeskyttelse kan daglig antiviral behandling reducere hyppighed, varighed og smitterisiko med op til 50%.'
                      : 'For frequent outbreaks (6 or more per year) or to protect a partner, daily antiviral therapy can reduce frequency, duration and transmission risk by up to 50%.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🌞 Forebyggelse af udløsere' : '🌞 Trigger prevention'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Solcreme på læberne (SPF 30+), stresshåndtering, tilstrækkelig søvn og generel immunstyrkelse kan reducere antallet af HSV-1-udbrud.'
                      : 'Sunscreen on the lips (SPF 30+), stress management, adequate sleep and general immune support can reduce the number of HSV-1 outbreaks.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🤝 Åben kommunikation' : '🤝 Open communication'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Det er vigtigt at informere seksuelle partnere om diagnosen og tage de nødvendige forholdsregler (kondombrug, undgå kontakt under udbrud). Åben kommunikation er afgørende for at beskytte sin partner og reducere stigma.'
                      : 'It is important to inform sexual partners of the diagnosis and take the necessary precautions (condom use, avoid contact during outbreaks). Open communication is essential for protecting partners and reducing stigma.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Herpes simplex-infektioner er klassificeret som 1F00 i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden præsenterer sig som smertefulde vesikler på oral eller genital slimhinde og behandles primært med antivirale midler som aciclovir.'
                    : "Herpes simplex infections are classified as 1F00 in the WHO's International Classification of Diseases (ICD-11). The condition presents as painful vesicles on oral or genital mucosa and is treated primarily with antiviral medications such as aciclovir."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan man leve et normalt liv med HSV?' : 'Can you live a normal life with HSV?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja. Langt de fleste med HSV lever et fuldt og aktivt liv. Udbrud bliver typisk sjældnere og mildere med tiden. Med korrekt behandling og forholdsregler kan man reducere smitterisiko og leve normalt – herunder i kærlighedsforhold og seksuelt liv.'
                      : 'Yes. The vast majority of people with HSV live full and active lives. Outbreaks typically become less frequent and milder over time. With appropriate treatment and precautions, transmission risk can be reduced and one can live normally — including in relationships and sexual life.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er HSV-1 og HSV-2 det samme?' : 'Are HSV-1 and HSV-2 the same?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'De er beslægtede, men ikke identiske. HSV-1 giver oftest oral herpes, mens HSV-2 primært forårsager genital herpes. HSV-1 kan dog overføres til kønsorganerne ved oralsex, og vice versa. Begge typer håndteres med de samme antivirale midler.'
                      : 'They are related but not identical. HSV-1 most often causes oral herpes, while HSV-2 primarily causes genital herpes. HSV-1 can however be transmitted to the genitals through oral sex, and vice versa. Both types are managed with the same antiviral medications.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Skal jeg fortælle min partner om diagnosen?' : 'Do I need to tell my partner about the diagnosis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, det er vigtigt. Åben kommunikation om HSV-status sætter begge parter i stand til at træffe informerede beslutninger og tage forholdsregler. Husk at virus kan smitte selv uden synlige udbrud (asymptomatisk smitte).'
                      : 'Yes, it is important. Open communication about HSV status enables both partners to make informed decisions and take precautions. Remember that the virus can be transmitted even without visible outbreaks (asymptomatic shedding).'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge ved hyppige udbrud (mere end 6 om året), hvis du er gravid og har genital herpes, hvis du er usikker på din diagnose, eller hvis symptomerne er alvorlige. En korrekt diagnose og behandlingsplan er vigtig.'
                      : 'Contact a dermatologist for frequent outbreaks (more than 6 per year), if you are pregnant and have genital herpes, if you are unsure of your diagnosis, or if symptoms are severe. A correct diagnosis and treatment plan is important.'}
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
