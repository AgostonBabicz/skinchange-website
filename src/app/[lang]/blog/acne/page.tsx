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
        title: 'Hvad er Acne? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om acne: hvad det er, hvorfor det opstår, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'hvad er acne, acne symptomer, acne årsager, acne behandling, hudlæge acne, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/acne',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/acne',
            da: 'https://www.skinchange.dk/da/blog/acne',
            en: 'https://www.skinchange.dk/en/blog/acne',
          },
        },
      }
    : {
        title: 'What is Acne? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about acne: what it is, why it happens, who gets it and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'what is acne, acne symptoms, acne causes, acne treatment, dermatologist acne, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/acne',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/acne',
            da: 'https://www.skinchange.dk/da/blog/acne',
            en: 'https://www.skinchange.dk/en/blog/acne',
          },
        },
      };
}

export default function AcnePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Acne? Årsager, Symptomer og Behandling'
      : 'What is Acne? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til acne: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to acne: what it is, causes, symptoms and treatment options.',
    image: '/blog-acne.jpg',
    datePublished: '2025-03-12',
    dateModified: '2025-03-12',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#peter-bjerring',
      name: 'Peter Bjerring',
      jobTitle: isDa ? 'Speciallæge i hudsygdomme' : 'Consultant Dermatologist',
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
            name: 'Hvad er acne?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Acne er en almindelig hudlidelse, der påvirker talgkirtler og hårfollikkler. Den forårsager hudorme, bumser og dybere knuder afhængigt af sværhedsgraden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er acne smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, acne er ikke smitsomt. Det skyldes interne faktorer som hormoner, genetik og bakterier på din egen hud.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for acne?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg hjælp hvis håndkøbsprodukter ikke hjælper efter 2-3 måneder, hvis du udvikler ar, eller hvis acnen påvirker dit selvværd. SKIND giver dig adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is acne?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Acne is a common skin condition affecting oil glands and hair follicles. It causes blackheads, whiteheads, pimples and sometimes deeper painful bumps depending on severity.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is acne contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, acne is not contagious. It is caused by internal factors such as hormones, genetics and bacteria on your own skin.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for acne?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek help if over-the-counter products are not working after 2-3 months, if you develop scarring, or if acne is affecting your self-esteem. SKIND gives you access to a dermatologist within 48 hours.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Acne?' : 'What is Acne?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">12. {isDa ? 'marts' : 'March'} 2025</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Acne? Årsager, Symptomer og Behandling'
                : 'What is Acne? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-acne.jpg"
                alt={isDa ? 'Acne – hudlidelse behandling' : 'Acne – skin condition treatment'}
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
                    <strong>Acne er en af de mest udbredte hudlidelser i verden</strong>, der påvirker millioner af
                    mennesker – fra teenagere til voksne. På trods af hvor almindelig den er, kan acne have stor
                    indflydelse på selvtillid og livskvalitet.
                  </>
                ) : (
                  <>
                    <strong>Acne is one of the most common skin conditions in the world</strong>, affecting millions
                    of people — from teenagers to adults. Despite how common it is, acne can have a significant
                    impact on self-confidence and quality of life.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad acne er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what acne is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is acne */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er acne?' : 'What is acne?'}
              </h2>
              <p>
                {isDa
                  ? 'Acne (acne vulgaris) er en kronisk hudlidelse, der opstår i talgkirtler og hårfollikkler. Disse kirtler producerer talg – et naturligt fedt der beskytter og fugter huden. Når talgkirtlerne overproducerer, og døde hudceller tilstopper porerne, opstår der et miljø, hvor bakterier trives og forårsager betændelse.'
                  : 'Acne (acne vulgaris) is a chronic skin condition that occurs in the oil glands (sebaceous glands) and hair follicles. These glands produce sebum — a natural oil that protects and moisturises the skin. When the oil glands overproduce and dead skin cells clog the pores, an environment is created where bacteria thrive and cause inflammation.'}
              </p>
              <p>
                {isDa
                  ? 'Acne er ikke smitsomt og er ikke forårsaget af dårlig hygiejne, selvom renlighed kan hjælpe med at håndtere det.'
                  : 'Acne is not contagious and is not caused by poor hygiene, although cleanliness can help manage it.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser acne ud?' : 'What does acne look like?'}
              </h2>
              <p>{isDa ? 'Acne kan vise sig på mange måder:' : 'Acne can appear in many forms:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Hudorme og hvide knopper:' : 'Blackheads and whiteheads:'}</strong>{' '}
                  {isDa
                    ? 'Tilstoppede porer på grund af overskydende olie og døde hudceller. Hudorme er åbne og sorte i farven; hvide knopper er lukkede.'
                    : 'Plugged pores due to excess oil and dead skin cells. Blackheads are open and dark in colour; whiteheads are closed.'}
                </li>
                <li>
                  <strong>{isDa ? 'Bumser (pustler og papler):' : 'Pimples (pustules and papules):'}</strong>{' '}
                  {isDa
                    ? 'Røde, betændte knopper, der kan indeholde pus.'
                    : 'Red, inflamed bumps that may contain pus.'}
                </li>
                <li>
                  <strong>{isDa ? 'Knuder og cyster:' : 'Nodules and cysts:'}</strong>{' '}
                  {isDa
                    ? 'Dybere, smertefulde knopper under huden. Disse er de mest alvorlige former og har størst risiko for at efterlade ar.'
                    : 'Deeper, painful lumps under the skin. These are the most severe forms and carry the greatest risk of scarring.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Acne opstår oftest i ansigtet, på ryggen, brystet og skuldrene – steder med mange talgkirtler.'
                  : 'Acne most commonly appears on the face, back, chest and shoulders — areas with many oil glands.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår acne?' : 'Why does acne happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Acne opstår når flere faktorer kombineres:'
                  : 'Acne develops when several factors combine:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Øget talgproduktion' : 'Increased oil production'}
              </h3>
              <p>
                {isDa
                  ? 'Hormoner – særligt androgener som testosteron – stimulerer talgkirtlerne til at producere mere olie. Det er grunden til, at acne typisk starter i puberteten, og at kvinder ofte oplever udbrud i forbindelse med menstruation, graviditet eller hormonelle forandringer.'
                  : 'Hormones — particularly androgens like testosterone — stimulate the oil glands to produce more oil. This is why acne typically starts during puberty, and why women often experience breakouts around menstruation, pregnancy or hormonal changes.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Tilstoppede porer' : 'Clogged pores'}
              </h3>
              <p>
                {isDa
                  ? 'Døde hudceller blander sig med overskydende talg og tilstopper hårsækkene. Dette skaber komedoner – de karakteristiske hudorme, der er forstadiet til betændt acne.'
                  : 'Dead skin cells mix with excess sebum and block the hair follicles. This creates comedones — the characteristic blackheads and whiteheads that are the precursor to inflamed acne.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Bakterier (Cutibacterium acnes)' : 'Bacteria (Cutibacterium acnes)'}
              </h3>
              <p>
                {isDa
                  ? 'Bakterien Cutibacterium acnes lever naturligt på huden, men i tilstoppede porer trives den og udløser en immunreaktion, der giver den karakteristiske rødme og betændelse.'
                  : 'The bacterium Cutibacterium acnes lives naturally on the skin, but in clogged pores it thrives and triggers an immune response, causing the characteristic redness and inflammation.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik og livsstil' : 'Genetics and lifestyle'}
              </h3>
              <p>
                {isDa
                  ? 'Arvelige faktorer spiller en stor rolle. Hvis dine forældre havde svær acne, er du selv mere tilbøjelig til det. Stress, kost (særligt sukkerholdige og fedtrige fødevarer) og visse lægemidler kan også forværre tilstanden.'
                  : "Genetic factors play a major role. If your parents had severe acne, you are more likely to develop it yourself. Stress, diet (particularly sugary and fatty foods) and certain medications can also worsen the condition."}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får acne?' : 'Who gets acne?'}
              </h2>
              <p>
                {isDa
                  ? 'Acne er utrolig almindelig og rammer de fleste mennesker på et tidspunkt i livet:'
                  : 'Acne is incredibly common and affects most people at some point in their lives:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Teenagere:' : 'Teenagers:'}</strong>{' '}
                  {isDa
                    ? 'Op mod 85% af unge mellem 12–25 år oplever acne på grund af hormonelle ændringer i puberteten.'
                    : 'Up to 85% of young people aged 12–25 experience acne due to hormonal changes during puberty.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne kvinder:' : 'Adult women:'}</strong>{' '}
                  {isDa
                    ? '12–22% af kvinder over 25 år har acne, ofte hormonelt betinget.'
                    : '12–22% of women over 25 have acne, often hormone-related.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne mænd:' : 'Adult men:'}</strong>{' '}
                  {isDa
                    ? 'Acne hos voksne mænd er mindre hyppigt end hos kvinder, men forekommer.'
                    : 'Acne in adult men is less frequent than in women, but does occur.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Ingen er immune. Acne kan ramme alle hudtyper, aldre og baggrunde.'
                  : 'No one is immune. Acne can affect all skin types, ages and backgrounds.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved acne?' : 'What can you do about acne?'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom der ikke er én universel kur, er acne i de fleste tilfælde behandlelig. Nøglen er konsistent behandling over tid:'
                  : 'While there is no single universal cure, acne is treatable in most cases. The key is consistent treatment over time:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Håndkøbsprodukter (mild acne)' : '💊 Over-the-counter products (mild acne)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Benzoylperoxid, salicylsyre og niacinamid kan reducere bumser og olieproduktion.'
                      : 'Benzoyl peroxide, salicylic acid and niacinamide can reduce pimples and oil production.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Receptpligtig behandling (moderat/svær acne)' : '🩺 Prescription treatment (moderate/severe acne)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Topiske retinoider, antibiotika og i svære tilfælde isotretinoin (Roaccutan) er effektive muligheder, der kræver lægeordination.'
                      : 'Topical retinoids, antibiotics and in severe cases isotretinoin (Roaccutane) are effective options that require a prescription.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🥗 Livsstil' : '🥗 Lifestyle'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Reducér sukker og mejeriprodukter, håndtér stress, sov nok og skyl ansigtet to gange dagligt med mild renser.'
                      : 'Reduce sugar and dairy intake, manage stress, get enough sleep and wash your face twice daily with a gentle cleanser.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚫 Undgå' : '🚫 Avoid'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Klem ikke bumser – det forværrer betændelsen og øger risikoen for arvæv.'
                      : "Don't pick or squeeze — it worsens inflammation and increases the risk of scarring."}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Acne er klassificeret som ED80 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved komedoner, papler og pustler, ofte relateret til hormonelle forandringer.'
                    : "Acne is classified as ED80 in the WHO's International Classification of Diseases (ICD-11). It is characterised by comedones, papules and pustules, often related to hormonal changes."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er acne farligt?' : 'Is acne dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Acne er ikke farligt i medicinsk forstand, men svær ubehandlet acne kan efterlade permanente ar. Tidlig behandling er vigtig.'
                      : 'Acne is not dangerous in a medical sense, but severe untreated acne can leave permanent scars. Early treatment is important.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan acne forsvinde af sig selv?' : 'Can acne go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Mild acne kan forbedres over tid, men moderat til svær acne kræver typisk behandling. At vente og se kan resultere i ardannelse.'
                      : 'Mild acne can improve over time, but moderate to severe acne typically requires treatment. Waiting it out can result in scarring.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge hvis håndkøbsprodukter ikke hjælper efter 2-3 måneder, hvis du udvikler ar, dybe cyster eller hvis acnen påvirker dit velbefindende.'
                      : 'Contact a dermatologist if over-the-counter products are not helping after 2-3 months, if you develop scars, deep cysts, or if acne is affecting your well-being.'}
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
