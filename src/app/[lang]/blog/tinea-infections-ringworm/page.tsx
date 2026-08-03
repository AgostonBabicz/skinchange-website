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
        title: 'Ringorm (tinea): symptomer og behandling | SKIND',
        description:
          'Ringorm og tinea: hvordan svampeinfektionen ser ud, hvordan den smitter, og hvordan fodsvamp, lyskesvamp og neglesvamp behandles. Få en vurdering via SKIND.',
        keywords:
          'hvad er ringorm, tinea corporis, fodsvamp, lyskesvamp, neglesvamp, ringorm symptomer, svampeinfektion hud, tinea behandling, hudlæge svamp, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/tinea-infections-ringworm',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/tinea-infections-ringworm',
            da: 'https://www.skinchange.dk/da/blog/tinea-infections-ringworm',
            en: 'https://www.skinchange.dk/en/blog/tinea-infections-ringworm',
          },
        },
      }
    : {
        title: 'Ringworm (tinea): symptoms and treatment | SKIND',
        description:
          'Ringworm and tinea: what the infection looks like, how it spreads, and how athlete\'s foot, jock itch and nail fungus are treated. Get an assessment via SKIND.',
        keywords:
          'what is ringworm, tinea corporis, athlete\'s foot, jock itch, nail fungus, ringworm symptoms, fungal skin infection, tinea treatment, dermatologist fungus, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/tinea-infections-ringworm',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/tinea-infections-ringworm',
            da: 'https://www.skinchange.dk/da/blog/tinea-infections-ringworm',
            en: 'https://www.skinchange.dk/en/blog/tinea-infections-ringworm',
          },
        },
      };
}

export default function TineaInfectionsRingwormPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Ringorm (Tinea)? Årsager, Symptomer og Behandling'
      : 'What is Ringworm (Tinea)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til ringorm og tinea-infektioner: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to ringworm and tinea infections: what it is, causes, symptoms and treatment options.',
    image: '/blog-tinea-ringworm.jpg',
    datePublished: '2026-03-17',
    dateModified: '2026-03-17',
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
            name: 'Er ringorm smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Ringorm smitter let via direkte hudkontakt med en inficeret person, via inficerede dyr eller via kontaminerede genstande som håndklæder, sko og gulvoverflader. God håndhygiejne og undgåelse af deling af personlige genstande reducerer smitterisikoen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ringorm forsvinde af sig selv?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Meget sjældent. De fleste tinea-infektioner kræver aktiv behandling med svampedræbende midler. Uden behandling vil infektionen typisk brede sig og kan smitte andre. Neglesvamp og ringorm i hovedbunden kræver altid receptpligtig behandling.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis infektionen ikke bedres efter 2–3 uger med håndkøbsbehandling, hvis den er udbredt eller rammer hovedbund eller negle, hvis du er immunsvækket, eller hvis du er usikker på diagnosen. SKIND giver dig adgang til en certificeret hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is ringworm contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Ringworm spreads easily through direct skin contact with an infected person, via infected animals, or through contaminated objects such as towels, shoes and floor surfaces. Good hand hygiene and avoiding sharing personal items reduces the risk of transmission.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can ringworm go away on its own?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Very rarely. Most tinea infections require active treatment with antifungal medications. Without treatment the infection will typically spread and can be passed on to others. Nail infection and scalp ringworm always require prescription treatment.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if the infection does not improve after 2–3 weeks of over-the-counter treatment, if it is widespread or affects the scalp or nails, if you are immunocompromised, or if you are uncertain about the diagnosis. SKIND gives you access to a certified dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Ringorm (Tinea)?' : 'What is Ringworm (Tinea)?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">
                {isDa ? '17. marts 2026' : 'March 17, 2026'}
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Ringorm (Tinea)? Årsager, Symptomer og Behandling'
                : 'What is Ringworm (Tinea)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-tinea-ringworm.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en rund ringorm-plet på huden med rød, hævet kant og lysere midte.'
                    : 'Close-up of a round ringworm patch on the skin with a red, raised border and paler centre.'
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
                    <strong>Ringorm er ikke en orm</strong> — det er en svampeinfektion forårsaget af
                    mikroskopiske svampe kaldet dermatofytter. På trods af det vildledende navn er tilstanden
                    utrolig almindelig og rammer hud, hår og negle overalt på kroppen.
                  </>
                ) : (
                  <>
                    <strong>Ringworm is not actually a worm</strong> — it is a fungal infection caused by
                    microscopic fungi called dermatophytes. Despite the misleading name, the condition is
                    incredibly common and can affect the skin, hair and nails anywhere on the body.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad tinea-infektioner er, de forskellige typer, hvad der forårsager dem, og hvad du kan gøre ved dem.'
                  : 'In this article, we explain exactly what tinea infections are, the different types, what causes them, and what you can do about them.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er ringorm (tinea)?' : 'What is ringworm (tinea)?'}
              </h2>
              <p>
                {isDa
                  ? 'Tinea er det medicinske samlebegreb for svampeinfektioner forårsaget af dermatofytter — svampe der ernærer sig af keratin, det protein der findes i hud, hår og negle. Disse svampe trives i varme, fugtige miljøer og kan spredes fra person til person, fra dyr til menneske eller fra forurenede overflader.'
                  : 'Tinea is the medical umbrella term for fungal infections caused by dermatophytes — fungi that feed on keratin, the protein found in skin, hair and nails. These fungi thrive in warm, moist environments and can spread from person to person, from animals to humans, or from contaminated surfaces.'}
              </p>
              <p>
                {isDa
                  ? 'Betegnelsen "ringorm" stammer fra det klassiske ringformede udseende af infektionen på kroppen — ikke fra en parasitær orm. Det er rent faktisk en svampeinfektion, der behandles med svampedræbende midler.'
                  : 'The term "ringworm" comes from the classic ring-shaped appearance of the infection on the body — not from any parasitic worm. It is in fact a fungal infection treated with antifungal medications.'}
              </p>

              {/* Types */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvilke typer tinea-infektioner findes der?' : 'Which types of tinea infection are there?'}
              </h2>
              <p>
                {isDa
                  ? 'Tinea navngives efter det kropssegment der er ramt:'
                  : 'Tinea is named according to the body part affected:'}
              </p>
              <ul className="list-disc pl-6 space-y-4 my-4">
                <li>
                  <strong>{isDa ? 'Tinea corporis (ringorm på kroppen):' : 'Tinea corporis (ringworm of the body):'}</strong>{' '}
                  {isDa
                    ? 'Den klassiske ringformede, røde, kløende plet på huden med hævet kant og ofte klart center. Den mest genkendelige type.'
                    : 'The classic circular, red, itchy patch on the skin with a raised edge and often a clear centre. The most recognisable type.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tinea cruris (lyskesvamp):' : 'Tinea cruris (jock itch):'}</strong>{' '}
                  {isDa
                    ? 'Svamp i lysken, der påvirker lyskeområdet og de indre lår. Giver intens kløe, brændende fornemmelse og rødme — hyppigst hos mænd og folk der sveder meget. Det er en svampeinfektion, ikke en form for eksem, og skal derfor behandles med svampedræbende creme.'
                    : 'Affects the groin area and inner thighs. Causes intense itching, burning and redness — most frequent in men and people who sweat heavily. It is a fungal infection, not a form of eczema, and needs an antifungal cream rather than a steroid.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tinea pedis (fodsvamp):' : 'Tinea pedis (athlete\'s foot):'}</strong>{' '}
                  {isDa
                    ? 'Udvikler sig typisk mellem tæerne og på fodsålen. Giver kløe, brændende fornemmelse, skæl og undertiden blæredannelse. Den mest udbredte tinea-type globalt.'
                    : 'Typically develops between the toes and on the sole of the foot. Causes itching, burning, scaling and sometimes blistering. The most widespread type of tinea globally.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tinea capitis (ringorm på hovedbunden):' : 'Tinea capitis (ringworm of the scalp):'}</strong>{' '}
                  {isDa
                    ? 'Primært et barndomsproblem. Forårsager skællende, kløende pletter på hovedbunden, hårtab og knækkede hårskafter. Kræver oralt svampedræbende middel — cremer er ikke tilstrækkelige.'
                    : 'Primarily a childhood problem. Causes scaly, itchy patches on the scalp, hair loss and broken hair shafts. Requires oral antifungal medication — creams are not sufficient.'}
                </li>
                <li>
                  {isDa ? (
                    <>
                      <strong>Tinea unguium (neglesvamp med dermatofytter):</strong> Rammer tå- og fingernegle, der bliver misfarvede
                      (gule/brune), tykke, sprøde og smuldrende. Tinea unguium er den dermatofyt-udløste form for onykomykose –
                      onykomykose er det bredere begreb, som også dækker negleinfektion med skimmelsvampe og med <em>Candida</em>.
                      Den sværeste type at behandle.
                    </>
                  ) : (
                    <>
                      <strong>Tinea unguium (dermatophyte nail infection):</strong> Affects toenails and fingernails, which become
                      discoloured (yellow/brown), thickened, brittle and crumbly. Tinea unguium is the dermatophyte form of
                      onychomycosis — onychomycosis is the broader term, which also covers nail infection with non-dermatophyte
                      moulds and with <em>Candida</em>. The most difficult type to treat.
                    </>
                  )}
                </li>
              </ul>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser ringorm ud?' : 'What does ringworm look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Det visuelle udtryk afhænger af typen, men generelle kendetegn inkluderer:'
                  : 'The appearance depends on the type, but general characteristics include:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  {isDa
                    ? 'Cirkulære, røde, kløende pletter med hævede kanter — klassisk for tinea corporis'
                    : 'Circular, red, itchy patches with raised borders — classic for tinea corporis'}
                </li>
                <li>
                  {isDa
                    ? 'Skæl og afskalning af huden — særligt ved fodsvamp'
                    : 'Scaling and flaking skin — particularly with athlete\'s foot'}
                </li>
                <li>
                  {isDa
                    ? 'Blærer eller små knopper kan opstå i visse tilfælde'
                    : 'Blisters or small bumps can develop in certain cases'}
                </li>
                <li>
                  {isDa
                    ? 'Hårtab og knækkede hår ved infektion på hovedbunden'
                    : 'Hair loss and broken hairs with scalp infection'}
                </li>
                <li>
                  {isDa
                    ? 'Misfarvede, fortykkede og smuldrende negle ved negleinfektion'
                    : 'Discoloured, thickened and crumbly nails with nail infection'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Vigtigt: Den centrale del af en ringormsplet heler ofte op med tiden, mens kanten fortsat breder sig — det giver den karakteristiske ring-effekt.'
                  : 'Important: the central area of a ringworm patch often clears up over time while the edge continues to spread — this creates the characteristic ring effect.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår tinea-infektioner?' : 'Why do tinea infections happen?'}
              </h2>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvorfor trives svampen i varme og fugtige miljøer?' : 'Why does the fungus thrive in warm, moist environments?'}
              </h3>
              <p>
                {isDa
                  ? 'Dermatofytter trives optimalt i varme, fugtige omgivelser. Svedtendens, stramtsiddende tøj og aktiviteter der indebærer langvarig fugt (fx svømning, intensiv sport) øger risikoen markant. Omklædningsrum, fællesbrusere og swimmingpools er klassiske smittesteder.'
                  : 'Dermatophytes thrive optimally in warm, moist environments. Heavy sweating, tight-fitting clothing and activities involving prolonged moisture (e.g. swimming, intensive sport) significantly increase the risk. Locker rooms, shared showers and swimming pools are classic transmission sites.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Kan man få ringorm fra dyr?' : 'Can you catch ringworm from animals?'}
              </h3>
              <p>
                {isDa
                  ? 'Ja. Katte, hunde, kvæg og gnavere kan alle bære dermatofytter og overføre dem til mennesker via direkte kontakt. Inficerede dyr har ikke nødvendigvis synlige symptomer — en tilsyneladende rask kat kan sagtens smitte med ringorm.'
                  : 'Yes. Cats, dogs, cattle and rodents can all carry dermatophytes and transmit them to humans through direct contact. Infected animals do not necessarily show visible symptoms — an apparently healthy cat can still transmit ringworm.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Smitter ringorm via håndklæder og sko?' : 'Does ringworm spread via towels and shoes?'}
              </h3>
              <p>
                {isDa
                  ? 'Ja. Håndklæder, sportsudstyr, kam og børste, sko og sokker kan alle overføre svampen. Det er en hyppig smittevej, særligt i familier med børn i skolealderen.'
                  : 'Yes. Towels, sports equipment, combs and brushes, shoes and socks can all transfer the fungus. This is a common route of transmission, particularly in families with school-aged children.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvordan påvirker nedsat immunforsvar risikoen?' : 'How does a weakened immune system affect the risk?'}
              </h3>
              <p>
                {isDa
                  ? 'Mennesker med svækket immunforsvar — fx pga. hiv/aids, diabetes, kemoterapi eller immundæmpende medicin — er mere sårbare over for tinea-infektioner og kan opleve mere udbredte eller svære udbrud.'
                  : 'People with a weakened immune system — e.g. due to HIV/AIDS, diabetes, chemotherapy or immunosuppressive medication — are more vulnerable to tinea infections and may experience more widespread or severe outbreaks.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får tinea-infektioner?' : 'Who gets tinea infections?'}
              </h2>
              <p>
                {isDa
                  ? 'Tinea kan ramme alle, men visse grupper er mere udsatte:'
                  : 'Tinea can affect anyone, but certain groups are more susceptible:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Børn:' : 'Children:'}</strong>{' '}
                  {isDa
                    ? 'Særligt tilbøjelige til tinea capitis (ringorm på hovedbunden) pga. tæt kontakt i skoler og børnehaver.'
                    : 'Particularly prone to tinea capitis (scalp ringworm) due to close contact in schools and nurseries.'}
                </li>
                <li>
                  <strong>{isDa ? 'Sportsfolk og aktive mennesker:' : 'Athletes and active people:'}</strong>{' '}
                  {isDa
                    ? 'Kombinationen af sved, tæt kontakt og delte faciliteter øger risikoen for fodsvamp og lyskesvamp markant.'
                    : 'The combination of sweat, close contact and shared facilities significantly increases the risk of athlete\'s foot and jock itch.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer i tætte fællesskaber:' : 'People in close-quarters settings:'}</strong>{' '}
                  {isDa
                    ? 'Kollegier, kaserner og plejehjem er risikofyldte miljøer pga. fælles bade- og toiletforhold.'
                    : 'Dormitories, military barracks and nursing homes are high-risk environments due to shared bathing and toilet facilities.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkede:' : 'Immunocompromised individuals:'}</strong>{' '}
                  {isDa
                    ? 'Sygdom eller medicin der svækker immunforsvaret øger risikoen og sværhedsgraden.'
                    : 'Illness or medications that weaken the immune system increase both the risk and severity.'}
                </li>
                <li>
                  <strong>{isDa ? 'Dyreejere:' : 'Pet owners:'}</strong>{' '}
                  {isDa
                    ? 'Tæt kontakt med katte og hunde der bærer dermatofytter.'
                    : 'Close contact with cats and dogs that carry dermatophytes.'}
                </li>
              </ul>

              {/* Diagnosis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan bekræftes diagnosen?' : 'How is the diagnosis confirmed?'}
              </h2>
              <p>
                {isDa
                  ? 'Mange udslæt ligner ringorm uden at være det. Før behandlingen begynder — og altid før der udskrives tabletter — bør diagnosen bekræftes på hudskrab, negleklip eller udtrukne hår, der undersøges ved direkte mikroskopi, svampedyrkning eller PCR. Det gælder især hovedbund og negle, hvor behandlingen betyder uger til måneders receptpligtig systemisk medicin.'
                  : 'Many rashes look like ringworm without being it. Before treatment starts — and always before tablets are prescribed — the diagnosis should be confirmed on skin scrapings, nail clippings or plucked hairs, examined by direct microscopy, fungal culture or PCR. This matters most for the scalp and the nails, where treatment means weeks to months of a prescription systemic drug.'}
              </p>
              <p>
                {isDa
                  ? 'Det er også vigtigt, fordi den hyppigste fejl er at smøre et mistænkt svampeudslæt med binyrebarkhormon. Steroidcremen dæmper rødme og kløe i nogle dage, mens svampen vokser videre, og resultatet er et udflydende, utydeligt udslæt — kaldet tinea incognito — som er sværere både at genkende og at behandle. Er udslættet ikke klart diagnosticeret, så lad være med at smøre steroidcreme på det.'
                  : 'It also matters because the commonest mistake is to put a topical steroid on a suspected fungal rash. The steroid calms the redness and itch for a few days while the fungus keeps growing, and the result is a spread-out, poorly defined rash — known as tinea incognito — that is harder both to recognise and to treat. If a rash has not been clearly diagnosed, do not put a steroid cream on it.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Ringorm på kroppen forveksles jævnligt med{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      atopisk eksem
                    </Link>
                    , med{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seboroisk eksem
                    </Link>{' '}
                    i hovedbund og ansigt, og med{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      kontakteksem
                    </Link>
                    , hvor udslættet følger noget, huden har været i berøring med. Fælles for de tre er, at de ikke har ringormens
                    skarpe, skællende yderkant.
                  </>
                ) : (
                  <>
                    Ringworm on the body is regularly mistaken for{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      atopic eczema
                    </Link>
                    , for{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seborrhoeic dermatitis
                    </Link>{' '}
                    on the scalp and face, and for{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      contact dermatitis
                    </Link>
                    , where the rash follows something the skin has touched. None of the three has the sharp, scaly leading edge of
                    ringworm.
                  </>
                )}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved ringorm?' : 'What can you do about ringworm?'}
              </h2>
              <p>
                {isDa
                  ? 'Den gode nyhed: tinea-infektioner er stort set altid behandlelige. Valg af behandling afhænger af type og sværhedsgrad:'
                  : 'The good news: tinea infections are almost always treatable. The choice of treatment depends on the type and severity:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧴 Topiske svampedræbende midler (mild til moderat infektion)' : '🧴 Topical antifungals (mild to moderate infection)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer og salver med clotrimazol, miconazol, terbinafin eller ketoconazol er effektive ved tinea corporis, lyskesvamp og mild fodsvamp. Behandlingen skal fortsættes i mindst 2 uger efter, at symptomerne er forsvundet.'
                      : 'Creams and ointments containing clotrimazole, miconazole, terbinafine or ketoconazole are effective for tinea corporis, jock itch and mild athlete\'s foot. Treatment should continue for at least 2 weeks after symptoms disappear.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Oral svampedræbende behandling (svær eller hårdnakket infektion)' : '💊 Oral antifungal treatment (severe or stubborn infection)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Tinea capitis kræver altid oral behandling. Terbinafin er førstevalg i Danmark, mens itraconazol og fluconazol er alternativer; griseofulvin, der længe var det klassiske middel, markedsføres ikke længere i Danmark og er stort set trukket tilbage i EU. Neglesvamp behandles med oral terbinafin i cirka 6 uger ved fingernegle og 12 uger ved tånegle. Receptpligtig.'
                      : 'Tinea capitis always requires oral treatment. Terbinafine is first-line in Denmark, with itraconazole and fluconazole as alternatives; griseofulvin, long the classic choice, is no longer marketed in Denmark and has largely been withdrawn across the EU. Nail infection is treated with oral terbinafine for about 6 weeks for fingernails and 12 weeks for toenails. Prescription required.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '⏳ Neglen skal vokse ud bagefter' : '⏳ The nail still has to grow out'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Tabletkuren stopper infektionen, men den beskadigede negl ser fortsat unormal ud, indtil den er vokset helt ud. Det tager yderligere 6–12 måneder — det er altså ikke tegn på, at behandlingen har svigtet.'
                      : 'The course of tablets stops the infection, but the damaged nail continues to look abnormal until it has fully grown out. That takes a further 6–12 months — it is not a sign that the treatment has failed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧼 Hygiejne og forebyggelse' : '🧼 Hygiene and prevention'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Vask og tør berørte områder grundigt. Undgå at dele håndklæder, sko og tøj. Brug sandaler i omklædningsrum og ved offentlige badeanlæg. Skift sokker og undertøj dagligt og vælg åndbart stof.'
                      : 'Wash and dry affected areas thoroughly. Avoid sharing towels, shoes and clothing. Wear sandals in locker rooms and at public bathing facilities. Change socks and underwear daily and choose breathable fabrics.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🐾 Behandl inficerede kæledyr' : '🐾 Treat infected pets'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hvis din kat eller hund er smittekilden, skal dyret behandles af en dyrlæge, ellers vil geninfektioner fortsætte.'
                      : 'If your cat or dog is the source of infection, the animal must be treated by a veterinarian, otherwise reinfections will continue.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Tinea-infektioner er klassificeret som 1F28 Dermatophytosis i WHO\'s internationale sygdomsklassifikation (ICD-11). De er karakteriseret ved ringformede, skællende pletter forårsaget af dermatofytsvampe og behandles primært med topiske eller orale svampedræbende midler.'
                    : "Tinea infections are classified as 1F28 Dermatophytosis in the WHO's International Classification of Diseases (ICD-11). They are characterised by annular, scaly plaques caused by dermatophyte fungi and are primarily treated with topical or oral antifungals."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er ringorm smitsomt?' : 'Is ringworm contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja. Ringorm smitter let via direkte hudkontakt med en inficeret person, via inficerede dyr eller via kontaminerede genstande som håndklæder, sko og gulvoverflader. God håndhygiejne og undgåelse af deling af personlige genstande reducerer smitterisikoen.'
                      : 'Yes. Ringworm spreads easily through direct skin contact with an infected person, via infected animals, or through contaminated objects such as towels, shoes and floor surfaces. Good hand hygiene and avoiding sharing personal items reduces the risk of transmission.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan ringorm forsvinde af sig selv?' : 'Can ringworm go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Meget sjældent. De fleste tinea-infektioner kræver aktiv behandling med svampedræbende midler. Uden behandling vil infektionen typisk brede sig og kan smitte andre. Neglesvamp og ringorm i hovedbunden kræver altid receptpligtig behandling.'
                      : 'Very rarely. Most tinea infections require active treatment with antifungal medications. Without treatment the infection will typically spread and can be passed on to others. Nail infection and scalp ringworm always require prescription treatment.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis infektionen ikke bedres efter 2–3 uger med håndkøbsbehandling, hvis den er udbredt eller rammer hovedbund eller negle, hvis du er immunsvækket, eller hvis du er usikker på diagnosen. SKIND giver dig adgang til en certificeret hudlæge inden for 48 timer.'
                      : 'Contact a dermatologist if the infection does not improve after 2–3 weeks of over-the-counter treatment, if it is widespread or affects the scalp or nails, if you are immunocompromised, or if you are uncertain about the diagnosis. SKIND gives you access to a certified dermatologist within 48 hours.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge — uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
