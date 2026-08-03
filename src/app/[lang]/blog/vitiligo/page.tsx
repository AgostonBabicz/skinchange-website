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
        title: 'Hvad er Vitiligo? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Vitiligo: hvorfor immunsystemet angriber pigmentcellerne, hvem der rammes, og hvilke behandlinger der virker. Få en vurdering fra en hudlæge via SKIND.',
        keywords:
          'hvad er vitiligo, vitiligo symptomer, vitiligo årsager, vitiligo behandling, segmental vitiligo, hudlæge vitiligo, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/vitiligo',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/vitiligo',
            da: 'https://www.skinchange.dk/da/blog/vitiligo',
            en: 'https://www.skinchange.dk/en/blog/vitiligo',
          },
        },
      }
    : {
        title: 'What is Vitiligo? Causes, Symptoms and Treatment | SKIND',
        description:
          'Vitiligo: why the immune system attacks pigment cells, who gets it, and which treatments actually work. Get an assessment from a dermatologist via SKIND.',
        keywords:
          'what is vitiligo, vitiligo symptoms, vitiligo causes, vitiligo treatment, segmental vitiligo, dermatologist vitiligo, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/vitiligo',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/vitiligo',
            da: 'https://www.skinchange.dk/da/blog/vitiligo',
            en: 'https://www.skinchange.dk/en/blog/vitiligo',
          },
        },
      };
}

export default function VitiligoPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Vitiligo? Årsager, Symptomer og Behandling'
      : 'What is Vitiligo? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til vitiligo: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to vitiligo: what it is, causes, symptoms and treatment options.',
    image: '/blog-vitiligo.jpg',
    datePublished: '2026-03-18',
    dateModified: '2026-03-18',
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
            name: 'Er vitiligo farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vitiligo er ikke farligt i medicinsk forstand og påvirker ikke den generelle helbredstilstand. De hvide pletter øger dog risikoen for solskoldninger, og tilstanden er forbundet med en let øget risiko for andre autoimmune sygdomme som skjoldbruskkirtelsygdom.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan vitiligo helbredes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der er ingen kendt kur mod vitiligo. Mange behandlinger kan dog bremse spredningen og hjælpe med at genskabe noget pigment, særligt smalspektret UVB-lysbehandling og nye JAK-hæmmere. Resultater varierer fra person til person, og ansigtet reagerer generelt bedre end hænder og fødder.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge så snart du bemærker hvide pletter eller afpigmenterede områder. Tidlig behandling giver den bedste chance for at bremse spredningen og opnå repigmentering. En hudlæge kan også udelukke andre årsager til hvide pletter, fx pityriasis versicolor eller hypopigmentering efter eksem eller psoriasis.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is vitiligo dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vitiligo is not medically dangerous and does not affect overall health. However, the white patches increase the risk of sunburn, and the condition is associated with a slightly increased risk of other autoimmune diseases such as thyroid disease.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can vitiligo be cured?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There is no known cure for vitiligo. However, many treatments can slow the spread and help restore some pigmentation, particularly narrowband UVB phototherapy and new JAK inhibitors. Results vary from person to person, and the face generally responds better than the hands and feet.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist as soon as you notice white patches or depigmented areas. Early treatment gives the best chance of slowing the spread and achieving repigmentation. A dermatologist can also rule out other causes of white patches, such as pityriasis versicolor or hypopigmentation following eczema or psoriasis.',
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
                {isDa ? 'Hvad er Vitiligo?' : 'What is Vitiligo?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '18. marts 2026' : 'March 18, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Vitiligo? Årsager, Symptomer og Behandling'
                : 'What is Vitiligo? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-vitiligo.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af hud med skarpt afgrænsede hvide, afpigmenterede pletter ved vitiligo.'
                    : 'Close-up of skin with sharply defined white, depigmented patches of vitiligo.'
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
                    <strong>Vitiligo er en autoimmun hudlidelse</strong>, der forårsager karakteristiske hvide
                    pletter på huden. Den rammer mennesker i alle aldre, hudfarver og baggrunde – og på trods af
                    at den ikke er farlig, kan den have en dyb indvirkning på selvfølelse og livskvalitet.
                  </>
                ) : (
                  <>
                    <strong>Vitiligo is an autoimmune skin condition</strong> that causes characteristic white
                    patches on the skin. It affects people of all ages, skin tones and backgrounds — and despite
                    not being medically dangerous, it can have a profound impact on self-esteem and quality of life.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad vitiligo er, hvad der forårsager det, hvem der rammes, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what vitiligo is, what causes it, who gets it, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is vitiligo */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er vitiligo?' : 'What is vitiligo?'}
              </h2>
              <p>
                {isDa
                  ? 'Vitiligo er en ikke-smitsom hudlidelse, der opstår, når immunsystemet fejlagtigt angriber og ødelægger melanocytterne – de pigmentproducerende celler i huden. Resultatet er glatte, hvide pletter (afpigmenterede områder), der kan opstå overalt på kroppen.'
                  : 'Vitiligo is a non-contagious skin condition that occurs when the immune system mistakenly attacks and destroys melanocytes — the pigment-producing cells in the skin. The result is smooth, white patches (depigmented areas) that can appear anywhere on the body.'}
              </p>
              <p>
                {isDa
                  ? 'Det er vigtigt at understrege: vitiligo er ikke forårsaget af noget, du har gjort forkert, og det udgør ikke en trussel mod din generelle sundhed. Det er klassificeret som ED63.0 i WHO\'s ICD-11.'
                  : "It is important to emphasise: vitiligo is not caused by anything you have done wrong, and it does not pose a threat to your overall health. It is classified as ED63.0 in the WHO's ICD-11."}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser vitiligo ud?' : 'What does vitiligo look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Vitiligo kan vise sig på mange måder afhængigt af personen og typen:'
                  : 'Vitiligo can present in various ways depending on the person and type:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Hvide, glatte pletter:' : 'White, smooth patches:'}</strong>{' '}
                  {isDa
                    ? 'De afpigmenterede områder er normalt tydeligt afgrænsede og kan variere fra et par millimeter til store dele af kroppen. De kan opstå i ansigtet, på hænderne, armene, benene og kønsorganerne.'
                    : 'The depigmented areas are usually clearly defined and can range from a few millimetres to large parts of the body. They can appear on the face, hands, arms, legs and genitals.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hårtab af farve i pigmentløse områder:' : 'Loss of hair colour in depigmented areas:'}</strong>{' '}
                  {isDa
                    ? 'I visse tilfælde mister håret, der vokser i vitiligo-områderne, også sin farve og bliver hvidt eller gråt.'
                    : 'In some cases, hair growing in the vitiligo-affected areas also loses its colour and becomes white or grey.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tab af pigment i slimhinder:' : 'Loss of pigment in mucous membranes:'}</strong>{' '}
                  {isDa
                    ? 'Vitiligo kan også påvirke slimhinderne inde i munden og næsen.'
                    : 'Vitiligo can also affect the mucous membranes inside the mouth and nose.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Vitiligo inddeles i to hovedformer. Ikke-segmental vitiligo er langt den hyppigste: pletterne optræder typisk symmetrisk på begge sider af kroppen, og hertil hører undertyperne generaliseret, akrofacial (hænder og ansigt), fokal (én enkelt eller ganske få pletter), mukosal (slimhinder) og universel (næsten al hud).'
                  : 'Vitiligo is divided into two main forms. Non-segmental vitiligo is by far the more common: the patches typically appear symmetrically on both sides of the body, and its subtypes include generalised, acrofacial (hands and face), focal (a single patch or very few), mucosal (mucous membranes) and universal (almost all of the skin).'}
              </p>
              <p>
                {isDa
                  ? 'Segmental vitiligo er den anden hovedform. Den sidder ensidigt inden for et afgrænset område, ofte svarende til et nervesegment, debuterer typisk tidligt i livet og holder som regel op med at brede sig efter det første år. Skellet mellem de to former har praktisk betydning, fordi de reagerer forskelligt på behandling.'
                  : 'Segmental vitiligo is the other main form. It is one-sided and confined to a limited area, often corresponding to a nerve segment, usually begins early in life and normally stops spreading after the first year. The distinction between the two forms matters in practice, because they respond differently to treatment.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår vitiligo?' : 'Why does vitiligo happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag er endnu ikke fuldt forstået, men forskning peger på en kombination af faktorer:'
                  : 'The exact cause is not yet fully understood, but research points to a combination of factors:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvorfor angriber immunsystemet pigmentcellerne?' : 'Why does the immune system attack the pigment cells?'}
              </h3>
              <p>
                {isDa
                  ? 'Den primære mekanisme er autoimmun: T-lymfocytter (hvide blodlegemer) identificerer fejlagtigt melanocytter som fremmede og angriber dem. Dette fører til gradvis ødelæggelse af pigmentcellerne og fremkomsten af de karakteristiske hvide pletter.'
                  : 'The primary mechanism is autoimmune: T-lymphocytes (white blood cells) mistakenly identify melanocytes as foreign and attack them. This leads to progressive destruction of the pigment cells and the emergence of the characteristic white patches.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Er vitiligo arveligt?' : 'Is vitiligo hereditary?'}
              </h3>
              <p>
                {isDa
                  ? 'Delvist. Vitiligo forekommer hyppigere i visse familier, hvilket tyder på en genetisk komponent. Omkring 20% af dem med vitiligo har mindst én nær slægtning – en forælder, søskende eller et barn – med samme tilstand. Specifikke genvarianter knyttet til immunregulering er identificeret i forskning, men arv alene afgør ikke, om man udvikler vitiligo.'
                  : 'Partly. Vitiligo occurs more frequently in certain families, suggesting a genetic component. Around 20% of people with vitiligo have at least one close relative — a parent, sibling or child — with the same condition. Specific gene variants linked to immune regulation have been identified in research, but heredity alone does not determine whether someone develops vitiligo.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad kan udløse vitiligo?' : 'What can trigger vitiligo?'}
              </h3>
              <p>
                {isDa
                  ? 'Visse faktorer kan udløse eller forværre vitiligo hos genetisk disponerede personer: alvorlig stress eller følelsesmæssige traumer, hudskader (Köbner-fænomenet – nye pletter opstår ved skadestedet), solskoldninger og eksponering for visse kemikalier.'
                  : 'Certain factors can trigger or worsen vitiligo in genetically predisposed individuals: severe stress or emotional trauma, skin injury (Köbner phenomenon — new patches appear at the site of injury), sunburn, and exposure to certain chemicals.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa
                  ? 'Hænger vitiligo sammen med andre autoimmune sygdomme?'
                  : 'Is vitiligo linked to other autoimmune conditions?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Ja. Vitiligo er forbundet med øget risiko for andre autoimmune sygdomme, herunder sygdom i skjoldbruskkirtlen
                    (Hashimotos thyreoiditis, Graves&apos; sygdom),{' '}
                    <Link href={`/${lang}/blog/alopecia-areata`} className="text-primary underline hover:text-primary-900">
                      alopecia areata
                    </Link>{' '}
                    (pletvis hårtab), type 1-diabetes og perniciøs anæmi. Skjoldbruskkirtelsygdom er langt den hyppigste, og derfor
                    anbefales det at måle stofskiftetal (TSH) og thyreoidea-autoantistoffer, når diagnosen stilles, og derefter med
                    jævne mellemrum – også hvis du ikke har symptomer.
                  </>
                ) : (
                  <>
                    Yes. Vitiligo is associated with an increased risk of other autoimmune diseases, including thyroid disease
                    (Hashimoto&apos;s thyroiditis, Graves&apos; disease),{' '}
                    <Link href={`/${lang}/blog/alopecia-areata`} className="text-primary underline hover:text-primary-900">
                      alopecia areata
                    </Link>{' '}
                    (patchy hair loss), type 1 diabetes and pernicious anaemia. Thyroid disease is by far the most common, which is
                    why thyroid function (TSH) and thyroid autoantibodies should be checked when the diagnosis is made and
                    periodically thereafter — even if you have no symptoms.
                  </>
                )}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får vitiligo?' : 'Who gets vitiligo?'}
              </h2>
              <p>
                {isDa
                  ? 'Vitiligo rammer omkring 0,5–2% af verdens befolkning, og de fleste opgørelser lander i den lave ende af intervallet, 0,5–1% – uanset etnicitet, køn eller alder. Dog er der mønstre:'
                  : 'Vitiligo affects around 0.5–2% of the world\'s population, with most estimates towards the lower end of that range, 0.5–1% — regardless of ethnicity, sex or age. However, certain patterns emerge:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Debut i ung alder:' : 'Early onset:'}</strong>{' '}
                  {isDa
                    ? 'Halvdelen af alle tilfælde debuterer før 20-årsalderen, og mange opdager de første pletter i teenageårene.'
                    : 'Half of all cases begin before the age of 20, and many people notice their first patches during their teenage years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Familiehistorie:' : 'Family history:'}</strong>{' '}
                  {isDa
                    ? 'Risikoen er forhøjet, hvis nære familiemedlemmer har vitiligo eller andre autoimmune sygdomme.'
                    : 'The risk is elevated if close family members have vitiligo or other autoimmune diseases.'}
                </li>
                <li>
                  <strong>{isDa ? 'Alle hudtyper:' : 'All skin types:'}</strong>{' '}
                  {isDa
                    ? 'Vitiligo forekommer hos alle, men er ofte mere synlig – og dermed mere psykisk belastende – hos personer med mørkere hudtone.'
                    : 'Vitiligo occurs in everyone, but is often more visible — and therefore more psychologically distressing — in people with darker skin tones.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved vitiligo?' : 'What can you do about vitiligo?'}
              </h2>
              <p>
                {isDa
                  ? 'Der er ingen kendt kur mod vitiligo, men en række behandlingsmuligheder kan hjælpe med at bremse spredningen og i visse tilfælde genskabe noget pigment:'
                  : 'There is no known cure for vitiligo, but a range of treatment options can help slow the spread and in some cases restore some pigmentation:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Topiske kortikosteroider og immunmodulatorer' : '💊 Topical corticosteroids and immunomodulators'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Steroidcremer kan reducere immunangrebet på melanocytterne og fremme repigmentering, særligt ved tidlige og aktive pletter. Calcineurinhæmmere (tacrolimus, pimecrolimus) er et alternativ til følsomme områder som ansigtet.'
                      : 'Steroid creams can reduce the immune attack on melanocytes and promote repigmentation, particularly for early and active patches. Calcineurin inhibitors (tacrolimus, pimecrolimus) are an alternative for sensitive areas such as the face.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '☀️ Lysbehandling (fototerapi)' : '☀️ Light therapy (phototherapy)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Smalspektret UVB-lysbehandling (nbUVB) er i dag standardbehandling for udbredt vitiligo. Den stimulerer de tilbageværende melanocytter til at producere pigment igen. PUVA (UVA kombineret med psoralen) er egentlig fotokemoterapi og bruges kun i særlige tilfælde.'
                      : 'Narrowband UVB (nbUVB) phototherapy is currently the standard treatment for widespread vitiligo. It stimulates the remaining melanocytes to produce pigment again. PUVA (UVA combined with psoralen) is photochemotherapy proper and is now used only in specific cases.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧬 Nye biologiske behandlinger' : '🧬 New biological treatments'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ruxolitinib-creme (Opzelura, en JAK-hæmmer) blokerer den immunvej, der ødelægger melanocytterne, og har vist lovende resultater for repigmentering. EU-godkendelsen fra 2023 er dog afgrænset: den gælder ikke-segmental vitiligo med involvering af ansigtet hos personer fra 12 år og opefter. Har du segmental vitiligo eller kun pletter på kroppen, er du ikke omfattet af indikationen. Tilskud er desuden ikke generelt i Danmark, så tal med din hudlæge om pris og enkelttilskud.'
                      : 'Ruxolitinib cream (Opzelura, a JAK inhibitor) blocks the immune pathway that destroys melanocytes and has shown promising repigmentation results. Its EU approval from 2023 is narrow, however: it covers non-segmental vitiligo with facial involvement in people aged 12 and over. If you have segmental vitiligo, or patches only on the body, you fall outside that indication. Reimbursement in Denmark is not general either, so discuss cost and individual reimbursement with your dermatologist.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🩹 Kirurgiske muligheder' : '🩹 Surgical options'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved stabil vitiligo kan hudtransplantation eller melanocyttransplantation overvejes. Disse metoder er egnede til afgrænset, inaktiv vitiligo og kræver specialisthenvisning.'
                      : 'For stable vitiligo, skin grafting or melanocyte transplantation may be considered. These methods are suitable for limited, inactive vitiligo and require specialist referral.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧴 Solbeskyttelse og camouflage' : '🧴 Sun protection and camouflage'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'De afpigmenterede områder mangler det naturlige solfilter melanin og brænder let. Brug altid solcreme med høj SPF (50+) på berørte områder. Medicinsk camouflage-makeup kan dække pletterne effektivt og forbedre livskvaliteten.'
                      : 'Depigmented areas lack the natural sun filter melanin and burn easily. Always use sunscreen with high SPF (50+) on affected areas. Medical camouflage makeup can effectively cover the patches and improve quality of life.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Vitiligo er klassificeret som ED63.0 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved autoimmun ødelæggelse af melanocytter, der fører til afpigmenterede pletter. Behandling inkluderer lysbehandling og topiske steroider.'
                    : "Vitiligo is classified as ED63.0 in the WHO's International Classification of Diseases (ICD-11). It is characterised by autoimmune destruction of melanocytes leading to depigmented patches. Treatment includes phototherapy and topical steroids."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er vitiligo farligt?' : 'Is vitiligo dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Vitiligo er ikke farligt i medicinsk forstand og påvirker ikke den generelle helbredstilstand. De hvide pletter øger dog risikoen for solskoldninger, og tilstanden er forbundet med en let øget risiko for andre autoimmune sygdomme som skjoldbruskkirtelsygdom.'
                      : 'Vitiligo is not medically dangerous and does not affect overall health. However, the white patches increase the risk of sunburn, and the condition is associated with a slightly increased risk of other autoimmune diseases such as thyroid disease.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Kan vitiligo helbredes?' : 'Can vitiligo be cured?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Der er ingen kendt kur mod vitiligo. Mange behandlinger kan dog bremse spredningen og hjælpe med at genskabe noget pigment, særligt smalspektret UVB-lysbehandling og nye JAK-hæmmere. Resultater varierer fra person til person, og ansigtet reagerer generelt bedre end hænder og fødder.'
                      : 'There is no known cure for vitiligo. However, many treatments can slow the spread and help restore some pigmentation, particularly narrowband UVB phototherapy and new JAK inhibitors. Results vary from person to person, and the face generally responds better than the hands and feet.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa ? (
                      <>
                        Kontakt en hudlæge, så snart du bemærker hvide pletter eller afpigmenterede områder. Tidlig behandling giver
                        den bedste chance for at bremse spredningen og opnå repigmentering. En hudlæge kan også udelukke andre
                        årsager til hvide pletter, fx pityriasis versicolor eller hypopigmentering efter eksem eller{' '}
                        <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                          psoriasis
                        </Link>
                        .
                      </>
                    ) : (
                      <>
                        Contact a dermatologist as soon as you notice white patches or depigmented areas. Early treatment gives the
                        best chance of slowing the spread and achieving repigmentation. A dermatologist can also rule out other
                        causes of white patches, such as pityriasis versicolor or hypopigmentation following eczema or{' '}
                        <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                          psoriasis
                        </Link>
                        .
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
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
