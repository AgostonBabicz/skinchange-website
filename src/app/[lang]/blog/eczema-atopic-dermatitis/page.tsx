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
        title: 'Eksem (atopisk dermatitis): behandling | SKIND',
        description:
          'Eksem (atopisk dermatitis) giver kløende, tør og rød hud. Læs om årsager, udløsere, behandling med fugtighedscreme og steroid — og hvornår du skal søge læge.',
        keywords:
          'hvad er eksem, atopisk dermatitis, eksem symptomer, eksem behandling, kløende hud, hudlæge eksem, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/eczema-atopic-dermatitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/eczema-atopic-dermatitis',
            da: 'https://www.skinchange.dk/da/blog/eczema-atopic-dermatitis',
            en: 'https://www.skinchange.dk/en/blog/eczema-atopic-dermatitis',
          },
        },
      }
    : {
        title: 'Eczema (atopic dermatitis): treatment | SKIND',
        description:
          'Eczema (atopic dermatitis) causes itchy, dry, red skin. Learn the causes, the triggers, treatment with emollients and steroids, and when to seek medical help.',
        keywords:
          'what is eczema, atopic dermatitis, eczema symptoms, eczema treatment, itchy skin, dermatologist eczema, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/eczema-atopic-dermatitis',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/eczema-atopic-dermatitis',
            da: 'https://www.skinchange.dk/da/blog/eczema-atopic-dermatitis',
            en: 'https://www.skinchange.dk/en/blog/eczema-atopic-dermatitis',
          },
        },
      };
}

export default function EczemaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling'
      : 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til eksem og atopisk dermatitis: hvad det er, årsager, symptomer og behandlingsmuligheder.'
      : 'Complete guide to eczema and atopic dermatitis: what it is, causes, symptoms and treatment options.',
    image: '/blog-eczema.jpg',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
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
            name: 'Kan eksem forsvinde helt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mange børn vokser fra eksem i løbet af ungdomsårene, men for andre forbliver det en kronisk tilstand, der kræver løbende håndtering. Den rette behandling kan dog give god, langvarig kontrol over eksemet.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er eksem det samme som tør hud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej. Tør hud kan forekomme hos alle og skyldes manglende fugt. Eksem er derimod en inflammatorisk tilstand med immunologisk baggrund, der kræver medicinsk behandling ud over blot at fugte huden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, hvis kløen forstyrrer din søvn, huden begynder at væske eller blive inficeret, håndkøbsmidler ikke hjælper, eller hvis eksem påvirker dit daglige liv markant. Ved pludselig forværring med små, smertefulde blærer og feber skal du søge læge samme dag.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Can eczema disappear completely?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Many children grow out of eczema during their teenage years, but for others it remains a chronic condition requiring ongoing management. With the right treatment, however, eczema can be brought under good, long-term control.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is eczema the same as dry skin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Dry skin can occur in anyone and is caused by a lack of moisture. Eczema, however, is an inflammatory condition with an immunological basis that requires medical treatment beyond simply moisturising.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist if itching is disturbing your sleep, the skin starts to weep or become infected, over-the-counter remedies are not helping, or if eczema is significantly affecting your daily life. If eczema suddenly worsens with small, painful blisters and fever, seek medical care the same day.',
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
                {isDa ? 'Hvad er Eksem?' : 'What is Eczema?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '12. marts 2026' : 'March 12, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling'
                : 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-eczema.jpg"
                alt={
                  isDa
                    ? 'Nærbillede af tør, rød og skællende hud i en albuebøjning ved atopisk eksem.'
                    : 'Close-up of dry, red, flaking skin in the crook of an elbow affected by atopic eczema.'
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
                    <strong>Eksem er en af de mest udbredte kroniske hudlidelser</strong>, der
                    påvirker op mod 20% af børn og 3% af voksne på verdensplan. Den vedvarende kløe
                    og irritation kan have stor indflydelse på søvn, livskvalitet og daglig trivsel.
                  </>
                ) : (
                  <>
                    <strong>Eczema is one of the most common chronic skin conditions</strong>,
                    affecting up to 20% of children and 3% of adults worldwide. The persistent itch
                    and irritation can significantly impact sleep, quality of life and daily
                    well-being.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist hvad eksem er, hvad der forårsager det, hvordan det ser ud, og hvad du kan gøre ved det.'
                  : 'In this article we explain exactly what eczema is, what causes it, what it looks like, and what you can do about it.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is eczema */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er eksem?' : 'What is eczema?'}
              </h2>
              <p>
                {isDa
                  ? 'Atopisk dermatitis – populært kaldet eksem – er en kronisk, inflammatorisk hudlidelse, der får huden til at blive rød, kløende og undertiden hævet. "Atopisk" refererer til en arvelig tendens til allergiske reaktioner, og tilstanden hænger tæt sammen med astma og høfeber i det, der kaldes den atopiske triade.'
                  : 'Atopic dermatitis — commonly known as eczema — is a chronic, inflammatory skin condition that makes the skin red, itchy and sometimes swollen. "Atopic" refers to a hereditary tendency towards allergic reactions, and the condition is closely linked to asthma and hay fever in what is called the atopic triad.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Eksem er en fællesbetegnelse for flere inflammatoriske hudlidelser. Atopisk dermatitis er den hyppigste form, men et kløende udslæt kan også skyldes{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-primary underline hover:text-primary-900">
                      kontakteksem
                    </Link>
                    , der udløses af noget, huden har rørt ved, eller{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      seboroisk eksem
                    </Link>
                    , som rammer fedtede områder som hovedbund, øjenbryn og næsefløje.
                  </>
                ) : (
                  <>
                    Eczema is an umbrella term for several inflammatory skin conditions. Atopic dermatitis is the most common form, but an itchy rash can also be caused by{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-primary underline hover:text-primary-900">
                      contact dermatitis
                    </Link>
                    , triggered by something the skin has touched, or{' '}
                    <Link href={`/${lang}/blog/seborrheic-dermatitis`} className="text-primary underline hover:text-primary-900">
                      seborrhoeic dermatitis
                    </Link>
                    , which affects greasy areas such as the scalp, eyebrows and sides of the nose.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'Eksem er ikke smitsomt. Du kan hverken smitte andre eller få det fra en anden person. Det er en indre tilstand drevet af immunsystemet og genetik.'
                  : 'Eczema is not contagious. You cannot spread it to others or catch it from another person. It is an internal condition driven by the immune system and genetics.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser eksem ud?' : 'What does eczema look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Eksem kan se meget forskelligt ud afhængigt af personens alder og hudtype:'
                  : 'Eczema can look very different depending on a person\'s age and skin type:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Tørre, skællende pletter:' : 'Dry, scaly patches:'}</strong>{' '}
                  {isDa
                    ? 'Typisk på halsen, ansigtet og omkring øjnene hos voksne. Huden kan se ru og mat ud.'
                    : 'Typically on the neck, face and around the eyes in adults. The skin may look rough and dull.'}
                </li>
                <li>
                  <strong>{isDa ? 'Rødme og hævelse:' : 'Redness and swelling:'}</strong>{' '}
                  {isDa
                    ? 'Betændte områder ser røde ud og kan føles varme. Hos mørkere hudtoner kan rødmen vise sig som en mørkere misfarvning.'
                    : 'Inflamed areas look red and may feel warm. In darker skin tones, redness may appear as a darker discolouration.'}
                </li>
                <li>
                  <strong>{isDa ? 'Intens kløe:' : 'Intense itching:'}</strong>{' '}
                  {isDa
                    ? 'Kløen er ofte det mest generende symptom og kan forværres om natten. At klø giver midlertidig lettelse, men forværrer huden og kan føre til infektion.'
                    : 'Itching is often the most troublesome symptom and can worsen at night. Scratching provides temporary relief but worsens the skin and can lead to infection.'}
                </li>
                <li>
                  <strong>{isDa ? 'Rå, sprukken eller blødende hud:' : 'Raw, cracked or bleeding skin:'}</strong>{' '}
                  {isDa
                    ? 'Gentagen kløe kan føre til åbne sår og sprækker i huden, der øger risikoen for bakterielle infektioner.'
                    : 'Repeated scratching can lead to open sores and cracks in the skin, increasing the risk of bacterial infections.'}
                </li>
                <li>
                  <strong>{isDa ? 'Lichenificering:' : 'Lichenification:'}</strong>{' '}
                  {isDa
                    ? 'Ved langvarig kløe og skraben kan huden blive tykkere og læderagtig – et tegn på kronisk eksem.'
                    : 'With long-term itching and scratching, the skin can become thicker and leathery — a sign of chronic eczema.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Hos voksne sidder eksem hyppigst på indersiden af albuerne og i knæhaserne samt på håndled, nakke og i ansigtet. Hos spædbørn og småbørn ses det ofte i ansigtet og på kroppen.'
                  : 'In adults, eczema most commonly affects the insides of the elbows and the backs of the knees, along with the wrists, neck and face. In infants and young children, it often appears on the face and torso.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Placeringen er et vigtigt fingerpeg: atopisk eksem sidder i bøjefurerne, mens skællende plaques på ydersiden af albuer og knæ oftere peger på{' '}
                    <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                      psoriasis
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Distribution is an important clue: atopic eczema sits in the skin creases, whereas scaly plaques on the outer points of the elbows and knees more often point to{' '}
                    <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                      psoriasis
                    </Link>
                    .
                  </>
                )}
              </p>

              {/* Red flags */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa ? (
                    <>
                      Søg læge samme dag, hvis eksem pludselig forværres med grupper af små, smertefulde, som udstansede sår eller blærer — især ved feber eller påvirket almentilstand. Det kan være eczema herpeticum, en{' '}
                      <Link href={`/${lang}/blog/herpes-simplex-virus`} className="text-primary underline hover:text-primary-900">
                        herpesinfektion
                      </Link>{' '}
                      i eksemhud, der kræver akut antiviral behandling.
                    </>
                  ) : (
                    <>
                      Seek same-day medical care if eczema suddenly worsens with clusters of small, painful, punched-out sores or blisters, especially with fever or feeling unwell. This can be eczema herpeticum — a{' '}
                      <Link href={`/${lang}/blog/herpes-simplex-virus`} className="text-primary underline hover:text-primary-900">
                        herpes infection
                      </Link>{' '}
                      of eczematous skin that needs urgent antiviral treatment.
                    </>
                  )}
                </p>
              </div>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår eksem?' : 'Why does eczema happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag til eksem er ikke fuldt ud forstået, men forskning peger på en kombination af faktorer:'
                  : 'The exact cause of eczema is not fully understood, but research points to a combination of factors:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad sker der med hudbarrieren?' : 'What happens to the skin barrier?'}
              </h3>
              <p>
                {isDa
                  ? 'Den bliver utæt. Hos mennesker med eksem er hudbarrieren svækket, hvilket gør det lettere for irritanter og allergener at trænge ind og for fugt at fordampe ud. En mutation i genet for filaggrin – et protein, der er essentielt for en sund hudbarriere – er en hyppig årsag.'
                  : 'It becomes leaky. In people with eczema, the skin barrier is impaired, making it easier for irritants and allergens to penetrate and for moisture to evaporate out. A mutation in the gene for filaggrin — a protein essential for a healthy skin barrier — is a common cause.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvorfor overreagerer immunsystemet?' : 'Why does the immune system overreact?'}
              </h3>
              <p>
                {isDa
                  ? 'Fordi det er indstillet på en allergisk type af inflammation. Immunsystemet overreagerer på tilsyneladende harmløse stoffer som husstøvmider, hudafskalning og allergener fra kæledyr eller visse fødevarer, hvilket udløser en inflammatorisk reaktion i huden. Det er en lignende mekanisme som ved andre atopiske tilstande som astma og allergi.'
                  : 'Because it is tuned towards an allergic type of inflammation. The immune system overreacts to seemingly harmless substances such as house dust mites, pet dander or certain foods, triggering an inflammatory response in the skin. This is a similar mechanism to other atopic conditions such as asthma and allergies.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Er eksem arveligt?' : 'Is eczema hereditary?'}
              </h3>
              <p>
                {isDa
                  ? 'I høj grad. Eksem løber i familier. Hvis en eller begge forældre har eksem, astma eller høfeber, er risikoen for, at barnet udvikler atopisk dermatitis, markant forhøjet.'
                  : 'To a large extent. Eczema runs in families. If one or both parents have eczema, asthma or hay fever, the risk of the child developing atopic dermatitis is significantly increased.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvad udløser et udbrud?' : 'What triggers a flare?'}
              </h3>
              <p>
                {isDa
                  ? 'Selv med genetisk disposition kræver eksem oftest en udløser for at blusse op. Almindelige udløsere inkluderer:'
                  : 'Even with a genetic predisposition, eczema usually requires a trigger to flare up. Common triggers include:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>{isDa ? 'Stress og psykisk belastning' : 'Stress and psychological strain'}</li>
                <li>
                  {isDa
                    ? 'Vejrforandringer – særligt koldt, tørt vejr'
                    : 'Weather changes — especially cold, dry weather'}
                </li>
                <li>
                  {isDa
                    ? 'Hårde sæber, parfumer og rengøringsmidler'
                    : 'Harsh soaps, fragrances and cleaning products'}
                </li>
                <li>
                  {isDa
                    ? 'Visse fødevarer hos et mindretal — oftest komælk, æg, jordnødder eller hvede hos små børn med påvist allergi. Udelad aldrig fødevarer uden allergiudredning og lægelig rådgivning; unødvendig eliminationsdiæt kan give ernæringsmangel og kan øge risikoen for reel fødevareallergi.'
                    : 'Certain foods, in a minority of patients — most often cow’s milk, egg, peanut or wheat in young children with proven allergy. Never eliminate foods without allergy testing and medical advice; unnecessary elimination can cause nutritional deficiency and may increase the risk of true food allergy.'}
                </li>
                <li>{isDa ? 'Syntetiske stoffer og uld' : 'Synthetic fabrics and wool'}</li>
                <li>
                  {isDa
                    ? 'Sved og overophedning'
                    : 'Sweat and overheating'}
                </li>
              </ul>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får eksem?' : 'Who gets eczema?'}
              </h2>
              <p>
                {isDa
                  ? 'Alle kan udvikle eksem, men det er mest udbredt hos:'
                  : 'Anyone can develop eczema, but it is most common in:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Spædbørn og børn:' : 'Infants and children:'}</strong>{' '}
                  {isDa
                    ? 'Op mod 20% af alle børn har atopisk dermatitis. Tilstanden opstår ofte i det første leveår og forbedres for mange i løbet af barndommen eller teenageårene.'
                    : 'Up to 20% of all children have atopic dermatitis. The condition often develops in the first year of life and improves for many during childhood or teenage years.'}
                </li>
                <li>
                  <strong>{isDa ? 'Voksne med familiehistorie:' : 'Adults with family history:'}</strong>{' '}
                  {isDa
                    ? 'Ca. 3% af voksne lever med kronisk eksem, og mange oplever, at tilstanden kommer tilbage, selvom den blev bedre i barndommen.'
                    : 'Around 3% of adults live with chronic eczema, and many find the condition returns even if it improved in childhood.'}
                </li>
                <li>
                  <strong>{isDa ? 'Personer med atopisk baggrund:' : 'People with an atopic background:'}</strong>{' '}
                  {isDa
                    ? 'Har du eller din familie allergi, astma eller høfeber, er risikoen for eksem højere.'
                    : 'If you or your family have allergies, asthma or hay fever, the risk of eczema is higher.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved eksem?' : 'What can you do about eczema?'}
              </h2>
              <p>
                {isDa
                  ? 'Eksem kan ikke helbredes, men det kan kontrolleres effektivt med den rette behandling og hudplejerutine:'
                  : 'Eczema cannot be cured, but it can be effectively controlled with the right treatment and skincare routine:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💧 Fugtighedscreme (vigtigste daglige behandling)' : '💧 Moisturiser (most important daily treatment)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Påfør en rig, parfumefri fugtighedscreme eller emollient mindst to gange dagligt – også uden for udbrud. Det styrker hudbarrieren og reducerer hyppighed og sværhedsgrad af udbrud.'
                      : 'Apply a rich, fragrance-free moisturiser or emollient at least twice daily — even between flares. This strengthens the skin barrier and reduces the frequency and severity of flares.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🩺 Topiske kortikosteroider' : '🩺 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kortikosteroidcremer (binyrebarkhormon) dæmper inflammation og kløe under udbrud. De fås i forskellig styrke — fra mild til meget stærk. I Danmark kan mild hydrokortison 1% købes i håndkøb på apoteket, mens stærkere steroider kræver recept fra din egen læge eller en hudlæge.'
                      : 'Corticosteroid creams (cortisone) suppress inflammation and itching during flares. They come in varying strengths — from mild to very potent. In Denmark, mild hydrocortisone 1% is available over the counter at the pharmacy, while stronger steroids require a prescription from your GP or a dermatologist.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧪 Immunmodulatorer (calcineurin-hæmmere)' : '🧪 Immunomodulators (calcineurin inhibitors)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer som tacrolimus og pimecrolimus er et steroidfrit alternativ til følsomme områder som ansigt, øjenomgivelser og hals. De giver ikke den hudfortynding, langvarig steroidbehandling kan medføre, men de svier eller brænder ofte de første dage, og de behandlede områder kræver god solbeskyttelse.'
                      : 'Creams such as tacrolimus and pimecrolimus are a steroid-free alternative for sensitive areas like the face, around the eyes and the neck. They avoid the skin thinning that long-term steroid use can cause, but they commonly sting or burn for the first few days, and treated areas need good sun protection.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Systemisk behandling (svært eksem)' : '💊 Systemic treatment (severe eczema)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved svært eller udbredt eksem kan en hudlæge ordinere biologisk behandling som dupilumab, tralokinumab eller lebrikizumab, orale JAK-hæmmere som upadacitinib eller abrocitinib, ældre orale immunsuppressiva eller lysbehandling med smalspektret UVB.'
                      : 'For severe or widespread eczema, a dermatologist may prescribe biological treatment such as dupilumab, tralokinumab or lebrikizumab, oral JAK inhibitors such as upadacitinib or abrocitinib, older oral immunosuppressants, or narrowband UVB phototherapy.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🚫 Undgå udløsere' : '🚫 Avoid triggers'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Identificér og undgå dine personlige udløsere. Brug parfumefrie produkter og blødt tøj, og tag hurtige, lunkne brusebade frem for lange varme bade.'
                      : 'Identify and avoid your personal triggers. Use fragrance-free products and soft clothing, and take short, lukewarm showers rather than long hot baths.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? "Atopisk eksem er klassificeret som EA80 i WHO's internationale sygdomsklassifikation (ICD-11). Det er karakteriseret som en kronisk, inflammatorisk tilstand med kløende, rød og tør hud. Behandlingen omfatter fugtighedscreme, topiske steroider og immunmodulatorer."
                    : "Atopic eczema is classified as EA80 in the WHO's International Classification of Diseases (ICD-11). It is characterised as a chronic, inflammatory condition with itchy, red and dry skin. Treatment includes moisturisers, topical steroids and immunomodulators."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Kan eksem forsvinde helt?' : 'Can eczema disappear completely?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Mange børn vokser fra eksem i løbet af ungdomsårene, men for andre forbliver det en kronisk tilstand, der kræver løbende håndtering. Den rette behandling kan dog give god, langvarig kontrol over eksemet.'
                      : 'Many children grow out of eczema during their teenage years, but for others it remains a chronic condition requiring ongoing management. With the right treatment, however, eczema can be brought under good, long-term control.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa
                      ? 'Er eksem det samme som tør hud?'
                      : 'Is eczema the same as dry skin?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej. Tør hud kan forekomme hos alle og skyldes manglende fugt. Eksem er derimod en inflammatorisk tilstand med immunologisk baggrund, der kræver medicinsk behandling ud over blot at fugte huden.'
                      : 'No. Dry skin can occur in anyone and is caused by a lack of moisture. Eczema, however, is an inflammatory condition with an immunological basis that requires medical treatment beyond simply moisturising.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa
                      ? 'Hvornår skal jeg kontakte en hudlæge?'
                      : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis kløen forstyrrer din søvn, huden begynder at væske eller blive inficeret, håndkøbsmidler ikke hjælper, eller hvis eksem påvirker dit daglige liv markant. Ved pludselig forværring med små, smertefulde blærer og feber skal du søge læge samme dag.'
                      : 'Contact a dermatologist if itching is disturbing your sleep, the skin starts to weep or become infected, over-the-counter remedies are not helping, or if eczema is significantly affecting your daily life. If eczema suddenly worsens with small, painful blisters and fever, seek medical care the same day.'}
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
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
