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
        title: 'Hvad er Vitiligo? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om vitiligo: hvad de hvide pletter er, hvorfor immunsystemet angriber pigmentceller, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp via SKIND.',
        keywords:
          'hvad er vitiligo, vitiligo symptomer, vitiligo årsager, vitiligo behandling, hudlæge vitiligo, SKIND',
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
          'Learn everything about vitiligo: what the white patches are, why the immune system attacks pigment cells, who gets it and what treatment options are available. Get help via SKIND.',
        keywords:
          'what is vitiligo, vitiligo symptoms, vitiligo causes, vitiligo treatment, dermatologist vitiligo, SKIND',
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

export default function VilitigoPage({ params: { lang } }: PageProps) {
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
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80',
    datePublished: '2026-03-18',
    dateModified: '2026-03-18',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#peter-bjerring',
      name: 'Peter Bjerring',
      jobTitle: isDa ? 'Speciallæge i hudsygdomme' : 'Consultant Dermatologist',
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
            name: 'Hvad er vitiligo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vitiligo er en ikke-smitsom autoimmun hudlidelse, hvor immunsystemet fejlagtigt angriber pigmentproducerende celler (melanocytter), hvilket resulterer i hvide, afpigmenterede pletter på huden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er vitiligo farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vitiligo udgør ikke en trussel mod den generelle sundhed, men de afpigmenterede områder er mere følsomme over for solskoldning. Tilstanden er desuden forbundet med øget risiko for andre autoimmune sygdomme som skjoldbruskkirtelsygdom.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge hjælp for vitiligo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg en hudlæge hvis du bemærker nye hvide pletter eller eksisterende pletter vokser. Tidlig behandling kan bremse spredningen. Via SKIND kan du få en vurdering inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is vitiligo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vitiligo is a non-contagious autoimmune skin condition where the immune system mistakenly attacks pigment-producing cells (melanocytes), resulting in white, depigmented patches on the skin.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is vitiligo dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vitiligo does not pose a threat to overall health, but the depigmented areas are more susceptible to sunburn. The condition is also associated with an increased risk of other autoimmune diseases such as thyroid disease.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek help for vitiligo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'See a dermatologist if you notice new white patches or existing patches are growing. Early treatment can slow the spread. Via SKIND you can get an assessment within 48 hours.',
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
                {isDa ? 'Hvad er Vitiligo?' : 'What is Vitiligo?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">18. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Vitiligo? Årsager, Symptomer og Behandling'
                : 'What is Vitiligo? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80"
                alt={
                  isDa
                    ? 'Vitiligo – hvide pigmentpletter på huden'
                    : 'Vitiligo – white depigmented patches on skin'
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
                  : 'In this article we explain exactly what vitiligo is, what causes it, who gets it, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is vitiligo */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er vitiligo?' : 'What is vitiligo?'}
              </h2>
              <p>
                {isDa
                  ? 'Vitiligo er en ikke-smitsom hudlidelse, der opstår når immunsystemet fejlagtigt angriber og ødelægger melanocytterne – de pigmentproducerende celler i huden. Resultatet er glatte, hvide pletter (afpigmenterede områder) der kan opstå overalt på kroppen.'
                  : 'Vitiligo is a non-contagious skin condition that occurs when the immune system mistakenly attacks and destroys melanocytes — the pigment-producing cells in the skin. The result is smooth, white patches (depigmented areas) that can appear anywhere on the body.'}
              </p>
              <p>
                {isDa
                  ? 'Det er vigtigt at understrege: vitiligo er ikke forårsaget af noget du har gjort forkert, og det udgør ikke en trussel mod din generelle sundhed. Det er klassificeret som ED63.0 i WHO\'s ICD-11.'
                  : "It is important to emphasise: vitiligo is not caused by anything you have done wrong, and it does not pose a threat to your overall health. It is classified as ED63.0 in the WHO's ICD-11."}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
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
                  <strong>{isDa ? 'Hårtab i pigmentløse områder:' : 'Hair loss in depigmented areas:'}</strong>{' '}
                  {isDa
                    ? 'I visse tilfælde mister håret, der vokser i vitiligo-områderne, også sin farve og bliver hvidt eller grå.'
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
                  ? 'Tilstanden kan begrænse sig til ét område (fokal vitiligo), optræde symmetrisk på begge sider af kroppen (bilateral/generaliseret vitiligo), eller følge nervebaner (segmental vitiligo).'
                  : 'The condition may be limited to one area (focal vitiligo), appear symmetrically on both sides of the body (bilateral/generalised vitiligo), or follow nerve pathways (segmental vitiligo).'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår vitiligo?' : 'Why does vitiligo happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag er endnu ikke fuldt forstået, men forskning peger på en kombination af faktorer:'
                  : 'The exact cause is not yet fully understood, but research points to a combination of factors:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Autoimmun reaktion' : 'Autoimmune reaction'}
              </h3>
              <p>
                {isDa
                  ? 'Den primære mekanisme er autoimmun: T-lymfocytter (hvide blodlegemer) identificerer fejlagtigt melanocytter som fremmede og angriber dem. Dette fører til gradvis ødelæggelse af pigmentcellerne og fremkomsten af de karakteristiske hvide pletter.'
                  : 'The primary mechanism is autoimmune: T-lymphocytes (white blood cells) mistakenly identify melanocytes as foreign and attack them. This leads to progressive destruction of the pigment cells and the emergence of the characteristic white patches.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetisk disposition' : 'Genetic predisposition'}
              </h3>
              <p>
                {isDa
                  ? 'Vitiligo forekommer hyppigere i visse familier, hvilket tyder på en genetisk komponent. Omkring 20–30% af dem med vitiligo har mindst ét familiemedlem med samme tilstand. Specifikke genvarianter knyttet til immunregulering er identificeret i forskning.'
                  : 'Vitiligo occurs more frequently in certain families, suggesting a genetic component. Around 20–30% of people with vitiligo have at least one family member with the same condition. Specific gene variants linked to immune regulation have been identified in research.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Udløsende faktorer' : 'Triggering factors'}
              </h3>
              <p>
                {isDa
                  ? 'Visse faktorer kan udløse eller forværre vitiligo hos genetisk disponerede personer: alvorlig stress eller følelsesmæssige traumer, hudskader (Köbner-fænomenet – nye pletter opstår ved skadested), solskoldninger og eksponering for visse kemikalier.'
                  : 'Certain factors can trigger or worsen vitiligo in genetically predisposed individuals: severe stress or emotional trauma, skin injury (Köbner phenomenon — new patches appear at the site of injury), sunburn, and exposure to certain chemicals.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Forbundet med andre autoimmune tilstande' : 'Associated with other autoimmune conditions'}
              </h3>
              <p>
                {isDa
                  ? 'Vitiligo er associeret med øget risiko for andre autoimmune sygdomme, herunder skjoldbruskkirtelsygdom (Hashimotos thyroiditis, Graves sygdom), alopecia areata (plettvis hårtab) og lupus. Regelmæssig kontrol for disse tilstande anbefales.'
                  : 'Vitiligo is associated with an increased risk of other autoimmune diseases, including thyroid disease (Hashimoto\'s thyroiditis, Graves\' disease), alopecia areata (patchy hair loss) and lupus. Regular monitoring for these conditions is recommended.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får vitiligo?' : 'Who gets vitiligo?'}
              </h2>
              <p>
                {isDa
                  ? 'Vitiligo rammer ca. 1–2% af verdens befolkning – uanset race, etnicitet, køn eller alder. Dog er der mønstre:'
                  : 'Vitiligo affects approximately 1–2% of the world\'s population — regardless of race, ethnicity, gender or age. However, certain patterns emerge:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Debut i ung alder:' : 'Onset in young adulthood:'}</strong>{' '}
                  {isDa
                    ? 'Halvdelen af alle tilfælde debuterer før 20-årsalderen, og mange opdager de første pletter i teenageårene.'
                    : 'Half of all cases begin before the age of 20, and many people notice their first patches during their teenage years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Familiehistorie:' : 'Family history:'}</strong>{' '}
                  {isDa
                    ? 'Risikoen er forhøjet hvis nære familiemedlemmer har vitiligo eller andre autoimmune sygdomme.'
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
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved vitiligo?' : 'What can you do about vitiligo?'}
              </h2>
              <p>
                {isDa
                  ? 'Der er ingen kendt kur mod vitiligo, men en række behandlingsmuligheder kan hjælpe med at bremse spredningen og i visse tilfælde genskabe noget pigment:'
                  : 'There is no known cure for vitiligo, but a range of treatment options can help slow the spread and in some cases restore some pigmentation:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topiske kortikosteroider og immunmodulatorer' : '💊 Topical corticosteroids and immunomodulators'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Steroidcremer kan reducere immunangrebet på melanocytterne og fremme repigmentering, særligt ved tidlige og aktive pletter. Calcineurinhæmmere (tacrolimus, pimecrolimus) er et alternativ til følsomme områder som ansigtet.'
                      : 'Steroid creams can reduce the immune attack on melanocytes and promote repigmentation, particularly for early and active patches. Calcineurin inhibitors (tacrolimus, pimecrolimus) are an alternative for sensitive areas such as the face.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '☀️ Lysbehandling (fotokemoterapi)' : '☀️ Light therapy (photochemotherapy)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Smalspektret UVB-lysbehandling (nbUVB) er i dag standardbehandling for udbredt vitiligo. Den stimulerer de tilbageværende melanocytter til at producere pigment igen. PUVA-behandling (UVA + psoralen) bruges i særlige tilfælde.'
                      : 'Narrowband UVB (nbUVB) light therapy is currently the standard treatment for widespread vitiligo. It stimulates the remaining melanocytes to produce pigment again. PUVA treatment (UVA + psoralen) is used in specific cases.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧬 Nye biologiske behandlinger' : '🧬 New biological treatments'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ruxolitinib (JAK-hæmmer) er en ny godkendt topisk behandling, der blokerer den immunvej der ødelægger melanocytterne. Behandlingen har vist lovende resultater for repigmentering og er tilgængelig i Europa.'
                      : 'Ruxolitinib (JAK inhibitor) is a newly approved topical treatment that blocks the immune pathway destroying melanocytes. The treatment has shown promising results for repigmentation and is available in Europe.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩹 Kirurgiske muligheder' : '🩹 Surgical options'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved stabil vitiligo kan hauttransplantation eller melanocyttransplantation overvejes. Disse metoder er egnede til afgrænset, inaktiv vitiligo og kræver specialisthenvisning.'
                      : 'For stable vitiligo, skin grafting or melanocyte transplantation may be considered. These methods are suitable for limited, inactive vitiligo and require specialist referral.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
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
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Vitiligo er klassificeret som ED63.0 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er karakteriseret ved autoimmun ødelæggelse af melanocytter, der fører til afpigmenterede pletter. Behandling inkluderer lysbehandling og topiske steroider.'
                    : "Vitiligo is classified as ED63.0 in the WHO's International Classification of Diseases (ICD-11). It is characterised by autoimmune destruction of melanocytes leading to depigmented patches. Treatment includes phototherapy and topical steroids."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er vitiligo farligt?' : 'Is vitiligo dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Vitiligo er ikke farligt i medicinsk forstand og påvirker ikke den generelle helbredstilstand. De hvide pletter øger dog risikoen for solskoldninger, og tilstanden er forbundet med en let øget risiko for andre autoimmune sygdomme som skjoldbruskkirtelsygdom.'
                      : 'Vitiligo is not medically dangerous and does not affect overall health. However, the white patches increase the risk of sunburn, and the condition is associated with a slightly increased risk of other autoimmune diseases such as thyroid disease.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan vitiligo heles?' : 'Can vitiligo be cured?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Der er ingen kendt kur mod vitiligo. Mange behandlinger kan dog bremse spredningen og hjælpe med at genskabe noget pigment, særligt med lysbehandling og nye JAK-hæmmere. Resultater varierer fra person til person.'
                      : 'There is no known cure for vitiligo. However, many treatments can slow the spread and help restore some pigmentation, particularly with light therapy and new JAK inhibitors. Results vary from person to person.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge så snart du bemærker hvide pletter eller afpigmenterede områder. Tidlig behandling giver den bedste chance for at bremse spredningen og opnå repigmentering. En hudlæge kan også udelukke andre årsager til afpigmentering.'
                      : 'Contact a dermatologist as soon as you notice white patches or depigmented areas. Early treatment gives the best chance of slowing the spread and achieving repigmentation. A dermatologist can also rule out other causes of depigmentation.'}
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
