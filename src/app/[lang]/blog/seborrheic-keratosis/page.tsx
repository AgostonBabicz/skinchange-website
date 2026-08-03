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
        title: 'Seboroisk Keratose: Symptomer og Behandling | SKIND',
        description:
          'Seboroisk keratose (senilvorter): hvordan de ser ud, hvorfor de opstår, hvornår de skal tjekkes af en hudlæge, og hvordan de fjernes sikkert.',
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
        title: 'Seborrhoeic Keratosis: Symptoms and Treatment | SKIND',
        description:
          'Seborrhoeic keratosis (age warts): what these growths look like, why they appear, when a dermatologist should check them, and how they are removed.',
        keywords:
          'what is seborrhoeic keratosis, age warts, senile warts, seborrhoeic keratosis treatment, dermatologist, SKIND',
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

export default function SeborrhoeicKeratosisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Seboroisk Keratose? Årsager, Symptomer og Behandling'
      : 'What is Seborrhoeic Keratosis? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til seboroisk keratose: hvad det er, årsager, om det er farligt og behandlingsmuligheder.'
      : 'Complete guide to seborrhoeic keratosis: what it is, causes, whether it is dangerous and treatment options.',
    image: '/blog-seborrheic-keratosis.jpg',
    datePublished: '2026-06-26',
    dateModified: '2026-06-26',
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
            name: 'Kan seboroisk keratose forsvinde af sig selv?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sjældent. Seboroiske keratoser forsvinder normalt ikke uden behandling, men de er stabile og udgør ingen sundhedsrisiko i sig selv. Mange vælger at leve med dem.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan jeg forveksle seboroisk keratose med hudkræft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Seboroisk keratose er en af de hyppigste efterligninger af modermærkekræft (melanom), og både pigmenteret basalcellekarcinom og pladecellekarcinom kan ligne den. Er du i tvivl, er det altid bedre at få en professionel vurdering end at vente.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis en vækst ændrer sig hurtigt, bløder, er asymmetrisk, har uregelmæssige kanter eller flere farver — eller hvis du pludselig får mange nye vækster. Disse kan være tegn på noget andet end seboroisk keratose.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Can seborrhoeic keratosis go away on its own?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rarely. Seborrhoeic keratoses do not usually disappear without treatment, but they are stable and pose no health risk in themselves. Many people choose to live with them.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I confuse seborrhoeic keratosis with skin cancer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Seborrhoeic keratosis is one of the most common mimics of melanoma, and both pigmented basal cell carcinoma and squamous cell carcinoma can look like it. If you are in doubt, it is always better to get a professional assessment than to wait.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if a growth changes rapidly, bleeds, is asymmetric, has irregular borders or more than one colour — or if you suddenly develop many new growths. These may be signs of something other than seborrhoeic keratosis.',
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
                {isDa ? 'Hvad er Seboroisk Keratose?' : 'What is Seborrhoeic Keratosis?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Godartede Hudvækster' : 'Benign Skin Growths'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '26. juni 2026' : 'June 26, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Seboroisk Keratose? Årsager, Symptomer og Behandling'
                : 'What is Seborrhoeic Keratosis? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-seborrheic-keratosis.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en brun, ru hudvækst med skarp afgrænsning, som ser ud til at være klistret på huden'
                    : 'Close-up of a brown, rough skin growth with a sharp border that looks stuck onto the skin'
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
                    <strong>Seboroisk keratose er en af de mest almindelige hudvækster hos voksne over 50</strong> — og en af de mest misforståede. Seboroisk keratose er i sig selv godartet og udvikler sig ikke til kræft. Den kan dog ligne modermærkekræft og anden hudkræft til forveksling, så enhver pigmenteret hudforandring, du er i tvivl om, bør vurderes af en hudlæge.
                  </>
                ) : (
                  <>
                    <strong>Seborrhoeic keratosis is one of the most common skin growths in adults over 50</strong> — and one of the most misunderstood. Seborrhoeic keratosis itself is benign and does not turn into cancer. However, it can look very similar to melanoma and other skin cancers, so any pigmented growth you are unsure about should be assessed by a dermatologist.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad seboroisk keratose er, hvad der forårsager det, hvordan du skelner det fra noget alvorligere, og hvad du kan gøre ved det.'
                  : 'In this article, we explain exactly what seborrhoeic keratosis is, what causes it, how to tell it apart from something more serious, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">

              {/* What is it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er seboroisk keratose?' : 'What is seborrhoeic keratosis?'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk keratose — også kaldet senilvorter eller gammelmandsvorter — er en godartet hudvækst, der opstår i overhuden (epidermis). De er ikke smitsomme, og selve væksten udvikler sig ikke til kræft. Udseendet varierer, men de er typisk lette at genkende: runde eller ovale, med en tydelig afgrænsning fra den omgivende hud, som om de er "klistret på".'
                  : 'Seborrhoeic keratosis — also called senile warts or age warts — is a benign skin growth that develops in the epidermis (outer layer of skin). These growths are not contagious, and the growth itself does not turn into cancer. Their appearance varies, but they are typically easy to recognise: round or oval, with a clear border from the surrounding skin, as if they have been "stuck on".'}
              </p>
              <p>
                {isDa
                  ? 'De kan optræde alene eller i klynger og vokser langsomt over tid. De fleste mennesker vil udvikle mindst én i løbet af deres liv.'
                  : 'They can appear alone or in clusters and grow slowly over time. Most people will develop at least one during their lifetime.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser seboroisk keratose ud?' : 'What does seborrhoeic keratosis look like?'}
              </h2>
              <p>
                {isDa ? 'Seboroisk keratose kan variere meget i udseende:' : 'Seborrhoeic keratosis can vary considerably in appearance:'}
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
                {isDa ? (
                  <>
                    Den &quot;klistret på&quot;-fornemmelse er karakteristisk og adskiller seboroisk keratose fra fx{' '}
                    <Link href={`/${lang}/blog/regular-mole`} className="text-primary underline hover:text-primary-900">
                      almindelige modermærker
                    </Link>
                    , der sidder dybere i huden. Karakteristikken er dog ikke sikker nok til at stille diagnosen alene.
                  </>
                ) : (
                  <>
                    The &quot;stuck on&quot; appearance is characteristic and distinguishes seborrhoeic keratosis from, for example,{' '}
                    <Link href={`/${lang}/blog/regular-mole`} className="text-primary underline hover:text-primary-900">
                      ordinary moles
                    </Link>
                    , which sit deeper in the skin. That feature alone is not reliable enough to make the diagnosis.
                  </>
                )}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad forårsager seboroisk keratose?' : 'What causes seborrhoeic keratosis?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag er stadig ukendt. Det er ikke smitsomt og skyldes ikke dårlig hygiejne eller kost. Forskere peger på flere bidragende faktorer:'
                  : 'The exact cause is still unknown. It is not contagious and is not caused by poor hygiene or diet. Researchers point to several contributing factors:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvilken rolle spiller alderen?' : 'What role does age play?'}
              </h3>
              <p>
                {isDa
                  ? 'Seboroisk keratose er først og fremmest en tilstand i den anden halvdel af livet: de første vækster kommer ofte fra 30-årsalderen og bliver gradvist mere almindelige efter 50. En variant, dermatosis papulosa nigra, viser sig som små, mørke papler i ansigtet og på halsen og er almindelig fra teenageårene hos personer med mørk hud.'
                  : 'Seborrhoeic keratosis is mainly a condition of the second half of life: the first growths often appear from the 30s onwards and become steadily more common after 50. One variant, dermatosis papulosa nigra, appears as small, dark papules on the face and neck and is common from adolescence in people with darker skin.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Er seboroisk keratose arveligt?' : 'Is seborrhoeic keratosis hereditary?'}
              </h3>
              <p>
                {isDa
                  ? 'Der er en tydelig arvelig tendens. Hvis dine forældre havde mange seboroiske keratoser, er sandsynligheden for, at du selv udvikler dem, markant højere.'
                  : 'There is a clear hereditary tendency. If your parents had many seborrhoeic keratoses, the likelihood of you developing them yourself is significantly higher.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Har sollys nogen betydning?' : 'Does sun exposure matter?'}
              </h3>
              <p>
                {isDa
                  ? 'Selvom sollys ikke er den direkte årsag, ses seboroisk keratose hyppigere på soleksponerede hudområder. UV-stråling kan bidrage til at udløse eller forværre væksten hos disponerede personer.'
                  : 'Although sun exposure is not the direct cause, seborrhoeic keratosis is seen more frequently on sun-exposed areas of skin. UV radiation may contribute to triggering or worsening growth in predisposed individuals.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får seboroisk keratose?' : 'Who gets seborrhoeic keratosis?'}
              </h2>
              <p>
                {isDa
                  ? 'Næsten alle vil udvikle seboroisk keratose på et tidspunkt i livet:'
                  : 'Almost everyone will develop seborrhoeic keratosis at some point in their lives:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  {isDa
                    ? 'Over 90% af voksne over 60 år har mindst én seboroisk keratose.'
                    : 'Over 90% of adults over 60 have at least one seborrhoeic keratosis.'}
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
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Er seboroisk keratose farligt?' : 'Is seborrhoeic keratosis dangerous?'}
              </h2>
              <p>
                {isDa ? (
                  <>
                    Seboroisk keratose er i sig selv godartet og udvikler sig ikke til kræft. Problemet er ikke væksten, men forvekslingen: seboroisk keratose er en af de hyppigste efterligninger af{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-primary underline hover:text-primary-900">
                      modermærkekræft (melanom)
                    </Link>
                    , og pigmenteret{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-primary underline hover:text-primary-900">
                      basalcellekarcinom
                    </Link>
                    , pladecellekarcinom og{' '}
                    <Link href={`/${lang}/blog/actinic-keratosis`} className="text-primary underline hover:text-primary-900">
                      aktinisk keratose
                    </Link>{' '}
                    kan alle ligne den. Opsøg en hudlæge, hvis:
                  </>
                ) : (
                  <>
                    Seborrhoeic keratosis itself is benign and does not turn into cancer. The problem is not the growth but the resemblance: seborrhoeic keratosis is one of the most common mimics of{' '}
                    <Link href={`/${lang}/blog/melanoma`} className="text-primary underline hover:text-primary-900">
                      melanoma
                    </Link>
                    , and pigmented{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-primary underline hover:text-primary-900">
                      basal cell carcinoma
                    </Link>
                    , squamous cell carcinoma and{' '}
                    <Link href={`/${lang}/blog/actinic-keratosis`} className="text-primary underline hover:text-primary-900">
                      actinic keratosis
                    </Link>{' '}
                    can all look similar. See a dermatologist if:
                  </>
                )}
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
                    ? 'Du er usikker på, om det er seboroisk keratose eller noget andet.'
                    : 'You are unsure whether it is seborrhoeic keratosis or something else.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Brug ABCDE-reglen ved enhver pigmenteret plet: Asymmetri, uregelmæssige Bræmmer, mere end én Farve, Diameter over 6 mm, og Udvikling over uger eller måneder. En plet med disse træk bør undersøges af en læge hurtigt — gå ikke ud fra, at det er en seboroisk keratose.'
                  : 'Use the ABCDE rule for any pigmented spot: Asymmetry, irregular Borders, more than one Colour, Diameter over 6 mm, and Evolution (change over weeks or months). A spot with these features should be examined by a doctor promptly — do not assume it is a seborrhoeic keratosis.'}
              </p>
              <p>
                {isDa
                  ? 'Et pludseligt udbrud af mange seboroiske keratoser over uger til måneder kaldes Leser-Trélats tegn og er en anerkendt markør for indre kræftsygdom. Det er sjældent, men får du hurtigt mange nye vækster, skal du altid have det undersøgt.'
                  : 'A sudden eruption of many seborrhoeic keratoses over weeks to months is known as the sign of Leser-Trélat and is a recognised marker of internal malignancy. It is rare, but a rapid crop of new growths should always be examined.'}
              </p>
              <p>
                {isDa
                  ? 'En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke hudkræft. En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
                  : 'A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It cannot rule out skin cancer. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for laboratory analysis.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan fjernes seboroisk keratose?' : 'How is seborrhoeic keratosis removed?'}
              </h2>
              <p>
                {isDa
                  ? 'Seboroisk keratose kræver normalt ikke behandling. Hvis en vækst dog er til gene — klør, irriterer mod tøj, eller generer kosmetisk — kan den fjernes effektivt:'
                  : 'Seborrhoeic keratosis does not typically require treatment. However, if a growth is bothersome — itches, rubs against clothing, or is cosmetically concerning — it can be effectively removed:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '❄️ Kryoterapi (frysning)' : '❄️ Cryotherapy (freezing)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Flydende nitrogen bruges til at fryse væksten væk. Hurtigt og effektivt — udføres på klinikken. Metoden ødelægger vævet, så den må ikke bruges, hvis diagnosen er usikker.'
                      : 'Liquid nitrogen is used to freeze the growth away. Quick and effective — performed in the clinic. The method destroys the tissue, so it must not be used when the diagnosis is uncertain.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🔪 Curettage (afskrabning)' : '🔪 Curettage (scraping)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Væksten skrabes af med et kirurgisk instrument under lokalbedøvelse.'
                      : 'The growth is scraped off with a surgical instrument under local anaesthesia.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💡 Laserterapi' : '💡 Laser therapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Laser kan anvendes til at fjerne vækster, særligt på kosmetisk følsomme områder som ansigtet.'
                      : 'Laser can be used to remove growths, particularly on cosmetically sensitive areas such as the face.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🔬 Mikroskopi ved tvivl' : '🔬 Microscopy when in doubt'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Er der den mindste tvivl om diagnosen, skal forandringen fjernes hel og sendes til mikroskopisk undersøgelse. Derfor vælges afskrabning eller udskæring frem for frysning, når der skal foreligge en vævsprøve.'
                      : 'If there is any doubt about the diagnosis, the lesion must be removed whole and sent for histopathology. That is why scraping or excision is chosen over freezing whenever a tissue sample is needed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🚫 Undgå selv at fjerne dem' : '🚫 Do not remove them yourself'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Pil eller krads ikke i væksterne — det kan forårsage blødning, infektion og ardannelse.'
                      : 'Do not pick or scratch at the growths — this can cause bleeding, infection and scarring.'}
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="font-semibold text-primary-900 mb-2">
                  {isDa ? 'Gode råd til daglig hudpleje' : 'Daily skincare tips'}
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                  <li>
                    {isDa
                      ? 'Brug solbeskyttelse dagligt — selvom sollys ikke direkte forårsager seboroisk keratose, beskytter det mod andre solrelaterede hudproblemer.'
                      : 'Use sun protection daily — even though sun exposure does not directly cause seborrhoeic keratosis, it protects against other sun-related skin problems.'}
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
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Seboroisk keratose er klassificeret som 2F21 (godartede hudtumorer) i WHO\'s internationale sygdomsklassifikation ICD-11 og som L82 i den ældre ICD-10. Den er karakteriseret ved godartede, epidermale tumorer, typisk pigmenterede, med en vortelignende overflade.'
                    : "Seborrhoeic keratosis is classified as 2F21 (benign cutaneous neoplasms) in the WHO's International Classification of Diseases ICD-11, and as L82 in the older ICD-10. It is characterised by benign, epidermal tumours, typically pigmented, with a wart-like surface."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Kan seboroisk keratose forsvinde af sig selv?' : 'Can seborrhoeic keratosis go away on its own?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Sjældent. Seboroiske keratoser forsvinder normalt ikke uden behandling, men de er stabile og udgør ingen sundhedsrisiko i sig selv. Mange vælger at leve med dem.'
                      : 'Rarely. Seborrhoeic keratoses do not usually disappear without treatment, but they are stable and pose no health risk in themselves. Many people choose to live with them.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Kan jeg forveksle seboroisk keratose med hudkræft?' : 'Can I confuse seborrhoeic keratosis with skin cancer?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja. Seboroisk keratose er en af de hyppigste efterligninger af modermærkekræft (melanom), og både pigmenteret basalcellekarcinom og pladecellekarcinom kan ligne den. Er du i tvivl, er det altid bedre at få en professionel vurdering end at vente.'
                      : 'Yes. Seborrhoeic keratosis is one of the most common mimics of melanoma, and both pigmented basal cell carcinoma and squamous cell carcinoma can look like it. If you are in doubt, it is always better to get a professional assessment than to wait.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis en vækst ændrer sig hurtigt, bløder, er asymmetrisk, har uregelmæssige kanter eller flere farver — eller hvis du pludselig får mange nye vækster. Disse kan være tegn på noget andet end seboroisk keratose.'
                      : 'Contact a dermatologist if a growth changes rapidly, bleeds, is asymmetric, has irregular borders or more than one colour — or if you suddenly develop many new growths. These may be signs of something other than seborrhoeic keratosis.'}
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
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering fra en certificeret hudlæge inden for 48 timer — uden venteliste.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal assessment from a certified dermatologist within 48 hours — no waiting list.'}
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
