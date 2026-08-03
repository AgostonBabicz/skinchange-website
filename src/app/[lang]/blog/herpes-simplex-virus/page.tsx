import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Link from 'next/link';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return isDa
    ? {
        title: 'Herpes simplex (HSV-1 og HSV-2): symptomer og behandling',
        description:
          'HSV-1 giver forkølelsessår, HSV-2 genital herpes. Læs hvordan et udbrud forløber, hvad der udløser det, hvornår det haster, og hvordan det behandles.',
        keywords:
          'herpes simplex, HSV-1, HSV-2, forkølelsessår, genital herpes, herpes behandling, eksem herpeticum, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/herpes-simplex-virus',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/herpes-simplex-virus',
            da: 'https://www.skinchange.dk/da/blog/herpes-simplex-virus',
            en: 'https://www.skinchange.dk/en/blog/herpes-simplex-virus',
          },
        },
      }
    : {
        title: 'Herpes simplex (HSV-1 and HSV-2): symptoms and treatment',
        description:
          'HSV-1 causes cold sores, HSV-2 genital herpes. Learn how an outbreak unfolds, what triggers it, when it is urgent, and how antiviral treatment works.',
        keywords:
          'herpes simplex, HSV-1, HSV-2, cold sores, genital herpes, herpes treatment, eczema herpeticum, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/herpes-simplex-virus',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/herpes-simplex-virus',
            da: 'https://www.skinchange.dk/da/blog/herpes-simplex-virus',
            en: 'https://www.skinchange.dk/en/blog/herpes-simplex-virus',
          },
        },
      };
}

export default function HerpesSimplexVirusPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er herpes simplex-virus (HSV)? Årsager, symptomer og behandling'
    : 'What is herpes simplex virus (HSV)? Causes, symptoms and treatment';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Komplet guide til herpes simplex-virus: hvad det er, årsager, symptomer, faresignaler og behandlingsmuligheder.'
      : 'Complete guide to herpes simplex virus: what it is, causes, symptoms, red flags and treatment options.',
    image: '/blog-herpes-simplex.jpg',
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: {
      '@type': 'Organization',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      url: 'https://www.skinchange.dk',
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

  const faqs = isDa
    ? [
        {
          q: 'Kan man leve et normalt liv med HSV?',
          a: 'Ja. Langt de fleste med HSV lever et fuldt og aktivt liv. Udbruddene bliver typisk sjældnere og mildere med årene. Med behandling og enkle forholdsregler kan smitterisikoen mindskes betydeligt, og der er ingen grund til at fravælge hverken parforhold eller sexliv.',
        },
        {
          q: 'Er HSV-1 og HSV-2 det samme?',
          a: 'De er beslægtede, men ikke identiske. HSV-1 giver oftest forkølelsessår om munden og ligger inaktiv i trigeminusganglion, mens HSV-2 primært giver genital herpes og ligger i de sakrale rodganglier. HSV-1 kan overføres til kønsorganerne ved oralsex, og genital HSV-1 giver som regel færre udbrud end genital HSV-2. Begge typer behandles med de samme antivirale midler.',
        },
        {
          q: 'Skal jeg fortælle min partner om diagnosen?',
          a: 'Ja, det er vigtigt. Åben kommunikation om HSV-status gør det muligt for begge at træffe informerede valg og tage forholdsregler. Husk, at virussen kan smitte, selv når der ikke er synlige blærer (asymptomatisk virusudskillelse).',
        },
        {
          q: 'Hvornår skal jeg kontakte en læge?',
          a: 'Kontakt en læge ved dit første genitale udbrud, så diagnosen kan bekræftes med en PCR-podning, ved hyppige udbrud (6 eller flere om året), hvis du er gravid og har genital herpes, eller hvis du er i tvivl om diagnosen. Søg hjælp samme dag ved blærer omkring øjet, ved synsændringer, ved hurtigt spredende sår i eksemramt hud, og ved forvirring eller kraftig hovedpine sammen med et forkølelsessår.',
        },
      ]
    : [
        {
          q: 'Can you live a normal life with HSV?',
          a: 'Yes. The vast majority of people with HSV live full and active lives. Outbreaks typically become less frequent and milder over the years. With treatment and simple precautions the risk of transmission can be reduced substantially, and there is no reason to give up relationships or a sex life.',
        },
        {
          q: 'Are HSV-1 and HSV-2 the same?',
          a: 'They are related but not identical. HSV-1 most often causes cold sores around the mouth and lies dormant in the trigeminal ganglion, while HSV-2 primarily causes genital herpes and sits in the sacral dorsal root ganglia. HSV-1 can be passed to the genitals through oral sex, and genital HSV-1 usually recurs less often than genital HSV-2. Both types are treated with the same antiviral medicines.',
        },
        {
          q: 'Do I need to tell my partner about the diagnosis?',
          a: 'Yes, it is important. Open communication about HSV status allows both of you to make informed choices and take precautions. Remember that the virus can be transmitted even when there are no visible blisters (asymptomatic shedding).',
        },
        {
          q: 'When should I contact a doctor?',
          a: 'See a doctor for a first genital episode, so the diagnosis can be confirmed with a PCR swab, for frequent outbreaks (6 or more per year), if you are pregnant and have genital herpes, or if you are unsure of the diagnosis. Seek help the same day for blisters around the eye, for any change in vision, for rapidly spreading sores on eczema-affected skin, and for confusion or severe headache alongside a cold sore.',
        },
      ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
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
                {isDa ? 'Hvad er herpes simplex-virus?' : 'What is herpes simplex virus?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '15. marts 2026' : 'March 15, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '8 min læsetid' : '8 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {headline}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-herpes-simplex.jpg"
                alt={
                  isDa
                    ? 'En klynge små, væskefyldte blærer på rødmet hud ved mundvigen – et forkølelsessår.'
                    : 'A cluster of small, fluid-filled blisters on reddened skin at the corner of the mouth — a cold sore.'
                }
                width={1600}
                height={900}
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
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
                    <strong>Herpes simplex-virus (HSV) er en af de mest udbredte virusinfektioner i verden</strong> — WHO
                    anslår, at omkring to tredjedele af alle under 50 år, cirka 3,8 milliarder mennesker, bærer HSV-1.
                    Trods udbredelsen er der stadig meget forvirring og stigma forbundet med diagnosen.
                  </>
                ) : (
                  <>
                    <strong>Herpes simplex virus (HSV) is one of the most widespread viral infections in the world</strong> — the
                    WHO estimates that around two-thirds of people under 50, some 3.8 billion, carry HSV-1. Despite its
                    prevalence, there is still considerable confusion and stigma surrounding the diagnosis.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad HSV er, hvad der adskiller HSV-1 fra HSV-2, hvordan et udbrud ser ud, hvornår det haster, og hvad du kan gøre ved det.'
                  : 'In this article we explain what HSV is, how HSV-1 differs from HSV-2, what an outbreak looks like, when it is urgent, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er herpes simplex-virus?' : 'What is herpes simplex virus?'}
              </h2>
              <p>
                {isDa
                  ? 'Herpes simplex-virus (HSV) er en livslang virusinfektion, der giver udbrud af små, smertefulde blærer på huden og slimhinderne. Der findes to hovedtyper:'
                  : 'Herpes simplex virus (HSV) is a lifelong viral infection that causes outbreaks of small, painful blisters on the skin and mucous membranes. There are two main types:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>HSV-1:</strong>{' '}
                  {isDa
                    ? 'Giver typisk oral herpes med forkølelsessår (herpes labialis) omkring munden og på læberne. HSV-1 er ekstremt almindelig og overføres oftest allerede i barndommen ved kys eller berøring.'
                    : 'Typically responsible for oral herpes, causing cold sores (herpes labialis) around the mouth and on the lips. HSV-1 is extremely common and is most often transmitted in childhood through kissing or touching.'}
                </li>
                <li>
                  <strong>HSV-2:</strong>{' '}
                  {isDa
                    ? 'Giver primært genital herpes med udbrud på kønsorganerne eller i området omkring. HSV-2 overføres næsten udelukkende ved seksuel kontakt – men kan også overføres fra mor til barn under fødslen, hvilket er årsagen til neonatal herpes.'
                    : 'Primarily associated with genital herpes, causing outbreaks on the genitals or the surrounding area. HSV-2 is transmitted almost exclusively through sexual contact — but it can also pass from mother to baby during delivery, which is what causes neonatal herpes.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Det er vigtigt at forstå, at HSV ikke siger noget om hygiejne eller seksuel adfærd. Virussen er meget smitsom og overføres ofte af mennesker, der ikke ved, at de bærer den.'
                  : 'It is important to understand that HSV says nothing about hygiene or sexual behaviour. The virus is highly contagious and is often passed on by people who do not know they carry it.'}
              </p>

              {/* Red flags */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvornår er herpes en akut situation?' : 'When is herpes an emergency?'}
              </h2>
              <p>
                {isDa
                  ? 'De fleste herpesudbrud er ubehagelige, men ufarlige. Fire situationer skal dog vurderes af en læge samme dag.'
                  : 'Most herpes outbreaks are uncomfortable rather than dangerous. Four situations, however, need to be seen by a doctor the same day.'}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Eksem herpeticum: HSV, der breder sig i eksemramt hud og giver hurtigt tiltagende, smertefulde, udstansede sår, ofte med feber – kræver antiviral behandling samme dag. Øjenherpes: blærer på eller nær øjet, øjensmerter eller ændret syn kan være HSV-keratitis, som kan skade synet og aldrig må behandles med binyrebarkhormon i dråber eller creme. Neonatal herpes: et førstegangsudbrud af genital herpes i tredje trimester er en obstetrisk akutsituation – fortæl det straks til jordemoder eller fødselslæge. Herpesencefalitis: forvirring, sløvhed, kraftig hovedpine eller feber sammen med et forkølelsessår kræver akut vurdering.'
                    : 'Eczema herpeticum: HSV spreading across eczema-affected skin, producing rapidly spreading, painful, punched-out erosions, often with fever — this needs antiviral treatment the same day. Ocular herpes: blisters on or near the eye, eye pain or any change in vision may mean HSV keratitis, which can damage sight and must never be treated with a steroid drop or cream. Neonatal herpes: a first genital episode in the third trimester of pregnancy is an obstetric emergency — tell your midwife or obstetrician immediately. HSV encephalitis: confusion, drowsiness, severe headache or fever alongside a cold sore needs emergency assessment.'}
                </p>
              </div>
              <p>
                {isDa ? (
                  <>
                    Eksem herpeticum er grunden til, at alle med{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      atopisk eksem
                    </Link>{' '}
                    bør kende dette faresignal. En hudbarriere, der i forvejen er beskadiget, giver virussen fri bane, og udslættet kan brede sig over store hudområder på et døgn.
                  </>
                ) : (
                  <>
                    Eczema herpeticum is the reason everyone with{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      atopic eczema
                    </Link>{' '}
                    should know this warning sign. A skin barrier that is already damaged gives the virus a clear run, and the rash can cover large areas of skin within a day.
                  </>
                )}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser et HSV-udbrud ud?' : 'What does an HSV outbreak look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Et udbrud følger typisk et forudsigeligt mønster. Mange oplever varselssymptomer, inden blærerne opstår:'
                  : 'An outbreak typically follows a predictable pattern. Many people experience warning symptoms before the blisters appear:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Varselsfasen (prodromalfasen)' : 'The prodromal phase (warning symptoms)'}
              </h3>
              <p>
                {isDa
                  ? 'Udbruddet begynder typisk med prikken, svie, kløe eller følelsesløshed i det berørte område – ofte 1–2 dage inden blærerne kommer. Nogle oplever også lokal ømhed eller hævede lymfeknuder. Det er her, antiviral behandling har størst effekt.'
                  : 'The outbreak typically begins with tingling, stinging, itching or numbness in the affected area — often 1–2 days before the blisters appear. Some people also notice local tenderness or swollen lymph nodes. This is the point at which antiviral treatment has the greatest effect.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Blærefasen' : 'The blister phase'}
              </h3>
              <p>
                {isDa
                  ? 'Herefter opstår klynger af små, væskefyldte blærer på et rødmet underlag. Blærerne er typisk smertefulde. Ved HSV-1 sidder de oftest ved mundvigen eller på læberne; ved HSV-2 på eller omkring kønsorganerne, balderne eller lårene.'
                  : 'Clusters of small, fluid-filled blisters then appear on a reddened base. The blisters are typically painful. With HSV-1 they usually form at the corner of the mouth or on the lips; with HSV-2 on or around the genitals, buttocks or thighs.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Helingsfasen' : 'The healing phase'}
              </h3>
              <p>
                {isDa
                  ? 'Blærerne brister og danner sår, som derefter dækkes af skorper. Symptomerne forsvinder normalt inden for 2–4 uger ved det første udbrud og hurtigere ved senere udbrud. Huden heler oftest uden ar.'
                  : 'The blisters burst and form ulcers, which are then covered by a crust. Symptoms usually clear within 2–4 weeks during a first outbreak and more quickly in later ones. The skin usually heals without scarring.'}
              </p>

              {/* Triggers */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad udløser et HSV-udbrud?' : 'What triggers an HSV outbreak?'}
              </h2>
              <p>
                {isDa
                  ? 'HSV trænger ind gennem huden eller slimhinderne og rejser derfra langs en nerve ind til en samling nervecellelegemer, hvor den bliver resten af livet. HSV-1 slår sig ned i trigeminusganglion ved kraniebasis, mens HSV-2 lægger sig i de sakrale rodganglier nederst i rygsøjlen. Det er derfor, hver type vender tilbage i det samme område – HSV-1 om munden, HSV-2 omkring kønsorganer, balder og lår. Visse faktorer kan vække virussen og udløse et nyt udbrud:'
                  : 'HSV enters through the skin or mucous membranes and travels from there along a nerve to a cluster of nerve cell bodies, where it stays for life. HSV-1 settles in the trigeminal ganglion at the base of the skull, while HSV-2 settles in the sacral dorsal root ganglia at the bottom of the spine. That is why each type returns to the same region — HSV-1 around the mouth, HSV-2 around the genitals, buttocks and thighs. Certain factors can wake the virus and trigger a new outbreak:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Stress og træthed:' : 'Stress and fatigue:'}</strong>{' '}
                  {isDa
                    ? 'Psykisk eller fysisk stress er en af de hyppigste udløsere.'
                    : 'Psychological or physical stress is one of the most common triggers.'}
                </li>
                <li>
                  <strong>{isDa ? 'Svækket immunforsvar:' : 'A weakened immune system:'}</strong>{' '}
                  {isDa
                    ? 'Sygdom, immundæmpende medicin eller HIV kan øge hyppigheden af udbrud.'
                    : 'Illness, immunosuppressive medication or HIV can increase the frequency of outbreaks.'}
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
                    ? 'Menstruation kan udløse udbrud – både af HSV-1 og HSV-2.'
                    : 'Menstruation can trigger outbreaks of either type, HSV-1 as well as HSV-2.'}
                </li>
                <li>
                  <strong>{isDa ? 'Feber og infektion:' : 'Fever and infection:'}</strong>{' '}
                  {isDa
                    ? 'Forkølelse, influenza og andre infektioner kan reaktivere virussen – deraf det danske navn forkølelsessår.'
                    : 'Colds, influenza and other infections can reactivate the virus — hence the name cold sore.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Asymptomatisk virusudskillelse er også mulig: virussen kan udskilles fra huden uden synlige blærer. Det er forklaringen på, at HSV kan smitte videre, selv når der ikke er tegn på et udbrud.'
                  : 'Asymptomatic shedding is also possible: the virus can be shed from the skin without visible blisters. That is why HSV can be passed on even when there is no sign of an outbreak.'}
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
                    ? 'WHO anslår, at omkring 64% af alle mellem 0 og 49 år – cirka 3,8 milliarder mennesker – levede med HSV-1 i 2020. De fleste smittes i barndommen og mærker aldrig symptomer.'
                    : 'The WHO estimates that around 64% of people aged 0–49 — roughly 3.8 billion people — were living with HSV-1 in 2020. Most are infected in childhood and never notice symptoms.'}
                </li>
                <li>
                  <strong>HSV-2:</strong>{' '}
                  {isDa
                    ? 'Omkring 13% af alle mellem 15 og 49 år – cirka 520 millioner mennesker – bærer HSV-2. Forekomsten er højere hos kvinder end hos mænd.'
                    : 'Around 13% of people aged 15–49 — roughly 520 million — carry HSV-2. Prevalence is higher in women than in men.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Mange smittede oplever aldrig tydelige symptomer eller bemærker kun milde tegn, som de tilskriver andre årsager. HSV kan derfor bæres og gives videre, uden at man ved det.'
                  : 'Many infected people never have obvious symptoms, or notice only mild signs that they put down to something else. HSV can therefore be carried and passed on unknowingly.'}
              </p>

              {/* Diagnosis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan stilles diagnosen?' : 'How is herpes diagnosed?'}
              </h2>
              <p>
                {isDa ? (
                  <>
                    Et førstegangsudbrud af genital herpes bør bekræftes med en typespecifik PCR-podning fra en blære eller et sår. Det er vigtigt at vide, om det er HSV-1 eller HSV-2: genital HSV-1 vender langt sjældnere tilbage og udskilles i mindre grad end genital HSV-2, og det ændrer både prognosen og det, du skal fortælle en partner. Typebestemmelse kan ikke laves ud fra et billede, og et billede kan heller ikke skelne herpes fra syfilis, aftøse sår eller{' '}
                    <Link href={`/${lang}/blog/genital-warts`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      kønsvorter
                    </Link>
                    . Ved et førstegangsudbrud i kønsområdet bør du derfor undersøges hos lægen og tilbydes en fuld undersøgelse for kønssygdomme.
                  </>
                ) : (
                  <>
                    A first genital episode should be confirmed with a type-specific PCR swab taken from a blister or ulcer. Knowing whether it is HSV-1 or HSV-2 matters: genital HSV-1 recurs far less often and sheds less than genital HSV-2, which changes both the outlook and what you tell a partner. Typing cannot be done from a photograph, and a photo cannot separate herpes from syphilis, aphthous ulcers or{' '}
                    <Link href={`/${lang}/blog/genital-warts`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      genital warts
                    </Link>
                    . A first episode in the genital area should therefore be examined in person, with a full sexual health screen offered alongside it.
                  </>
                )}
              </p>
              <p>
                {isDa ? (
                  <>
                    Herpes simplex forveksles undertiden med{' '}
                    <Link href={`/${lang}/blog/herpes-zoster-shingles`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      helvedesild
                    </Link>
                    , som skyldes en anden virus i samme familie. Helvedesild sidder i ét bånd på den ene side af kroppen og stopper ved midtlinjen, mens HSV vender tilbage i det samme lille område igen og igen.
                  </>
                ) : (
                  <>
                    Herpes simplex is sometimes confused with{' '}
                    <Link href={`/${lang}/blog/herpes-zoster-shingles`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      shingles
                    </Link>
                    , which is caused by a different virus in the same family. Shingles sits in a single band on one side of the body and stops at the midline, whereas HSV returns to the same small area again and again.
                  </>
                )}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan behandles og håndteres HSV?' : 'How is HSV treated and managed?'}
              </h2>
              <p>
                {isDa
                  ? 'Der findes ingen kur mod HSV – virussen bliver i kroppen livet ud. Antivirale lægemidler kan til gengæld afkorte udbrud, dæmpe symptomerne og nedsætte smitterisikoen:'
                  : 'There is no cure for HSV — the virus stays in the body for life. Antiviral medicines can, however, shorten outbreaks, ease symptoms and lower the risk of transmission:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Episodisk behandling' : '💊 Episodic treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Antivirale midler som aciclovir, valaciclovir eller famciclovir tages ved udbruddets første tegn og afkorter blærefasen mærkbart. Jo tidligere behandlingen startes – helst allerede i varselsfasen – jo bedre virker den.'
                      : 'Antiviral agents such as aciclovir, valaciclovir or famciclovir are taken at the first sign of an outbreak and noticeably shorten the blister phase. The earlier treatment is started — ideally during the prodromal phase — the better it works.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🛡️ Suppressionsbehandling (daglig antiviral)' : '🛡️ Suppressive therapy (daily antiviral)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved hyppige udbrud (6 eller flere om året) kan daglig antiviral behandling nedsætte antallet af symptomgivende udbrud med omkring 70–80%, og mange bliver helt fri for udbrud, så længe de tager medicinen. Tages behandlingen af hensyn til en partner, er tallet et andet: den nedsætter risikoen for at overføre HSV-2 til en usmittet partner med omkring 50%.'
                      : 'For frequent outbreaks (6 or more per year), daily antiviral therapy reduces the number of symptomatic recurrences by around 70–80%, and many people become completely free of outbreaks while they take it. Taken to protect a partner, the figure is a different one: it reduces the risk of passing HSV-2 to an uninfected partner by around 50%.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🌞 Forebyggelse af udløsere' : '🌞 Trigger prevention'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Solcreme på læberne (SPF 30 eller derover), stresshåndtering og tilstrækkelig søvn kan reducere antallet af HSV-1-udbrud.'
                      : 'Sunscreen on the lips (SPF 30 or above), stress management and adequate sleep can reduce the number of HSV-1 outbreaks.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🤝 Åben kommunikation' : '🤝 Open communication'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Fortæl seksuelle partnere om diagnosen, og tag de nødvendige forholdsregler: kondom, og undgå kontakt under udbrud. Er du gravid, skal jordemoder og læge kende din herpesstatus, så fødslen kan planlægges.'
                      : 'Tell sexual partners about the diagnosis and take the necessary precautions: condoms, and avoid contact during an outbreak. If you are pregnant, your midwife and doctor need to know your herpes status so that the birth can be planned.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Herpes simplex-infektioner er klassificeret som 1F00 i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden viser sig som smertefulde blærer på hud eller oral og genital slimhinde og behandles primært med antivirale midler som aciclovir.'
                    : "Herpes simplex infections are classified as 1F00 in the WHO's International Classification of Diseases (ICD-11). The condition presents as painful vesicles on the skin or on oral and genital mucosa and is treated primarily with antiviral medicines such as aciclovir."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-lg text-[#1a237e] mb-2">{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge – diskret og uden ventetid. Er det dit første udbrud i kønsområdet, skal du dog undersøges hos lægen, så diagnosen kan bekræftes med en podning.'
                    : 'Upload photos via the SKIND app and get an assessment from a certified dermatologist — discreetly and without a waiting list. If this is your first outbreak in the genital area, you should still be examined in person so the diagnosis can be confirmed with a swab.'}
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
                    ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Kontakt altid en læge eller hudlæge for personlig rådgivning og vurdering af hudforandringer.'
                    : 'This article is for informational purposes only and does not replace professional medical advice. Always consult a doctor or dermatologist for personal guidance and assessment of skin changes.'}
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
