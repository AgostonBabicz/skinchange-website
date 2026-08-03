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
        title: 'Nældefeber (urticaria): symptomer og behandling | SKIND',
        description:
          'Nældefeber: hvorfor kvadlerne opstår, hvad der udløser dem, hvornår det er akut, og hvordan de behandles. Få en vurdering fra en hudlæge via SKIND.',
        keywords:
          'hvad er nældefeber, urticaria symptomer, nældefeber årsager, nældefeber behandling, kronisk urticaria, hudlæge nældefeber, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/urticaria-hives',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/urticaria-hives',
            da: 'https://www.skinchange.dk/da/blog/urticaria-hives',
            en: 'https://www.skinchange.dk/en/blog/urticaria-hives',
          },
        },
      }
    : {
        title: 'Urticaria (hives): symptoms and treatment | SKIND',
        description:
          'Urticaria: why the wheals appear, what triggers them, when it is an emergency, and how hives are treated. Get an assessment from a dermatologist via SKIND.',
        keywords:
          'what is urticaria, hives symptoms, urticaria causes, hives treatment, chronic urticaria, dermatologist hives, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/urticaria-hives',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/urticaria-hives',
            da: 'https://www.skinchange.dk/da/blog/urticaria-hives',
            en: 'https://www.skinchange.dk/en/blog/urticaria-hives',
          },
        },
      };
}

export default function UrticariaHivesPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling'
      : 'What is Urticaria (Hives)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til nældefeber: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to urticaria (hives): what it is, causes, symptoms and treatment options.',
    image: '/blog-urticaria-hives.jpg',
    datePublished: '2026-03-14',
    dateModified: '2026-03-14',
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
            name: 'Er nældefeber farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I de fleste tilfælde er nældefeber ufarligt og forsvinder inden for timer til dage. Farligt kan det dog blive, hvis det ledsages af angioødem i svælget eller tegn på anafylaksi – ring da 112 med det samme.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvad er forskellen på akut og kronisk nældefeber?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Akut urticaria varer under 6 uger og skyldes oftest en identificerbar udløser som et allergen eller en infektion. Kronisk urticaria varer mere end 6 uger, og i mere end 80% af tilfældene findes der ingen ydre årsag (kronisk spontan urticaria). Begge former behandles primært med ikke-sederende antihistaminer.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis nældefeber varer mere end 6 uger, hvis antihistaminer ikke hjælper tilstrækkeligt i standarddosis, eller hvis udbruddene påvirker din søvn og hverdag. En hudlæge kan vurdere, om der er behov for højere dosis eller behandling ud over antihistaminer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is urticaria dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In most cases urticaria is harmless and resolves within hours to days. It can become dangerous if accompanied by angioedema of the throat or signs of anaphylaxis — call 112 immediately in those cases.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between acute and chronic urticaria?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Acute urticaria lasts under 6 weeks and is usually caused by an identifiable trigger such as an allergen or an infection. Chronic urticaria lasts more than 6 weeks, and in more than 80% of cases no external cause is found (chronic spontaneous urticaria). Both forms are primarily treated with non-sedating antihistamines.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if urticaria lasts more than 6 weeks, if a standard dose of antihistamine is not providing adequate relief, or if the outbreaks are affecting your sleep and daily life. A dermatologist can judge whether you need a higher dose or treatment beyond antihistamines.',
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
                {isDa ? 'Hvad er Nældefeber?' : 'What is Urticaria (Hives)?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '14. marts 2026' : 'March 14, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling'
                : 'What is Urticaria (Hives)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-urticaria-hives.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en underarm med hævede, lyserøde kvadler fra nældefeber.'
                    : 'Close-up of a forearm covered in raised, pink urticaria wheals.'
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
                    <strong>Nældefeber (urticaria) er en af de mest udbredte hudreaktioner</strong>, der rammer
                    op mod 20% af befolkningen i løbet af livet. De karakteristiske hævede, kløende kvadler
                    opstår pludseligt og kan forsvinde igen inden for timer – men bag dem ligger ofte en
                    fascinerende immunologisk reaktion.
                  </>
                ) : (
                  <>
                    <strong>Urticaria (hives) is one of the most common skin reactions</strong>, affecting up
                    to 20% of people at some point in their lives. The characteristic raised, itchy wheals
                    (welts) appear suddenly and can disappear within hours — yet behind them lies a fascinating
                    immunological reaction.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad nældefeber er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what urticaria is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er nældefeber?' : 'What is urticaria (hives)?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber, medicinsk betegnet urticaria, er en hudlidelse karakteriseret ved pludseligt opståede, hævede og kløende røde knopper kaldet kvadler (urticae). Kvadlerne opstår, når mastceller i huden frigiver histamin og andre signalstoffer lokalt i den omgivende læderhud (dermis), så de små blodkar dér udvider sig og lækker væske ud i vævet.'
                  : 'Urticaria, commonly known as hives, is a skin condition characterised by suddenly appearing raised, itchy red wheals. Wheals occur when mast cells in the skin release histamine and other mediators locally into the surrounding dermis, so that the small blood vessels there dilate and leak fluid into the tissue.'}
              </p>
              <p>
                {isDa
                  ? 'Frigivelsen er lokal – det er netop derfor, kvadlerne er skarpt afgrænsede og forbigående. Ved anafylaksi frigives de samme signalstoffer systemisk i hele kroppen, og det er den afgørende forskel mellem et almindeligt udbrud af nældefeber og en livstruende allergisk reaktion.'
                  : 'The release is local — which is exactly why wheals are sharply defined and transient. In anaphylaxis the same mediators are released systemically throughout the body, and that is the crucial difference between an ordinary outbreak of hives and a life-threatening allergic reaction.'}
              </p>
              <p>
                {isDa
                  ? 'Nældefeber er ikke smitsomt – du kan ikke give det til andre. En enkelt episode forsvinder normalt inden for 24 timer, men nye kvadler kan opstå, efterhånden som de gamle forsvinder. Hvis tilstanden varer mere end 6 uger, taler man om kronisk urticaria.'
                  : 'Urticaria is not contagious — you cannot pass it on to others. A single episode usually resolves within 24 hours, but new wheals may appear as old ones fade. When the condition persists for more than 6 weeks, it is classified as chronic urticaria.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser nældefeber ud?' : 'What does urticaria look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber har et ret karakteristisk udseende, der adskiller det fra andre hudlidelser:'
                  : 'Urticaria has a fairly distinctive appearance that sets it apart from other skin conditions:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Hævede, røde kvadler:' : 'Raised, red wheals:'}</strong>{' '}
                  {isDa
                    ? 'Knopperne kan variere i størrelse fra et par millimeter til flere centimeter og opstår overalt på kroppen. De er typisk røde i kanten og blege i midten.'
                    : 'The wheals can vary in size from a few millimetres to several centimetres and appear anywhere on the body. They are typically red at the edges with a pale centre.'}
                </li>
                <li>
                  <strong>{isDa ? 'Intens kløe:' : 'Intense itching:'}</strong>{' '}
                  {isDa
                    ? 'Kløen er ofte det mest generende symptom og kan være meget intens, særligt om natten eller i varme omgivelser.'
                    : 'Itching is often the most bothersome symptom and can be very intense, particularly at night or in warm environments.'}
                </li>
                <li>
                  <strong>{isDa ? 'Sammensmeltning:' : 'Confluence:'}</strong>{' '}
                  {isDa
                    ? 'Flere kvadler kan smelte sammen til større, uregelmæssige, hævede arealer, kaldet plaques.'
                    : 'Multiple wheals can merge into larger, irregular, raised areas called plaques.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hurtigt skiftende billede:' : 'Rapidly changing appearance:'}</strong>{' '}
                  {isDa
                    ? 'En enkelt kvaddel forsvinder normalt inden for 1–24 timer uden at efterlade mærker. Nye kvadler kan dog opstå andre steder på kroppen.'
                    : 'An individual wheal typically resolves within 1–24 hours without leaving a mark. However, new wheals may develop elsewhere on the body.'}
                </li>
              </ul>
              <p>
                {isDa ? (
                  <>
                    Netop det hurtige skift adskiller nældefeber fra{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-primary underline hover:text-primary-900">
                      kontakteksem
                    </Link>
                    , hvor udslættet bliver siddende samme sted i dage til uger og ofte skaller. Sidder den enkelte plet fast i mere
                    end 24 timer, gør ondt frem for at klø, eller efterlader den et blåligt mærke, bør en læge se på det.
                  </>
                ) : (
                  <>
                    It is this rapid turnover that distinguishes urticaria from{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-primary underline hover:text-primary-900">
                      contact dermatitis
                    </Link>
                    , where the rash stays in the same place for days to weeks and often scales. If an individual lesion lasts more
                    than 24 hours, hurts rather than itches, or leaves a bruise-like mark, it should be seen by a doctor.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I nogle tilfælde ledsages nældefeber af angioødem – en dybere hævelse under huden, typisk i ansigtet, læberne, tungen eller halsen. Angioødem kræver øjeblikkelig lægehjælp, særligt hvis halsen er involveret.'
                  : 'In some cases urticaria is accompanied by angioedema — a deeper swelling beneath the skin, typically affecting the face, lips, tongue or throat. Angioedema requires immediate medical attention, especially when the throat is involved.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår nældefeber?' : 'Why does urticaria happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber opstår, når mastceller i huden frigiver histamin som reaktion på en udløser. Udløserne kan inddeles i tre overordnede kategorier:'
                  : 'Urticaria occurs when mast cells in the skin release histamine in response to a trigger. Triggers can be divided into three main categories:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvilke allergener kan udløse nældefeber?' : 'Which allergens can trigger urticaria?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Fødevareallergier – særligt nødder, skaldyr, æg og mælk – er hyppige årsager til akut nældefeber. Medicin som
                    penicillin og aspirin,{' '}
                    <Link href={`/${lang}/blog/insect-sting`} className="text-primary underline hover:text-primary-900">
                      insektbid og -stik
                    </Link>{' '}
                    samt pollen kan ligeledes udløse en reaktion. Kroppen genkender disse stoffer som fremmede og iværksætter en
                    immunreaktion, der frigiver histamin.
                  </>
                ) : (
                  <>
                    Food allergies — particularly nuts, shellfish, eggs and dairy — are common causes of acute urticaria. Medications
                    such as penicillin and aspirin,{' '}
                    <Link href={`/${lang}/blog/insect-sting`} className="text-primary underline hover:text-primary-900">
                      insect bites and stings
                    </Link>{' '}
                    and pollen can also trigger a reaction. The body recognises these substances as foreign and mounts an immune
                    response that releases histamine.
                  </>
                )}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Kan fysiske påvirkninger udløse nældefeber?' : 'Can physical triggers cause urticaria?'}
              </h3>
              <p>
                {isDa
                  ? 'Ja. De inducerbare (fysiske) former for urticaria udløses af en bestemt fysisk påvirkning frem for af et allergen. Dermografisme er den hyppigste: strygning, kradsning eller gnid mod huden giver en stribeformet kvaddel inden for få minutter, som forsvinder igen i løbet af en time.'
                  : 'Yes. The inducible (physical) urticarias are triggered by a specific physical stimulus rather than by an allergen. Dermographism is the most common: stroking, scratching or friction produces a linear wheal within minutes, which settles again within an hour.'}
              </p>
              <p>
                {isDa
                  ? 'Forsinket trykurticaria er en anden tilstand: vedvarende tryk fra en linning, en skulderrem eller et redskabsgreb giver en dyb, ofte øm hævelse, som først viser sig 4–8 timer efter påvirkningen og kan vare et døgn eller mere. Hertil kommer kuldeurticaria (kold luft, koldt vand eller kolde genstande), varmeurticaria (lokal opvarmning), solurticaria (sollys inden for få minutter) og anstrengelsesudløst urticaria (stigende kropstemperatur under fysisk aktivitet). Formerne er ikke allergiske i traditionel forstand, men skyldes mastceller, der reagerer overfølsomt på en fysisk påvirkning.'
                  : 'Delayed pressure urticaria is a separate condition: sustained pressure from a waistband, a shoulder strap or a tool handle produces a deep, often tender swelling that appears only 4–8 hours after the pressure and can last a day or more. Other forms include cold urticaria (cold air, cold water or cold objects), heat urticaria (localised warming), solar urticaria (sunlight within minutes of exposure) and exercise-induced urticaria (a rise in body temperature during exertion). These forms are not allergic in the traditional sense but result from mast cells that respond over-sensitively to a physical stimulus.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa
                  ? 'Hvad med infektioner, stress og kronisk spontan urticaria?'
                  : 'What about infections, stress and chronic spontaneous urticaria?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Infektioner – fx forkølelse, urinvejsinfektioner eller <em>Helicobacter pylori</em> – kan udløse nældefeber.
                    Stress og underliggende sygdomme som autoimmune lidelser eller forstyrrelser i skjoldbruskkirtlen er andre kendte
                    faktorer. Ved mere end 80% af tilfældene med kronisk urticaria findes der ingen ydre årsag overhovedet; disse
                    tilfælde kaldes kronisk spontan urticaria. Det er værd at vide, før man bruger tid og penge på omfattende
                    allergiudredning: hos de fleste med kronisk nældefeber vil testene være normale.
                  </>
                ) : (
                  <>
                    Infections — such as colds, urinary tract infections or <em>Helicobacter pylori</em> — can trigger urticaria.
                    Stress and underlying conditions such as autoimmune disease or thyroid disorders are other known factors. In more
                    than 80% of chronic urticaria cases no external cause is found at all; these are termed chronic spontaneous
                    urticaria. That is worth knowing before spending time and money on extensive allergy testing: in most people with
                    chronic hives the tests come back normal.
                  </>
                )}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får nældefeber?' : 'Who gets urticaria?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber kan ramme alle – uanset alder, køn eller hudtype. Tilstanden er dog mere almindelig hos voksne end hos børn. Akut urticaria er hyppigst hos børn og unge voksne og udløses oftest af en allergisk reaktion eller infektion. Kronisk urticaria forekommer oftest hos kvinder i alderen 20–40 år og kan vare måneder til år.'
                  : 'Urticaria can affect anyone — regardless of age, sex or skin type. However, it is more common in adults than in children. Acute urticaria is most frequent in children and young adults and is most often triggered by an allergic reaction or infection. Chronic urticaria occurs most often in women aged 20–40 and can last months to years.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved nældefeber?' : 'What can you do about urticaria?'}
              </h2>
              <p>
                {isDa
                  ? 'Behandling af nældefeber fokuserer på to spor: lindre symptomerne og identificere og undgå udløseren.'
                  : 'Treatment of urticaria focuses on two tracks: relieving symptoms and identifying and avoiding the trigger.'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Antihistaminer (primær behandling)' : '💊 Antihistamines (primary treatment)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ikke-sederende antihistaminer som cetirizin og loratadin er førstevalg. De blokerer histaminreceptorer og reducerer kløe og hævelse. Effekten er bedst ved regelmæssig dosering frem for ved behov.'
                      : 'Non-sedating antihistamines such as cetirizine and loratadine are the first-line treatment. They block histamine receptors and reduce itching and swelling. Regular dosing is more effective than taking them only when needed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🔍 Identificér udløseren' : '🔍 Identify the trigger'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Før en dagbog over kosten, aktiviteter og udbrud. Allergitest (hudpriktest eller blodprøver) kan identificere specifikke allergener. Når udløseren er fundet, er undgåelse det vigtigste forebyggende tiltag.'
                      : 'Keep a diary of diet, activities and outbreaks. Allergy testing (skin prick tests or blood tests) can identify specific allergens. Once the trigger is identified, avoidance is the most important preventive measure.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🩺 Receptpligtig behandling (kronisk urticaria)' : '🩺 Prescription treatment (chronic urticaria)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hvis standarddosis antihistamin ikke er nok, kan lægen øge dosis af et ikke-sederende antihistamin til op til fire gange standarddosis. Er det stadig utilstrækkeligt, er det biologiske lægemiddel omalizumab (Xolair) næste trin og er godkendt til kronisk spontan urticaria; ciclosporin kan komme på tale i specialistregi.'
                      : 'When a standard dose of antihistamine is insufficient, a doctor may increase the dose of a non-sedating antihistamine to up to four times the standard dose. If that is still not enough, the biologic omalizumab (Xolair) is the next step and is approved for chronic spontaneous urticaria; ciclosporin is a further option in specialist care.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🚨 Anafylaksi – søg straks hjælp' : '🚨 Anaphylaxis — seek immediate help'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hævelse i svælget, vejrtrækningsbesvær, svimmelhed eller blodtryksfald kan være tegn på anafylaksi – en livstruende allergisk reaktion. Ring 112 med det samme. Er du i risiko, skal du altid bære en adrenalinpen (EpiPen eller Jext) og bruge den i lårets yderside ved de første tegn – og derefter alligevel ringe 112, fordi reaktionen kan blusse op igen efter timer (bifasisk reaktion).'
                      : 'Throat swelling, breathing difficulty, dizziness or a drop in blood pressure may indicate anaphylaxis — a life-threatening allergic reaction. Call 112 (emergency services) immediately. If you are at risk, always carry an adrenaline auto-injector (EpiPen or Jext) and use it in the outer thigh at the first signs — and then still call 112, because the reaction can flare again hours later (a biphasic reaction).'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Urticaria er klassificeret som EB00 i WHO\'s internationale sygdomsklassifikation (ICD-11), i kapitlet om urticaria, angioødem og beslægtede tilstande. Tilstanden er kendetegnet ved forbigående, kløende kvadler, ofte allergisk eller spontan af natur, med ikke-sederende antihistaminer som primær behandling.'
                    : "Urticaria is classified as EB00 in the WHO's International Classification of Diseases (ICD-11), within the chapter on urticaria, angioedema and related disorders. It is characterised by transient, itchy wheals, often allergic or spontaneous in nature, with non-sedating antihistamines as the primary treatment."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er nældefeber farligt?' : 'Is urticaria dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'I de fleste tilfælde er nældefeber ufarligt og forsvinder inden for timer til dage. Farligt kan det dog blive, hvis det ledsages af angioødem i svælget eller tegn på anafylaksi – ring da 112 med det samme.'
                      : 'In most cases urticaria is harmless and resolves within hours to days. It can become dangerous if accompanied by angioedema of the throat or signs of anaphylaxis — call 112 immediately in those cases.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa
                      ? 'Hvad er forskellen på akut og kronisk nældefeber?'
                      : 'What is the difference between acute and chronic urticaria?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Akut urticaria varer under 6 uger og skyldes oftest en identificerbar udløser som et allergen eller en infektion. Kronisk urticaria varer mere end 6 uger, og i mere end 80% af tilfældene findes der ingen ydre årsag (kronisk spontan urticaria). Begge former behandles primært med ikke-sederende antihistaminer.'
                      : 'Acute urticaria lasts under 6 weeks and is usually caused by an identifiable trigger such as an allergen or an infection. Chronic urticaria lasts more than 6 weeks, and in more than 80% of cases no external cause is found (chronic spontaneous urticaria). Both forms are primarily treated with non-sedating antihistamines.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa
                      ? 'Hvornår skal jeg kontakte en hudlæge?'
                      : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis nældefeber varer mere end 6 uger, hvis antihistaminer ikke hjælper tilstrækkeligt i standarddosis, eller hvis udbruddene påvirker din søvn og hverdag. En hudlæge kan vurdere, om der er behov for højere dosis eller behandling ud over antihistaminer.'
                      : 'Contact a dermatologist if urticaria lasts more than 6 weeks, if a standard dose of antihistamine is not providing adequate relief, or if the outbreaks are affecting your sleep and daily life. A dermatologist can judge whether you need a higher dose or treatment beyond antihistamines.'}
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
                    ? 'Ved hævelse i svælget, vejrtrækningsbesvær eller svimmelhed skal du ringe 112 – det kan ikke vurderes på et billede. Ved almindelig nældefeber kan du uploade billeder af din hud via SKIND-appen og modtage en personlig vurdering og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'If you have throat swelling, breathing difficulty or dizziness, call 112 — that cannot be assessed from a photo. For ordinary hives, upload photos of your skin via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
