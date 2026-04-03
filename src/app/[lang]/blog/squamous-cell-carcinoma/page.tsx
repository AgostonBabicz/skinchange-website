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
        title: 'Hvad er Pladecellecarcinom (SCC)? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om pladecellecarcinom (SCC): hvad det er, hvordan det ser ud, hvem der er i risiko, og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'pladecellecarcinom, SCC, hudkræft, squamous cell carcinoma, hudkræft symptomer, hudkræft behandling, SKIND, hudlæge',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/squamous-cell-carcinoma',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/squamous-cell-carcinoma',
            da: 'https://www.skinchange.dk/da/blog/squamous-cell-carcinoma',
            en: 'https://www.skinchange.dk/en/blog/squamous-cell-carcinoma',
          },
        },
      }
    : {
        title: 'What is Squamous Cell Carcinoma (SCC)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about squamous cell carcinoma (SCC): what it is, what it looks like, who is at risk, and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'squamous cell carcinoma, SCC, skin cancer, skin cancer symptoms, skin cancer treatment, SKIND, dermatologist',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/squamous-cell-carcinoma',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/squamous-cell-carcinoma',
            da: 'https://www.skinchange.dk/da/blog/squamous-cell-carcinoma',
            en: 'https://www.skinchange.dk/en/blog/squamous-cell-carcinoma',
          },
        },
      };
}

export default function SquamousCellCarcinomaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Pladecellecarcinom (SCC)? Årsager, Symptomer og Behandling'
      : 'What is Squamous Cell Carcinoma (SCC)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til pladecellecarcinom: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to squamous cell carcinoma: what it is, causes, symptoms and treatment options.',
    image: '/blog-squamous-cell-carcinoma.jpg',
    datePublished: '2026-03-29',
    dateModified: '2026-03-29',
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
            name: 'Hvad er pladecellecarcinom (SCC)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pladecellecarcinom (SCC) er en form for hudkræft, der udvikler sig fra fladecellerne i hudens yderste lag. Den vokser langsomt, men kan i sjældne tilfælde sprede sig til andre dele af kroppen, hvis den ikke behandles.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan genkender jeg pladecellecarcinom tidligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Se efter en rød, skællende plet, en fast vorte-lignende knude med ru overflade, et sår der ikke heler, eller en flad lyserød/rød plet med let forhøjet kant. Kontakt en hudlæge ved mistanke.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvem er i risiko for pladecellecarcinom?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SCC rammer hyppigst personer over 50 år med lys hud. Kronisk soleksponering, solskoldninger i barndommen og et svækket immunsystem øger risikoen betydeligt.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is squamous cell carcinoma (SCC)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Squamous cell carcinoma (SCC) is a form of skin cancer that develops from the squamous cells in the outermost layer of the skin. It grows slowly, but can rarely spread to other parts of the body if left untreated.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I recognise squamous cell carcinoma early?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Look for a red, scaly patch, a firm wart-like bump with a rough surface, a sore that does not heal, or a flat pink/red patch with a slightly raised edge. Contact a dermatologist if you suspect SCC.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who is at risk for squamous cell carcinoma?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SCC most commonly affects people over 50 with fair skin. Chronic sun exposure, sunburns in childhood and a weakened immune system significantly increase the risk.',
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
                {isDa ? 'Hvad er Pladecellecarcinom (SCC)?' : 'What is Squamous Cell Carcinoma (SCC)?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudkræft' : 'Skin Cancer'}
              </span>
              <span className="text-gray-500 text-sm">29. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Pladecellecarcinom (SCC)? Årsager, Symptomer og Behandling'
                : 'What is Squamous Cell Carcinoma (SCC)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-squamous-cell-carcinoma.jpg"
                alt={isDa ? 'Pladecellecarcinom – hudkræft behandling' : 'Squamous cell carcinoma – skin cancer treatment'}
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
                    <strong>Pladecellecarcinom (SCC) er den næsthyppigste form for hudkræft</strong>, kun overgået af basalcellcarcinom. Hvert år diagnosticeres hundredtusindvis af mennesker med SCC verden over. Heldigvis er SCC i de fleste tilfælde helbredelig, når den opdages tidligt.
                  </>
                ) : (
                  <>
                    <strong>Squamous cell carcinoma (SCC) is the second most common form of skin cancer</strong>, second only to basal cell carcinoma. Hundreds of thousands of people are diagnosed with SCC worldwide every year. Fortunately, SCC is curable in most cases when detected early.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad pladecellecarcinom er, hvordan det ser ud, hvem der er i risiko, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what squamous cell carcinoma is, what it looks like, who is at risk, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is SCC */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er pladecellecarcinom (SCC)?' : 'What is squamous cell carcinoma (SCC)?'}
              </h2>
              <p>
                {isDa
                  ? 'Pladecellecarcinom (SCC) er en ondartet tumorsygdom, der udvikler sig fra pladecellerne (squamøse celler) i epidermis – hudens yderste lag. Pladecellerne flader ud og danner det beskyttende yderlag af huden, og når disse celler muterer og vokser ukontrollabelt, opstår SCC.'
                  : 'Squamous cell carcinoma (SCC) is a malignant tumour disease that develops from the squamous cells in the epidermis – the outermost layer of the skin. Squamous cells flatten out and form the protective outer layer of the skin, and when these cells mutate and grow uncontrollably, SCC develops.'}
              </p>
              <p>
                {isDa
                  ? 'SCC vokser langsomt i de fleste tilfælde og spreder sig sjældent til andre dele af kroppen. Dog kan ubehandlet SCC trænge dybt ind i huden og i sjældne tilfælde danne metastaser, især hos personer med svækket immunsystem.'
                  : 'SCC grows slowly in most cases and rarely spreads to other parts of the body. However, untreated SCC can penetrate deep into the skin and in rare cases form metastases, especially in people with weakened immune systems.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser pladecellecarcinom ud?' : 'What does squamous cell carcinoma look like?'}
              </h2>
              <p>{isDa ? 'SCC kan vise sig på flere måder:' : 'SCC can appear in several forms:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Rød, skællende plet:' : 'Red, scaly patch:'}</strong>{' '}
                  {isDa
                    ? 'Et ru, tykt eller skorpet område på huden – ofte på soleksponerede områder som ansigt, ører, nakke eller hænder.'
                    : 'A rough, thick or crusted area on the skin — often on sun-exposed areas such as the face, ears, neck or hands.'}
                </li>
                <li>
                  <strong>{isDa ? 'Fast, vorte-lignende knude:' : 'Firm, wart-like bump:'}</strong>{' '}
                  {isDa
                    ? 'En fast knude med rødlig farve og ru, skællende overflade.'
                    : 'A firm bump with a reddish colour and rough, scaly surface.'}
                </li>
                <li>
                  <strong>{isDa ? 'Sår der ikke heler:' : 'A sore that does not heal:'}</strong>{' '}
                  {isDa
                    ? 'Et åbent sår der bløder, væsker eller danner skorpe og ikke gror til trods for behandling.'
                    : 'An open sore that bleeds, oozes or forms a crust and does not heal despite treatment.'}
                </li>
                <li>
                  <strong>{isDa ? 'Flad lyserød eller rød plet:' : 'Flat pink or red patch:'}</strong>{' '}
                  {isDa
                    ? 'Med en let forhøjet, ru kant og ofte skællende overflade.'
                    : 'With a slightly raised, rough edge and often a scaly surface.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'SCC opstår oftest på soleksponerede områder: ansigt, ører, læber, nakke, hænder og underarme. Det kan dog forekomme overalt på kroppen.'
                  : 'SCC most commonly occurs on sun-exposed areas: face, ears, lips, neck, hands and forearms. However, it can appear anywhere on the body.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår pladecellecarcinom?' : 'Why does squamous cell carcinoma occur?'}
              </h2>
              <p>
                {isDa
                  ? 'Den primære årsag til SCC er kronisk eksponering for ultraviolet (UV) stråling fra solen eller solarier. UV-stråling beskadiger DNA\'et i hudcellerne, og når skaden ophobes over tid i pladecellerne, kan de begynde at vokse ukontrollabelt.'
                  : 'The primary cause of SCC is chronic exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV radiation damages the DNA in skin cells, and when this damage accumulates over time in the squamous cells, they can begin to grow uncontrollably.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Vigtigste risikofaktorer' : 'Main risk factors'}
              </h3>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Lys hudfarve og lyse øjne:' : 'Fair skin tone and light eyes:'}</strong>{' '}
                  {isDa
                    ? 'Personer med lys hud har mindre melaninbeskyttelse mod UV-stråling.'
                    : 'People with fair skin have less melanin protection against UV radiation.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kronisk soleksponering:' : 'Chronic sun exposure:'}</strong>{' '}
                  {isDa
                    ? 'Langvarig tid i solen over mange år øger risikoen markant.'
                    : 'Prolonged time in the sun over many years significantly increases the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Solskoldninger:' : 'Sunburns:'}</strong>{' '}
                  {isDa
                    ? 'Især alvorlige solskoldninger i barndommen og teenageårene øger risikoen.'
                    : 'Especially severe sunburns in childhood and teenage years increase the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Solarier:' : 'Tanning beds:'}</strong>{' '}
                  {isDa
                    ? 'Brug af solarier før 20-årsalderen øger risikoen betydeligt.'
                    : 'Use of tanning beds before the age of 20 significantly increases the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Svækket immunsystem:' : 'Weakened immune system:'}</strong>{' '}
                  {isDa
                    ? 'Organtransplantationsmodtagere, HIV-patienter og personer i immunsuppressiv behandling har 10–100 gange højere risiko.'
                    : 'Organ transplant recipients, HIV patients and people on immunosuppressive treatment have a 10–100 times higher risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Forstadier:' : 'Precancerous lesions:'}</strong>{' '}
                  {isDa
                    ? 'Aktiniske keratoser (ru, skællende pletter) er forstadier til SCC og skal overvåges.'
                    : 'Actinic keratoses (rough, scaly patches) are precursors to SCC and should be monitored.'}
                </li>
              </ul>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får pladecellecarcinom?' : 'Who gets squamous cell carcinoma?'}
              </h2>
              <p>
                {isDa
                  ? 'SCC kan ramme alle, men visse grupper er markant mere sårbare:'
                  : 'SCC can affect anyone, but certain groups are significantly more vulnerable:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Personer over 50 år:' : 'People over 50 years old:'}</strong>{' '}
                  {isDa
                    ? 'Risikoen stiger markant med alderen, da UV-skaden akkumuleres over tid.'
                    : 'The risk increases significantly with age, as UV damage accumulates over time.'}
                </li>
                <li>
                  <strong>{isDa ? 'Mænd:' : 'Men:'}</strong>{' '}
                  {isDa
                    ? 'Mænd har generelt højere forekomst af SCC end kvinder, delvist på grund af forskelle i soleksponering og beskyttelsesvaner.'
                    : 'Men generally have a higher incidence of SCC than women, partly due to differences in sun exposure and protective habits.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med lys hud:' : 'People with fair skin:'}</strong>{' '}
                  {isDa
                    ? 'Særligt personer med keltisk eller nordeuropæisk baggrund og dem, der let får solskoldning.'
                    : 'Especially people of Celtic or Northern European descent and those who burn easily.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkede:' : 'The immunocompromised:'}</strong>{' '}
                  {isDa
                    ? 'Organtransplantationsmodtagere og personer med svær immunsuppression er i særlig risiko.'
                    : 'Organ transplant recipients and people with severe immunosuppression are at particular risk.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved pladecellecarcinom?' : 'What can you do about squamous cell carcinoma?'}
              </h2>
              <p>
                {isDa
                  ? 'SCC er yderst behandlelig, især når den opdages tidligt. Der findes flere effektive behandlingsmuligheder:'
                  : 'SCC is highly treatable, especially when detected early. Several effective treatment options are available:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🔬 Kirurgisk fjernelse' : '🔬 Surgical removal'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Standardbehandling ved de fleste SCC-tilfælde. Standard kirurgisk excision eller MOHS-kirurgi (mikrografisk kirurgi) anvendes, særligt i ansigtet for at bevare mest mulig sund hud.'
                      : 'The standard treatment for most SCC cases. Standard surgical excision or MOHS surgery (micrographic surgery) is used, especially on the face to preserve as much healthy skin as possible.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '☀️ Strålebehandling' : '☀️ Radiation therapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Anvendes i tilfælde hvor kirurgi ikke er mulig, eller ved højrisiko SCC der ikke kan fjernes tilstrækkeligt med kirurgi alene.'
                      : 'Used when surgery is not possible, or for high-risk SCC that cannot be adequately removed with surgery alone.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topiske lægemidler' : '💊 Topical medications'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer som 5-fluorouracil (5-FU) eller imiquimod kan bruges til overfladiske SCC eller aktiniske keratoser.'
                      : 'Creams such as 5-fluorouracil (5-FU) or imiquimod can be used for superficial SCC or actinic keratoses.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💡 Fotodynamisk terapi (PDT)' : '💡 Photodynamic therapy (PDT)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'En lysaktiveret behandling, der ødelægger kræftceller. Anvendes typisk til overfladiske SCC.'
                      : 'A light-activated treatment that destroys cancer cells. Typically used for superficial SCC.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? "Pladecellecarcinom er klassificeret som 2C31 i WHO's internationale sygdomsklassifikation (ICD-11). Det er en hudkræft, der opstår fra pladeceller, ofte som skællende, røde pletter. Kirurgisk fjernelse er primær behandling."
                    : "Squamous cell carcinoma is classified as 2C31 in the WHO's International Classification of Diseases (ICD-11). It is a skin cancer arising from squamous cells, often presenting as scaly, red patches. Surgical removal is the primary treatment."}
                </p>
              </div>

              {/* Prevention */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Forebyggelse af pladecellecarcinom' : 'Preventing squamous cell carcinoma'}
              </h2>
              <p>
                {isDa
                  ? 'Forebyggelse er den bedste strategi mod SCC. Her er de vigtigste forholdsregler:'
                  : 'Prevention is the best strategy against SCC. Here are the most important precautions:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Brug solcreme året rundt:' : 'Use sunscreen year-round:'}</strong>{' '}
                  {isDa
                    ? 'Vælg SPF 30 eller højere og påfør igen hver anden time ved soleksponering.'
                    : 'Choose SPF 30 or higher and reapply every two hours during sun exposure.'}
                </li>
                <li>
                  <strong>{isDa ? 'Undgå solarier:' : 'Avoid tanning beds:'}</strong>{' '}
                  {isDa
                    ? 'Solarier øger risikoen markant og bør undgås helt.'
                    : 'Tanning beds significantly increase the risk and should be avoided entirely.'}
                </li>
                <li>
                  <strong>{isDa ? 'Beskyttende tøj:' : 'Protective clothing:'}</strong>{' '}
                  {isDa
                    ? 'Bær hat, solbriller og langærmede skjorter ved intens soleksponering.'
                    : 'Wear a hat, sunglasses and long-sleeved shirts during intense sun exposure.'}
                </li>
                <li>
                  <strong>{isDa ? 'Undgå middagssol:' : 'Avoid midday sun:'}</strong>{' '}
                  {isDa
                    ? 'Søg skygge mellem kl. 12 og 15, hvor UV-strålingen er stærkest.'
                    : 'Seek shade between 12:00 and 15:00, when UV radiation is strongest.'}
                </li>
                <li>
                  <strong>{isDa ? 'Regelmæssig selvanalyse:' : 'Regular self-examination:'}</strong>{' '}
                  {isDa
                    ? 'Tjek din hud månedligt for nye eller ændrede pletter, særligt hvis du er i risikogruppen.'
                    : 'Check your skin monthly for new or changing spots, especially if you are in a risk group.'}
                </li>
                <li>
                  <strong>{isDa ? 'Aktiniske keratoser:' : 'Actinic keratoses:'}</strong>{' '}
                  {isDa
                    ? 'Få undersøgt og behandlet aktiniske keratoser (ru, skællende pletter) før de udvikler sig til SCC.'
                    : 'Have actinic keratoses (rough, scaly patches) examined and treated before they develop into SCC.'}
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er pladecellecarcinom dødeligt?' : 'Is squamous cell carcinoma deadly?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'SCC er sjældent dødeligt, når det opdages tidligt. Den femårige overlevelsesrate for lokaliseret SCC er over 95%. Dog kan ubehandlet SCC i sjældne tilfælde sprede sig (metastasere) og blive livstruende, især hos immunsvækkede.'
                      : 'SCC is rarely deadly when detected early. The five-year survival rate for localised SCC is above 95%. However, untreated SCC can in rare cases spread (metastasise) and become life-threatening, especially in the immunocompromised.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvad er forskellen på BCC og SCC?' : 'What is the difference between BCC and SCC?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Både BCC og SCC er hudkræft, men de udvikler sig fra forskellige celletyper. BCC (basalcellcarcinom) udvikler sig fra basalcellerne i den nederste del af epidermis og vokser meget langsomt. SCC (pladecellecarcinom) udvikler sig fra pladecellerne i epidermis\' overflade og har en noget højere risiko for spredning end BCC.'
                      : 'Both BCC and SCC are skin cancers, but they develop from different cell types. BCC (basal cell carcinoma) develops from basal cells in the lower part of the epidermis and grows very slowly. SCC (squamous cell carcinoma) develops from squamous cells on the surface of the epidermis and has a somewhat higher risk of spreading than BCC.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis du bemærker et sår der ikke heler inden for 4–6 uger, en ny eller ændret plet på huden, eller en ru, skællende plet der vokser eller ændrer sig. Tidlig diagnose er afgørende for en succesfuld behandling.'
                      : 'Contact a dermatologist if you notice a sore that does not heal within 4–6 weeks, a new or changing spot on the skin, or a rough, scaly patch that is growing or changing. Early diagnosis is crucial for successful treatment.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering af din hud inden for 48 timer' : 'Get a skin assessment within 48 hours'}
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
