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
        title: 'Basalcellekarcinom (BCC): behandling | SKIND',
        description:
          'Basalcellekarcinom er den hyppigste form for hudkræft. Læs om symptomer, risikofaktorer, diagnose med biopsi, behandling og hvordan du forebygger det.',
        keywords:
          'basalcellekarcinom, BCC, hudkræft, basalcellekræft, hudkræft symptomer, hudkræft behandling, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/basal-cell-carcinoma',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/basal-cell-carcinoma',
            da: 'https://www.skinchange.dk/da/blog/basal-cell-carcinoma',
            en: 'https://www.skinchange.dk/en/blog/basal-cell-carcinoma',
          },
        },
      }
    : {
        title: 'Basal cell carcinoma (BCC): treatment | SKIND',
        description:
          'Basal cell carcinoma is the most common form of skin cancer. Learn the symptoms, the risk factors, how it is diagnosed by biopsy, treatment and prevention.',
        keywords:
          'basal cell carcinoma, BCC, skin cancer, basal cell skin cancer, skin cancer symptoms, skin cancer treatment, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/basal-cell-carcinoma',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/basal-cell-carcinoma',
            da: 'https://www.skinchange.dk/da/blog/basal-cell-carcinoma',
            en: 'https://www.skinchange.dk/en/blog/basal-cell-carcinoma',
          },
        },
      };
}

export default function BasalCellCarcinomaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Basalcellekarcinom (BCC)? Årsager, Symptomer og Behandling'
      : 'What is Basal Cell Carcinoma (BCC)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til basalcellekarcinom (BCC): hvad det er, symptomer, risikofaktorer og behandlingsmuligheder.'
      : 'Complete guide to basal cell carcinoma (BCC): what it is, symptoms, risk factors and treatment options.',
    image: '/blog-basal-cell-carcinoma.jpg',
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
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
            name: 'Er basalcellekarcinom farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BCC er den mindst aggressive form for hudkræft og spreder sig sjældent til andre dele af kroppen. Den er dog ikke ufarlig – ubehandlet kan den vokse dybt og beskadige omkringliggende væv, især i ansigtet. Tidlig behandling giver en helbredelsesrate på over 95%.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan adskiller BCC sig fra modermærkekræft (melanom)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BCC og melanom er begge hudkræftformer, men de adskiller sig markant. BCC vokser langsomt, spreder sig yderst sjældent og har en meget høj helbredelsesrate. Melanom kan derimod sprede sig hurtigt til lymfeknuder og indre organer og er langt mere dødelig. Melanom opstår fra melanocytter (pigmentceller) og viser sig ofte som et mørkt modermærke med uregelmæssige kanter.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan BCC komme igen efter behandling?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, BCC kan komme igen (recidivere), selv efter vellykket behandling. Risikoen for tilbagefald afhænger af, om hele tumoren blev fjernet, og af din individuelle risikoprofil. Personer, der har haft BCC, har også forhøjet risiko for at udvikle nye tilfælde andre steder på huden. Regelmæssige opfølgningskontroller hos hudlægen er derfor vigtige.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis du bemærker en ny knude, et sår, der ikke heler inden for 4–6 uger, eller ændringer i et eksisterende modermærke eller en hudplet. Særligt hvis du er i risikogruppen (lys hud, historik med soleksponering, tidligere hudkræft), er regelmæssige kontroller vigtige.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is basal cell carcinoma dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BCC is the least aggressive form of skin cancer and rarely spreads to other parts of the body. However, it is not harmless — left untreated it can grow deep and damage surrounding tissue, especially on the face. Early treatment gives a cure rate of over 95%.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does BCC differ from melanoma?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'BCC and melanoma are both forms of skin cancer, but they differ markedly. BCC grows slowly, very rarely spreads and has a very high cure rate. Melanoma, on the other hand, can spread quickly to lymph nodes and internal organs and is far more deadly. Melanoma arises from melanocytes (pigment cells) and often appears as a dark mole with irregular borders.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can BCC return after treatment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, BCC can recur even after successful treatment. The risk of recurrence depends on whether the entire tumour was removed and on your individual risk profile. People who have had BCC also have an elevated risk of developing new BCCs elsewhere on the skin. Regular follow-up appointments with the dermatologist are therefore important.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if you notice a new bump, a sore that does not heal within 4–6 weeks, or changes in an existing mole or skin spot. Especially if you are in a high-risk group (fair skin, history of sun exposure, previous skin cancer), regular check-ups are important.',
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
              <span className="text-gray-900">
                {isDa ? 'Hvad er Basalcellekarcinom?' : 'What is Basal Cell Carcinoma?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudkræft' : 'Skin Cancer'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '28. marts 2026' : 'March 28, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '8 min læsetid' : '8 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Basalcellekarcinom (BCC)? Årsager, Symptomer og Behandling'
                : 'What is Basal Cell Carcinoma (BCC)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-basal-cell-carcinoma.jpg"
                alt={
                  isDa
                    ? 'Perleagtig, let hævet knude med synlige små blodkar på næsen — et typisk basalcellekarcinom.'
                    : 'A pearly, slightly raised nodule with visible tiny blood vessels on the nose — a typical basal cell carcinoma.'
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
                    <strong>Basalcellekarcinom (BCC) er den hyppigste form for hudkræft i verden</strong>, og antallet af
                    tilfælde stiger år for år. Heldigvis er BCC også den mindst aggressive form for hudkræft – og den
                    har en meget høj helbredelsesrate, særligt når den opdages tidligt.
                  </>
                ) : (
                  <>
                    <strong>Basal cell carcinoma (BCC) is the most common form of skin cancer in the world</strong>,
                    and the number of cases is rising year on year. Fortunately, BCC is also the least aggressive form
                    of skin cancer — and it has a very high cure rate, especially when detected early.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad BCC er, hvordan det ser ud, hvem der er i risiko, hvordan diagnosen stilles, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what BCC is, what it looks like, who is at risk, how it is diagnosed, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is BCC */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er basalcellekarcinom (BCC)?' : 'What is basal cell carcinoma (BCC)?'}
              </h2>
              <p>
                {isDa
                  ? 'Basalcellekarcinom (BCC) – også kaldet basalcellekræft – udvikler sig fra basalcellerne, som danner det nederste lag af overhuden (epidermis). Disse celler ligger lige over grænsen til læderhuden (dermis) og er ansvarlige for løbende at forny hudens overfladeceller.'
                  : 'Basal cell carcinoma (BCC) — also called basal cell skin cancer — develops from basal cells, which form the lowest layer of the epidermis. These cells sit just above the boundary with the dermis and are responsible for continuously renewing the skin\'s surface cells.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    BCC vokser typisk langsomt over måneder til år. Den spreder sig sjældent til andre organer (metastaserer), hvilket adskiller den fra de mere aggressive former for hudkræft som{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      modermærkekræft (melanom)
                    </Link>{' '}
                    og{' '}
                    <Link href={`/${lang}/blog/squamous-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      pladecellekarcinom (SCC)
                    </Link>
                    . Hvis BCC ikke behandles, kan den dog vokse dybt ned i huden og beskadige underliggende strukturer som knogle og brusk – særligt i ansigtet.
                  </>
                ) : (
                  <>
                    BCC typically grows slowly over months to years. It rarely spreads to other organs (metastasises), which distinguishes it from more aggressive forms of skin cancer such as{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      melanoma
                    </Link>{' '}
                    and{' '}
                    <Link href={`/${lang}/blog/squamous-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      squamous cell carcinoma (SCC)
                    </Link>
                    . However, if left untreated, BCC can grow deep into the skin and damage underlying structures such as bone and cartilage — especially on the face.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'Ifølge den internationale sygdomsklassifikation (ICD-11) er BCC klassificeret som kode 2C32 (Basal cell carcinoma of skin).'
                  : 'According to the International Classification of Diseases (ICD-11), BCC is classified as code 2C32 (Basal cell carcinoma of skin).'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser basalcellekarcinom ud?' : 'What does basal cell carcinoma look like?'}
              </h2>
              <p>
                {isDa
                  ? 'BCC kan forekomme i flere forskellige former, og det er vigtigt at kende til de mest almindelige udseender:'
                  : 'BCC can appear in several different forms, and it is important to be aware of the most common presentations:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Perleagtig knude:' : 'Pearly nodule:'}</strong>{' '}
                  {isDa
                    ? 'Den mest klassiske form. En lille, glat knude med en perleagtig eller voksagtig glans og ofte synlige, små blodkar (telangiektasier) på overfladen.'
                    : 'The most classic form. A small, smooth bump with a pearly or waxy sheen and often visible tiny blood vessels (telangiectasias) on the surface.'}
                </li>
                <li>
                  <strong>{isDa ? 'Flad, farvet plet:' : 'Flat, coloured patch:'}</strong>{' '}
                  {isDa
                    ? 'En flad, lyserød eller rød plet med let forhøjede, rullede kanter. Kan ligne et område med kronisk eksem eller en sårskorpe, der ikke heler.'
                    : 'A flat, pink or red patch with slightly raised, rolled edges. May resemble an area of chronic eczema or a scab that does not heal.'}
                </li>
                <li>
                  <strong>{isDa ? 'Ar-lignende område:' : 'Scar-like area:'}</strong>{' '}
                  {isDa
                    ? 'Et lille, hvidt eller gulligt område, der ligner et ar, ofte med tynd, skinnende hud.'
                    : 'A small, white or yellowish area resembling a scar, often with thin, shiny skin over it.'}
                </li>
                <li>
                  <strong>{isDa ? 'Åbent sår:' : 'Open sore:'}</strong>{' '}
                  {isDa
                    ? 'Et sår, der ikke heler, bløder let eller danner skorpe, og som kommer igen efter at være helet.'
                    : 'A sore that does not heal, bleeds easily or forms a crust, and returns after healing.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'BCC opstår oftest på soleksponerede områder: ansigtet (særligt næsen), ørerne, halsen, skuldrene og overarmene.'
                  : 'BCC most commonly appears on sun-exposed areas: the face (especially the nose), ears, neck, shoulders and upper arms.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår basalcellekarcinom?' : 'Why does basal cell carcinoma occur?'}
              </h2>
              <p>
                {isDa
                  ? 'Den primære årsag til BCC er kronisk eksponering for ultraviolet (UV) stråling fra solen eller solarier. UV-stråling beskadiger DNA\'et i hudcellerne, og når skaden ophobes over tid i basalcellerne, kan de begynde at vokse ukontrollabelt og danne en tumor.'
                  : 'The primary cause of BCC is chronic exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV radiation damages the DNA in skin cells, and when this damage accumulates over time in basal cells, they can begin to grow uncontrollably and form a tumour.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Den samme ophobede UV-skade giver{' '}
                    <Link href={`/${lang}/blog/actinic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      aktiniske keratoser
                    </Link>{' '}
                    – ru, skællende pletter på soleksponeret hud. De er et synligt tegn på, at huden har fået så meget UV-stråling, at risikoen for hudkræft er øget.
                  </>
                ) : (
                  <>
                    The same accumulated UV damage produces{' '}
                    <Link href={`/${lang}/blog/actinic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      actinic keratoses
                    </Link>{' '}
                    — rough, scaly patches on sun-exposed skin. They are a visible marker that the skin has taken enough UV radiation to raise the risk of skin cancer.
                  </>
                )}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvad er de vigtigste risikofaktorer?' : 'What are the main risk factors?'}
              </h3>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Kronisk soleksponering:' : 'Chronic sun exposure:'}</strong>{' '}
                  {isDa
                    ? 'Langvarig, gentagen soleksponering gennem livet – særligt i barndommen og teenageårene – er den vigtigste risikofaktor. Ophobning af UV-skade over tid er afgørende.'
                    : 'Long-term, repeated sun exposure throughout life — especially during childhood and teenage years — is the most important risk factor. Accumulation of UV damage over time is key.'}
                </li>
                <li>
                  <strong>{isDa ? 'Lys hudfarve:' : 'Fair skin tone:'}</strong>{' '}
                  {isDa
                    ? 'Mennesker med lys hud, lyse øjne og lyst eller rødt hår har mindre melaninpigment og dermed mindre naturlig beskyttelse mod UV-stråling.'
                    : 'People with fair skin, light eyes and blonde or red hair have less melanin pigment and therefore less natural protection against UV radiation.'}
                </li>
                <li>
                  <strong>{isDa ? 'Alder:' : 'Age:'}</strong>{' '}
                  {isDa
                    ? 'BCC rammer hyppigst personer over 50 år, da UV-skaden akkumuleres over årtier.'
                    : 'BCC most commonly affects people over 50 years old, as UV damage accumulates over decades.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkelse:' : 'Immune suppression:'}</strong>{' '}
                  {isDa
                    ? 'Personer med organtransplantater, hiv eller dem, der tager immunsvækkende medicin, har forhøjet risiko.'
                    : 'People with organ transplants, HIV or those taking immunosuppressant medications have an elevated risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tidligere BCC eller familiehistorie:' : 'Previous BCC or family history:'}</strong>{' '}
                  {isDa
                    ? 'Har du haft et basalcellekarcinom én gang, er risikoen for at udvikle endnu et markant forhøjet – omkring 40–50% udvikler et nyt inden for fem år. En førstegradsslægtning med hudkræft øger også risikoen, dels gennem fælles arveanlæg, dels gennem fælles solvaner.'
                    : 'If you have had a BCC once, your risk of developing another is significantly elevated — around 40–50% of people develop a new one within five years. A first-degree relative with skin cancer also raises your risk, partly through shared genetics and partly through shared sun habits.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tidligere skader:' : 'Previous injuries:'}</strong>{' '}
                  {isDa
                    ? 'Ar, forbrændinger eller kroniske sår på huden kan øge risikoen i det berørte område.'
                    : 'Scars, burns or chronic wounds on the skin can increase the risk in the affected area.'}
                </li>
              </ul>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får basalcellekarcinom?' : 'Who gets basal cell carcinoma?'}
              </h2>
              <p>
                {isDa
                  ? 'BCC kan i princippet ramme alle, men visse grupper er markant mere sårbare:'
                  : 'BCC can in principle affect anyone, but certain groups are significantly more vulnerable:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Ældre voksne:' : 'Older adults:'}</strong>{' '}
                  {isDa
                    ? 'Risikoen stiger markant efter 50-årsalderen, da UV-skaden har haft årtier til at ophobes.'
                    : 'Risk increases significantly after age 50, as UV damage has had decades to accumulate.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med lys hud:' : 'People with fair skin:'}</strong>{' '}
                  {isDa
                    ? 'Keltisk, skandinavisk eller anden nordeuropæisk baggrund er associeret med højere risiko.'
                    : 'Celtic, Scandinavian or other Northern European background is associated with higher risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med stor soleksponering:' : 'People with high sun exposure:'}</strong>{' '}
                  {isDa
                    ? 'Personer der arbejder udendørs eller tilbringer meget tid i solen har øget risiko.'
                    : 'People who work outdoors or spend a lot of time in the sun have an increased risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkede:' : 'The immunocompromised:'}</strong>{' '}
                  {isDa
                    ? 'Organtransplanterede har omkring 10 gange højere risiko for BCC end den generelle befolkning – den langt større stigning på 65–100 gange gælder pladecellekarcinom, ikke BCC. Personer, der lever med hiv, har en mindre forhøjelse på omkring det dobbelte.'
                    : 'Organ transplant recipients have roughly a 10-fold higher risk of BCC than the general population — the far larger 65–100-fold increase applies to squamous cell carcinoma, not BCC. People living with HIV have a smaller increase, around twofold.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'I Danmark rammer BCC omtrent lige så mange kvinder som mænd. Danske registerdata viser et forhold mellem mænd og kvinder på omkring 1:1,1 – altså med kvinder lidt hyppigere ramt. Mønstret ændrer sig med alderen: kvinder dominerer blandt de under 45 år, mens mænd dominerer i de ældre aldersgrupper. Forskellen tilskrives delvist forskelle i soleksponeringsmønstre og arbejdsmiljø.'
                  : 'In Denmark, BCC affects roughly as many women as men. Danish register data give a male-to-female ratio of about 1:1.1 — that is, slightly more women than men. The pattern shifts with age: women predominate below 45, while men predominate in the older age groups. The difference is partly attributed to differences in sun exposure patterns and occupational environments.'}
              </p>

              {/* Diagnosis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan stilles diagnosen basalcellekarcinom?' : 'How is basal cell carcinoma diagnosed?'}
              </h2>
              <p>
                {isDa
                  ? 'Ved en fysisk undersøgelse og i praksis altid en hudbiopsi. Hudlægen undersøger først forandringen med et dermatoskop – et forstørrelsesinstrument med polariseret lys, der viser strukturer som fine, forgrenede blodkar og blågrå pigmentreder, som ikke kan ses med det blotte øje.'
                  : 'With an in-person examination and, in practice, always a skin biopsy. The dermatologist first examines the lesion with a dermatoscope — a magnifying device with polarised light that reveals structures such as fine branching blood vessels and blue-grey nests of pigment that are invisible to the naked eye.'}
              </p>
              <p>
                {isDa
                  ? 'Den endelige diagnose kræver dog mikroskopi. En lille prøve af forandringen – eller hele forandringen – fjernes i lokalbedøvelse og undersøges under mikroskop. Denne undersøgelse (histologi) bekræfter, at der er tale om et basalcellekarcinom, fastlægger undertypen og viser, hvor dybt det vokser. Alt sammen afgørende for valget af behandling.'
                  : 'The definitive diagnosis, however, requires microscopy. A small sample of the lesion — or the whole lesion — is removed under local anaesthetic and examined under a microscope. This examination (histology) confirms that it is a BCC, establishes the subtype and shows how deeply it is growing. All of this determines which treatment is appropriate.'}
              </p>
              <p>
                {isDa
                  ? 'En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke hudkræft. En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
                  : 'A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It cannot rule out skin cancer. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for laboratory analysis.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved basalcellekarcinom?' : 'What can you do about basal cell carcinoma?'}
              </h2>
              <p>
                {isDa
                  ? 'Den gode nyhed er, at BCC er yderst behandlelig – særligt når den opdages tidligt. Behandlingsmulighederne afhænger af tumorens størrelse, placering, dybde og din generelle sundhedstilstand:'
                  : 'The good news is that BCC is highly treatable — especially when detected early. Treatment options depend on the tumour\'s size, location, depth and your overall health:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🔬 Kirurgisk fjernelse (standardbehandling)' : '🔬 Surgical removal (standard treatment)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kirurgisk fjernelse (excision) er den mest almindelige og effektive behandling. Kirurgen fjerner tumoren med en sikkerhedsmargen af sund hud, og det fjernede væv sendes til mikroskopisk undersøgelse (histologi).'
                      : 'Surgical removal (excision) is the most common and effective treatment. The surgeon removes the tumour with a safety margin of healthy skin, and the removed tissue is sent for microscopic examination (histology).'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Mohs-kirurgi (mikrografisk kirurgi)' : '🩺 Mohs surgery (microscopically controlled surgery)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved Mohs-kirurgi fjernes tumoren lag for lag, og hvert lag undersøges under mikroskop, mens patienten venter. Dette gør det muligt at bevare så meget sund hud som muligt – særligt vigtigt i ansigtet. Anbefales ved BCC omkring øjne, næse, læber eller ører.'
                      : 'With Mohs surgery the tumour is removed layer by layer, with each layer examined under a microscope while the patient waits. This makes it possible to preserve as much healthy skin as possible — especially important on the face. Recommended for BCC around the eyes, nose, lips or ears.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💡 Strålebehandling (radioterapi)' : '💡 Radiation therapy (radiotherapy)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Strålebehandling kan anvendes, når kirurgi ikke er mulig – eksempelvis hos ældre patienter eller ved BCC på steder, hvor kirurgi ville være kosmetisk problematisk.'
                      : 'Radiation therapy may be used when surgery is not possible — for example in elderly patients or for BCC in locations where surgery would be cosmetically problematic.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topisk behandling' : '💊 Topical treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? "For små, overfladiske BCC'er kan topiske cremer som fluorouracil (5-FU) eller imiquimod anvendes. Disse stimulerer immunforsvaret til at angribe kræftcellerne."
                      : "For small, superficial BCCs, topical creams such as fluorouracil (5-FU) or imiquimod may be used. These stimulate the immune system to attack the cancer cells."}
                  </p>
                </div>
              </div>

              {/* Prevention */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan forebygger du basalcellekarcinom?' : 'How can you prevent basal cell carcinoma?'}
              </h2>
              <p>
                {isDa
                  ? 'Ved at begrænse UV-skaden. Da BCC primært skyldes ophobning af UV-skade over årtier, starter den bedste beskyttelse tidligt i livet:'
                  : 'By limiting UV damage. Since BCC is primarily caused by the accumulation of UV damage over decades, the best protection starts early in life:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Solcreme året rundt:' : 'Sunscreen year-round:'}</strong>{' '}
                  {isDa
                    ? 'Brug bredspektret solcreme med SPF 30 eller højere hver dag – også på overskyede dage og om vinteren. Påfør 15–30 minutter før soleksponering, og gentag hver anden time.'
                    : 'Use broad-spectrum sunscreen with SPF 30 or higher every day — even on cloudy days and in winter. Apply 15–30 minutes before sun exposure and reapply every two hours.'}
                </li>
                <li>
                  <strong>{isDa ? 'Undgå solarier:' : 'Avoid tanning beds:'}</strong>{' '}
                  {isDa
                    ? 'Solarier øger risikoen for hudkræft markant. Der findes ingen sikker form for brun hud fra kunstig stråling.'
                    : 'Tanning beds significantly increase the risk of skin cancer. There is no safe form of tanned skin from artificial radiation.'}
                </li>
                <li>
                  <strong>{isDa ? 'Beskyttende tøj og hat:' : 'Protective clothing and hats:'}</strong>{' '}
                  {isDa
                    ? 'Bær en bredskygget hat, solbriller og tøj med tæt vævning. Søg skygge i middagstimerne (kl. 12–15), hvor UV-strålingen er stærkest.'
                    : 'Wear a wide-brimmed hat, sunglasses and tightly woven clothing. Seek shade during midday hours (12–3 pm), when UV radiation is strongest.'}
                </li>
                <li>
                  <strong>{isDa ? 'Månedlig selvundersøgelse:' : 'Monthly self-examination:'}</strong>{' '}
                  {isDa
                    ? 'Tjek din hud fra top til tå en gang om måneden. Hold øje med nye knuder, pletter eller sår, der ikke heler inden for 4–6 uger.'
                    : 'Check your skin from head to toe once a month. Watch for new bumps, spots or sores that do not heal within 4–6 weeks.'}
                </li>
                <li>
                  <strong>{isDa ? 'Årlig hudlægekontrol:' : 'Annual dermatologist check-up:'}</strong>{' '}
                  {isDa
                    ? 'Få en professionel hudundersøgelse mindst én gang om året – og gerne oftere, hvis du er i risikogruppen.'
                    : 'Have a professional skin examination at least once a year — and more often if you are in a high-risk group.'}
                </li>
              </ul>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Basalcellekarcinom er klassificeret som 2C32 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved perleagtige eller voksagtige knuder, ofte med synlige telangiektasier. Behandlingen er primært kirurgisk.'
                    : "Basal cell carcinoma is classified as 2C32 in the WHO's International Classification of Diseases (ICD-11). It is characterised by pearly or waxy nodules, often with visible telangiectasias. Treatment is primarily surgical."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er basalcellekarcinom farligt?' : 'Is basal cell carcinoma dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'BCC er den mindst aggressive form for hudkræft og spreder sig sjældent til andre dele af kroppen. Den er dog ikke ufarlig – ubehandlet kan den vokse dybt og beskadige omkringliggende væv, især i ansigtet. Tidlig behandling giver en helbredelsesrate på over 95%.'
                      : 'BCC is the least aggressive form of skin cancer and rarely spreads to other parts of the body. However, it is not harmless — left untreated it can grow deep and damage surrounding tissue, especially on the face. Early treatment gives a cure rate of over 95%.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan adskiller BCC sig fra modermærkekræft (melanom)?' : 'How does BCC differ from melanoma?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'BCC og melanom er begge hudkræftformer, men de adskiller sig markant. BCC vokser langsomt, spreder sig yderst sjældent og har en meget høj helbredelsesrate. Melanom kan derimod sprede sig hurtigt til lymfeknuder og indre organer og er langt mere dødelig. Melanom opstår fra melanocytter (pigmentceller) og viser sig ofte som et mørkt modermærke med uregelmæssige kanter.'
                      : 'BCC and melanoma are both forms of skin cancer, but they differ markedly. BCC grows slowly, very rarely spreads and has a very high cure rate. Melanoma, on the other hand, can spread quickly to lymph nodes and internal organs and is far more deadly. Melanoma arises from melanocytes (pigment cells) and often appears as a dark mole with irregular borders.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan BCC komme igen efter behandling?' : 'Can BCC return after treatment?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, BCC kan komme igen (recidivere), selv efter vellykket behandling. Risikoen for tilbagefald afhænger af, om hele tumoren blev fjernet, og af din individuelle risikoprofil. Personer, der har haft BCC, har også forhøjet risiko for at udvikle nye tilfælde andre steder på huden. Regelmæssige opfølgningskontroller hos hudlægen er derfor vigtige.'
                      : 'Yes, BCC can recur even after successful treatment. The risk of recurrence depends on whether the entire tumour was removed and on your individual risk profile. People who have had BCC also have an elevated risk of developing new BCCs elsewhere on the skin. Regular follow-up appointments with the dermatologist are therefore important.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis du bemærker en ny knude, et sår, der ikke heler inden for 4–6 uger, eller ændringer i et eksisterende modermærke eller en hudplet. Særligt hvis du er i risikogruppen (lys hud, historik med soleksponering, tidligere hudkræft), er regelmæssige kontroller vigtige.'
                      : 'Contact a dermatologist if you notice a new bump, a sore that does not heal within 4–6 weeks, or changes in an existing mole or skin spot. Especially if you are in a high-risk group (fair skin, history of sun exposure, previous skin cancer), regular check-ups are important.'}
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
                    ? 'Er du i tvivl om en knude, et sår eller en plet på din hud? Upload billeder via SKIND-appen og få en professionel vurdering fra en certificeret hudlæge – uden lange ventetider. Ser forandringen mistænkelig ud, henvises du videre til undersøgelse ved fysisk fremmøde.'
                    : 'Are you unsure about a bump, sore or patch on your skin? Upload photos via the SKIND app and get a professional assessment from a certified dermatologist — without long waiting times. If the lesion looks suspicious, you will be directed on to an in-person examination.'}
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
