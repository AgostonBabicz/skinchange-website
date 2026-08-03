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
        title: 'Cellulitis (rosen): symptomer og behandling | SKIND',
        description:
          'Cellulitis er en akut bakteriel hudinfektion, der kræver lægehjælp samme dag. Læs om symptomer, faresignaler, antibiotika og hvornår du skal ringe 112.',
        keywords:
          'cellulitis, rosen, erysipelas, cellulitis behandling, cellulitis symptomer, hudinfektion, bakteriel infektion, SKIND',
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
        title: 'Cellulitis: symptoms, causes and treatment | SKIND',
        description:
          'Cellulitis is an acute bacterial skin infection that needs same-day care. Learn the symptoms, the red flags, how antibiotics work and when to call 112.',
        keywords:
          'cellulitis, erysipelas, cellulitis treatment, cellulitis symptoms, skin infection, bacterial infection, SKIND',
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
            name: 'Er cellulitis farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ubehandlet cellulitis kan føre til alvorlige komplikationer, herunder blodforgiftning (sepsis), dybere vævsinfektioner og i sjældne tilfælde amputation. Behandling samme dag er afgørende.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er rødme i begge underben cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Som regel ikke. Cellulitis er næsten altid ensidig. Rødme, hævelse og skæl i begge underben på én gang skyldes langt oftere staseeksem, der behandles med kompression og fugtighedscreme frem for antibiotika. Få det vurderet frem for at gætte.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan forebygger jeg cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rens og dæk alle hudskader — også de små — med det samme. Hold huden fugtet for at undgå revner, behandl fodsvamp mellem tæerne, brug beskyttelsesudstyr ved risiko for hudskader, og hold diabetes godt reguleret.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan cellulitis komme igen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, nogle mennesker oplever tilbagevendende cellulitis, især hvis de har underliggende risikofaktorer som lymfødem eller diabetes. Din læge kan anbefale forebyggende antibiotika i sådanne tilfælde.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is cellulitis dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Untreated cellulitis can lead to serious complications including blood poisoning (sepsis), deeper tissue infections and in rare cases amputation. Same-day treatment is essential.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is redness in both lower legs cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually not. Cellulitis is almost always one-sided. Redness, swelling and scaling in both lower legs at once is far more often venous eczema, which is treated with compression and emollients rather than antibiotics. Have it assessed rather than assuming either way.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I prevent cellulitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Clean and cover all skin injuries — even small ones — straight away. Keep skin moisturised to avoid cracks, treat athlete’s foot between the toes, use protective equipment where there is a risk of skin injury, and keep diabetes well controlled.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can cellulitis come back?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, some people experience recurrent cellulitis, especially if they have underlying risk factors such as lymphoedema or diabetes. Your doctor may recommend preventive antibiotics in such cases.',
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
                {isDa ? 'Hvad er Cellulitis?' : 'What is Cellulitis?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '24. marts 2026' : 'March 24, 2026'}</span>
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
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-cellulitis.jpg"
                alt={
                  isDa
                    ? 'Underben med et skarpt afgrænset, rødt og hævet område forårsaget af cellulitis.'
                    : 'A lower leg with a sharply defined area of red, swollen skin caused by cellulitis.'
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
                    <strong>Cellulitis er en akut bakteriel hudinfektion, der kræver lægehjælp samme dag</strong>. Den er almindelig og kan behandles, men den breder sig time for time, og ubehandlet kan den føre til alvorlige komplikationer.
                  </>
                ) : (
                  <>
                    <strong>Cellulitis is an acute bacterial skin infection that needs same-day medical care</strong>. It is common and treatable, but it spreads hour by hour, and left untreated it can lead to serious complications.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad cellulitis er, hvad der forårsager det, hvordan det ser ud, hvornår du skal ringe 112, og hvad behandlingen består af.'
                  : 'In this article we explain exactly what cellulitis is, what causes it, what it looks like, when to call the emergency services, and what treatment involves.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* Red flags */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Ring 112 eller tag straks på skadestuen, hvis du har smerter, der er langt værre, end huden ser ud til, hvis rødmen breder sig i løbet af timer, hvis huden bliver blålig eller mørkfarvet, hvis der kommer blærer eller sorte områder, hvis det knitrer under huden, hvis en rød stribe løber fra området ind mod kroppen, eller hvis du får høj feber med kulderystelser, forvirring eller hurtig vejrtrækning. Det kan være tegn på nekrotiserende fasciitis eller sepsis (blodforgiftning) — begge er livstruende og kræver hospitalsbehandling inden for få timer.'
                    : 'Call 112 or go straight to A&E if you have pain that is far worse than the skin looks, if the redness spreads within hours, if the skin turns dusky or purple, if blisters or black areas appear, if the skin crackles under your fingers, if a red streak tracks from the area towards your body, or if you develop a high fever with shivering, confusion or rapid breathing. These can be signs of necrotising fasciitis or sepsis — both are life-threatening and need hospital treatment within hours.'}
                </p>
              </div>

              {/* What is cellulitis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er cellulitis?' : 'What is cellulitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Cellulitis er en akut bakteriel infektion i hudens dybere lag — specifikt dermis (læderhuden) og det subkutane væv (underhuden). Tilstanden adskiller sig fra overfladiske hudinfektioner ved at nå dybere ind i vævet og kræve behandling med antibiotika.'
                  : 'Cellulitis is an acute bacterial infection of the deeper layers of the skin — specifically the dermis (the deeper layer of skin below the epidermis) and subcutaneous tissue (the layer beneath the skin). The condition differs from superficial skin infections by reaching deeper into the tissue and requiring antibiotic treatment.'}
              </p>
              <p>
                {isDa
                  ? 'På dansk kaldes tilstanden i daglig tale ofte rosen. Rosen (erysipelas) betegner strengt taget den mere overfladiske variant med en skarp, hævet kant, mens cellulitis sidder dybere og har en mere udflydende afgrænsning. De to overlapper hinanden, skyldes de samme bakterier og behandles stort set ens.'
                  : 'A more superficial form of the same infection is called erysipelas. It has a sharply raised border, while cellulitis sits deeper and has a more diffuse edge. The two overlap, are caused by the same bacteria and are treated in much the same way.'}
              </p>
              <p>
                {isDa
                  ? 'Cellulitis må ikke forveksles med cellulite — den såkaldte appelsinhud. Cellulite er en helt harmløs kosmetisk forandring i underhudens fedtvæv og har intet med infektion at gøre. Navnene ligner hinanden, men tilstandene har intet tilfælles.'
                  : 'Cellulitis should not be confused with cellulite, the dimpled "orange-peel" appearance of the skin. Cellulite is a harmless cosmetic change in the fatty tissue under the skin and has nothing to do with infection. The names look alike, but the conditions have nothing in common.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Cellulitis er ikke smitsomt fra person til person. Det opstår, når bakterier — typisk streptokokker eller stafylokokker — trænger ind i huden gennem et brud eller en revne i hudbarrieren. Det er de samme to bakteriegrupper, der står bag{' '}
                    <Link href={`/${lang}/blog/impetigo`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      børnesår (impetigo)
                    </Link>
                    , men impetigo bliver i hudens øverste lag og smitter ved berøring.
                  </>
                ) : (
                  <>
                    Cellulitis is not contagious from person to person. It develops when bacteria — typically streptococci or staphylococci — enter the skin through a break or crack in the skin barrier. The same two groups of bacteria cause{' '}
                    <Link href={`/${lang}/blog/impetigo`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      impetigo
                    </Link>
                    , but impetigo stays in the top layer of the skin and does spread by touch.
                  </>
                )}
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
                    ? 'Det berørte område er typisk rødt, varmt og hævet. Rødmen starter ofte lokalt og breder sig over timer til dage.'
                    : 'The affected area is typically red, warm and swollen. The redness often starts locally and spreads over hours to days.'}
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
                  ? 'Cellulitis opstår oftest på underbenet, men kan forekomme overalt på kroppen — inklusive ansigt, arme og fødder.'
                  : 'Cellulitis most commonly appears on the lower leg, but can occur anywhere on the body — including the face, arms and feet.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    <strong>Cellulitis er næsten altid ensidig.</strong> Rødme og hævelse i begge underben skyldes langt oftere staseeksem end infektion. Staseeksem opstår, når blodet har svært ved at komme retur fra benene, og det behandles med kompression og fugtighedscreme — ikke antibiotika. Det ligner på mange måder{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      eksem
                    </Link>{' '}
                    andre steder på kroppen.
                  </>
                ) : (
                  <>
                    <strong>Cellulitis is almost always one-sided.</strong> Redness and swelling in both lower legs is much more often venous eczema or stasis dermatitis than infection. Venous eczema develops when blood struggles to return from the legs, and it is treated with compression and emollients — not antibiotics. In many ways it behaves like{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      eczema
                    </Link>{' '}
                    elsewhere on the body.
                  </>
                )}
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
                {isDa ? 'Hvordan kommer bakterierne ind i huden?' : 'How do bacteria get into the skin?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Gennem et brud i hudbarrieren. Snit, skrammer,{' '}
                    <Link href={`/${lang}/blog/insect-sting`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      insektbid og -stik
                    </Link>
                    , kirurgiske sår, fodsvamp mellem tæerne og selv små revner eller sprækker i huden kan alle fungere som indgangspunkter for bakterier. Derfor er personer med svækket immunforsvar eller underliggende hudtilstande i højere risiko.
                  </>
                ) : (
                  <>
                    Through a break in the skin barrier. Cuts, scrapes,{' '}
                    <Link href={`/${lang}/blog/insect-sting`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      insect bites and stings
                    </Link>
                    , surgical wounds, athlete&apos;s foot between the toes and even small cracks or fissures in the skin can all serve as entry points for bacteria. This is why people with poor immune function or underlying skin conditions are at higher risk.
                  </>
                )}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvorfor øger kroniske hudtilstande risikoen?' : 'Why do chronic skin conditions increase the risk?'}
              </h3>
              <p>
                {isDa
                  ? 'Fordi de svækker hudens naturlige barrierefunktion. Eksem, dermatitis og andre kroniske hudlidelser gør det lettere for bakterier at trænge ind. Personer med fodsår — særligt ved diabetes — er også i markant øget risiko.'
                  : 'Because they weaken the skin’s natural barrier function. Eczema, dermatitis and other chronic skin conditions make it easier for bacteria to penetrate. People with foot ulcers — particularly those with diabetes — are also at significantly increased risk.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvilken rolle spiller lymfødem og diabetes?' : 'What role do lymphoedema and diabetes play?'}
              </h3>
              <p>
                {isDa
                  ? 'Begge svækker kroppens forsvar mod infektion. Lymfødem — en tilstand med væskeophobning og hævelse — forringer lymfesystemets evne til at bekæmpe bakterier. Ukontrolleret diabetes svækker immunforsvaret og øger risikoen for alvorlige bakterielle infektioner markant.'
                  : 'Both weaken the body’s defences against infection. Lymphoedema — a condition causing fluid retention and swelling — impairs the lymphatic system’s ability to fight bacteria. Uncontrolled diabetes weakens the immune system and significantly increases the risk of serious bacterial infections.'}
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
                  <strong>{isDa ? 'Voksne over 45 år og ældre:' : 'Adults over 45 and older adults:'}</strong>{' '}
                  {isDa
                    ? 'Forekomsten er højest i denne gruppe og stiger med alderen. Med årene svækkes immunforsvaret, hudens barriere bliver tyndere, og hævede ben bliver mere almindelige.'
                    : 'Incidence is highest in this group and rises with age. With age, immune function declines and the skin’s barrier weakens, while swollen legs become more common.'}
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
                  <strong>{isDa ? 'Børn:' : 'Children:'}</strong>{' '}
                  {isDa
                    ? 'Cellulitis er mindre hyppigt hos børn end hos voksne, men hævelse og rødme omkring et øje (periorbital eller orbital cellulitis) er en særlig akut tilstand. Et barn med rødt, hævet øjenlåg skal vurderes på hospitalet samme dag.'
                    : 'Cellulitis is less common in children than in adults, but swelling and redness around an eye (periorbital or orbital cellulitis) is a specific emergency. A child with a red, swollen eyelid needs same-day hospital assessment.'}
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
                      ? 'Antibiotika i tabletform er standardbehandling ved mild til moderat cellulitis. I svære tilfælde kan intravenøs antibiotikabehandling (via drop) være nødvendig. Behandlingen varer typisk 5–7 dage ved ukompliceret cellulitis og forlænges kun, hvis infektionen ikke bedres.'
                      : 'Oral antibiotics (tablets) are the standard treatment for mild to moderate cellulitis. In severe cases, intravenous antibiotics (via a drip) may be necessary. Treatment usually lasts 5–7 days for uncomplicated cellulitis, extended only if not improving.'}
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
                      ? 'Hold det berørte område rent og dækket med en løs bandage som anvist af din læge. Undgå at trykke eller stramme omkring det inficerede område.'
                      : 'Keep the affected area clean and covered with a loose bandage as directed by your doctor. Avoid applying pressure or constriction around the infected area.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🖊️ Markér kanten af rødmen' : '🖊️ Mark the edge of the redness'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Tegn en streg langs kanten af rødmen med en kuglepen, og skriv dato og klokkeslæt ved siden af. Breder rødmen sig ud over stregen, virker behandlingen ikke som den skal.'
                      : 'Draw a line along the edge of the redness with a pen and write the date and time beside it. If the redness spreads past that line, the treatment is not working as it should.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🌡️ Overvåg symptomer' : '🌡️ Monitor symptoms'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hold øje med din temperatur, og kontakt straks din læge ved forværring — hurtig spredning af rødme, stærk feber eller forvirring. De fleste begynder at få det bedre inden for 48 timer på antibiotika.'
                      : 'Monitor your temperature and contact your doctor immediately if symptoms worsen — rapidly spreading redness, high fever or confusion. Most people start to improve within 48 hours of starting antibiotics.'}
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
                      ? 'Ubehandlet cellulitis kan føre til alvorlige komplikationer, herunder blodforgiftning (sepsis), dybere vævsinfektioner og i sjældne tilfælde amputation. Behandling samme dag er afgørende.'
                      : 'Untreated cellulitis can lead to serious complications including blood poisoning (sepsis), deeper tissue infections and in rare cases amputation. Same-day treatment is essential.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er rødme i begge underben cellulitis?' : 'Is redness in both lower legs cellulitis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Som regel ikke. Cellulitis er næsten altid ensidig. Rødme, hævelse og skæl i begge underben på én gang skyldes langt oftere staseeksem, der behandles med kompression og fugtighedscreme frem for antibiotika. Få det vurderet frem for at gætte.'
                      : 'Usually not. Cellulitis is almost always one-sided. Redness, swelling and scaling in both lower legs at once is far more often venous eczema, which is treated with compression and emollients rather than antibiotics. Have it assessed rather than assuming either way.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan forebygger jeg cellulitis?' : 'How do I prevent cellulitis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Rens og dæk alle hudskader — også de små — med det samme. Hold huden fugtet for at undgå revner, behandl fodsvamp mellem tæerne, brug beskyttelsesudstyr ved risiko for hudskader, og hold diabetes godt reguleret.'
                      : 'Clean and cover all skin injuries — even small ones — straight away. Keep skin moisturised to avoid cracks, treat athlete’s foot between the toes, use protective equipment where there is a risk of skin injury, and keep diabetes well controlled.'}
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
                  {isDa ? 'Har du mistanke om cellulitis? Bliv set i dag' : 'Think you have cellulitis? Get seen today'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Mistanke om cellulitis kræver lægehjælp samme dag. Kontakt din egen læge eller lægevagten uden for åbningstid — og ring 112 ved feber, hurtigt spredende rødme eller påvirket almentilstand. Brug SKIND til opfølgning og til hudlidelser, der ikke er akutte.'
                    : 'Suspected cellulitis needs same-day care. Contact your GP or, out of hours, lægevagten — and call 112 if you have a fever, rapidly spreading redness, or feel very unwell. Use SKIND for follow-up and for skin conditions that are not acute.'}
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
