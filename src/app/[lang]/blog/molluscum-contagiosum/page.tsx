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
        title: 'Molluscum Contagiosum: Symptomer og Behandling | SKIND',
        description:
          'Molluscum contagiosum (mollusker): hvordan knopperne ser ud, hvordan de smitter, og hvilke behandlinger der virker hos børn og voksne. Få hjælp via SKIND.',
        keywords:
          'molluscum contagiosum, mollusker, hudinfektion, molluscum behandling, molluscum smitte, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/molluscum-contagiosum',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/molluscum-contagiosum',
            da: 'https://www.skinchange.dk/da/blog/molluscum-contagiosum',
            en: 'https://www.skinchange.dk/en/blog/molluscum-contagiosum',
          },
        },
      }
    : {
        title: 'Molluscum Contagiosum: Symptoms and Treatment | SKIND',
        description:
          'Molluscum contagiosum: what the bumps look like, how the virus spreads, and which treatments actually work in children and in adults. Get help via SKIND.',
        keywords:
          'molluscum contagiosum, molluscum bumps, skin infection, molluscum treatment, molluscum spread, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/molluscum-contagiosum',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/molluscum-contagiosum',
            da: 'https://www.skinchange.dk/da/blog/molluscum-contagiosum',
            en: 'https://www.skinchange.dk/en/blog/molluscum-contagiosum',
          },
        },
      };
}

export default function MolluscumContagiosumPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling'
      : 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til molluscum contagiosum: hvad det er, hvordan det smitter, og hvilke behandlingsmuligheder der findes.'
      : 'Complete guide to molluscum contagiosum: what it is, how it spreads, and what treatment options are available.',
    image: '/blog-molluscum-contagiosum.jpg',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
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
            name: 'Er molluscum contagiosum farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Molluscum contagiosum er som regel harmløst og forsvinder ofte af sig selv. Det kan dog være kosmetisk generende, og knopperne kan blive inficerede, hvis der pilles ved dem.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge læge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg læge, hvis knopperne bliver meget talrige, spreder sig hurtigt, forårsager ubehag, bliver røde og ømme, eller ikke forbedres med egenomsorg. Hos personer med svækket immunsystem bør tilstanden altid vurderes af en læge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan voksne få molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, voksne kan blive smittet. Hos voksne sker det ofte ved seksuel kontakt og kan ramme kønsdelene; i så fald bør man tilbydes undersøgelse for andre seksuelt overførte infektioner, og knopperne kan forveksles med kønsvorter. Mollusker i kønsområdet hos et lille barn bør altid vurderes af en læge. Tilstanden er generelt mildere hos raske voksne.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is molluscum contagiosum dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Molluscum contagiosum is usually harmless and often disappears on its own. However, it can be cosmetically bothersome, and the bumps can become infected if picked at.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I see a doctor?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'See a doctor if the bumps become very numerous, spread rapidly, cause discomfort, turn red and sore, or do not improve with self-care. In people with weakened immune systems, the condition should always be evaluated by a doctor.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can adults get molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, adults can become infected. In adults it often occurs through sexual contact and can affect the genital area; when it does, screening for other sexually transmitted infections should be offered, and the bumps can be confused with genital warts. Molluscum in the genital area of a young child should always be assessed by a doctor. The condition is generally milder in healthy adults.',
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
              <span className="text-gray-900">Molluscum Contagiosum</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '22. marts 2026' : 'March 22, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '4 min læsetid' : '4 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling'
                : 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-molluscum-contagiosum.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af barnehud med små, perlemorsagtige knopper med en central fordybning'
                    : 'Close-up of a child’s skin with small, pearly bumps that have a central dimple'
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
                    <strong>Molluscum contagiosum er en udbredt, virusbaseret hudinfektion</strong>, der primært rammer børn, men som også kan påvirke voksne. Den viser sig som små, perlemorsagtige knopper på huden – typisk smertefri og harmløse, men smitsomme.
                  </>
                ) : (
                  <>
                    <strong>Molluscum contagiosum is a common viral skin infection</strong> that primarily affects children but can also impact adults. It appears as small, pearly white bumps on the skin — typically painless and harmless, but contagious.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad molluscum contagiosum er, hvordan det smitter, hvordan det ser ud, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article we explain exactly what molluscum contagiosum is, how it spreads, what it looks like, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er molluscum contagiosum?' : 'What is molluscum contagiosum?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum er en virusinfektion i huden forårsaget af molluscum contagiosum-virussen (MCV), som tilhører poxvirus-familien. Virussen angriber cellerne i hudens overfladelag og forårsager små, godartede knopper med en karakteristisk perlemorsagtig glans.'
                  : 'Molluscum contagiosum is a viral skin infection caused by the molluscum contagiosum virus (MCV), which belongs to the poxvirus family. The virus targets cells in the outermost layer of the skin, creating small, benign bumps with a characteristic pearly sheen.'}
              </p>
              <p>
                {isDa
                  ? 'Knopperne – kaldet mollusker – har typisk en lille, central fordybning (umbilikation). De er næsten altid smertefri og forsvinder ofte af sig selv inden for 6–12 måneder, selvom nogle kan vare i flere år.'
                  : 'The bumps — called mollusca — typically have a small, central dimple (umbilication). They are almost always painless and often disappear on their own within 6–12 months, although some can last for several years.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser molluscum contagiosum ud?' : 'What does molluscum contagiosum look like?'}
              </h2>
              <p>{isDa ? 'De klassiske tegn på molluscum contagiosum inkluderer:' : 'The classic signs of molluscum contagiosum include:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Små, perlemorsagtige knopper:' : 'Small, pearly white bumps:'}</strong>{' '}
                  {isDa
                    ? 'Normalt 2–5 mm i diameter med en glat, kuppelformet overflade og en karakteristisk central fordybning.'
                    : 'Typically 2–5 mm in diameter with a smooth, dome-shaped surface and a characteristic central dimple.'}
                </li>
                <li>
                  <strong>{isDa ? 'Flere knopper:' : 'Multiple bumps:'}</strong>{' '}
                  {isDa
                    ? 'De optræder ofte i klynger, men kan også forekomme spredt på forskellige dele af kroppen.'
                    : 'They often appear in clusters but can also occur scattered across different parts of the body.'}
                </li>
                <li>
                  <strong>{isDa ? 'Smertefri:' : 'Painless:'}</strong>{' '}
                  {isDa
                    ? 'Knopperne giver som regel ingen smerter eller ubehag.'
                    : 'The bumps usually cause no pain or discomfort.'}
                </li>
                <li>
                  <strong>{isDa ? 'Typiske lokalisationer:' : 'Common locations:'}</strong>{' '}
                  {isDa
                    ? 'Ansigtet, armene, benene, torsoen og armhulerne er de mest berørte områder.'
                    : 'The face, arms, legs, torso and armpits are the most commonly affected areas.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår molluscum contagiosum?' : 'Why does molluscum contagiosum happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum-virussen spredes let gennem direkte kontakt med inficeret hud eller forurenede genstande. Smitten kan ske på flere måder:'
                  : 'The molluscum contagiosum virus spreads easily through direct contact with infected skin or contaminated objects. Transmission can occur in several ways:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvordan smitter direkte hudkontakt?' : 'How does direct skin contact spread it?'}
              </h3>
              <p>
                {isDa
                  ? 'Direkte kontakt med en inficeret person er den mest almindelige smittevej. Det kan ske gennem leg, sport, kram og seksuel aktivitet.'
                  : 'Direct contact with an infected person is the most common route of transmission. This can occur through play, sports, cuddling and sexual activity.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Kan genstande overføre smitten?' : 'Can objects transmit the virus?'}
              </h3>
              <p>
                {isDa
                  ? 'Virussen kan overføres via håndklæder, vaskeklude, delt legetøj og legepladsudstyr. Selve badevandet i en svømmehal smitter ikke, men delte håndklæder, svømmeplader og tæt hudkontakt ved bassinkanten gør. Det er særligt relevant i miljøer med mange børn.'
                  : 'The virus can be transferred via towels, washcloths, shared toys and playground equipment. Swimming pool water itself does not spread it, but shared towels, kickboards and close skin contact at the poolside do. This is particularly relevant in environments with many children.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvordan spreder knopperne sig på egen hud?' : 'How do the bumps spread on your own skin?'}
              </h3>
              <p>
                {isDa
                  ? 'At skrabe eller pille ved eksisterende knopper kan overføre virussen til andre områder af din egen hud – det kaldes autoinokulation.'
                  : 'Scratching or picking existing bumps can transfer the virus to other areas of your own skin — this is called autoinoculation.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får molluscum contagiosum?' : 'Who gets molluscum contagiosum?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum er mest almindeligt hos børn mellem 1–10 år, men kan ramme personer i alle aldre:'
                  : 'Molluscum contagiosum is most common in children between 1–10 years old, but can affect people of all ages:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Børn:' : 'Children:'}</strong>{' '}
                  {isDa
                    ? 'Især børn i førskole- og skolealderen på grund af tæt leg og kontakt med andre børn.'
                    : 'Especially children of preschool and school age due to close play and contact with other children.'}
                </li>
                <li>
                  <strong>{isDa ? 'Børn med eksem:' : 'Children with eczema:'}</strong>{' '}
                  {isDa ? (
                    <>
                      Børn med{' '}
                      <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-primary underline hover:text-primary-900">
                        atopisk eksem
                      </Link>{' '}
                      får ofte flere og mere udbredte mollusker, fordi hudbarrieren er svækket, og fordi kløe fører til kradsen.
                    </>
                  ) : (
                    <>
                      Children with{' '}
                      <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-primary underline hover:text-primary-900">
                        atopic dermatitis
                      </Link>{' '}
                      often develop more numerous and more widespread mollusca, because the skin barrier is impaired and itching leads to scratching.
                    </>
                  )}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne:' : 'Adults:'}</strong>{' '}
                  {isDa
                    ? 'Voksne kan blive smittet, særligt gennem seksuel kontakt eller hvis de har et svækket immunsystem.'
                    : 'Adults can become infected, particularly through sexual contact or if they have a weakened immune system.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkede:' : 'Immunocompromised individuals:'}</strong>{' '}
                  {isDa
                    ? 'Personer med HIV/AIDS, organtransplanterede eller andre tilstande, der svækker immunsystemet, er mere modtagelige og kan udvikle flere og større knopper.'
                    : 'People with HIV/AIDS, organ transplants or other conditions that weaken the immune system are more susceptible and may develop more and larger bumps.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved molluscum contagiosum?' : 'What can you do about molluscum contagiosum?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum forsvinder ofte af sig selv, men behandling kan fremskynde helingen og reducere risikoen for spredning:'
                  : 'Molluscum contagiosum often resolves on its own, but treatment can speed up healing and reduce the risk of spreading:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '⏳ Afventende observation (særligt for børn)' : '⏳ Watchful waiting (especially in children)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Da knopperne ofte forsvinder af sig selv, kan man vælge at observere og lade naturen gå sin gang – særligt hvis barnet ikke er generet af knopperne.'
                      : 'Since bumps often disappear on their own, watchful waiting is an option — especially if the child is not bothered by the bumps.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Topiske lægemidler' : '💊 Topical medications'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kaliumhydroxid (KOH) er den mest anvendte topiske behandling og kan påføres hjemme efter lægens anvisning. Cantharidin påføres af en læge i klinikken. Podophyllotoxin frarådes til børn.'
                      : 'Potassium hydroxide (KOH) solution is the most commonly used topical option and can be applied at home on a doctor\'s advice. Cantharidin is applied in the clinic by a doctor. Podophyllotoxin is not recommended for children.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧊 Kryoterapi' : '🧊 Cryotherapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Frysning af knopperne med flydende kvælstof. Effektiv metode, der typisk kræver flere behandlinger.'
                      : 'Freezing the bumps with liquid nitrogen. An effective method that typically requires several treatments.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🏥 Curettage / ekstraktion' : '🏥 Curettage / extraction'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Fjernelse af knopperne med en steril curette eller tang. Udføres af en læge.'
                      : 'Removal of the bumps using a sterile curette or forceps. Performed by a doctor.'}
                  </p>
                </div>
              </div>

              {/* Prevention */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan forebygger du smitte?' : 'How can you prevent it from spreading?'}
              </h2>
              <p>
                {isDa
                  ? 'For at reducere risikoen for smitte og spredning er det vigtigt at:'
                  : 'To reduce the risk of infection and spread, it is important to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  {isDa
                    ? 'Undgå at pille eller skrabe knopperne'
                    : 'Avoid picking or scratching the bumps'}
                </li>
                <li>
                  {isDa
                    ? 'Vaske hænder regelmæssigt og grundigt'
                    : 'Wash your hands regularly and thoroughly'}
                </li>
                <li>
                  {isDa
                    ? 'Undgå at dele personlige genstande som håndklæder og vaskeklude'
                    : 'Avoid sharing personal items such as towels and washcloths'}
                </li>
                <li>
                  {isDa
                    ? 'Dække knopperne til ved tæt kontakt med andre'
                    : 'Cover the bumps during close contact with others'}
                </li>
                <li>
                  {isDa
                    ? 'Rengøre fælles legetøj og overflader'
                    : 'Clean shared toys and surfaces'}
                </li>
              </ul>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Molluscum contagiosum er klassificeret som 1E76 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en virusinfektion, der viser sig som kuppelformede, umbilikerede papler. Behandlingen omfatter afventende observation, topiske midler, kryoterapi og curettage.'
                    : "Molluscum contagiosum is classified as 1E76 in the WHO's International Classification of Diseases (ICD-11). It is a viral infection presenting as dome-shaped, umbilicated papules. Treatment includes watchful waiting, topical agents, cryotherapy and curettage."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er molluscum contagiosum farligt?' : 'Is molluscum contagiosum dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Molluscum contagiosum er som regel harmløst og forsvinder ofte af sig selv. Det kan dog være kosmetisk generende, og knopperne kan blive inficerede, hvis der pilles ved dem.'
                      : 'Molluscum contagiosum is usually harmless and often disappears on its own. However, it can be cosmetically bothersome, and the bumps can become infected if picked at.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg søge læge?' : 'When should I see a doctor?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Søg læge, hvis knopperne bliver meget talrige, spreder sig hurtigt, forårsager ubehag, bliver røde og ømme, eller ikke forbedres med egenomsorg. Hos personer med svækket immunsystem bør tilstanden altid vurderes af en læge.'
                      : 'See a doctor if the bumps become very numerous, spread rapidly, cause discomfort, turn red and sore, or do not improve with self-care. In people with weakened immune systems, the condition should always be evaluated by a doctor.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Kan voksne få molluscum contagiosum?' : 'Can adults get molluscum contagiosum?'}
                  </h3>
                  <p>
                    {isDa ? (
                      <>
                        Ja, voksne kan blive smittet. Hos voksne sker det ofte ved seksuel kontakt og kan ramme kønsdelene; i så fald bør man tilbydes undersøgelse for andre seksuelt overførte infektioner, og knopperne kan forveksles med{' '}
                        <Link href={`/${lang}/blog/genital-warts`} className="text-primary underline hover:text-primary-900">
                          kønsvorter
                        </Link>
                        . Mollusker i kønsområdet hos et lille barn bør altid vurderes af en læge. Tilstanden er generelt mildere hos raske voksne.
                      </>
                    ) : (
                      <>
                        Yes, adults can become infected. In adults it often occurs through sexual contact and can affect the genital area; when it does, screening for other sexually transmitted infections should be offered, and the bumps can be confused with{' '}
                        <Link href={`/${lang}/blog/genital-warts`} className="text-primary underline hover:text-primary-900">
                          genital warts
                        </Link>
                        . Molluscum in the genital area of a young child should always be assessed by a doctor. The condition is generally milder in healthy adults.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-900 text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Er du i tvivl om dine hudproblemer? Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge – uden ventetid.'
                    : 'Unsure about your skin concerns? Upload photos of your skin via the SKIND app and receive a personal assessment from a certified dermatologist — no waiting list.'}
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
