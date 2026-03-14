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
        title: 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om nældefeber: hvad det er, hvorfor det opstår, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'hvad er nældefeber, urticaria symptomer, nældefeber årsager, nældefeber behandling, hudlæge nældefeber, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/urticaria-hives',
        },
      }
    : {
        title: 'What is Urticaria (Hives)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about urticaria (hives): what it is, why it happens, who gets it and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'what is urticaria, hives symptoms, urticaria causes, hives treatment, dermatologist hives, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/urticaria-hives',
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
    image: 'https://www.skinchange.dk/blog/urticaria-hives.jpg',
    datePublished: '2026-03-14',
    dateModified: '2026-03-14',
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
            name: 'Hvad er nældefeber?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nældefeber (urticaria) er en almindelig hudlidelse, der forårsager hævede, kløende røde knopper, der pludselig opstår og lige så hurtigt kan forsvinde. Det er ikke smitsomt og skyldes frigivelse af histamin i kroppen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvad udløser nældefeber?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Udløsere kan være allergener (nødder, skaldyr, penicillin, insektbid), fysiske faktorer (tryk, varme, kulde, sollys) og interne faktorer (infektioner, stress, underliggende sygdomme). I mange tilfælde forbliver årsagen ukendt (idiopatisk).',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for nældefeber?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg straks lægehjælp hvis du oplever hævelse i svælg, vejrtrækningsbesvær eller svimmelhed – det kan være tegn på anafylaksi. Kontakt en hudlæge hvis nældefeber varer mere end 6 uger (kronisk urticaria) eller påvirker din hverdag. SKIND giver dig adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is urticaria (hives)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Urticaria (hives) is a common skin condition causing raised, itchy red welts that appear suddenly and can disappear just as quickly. It is not contagious and is caused by the release of histamine in the body.',
            },
          },
          {
            '@type': 'Question',
            name: 'What triggers urticaria?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Triggers include allergens (nuts, shellfish, penicillin, insect stings), physical factors (pressure, heat, cold, sunlight) and internal factors (infections, stress, underlying conditions). In many cases the cause remains unknown (idiopathic).',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for hives?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek emergency help immediately if you experience throat swelling, breathing difficulty or dizziness — these may indicate anaphylaxis. See a dermatologist if hives last more than 6 weeks (chronic urticaria) or affect your daily life. SKIND gives you access to a dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Nældefeber?' : 'What is Urticaria (Hives)?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">14. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling'
                : 'What is Urticaria (Hives)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
                alt={
                  isDa
                    ? 'Nældefeber – hudlidelse og allergi'
                    : 'Urticaria hives – skin condition and allergy'
                }
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
                    <strong>Nældefeber (urticaria) er en af de mest udbredte hudreaktioner</strong>, der rammer
                    op mod 20% af befolkningen i løbet af livet. De karakteristiske hævede, kløende knopper
                    opstår pludseligt og kan forsvinde igen inden for timer – men bag dem ligger ofte en
                    fascinerende immunologisk reaktion.
                  </>
                ) : (
                  <>
                    <strong>Urticaria (hives) is one of the most common skin reactions</strong>, affecting up
                    to 20% of people at some point in their lives. The characteristic raised, itchy welts
                    appear suddenly and can disappear within hours — yet behind them lies a fascinating
                    immunological reaction.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad nældefeber er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article we explain exactly what urticaria is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er nældefeber?' : 'What is urticaria (hives)?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber, medicinsk betegnet urticaria, er en hudlidelse karakteriseret ved pludseligt opståede, hævede og kløende røde knopper kaldet kvabler (wheals). Disse kvabler opstår, når celler i huden frigiver histamin og andre kemiske stoffer i blodbanen, som får de omgivende blodkar til at udvide sig og lække væske ind i hudens væv.'
                  : 'Urticaria, commonly known as hives, is a skin condition characterised by suddenly appearing raised, itchy red welts called wheals. These welts occur when cells in the skin release histamine and other chemical mediators into the bloodstream, causing the surrounding blood vessels to dilate and leak fluid into the skin tissue.'}
              </p>
              <p>
                {isDa
                  ? 'Nældefeber er ikke smitsomt – du kan ikke give det til andre. En enkelt episode forsvinder normalt inden for 24 timer, men nye kvabler kan opstå efterhånden som de gamle forsvinder. Hvis tilstanden varer mere end 6 uger, taler man om kronisk urticaria.'
                  : 'Urticaria is not contagious — you cannot pass it on to others. A single episode usually resolves within 24 hours, but new welts may appear as old ones fade. When the condition persists for more than 6 weeks, it is classified as chronic urticaria.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser nældefeber ud?' : 'What does urticaria look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber har et ret karakteristisk udseende, der adskiller det fra andre hudlidelser:'
                  : 'Urticaria has a fairly distinctive appearance that sets it apart from other skin conditions:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Hævede, røde kvabler:' : 'Raised, red welts:'}</strong>{' '}
                  {isDa
                    ? 'Knopperne kan variere i størrelse fra et par millimeter til flere centimeter og opstår overalt på kroppen. De er typisk røde i kanten og blege i midten.'
                    : 'The welts can vary in size from a few millimetres to several centimetres and appear anywhere on the body. They are typically red at the edges with a pale centre.'}
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
                    ? 'Flere kvabler kan smelte sammen til større, uregelmæssige, hævede arealer, kaldet plaques.'
                    : 'Multiple welts can merge into larger, irregular, raised areas called plaques.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hurtigt skiftende billede:' : 'Rapidly changing appearance:'}</strong>{' '}
                  {isDa
                    ? 'En enkelt kvabel forsvinder normalt inden for 1–24 timer uden at efterlade mærker. Nye kvabler kan dog opstå andre steder på kroppen.'
                    : 'An individual weal typically resolves within 1–24 hours without leaving a mark. However, new welts may develop elsewhere on the body.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'I nogle tilfælde ledsages nældefeber af angioødem – en dybere hævelse under huden, typisk i ansigtet, læberne, tungen eller halsen. Angioødem kræver øjeblikkelig lægehjælp, særligt hvis halsen er involveret.'
                  : 'In some cases urticaria is accompanied by angioedema — a deeper swelling beneath the skin, typically affecting the face, lips, tongue or throat. Angioedema requires immediate medical attention, especially when the throat is involved.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår nældefeber?' : 'Why does urticaria happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber opstår, når mastceller i huden frigiver histamin som reaktion på en udløser. Udløserne kan inddeles i tre overordnede kategorier:'
                  : 'Urticaria occurs when mast cells in the skin release histamine in response to a trigger. Triggers can be divided into three main categories:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Allergener' : 'Allergens'}
              </h3>
              <p>
                {isDa
                  ? 'Fødevareallergier – særligt nødder, skaldyr, æg og mælk – er hyppige årsager til akut nældefeber. Medicin som penicillin og aspirin, insektbid og -stik, samt pollen kan ligeledes udløse en reaktion. Kroppen genkender disse stoffer som fremmede og iværksætter en immunreaktion, der frigiver histamin.'
                  : 'Food allergies — particularly nuts, shellfish, eggs and dairy — are common causes of acute urticaria. Medications such as penicillin and aspirin, insect bites and stings, and pollen can also trigger a reaction. The body recognises these substances as foreign and mounts an immune response that releases histamine.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Fysiske faktorer' : 'Physical factors'}
              </h3>
              <p>
                {isDa
                  ? 'Fysisk urticaria opstår som reaktion på direkte fysiske stimuli: tryk mod huden (dermografisme), kulde (kuldeurticaria), varme, sollys (soluticaria) eller anstrengelse. Disse former er ikke allergiske i traditionel forstand, men skyldes en overfølsom reaktion i mastcellerne.'
                  : 'Physical urticaria occurs in response to direct physical stimuli: pressure on the skin (dermographism), cold (cold urticaria), heat, sunlight (solar urticaria) or exercise. These forms are not allergic in the traditional sense but result from an oversensitive response in the mast cells.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Interne faktorer og idiopatisk urticaria' : 'Internal factors and idiopathic urticaria'}
              </h3>
              <p>
                {isDa
                  ? 'Infektioner – fx forkølelse, urinvejsinfektioner eller helicobacter pylori – kan udløse nældefeber. Stress og underliggende medicinske tilstande som autoimmune sygdomme eller skjoldbruskkirtelforstyrrelser er andre kendte faktorer. I op til 50% af tilfælde med kronisk urticaria kan der ikke identificeres en klar årsag – disse tilfælde betegnes kronisk spontan (idiopatisk) urticaria.'
                  : 'Infections — such as colds, urinary tract infections or helicobacter pylori — can trigger urticaria. Stress and underlying medical conditions such as autoimmune diseases or thyroid disorders are other known factors. In up to 50% of chronic urticaria cases no clear cause can be identified — these are termed chronic spontaneous (idiopathic) urticaria.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får nældefeber?' : 'Who gets urticaria?'}
              </h2>
              <p>
                {isDa
                  ? 'Nældefeber kan ramme alle – uanset alder, køn eller hudtype. Tilstanden er dog mere almindelig hos voksne end børn. Akut urticaria er hyppigst hos børn og unge voksne og udløses oftest af en allergisk reaktion eller infektion. Kronisk urticaria forekommer oftest hos kvinder i alderen 20–40 år og kan vare måneder til år.'
                  : 'Urticaria can affect anyone — regardless of age, sex or skin type. However, it is more common in adults than children. Acute urticaria is most frequent in children and young adults and is most often triggered by an allergic reaction or infection. Chronic urticaria occurs most often in women aged 20–40 and can last months to years.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved nældefeber?' : 'What can you do about urticaria?'}
              </h2>
              <p>
                {isDa
                  ? 'Behandling af nældefeber fokuserer på to spor: lindre symptomerne og identificere/undgå udløseren.'
                  : 'Treatment of urticaria focuses on two tracks: relieving symptoms and identifying/avoiding the trigger.'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Antihistaminer (primær behandling)' : '💊 Antihistamines (primary treatment)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ikke-sederende antihistaminer som cetirizin og loratadin er førstevalg. De blokerer histaminreceptorer og reducerer kløe og hævelse. Effekten er bedst ved regelmæssig dosering frem for ved behov.'
                      : 'Non-sedating antihistamines such as cetirizine and loratadine are the first-line treatment. They block histamine receptors and reduce itching and swelling. Regular dosing is more effective than taking them only when needed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🔍 Identificér udløseren' : '🔍 Identify the trigger'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Før en dagbog over kosten, aktiviteter og udbrud. Allergitest (hud-priktest eller blodprøver) kan identificere specifikke allergener. Når udløseren er fundet, er undgåelse det vigtigste forebyggende tiltag.'
                      : 'Keep a diary of diet, activities and outbreaks. Allergy testing (skin prick tests or blood tests) can identify specific allergens. Once the trigger is identified, avoidance is the most important preventive measure.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Receptpligtig behandling (kronisk urticaria)' : '🩺 Prescription treatment (chronic urticaria)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved utilstrækkelig effekt af antihistaminer kan lægen ordinere højere doser, tilføje et H2-antihistamin (fx ranitidin) eller et biologisk lægemiddel som omalizumab (Xolair), der er godkendt til kronisk spontan urticaria.'
                      : 'When antihistamines are insufficient, a doctor may prescribe higher doses, add an H2-antihistamine (e.g. ranitidine) or a biologic such as omalizumab (Xolair), which is approved for chronic spontaneous urticaria.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚨 Anafylaksi – søg straks hjælp' : '🚨 Anaphylaxis — seek immediate help'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hævelse i svælget, vejrtrækningsbesvær, svimmelhed eller blodtryksfald kan være tegn på anafylaksi – en livstruende allergisk reaktion. Ring 112 med det samme. Bær altid en adrenalinpen (EpiPen) hvis du er i risiko.'
                      : 'Throat swelling, breathing difficulty, dizziness or a drop in blood pressure may indicate anaphylaxis — a life-threatening allergic reaction. Call emergency services immediately. Always carry an adrenaline auto-injector (EpiPen) if you are at risk.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Urticaria er klassificeret under "Urticaria, angioødem og andre urtikarielle lidelser" i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved forbigående, kløende kvabler, ofte af allergisk eller idiopatisk natur, med antihistaminer som primær behandling.'
                    : "Urticaria is classified under 'Urticaria, angioedema and other urticarial disorders' in the WHO's International Classification of Diseases (ICD-11). It is characterised by transient, itchy wheals, often allergic or idiopathic in nature, with antihistamines as the primary treatment."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er nældefeber farligt?' : 'Is urticaria dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'I de fleste tilfælde er nældefeber ufarligt og forsvinder inden for timer til dage. Farligt kan det dog blive, hvis det ledsages af angioødem i svælget eller tegn på anafylaksi – søg da øjeblikkelig lægehjælp.'
                      : 'In most cases urticaria is harmless and resolves within hours to days. It can become dangerous if accompanied by angioedema of the throat or signs of anaphylaxis — seek immediate medical help in those cases.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Hvad er forskellen på akut og kronisk nældefeber?'
                      : 'What is the difference between acute and chronic urticaria?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Akut urticaria varer under 6 uger og skyldes oftest en identificerbar udløser som en allergen eller infektion. Kronisk urticaria varer mere end 6 uger og har i mange tilfælde ingen klar årsag (idiopatisk). Begge former behandles primært med antihistaminer.'
                      : 'Acute urticaria lasts under 6 weeks and is usually caused by an identifiable trigger such as an allergen or infection. Chronic urticaria lasts more than 6 weeks and in many cases has no clear cause (idiopathic). Both forms are primarily treated with antihistamines.'}
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
                      ? 'Kontakt en hudlæge hvis nældefeber varer mere end 6 uger, hvis antihistaminer ikke hjælper tilstrækkeligt, eller hvis du ønsker allergiudredning. En hudlæge kan fastslå årsagen og tilpasse den bedste behandlingsplan.'
                      : 'Contact a dermatologist if urticaria lasts more than 6 weeks, if antihistamines are not providing adequate relief, or if you want allergy testing. A dermatologist can determine the cause and tailor the best treatment plan.'}
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
