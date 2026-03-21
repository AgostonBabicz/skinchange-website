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
        title: 'Hvad er Lichen Planus? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om lichen planus: hvad det er, hvordan det ser ud, hvem der rammes, og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'lichen planus, hudlidelse, kløe, lilla pletter, behandling, eksem, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/lichen-planus',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/lichen-planus',
            da: 'https://www.skinchange.dk/da/blog/lichen-planus',
            en: 'https://www.skinchange.dk/en/blog/lichen-planus',
          },
        },
      }
    : {
        title: 'What is Lichen Planus? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about lichen planus: what it is, how it looks, who gets it and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'lichen planus, skin condition, itchy, purple patches, treatment, eczema, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/lichen-planus',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/lichen-planus',
            da: 'https://www.skinchange.dk/da/blog/lichen-planus',
            en: 'https://www.skinchange.dk/en/blog/lichen-planus',
          },
        },
      };
}

export default function LichenPlanusPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Lichen Planus? Årsager, Symptomer og Behandling'
      : 'What is Lichen Planus? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til lichen planus: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to lichen planus: what it is, causes, symptoms and treatment options.',
    image: 'https://www.skinchange.dk/blog/lichen-planus.jpg',
    datePublished: '2026-03-21',
    dateModified: '2026-03-21',
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
            name: 'Hvad er lichen planus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lichen planus er en kronisk, inflammatorisk hudlidelse, der forårsager lilla, fladtoppede, kløende knopper på huden. Den præcise årsag er ukendt, men det menes at være en autoimmun reaktion, hvor immunsystemet fejlagtigt angriber sunde hudceller.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser lichen planus ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lichen planus viser sig typisk som lilla, fladtoppede knopper med fine, hvide linjer på overfladen (Wickham-striber). Knopperne kan være intense at kløe og forekomme overalt på kroppen, men ses oftest på håndled, ankler, lænd og mundslimhinden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvem får lichen planus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lichen planus kan ramme alle i alle aldre, men det forekommer hyppigst hos voksne mellem 30 og 60 år og er mere almindeligt hos kvinder. Personer med autoimmune sygdomme har en øget risiko.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for lichen planus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg lægehjælp hvis udslættet er smertefuldt eller påvirker din livskvalitet, hvis det rammer munden eller kønsorganerne, eller hvis du oplever hårtab eller negleforandringer. SKIND giver dig adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is lichen planus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lichen planus is a chronic, inflammatory skin condition causing purple, flat-topped, itchy bumps on the skin. The exact cause is unknown, but it is thought to be an autoimmune reaction where the immune system mistakenly attacks healthy skin cells.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does lichen planus look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lichen planus typically presents as purple, flat-topped bumps with fine, white lines on the surface (Wickham striae). The bumps can be intensely itchy and appear anywhere on the body, but are most common on the wrists, ankles, lower back and oral mucosa.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who gets lichen planus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lichen planus can affect anyone at any age, but it most commonly occurs in adults between 30 and 60 years old and is more prevalent in women. People with autoimmune conditions have an elevated risk.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for lichen planus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek medical help if the rash is painful or affecting your quality of life, if it involves the mouth or genitals, or if you experience hair loss or nail changes. SKIND gives you access to a dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Lichen Planus?' : 'What is Lichen Planus?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">21. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Lichen Planus? Årsager, Symptomer og Behandling'
                : 'What is Lichen Planus? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#6a1b9a] to-[#4a148c]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=80"
                alt={isDa ? 'Lichen planus – hudlidelse behandling' : 'Lichen planus – skin condition treatment'}
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a148c]/60 to-transparent" />
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
                    <strong>Lichen planus er en kronisk, inflammatorisk hudlidelse</strong>, der
                    forårsager karakteristiske lilla, fladtoppede knopper, som ofte er intense at
                    kløe. Selvom tilstanden er relativt almindelig, kan den være forvirrende for dem,
                    der oplever den første gang.
                  </>
                ) : (
                  <>
                    <strong>Lichen planus is a chronic, inflammatory skin condition</strong> that
                    causes characteristic purple, flat-topped bumps that are often intensely itchy.
                    While the condition is relatively common, it can be confusing for those
                    experiencing it for the first time.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad lichen planus er, hvordan det ser ud, hvem der rammes, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article we explain exactly what lichen planus is, how it looks, who gets it, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is lichen planus */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er lichen planus?' : 'What is lichen planus?'}
              </h2>
              <p>
                {isDa
                  ? 'Lichen planus er en kronisk, inflammatorisk hudlidelse, der menes at være en autoimmun reaktion. Det vil sige, at kroppens eget immunsystem fejlagtigt angriber hudcellerne, hvilket udløser betændelse og den karakteristiske udbrudsform.'
                  : 'Lichen planus is a chronic, inflammatory skin condition thought to be an autoimmune reaction. This means the body\'s own immune system mistakenly attacks skin cells, triggering inflammation and the characteristic rash pattern.'}
              </p>
              <p>
                {isDa
                  ? 'Tilstanden kan påvirke huden, mundslimhinden, kønsorganerne, hårbunden og neglene. Lichen planus er ikke smitsomt og kan ikke spredes til andre mennesker gennem fysisk kontakt.'
                  : 'The condition can affect the skin, oral mucosa, genitals, scalp and nails. Lichen planus is not contagious and cannot be spread to other people through physical contact.'}
              </p>
              <p>
                {isDa
                  ? 'Lichen planus er klassificeret under ICD-11 som EA91. Behandlingen sigter mod at lindre symptomer, da der ikke findes nogen kur.'
                  : 'Lichen planus is classified under ICD-11 as EA91. Treatment aims to relieve symptoms, as there is no cure.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser lichen planus ud?' : 'What does lichen planus look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Det klassiske tegn på lichen planus er de såkaldte "6 P\'er":'
                  : 'The classic sign of lichen planus is the "6 Ps":'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>Purple (Lilla):</strong>{' '}
                  {isDa
                    ? 'Farven er karakteristisk mørkt rød til lilla.'
                    : 'The colour is characteristically dark red to purple.'}
                </li>
                <li>
                  <strong>Polygonal (Polygonal):</strong>{' '}
                  {isDa
                    ? 'Knopperne har uregelmæssige, fladtoppede kanter.'
                    : 'The bumps have irregular, flat-topped edges.'}
                </li>
                <li>
                  <strong>Papules (Papler):</strong>{' '}
                  {isDa
                    ? 'Små, hævede knopper der kan være enkeltstående eller danne grupper.'
                    : 'Small, raised bumps that may be solitary or form groups.'}
                </li>
                <li>
                  <strong>Pruritic (Kløende):</strong>{' '}
                  {isDa
                    ? 'Intens kløe er et af de mest fremtrædende symptomer.'
                    : 'Intense itching is one of the most prominent symptoms.'}
                </li>
                <li>
                  <strong>Planes (Fladtoppede):</strong>{' '}
                  {isDa
                    ? 'Overfladen er typisk glat og flad.'
                    : 'The surface is typically smooth and flat.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Et andet karakteristisk træk er de såkaldte Wickham-striber – fine, hvide, netlignende linjer på overfladen af knopperne. Disse linjer er ofte synlige, når manDry the affected area with a magnifying glass.'
                  : 'Another characteristic feature is Wickham striae — fine, white, lace-like lines on the surface of the bumps. These lines are often visible when the affected area is examined with a magnifying glass.'}
              </p>
              <p>
                {isDa
                  ? 'Lichen planus kan også påvirke slimhinder (især munden), hvor det viser sig som hvidlige, netlignende mønstre uden typisk kløe. Negleangreb kan give riller, fortynding og i værste fald tab af neglen.'
                  : 'Lichen planus can also affect mucous membranes (especially the mouth), where it appears as white, lace-like patterns without typical itching. Nail involvement can cause ridges, thinning and in severe cases loss of the nail.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår lichen planus?' : 'Why does lichen planus happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag til lichen planus er ukendt, men forskellige faktorer menes at spille en rolle i at udløse den autoimmune reaktion:'
                  : 'The exact cause of lichen planus is unknown, but various factors are thought to play a role in triggering the autoimmune reaction:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Autoimmun reaktion' : 'Autoimmune reaction'}
              </h3>
              <p>
                {isDa
                  ? 'Forskning tyder på, at T-lymfocytter (en type hvide blodlegemer) angriber hudcellerne i et forsøg på at eliminere what that perceives as foreign — selvom der ikke er noget faktisk fremmed stof til stede.'
                  : 'Research suggests that T-lymphocytes (a type of white blood cell) attack skin cells in an attempt to eliminate what it perceives as foreign — even though there is no actual foreign substance present.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Lægemidler og kemikalier' : 'Medications and chemicals'}
              </h3>
              <p>
                {isDa
                  ? 'Visse lægemidler kan udløse lichen planus-agtige udbrud. Almindelige syndere inkluderer blodtryksmedicin (ACE-hæmmere), antiinflammatoriske midler, og nogle typer kemoterapi. Dentalt amalgam kan udløse oral lichen planus.'
                  : 'Certain medications can trigger lichen planus-like eruptions. Common culprits include blood pressure medications (ACE inhibitors), anti-inflammatory drugs, and some types of chemotherapy. Dental amalgam can trigger oral lichen planus.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hepatitis C' : 'Hepatitis C'}
              </h3>
              <p>
                {isDa
                  ? 'Der er en dokumenteret sammenhæng mellem hepatitis C-infektion og lichen planus. Patienter med mundslimhindelichen planus bør screenes for hepatitis C.'
                  : 'There is a documented association between hepatitis C infection and lichen planus. Patients with oral lichen planus should be screened for hepatitis C.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Stress' : 'Stress'}
              </h3>
              <p>
                {isDa
                  ? 'Stress kan forværre eksisterende lichen planus og i nogle tilfælde udløse det første udbrud. Stresshåndtering er en vigtig del af behandlingen.'
                  : 'Stress can worsen existing lichen planus and in some cases trigger the first outbreak. Stress management is an important part of treatment.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får lichen planus?' : 'Who gets lichen planus?'}
              </h2>
              <p>
                {isDa
                  ? 'Lichen planus rammer op mod 1–2% af befolkningen på verdensplan:'
                  : 'Lichen planus affects up to 1–2% of the population worldwide:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Alder:' : 'Age:'}</strong>{' '}
                  {isDa
                    ? 'Tilstanden forekommer hyppigst hos voksne mellem 30 og 60 år.'
                    : 'The condition occurs most frequently in adults between 30 and 60 years old.'}
                </li>
                <li>
                  <strong>{isDa ? 'Køn:' : 'Gender:'}</strong>{' '}
                  {isDa
                    ? 'Kvinder er lidt oftere ramt end mænd, især når det gælder oral lichen planus.'
                    : 'Women are slightly more frequently affected than men, especially when it comes to oral lichen planus.'}
                </li>
                <li>
                  <strong>{isDa ? 'Genetik:' : 'Genetics:'}</strong>{' '}
                  {isDa
                    ? 'Familiehistorie af lichen planus eller andre autoimmune sygdomme øger risikoen.'
                    : 'A family history of lichen planus or other autoimmune diseases increases the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Andre sygdomme:' : 'Other diseases:'}</strong>{' '}
                  {isDa
                    ? 'Personer med hepatitis C, HIV eller andre autoimmune tilstande har forhøjet risiko.'
                    : 'People with hepatitis C, HIV or other autoimmune conditions have an elevated risk.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved lichen planus?' : 'What can you do about lichen planus?'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom der ikke findes nogen kur, kan lichen planus ofte holdes under kontrol med den rette behandling. Behandlingen afhænger af sværhedsgraden og den berørte kropsdel:'
                  : 'While there is no cure, lichen planus can often be managed with the right treatment. Treatment depends on severity and the affected body area:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topiske kortikosteroider' : '💊 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kortikosteroidcremer og -salver er førstevalgsbehandling mod kløe og inflammation. De reducerer immunresponsen i huden og lindrer symptomerne.'
                      : 'Corticosteroid creams and ointments are the first-line treatment for itching and inflammation. They reduce the immune response in the skin and relieve symptoms.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Calcineurinhæmmere' : '🩺 Calcineurin inhibitors'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremere med tacrolimus eller pimecrolimus bruges ofte til ansigt og slimhinder, hvor steroider kan være uegnede.'
                      : 'Creams with tacrolimus or pimecrolimus are often used on the face and mucous membranes, where steroids may be unsuitable.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💡 Lysbehandling (fototerapi)' : '💡 Light therapy (phototherapy)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Narrowband UVB-lysbehandling kan være effektiv for udbredt lichen planus på kroppen.'
                      : 'Narrowband UVB light therapy can be effective for widespread lichen planus on the body.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Orale retinoidere' : '💊 Oral retinoids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'I svære eller behandlingsresistente tilfælde kan orale retinoidere (isotretinoin) overvejes af en hudlæge.'
                      : 'In severe or treatment-resistant cases, oral retinoids (isotretinoin) may be considered by a dermatologist.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🥗 Stresshåndtering og livsstil' : '🥗 Stress management and lifestyle'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Da stress kan forværre lichen planus, kan afslapningsteknikker, motion og tilstrækkelig søvn hjælpe med at reducere udbrud.'
                      : 'Since stress can worsen lichen planus, relaxation techniques, exercise and adequate sleep can help reduce flare-ups.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Lichen planus er klassificeret som EA91 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en inflammatorisk tilstand præget af pruritiske, lilla, polygonale papler, der ofte behandles med topiske steroider og orale retinoidere.'
                    : "Lichen planus is classified as EA91 in the WHO's International Classification of Diseases (ICD-11). It is an inflammatory condition presenting with pruritic, purple, polygonal papules, often managed with topical steroids and oral retinoids."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er lichen planus farligt?' : 'Is lichen planus dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Lichen planus er generelt ikke farligt, men oral lichen planus (i munden) har en lille risiko for at udvikle sig til mundkræft over tid. Kontakt en læge ved mundgener.'
                      : 'Lichen planus is generally not dangerous, but oral lichen planus (in the mouth) carries a small risk of developing into oral cancer over time. Contact a doctor for mouth symptoms.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Hvad er Wickham-striber?'
                      : 'What are Wickham striae?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Wickham-striber er de karakteristiske fine, hvide, netlignende linjer, der kan ses på overfladen af lichen planus-knopper. De er opkaldt efter den franske hudlæge, der først beskrev dem.'
                      : 'Wickham striae are the characteristic fine, white, lace-like lines visible on the surface of lichen planus bumps. They are named after the French dermatologist who first described them.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan lichen planus forsvinde af sig selv?' : 'Can lichen planus go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Mild lichen planus kan spontant forsvinde inden for 1–2 år. Behandlingen fremskynder lindringen og reducerer risikoen for komplikationer som ardannelse og negleforandringer.'
                      : 'Mild lichen planus can spontaneously resolve within 1–2 years. Treatment speeds up relief and reduces the risk of complications such as scarring and nail changes.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Hvornår skal jeg kontakte en hudlæge?'
                      : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge hvis udslættet er smertefuldt, påvirker din mund eller kønsorganer, forårsager hårtab eller negleforandringer, eller ikke forbedres med håndkøbsprodukter.'
                      : 'Contact a dermatologist if the rash is painful, affects your mouth or genitals, causes hair loss or nail changes, or does not improve with over-the-counter products.'}
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
