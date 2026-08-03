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
        title: 'Hvad er et hæmangiom? Symptomer og behandling | SKIND',
        description:
          'Hæmangiomer er godartede karvækster. Læs om infantile hæmangiomer hos spædbørn, kirsebærangiomer hos voksne, og hvornår et hæmangiom skal ses af en læge.',
        keywords:
          'hæmangiom, infantilt hæmangiom, jordbærmærke, kirsebærangiom, propranolol, venøs malformation, godartet hudvækst, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/hemangioma',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/hemangioma', da: 'https://www.skinchange.dk/da/blog/hemangioma', en: 'https://www.skinchange.dk/en/blog/hemangioma' },
        },
      }
    : {
        title: 'What is a Haemangioma? Symptoms and Treatment | SKIND',
        description:
          'Haemangiomas are benign vascular growths. Learn about infantile haemangiomas in babies, cherry angiomas in adults, and when one needs to be seen by a doctor.',
        keywords:
          'haemangioma, hemangioma, infantile haemangioma, strawberry mark, cherry angioma, propranolol, venous malformation, benign skin growth, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/hemangioma',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/hemangioma', da: 'https://www.skinchange.dk/da/blog/hemangioma', en: 'https://www.skinchange.dk/en/blog/hemangioma' },
        },
      };
}

export default function HemangiomaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er et hæmangiom? Årsager, symptomer og behandling'
    : 'What is a haemangioma? Causes, symptoms and treatment';

  const faqs = isDa
    ? [
        {
          question: 'Hvad er et hæmangiom?',
          answer:
            'Et hæmangiom er en godartet karsvulst, der består af en unormal ophobning af blodkar. Ordet dækker to helt forskellige tilstande: infantile hæmangiomer, som vokser frem hos spædbørn og senere svinder af sig selv, og kirsebærangiomer, som opstår hos voksne og bliver siddende resten af livet.',
        },
        {
          question: 'Hvordan ser et hæmangiom ud?',
          answer:
            'Overfladiske infantile hæmangiomer er klart røde og let hævede, mens dybere hæmangiomer ligger som en blålig, blød hævelse under hud, der ellers ser normal ud. Kirsebærangiomer er små, skarpt afgrænsede røde eller lilla prikker på krop og arme. På mørkere hud kan farven fremstå mere brunlig eller mørkerød.',
        },
        {
          question: 'Hvem får hæmangiomer?',
          answer:
            'Infantile hæmangiomer ses hos ca. 4–5% af spædbørn og hos op til 10% af for tidligt fødte eller børn med lav fødselsvægt. Kun omkring en tredjedel er synlige ved fødslen — resten viser sig i løbet af de første leveuger. De er hyppigere hos piger. Kirsebærangiomer begynder at dukke op fra 30-årsalderen og findes hos de fleste over 75 år.',
        },
        {
          question: 'Hvad skal jeg huske om hæmangiomer?',
          answer:
            'De fleste infantile hæmangiomer er harmløse og svinder af sig selv, men nogle skal vurderes hurtigt: et hæmangiom nær øjet, næsen, munden eller luftvejene, et hæmangiom med sår, fem eller flere hæmangiomer på huden, eller et stort hæmangiom i ansigtet. Vurderingen bør ske inden for de første leveuger, helst før en måneds alderen, fordi propranolol virker bedst i vækstfasen. Kirsebærangiomer hos voksne forsvinder ikke af sig selv og fjernes kun af kosmetiske årsager.',
        },
      ]
    : [
        {
          question: 'What is a haemangioma?',
          answer:
            'A haemangioma is a benign vascular growth made up of an abnormal collection of blood vessels. The word covers two quite different conditions: infantile haemangiomas, which grow in babies and later shrink away on their own, and cherry angiomas, which appear in adults and stay for life.',
        },
        {
          question: 'What does a haemangioma look like?',
          answer:
            'Superficial infantile haemangiomas are bright red and slightly raised, while deeper ones sit as a bluish, soft swelling under skin that otherwise looks normal. Cherry angiomas are small, sharply defined red or purple dots on the trunk and arms. On darker skin the colour can appear more brownish or deep red.',
        },
        {
          question: 'Who gets haemangiomas?',
          answer:
            'Infantile haemangiomas affect roughly 4–5% of infants and up to 10% of premature or low-birth-weight babies. Only about a third are visible at birth — the rest appear during the first weeks of life. They are more common in girls. Cherry angiomas start to appear from around age 30 and are found in the majority of people over 75.',
        },
        {
          question: 'What should I remember about haemangiomas?',
          answer:
            'Most infantile haemangiomas are harmless and shrink on their own, but some need prompt assessment: one near the eye, nose, mouth or airway, one that has ulcerated, five or more on the skin, or a large facial one. That assessment should happen within the first weeks of life, ideally before one month of age, because propranolol works best during the growth phase. Cherry angiomas in adults do not disappear on their own and are removed only for cosmetic reasons.',
        },
      ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Alt om hæmangiomer: infantile hæmangiomer og kirsebærangiomer, hvorfor de opstår, hvornår de skal behandles, og hvilke advarselstegn forældre skal kende.'
      : 'Everything about haemangiomas: infantile haemangiomas and cherry angiomas, why they happen, when they need treatment, and the warning signs parents should know.',
    image: '/blog-hemangioma.jpg',
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    author: {
      '@type': 'Organization',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      url: 'https://www.skinchange.dk',
    },
    publisher: { '@type': 'Organization', name: 'SKIND', logo: { '@type': 'ImageObject', url: 'https://www.skinchange.dk/SKIND_logo_dark.svg' } },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-white">
        <Navigation lang={lang} />
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href={`/${lang}`} className="hover:text-primary">{isDa ? 'Forside' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-primary">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{isDa ? 'Hæmangiom' : 'Haemangioma'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Godartede Hudvækster' : 'Benign Skin Growths'}</span>
              <span className="text-gray-500 text-sm">{isDa ? '11. april 2026' : 'April 11, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '9 min læsetid' : '9 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {headline}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-hemangioma.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af hud med små, klart røde prikker, som man ser ved kirsebærangiomer.'
                    : 'Close-up of skin with small, bright red dots of the kind seen in cherry angiomas.'
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
                <p className="text-sm text-gray-600">{isDa ? 'Medicinsk redaktion' : 'Medical editorial team'}</p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                <strong>
                  {isDa
                    ? 'Hæmangiomer er godartede hudvækster, der består af en unormal ophobning af blodkar.'
                    : 'Haemangiomas are benign skin growths made up of an abnormal collection of blood vessels.'}
                </strong>{' '}
                {isDa
                  ? 'Ordet dækker imidlertid to helt forskellige ting: det infantile hæmangiom, som vokser frem hos spædbørn og senere forsvinder igen, og kirsebærangiomet, som opstår hos voksne og bliver siddende. Det er ikke den samme sygdom i to aldre.'
                  : 'The word, however, covers two quite different things: the infantile haemangioma, which grows in babies and later disappears again, and the cherry angioma, which appears in adults and stays. They are not the same disease at two different ages.'}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi forskellen på de to, hvordan de ser ud, hvorfor de opstår, hvilke hæmangiomer hos spædbørn der skal ses af en læge hurtigt, og hvordan de behandles.'
                  : 'In this article we explain the difference between the two, what they look like, why they happen, which haemangiomas in babies need to be seen by a doctor quickly, and how they are treated.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvad er et hæmangiom?' : 'What is a haemangioma?'}</h2>
              <p>
                {isDa
                  ? 'Et hæmangiom er en godartet karsvulst: cellerne i blodkarrenes vægge deler sig mere, end de skal, og danner en tæt klump af små kar. Hæmangiomer kan sidde overalt, oftest i huden, men også i indre organer som leveren. Den præcise årsag er ukendt, men tilstanden menes at hænge sammen med, hvordan de karopbyggende celler opfører sig tidligt i udviklingen.'
                  : 'A haemangioma is a benign vascular tumour: the cells that line blood vessels divide more than they should and form a dense cluster of small vessels. Haemangiomas can occur anywhere, most often in the skin but also in internal organs such as the liver. The exact cause is unknown, but the condition is thought to be linked to how vessel-forming cells behave early in development.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad er forskellen på et infantilt hæmangiom og et kirsebærangiom?' : 'What is the difference between an infantile haemangioma and a cherry angioma?'}
              </h3>
              <p>
                {isDa
                  ? 'Et infantilt hæmangiom er en karsvulst i spædbarnsalderen. Den er sjældent fuldt udviklet ved fødslen, vokser hurtigt i de første måneder, står stille og svinder derefter langsomt af sig selv gennem barndommen. Et kirsebærangiom er noget helt andet: en erhvervet, godartet opblomstring af små kar, som opstår i voksenalderen, bliver flere med årene og aldrig forsvinder af sig selv. Begge er ufarlige, men de har forskellig årsag, forskelligt forløb og forskellig behandling.'
                  : 'An infantile haemangioma is a vascular tumour of infancy. It is rarely fully formed at birth, grows quickly over the first months, plateaus and then slowly shrinks away on its own through childhood. A cherry angioma is something else entirely: an acquired, benign proliferation of tiny vessels that appears in adulthood, becomes more numerous with age and never regresses on its own. Both are harmless, but they differ in cause, course and treatment.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvilke typer hæmangiomer findes der?' : 'What types of haemangioma are there?'}</h2>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Infantile hæmangiomer (jordbærmærker):' : 'Infantile haemangiomas (strawberry marks):'}</strong>{' '}
                  {isDa
                    ? 'Den hyppigste godartede svulst i spædbarnsalderen. De vokser hurtigt i de første 3–6 måneder, går i stå omkring 9–12 måneders alderen og svinder derefter over år.'
                    : 'The most common benign tumour of infancy. They grow rapidly over the first 3–6 months, plateau at around 9–12 months and then shrink over years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kongenitte hæmangiomer:' : 'Congenital haemangiomas:'}</strong>{' '}
                  {isDa
                    ? 'Sjældnere. De er fuldt udviklede allerede ved fødslen og vokser ikke bagefter. Nogle svinder hurtigt i løbet af det første leveår, andre bliver stort set uændrede.'
                    : 'Rarer. They are already fully formed at birth and do not grow afterwards. Some involute quickly during the first year of life, others remain largely unchanged.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kirsebærangiomer (Campbell de Morgan-pletter):' : 'Cherry angiomas (Campbell de Morgan spots):'}</strong>{' '}
                  {isDa
                    ? 'Små, klart røde prikker på krop og arme hos voksne. De begynder omkring 30-årsalderen, bliver flere med årene og findes hos de fleste over 75 år. De er helt harmløse.'
                    : 'Small, bright red dots on the trunk and arms in adults. They begin around age 30, become more numerous with the years and are found in the majority of people over 75. They are entirely harmless.'}
                </li>
                <li>
                  <strong>{isDa ? 'Venøse malformationer (tidligere kaldet kavernøse hæmangiomer):' : 'Venous malformations (historically called cavernous haemangiomas):'}</strong>{' '}
                  {isDa
                    ? 'Disse er ikke ægte hæmangiomer. Det er misdannede vener, der er til stede fra fødslen, vokser med barnet og ikke forsvinder af sig selv. De hører til gruppen af karmisdannelser, ikke karsvulster, og behandles anderledes.'
                    : 'These are not true haemangiomas. They are malformed veins present from birth that grow with the child and do not disappear on their own. They belong to the group of vascular malformations, not vascular tumours, and are managed differently.'}
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvordan ser et hæmangiom ud?' : 'What does a haemangioma look like?'}</h2>
              <p>
                {isDa
                  ? 'Et overfladisk infantilt hæmangiom er klart rødt, let hævet og har en fast, gummiagtig konsistens. Et dybt hæmangiom ligger under huden som en blålig, blød hævelse, hvor overfladen kan se næsten normal ud. Mange er en blanding af begge dele. På mørkere hud fremstår farven ofte mere mørkerød eller violet end klart rød.'
                  : 'A superficial infantile haemangioma is bright red, slightly raised and firm and rubbery to the touch. A deep haemangioma sits beneath the skin as a bluish, soft swelling where the surface can look almost normal. Many are a mixture of the two. On darker skin the colour often appears deep red or violet rather than bright red.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Hvad kan forveksles med et hæmangiom?' : 'What can be mistaken for a haemangioma?'}</h3>
              <p>
                {isDa ? (
                  <>
                    Hos voksne forveksles kirsebærangiomer oftest med et{' '}
                    <Link href={`/${lang}/blog/regular-mole`} className="text-primary underline hover:text-primary-900">
                      modermærke
                    </Link>{' '}
                    eller en{' '}
                    <Link href={`/${lang}/blog/seborrheic-keratosis`} className="text-primary underline hover:text-primary-900">
                      seboroisk keratose
                    </Link>
                    . Kirsebærangiomet er dog rent rødt eller lilla og bliver kortvarigt blegt, hvis du trykker på det. En mørk, hurtigt
                    voksende eller uregelmæssig plet er derimod ikke et kirsebærangiom og skal ses af en læge.
                  </>
                ) : (
                  <>
                    In adults, cherry angiomas are most often mistaken for a{' '}
                    <Link href={`/${lang}/blog/regular-mole`} className="text-primary underline hover:text-primary-900">
                      mole
                    </Link>{' '}
                    or a{' '}
                    <Link href={`/${lang}/blog/seborrheic-keratosis`} className="text-primary underline hover:text-primary-900">
                      seborrhoeic keratosis
                    </Link>
                    . A cherry angioma is purely red or purple and briefly blanches if you press on it. A dark, rapidly growing or
                    irregular spot, by contrast, is not a cherry angioma and should be seen by a doctor.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvorfor opstår hæmangiomer?' : 'Why do haemangiomas happen?'}</h2>
              <p>
                {isDa
                  ? 'Infantile hæmangiomer opstår, når en gruppe umodne karceller fortsætter med at dele sig efter fødslen. Cellerne bærer et særligt markørprotein (GLUT1), som ikke findes i andre karvækster, og som kan bruges til at stille diagnosen. Iltmangel i vævet og signaler fra moderkagen menes at spille en rolle, hvilket passer med, at for tidlig fødsel, lav fødselsvægt og flerfoldsgraviditet øger risikoen.'
                  : 'Infantile haemangiomas arise when a group of immature vessel cells keeps dividing after birth. The cells carry a distinctive marker protein (GLUT1) that is not found in other vascular growths and can be used to confirm the diagnosis. Low tissue oxygen and signals from the placenta are thought to play a part, which fits with the fact that prematurity, low birth weight and multiple pregnancy all increase the risk.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Skyldes det noget, forældrene har gjort?' : 'Is it caused by something the parents did?'}</h3>
              <p>
                {isDa
                  ? 'Nej. Et hæmangiom skyldes ikke noget, moderen har spist, gjort eller undladt under graviditeten, og det er hverken smitsomt eller arveligt i nogen praktisk forstand. Kirsebærangiomer hos voksne har ingenting med sol at gøre — de er en normal aldersforandring i hudens små blodkar.'
                  : 'No. A haemangioma is not caused by anything the mother ate, did or failed to do during pregnancy, and it is neither contagious nor hereditary in any practical sense. Cherry angiomas in adults have nothing to do with sun exposure — they are a normal age-related change in the small blood vessels of the skin.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvem får hæmangiomer?' : 'Who gets haemangiomas?'}</h2>
              <p>
                {isDa
                  ? 'Infantile hæmangiomer ses hos ca. 4–5% af spædbørn og hos op til 10% af for tidligt fødte eller børn med lav fødselsvægt. Kun omkring en tredjedel er synlige ved fødslen — de fleste viser sig inden for de første leveuger og vokser derefter hurtigt i flere måneder. De er omkring tre gange hyppigere hos piger end hos drenge.'
                  : 'Infantile haemangiomas affect roughly 4–5% of infants, and up to 10% of premature or low-birth-weight babies. Only about a third are visible at birth — most appear within the first few weeks of life and then grow rapidly for several months. They are about three times more common in girls than in boys.'}
              </p>
              <p>
                {isDa
                  ? 'Kirsebærangiomer følger et helt andet mønster: de første dukker op i 30-årsalderen, antallet stiger støt med alderen, og de findes hos hovedparten af mennesker over 75 år — lige hyppigt hos mænd og kvinder.'
                  : 'Cherry angiomas follow a completely different pattern: the first appear in the thirties, the number rises steadily with age, and they are found in the majority of people over 75 — equally often in men and women.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvornår skal et hæmangiom undersøges?' : 'When should a haemangioma be checked?'}</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal et spædbarn ses af en læge hurtigt?' : '⚠️ When does a baby need to be seen quickly?'}
                </h3>
                <p className="text-red-900">
                  {isDa
                    ? 'De fleste infantile hæmangiomer kræver ingen behandling. Men disse situationer er tidskritiske og skal vurderes af en læge:'
                    : 'Most infantile haemangiomas need no treatment at all. But these situations are time-critical and need to be assessed by a doctor:'}
                </p>
                <ul className="list-disc pl-6 space-y-3 my-4 text-red-900">
                  <li>
                    {isDa
                      ? 'Et hæmangiom omkring øjet eller på øjenlåget. Det kan trykke på øjet eller spærre for synsfeltet og give varigt nedsat syn (amblyopi), også selvom pupillen ikke er dækket.'
                      : 'A haemangioma around the eye or on the eyelid. It can press on the eye or block the field of vision and cause permanent visual loss (amblyopia), even when the pupil is not covered.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Et hæmangiom i skægområdet — hage, hals og kæbelinje — eller et barn med hæs gråd, hvæsen eller støjende vejrtrækning. Det kan betyde et hæmangiom i luftvejen under stemmelæberne.'
                      : 'A haemangioma in the beard area — chin, neck and jawline — or a baby with a hoarse cry, wheeze or noisy breathing. This can mean a haemangioma in the airway below the vocal cords.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Sårdannelse i hæmangiomet. Det er den hyppigste komplikation, det gør ondt, det kan blive inficeret, og det efterlader ar. Sår skal behandles, ikke afventes.'
                      : 'Ulceration of the haemangioma. This is the most common complication, it is painful, it can become infected and it leaves a scar. Ulceration needs treatment, not watchful waiting.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Fem eller flere hæmangiomer i huden. Så bør barnet undersøges med ultralyd for hæmangiomer i leveren.'
                      : 'Five or more haemangiomas on the skin. The baby should then have an ultrasound scan to look for haemangiomas in the liver.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Et stort, segmentalt hæmangiom i ansigtet, som dækker et helt hudområde. Det kan være en del af PHACE-syndrom, hvor der samtidig kan være forandringer i hjernens kar, hjertet eller øjnene.'
                      : 'A large, segmental facial haemangioma covering a whole area of skin. This can be part of PHACE syndrome, where changes in the blood vessels of the brain, the heart or the eyes may also be present.'}
                  </li>
                  <li>
                    {isDa
                      ? 'Et hæmangiom over lænd, korsben eller i midtlinjen på ryggen. Det kan være tegn på LUMBAR-associationen med underliggende misdannelser i rygmarven.'
                      : 'A haemangioma over the lower back, sacrum or midline. This can signal the LUMBAR association with underlying spinal cord abnormalities.'}
                  </li>
                </ul>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Tidspunktet betyder noget: propranolol virker bedst, når behandlingen startes, mens hæmangiomet stadig vokser. Et hæmangiom, der sandsynligvis skal behandles, bør derfor vurderes inden for barnets første leveuger — helst før en måneds alderen.'
                    : 'Timing matters: propranolol works best when treatment is started while the haemangioma is still growing. Any lesion likely to need treatment should therefore be reviewed within the first weeks of life — ideally by one month of age.'}
                </p>
              </div>

              <p>
                {isDa
                  ? 'Hos voksne skal du få set på et kirsebærangiom, hvis det pludselig ændrer farve, vokser hurtigt, bliver mørkt eller uregelmæssigt, eller bløder gentagne gange uden at være blevet stødt. Så handler det om at udelukke andre diagnoser, ikke om angiomet i sig selv.'
                  : 'In adults, have a cherry angioma looked at if it suddenly changes colour, grows quickly, turns dark or irregular, or bleeds repeatedly without being knocked. The point is to rule out other diagnoses rather than to treat the angioma itself.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvordan behandles hæmangiomer?' : 'How are haemangiomas treated?'}</h2>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '👀 Aktiv observation' : '👀 Active monitoring'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Langt de fleste infantile hæmangiomer behøver ingen behandling. Lægen følger væksten, og forældre kan hjælpe ved at tage et billede ved siden af en lineal hver måned, så udviklingen kan sammenlignes.'
                      : 'The great majority of infantile haemangiomas need no treatment. The doctor follows the growth, and parents can help by taking a photo beside a ruler each month so the course can be compared.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '💊 Propranolol (betablokker)' : '💊 Propranolol (beta blocker)'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Førstevalg ved hæmangiomer, der truer syn, vejrtrækning eller giver sår. Behandlingen gives som mikstur under specialistkontrol, og effekten er størst, når den startes i vækstfasen.'
                      : 'First-line treatment for haemangiomas that threaten vision or breathing or that ulcerate. It is given as a liquid medicine under specialist supervision, and works best when started during the growth phase.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '🧴 Timolol på huden' : '🧴 Topical timolol'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'En betablokker i dråbeform, der påføres direkte på små, tynde, overfladiske hæmangiomer, hvor behandling i tabletform ikke er nødvendig.'
                      : 'A beta blocker in drop form applied directly to small, thin, superficial haemangiomas where systemic treatment is not needed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '⚡ Laserbehandling' : '⚡ Laser treatment'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Pulserende farvestoflaser bruges mod sår, der ikke vil hele, og mod de fine, røde kar, der kan blive tilbage efter et svundet hæmangiom. Hos voksne er laser også standardbehandlingen, hvis et kirsebærangiom ønskes fjernet.'
                      : 'Pulsed dye laser is used for ulceration that will not heal and for the fine red vessels that can remain after a haemangioma has shrunk. In adults, laser is also the standard treatment if a cherry angioma is to be removed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '✂️ Kirurgi' : '✂️ Surgery'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Bruges sjældent på små børn. Den typiske rolle er senere korrektion af løs hud eller fedtvæv, der er tilbage, når hæmangiomet er svundet.'
                      : 'Rarely used in small children. Its typical role is later correction of loose skin or fatty tissue left behind once the haemangioma has involuted.'}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Hvor lang tid går der, før et hæmangiom forsvinder?' : 'How long does it take for a haemangioma to disappear?'}</h3>
              <p>
                {isDa
                  ? 'Længere, end de fleste forældre får at vide. Omkring halvdelen af infantile hæmangiomer er helt svundet ved 5-årsalderen, ca. 70% ved 7 år og ca. 90% ved 9 år. Hos en betydelig del efterlader de en synlig forandring: fine udvidede kar, løs hud eller en pude af fedtvæv. Det er en af grundene til, at man overvejer behandling tidligt, når hæmangiomet sidder et sted, hvor et ar vil være synligt.'
                  : 'Longer than most parents are told. About half of infantile haemangiomas have fully involuted by age 5, roughly 70% by 7 and roughly 90% by 9. In a substantial minority they leave a visible change behind: fine dilated vessels, loose skin or a pad of fatty tissue. That is one reason early treatment is considered when the lesion sits where a scar would show.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Skal kirsebærangiomer behandles?' : 'Do cherry angiomas need treatment?'}</h3>
              <p>
                {isDa
                  ? 'Nej. Kirsebærangiomer er godartede og bliver ikke til kræft. De forsvinder til gengæld heller ikke af sig selv. Ønsker du dem fjernet — for eksempel fordi de bløder, når de bliver stødt eller ramt af en barbermaskine — kan de behandles med laser eller elektrokirurgi hos en hudlæge. Fjern dem aldrig selv.'
                  : 'No. Cherry angiomas are benign and do not turn into cancer. Nor, however, do they go away on their own. If you want them removed — for example because they bleed when knocked or caught by a razor — a dermatologist can treat them with laser or electrosurgery. Never try to remove them yourself.'}
              </p>

              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'I ICD-11, den internationale sygdomsklassifikation fra WHO, hører infantilt hæmangiom under 2E81.2 (2E81.20 for det enkeltstående og 2E81.21 for det multifokale). Kirsebærangiom har sin egen kode, 2F25. Venøse malformationer klassificeres som karmisdannelser og ikke som hæmangiomer.'
                    : 'In ICD-11, the WHO International Classification of Diseases, infantile haemangioma sits under 2E81.2 (2E81.20 for focal and 2E81.21 for multifocal lesions). Cherry angioma has its own code, 2F25. Venous malformations are classified as vascular malformations, not as haemangiomas.'}
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-bold text-lg text-primary-900 mb-2">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary-900 text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}</h3>
                <p className="mb-6">
                  {isDa
                    ? 'Er du voksen og i tvivl om en rød prik på huden, er en billedvurdering fra en certificeret hudlæge via SKIND-appen et fornuftigt første skridt. Drejer det sig om et spædbarn med et hæmangiom nær øje, næse, mund eller luftveje, med sår, eller med fem eller flere hæmangiomer, skal barnet ses ved fysisk fremmøde uden forsinkelse — kontakt egen læge eller vagtlæge i stedet.'
                    : 'If you are an adult and unsure about a red spot on your skin, a photo assessment from a certified dermatologist via the SKIND app is a sensible first step. If this is a baby with a haemangioma near the eye, nose, mouth or airway, with ulceration, or with five or more lesions, the child needs to be seen in person without delay — contact your GP or out-of-hours doctor instead.'}
                </p>
                <Link href={`/${lang}/download`} className="inline-flex justify-center items-center px-6 py-3 bg-white text-primary-900 rounded-full font-semibold hover:bg-white/90 transition-colors">
                  {isDa ? 'Download appen' : 'Download the app'}
                </Link>
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
