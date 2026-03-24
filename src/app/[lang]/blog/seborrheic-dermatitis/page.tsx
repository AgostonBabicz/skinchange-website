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
        title: 'Hvad er Seborrheisk Dermatitis? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om seborrheisk dermatitis: hvad det er, hvordan det ser ud, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'seborrheisk dermatitis, skæl, eksem, hudlidelse, behandling, hudlæge, SKIND',
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
        title: 'What is Seborrheic Dermatitis? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about seborrheic dermatitis: what it is, what it looks like, who gets it and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'seborrheic dermatitis, dandruff, eczema, skin condition, treatment, dermatologist, SKIND',
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
      ? 'Hvad er Seborrheisk Dermatitis? Årsager, Symptomer og Behandling'
      : 'What is Seborrheic Dermatitis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til seborrheisk dermatitis: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to seborrheic dermatitis: what it is, causes, symptoms and treatment options.',
    image: '/blog-seborrheic-dermatitis.jpg',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      jobTitle: isDa ? 'Medicinsk redaktion' : 'Medical editorial team',
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
            name: 'Hvad er seborrheisk dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seborrheisk dermatitis er en almindelig, kronisk hudlidelse, der forårsager røde, skællende og fedtede pletter på hovedbunden, i ansigtet og på andre olieholdige områder af kroppen. Den er ikke smitsom og udgør ingen alvorlig sundhedsrisiko.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser seborrheisk dermatitis ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Typiske tegn inkluderer skællende, røde pletter på hovedbunden (skæl), øjenbrynene, siderne af næsen og bag ørerne. Hos spædbørn ses karakteristiske gullige, fedtede skæl på hovedbunden (vuggekant). Områderne kan være mildt kløende eller brændende.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvem får seborrheisk dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seborrheisk dermatitis rammer alle aldre. Spædbørn under tre måneder udvikler ofte vuggekant, der normalt forsvinder af sig selv. Voksne mellem 30–50 år er hyppigst ramt, særligt mænd. Personer med HIV/AIDS eller svækket immunsystem har også øget risiko.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is seborrheic dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seborrheic dermatitis is a common, chronic skin condition causing red, flaky and greasy patches on the scalp, face and other oily areas of the body. It is not contagious and poses no serious health risk.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does seborrheic dermatitis look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Typical signs include scaly, red patches on the scalp (dandruff), eyebrows, sides of the nose and behind the ears. In infants, characteristic yellowish, greasy scales appear on the scalp (cradle cap). Affected areas may be mildly itchy or burning.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who gets seborrheic dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seborrheic dermatitis affects all ages. Infants under three months often develop cradle cap, which usually resolves on its own. Adults between 30–50 years are most commonly affected, particularly men. People with HIV/AIDS or weakened immune systems also have an elevated risk.',
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
                {isDa ? 'Seborrheisk Dermatitis' : 'Seborrheic Dermatitis'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">19. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Seborrheisk Dermatitis? Årsager, Symptomer og Behandling'
                : 'What is Seborrheic Dermatitis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80"
                alt={isDa ? 'Seborrheisk dermatitis – skæl og hudlidelse' : 'Seborrheic dermatitis – dandruff and skin condition'}
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
                    <strong>Seborrheisk dermatitis er en af de mest almindelige hudlidelser</strong>, der rammer op mod 5% af befolkningen. Den viser sig typisk som vedvarende skæl og røde, skællende pletter i ansigtet og på hovedbunden — og selvom den er fredelig for din generelle sundhed, kan den være generende og påvirke selvtilliden.
                  </>
                ) : (
                  <>
                    <strong>Seborrheic dermatitis is one of the most common skin conditions</strong>, affecting up to 5% of the population. It typically presents as persistent dandruff and red, scaly patches on the face and scalp — and while it poses no serious threat to your overall health, it can be bothersome and affect self-confidence.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad seborrheisk dermatitis er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what seborrheic dermatitis is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er seborrheisk dermatitis?' : 'What is seborrheic dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seborrheisk dermatitis er en kronisk, inflammatorisk hudlidelse, der primært rammer områder med mange talgkirtler — hovedbunden, ansigtet, ørerne, brystet og øvre ryg. Den resulterer i røde, skællende og fedtede pletter, der kan være mildt kløende.'
                  : 'Seborrheic dermatitis is a chronic, inflammatory skin condition that primarily affects areas with many oil glands — the scalp, face, ears, chest and upper back. It results in red, scaly and greasy patches that can be mildly itchy.'}
              </p>
              <p>
                {isDa
                  ? 'Selvom den præcise årsag er ukendt, menes tilstanden at være forbundet med overproduktion af talg (hudolie), hormonelle faktorer og gærsvampen Malassezia, der naturligt lever på huden. Sygdommen er ikke smitsom og udgør ingen alvorlig sundhedsrisiko.'
                  : 'Although the exact cause is unknown, the condition is thought to be linked to overproduction of sebum (skin oil), hormonal factors and the yeast Malassezia, which naturally lives on the skin. The disease is not contagious and poses no serious health risk.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser seborrheisk dermatitis ud?' : 'What does seborrheic dermatitis look like?'}
              </h2>
              <p>{isDa ? 'Seborrheisk dermatitis viser sig typisk på følgende måde:' : 'Seborrheic dermatitis typically presents as follows:'}</p>
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
                  <strong>{isDa ? 'Mild kløe eller brændende:' : 'Mild itching or burning:'}</strong>{' '}
                  {isDa
                    ? 'Kløe og irritation i de berørte områder er almindeligt, men sjældent alvorligt.'
                    : 'Itching and irritation in the affected areas is common but rarely severe.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Hos voksne viser tilstanden sig oftest som vedvarende skæl og røde, skællende områder langs hårgrænsen, på panden, omkring næsen og i øjenbrynene.'
                  : 'In adults, the condition most often presents as persistent dandruff and red, scaly areas along the hairline, on the forehead, around the nose and in the eyebrows.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår seborrheisk dermatitis?' : 'Why does seborrheic dermatitis happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Flere faktorer menes at bidrage til udviklingen af seborrheisk dermatitis:'
                  : 'Several factors are believed to contribute to the development of seborrheic dermatitis:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Malassezia-gærsvamp' : 'Malassezia yeast'}
              </h3>
              <p>
                {isDa
                  ? 'Gærsvampen Malassezia lever naturligt på huden, særligt i olieholdige områder. Hos nogle mennesker.trigger den en immunreaktion, der forårsager betændelse og den karakteristiske skældannelse. Forskning har vist, at antallet af Malassezia er forhøjet på berørt hud hos personer med seborrheisk dermatitis.'
                  : 'The yeast Malassezia lives naturally on the skin, particularly in oily areas. In some people it triggers an immune reaction that causes inflammation and the characteristic scaling. Research has shown that the number of Malassezia is elevated on affected skin in people with seborrheic dermatitis.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Øget talgproduktion' : 'Increased oil production'}
              </h3>
              <p>
                {isDa
                  ? 'Talgkirtlerne producerer mere olie under påvirkning af hormoner, visse medicin og medicinske tilstande. Overskydende talg skaber et miljø, hvor Malassezia trives og formerer sig. Dette forklarer, hvorfor tilstanden primært rammer olieholdige områder.'
                  : 'Oil glands produce more oil under the influence of hormones, certain medications and medical conditions. Excess sebum creates an environment where Malassezia thrives and multiplies. This explains why the condition primarily affects oily areas.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik og immunforsvar' : 'Genetics and immune system'}
              </h3>
              <p>
                {isDa
                  ? 'Nogle mennesker er genetisk mere tilbøjelige til at udvikle seborrheisk dermatitis. Der er også en stærk association med neurologiske tilstande som Parkinsons sygdom, og personer med HIV/AIDS har en markant højere forekomst. Stress kan desuden forværre symptomerne.'
                  : 'Some people are genetically more prone to developing seborrheic dermatitis. There is also a strong association with neurological conditions such as Parkinson\'s disease, and people with HIV/AIDS have a significantly higher prevalence. Stress can also worsen symptoms.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får seborrheisk dermatitis?' : 'Who gets seborrheic dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seborrheisk dermatitis rammer mennesker i alle aldre:'
                  : 'Seborrheic dermatitis affects people of all ages:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Spædbørn:' : 'Infants:'}</strong>{' '}
                  {isDa
                    ? 'Vuggekant er meget almindeligt hos spædbørn under tre måneder og forsvinder normalt af sig selv inden for det første år.'
                    : 'Cradle cap is very common in infants under three months and usually resolves on its own within the first year.'}
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
                    ? 'Personer med HIV/AIDS,/organtransplanterede eller andre immundefekter har en markant højere forekomst og ofte mere alvorlige symptomer.'
                    : 'People with HIV/AIDS, organ transplants or other immune deficiencies have a significantly higher prevalence and often more severe symptoms.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved seborrheisk dermatitis?' : 'What can you do about seborrheic dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seborrheisk dermatitis er håndterbar, men der er ingen kur. Konsistent behandling kontrollerer symptomerne og forebygger udbrud:'
                  : 'Seborrheic dermatitis is manageable, but there is no cure. Consistent treatment controls symptoms and prevents flare-ups:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧴 Medicinsk shampoo (skæl)' : '🧴 Medicated shampoo (dandruff)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Shampooer med svampedræbende midler (ketoconazol, ciclopirox, seleniumsulfid) eller zinkpyrithion er førstevalgsbehandling mod skæl og hovedbundsseborré. Brug 2–3 gange om ugen.'
                      : 'Shampoos with antifungal agents (ketoconazole, ciclopirox, selenium sulfide) or zinc pyrithione are first-line treatment for dandruff and scalp seborrhoea. Use 2–3 times per week.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Svampedræbende cremer' : '💊 Antifungal creams'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Til ansigts- og kropssbetændelse findes svampedræbende cremer (ketoconazol, clotrimazol) og calcineurinhæmmere (tacrolimus, pimecrolimus) som effektive, steroidfrie alternativer.'
                      : 'For facial and body inflammation, antifungal creams (ketoconazole, clotrimazole) and calcineurin inhibitors (tacrolimus, pimecrolimus) are effective, steroid-free alternatives.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Kortikosteroider' : '🩺 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved mere udbredt inflammation kan kortkurstbehandling med svage til moderat steroidkremere (hydrocortison 1%) lindre symptomer. Undgå langvarig brug i ansigtet.'
                      : 'For more widespread inflammation, short courses of mild to moderate topical corticosteroids (hydrocortisone 1%) can relieve symptoms. Avoid prolonged use on the face.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
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
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Seborrheisk dermatitis er klassificeret som EA81 i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden karakteriseres ved skællende, erytematøse pletter særligt på talgholdige områder og behandles med svampedræbende shampoo og topiske steroider.'
                    : "Seborrheic dermatitis is classified as EA81 in the WHO's International Classification of Diseases (ICD-11). The condition is characterised by scaly, erythematous plaques particularly on sebum-rich areas and is managed with antifungal shampoos and topical steroids."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er seborrheisk dermatitis smitsomt?' : 'Is seborrheic dermatitis contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej, seborrheisk dermatitis er ikke smitsomt. Selvom gærsvampen Malassezia er til stede på huden, er det din egen immunreaktion, der afgør, om du udvikler tilstanden.'
                      : 'No, seborrheic dermatitis is not contagious. Even though the yeast Malassezia is present on the skin, it is your own immune reaction that determines whether you develop the condition.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvad er forskellen mellem skæl og seborrheisk dermatitis?' : 'What is the difference between dandruff and seborrheic dermatitis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Skæl er en mild form for seborrheisk dermatitis, hvor hovedbunden er tør eller olieholdig med løse hvide skæl, men uden synlig rødme. Seborrheisk dermatitis omfatter derimod også betændelse, rødme og fastere siddende skæl.'
                      : 'Dandruff is a mild form of seborrheic dermatitis where the scalp is dry or oily with loose white flakes, but without visible redness. Seborrheic dermatitis, on the other hand, also includes inflammation, redness and more firmly attached scales.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge hvis håndkøbsshampoo og cremer ikke hjælper efter 4–6 uger, hvis udslættet er meget udbredt eller generende, eller hvis huden bliver inficeret (væske, gullige skorper, feber).'
                      : 'Contact a dermatologist if over-the-counter shampoos and creams are not helping after 4–6 weeks, if the rash is very widespread or bothersome, or if the skin becomes infected (oozing, yellow crusts, fever).'}
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
                    ? 'Er du i tvivl om dit udslæt? Upload billeder via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge — uden ventetid.'
                    : 'Not sure about your rash? Upload photos via the SKIND app and receive a personal assessment from a certified dermatologist — no waiting list.'}
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
