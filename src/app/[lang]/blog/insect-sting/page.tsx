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
        title: 'Insektbid og stik: behandling og førstehjælp | SKIND',
        description:
          'Insektbid, hvepsestik og flåtbid: sådan behandler du dem, sådan kender du en alvorlig allergisk reaktion, hvornår du skal ringe 112, og hvordan du undgår bid.',
        keywords:
          'insektbid, myggestik, hvepsestik, bistik, flåtbid, borrelia, erythema migrans, anafylaksi, adrenalinpen, allergisk reaktion, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/insect-sting',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/insect-sting', da: 'https://www.skinchange.dk/da/blog/insect-sting', en: 'https://www.skinchange.dk/en/blog/insect-sting' },
        },
      }
    : {
        title: 'Insect Bites and Stings: Treatment and First Aid | SKIND',
        description:
          'Insect bites, wasp stings and tick bites: how to treat them, how to recognise a severe allergic reaction, when to call 112, and how to avoid being bitten.',
        keywords:
          'insect bite, mosquito bite, wasp sting, bee sting, tick bite, Lyme disease, erythema migrans, anaphylaxis, adrenaline auto-injector, allergic reaction, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/insect-sting',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/insect-sting', da: 'https://www.skinchange.dk/da/blog/insect-sting', en: 'https://www.skinchange.dk/en/blog/insect-sting' },
        },
      };
}

export default function InsectStingPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad gør du ved insektbid og stik?'
    : 'What should you do about insect bites and stings?';

  const faqs = isDa
    ? [
        {
          question: 'Hvad er insektbid og stik?',
          answer:
            'Insektbid og stik er hudens reaktion på munddele eller brod fra insekter og andre små dyr som myg, fluer, myrer, væggelus, hvepse, bier, flåter og edderkopper. Nogle efterlader kun spyt i huden, mens hvepse og bier sprøjter gift ind. Begge dele kan give kløe og hævelse — og i sjældne tilfælde en alvorlig allergisk reaktion.',
        },
        {
          question: 'Hvordan ser insektbid ud?',
          answer:
            'Insektbid viser sig typisk som små, røde, hævede knopper, der kan klø, gøre ondt eller begge dele. Myggestik er små, runde og kløende. Væggelusbid sidder ofte i linjer eller klynger. Et hvepse- eller bistik giver en skarp smerte og en hurtig, øm hævelse omkring indstiksstedet.',
        },
        {
          question: 'Hvem rammes af insektbid?',
          answer:
            'Alle kan blive bidt eller stukket. Risikoen stiger med tid udendørs i skov, højt græs og haver, ophold nær vand om sommeren og ubeskyttet hud. Personer, der tidligere har haft en systemisk allergisk reaktion på hvepse- eller bigift, har størst risiko for en alvorlig reaktion ved næste stik og bør henvises til en allergolog.',
        },
        {
          question: 'Hvad skal jeg huske om insektbid?',
          answer:
            'De fleste bid og stik er harmløse og går over på få dage: rens med sæbe og vand, køl med en kold kompres, og brug håndkøbsantihistaminer eller hydrocortisoncreme mod kløe. En stor hævelse omkring selve biddet er ubehagelig, men ikke farlig. Får du derimod symptomer væk fra bidstedet — vejrtrækningsbesvær, hævelse af ansigt, læber, tunge eller svælg, udbredt nældefeber eller svimmelhed — er det anafylaksi, og du skal ringe 112 med det samme.',
        },
      ]
    : [
        {
          question: 'What are insect bites and stings?',
          answer:
            'Insect bites and stings are the skin reaction to the mouthparts or sting of insects and other small creatures such as mosquitoes, flies, ants, bedbugs, wasps, bees, ticks and spiders. Some leave only saliva in the skin, while wasps and bees inject venom. Either can cause itching and swelling — and, rarely, a severe allergic reaction.',
        },
        {
          question: 'What do insect bites look like?',
          answer:
            'Insect bites typically appear as small, red, swollen bumps that can itch, hurt or both. Mosquito bites are small, round and itchy. Bedbug bites often appear in lines or clusters. A wasp or bee sting causes a sharp pain and rapid, tender swelling around the puncture site.',
        },
        {
          question: 'Who is affected by insect bites?',
          answer:
            'Anyone can be bitten or stung. Risk rises with time outdoors in woodland, tall grass and gardens, time near water in summer, and unprotected skin. People who have previously had a systemic allergic reaction to wasp or bee venom are at greatest risk of a severe reaction to the next sting and should be referred to an allergy specialist.',
        },
        {
          question: 'What should I remember about insect bites?',
          answer:
            'Most bites and stings are harmless and settle within a few days: clean with soap and water, cool with a cold compress, and use over-the-counter antihistamines or hydrocortisone cream for itching. Large swelling around the bite itself is uncomfortable but not dangerous. If you get symptoms away from the bite site — difficulty breathing, swelling of the face, lips, tongue or throat, widespread hives or dizziness — that is anaphylaxis, and you should call 112 immediately.',
        },
      ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Alt om insektbid og stik: behandling derhjemme, forskellen på en stor lokal reaktion og anafylaksi, flåtbid og borrelia, og hvordan du forebygger.'
      : 'Everything about insect bites and stings: home treatment, the difference between a large local reaction and anaphylaxis, tick bites and Lyme disease, and prevention.',
    image: '/blog-insect-sting.jpg',
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
              <span className="text-gray-900">{isDa ? 'Insektbid og stik' : 'Insect bites and stings'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Hudsygdomme' : 'Skin Conditions'}</span>
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
                src="/blog-insect-sting.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af en myg, der sidder på menneskehud og stikker.'
                    : 'Close-up of a mosquito resting on human skin and biting.'
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
                    ? 'Insektbid og stik er yderst almindelige, især i sommermånederne, og langt de fleste er harmløse.'
                    : 'Insect bites and stings are extremely common, especially in the summer months, and the great majority are harmless.'}
                </strong>{' '}
                {isDa
                  ? 'Det vigtigste er at kunne kende forskel på to ting, der ligner hinanden i dramatik, men ikke i fare: en stor, lokal hævelse omkring selve biddet, og en allergisk reaktion, der breder sig til resten af kroppen.'
                  : 'What matters most is being able to tell apart two things that look equally dramatic but are not equally dangerous: a large local swelling around the bite itself, and an allergic reaction that spreads to the rest of the body.'}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvordan forskellige bid og stik ser ud, hvordan du behandler dem derhjemme, hvornår et stik er en nødsituation, hvad du gør ved hvepse-, bi- og flåtbid, og hvordan du undgår at blive bidt.'
                  : 'In this article we explain what different bites and stings look like, how to treat them at home, when a sting is an emergency, what to do about wasp, bee and tick bites, and how to avoid being bitten in the first place.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvad er insektbid og stik?' : 'What are insect bites and stings?'}</h2>
              <p>
                {isDa
                  ? 'Insektbid og stik opstår, når insekters munddele eller brod bruges mod huden. Myg, fluer, myrer, væggelus, hvepse og bier er insekter, mens flåter og edderkopper er spindlere — men reaktionen i huden ligner. Nogle insektbid forsvinder af sig selv i løbet af få dage, mens andre kræver behandling.'
                  : 'Insect bites and stings occur when the mouthparts or sting of insects and other small creatures are used against the skin. Mosquitoes, flies, ants, bedbugs, wasps and bees are insects, while ticks and spiders are arachnids — but the reaction in the skin is similar. Some insect bites settle on their own within a few days, while others need treatment.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Hvorfor klør et myggestik?' : 'Why does a mosquito bite itch?'}</h3>
              <p>
                {isDa ? (
                  <>
                    Myggen sprøjter spyt ind i huden for at holde blodet flydende, mens den suger. Immunsystemet reagerer på proteinerne i
                    spyttet ved at frigive histamin, og det er histaminen — ikke selve stikket — der giver den røde, hævede og kløende
                    kvadel. Reaktionen minder om{' '}
                    <Link href={`/${lang}/blog/urticaria-hives`} className="text-primary underline hover:text-primary-900">
                      nældefeber
                    </Link>
                    , og derfor virker antihistamin mod kløen.
                  </>
                ) : (
                  <>
                    A mosquito injects saliva into the skin to keep the blood flowing while it feeds. The immune system reacts to the
                    proteins in that saliva by releasing histamine, and it is the histamine — not the puncture itself — that produces the
                    red, swollen, itchy weal. The reaction is closely related to{' '}
                    <Link href={`/${lang}/blog/urticaria-hives`} className="text-primary underline hover:text-primary-900">
                      urticaria (hives)
                    </Link>
                    , which is why antihistamines help with the itch.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvordan ser insektbid ud?' : 'What do insect bites look like?'}</h2>
              <p>{isDa ? 'Insektbid viser sig typisk som små, røde, hævede knopper på huden. De almindeligste typer i Danmark:' : 'Insect bites typically appear as small, red, swollen bumps on the skin. The most common types in Denmark:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Myggestik:' : 'Mosquito bites:'}</strong>{' '}
                  {isDa
                    ? 'Små, runde, kløende røde knopper, der kommer inden for minutter og forsvinder i løbet af et par dage.'
                    : 'Small, round, itchy red bumps that appear within minutes and fade over a couple of days.'}
                </li>
                <li>
                  <strong>{isDa ? 'Væggelusbid:' : 'Bedbug bites:'}</strong>{' '}
                  {isDa
                    ? 'Røde, kløende hævelser, ofte i linjer eller klynger på arme, skuldre og andre steder, der er utildækkede om natten.'
                    : 'Red, itchy welts, often in lines or clusters on the arms, shoulders and other areas left uncovered at night.'}
                </li>
                <li>
                  <strong>{isDa ? 'Myrebid:' : 'Ant bites:'}</strong>{' '}
                  {isDa
                    ? 'Danske myrer sprøjter myresyre og giver en kortvarig svie og en lille rød plet. De danner ikke den lille pusblære, man ser efter stik fra ildmyrer, som ikke findes i Danmark.'
                    : 'Danish ants spray formic acid and cause a brief sting and a small red mark. They do not produce the small pustule seen after fire ant stings, and fire ants do not occur in Denmark.'}
                </li>
                <li>
                  <strong>{isDa ? 'Hvepse- og bistik:' : 'Wasp and bee stings:'}</strong>{' '}
                  {isDa
                    ? 'En skarp, brændende smerte efterfulgt af en øm, varm hævelse omkring indstiksstedet inden for få minutter.'
                    : 'A sharp, burning pain followed within minutes by a tender, warm swelling around the puncture site.'}
                </li>
                <li>
                  <strong>{isDa ? 'Flåtbid:' : 'Tick bites:'}</strong>{' '}
                  {isDa
                    ? 'Gør sjældent ondt. Flåten sidder fast i huden, og der kan være en lille rød plet omkring den. Flåter kan overføre borreliabakterien, som er udbredt i Danmark.'
                    : 'Rarely painful. The tick stays attached to the skin and there may be a small red mark around it. Ticks can transmit the Borrelia bacterium, which is widespread in Denmark.'}
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er forskellen på en stor lokal reaktion og en allergisk reaktion?' : 'What is the difference between a large local reaction and an allergic reaction?'}
              </h2>
              <p>
                {isDa
                  ? 'Det er den vigtigste skelnen ved insektstik — og den, der afgør, om du kan blive hjemme eller skal ringe efter hjælp.'
                  : 'This is the single most useful distinction with insect stings — and the one that decides whether you can stay at home or need to call for help.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Stor lokal reaktion' : 'Large local reaction'}</h3>
              <p>
                {isDa
                  ? 'Hævelsen breder sig ud fra selve stikket og kan blive over 10 cm i diameter — nogle gange hæver en hel underarm eller en hel fod. Den er værst efter 24–48 timer og kan holde i op til en uge. Den ser alarmerende ud, men den er ikke farlig, og den betyder ikke, at du er ved at udvikle allergi. Behandlingen er kulde, elevation, håndkøbsantihistaminer og eventuelt hydrocortisoncreme.'
                  : 'The swelling spreads outwards from the sting itself and can exceed 10 cm across — sometimes a whole forearm or foot swells. It peaks after 24–48 hours and can last up to a week. It looks alarming, but it is not dangerous, and it does not mean you are developing an allergy. Treatment is cooling, elevation, over-the-counter antihistamines and, if needed, hydrocortisone cream.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Systemisk (allergisk) reaktion' : 'Systemic (allergic) reaction'}</h3>
              <p>
                {isDa
                  ? 'Her opstår symptomerne væk fra stikstedet: nældefeber andre steder på kroppen, hævelse af læber, ansigt eller svælg, hvæsende vejrtrækning, mavekramper, opkastning, svimmelhed eller besvimelse. Det er kroppens samlede reaktion på giften, og den kan udvikle sig til anafylaksi i løbet af minutter. Symptomer væk fra stikstedet er altid alvorlige, uanset hvor lille selve stikket ser ud.'
                  : 'Here the symptoms appear away from the sting site: hives elsewhere on the body, swelling of the lips, face or throat, wheezing, stomach cramps, vomiting, dizziness or fainting. This is the body reacting to the venom as a whole, and it can progress to anaphylaxis within minutes. Symptoms away from the sting site are always serious, however small the sting itself looks.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvornår er et insektstik en nødsituation?' : 'When is an insect sting an emergency?'}</h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Ring 112 med det samme ved et eller flere af disse tegn' : '⚠️ Call 112 immediately if you have any of these'}
                </h3>
                <p className="text-red-900">
                  {isDa
                    ? 'Det er anafylaksi, en livstruende allergisk reaktion:'
                    : 'This is anaphylaxis, a life-threatening allergic reaction:'}
                </p>
                <ul className="list-disc pl-6 space-y-3 my-4 text-red-900">
                  <li>{isDa ? 'Vejrtrækningsbesvær, hvæsen eller en snørende fornemmelse i halsen' : 'Difficulty breathing, wheezing or a tight feeling in the throat'}</li>
                  <li>{isDa ? 'Hævelse af ansigt, læber, tunge eller svælg' : 'Swelling of the face, lips, tongue or throat'}</li>
                  <li>{isDa ? 'Hæshed eller synkebesvær' : 'A hoarse voice or difficulty swallowing'}</li>
                  <li>{isDa ? 'Udbredt nældefeber eller kløe væk fra stikstedet' : 'Widespread hives or itching away from the sting site'}</li>
                  <li>{isDa ? 'Svimmelhed, besvimelsesfornemmelse eller kollaps' : 'Dizziness, faintness or collapse'}</li>
                  <li>{isDa ? 'Kvalme, opkastning eller mavekramper efter et stik' : 'Nausea, vomiting or stomach cramps after a sting'}</li>
                </ul>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Hvis du har fået ordineret en adrenalinpen (EpiPen eller Jext), skal du bruge den straks — i ydersiden af låret — og alligevel ringe 112, da symptomerne kan vende tilbage efter første dosis.'
                    : 'If you have been prescribed an adrenaline auto-injector (EpiPen or Jext), use it straight away — into the outer thigh — and still call 112, because symptoms can return after the first dose.'}
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvad gør du ved hvepse- og bistik?' : 'What should you do about wasp and bee stings?'}</h2>
              <p>
                {isDa
                  ? 'I Danmark er hvepse og bier den hyppigste årsag til alvorlige allergiske reaktioner på insektgift. En honningbi efterlader sin brod med giftblæren i huden, mens hvepse og humlebier kan stikke flere gange uden at efterlade noget.'
                  : 'In Denmark, wasps and bees are the dominant cause of severe allergic reactions to insect venom. A honeybee leaves its sting and venom sac behind in the skin, while wasps and bumblebees can sting repeatedly without leaving anything behind.'}
              </p>
              <p>
                {isDa
                  ? 'Sidder der en brod tilbage, skal den fjernes hurtigt — jo længere den sidder, jo mere gift pumpes ind. Skrab eller vip den ud med en fingernegl eller kanten af et kort. Klem ikke om giftblæren med fingrene eller en pincet, da du så presser resten af giften ind i huden. Vask derefter området, og køl med en kold kompres.'
                  : 'If a sting is left in the skin it should be removed promptly — the longer it stays, the more venom is pumped in. Scrape or flick it out with a fingernail or the edge of a card. Do not squeeze the venom sac with your fingers or with tweezers, as that pushes the remaining venom into the skin. Then wash the area and cool it with a cold compress.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Hvad hvis du har haft en alvorlig reaktion før?' : 'What if you have had a severe reaction before?'}</h3>
              <p>
                {isDa
                  ? 'Har du én gang haft en systemisk reaktion på et hvepse- eller bistik, bør du henvises til en allergolog. Blodprøver og hudtest kan afklare, hvilken gift du reagerer på, og allergivaccination mod insektgift (venom-immunterapi) er en veldokumenteret behandling, der hos langt de fleste fjerner risikoen for en ny alvorlig reaktion. Indtil da bør du have en adrenalinpen med dig og vide, hvordan den bruges.'
                  : 'If you have had a systemic reaction to a wasp or bee sting even once, you should be referred to an allergy specialist. Blood tests and skin testing can establish which venom you react to, and venom immunotherapy is a well-documented treatment that removes the risk of another severe reaction in the great majority of people. Until then you should carry an adrenaline auto-injector and know how to use it.'}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvordan fjerner du en flåt korrekt?' : 'How do you remove a tick correctly?'}</h2>
              <p>
                {isDa
                  ? 'Tag fat i flåten med en fin pincet eller en flåttang så tæt på huden som muligt, og træk lige ud med et jævnt træk. Drej ikke, og brug hverken ild, sprit, olie eller creme for at kvæle den — det får flåten til at afgive mere spyt og maveindhold i såret. Vask derefter huden. Jo hurtigere flåten kommer af, jo mindre er risikoen for smitte.'
                  : 'Grip the tick with fine tweezers or a tick remover as close to the skin as possible and pull straight out with steady pressure. Do not twist, and do not use fire, alcohol, oil or cream to smother it — that makes the tick regurgitate into the wound. Wash the skin afterwards. The sooner the tick comes off, the lower the risk of infection.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Hold øje med bidstedet i 3–30 dage efter. Det klassiske tidlige tegn på borreliose er{' '}
                    <em>erythema migrans</em>: en rød ring eller plet, der breder sig langsomt til mere end 5 cm, ofte med et lysere
                    midterparti, og som typisk hverken klør eller gør ondt. Det skal behandles med antibiotika — kontakt din læge. En rød,
                    varm, øm hævelse, der breder sig hurtigt over timer, er derimod snarere{' '}
                    <Link href={`/${lang}/blog/cellulitis`} className="text-primary underline hover:text-primary-900">
                      cellulitis
                    </Link>{' '}
                    og skal også ses samme dag.
                  </>
                ) : (
                  <>
                    Watch the bite site for 3–30 days afterwards. The classic early sign of Lyme disease is{' '}
                    <em>erythema migrans</em>: a red ring or patch that slowly spreads to more than 5 cm across, often with a paler
                    centre, and which usually neither itches nor hurts. It needs antibiotic treatment — contact your doctor. A red, hot,
                    tender swelling that spreads quickly over hours is more likely to be{' '}
                    <Link href={`/${lang}/blog/cellulitis`} className="text-primary underline hover:text-primary-900">
                      cellulitis
                    </Link>{' '}
                    and also needs to be seen the same day.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvordan behandler du et insektbid derhjemme?' : 'How do you treat an insect bite at home?'}</h2>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '🧼 Rens og køl' : '🧼 Clean and cool'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Vask området med sæbe og vand, og læg en kold, fugtig klud eller en ispose i et håndklæde på i 10–15 minutter. Kulden dæmper både hævelse og kløe.'
                      : 'Wash the area with soap and water and apply a cold, damp cloth or an ice pack wrapped in a towel for 10–15 minutes. Cold reduces both swelling and itch.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '💊 Håndkøbsantihistaminer' : '💊 Over-the-counter antihistamines'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Tabletter med antihistamin dæmper kløe og hævelse og er særligt nyttige ved mange bid på én gang eller ved en stor lokal reaktion.'
                      : 'Antihistamine tablets reduce itch and swelling and are particularly useful with many bites at once or with a large local reaction.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '🧴 Hydrocortisoncreme' : '🧴 Hydrocortisone cream'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'En mild binyrebarkhormoncreme i håndkøb kan bruges nogle få dage på kløende bid. Undgå den i ansigtet og på store hudområder uden lægens råd.'
                      : 'A mild over-the-counter steroid cream can be used for a few days on itchy bites. Avoid it on the face and over large areas without medical advice.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{isDa ? '🚫 Lad være med at klø' : '🚫 Do not scratch'}</p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kløen er den største risikofaktor for infektion, fordi neglene bringer bakterier ind i huden. Klip børns negle korte, og dæk biddet til, hvis de ikke kan lade det være.'
                      : 'Scratching is the biggest risk factor for infection, because fingernails carry bacteria into the skin. Keep a child\'s fingernails short and cover the bite if they cannot leave it alone.'}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">{isDa ? 'Hvornår er et bid blevet betændt?' : 'When has a bite become infected?'}</h3>
              <p>
                {isDa ? (
                  <>
                    Et almindeligt bid er mest rødt og hævet det første døgn og bliver derefter bedre. Bliver det i stedet mere rødt, varmt
                    og ømt efter 48 timer, kommer der pus, feber eller røde striber ud fra biddet, er der tale om en infektion —{' '}
                    <Link href={`/${lang}/blog/cellulitis`} className="text-primary underline hover:text-primary-900">
                      cellulitis
                    </Link>{' '}
                    eller{' '}
                    <Link href={`/${lang}/blog/impetigo`} className="text-primary underline hover:text-primary-900">
                      børnesår
                    </Link>{' '}
                    — og du skal kontakte læge samme dag.
                  </>
                ) : (
                  <>
                    An ordinary bite is at its most red and swollen in the first 24 hours and improves after that. If instead it becomes
                    redder, hotter and more tender after 48 hours, or develops pus, fever or red streaks running away from it, that is an
                    infection —{' '}
                    <Link href={`/${lang}/blog/cellulitis`} className="text-primary underline hover:text-primary-900">
                      cellulitis
                    </Link>{' '}
                    or{' '}
                    <Link href={`/${lang}/blog/impetigo`} className="text-primary underline hover:text-primary-900">
                      impetigo
                    </Link>{' '}
                    — and you should contact a doctor the same day.
                  </>
                )}
              </p>

              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">{isDa ? 'Hvordan undgår du insektbid?' : 'How can you avoid insect bites?'}</h2>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Insektmiddel med DEET eller icaridin:' : 'Repellent with DEET or icaridin:'}</strong>{' '}
                  {isDa
                    ? 'Begge virker mod myg og flåter. Icaridin (picaridin) lugter mindre og tåles bedre på børns hud, mens DEET i højere styrke holder længst.'
                    : 'Both work against mosquitoes and ticks. Icaridin (picaridin) smells less and is better tolerated on children\'s skin, while DEET at higher strength lasts longest.'}
                </li>
                <li>
                  <strong>{isDa ? 'Permethrinbehandlet tøj:' : 'Permethrin-treated clothing:'}</strong>{' '}
                  {isDa
                    ? 'Ved længere ophold i højt græs eller skov beskytter tøj imprægneret med permethrin mod flåter. Det påføres tøjet, ikke huden.'
                    : 'For longer periods in tall grass or woodland, clothing impregnated with permethrin protects against ticks. It is applied to the clothing, not to the skin.'}
                </li>
                <li>
                  <strong>{isDa ? 'Dæk huden til:' : 'Cover your skin:'}</strong>{' '}
                  {isDa
                    ? 'Lange ærmer, lange bukser stukket ned i sokkerne og lyst tøj hjælper — særligt ved solnedgang, hvor myggene er mest aktive.'
                    : 'Long sleeves, long trousers tucked into socks and light-coloured clothing all help — especially at dusk, when mosquitoes are most active.'}
                </li>
                <li>
                  <strong>{isDa ? 'Tjek for flåter:' : 'Check for ticks:'}</strong>{' '}
                  {isDa
                    ? 'Gå huden igennem samme aften efter ophold i naturen — også hårbund, armhuler, lyske og bag knæene, hvor flåter gerne sætter sig.'
                    : 'Go over the skin the same evening after being outdoors — including the scalp, armpits, groin and behind the knees, where ticks like to attach.'}
                </li>
                <li>
                  <strong>{isDa ? 'Undgå stærk parfume:' : 'Avoid strong perfume:'}</strong>{' '}
                  {isDa
                    ? 'Undgå stærk parfume, der kan tiltrække insekter, og hold søde drikkevarer tildækket udendørs — hvepse kravler ned i åbne dåser.'
                    : 'Avoid strong perfume, which can attract insects, and keep sweet drinks covered outdoors — wasps crawl down into open cans.'}
                </li>
                <li>
                  <strong>{isDa ? 'Slå ikke efter hvepse:' : 'Do not swat at wasps:'}</strong>{' '}
                  {isDa
                    ? 'Stå stille, eller gå roligt væk. Hurtige bevægelser får hvepse til at stikke.'
                    : 'Stand still or walk away calmly. Sudden movements are what make wasps sting.'}
                </li>
              </ul>

              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Hudreaktioner på insektbid har koden EK50.0 i ICD-11, den internationale sygdomsklassifikation fra WHO, med underkoder for papuløs urticaria, bulløs og persisterende reaktion. Allergiske hudreaktioner på gift fra hvepse og bier klassificeres særskilt som 4A85.31.'
                    : 'Cutaneous insect bite reactions are coded EK50.0 in ICD-11, the WHO International Classification of Diseases, with subcodes for papular urticaria and bullous and persistent reactions. Allergic skin reactions to wasp and bee venom are classified separately as 4A85.31.'}
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
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få hjælp til insektbid, der ikke falder til ro' : 'Get help for insect bites that are not settling'}</h3>
                <p className="mb-6">
                  {isDa
                    ? 'Hvis et bid eller stik bliver ved med at være rødt, hævet eller kløende i mere end et par dage, eller hvis det ser betændt ud, kan du få en vurdering fra en certificeret hudlæge via SKIND-appen. Ved tegn på en alvorlig allergisk reaktion — vejrtrækningsbesvær, hævelse af ansigt, læber, tunge eller svælg, svimmelhed eller besvimelsesfornemmelse — ring 112 med det samme. Vent ikke på en vurdering i appen.'
                    : 'For a bite or sting that stays red, swollen or itchy for more than a few days, or that looks like it may be infected, you can get an assessment from a certified dermatologist via the SKIND app. If you have any sign of a severe allergic reaction — difficulty breathing, swelling of the face, lips, tongue or throat, dizziness or faintness — call 112 immediately. Do not wait for an app assessment.'}
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
