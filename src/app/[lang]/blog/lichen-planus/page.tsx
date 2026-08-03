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
        title: 'Lichen planus: symptomer, årsager og behandling',
        description:
          'Lichen planus giver lilla, fladtoppede knopper, der klør. Læs om Wickham-striber, oral lichen planus, arret hårtab og hvordan tilstanden behandles.',
        keywords:
          'lichen planus, oral lichen planus, lichen planus i munden, Wickham-striber, lichen planopilaris, kløende lilla knopper, hudlæge, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/lichen-planus',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/lichen-planus',
            da: 'https://www.skinchange.dk/da/blog/lichen-planus',
            en: 'https://www.skinchange.dk/en/blog/lichen-planus',
          },
        },
      }
    : {
        title: 'Lichen planus: symptoms, causes and treatment',
        description:
          'Lichen planus causes purple, flat-topped, itchy bumps. Learn about Wickham striae, oral lichen planus, scarring hair loss and how it is treated.',
        keywords:
          'lichen planus, oral lichen planus, Wickham striae, lichen planopilaris, purple itchy bumps, lichen planus treatment, dermatologist, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/lichen-planus',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/lichen-planus',
            da: 'https://www.skinchange.dk/da/blog/lichen-planus',
            en: 'https://www.skinchange.dk/en/blog/lichen-planus',
          },
        },
      };
}

export default function LichenPlanusPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er lichen planus? Årsager, symptomer og behandling'
    : 'What is lichen planus? Causes, symptoms and treatment';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Komplet guide til lichen planus: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to lichen planus: what it is, causes, symptoms and treatment options.',
    image: '/blog-lichen-planus.jpg',
    datePublished: '2026-03-21',
    dateModified: '2026-03-21',
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
          q: 'Er lichen planus farligt?',
          a: 'Lichen planus på huden er ikke farligt, men det kan efterlade blivende skader visse steder. Lichen planus i hårbunden ødelægger hårsækkene, og erosiv lichen planus i kønsområdet kan give ardannelse. Oral lichen planus har desuden en lille risiko for at udvikle sig til mundhulekræft over mange år, især i de erosive og atrofiske former.',
        },
        {
          q: 'Hvad er Wickham-striber?',
          a: 'Wickham-striber er de karakteristiske fine, hvide, netlignende linjer, der kan ses på overfladen af knopperne ved lichen planus. De ses tydeligst, når huden eller mundslimhinden undersøges med et forstørrelsesglas eller et dermatoskop, og de er et af de mest pålidelige tegn på diagnosen.',
        },
        {
          q: 'Kan lichen planus forsvinde af sig selv?',
          a: 'Lichen planus på huden forsvinder ofte spontant inden for 1–2 år, men efterlader typisk mørke pletter, der kan være måneder om at falme. Lichen planus i munden og i kønsområdet er derimod som regel langvarig og kræver løbende kontrol og behandling.',
        },
        {
          q: 'Vokser håret ud igen efter lichen planus i hårbunden?',
          a: 'Nej. Lichen planopilaris ødelægger hårsækkene, og hår, der er tabt til denne ardannelse, vokser ikke ud igen. Behandling kan bremse yderligere tab, men kan ikke genoprette det tabte. Derfor bør hårtab med rødme eller skæl omkring hårudgangene vurderes hurtigt.',
        },
        {
          q: 'Hvornår skal jeg kontakte en hudlæge?',
          a: 'Kontakt en hudlæge, hvis udslættet er smertefuldt eller kløen forstyrrer din søvn, hvis munden eller kønsorganerne er påvirket, hvis du taber hår i pletter, eller hvis neglene forandrer sig. Kontakt også lægen, hvis et sår i munden ikke er helet inden for to til tre uger.',
        },
      ]
    : [
        {
          q: 'Is lichen planus dangerous?',
          a: 'Lichen planus on the skin is not dangerous, but in certain sites it can cause permanent damage. Lichen planus on the scalp destroys hair follicles, and erosive lichen planus in the genital area can cause scarring. Oral lichen planus also carries a small risk of developing into oral cancer over many years, particularly in the erosive and atrophic forms.',
        },
        {
          q: 'What are Wickham striae?',
          a: 'Wickham striae are the characteristic fine, white, lace-like lines visible on the surface of lichen planus bumps. They show up most clearly when the skin or oral lining is examined with a magnifying glass or a dermatoscope, and they are one of the most reliable signs of the diagnosis.',
        },
        {
          q: 'Can lichen planus go away on its own?',
          a: 'Lichen planus on the skin often clears spontaneously within 1–2 years, but usually leaves dark marks that can take months to fade. Lichen planus in the mouth and genital area, by contrast, tends to be long-lasting and needs ongoing review and treatment.',
        },
        {
          q: 'Does hair grow back after lichen planus on the scalp?',
          a: 'No. Lichen planopilaris destroys the hair follicles, and hair lost to that scarring does not grow back. Treatment can halt further loss but cannot restore what has gone. That is why hair loss with redness or scaling around the hair openings should be assessed promptly.',
        },
        {
          q: 'When should I contact a dermatologist?',
          a: 'Contact a dermatologist if the rash is painful or the itch disturbs your sleep, if your mouth or genitals are involved, if you are losing hair in patches, or if your nails are changing. Also see a doctor if a sore in the mouth has not healed within two to three weeks.',
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
              <span className="text-gray-900">
                {isDa ? 'Hvad er lichen planus?' : 'What is lichen planus?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '21. marts 2026' : 'March 21, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '8 min læsetid' : '8 min read'}
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
                src="/blog-lichen-planus.jpg"
                alt={
                  isDa
                    ? 'Lilla, fladtoppede knopper på indersiden af et håndled, nogle med fine hvide linjer på overfladen.'
                    : 'Purple, flat-topped bumps on the inner wrist, some with fine white lines across the surface.'
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
                    <strong>Lichen planus er en kronisk, inflammatorisk hudsygdom</strong>, der giver
                    karakteristiske lilla, fladtoppede knopper, som ofte klør intenst. Tilstanden kan
                    også ramme munden, kønsorganerne, hårbunden og neglene – og netop dér kan den
                    efterlade blivende skader, hvis den ikke behandles.
                  </>
                ) : (
                  <>
                    <strong>Lichen planus is a chronic, inflammatory skin disease</strong> that causes
                    characteristic purple, flat-topped bumps which are often intensely itchy. It can
                    also affect the mouth, genitals, scalp and nails — and in those sites it can leave
                    permanent damage if it is left untreated.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad lichen planus er, hvordan det ser ud, hvorfor det opstår, hvordan diagnosen stilles, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article we explain what lichen planus is, what it looks like, why it happens, how the diagnosis is made, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is lichen planus */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er lichen planus?' : 'What is lichen planus?'}
              </h2>
              <p>
                {isDa
                  ? 'Lichen planus er en kronisk, inflammatorisk hudsygdom, der menes at være en autoimmun reaktion. Kroppens eget immunsystem angriber hudcellerne, hvilket udløser inflammation og det karakteristiske udslætsmønster.'
                  : "Lichen planus is a chronic, inflammatory skin disease thought to be an autoimmune reaction. The body's own immune system attacks skin cells, triggering inflammation and the characteristic rash pattern."}
              </p>
              <p>
                {isDa
                  ? 'Tilstanden kan påvirke huden, mundslimhinden, kønsorganerne, hårbunden og neglene. Der findes ingen kur, men behandlingen kan dæmpe inflammationen, lindre kløen og – vigtigst af alt – forebygge blivende ardannelse i hårbund og kønsområde.'
                  : 'The condition can affect the skin, oral lining, genitals, scalp and nails. There is no cure, but treatment can calm the inflammation, relieve the itch and — most importantly — prevent permanent scarring on the scalp and in the genital area.'}
              </p>

              {/* Contagious */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Er lichen planus smitsomt?' : 'Is lichen planus contagious?'}
              </h2>
              <p>
                {isDa
                  ? 'Nej. Lichen planus er ikke smitsomt. Det er ikke en infektion, og det kan hverken overføres ved berøring, ved kys, ved samleje eller ved at dele håndklæder. Du kan heller ikke smitte dit barn eller din partner, selvom udslættet sidder i munden eller på kønsorganerne.'
                  : 'No. Lichen planus is not contagious. It is not an infection, and it cannot be passed on by touch, kissing, sex or sharing towels. You cannot give it to your child or your partner either, even when the rash is in the mouth or on the genitals.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser lichen planus ud?' : 'What does lichen planus look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Lichen planus på huden beskrives klassisk med de seks P\'er:'
                  : 'Lichen planus on the skin is classically described by the six Ps:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Purple (lilla):' : 'Purple:'}</strong>{' '}
                  {isDa
                    ? 'Farven er karakteristisk mørkerød til violet.'
                    : 'The colour is characteristically dark red to violet.'}
                </li>
                <li>
                  <strong>{isDa ? 'Polygonal (mangekantet):' : 'Polygonal:'}</strong>{' '}
                  {isDa
                    ? 'Knopperne har lige, kantede sider frem for at være runde.'
                    : 'The bumps have straight, angular sides rather than being round.'}
                </li>
                <li>
                  <strong>{isDa ? 'Planar (fladtoppet):' : 'Planar (flat-topped):'}</strong>{' '}
                  {isDa
                    ? 'Overfladen er flad og let skinnende, som om knoppen er skåret over på toppen.'
                    : 'The top surface is flat and slightly shiny, as though the bump had been sliced off.'}
                </li>
                <li>
                  <strong>{isDa ? 'Pruritic (kløende):' : 'Pruritic (itchy):'}</strong>{' '}
                  {isDa
                    ? 'Intens kløe er et af de mest fremtrædende symptomer.'
                    : 'Intense itching is one of the most prominent symptoms.'}
                </li>
                <li>
                  <strong>{isDa ? 'Papules (papler):' : 'Papules:'}</strong>{' '}
                  {isDa
                    ? 'Små, hævede knopper, der kan stå enkeltvis eller i grupper.'
                    : 'Small, raised bumps that may be solitary or grouped.'}
                </li>
                <li>
                  <strong>{isDa ? 'Plaques (plaques):' : 'Plaques:'}</strong>{' '}
                  {isDa
                    ? 'Enkelte papler kan smelte sammen til større, fortykkede plaques – især på skinnebenene.'
                    : 'Individual papules can merge into larger, thickened patches — especially on the shins.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Et andet karakteristisk træk er de såkaldte Wickham-striber – fine, hvide, netlignende linjer på overfladen af knopperne. Disse linjer er ofte synlige, når det berørte område undersøges med et forstørrelsesglas.'
                  : 'Another characteristic feature is Wickham striae — fine, white, lace-like lines on the surface of the bumps. These lines are often visible when the affected area is examined with a magnifying glass.'}
              </p>
              <p>
                {isDa
                  ? 'Udslættet sidder typisk symmetrisk på håndled, underarme, ankler og lænd. Nye knopper kan opstå i en ridse eller et rift – det kaldes Köbners fænomen – og når knopperne forsvinder, efterlader de ofte mørkebrune pletter, der kan være måneder om at falme.'
                  : 'The rash typically sits symmetrically on the wrists, forearms, ankles and lower back. New bumps can appear along a scratch or a scar — this is called the Köbner phenomenon — and when the bumps clear they often leave dark brown marks that can take months to fade.'}
              </p>

              {/* Other sites */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvilke andre steder kan lichen planus ramme?' : 'Which other parts of the body can lichen planus affect?'}
              </h2>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Munden (oral lichen planus)' : 'The mouth (oral lichen planus)'}
              </h3>
              <p>
                {isDa
                  ? 'I munden viser lichen planus sig oftest som hvide, netlignende mønstre på indersiden af kinderne, som sjældent gør ondt. I de erosive og atrofiske former ses derimod røde, ømme områder og egentlige sår, som kan gøre det svært at spise stærk eller sur mad.'
                  : 'In the mouth, lichen planus most often appears as white, lace-like patterns on the inside of the cheeks, which rarely hurt. In the erosive and atrophic forms, however, there are red, sore areas and open ulcers that can make it difficult to eat spicy or acidic food.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hårbunden (lichen planopilaris)' : 'The scalp (lichen planopilaris)'}
              </h3>
              <p>
                {isDa
                  ? 'Når lichen planus rammer hårbunden, kaldes det lichen planopilaris. Inflammationen ødelægger hårsækkene, og hår, der tabes til denne ardannelse, vokser ikke ud igen. Behandling kan bremse yderligere tab, men ikke genoprette det, der allerede er væk. Derfor bør pletvist hårtab med rødme, kløe eller skæl omkring hårudgangene vurderes hurtigt.'
                  : 'When lichen planus affects the scalp it is called lichen planopilaris. The inflammation destroys the hair follicles, and hair lost to that scarring does not grow back. Treatment can halt further loss but cannot restore what has already gone. That is why patchy hair loss with redness, itching or scaling around the hair openings needs prompt assessment.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Kønsorganerne (erosiv lichen planus)' : 'The genitals (erosive lichen planus)'}
              </h3>
              <p>
                {isDa
                  ? 'I kønsområdet kan lichen planus optræde i en erosiv form. Erosiv vulvovaginal lichen planus giver ømme, sårede områder, der arrer op, når de heler, og med tiden kan ardannelsen få skamlæberne til at vokse sammen og gøre skeden snæver eller helt lukket. Ligesom i hårbunden er skaden blivende, når den først er sket, så vedvarende ømhed, smerter ved samleje eller uforklaret udflåd bør undersøges frem for at blive behandlet som svamp. Mænd kan udvikle den tilsvarende erosive form på penishovedet.'
                  : 'In the genital area, lichen planus can take an erosive form. Erosive vulvovaginal lichen planus causes raw, painful areas that scar as they heal, and over time that scarring can fuse the labia and narrow or close the vagina. As on the scalp, the damage is permanent once it has happened, so persistent soreness, pain during sex or unexplained discharge should be examined rather than treated as thrush. Men can develop the equivalent erosive form on the glans.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Neglene' : 'The nails'}
              </h3>
              <p>
                {isDa
                  ? 'Påvirkning af neglene ses hos omkring hver tiende og giver langsgående riller, fortynding og i svære tilfælde, at neglepladen forsvinder helt. Også her kan skaden blive blivende, hvis inflammationen får lov at fortsætte.'
                  : 'Nail involvement occurs in around one in ten people and causes lengthwise ridges, thinning and, in severe cases, complete loss of the nail plate. Here too the damage can become permanent if the inflammation is allowed to continue.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår lichen planus?' : 'Why does lichen planus happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag er ukendt, men flere faktorer menes at kunne udløse den autoimmune reaktion:'
                  : 'The exact cause is unknown, but several factors are thought to be able to trigger the autoimmune reaction:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'En autoimmun reaktion' : 'An autoimmune reaction'}
              </h3>
              <p>
                {isDa
                  ? 'Forskning tyder på, at T-lymfocytter (en type hvide blodlegemer) angriber hudcellerne i et forsøg på at fjerne noget, de opfatter som fremmed — selvom der ikke er noget egentligt fremmedlegeme til stede.'
                  : 'Research suggests that T-lymphocytes (a type of white blood cell) attack skin cells in an attempt to remove something they perceive as foreign — even though there is no actual foreign substance present.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Lægemidler (lichenoidt lægemiddeludslæt)' : 'Medicines (lichenoid drug eruption)'}
              </h3>
              <p>
                {isDa
                  ? 'Et lichenoidt lægemiddeludslæt ligner lichen planus til forveksling, men skyldes en medicin. De hyppigst involverede er ACE-hæmmere, thiaziddiuretika, betablokkere, malariamidler som hydroxychloroquin, guld, penicillamin, NSAID-præparater og anti-PD-1-checkpointhæmmere, der bruges i kræftbehandling. Udslættet kan starte måneder efter, behandlingen er begyndt, og kan være måneder om at forsvinde igen, når medicinen stoppes. Dentalt amalgam kan udløse oral lichen planus dér, hvor fyldningen rører slimhinden.'
                  : 'A lichenoid drug eruption looks almost identical to lichen planus but is caused by a medicine. The drugs most often involved are ACE inhibitors, thiazide diuretics, beta-blockers, antimalarials such as hydroxychloroquine, gold, penicillamine, NSAIDs and the anti-PD-1 checkpoint inhibitors used in cancer treatment. The rash can start months after the drug is begun and can take months to settle after it is stopped. Dental amalgam can trigger oral lichen planus where the filling touches the mucosa.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Hepatitis C' : 'Hepatitis C'}
              </h3>
              <p>
                {isDa
                  ? 'Der er en dokumenteret sammenhæng mellem hepatitis C-infektion og lichen planus, men styrken afhænger af, hvor man bor. I lande med høj forekomst af hepatitis C – dele af Sydeuropa, Mellemøsten og Japan – er det standard at teste patienter med lichen planus. I Danmark, hvor forekomsten er omkring 0,2–0,4%, er rutinemæssig screening ikke almindelig praksis; den er forbeholdt personer med risikofaktorer eller med udbredt eller oral sygdom.'
                  : 'There is a documented association between hepatitis C infection and lichen planus, but its strength depends on where you live. In countries with a high prevalence of hepatitis C — parts of southern Europe, the Middle East and Japan — testing patients with lichen planus is standard. In Denmark, where prevalence is around 0.2–0.4%, routine screening is not usual practice; it is reserved for people with risk factors or with widespread or oral disease.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Stress' : 'Stress'}
              </h3>
              <p>
                {isDa
                  ? 'Stress kan forværre eksisterende lichen planus og i nogle tilfælde udløse det første udbrud. Stresshåndtering er derfor en del af behandlingen.'
                  : 'Stress can worsen existing lichen planus and in some cases trigger the first outbreak. Stress management is therefore part of treatment.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvem får lichen planus?' : 'Who gets lichen planus?'}
              </h2>
              <p>
                {isDa
                  ? 'Lichen planus på huden rammer omkring 0,2–1% af voksne. Oral lichen planus er hyppigere – omkring 1–2% – og er den form, tandlæger oftest støder på.'
                  : 'Lichen planus on the skin affects around 0.2–1% of adults. Oral lichen planus is more common — around 1–2% — and is the form dentists most often encounter.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Alder:' : 'Age:'}</strong>{' '}
                  {isDa
                    ? 'Tilstanden forekommer hyppigst hos voksne mellem 30 og 60 år og er sjælden hos børn.'
                    : 'The condition occurs most frequently in adults between 30 and 60 years old and is rare in children.'}
                </li>
                <li>
                  <strong>{isDa ? 'Køn:' : 'Sex:'}</strong>{' '}
                  {isDa
                    ? 'Kvinder rammes lidt oftere end mænd, især når det gælder oral lichen planus.'
                    : 'Women are affected slightly more often than men, especially by oral lichen planus.'}
                </li>
                <li>
                  <strong>{isDa ? 'Genetik:' : 'Genetics:'}</strong>{' '}
                  {isDa
                    ? 'Familiehistorie med lichen planus eller andre autoimmune sygdomme øger risikoen.'
                    : 'A family history of lichen planus or other autoimmune diseases increases the risk.'}
                </li>
                <li>
                  <strong>{isDa ? 'Andre sygdomme:' : 'Other conditions:'}</strong>{' '}
                  {isDa
                    ? 'Personer med hepatitis C, HIV eller andre autoimmune tilstande har forhøjet risiko.'
                    : 'People with hepatitis C, HIV or other autoimmune conditions have an elevated risk.'}
                </li>
              </ul>

              {/* Diagnosis */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan stilles diagnosen?' : 'How is lichen planus diagnosed?'}
              </h2>
              <p>
                {isDa ? (
                  <>
                    Diagnosen bekræftes normalt med en hudbiopsi, hvor et lille stykke hud undersøges i mikroskop. Det er nødvendigt, fordi flere andre tilstande ligner lichen planus: lichenoidt lægemiddeludslæt,{' '}
                    <Link href={`/${lang}/blog/psoriasis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      psoriasis
                    </Link>
                    ,{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      eksem
                    </Link>
                    , diskoid lupus, sekundær syfilis og graft-versus-host-sygdom. De kan ikke adskilles fra hinanden på et billede alene.
                  </>
                ) : (
                  <>
                    The diagnosis is usually confirmed with a skin biopsy, in which a small piece of skin is examined under the microscope. This is necessary because several other conditions look like lichen planus: lichenoid drug eruption,{' '}
                    <Link href={`/${lang}/blog/psoriasis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      psoriasis
                    </Link>
                    ,{' '}
                    <Link href={`/${lang}/blog/eczema-atopic-dermatitis`} className="text-[#304ffe] underline hover:text-[#1a237e]">
                      eczema
                    </Link>
                    , discoid lupus, secondary syphilis and graft-versus-host disease. They cannot be told apart from a photograph alone.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'Ved oral lichen planus er der desuden en lille risiko for, at et område over mange år udvikler sig til mundhulekræft. Risikoen er koncentreret i de erosive, ulcererede og atrofiske former, og den praktiske konsekvens er regelmæssig kontrol hos tandlæge eller læge samt biopsi af ethvert sår, der ikke heler, og af nye hvide eller røde pletter.'
                  : 'In oral lichen planus there is also a small risk that an area develops into oral cancer over many years. The risk is concentrated in the erosive, ulcerated and atrophic forms, and the practical consequence is regular review by a dentist or doctor, plus a biopsy of any ulcer that will not heal and of new white or red patches.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan behandles lichen planus?' : 'How is lichen planus treated?'}
              </h2>
              <p>
                {isDa
                  ? 'Der findes ingen kur, men lichen planus kan som regel holdes under kontrol. Behandlingen afhænger af sværhedsgraden og af, hvilken del af kroppen der er ramt:'
                  : 'There is no cure, but lichen planus can usually be brought under control. Treatment depends on the severity and on which part of the body is affected:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Topikale kortikosteroider' : '💊 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kortikosteroidcremer og -salver er førstevalg mod kløe og inflammation. De dæmper immunresponsen i huden og lindrer symptomerne. I munden og kønsområdet bruges stærkere steroider i særlige formuleringer.'
                      : 'Corticosteroid creams and ointments are first-line treatment for itching and inflammation. They dampen the immune response in the skin and relieve symptoms. In the mouth and genital area, stronger steroids in special formulations are used.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Calcineurinhæmmere' : '🩺 Calcineurin inhibitors'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer med tacrolimus eller pimecrolimus bruges ofte i ansigtet og på slimhinder, hvor langvarig steroidbehandling er uegnet.'
                      : 'Creams with tacrolimus or pimecrolimus are often used on the face and on mucous membranes, where prolonged steroid treatment is unsuitable.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💡 Lysbehandling (fototerapi)' : '💡 Light therapy (phototherapy)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Smalspektret UVB (narrowband UVB) kan være effektiv ved udbredt lichen planus på kroppen, typisk to til tre gange om ugen i nogle måneder.'
                      : 'Narrowband UVB can be effective for widespread lichen planus on the body, typically two to three times a week over some months.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Systemiske kortikosteroider' : '💊 Systemic corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved svær eller udbredt lichen planus er en kort kur med prednisolon i tabletform den sædvanlige første systemiske behandling. Den trappes ned over nogle uger, fordi udslættet ellers ofte blusser op igen.'
                      : 'For severe or widespread lichen planus, a short course of oral prednisolone is the usual first systemic treatment. It is tapered over several weeks, because the rash often flares again otherwise.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Orale retinoider (acitretin)' : '💊 Oral retinoids (acitretin)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Det retinoid, der bruges mod lichen planus, er acitretin – ikke isotretinoin, som bruges mod akne. Acitretin giver alvorlige fosterskader og må ikke bruges af nogen, der kan blive gravid, hverken under behandlingen eller i tre år efter, at den er stoppet.'
                      : 'The retinoid used for lichen planus is acitretin — not the isotretinoin used for acne. Acitretin causes severe birth defects and must not be used by anyone who could become pregnant, either during treatment or for three years after it is stopped.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🥗 Stresshåndtering og livsstil' : '🥗 Stress management and lifestyle'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Da stress kan forværre lichen planus, kan afspændingsteknikker, motion og tilstrækkelig søvn være med til at reducere udbrud. Ved oral lichen planus hjælper det desuden at undgå stærk og sur mad og at holde tænderne rene.'
                      : 'Since stress can worsen lichen planus, relaxation techniques, exercise and adequate sleep can help reduce flare-ups. In oral lichen planus it also helps to avoid spicy and acidic food and to keep the teeth clean.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Lichen planus er klassificeret som EA91 i WHO\'s internationale sygdomsklassifikation (ICD-11). Det er en inflammatorisk tilstand med kløende, lilla, mangekantede papler, som oftest behandles med topikale steroider og i svære tilfælde med systemisk behandling.'
                    : "Lichen planus is classified as EA91 in the WHO's International Classification of Diseases (ICD-11). It is an inflammatory condition presenting with itchy, purple, polygonal papules, usually managed with topical steroids and, in severe cases, systemic treatment."}
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
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hud via SKIND-appen og få en vurdering og en plan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and get an assessment and a plan from a certified dermatologist — no hospital waiting list.'}
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
