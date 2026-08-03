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
        title: 'ABCDE-reglen: hvornår er et modermærke farligt? | SKIND',
        description:
          'Sådan bruger du ABCDE-reglen på dine modermærker, hvorfor den ikke fanger alt, hvem der er i risiko for melanom, og hvornår et modermærke skal ses af en læge.',
        keywords:
          'modermærke, nævus, ABCDE-reglen, den grimme ælling, EFG-reglen, melanom, modermærkekontrol, dermatoskopi, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/regular-mole',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/regular-mole', da: 'https://www.skinchange.dk/da/blog/regular-mole', en: 'https://www.skinchange.dk/en/blog/regular-mole' },
        },
      }
    : {
        title: 'Moles and the ABCDE Rule: When to See a Doctor | SKIND',
        description:
          'How to use the ABCDE rule on your moles, why it does not catch everything, who is at risk of melanoma, and when a mole needs to be seen by a dermatologist.',
        keywords:
          'mole, naevus, ABCDE rule, ugly duckling sign, EFG rule, nodular melanoma, melanoma, mole check, dermoscopy, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/regular-mole',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/regular-mole', da: 'https://www.skinchange.dk/da/blog/regular-mole', en: 'https://www.skinchange.dk/en/blog/regular-mole' },
        },
      };
}

export default function RegularMolePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er et modermærke — og hvornår er det farligt?'
    : 'What is a mole — and when is it dangerous?';

  const faqs = isDa
    ? [
        {
          question: 'Hvad er et almindeligt modermærke?',
          answer:
            'Modermærker, også kaldet nævi, er godartede hudvækster, der opstår, når pigmentproducerende celler (melanocytter) samler sig i klynger i stedet for at ligge jævnt fordelt i huden. De er normalt harmløse og giver ingen gener.',
        },
        {
          question: 'Hvordan ser et modermærke ud?',
          answer:
            'Et almindeligt modermærke er en lille, rund eller oval plet, der kan være flad eller hævet, og som har en ensartet farve fra lyserød til brun eller sort. De fleste er mindre end 6 millimeter i diameter, men melanom kan også opstå i mindre modermærker, så størrelsen alene siger ikke, om et modermærke er ufarligt.',
        },
        {
          question: 'Hvem får modermærker?',
          answer:
            'Næsten alle. De fleste modermærker opstår i barndommen og den tidlige voksenalder, og en voksen har typisk mellem 10 og 40. Nye modermærker efter 30–40-årsalderen er usædvanlige, fordi dannelsen af nye nævi normalt er ophørt, og bør derfor vurderes.',
        },
        {
          question: 'Hvornår skal jeg være bekymret for et modermærke?',
          answer:
            'Brug ABCDE-reglen: Asymmetri, Kant (uregelmæssig), Farve (flere nuancer), Diameter (over 6 mm) og Evolution (ændring over tid). Vær også opmærksom på den grimme ælling — et modermærke, der skiller sig ud fra dine øvrige — og på en knude, der er hævet, fast og vokser støt i mere end en måned. Et modermærke, der bløder, klør, gør ondt, skorper eller sårdanner, skal altid ses af en læge.',
        },
      ]
    : [
        {
          question: 'What is a regular mole?',
          answer:
            'Moles, also called naevi, are benign skin growths that form when pigment-producing cells (melanocytes) gather in clusters instead of lying evenly spread through the skin. They are usually harmless and cause no symptoms.',
        },
        {
          question: 'What does a regular mole look like?',
          answer:
            'A regular mole is a small, round or oval spot that can be flat or raised and has an even colour ranging from pink to brown or black. Most are less than 6 millimetres across, but melanoma can also arise in smaller moles, so size alone does not tell you whether a mole is harmless.',
        },
        {
          question: 'Who gets moles?',
          answer:
            'Almost everyone. Most moles appear during childhood and early adulthood, and an adult typically has between 10 and 40. New moles appearing after roughly age 30–40 are unusual, because the formation of new naevi has normally stopped by then, and should be assessed.',
        },
        {
          question: 'When should I be concerned about a mole?',
          answer:
            'Use the ABCDE rule: Asymmetry, Border (irregular), Colour (several shades), Diameter (over 6 mm) and Evolution (change over time). Also watch for the ugly duckling — a mole that stands out from your others — and for a lump that is raised, firm and growing steadily for more than a month. A mole that bleeds, itches, hurts, crusts or ulcerates should always be seen by a doctor.',
        },
      ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Alt om modermærker: hvad de er, ABCDE-reglen og dens begrænsninger, den grimme ælling, EFG-reglen, risikofaktorer for melanom og hvornår du skal søge læge.'
      : 'Everything about moles: what they are, the ABCDE rule and its limits, the ugly duckling sign, the EFG rule, melanoma risk factors and when to see a doctor.',
    image: '/blog-mole.jpg',
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    author: {
      '@type': 'Organization',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      url: 'https://www.skinchange.dk',
    },
    publisher: { '@type': 'Organization', name: 'SKIND', logo: { '@type': 'ImageObject', url: 'https://www.skinchange.dk/SKIND_logo_dark.svg' } },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <Navigation lang={lang} />
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href={`/${lang}`} className="hover:text-[#304ffe]">{isDa ? 'Forside' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-[#304ffe]">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{isDa ? 'Modermærker' : 'Moles'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Godartede Hudvækster' : 'Benign Skin Growths'}</span>
              <span className="text-gray-500 text-sm">{isDa ? '11. april 2026' : 'April 11, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '8 min læsetid' : '8 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {headline}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-mole.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en enkelt hudforandring, der måles med en lineal holdt op mod huden.'
                    : 'Close-up of a single skin lesion being measured with a ruler held against the skin.'
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
                <p className="text-sm text-gray-600">{isDa ? 'Medicinsk redaktion' : 'Medical editorial team'}</p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                <strong>
                  {isDa
                    ? 'Modermærker er en af de mest almindelige hudforandringer, og de fleste voksne har mellem 10 og 40 af dem.'
                    : 'Moles are one of the most common skin changes, and most adults have between 10 and 40 of them.'}
                </strong>{' '}
                {isDa
                  ? 'Langt de fleste er og bliver harmløse. Det, der betyder noget, er at kunne genkende de få, der ikke er det — og at vide, at den regel, de fleste kender, ikke fanger dem alle.'
                  : 'The great majority are harmless and stay that way. What matters is being able to recognise the few that are not — and knowing that the rule most people have heard of does not catch all of them.'}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad et modermærke er, hvordan et normalt modermærke ser ud, hvordan du bruger ABCDE-reglen, hvad reglen overser, hvem der er i risiko for melanom, og hvornår du skal søge læge.'
                  : 'In this article we explain what a mole is, what a normal mole looks like, how to use the ABCDE rule, what that rule misses, who is at risk of melanoma, and when you should see a doctor.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad er et modermærke?' : 'What is a mole?'}</h2>
              <p>
                {isDa
                  ? 'Modermærker, også kaldet nævi, er godartede hudvækster, der opstår, når pigmentproducerende celler (melanocytter) samler sig i klynger i stedet for at ligge jævnt fordelt i huden. Ligger klyngen højt i huden, er modermærket typisk fladt og mørkt; ligger den dybere, er det ofte hævet og lysere. De er normalt harmløse og giver hverken kløe eller smerte.'
                  : 'Moles, also called naevi, are benign skin growths that form when pigment-producing cells (melanocytes) gather in clusters instead of lying evenly spread through the skin. When the cluster sits high in the skin the mole is typically flat and dark; when it sits deeper it is often raised and paler. They are usually harmless and cause neither itching nor pain.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvornår opstår modermærker?' : 'When do moles appear?'}</h3>
              <p>
                {isDa
                  ? 'Nogle få er medfødte, men langt de fleste dukker op i barndommen og teenageårene og bliver færdigdannede i 20- og 30-årsalderen. Hormoner påvirker dem: modermærker kan blive mørkere under graviditet og i puberteten. Efter 30–40-årsalderen holder huden normalt op med at danne nye nævi — og derfor er et helt nyt, pigmenteret modermærke hos en voksen noget, der bør vurderes.'
                  : 'A few are congenital, but the great majority appear during childhood and the teenage years and finish forming in the twenties and thirties. Hormones affect them: moles can darken during pregnancy and puberty. After roughly age 30–40 the skin normally stops producing new naevi — which is why a genuinely new pigmented mole in an adult is something that should be assessed.'}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan ser et normalt modermærke ud?' : 'What does a normal mole look like?'}</h2>
              <p>
                {isDa
                  ? 'Et almindeligt modermærke er en lille, rund eller oval plet med en glat, regelmæssig kant. Det kan være fladt eller hævet, og farven går fra lyserød over lysebrun til mørkebrun eller sort — men den er ensartet inden for det enkelte modermærke. De fleste er mindre end 6 millimeter i diameter, og de ændrer sig kun langsomt, hvis overhovedet.'
                  : 'A regular mole is a small, round or oval spot with a smooth, regular border. It can be flat or raised, and the colour ranges from pink through light brown to dark brown or black — but it is even within the individual mole. Most are less than 6 millimetres across, and they change only slowly, if at all.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvad kan forveksles med et modermærke?' : 'What can be mistaken for a mole?'}</h3>
              <p>
                {isDa ? (
                  <>
                    Den hyppigste forveksling er{' '}
                    <Link href={`/${lang}/blog/seborrheic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seboroisk keratose
                    </Link>{' '}
                    — en godartet, voksagtig vækst, der ser ud, som om den er klistret ovenpå huden, og som bliver almindelig med alderen.
                    Et{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      basalcellekarcinom
                    </Link>{' '}
                    kan også ligne et modermærke, især når det er pigmenteret, men det har typisk en perleagtig, gennemskinnelig kant og
                    bløder eller skorper. Du kan ikke afgøre forskellen med sikkerhed selv — det er derfor, en hudlæge bruger dermatoskop.
                  </>
                ) : (
                  <>
                    The most frequent confusion is with a{' '}
                    <Link href={`/${lang}/blog/seborrheic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seborrhoeic keratosis
                    </Link>{' '}
                    — a benign, waxy growth that looks stuck on top of the skin and becomes common with age. A{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      basal cell carcinoma
                    </Link>{' '}
                    can also resemble a mole, particularly when it is pigmented, but it typically has a pearly, translucent edge and
                    bleeds or crusts. You cannot reliably tell them apart yourself — which is why a dermatologist uses a dermatoscope.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'ABCDE-reglen: hvornår skal du være bekymret?' : 'The ABCDE rule: when should you be concerned?'}</h2>
              <p>
                {isDa
                  ? 'ABCDE-reglen er et enkelt værktøj til at vurdere, om et pigmenteret modermærke bør undersøges nærmere:'
                  : 'The ABCDE rule is a simple tool for judging whether a pigmented mole should be looked at more closely:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'A – Asymmetri:' : 'A – Asymmetry:'}</strong>{' '}
                  {isDa ? 'Den ene halvdel ser anderledes ud end den anden.' : 'One half looks different from the other.'}
                </li>
                <li>
                  <strong>{isDa ? 'B – Kant (border):' : 'B – Border:'}</strong>{' '}
                  {isDa ? 'Kanten er ujævn, takket, udflydende eller uregelmæssig.' : 'The edges are uneven, jagged, blurred or irregular.'}
                </li>
                <li>
                  <strong>{isDa ? 'C – Farve (colour):' : 'C – Colour:'}</strong>{' '}
                  {isDa
                    ? 'Farven varierer inden for modermærket med forskellige nuancer af brun, sort, rød, hvid eller blå.'
                    : 'The colour varies within the mole, with different shades of brown, black, red, white or blue.'}
                </li>
                <li>
                  <strong>{isDa ? 'D – Diameter:' : 'D – Diameter:'}</strong>{' '}
                  {isDa
                    ? 'Større end 6 millimeter (på størrelse med et blyantsviskelæder) — men melanom kan også opstå i mindre modermærker, så brug ikke størrelsen alene som beroligelse.'
                    : 'Larger than 6 millimetres (about the size of a pencil eraser) — though melanoma can and does occur in smaller moles, so do not use size alone to reassure yourself.'}
                </li>
                <li>
                  <strong>{isDa ? 'E – Evolution (udvikling):' : 'E – Evolution:'}</strong>{' '}
                  {isDa
                    ? 'Modermærket ændrer sig i størrelse, form, farve eller overflade over uger til måneder. Dette er det stærkeste enkelttegn.'
                    : 'The mole is changing in size, shape, colour or surface over weeks to months. This is the single strongest sign.'}
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'ABCDE fanger ikke det hele' : 'ABCDE does not catch everything'}</h3>
              <p>
                {isDa ? (
                  <>
                    To ting mere er vigtige. <strong>Den grimme ælling</strong>: de fleste af en persons modermærker ligner hinanden, så et
                    modermærke, der skiller sig ud fra dine øvrige, fortjener opmærksomhed — også selvom det opfylder alle
                    ABCDE-kriterier. Og <strong>EFG-reglen</strong> for nodulært{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      melanom
                    </Link>
                    , som ofte er symmetrisk, ensfarvet og under 6 mm: en knude, der er <strong>E</strong>leveret (hævet),{' '}
                    <strong>F</strong>ast at røre ved og <strong>G</strong>ror støt i mere end en måned, bør undersøges hurtigt uanset
                    farve — også lyserøde eller hudfarvede knuder helt uden pigment.
                  </>
                ) : (
                  <>
                    Two additions matter. The <strong>ugly duckling sign</strong>: most of a person&rsquo;s moles resemble each other, so a
                    mole that stands out as different from your others deserves attention even if it passes every ABCDE test. And the{' '}
                    <strong>EFG rule</strong> for nodular{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      melanoma
                    </Link>
                    , which is often symmetric, evenly coloured and smaller than 6 mm: a lump that is <strong>E</strong>levated,{' '}
                    <strong>F</strong>irm to the touch and <strong>G</strong>rowing steadily for more than a month should be checked
                    promptly, whatever its colour — including pink or skin-coloured lumps with no pigment at all.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvem er i risiko for melanom?' : 'Who is at risk of melanoma?'}</h2>
              <p>
                {isDa
                  ? 'Alle kan få melanom, men risikoen er ikke ens. Hører du til en eller flere af disse grupper, bør du kende din hud særligt godt:'
                  : 'Anyone can develop melanoma, but the risk is not evenly spread. If you belong to one or more of these groups, you should know your own skin particularly well:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Lys hud:' : 'Fair skin:'}</strong>{' '}
                  {isDa
                    ? 'Hudtype I–II, som brænder let og næsten aldrig bliver brun, ofte med fregner, lyse øjne og lyst eller rødt hår.'
                    : 'Fitzpatrick skin types I–II, which burn easily and almost never tan, often with freckles, light eyes and blonde or red hair.'}
                </li>
                <li>
                  <strong>{isDa ? 'Mange modermærker:' : 'Many moles:'}</strong>{' '}
                  {isDa
                    ? 'Mere end 50 modermærker, eller flere atypiske (dysplastiske) nævi, øger risikoen betydeligt.'
                    : 'More than 50 moles, or several atypical (dysplastic) naevi, raises the risk considerably.'}
                </li>
                <li>
                  <strong>{isDa ? 'Melanom i familien:' : 'Melanoma in the family:'}</strong>{' '}
                  {isDa
                    ? 'En førstegradsslægtning — forælder, søskende eller barn — med melanom.'
                    : 'A first-degree relative — parent, sibling or child — with melanoma.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tidligere hudkræft:' : 'Previous skin cancer:'}</strong>{' '}
                  {isDa
                    ? 'Har du haft melanom eller anden hudkræft, er risikoen for et nyt tilfælde forhøjet resten af livet.'
                    : 'If you have had melanoma or another skin cancer, your risk of a new one stays elevated for life.'}
                </li>
                <li>
                  <strong>{isDa ? 'Solskoldninger og solarier:' : 'Sunburn and sunbeds:'}</strong>{' '}
                  {isDa
                    ? 'Solskoldninger med blærer, særligt i barndommen, og brug af solarier øger risikoen markant.'
                    : 'Blistering sunburns, especially in childhood, and the use of sunbeds increase the risk markedly.'}
                </li>
                <li>
                  <strong>{isDa ? 'Svækket immunforsvar:' : 'A weakened immune system:'}</strong>{' '}
                  {isDa
                    ? 'Organtransplanterede og andre i immundæmpende behandling har højere risiko.'
                    : 'Organ transplant recipients and others on immunosuppressive treatment are at higher risk.'}
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvad er et atypisk (dysplastisk) modermærke?' : 'What is an atypical (dysplastic) mole?'}</h3>
              <p>
                {isDa
                  ? 'Et atypisk modermærke er større end de fleste, ofte over 5–6 mm, med udflydende kant og flere farvenuancer. Det er ikke kræft, og det bliver sjældent til kræft i sig selv — men har du mange af dem, er det et tegn på, at din samlede risiko for melanom er øget, og at du bør følges. Din hudlæge afgør, om et enkelt atypisk modermærke skal fjernes eller blot fotograferes og kontrolleres.'
                  : 'An atypical mole is larger than most, often over 5–6 mm, with a blurred border and several shades of colour. It is not cancer, and it rarely turns into cancer itself — but having many of them signals that your overall melanoma risk is raised and that you should be followed up. Your dermatologist decides whether an individual atypical mole is removed or simply photographed and monitored.'}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvornår skal du søge læge?' : 'When should you see a doctor?'}</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Få et modermærke undersøgt ved disse tegn' : '⚠️ Have a mole checked if you notice any of these'}
                </h3>
                <ul className="list-disc pl-6 space-y-3 my-4 text-red-900">
                  <li>{isDa ? 'Et modermærke, der opfylder et eller flere af ABCDE-kriterierne' : 'A mole that meets one or more of the ABCDE criteria'}</li>
                  <li>{isDa ? 'Et modermærke, der skiller sig ud fra alle dine andre' : 'A mole that stands out as different from all your others'}</li>
                  <li>{isDa ? 'Et modermærke, der bløder, klør, bliver ømt, skorper eller sårdanner' : 'A mole that bleeds, itches, becomes painful, crusts or ulcerates'}</li>
                  <li>{isDa ? 'En hævet, fast knude, der vokser i mere end en måned — uanset farve' : 'A raised, firm lump that keeps growing for more than a month — whatever its colour'}</li>
                  <li>
                    {isDa
                      ? 'En ny pigmenteret stribe eller mørk bane i en finger- eller tånegl (subungualt melanom, som ABCDE ikke dækker)'
                      : 'A new pigmented streak or dark band in a fingernail or toenail (subungual melanoma, which ABCDE cannot address)'}
                  </li>
                  <li>{isDa ? 'Et helt nyt modermærke, der dukker op efter cirka 30–40-årsalderen' : 'Any new mole appearing after roughly age 30–40'}</li>
                </ul>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Tidlig opdagelse af melanom redder liv: fjernet i tide er prognosen fremragende, mens et melanom, der har nået at vokse i dybden, er langt vanskeligere at behandle.'
                    : 'Early detection of melanoma saves lives: removed in time the outlook is excellent, whereas a melanoma that has had time to grow deeper is far harder to treat.'}
                </p>
              </div>

              <p>
                {isDa ? (
                  <>
                    En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor
                    hurtigt. Den kan ikke udelukke{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      hudkræft
                    </Link>
                    . En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.
                  </>
                ) : (
                  <>
                    A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It
                    cannot rule out{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      skin cancer
                    </Link>
                    . A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for
                    laboratory analysis.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad kan du selv gøre?' : 'What can you do yourself?'}</h2>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '🔍 Månedlig selvundersøgelse' : '🔍 Monthly self-examination'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Gå huden igennem en gang om måneden i godt lys, gerne med et håndspejl til ryggen. Husk hovedbund, ører, fodsåler, mellem tæerne og under neglene — steder, hvor melanom ofte opdages sent.'
                      : 'Go over your skin once a month in good light, using a hand mirror for your back. Remember the scalp, ears, soles of the feet, between the toes and under the nails — places where melanoma is often found late.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '📷 Tag billeder' : '📷 Take photographs'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Fotografér de modermærker, du holder øje med, i samme lys og med en lineal ved siden af. Hukommelsen er upålidelig — et billede fra for et halvt år siden er det bedste værktøj til at afgøre, om noget har ændret sig.'
                      : 'Photograph the moles you are watching, in the same light and with a ruler beside them. Memory is unreliable — a photo from six months ago is the best tool you have for deciding whether something has changed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '🩺 Dermatoskopi hos hudlægen' : '🩺 Dermoscopy with a dermatologist'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Et dermatoskop forstørrer og gennemlyser huden, så hudlægen ser strukturer, det blotte øje ikke opfanger. Har du mange eller atypiske modermærker, kan billederne gemmes og sammenlignes fra gang til gang.'
                      : 'A dermatoscope magnifies and illuminates the skin so the dermatologist can see structures the naked eye cannot pick up. If you have many or atypical moles, the images can be stored and compared from visit to visit.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '☀️ Beskyt dig mod solen' : '☀️ Protect yourself from the sun'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Undgå solskoldning, brug bredspektret solcreme med SPF 30 eller højere, søg skygge midt på dagen (kl. 12–15), og brug aldrig solarium. Beskyttelse i barndommen betyder mest for risikoen senere i livet.'
                      : 'Avoid getting burnt, use broad-spectrum sunscreen with SPF 30 or higher, seek shade in the middle of the day (12–3 pm) and never use a sunbed. Protection in childhood matters most for the risk later in life.'}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Skal alle modermærker fjernes?' : 'Should all moles be removed?'}</h3>
              <p>
                {isDa
                  ? 'Nej. Et normalt modermærke skal ikke fjernes forebyggende, og antallet af modermærker falder ikke risikoen ved at fjerne nogle af dem. Bliver et modermærke fjernet på grund af mistanke, skæres det ud i sin helhed og sendes til mikroskopisk undersøgelse. Brænd eller skrab aldrig et modermærke væk selv, og brug ikke såkaldte fjernelsespenne eller syrer fra nettet: du ødelægger vævet, så det ikke kan undersøges, og du fjerner ikke det, der eventuelt sidder i dybden.'
                  : 'No. A normal mole does not need preventive removal, and taking moles off does not lower your risk. When a mole is removed because of suspicion, it is excised whole and sent for microscopic examination. Never burn or scrape a mole off yourself, and do not use so-called mole removal pens or acids bought online: they destroy the tissue so it cannot be examined, and they do not remove whatever may sit deeper down.'}
              </p>

              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Modermærker klassificeres som 2F20, melanocytært nævus, i ICD-11, den internationale sygdomsklassifikation fra WHO. Det almindelige, erhvervede modermærke har koden 2F20.0 og det atypiske 2F20.1. Melanom er en anden diagnose med sin egen kode, 2C30.'
                    : 'Moles are classified as 2F20, melanocytic naevus, in ICD-11, the WHO International Classification of Diseases. The common acquired mole is coded 2F20.0 and the atypical mole 2F20.1. Melanoma is a separate diagnosis with its own code, 2C30.'}
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-bold text-lg text-[#1a237e] mb-2">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}</h3>
                <p className="mb-6">
                  {isDa
                    ? 'Er du bekymret for et modermærke, kan du uploade billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge. Vurderingen afgør, hvor hurtigt du skal ses ved fysisk fremmøde: ser modermærket mistænkeligt ud, bliver du henvist til undersøgelse med dermatoskop og eventuel fjernelse. En beroligende vurdering erstatter ikke en fysisk undersøgelse, hvis modermærket bliver ved med at ændre sig.'
                    : 'If you are worried about a mole, you can upload photos via the SKIND app and get an assessment from a certified dermatologist. The assessment tells you how quickly you need to be seen in person: if the mole looks suspicious you will be referred for examination with a dermatoscope and possible excision. A reassuring assessment is not a substitute for in-person review if the mole keeps changing.'}
                </p>
                <Link href={`/${lang}/download`} className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#1a237e] rounded-full font-semibold hover:bg-white/90 transition-colors">
                  {isDa ? 'Download appen' : 'Download the app'}
                </Link>
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
