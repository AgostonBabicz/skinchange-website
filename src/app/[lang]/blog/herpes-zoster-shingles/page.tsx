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
        title: 'Helvedesild (herpes zoster): symptomer og behandling',
        description:
          'Helvedesild giver et smertefuldt udslæt i ét bånd på den ene side af kroppen. Antiviral behandling virker bedst inden for 72 timer – se hvad du skal gøre.',
        keywords:
          'helvedesild, herpes zoster, helvedesild symptomer, helvedesild behandling, postherpetisk neuralgi, Shingrix, lægevagten, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            da: 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            en: 'https://www.skinchange.dk/en/blog/herpes-zoster-shingles',
          },
        },
      }
    : {
        title: 'Shingles (herpes zoster): symptoms and treatment',
        description:
          'Shingles causes a painful rash in a single band on one side of the body. Antiviral treatment works best within 72 hours — here is what to do, and when.',
        keywords:
          'shingles, herpes zoster, shingles symptoms, shingles treatment, postherpetic neuralgia, Shingrix, Ramsay Hunt syndrome, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/herpes-zoster-shingles',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            da: 'https://www.skinchange.dk/da/blog/herpes-zoster-shingles',
            en: 'https://www.skinchange.dk/en/blog/herpes-zoster-shingles',
          },
        },
      };
}

export default function HerpesZosterShinglesPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er helvedesild? Årsager, symptomer og behandling'
    : 'What is shingles (herpes zoster)? Causes, symptoms and treatment';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Komplet guide til helvedesild: hvad det er, årsager, symptomer, akutte faresignaler og behandlingsmuligheder.'
      : 'Complete guide to shingles: what it is, causes, symptoms, red flags and treatment options.',
    image: '/blog-herpes-zoster.jpg',
    datePublished: '2026-03-16',
    dateModified: '2026-03-16',
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
          q: 'Kan man få helvedesild mere end én gang?',
          a: 'Ja. De fleste oplever kun ét udbrud, men helvedesild kan komme igen – især hos personer med svækket immunforsvar. Vaccination nedsætter risikoen for et nyt udbrud, også hvis man har haft helvedesild før.',
        },
        {
          q: 'Er helvedesild smitsomt over for andre?',
          a: 'Almindelig helvedesild smitter kun ved kontakt med væsken fra de åbne blærer, ikke gennem luften, og du smitter ikke længere, når blærerne er tørret ind til skorper. Dissemineret zoster, hvor udslættet breder sig ud over ét bånd, kan derimod smitte gennem luften ligesom skoldkopper. Personer, der aldrig har haft skoldkopper og ikke er vaccineret, kan blive smittet med VZV fra blærerne og få skoldkopper – ikke helvedesild. Hold udslættet dækket, og undgå kontakt med gravide, nyfødte og immunsvækkede, indtil det er tørret ind.',
        },
        {
          q: 'Hvor lang tid tager det at komme sig over helvedesild?',
          a: 'Der kommer typisk ikke nye blærer efter 3–5 dage, og blærerne tørrer ind til skorper i løbet af 7–10 dage. Hele udbruddet er som regel overstået 2–4 uger efter, at udslættet kom. Smerterne kan hos nogle vare længere – det kaldes postherpetisk neuralgi.',
        },
        {
          q: 'Hvornår skal jeg kontakte en læge?',
          a: 'Kontakt din egen læge samme dag, hvis du tror, du har helvedesild – eller lægevagten uden for åbningstid. Antiviral behandling virker bedst inden for 72 timer efter, at udslættet er kommet. Søg akut hjælp ved udslæt omkring øjet eller på næsen, ved blærer i eller omkring øret med lammelse i ansigtet, ved udbredt udslæt eller ved meget kraftige smerter.',
        },
      ]
    : [
        {
          q: 'Can you get shingles more than once?',
          a: 'Yes. Most people only have one episode, but shingles can recur — particularly in people with a weakened immune system. Vaccination lowers the risk of a further episode, including for people who have already had shingles.',
        },
        {
          q: 'Is shingles contagious to others?',
          a: 'Localised shingles spreads only through contact with the fluid from the open blisters, not through the air, and you are no longer infectious once the blisters have dried into crusts. Disseminated zoster, where the rash spreads well beyond one band, can spread through the air like chickenpox. Someone who has never had chickenpox and is not vaccinated can be infected with VZV from the blisters and develop chickenpox — not shingles. Keep the rash covered and avoid contact with pregnant women, newborns and immunocompromised people until it has crusted over.',
        },
        {
          q: 'How long does it take to recover from shingles?',
          a: 'New blisters usually stop appearing after 3–5 days, and the blisters dry into crusts within 7–10 days. The whole episode is generally over 2–4 weeks after the rash first appeared. For some people the pain lasts longer — this is called postherpetic neuralgia.',
        },
        {
          q: 'When should I contact a doctor?',
          a: 'Contact your GP the same day if you think you have shingles — or the out-of-hours service if the surgery is closed. Antiviral treatment works best within 72 hours of the rash appearing. Seek urgent help for a rash around the eye or on the nose, for blisters in or around the ear with facial weakness, for a widespread rash, or for very severe pain.',
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
              <Link href={`/${lang}`} className="hover:text-primary">
                {isDa ? 'Forside' : 'Home'}
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-primary">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">
                {isDa ? 'Hvad er helvedesild?' : 'What is shingles?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '16. marts 2026' : 'March 16, 2026'}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '8 min læsetid' : '8 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 font-display">
              {headline}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] relative bg-nordic-fog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-herpes-zoster.jpg"
                alt={
                  isDa
                    ? 'Et bånd af røde, væskefyldte blærer på den ene side af overkroppen, typisk for helvedesild.'
                    : 'A band of red, fluid-filled blisters on one side of the upper body, typical of shingles.'
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
                    <strong>Helvedesild (herpes zoster) er en smertefuld virusinfektion</strong>, der
                    rammer omkring én million mennesker om året i USA, med tilsvarende forekomst i
                    Europa – i Danmark cirka 3–4 tilfælde pr. 1.000 personer om året. Det er ikke en ny
                    infektion: det er en reaktivering af en virus, du allerede bærer på.
                  </>
                ) : (
                  <>
                    <strong>Shingles (herpes zoster) is a painful viral infection</strong> that affects
                    around one million people a year in the USA, with comparable rates across Europe —
                    in Denmark roughly 3–4 cases per 1,000 people per year. It is not a new infection:
                    it is a reactivation of a virus you already carry.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad helvedesild er, hvordan udslættet udvikler sig, hvornår det er en akut situation, og hvad du kan gøre for at forkorte udbruddet og mindske risikoen for langvarige smerter.'
                  : 'In this article we explain what shingles is, how the rash develops, when it is an emergency, and what you can do to shorten the episode and reduce the risk of long-lasting pain.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What is shingles */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er helvedesild?' : 'What is shingles?'}
              </h2>
              <p>
                {isDa
                  ? 'Helvedesild er en virusinfektion forårsaget af varicella-zoster-virus (VZV) – den samme virus, der giver skoldkopper (varicella). Når man er kommet sig over skoldkopper, forsvinder virussen ikke. Den trækker sig ind i nervesystemet og ligger inaktiv i sensoriske nerveceller: dels i de dorsale rodganglier langs rygmarven, dels i kranienervernes ganglier ved kraniebasis, herunder trigeminusganglion. Det er netop dette depot i kranienerverne, der giver den helvedesild i ansigtet og omkring øjet, som beskrives nedenfor.'
                  : 'Shingles is a viral infection caused by the varicella-zoster virus (VZV) — the same virus that causes chickenpox (varicella). Once you have recovered from chickenpox, the virus does not disappear. It withdraws into the nervous system and lies dormant in sensory nerve cells: in the dorsal root ganglia alongside the spinal cord, and in the cranial nerve ganglia at the base of the skull, including the trigeminal ganglion. It is this cranial reservoir that produces the facial and ophthalmic shingles described below.'}
              </p>
              <p>
                {isDa
                  ? 'Når immunforsvaret svækkes – af alder, sygdom, stress eller medicin – kan virussen reaktivere, rejse ud langs nervebanen og nå huden, hvor den giver det karakteristiske udslæt.'
                  : 'When the immune system weakens — through age, illness, stress or medication — the virus can reactivate, travel out along the nerve pathway and reach the skin, where it produces the characteristic rash.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Helvedesild er ikke smitsomt på samme måde som skoldkopper: man kan ikke &laquo;få helvedesild&raquo; af en person med helvedesild. Har man derimod aldrig haft skoldkopper og ikke er vaccineret, kan man blive smittet med VZV fra blærerne og dermed få skoldkopper. VZV tilhører samme virusfamilie som{' '}
                    <Link href={`/${lang}/blog/herpes-simplex-virus`} className="text-primary underline hover:text-primary-900">
                      herpes simplex-virus
                    </Link>
                    , men det er to forskellige vira, og den ene giver ikke den anden.
                  </>
                ) : (
                  <>
                    Shingles is not contagious in the same way as chickenpox: you cannot &ldquo;catch shingles&rdquo; from someone who has it. If you have never had chickenpox and are not vaccinated, however, you can be infected with VZV from the blisters and go on to develop chickenpox. VZV belongs to the same family of viruses as{' '}
                    <Link href={`/${lang}/blog/herpes-simplex-virus`} className="text-primary underline hover:text-primary-900">
                      herpes simplex virus
                    </Link>
                    , but they are two different viruses and one does not cause the other.
                  </>
                )}
              </p>

              {/* Emergency */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvornår er helvedesild en akut situation?' : 'When is shingles an emergency?'}
              </h2>
              <p>
                {isDa
                  ? 'De fleste tilfælde af helvedesild kan håndteres af egen læge, men nogle former kan koste synet eller hørelsen, hvis behandlingen udsættes. Det gælder først og fremmest, når udslættet sidder i ansigtet, eller når det breder sig ud over ét bånd.'
                  : 'Most cases of shingles can be handled by a GP, but some forms can cost you your sight or your hearing if treatment is delayed. That applies above all when the rash is on the face, or when it spreads beyond a single band.'}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Hvornår skal du søge akut hjælp?' : '⚠️ When to seek urgent help'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Kontakt en læge samme dag – og lægevagten uden for åbningstid – hvis udslættet rammer øjet, øjenlåget eller spidsen eller siden af næsen (Hutchinsons tegn). Det er herpes zoster ophthalmicus, som kan true synet. Søg også hjælp samme dag ved øresmerter med blærer i eller omkring øret, lammelse i den ene side af ansigtet, høretab eller svimmelhed (Ramsay Hunt syndrom, som hurtigt skal behandles med både antivirale midler og binyrebarkhormon), eller hvis udslættet breder sig ud over ét bånd til flere områder af kroppen (dissemineret zoster). Det samme gælder ved feber og påvirket almentilstand, ved meget kraftige smerter, og hvis du har et svækket immunforsvar.'
                    : "Contact a doctor the same day — or the out-of-hours service outside surgery hours — if the rash involves the eye, the eyelid, or the tip or side of the nose (Hutchinson's sign). This is herpes zoster ophthalmicus and it can threaten your sight. Also seek help the same day for ear pain with blisters in or around the ear, weakness on one side of the face, hearing loss or vertigo (Ramsay Hunt syndrome, which urgently needs both antivirals and corticosteroids), or if the rash spreads beyond one band to several areas of the body (disseminated zoster). The same applies if you have a fever and feel generally unwell, if the pain is very severe, or if your immune system is suppressed."}
                </p>
              </div>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser helvedesild ud?' : 'What does shingles look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Helvedesild forløber typisk i faser og følger et karakteristisk mønster:'
                  : 'Shingles typically progresses in stages and follows a characteristic pattern:'}
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4">
                <li>
                  <strong>{isDa ? 'Varselsfase (1–5 dage):' : 'Prodromal phase (1–5 days):'}</strong>{' '}
                  {isDa
                    ? 'Brænden, prikken eller ømhed i et afgrænset hudområde – altid på den ene side af kroppen. Feber, træthed, hovedpine og lysfølsomhed kan forekomme, før der overhovedet er noget at se.'
                    : 'Burning, tingling or tenderness in a defined area of skin — always on one side of the body. Fever, fatigue, headache and light sensitivity can occur before there is anything to see at all.'}
                </li>
                <li>
                  <strong>{isDa ? 'Udslætsfase:' : 'Rash phase:'}</strong>{' '}
                  {isDa
                    ? 'Et smertefuldt, rødt udslæt opstår i et bånd langs nervebanen – oftest på brystkassen, ryggen eller i taljen, men det kan også ramme ansigtet, øjet og munden. I løbet af et døgn eller to udvikles væskefyldte blærer. Der kommer typisk ikke nye blærer efter 3–5 dage, og blærerne tørrer ind til gule skorper i løbet af 7–10 dage.'
                    : 'A painful red rash appears in a band along the nerve path — most often on the chest, back or waist, but it can also involve the face, eye and mouth. Within a day or two, fluid-filled blisters develop. New blisters usually stop appearing after 3–5 days, and the blisters dry into yellow crusts within 7–10 days.'}
                </li>
                <li>
                  <strong>{isDa ? 'Helingsfase:' : 'Healing phase:'}</strong>{' '}
                  {isDa
                    ? 'Skorperne falder af, og hele udbruddet er som regel overstået 2–4 uger efter, at udslættet kom. Der kan blive efterladt pletter eller ar på huden, men det er ikke altid tilfældet.'
                    : 'The crusts fall off, and the whole episode is generally over 2–4 weeks after the rash first appeared. Marks or scars may be left on the skin, but this is not always the case.'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Helvedesild sidder strengt på den ene side. Udslættet følger ét dermatom – det hudområde, som én nerverod forsyner – og stopper brat ved kroppens midtlinje. Et udslæt, der går over på begge sider, taler imod helvedesild og peger på en anden diagnose. Det er et af de mest brugbare tegn, når man skal skelne helvedesild fra andre udslæt med blærer.'
                  : 'Shingles is strictly one-sided. The rash follows a single dermatome — the strip of skin supplied by one nerve root — and stops abruptly at the midline of the body. A rash that crosses to both sides argues against shingles and points to another diagnosis. This is one of the most useful signs when telling shingles apart from other blistering rashes.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Inden blærerne bryder frem, kan udslættet ligne et bånd af{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-primary underline hover:text-primary-900">
                      kontakteksem
                    </Link>
                    . Forskellen viser sig som regel i løbet af et døgn eller to, når de klyngevise blærer kommer, og smerten er kraftigere, end udslættet umiddelbart forklarer.
                  </>
                ) : (
                  <>
                    Before the blisters break out, the rash can look like a band of{' '}
                    <Link href={`/${lang}/blog/contact-dermatitis`} className="text-primary underline hover:text-primary-900">
                      contact dermatitis
                    </Link>
                    . The difference usually becomes clear within a day or two, when the clustered blisters appear and the pain is out of proportion to what the rash alone would explain.
                  </>
                )}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvorfor opstår helvedesild?' : 'Why does shingles happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Reaktiveringen af VZV sker, når immunforsvaret ikke længere er stærkt nok til at holde virussen i ro. De vigtigste udløsende faktorer er:'
                  : 'Reactivation of VZV happens when the immune system is no longer strong enough to keep the virus in check. The main triggering factors are:'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Hvorfor stiger risikoen med alderen?' : 'Why does the risk rise with age?'}
              </h3>
              <p>
                {isDa
                  ? 'Det immunforsvar, der holder VZV i ro, svækkes naturligt med alderen. Risikoen for helvedesild stiger markant efter 50 år, og mere end halvdelen af alle tilfælde ses hos personer over 60. Cirka én ud af tre udvikler helvedesild i løbet af livet.'
                  : 'The immune response that keeps VZV in check weakens naturally with age. The risk of shingles rises markedly after the age of 50, and more than half of all cases occur in people over 60. Around one in three people develops shingles during their lifetime.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Svækket immunforsvar' : 'A weakened immune system'}
              </h3>
              <p>
                {isDa
                  ? 'Tilstande som HIV, autoimmune sygdomme, kræft og organtransplantation – samt immundæmpende behandling – øger risikoen betydeligt. Disse personer kan også få mere alvorlige og langvarige udbrud og har større risiko for dissemineret zoster.'
                  : 'Conditions such as HIV, autoimmune disease, cancer and organ transplantation — as well as immunosuppressive treatment — increase the risk substantially. These individuals may also have more severe and prolonged episodes and are at greater risk of disseminated zoster.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Stress' : 'Stress'}
              </h3>
              <p>
                {isDa
                  ? 'Alvorlig fysisk eller psykisk stress kan midlertidigt svække immunforsvaret og dermed øge risikoen for reaktivering af VZV. Mange patienter kan sætte deres udbrud i forbindelse med en særligt belastende periode.'
                  : 'Severe physical or psychological stress can temporarily weaken the immune system and thereby increase the risk of VZV reactivation. Many patients can link their episode to a particularly demanding period.'}
              </p>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får helvedesild?' : 'Who gets shingles?'}
              </h2>
              <p>
                {isDa
                  ? 'Enhver, der har haft skoldkopper, bærer VZV og kan potentielt udvikle helvedesild. Visse grupper har dog en særligt høj risiko:'
                  : 'Anyone who has had chickenpox carries VZV and can potentially develop shingles. Certain groups are at particularly high risk:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Ældre voksne (50+):' : 'Older adults (50+):'}</strong>{' '}
                  {isDa
                    ? 'Risikoen stiger kraftigt med alderen. Personer over 80 år har 8–10 gange højere risiko end 20-årige.'
                    : 'Risk increases sharply with age. Adults over 80 have 8–10 times the risk of those in their 20s.'}
                </li>
                <li>
                  <strong>{isDa ? 'Immunsvækkede personer:' : 'Immunocompromised individuals:'}</strong>{' '}
                  {isDa
                    ? 'Kræftpatienter i behandling, HIV-positive og personer i langvarig steroid- eller biologisk behandling.'
                    : 'Cancer patients undergoing treatment, HIV-positive individuals, and those on long-term steroid or biological therapy.'}
                </li>
                <li>
                  <strong>
                    {isDa
                      ? 'Dem der fik skoldkopper i en meget ung alder:'
                      : 'Those who had chickenpox very young:'}
                  </strong>{' '}
                  {isDa
                    ? 'Tidlig skoldkoppeinfektion, særligt i de første 12 levemåneder, er forbundet med øget risiko for helvedesild i barndommen og den tidlige voksenalder.'
                    : 'Early chickenpox infection, particularly in the first 12 months of life, is associated with an increased risk of shingles in childhood and young adulthood.'}
                </li>
              </ul>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan behandles og forebygges helvedesild?' : 'How is shingles treated and prevented?'}
              </h2>
              <p>
                {isDa
                  ? 'Tidlig behandling er afgørende. Jo hurtigere du starter antiviral behandling, desto kortere og mildere bliver udbruddet:'
                  : 'Early treatment matters. The sooner you start antiviral therapy, the shorter and milder the episode:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💊 Antivirale lægemidler' : '💊 Antiviral medicines'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Aciclovir, valaciclovir eller famciclovir bør startes inden for 72 timer efter, at udslættet er kommet. De afkorter udbruddet og mindsker risikoen for postherpetisk neuralgi. Efter 72 timer anbefales behandling stadig, hvis der fortsat kommer nye blærer, hvis øjet er involveret eller udslættet er dissemineret, hvis smerterne er svære, eller hvis du har et svækket immunforsvar.'
                      : 'Aciclovir, valaciclovir or famciclovir should be started within 72 hours of the rash appearing. They shorten the episode and reduce the risk of postherpetic neuralgia. Beyond 72 hours, treatment is still recommended if new blisters are still appearing, if the eye is involved or the rash is disseminated, if the pain is severe, or if your immune system is suppressed.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '🩺 Smertebehandling' : '🩺 Pain management'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Smerterne ved helvedesild er neuropatiske – de kommer fra den betændte nerve og ikke fra beskadiget væv – og derfor rækker almindelig smertestillende medicin kun et stykke. Paracetamol er et rimeligt udgangspunkt, mens NSAID-præparater hjælper lidt. Er det ikke nok, er næste skridt medicin mod nervesmerter: gabapentin, pregabalin eller amitriptylin. Et lidokainplaster 5% på helet hud kan lindre lokale smerter. Opioider bør ikke tages i brug, før disse muligheder er forsøgt, og er forbeholdt svære smerter under vejledning fra en specialist.'
                      : 'Shingles pain is neuropathic — it comes from the inflamed nerve rather than from damaged tissue — so ordinary painkillers only go so far. Paracetamol is a reasonable starting point, while NSAIDs help little. If that is not enough, the next step is a nerve pain medicine: gabapentin, pregabalin or amitriptyline. A 5% lidocaine plaster applied to healed skin can relieve localised pain. Opioids should not be used before those options have been tried, and are reserved for severe pain under specialist guidance.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '💉 Vaccination' : '💉 Vaccination'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Den rekombinante zostervaccine (Shingrix) er godkendt fra 50-årsalderen og gives som to doser. Den forebygger omkring 97% af tilfældene hos 50–69-årige og omkring 91% hos personer på 70 år og derover. I Danmark indgår den ikke i det offentlige vaccinationsprogram, så den skal betales af dig selv – spørg din egen læge eller en vaccinationsklinik om pris og egnethed.'
                      : 'The recombinant zoster vaccine (Shingrix) is licensed from the age of 50 and is given as two doses. It prevents around 97% of cases in people aged 50–69 and around 91% in those aged 70 and over. In Denmark it is not part of the publicly funded vaccination programme, so you pay for it yourself — ask your GP or a vaccination clinic about cost and suitability.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">
                    {isDa ? '⚠️ Postherpetisk neuralgi (PHN)' : '⚠️ Postherpetic neuralgia (PHN)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'PHN er den hyppigste komplikation til helvedesild: vedvarende nervesmerter, der varer måneder eller år, efter at huden er helet. Risikoen stiger med alderen. Tidlig antiviral behandling er den vigtigste forebyggende faktor. Kontakt lægen, hvis smerterne fortsætter, efter at udslættet er væk – PHN kan behandles.'
                      : 'PHN is the most common complication of shingles: persistent nerve pain lasting months or years after the skin has healed. The risk rises with age. Early antiviral treatment is the most important preventive factor. Contact a doctor if pain continues after the rash has gone — PHN can be treated.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Helvedesild er klassificeret som 1E91 Zoster i WHO\'s internationale sygdomsklassifikation (ICD-11). Tilstanden er kendetegnet ved et smertefuldt udslæt med dermatomal fordeling, forårsaget af reaktivering af varicella-zoster-virus, og behandles med antivirale midler og smertebehandling.'
                    : "Shingles is classified as 1E91 Zoster in the WHO's International Classification of Diseases (ICD-11). The condition is characterised by a painful rash with a dermatomal distribution, caused by reactivation of the varicella-zoster virus, and is treated with antivirals and pain management."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-lg text-primary-900 mb-2">{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-primary-900 text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Kontakt din læge samme dag' : 'Contact your doctor the same day'}
                </h3>
                <p className="mb-4">
                  {isDa
                    ? 'Vent ikke på en vurdering i appen, hvis du tror, du har helvedesild. Kontakt din egen læge — eller lægevagten uden for åbningstid — samme dag. Antiviral behandling virker bedst inden for 72 timer efter, at udslættet er kommet, og en svartid på 48 timer kan være for sent.'
                    : 'Do not wait for an app assessment if you think you have shingles. Contact your GP — or, out of hours, lægevagten — the same day. Antiviral treatment works best within 72 hours of the rash appearing, and a 48-hour turnaround may be too late.'}
                </p>
                <p className="mb-6">
                  {isDa
                    ? 'Til andre hudforandringer, og til opfølgning efter et udbrud, kan du uploade billeder via SKIND-appen og få en vurdering fra en certificeret hudlæge inden for 48 timer.'
                    : 'For other skin changes, and for follow-up after an episode, you can upload photos via the SKIND app and get an assessment from a certified dermatologist within 48 hours.'}
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
