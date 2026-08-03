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
        title: 'Impetigo (børnesår): symptomer og behandling',
        description:
          'Impetigo, også kaldet børnesår, giver honningfarvede skorper om mund og næse. Læs om smitte, behandling og hvornår barnet må komme i institution igen.',
        keywords:
          'impetigo, børnesår, impetigo behandling, honningfarvede skorper, bakteriel hudinfektion, fusidinsyre, institution smitte, SKIND',
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
        title: 'Impetigo: symptoms, treatment and when to stay home',
        description:
          'Impetigo causes honey-coloured crusts around the mouth and nose. Learn how it spreads, how it is treated, and when a child can go back to nursery.',
        keywords:
          'impetigo, impetigo treatment, honey-coloured crusts, bacterial skin infection, fusidic acid, school exclusion, dermatologist, SKIND',
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

  const headline = isDa
    ? 'Hvad er impetigo (børnesår)? Årsager, symptomer og behandling'
    : 'What is impetigo? Causes, symptoms and treatment';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Komplet guide til impetigo (børnesår): hvad det er, hvordan det ser ud, hvem der rammes, og hvordan det behandles.'
      : 'Complete guide to impetigo: what it is, what it looks like, who gets it, and how it is treated.',
    image: '/blog-impetigo.jpg',
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
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

  const faqs = isDa
    ? [
        {
          q: 'Er impetigo farligt?',
          a: 'Impetigo er sjældent farligt hos ellers raske børn og voksne og går som regel væk med antibiotisk behandling. Ubehandlet kan infektionen brede sig til dybere lag af huden, og streptokok-impetigo kan i sjældne tilfælde efterfølges af nyrebetændelse (poststreptokok-glomerulonefritis). Det er dog værd at vide, at antibiotisk behandling af impetigo ikke har vist sig at kunne forebygge nyrebetændelsen – grundene til at behandle er at lindre symptomerne og stoppe smitten.',
        },
        {
          q: 'Hvornår må mit barn komme i institution igen?',
          a: 'Sundhedsstyrelsens anbefaling er, at barnet kan komme tilbage i dagtilbud eller skole 48 timer efter, at antibiotisk behandling er startet. Bliver der ikke behandlet med antibiotika, skal barnet blive hjemme, indtil alle sår er tørret ind og har dannet skorpe.',
        },
        {
          q: 'Hvordan forebygger jeg impetigo?',
          a: 'God håndhygiejne er det vigtigste. Vask hænder regelmæssigt med sæbe, undgå at dele håndklæder og vaskeklude, og hold små sår og rifter rene og dækkede. Har dit barn eksem eller anden kløende hud, hjælper det at holde neglene korte og kløen under kontrol, så huden ikke bliver kradset op.',
        },
        {
          q: 'Hvornår skal jeg kontakte en læge?',
          a: 'Kontakt en læge, hvis sårene ikke er tydeligt bedre 48–72 timer efter, at behandlingen er startet, hvis infektionen breder sig, eller hvis der kommer feber eller hævede lymfeknuder. Søg hjælp samme dag, hvis huden er rød, øm og skaller af i flager, hvis barnet er slapt eller virker sygt, eller hvis det drejer sig om en nyfødt.',
        },
      ]
    : [
        {
          q: 'Is impetigo dangerous?',
          a: 'Impetigo is rarely dangerous in otherwise healthy children and adults, and it usually clears with antibiotic treatment. Left untreated, the infection can spread into deeper layers of the skin, and streptococcal impetigo is in rare cases followed by kidney inflammation (post-streptococcal glomerulonephritis). It is worth knowing, though, that antibiotic treatment of impetigo has not been shown to prevent that kidney complication — the reasons to treat are to relieve symptoms and to stop the infection spreading.',
        },
        {
          q: 'When can my child go back to nursery?',
          a: 'Danish guidance from Sundhedsstyrelsen is that a child can return to nursery or school 48 hours after starting antibiotic treatment. If no antibiotic is given, the child should stay at home until all the sores have dried and crusted over.',
        },
        {
          q: 'How do I prevent impetigo?',
          a: 'Good hand hygiene matters most. Wash hands regularly with soap, avoid sharing towels and flannels, and keep small cuts and grazes clean and covered. If your child has eczema or other itchy skin, keeping the nails short and the itch under control helps stop the skin being scratched open.',
        },
        {
          q: 'When should I contact a doctor?',
          a: 'Contact a doctor if the sores are not clearly improving 48–72 hours after treatment has started, if the infection is spreading, or if a fever or swollen lymph nodes appear. Seek help the same day if the skin is red, painful and peeling away in sheets, if the child is floppy or seems unwell, or if a newborn is affected.',
        },
      ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
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
              <span className="text-gray-900">{isDa ? 'Hvad er impetigo (børnesår)?' : 'What is impetigo?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '23. marts 2026' : 'March 23, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {headline}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-impetigo.jpg"
                alt={
                  isDa
                    ? 'Honningfarvede, gule skorper på rød hud omkring næse og mund hos et barn.'
                    : "Honey-coloured yellow crusts on red skin around a child's nose and mouth."
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
                    <strong>Impetigo – på dansk også kaldet børnesår – er en af de mest almindelige bakterielle hudinfektioner hos børn</strong>, men
                    den kan ramme alle aldre. Den er meget smitsom, og netop derfor betyder det noget, at behandlingen kommer hurtigt i gang, og at
                    man kender reglerne for, hvornår barnet må komme i institution igen.
                  </>
                ) : (
                  <>
                    <strong>Impetigo is one of the most common bacterial skin infections in children</strong>, but it can affect
                    any age group. It is highly contagious, which is exactly why it matters to start treatment promptly and to know
                    when a child can return to nursery or school.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad impetigo er, hvordan det ser ud, hvem der rammes, hvornår det haster, og hvordan det behandles i Danmark.'
                  : 'In this article we explain what impetigo is, what it looks like, who gets it, when it is urgent, and how it is treated in Denmark.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is impetigo */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er impetigo?' : 'What is impetigo?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo er en overfladisk bakteriel hudinfektion i epidermis – hudens yderste lag. Den skyldes Staphylococcus aureus (stafylokokker) og Streptococcus pyogenes (streptokokker), som trænger ind gennem små revner, rifter eller insektbid. I Danmark og andre højindkomstlande er S. aureus i dag langt den hyppigste årsag; streptokokker står oftere bag i varme klimaer og under trange boligforhold.'
                  : 'Impetigo is a superficial bacterial skin infection of the epidermis — the outermost layer of the skin. It is caused by Staphylococcus aureus (staphylococci) and Streptococcus pyogenes (streptococci), which enter through small cracks, grazes or insect bites. In Denmark and other high-income countries S. aureus is now by far the most common cause; streptococci are more often responsible in warm climates and in crowded living conditions.'}
              </p>
              <p>
                {isDa
                  ? 'Impetigo er meget smitsomt og spredes fra person til person ved direkte kontakt eller via ting, bakterierne har været i kontakt med. Sygdommen er dog i langt de fleste tilfælde mild og behandles effektivt med antibiotika.'
                  : 'Impetigo is highly contagious and spreads from person to person through direct contact or via objects the bacteria have been on. In the great majority of cases the illness is mild and is treated effectively with antibiotics.'}
              </p>

              {/* Red flags */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvornår er impetigo en akut situation?' : 'When is impetigo an emergency?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo er næsten altid en lokal og ufarlig infektion. De toksiner, der giver bulløs impetigo, kan dog i sjældne tilfælde brede sig i kroppen og ramme huden overalt – især hos små børn og nyfødte.'
                  : 'Impetigo is almost always a local and harmless infection. The toxins that cause bullous impetigo can, however, rarely spread through the body and affect the skin all over — particularly in small children and newborns.'}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Kontakt en læge samme dag – eller lægevagten uden for åbningstid – hvis et barn med impetigo har udbredt rød, øm hud, der skaller af i flager, har feber, er slapt eller usædvanligt utilpas, eller hvis rødmen breder sig hurtigt og huden bliver hævet og varm. Hud, der skaller af sammen med feber, kan være stafylokok-skoldethudssyndrom (SSSS), en toksinudløst tilstand, der skal behandles på sygehus. Impetigo hos en nyfødt skal altid ses samme dag.'
                    : 'Contact a doctor the same day — or the out-of-hours service outside surgery hours — if a child with impetigo has widespread red, painful skin that peels away in sheets, has a fever, is floppy or unusually unwell, or if the redness is spreading quickly and the skin becomes swollen and hot. Skin peeling together with fever can be staphylococcal scalded skin syndrome (SSSS), a toxin-driven condition that needs hospital treatment. Impetigo in a newborn should always be seen the same day.'}
                </p>
              </div>
              <p>
                {isDa ? (
                  <>
                    Hurtigt tiltagende rødme, hævelse og varme omkring sårene kan også betyde, at infektionen har bredt sig til de dybere hudlag som{' '}
                    <Link href={`/${lang}/blog/cellulitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      cellulitis
                    </Link>
                    , som kræver behandling med antibiotika i tabletform eller i drop.
                  </>
                ) : (
                  <>
                    Rapidly increasing redness, swelling and warmth around the sores can also mean the infection has reached the deeper layers of the skin as{' '}
                    <Link href={`/${lang}/blog/cellulitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      cellulitis
                    </Link>
                    , which needs treatment with oral or intravenous antibiotics.
                  </>
                )}
              </p>

              {/* Types */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvilke typer af impetigo findes der?' : 'What are the two types of impetigo?'}
              </h2>
              <p>{isDa ? 'Der findes to hovedtyper af impetigo:' : 'There are two main types of impetigo:'}</p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Non-bulløs impetigo (den hyppigste)' : 'Non-bullous impetigo (the most common)'}
              </h3>
              <p>
                {isDa
                  ? 'Dette er den hyppigste form og udgør omkring 70% af alle tilfælde. Den starter typisk som små røde pletter omkring mund og næse, der hurtigt bliver til små blærer. Når blærerne brister, efterlader de de karakteristiske honningfarvede eller gule skorper, som kan ligne indtørret honning eller voks.'
                  : 'This is the most common form, accounting for about 70% of all cases. It typically starts as small red spots around the mouth and nose, which quickly turn into small blisters. When the blisters burst, they leave the characteristic honey-coloured or yellow crusts, which can look like dried honey or wax.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Bulløs impetigo' : 'Bullous impetigo'}
              </h3>
              <p>
                {isDa
                  ? 'Bulløs impetigo skyldes specifikt Staphylococcus aureus, der danner toksiner, som løsner det yderste hudlag og giver større, væskefyldte blærer – ofte på kroppen, armene og benene. Blærerne er større end ved non-bulløs impetigo og brister langsommere, hvilket efterlader tyndere, gule skorper. Det er de samme toksiner, der ved udbredt sygdom kan give stafylokok-skoldethudssyndrom.'
                  : 'Bullous impetigo is caused specifically by Staphylococcus aureus, which produces toxins that loosen the outermost layer of skin and create larger, fluid-filled blisters — often on the trunk, arms and legs. The blisters are larger than in non-bullous impetigo and burst more slowly, leaving thinner, yellow crusts. These are the same toxins that, in widespread disease, can cause staphylococcal scalded skin syndrome.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser impetigo ud?' : 'What does impetigo look like?'}
              </h2>
              <p>{isDa ? 'Almindelige tegn på impetigo er:' : 'Common signs of impetigo include:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Røde, irriterede pletter:' : 'Red, irritated patches:'}</strong>{' '}
                  {isDa
                    ? 'Særligt omkring munden, næsen og andre udsatte områder i ansigtet.'
                    : 'Especially around the mouth, nose and other exposed areas of the face.'}
                </li>
                <li>
                  <strong>{isDa ? 'Honningfarvede eller gule skorper:' : 'Honey-coloured or yellow crusts:'}</strong>{' '}
                  {isDa
                    ? 'Det mest genkendelige tegn. Skorperne dannes, når blærerne brister.'
                    : 'The most recognisable sign. The crusts form when the blisters burst.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kløe og ubehag:' : 'Itching and discomfort:'}</strong>{' '}
                  {isDa
                    ? 'Sårene klør ofte. Når barnet kradser i dem, spredes bakterierne til nye områder af huden og til andre børn – derfor betyder korte negle noget.'
                    : 'The sores often itch. When a child scratches them, the bacteria spread to new areas of skin and to other children — which is why short nails matter.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hævede lymfeknuder:' : 'Swollen lymph nodes:'}</strong>{' '}
                  {isDa
                    ? 'I nogle tilfælde bliver lymfeknuderne nær infektionen hævede og ømme.'
                    : 'In some cases the lymph nodes near the infection become swollen and tender.'}
                </li>
              </ul>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår impetigo?' : 'Why does impetigo happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo opstår, når bakterier trænger ind gennem en åbning i hudbarrieren. Selv meget små skader er nok:'
                  : 'Impetigo occurs when bacteria enter through a break in the skin barrier. Even very small injuries are enough:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvordan kommer bakterierne ind?' : 'How do the bacteria get in?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Snit, skrammer, insektbid og selv små revner i huden giver bakterierne adgang.{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      Eksem
                    </Link>{' '}
                    og andre kroniske hudlidelser svækker hudbarrieren og øger risikoen mærkbart. Hos børn udvikler impetigo sig særligt ofte efter kraftig kradsen i kløende hud.
                  </>
                ) : (
                  <>
                    Cuts, grazes, insect bites and even small cracks in the skin give bacteria a way in.{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      Eczema
                    </Link>{' '}
                    and other chronic skin conditions weaken the skin barrier and raise the risk noticeably. In children, impetigo particularly often develops after vigorous scratching of itchy skin.
                  </>
                )}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hvordan smitter impetigo?' : 'How does impetigo spread?'}
              </h3>
              <p>
                {isDa
                  ? 'Impetigo smitter ved direkte kontakt med en person, der har infektionen. Bakterierne kan også overføres via håndklæder, vaskeklude, sengetøj og legetøj. Det er særligt relevant i dagtilbud, skoler og under trange boligforhold.'
                  : 'Impetigo spreads through direct contact with someone who has the infection. The bacteria can also be transferred via towels, flannels, bedding and toys. This is particularly relevant in nurseries, schools and crowded living conditions.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får impetigo?' : 'Who gets impetigo?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo kan ramme alle, men visse grupper er særligt udsatte:'
                  : 'Impetigo can affect anyone, but certain groups are particularly vulnerable:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Børn mellem 2 og 6 år:' : 'Children between 2 and 6 years:'}</strong>{' '}
                  {isDa
                    ? 'Det er den gruppe, der hyppigst rammes, først og fremmest på grund af tæt fysisk kontakt i leg, små skader og hyppig kradsen.'
                    : 'This is the most commonly affected group, mainly because of close physical contact in play, minor injuries and frequent scratching.'}
                </li>
                <li>
                  <strong>{isDa ? 'Børn i dagtilbud og skole:' : 'Children in nursery and school:'}</strong>{' '}
                  {isDa
                    ? 'Institutioner er klassiske miljøer for impetigoudbrud på grund af den tætte kontakt mellem børnene.'
                    : 'These settings are classic environments for impetigo outbreaks because of the close contact between children.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med eksem eller dermatitis:' : 'People with eczema or dermatitis:'}</strong>{' '}
                  {isDa
                    ? 'Den beskadigede hudbarriere gør det lettere for bakterier at kolonisere og inficere huden.'
                    : 'The damaged skin barrier makes it easier for bacteria to colonise and infect the skin.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med svækket immunforsvar:' : 'People with weakened immune systems:'}</strong>{' '}
                  {isDa
                    ? 'Et nedsat immunforsvar gør det sværere for kroppen at bekæmpe bakterieinfektioner.'
                    : 'A weakened immune system makes it harder for the body to fight off bacterial infections.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan behandles impetigo?' : 'How is impetigo treated?'}
              </h2>
              <p>
                {isDa
                  ? 'Impetigo behandles med antibiotika. Valget afhænger af, hvor udbredt infektionen er, og hvor den sidder:'
                  : 'Impetigo is treated with antibiotics. The choice depends on how widespread the infection is and where it sits:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧼 Sårpleje ved få og små sår' : '🧼 Wound care for a few small sores'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Vask de berørte områder med sæbe og vand, og blød skorperne forsigtigt op. I Danmark findes der ikke et håndkøbsprodukt mod impetigo – hydrogenperoxid 1% creme, som bruges i nogle andre lande, sælges ikke her, og behandlingen er derfor receptpligtig. Er sårene ikke tydeligt i bedring inden for 48–72 timer, skal du kontakte lægen i stedet for at vente videre.'
                      : 'Wash the affected areas with soap and water and gently soften the crusts. In Denmark there is no over-the-counter product for impetigo — the hydrogen peroxide 1% cream used in some other countries is not sold here, so treatment is prescription-based. If the sores are not clearly improving within 48–72 hours, contact a doctor rather than waiting any longer.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Antibiotisk creme (receptpligtig)' : '💊 Topical antibiotics (prescription)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Fusidinsyre som creme er førstevalg i Danmark ved lokal impetigo, typisk i fem dage. Mupirocin holdes som regel i reserve for at begrænse resistensudvikling. Resistens over for fusidinsyre hos Staphylococcus aureus er et kendt problem i Danmark, og det er en af grundene til, at en behandling, der ikke virker, skal vurderes af lægen frem for at blive gentaget.'
                      : 'Fusidic acid cream is the first choice in Denmark for localised impetigo, usually for five days. Mupirocin is generally kept in reserve to limit the development of resistance. Fusidic acid resistance in Staphylococcus aureus is a recognised problem in Denmark, which is one reason a treatment that is not working should be reviewed by a doctor rather than simply repeated.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Antibiotika i tabletform' : '🩺 Oral antibiotics'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved udbredt eller bulløs impetigo, eller hvis barnet er påvirket, gives antibiotika gennem munden. Dicloxacillin er sædvanligvis førstevalg i Danmark; ved penicillinallergi bruges clarithromycin eller erythromycin.'
                      : 'For widespread or bullous impetigo, or when the child is unwell, antibiotics are given by mouth. Dicloxacillin is usually the first choice in Denmark; clarithromycin or erythromycin is used if there is a penicillin allergy.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧴 Hygiejne og hjemme fra institution' : '🧴 Hygiene and staying home'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Hold sårene rene og dækkede. Del ikke håndklæder, vaskeklude og sengetøj, og vask hænder ofte. Sundhedsstyrelsens anbefaling er, at barnet kan komme tilbage i dagtilbud eller skole 48 timer efter, at antibiotisk behandling er startet – eller, hvis der ikke behandles, når alle sår er tørret ind og har dannet skorpe.'
                      : 'Keep the sores clean and covered. Do not share towels, flannels or bedding, and wash hands often. Danish guidance from Sundhedsstyrelsen is that a child can return to nursery or school 48 hours after starting antibiotic treatment — or, if no antibiotic is given, once all the sores have dried and crusted over.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Impetigo er klassificeret som 1B72 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en bakteriel hudinfektion, der viser sig med honningfarvede skorper.'
                    : "Impetigo is classified as 1B72 in the WHO's International Classification of Diseases (ICD-11). It is a bacterial skin infection presenting with honey-coloured crusts."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-lg text-[#1a237e] mb-2">{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-4">
                  {isDa
                    ? 'Har dit barn feber, er slapt eller virker sygt, skaller huden af i flager, eller breder rødmen sig hurtigt, skal du kontakte lægen eller lægevagten samme dag i stedet for at vente på en vurdering i appen.'
                    : 'If your child has a fever, is floppy or seems unwell, if the skin is peeling in sheets, or if the redness is spreading quickly, contact a doctor or the out-of-hours service the same day rather than waiting for an app assessment.'}
                </p>
                <p className="mb-6">
                  {isDa
                    ? 'Ved almindelige sår i bedring, eller hvis du blot er i tvivl om, hvad udslættet er, kan du uploade billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge.'
                    : 'For ordinary sores that are settling, or if you are simply unsure what the rash is, you can upload photos via the SKIND app and get an assessment from a certified dermatologist.'}
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
