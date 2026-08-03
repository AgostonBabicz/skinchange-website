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
        title: 'Hvad er acne? Årsager og behandling | SKIND',
        description:
          'Acne opstår, når talgkirtler og hårfollikler tilstoppes. Læs om årsager, hvad der reelt virker, hvor lang tid behandlingen tager, og hvordan du undgår ar.',
        keywords:
          'hvad er acne, acne symptomer, acne årsager, acne behandling, acne ar, isotretinoin, hudlæge acne, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/acne',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/acne',
            da: 'https://www.skinchange.dk/da/blog/acne',
            en: 'https://www.skinchange.dk/en/blog/acne',
          },
        },
      }
    : {
        title: 'What is acne? Causes and treatment | SKIND',
        description:
          'Acne develops when oil glands and hair follicles become blocked. Learn the causes, what actually works, how long treatment takes and how to avoid scarring.',
        keywords:
          'what is acne, acne symptoms, acne causes, acne treatment, acne scars, isotretinoin, dermatologist acne, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/acne',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/acne',
            da: 'https://www.skinchange.dk/da/blog/acne',
            en: 'https://www.skinchange.dk/en/blog/acne',
          },
        },
      };
}

export default function AcnePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Acne? Årsager, Symptomer og Behandling'
      : 'What is Acne? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til acne: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to acne: what it is, causes, symptoms and treatment options.',
    image: '/blog-acne.jpg',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: isDa
      ? [
          {
            '@type': 'Question',
            name: 'Er acne farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Acne er ikke farligt i medicinsk forstand, men svær ubehandlet acne kan efterlade permanente ar. Tidlig behandling er vigtig.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan acne forsvinde af sig selv?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mild acne kan forbedres over tid, men moderat til svær acne kræver typisk behandling. At vente og se kan resultere i ardannelse.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis håndkøbsprodukter ikke hjælper efter 2–3 måneder, hvis du udvikler ar eller dybe cyster, eller hvis acnen påvirker dit velbefindende.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is acne dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Acne is not dangerous in a medical sense, but severe untreated acne can leave permanent scars. Early treatment is important.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can acne go away on its own?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mild acne can improve over time, but moderate to severe acne typically requires treatment. Waiting it out can result in scarring.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if over-the-counter products are not helping after 2–3 months, if you develop scars or deep cysts, or if acne is affecting your well-being.',
            },
          },
        ],
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
              <span className="text-gray-900">{isDa ? 'Hvad er Acne?' : 'What is Acne?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '12. marts 2026' : 'March 12, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Acne? Årsager, Symptomer og Behandling'
                : 'What is Acne? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-acne.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en kind med røde, betændte bumser og hudorme ved acne.'
                    : 'Close-up of a cheek with red, inflamed pimples and blackheads caused by acne.'
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
                    <strong>Acne er en af de mest udbredte hudlidelser i verden</strong>, der påvirker millioner af
                    mennesker – fra teenagere til voksne. På trods af hvor almindelig den er, kan acne have stor
                    indflydelse på selvtillid og livskvalitet.
                  </>
                ) : (
                  <>
                    <strong>Acne is one of the most common skin conditions in the world</strong>, affecting millions
                    of people — from teenagers to adults. Despite how common it is, acne can have a significant
                    impact on self-confidence and quality of life.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad acne er, hvad der forårsager det, hvordan det ser ud, hvad der virker, og hvordan du undgår ar.'
                  : 'In this article, we explain exactly what acne is, what causes it, what it looks like, what actually works, and how to avoid scarring.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is acne */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er acne?' : 'What is acne?'}
              </h2>
              <p>
                {isDa
                  ? 'Acne (acne vulgaris) er en kronisk hudlidelse, der opstår i talgkirtler og hårfollikler. Disse kirtler producerer talg – et naturligt fedt der beskytter og fugter huden. Når talgkirtlerne overproducerer, og døde hudceller tilstopper porerne, opstår der et miljø, hvor bakterier trives og forårsager betændelse.'
                  : 'Acne (acne vulgaris) is a chronic skin condition that occurs in the oil glands (sebaceous glands) and hair follicles. These glands produce sebum — a natural oil that protects and moisturises the skin. When the oil glands overproduce and dead skin cells clog the pores, an environment is created where bacteria thrive and cause inflammation.'}
              </p>
              <p>
                {isDa
                  ? 'Acne er ikke smitsomt og er ikke forårsaget af dårlig hygiejne, selvom renlighed kan hjælpe med at håndtere det.'
                  : 'Acne is not contagious and is not caused by poor hygiene, although cleanliness can help manage it.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser acne ud?' : 'What does acne look like?'}
              </h2>
              <p>{isDa ? 'Acne kan vise sig på mange måder:' : 'Acne can appear in many forms:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Hudorme og hvide knopper:' : 'Blackheads and whiteheads:'}</strong>{' '}
                  {isDa
                    ? 'Tilstoppede porer på grund af overskydende olie og døde hudceller. Hudorme er åbne og sorte i farven; hvide knopper er lukkede.'
                    : 'Plugged pores due to excess oil and dead skin cells. Blackheads are open and dark in colour; whiteheads are closed.'}
                </li>
                <li>
                  <strong>{isDa ? 'Bumser (pustler og papler):' : 'Pimples (pustules and papules):'}</strong>{' '}
                  {isDa
                    ? 'Røde, betændte knopper, der kan indeholde pus.'
                    : 'Red, inflamed bumps that may contain pus.'}
                </li>
                <li>
                  <strong>{isDa ? 'Knuder og cyster:' : 'Nodules and cysts:'}</strong>{' '}
                  {isDa
                    ? 'Dybere, smertefulde knopper under huden. Disse er de mest alvorlige former og har størst risiko for at efterlade ar.'
                    : 'Deeper, painful lumps under the skin. These are the most severe forms and carry the greatest risk of scarring.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Acne opstår oftest i ansigtet, på ryggen, brystet og skuldrene – steder med mange talgkirtler.'
                  : 'Acne most commonly appears on the face, back, chest and shoulders — areas with many oil glands.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Ikke alt udslæt i ansigtet er acne. Vedvarende rødme midt i ansigtet med synlige blodkar og tendens til blussen — som regel uden hudorme — peger snarere på{' '}
                    <Link href={`/${lang}/blog/rosacea`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      rosacea
                    </Link>
                    , mens fedtet, gullig skældannelse omkring næse, øjenbryn og hårgrænse tyder på{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seboroisk eksem
                    </Link>
                    . Forskellen er vigtig, fordi behandlingen ikke er den samme.
                  </>
                ) : (
                  <>
                    Not every facial rash is acne. Persistent central redness with visible blood vessels and a tendency to flush — usually without blackheads — points more towards{' '}
                    <Link href={`/${lang}/blog/rosacea`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      rosacea
                    </Link>
                    , while greasy, yellowish scaling around the nose, eyebrows and hairline suggests{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seborrhoeic dermatitis
                    </Link>
                    . The distinction matters, because the treatments are not the same.
                  </>
                )}
              </p>

              {/* Red flags */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Kontakt læge hurtigt, hvis dybe, smertefulde knuder eller cyster forværres hurtigt, samtidig med at du har feber, ledsmerter eller føler dig utilpas. Det kan være acne fulminans, som kræver akut specialistbehandling. Pludselig, svær acne hos en voksen kvinde sammen med øget hårvækst i ansigt eller på krop og uregelmæssig menstruation bør også udredes, da det kan pege på en hormonel årsag som polycystisk ovariesyndrom (PCOS).'
                    : 'Contact a doctor promptly if deep, painful nodules or cysts are getting rapidly worse while you also have a fever, joint pain or feel generally unwell. This can be acne fulminans, which needs urgent specialist treatment. Sudden, severe acne in an adult woman together with excess facial or body hair and irregular periods should also be investigated, as it can point to a hormonal cause such as polycystic ovary syndrome (PCOS).'}
                </p>
              </div>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår acne?' : 'Why does acne happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Acne opstår, når flere faktorer kombineres:'
                  : 'Acne develops when several factors combine:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvilken rolle spiller hormoner?' : 'What role do hormones play?'}
              </h3>
              <p>
                {isDa
                  ? 'De styrer talgproduktionen. Hormoner – særligt androgener som testosteron – stimulerer talgkirtlerne til at producere mere olie. Det er grunden til, at acne typisk starter i puberteten, og at kvinder ofte oplever udbrud i forbindelse med menstruation, graviditet eller hormonelle forandringer.'
                  : 'They drive oil production. Hormones — particularly androgens like testosterone — stimulate the oil glands to produce more oil. This is why acne typically starts during puberty, and why women often experience breakouts around menstruation, pregnancy or hormonal changes.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvordan bliver porerne tilstoppede?' : 'How do pores become clogged?'}
              </h3>
              <p>
                {isDa
                  ? 'Døde hudceller blander sig med overskydende talg og tilstopper hårsækkene. Dette skaber komedoner – de karakteristiske hudorme og hvide knopper, der er forstadiet til betændt acne.'
                  : 'Dead skin cells mix with excess sebum and block the hair follicles. This creates comedones — the characteristic blackheads and whiteheads that are the precursor to inflamed acne.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvad gør bakterierne?' : 'What do the bacteria do?'}
              </h3>
              <p>
                {isDa
                  ? 'Bakterien Cutibacterium acnes lever naturligt på huden, men i tilstoppede porer trives den og udløser en immunreaktion, der giver den karakteristiske rødme og betændelse.'
                  : 'The bacterium Cutibacterium acnes lives naturally on the skin, but in clogged pores it thrives and triggers an immune response, causing the characteristic redness and inflammation.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvor meget betyder genetik og livsstil?' : 'How much do genetics and lifestyle matter?'}
              </h3>
              <p>
                {isDa
                  ? 'Arvelige faktorer spiller en stor rolle. Hvis dine forældre havde svær acne, er du selv mere tilbøjelig til det. Stress, visse lægemidler og kost kan også forværre tilstanden — den bedste dokumentation peger på højglykæmiske fødevarer som sukker og raffinerede kulhydrater samt skummetmælk.'
                  : 'Genetic factors play a major role. If your parents had severe acne, you are more likely to develop it yourself. Stress, certain medications and diet can also worsen the condition — the best evidence points to high-glycaemic foods such as sugar and refined carbohydrates, and to skimmed milk.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får acne?' : 'Who gets acne?'}
              </h2>
              <p>
                {isDa
                  ? 'Acne er utrolig almindelig og rammer de fleste mennesker på et tidspunkt i livet:'
                  : 'Acne is incredibly common and affects most people at some point in their lives:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Teenagere:' : 'Teenagers:'}</strong>{' '}
                  {isDa
                    ? 'Op mod 85% af unge mellem 12–25 år oplever acne på grund af hormonelle ændringer i puberteten.'
                    : 'Up to 85% of young people aged 12–25 experience acne due to hormonal changes during puberty.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne kvinder:' : 'Adult women:'}</strong>{' '}
                  {isDa
                    ? '12–22% af kvinder over 25 år har acne, ofte hormonelt betinget.'
                    : '12–22% of women over 25 have acne, often hormone-related.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne mænd:' : 'Adult men:'}</strong>{' '}
                  {isDa
                    ? 'Acne hos voksne mænd er mindre hyppigt end hos kvinder, men forekommer.'
                    : 'Acne in adult men is less frequent than in women, but does occur.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Ingen er immune. Acne kan ramme alle hudtyper, aldre og baggrunde.'
                  : 'No one is immune. Acne can affect all skin types, ages and backgrounds.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved acne?' : 'What can you do about acne?'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom der ikke er én universel kur, er acne i de fleste tilfælde behandlelig. Nøglen er konsistent behandling over tid:'
                  : 'While there is no single universal cure, acne is treatable in most cases. The key is consistent treatment over time:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Håndkøbsprodukter (mild acne)' : '💊 Over-the-counter products (mild acne)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Benzoylperoxid, salicylsyre og niacinamid kan reducere bumser og olieproduktion.'
                      : 'Benzoyl peroxide, salicylic acid and niacinamide can reduce pimples and oil production.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Receptpligtig behandling (moderat/svær acne)' : '🩺 Prescription treatment (moderate/severe acne)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Et topisk retinoid kombineret med benzoylperoxid er førstevalg ved de fleste former for betændt acne. Orale antibiotika må aldrig bruges alene: de gives sammen med benzoylperoxid eller et topisk retinoid og begrænses til omkring tre måneder for at mindske risikoen for antibiotikaresistens. Hormonel behandling som p-piller er en mulighed for nogle kvinder.'
                      : 'A topical retinoid combined with benzoyl peroxide is first-line for most inflammatory acne. Oral antibiotics must never be used on their own: they are given alongside benzoyl peroxide or a topical retinoid, and limited to around three months, to reduce the risk of antibiotic resistance. Hormonal treatment such as the combined pill is an option for some women.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '⚕️ Isotretinoin (svær eller arrende acne)' : '⚕️ Isotretinoin (severe or scarring acne)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Isotretinoin (Roaccutan) er den mest effektive behandling ved svær acne. Isotretinoin er stærkt fosterskadende og må aldrig tages under graviditet; kvinder i den fertile alder skal have graviditetstest og sikker prævention under behandlingen og en måned efter. I Danmark må behandlingen kun opstartes af en hudlæge, som også følger blodprøver og bivirkninger.'
                      : 'Isotretinoin (Roaccutane) is the most effective treatment for severe acne. It is highly teratogenic and must never be taken during pregnancy; women of childbearing potential need pregnancy testing and effective contraception throughout treatment and for one month afterwards. In Denmark, treatment may only be initiated by a dermatologist, who also monitors blood tests and side effects.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🥗 Livsstil' : '🥗 Lifestyle'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Skær ned på sukker, raffinerede kulhydrater og skummetmælk, håndtér stress, sov nok, og vask ansigtet to gange dagligt med en mild renser. Hyppigere vask irriterer huden uden at fjerne acnen.'
                      : 'Cut back on sugar, refined carbohydrates and skimmed milk, manage stress, get enough sleep and wash your face twice daily with a gentle cleanser. Washing more often than that irritates the skin without clearing acne.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚫 Undgå' : '🚫 Avoid'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Klem ikke bumser – det forværrer betændelsen og øger risikoen for arvæv.'
                      : "Don't pick or squeeze — it worsens inflammation and increases the risk of scarring."}
                  </p>
                </div>
              </div>

              {/* Timelines */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvor lang tid går der, før acnebehandling virker?' : 'How long does acne treatment take to work?'}
              </h2>
              <p>
                {isDa
                  ? 'Længere, end de fleste regner med. En ny bums begynder at dannes flere uger, før den bliver synlig, så enhver behandling skal arbejde sig igennem det forløb, før du kan se forskel. De fleste behandlinger – både cremer og tabletter – kræver 8–12 ugers konsekvent daglig brug, før effekten kan bedømmes.'
                  : 'Longer than most people expect. A new spot starts forming several weeks before it becomes visible, so any treatment has to work its way through that pipeline before you see a difference. Most treatments — both creams and tablets — need 8–12 weeks of consistent daily use before their effect can be judged.'}
              </p>
              <p>
                {isDa
                  ? 'Huden ser ofte lidt værre ud de første to til fire uger, mens eksisterende tilstopninger arbejder sig op til overfladen. At stoppe for tidligt er den hyppigste grund til, at en acnebehandling ser ud til at mislykkes. Tag et billede af det samme område i det samme lys en gang om ugen – fremgang er langt lettere at se hen over en måned end fra dag til dag. Når acnen er under kontrol, har de fleste brug for at fortsætte en vedligeholdelsesbehandling, typisk et topisk retinoid, for at holde den nede.'
                  : 'Skin often looks slightly worse for the first two to four weeks as existing blockages come to the surface. Stopping early is the single most common reason acne treatment appears to fail. Photograph the same area in the same light once a week — progress is far easier to see across a month than from day to day. Once acne is controlled, most people need to continue a maintenance treatment, usually a topical retinoid, to keep it that way.'}
              </p>

              {/* Scarring */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan undgår du ar efter acne?' : 'How can you prevent acne scarring?'}
              </h2>
              <p>
                {isDa
                  ? 'Ved at behandle betændelsen tidligt og lade huden være i fred. Ar opstår, når betændelsen når dybt nok til at beskadige læderhuden, så jo dybere og mere langvarig en bums er, jo større er risikoen. Knuder og cyster giver oftest ar, og derfor bør svær acne behandles frem for at vente. At klemme eller pille presser betændelsen dybere ned og er den mest undgåelige årsag til ar overhovedet.'
                  : 'By treating inflammation early and leaving the skin alone. Scars form when inflammation reaches deep enough to damage the dermis, so the deeper and longer-lasting a spot is, the greater the risk. Nodules and cysts scar most often, which is why severe acne should be treated rather than waited out. Picking or squeezing pushes inflammation deeper and is the most avoidable cause of scarring there is.'}
              </p>
              <p>
                {isDa
                  ? 'Acne efterlader to forskellige typer mærker, som ofte forveksles. Flade røde eller brune pletter, efter en bums er forsvundet, er postinflammatorisk pigmentering – ikke ar. De falmer af sig selv over måneder, og hurtigere med daglig solcreme, der forhindrer dem i at blive mørkere. Ægte ar er forandringer i hudens struktur: små fordybninger eller – sjældnere – hævede ar på bryst, skuldre og ryg. De forsvinder ikke af sig selv, men kan forbedres med behandlinger som mikronåling, laser eller mindre kirurgiske indgreb, der bedst vurderes, når acnen selv er under kontrol.'
                  : 'Acne leaves two different kinds of mark that are often confused. Flat red or brown patches left after a spot clears are post-inflammatory pigmentation, not scars — they fade on their own over months, and faster with daily sunscreen, which stops them darkening further. True scars are changes in the skin\'s texture: small pits, or less commonly raised scars on the chest, shoulders and back. These do not resolve on their own but can be improved with treatments such as microneedling, laser resurfacing or minor surgical techniques, which are best assessed once the acne itself is under control.'}
              </p>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Acne er klassificeret som ED80 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved komedoner, papler og pustler, ofte relateret til hormonelle forandringer.'
                    : "Acne is classified as ED80 in the WHO's International Classification of Diseases (ICD-11). It is characterised by comedones, papules and pustules, often related to hormonal changes."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er acne farligt?' : 'Is acne dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Acne er ikke farligt i medicinsk forstand, men svær ubehandlet acne kan efterlade permanente ar. Tidlig behandling er vigtig.'
                      : 'Acne is not dangerous in a medical sense, but severe untreated acne can leave permanent scars. Early treatment is important.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan acne forsvinde af sig selv?' : 'Can acne go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Mild acne kan forbedres over tid, men moderat til svær acne kræver typisk behandling. At vente og se kan resultere i ardannelse.'
                      : 'Mild acne can improve over time, but moderate to severe acne typically requires treatment. Waiting it out can result in scarring.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis håndkøbsprodukter ikke hjælper efter 2–3 måneder, hvis du udvikler ar eller dybe cyster, eller hvis acnen påvirker dit velbefindende.'
                      : 'Contact a dermatologist if over-the-counter products are not helping after 2–3 months, if you develop scars or deep cysts, or if acne is affecting your well-being.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
