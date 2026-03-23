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
        title: 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om molluscum contagiosum: hvad det er, hvordan det smitter, hvordan det ser ud, og hvilke behandlingsmuligheder der findes. Få hjælp via SKIND.',
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
        title: 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about molluscum contagiosum: what it is, how it spreads, what it looks like, and what treatment options are available. Get help via SKIND.',
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
    image: 'https://www.skinchange.dk/blog/molluscum-contagiosum.jpg',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
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
            name: 'Hvad er molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Molluscum contagiosum er en almindelig, virusbaseret hudinfektion forårsaget af et poxvirus. Den viser sig som små, perlemorsagtige knopper med en central fordybning. Tilstanden er mest almindelig hos børn, men kan ramme alle.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan smitter molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Virussen spreder sig gennem direkte hud-til-hud kontakt med en inficeret person eller via forurenede genstande som håndklæder, vaskeklude, legetøj og legepladsudstyr. At skrabe eller pille ved eksisterende knopper kan også sprede virussen til andre områder af huden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvem får molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Molluscum contagiosum er mest almindeligt hos børn mellem 1–10 år, men det kan ramme personer i alle aldre. Individer med et svækket immunsystem er mere modtagelige og kan opleve flere eller større knopper.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Molluscum contagiosum is a common viral skin infection caused by a poxvirus. It appears as small, pearly white bumps with a central dimple. The condition is most common in children but can affect anyone.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does molluscum contagiosum spread?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The virus spreads through direct skin-to-skin contact with an infected person or via contaminated objects such as towels, washcloths, shared toys and playground equipment. Scratching or picking existing bumps can also spread the virus to other areas of the skin.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who gets molluscum contagiosum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Molluscum contagiosum is most common in children between 1–10 years old, but it can affect people of any age. Individuals with weakened immune systems are more susceptible and may develop more or larger bumps.',
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
                {isDa ? 'Molluscum Contagiosum' : 'Molluscum Contagiosum'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">22. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling'
                : 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-molluscum-contagiosum.jpg"
                alt={isDa ? 'Molluscum contagiosum – hudinfektion' : 'Molluscum contagiosum – skin infection'}
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
                    <strong>Molluscum contagiosum er en udbredt, virusbaseret hudinfektion</strong>, der primært rammer børn, men som også kan påvirke voksne. Den viser sig som små, perlemorsagtige knopper på huden – typically painless and harmless, but highly contagious.
                  </>
                ) : (
                  <>
                    <strong>Molluscum contagiosum is a common viral skin infection</strong> that primarily affects children but can also impact adults. It appears as small, pearly white bumps on the skin — typically painless and harmless, but contagious.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad molluscum contagiosum er, hvordan det smitter, hvordan det ser ud, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article we explain exactly what molluscum contagiosum is, how it spreads, what it looks like, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er molluscum contagiosum?' : 'What is molluscum contagiosum?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum er en virusinfektion i huden forårsaget af molluscum contagiosum-viruset (MCV), som tilhører poxvirus-familien. Virusen angriber cellerne i hudens overfladelag og forårsager små, godartede knopper med en karakteristisk perlemorsagtig glans.'
                  : 'Molluscum contagiosum is a viral skin infection caused by the molluscum contagiosum virus (MCV), which belongs to the poxvirus family. The virus targets cells in the outermost layer of the skin, creating small, benign bumps with a characteristic pearly sheen.'}
              </p>
              <p>
                {isDa
                  ? 'Knopperne – kaldet mollusker – har typisk en lille, central fordybning (omental). De er næsten altid smertefri og forsvinder ofte af sig selv inden for 6–12 måneder, selvom nogle kan vare i flere år.'
                  : 'The bumps — called mollusca — typically have a small, central dimple (umbilication). They are almost always painless and often disappear on their own within 6–12 months, although some can last for several years.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser molluscum contagiosum ud?' : 'What does molluscum contagiosum look like?'}
              </h2>
              <p>{isDa ? 'De klassiske tegn på molluscum contagiosum inkluderer:' : 'The classic signs of molluscum contagiosum include:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Små, perlemorsagtige knopper:' : 'Small, pearly white bumps:'}</strong>{' '}
                  {isDa
                    ? 'Normalt 2–5 mm i diameter med en glat, kuppelformet overflade og en karakteristisk central fordybning.'
                    : 'Typically 2–5mm in diameter with a smooth, dome-shaped surface and a characteristic central dimple.'}
                </li>
                <li>
                  <strong>{isDa ? 'Flere knopper:' : 'Multiple bumps:'}</strong>{' '}
                  {isDa
                    ? 'De vises ofte i klynger, men kan også forekomme spredt på forskellige dele af kroppen.'
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
                    ? 'Ansigtet, armene, benene, torso og armhuler er de mest berørte områder.'
                    : 'The face, arms, legs, torso and armpits are the most commonly affected areas.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår molluscum contagiosum?' : 'Why does molluscum contagiosum happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum-virus spredes let gennem direkte kontakt med inficeret hud eller forurenede genstande. Smitten kan ske på flere måder:'
                  : 'The molluscum contagiosum virus spreads easily through direct contact with infected skin or contaminated objects. Transmission can occur in several ways:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hud-til-hud kontakt' : 'Skin-to-skin contact'}
              </h3>
              <p>
                {isDa
                  ? 'Direkte kontakt med en inficeret person er den mest almindelige smittevej. Dette kan ske gennem leg, sport, kram og seksuel aktivitet.'
                  : 'Direct contact with an infected person is the most common route of transmission. This can occur through play, sports, cuddling and sexual activity.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Forurenede genstande' : 'Contaminated objects'}
              </h3>
              <p>
                {isDa
                  ? 'Virussen kan overføres via håndklæder, vaskeklude, delt legetøj, svømmebassiner og legepladsudstyr. Dette er særligt relevant i miljøer med mange børn.'
                  : 'The virus can be transferred via towels, washcloths, shared toys, swimming pools and playground equipment. This is particularly relevant in environments with many children.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Selvsmitte' : 'Self-spreading'}
              </h3>
              <p>
                {isDa
                  ? 'At skrabe eller pille ved eksisterende knopper kan overføre virussen til andre områder af din egen hud – dette kaldes autokoinokulation.'
                  : 'Scratching or picking existing bumps can transfer the virus to other areas of your own skin — this is called autoinoculation.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
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
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved molluscum contagiosum?' : 'What can you do about molluscum contagiosum?'}
              </h2>
              <p>
                {isDa
                  ? 'Molluscum contagiosum forsvinder ofte af sig selv, men behandling kan fremskynde helingen og reducere risikoen for spredning:'
                  : 'Molluscum contagiosum often resolves on its own, but treatment can speed up healing and reduce the risk of spreading:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧊 Kryoterapi' : '🧊 Cryotherapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Frysning af knopperne med flydende kvælstof. Effektiv metode, der typisk kræver flere behandlinger.'
                      : 'Freezing the bumps with liquid nitrogen. An effective method that typically requires several treatments.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topiske lægemidler' : '💊 Topical medications'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Creméer eller lotioner med salicylsyre, cantharidin eller podophyllotoxin kan anvendes til at fjerne knopperne.'
                      : 'Creams or lotions containing salicylic acid, cantharidin or podophyllotoxin can be used to remove the bumps.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🏥 Curettage / ekstraktion' : '🏥 Curettage / extraction'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Fjernelse af knopperne med en steril curette eller tang. Udføres af en læge.'
                      : 'Removal of the bumps using a sterile curette or forceps. Performed by a doctor.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '⏳ Afvent observatiå (særligt for børn)' : '⏳ Watchful waiting (especially in children)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Da knopperne ofte forsvinder af sig selv, kan man vælge at observere og lade naturen gå sin gang – særligt hvis barnet ikke er generet af knopperne.'
                      : 'Since bumps often disappear on their own, watchful waiting is an option — especially if the child is not bothered by the bumps.'}
                  </p>
                </div>
              </div>

              {/* Prevention */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Forebyggelse' : 'Prevention'}
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
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Molluscum contagiosum er klassificeret som 1E76 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en virusinfektion der præsenterer sig som kuplformede, umbilikerede papler. Behandling inkluderer kryoterapi og topiske midler.'
                    : "Molluscum contagiosum is classified as 1E76 in the WHO's International Classification of Diseases (ICD-11). It is a viral infection presenting as dome-shaped, umbilicated papules. Treatment includes cryotherapy and topical agents."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er molluscum contagiosum farligt?' : 'Is molluscum contagiosum dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Molluscum contagiosum er som regel harmløst og forsvinder ofte af sig selv. Det kan dog være kosmetisk generende, og knopperne kan blive inficerede hvis de pilles ved.'
                      : 'Molluscum contagiosum is usually harmless and often disappears on its own. However, it can be cosmetically bothersome, and the bumps can become infected if picked at.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg søge læge?' : 'When should I see a doctor?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Søg læge hvis knopperne bliver meget talrige, spreder sig hurtigt, forårsager ubehag, eller ikke forbedres med egenomsorg. Hos personer med svækket immunsystem bør tilstanden altid vurderes af en læge.'
                      : 'See a doctor if the bumps become very numerous, spread rapidly, cause discomfort, or do not improve with self-care. In people with weakened immune systems, the condition should always be evaluated by a doctor.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan voksne få molluscum contagiosum?' : 'Can adults get molluscum contagiosum?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, voksne kan blive smittet. Hos voksne forekommer det ofte ved seksuel kontakt og kan påvirke kønsorganerne. Tilstanden er dog generelt mildere hos raske voksne.'
                      : 'Yes, adults can become infected. In adults, it often occurs through sexual contact and can affect the genital area. The condition is generally milder in healthy adults.'}
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
                    ? 'Er du i tvivl om dine hudproblemer? Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge – uden ventetid.'
                    : 'Unsure about your skin concerns? Upload photos of your skin via the SKIND app and receive a personal assessment from a certified dermatologist — no waiting list.'}
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
