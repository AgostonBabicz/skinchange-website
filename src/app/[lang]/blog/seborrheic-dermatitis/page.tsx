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
        title: 'Seboroisk Dermatitis: Symptomer og Behandling | SKIND',
        description:
          'Seboroisk dermatitis: hvorfor skæl og røde, fedtede pletter opstår, hvem der rammes, og hvad der virker. Få en vurdering af en hudlæge via SKIND.',
        keywords:
          'seboroisk dermatitis, skæl, vuggekant, seboroisk dermatitis behandling, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/seborrheic-dermatitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/seborrheic-dermatitis',
            da: 'https://www.skinchange.dk/da/blog/seborrheic-dermatitis',
            en: 'https://www.skinchange.dk/en/blog/seborrheic-dermatitis',
          },
        },
      }
    : {
        title: 'Seborrhoeic Dermatitis: Symptoms and Treatment | SKIND',
        description:
          'Seborrhoeic dermatitis: why dandruff and red, greasy patches appear, who gets it, and what works. Get an assessment from a dermatologist via SKIND.',
        keywords:
          'seborrhoeic dermatitis, dandruff, cradle cap, seborrhoeic dermatitis treatment, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/seborrheic-dermatitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/seborrheic-dermatitis',
            da: 'https://www.skinchange.dk/da/blog/seborrheic-dermatitis',
            en: 'https://www.skinchange.dk/en/blog/seborrheic-dermatitis',
          },
        },
      };
}

export default function SeborrheicDermatitisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Seboroisk Dermatitis? Årsager, Symptomer og Behandling'
      : 'What is Seborrhoeic Dermatitis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til seboroisk dermatitis: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to seborrhoeic dermatitis: what it is, causes, symptoms and treatment options.',
    image: '/blog-seborrheic-dermatitis.jpg',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
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
            name: 'Er seboroisk dermatitis smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, seboroisk dermatitis er ikke smitsomt. Selvom gærsvampen Malassezia er til stede på huden, er det din egen immunreaktion, der afgør, om du udvikler tilstanden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvad er forskellen mellem skæl og seboroisk dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Skæl er en mild form for seboroisk dermatitis, hvor hovedbunden er tør eller olieholdig med løse hvide skæl, men uden synlig rødme. Seboroisk dermatitis omfatter derimod også betændelse, rødme og fastere siddende skæl.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis håndkøbsshampoo og cremer ikke hjælper efter 4–6 uger, hvis udslættet er meget udbredt eller generende, eller hvis huden bliver inficeret (væske, gullige skorper, feber). Søg også læge, hvis seboroisk dermatitis opstår pludseligt, er usædvanligt kraftig eller ikke reagerer på behandling — i sjældne tilfælde kan det være det første tegn på en anden underliggende tilstand.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is seborrhoeic dermatitis contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, seborrhoeic dermatitis is not contagious. Even though the yeast Malassezia is present on the skin, it is your own immune reaction that determines whether you develop the condition.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between dandruff and seborrhoeic dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dandruff is a mild form of seborrhoeic dermatitis where the scalp is dry or oily with loose white flakes, but without visible redness. Seborrhoeic dermatitis, on the other hand, also includes inflammation, redness and more firmly attached scales.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if over-the-counter shampoos and creams are not helping after 4–6 weeks, if the rash is very widespread or bothersome, or if the skin becomes infected (oozing, yellow crusts, fever). Also see a doctor if seborrhoeic dermatitis appears suddenly, is unusually severe, or does not respond to treatment — in rare cases this can be the first sign of another underlying condition.',
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
              <Link href={`/${lang}`} className="hover:text-primary">
                {isDa ? 'Forside' : 'Home'}
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-primary">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">
                {isDa ? 'Seboroisk Dermatitis' : 'Seborrhoeic Dermatitis'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '19. marts 2026' : 'March 19, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '5 min læsetid' : '5 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Seboroisk Dermatitis? Årsager, Symptomer og Behandling'
                : 'What is Seborrhoeic Dermatitis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-seborrheic-dermatitis.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af hårgrænsen med røde, skællende pletter og løse hvide skæl'
                    : 'Close-up of a hairline with red, scaly patches and loose white flakes'
                }
                width={1600}
                height={900}
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
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
                    <strong>Seboroisk dermatitis er en af de mest almindelige hudlidelser</strong>. Selve tilstanden rammer omkring 1–3% af voksne, mens den mildeste form — skæl — ses hos op mod halvdelen af alle voksne. Den viser sig typisk som vedvarende skæl og røde, skællende pletter i ansigtet og på hovedbunden — og selvom den er fredelig for din generelle sundhed, kan den være generende og påvirke selvtilliden.
                  </>
                ) : (
                  <>
                    <strong>Seborrhoeic dermatitis is one of the most common skin conditions</strong>. The condition itself affects around 1–3% of adults, while its mildest form — dandruff — affects up to half of all adults. It typically presents as persistent flaking and red, scaly patches on the face and scalp — and while it poses no serious threat to your overall health, it can be bothersome and affect self-confidence.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad seboroisk dermatitis er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what seborrhoeic dermatitis is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er seboroisk dermatitis?' : 'What is seborrhoeic dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk dermatitis er en kronisk, inflammatorisk hudlidelse, der primært rammer områder med mange talgkirtler — hovedbunden, ansigtet, ørerne, brystet og øvre ryg. Den resulterer i røde, skællende og fedtede pletter, der kan være mildt kløende.'
                  : 'Seborrhoeic dermatitis is a chronic, inflammatory skin condition that primarily affects areas with many oil glands — the scalp, face, ears, chest and upper back. It results in red, scaly and greasy patches that can be mildly itchy.'}
              </p>
              <p>
                {isDa
                  ? 'Selvom den præcise årsag er ukendt, menes tilstanden at være forbundet med overproduktion af talg (hudolie), hormonelle faktorer og gærsvampen Malassezia, der naturligt lever på huden. Sygdommen er ikke smitsom og udgør ingen alvorlig sundhedsrisiko.'
                  : 'Although the exact cause is unknown, the condition is thought to be linked to overproduction of sebum (skin oil), hormonal factors and the yeast Malassezia, which naturally lives on the skin. The disease is not contagious and poses no serious health risk.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser seboroisk dermatitis ud?' : 'What does seborrhoeic dermatitis look like?'}
              </h2>
              <p>{isDa ? 'Seboroisk dermatitis viser sig typisk på følgende måde:' : 'Seborrhoeic dermatitis typically presents as follows:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Skællende, røde pletter:' : 'Scaly, red patches:'}</strong>{' '}
                  {isDa
                    ? 'Ofte på hovedbunden (skæl), øjenbrynene, siderne af næsen eller bag ørerne. Skællene kan være hvide og tørre eller gullige og fedtede.'
                    : 'Often on the scalp (dandruff), eyebrows, sides of the nose or behind the ears. The scales can be white and dry or yellowish and greasy.'}
                </li>
                <li>
                  <strong>{isDa ? 'Fedtede eller gullige skæl:' : 'Greasy or yellowish scales:'}</strong>{' '}
                  {isDa
                    ? 'Særligt tydeligt hos spædbørn, hvor tilstanden kaldes vuggekant. De gule skæl sidder fast i fedtet på hovedbunden.'
                    : 'Particularly noticeable in infants, where the condition is called cradle cap. The yellow scales stick to the oily scalp.'}
                </li>
                <li>
                  <strong>{isDa ? 'Mild kløe eller brænden:' : 'Mild itching or burning:'}</strong>{' '}
                  {isDa
                    ? 'Kløe og irritation i de berørte områder er almindelige, men sjældent alvorlige.'
                    : 'Itching and irritation in the affected areas are common but rarely severe.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Hos voksne viser tilstanden sig oftest som vedvarende skæl og røde, skællende områder langs hårgrænsen, på panden, omkring næsen og i øjenbrynene.'
                  : 'In adults, the condition most often presents as persistent dandruff and red, scaly areas along the hairline, on the forehead, around the nose and in the eyebrows.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Andre hudsygdomme kan ligne seboroisk dermatitis.{' '}
                    <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                      Psoriasis
                    </Link>{' '}
                    i hovedbunden giver tykkere, sølvhvide skæl med skarpere afgrænsning — overlappet mellem de to kaldes sebopsoriasis — mens{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      atopisk eksem
                    </Link>{' '}
                    typisk sidder i albue- og knæbøjninger frem for i de talgrige områder.
                  </>
                ) : (
                  <>
                    Other skin diseases can look like seborrhoeic dermatitis. Scalp{' '}
                    <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                      psoriasis
                    </Link>{' '}
                    produces thicker, silvery-white scale with a sharper border — the overlap between the two is called sebopsoriasis — while{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      atopic eczema
                    </Link>{' '}
                    typically affects the creases of the elbows and knees rather than the oily areas.
                  </>
                )}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår seboroisk dermatitis?' : 'Why does seborrhoeic dermatitis happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Flere faktorer menes at bidrage til udviklingen af seboroisk dermatitis:'
                  : 'Several factors are believed to contribute to the development of seborrhoeic dermatitis:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad gør Malassezia-gærsvampen?' : 'What does the Malassezia yeast do?'}
              </h3>
              <p>
                {isDa
                  ? 'Gærsvampen Malassezia lever naturligt på huden, særligt i olieholdige områder. Hos nogle mennesker udløser den en immunreaktion, der forårsager betændelse og den karakteristiske skældannelse. Forskning har vist, at antallet af Malassezia er forhøjet på berørt hud hos personer med seboroisk dermatitis.'
                  : 'The yeast Malassezia lives naturally on the skin, particularly in oily areas. In some people it triggers an immune reaction that causes inflammation and the characteristic scaling. Research has shown that the number of Malassezia is elevated on affected skin in people with seborrhoeic dermatitis.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvorfor betyder talgproduktionen noget?' : 'Why does oil production matter?'}
              </h3>
              <p>
                {isDa
                  ? 'Talgkirtlerne producerer mere olie under påvirkning af hormoner, visse lægemidler og medicinske tilstande. Overskydende talg skaber et miljø, hvor Malassezia trives og formerer sig. Dette forklarer, hvorfor tilstanden primært rammer olieholdige områder.'
                  : 'Oil glands produce more oil under the influence of hormones, certain medications and medical conditions. Excess sebum creates an environment where Malassezia thrives and multiplies. This explains why the condition primarily affects oily areas.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvilken rolle spiller gener og immunforsvar?' : 'What role do genes and the immune system play?'}
              </h3>
              <p>
                {isDa
                  ? 'Nogle mennesker er genetisk mere tilbøjelige til at udvikle seboroisk dermatitis. Der er også en stærk association med neurologiske tilstande som Parkinsons sygdom, og personer med HIV/AIDS har en markant højere forekomst. Stress kan desuden forværre symptomerne.'
                  : 'Some people are genetically more prone to developing seborrhoeic dermatitis. There is also a strong association with neurological conditions such as Parkinson\'s disease, and people with HIV/AIDS have a significantly higher prevalence. Stress can also worsen symptoms.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får seboroisk dermatitis?' : 'Who gets seborrhoeic dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk dermatitis rammer mennesker i alle aldre:'
                  : 'Seborrhoeic dermatitis affects people of all ages:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Spædbørn:' : 'Infants:'}</strong>{' '}
                  {isDa
                    ? 'Vuggekant er meget almindeligt hos spædbørn under tre måneder og forsvinder normalt af sig selv inden for det første år. Svampe- eller steroidbehandling er sjældent nødvendig hos spædbørn — fugtighedscreme eller olie og forsigtig børstning af skællene er som regel nok.'
                    : 'Cradle cap is very common in infants under three months and usually resolves on its own within the first year. Antifungal or steroid treatment is rarely necessary in infants — an emollient or oil and gentle brushing of the scales is usually enough.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne 30–50 år:' : 'Adults 30–50 years:'}</strong>{' '}
                  {isDa
                    ? 'Denne aldersgruppe er hyppigst ramt. Tilstanden er mere udbredt hos mænd end hos kvinder.'
                    : 'This age group is most commonly affected. The condition is more prevalent in men than women.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med svækket immunsystem:' : 'People with weakened immune systems:'}</strong>{' '}
                  {isDa
                    ? 'Personer med HIV/AIDS, organtransplanterede eller andre immundefekter har en markant højere forekomst og ofte mere alvorlige symptomer.'
                    : 'People with HIV/AIDS, organ transplants or other immune deficiencies have a significantly higher prevalence and often more severe symptoms.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved seboroisk dermatitis?' : 'What can you do about seborrhoeic dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk dermatitis er håndterbar, men der er ingen kur. Konsistent behandling kontrollerer symptomerne og forebygger udbrud:'
                  : 'Seborrhoeic dermatitis is manageable, but there is no cure. Consistent treatment controls symptoms and prevents flare-ups:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧴 Medicinsk shampoo (skæl)' : '🧴 Medicated shampoo (dandruff)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Shampooer med svampedræbende midler (ketoconazol, ciclopirox, selensulfid) eller zinkpyrithion er førstevalgsbehandling mod skæl og seboré i hovedbunden. Brug 2–3 gange om ugen.'
                      : 'Shampoos with antifungal agents (ketoconazole, ciclopirox, selenium sulphide) or zinc pyrithione are first-line treatment for dandruff and scalp seborrhoea. Use 2–3 times per week.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Svampedræbende cremer' : '💊 Antifungal creams'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Til betændelse i ansigt og på krop findes svampedræbende cremer (ketoconazol, clotrimazol) og calcineurinhæmmere (tacrolimus, pimecrolimus) som effektive, steroidfrie alternativer.'
                      : 'For facial and body inflammation, antifungal creams (ketoconazole, clotrimazole) and calcineurin inhibitors (tacrolimus, pimecrolimus) are effective, steroid-free alternatives.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🩺 Kortikosteroider' : '🩺 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved mere udbredt inflammation kan korttidsbehandling med en svag steroidcreme (hydrocortison 1%) lindre symptomerne. Undgå langvarig brug i ansigtet.'
                      : 'For more widespread inflammation, a short course of a mild topical corticosteroid (hydrocortisone 1%) can relieve symptoms. Avoid prolonged use on the face.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🥗 Livsstil' : '🥗 Lifestyle'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Regelmæssig og skånsom hudpleje, stresshåndtering og undgåelse af produkter med alkohol eller parfume kan alle bidrage til at reducere udbrud.'
                      : 'Regular and gentle skincare, stress management and avoiding products with alcohol or fragrance can all help reduce flare-ups.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Seboroisk dermatitis er klassificeret som EA81 i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden karakteriseres ved skællende, erytematøse pletter særligt på talgholdige områder og behandles primært med svampedræbende shampoo og cremer.'
                    : "Seborrhoeic dermatitis is classified as EA81 in the WHO's International Classification of Diseases (ICD-11). The condition is characterised by scaly, erythematous plaques particularly on sebum-rich areas and is managed primarily with antifungal shampoos and creams."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er seboroisk dermatitis smitsomt?' : 'Is seborrhoeic dermatitis contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej, seboroisk dermatitis er ikke smitsomt. Selvom gærsvampen Malassezia er til stede på huden, er det din egen immunreaktion, der afgør, om du udvikler tilstanden.'
                      : 'No, seborrhoeic dermatitis is not contagious. Even though the yeast Malassezia is present on the skin, it is your own immune reaction that determines whether you develop the condition.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvad er forskellen mellem skæl og seboroisk dermatitis?' : 'What is the difference between dandruff and seborrhoeic dermatitis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Skæl er en mild form for seboroisk dermatitis, hvor hovedbunden er tør eller olieholdig med løse hvide skæl, men uden synlig rødme. Seboroisk dermatitis omfatter derimod også betændelse, rødme og fastere siddende skæl.'
                      : 'Dandruff is a mild form of seborrhoeic dermatitis where the scalp is dry or oily with loose white flakes, but without visible redness. Seborrhoeic dermatitis, on the other hand, also includes inflammation, redness and more firmly attached scales.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis håndkøbsshampoo og cremer ikke hjælper efter 4–6 uger, hvis udslættet er meget udbredt eller generende, eller hvis huden bliver inficeret (væske, gullige skorper, feber). Søg også læge, hvis seboroisk dermatitis opstår pludseligt, er usædvanligt kraftig eller ikke reagerer på behandling — i sjældne tilfælde kan det være det første tegn på en anden underliggende tilstand.'
                      : 'Contact a dermatologist if over-the-counter shampoos and creams are not helping after 4–6 weeks, if the rash is very widespread or bothersome, or if the skin becomes infected (oozing, yellow crusts, fever). Also see a doctor if seborrhoeic dermatitis appears suddenly, is unusually severe, or does not respond to treatment — in rare cases this can be the first sign of another underlying condition.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-900 text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Er du i tvivl om dit udslæt? Upload billeder via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge — uden ventetid.'
                    : 'Not sure about your rash? Upload photos via the SKIND app and receive a personal assessment from a certified dermatologist — no waiting list.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${lang}/download`}
                    className="inline-flex justify-center items-center px-6 py-3 bg-white text-primary-900 rounded-full font-semibold hover:bg-white/90 transition-colors"
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
