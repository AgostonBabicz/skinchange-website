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
        title: 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om eksem og atopisk dermatitis: hvad det er, hvorfor det opstår, hvem der rammes og hvilke behandlingsmuligheder der findes. Få hjælp via SKIND.',
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
        title: 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about eczema and atopic dermatitis: what it is, why it happens, who gets it and what treatment options are available. Get help via SKIND.',
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
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#peter-bjerring',
      name: 'Peter Bjerring',
      jobTitle: isDa ? 'Speciallæge i hudsygdomme' : 'Consultant Dermatologist',
      url: `https://www.skinchange.dk/${lang}/about`,
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
            name: 'Hvad er eksem?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eksem (atopisk dermatitis) er en kronisk, inflammatorisk hudlidelse, der giver kløende, rød og tør hud. Det er ikke smitsomt og skyldes en kombination af genetiske faktorer og overaktivt immunsystem.',
            },
          },
          {
            '@type': 'Question',
            name: 'Er eksem smitsomt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nej, eksem er ikke smitsomt. Du kan ikke smitte andre med eksem eller få det fra en anden person.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvornår skal jeg søge lægehjælp for eksem?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Søg hjælp hvis kløen forstyrrer din søvn, hvis huden er inficeret eller væsker, eller hvis håndkøbsmidler ikke hjælper. SKIND giver dig adgang til en hudlæge inden for 48 timer.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What is eczema?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eczema (atopic dermatitis) is a chronic, inflammatory skin condition causing itchy, red and dry skin. It is not contagious and results from a combination of genetic factors and an overactive immune system.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is eczema contagious?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, eczema is not contagious. You cannot spread it to others or catch it from another person.',
            },
          },
          {
            '@type': 'Question',
            name: 'When should I seek medical help for eczema?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seek help if itching is disturbing your sleep, if the skin is infected or weeping, or if over-the-counter remedies are not helping. SKIND gives you access to a dermatologist within 48 hours.',
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
                {isDa ? 'Hvad er Eksem?' : 'What is Eczema?'}
              </span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Hudsygdomme' : 'Skin Conditions'}
              </span>
              <span className="text-gray-500 text-sm">12. {isDa ? 'marts' : 'March'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '7 min læsetid' : '7 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling'
                : 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80"
                alt={
                  isDa
                    ? 'Eksem – atopisk dermatitis behandling'
                    : 'Eczema – atopic dermatitis treatment'
                }
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
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
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er eksem?' : 'What is eczema?'}
              </h2>
              <p>
                {isDa
                  ? 'Atopisk dermatitis – populært kaldet eksem – er en kronisk, inflammatorisk hudlidelse, der får huden til at blive rød, kløende og undertiden hævet. "Atopisk" refererer til en arvelig tendens til allergiske reaktioner, og tilstanden hænger tæt sammen med astma og høfeber i det, der kaldes den atopiske triade.'
                  : 'Atopic dermatitis — commonly known as eczema — is a chronic, inflammatory skin condition that makes the skin red, itchy and sometimes swollen. "Atopic" refers to a hereditary tendency towards allergic reactions, and the condition is closely linked to asthma and hay fever in what is called the atopic triad.'}
              </p>
              <p>
                {isDa
                  ? 'Eksem er ikke smitsomt. Du kan hverken smitte andre eller få det fra en anden person. Det er en indre tilstand drevet af immunsystemet og genetik.'
                  : 'Eczema is not contagious. You cannot spread it to others or catch it from another person. It is an internal condition driven by the immune system and genetics.'}
              </p>

              {/* What does it look like */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan ser eksem ud?' : 'What does eczema look like?'}
              </h2>
              <p>
                {isDa
                  ? 'Eksem kan se meget forskelligt ud afhængigt af personens alder og hudtype:'
                  : 'Eczema can look very different depending on the person\'s age and skin type:'}
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
                  ? 'Hos voksne er eksem hyppigst på albuer, knæhase, håndled, nakke og ansigt. Hos spædbørn og småbørn ses det ofte i ansigtet og på kroppen.'
                  : 'In adults, eczema most commonly affects the elbows, backs of the knees, wrists, neck and face. In infants and young children, it often appears on the face and torso.'}
              </p>

              {/* Why does it happen */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvorfor opstår eksem?' : 'Why does eczema happen?'}
              </h2>
              <p>
                {isDa
                  ? 'Den præcise årsag til eksem er ikke fuldt ud forstået, men forskning peger på en kombination af faktorer:'
                  : 'The exact cause of eczema is not fully understood, but research points to a combination of factors:'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Svækket hudbarriere' : 'Impaired skin barrier'}
              </h3>
              <p>
                {isDa
                  ? 'Hos mennesker med eksem er hudbarrieren svækket, hvilket gør det lettere for irritanter og allergener at trænge ind og for fugt at fordampe ud. En mutation i genet for filaggrin – et protein, der er essentielt for en sund hudbarriere – er en hyppig årsag.'
                  : 'In people with eczema, the skin barrier is impaired, making it easier for irritants and allergens to penetrate and for moisture to evaporate out. A mutation in the gene for filaggrin — a protein essential for a healthy skin barrier — is a common cause.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Overaktivt immunsystem' : 'Overactive immune system'}
              </h3>
              <p>
                {isDa
                  ? 'Immunsystemet overreagerer på tilsyneladende harmløse stoffer som støv, dyrehår eller visse fødevarer, hvilket udløser en inflammatorisk reaktion i huden. Det er en lignende mekanisme som ved andre atopiske tilstande som astma og allergi.'
                  : 'The immune system overreacts to seemingly harmless substances such as dust, pet hair or certain foods, triggering an inflammatory response in the skin. This is a similar mechanism to other atopic conditions such as asthma and allergies.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Genetik' : 'Genetics'}
              </h3>
              <p>
                {isDa
                  ? 'Eksem løber i familier. Hvis en eller begge forældre har eksem, astma eller høfeber, er risikoen for at barnet udvikler atopisk dermatitis markant forhøjet.'
                  : 'Eczema runs in families. If one or both parents have eczema, asthma or hay fever, the risk of the child developing atopic dermatitis is significantly increased.'}
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-3">
                {isDa ? 'Udløsende faktorer' : 'Triggering factors'}
              </h3>
              <p>
                {isDa
                  ? 'Selv med genetisk disposition kræver eksem oftest en udløser for at blusse op. Almindelige udløsere inkluderer:'
                  : 'Even with a genetic predisposition, eczema often requires a trigger to flare up. Common triggers include:'}
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
                    ? 'Visse fødevarer (f.eks. mælk, æg, nødder, gluten)'
                    : 'Certain foods (e.g. milk, eggs, nuts, gluten)'}
                </li>
                <li>{isDa ? 'Syntetiske stoffer og uld' : 'Synthetic fabrics and wool'}</li>
                <li>
                  {isDa
                    ? 'Sved og overophedning'
                    : 'Sweat and overheating'}
                </li>
              </ul>

              {/* Who gets it */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
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
                    ? 'Ca. 3% af voksne lever med kronisk eksem, og mange oplever, at tilstanden kommer tilbage, selvom den forbedredes i barndommen.'
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
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad kan du gøre ved eksem?' : 'What can you do about eczema?'}
              </h2>
              <p>
                {isDa
                  ? 'Eksem kan ikke helbredes, men det kan kontrolleres effektivt med den rette behandling og hudplejerutine:'
                  : 'Eczema cannot be cured, but it can be effectively controlled with the right treatment and skincare routine:'}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8 space-y-4">
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💧 Fugtighedscreme (vigtigste daglige behandling)' : '💧 Moisturiser (most important daily treatment)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Påfør en rig, parfumefri fugtighedscreme eller emollient mindst to gange dagligt – også uden for udbrud. Det styrker hudbarrieren og reducerer hyppighed og sværhedsgrad af udbrud.'
                      : 'Apply a rich, fragrance-free moisturiser or emollient at least twice daily — even between flares. This strengthens the skin barrier and reduces the frequency and severity of flares.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🩺 Topiske kortikosteroider' : '🩺 Topical corticosteroids'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Kortikosteroidcremer (cortison) dæmper inflammation og kløe under udbrud. De fås i forskellig styrke – mild til svær – og ordineres af en hudlæge baseret på sværhedsgrad og placering.'
                      : 'Corticosteroid creams (cortisone) suppress inflammation and itching during flares. They come in varying strengths — mild to strong — and are prescribed by a dermatologist based on severity and location.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🧪 Immunmodulatorer (calcineurin-hæmmere)' : '🧪 Immunomodulators (calcineurin inhibitors)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Cremer som tacrolimus og pimecrolimus er et steroidfrit alternativ til følsomme områder som ansigt og hals. De dæmper immunreaktionen lokalt uden de bivirkninger, der kan ses ved langvarig steroidbrug.'
                      : 'Creams such as tacrolimus and pimecrolimus are a steroid-free alternative for sensitive areas like the face and neck. They suppress the local immune reaction without the side effects that can occur with long-term steroid use.'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '💊 Systemisk behandling (svær eksem)' : '💊 Systemic treatment (severe eczema)'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Ved svær eller udbredt eksem kan en hudlæge ordinere biologisk behandling (f.eks. dupilumab), orale immunsuppressiva eller lysbehandling (fototerapi).'
                      : 'For severe or widespread eczema, a dermatologist may prescribe biological treatment (e.g. dupilumab), oral immunosuppressants or phototherapy (light therapy).'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1a237e]">
                    {isDa ? '🚫 Undgå udløsere' : '🚫 Avoid triggers'}
                  </p>
                  <p className="text-sm mt-1">
                    {isDa
                      ? 'Identificér og undgå dine personlige udløsere. Brug parfumefrie produkter, blød tøj og tag hurtige, lunkne brusebade fremfor lange varme bade.'
                      : 'Identify and avoid your personal triggers. Use fragrance-free products, soft clothing and take short, lukewarm showers rather than long hot baths.'}
                  </p>
                </div>
              </div>

              {/* ICD-11 Note */}
              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-5 my-8 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>{isDa ? 'Medicinsk klassifikation:' : 'Medical classification:'}</strong>{' '}
                  {isDa
                    ? "Atopisk eksem er klassificeret som EA80 i WHO's internationale sygdomsklassifikation (ICD-11). Det er karakteriseret som en kronisk, inflammatorisk tilstand med kløende, rød og tør hud. Behandlingen omfatter fugtighedscreme, topiske steroider og immunmodulatorer."
                    : "Atopic eczema is classified as EA80 in the WHO's International Classification of Diseases (ICD-11). It is characterised as a chronic, inflammatory condition with itchy, red and dry skin. Treatment includes moisturisers, topical steroids and immunomodulators."}
                </p>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan eksem forsvinde helt?' : 'Can eczema disappear completely?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Mange børn vokser fra eksem i løbet af ungdomsårene, men for andre forbliver det en kronisk tilstand, der kræver løbende håndtering. Rigtig behandling kan dog bringe eksem under fuld kontrol.'
                      : 'Many children grow out of eczema during their teenage years, but for others it remains a chronic condition requiring ongoing management. With the right treatment, however, eczema can be brought under full control.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
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
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa
                      ? 'Hvornår skal jeg kontakte en hudlæge?'
                      : 'When should I contact a dermatologist?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kontakt en hudlæge, hvis kløen forstyrrer din søvn, huden begynder at væske eller inficere sig, håndkøbsmidler ikke hjælper, eller hvis eksem påvirker dit daglige liv markant.'
                      : 'Contact a dermatologist if itching is disturbing your sleep, the skin starts to weep or become infected, over-the-counter remedies are not helping, or if eczema is significantly affecting your daily life.'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">
                  {isDa ? 'Få en diagnose inden for 48 timer' : 'Get a diagnosis within 48 hours'}
                </h3>
                <p className="mb-6">
                  {isDa
                    ? 'Upload billeder af din hud via SKIND-appen og modtag en personlig diagnose og behandlingsplan fra en certificeret hudlæge – uden ventetid på sygehus.'
                    : 'Upload photos of your skin via the SKIND app and receive a personal diagnosis and treatment plan from a certified dermatologist — no hospital waiting list.'}
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
