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
        title: 'Hvad er Rosacea? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om rosacea: hvad det er, hvorfor det opstår, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'hvad er rosacea, rosacea symptomer, rosacea årsager, rosacea behandling, hudlæge rosacea, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/rosacea',
        },
      }
    : {
        title: 'What is Rosacea? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about rosacea: what it is, why it happens, who gets it and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'what is rosacea, rosacea symptoms, rosacea causes, rosacea treatment, dermatologist rosacea, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/rosacea',
        },
      };
}

export default function RosaceaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Rosacea? Årsager, Symptomer og Behandling'
      : 'What is Rosacea? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til rosacea: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to rosacea: what it is, causes, symptoms and treatment options.',
    image: 'https://www.skinchange.dk/blog/rosacea.jpg',
    datePublished: '2026-03-13',
    dateModified: '2026-03-13',
    author: {
      '@type': 'Organization',
      name: 'SkinChange.AI',
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
            name: 'Hvad er rosacea?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rosacea er en kronisk hudlidelse, der forårsager vedvarende rødme, synlige blodkar og undertiden bumser eller pustler i ansigtet. Det er ikke smitsomt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er rosacea smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, rosacea er ikke smitsomt. Det er en kronisk inflammatorisk hudlidelse forårsaget af en kombination af genetiske faktorer og miljøudløsere.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for rosacea?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg hjælp hvis du oplever vedvarende rødme i ansigtet, synlige blodkar eller bumser der ikke reagerer på skånsom hudpleje. En hudlæge via SKIND kan stille diagnosen og anbefale den rette behandling inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is rosacea?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rosacea is a chronic skin condition that causes persistent redness, visible blood vessels and sometimes bumps or pustules on the face. It is not contagious.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is rosacea contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, rosacea is not contagious. It is a chronic inflammatory skin condition caused by a combination of genetic factors and environmental triggers.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for rosacea?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek help if you experience persistent facial redness, visible blood vessels or bumps that do not respond to gentle skincare. A dermatologist via SKIND can diagnose and recommend the right treatment within 48 hours.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Rosacea?' : 'What is Rosacea?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">13. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Rosacea? Årsager, Symptomer og Behandling'
                : 'What is Rosacea? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1200&q=80"
                alt={isDa ? 'Rosacea – ansigtsrødme og behandling' : 'Rosacea – facial redness and treatment'}
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
                    <strong>Rosacea er en kronisk hudlidelse, der rammer millioner af mennesker verden over</strong> –
                    primært voksne med lys hud. Den er karakteriseret ved vedvarende rødme i ansigtet, synlige
                    blodkar og undertiden bumser, der let forveksles med acne.
                  </>
                ) : (
                  <>
                    <strong>Rosacea is a chronic skin condition affecting millions of people worldwide</strong> —
                    primarily fair-skinned adults. It is characterised by persistent facial redness, visible blood
                    vessels and sometimes bumps that are easily mistaken for acne.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad rosacea er, hvad der forårsager det, hvem der er i risiko, og hvad der kan gøres ved det.'
                  : 'In this article we explain exactly what rosacea is, what causes it, who is at risk, and what can be done about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is rosacea */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er rosacea?' : 'What is rosacea?'}
              </h2>
              <p>
                {isDa
                  ? 'Rosacea (ICD-11: ED90.0) er en kronisk betændelsestilstand i huden, der primært rammer ansigtet. Den forårsager rødme, synlige blodkar og undertiden bumser eller pustler. Selvom tilstanden ikke er smitsom, kan den være vedvarende og frustrerende for dem, der rammes.'
                  : 'Rosacea (ICD-11: ED90.0) is a chronic inflammatory skin condition that primarily affects the face. It causes redness, visible blood vessels and sometimes bumps or pustules. Although the condition is not contagious, it can be persistent and frustrating for those affected.'}
              </p>
              <p>
                {isDa
                  ? 'Rosacea forveksles ofte med acne, solforbrænding eller almindelig rødme – men det er en distinkt tilstand, der kræver specifik behandling. Ubehandlet kan den forværres over tid.'
                  : 'Rosacea is often confused with acne, sunburn or general flushing — but it is a distinct condition that requires specific management. Left untreated, it can worsen over time.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser rosacea ud?' : 'What does rosacea look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Rosacea kan variere i sværhedsgrad og udseende fra person til person. De mest almindelige tegn er:'
                  : 'Rosacea can vary in severity and appearance from person to person. The most common signs are:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Rødme og flushing i midten af ansigtet:' : 'Flushing and redness of the central face:'}</strong>{' '}
                  {isDa
                    ? 'Det første og mest hyppige tegn – kinderne og næseregionen bliver røde. Rødmen kan komme og gå i starten, men kan med tiden blive permanent.'
                    : 'The first and most frequent sign — the cheeks and nose area become red. The flushing may come and go initially, but over time can become permanent.'}
                </li>
                <li>
                  <strong>{isDa ? 'Synlige blodkar (telangiektasi):' : 'Visible blood vessels (telangiectasia):'}</strong>{' '}
                  {isDa
                    ? 'Tynde, røde årestreger på kinderne og næsen. Disse opstår fordi de overfladiske blodkar udvider sig vedvarende.'
                    : 'Thin, red thread-like veins on the cheeks and nose. These occur because the superficial blood vessels dilate persistently.'}
                </li>
                <li>
                  <strong>{isDa ? 'Røde knopper og pustler:' : 'Red bumps and pustules:'}</strong>{' '}
                  {isDa
                    ? 'Kleine, røde papler (knopper) der kan ligne acne, og i nogle tilfælde pustler med pus. Disse skyldes betændelse i huden.'
                    : 'Small, red papules (bumps) that can resemble acne, and in some cases pustules containing pus. These are caused by skin inflammation.'}
                </li>
                <li>
                  <strong>{isDa ? 'Rhinophyma (fortykkelse af næsen):' : 'Rhinophyma (thickening of the nose):'}</strong>{' '}
                  {isDa
                    ? 'I sjældne, ubehandlede tilfælde kan næsehuden blive tyk og klumpet. Dette ses primært hos mænd.'
                    : 'In rare, untreated cases the skin on the nose can become thick and bumpy. This is seen primarily in men.'}
                </li>
                <li>
                  <strong>{isDa ? 'Øjenirritation (okulær rosacea):' : 'Eye irritation (ocular rosacea):'}</strong>{' '}
                  {isDa
                    ? 'Brændende, tørre og røde øjne kan forekomme hos op til 50% af rosacea-patienter – og kan somme tider opstå før hudtegnene.'
                    : 'Burning, dry and bloodshot eyes can occur in up to 50% of rosacea patients — and can sometimes appear before the skin signs.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår rosacea?' : 'Why does rosacea happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag til rosacea er endnu ikke fuldt forstået, men forskning peger på en kombination af faktorer:'
                  : 'The exact cause of rosacea is not yet fully understood, but research points to a combination of factors:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Overaktive blodkar i ansigtet' : 'Overactive blood vessels in the face'}
              </h3>
              <p>
                {isDa
                  ? 'Blodkarrene i ansigtet udvider sig let ved rosacea, hvilket fører til den karakteristiske rødme og flushing. Denne reaktion kan udløses af varme, motion, alkohol, krydret mad og følelsesmæssigt stress.'
                  : 'The blood vessels in the face dilate easily in rosacea, causing the characteristic redness and flushing. This reaction can be triggered by heat, exercise, alcohol, spicy food and emotional stress.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Betændelse og immunreaktioner' : 'Inflammation and immune responses'}
              </h3>
              <p>
                {isDa
                  ? 'Udløsere som sollys, visse fødevarer og hudmider (Demodex) kan aktivere immunsystemet og skabe en betændelsesreaktion i huden. Demodex-miderne, der lever naturligt i hårfolliklerne, er fundet i større antal hos rosacea-patienter.'
                  : 'Triggers such as sunlight, certain foods and skin mites (Demodex) can activate the immune system and create an inflammatory reaction in the skin. Demodex mites, which live naturally in hair follicles, are found in higher numbers in rosacea patients.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik og tarmbakterier' : 'Genetics and gut bacteria'}
              </h3>
              <p>
                {isDa
                  ? 'Rosacea løber i familier, hvilket tyder på en genetisk disposition. Forskning tyder desuden på, at ubalancer i tarmbakterierne kan spille en rolle – særligt er der fundet en sammenhæng med Helicobacter pylori-infektion, selvom forskningen stadig pågår.'
                  : 'Rosacea runs in families, suggesting a genetic predisposition. Research also indicates that imbalances in gut bacteria may play a role — a connection with Helicobacter pylori infection has been identified in particular, though research is ongoing.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får rosacea?' : 'Who gets rosacea?'}
              </h2>
              <p>
                {isDa
                  ? 'Rosacea rammer ikke tilfældigt – bestemte grupper er mere udsatte end andre:'
                  : 'Rosacea does not strike randomly — certain groups are more susceptible than others:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Lys hud og lyse øjne/hår:' : 'Fair skin and light eyes/hair:'}</strong>{' '}
                  {isDa
                    ? 'Rosacea er mest udbredt hos keltisk og nordeuropæisk afstamning med lys hud. Skandinavere og irere er statistisk set i højere risiko.'
                    : 'Rosacea is most prevalent in people of Celtic and Northern European descent with fair skin. Scandinavians and Irish people are statistically at higher risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne mellem 40 og 50 år:' : 'Adults between 40 and 50 years old:'}</strong>{' '}
                  {isDa
                    ? 'Selvom rosacea kan opstå i alle aldre, er det hyppigst hos voksne i denne aldersgruppe. Kvinder rammes oftere end mænd, men mænd udvikler typisk mere alvorlige former.'
                    : 'Although rosacea can occur at any age, it is most frequent in adults in this age group. Women are affected more often than men, but men typically develop more severe forms.'}
                </li>
                <li>
                  <strong>{isDa ? 'Familiehistorie med rosacea:' : 'Family history of rosacea:'}</strong>{' '}
                  {isDa
                    ? 'Har et eller begge forældre rosacea, er risikoen for selv at udvikle tilstanden markant forhøjet.'
                    : 'If one or both parents have rosacea, the risk of developing the condition yourself is markedly increased.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved rosacea?' : 'What can you do about rosacea?'}
              </h2>
              <p>
                {isDa
                  ? 'Rosacea kan ikke helbredes, men symptomerne kan effektivt håndteres med den rette behandling og livsstilsændringer:'
                  : 'Rosacea cannot be cured, but its symptoms can be effectively managed with the right treatment and lifestyle changes:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topisk medicin' : '💊 Topical medications'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Metronidazol-creme og azelainsyre er de mest brugte receptpligtige topiske behandlinger. De reducerer betændelse, rødme og knopper.'
                      : 'Metronidazole cream and azelaic acid are the most commonly used prescription topical treatments. They reduce inflammation, redness and bumps.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Oral antibiotika' : '🩺 Oral antibiotics'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Antibiotika som doxycyklin bruges i moderate til svære tilfælde, primært for deres antiinflammatoriske effekt fremfor den antibakterielle.'
                      : 'Antibiotics such as doxycycline are used in moderate to severe cases, primarily for their anti-inflammatory effect rather than their antibacterial action.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '✨ Laserbehandling' : '✨ Laser therapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Pulserende lysbehandling (IPL) og laser kan reducere synlige blodkar og vedvarende rødme. Det er et effektivt supplement til medicinsk behandling.'
                      : 'Pulsed light (IPL) and laser treatments can reduce visible blood vessels and persistent redness. It is an effective complement to medical treatment.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🌿 Skånsom hudpleje' : '🌿 Gentle skincare'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Undgå skrappe rensere og skrubbeprodukter. Brug milde, parfumefri produkter og en god solcreme (SPF 30+) – sollys er en af de hyppigste udløsere.'
                      : 'Avoid harsh cleansers and scrubs. Use gentle, fragrance-free products and a good sunscreen (SPF 30+) — sunlight is one of the most common triggers.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚫 Identificer og undgå udløsere' : '🚫 Identify and avoid triggers'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Almindelige udløsere inkluderer stærkt krydret mad, alkohol, varme drikke, intense temperaturskift, stress og visse hudplejeprodukter. Før en dagbog for at kortlægge dine personlige udløsere.'
                      : 'Common triggers include spicy food, alcohol, hot drinks, intense temperature changes, stress and certain skincare products. Keep a diary to map your personal triggers.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Rosacea er klassificeret som ED90.0 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved kronisk ansigtserytem og undertiden papler eller pustler. Behandles med topisk metronidazol, azelainsyre og orale antibiotika.'
                    : "Rosacea is classified as ED90.0 in the WHO's International Classification of Diseases (ICD-11). It is characterised by chronic facial erythema and sometimes papules or pustules. Managed with topical metronidazole, azelaic acid and oral antibiotics."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er rosacea farligt?' : 'Is rosacea dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Rosacea er ikke livstruende, men ubehandlet kan det forværres med tiden og påvirke selvtillid og livskvalitet markant. Okulær rosacea kan i sjældne tilfælde skade synet, hvis det ikke behandles.'
                      : 'Rosacea is not life-threatening, but left untreated it can worsen over time and significantly affect self-confidence and quality of life. Ocular rosacea can in rare cases damage vision if left untreated.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan rosacea forveksles med acne?' : 'Can rosacea be confused with acne?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, rosacea-bumser ligner acne, men der er vigtige forskelle: rosacea ledsages typisk af rødme og flushing, er centreret om næsen og kinderne, og der ses ingen hudorme. Acne-produkter kan forværre rosacea, så korrekt diagnose er vigtig.'
                      : 'Yes, rosacea bumps resemble acne, but there are important differences: rosacea is typically accompanied by redness and flushing, is centred on the nose and cheeks, and there are no blackheads. Acne products can worsen rosacea, so correct diagnosis is important.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge ved vedvarende ansigtsrødme, synlige blodkar, bumser der ligner acne, eller irriterede øjne uden oplagt årsag. Jo tidligere behandlingen starter, jo bedre kan symptomerne holdes i skak.'
                      : 'Contact a dermatologist for persistent facial redness, visible blood vessels, acne-like bumps, or irritated eyes without an obvious cause. The earlier treatment begins, the better the symptoms can be kept under control.'}
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
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig diagnose og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal diagnosis and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
