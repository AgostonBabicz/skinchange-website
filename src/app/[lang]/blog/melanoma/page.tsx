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
        title: 'Hvad er Modermærkekræft (Melanoma)? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om modermærkekræft (melanoma): hvad det er, hvordan du genkender faresignalerne med ABCDE-metoden, og hvorfor tidlig diagnose er afgørende. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'modermærkekræft, melanoma, melanoma symptomer, melanoma årsager, melanoma behandling, hudkræft, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/melanoma',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/melanoma',
            da: 'https://www.skinchange.dk/da/blog/melanoma',
            en: 'https://www.skinchange.dk/en/blog/melanoma',
          },
        },
      }
    : {
        title: 'What is Melanoma (Skin Cancer)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about melanoma: what it is, how to recognise warning signs with the ABCDE method, and why early detection is critical. Get help from a dermatologist via SKIND.',
        keywords:
          'melanoma, skin cancer, melanoma symptoms, melanoma causes, melanoma treatment, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/melanoma',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/melanoma',
            da: 'https://www.skinchange.dk/da/blog/melanoma',
            en: 'https://www.skinchange.dk/en/blog/melanoma',
          },
        },
      };
}

export default function MelanomaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Modermærkekræft (Melanoma)? Årsager, Symptomer og Behandling'
      : 'What is Melanoma (Skin Cancer)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til modermærkekræft: hvad det er, ABCDE-metoden til selvanalyse, årsager og behandlingsmuligheder.'
      : 'Complete guide to melanoma: what it is, the ABCDE method for self-examination, causes and treatment options.',
    image: '/blog-melanoma.jpg',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
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
            name: 'Hvad er modermærkekræft (melanoma)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Modermærkekræft (melanoma) er en ondartet tumorsygdom, der opstår fra melanocytterne – de pigmentproducerende celler i huden. Den adskiller sig fra andre hudkræftformer ved at kunne sprede sig til andre dele af kroppen, hvis den ikke behandles.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan genkender jeg modermærkekræft tidligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Brug ABCDE-metoden: Asymmetri (A), Border (kantens uregelmæssighed) (B), Color (farvevariation) (C), Diameter (større end 6 mm) (D), og Evolving (ændring over tid) (E). Kontakt en hudlæge, hvis du observerer ét eller flere af disse tegn.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvad er de vigtigste risikofaktorer for modermærkekræft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ultraviolet (UV) stråling fra solen er den primære årsag. Andre faktorer inkluderer lys hudfarve, familiehistorie med modermærkekræft, tilstedeværelsen af mange eller atypiske modermærker, og alvorlige solskoldninger – særligt i barndommen.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is melanoma (skin cancer)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Melanoma is a malignant tumour arising from melanocytes — the pigment-producing cells in the skin. It differs from other forms of skin cancer in its ability to spread to other parts of the body if left untreated.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I recognise melanoma early?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use the ABCDE method: Asymmetry (A), Border irregularity (B), Colour variation (C), Diameter greater than 6 mm (D), and Evolving — any change in size, shape or colour over time (E). Contact a dermatologist if you observe one or more of these signs.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the main risk factors for melanoma?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ultraviolet (UV) radiation from the sun is the primary cause. Other factors include fair skin tone, a family history of melanoma, the presence of many or atypical moles, and severe sunburns — especially in childhood.',
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
                {isDa ? 'Modermærkekræft (Melanoma)' : 'Melanoma'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudkræft' : 'Skin Cancer'}
              </span>
              <span className="text-gray-500 text-sm">26. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Modermærkekræft (Melanoma)? Årsager, Symptomer og Behandling'
                : 'What is Melanoma (Skin Cancer)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-melanoma.jpg"
                alt={isDa ? 'Modermærkekræft – melanoma hudkræft' : 'Melanoma – skin cancer'}
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
                    <strong>Modermærkekræft (melanoma) er den farligste form for hudkræft</strong>, men også den, der oftest kan helbredes, hvis den opdages tidligt. Syv ud af ti tilfælde opstår fra eksisterende modermærker – hvilket betyder, at du selv kan holde øje med faresignalerne.
                  </>
                ) : (
                  <>
                    <strong>Melanoma is the most dangerous form of skin cancer</strong>, yet also the one most likely to be cured if detected early. Seven in ten cases arise from existing moles — which means you can watch for warning signs yourself.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad modermærkekræft er, hvordan du bruger ABCDE-metoden til at undersøge din hud, hvad risikofaktorerne er, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what melanoma is, how to use the ABCDE method to examine your skin, what the risk factors are, and which treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is melanoma */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er modermærkekræft (melanoma)?' : 'What is melanoma (skin cancer)?'}
              </h2>
              <p>
                {isDa
                  ? 'Modermærkekræft opstår fra melanocytterne – de celler der producerer melanin, det pigment der giver huden dens farve. Når melanocytterne ændrer sig og vokser ukontrollabelt, kan de danne en ondartet tumor.'
                  : 'Melanoma arises from melanocytes — the cells that produce melanin, the pigment that gives skin its colour. When melanocytes change and grow uncontrollably, they can form a malignant tumour.'}
              </p>
              <p>
                {isDa
                  ? 'Modermærkekræft adskiller sig fra andre hudkræftformer (som basalcellecarcinom og pladecellecarcinom) ved at have størst potentiale for at sprede sig (metastasere) til andre organer, herunder lymfeknuder, lunger og hjerne. Af denne grund er tidlig diagnose særligt afgørende.'
                  : 'Melanoma differs from other forms of skin cancer (such as basal cell carcinoma and squamous cell carcinoma) in having the greatest potential to spread (metastasise) to other organs, including the lymph nodes, lungs and brain. For this reason, early diagnosis is particularly critical.'}
              </p>
              <p>
                {isDa
                  ? 'Den gode nyhed er, at modermærkekræft, der opdages tidligt, har en meget høj helbredelsesrate – ofte over 90% efter kirurgisk fjernelse.'
                  : 'The good news is that melanoma detected early has a very high cure rate — often above 90% following surgical removal.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser modermærkekræft ud? ABCDE-metoden' : 'What does melanoma look like? The ABCDE method'}
              </h2>
              <p>
                {isDa
                  ? 'Den nemmeste måde at holde øje med din hud på er at bruge ABCDE-metoden til at undersøge modermærker og nye pletter:'
                  : 'The easiest way to keep an eye on your skin is to use the ABCDE method to examine moles and new spots:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'A — Asymmetri (Asymmetry)' : 'A — Asymmetry'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Den ene halvdel af modermærket eller pletten ser anderledes ud end den anden.'
                      : 'One half of the mole or spot looks different from the other.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'B — Border (Kantens uregelmæssighed)' : 'B — Border irregularity'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kanterne er ujævne, takkede, bugtede eller uregelmæssige i modsætning til et normalt modermærke.'
                      : 'The edges are uneven, jagged, notched or irregular, unlike a normal mole.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'C — Color (Farvevariation)' : 'C — Colour variation'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Der er forskellige nuancer af brun, sort, rød, hvid eller blå inden for samme plet. Et normalt modermærke har typisk én ensartet farve.'
                      : 'There are different shades of brown, black, red, white or blue within the same spot. A normal mole typically has one uniform colour.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'D — Diameter (Størrelse)' : 'D — Diameter'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Modermærket er større end 6 millimeter – svarende til størrelsen af et blyantsviskelæder. Dog kan mindre modermærker også være ondartede.'
                      : 'The mole is larger than 6 millimetres — about the size of a pencil eraser. However, smaller moles can also be malignant.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'E — Evolving (Udvikling over tid)' : 'E — Evolving (change over time)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Modermærket ændrer sig over tid – i størrelse, form, farve, højde, eller hvis det begynder at klø, bløde eller danne skorpe.'
                      : 'The mole changes over time — in size, shape, colour, height, or if it begins to itch, bleed or crust.'}
                  </p>
                </div>
              </div>
              <p>
                {isDa
                  ? 'Ud over ABCDE-metoden skal du være opmærksom på "fugleskudsagtige" mønstre af mørkebrune til sorte striber, som kan være et tidligt tegn på lentigo maligna (en type modermærkekræft i ansigtet).'
                  : 'Beyond the ABCDE method, watch for "birdshot" patterns of dark brown to black streaks, which can be an early sign of lentigo maligna (a type of melanoma on the face).'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår modermærkekræft?' : 'Why does melanoma happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Ultraviolet (UV) stråling fra solen er den primære årsag til modermærkekræft. UV-stråler beskadiger DNA\'et i melanocytterne og kan udløse ukontrollabel celledeling.'
                  : 'Ultraviolet (UV) radiation from the sun is the primary cause of melanoma. UV rays damage the DNA in melanocytes and can trigger uncontrolled cell division.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'UV-stråling og solskoldning' : 'UV radiation and sunburn'}
              </h3>
              <p>
                {isDa
                  ? 'Både UVA- og UVB-stråler bidrager til risikoen. Alvorlige solskoldninger – særligt i barndommen og teenageårene – øger risikoen markant, da hudens immunforsvar på det tidspunkt er særligt sårbart.'
                  : 'Both UVA and UVB rays contribute to the risk. Severe sunburns — especially in childhood and the teenage years — increase the risk significantly, as the skin\'s immune defences are particularly vulnerable at that time.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik' : 'Genetics'}
              </h3>
              <p>
                {isDa
                  ? 'Arvelige faktorer spiller en vigtig rolle. Hvis du har nære slægtninge med modermærkekræft, er din egen risiko forhøjet. Der findes også specifikke genetiske mutationer (f.eks. i BRAF- og NRAS-generne), der øger risikoen.'
                  : 'Hereditary factors play an important role. If you have close relatives with melanoma, your own risk is elevated. Specific genetic mutations (e.g. in the BRAF and NRAS genes) also increase the risk.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Modermærker' : 'Moles'}
              </h3>
              <p>
                {isDa
                  ? 'Personer med mange modermærker (mere end 50) eller atypiske modermærker (store, uregelmæssige modermærker med uklare grænser) har en øget risiko. Atypiske modermærker kaldes også dysplastisk nevi.'
                  : 'People with many moles (more than 50) or atypical moles (large, irregular moles with unclear borders) have an increased risk. Atypical moles are also called dysplastic nevi.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får modermærkekræft?' : 'Who gets melanoma?'}
              </h2>
              <p>
                {isDa
                  ? 'Modermærkekræft kan ramme alle, men visse grupper har en højere risiko:'
                  : 'Melanoma can affect anyone, but certain groups have a higher risk:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Personer med lys hud:' : 'People with fair skin:'}</strong>{' '}
                  {isDa
                    ? 'Jo lysere hud og øjne, desto større risiko, fordi mindre melanin giver naturlig beskyttelse mod UV-stråler.'
                    : 'The lighter your skin and eyes, the greater the risk, because less melanin provides natural protection against UV rays.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med familiehistorie:' : 'People with a family history:'}</strong>{' '}
                  {isDa
                    ? 'Arvelige mutationer kan øge risikoen betydeligt.'
                    : 'Inherited mutations can increase the risk significantly.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med mange modermærker:' : 'People with many moles:'}</strong>{' '}
                  {isDa
                    ? 'Flere end 50 modermærker øger risikoen for, at mindst ét udvikler sig til modermærkekræft.'
                    : 'More than 50 moles increases the chance that at least one will develop into melanoma.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med tidligere solskoldninger:' : 'People with a history of sunburns:'}</strong>{' '}
                  {isDa
                    ? 'Især solskoldninger i barndommen og teenageårene.'
                    : 'Especially sunburns during childhood and the teenage years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer der bruger solarier:' : 'People who use tanning beds:'}</strong>{' '}
                  {isDa
                    ? 'Solarier udsender koncentreret UV-stråling og øger risikoen markant.'
                    : 'Tanning beds emit concentrated UV radiation and increase the risk significantly.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Bemærk: Modermærkekræft forekommer også hos mørkhudede personer og kan opstå på usædvanlige steder såsom under neglene, i håndfladerne og på fodsålerne – steder der ikke udsættes for direkte sollys.'
                  : 'Note: Melanoma also occurs in darker-skinned individuals and can appear in unusual places such as under the nails, on the palms of the hands and on the soles of the feet — areas not exposed to direct sunlight.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved modermærkekræft?' : 'What can you do about melanoma?'}
              </h2>
              <p>
                {isDa
                  ? 'Behandlingen af modermærkekræft afhænger af, hvor tidligt den opdages. Nøglen til overlevelse er tidlig diagnose og hurtig behandling.'
                  : 'Treatment of melanoma depends on how early it is detected. The key to survival is early diagnosis and prompt treatment.'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🔬 Tidlig diagnose (primært melanom, lokalt)' : '🔬 Early diagnosis (primary melanoma, local)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kirurgisk fjernelse (eksision) er standardbehandlingen. Jo tyndere tumoren er (målt i millimeter), desto bedre er prognosen. Ved tidlig diagnose er helbredelsesraten ofte over 90%.'
                      : 'Surgical removal (excision) is the standard treatment. The thinner the tumour (measured in millimetres), the better the prognosis. With early diagnosis, the cure rate is often above 90%.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧬 Avanceret melanom (metastatisk)' : '🧬 Advanced melanoma (metastatic)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Immunterapi (f.eks. checkpoint-hæmmere som pembrolizumab og nivolumab) har revolutioneret behandlingen af fremskreden modermærkekræft og forbedret overlevelsesraten markant. Målrettet terapi mod specifikke mutationer (BRAF-hæmmere) er også en mulighed.'
                      : 'Immunotherapy (e.g. checkpoint inhibitors such as pembrolizumab and nivolumab) has revolutionised the treatment of advanced melanoma and significantly improved survival rates. Targeted therapy against specific mutations (BRAF inhibitors) is also an option.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '☀️ Forebyggelse er den bedste behandling' : '☀️ Prevention is the best treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Brug solcreme med SPF 30 eller højere dagligt, bær beskyttende tøj, undgå direkte sol i de kraftigste timer, og undgå solarier fuldstændigt. Undersøg din hud hver måned.'
                      : 'Use sunscreen with SPF 30 or higher daily, wear protective clothing, avoid direct sun during the strongest hours, and avoid tanning beds entirely. Examine your skin once a month.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Modermærkekræft er klassificeret som C43 (eller ICD-11: 2C30 Melanoma of skin) i WHO\'s internationale sygdomsklassifikation. Det er karakteriseret ved ondartede tumorer fra melanocytter, ofte med asymmetri, farvevariation og irregulære kanter.'
                    : "Melanoma is classified as C43 (or ICD-11: 2C30 Melanoma of skin) in the WHO's International Classification of Diseases. It is characterised by malignant tumours from melanocytes, often with asymmetry, colour variation and irregular borders."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er modermærkekræft farligt?' : 'Is melanoma dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Modermærkekræft er den farligste form for hudkræft, fordi den kan sprede sig til andre organer. Men opdaget tidligt er den ofte fuldt helbredelig. Risikoen stiger markant, jo dybere tumoren er.'
                      : 'Melanoma is the most dangerous form of skin cancer because it can spread to other organs. But detected early, it is often fully curable. The risk increases significantly the deeper the tumour is.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan undersøger jeg min hud selv?' : 'How do I examine my skin myself?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Undersøg hele din hud fra top til tå en gang om måneden – inklusive hovedbunden, under neglene, mellem tæerne og på fodsålerne. Brug et spejl til svært tilgængelige områder. Fotografér dine modermærker og sammenlign med tidligere billeder.'
                      : 'Examine your entire skin from head to toe once a month — including the scalp, under the nails, between the toes and on the soles of the feet. Use a mirror for hard-to-reach areas. Photograph your moles and compare with previous images.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge straks, hvis du opdager et modermærke der opfylder ét eller flere ABCDE-kriterier, hvis et modermærke ændrer sig, eller hvis du har en familiehistorie med modermærkekræft. Regelmæssig screening anbefales til personer i højrisikogruppen.'
                      : 'Contact a dermatologist immediately if you find a mole that meets one or more ABCDE criteria, if a mole is changing, or if you have a family history of melanoma. Regular screening is recommended for people in high-risk groups.'}
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
                    ? 'Er du i tvivl om et modermærke? Upload billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Unsure about a mole? Upload photos via the SKIND app and get an assessment from a certified dermatologist — no hospital waiting list.'}
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
                    ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Kontakt altid en hudlæge for personlig rådgivning ved mistanke om modermærkekræft.'
                    : 'This article is for informational purposes only and does not replace professional medical advice. Always consult a dermatologist for personal guidance if you suspect melanoma.'}
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
