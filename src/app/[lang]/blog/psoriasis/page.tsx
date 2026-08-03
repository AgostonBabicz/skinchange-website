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
        title: 'Hvad er Psoriasis? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om psoriasis: hvad det er, hvordan det ser ud, hvem der rammes, og hvilke behandlinger der virker. Få en vurdering af en hudlæge via SKIND.',
        keywords:
          'psoriasis, psoriasis behandling, psoriasis symptomer, plakpsoriasis, hudsygdomme, skællende hud, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/psoriasis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/psoriasis',
            da: 'https://www.skinchange.dk/da/blog/psoriasis',
            en: 'https://www.skinchange.dk/en/blog/psoriasis',
          },
        },
      }
    : {
        title: 'What is Psoriasis? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn all about psoriasis: what it is, what it looks like, who it affects, and which treatments work. Get an assessment from a dermatologist via SKIND.',
        keywords:
          'psoriasis, psoriasis treatment, psoriasis symptoms, plaque psoriasis, skin disease, scaly skin, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/psoriasis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/psoriasis',
            da: 'https://www.skinchange.dk/da/blog/psoriasis',
            en: 'https://www.skinchange.dk/en/blog/psoriasis',
          },
        },
      };
}

export default function PsoriasisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Psoriasis? Årsager, Symptomer og Behandling'
      : 'What is Psoriasis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til psoriasis: hvad det er, symptomer, risikofaktorer og behandlingsmuligheder.'
      : 'Complete guide to psoriasis: what it is, symptoms, risk factors and treatment options.',
    image: '/blog-psoriasis.jpg',
    datePublished: '2026-04-07',
    dateModified: '2026-04-07',
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
            name: 'Er psoriasis smitsom?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, psoriasis er ikke smitsom. Du kan ikke få psoriasis ved at røre ved en person med tilstanden, og den overføres ikke gennem blod eller andre kropsvæsker.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan påvirker psoriasis livskvaliteten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Psoriasis kan have betydelig psykologisk indvirkning på grund af synlige hudforandringer. Mange oplever stigmatisering, lav selvtillid, angst og depression, og studier finder en øget forekomst af selvmordstanker, særligt ved svær psoriasis. Tidlig og effektiv behandling er vigtig.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hjælper kost og livsstil ved psoriasis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ingen diæt kan helbrede psoriasis, men nogle livsstilsændringer kan hjælpe: oprethold en sund vægt, undgå rygning og alkohol, håndter stress, og spis en antiinflammatorisk kost med omega-3-fedtsyrer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is psoriasis contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, psoriasis is not contagious. You cannot get psoriasis by touching someone with the condition, and it is not transmitted through blood or other body fluids.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does psoriasis affect quality of life?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Psoriasis can have a significant psychological impact due to visible skin changes. Many experience stigmatisation, low self-esteem, anxiety and depression, and studies find an increased rate of suicidal thoughts, particularly in severe psoriasis. Early and effective treatment is important.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do diet and lifestyle help with psoriasis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No diet can cure psoriasis, but some lifestyle changes can help: maintain a healthy weight, avoid smoking and alcohol, manage stress, and eat an anti-inflammatory diet with omega-3 fatty acids.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Psoriasis?' : 'What is Psoriasis?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '7. april 2026' : 'April 7, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '5 min læsetid' : '5 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Psoriasis? Årsager, Symptomer og Behandling'
                : 'What is Psoriasis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-psoriasis.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en albue med røde, skarpt afgrænsede plaques dækket af sølvhvide skæl'
                    : 'Close-up of an elbow with red, sharply bordered plaques covered in silvery-white scale'
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
                    <strong>Psoriasis er en kronisk, autoimmun hudsygdom</strong>, der rammer millioner af mennesker verden over. Sygdommen får hudcellerne til at formere sig usædvanligt hurtigt, hvilket resulterer i røde, skællende pletter, der ofte er kløende og kan være smertefulde.
                  </>
                ) : (
                  <>
                    <strong>Psoriasis is a chronic, autoimmune skin disease</strong> that affects millions of people worldwide. The condition causes skin cells to multiply at an unusually fast rate, resulting in red, scaly patches that are often itchy and can be painful.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad psoriasis er, hvordan det adskiller sig fra andre hudsygdomme, hvad der forårsager det, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what psoriasis is, how it differs from other skin conditions, what causes it, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is psoriasis */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er psoriasis?' : 'What is psoriasis?'}
              </h2>
              <p>
                {isDa
                  ? 'Psoriasis er en kronisk, autoimmun sygdom, der primært påvirker huden. Ved psoriasis angriber immunsystemet fejlagtigt raske hudceller, hvilket får dem til at formere sig med en hastighed, der er op til 10 gange hurtigere end normalt. De ekstra hudceller ophobes på overfladen og danner de karakteristiske røde, skællende pletter.'
                  : 'Psoriasis is a chronic, autoimmune disease that primarily affects the skin. In psoriasis, the immune system mistakenly attacks healthy skin cells, causing them to multiply at a rate up to 10 times faster than normal. The excess skin cells build up on the surface, forming the characteristic red, scaly patches.'}
              </p>
              <p>
                {isDa
                  ? 'Psoriasis er en systemisk sygdom, hvilket betyder, at den påvirker hele kroppen — ikke kun huden. Op til 30% af personer med psoriasis udvikler også psoriasisgigt, en inflammatorisk ledsygdom, der kan påvirke led og sener.'
                  : 'Psoriasis is a systemic disease, meaning it affects the entire body — not just the skin. Up to 30% of people with psoriasis also develop psoriatic arthritis, an inflammatory joint disease that can affect joints and tendons.'}
              </p>

              {/* Types of psoriasis */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvilke typer psoriasis findes der?' : 'What types of psoriasis are there?'}
              </h2>
              <p>
                {isDa
                  ? 'Der findes flere forskellige typer psoriasis, som hver har deres egne karakteristika:'
                  : 'There are several different types of psoriasis, each with their own characteristics:'}
              </p>
              <ul>
                <li>
                  <strong>{isDa ? 'Plakpsoriasis' : 'Plaque psoriasis'}</strong>
                  {isDa
                    ? ': Den mest almindelige form, der viser sig som forhøjede, røde pletter dækket af sølvagtige skæl. Op til 80% af psoriasispatienter har denne type.'
                    : ': The most common form, appearing as raised, red patches covered with silvery scales. Up to 80% of psoriasis patients have this type.'}
                </li>
                <li>
                  <strong>{isDa ? 'Guttat psoriasis' : 'Guttate psoriasis'}</strong>
                  {isDa
                    ? ': Dråbeformede, små røde pletter, ofte udløst af streptokokinfektioner. Ses hyppigst hos børn og unge.'
                    : ': Drop-shaped, small red spots, often triggered by streptococcal infections. Most common in children and young adults.'}
                </li>
                <li>
                  <strong>{isDa ? 'Invers psoriasis' : 'Inverse psoriasis'}</strong>
                  {isDa
                    ? ': Glat, rød hud i hudfolder som armhuler, lyske og under brysterne.'
                    : ': Smooth, red skin in body folds such as armpits, groin and under the breasts.'}
                </li>
                <li>
                  <strong>{isDa ? 'Pustuløs psoriasis' : 'Pustular psoriasis'}</strong>
                  {isDa
                    ? ': Klynger af små, hvide pustler omgivet af rød hud — pustler, ikke egentlige blærer. Formen kan være lokaliseret til hænder og fødder eller generaliseret. Generaliseret pustuløs psoriasis (von Zumbusch) giver feber og påvirket almentilstand og er en akut tilstand, der kræver behandling på hospital.'
                    : ': Crops of small, white pustules surrounded by red skin — pustules, not true blisters. It can be localised to the hands and feet or generalised. Generalised pustular psoriasis (von Zumbusch) causes fever and systemic illness and is a medical emergency requiring hospital treatment.'}
                </li>
                <li>
                  <strong>{isDa ? 'Erytrodermisk psoriasis' : 'Erythrodermic psoriasis'}</strong>
                  {isDa
                    ? ': Sjælden, alvorlig form, der dækker hele kroppen med rødme og skæl. Kræver øjeblikkelig lægehjælp.'
                    : ': A rare, severe form that covers the entire body with redness and scaling. Requires immediate medical attention.'}
                </li>
              </ul>

              {/* Symptoms */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er symptomerne på psoriasis?' : 'What are the symptoms of psoriasis?'}
              </h2>
              <p>
                {isDa
                  ? 'Symptomerne på psoriasis varierer fra person til person, men de mest almindelige tegn inkluderer:'
                  : 'Psoriasis symptoms vary from person to person, but the most common signs include:'}
              </p>
              <ul>
                <li>
                  {isDa
                    ? 'Røde, forhøjede hudpletter dækket af sølvagtige skæl'
                    : 'Red, raised skin patches covered with silvery scales'}
                </li>
                <li>
                  {isDa
                    ? 'Små, dråbeformede pletter (guttat psoriasis)'
                    : 'Small, drop-shaped spots (guttate psoriasis)'}
                </li>
                <li>
                  {isDa
                    ? 'Tør, revnet hud der kan bløde'
                    : 'Dry, cracked skin that may bleed'}
                </li>
                <li>
                  {isDa
                    ? 'Kløe, brænden eller ømhed'
                    : 'Itching, burning or soreness'}
                </li>
                <li>
                  {isDa
                    ? 'Tykkede eller riflede negle'
                    : 'Thickened or ridged nails'}
                </li>
                <li>
                  {isDa
                    ? 'Hævede og stive led (psoriasisgigt)'
                    : 'Swollen and stiff joints (psoriatic arthritis)'}
                </li>
              </ul>

              {/* Causes */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad forårsager psoriasis?' : 'What causes psoriasis?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag til psoriasis er ikke fuldt ud forstået, men forskning peger på en kombination af genetiske faktorer og immunsystemrespons:'
                  : 'The exact cause of psoriasis is not fully understood, but research points to a combination of genetic factors and immune system response:'}
              </p>

              <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
                {isDa ? 'Hvad sker der i immunsystemet?' : 'What happens in the immune system?'}
              </h3>
              <p>
                {isDa
                  ? 'Psoriasis er primært en autoimmun sygdom. Immunsystemets T-celler (hvide blodlegemer) angriber fejlagtigt raske hudceller, som om de forsvarer kroppen mod infektion. Dette udløser en kaskade af immunreaktioner, der får hudceller til at formere sig hurtigere end normalt.'
                  : 'Psoriasis is primarily an autoimmune disease. The immune system\'s T-cells (white blood cells) mistakenly attack healthy skin cells as if defending the body against infection. This triggers a cascade of immune reactions that cause skin cells to multiply faster than normal.'}
              </p>

              <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
                {isDa ? 'Er psoriasis arveligt?' : 'Is psoriasis hereditary?'}
              </h3>
              <p>
                {isDa
                  ? 'Arvelighed spiller en vigtig rolle. Op til 40% af personer med psoriasis har mindst ét familiemedlem med samme tilstand. Forskere har identificeret flere gener, der er forbundet med psoriasis, herunder HLA-Cw6.'
                  : 'Heredity plays an important role. Up to 40% of people with psoriasis have at least one family member with the same condition. Scientists have identified several genes associated with psoriasis, including HLA-Cw6.'}
              </p>

              <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
                {isDa ? 'Hvad kan udløse et udbrud?' : 'What can trigger a flare-up?'}
              </h3>
              <p>
                {isDa
                  ? 'Mange faktorer kan udløse eller forværre psoriasis:'
                  : 'Many factors can trigger or worsen psoriasis:'}
              </p>
              <ul>
                <li>
                  <strong>{isDa ? 'Stress' : 'Stress'}</strong>
                  {isDa
                    ? ': Psykisk stress er en af de mest almindelige udløsere.'
                    : ': Psychological stress is one of the most common triggers.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hudskader' : 'Skin injuries'}</strong>
                  {isDa
                    ? ': Snit, skrab, solskoldning og vaccinationer kan udløse psoriasis (Köbner-fænomenet).'
                    : ': Cuts, scrapes, sunburns and vaccinations can trigger psoriasis (Koebner phenomenon).'}
                </li>
                <li>
                  <strong>{isDa ? 'Infektioner' : 'Infections'}</strong>
                  {isDa
                    ? ': Halsbetændelse og andre infektioner kan især udløse guttat psoriasis.'
                    : ': Strep throat and other infections can trigger guttate psoriasis in particular.'}
                </li>
                <li>
                  <strong>{isDa ? 'Medicin' : 'Medications'}</strong>
                  {isDa
                    ? ': Lithium, blodtryksmedicin (beta-blokkere) og antimalariamidler kan forværre psoriasis.'
                    : ': Lithium, blood pressure medications (beta-blockers) and antimalarial drugs can worsen psoriasis.'}
                </li>
                <li>
                  <strong>{isDa ? 'Vejr' : 'Weather'}</strong>
                  {isDa
                    ? ': Koldt, tørt vejr kan forværre symptomerne, mens sollys ofte forbedrer dem.'
                    : ': Cold, dry weather can worsen symptoms, while sunlight often improves them.'}
                </li>
                <li>
                  <strong>{isDa ? 'Alkohol og rygning' : 'Alcohol and smoking'}</strong>
                  {isDa
                    ? ': Øger risikoen for psoriasis og kan gøre behandlingen mindre effektiv.'
                    : ': Increases the risk of psoriasis and can make treatment less effective.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan behandles psoriasis?' : 'How is psoriasis treated?'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom psoriasis ikke kan helbredes, findes der effektive behandlinger, der kan kontrollere symptomerne og forbedre livskvaliteten:'
                  : 'Although psoriasis cannot be cured, effective treatments exist that can control symptoms and improve quality of life:'}
              </p>

              <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
                {isDa ? 'Hvornår bruges topisk behandling?' : 'When is topical treatment used?'}
              </h3>
              <p>
                {isDa
                  ? 'For mild til moderat psoriasis er topiske behandlinger ofte første valg:'
                  : 'For mild to moderate psoriasis, topical treatments are often the first choice:'}
              </p>
              <ul>
                <li>
                  <strong>{isDa ? 'Kortikosteroider' : 'Corticosteroids'}</strong>
                  {isDa
                    ? ': Reducerer inflammation og kløe. Findes i cremer, salver, geler og lotioner i forskellige styrker.'
                    : ': Reduce inflammation and itching. Available in creams, ointments, gels and lotions of varying strengths.'}
                </li>
                <li>
                  <strong>{isDa ? 'D-vitaminanaloger' : 'Vitamin D analogues'}</strong>
                  {isDa
                    ? ': Bremser cellevækst og skældannelse, f.eks. calcipotriol.'
                    : ': Slow cell growth and scaling, e.g. calcipotriol.'}
                </li>
                <li>
                  <strong>{isDa ? 'Retinoider' : 'Retinoids'}</strong>
                  {isDa
                    ? ': A-vitaminderivater, der normaliserer cellevæksten.'
                    : ': Vitamin A derivatives that normalise cell growth.'}
                </li>
                <li>
                  <strong>{isDa ? 'Salicylsyre' : 'Salicylic acid'}</strong>
                  {isDa
                    ? ': Fjerner skæl og blødgør tyk hud.'
                    : ': Removes scales and softens thick skin.'}
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
                {isDa ? 'Hvordan virker lysbehandling?' : 'How does phototherapy work?'}
              </h3>
              <p>
                {isDa
                  ? 'Lysbehandling (fototerapi) bruger ultraviolet lys til at bremse cellevæksten:'
                  : 'Phototherapy uses ultraviolet light to slow cell growth:'}
              </p>
              <ul>
                <li>
                  <strong>{isDa ? 'NB-UVB (smalbåndet UVB)' : 'NB-UVB (narrowband UVB)'}</strong>
                  {isDa
                    ? ': Smalbåndet ultraviolet B-lys, den mest anvendte lysbehandling ved moderat psoriasis — mere effektiv end bredbåndet UVB og med færre bivirkninger.'
                    : ': Narrowband ultraviolet B light, the most widely used phototherapy for moderate psoriasis — more effective than broadband UVB and with fewer side effects.'}
                </li>
                <li>
                  <strong>PUVA</strong>
                  {isDa
                    ? ': Kombination af psoralen (lysfølsomhedsøgende medicin) og UVA-lys.'
                    : ': Combination of psoralen (photosensitising medication) and UVA light.'}
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">
                {isDa ? 'Hvornår er systemisk eller biologisk behandling nødvendig?' : 'When is systemic or biologic treatment needed?'}
              </h3>
              <p>
                {isDa
                  ? 'For moderat til svær psoriasis kan systemiske lægemidler og biologiske terapier være nødvendige:'
                  : 'For moderate to severe psoriasis, systemic medications and biologic therapies may be necessary:'}
              </p>
              <ul>
                <li>
                  <strong>{isDa ? 'Biologiske lægemidler' : 'Biologics'}</strong>
                  {isDa
                    ? ': Nyere lægemidler, der målrettet blokerer specifikke dele af immunsystemet (TNF-alfa, IL-17, IL-23). De er meget effektive, men kræver screening for infektioner som tuberkulose før opstart og løbende kontrol hos en specialist.'
                    : ': Newer drugs that specifically target parts of the immune system (TNF-alpha, IL-17, IL-23). They are highly effective, but require screening for infections such as tuberculosis before starting, and ongoing specialist monitoring.'}
                </li>
                <li>
                  <strong>{isDa ? 'Konventionel systemisk behandling' : 'Conventional systemic treatments'}</strong>
                  {isDa
                    ? ': Methotrexat, ciclosporin og acitretin. De virker på hele kroppen og kræver regelmæssige blodprøver. Methotrexat er fosterskadende, og det samme gælder acitretin, så ingen af dem må bruges under graviditet.'
                    : ': Methotrexate, ciclosporin and acitretin. They act on the whole body and require regular blood tests. Methotrexate is teratogenic, as is acitretin, so neither may be used in pregnancy.'}
                </li>
                <li>
                  <strong>{isDa ? 'Apremilast' : 'Apremilast'}</strong>
                  {isDa
                    ? ': Oral medicin, der hæmmer et enzym involveret i inflammation.'
                    : ': Oral medication that inhibits an enzyme involved in inflammation.'}
                </li>
              </ul>

              {/* When to see a doctor */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvornår skal du søge læge?' : 'When should you see a doctor?'}
              </h2>
              <p>
                {isDa ? (
                  <>
                    Søg læge, hvis røde, skællende pletter ikke forsvinder efter et par uger med håndkøbsprodukter, hvis udslættet breder sig, hvis neglene ændrer sig, eller hvis du får hævede og stive led. Flere andre tilstande giver røde, skællende pletter — for eksempel{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      seboroisk dermatitis
                    </Link>{' '}
                    i hovedbund og ansigt (sebopsoriasis) og{' '}
                    <Link href={`/${lang}/blog/lichen-planus`} className="text-primary underline hover:text-primary-900">
                      lichen planus
                    </Link>{' '}
                    — og de behandles forskelligt, så den rigtige diagnose er vigtig.
                  </>
                ) : (
                  <>
                    See a doctor if red, scaly patches do not clear after a couple of weeks of over-the-counter care, if the rash is spreading, if your nails change, or if you develop swollen and stiff joints. Several other conditions cause red, scaly patches — for example{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      seborrhoeic dermatitis
                    </Link>{' '}
                    on the scalp and face (sebopsoriasis) and{' '}
                    <Link href={`/${lang}/blog/lichen-planus`} className="text-primary underline hover:text-primary-900">
                      lichen planus
                    </Link>{' '}
                    — and they are treated differently, so the correct diagnosis matters.
                  </>
                )}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Søg akut lægehjælp, hvis rødme og skældannelse breder sig til næsten hele kroppen (erytrodermisk psoriasis), eller hvis du får et udbrud af pusfyldte pustler sammen med feber og kulderystelser (generaliseret pustuløs psoriasis). Begge tilstande kan påvirke kredsløb og væskebalance og skal behandles på hospital.'
                    : 'Seek urgent medical help if redness and scaling spread over almost the whole body (erythrodermic psoriasis), or if you develop a crop of pus-filled pustules together with fever and chills (generalised pustular psoriasis). Both can affect circulation and fluid balance and need hospital treatment.'}
                </p>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Psoriasis vulgaris (plakpsoriasis) er klassificeret som EA90.0 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en kronisk, immunmedieret hudsygdom med skarpt afgrænsede, skællende plaques, og den behandles med topiske midler, lysbehandling og systemiske eller biologiske lægemidler.'
                    : "Psoriasis vulgaris (plaque psoriasis) is classified as EA90.0 in the WHO's International Classification of Diseases (ICD-11). It is a chronic, immune-mediated skin disease with sharply demarcated, scaly plaques, managed with topical agents, phototherapy and systemic or biologic drugs."}
                </p>
              </div>

              {/* FAQ Section */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er psoriasis smitsom?' : 'Is psoriasis contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej, psoriasis er ikke smitsom. Du kan ikke få psoriasis ved at røre ved en person med tilstanden, og den overføres ikke gennem blod eller andre kropsvæsker.'
                      : 'No, psoriasis is not contagious. You cannot get psoriasis by touching someone with the condition, and it is not transmitted through blood or other body fluids.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvordan påvirker psoriasis livskvaliteten?' : 'How does psoriasis affect quality of life?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Psoriasis kan have betydelig psykologisk indvirkning på grund af synlige hudforandringer. Mange oplever stigmatisering, lav selvtillid, angst og depression, og studier finder en øget forekomst af selvmordstanker, særligt ved svær psoriasis. Tidlig og effektiv behandling er vigtig.'
                      : 'Psoriasis can have a significant psychological impact due to visible skin changes. Many experience stigmatisation, low self-esteem, anxiety and depression, and studies find an increased rate of suicidal thoughts, particularly in severe psoriasis. Early and effective treatment is important.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hjælper kost og livsstil ved psoriasis?' : 'Do diet and lifestyle help with psoriasis?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ingen diæt kan helbrede psoriasis, men nogle livsstilsændringer kan hjælpe: oprethold en sund vægt, undgå rygning og alkohol, håndter stress, og spis en antiinflammatorisk kost med omega-3-fedtsyrer.'
                      : 'No diet can cure psoriasis, but some lifestyle changes can help: maintain a healthy weight, avoid smoking and alcohol, manage stress, and eat an anti-inflammatory diet with omega-3 fatty acids.'}
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
                    ? 'Hvis du oplever vedvarende hudforandringer, der kunne være psoriasis, kan du få en personlig vurdering fra en certificeret hudlæge via SKIND-appen — uden ventetid.'
                    : 'If you are experiencing persistent skin changes that could be psoriasis, you can get a personal assessment from a certified dermatologist via the SKIND app — no waiting list.'}
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
