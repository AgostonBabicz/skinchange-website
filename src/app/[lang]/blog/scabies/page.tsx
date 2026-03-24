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
        title: 'Hvad er Skab? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om skab: hvad det er, hvorfor det smitter, hvordan det ser ud, og hvilke behandlinger der effektivt fjerner miden. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'hvad er skab, skab årsager, skab symptomer, skab behandling, skab smitte, hudlæge skab, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/scabies',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/scabies',
            da: 'https://www.skinchange.dk/da/blog/scabies',
            en: 'https://www.skinchange.dk/en/blog/scabies',
          },
        },
      }
    : {
        title: 'What is Scabies? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about scabies: what it is, why it spreads, what it looks like, and which treatments effectively eliminate the mites. Get help from a dermatologist via SKIND.',
        keywords:
          'what is scabies, scabies causes, scabies symptoms, scabies treatment, scabies mites, dermatologist scabies, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/scabies',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/scabies',
            da: 'https://www.skinchange.dk/da/blog/scabies',
            en: 'https://www.skinchange.dk/en/blog/scabies',
          },
        },
      };
}

export default function ScabiesPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Skab? Årsager, Symptomer og Behandling'
      : 'What is Scabies? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til skab: hvad det er, hvorfor det smitter, symptomer og effektive behandlinger.'
      : 'Complete guide to scabies: what it is, why it spreads, symptoms and effective treatments.',
    image: '/blog-scabies.jpg',
    datePublished: '2026-03-20',
    dateModified: '2026-03-20',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      jobTitle: isDa ? 'Medicinsk redaktion' : 'Medical editorial team',
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
            name: 'Hvad er skab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Skab er en smitsom hudinfektion forårsaget af sarcoptes scabiei-miden, der graver sig ind i huden og forårsager intens kløe og irritation. Det smitter via tæt hud-til-hud kontakt eller delte genstande.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser skab ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Skab viser sig typisk som intens kløe (især om natten), små røde knopper på håndled, fingre, albuer og kønsorganer, samt tynde, lyse graverlinjer i huden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan behandles skab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Skab behandles med topiske skabmidler (permethrin) eller orale midler (ivermectin) ordineret af en læge. Alle i tæt kontakt skal behandles samtidig, og tøj samt sengetøj skal vaskes ved høj temperatur.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is scabies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Scabies is a contagious skin infestation caused by the sarcoptes scabiei mite, which burrows into the skin causing intense itching and irritation. It spreads through close skin-to-skin contact or shared objects.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does scabies look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Scabies typically presents as intense itching (especially at night), small red bumps on the wrists, fingers, elbows and genitals, and thin, light-coloured burrow lines in the skin.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is scabies treated?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Scabies is treated with topical scabicides (permethrin) or oral medication (ivermectin) prescribed by a doctor. All close contacts must be treated simultaneously, and clothing and bedding must be washed at high temperature.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Skab?' : 'What is Scabies?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">20. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Skab? Årsager, Symptomer og Behandling'
                : 'What is Scabies? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#5c6bc0] to-[#303f9f]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-scabies.jpg"
                alt={isDa ? 'Skab – intens kløe og hudirritation' : 'Scabies – intense itching and skin irritation'}
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
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
                    <strong>Skab er en af de mest smitsomme hudlidelser, du kan få</strong>, og det rammer millioner af mennesker verden over hvert år. Modsat mange andre hudproblemer er skab ikke forårsaget af bakterier eller virus – det er en insektmide der graver sig ind i hudens yderste lag.
                  </>
                ) : (
                  <>
                    <strong>Scabies is one of the most contagious skin conditions you can get</strong>, affecting millions of people worldwide every year. Unlike many other skin problems, scabies is not caused by bacteria or a virus — it is a mite that burrows into the outermost layer of your skin.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad skab er, hvorfor det smitter så let, hvordan det viser sig, og hvad du kan gøre for at blive fri for det.'
                  : 'In this article, we explain exactly what scabies is, why it spreads so easily, what it looks like, and what you can do to get rid of it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is scabies */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er skab?' : 'What is scabies?'}
              </h2>
              <p>
                {isDa
                  ? 'Skab (latin: scabies) er en hudinfestation forårsaget af miden sarcoptes scabiei var. hominis. Hunnen graver små tunneler (gange) i hudens yderste lag — epidermis — hvor hun lægger sine æg. Kroppens immunreaktion på miden, dens æg og afføringsprodukter er det, der udløser den intense kløe og betændelse.'
                  : 'Scabies is a skin infestation caused by the mite sarcoptes scabiei var. hominis. The female mite burrows small tunnels (burrows) into the outermost layer of skin — the epidermis — where she lays her eggs. The body\'s immune reaction to the mite, its eggs and faecal matter is what triggers the intense itching and inflammation.'}
              </p>
              <p>
                {isDa
                  ? 'Modsat hvad mange tror, har skab intet at gøre med dårlig hygiejne. Enhver kan få skab — uanset alder, livsstil eller socioøkonomisk status. Det er dog mere udbredt i overfyldte miljøer og steder med tæt fysisk kontakt.'
                  : 'Contrary to what many believe, scabies has nothing to do with poor hygiene. Anyone can get scabies — regardless of age, lifestyle or socioeconomic status. It is, however, more common in crowded environments and places with close physical contact.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser skab ud?' : 'What does scabies look like?'}
              </h2>
              <p>{isDa ? 'Skab kan vise sig på flere måder:' : 'Scabies can appear in several ways:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Intens kløe – især om natten:' : 'Intense itching — especially at night:'}</strong>{' '}
                  {isDa
                    ? 'Det mest fremtrædende symptom er kløe, der ofte forværres markant i varme omgivelser og om natten, når man ligger under dynen. Dette kan gøre det svært at sove.'
                    : 'The most prominent symptom is itching, which often worsens significantly in warm environments and at night when lying under the covers. This can make it difficult to sleep.'}
                </li>
                <li>
                  <strong>{isDa ? 'Små, røde knopper:' : 'Small, red bumps:'}</strong>{' '}
                  {isDa
                    ? 'Disse ligner små bumser eller nældefeber-knopper og sidder typisk på håndled, fingre, albuer, armhuler, brystvorter, kønsorganer og lyske. Hos spædbørn kan hele kroppen være påvirket.'
                    : 'These resemble small pimples or hives and are typically found on the wrists, fingers, elbows, armpits, nipples, genitals and groin. In infants, the entire body may be affected.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tynde, uregelmæssige graverlinjer:' : 'Thin, irregular burrow lines:'}</strong>{' '}
                  {isDa
                    ? 'De karakteristiske tynde, grålig-hvide eller lyse linjer på huden, der markerer midenes tunneler. De er ofte korte (nogle få millimeter) og let snorlige.'
                    : 'The characteristic thin, greyish-white or light lines on the skin that mark the mites\' tunnels. They are often short (a few millimetres) and slightly serpentine.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tykt, skællende hud (i kroniske tilfælde):' : 'Thick, scaly skin (in chronic cases):'}</strong>{' '}
                  {isDa
                    ? 'Ved ubehandlet skab over længere tid kan huden blive tyk, ru og skællende, særligt på hænder og fødder.'
                    : 'In untreated scabies over a longer period, the skin can become thick, rough and scaly, especially on the hands and feet.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår skab?' : 'Why does scabies happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Skab smitter primært gennem direkte, udvidet hud-til-hud kontakt med en smittet person. Da miden ikke kan hoppe eller flyve, kræver smitte relativt langvarig kontakt:'
                  : 'Scabies primarily spreads through direct, extended skin-to-skin contact with an infected person. Since the mite cannot jump or fly, transmission requires relatively prolonged contact:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Tæt kontakt (primær smittevej)' : 'Close contact (primary route)'}
              </h3>
              <p>
                {isDa
                  ? 'Skab overføres let mellem familiemedlemmer, seksualpartnere og personer der deler seng. Kort håndtryk eller tilfældig omgangskontakt giver sjældent smitte.'
                  : 'Scabies spreads easily between family members, sexual partners and people who share a bed. Brief handshakes or casual contact rarely result in transmission.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Delte genstande (mindre almindeligt)' : 'Shared objects (less common)'}
              </h3>
              <p>
                {isDa
                  ? 'Miden kan i sjældne tilfælde overføres via delte håndklæder, sengetøj eller tøj. Dette er mest relevant ved tung infestation eller i institutionelle miljøer. Miden overlever typisk kun 2–3 dage uden for menneskets hud.'
                  : 'In rare cases the mite can be transmitted via shared towels, bedding or clothing. This is most relevant in heavy infestations or institutional settings. The mite typically only survives 2–3 days outside human skin.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Incubationstid' : 'Incubation period'}
              </h3>
              <p>
                {isDa
                  ? 'Hvis det er første gang du får skab, kan det tage op til 4–6 uger før symptomerne viser sig. Ved geninfektion hos personer der tidligere har haft skab, viser symptomerne sig typisk inden for 1–4 dage, da immunforsvaret allerede reagerer hurtigere.'
                  : 'If it is the first time you have had scabies, it can take up to 4–6 weeks before symptoms appear. In reinfection in people who have previously had scabies, symptoms typically appear within 1–4 days, as the immune system already reacts faster.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får skab?' : 'Who gets scabies?'}
              </h2>
              <p>
                {isDa
                  ? 'Skab rammer alle — uanset alder, køn, etnicitet eller hygiejnestandard. Visse faktorer øger dog risikoen:'
                  : 'Scabies affects everyone — regardless of age, gender, ethnicity or hygiene standard. Certain factors, however, increase the risk:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Tæt boforhold:' : 'Close living conditions:'}</strong>{' '}
                  {isDa
                    ? 'Familier, kollegier, plejehjem og fængsler er typiske steder hvor skab spreder sig.'
                    : 'Families, dormitories, nursing homes and prisons are typical places where scabies spreads.'}
                </li>
                <li>
                  <strong>{isDa ? 'Seksuel kontakt:' : 'Sexual contact:'}</strong>{' '}
                  {isDa
                    ? 'Voksne med skab får det ofte via tæt, fysisk kontakt med en smittet partner.'
                    : 'Adults with scabies often get it through close physical contact with an infected partner.'}
                </li>
                <li>
                  <strong>{isDa ? 'Nedsat immunforsvar:' : 'Weakened immune system:'}</strong>{' '}
                  {isDa
                    ? 'Personer med HIV/AIDS eller andre tilstande der svækker immunforsvaret kan udvikle mere alvorlig skab (crusted scabies).'
                    : 'People with HIV/AIDS or other conditions that weaken the immune system may develop more severe scabies (crusted scabies).'}
                </li>
                <li>
                  <strong>{isDa ? 'Institutionelle miljøer:' : 'Institutional settings:'}</strong>{' '}
                  {isDa
                    ? 'Ældre plejehjem og institutioner med begrænset sundhedspersonale har højere forekomst.'
                    : 'Elderly care homes and institutions with limited healthcare staff have a higher prevalence.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan behandles skab?' : 'How is scabies treated?'}
              </h2>
              <p>
                {isDa
                  ? 'Skab er ubehageligt men behandles effektigt med receptpligtig medicin. Den vigtigste regel er: alle i samme husstand skal behandles samtidig — også selv om de ikke har symptomer:'
                  : 'Scabies is uncomfortable but is effectively treated with prescription medication. The most important rule is: everyone in the same household must be treated at the same time — even if they have no symptoms:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topisk behandling (førstevalg)' : '💊 Topical treatment (first-line)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Permethrin 5% creme påføres hele kroppen fra nakken og ned — og vaskes af efter 8–14 timer. Behandlingen gentages typisk efter en uge. Creme med benzylbenzoat eller svovl er alternativer.'
                      : 'Permethrin 5% cream is applied to the entire body from the neck down — and washed off after 8–14 hours. Treatment is typically repeated after one week. Cream with benzyl benzoate or sulphur is an alternative.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Oral behandling' : '💊 Oral treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ivermectin i tabletform er et effektivt alternativ, særligt når topisk behandling er vanskelig at gennemføre korrekt. Det gives typisk som to doser med en uges mellemrum.'
                      : 'Ivermectin in tablet form is an effective alternative, especially when topical treatment is difficult to carry out correctly. It is typically given as two doses one week apart.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧺 Hygiejne' : '🧺 Hygiene measures'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Alt tøj, sengetøj og håndklæder vaskes ved mindst 50°C eller lægges i en lukket pose i mindst 72 timer. Støvsug hele hjemmet grundigt.'
                      : 'All clothing, bedding and towels are washed at at least 50°C or placed in a sealed bag for at least 72 hours. Vacuum the entire home thoroughly.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚫 Undgå smitte' : '🚫 Avoid transmission'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Undgå tæt hud-til-hud kontakt med andre indtil behandlingen er gennemført. Informér alle tætte kontakter.'
                      : 'Avoid close skin-to-skin contact with others until treatment is completed. Inform all close contacts.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Skab er klassificeret som 1G04 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en infestation forårsaget af sarcoptes scabiei-miden, der forårsager intens kløe og karakteristiske graverlinjer i huden.'
                    : "Scabies is classified as 1G04 in the WHO's International Classification of Diseases (ICD-11). It is an infestation caused by the sarcoptes scabiei mite, causing intense itching and characteristic burrow lines in the skin."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er skab farligt?' : 'Is scabies dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Skab er generelt ikke farligt for raske voksne, men den intense kløe kan forstyrre søvn og påvirke livskvaliteten. Ubehandlet skab kan dog føre til kronisk eksem og i sjældne tilfælde til bakterielle superinfektioner fra kradseri.'
                      : 'Scabies is generally not dangerous for healthy adults, but the intense itching can disrupt sleep and affect quality of life. Untreated scabies, however, can lead to chronic eczema and in rare cases to bacterial superinfections from scratching.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan skab forsvinde af sig selv?' : 'Can scabies go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej. Uden behandling forsvinder skab ikke. Miden fortsætter med at lægge æg, og infestationen vil sandsynligvis blive værre over tid. Behandling med receptpligtig medicin er altid nødvendig.'
                      : 'No. Without treatment, scabies does not go away. The mite continues to lay eggs and the infestation will likely worsen over time. Treatment with prescription medication is always necessary.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en læge?' : 'When should I contact a doctor?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en læge så snart du har mistanke om skab. Tidlig behandling forkorter sygdomsforløbet og reducerer smitterisikoen markant. Særligt børn, ældre og personer med nedsat immunforsvar bør undersøges hurtigt.'
                      : 'Contact a doctor as soon as you suspect scabies. Early treatment shortens the course of the disease and significantly reduces the risk of transmission. Children, the elderly and people with weakened immune systems should be examined promptly.'}
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
                    ? 'Er du i tvivl om dine symptomer? Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge – uden ventetid.'
                    : 'Not sure about your symptoms? Upload photos of your skin via the SKIND app and receive a personal assessment from a certified dermatologist — no waiting list.'}
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
                    ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Kontakt altid en læge for personlig rådgivning ved mistanke om skab.'
                    : 'This article is for informational purposes only and does not replace professional medical advice. Always consult a doctor for personal guidance if you suspect scabies.'}
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
