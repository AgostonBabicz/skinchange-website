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
        title: 'Kønsvorter (HPV): symptomer og behandling',
        description:
          'Kønsvorter skyldes HPV-type 6 og 11 og er hyppigst hos unge voksne. Læs om smitte, inkubationstid, behandling – også under graviditet – og vaccination.',
        keywords:
          'kønsvorter, kondylomer, HPV, HPV-vaccine, kønsvorter behandling, podophyllotoxin, imiquimod, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/genital-warts',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/genital-warts',
            da: 'https://www.skinchange.dk/da/blog/genital-warts',
            en: 'https://www.skinchange.dk/en/blog/genital-warts',
          },
        },
      }
    : {
        title: 'Genital warts (HPV): symptoms and treatment',
        description:
          'Genital warts are caused by HPV types 6 and 11 and peak in young adults. Learn how they spread, how they are treated in and out of pregnancy, and more.',
        keywords:
          'genital warts, condylomata acuminata, HPV, HPV vaccine, genital warts treatment, podophyllotoxin, imiquimod, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/genital-warts',
          languages: {
            'x-default': 'https://www.skinchange.dk/da/blog/genital-warts',
            da: 'https://www.skinchange.dk/da/blog/genital-warts',
            en: 'https://www.skinchange.dk/en/blog/genital-warts',
          },
        },
      };
}

export default function GenitalWartsPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const headline = isDa
    ? 'Hvad er kønsvorter (HPV)? Årsager, symptomer og behandling'
    : 'What are genital warts (HPV)? Causes, symptoms and treatment';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: isDa
      ? 'Komplet guide til kønsvorter: hvad de er, HPV-smitte, symptomer, behandling og vaccination.'
      : 'Complete guide to genital warts: what they are, HPV transmission, symptoms, treatment and vaccination.',
    image: '/blog-hpv.jpg',
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
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
          q: 'Hvordan stilles diagnosen kønsvorter?',
          a: 'Kønsvorter genkendes normalt ved en klinisk undersøgelse, hvor lægen ser direkte på området, om nødvendigt med et forstørrelsesinstrument. Hos kvinder kan et kolposkop bruges til at undersøge skeden og livmorhalsen. Diagnosen kan ikke stilles sikkert ud fra et billede, fordi flere andre tilstande ligner kønsvorter.',
        },
        {
          q: 'Kan kønsvorter komme tilbage efter behandling?',
          a: 'Ja. Behandlingen fjerner de synlige vorter, men ikke selve virussen, som kan blive i huden i en inaktiv form. Omkring hver tredje oplever, at vorterne kommer igen inden for de første måneder efter behandling. Med tiden får immunforsvaret som regel kontrol over infektionen.',
        },
        {
          q: 'Kan jeg få HPV-vaccinen som voksen?',
          a: 'Ja. Vaccinen er godkendt til voksne og kan gives efter 12-årsalderen, men den er kun gratis inden for børnevaccinationsprogrammet og for de definerede tilbudsgrupper – ellers skal du selv betale. Den virker bedst, før man er blevet udsat for de HPV-typer, den dækker, men den kan stadig beskytte mod typer, du endnu ikke har mødt. Tal med din egen læge.',
        },
        {
          q: 'Skal jeg fortælle min partner om kønsvorter?',
          a: 'Ja. HPV kan smitte, også når der ikke er synlige vorter, så din partner bør vide det og kan selv blive undersøgt. Kondom nedsætter risikoen, men fjerner den ikke, fordi virussen også overføres fra hud, som kondomet ikke dækker.',
        },
      ]
    : [
        {
          q: 'How are genital warts diagnosed?',
          a: 'Genital warts are usually recognised by a clinical examination, in which a doctor looks directly at the area, using a magnification instrument if needed. In women a colposcope can be used to examine the vagina and cervix. The diagnosis cannot be made reliably from a photograph, because several other conditions look like genital warts.',
        },
        {
          q: 'Can genital warts come back after treatment?',
          a: 'Yes. Treatment removes the visible warts but not the virus itself, which can stay in the skin in a latent form. Around one in three people find the warts return within the first few months after treatment. Over time, the immune system usually gains control of the infection.',
        },
        {
          q: 'Can I have the HPV vaccine as an adult?',
          a: 'Yes. The vaccine is licensed for adults and can be given after the age of 12, but it is only free within the childhood programme and for the defined catch-up groups — otherwise you pay for it yourself. It works best before exposure to the HPV types it covers, but it can still protect against types you have not yet met. Talk to your GP.',
        },
        {
          q: 'Should I tell my partner about genital warts?',
          a: 'Yes. HPV can be transmitted even when there are no visible warts, so your partner should know and can be examined too. Condoms lower the risk but do not remove it, because the virus also spreads from skin a condom does not cover.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er kønsvorter (HPV)?' : 'What are genital warts (HPV)?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Seksuelt overførte infektioner' : 'Sexually Transmitted Infections'}
              </span>
              <span className="text-gray-500 text-sm">{isDa ? '8. april 2026' : 'April 8, 2026'}</span>
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
                src="/blog-hpv.jpg"
                alt={
                  isDa
                    ? 'Elektronmikroskopisk billede af humant papillomavirus (HPV), den virus der giver kønsvorter.'
                    : 'Electron microscope image of human papillomavirus (HPV), the virus that causes genital warts.'
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
                    <strong>Kønsvorter (kondylomer) er en af de mest almindelige seksuelt overførte infektioner</strong> i verden. De skyldes humant papillomavirus (HPV) – næsten altid type 6 og 11, som ikke er de typer, der giver kræft. Selve vorterne er ufarlige, men de opleves ofte som belastende, og enhver ny knude i kønsområdet bør undersøges frem for gættes på.
                  </>
                ) : (
                  <>
                    <strong>Genital warts (condylomata acuminata) are one of the most common sexually transmitted infections</strong> in the world. They are caused by the human papillomavirus (HPV) — almost always types 6 and 11, which are not the types that cause cancer. The warts themselves are harmless, but they are often distressing, and any new lump in the genital area deserves to be examined rather than guessed at.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi, hvad kønsvorter er, hvem der får dem, hvordan HPV smitter, hvilke behandlinger der findes – herunder hvilke der ikke må bruges under graviditet – og hvordan vaccinationen har ændret billedet i Danmark.'
                  : 'In this article we explain what genital warts are, who gets them, how HPV spreads, what treatments exist — including which ones must not be used in pregnancy — and how vaccination has changed the picture in Denmark.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What are genital warts */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvad er kønsvorter?' : 'What are genital warts?'}
              </h2>
              <p>
                {isDa
                  ? 'Kønsvorter, også kaldet kondylomer, er små, kødfulde udvækster eller bump, der sidder på eller omkring kønsorganerne og endetarmsåbningen og sjældnere i munden eller svælget. De skyldes infektion med humant papillomavirus (HPV).'
                  : 'Genital warts, also called condylomata acuminata, are small, fleshy growths or bumps that appear on or around the genitals and anus, and more rarely in the mouth or throat. They are caused by infection with the human papillomavirus (HPV).'}
              </p>
              <p>
                {isDa
                  ? 'HPV er en samlebetegnelse for mere end 200 beslægtede vira, hvoraf omkring 40 kan ramme kønsområdet. HPV-type 6 og 11 står for cirka 90% af alle tilfælde af kønsvorter og kategoriseres som lavrisikotyper.'
                  : 'HPV is an umbrella term for more than 200 related viruses, of which about 40 can affect the genital area. HPV types 6 and 11 account for around 90% of all cases of genital warts and are categorised as low-risk types.'}
              </p>

              {/* Who gets them */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvem får kønsvorter?' : 'Who gets genital warts?'}
              </h2>
              <p>
                {isDa
                  ? 'Kønsvorter er først og fremmest en infektion hos yngre mennesker. Forekomsten topper mellem 20 og 24 år hos begge køn, og omkring hver tiende får kønsvorter på et tidspunkt i livet. Næsten alle, der har været seksuelt aktive, har været udsat for HPV, men hos de fleste rydder immunforsvaret virussen inden for et til to år, uden at der nogensinde kommer synlige vorter.'
                  : 'Genital warts are above all an infection of younger people. Incidence peaks between the ages of 20 and 24 in both sexes, and around one in ten people develops them at some point in life. Almost everyone who has been sexually active has been exposed to HPV, but in most people the immune system clears the virus within one to two years without any visible warts ever appearing.'}
              </p>
              <p>
                {isDa
                  ? 'Siden HPV-vaccinationen blev indført, er antallet af tilfælde faldet markant i Danmark. Hos de første vaccinerede årgange af piger faldt forekomsten af kønsvorter med langt over halvdelen, og den er også faldet blandt uvaccinerede unge mænd på grund af flokbeskyttelse – en effekt, der er blevet stærkere, efter at drenge kom med i programmet.'
                  : 'Since HPV vaccination was introduced, case numbers have fallen sharply in Denmark. In the first vaccinated cohorts of girls, genital warts fell by well over half, and rates have dropped among unvaccinated young men as well through herd protection — an effect that has strengthened since boys were included in the programme.'}
              </p>

              {/* Transmission */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan smitter HPV?' : 'How does HPV spread?'}
              </h2>
              <p>
                {isDa
                  ? 'HPV overføres primært gennem:'
                  : 'HPV is primarily transmitted through:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>{isDa ? 'Vaginalt samleje' : 'Vaginal intercourse'}</li>
                <li>{isDa ? 'Analt samleje' : 'Anal intercourse'}</li>
                <li>{isDa ? 'Orale seksuelle aktiviteter' : 'Oral sexual activities'}</li>
                <li>
                  {isDa
                    ? 'Tæt hud-mod-hud kontakt i kønsområdet (ikke nødvendigvis samleje)'
                    : 'Close skin-to-skin contact in the genital area (not necessarily intercourse)'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'HPV kan smitte, selv når den smittede ikke har synlige vorter. Kondom nedsætter risikoen, men beskytter ikke fuldstændigt, fordi vorterne kan sidde på hud, som kondomet ikke dækker.'
                  : 'HPV can be transmitted even when an infected person has no visible warts. Condoms reduce the risk but do not give full protection, because warts can sit on skin the condom does not cover.'}
              </p>

              {/* Symptoms */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan ser kønsvorter ud?' : 'What do genital warts look like?'}
              </h2>
              <p>
                {isDa ? 'Kønsvorter viser sig ofte som:' : 'Genital warts often appear as:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  {isDa
                    ? 'Små, flade, hudfarvede eller grålige bump'
                    : 'Small, flat, flesh-coloured or greyish bumps'}
                </li>
                <li>
                  {isDa
                    ? 'Små, blomkålsagtige udvækster'
                    : 'Small, cauliflower-like growths'}
                </li>
                <li>
                  {isDa
                    ? 'Enkeltstående vorter eller klynger af vorter'
                    : 'Single warts or clusters of warts'}
                </li>
                <li>
                  {isDa
                    ? 'Kløe, ubehag eller let blødning, især efter samleje'
                    : 'Itching, discomfort or slight bleeding, especially after intercourse'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Inkubationstiden – tiden fra smitte til synlige vorter – går fra omkring 3 uger til 8 måneder, med en median på cirka 2–3 måneder. Det betyder, at man sjældent kan slutte fra tidspunktet for vorterne til, hvornår eller af hvem man er blevet smittet. Mange udvikler aldrig synlige vorter trods HPV-infektion.'
                  : 'The incubation period — the time from infection to visible warts — ranges from about 3 weeks to 8 months, with a median of around 2–3 months. That means you can rarely work backwards from the warts to when, or from whom, you caught the virus. Many people never develop visible warts at all despite HPV infection.'}
              </p>

              {/* Cancer */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Kan kønsvorter udvikle sig til kræft?' : 'Do genital warts cause cancer?'}
              </h2>
              <p>
                {isDa
                  ? 'Nej – ikke vorterne i sig selv. HPV-type 6 og 11, som giver omkring 90% af alle kønsvorter, forårsager stort set aldrig kræft. Kræft i livmoderhalsen, endetarmsåbningen, penis, skeden, vulva og mundsvælget skyldes højrisikotyperne, først og fremmest HPV 16 og 18, og en infektion med en højrisikotype er en anden begivenhed end det at have kønsvorter. At have kønsvorter betyder altså ikke, at dine vorter kan blive til kræft.'
                  : 'No — not the warts themselves. HPV types 6 and 11, which cause around 90% of genital warts, essentially never cause cancer. Cancers of the cervix, anus, penis, vagina, vulva and oropharynx are caused by the high-risk types, principally HPV 16 and 18, and infection with a high-risk type is a separate event from having warts. Having genital warts therefore does not mean your warts may turn into cancer.'}
              </p>
              <p>
                {isDa
                  ? 'Det, kønsvorter derimod fortæller, er, at du har haft den slags kontakt, hvorigennem højrisikotyperne også overføres. Derfor er det et godt tidspunkt at sikre sig, at man følger screeningsprogrammet for livmoderhalskræft, og at få taget en fuld undersøgelse for kønssygdomme.'
                  : 'What genital warts do tell you is that you have had the kind of contact through which the high-risk types also spread. It is therefore a good moment to make sure you are up to date with cervical screening and to have a full sexual health screen.'}
              </p>

              {/* Diagnosis */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan stilles diagnosen?' : 'How are genital warts diagnosed?'}
              </h2>
              <p>
                {isDa
                  ? 'Kønsvorter genkendes normalt ved en klinisk undersøgelse. Lægen kan bruge et forstørrelsesinstrument, og hos kvinder kan et kolposkop bruges til at undersøge skeden og livmoderhalsen. I tvivlstilfælde tages en vævsprøve.'
                  : 'Genital warts are usually recognised by clinical examination. A doctor may use a magnification instrument, and in women a colposcope can be used to examine the vagina and cervix. Where there is doubt, a tissue sample is taken.'}
              </p>
              <p>
                {isDa ? (
                  <>
                    Et billede kan ikke klare den opgave. Det kan ikke udelukke condyloma lata – de flade, fugtige forandringer ved sekundær syfilis, som ligner kønsvorter, men betyder en helt anden diagnose og behandling. Det kan heller ikke sikkert skelne kønsvorter fra{' '}
                    <Link href={`/${lang}/blog/molluscum-contagiosum`} className="text-primary underline hover:text-primary-900">
                      molluscum contagiosum
                    </Link>
                    , fra{' '}
                    <Link href={`/${lang}/blog/herpes-simplex-virus`} className="text-primary underline hover:text-primary-900">
                      herpes simplex
                    </Link>
                    , fra normale anatomiske varianter som perlekrans på penis (pearly penile papules) og vestibulær papillomatose, fra forstadier til kræft (VIN, PIN og AIN) eller fra det sjældne verrukøse karcinom. Derfor bør enhver ny forandring i kønsområdet og omkring endetarmsåbningen undersøges ved fysisk fremmøde, og der bør samtidig tilbydes en fuld undersøgelse for kønssygdomme.
                  </>
                ) : (
                  <>
                    A photograph cannot do that job. It cannot rule out condyloma lata — the flat, moist lesions of secondary syphilis, which look similar but mean an entirely different diagnosis and treatment. Nor can it reliably separate genital warts from{' '}
                    <Link href={`/${lang}/blog/molluscum-contagiosum`} className="text-primary underline hover:text-primary-900">
                      molluscum contagiosum
                    </Link>
                    , from{' '}
                    <Link href={`/${lang}/blog/herpes-simplex-virus`} className="text-primary underline hover:text-primary-900">
                      herpes simplex
                    </Link>
                    , from normal anatomical variants such as pearly penile papules and vestibular papillomatosis, from the pre-cancerous changes known as VIN, PIN and AIN, or from the rare verrucous carcinoma. Any new lesion in the anogenital area should therefore be examined in person, with a full sexual health screen offered at the same time.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'En billedvurdering kan sige, om en hudforandring ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke kræft. En mistænkelig forandring skal undersøges, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
                  : 'A photo assessment can tell you whether a lesion looks concerning enough to be seen in person, and how quickly. It cannot rule out cancer. A suspicious lesion needs examination and, if there is any doubt, removal for laboratory analysis.'}
              </p>
              <p>
                {isDa
                  ? 'Kønsvorter hos et barn før puberteten er en anden situation. Det kræver en socialfaglig og lægelig vurdering i et specialiseret team – ikke behandling alene.'
                  : 'Genital warts in a child before puberty are a different matter. They require a safeguarding assessment by a specialist team — not treatment alone.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan behandles kønsvorter?' : 'How are genital warts treated?'}
              </h2>
              <p>
                {isDa
                  ? 'Kønsvorter forsvinder ofte af sig selv i løbet af et til to år, efterhånden som immunforsvaret får kontrol over virussen. Mange vælger alligevel behandling for at slippe for de synlige vorter og generne. Ingen behandling fjerner selve HPV, og derfor kan vorterne komme igen bagefter.'
                  : 'Genital warts often clear on their own within one to two years as the immune system gains control of the virus. Many people still choose treatment, to be rid of the visible warts and the discomfort. No treatment removes HPV itself, which is why warts can return afterwards.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Behandling du selv påfører' : 'Treatments you apply yourself'}
              </h3>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Imiquimod (Aldara)' : 'Imiquimod (Aldara)'}</strong>
                  {isDa
                    ? ': En creme, der får immunforsvaret til at angribe virussen. Påføres typisk tre gange om ugen i op til nogle måneder.'
                    : ': A cream that prompts the immune system to attack the virus. Usually applied three times a week for up to a few months.'}
                </li>
                <li>
                  <strong>{isDa ? 'Podophyllotoxin' : 'Podophyllotoxin'}</strong>
                  {isDa
                    ? ': Opløsning eller creme, der ødelægger vortevævet. Bruges i korte kure på nogle dage med pauser imellem.'
                    : ': A solution or cream that destroys the wart tissue. Used in short cycles of a few days with breaks in between.'}
                </li>
                <li>
                  <strong>{isDa ? 'Sinecatechiner' : 'Sinecatechins'}</strong>
                  {isDa
                    ? ': En salve fremstillet af grøn te-ekstrakt, der påføres tre gange dagligt, indtil vorterne er væk.'
                    : ': An ointment made from green tea extract, applied three times daily until the warts have gone.'}
                </li>
              </ul>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Behandling i klinikken' : 'Treatments done in the clinic'}
              </h3>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>{isDa ? 'Kryoterapi' : 'Cryotherapy'}</strong>
                  {isDa
                    ? ': Frysning af vorterne med flydende kvælstof, som regel gentaget hver eller hver anden uge.'
                    : ': Freezing the warts with liquid nitrogen, usually repeated every one to two weeks.'}
                </li>
                <li>
                  <strong>{isDa ? 'Trikloreddikesyre (TCA)' : 'Trichloroacetic acid (TCA)'}</strong>
                  {isDa
                    ? ': En syre, der påføres af en behandler og ætser vortevævet væk. Kan bruges under graviditet.'
                    : ': An acid applied by a clinician that burns the wart tissue away. It can be used during pregnancy.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kirurgisk fjernelse' : 'Surgical removal'}</strong>
                  {isDa
                    ? ': Fjernelse med saks, skarp ske eller skalpel i lokalbedøvelse.'
                    : ': Removal with scissors, a curette or a scalpel under local anaesthesia.'}
                </li>
                <li>
                  <strong>{isDa ? 'Elektrokirurgi og laser' : 'Electrosurgery and laser'}</strong>
                  {isDa
                    ? ': Vorterne brændes væk med strøm eller laserlys. Bruges især ved udbredte eller svært tilgængelige vorter.'
                    : ': The warts are burned away with an electric current or laser light. Used particularly for extensive or hard-to-reach warts.'}
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {isDa ? '⚠️ Behandling under graviditet' : '⚠️ Treatment during pregnancy'}
                </h3>
                <p className="text-red-900 mb-0">
                  {isDa
                    ? 'Podophyllotoxin og imiquimod må ikke bruges under graviditet. Trikloreddikesyre (TCA), som påføres af en behandler, er den standardmulighed, der er sikker i graviditeten, og frysning eller kirurgisk fjernelse kan også anvendes. Kønsvorter vokser ofte hurtigere under graviditet og skrumper som regel igen efter fødslen, så fortæl det til din jordemoder eller læge frem for at behandle på egen hånd.'
                    : 'Podophyllotoxin and imiquimod must not be used during pregnancy. Trichloroacetic acid (TCA), applied by a clinician, is the standard option that is safe in pregnancy, and cryotherapy or surgical removal can also be used. Genital warts often grow faster during pregnancy and usually shrink again after delivery, so tell your midwife or doctor rather than treating them yourself.'}
                </p>
              </div>

              {/* Prevention */}
              <h2 className="text-3xl font-bold text-primary-900 mt-12 mb-6">
                {isDa ? 'Hvordan forebygger du kønsvorter?' : 'How can you prevent genital warts?'}
              </h2>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'HPV-vaccination' : 'HPV vaccination'}
              </h3>
              <p>
                {isDa
                  ? 'I Danmark indgår HPV-vaccination i børnevaccinationsprogrammet og tilbydes alle børn i 12-årsalderen – piger siden 2009 og drenge siden september 2019. Der findes desuden gratis tilbud om indhentningsvaccination til definerede grupper. Den anvendte vaccine beskytter mod ni HPV-typer, herunder type 6 og 11, som giver kønsvorter, og type 16 og 18, som står bag de fleste HPV-relaterede kræfttilfælde. Vaccinen virker bedst, når den gives før den første seksuelle kontakt, men kan også gives senere.'
                  : 'In Denmark, HPV vaccination is part of the childhood vaccination programme and is offered to all children at the age of 12 — to girls since 2009 and to boys since September 2019. Free catch-up vaccination is also available for defined groups. The vaccine used protects against nine HPV types, including 6 and 11, which cause genital warts, and 16 and 18, which are behind most HPV-related cancers. The vaccine works best when given before first sexual contact, but it can also be given later.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Screening for livmoderhalskræft' : 'Cervical screening'}
              </h3>
              <p>
                {isDa
                  ? 'Screeningen i Danmark starter ved 23 år med en celleprøve. Fra 30 til 59 år analyseres prøven med en primær HPV-test, og kvinder mellem 60 og 64 år tilbydes en afsluttende test. Screeningen finder forandringer forårsaget af højrisiko-HPV – den leder ikke efter kønsvorter.'
                  : 'Screening in Denmark starts at the age of 23 with a cell sample (cytology). From 30 to 59 the sample is analysed with a primary HPV test, and women aged 60–64 are offered an exit test. Screening looks for changes caused by high-risk HPV — it does not look for genital warts.'}
              </p>

              <h3 className="text-xl font-bold text-primary-900 mt-8 mb-3">
                {isDa ? 'Kondom' : 'Condoms'}
              </h3>
              <p>
                {isDa
                  ? 'Konsekvent brug af kondom nedsætter risikoen for at smitte og blive smittet, men fjerner den ikke, fordi HPV også overføres fra hud, som kondomet ikke dækker.'
                  : 'Consistent condom use lowers the risk of passing on and picking up the virus, but does not remove it, because HPV also spreads from skin a condom does not cover.'}
              </p>

              {/* ICD-11 Note */}
              <div className="bg-primary-900/5 border-l-4 border-primary p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? 'Kønsvorter er klassificeret som 1A95 Anogenital warts i WHO\'s internationale sygdomsklassifikation (ICD-11). De skyldes lavrisiko-HPV, oftest type 6 og 11, og behandles med lokalbehandling eller fysisk fjernelse.'
                    : "Genital warts are classified as 1A95 Anogenital warts in the WHO's International Classification of Diseases (ICD-11). They are caused by low-risk HPV, most often types 6 and 11, and are treated with topical agents or physical removal."}
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
                  {isDa ? 'Få en vurdering inden for 48 timer' : 'Get an assessment within 48 hours'}
                </h3>
                <p className="mb-4">
                  {isDa
                    ? 'En ny forandring i kønsområdet bør undersøges ved fysisk fremmøde og ledsages af en fuld undersøgelse for kønssygdomme. En billedvurdering kan ikke udelukke syfilis, forstadier til kræft eller andre tilstande, der ligner kønsvorter.'
                    : 'A new lesion in the genital area should be examined in person and accompanied by a full sexual health screen. A photo assessment cannot rule out syphilis, pre-cancerous change or other conditions that resemble genital warts.'}
                </p>
                <p className="mb-6">
                  {isDa
                    ? 'Er du i tvivl om, hvad du ser, og hvor hurtigt det skal ses, kan du uploade billeder via SKIND-appen og få en vurdering fra en certificeret læge – diskret og uden ventetid.'
                    : 'If you are unsure what you are looking at, and how quickly it needs to be seen, you can upload photos via the SKIND app and get an assessment from a certified doctor — discreetly and without a waiting list.'}
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
