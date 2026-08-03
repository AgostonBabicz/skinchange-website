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
        title: 'Pladecellekarcinom: symptomer og behandling | SKIND',
        description:
          'Pladecellekarcinom (SCC): hvordan det ser ud, hvem der er i risiko, hvilke forandringer der er højrisiko, og hvordan det behandles. Få en vurdering via SKIND.',
        keywords:
          'pladecellekarcinom, pladecellecarcinom, SCC, hudkræft, hudkræft symptomer, hudkræft behandling, aktiniske keratoser, SKIND, hudlæge',
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
        title: 'Squamous cell carcinoma: symptoms and treatment | SKIND',
        description:
          'Squamous cell carcinoma (SCC): what it looks like, who is at risk, which lesions count as high-risk, and how it is treated. Get an assessment via SKIND.',
        keywords:
          'squamous cell carcinoma, SCC, skin cancer, skin cancer symptoms, skin cancer treatment, actinic keratosis, SKIND, dermatologist',
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
      ? 'Hvad er Pladecellekarcinom (SCC)? Årsager, Symptomer og Behandling'
      : 'What is Squamous Cell Carcinoma (SCC)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til pladecellekarcinom: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to squamous cell carcinoma: what it is, causes, symptoms and treatment options.',
    image: '/blog-squamous-cell-carcinoma.jpg',
    datePublished: '2026-03-29',
    dateModified: '2026-03-29',
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
            name: 'Er pladecellekarcinom dødeligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SCC er sjældent dødeligt, når det opdages tidligt. Den femårige overlevelsesrate for lokaliseret SCC er over 95%. Omkring 2–5% af alle tilfælde spreder sig, og ved højrisikosvulster stiger det til 10–30% – spredning kan forekomme trods behandling og er ikke kun et spørgsmål om at have ventet for længe.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvad er forskellen på BCC og SCC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Både BCC og SCC er hudkræft, men de udvikler sig fra forskellige celletyper. Basalcellekarcinom udvikler sig fra basalcellerne i den nederste del af epidermis, vokser meget langsomt og spreder sig næsten aldrig. Pladecellekarcinom udvikler sig fra pladecellerne i epidermis og har en noget højere risiko for spredning. Modermærkekræft (melanom) er den tredje hovedtype og udgår fra pigmentcellerne.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis du bemærker et sår der ikke heler inden for 4–6 uger, en ny eller ændret plet på huden, eller en ru, skællende plet der vokser eller ændrer sig. Tidlig diagnose er afgørende for en succesfuld behandling.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is squamous cell carcinoma deadly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SCC is rarely deadly when detected early. The five-year survival rate for localised SCC is above 95%. Around 2–5% of all cases spread, rising to 10–30% for high-risk tumours — spread can occur despite treatment and is not only a matter of having waited too long.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between BCC and SCC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both BCC and SCC are skin cancers, but they develop from different cell types. Basal cell carcinoma develops from basal cells in the lower part of the epidermis, grows very slowly and almost never spreads. Squamous cell carcinoma develops from squamous cells in the epidermis and has a somewhat higher risk of spreading. Melanoma is the third main type and arises from the pigment cells.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if you notice a sore that does not heal within 4–6 weeks, a new or changing spot on the skin, or a rough, scaly patch that is growing or changing. Early diagnosis is crucial for successful treatment.',
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
                {isDa ? 'Hvad er Pladecellekarcinom (SCC)?' : 'What is Squamous Cell Carcinoma (SCC)?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudkræft' : 'Skin Cancer'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '29. marts 2026' : 'March 29, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Pladecellekarcinom (SCC)? Årsager, Symptomer og Behandling'
                : 'What is Squamous Cell Carcinoma (SCC)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-squamous-cell-carcinoma.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en rød, skællende og skorpet plet på soleksponeret hud, som ved pladecellekarcinom.'
                    : 'Close-up of a red, scaly and crusted patch on sun-exposed skin, as seen in squamous cell carcinoma.'
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
                    <strong>Pladecellekarcinom (SCC) er den næsthyppigste form for hudkræft</strong>, kun overgået af basalcellekarcinom. På verdensplan får millioner af mennesker hvert år konstateret pladecellekarcinom i huden – alene i USA drejer det sig om omkring 1,8 millioner tilfælde om året. Heldigvis er SCC i de fleste tilfælde helbredelig, når den opdages tidligt.
                  </>
                ) : (
                  <>
                    <strong>Squamous cell carcinoma (SCC) is the second most common form of skin cancer</strong>, second only to basal cell carcinoma. Millions of people are diagnosed with cutaneous SCC worldwide every year — around 1.8 million cases in the United States alone. Fortunately, SCC is curable in most cases when detected early.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad pladecellekarcinom er, hvordan det ser ud, hvem der er i risiko, hvilke svulster der regnes som højrisiko, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what squamous cell carcinoma is, what it looks like, who is at risk, which tumours count as high-risk, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is SCC */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er pladecellekarcinom (SCC)?' : 'What is squamous cell carcinoma (SCC)?'}
              </h2>
              <p>
                {isDa
                  ? 'Pladecellekarcinom (SCC) er en ondartet tumorsygdom, der udvikler sig fra pladecellerne (squamøse celler) i epidermis – hudens yderste lag. Pladecellerne flader ud og danner det beskyttende yderlag af huden, og når disse celler muterer og vokser ukontrollabelt, opstår SCC.'
                  : 'Squamous cell carcinoma (SCC) is a malignant tumour that develops from the squamous cells in the epidermis — the outermost layer of the skin. Squamous cells flatten out and form the protective outer layer of the skin, and when these cells mutate and grow uncontrollably, SCC develops.'}
              </p>
              <p>
                {isDa
                  ? 'De fleste pladecellekarcinomer vokser langsomt og bliver, hvor de er opstået. Omkring 2–5% spreder sig alligevel til lymfeknuder eller andre organer, og ved højrisikosvulster stiger tallet til 10–30%. Spredning er altså ikke kun noget, der sker, hvis man venter for længe – en højrisikosvulst kan metastasere på trods af korrekt behandling. Derfor betyder det noget, hvilken type forandring der er tale om, og ikke kun hvor hurtigt den behandles.'
                  : 'Most squamous cell carcinomas grow slowly and stay where they started. Even so, around 2–5% spread to lymph nodes or other organs, and for high-risk tumours that figure rises to 10–30%. Spread is therefore not only something that happens if you wait too long — a high-risk tumour can metastasise despite correct treatment. What kind of lesion it is matters, not just how quickly it is treated.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser pladecellekarcinom ud?' : 'What does squamous cell carcinoma look like?'}
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
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår pladecellekarcinom?' : 'Why does squamous cell carcinoma occur?'}
              </h2>
              <p>
                {isDa
                  ? 'Den primære årsag til SCC er kronisk eksponering for ultraviolet (UV) stråling fra solen eller solarier. UV-stråling beskadiger DNA\'et i hudcellerne, og når skaden ophobes over tid i pladecellerne, kan de begynde at vokse ukontrollabelt.'
                  : 'The primary cause of SCC is chronic exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV radiation damages the DNA in skin cells, and when this damage accumulates over time in the squamous cells, they can begin to grow uncontrollably.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad øger risikoen for pladecellekarcinom?' : 'What increases the risk of squamous cell carcinoma?'}
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
                  <strong>{isDa ? 'Organtransplantation:' : 'Organ transplantation:'}</strong>{' '}
                  {isDa
                    ? 'Transplanterede i livslang immunsuppressiv behandling har omkring 65–100 gange højere risiko for SCC end baggrundsbefolkningen og bør gå til regelmæssig hudkontrol.'
                    : 'Transplant recipients on lifelong immunosuppressive treatment have roughly 65–100 times the risk of SCC compared with the general population and should attend regular skin checks.'}
                </li>
                <li>
                  <strong>{isDa ? 'Andre former for immunsvækkelse:' : 'Other forms of immunosuppression:'}</strong>{' '}
                  {isDa
                    ? 'Personer, der lever med hiv, har en langt mindre risikoforøgelse – i størrelsesordenen 2–5 gange. Også kronisk lymfatisk leukæmi og længerevarende immundæmpende medicin øger risikoen.'
                    : 'People living with HIV have a much smaller increase — in the order of 2–5 times. Chronic lymphocytic leukaemia and long-term immunosuppressive medication also raise the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Forstadier:' : 'Precancerous lesions:'}</strong>{' '}
                  {isDa ? (
                    <>
                      <Link href={`/${lang}/blog/actinic-keratosis`} className="text-primary underline hover:text-primary-900">
                        Aktiniske keratoser
                      </Link>{' '}
                      (ru, skællende pletter) er forstadier til SCC og skal overvåges.
                    </>
                  ) : (
                    <>
                      <Link href={`/${lang}/blog/actinic-keratosis`} className="text-primary underline hover:text-primary-900">
                        Actinic keratoses
                      </Link>{' '}
                      (rough, scaly patches) are precursors to SCC and should be monitored.
                    </>
                  )}
                </li>
              </ul>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får pladecellekarcinom?' : 'Who gets squamous cell carcinoma?'}
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
                    ? 'Organtransplanterede og personer med svær immunsuppression er i særlig risiko – både for at få SCC og for at få en mere aggressiv svulst.'
                    : 'Organ transplant recipients and people with severe immunosuppression are at particular risk — both of developing SCC and of developing a more aggressive tumour.'}
                </li>
              </ul>

              {/* High-risk features */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvilke pladecellekarcinomer er højrisiko?' : '⚠️ Which squamous cell carcinomas are high-risk?'}
                </h3>
                <p className="text-red-900 mb-3">
                  {isDa
                    ? 'De fleste pladecellekarcinomer helbredes med en enkelt operation, men et mindretal opfører sig aggressivt og skal vurderes af en specialist hurtigt. En svulst regnes som højrisiko, hvis den:'
                    : 'Most squamous cell carcinomas are cured by a single operation, but a minority behave aggressively and need specialist assessment quickly. A tumour is considered high-risk if it:'}
                </p>
                <ul className="list-disc pl-6 space-y-1 text-red-900 mb-3">
                  <li>{isDa ? 'sidder på læben eller øret' : 'sits on the lip or the ear'}</li>
                  <li>{isDa ? 'er mere end 2 cm i diameter' : 'is more than 2 cm across'}</li>
                  <li>{isDa ? 'vokser mere end 6 mm ned i huden' : 'extends more than 6 mm deep'}</li>
                  <li>{isDa ? 'er lavt differentieret i mikroskopet' : 'is poorly differentiated under the microscope'}</li>
                  <li>{isDa ? 'viser perineural invasion (vækst langs en nerve)' : 'shows perineural invasion (growth along a nerve)'}</li>
                  <li>{isDa ? 'er kommet igen efter tidligere behandling' : 'has come back after previous treatment'}</li>
                  <li>{isDa ? 'opstår hos en person med nedsat immunforsvar' : 'develops in someone who is immunosuppressed'}</li>
                </ul>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Passer blot ét af punkterne, bør du bede om en hurtig fysisk hudlægevurdering frem for at vente og se, om forandringen ændrer sig.'
                    : 'If even one of these applies, ask for a prompt in-person dermatology assessment rather than waiting to see whether the lesion changes.'}
                </p>
              </div>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved pladecellekarcinom?' : 'What can you do about squamous cell carcinoma?'}
              </h2>
              <p>
                {isDa
                  ? 'SCC er yderst behandlelig, især når den opdages tidligt. Der findes flere effektive behandlingsmuligheder:'
                  : 'SCC is highly treatable, especially when detected early. Several effective treatment options are available:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🔬 Kirurgisk fjernelse' : '🔬 Surgical removal'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Standardbehandling ved de fleste SCC-tilfælde. Almindelig kirurgisk excision eller Mohs-kirurgi (mikrografisk kirurgi, opkaldt efter kirurgen Frederic Mohs) anvendes, særligt i ansigtet for at bevare mest mulig sund hud.'
                      : 'The standard treatment for most SCC cases. Standard surgical excision or Mohs surgery (micrographic surgery, named after the surgeon Frederic Mohs) is used, especially on the face to preserve as much healthy skin as possible.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '☀️ Strålebehandling' : '☀️ Radiation therapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Anvendes i tilfælde hvor kirurgi ikke er mulig, eller ved højrisiko SCC der ikke kan fjernes tilstrækkeligt med kirurgi alene.'
                      : 'Used when surgery is not possible, or for high-risk SCC that cannot be adequately removed with surgery alone.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Topiske lægemidler' : '💊 Topical medications'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer som 5-fluorouracil (5-FU) eller imiquimod kan bruges til overfladiske SCC eller aktiniske keratoser.'
                      : 'Creams such as 5-fluorouracil (5-FU) or imiquimod can be used for superficial SCC or actinic keratoses.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
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
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? "Pladecellekarcinom er klassificeret som 2C31 i WHO's internationale sygdomsklassifikation (ICD-11). Det er en hudkræft, der opstår fra pladeceller, ofte som skællende, røde pletter. Kirurgisk fjernelse er primær behandling."
                    : "Squamous cell carcinoma is classified as 2C31 in the WHO's International Classification of Diseases (ICD-11). It is a skin cancer arising from squamous cells, often presenting as scaly, red patches. Surgical removal is the primary treatment."}
                </p>
              </div>

              {/* Prevention */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan forebygger du pladecellekarcinom?' : 'How can you prevent squamous cell carcinoma?'}
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
                  <strong>{isDa ? 'Regelmæssig selvundersøgelse:' : 'Regular self-examination:'}</strong>{' '}
                  {isDa
                    ? 'Tjek din hud månedligt for nye eller ændrede pletter, særligt hvis du er i risikogruppen.'
                    : 'Check your skin monthly for new or changing spots, especially if you are in a risk group.'}
                </li>
                <li>
                  <strong>{isDa ? 'Aktiniske keratoser:' : 'Actinic keratoses:'}</strong>{' '}
                  {isDa ? (
                    <>
                      Få undersøgt og behandlet{' '}
                      <Link href={`/${lang}/blog/actinic-keratosis`} className="text-primary underline hover:text-primary-900">
                        aktiniske keratoser
                      </Link>{' '}
                      (ru, skællende pletter), før de udvikler sig til SCC.
                    </>
                  ) : (
                    <>
                      Have{' '}
                      <Link href={`/${lang}/blog/actinic-keratosis`} className="text-primary underline hover:text-primary-900">
                        actinic keratoses
                      </Link>{' '}
                      (rough, scaly patches) examined and treated before they develop into SCC.
                    </>
                  )}
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er pladecellekarcinom dødeligt?' : 'Is squamous cell carcinoma deadly?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'SCC er sjældent dødeligt, når det opdages tidligt. Den femårige overlevelsesrate for lokaliseret SCC er over 95%. Omkring 2–5% af alle tilfælde spreder sig, og ved højrisikosvulster stiger det til 10–30% – spredning kan forekomme trods behandling og er ikke kun et spørgsmål om at have ventet for længe.'
                      : 'SCC is rarely deadly when detected early. The five-year survival rate for localised SCC is above 95%. Around 2–5% of all cases spread, rising to 10–30% for high-risk tumours — spread can occur despite treatment and is not only a matter of having waited too long.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvad er forskellen på BCC og SCC?' : 'What is the difference between BCC and SCC?'}
                  </h3>
                  <p>
                    {isDa ? (
                      <>
                        Både BCC og SCC er hudkræft, men de udvikler sig fra forskellige celletyper.{' '}
                        <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-primary underline hover:text-primary-900">
                          Basalcellekarcinom
                        </Link>{' '}
                        udvikler sig fra basalcellerne i den nederste del af epidermis, vokser meget langsomt og spreder sig næsten
                        aldrig. Pladecellekarcinom udvikler sig fra pladecellerne i epidermis og har en noget højere risiko for
                        spredning.{' '}
                        <Link href={`/${lang}/blog/melanoma`} className="text-primary underline hover:text-primary-900">
                          Modermærkekræft (melanom)
                        </Link>{' '}
                        er den tredje hovedtype og udgår fra pigmentcellerne.
                      </>
                    ) : (
                      <>
                        Both BCC and SCC are skin cancers, but they develop from different cell types.{' '}
                        <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-primary underline hover:text-primary-900">
                          Basal cell carcinoma
                        </Link>{' '}
                        develops from basal cells in the lower part of the epidermis, grows very slowly and almost never spreads.
                        Squamous cell carcinoma develops from squamous cells in the epidermis and has a somewhat higher risk of
                        spreading.{' '}
                        <Link href={`/${lang}/blog/melanoma`} className="text-primary underline hover:text-primary-900">
                          Melanoma
                        </Link>{' '}
                        is the third main type and arises from the pigment cells.
                      </>
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis du bemærker et sår der ikke heler inden for 4–6 uger, en ny eller ændret plet på huden, eller en ru, skællende plet der vokser eller ændrer sig. Tidlig diagnose er afgørende for en succesfuld behandling.'
                      : 'Contact a dermatologist if you notice a sore that does not heal within 4–6 weeks, a new or changing spot on the skin, or a rough, scaly patch that is growing or changing. Early diagnosis is crucial for successful treatment.'}
                  </p>
                </div>
              </div>

              <p className="mt-8">
                {isDa
                  ? 'En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke hudkræft. En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
                  : 'A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It cannot rule out skin cancer. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for laboratory analysis.'}
              </p>

              {/* CTA */}
              <div className="bg-primary-900 text-white rounded-2xl p-8 my-12">
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
