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
        title: 'Hvad er Cellulitis? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om cellulitis: hvad det er, hvorfor det opstår, hvem der rammes, og hvilke behandlingsmuligheder der findes. Tidlig diagnose og behandling er afgørende.',
        keywords:
          'cellulitis, cellulitis behandling, cellulitis symptomer, cellulitis årsager, hudinfektion, bakteriel infektion, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/cellulitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/cellulitis',
            da: 'https://www.skinchange.dk/da/blog/cellulitis',
            en: 'https://www.skinchange.dk/en/blog/cellulitis',
          },
        },
      }
    : {
        title: 'What is Cellulitis? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about cellulitis: what it is, why it happens, who gets it and what treatment options are available. Early diagnosis and treatment are crucial.',
        keywords:
          'cellulitis, cellulitis treatment, cellulitis symptoms, cellulitis causes, skin infection, bacterial infection, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/cellulitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/cellulitis',
            da: 'https://www.skinchange.dk/da/blog/cellulitis',
            en: 'https://www.skinchange.dk/en/blog/cellulitis',
          },
        },
      };
}

export default function CellulitisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Cellulitis? Årsager, Symptomer og Behandling'
      : 'What is Cellulitis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til cellulitis: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to cellulitis: what it is, causes, symptoms and treatment options.',
    image: '/blog-cellulitis.jpg',
    datePublished: '2026-03-24',
    dateModified: '2026-03-24',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      jobTitle: isDa ? 'Medicinsk redaktion' : 'Medical editorial team',
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
            name: 'Hvad er cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cellulitis er en akut bakteriel infektion i hudens dybere lag (dermis og subkutant væv), der forårsager rødme, hævelse, varme og smerter i det berørte område. Det kræver hurtig behandling med antibiotika.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er cellulitis smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, cellulitis er ikke smitsomt fra person til person. Det opstår, når bakterier trænger ind i huden gennem et brud i hudbarrieren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg lægehjælp straks ved rødme, hævelse, varme og smerter i et hudområde — især hvis det ledsages af feber. Tidlig behandling forhindrer alvorlige komplikationer. SKIND giver adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cellulitis is an acute bacterial infection of the deeper layers of the skin (dermis and subcutaneous tissue), causing redness, swelling, warmth and pain in the affected area. It requires prompt antibiotic treatment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is cellulitis contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, cellulitis is not contagious from person to person. It develops when bacteria enter the skin through a break in the skin barrier.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek medical help immediately if you have redness, swelling, warmth and pain in a skin area — especially if accompanied by fever. Early treatment prevents serious complications. SKIND gives you access to a dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Cellulitis?' : 'What is Cellulitis?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">24. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Cellulitis? Årsager, Symptomer og Behandling'
                : 'What is Cellulitis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#c62828] to-[#8e0000]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-cellulitis.jpg"
                alt={isDa ? 'Cellulitis – bakteriel hudinfektion behandling' : 'Cellulitis – bacterial skin infection treatment'}
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8e0000]/60 to-transparent" />
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
                    <strong>Cellulitis er en alvorlig, men behandlelig bakteriel hudinfektion</strong>, der påvirker tusindvis af mennesker hvert år. På trods af hvor almindelig den er, kan cellulitis — hvis den ikke behandles — føre til alvorlige komplikationer.
                  </>
                ) : (
                  <>
                    <strong>Cellulitis is a serious but treatable bacterial skin infection</strong> that affects thousands of people every year. Despite how common it is, cellulitis — if left untreated — can lead to serious complications.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad cellulitis er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article we explain exactly what cellulitis is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is cellulitis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er cellulitis?' : 'What is cellulitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Cellulitis er en akut bakteriel infektion i hudens dybere lag — specifikt dermis (læderhuden) og det subkutane væv (underhuden). Tilstanden adskiller sig fra overfladiske hudinfektioner ved at nå dybere ind i vævet og kræve mere aggressiv behandling.'
                  : 'Cellulitis is an acute bacterial infection of the deeper layers of the skin — specifically the dermis (the deeper layer of skin below the epidermis) and subcutaneous tissue (the layer beneath the skin). The condition differs from superficial skin infections by reaching deeper into the tissue and requiring more aggressive treatment.'}
              </p>
              <p>
                {isDa
                  ? 'Cellulitis er ikke smitsomt fra person til person. Det opstår, når bakterier — typisk streptokokker eller stafylokokker — trænger ind i huden gennem et brud eller en revne i hudbarrieren.'
                  : 'Cellulitis is not contagious from person to person. It develops when bacteria — typically streptococci or staphylococci — enter the skin through a break or crack in the skin barrier.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser cellulitis ud?' : 'What does cellulitis look like?'}
              </h2>
              <p>{isDa ? 'Cellulitis viser sig typisk med følgende symptomer:' : 'Cellulitis typically presents with the following symptoms:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Rødme og hævelse:' : 'Redness and swelling:'}</strong>{' '}
                  {isDa
                    ? 'Det berørte område er typisk rødt, varmt og hævet. Rødmen starter ofte lokalt og breder sig over tid.'
                    : 'The affected area is typically red, warm and swollen. The redness often starts locally and spreads over time.'}
                </li>
                <li>
                  <strong>{isDa ? 'Smerter og ømhed:' : 'Pain and tenderness:'}</strong>{' '}
                  {isDa
                    ? 'Området føles smertefuldt eller ømt ved berøring.'
                    : 'The area feels painful or tender to the touch.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hudforandringer:' : 'Skin changes:'}</strong>{' '}
                  {isDa
                    ? 'Huden kan se stram og skinnende ud. I nogle tilfælde kan der opstå blærer eller sår på overfladen.'
                    : 'The skin may appear tight and shiny. In some cases, blisters or sores may develop on the surface.'}
                </li>
                <li>
                  <strong>{isDa ? 'Feber og kulderystelser:' : 'Fever and chills:'}</strong>{' '}
                  {isDa
                    ? 'Ved mere udbredt infektion kan der forekomme feber, træthed og generelt ubehag.'
                    : 'With a more widespread infection, fever, fatigue and general malaise may occur.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Cellulitis opstår oftest på skinnebenet (det nederste ben), men kan forekomme overalt på kroppen — inklusiv ansigt, arme og fødder.'
                  : 'Cellulitis most commonly appears on the shin (lower leg), but can occur anywhere on the body — including the face, arms and feet.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår cellulitis?' : 'Why does cellulitis happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Cellulitis opstår, når bakterier finder vej ind under huden. Selv små brud i hudbarrieren kan være nok:'
                  : 'Cellulitis develops when bacteria find their way beneath the skin. Even small breaks in the skin barrier can be enough:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hudskader som indgangspunkt' : 'Skin injuries as entry points'}
              </h3>
              <p>
                {isDa
                  ? 'Snit, skrammer, insektbid, kirurgiske sår og selv små revner eller sprækker i huden kan alle fungere som indgangspunkter for bakterier. Dette er grunden til, at personer med dårligt immunforsvar eller underliggende hudtilstande er i højere risiko.'
                  : 'Cuts, scrapes, insect bites, surgical wounds and even small cracks or fissures in the skin can all serve as entry points for bacteria. This is why people with poor immune function or underlying skin conditions are at higher risk.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Kroniske hudtilstande' : 'Chronic skin conditions'}
              </h3>
              <p>
                {isDa
                  ? 'Eksem, dermatitis og andre kroniske hudlidelser svækker hudens naturlige barrierefunktion og gør det lettere for bakterier at trænge ind. Personer med fodsår (særligt diabetikere) er også i markant øget risiko.'
                  : 'Eczema, dermatitis and other chronic skin conditions weaken the skin\'s natural barrier function and make it easier for bacteria to penetrate. People with foot ulcers (particularly diabetics) are also at significantly increased risk.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Lymfødem og diabetes' : 'Lymphedema and diabetes'}
              </h3>
              <p>
                {isDa
                  ? 'Lymfødem — en tilstand der forårsager væskeophobning og hævelse — kan forringe lymfesystemets evne til at bekæmpe infektion. Ukontrolleret diabetes svækker immunforsvaret og øger risikoen for alvorlige bakterielle infektioner markant.'
                  : 'Lymphoedema — a condition causing fluid retention and swelling — can impair the lymphatic system\'s ability to fight infection. Uncontrolled diabetes weakens the immune system and significantly increases the risk of serious bacterial infections.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får cellulitis?' : 'Who gets cellulitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Alle kan udvikle cellulitis, men visse grupper er mere sårbare:'
                  : 'Anyone can develop cellulitis, but certain groups are more vulnerable:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Børn:' : 'Children:'}</strong>{' '}
                  {isDa
                    ? 'Hyppige hudskader og en aktiv livsstil gør børn mere sårbare over for mindre sår, der kan blive indgangspunkt for bakterier.'
                    : 'Frequent skin injuries and active lifestyles make children more vulnerable to minor wounds that can become entry points for bacteria.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne med kroniske hudtilstande eller diabetes:' : 'Adults with chronic skin conditions or diabetes:'}</strong>{' '}
                  {isDa
                    ? 'En svækket hudbarriere og et kompromitteret immunforsvar øger risikoen betydeligt.'
                    : 'A weakened skin barrier and compromised immune system significantly increase the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Mennesker med et svækket immunsystem:' : 'People with weakened immune systems:'}</strong>{' '}
                  {isDa
                    ? 'Personer med HIV/AIDS, kræft eller dem i immunsupprimerende behandling er særligt udsatte.'
                    : 'Individuals with HIV/AIDS, cancer or those on immunosuppressive treatment are particularly susceptible.'}
                </li>
                <li>
                  <strong>{isDa ? 'Ældre:' : 'Older adults:'}</strong>{' '}
                  {isDa
                    ? 'Med alderen falder immunforsvarets effektivitet, og hudens barrierefunktion forringes.'
                    : 'As age increases, immune effectiveness decreases and the skin\'s barrier function declines.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved cellulitis?' : 'What can you do about cellulitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Cellulitis kræver altid lægelig behandling. Tidlig diagnose og korrekt antibiotisk behandling er afgørende for at forhindre komplikationer:'
                  : 'Cellulitis always requires medical treatment. Early diagnosis and appropriate antibiotic treatment are essential to prevent complications:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Antibiotisk behandling' : '💊 Antibiotic treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Oral antibiotika (tabletter) er standardbehandling ved mild til moderat cellulitis. I svære tilfælde kan intravenøs antibiotika (via drop) være nødvendig. Behandlingen varer typisk 5–14 dage.'
                      : 'Oral antibiotics (tablets) are the standard treatment for mild to moderate cellulitis. In severe cases, intravenous antibiotics (via drip) may be necessary. Treatment typically lasts 5–14 days.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🛏️ Hvile og elevation' : '🛏️ Rest and elevation'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hold det berørte område i ro og hævet over hjertehøjde for at reducere hævelse og lindre smerter.'
                      : 'Keep the affected area at rest and elevated above heart level to reduce swelling and relieve pain.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩹 God sårpleje' : '🩹 Good wound care'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hold det berørte område rent og dækket med et løst bandage som anvist af din læge. Undgå at trykke eller stramme omkring det inficerede område.'
                      : 'Keep the affected area clean and covered with a loose bandage as directed by your doctor. Avoid applying pressure or constriction around the infected area.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🌡️ Overvåg symptomer' : '🌡️ Monitor symptoms'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hold øje med din temperatur og rapporter eventuelle forværrede symptomer — såsom hurtig spredning af rødme, stærk feber eller forvirring — til din læge straks.'
                      : 'Monitor your temperature and report any worsening symptoms — such as rapid spread of redness, high fever or confusion — to your doctor immediately.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Cellulitis er klassificeret som 1B70 i WHO\'s internationale sygdomsklassifikation (ICD-11) under "Bakteriel cellulitis, erysipelas eller lymfangitis". Det er en bakteriel infektion i dermis og subkutant væv, der præsenterer sig med erytem og hævelse.'
                    : "Cellulitis is classified as 1B70 in the WHO's International Classification of Diseases (ICD-11) under 'Bacterial cellulitis, erysipelas or lymphangitis'. It is a bacterial infection of the dermis and subcutaneous tissue presenting with erythema and swelling."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er cellulitis farligt?' : 'Is cellulitis dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ubehandlet cellulitis kan føre til alvorlige komplikationer, herunder blodforgiftning (sepsis), dybere vævsinfektioner og i sjældne tilfælde amputation. Tidlig behandling er afgørende.'
                      : 'Untreated cellulitis can lead to serious complications including blood poisoning (sepsis), deeper tissue infections and in rare cases amputation. Early treatment is essential.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan forebygger jeg cellulitis?' : 'How do I prevent cellulitis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Behandl alle hudskader — selv små — med det samme. Hold huden fugtet for at undgå revner, brug beskyttelsesudstyr ved risiko for hudskader, og kontrollér diabetes omhyggeligt.'
                      : 'Treat all skin injuries — even small ones — immediately. Keep skin moisturised to avoid cracks, use protective equipment where there is a risk of skin injuries, and manage diabetes carefully.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan cellulitis komme igen?' : 'Can cellulitis come back?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, nogle mennesker oplever tilbagevendende cellulitis, især hvis de har underliggende risikofaktorer som lymfødem eller diabetes. Din læge kan anbefale forebyggende antibiotika i sådanne tilfælde.'
                      : 'Yes, some people experience recurrent cellulitis, especially if they have underlying risk factors such as lymphoedema or diabetes. Your doctor may recommend preventive antibiotics in such cases.'}
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
