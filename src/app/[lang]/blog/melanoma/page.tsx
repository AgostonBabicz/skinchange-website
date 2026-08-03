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
        title: 'Modermærkekræft (melanom): symptomer og behandling',
        description:
          'Syv ud af ti melanomer opstår som en helt ny plet på normal hud. Lær ABCDE-metoden, de tegn den overser, og hvornår du skal have en plet undersøgt.',
        keywords:
          'modermærkekræft, melanom, melanom symptomer, ABCDE-metoden, hudkræft, Breslow-tykkelse, hudlæge, SKIND',
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
        title: 'Melanoma: symptoms, warning signs and treatment',
        description:
          'Seven in ten melanomas appear as a brand new spot on normal skin. Learn the ABCDE method, the signs it misses, and when a spot needs to be examined.',
        keywords:
          'melanoma, skin cancer, melanoma symptoms, ABCDE method, Breslow thickness, nodular melanoma, dermatologist, SKIND',
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

  const headline = isDa
    ? 'Hvad er modermærkekræft (melanom)? Symptomer, årsager og behandling'
    : 'What is melanoma? Symptoms, causes and treatment';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Komplet guide til modermærkekræft: hvad det er, ABCDE-metoden til selvundersøgelse, årsager og behandlingsmuligheder.'
      : 'Complete guide to melanoma: what it is, the ABCDE method for self-examination, causes and treatment options.',
    image: '/blog-melanoma.jpg',
    datePublished: '2026-03-26',
    dateModified: '2026-03-26',
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
          q: 'Er modermærkekræft farligt?',
          a: 'Modermærkekræft er den farligste form for hudkræft, fordi den kan sprede sig til andre organer. Opdaget mens den stadig kun sidder i huden, er den femårige relative overlevelse omkring 99%. Prognosen afhænger først og fremmest af Breslow-tykkelsen – hvor dybt tumoren er vokset ned i huden, målt i millimeter.',
        },
        {
          q: 'Opstår modermærkekræft altid i et eksisterende modermærke?',
          a: 'Nej. Omkring syv ud af ti melanomer opstår som en helt ny plet på normal hud, og kun cirka tre ud af ti opstår i et eksisterende modermærke. En ny plet, der ikke ligner de andre, er derfor mindst lige så vigtig som et modermærke, der har ændret sig.',
        },
        {
          q: 'Hvordan undersøger jeg min hud selv?',
          a: 'Undersøg hele huden fra top til tå en gang om måneden – også hovedbunden, under neglene, mellem tæerne og på fodsålerne. Brug et spejl til de områder, du ikke kan se. Kig efter pletter, der skiller sig ud fra dine øvrige (det grimme ælling-tegn), og tag billeder, så du kan sammenligne over tid.',
        },
        {
          q: 'Hvornår skal jeg kontakte en læge om et modermærke?',
          a: 'Kontakt en læge eller hudlæge, hvis en plet opfylder ét eller flere ABCDE-kriterier, hvis den skiller sig ud fra dine øvrige modermærker, hvis en knude er hævet, fast og har vokset i mere end en måned, hvis der kommer en ny mørk stribe under en negl, eller hvis en plet bløder eller ikke vil hele. Vent ikke på, at den ændrer sig yderligere.',
        },
      ]
    : [
        {
          q: 'Is melanoma dangerous?',
          a: 'Melanoma is the most dangerous form of skin cancer because it can spread to other organs. Found while it is still confined to the skin, five-year relative survival is around 99%. The outlook depends above all on the Breslow thickness — how deep the tumour has grown into the skin, measured in millimetres.',
        },
        {
          q: 'Does melanoma always start in an existing mole?',
          a: 'No. Around seven in ten melanomas appear as a completely new spot on normal skin, and only about three in ten arise in an existing mole. A new spot that does not look like your others matters at least as much as a mole that has changed.',
        },
        {
          q: 'How do I examine my skin myself?',
          a: 'Examine your whole skin from head to toe once a month — including the scalp, under the nails, between the toes and on the soles of the feet. Use a mirror for areas you cannot see. Look for spots that stand out from your others (the ugly duckling sign), and take photographs so you can compare over time.',
        },
        {
          q: 'When should I see a doctor about a mole?',
          a: 'See a doctor or dermatologist if a spot meets one or more ABCDE criteria, if it stands out from your other moles, if a lump is raised, firm and has been growing for more than a month, if a new dark band appears under a nail, or if a spot bleeds or will not heal. Do not wait to see whether it changes further.',
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
                {isDa ? 'Modermærkekræft (melanom)' : 'Melanoma'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudkræft' : 'Skin Cancer'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '26. marts 2026' : 'March 26, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '9 min læsetid' : '9 min read'}
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
                src="/blog-melanoma.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en mørk plet på huden med ujævne kanter og flere brune og sorte nuancer.'
                    : 'Close-up of a dark spot on skin with uneven borders and several shades of brown and black.'
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
                    <strong>Modermærkekræft (melanom) er den farligste form for hudkræft</strong>, men også den, der oftest kan helbredes, hvis den opdages tidligt. Omkring syv ud af ti melanomer opstår som en helt ny plet på normal hud og ikke i et eksisterende modermærke — en ny eller forandret plet er derfor mindst lige så vigtig som et modermærke, du altid har haft.
                  </>
                ) : (
                  <>
                    <strong>Melanoma is the most dangerous form of skin cancer</strong>, yet also the one most likely to be cured if caught early. Around seven in ten melanomas appear as a completely new spot on normal skin rather than in an existing mole — so a new or changing mark matters just as much as a mole you have always had.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad modermærkekræft er, hvordan du bruger ABCDE-metoden, hvilke tegn metoden overser, hvad der øger din risiko, og hvordan melanom undersøges og behandles.'
                  : 'In this article we explain what melanoma is, how to use the ABCDE method, which warning signs that method misses, what raises your risk, and how melanoma is diagnosed and treated.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is melanoma */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er modermærkekræft (melanom)?' : 'What is melanoma?'}
              </h2>
              <p>
                {isDa
                  ? 'Modermærkekræft opstår i melanocytterne – de celler, der producerer melanin, det pigment der giver huden dens farve. Når melanocytterne forandrer sig og vokser ukontrolleret, danner de en ondartet tumor, der kan vokse ned i de dybere hudlag.'
                  : 'Melanoma arises in melanocytes — the cells that produce melanin, the pigment that gives skin its colour. When melanocytes change and grow uncontrollably, they form a malignant tumour that can grow down into the deeper layers of the skin.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Melanom adskiller sig fra andre former for hudkræft som{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      basalcellekarcinom
                    </Link>{' '}
                    og{' '}
                    <Link href={`/${lang}/blog/squamous-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      pladecellekarcinom
                    </Link>{' '}
                    ved at kunne sprede sig (metastasere) til lymfeknuder, lunger, lever og hjerne. Derfor betyder det mere, hvor dybt tumoren er vokset ned, end hvor bred den er. Dybden måles i millimeter i mikroskopet og kaldes Breslow-tykkelsen – den er den vigtigste enkeltfaktor for prognosen.
                  </>
                ) : (
                  <>
                    Melanoma differs from other forms of skin cancer such as{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      basal cell carcinoma
                    </Link>{' '}
                    and{' '}
                    <Link href={`/${lang}/blog/squamous-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      squamous cell carcinoma
                    </Link>{' '}
                    in its ability to spread (metastasise) to the lymph nodes, lungs, liver and brain. That is why how deep the tumour has grown matters more than how wide it is. The depth is measured in millimetres under the microscope and is called the Breslow thickness — it is the single most important predictor of outcome.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'Opdages melanomet, mens det stadig kun sidder i huden, er den femårige relative overlevelse omkring 99%. Har det spredt sig til fjerne organer, falder overlevelsen markant. Intet andet, du kan gøre, betyder lige så meget som at finde det tidligt.'
                  : 'Detected while it is still confined to the skin, melanoma has a five-year relative survival of around 99%. Once it has spread to distant organs, survival falls sharply. Nothing else you can do makes as much difference as finding it early.'}
              </p>
              <p>
                {isDa
                  ? 'Danmark har en af de højeste forekomster af modermærkekræft i verden. Der diagnosticeres omkring 2.700–3.000 nye tilfælde om året, og melanom er en af de hyppigste kræftformer hos danskere mellem 15 og 34 år.'
                  : 'Denmark has among the highest melanoma incidence rates in the world. Around 2,700–3,000 new cases are diagnosed each year, and melanoma is one of the most common cancers in Danes aged 15–34.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser modermærkekræft ud? ABCDE-metoden' : 'What does melanoma look like? The ABCDE method'}
              </h2>
              <p>
                {isDa
                  ? 'Den nemmeste måde at holde øje med din hud på er at bruge ABCDE-metoden, når du gennemgår modermærker og nye pletter:'
                  : 'The easiest way to keep an eye on your skin is to use the ABCDE method when you go through moles and new spots:'}
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
                    {isDa ? 'B — Border (kantens uregelmæssighed)' : 'B — Border irregularity'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kanterne er ujævne, takkede, bugtede eller uregelmæssige i modsætning til et normalt modermærke.'
                      : 'The edges are uneven, jagged, notched or irregular, unlike a normal mole.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'C — Colour (farvevariation)' : 'C — Colour variation'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Der er forskellige nuancer af brun, sort, rød, hvid eller blå inden for samme plet. Et normalt modermærke har typisk én ensartet farve.'
                      : 'There are different shades of brown, black, red, white or blue within the same spot. A normal mole typically has one uniform colour.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'D — Diameter (størrelse)' : 'D — Diameter'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Modermærket er større end 6 millimeter – på størrelse med et blyantsviskelæder. Mindre modermærker kan dog også være ondartede.'
                      : 'The mole is larger than 6 millimetres — about the size of a pencil eraser. However, smaller moles can also be malignant.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? 'E — Evolving (udvikling over tid)' : 'E — Evolving (change over time)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Modermærket ændrer sig over tid – i størrelse, form, farve eller højde, eller det begynder at klø, bløde eller danne skorpe.'
                      : 'The mole changes over time — in size, shape, colour or height, or it begins to itch, bleed or crust.'}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvilke tegn overser ABCDE-metoden?' : 'What does the ABCDE method miss?'}
              </h3>
              <p>
                {isDa
                  ? 'ABCDE fanger de fleste, men ikke alle melanomer. Tre supplerende tegn er værd at kende:'
                  : 'ABCDE catches most melanomas, but not all of them. Three additional signs are worth knowing:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Den grimme ælling:' : 'The ugly duckling sign:'}</strong>{' '}
                  {isDa
                    ? 'De fleste menneskers modermærker ligner hinanden. Et modermærke, der skiller sig ud fra de øvrige i farve, form eller størrelse, skal undersøges – også selvom det ikke opfylder et eneste ABCDE-kriterium.'
                    : "Most people's moles look broadly alike. A mole that stands out from the rest in colour, shape or size should be checked — even if it does not tick a single ABCDE box."}
                </li>
                <li>
                  <strong>{isDa ? 'EFG-reglen for nodulært melanom:' : 'The EFG rule for nodular melanoma:'}</strong>{' '}
                  {isDa
                    ? 'Nodulært melanom vokser nedad frem for udad og er ofte symmetrisk, ensfarvet og under 6 mm – det slipper altså igennem ABCDE. Brug i stedet EFG: Elevated (hævet), Firm (fast at trykke på) og Growing (vokser vedvarende i mere end en måned).'
                    : 'Nodular melanoma grows downwards rather than outwards and is often symmetric, evenly coloured and under 6 mm — so it passes ABCDE. Use EFG instead: Elevated, Firm to the touch, and Growing continuously for more than a month.'}
                </li>
                <li>
                  <strong>{isDa ? 'Amelanotisk melanom:' : 'Amelanotic melanoma:'}</strong>{' '}
                  {isDa
                    ? 'Nogle melanomer indeholder ingen eller næsten intet pigment. De er lyserøde, røde eller hudfarvede og bliver let forvekslet med en uskyldig knop.'
                    : 'Some melanomas contain little or no pigment. They are pink, red or skin-coloured and are easily mistaken for a harmless lump.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Ud over ABCDE-metoden er to mønstre værd at kende. I ansigtet hos ældre kan en langsomt voksende, flad plet med ujævn brun-sort pigmentering i solskadet hud være lentigo maligna, en tidlig form for melanom. Under en negl kan en ny eller bredere mørk stribe på langs — især hvis pigmentet breder sig ud på huden omkring neglen (Hutchinsons tegn) — være et subungualt melanom. Begge bør vurderes af en hudlæge.'
                  : "Beyond the ABCDE method, two patterns are worth knowing. On the face of an older adult, a slowly enlarging flat patch with uneven brown-to-black pigment on sun-damaged skin can be lentigo maligna, an early melanoma. Under a nail, a new or widening dark band running lengthwise — especially if the pigment spreads onto the surrounding skin fold (Hutchinson's sign) — can be a subungual melanoma. Both need dermatological assessment."}
              </p>
              <p>
                {isDa ? (
                  <>
                    Er du i tvivl om, hvad der er normalt, kan du sammenligne med vores guide til{' '}
                    <Link href={`/${lang}/blog/regular-mole`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      almindelige modermærker
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    If you are unsure what normal looks like, compare with our guide to{' '}
                    <Link href={`/${lang}/blog/regular-mole`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      ordinary moles
                    </Link>
                    .
                  </>
                )}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår modermærkekræft?' : 'Why does melanoma happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Ultraviolet (UV) stråling fra solen er den vigtigste årsag til modermærkekræft. UV-stråler beskadiger DNA\'et i melanocytterne og kan udløse ukontrolleret celledeling.'
                  : 'Ultraviolet (UV) radiation from the sun is the main cause of melanoma. UV rays damage the DNA in melanocytes and can trigger uncontrolled cell division.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvordan skader UV-stråling og solskoldning huden?' : 'How do UV radiation and sunburn damage the skin?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Både UVA- og UVB-stråler bidrager til risikoen. Alvorlige solskoldninger – særligt i barndommen og teenageårene – øger risikoen markant. Mange års sol viser sig også som{' '}
                    <Link href={`/${lang}/blog/actinic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      aktiniske keratoser
                    </Link>
                    , ru, skællende pletter, der i sig selv er et tegn på stor samlet UV-belastning.
                  </>
                ) : (
                  <>
                    Both UVA and UVB rays contribute to the risk. Severe sunburns — especially in childhood and the teenage years — increase the risk markedly. Years of sun exposure also show up as{' '}
                    <Link href={`/${lang}/blog/actinic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      actinic keratoses
                    </Link>
                    , rough scaly patches that are themselves a marker of a heavy lifetime UV dose.
                  </>
                )}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Er modermærkekræft arveligt?' : 'Is melanoma inherited?'}
              </h3>
              <p>
                {isDa
                  ? 'Omkring hver tiende med modermærkekræft har en nær slægtning, der også har haft sygdommen. De arvelige disponerende gener er først og fremmest CDKN2A samt CDK4, BAP1 og POT1, og dertil kommer almindelige varianter i MC1R, som giver en mere moderat risikoøgning. Familier med flere tilfælde af melanom – eller melanom sammen med kræft i bugspytkirtlen eller mesotheliom – kan blive tilbudt genetisk rådgivning.'
                  : 'Around one in ten people with melanoma has a close relative who has also had it. The inherited predisposition genes are principally CDKN2A, along with CDK4, BAP1 and POT1, plus common variants in MC1R that carry a more moderate increase in risk. Families with several cases of melanoma — or melanoma together with pancreatic cancer or mesothelioma — may be offered genetic counselling.'}
              </p>
              <p>
                {isDa
                  ? 'BRAF og NRAS nævnes ofte i forbindelse med melanom, men disse mutationer er ikke arvelige. De opstår i selve tumoren, og der testes for dem på det fjernede væv for at afgøre, om målrettet medicin vil virke.'
                  : 'BRAF and NRAS are often mentioned in connection with melanoma, but these mutations are not inherited. They arise in the tumour itself and are tested for on the removed tissue to decide whether targeted drugs will work.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Bliver modermærker til modermærkekræft?' : 'Do moles turn into melanoma?'}
              </h3>
              <p>
                {isDa
                  ? 'De fleste melanomer opstår ikke i et modermærke. Men personer med mange modermærker (flere end 50) eller med atypiske modermærker – store, uregelmæssige modermærker med uklare grænser, også kaldet dysplastiske nævi – har en højere personlig risiko for melanom hvor som helst på huden. Et højt antal modermærker er altså et risikomarkør for personen, ikke en række enkeltmodermærker, der står i kø for at blive ondartede.'
                  : 'Most melanomas do not begin in a mole. But people with many moles (more than 50) or with atypical moles — large, irregular moles with unclear borders, also called dysplastic naevi — carry a higher personal risk of melanoma anywhere on the skin. A high mole count is a risk marker for the person, not a queue of individual moles waiting to turn malignant.'}
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
                    ? 'Jo lysere hud og øjne, desto større risiko, fordi mindre melanin giver mindre naturlig beskyttelse mod UV-stråler.'
                    : 'The lighter your skin and eyes, the greater the risk, because less melanin means less natural protection against UV rays.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med familiehistorie:' : 'People with a family history:'}</strong>{' '}
                  {isDa
                    ? 'Melanom hos en forælder, søskende eller barn øger risikoen betydeligt.'
                    : 'Melanoma in a parent, sibling or child increases the risk substantially.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med mange modermærker:' : 'People with many moles:'}</strong>{' '}
                  {isDa
                    ? 'Flere end 50 modermærker eller flere atypiske modermærker er et tegn på, at du hører til dem, der bør have huden gennemgået regelmæssigt.'
                    : 'More than 50 moles, or several atypical moles, marks you out as someone who should have their skin checked regularly.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med tidligere solskoldninger:' : 'People with a history of sunburns:'}</strong>{' '}
                  {isDa
                    ? 'Især solskoldninger i barndommen og teenageårene.'
                    : 'Especially sunburns during childhood and the teenage years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer der bruger solarier:' : 'People who use sunbeds:'}</strong>{' '}
                  {isDa
                    ? 'Solarier udsender koncentreret UV-stråling, og risikoen er størst, hvis man begynder som ung.'
                    : 'Sunbeds emit concentrated UV radiation, and the risk is greatest for those who start young.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med nedsat immunforsvar:' : 'People with a suppressed immune system:'}</strong>{' '}
                  {isDa
                    ? 'Organtransplanterede og andre i immundæmpende behandling har øget risiko for al hudkræft.'
                    : 'Organ transplant recipients and others on immunosuppressive treatment have an increased risk of all skin cancers.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Modermærkekræft forekommer også hos mennesker med brun og sort hud, oftest som akralt lentiginøst melanom i håndfladerne, på fodsålerne eller under en negl – steder, der hverken udsættes for sol eller undersøges rutinemæssigt. Blandt andet derfor opdages det typisk senere og har dårligere prognose stadie for stadie.'
                  : 'Melanoma also occurs in people with brown and black skin, most often as acral lentiginous melanoma on the palms, the soles of the feet or under a nail — sites that are neither sun-exposed nor routinely examined. Partly for that reason it is usually diagnosed later and has worse outcomes stage for stage.'}
              </p>

              {/* Diagnosis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan stilles diagnosen modermærkekræft?' : 'How is melanoma diagnosed?'}
              </h2>
              <p>
                {isDa
                  ? 'En hudlæge undersøger pletten med et dermatoskop – en håndholdt lup med polariseret lys, der viser pigmentmønstre, man ikke kan se med det blotte øje. Er pletten fortsat mistænkelig, fjernes den i sin helhed (eksisionsbiopsi) og undersøges i mikroskop. Det er den eneste måde, modermærkekræft kan bekræftes eller udelukkes på, og det er også her Breslow-tykkelsen måles.'
                  : 'A dermatologist examines the lesion with a dermatoscope — a handheld magnifier with polarised light that reveals pigment patterns invisible to the naked eye. If the lesion still looks suspicious, it is removed whole (excision biopsy) and examined under the microscope. That is the only way melanoma can be confirmed or ruled out, and it is also how the Breslow thickness is measured.'}
              </p>
              <p>
                {isDa
                  ? 'En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke hudkræft. En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
                  : 'A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It cannot rule out skin cancer. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for laboratory analysis.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan behandles modermærkekræft?' : 'How is melanoma treated?'}
              </h2>
              <p>
                {isDa
                  ? 'Behandlingen afhænger af, hvor tidligt melanomet opdages. Nøglen til overlevelse er tidlig diagnose og hurtig behandling.'
                  : 'Treatment depends on how early the melanoma is found. The key to survival is early diagnosis and prompt treatment.'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🔬 Melanom, der kun sidder i huden' : '🔬 Melanoma still confined to the skin'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kirurgisk fjernelse er behandlingen. Pletten fjernes først i sin helhed, og når Breslow-tykkelsen kendes, tages der en bredere margin hud omkring arret. Ved tykkere tumorer kan man tilbyde skildvagtslymfeknude-biopsi for at undersøge, om celler har nået de nærmeste lymfeknuder. Den femårige relative overlevelse er her omkring 99%.'
                      : 'Surgical removal is the treatment. The lesion is first excised whole, and once the Breslow thickness is known a wider margin of skin is taken around the scar. For thicker tumours a sentinel lymph node biopsy may be offered to check whether cells have reached the nearest lymph nodes. Five-year relative survival at this stage is around 99%.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧬 Fremskredent melanom (metastatisk)' : '🧬 Advanced melanoma (metastatic)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Immunterapi (checkpoint-hæmmere som pembrolizumab, nivolumab og ipilimumab) har ændret behandlingen af fremskredent melanom og forbedret overlevelsen markant. Hvis tumoren har en BRAF-mutation, kan målrettet behandling med BRAF- og MEK-hæmmere være et alternativ.'
                      : 'Immunotherapy (checkpoint inhibitors such as pembrolizumab, nivolumab and ipilimumab) has transformed the treatment of advanced melanoma and improved survival substantially. If the tumour carries a BRAF mutation, targeted therapy with BRAF and MEK inhibitors is an alternative.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '☀️ Sådan beskytter du dig mod solen' : '☀️ How to protect yourself from the sun'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kræftens Bekæmpelses råd kommer i denne rækkefølge: søg skygge, tag tøj og en hat på, og brug først derefter solcreme (mindst SPF 30) på den hud, du ikke kan dække til. I Danmark gælder rådene mellem klokken 12 og 15 fra april til september, og altid når UV-indekset er 3 eller derover. Brug aldrig solarium, og gennemgå din egen hud en gang om måneden.'
                      : "The Danish Cancer Society's advice comes in this order: seek shade, put on clothing and a hat, and only then use sunscreen (at least SPF 30) on the skin you cannot cover. In Denmark this applies between 12:00 and 15:00 from April to September, and whenever the UV index is 3 or above. Never use a sunbed, and check your own skin once a month."}
                  </p>
                </div>
              </div>

              {/* ICD Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Modermærkekræft er klassificeret som 2C30 Melanoma of skin i WHO\'s internationale sygdomsklassifikation (ICD-11). I ICD-10, som fortsat bruges i danske patientjournaler, er koden C43.'
                    : "Melanoma is classified as 2C30 Melanoma of skin in the WHO's International Classification of Diseases (ICD-11). In ICD-10, still used in Danish medical records, the code is C43."}
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
                <p className="mb-4">
                  {isDa
                    ? 'En billedvurdering kan ikke udelukke modermærkekræft. Opfylder en plet ét eller flere af faresignalerne ovenfor, skal den ses ved fysisk fremmøde hos din egen læge eller en hudlæge – vent ikke på, at den ændrer sig yderligere.'
                    : 'A photo assessment cannot rule out melanoma. If a spot meets one or more of the warning signs above, it needs an in-person examination with your GP or a dermatologist — do not wait to see whether it changes further.'}
                </p>
                <p className="mb-6">
                  {isDa
                    ? 'Er du i tvivl om, hvor hurtigt en plet skal ses, kan du uploade billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge.'
                    : 'If you are unsure how quickly a spot needs to be seen, you can upload photos via the SKIND app and get an assessment from a certified dermatologist.'}
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
