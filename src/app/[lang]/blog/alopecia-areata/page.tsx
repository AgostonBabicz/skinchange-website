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
        title: 'Hvad er Alopecia Areata? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om alopecia areata: hvad det er, hvordan immunsystemet angriber hårsækkene, hvem der rammes, og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'alopecia areata, hårtab, autoimmun, hårsækkene, skaldethed, alopecia totalis, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/alopecia-areata',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/alopecia-areata',
            da: 'https://www.skinchange.dk/da/blog/alopecia-areata',
            en: 'https://www.skinchange.dk/en/blog/alopecia-areata',
          },
        },
      }
    : {
        title: 'What is Alopecia Areata? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about alopecia areata: what it is, how the immune system attacks hair follicles, who it affects, and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'alopecia areata, hair loss, autoimmune, hair follicles, baldness, alopecia totalis, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/alopecia-areata',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/alopecia-areata',
            da: 'https://www.skinchange.dk/da/blog/alopecia-areata',
            en: 'https://www.skinchange.dk/en/blog/alopecia-areata',
          },
        },
      };
}

export default function AlopeciaAreataPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Alopecia Areata? Årsager, Symptomer og Behandling'
      : 'What is Alopecia Areata? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til alopecia areata: autoimmun hårtab, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to alopecia areata: autoimmune hair loss, causes, symptoms and treatment options.',
    image: '/blog-alopecia-areata.jpg',
    datePublished: '2026-04-03',
    dateModified: '2026-04-03',
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
            name: 'Hvad er alopecia areata?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alopecia areata er en autoimmun hudlidelse, hvor immunsystemet fejlagtigt angriber hårsækkene, hvilket fører til pludseligt hårtab i veldefinerede, runde glatte pletter på hovedbunden eller andre hårbærende områder.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser alopecia areata ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alopecia areata viser sig typisk som veldefinerede, runde eller ovale pletter uden hår på hovedbunden. Pletterne er som regel glatte og skælløse. Håravfallet kan også påvirke skæg, øjenbryn, øjenvipper og andre kropsområder.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvorfor opstår alopecia areata?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alopecia areata skyldes en autoimmun reaktion, hvor immunsystemets T-celler fejlagtigt angriber og ødelægger hårsækkene. Genetik, stress og visse sygdomme kan bidrage til at udløse tilstanden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvem får alopecia areata?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alle kan udvikle alopecia areata, men tilstanden begynder ofte i barndommen eller tidlig voksenalder. Ca. 2% af befolkningen rammes i løbet af livet, og der er ofte en familiehistorie med alopecia eller andre autoimmune sygdomme.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan alopecia areata behandles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, selvom der ikke er en enkelt kur, findes der effektive behandlinger. Disse inkluderer topiske kortikosteroider, intralesionelle steroidinjektioner, immunterapi og i svære tilfælde JAK-hæmmere. Behandlingen vælges ud fra sværhedsgrad og individuelle faktorer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is alopecia areata?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alopecia areata is an autoimmune skin condition in which the immune system mistakenly attacks hair follicles, leading to sudden hair loss in well-defined, round smooth patches on the scalp or other hair-bearing areas.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does alopecia areata look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alopecia areata typically appears as well-defined, round or oval patches of hair loss on the scalp. The patches are usually smooth and without scaling. Hair loss can also affect the beard, eyebrows, eyelashes and other body areas.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does alopecia areata happen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alopecia areata is caused by an autoimmune reaction in which the immune system\'s T-cells mistakenly attack and destroy hair follicles. Genetics, stress and certain illnesses can contribute to triggering the condition.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who gets alopecia areata?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Anyone can develop alopecia areata, but the condition often begins in childhood or early adulthood. Approximately 2% of the population is affected at some point in their lives, and there is frequently a family history of alopecia or other autoimmune diseases.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can alopecia areata be treated?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, although there is no single cure, effective treatments exist. These include topical corticosteroids, intralesional steroid injections, immunotherapy and in severe cases JAK inhibitors. Treatment is chosen based on severity and individual factors.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Alopecia Areata?' : 'What is Alopecia Areata?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">3. {isDa ? 'april' : 'April'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Alopecia Areata? Årsager, Symptomer og Behandling'
                : 'What is Alopecia Areata? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-alopecia-areata.jpg"
                alt={isDa ? 'Alopecia areata – autoimmun hårtab' : 'Alopecia areata – autoimmune hair loss'}
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
                    <strong>Alopecia areata er en autoimmun hudlidelse</strong>, der rammer millioner af mennesker verden over og kan opstå i alle aldre. Når kroppens eget immunsystem fejlagtigt angriber hårsækkene, kan resultatet være pludseligt, uforklarligt hårtab — ofte i veldefinerede runde pletter.
                  </>
                ) : (
                  <>
                    <strong>Alopecia areata is an autoimmune skin condition</strong> that affects millions of people worldwide and can occur at any age. When the body's own immune system mistakenly attacks the hair follicles, the result can be sudden, unexplained hair loss — often in well-defined round patches.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad alopecia areata er, hvordan det adskiller sig fra andre former for hårtab, hvad der forårsager det, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what alopecia areata is, how it differs from other forms of hair loss, what causes it, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is alopecia areata */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er alopecia areata?' : 'What is alopecia areata?'}
              </h2>
              <p>
                {isDa
                  ? 'Alopecia areata er en autoimmun lidelse, hvor immunsystemets T-celler fejlagtigt angriber hårsækkene — de små strukturer i huden, der producerer hår. Dette angreb får hårsækkene til at skrumpe og stoppe med at producere synligt hår, hvilket resulterer i hårtab.'
                  : 'Alopecia areata is an autoimmune disorder in which the immune system\'s T-cells mistakenly attack the hair follicles — the small structures in the skin that produce hair. This attack causes the hair follicles to shrink and stop producing visible hair, resulting in hair loss.'}
              </p>
              <p>
                {isDa
                  ? 'Det vigtige at vide er, at alopecia areata ikke er smitsomt, og at det ikke er forårsaget af noget, du har gjort forkert. Tilstanden er heller ikke direkte farlig for din fysiske sundhed — men den kan have en betydelig psykologisk indvirkning.'
                  : 'The important thing to know is that alopecia areata is not contagious, and it is not caused by anything you have done wrong. The condition is also not directly dangerous to your physical health — but it can have a significant psychological impact.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser alopecia areata ud?' : 'What does alopecia areata look like?'}
              </h2>
              <p>{isDa ? 'Alopecia areata viser sig typisk på følgende måder:' : 'Alopecia areata typically presents in the following ways:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Runde, glatte hårpletter:' : 'Round, smooth patches of hair loss:'}</strong>{' '}
                  {isDa
                    ? 'Det mest karakteristiske tegn er veldefinerede, runde eller ovale områder med fuldstændigt hårtab. Disse pletter er som regel glatte og skælløse — i modsætning til fx ringorm.'
                    : 'The most characteristic sign is well-defined, round or oval areas of complete hair loss. These patches are usually smooth and without scaling — unlike conditions such as ringworm.'}
                </li>
                <li>
                  <strong>{isDa ? 'Pletter på hovedbunden:' : 'Patches on the scalp:'}</strong>{' '}
                  {isDa
                    ? 'Hårtabet ses oftest på hovedbunden, typisk i én eller flere runde pletter. I nogle tilfælde kan hele hovedbunden miste håret (alopecia totalis).'
                    : 'Hair loss is most commonly seen on the scalp, typically in one or several round patches. In some cases, the entire scalp loses all hair (alopecia totalis).'}
                </li>
                <li>
                  <strong>{isDa ? 'Andre hårbærende områder:' : 'Other hair-bearing areas:'}</strong>{' '}
                  {isDa
                    ? 'Alopecia areata kan også påvirke skæg, øjenbryn, øjenvipper og andre dele af kroppen. Alt hår på kroppen kan mistes ved den mest alvorlige form (alopecia universalis).'
                    : 'Alopecia areata can also affect the beard, eyebrows, eyelashes and other parts of the body. All body hair may be lost in the most severe form (alopecia universalis).'}
                </li>
                <li>
                  <strong>{isDa ? 'Pludseligt udbrud:' : 'Sudden onset:'}</strong>{' '}
                  {isDa
                    ? 'Hårtabet kommer ofte meget pludseligt — nogle personer opdager det først, når de ser løse hårstrå på puden eller i badeværelset.'
                    : 'Hair loss often occurs very suddenly — some people only notice it when they see loose hairs on their pillow or in the bathroom.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår alopecia areata?' : 'Why does alopecia areata happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Alopecia areata skyldes en autoimmun reaktion, hvor immunsystemets T-celler fejlagtigt genkender hårsækkene som fremmede og angriber dem. Hårsækkene går i en hvilefase og stopper midlertidigt med at producere hår.'
                  : 'Alopecia areata is caused by an autoimmune reaction in which the immune system\'s T-cells mistakenly identify hair follicles as foreign and attack them. The hair follicles enter a resting phase and temporarily stop producing hair.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik' : 'Genetics'}
              </h3>
              <p>
                {isDa
                  ? 'Arvelige faktorer spiller en vigtig rolle. Op til 20% af personer med alopecia areata har et eller flere familiemedlemmer med samme tilstand eller en anden autoimmun sygdom.'
                  : 'Genetic factors play an important role. Up to 20% of people with alopecia areata have one or more family members with the same condition or another autoimmune disease.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Stress' : 'Stress'}
              </h3>
              <p>
                {isDa
                  ? 'Alvorlig fysisk eller psykisk stress kan udløse eller forværre alopecia areata. Stress påvirker immunsystemet og kan bidrage til den autoimmune reaktion mod hårsækkene.'
                  : 'Severe physical or psychological stress can trigger or worsen alopecia areata. Stress affects the immune system and can contribute to the autoimmune reaction against hair follicles.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Andre sygdomme' : 'Other illnesses'}
              </h3>
              <p>
                {isDa
                  ? 'Alopecia areata er associeret med en række andre autoimmune tilstande, herunder skjoldbruskkirtelsygdomme (Hashimotos, Graves), type 1-diabetes, vitiligo og rheumatoid artritis. Personer med disse tilstande har en højere risiko.'
                  : 'Alopecia areata is associated with several other autoimmune conditions, including thyroid diseases (Hashimoto\'s, Graves\'), type 1 diabetes, vitiligo and rheumatoid arthritis. People with these conditions have a higher risk.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får alopecia areata?' : 'Who gets alopecia areata?'}
              </h2>
              <p>
                {isDa
                  ? 'Alopecia areata kan ramme alle — uanset alder, køn eller etnicitet. Dog er der nogle mønstre:'
                  : 'Alopecia areata can affect anyone — regardless of age, gender or ethnicity. However, there are some patterns:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Alder:' : 'Age:'}</strong>{' '}
                  {isDa
                    ? 'Tilstanden debuterer ofte i barndommen eller tidlig voksenalder. Den gennemsnitlige debutalder er omkring 25–35 år.'
                    : 'The condition often begins in childhood or early adulthood. The average age of onset is around 25–35 years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Forekomst:' : 'Prevalence:'}</strong>{' '}
                  {isDa
                    ? 'Ca. 2% af befolkningen vil udvikle alopecia areata på et tidspunkt i livet. Det anslås, at 5–10 millioner mennesker alene i Europa og USA lever med tilstanden.'
                    : 'Approximately 2% of the population will develop alopecia areata at some point in their lives. It is estimated that 5–10 million people in Europe and the USA alone live with the condition.'}
                </li>
                <li>
                  <strong>{isDa ? 'Familiehistorie:' : 'Family history:'}</strong>{' '}
                  {isDa
                    ? 'Op til 20% har en direkte familiehistorie med alopecia areata eller andre autoimmune sygdomme.'
                    : 'Up to 20% have a direct family history of alopecia areata or other autoimmune diseases.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved alopecia areata?' : 'What can you do about alopecia areata?'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom der ikke findes en universel kur, kan flere behandlinger hjælpe med at fremme hårvækst og bremse yderligere hårtab. Behandlingen afhænger af sværhedsgrad, alder og individuelle faktorer.'
                  : 'Although there is no universal cure, several treatments can help promote hair growth and slow further hair loss. Treatment depends on severity, age and individual factors.'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topiske kortikosteroider' : '💊 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Creme eller lotion påført direkte på de berørte områder. Førstevalgsbehandling for mild til moderat alopecia areata.'
                      : 'Cream or lotion applied directly to the affected areas. First-line treatment for mild to moderate alopecia areata.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💉 Intralesionelle steroidinjektioner' : '💉 Intralesional steroid injections'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Steroid injiceres direkte i de skaldede pletter. Effektiv for voksne med begrænset hårtab og foretrukket for dem, der ikke responderer på topikale behandlinger.'
                      : 'Steroid is injected directly into the bald patches. Effective for adults with limited hair loss and preferred for those who do not respond to topical treatments.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧪 Immunterapi' : '🧪 Immunotherapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kemisk diphencyprone (DPCP) eller squarinsyre påføres huden for at fremkalde en allergisk reaktion, der kan omdirigere immunsystemet og stimulere hårvækst. Anvendes ved sværere tilfælde.'
                      : 'Chemical diphencyprone (DPCP) or squaric acid is applied to the skin to induce an allergic reaction that may redirect the immune system and stimulate hair growth. Used in more severe cases.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 JAK-hæmmere (orale lægemidler)' : '💊 JAK inhibitors (oral medications)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Nyere lægemidler som baricitinib og ritlecitinib (godkendt af EMA og FDA) har vist lovende resultater ved moderat til svær alopecia areata og repræsenterer et stort fremskridt i behandlingen.'
                      : 'Newer drugs such as baricitinib and ritlecitinib (approved by the EMA and FDA) have shown promising results in moderate to severe alopecia areata and represent a major advance in treatment.'}
                  </p>
                </div>
              </div>

              <p>
                {isDa
                  ? 'Det er vigtigt at vide, at hårvækst kan være langsom og kræver tålmodighed. I nogle tilfælde vokser håret tilbage spontant — særligt ved begrænset alopecia areata. Ved sværere former kan behandlingen være langvarig.'
                  : 'It is important to know that hair regrowth can be slow and requires patience. In some cases, hair grows back spontaneously — especially with limited alopecia areata. With more severe forms, treatment may need to be long-term.'}
              </p>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Alopecia areata er klassificeret som ED70.2 i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden er karakteriseret ved pludseligt, ikke-ardannende hårtab som følge af en autoimmun reaktion mod hårsækkene.'
                    : "Alopecia areata is classified as ED70.2 in the WHO's International Classification of Diseases (ICD-11). It is characterised by sudden, non-scarring hair loss due to an autoimmune reaction against the hair follicles."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er alopecia areata smitsomt?' : 'Is alopecia areata contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej, alopecia areata er absolut ikke smitsomt. Det er en autoimmun tilstand — din krop angriber sine egne hårsække. Du kan ikke smitte andre, og andre kan ikke smitte dig.'
                      : 'No, alopecia areata is absolutely not contagious. It is an autoimmune condition — your body attacks its own hair follicles. You cannot infect others, and others cannot infect you.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Vokser håret tilbage?' : 'Does hair grow back?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Det afhænger af sværhedsgraden. Ved begrænset alopecia areata vokser håret ofte tilbage spontant inden for et år. Ved mere udbredt alopecia areata, alopecia totalis eller alopecia universalis er spontan hårvækst mindre sandsynlig, men behandling kan hjælpe.'
                      : 'It depends on the severity. With limited alopecia areata, hair often grows back spontaneously within a year. With more widespread alopecia areata, alopecia totalis or alopecia universalis, spontaneous regrowth is less likely, but treatment can help.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge så snart du opdager uforklarligt hårtab — særligt hvis det opstår pludseligt, i runde pletter, eller hvis du har familiehistorie med alopecia eller andre autoimmune sygdomme. En tidlig vurdering giver de bedste behandlingsmuligheder.'
                      : 'Contact a dermatologist as soon as you notice unexplained hair loss — especially if it occurs suddenly, in round patches, or if you have a family history of alopecia or other autoimmune diseases. An early assessment offers the best treatment options.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Påvirker alopecia areata neglene?' : 'Does alopecia areata affect the nails?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, op til 50% af personer med alopecia areata oplever negleforandringer. Dette kan inkludere små buler (pitting), ru overflade, langsgående riller eller hvide pletter på neglene.'
                      : 'Yes, up to 50% of people with alopecia areata experience nail changes. These can include small dents (pitting), a rough surface, longitudinal ridges or white spots on the nails.'}
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
                    ? 'Upload billeder af din hovedbund via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge — uden ventetid på sygehus.'
                    : 'Upload photos of your scalp via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
