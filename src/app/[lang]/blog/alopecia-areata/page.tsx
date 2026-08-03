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
        title: 'Alopecia areata: symptomer og behandling | SKIND',
        description:
          'Alopecia areata er pletvis hårtab, hvor immunsystemet angriber hårsækkene. Læs om årsager, hvem der rammes, behandling med JAK-hæmmere og prognosen.',
        keywords:
          'alopecia areata, hårtab, autoimmun, hårsække, skaldethed, alopecia totalis, JAK-hæmmere, SKIND',
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
        title: 'Alopecia areata: symptoms and treatment | SKIND',
        description:
          'Alopecia areata is patchy hair loss caused by the immune system attacking hair follicles. Learn the causes, who it affects, treatments and the outlook.',
        keywords:
          'alopecia areata, hair loss, autoimmune, hair follicles, baldness, alopecia totalis, JAK inhibitors, SKIND',
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
            name: 'Er alopecia areata smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, alopecia areata er absolut ikke smitsomt. Det er en autoimmun tilstand — din krop angriber sine egne hårsække. Du kan ikke smitte andre, og andre kan ikke smitte dig.',
            },
          },
          {
            '@type': 'Question',
            name: 'Vokser håret tilbage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Det afhænger af sværhedsgraden. Ved begrænset alopecia areata vokser håret ofte tilbage spontant inden for et år. Ved mere udbredt alopecia areata, alopecia totalis eller alopecia universalis er spontan hårvækst mindre sandsynlig, men behandling kan hjælpe.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg kontakte en hudlæge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kontakt en hudlæge, så snart du opdager uforklarligt hårtab — særligt hvis det opstår pludseligt, i runde pletter, eller hvis du har familiehistorie med alopecia eller andre autoimmune sygdomme. Er hovedbunden samtidig rød, skællende eller øm, bør du søge vurdering uden at vente.',
            },
          },
          {
            '@type': 'Question',
            name: 'Påvirker alopecia areata neglene?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, op til 50% af personer med alopecia areata oplever negleforandringer. Dette kan inkludere små buler (pitting), ru overflade, langsgående riller eller hvide pletter på neglene.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'Is alopecia areata contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, alopecia areata is absolutely not contagious. It is an autoimmune condition — your body attacks its own hair follicles. You cannot infect others, and others cannot infect you.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does hair grow back?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on the severity. With limited alopecia areata, hair often grows back spontaneously within a year. With more widespread alopecia areata, alopecia totalis or alopecia universalis, spontaneous regrowth is less likely, but treatment can help.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I contact a dermatologist?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Contact a dermatologist as soon as you notice unexplained hair loss — especially if it occurs suddenly, in round patches, or if you have a family history of alopecia or other autoimmune diseases. If the scalp is also red, scaly or tender, seek assessment without delay.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does alopecia areata affect the nails?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, up to 50% of people with alopecia areata experience nail changes. These can include small dents (pitting), a rough surface, longitudinal ridges or white spots on the nails.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Alopecia Areata?' : 'What is Alopecia Areata?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '3. april 2026' : 'April 3, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {isDa
                ? 'Hvad er Alopecia Areata? Årsager, Symptomer og Behandling'
                : 'What is Alopecia Areata? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-alopecia-areata.jpg"
                alt={
                  isDa
                    ? 'Rund, glat plet uden hår i hovedbunden — det typiske udseende ved alopecia areata.'
                    : 'A round, smooth bald patch on the scalp — the typical appearance of alopecia areata.'
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
                    <strong>Alopecia areata er en autoimmun hudlidelse</strong>, der rammer millioner af mennesker verden over og kan opstå i alle aldre. Når kroppens eget immunsystem fejlagtigt angriber hårsækkene, kan resultatet være pludseligt, uforklarligt hårtab — ofte i veldefinerede runde pletter.
                  </>
                ) : (
                  <>
                    <strong>Alopecia areata is an autoimmune skin condition</strong> that affects millions of people worldwide and can occur at any age. When the body&apos;s own immune system mistakenly attacks the hair follicles, the result can be sudden, unexplained hair loss — often in well-defined round patches.
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
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
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
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser alopecia areata ud?' : 'What does alopecia areata look like?'}
              </h2>
              <p>{isDa ? 'Alopecia areata viser sig typisk på følgende måder:' : 'Alopecia areata typically presents in the following ways:'}</p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Runde, glatte hårpletter:' : 'Round, smooth patches of hair loss:'}</strong>{' '}
                  {isDa ? (
                    <>
                      Det mest karakteristiske tegn er veldefinerede, runde eller ovale områder med fuldstændigt hårtab. Disse pletter er som regel glatte og skælløse — i modsætning til fx{' '}
                      <Link href={`/${lang}/blog/tinea-infections-ringworm`} className="text-primary underline hover:text-primary-900">
                        ringorm
                      </Link>{' '}
                      eller{' '}
                      <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                        psoriasis
                      </Link>{' '}
                      i hovedbunden, hvor huden er skællende.
                    </>
                  ) : (
                    <>
                      The most characteristic sign is well-defined, round or oval areas of complete hair loss. These patches are usually smooth and without scaling — unlike{' '}
                      <Link href={`/${lang}/blog/tinea-infections-ringworm`} className="text-primary underline hover:text-primary-900">
                        ringworm
                      </Link>{' '}
                      or scalp{' '}
                      <Link href={`/${lang}/blog/psoriasis`} className="text-primary underline hover:text-primary-900">
                        psoriasis
                      </Link>
                      , where the skin is scaly.
                    </>
                  )}
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

              {/* Red flags */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Alopecia areata efterlader glat, normal hud — hårsækkene er intakte, og håret kan vokse ud igen. Er hovedbunden derimod rød, skællende, øm eller brændende, eller kan du ikke længere se de små åbninger, hvor hårene kommer ud, kan der være tale om ardannende (cikatriciel) alopeci. Her ødelægges hårsækkene permanent, og det tabte hår kommer ikke igen. Få det vurderet af en hudlæge uden at vente — behandling kan standse yderligere tab, men ikke genskabe det, der allerede er gået tabt.'
                    : 'Alopecia areata leaves smooth, normal-looking skin — the follicles are intact and hair can regrow. If the scalp is instead red, scaly, tender or burning, or if you can no longer see the small openings where hairs emerge, it may be scarring (cicatricial) alopecia. In scarring alopecia the follicles are permanently destroyed and lost hair does not return. Have it assessed by a dermatologist without delay — treatment can stop further loss, but cannot restore what is already gone.'}
                </p>
              </div>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår alopecia areata?' : 'Why does alopecia areata happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Alopecia areata skyldes en autoimmun reaktion, hvor immunsystemets T-celler fejlagtigt genkender hårsækkene som fremmede og angriber dem. Hårsækkene går i en hvilefase og stopper midlertidigt med at producere hår.'
                  : 'Alopecia areata is caused by an autoimmune reaction in which the immune system\'s T-cells mistakenly identify hair follicles as foreign and attack them. The hair follicles enter a resting phase and temporarily stop producing hair.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvor stor en rolle spiller generne?' : 'How much of a role do genes play?'}
              </h3>
              <p>
                {isDa
                  ? 'En vigtig rolle. Op til 20% af personer med alopecia areata har et eller flere familiemedlemmer med samme tilstand eller en anden autoimmun sygdom.'
                  : 'An important one. Up to 20% of people with alopecia areata have one or more family members with the same condition or another autoimmune disease.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Kan stress udløse alopecia areata?' : 'Can stress trigger alopecia areata?'}
              </h3>
              <p>
                {isDa
                  ? 'Ja, det kan bidrage. Alvorlig fysisk eller psykisk stress kan udløse eller forværre alopecia areata. Stress påvirker immunsystemet og kan bidrage til den autoimmune reaktion mod hårsækkene.'
                  : 'Yes, it can contribute. Severe physical or psychological stress can trigger or worsen alopecia areata. Stress affects the immune system and can contribute to the autoimmune reaction against hair follicles.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvilke andre sygdomme hænger det sammen med?' : 'Which other conditions is it linked to?'}
              </h3>
              <p>
                {isDa ? (
                  <>
                    Andre autoimmune tilstande. Alopecia areata er associeret med skjoldbruskkirtelsygdomme (Hashimotos, Graves), type 1-diabetes,{' '}
                    <Link href={`/${lang}/blog/vitiligo`} className="text-primary underline hover:text-primary-900">
                      vitiligo
                    </Link>{' '}
                    og reumatoid artritis (leddegigt). Personer med disse tilstande har en højere risiko.
                  </>
                ) : (
                  <>
                    Other autoimmune conditions. Alopecia areata is associated with thyroid diseases (Hashimoto&apos;s, Graves&apos;), type 1 diabetes,{' '}
                    <Link href={`/${lang}/blog/vitiligo`} className="text-primary underline hover:text-primary-900">
                      vitiligo
                    </Link>{' '}
                    and rheumatoid arthritis. People with these conditions have a higher risk.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'På grund af den tætte sammenhæng med skjoldbruskkirtlen er en blodprøve for stofskiftet (TSH og om nødvendigt thyreoidea-antistoffer) standard, når diagnosen alopecia areata stilles. Yderligere prøver tages kun, hvis symptomerne peger på det.'
                  : 'Because of the close link with the thyroid, a blood test of thyroid function (TSH, and thyroid antibodies where relevant) is standard when a diagnosis of alopecia areata is made. Further tests are only taken if symptoms point to them.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
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
                    ? 'Tilstanden debuterer oftest før 30-årsalderen. Omkring halvdelen af alle tilfælde begynder før 20-årsalderen, og der ses et mindre yderligere toppunkt mellem 25 og 35 år.'
                    : 'The condition most often begins before the age of 30. About half of all cases start before the age of 20, with a smaller additional peak between 25 and 35.'}
                </li>
                <li>
                  <strong>{isDa ? 'Forekomst:' : 'Prevalence:'}</strong>{' '}
                  {isDa
                    ? 'Ca. 2% af befolkningen vil udvikle alopecia areata på et tidspunkt i livet. Alene i USA lever omkring 6,7 millioner mennesker med tilstanden, og på verdensplan anslås tallet til omkring 160 millioner.'
                    : 'Approximately 2% of the population will develop alopecia areata at some point in their lives. In the USA alone around 6.7 million people live with the condition, and worldwide the figure is estimated at about 160 million.'}
                </li>
                <li>
                  <strong>{isDa ? 'Familiehistorie:' : 'Family history:'}</strong>{' '}
                  {isDa
                    ? 'Op til 20% har en direkte familiehistorie med alopecia areata eller andre autoimmune sygdomme.'
                    : 'Up to 20% have a direct family history of alopecia areata or other autoimmune diseases.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved alopecia areata?' : 'What can you do about alopecia areata?'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom der ikke findes en universel kur, kan flere behandlinger hjælpe med at fremme hårvækst og bremse yderligere hårtab. Behandlingen afhænger af sværhedsgrad, alder og individuelle faktorer.'
                  : 'Although there is no universal cure, several treatments can help promote hair growth and slow further hair loss. Treatment depends on severity, age and individual factors.'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Topiske kortikosteroider' : '💊 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Creme eller lotion påført direkte på de berørte områder. Førstevalgsbehandling for mild til moderat alopecia areata.'
                      : 'Cream or lotion applied directly to the affected areas. First-line treatment for mild to moderate alopecia areata.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💉 Intralesionelle steroidinjektioner' : '💉 Intralesional steroid injections'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Steroid injiceres direkte i de skaldede pletter. Effektiv for voksne med begrænset hårtab og foretrukket for dem, der ikke responderer på topikale behandlinger.'
                      : 'Steroid is injected directly into the bald patches. Effective for adults with limited hair loss and preferred for those who do not respond to topical treatments.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🧪 Immunterapi' : '🧪 Immunotherapy'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kemikalier som diphencyprone (DPCP) eller squarinsyre påføres huden for at fremkalde en allergisk reaktion, der kan omdirigere immunsystemet og stimulere hårvækst. Anvendes ved sværere tilfælde.'
                      : 'Chemicals such as diphencyprone (DPCP) or squaric acid are applied to the skin to induce an allergic reaction that may redirect the immune system and stimulate hair growth. Used in more severe cases.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 JAK-hæmmere (orale lægemidler)' : '💊 JAK inhibitors (oral medications)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Nyere lægemidler som baricitinib og ritlecitinib (godkendt af EMA og FDA) er et stort fremskridt i behandlingen. De er godkendt til moderat til svær alopecia areata hos voksne — ritlecitinib dog fra 12-årsalderen. Behandlingen kræver løbende kontrol for infektioner samt blodprøver for blodtal og blodfedt.'
                      : 'Newer drugs such as baricitinib and ritlecitinib (approved by the EMA and FDA) are a major advance in treatment. They are approved for moderate-to-severe alopecia areata in adults — ritlecitinib from the age of 12. Treatment requires ongoing monitoring for infection, together with blood counts and lipid tests.'}
                  </p>
                </div>
              </div>

              <p>
                {isDa
                  ? 'Det er vigtigt at vide, at hårvækst kan være langsom og kræver tålmodighed. I nogle tilfælde vokser håret tilbage spontant — særligt ved begrænset alopecia areata. Ved sværere former kan behandlingen være langvarig.'
                  : 'It is important to know that hair regrowth can be slow and requires patience. In some cases, hair grows back spontaneously — especially with limited alopecia areata. With more severe forms, treatment may need to be long-term.'}
              </p>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Alopecia areata er klassificeret som ED70.2 i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden er karakteriseret ved pludseligt, ikke-ardannende hårtab som følge af en autoimmun reaktion mod hårsækkene.'
                    : "Alopecia areata is classified as ED70.2 in the WHO's International Classification of Diseases (ICD-11). It is characterised by sudden, non-scarring hair loss due to an autoimmune reaction against the hair follicles."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Er alopecia areata smitsomt?' : 'Is alopecia areata contagious?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Nej, alopecia areata er absolut ikke smitsomt. Det er en autoimmun tilstand — din krop angriber sine egne hårsække. Du kan ikke smitte andre, og andre kan ikke smitte dig.'
                      : 'No, alopecia areata is absolutely not contagious. It is an autoimmune condition — your body attacks its own hair follicles. You cannot infect others, and others cannot infect you.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Vokser håret tilbage?' : 'Does hair grow back?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Det afhænger af sværhedsgraden. Ved begrænset alopecia areata vokser håret ofte tilbage spontant inden for et år. Ved mere udbredt alopecia areata, alopecia totalis eller alopecia universalis er spontan hårvækst mindre sandsynlig, men behandling kan hjælpe.'
                      : 'It depends on the severity. With limited alopecia areata, hair often grows back spontaneously within a year. With more widespread alopecia areata, alopecia totalis or alopecia universalis, spontaneous regrowth is less likely, but treatment can help.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
                    {isDa ? 'Hvornår skal jeg kontakte en hudlæge?' : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, så snart du opdager uforklarligt hårtab — særligt hvis det opstår pludseligt, i runde pletter, eller hvis du har familiehistorie med alopecia eller andre autoimmune sygdomme. Er hovedbunden samtidig rød, skællende eller øm, bør du søge vurdering uden at vente.'
                      : 'Contact a dermatologist as soon as you notice unexplained hair loss — especially if it occurs suddenly, in round patches, or if you have a family history of alopecia or other autoimmune diseases. If the scalp is also red, scaly or tender, seek assessment without delay.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-900 mb-2">
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
              <div className="bg-primary-900 text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hovedbund via SKIND-appen og modtag en personlig vurdering og behandlingsplan fra en certificeret hudlæge — uden ventetid på sygehus.'
                    : 'Upload photos of your scalp via the SKIND app and receive a personal assessment and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
