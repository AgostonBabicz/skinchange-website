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
        title: 'Kontakteksem (kontaktdermatitis): behandling | SKIND',
        description:
          'Kontakteksem opstår, når huden reagerer på noget, den har rørt ved. Læs om irritativ og allergisk kontaktdermatitis, lappeprøver, behandling og forebyggelse.',
        keywords:
          'kontaktdermatitis, kontakteksem, allergisk kontaktdermatitis, irritativ kontaktdermatitis, nikkelallergi, lappeprøve, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/contact-dermatitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/contact-dermatitis',
            da: 'https://www.skinchange.dk/da/blog/contact-dermatitis',
            en: 'https://www.skinchange.dk/en/blog/contact-dermatitis',
          },
        },
      }
    : {
        title: 'Contact dermatitis: symptoms and treatment | SKIND',
        description:
          'Contact dermatitis occurs when the skin reacts to something it has touched. Learn about irritant and allergic types, patch testing, treatment and prevention.',
        keywords:
          'contact dermatitis, contact eczema, allergic contact dermatitis, irritant contact dermatitis, nickel allergy, patch testing, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/contact-dermatitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/contact-dermatitis',
            da: 'https://www.skinchange.dk/da/blog/contact-dermatitis',
            en: 'https://www.skinchange.dk/en/blog/contact-dermatitis',
          },
        },
      };
}

export default function ContactDermatitisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Kontaktdermatitis? Årsager, Symptomer og Behandling'
      : 'What is Contact Dermatitis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til kontaktdermatitis: hvad det er, de to hovedtyper, symptomer og behandlingsmuligheder.'
      : 'Complete guide to contact dermatitis: what it is, the two main types, symptoms and treatment options.',
    image: '/blog-contact-dermatitis.jpg',
    datePublished: '2026-03-19',
    dateModified: '2026-03-19',
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
            name: 'Er kontaktdermatitis smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, kontaktdermatitis er ikke smitsomt og kan ikke spredes fra person til person. Det er en lokal hudreaktion på et irriterende stof eller allergen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis udslættet er omfattende, ikke bedres efter en uge med undgåelse, forværres kraftigt, eller hvis du har mistanke om et specifikt allergen, der skal identificeres med lappeprøver.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan forebygger jeg kontaktdermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Forebyggelse handler om at minimere kontakt med kendte irritanter og allergener. Brug beskyttelseshandsker, vælg parfumefrie produkter, og hold huden fugtet med milde fugtighedscremer for at styrke barrierefunktionen.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is contact dermatitis contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, contact dermatitis is not contagious and cannot be spread from person to person. It is a local skin reaction to an irritant substance or allergen.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if the rash is extensive, does not improve after a week of avoidance, worsens significantly, or if you suspect a specific allergen that needs to be identified through patch testing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I prevent contact dermatitis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prevention is about minimising contact with known irritants and allergens. Wear protective gloves, choose fragrance-free products, and keep the skin moisturised with gentle creams to strengthen the barrier function.',
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
              <span className="text-gray-900">
                {isDa ? 'Hvad er Kontaktdermatitis?' : 'What is Contact Dermatitis?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '19. marts 2026' : 'March 19, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Kontaktdermatitis? Årsager, Symptomer og Behandling'
                : 'What is Contact Dermatitis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-contact-dermatitis.jpg"
                alt={
                  isDa
                    ? 'Håndryg med skarpt afgrænset rødme, små blærer og tør, revnet hud ved kontakteksem.'
                    : 'The back of a hand with sharply bordered redness, small blisters and dry, cracked skin from contact dermatitis.'
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
                    <strong>Kontaktdermatitis — i daglig tale kontakteksem — er en af de mest almindelige hudlidelser</strong>. Den opstår, når huden
                    reagerer på et stof, den har været i kontakt med. Det kan ramme alle — uanset alder eller
                    hudtype — og viser sig som rødme, kløe, blærer eller tørhed på de berørte områder.
                  </>
                ) : (
                  <>
                    <strong>Contact dermatitis — also called contact eczema — is one of the most common skin conditions</strong>. It occurs when
                    the skin reacts to a substance it has touched. It can affect anyone — regardless of age or skin
                    type — and presents as redness, itching, blisters or dryness on the affected areas.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad kontaktdermatitis er, hvilke to hovedtyper der findes, hvordan det ser ud, hvordan en lappeprøve foregår, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what contact dermatitis is, the two main types that exist, what it looks like, how patch testing works, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is contact dermatitis */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er kontaktdermatitis?' : 'What is contact dermatitis?'}
              </h2>
              <p>
                {isDa ? (
                  <>
                    Kontaktdermatitis — på dansk også kaldet kontakteksem — er en betændelsestilstand i huden, der opstår som en direkte reaktion på et stof, huden har været i kontakt med. Til forskel fra{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      atopisk eksem
                    </Link>{' '}
                    kræver kontaktdermatitis altid en ydre udløser. Arvelige forhold spiller dog stadig en rolle: har du fra naturens hånd en svagere hudbarriere, skal der mindre til, før huden reagerer. Det betyder også, at hvis du kan identificere og fjerne udløseren, forsvinder symptomerne ofte.
                  </>
                ) : (
                  <>
                    Contact dermatitis — also known as contact eczema — is an inflammatory skin condition that arises as a direct reaction to a substance the skin has touched. Unlike{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      atopic eczema
                    </Link>
                    , contact dermatitis always requires an external trigger. Inherited factors still matter, though: if your skin barrier is naturally weaker, less exposure is needed before the skin reacts. It also means that if you can identify and remove the trigger, symptoms often disappear.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'Der findes to hovedtyper af kontaktdermatitis, og det er vigtigt at skelne mellem dem, da behandlingen kan variere:'
                  : 'There are two main types of contact dermatitis, and it is important to distinguish between them as treatment may vary:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Irritativ kontaktdermatitis:' : 'Irritant contact dermatitis:'}</strong>{' '}
                  {isDa
                    ? 'Den hyppigste type. Opstår, når et stof direkte skader hudens beskyttende barriere — uanset om du tidligere har været udsat for stoffet eller ej. Alle kan udvikle det ved tilstrækkelig eksponering.'
                    : 'The most common type. Occurs when a substance directly damages the skin\'s protective barrier — regardless of whether you have been exposed to it before. Anyone can develop it with sufficient exposure.'}
                </li>
                <li>
                  <strong>{isDa ? 'Allergisk kontaktdermatitis:' : 'Allergic contact dermatitis:'}</strong>{' '}
                  {isDa
                    ? 'En immunreaktion, hvor kroppens immunsystem reagerer på et specifikt allergen, du tidligere er blevet sensibiliseret over for. Kun personer med netop denne overfølsomhed udvikler symptomer.'
                    : 'An immune reaction in which the body\'s immune system reacts to a specific allergen you have previously been sensitised to. Only people with that specific hypersensitivity develop symptoms.'}
                </li>
              </ul>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser kontaktdermatitis ud?' : 'What does contact dermatitis look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Symptomerne varierer afhængigt af typen og sværhedsgraden af reaktionen, men almindelige tegn inkluderer:'
                  : 'Symptoms vary depending on the type and severity of the reaction, but common signs include:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Rødme og betændelse:' : 'Redness and inflammation:'}</strong>{' '}
                  {isDa
                    ? 'Berørte områder kan se røde, hævede og varme ud.'
                    : 'Affected areas may appear red, swollen and warm to the touch.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kløe og svie:' : 'Itching and burning:'}</strong>{' '}
                  {isDa
                    ? 'Intens kløe, svie eller stikkende fornemmelser er typiske.'
                    : 'Intense itching, burning or stinging sensations are typical.'}
                </li>
                <li>
                  <strong>{isDa ? 'Blærer og knopper:' : 'Blisters and bumps:'}</strong>{' '}
                  {isDa
                    ? 'I nogle tilfælde kan der dannes små blærer eller knopper på den berørte hud.'
                    : 'In some cases, small blisters or bumps may develop on the affected skin.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tørhed og skæl:' : 'Dryness and scaling:'}</strong>{' '}
                  {isDa
                    ? 'Kronisk eksponering kan føre til tør, revnet og skællende hud.'
                    : 'Chronic exposure can lead to dry, cracked and scaly skin.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Kontaktdermatitis optræder typisk på hænder, håndled, arme og i ansigtet — områder, der oftest er i kontakt med irriterende stoffer. Reaktionen er ofte begrænset til det område, der har været i direkte kontakt med udløseren, men kan i allergiske tilfælde brede sig til andre områder.'
                  : 'Contact dermatitis typically appears on the hands, wrists, arms and face — areas most often in contact with irritant substances. The reaction is often limited to the area that has been in direct contact with the trigger, but in allergic cases it can spread to other areas.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår kontaktdermatitis?' : 'Why does contact dermatitis happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Årsagen afhænger af typen:'
                  : 'The cause depends on the type:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad udløser irritativ kontaktdermatitis?' : 'What causes irritant contact dermatitis?'}
              </h3>
              <p>
                {isDa
                  ? 'Direkte skade på huden. Irritativ kontaktdermatitis opstår, når et stof beskadiger hudens yderste beskyttende lag — epidermis. Skaden forstyrrer barrierefunktionen og udløser betændelse. Jo stærkere irritanten er, og jo længere eksponeringstiden er, jo større er risikoen.'
                  : 'Direct damage to the skin. Irritant contact dermatitis occurs when a substance damages the outermost protective layer of the skin — the epidermis. The damage disrupts the barrier function and triggers inflammation. The stronger the irritant and the longer the exposure, the greater the risk.'}
              </p>
              <p>
                {isDa
                  ? 'Almindelige irritanter inkluderer sæber, rengøringsmidler, opløsningsmidler, olier, syrer, baser og planter som brændenælder. Selv gentagen vandeksponering — for eksempel hyppig håndvask — kan udtørre huden og føre til irritativ dermatitis.'
                  : 'Common irritants include soaps, detergents, solvents, oils, acids, alkalis and plants such as nettles. Even repeated water exposure — for example frequent hand washing — can dry out the skin and lead to irritant dermatitis.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad udløser allergisk kontaktdermatitis?' : 'What causes allergic contact dermatitis?'}
              </h3>
              <p>
                {isDa
                  ? 'En forsinket immunreaktion (type IV-overfølsomhed), hvor immunsystemet aktiveres mod et specifikt allergen. Reaktionen kan tage 24–72 timer at vise sig efter eksponering.'
                  : 'A delayed immune reaction (type IV hypersensitivity) in which the immune system is activated against a specific allergen. The reaction may take 24–72 hours to appear after exposure.'}
              </p>
              <p>
                {isDa
                  ? 'Almindelige allergener inkluderer nikkel (i smykker og metaldele), parfumer, kosmetik, konserveringsmidler, perubalsam, visse lægemidler og harpikser fra planter. Selv produkter, du har brugt i årevis, kan pludselig udløse en allergisk reaktion, fordi sensibiliseringen kan udvikle sig over tid.'
                  : 'Common allergens include nickel (in jewellery and metal parts), fragrances, cosmetics, preservatives, balsam of Peru, certain medications and resins from plants. Even products you have used for years can suddenly trigger an allergic reaction, because sensitisation can develop over time.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvorfor er latex en anden slags allergi?' : 'Why is latex a different kind of allergy?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Fordi naturgummilatex er det klassiske type I-allergen. Reaktionen er IgE-medieret og indtræder inden for minutter — ikke timer. Latexallergi giver{' '}
                    <Link href={`/${lang}/blog/urticaria-hives`} className="text-primary underline hover:text-primary-900">
                      kontakturticaria (nældefeber)
                    </Link>{' '}
                    på kontaktstedet, hævelse af slimhinder (angioødem) og i værste fald anafylaksi. Bemærk, at gummihandsker desuden kan give en klassisk, forsinket type IV-allergi over for de kemikalier, gummiet er fremstillet med — to helt forskellige reaktioner på det samme produkt.
                  </>
                ) : (
                  <>
                    Because natural rubber latex is the classic type I allergen. The reaction is IgE-mediated and begins within minutes — not hours. Latex allergy causes{' '}
                    <Link href={`/${lang}/blog/urticaria-hives`} className="text-primary underline hover:text-primary-900">
                      contact urticaria (hives)
                    </Link>{' '}
                    at the site of contact, swelling of mucous membranes (angio-oedema) and, at worst, anaphylaxis. Note that rubber gloves can also cause a classic delayed type IV allergy to the chemicals used to make the rubber — two entirely different reactions to the same product.
                  </>
                )}
              </p>

              {/* Red flags */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Ring 112, hvis du efter kontakt med latex eller et andet allergen får hævelse af ansigt, læber, tunge eller svælg, hvæsende vejrtrækning, åndenød, svimmelhed eller pludselig udbredt nældefeber. Det kan være anafylaksi, som udvikler sig i løbet af minutter og kræver adrenalin med det samme. Har du fået konstateret latexallergi, skal du oplyse det ved al tandlæge- og hospitalsbehandling.'
                    : 'Call 112 if, after contact with latex or another allergen, you develop swelling of the face, lips, tongue or throat, wheezing, difficulty breathing, dizziness or sudden widespread hives. This can be anaphylaxis, which develops within minutes and needs adrenaline immediately. If you have been diagnosed with latex allergy, tell every dentist and hospital department that treats you.'}
                </p>
              </div>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får kontaktdermatitis?' : 'Who gets contact dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Alle kan udvikle kontaktdermatitis, men visse faktorer øger sårbarheden:'
                  : 'Anyone can develop contact dermatitis, but certain factors increase susceptibility:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Hyppig eksponering for kemikalier:' : 'Frequent exposure to chemicals:'}</strong>{' '}
                  {isDa
                    ? 'Sundhedspersonale, frisører, rengøringspersonale og mekanikere er særligt udsatte.'
                    : 'Healthcare workers, hairdressers, cleaning staff and mechanics are particularly exposed.'}
                </li>
                <li>
                  <strong>{isDa ? 'Underliggende hudtilstande:' : 'Underlying skin conditions:'}</strong>{' '}
                  {isDa
                    ? 'Personer med atopisk eksem har en svækket hudbarriere og er mere modtagelige.'
                    : 'People with atopic eczema have a weakened skin barrier and are more susceptible.'}
                </li>
                <li>
                  <strong>{isDa ? 'Specifikke allergener:' : 'Specific allergens:'}</strong>{' '}
                  {isDa
                    ? 'Nikkelallergi er blandt de mest udbredte kontaktallergier globalt.'
                    : 'Nickel allergy is among the most common contact allergies worldwide.'}
                </li>
                <li>
                  <strong>{isDa ? 'Erhverv med høj eksponering:' : 'Occupations with high exposure:'}</strong>{' '}
                  {isDa
                    ? 'Frisører, laboranter, metalarbejdere, sundhedspersonale og landbrugsarbejdere har forhøjet risiko.'
                    : 'Hairdressers, laboratory workers, metalworkers, healthcare workers and agricultural workers have elevated risk.'}
                </li>
              </ul>

              {/* Patch testing */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan foregår en lappeprøve?' : 'How does patch testing work?'}
              </h2>
              <p>
                {isDa
                  ? 'Små mængder af de mest almindelige allergener påføres ryggen under plastre. Undersøgelsen kræver flere besøg hen over cirka en uge: plastrene sættes på, fjernes efter 48 timer, og huden aflæses igen efter 72–96 timer, fordi en type IV-reaktion udvikler sig langsomt.'
                  : 'Small amounts of the most common allergens are applied to the back under adhesive patches. The investigation takes several visits over about a week: the patches go on, come off after 48 hours, and the skin is read again at 72–96 hours, because a type IV reaction develops slowly.'}
              </p>
              <p>
                {isDa
                  ? 'Forberedelsen har stor betydning for resultatet. Lokalsteroid må ikke bruges på testområdet i ugerne op til undersøgelsen, og systemisk steroid eller anden immundæmpende behandling bør så vidt muligt undgås, da begge dele kan dæmpe en ægte reaktion og give et falsk negativt svar. Ryggen skal desuden holdes tør, og du bør undgå kraftig sved og sol i testperioden.'
                  : 'Preparation matters a great deal for the result. Topical steroids must not be used on the test site in the weeks beforehand, and systemic steroids or other immunosuppressive treatment should be avoided where possible, since both can suppress a genuine reaction and produce a false negative. The back also needs to be kept dry, and heavy sweating and sun exposure should be avoided during the test period.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved kontaktdermatitis?' : 'What can you do about contact dermatitis?'}
              </h2>
              <p>
                {isDa
                  ? 'Kontaktdermatitis er håndterbar, og i de fleste tilfælde forsvinder symptomerne, når udløseren identificeres og fjernes. Nøglen til succes er en kombination af undgåelse, pleje og medicinsk behandling:'
                  : 'Contact dermatitis is manageable, and in most cases symptoms disappear once the trigger is identified and removed. The key to success is a combination of avoidance, skincare and medical treatment:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🔍 Identificer og undgå udløseren' : '🔍 Identify and avoid the trigger'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Dette er det vigtigste skridt. Før en dagbog over symptomer og aktiviteter, og tal med en hudlæge om lappeprøver for at identificere specifikke allergener.'
                      : 'This is the most important step. Keep a diary of symptoms and activities, and discuss patch testing with a dermatologist to identify specific allergens.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧴 Beskyt huden' : '🧴 Protect the skin'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Brug beskyttelseshandsker ved håndtering af kemikalier. Fugt huden regelmæssigt med parfumefrie fugtighedscremer for at styrke barrierefunktionen.'
                      : 'Wear protective gloves when handling chemicals. Moisturise the skin regularly with fragrance-free moisturisers to strengthen the barrier function.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Medicinsk behandling' : '💊 Medical treatment'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kortikosteroidcremer eller -salver er standardbehandling mod inflammation og kløe. Ved svær eller udbredt allergisk kontaktdermatitis er standardbehandlingen et kort, nedtrappende forløb med kortikosteroid i tabletform — typisk over 2–3 uger — da et stærkere lokalsteroid sjældent er nok alene.'
                      : 'Corticosteroid creams or ointments are the standard treatment for inflammation and itching. For severe or widespread allergic contact dermatitis, the standard of care is a short, tapering course of oral corticosteroids — typically over 2–3 weeks — since a more potent topical steroid alone is rarely enough.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🚿 Skånsom hudpleje' : '🚿 Gentle skincare'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Undgå sæber med parfume og skrappe tensider. Brug lunkent i stedet for varmt vand, og undgå at gnide huden tør. Vælg rensere og fugtighedscremer formuleret til sensitiv hud.'
                      : 'Avoid soaps with fragrance and harsh surfactants. Use lukewarm water instead of hot water, and avoid rubbing the skin dry. Choose cleansers and moisturisers formulated for sensitive skin.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'I WHO\'s internationale sygdomsklassifikation (ICD-11) er kontaktdermatitis delt op i allergisk kontaktdermatitis (EK00) og irritativ kontaktdermatitis (EK02). Irritativ kontaktdermatitis udgør ca. 80% af alle tilfælde. Behandlingen baseres på identifikation og undgåelse af udløseren samt topiske steroider.'
                    : "In the WHO's International Classification of Diseases (ICD-11), contact dermatitis is divided into allergic contact dermatitis (EK00) and irritant contact dermatitis (EK02). Irritant contact dermatitis accounts for approximately 80% of all cases. Treatment is based on identification and avoidance of the trigger plus topical steroids."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er kontaktdermatitis smitsomt?' : 'Is contact dermatitis contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej, kontaktdermatitis er ikke smitsomt og kan ikke spredes fra person til person. Det er en lokal hudreaktion på et irriterende stof eller allergen.'
                      : 'No, contact dermatitis is not contagious and cannot be spread from person to person. It is a local skin reaction to an irritant substance or allergen.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis udslættet er omfattende, ikke bedres efter en uge med undgåelse, forværres kraftigt, eller hvis du har mistanke om et specifikt allergen, der skal identificeres med lappeprøver.'
                      : 'Contact a dermatologist if the rash is extensive, does not improve after a week of avoidance, worsens significantly, or if you suspect a specific allergen that needs to be identified through patch testing.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvordan forebygger jeg kontaktdermatitis?' : 'How do I prevent contact dermatitis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Forebyggelse handler om at minimere kontakt med kendte irritanter og allergener. Brug beskyttelseshandsker, vælg parfumefrie produkter, og hold huden fugtet med milde fugtighedscremer for at styrke barrierefunktionen.'
                      : 'Prevention is about minimising contact with known irritants and allergens. Wear protective gloves, choose fragrance-free products, and keep the skin moisturised with gentle creams to strengthen the barrier function.'}
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
                    ? 'Hvis du har et vedvarende hududslæt, du ikke kan identificere, kan du via SKIND-appen få en personlig vurdering fra en certificeret hudlæge — uden ventetid.'
                    : 'If you have a persistent skin rash you cannot identify, you can get a personal assessment from a certified dermatologist via the SKIND app — with no waiting list.'}
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
