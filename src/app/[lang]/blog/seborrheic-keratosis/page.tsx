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
        title: 'Hvad er Seboroisk Keratose? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om seboroisk keratose (senilvorter): hvad det er, hvorfor det opstår, om det er farligt, og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'hvad er seboroisk keratose, senilvorter, gammelmandsvorter, seboroisk keratose behandling, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/seborrheic-keratosis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/seborrheic-keratosis',
            da: 'https://www.skinchange.dk/da/blog/seborrheic-keratosis',
            en: 'https://www.skinchange.dk/en/blog/seborrheic-keratosis',
          },
        },
      }
    : {
        title: 'What is Seborrheic Keratosis? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about seborrheic keratosis (age warts): what it is, why it appears, whether it is dangerous, and what treatment options exist. Get help from a dermatologist via SKIND.',
        keywords:
          'what is seborrheic keratosis, age warts, senile warts, seborrheic keratosis treatment, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/seborrheic-keratosis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/seborrheic-keratosis',
            da: 'https://www.skinchange.dk/da/blog/seborrheic-keratosis',
            en: 'https://www.skinchange.dk/en/blog/seborrheic-keratosis',
          },
        },
      };
}

export async function generateStaticParams() {
  return [{ lang: 'da' }, { lang: 'en' }];
}

export default function SeborrheicKeratosisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Seboroisk Keratose? Årsager, Symptomer og Behandling'
      : 'What is Seborrheic Keratosis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til seboroisk keratose: hvad det er, årsager, om det er farligt og behandlingsmuligheder.'
      : 'Complete guide to seborrheic keratosis: what it is, causes, whether it is dangerous and treatment options.',
    image: '/blog-seborrheic-keratosis.jpg',
    datePublished: '2026-06-26',
    dateModified: '2026-06-26',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      jobTitle: isDa ? 'Medicinsk redaktion' : 'Medical editorial team',
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
            name: 'Hvad er seboroisk keratose?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seboroisk keratose er en almindelig, ikke-kræftfremkaldende hudvækst, der opstår med alderen. De optræder som brune, sorte eller lysebrune pletter med en ru eller voksagtig tekstur og er fuldstændig harmløse.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er seboroisk keratose farligt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, seboroisk keratose er godartet og er ikke forbundet med hudkræft. Hvis du er i tvivl om en hudforandring, bør du altid få den vurderet af en hudlæge.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge hjælp for seboroisk keratose?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg hjælp hvis en vækst pludselig ændrer sig i størrelse, form eller farve, begynder at bløde, eller hvis du er usikker på om det er seboroisk keratose. SKIND giver dig adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is seborrheic keratosis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seborrheic keratosis is a common, non-cancerous skin growth that appears with age. They appear as brown, black or light tan patches with a rough or waxy texture and are completely harmless.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is seborrheic keratosis dangerous?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, seborrheic keratosis is benign and is not linked to skin cancer. If you are uncertain about a skin change, you should always have it assessed by a dermatologist.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek help for seborrheic keratosis?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek help if a growth suddenly changes in size, shape or colour, starts to bleed, or if you are unsure whether it is seborrheic keratosis. SKIND gives you access to a dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Seboroisk Keratose?' : 'What is Seborrheic Keratosis?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">26. {isDa ? 'juni' : 'June'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '5 min læsetid' : '5 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Seboroisk Keratose? Årsager, Symptomer og Behandling'
                : 'What is Seborrheic Keratosis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#5d4037] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-seborrheic-keratosis.jpg"
                alt={
                  isDa
                    ? 'Seboroisk keratose senilvorter hudvækst'
                    : 'Seborrheic keratosis age warts skin growth'
                }
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
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
                    <strong>Seboroisk keratose er en af de mest almindelige hudvækster hos voksne over 50</strong> — og en af de mest misforståede. Mange bliver bekymrede, når de opdager de brune, ru pletter på huden, men de er fuldstændig harmløse.
                  </>
                ) : (
                  <>
                    <strong>Seborrheic keratosis is one of the most common skin growths in adults over 50</strong> — and one of the most misunderstood. Many people worry when they discover the brown, rough patches on their skin, but they are completely harmless.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad seboroisk keratose er, hvad der forårsager det, om det er farligt, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what seborrheic keratosis is, what causes it, whether it is dangerous, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">

              {/* What is it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er seboroisk keratose?' : 'What is seborrheic keratosis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk keratose — også kaldet senilvorter eller gammelmandsvorter — er en godartet hudvækst, der opstår i overhuden (epidermis). De er ikke smitsomme og har ingen forbindelse til kræft. Væksternes udseende varierer, men de er typisk lette at genkende: runde eller ovale, med en tydelig afgrænsning fra den omgivende hud, som om de er "klistret på".'
                  : 'Seborrheic keratosis — also called senile warts or age warts — is a benign skin growth that develops in the epidermis (outer layer of skin). They are not contagious and have no connection to cancer. Their appearance varies, but they are typically easy to recognise: round or oval, with a clear border from the surrounding skin, as if they have been "stuck on".'}
              </p>
              <p>
                {isDa
                  ? 'De kan optræde alene eller i klynger og vokser langsomt over tid. De fleste mennesker vil udvikle mindst én i løbet af deres liv.'
                  : 'They can appear alone or in clusters and grow slowly over time. Most people will develop at least one during their lifetime.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser seboroisk keratose ud?' : 'What does seborrheic keratosis look like?'}
              </h2>
              <p>
                {isDa ? 'Seboroisk keratose kan variere meget i udseende:' : 'Seborrheic keratosis can vary considerably in appearance:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Farve:' : 'Colour:'}</strong>{' '}
                  {isDa
                    ? 'Brun, sort eller lysebrun — farven kan variere inden for samme vækst.'
                    : 'Brown, black or light tan — the colour can vary within the same growth.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tekstur:' : 'Texture:'}</strong>{' '}
                  {isDa
                    ? 'Ru, vortelignende eller voksagtig overflade. De føles ofte lidt hævede.'
                    : 'Rough, wart-like or waxy surface. They often feel slightly raised.'}
                </li>
                <li>
                  <strong>{isDa ? 'Størrelse:' : 'Size:'}</strong>{' '}
                  {isDa
                    ? 'Fra få millimeter til flere centimeter i diameter.'
                    : 'From a few millimetres to several centimetres in diameter.'}
                </li>
                <li>
                  <strong>{isDa ? 'Placering:' : 'Location:'}</strong>{' '}
                  {isDa
                    ? 'Oftest på ansigt, hals, bryst, ryg og skuldre — men kan opstå overalt på kroppen undtagen håndflader og fodsåler.'
                    : 'Most often on the face, neck, chest, back and shoulders — but can appear anywhere on the body except the palms and soles.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Den "klistret på"-fornemmelse er karakteristisk og adskiller seboroisk keratose fra fx modermærker, der sidder dybere i huden.'
                  : 'The "stuck on" appearance is characteristic and distinguishes seborrheic keratosis from, for example, moles, which sit deeper in the skin.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad forårsager seboroisk keratose?' : 'What causes seborrheic keratosis?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag er stadig ukendt. Det er ikke smitsomt og skyldes ikke dårlig hygiejne eller kost. Forskere peger på flere bidragende faktorer:'
                  : 'The exact cause is still unknown. It is not contagious and is not caused by poor hygiene or diet. Researchers point to several contributing factors:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Alder' : 'Age'}
              </h3>
              <p>
                {isDa
                  ? 'Seboroisk keratose er næsten udelukkende et fænomen hos voksne over 40–50 år. Jo ældre man bliver, desto flere vækster kan man udvikle. Det er ekstremt sjældent hos unge.'
                  : 'Seborrheic keratosis is almost exclusively a phenomenon in adults over 40–50 years of age. The older one gets, the more growths one may develop. It is extremely rare in young people.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik' : 'Genetics'}
              </h3>
              <p>
                {isDa
                  ? 'Der er en tydelig arvelig tendens. Hvis dine forældre havde mange seboroiske keratoser, er sandsynligheden for at du selv udvikler dem markant højere.'
                  : 'There is a clear hereditary tendency. If your parents had many seborrheic keratoses, the likelihood of you developing them yourself is significantly higher.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Sollys' : 'Sun exposure'}
              </h3>
              <p>
                {isDa
                  ? 'Selvom sollys ikke er den direkte årsag, ses seboroisk keratose hyppigere på soleksponerede hudområder. UV-stråling kan bidrage til at udløse eller forværre væksten hos disponerede personer.'
                  : 'Although sun exposure is not the direct cause, seborrheic keratosis is seen more frequently on sun-exposed areas of skin. UV radiation may contribute to triggering or worsening growth in predisposed individuals.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får seboroisk keratose?' : 'Who gets seborrheic keratosis?'}
              </h2>
              <p>
                {isDa
                  ? 'Næsten alle vil udvikle seboroisk keratose på et tidspunkt i livet:'
                  : 'Almost everyone will develop seborrheic keratosis at some point in their lives:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  {isDa
                    ? 'Over 80% af voksne over 60 år har mindst én seboroisk keratose.'
                    : 'Over 80% of adults over 60 have at least one seborrheic keratosis.'}
                </li>
                <li>
                  {isDa
                    ? 'Tilstanden rammer mænd og kvinder ligeligt.'
                    : 'The condition affects men and women equally.'}
                </li>
                <li>
                  {isDa
                    ? 'Familiær disposition øger risikoen betydeligt.'
                    : 'A family history significantly increases the risk.'}
                </li>
              </ul>

              {/* Is it dangerous */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Er seboroisk keratose farligt?' : 'Is seborrheic keratosis dangerous?'}
              </h2>
              <p>
                {isDa
                  ? 'Nej. Seboroisk keratose er godartet og er hverken forbundet med hudkræft eller andre alvorlige sygdomme. Dog er det vigtigt at skelne seboroisk keratose fra andre hudforandringer, der kan kræve behandling. Opsøg en hudlæge hvis:'
                  : 'No. Seborrheic keratosis is benign and is not associated with skin cancer or other serious diseases. However, it is important to distinguish seborrheic keratosis from other skin changes that may require treatment. See a dermatologist if:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  {isDa
                    ? 'En vækst pludselig ændrer sig i størrelse, form eller farve.'
                    : 'A growth suddenly changes in size, shape or colour.'}
                </li>
                <li>
                  {isDa
                    ? 'Væksten bløder uden grund.'
                    : 'The growth bleeds without cause.'}
                </li>
                <li>
                  {isDa
                    ? 'Du er usikker på om det er seboroisk keratose eller noget andet.'
                    : 'You are unsure whether it is seborrheic keratosis or something else.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Behandlingsmuligheder' : 'Treatment options'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk keratose kræver normalt ikke behandling. Hvis en vækst dog er til gene — klør, irriterer mod tøj, eller generer kosmetisk — kan den fjernes effektivt:'
                  : 'Seborrheic keratosis does not typically require treatment. However, if a growth is bothersome — itches, rubs against clothing, or is cosmetically concerning — it can be effectively removed:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '❄️ Kryoterapi (frysning)' : '❄️ Cryotherapy (freezing)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Flydende nitrogen bruges til at fryse væksten væk. Hurtigt og effektivt — udføres på klinikken.'
                      : 'Liquid nitrogen is used to freeze the growth away. Quick and effective — performed in the clinic.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🔪 Curettage (afskrabning)' : '🔪 Curettage (scraping)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Væksten skrabes af med et kirurgisk instrument under lokalbedøvelse.'
                      : 'The growth is scraped off with a surgical instrument under local anaesthesia.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💡 Laserterapi' : '💡 Laser therapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Laser kan anvendes til at fjerne vækster, særligt på kosmetisk følsomme områder som ansigtet.'
                      : 'Laser can be used to remove growths, particularly on cosmetically sensitive areas such as the face.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚫 Undgå selv at fjerne dem' : '🚫 Do not remove them yourself'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Pil eller krats ikke i væksternes — det kan forårsage blødning, infektion og ardannelse.'
                      : 'Do not pick or scratch at the growths — this can cause bleeding, infection and scarring.'}
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="font-semibold text-[#1a237e] mb-2">
                  {isDa ? 'Gode råd til daglig hudpleje' : 'Daily skincare tips'}
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                  <li>
                    {isDa
                      ? 'Brug solbeskyttelse dagligt — selvom sollys ikke direkte forårsager seboroisk keratose, beskytter det mod andre solrelaterede hudproblemer.'
                      : 'Use sun protection daily — even though sun exposure does not directly cause seborrheic keratosis, it protects against other sun-related skin problems.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Fugt huden regelmæssigt for at reducere tørhed og mild irritation.'
                      : 'Moisturise regularly to reduce dryness and mild irritation.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Hold øje med ændringer i eksisterende vækster og nye hudforandringer.'
                      : 'Monitor existing growths for changes and watch for new skin changes.'}
                  </li>
                </ul>
              </div>

              {/* ICD note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? "Seboroisk keratose er klassificeret som L82 i WHO's internationale sygdomsklassifikation (ICD-10/ICD-11). Det er karakteriseret ved godartede, epidermale tumorer, typisk pigmenterede, med en vortelignende overflade."
                    : "Seborrheic keratosis is classified as L82 in the WHO's International Classification of Diseases (ICD-10/ICD-11). It is characterised by benign, epidermal tumours, typically pigmented, with a wart-like surface."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan seboroisk keratose forsvinde af sig selv?' : 'Can seborrheic keratosis go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Sjældent. Seboroisk keratose forsvinder normalt ikke uden behandling, men de er stabile og udgør ingen sundhedsrisiko. Mange vælger at leve med dem.'
                      : 'Rarely. Seborrheic keratosis does not usually disappear without treatment, but they are stable and pose no health risk. Many people choose to live with them.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan jeg forveksle seboroisk keratose med hudkræft?' : 'Can I confuse seborrheic keratosis with skin cancer?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, det kan være svært at skelne visuelt — særligt fra modermærkekræft (melanom). Hvis du er i tvivl, er det altid bedre at få en professionel vurdering end at vente.'
                      : 'Yes, it can be difficult to distinguish visually — especially from melanoma. If you are in doubt, it is always better to get a professional assessment than to wait.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge hvis en vækst ændrer sig hurtigt, bløder, er asymmetrisk, har uregelmæssige kanter eller farveforskelle — disse kan være tegn på noget andet end seboroisk keratose.'
                      : 'Contact a dermatologist if a growth changes rapidly, bleeds, is asymmetric, has irregular borders or colour variation — these may be signs of something other than seborrheic keratosis.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Usikker på en hudforandring?' : 'Unsure about a skin change?'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge inden for 48 timer — uden venteliste.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal assessment from a certified dermatologist within 48 hours — no waiting list.'}
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
