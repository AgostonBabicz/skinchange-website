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
        title: 'Hvad er Impetigo? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om impetigo: hvad det er, hvordan det ser ud, hvem der rammes (særligt børn), og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'impetigo, impetigo behandling, børnesygdomme hud, honningfarvet skorpe, bakteriel hudinfektion, hudlæge impetigo, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/impetigo',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/impetigo',
            da: 'https://www.skinchange.dk/da/blog/impetigo',
            en: 'https://www.skinchange.dk/en/blog/impetigo',
          },
        },
      }
    : {
        title: 'What is Impetigo? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about impetigo: what it is, what it looks like, who gets it (especially children), and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'impetigo, impetigo treatment, childhood skin disease, honey-crusted sores, bacterial skin infection, dermatologist impetigo, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/impetigo',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/impetigo',
            da: 'https://www.skinchange.dk/da/blog/impetigo',
            en: 'https://www.skinchange.dk/en/blog/impetigo',
          },
        },
      };
}

export default function ImpetigoPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Impetigo? Årsager, Symptomer og Behandling'
      : 'What is Impetigo? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til impetigo: hvad det er, hvordan det ser ud, hvem der rammes, og hvilke behandlingsmuligheder der findes.'
      : 'Complete guide to impetigo: what it is, what it looks like, who gets it, and what treatment options are available.',
    image: 'https://www.skinchange.dk/blog/impetigo.jpg',
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
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
            name: 'Hvad er impetigo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Impetigo er en bakteriel hudinfektion, der angriber de yderste lag af huden. Den findes i to hovedtyper: non-bulløs impetigo med honningfarvede skorper og bulløs impetigo med større væskefyldte blærer.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser impetigo ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Impetigo viser sig typisk som røde, irriterede pletter omkring munden og næsen med små, væskefyldte blærer der brister og efterlader en honningfarvet skorpe eller gule skorper.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er impetigo smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, impetigo er smitsomt. Det spredes gennem direkte kontakt med en inficeret person eller via forurenede genstande som håndklæder, legetøj og sengetøj.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for impetigo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg lægehjælp hvis infektionen ikke forbedres med håndkøbsbehandling inden for en uge, spreder sig til nye områder, eller hvis dit barn udvikler feber. SKIND giver adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is impetigo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Impetigo is a bacterial skin infection affecting the outermost layers of the skin. It comes in two main types: non-bullous impetigo with honey-crusted sores and bullous impetigo with larger fluid-filled blisters.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does impetigo look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Impetigo typically appears as red, irritated patches around the mouth and nose with small fluid-filled blisters that burst and leave a honey-coloured crust or yellow scabs.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is impetigo contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, impetigo is contagious. It spreads through direct contact with an infected person or via contaminated objects such as towels, toys and bedding.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for impetigo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek medical help if the infection does not improve with over-the-counter treatment within a week, spreads to new areas, or if your child develops a fever. SKIND gives you access to a dermatologist within 48 hours.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Impetigo?' : 'What is Impetigo?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">23. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Impetigo? Årsager, Symptomer og Behandling'
                : 'What is Impetigo? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                alt={isDa ? 'Impetigo – bakteriel hudinfektion behandling' : 'Impetigo – bacterial skin infection treatment'}
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
                    <strong>Impetigo er en af de mest almindelige bakterielle hudinfektioner hos børn</strong>, men den kan ramme alle aldersgrupper. På trods af sin udbredelse kan impetigo være ubehageligt og — i sjældne tilfælde — føre til komplikationer, hvis det ikke behandles korrekt.
                  </>
                ) : (
                  <>
                    <strong>Impetigo is one of the most common bacterial skin infections in children</strong>, but it can affect all age groups. Despite its prevalence, impetigo can be uncomfortable and — in rare cases — lead to complications if not treated properly.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad impetigo er, hvordan det ser ud, hvem der rammes, og hvad du kan gøre ved det.'
                  : 'In this article we explain exactly what impetigo is, what it looks like, who gets it, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is impetigo */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er impetigo?' : 'What is impetigo?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo er en overfladisk bakteriel hudinfektion, der påvirker epidermis — hudens yderste lag. Infektionen forårsages primært af Staphylococcus aureus (stafylokokker) og Streptococcus pyogenes (streptokokker), som trænger ind i huden gennem små revner, splinter eller insektbid.'
                  : 'Impetigo is a superficial bacterial skin infection affecting the epidermis — the outermost layer of the skin. The infection is primarily caused by Staphylococcus aureus (staphylococci) and Streptococcus pyogenes (streptococci), which enter the skin through small cracks, splinters or insect bites.'}
              </p>
              <p>
                {isDa
                  ? 'Impetigo er smitsomt og kan spredes fra person til person gennem direkte kontakt eller via forurenede genstande. Sygdommen er dog i de fleste tilfælde mild og kan behandles effektivt med antibiotika.'
                  : 'Impetigo is contagious and can spread from person to person through direct contact or via contaminated objects. The disease is, however, mild in most cases and can be treated effectively with antibiotics.'}
              </p>

              {/* Types */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'De to typer af impetigo' : 'The two types of impetigo'}
              </h2>
              <p>{isDa ? 'Der findes to hovedtyper af impetigo:' : 'There are two main types of impetigo:'}</p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Non-bulløs impetigo (den hyppigste)' : 'Non-bullous impetigo (the most common)'}
              </h3>
              <p>
                {isDa
                  ? 'Dette er den mest almindelige form, der udgør ca. 70% af alle impetigo-tilfælde. Den starter typisk med små røde pletter omkring munden og næsen, som hurtigt udvikler sig til små blærer. Når blærerne brister, efterlader de karakteristiske honningfarvede eller gule skorper — der kan ligne tør honning eller voks.'
                  : 'This is the most common form, accounting for about 70% of all impetigo cases. It typically starts as small red spots around the mouth and nose, which quickly develop into small blisters. When the blisters burst, they leave the characteristic honey-coloured or yellow crusts — which can resemble dried honey or wax.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Bulløs impetigo' : 'Bullous impetigo'}
              </h3>
              <p>
                {isDa
                  ? 'Bulløs impetigo skyldes specifikt Staphylococcus aureus, der producerer toksiner, der danner større, væskefyldte blærer — ofte på torso, arme og ben. Blærerne er typisk større end ved non-bulløs impetigo og brister langsommere, hvilket efterlader tyndere, gule skorper.'
                  : 'Bullous impetigo is specifically caused by Staphylococcus aureus, which produces toxins that form larger, fluid-filled blisters — often on the trunk, arms and legs. The blisters are typically larger than in non-bullous impetigo and burst more slowly, leaving thinner, yellow crusts.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser impetigo ud?' : 'What does impetigo look like?'}
              </h2>
              <p>{isDa ? 'Almindelige tegn på impetigo inkluderer:' : 'Common signs of impetigo include:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Røde, irriterede pletter:' : 'Red, irritated patches:'}</strong>{' '}
                  {isDa
                    ? 'Særligt omkring munden, næsen og andre udsatte områder af ansigtet.'
                    : 'Especially around the mouth, nose and other exposed areas of the face.'}
                </li>
                <li>
                  <strong>{isDa ? 'Honningfarvede eller gule skorper:' : 'Honey-coloured or yellow crusts:'}</strong>{' '}
                  {isDa
                    ? 'Det mest genkendelige tegn. Disse skorper dannes, når blærerne brister.'
                    : "The most recognisable sign. These crusts form when the blisters burst."}
                </li>
                <li>
                  <strong>{isDa ? 'Kløe og ubehag:' : 'Itching and discomfort:'}</strong>{' '}
                  {isDa
                    ? 'Særligt omkring de berørte områder, selvom kløen typisk er mildere end ved andre hudlidelser.'
                    : 'Especially around the affected areas, although itching is typically milder than in other skin conditions.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hævede lymfeknuder:' : 'Swollen lymph nodes:'}</strong>{' '}
                  {isDa
                    ? 'I nogle tilfælde kan lymfeknuderne nær infektionen blive hævede og ømme.'
                    : 'In some cases, the lymph nodes near the infection may become swollen and tender.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår impetigo?' : 'Why does impetigo happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo opstår, når bakterier trænger ind i huden gennem en åbning i hudbarrieren. Selv mindre skader kan give bakterierne adgang:'
                  : 'Impetigo occurs when bacteria enter the skin through a break in the skin barrier. Even minor injuries can give bacteria access:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Indgangspunkter for bakterier' : 'Entry points for bacteria'}
              </h3>
              <p>
                {isDa
                  ? 'Hudskader som snit, skrammer, insektbid og selv små revner i huden giver bakterier mulighed for at trænge ind. Eksem og andre kroniske hudtilstande svækker også hudbarrieren og øger risikoen. Hos børn er det særligt almindeligt, at impetigo udvikler sig efter kraftig skrabning af kløende hud.'
                  : 'Skin injuries such as cuts, scrapes, insect bites and even small cracks in the skin give bacteria the opportunity to enter. Eczema and other chronic skin conditions also weaken the skin barrier and increase the risk. In children, it is particularly common for impetigo to develop after vigorous scratching of itchy skin.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Smitteveje' : 'Routes of transmission'}
              </h3>
              <p>
                {isDa
                  ? 'Impetigo smitter gennem direkte kontakt med en inficeret person. Bakterierne kan også overføres via forurenede genstande såsom håndklæder, vaskeklude, sengetøj og legetøj. Dette er særligt relevant i børnehaver, skoler og tætte hjemmemiljøer.'
                  : 'Impetigo spreads through direct contact with an infected person. The bacteria can also be transferred via contaminated objects such as towels, washcloths, bedding and toys. This is particularly relevant in nurseries, schools and close home environments.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får impetigo?' : 'Who gets impetigo?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo kan ramme alle, men visse grupper er særligt sårbare:'
                  : 'Impetigo can affect anyone, but certain groups are particularly vulnerable:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Børn mellem 2 og 6 år:' : 'Children between 2 and 6 years:'}</strong>{' '}
                  {isDa
                    ? 'Dette er dengruppe, der hyppigst rammes af impetigo, primært på grund af hyppig fysisk kontakt i leg, mindre skader og hyppig skrabning.'
                    : 'This is the most commonly affected group, primarily due to frequent physical contact in play, minor injuries and frequent scratching.'}
                </li>
                <li>
                  <strong>{isDa ? 'Børn i institutioner:' : 'Children in institutions:'}</strong>{' '}
                  {isDa
                    ? 'Børnehaver og skoler er klassiske miljøer for impetigoudbrud på grund af den tætte kontakt mellem børn.'
                    : 'Nurseries and schools are classic environments for impetigo outbreaks due to the close contact between children.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med eksem eller dermatitis:' : 'People with eczema or dermatitis:'}</strong>{' '}
                  {isDa
                    ? 'Den beskadigede hudbarriere giver bakterier lettere adgang til at kolonisere og inficere huden.'
                    : 'The damaged skin barrier gives bacteria easier access to colonise and infect the skin.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med svækket immunsystem:' : 'People with weakened immune systems:'}</strong>{' '}
                  {isDa
                    ? 'Et nedsat immunforsvar gør det sværere for kroppen at bekæmpe bakterieinfektioner.'
                    : 'A weakened immune system makes it harder for the body to fight off bacterial infections.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved impetigo?' : 'What can you do about impetigo?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo behandles typisk med antibiotika. Valget af behandling afhænger af infektionens omfang og placering:'
                  : 'Impetigo is typically treated with antibiotics. The choice of treatment depends on the extent and location of the infection:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Håndkøbsbehandling (mild impetigo)' : '💊 Over-the-counter treatment (mild impetigo)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved mild impetigo kan du vaske de berørte områder med sæbe og vand og forsigtigt fjerne skorperne. En antiseptisk creme (f.eks. med hydrogenperoxid) kan hjælpe med at reducere bakterier.'
                      : 'For mild impetigo, wash the affected areas with soap and water and gently remove the crusts. An antiseptic cream (e.g. with hydrogen peroxide) can help reduce bacteria.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Receptpligtig behandling (udbredt impetigo)' : '🩺 Prescription treatment (widespread impetigo)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved mere udbredt impetigo ordinerer lægen typisk en topisk antibiotisk creme (f.eks. fusidinsyre eller mupirocin). Ved bulløs impetigo eller spredning kan orale antibiotika være nødvendige.'
                      : 'For more widespread impetigo, doctors typically prescribe a topical antibiotic cream (e.g. fusidic acid or mupirocin). For bullous impetigo or spread, oral antibiotics may be necessary.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧴 Hygiejne og isolation' : '🧴 Hygiene and isolation'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hold det berørte område rent og dækket. Undgå at dele håndklæder, vaskeklude og sengetøj. Vask hænder hyppigt, og hold barnet hjemme fra institution indtil 24 timer efter behandlingens start.'
                      : 'Keep the affected area clean and covered. Avoid sharing towels, washcloths and bedding. Wash hands frequently and keep the child home from nursery until 24 hours after starting treatment.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Impetigo er klassificeret som 1B72 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en bakteriel hudinfektion, der presenterer sig med honningfarvede skorpeformede læsioner.'
                    : "Impetigo is classified as 1B72 in the WHO's International Classification of Diseases (ICD-11). It is a bacterial skin infection presenting with honey-coloured crusted lesions."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Er impetigo farligt?' : 'Is impetigo dangerous?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Impetigo er sjældent farligt hos raske børn og voksne og behandles normalt effektivt med antibiotika. Ubehandlet impetigo kan dog i sjældne tilfælde føre til dybere hudinfektioner eller nyreproblemer (post-streptokok glomerulonefrit).'
                      : 'Impetigo is rarely dangerous in healthy children and adults and is normally treated effectively with antibiotics. Untreated impetigo can, however, in rare cases lead to deeper skin infections or kidney problems (post-streptococcal glomerulonephritis).'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan forebygger jeg impetigo?' : 'How do I prevent impetigo?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'God håndhygiejne er nøglen. Vask hænder regelmæssigt med sæbe, undgå at dele personlige genstande som håndklæder, og hold små sår og rifter rene og dækkede. Hvis dit barn har eksem eller kløende dermatitis, er det vigtigt at holde neglene korte og kløen under kontrol.'
                      : 'Good hand hygiene is key. Wash hands regularly with soap, avoid sharing personal items such as towels, and keep small cuts and scrapes clean and covered. If your child has eczema or itchy dermatitis, keeping nails short and itch under control is important.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en læge?' : 'When should I contact a doctor?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en læge eller hudlæge hvis impetigo ikke forbedres med håndkøbsbehandling inden for en uge, hvis infektionen spreder sig hurtigt, eller hvis dit barn udvikler feber eller hævede lymfeknuder.'
                      : 'Contact a doctor or dermatologist if impetigo does not improve with over-the-counter treatment within a week, if the infection spreads rapidly, or if your child develops a fever or swollen lymph nodes.'}
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
                    ? 'Er du i tvivl om dine eller dit barns hudproblemer? Upload billeder via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge.'
                    : 'Unsure about your or your child\'s skin condition? Upload photos via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist.'}
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
                    ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Kontakt altid en læge eller hudlæge for personlig rådgivning.'
                    : 'This article is for informational purposes only and does not replace professional medical advice. Always consult a doctor or dermatologist for personal guidance.'}
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
