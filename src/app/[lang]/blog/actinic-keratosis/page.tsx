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
        title: 'Hvad er aktinisk keratose? Symptomer og behandling | SKIND',
        description:
          'Aktinisk keratose er ru, skællende pletter efter mange års sol. Læs om symptomer, risikoen for pladecellekarcinom, behandling og forebyggelse.',
        keywords:
          'aktinisk keratose, solkeratose, præcancerøs hudtilstand, pladecellekarcinom, kryoterapi, feltbehandling, solskade, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/actinic-keratosis',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/actinic-keratosis', da: 'https://www.skinchange.dk/da/blog/actinic-keratosis', en: 'https://www.skinchange.dk/en/blog/actinic-keratosis' },
        },
      }
    : {
        title: 'What is Actinic Keratosis? Causes and Treatment | SKIND',
        description:
          'Actinic keratosis is a rough, scaly patch caused by years of sun exposure. Learn the symptoms, the risk of skin cancer, the treatments and how to prevent it.',
        keywords:
          'actinic keratosis, solar keratosis, precancerous skin condition, squamous cell carcinoma, cryotherapy, field treatment, sun damage, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/actinic-keratosis',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/actinic-keratosis', da: 'https://www.skinchange.dk/da/blog/actinic-keratosis', en: 'https://www.skinchange.dk/en/blog/actinic-keratosis' },
        },
      };
}

export default function ActinicKeratosisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er aktinisk keratose? Årsager, symptomer og behandling'
    : 'What is actinic keratosis? Causes, symptoms and treatment';

  const faqs = isDa
    ? [
        {
          question: 'Hvad er aktinisk keratose?',
          answer:
            'Aktinisk keratose (AK), også kaldet solkeratose, er en præcancerøs hudtilstand med ru, skællende pletter. Læsionerne opstår efter mange års eksponering for ultraviolet stråling fra solen eller solarier, og de sidder i hud, hvor UV-strålingen har beskadiget cellernes DNA.',
        },
        {
          question: 'Hvordan ser aktinisk keratose ud?',
          answer:
            'AK fremstår typisk som små, ru eller skællende pletter, der kan være lyserøde, røde, hudfarvede eller brunlige. De føles som fint sandpapir og er ofte nemmere at mærke end at se. De sidder på soleksponerede områder som ansigt, ører, underlæbe, skaldet hovedbund, nakke, underarme og håndrygge.',
        },
        {
          question: 'Hvem får aktinisk keratose?',
          answer:
            'AK er mest almindelig hos lyshudede personer over 40 år, men den kan ramme alle med mange års soleksponering. Udendørsarbejdende, tidligere solariebrugere, personer med svækket immunforsvar og organtransplanterede har markant højere risiko.',
        },
        {
          question: 'Hvad skal jeg huske om behandling af aktinisk keratose?',
          answer:
            'AK behandles, fordi den kan udvikle sig til pladecellekarcinom: for en person med flere læsioner udvikler omkring 6–10% et pladecellekarcinom over ti år. Behandlingsmulighederne er kryoterapi, cremer som 5-fluorouracil, imiquimod eller tirbanibulin, fotodynamisk terapi og kirurgisk fjernelse. Ofte behandles hele det soleksponerede felt, ikke kun den plet, du kan se.',
        },
      ]
    : [
        {
          question: 'What is actinic keratosis?',
          answer:
            'Actinic keratosis (AK), also known as solar keratosis, is a precancerous skin condition with rough, scaly patches. The lesions develop after many years of exposure to ultraviolet radiation from the sun or tanning beds, and they sit in skin where UV radiation has damaged the DNA of the cells.',
        },
        {
          question: 'What does actinic keratosis look like?',
          answer:
            'AK typically appears as small, rough or scaly patches that may be pink, red, skin-coloured or brownish. They feel like fine sandpaper and are often easier to feel than to see. They sit on sun-exposed areas such as the face, ears, lower lip, bald scalp, neck, forearms and backs of the hands.',
        },
        {
          question: 'Who gets actinic keratosis?',
          answer:
            'AK is most common in fair-skinned people over 40, but it can affect anyone with many years of sun exposure. Outdoor workers, former sunbed users, people with a weakened immune system and organ transplant recipients have a markedly higher risk.',
        },
        {
          question: 'What should I remember about actinic keratosis treatment?',
          answer:
            'AK is treated because it can progress to squamous cell carcinoma: across a person with multiple lesions, around 6–10% develop an SCC over ten years. The options are cryotherapy, creams such as 5-fluorouracil, imiquimod or tirbanibulin, photodynamic therapy and surgical removal. Often the whole sun-exposed field is treated, not only the patch you can see.',
        },
      ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Alt om aktinisk keratose: hvad det er, hvorfor det opstår, hvornår du skal søge læge, behandlingsmuligheder og forebyggelse.'
      : 'Everything about actinic keratosis: what it is, why it happens, when to see a doctor, treatment options and prevention.',
    image: '/blog-actinic-keratosis.jpg',
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
              <Link href={`/${lang}`} className="hover:text-[#304ffe]">{isDa ? 'Forside' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-[#304ffe]">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{isDa ? 'Aktinisk keratose' : 'Actinic keratosis'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Præcancerøs Tilstand' : 'Precancerous Condition'}</span>
              <span className="text-gray-500 text-sm">{isDa ? '11. april 2026' : 'April 11, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '8 min læsetid' : '8 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {headline}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-actinic-keratosis.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af solskadet hud med flere ru, rødlige og skællende pletter.'
                    : 'Close-up of sun-damaged skin with several rough, reddish and scaly patches.'
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
                <p className="text-sm text-gray-600">{isDa ? 'Medicinsk redaktion' : 'Medical editorial team'}</p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                <strong>
                  {isDa
                    ? 'Aktinisk keratose (AK), også kaldet solkeratose, er en ru, skællende plet i huden efter mange års sol.'
                    : 'Actinic keratosis (AK), also called solar keratosis, is a rough, scaly patch of skin caused by years of sun exposure.'}
                </strong>{' '}
                {isDa
                  ? 'Pletten er ikke i sig selv kræft, men den sidder i hud, hvor UV-strålingen har beskadiget cellernes DNA — og en lille del af pletterne kan med tiden udvikle sig til pladecellekarcinom.'
                  : 'The patch is not cancer in itself, but it sits in skin where UV radiation has damaged the DNA of the cells — and a small proportion of these patches can over time develop into squamous cell carcinoma.'}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad aktinisk keratose er, hvordan den ser og føles, hvorfor den opstår, hvem der er i risiko, hvornår du skal søge læge, og hvilke behandlinger hudlæger bruger i dag.'
                  : 'In this article we explain what actinic keratosis is, what it looks and feels like, why it happens, who is at risk, when you should see a doctor, and which treatments dermatologists use today.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad er aktinisk keratose?' : 'What is actinic keratosis?'}</h2>
              <p>
                {isDa
                  ? 'Aktinisk keratose opstår, når hudceller kaldet keratinocytter beskadiges af kumulativ UV-eksponering gennem livet. Skaden ændrer cellernes DNA, så de vokser unormalt og danner et fortykket, skællende lag på overfladen. Pletterne sidder næsten altid i hud, der har fået meget sol gennem årtier, og de kommer sjældent alene.'
                  : 'Actinic keratosis develops when skin cells called keratinocytes are damaged by cumulative UV exposure over a lifetime. The damage alters the DNA of the cells so that they grow abnormally and build up a thickened, scaly layer on the surface. The patches almost always sit in skin that has had a lot of sun over decades, and they rarely come alone.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Er aktinisk keratose kræft?' : 'Is actinic keratosis cancer?'}</h3>
              <p>
                {isDa ? (
                  <>
                    Nej — en aktinisk keratose er ikke i sig selv kræft. Men den er heller ikke bare en tør plet. Moderne hudpatologi
                    betragter AK som det tidligste, overfladiske trin i den samme sygdomsproces, der ender i{' '}
                    <Link href={`/${lang}/blog/squamous-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      pladecellekarcinom
                    </Link>
                    . De unormale celler ligger endnu kun i overhuden og har ikke brudt igennem til vævet nedenunder. Derfor kaldes
                    tilstanden præcancerøs — og derfor behandles den.
                  </>
                ) : (
                  <>
                    No — an actinic keratosis is not cancer in itself. But it is not simply a dry patch either. Contemporary skin
                    pathology regards AK as the earliest, most superficial step in the same disease process that ends in{' '}
                    <Link href={`/${lang}/blog/squamous-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      squamous cell carcinoma
                    </Link>
                    . The abnormal cells are still confined to the epidermis and have not broken through into the tissue below. That is
                    why the condition is called precancerous — and why it is treated.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan ser aktinisk keratose ud?' : 'What does actinic keratosis look like?'}</h2>
              <p>
                {isDa
                  ? 'AK fremstår typisk som små, ru eller skællende pletter, der kan være lyserøde, røde, hudfarvede eller brunlige. De er ofte nemmere at mærke end at se: overfladen føles som fint sandpapir, og pletten kan komme og gå gennem året. Nogle er ømme, kløende eller stikkende, og en tyk, hornagtig udvækst (kutant horn) kan udgå fra en aktinisk keratose.'
                  : 'AK typically appears as small, rough or scaly patches that may be pink, red, skin-coloured or brownish. They are often easier to feel than to see: the surface feels like fine sandpaper, and a patch may come and go through the year. Some are tender, itchy or prickly, and a thick, horn-like growth (a cutaneous horn) can arise from an actinic keratosis.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvor på kroppen sidder aktiniske keratoser?' : 'Where on the body do actinic keratoses appear?'}</h3>
              <p>
                {isDa
                  ? 'Næsten altid på de områder, der har fået mest sol gennem livet: ansigt, næse, ører, underlæben, en skaldet eller tyndhåret hovedbund, nakken, underarmene og håndryggene. Hos mænd med hårtab er hovedbunden et meget almindeligt sted, fordi håret ikke længere skygger.'
                  : 'Almost always on the areas that have received the most sun over a lifetime: the face, nose, ears, lower lip, a bald or thinning scalp, the neck, the forearms and the backs of the hands. In men with hair loss the scalp is a very common site, because the hair no longer provides shade.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvad kan forveksles med aktinisk keratose?' : 'What can be mistaken for actinic keratosis?'}</h3>
              <p>
                {isDa ? (
                  <>
                    Flere hudforandringer ligner AK.{' '}
                    <Link href={`/${lang}/blog/seborrheic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      Seboroisk keratose
                    </Link>{' '}
                    sidder ovenpå huden som en voksagtig, påklistret brun vækst og har intet med sol at gøre.{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      Basalcellekarcinom
                    </Link>{' '}
                    kan være en flad, lyserød plet med en let opkastet kant, der bløder og skorper. Eksem og psoriasis giver også røde,
                    skællende områder, men de klør typisk mere og sidder symmetrisk på begge sider af kroppen. Er du i tvivl, skal pletten
                    ses af en læge.
                  </>
                ) : (
                  <>
                    Several skin changes resemble AK. A{' '}
                    <Link href={`/${lang}/blog/seborrheic-keratosis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      seborrhoeic keratosis
                    </Link>{' '}
                    sits on top of the skin as a waxy, stuck-on brown growth and has nothing to do with sun. A{' '}
                    <Link href={`/${lang}/blog/basal-cell-carcinoma`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      basal cell carcinoma
                    </Link>{' '}
                    can be a flat, pink patch with a slightly raised edge that bleeds and crusts. Eczema and psoriasis also produce red,
                    scaly areas, but they usually itch more and appear symmetrically on both sides of the body. If you are in doubt, the
                    patch should be seen by a doctor.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvorfor opstår aktinisk keratose?' : 'Why does actinic keratosis happen?'}</h2>
              <p>
                {isDa
                  ? 'Årsagen er kumulativ ultraviolet stråling. Det er ikke den enkelte solskoldning, men summen af al den sol, huden har fået gennem årtier, der afgør risikoen. Derfor rammer AK typisk mennesker over 40–50 år, og derfor sidder pletterne netop der, hvor solen har ramt hårdest.'
                  : 'The cause is cumulative ultraviolet radiation. It is not any single sunburn but the sum of all the sun the skin has received over decades that determines the risk. That is why AK typically affects people over 40–50, and why the patches appear exactly where the sun has struck hardest.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvad gør UV-stråling ved huden?' : 'What does UV radiation do to the skin?'}</h3>
              <p>
                {isDa
                  ? 'UVB-stråling rammer direkte cellernes DNA. Huden reparerer det meste, men ikke alt, og med årene ophobes mutationer — blandt andet i tumorsuppressorgenet p53 — i stadig flere keratinocytter. Når nok fejl er samlet i den samme cellelinje, deler cellerne sig ukontrolleret, og en aktinisk keratose bliver synlig.'
                  : 'UVB radiation strikes the DNA of the cells directly. The skin repairs most of it but not all, and over the years mutations accumulate — among them in the tumour suppressor gene p53 — in more and more keratinocytes. When enough faults have gathered in the same cell line, the cells divide uncontrollably and an actinic keratosis becomes visible.'}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvem får aktinisk keratose?' : 'Who gets actinic keratosis?'}</h2>
              <p>
                {isDa
                  ? 'AK er en af de hyppigste grunde til at gå til hudlæge i Nordeuropa. Disse grupper er særligt udsatte:'
                  : 'AK is one of the most common reasons for seeing a dermatologist in Northern Europe. These groups are particularly exposed:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Lys hud:' : 'Fair skin:'}</strong>{' '}
                  {isDa
                    ? 'Lys hud, lyse øjne og lyst eller rødt hår giver mindst naturlig beskyttelse mod UV.'
                    : 'Fair skin, light eyes and blonde or red hair give the least natural protection against UV.'}
                </li>
                <li>
                  <strong>{isDa ? 'Alder over 40 år:' : 'Age over 40:'}</strong>{' '}
                  {isDa
                    ? 'Risikoen stiger med hvert årti, fordi UV-skaden ophobes.'
                    : 'The risk rises with every decade because UV damage accumulates.'}
                </li>
                <li>
                  <strong>{isDa ? 'Udendørs arbejde og friluftsliv:' : 'Outdoor work and outdoor hobbies:'}</strong>{' '}
                  {isDa
                    ? 'Håndværkere, landmænd, sejlere, golfspillere og cyklister får mange timers sol om året.'
                    : 'Builders, farmers, sailors, golfers and cyclists accumulate many hours of sun each year.'}
                </li>
                <li>
                  <strong>{isDa ? 'Solarier og sydenferier:' : 'Sunbeds and sunny holidays:'}</strong>{' '}
                  {isDa
                    ? 'Begge dele øger den samlede UV-dosis markant.'
                    : 'Both add substantially to the total UV dose.'}
                </li>
                <li>
                  <strong>{isDa ? 'Svækket immunforsvar:' : 'A weakened immune system:'}</strong>{' '}
                  {isDa
                    ? 'Organtransplanterede og andre i immundæmpende behandling får flere og mere aggressive læsioner og bør følges tæt.'
                    : 'Organ transplant recipients and others on immunosuppressive treatment develop more numerous and more aggressive lesions and should be followed closely.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tidligere hudkræft:' : 'Previous skin cancer:'}</strong>{' '}
                  {isDa
                    ? 'Har du haft hudkræft før, er både nye keratoser og ny hudkræft mere sandsynlige.'
                    : 'If you have had skin cancer before, both new keratoses and new skin cancers are more likely.'}
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvornår skal du søge læge?' : 'When should you see a doctor?'}</h2>
              <p>
                {isDa
                  ? 'Få undersøgt enhver ru, skællende plet, der ikke forsvinder inden for få uger. Den enkelte aktiniske keratose har lav årlig risiko for at udvikle sig til pladecellekarcinom, men for en person med flere læsioner er risikoen reel — omkring 6–10% udvikler et pladecellekarcinom over ti år. Det er en af hovedgrundene til, at AK behandles og følges.'
                  : 'Have any rough, scaly patch that persists beyond a few weeks assessed. An individual actinic keratosis carries a low annual risk of turning into squamous cell carcinoma, but across a patient with multiple lesions the risk is meaningful — around 6–10% will develop an SCC over ten years. This is one of the main reasons AK is treated and followed up.'}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge læge hurtigt?' : '⚠️ When to seek prompt assessment'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Søg læge hurtigt, hvis en læsion bliver fortykket eller hård, øm eller smertefuld, bløder, sårdannes eller vokser hurtigt. Disse forandringer kan betyde, at pletten allerede er blevet til pladecellekarcinom. Det samme gælder et sår på underlæben eller øret, der ikke vil hele.'
                    : 'Seek assessment promptly if a lesion becomes thickened or hard, tender or painful, bleeds, ulcerates, or grows quickly. These changes can mean it has already become a squamous cell carcinoma. The same applies to a sore on the lower lip or ear that will not heal.'}
                </p>
              </div>

              <p>
                {isDa
                  ? 'En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke hudkræft. En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
                  : 'A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It cannot rule out skin cancer. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for laboratory analysis.'}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan behandles aktinisk keratose?' : 'How is actinic keratosis treated?'}</h2>
              <p>
                {isDa
                  ? 'Valget af behandling afhænger af, hvor mange læsioner du har, hvor tykke de er, hvor de sidder, og hvor meget hud der er solskadet:'
                  : 'The choice of treatment depends on how many lesions you have, how thick they are, where they sit, and how much of the skin is sun-damaged:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '❄️ Kryoterapi (frysning)' : '❄️ Cryotherapy (freezing)'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Den mest almindelige behandling af enkelte læsioner. Flydende kvælstof sprøjtes på pletten i få sekunder og ødelægger de unormale celler. Området bliver rødt, danner skorpe og heler over et par uger, ofte med en lys plet tilbage.'
                      : 'The most common treatment for individual lesions. Liquid nitrogen is sprayed onto the patch for a few seconds and destroys the abnormal cells. The area turns red, crusts and heals over a couple of weeks, often leaving a pale mark.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '💊 Topisk behandling (cremer og geler)' : '💊 Topical treatment (creams and gels)'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer og geler, du selv påfører over dage til uger: 5-fluorouracil (5-FU), imiquimod, tirbanibulin (Klisyri, godkendt i EU i 2021, bruges i fem dage) og diclofenacgel. De dækker et helt område og gør huden rød, øm og skorpet undervejs — det er en forventet del af effekten, ikke en grund til at stoppe.'
                      : 'Creams and gels you apply yourself over days to weeks: 5-fluorouracil (5-FU), imiquimod, tirbanibulin (Klisyri, approved in the EU in 2021 and used for five days) and diclofenac gel. They cover a whole area and make the skin red, sore and crusted along the way — an expected part of the effect, not a reason to stop.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '💡 Fotodynamisk terapi (PDT)' : '💡 Photodynamic therapy (PDT)'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'En lysfølsom creme (ALA eller MAL) lægges på huden og aktiveres derefter af lys med en bestemt bølgelængde, som ødelægger de beskadigede celler. PDT giver et godt kosmetisk resultat på store felter, men kan svide undervejs. Dagslys-PDT er en mere skånsom variant.'
                      : 'A light-sensitising cream (ALA or MAL) is applied to the skin and is then activated by light of a specific wavelength, which destroys the damaged cells. PDT gives a good cosmetic result over large fields but can sting during treatment. Daylight PDT is a gentler variant.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">{isDa ? '🔬 Kirurgisk fjernelse eller biopsi' : '🔬 Surgical removal or biopsy'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Er læsionen tyk, hård eller kommer igen efter behandling, skrabes eller skæres den væk, så vævet kan undersøges i mikroskop. Det er den eneste måde at afgøre, om der allerede er tale om pladecellekarcinom.'
                      : 'If a lesion is thick, hard or returns after treatment, it is scraped or cut away so the tissue can be examined under a microscope. That is the only way to establish whether it has already become a squamous cell carcinoma.'}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">{isDa ? 'Hvorfor behandles hele hudområder?' : 'Why is a whole area treated rather than one spot?'}</h3>
              <p>
                {isDa
                  ? 'Hudlæger taler om feltkancerisering (field cancerisation). Den plet, du kan se, er sjældent den eneste: hele det soleksponerede felt — for eksempel en skaldet isse eller en underarm — indeholder celler med den samme UV-skade, og nye pletter dukker op i månederne efter. Derfor behandles et helt felt ofte med creme eller lys frem for én læsion ad gangen, og derfor kan din læge foreslå at behandle hud, der endnu ser normal ud.'
                  : 'Dermatologists talk about field cancerisation. The patch you can see is rarely the only one: the whole sun-exposed field — a bald scalp or a forearm, for example — contains cells carrying the same UV damage, and new patches appear in the months that follow. That is why a whole field is often treated with cream or light rather than one lesion at a time, and why your doctor may suggest treating skin that still looks normal.'}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan forebygger du aktinisk keratose?' : 'How can you prevent actinic keratosis?'}</h2>
              <p>
                {isDa
                  ? 'Solbeskyttelse virker også, efter at de første pletter er kommet: den bremser nye læsioner og reducerer risikoen for hudkræft.'
                  : 'Sun protection works even after the first patches have appeared: it slows new lesions and reduces the risk of skin cancer.'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Solcreme hver dag:' : 'Sunscreen every day:'}</strong>{' '}
                  {isDa
                    ? 'Bredspektret SPF 30 eller højere på ansigt, ører, hals og hænder — også på overskyede dage.'
                    : 'Broad-spectrum SPF 30 or higher on the face, ears, neck and hands — also on cloudy days.'}
                </li>
                <li>
                  <strong>{isDa ? 'Søg skygge midt på dagen:' : 'Seek shade in the middle of the day:'}</strong>{' '}
                  {isDa
                    ? 'UV-strålingen er stærkest midt på dagen (kl. 12–15).'
                    : 'UV radiation is strongest in the middle of the day (12–3 pm).'}
                </li>
                <li>
                  <strong>{isDa ? 'Hat og tøj:' : 'A hat and clothing:'}</strong>{' '}
                  {isDa
                    ? 'En bredskygget hat beskytter hovedbund, ører og underlæbe — netop de steder, hvor AK oftest opstår.'
                    : 'A wide-brimmed hat protects the scalp, ears and lower lip — precisely where AK most often appears.'}
                </li>
                <li>
                  <strong>{isDa ? 'Aldrig solarier:' : 'Never use sunbeds:'}</strong>{' '}
                  {isDa
                    ? 'Solarier tilfører ren UV-dosis uden nogen sundhedsmæssig gevinst.'
                    : 'Sunbeds add pure UV dose with no health benefit whatsoever.'}
                </li>
                <li>
                  <strong>{isDa ? 'Månedlig selvundersøgelse:' : 'Monthly self-examination:'}</strong>{' '}
                  {isDa
                    ? 'Kør fingerspidserne hen over hovedbund, ansigt, ører og underarme — keratoser mærkes ofte, før de ses.'
                    : 'Run your fingertips over the scalp, face, ears and forearms — keratoses can often be felt before they are seen.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kontrol hos hudlæge:' : 'Dermatologist check-ups:'}</strong>{' '}
                  {isDa
                    ? 'Har du allerede keratoser, tidligere hudkræft eller svækket immunforsvar, bør du følges regelmæssigt.'
                    : 'If you already have keratoses, previous skin cancer or a weakened immune system, you should be followed up regularly.'}
                </li>
              </ul>

              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Aktinisk keratose har koden EK90.0 i ICD-11, den internationale sygdomsklassifikation fra WHO. Koden hører under blokken EK90, aktinisk keratose og andre afgrænsede epidermale dysplasier, og dækker unormal vækst af keratinocytter forårsaget af kronisk ultraviolet stråling.'
                    : 'Actinic keratosis is coded EK90.0 in ICD-11, the WHO International Classification of Diseases. The code sits within the block EK90, actinic keratosis and other discrete epidermal dysplasias, and covers abnormal keratinocyte growth caused by chronic ultraviolet radiation.'}
                </p>
              </div>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-bold text-lg text-[#1a237e] mb-2">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}</h3>
                <p className="mb-6">
                  {isDa
                    ? 'Har du ru, skællende pletter, der ikke forsvinder? Upload billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge — så du ved, om pletten kan behandles, eller om den skal ses ved fysisk fremmøde.'
                    : 'Do you have rough, scaly patches that will not go away? Upload photos via the SKIND app and get an assessment from a certified dermatologist — so you know whether the patch can be treated, or whether it needs to be seen in person.'}
                </p>
                <Link href={`/${lang}/download`} className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#1a237e] rounded-full font-semibold hover:bg-white/90 transition-colors">
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
