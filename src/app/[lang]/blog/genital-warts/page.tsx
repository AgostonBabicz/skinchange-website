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
        title: 'Hvad er Kønsvorter (HPV)? Årsager, Symptomer og Behandling | SKIND',
        description:
          'Lær alt om kønsvorter forårsaget af HPV: hvad de er, hvordan de smitter, hvordan de ser ud, og hvilke behandlingsmuligheder der findes. Få hjælp fra en hudlæge via SKIND.',
        keywords:
          'kønsvorter, HPV, kondylomer, kønsvorter behandling, kønsvorter symptomer, humant papillomavirus, SKIND',
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
        title: 'What are Genital Warts (HPV)? Causes, Symptoms and Treatment | SKIND',
        description:
          'Learn everything about genital warts caused by HPV: what they are, how they spread, what they look like, and what treatment options are available. Get help from a dermatologist via SKIND.',
        keywords:
          'genital warts, HPV, condyloma, genital warts treatment, genital warts symptoms, human papillomavirus, SKIND',
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa
      ? 'Hvad er Kønsvorter (HPV)? Årsager, Symptomer og Behandling'
      : 'What are Genital Warts (HPV)? Causes, Symptoms and Treatment',
    description: isDa
      ? 'Komplet guide til kønsvorter: hvad de er, HPV-smitte, symptomer og behandlingsmuligheder.'
      : 'Complete guide to genital warts: what they are, HPV transmission, symptoms and treatment options.',
    image: '/blog-hpv.jpg',
    datePublished: '2026-04-08',
    dateModified: '2026-04-08',
    author: {
      '@type': 'Person',
      '@id': 'https://www.skinchange.dk/#skinchange-ai',
      name: 'SkinChange.AI',
      jobTitle: isDa ? 'Medicinsk redaktion' : 'Medical editorial team',
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
            name: 'Hvad er kønsvorter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kønsvorter (kondylomer) er små, kødfulde udvækster eller hudfarvede bump, der optræder på eller omkring kønsorganerne og anus. De skyldes humant papillomavirus (HPV) og er en af de mest almindelige seksuelt overførte infektioner.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan smitter HPV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HPV smitter primært gennem vaginalt, oralt eller analt samleje, samt tæt hud-mod-hud kontakt i kønsområdet. Kondomer reducerer, men fjerner ikke, risikoen helt, da vorterne kan sidde på områder der ikke dækkes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hvordan ser kønsvorter ud?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kønsvorter ligner ofte små, flade, kødfarvede bump eller små, blomkålsagtige udvækster. De kan være enkelte eller danne klynger. Hos kvinder ses de typisk på skamlæberne, i skeden, på livmoderhalsen eller omkring anus.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan kønsvorter behandles?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, kønsvorter kan behandles med topiske midler (cremer), frysning (kryoterapi), kirurgisk fjernelse, laserbehandling eller elektrokirurgi. Valget af behandling afhænger af vortens størrelse, antal og placering.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What are genital warts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Genital warts (condylomata acuminata) are small, fleshy growths or skin-colored bumps that appear on or around the genitals and anus. They are caused by the human papillomavirus (HPV) and are one of the most common sexually transmitted infections.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does HPV spread?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HPV spreads primarily through vaginal, oral or anal intercourse, as well as close skin-to-skin contact in the genital area. Condoms reduce but do not eliminate the risk entirely, as warts can occur on areas not covered.',
            },
          },
          {
            '@type': 'Question',
            name: 'What do genital warts look like?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Genital warts often resemble small, flat, flesh-colored bumps or small, cauliflower-like growths. They can be single or form clusters. In women, they are typically found on the labia, inside the vagina, on the cervix or around the anus.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can genital warts be treated?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, genital warts can be treated with topical agents (creams), freezing (cryotherapy), surgical removal, laser treatment or electrosurgery. The choice of treatment depends on the size, number and location of the warts.',
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
              <span className="text-gray-900">{isDa ? 'Hvad er Kønsvorter (HPV)?' : 'What are Genital Warts (HPV)?'}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                {isDa ? 'Seksuelt overførte infektioner' : 'Sexually Transmitted Infections'}
              </span>
              <span className="text-gray-500 text-sm">8. {isDa ? 'april' : 'April'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">
                {isDa ? '6 min læsetid' : '6 min read'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa
                ? 'Hvad er Kønsvorter (HPV)? Årsager, Symptomer og Behandling'
                : 'What are Genital Warts (HPV)? Causes, Symptoms and Treatment'}
            </h1>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blog-hpv.jpg"
                alt={isDa ? 'Humant papillomavirus (HPV) – elektronmikroskopi' : 'Human papillomavirus (HPV) – electron microscopy'}
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
                    <strong>Kønsvorter (kondylomer) er en af de mest almindelige seksuelt overførte infektioner</strong> i verden. De skyldes humant papillomavirus (HPV), og selvom de ofte er ufarlige, kan de være psykologisk belastende og i sjældne tilfælde øge risikoen for kræft.
                  </>
                ) : (
                  <>
                    <strong>Genital warts (condylomata acuminata) are one of the most common sexually transmitted infections</strong> in the world. They are caused by the human papillomavirus (HPV), and although they are often harmless, they can be psychologically distressing and in rare cases increase the risk of cancer.
                  </>
                )}
              </p>
              <p>
                {isDa
                  ? 'I denne artikel forklarer vi præcist, hvad kønsvorter er, hvordan HPV smitter, hvordan du genkender symptomerne, og hvilke behandlingsmuligheder der findes.'
                  : 'In this article, we explain exactly what genital warts are, how HPV spreads, how to recognize symptoms, and what treatment options are available.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* What are genital warts */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvad er kønsvorter?' : 'What are genital warts?'}
              </h2>
              <p>
                {isDa
                  ? 'Kønsvorter, også kaldet kondylomer eller venereiske vorter, er små, kødfulde udvækster eller bump, der optræder på eller omkring kønsorganerne, anus og sjældent i munden eller halsen. De skyldes infektion med humant papillomavirus (HPV).'
                  : 'Genital warts, also called condylomata acuminata or venereal warts, are small, fleshy growths or bumps that appear on or around the genitals, anus and rarely in the mouth or throat. They are caused by infection with the human papillomavirus (HPV).'}
              </p>
              <p>
                {isDa
                  ? 'HPV er en samlebetegnelse for mere end 200 relaterede virus, hvoraf omkring 40 påvirker kønsområdet. HPV-type 6 og 11 er ansvarlige for ca. 90% af alle kønsvortetilfælde og kategoriseres som lavrisiko, fordi de sjældent forårsager kræft.'
                  : 'HPV is an umbrella term for more than 200 related viruses, of which about 40 affect the genital area. HPV types 6 and 11 are responsible for approximately 90% of all genital wart cases and are categorized as low-risk because they rarely cause cancer.'}
              </p>

              {/* HPV and cancer risk */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'HPV og kræftrisiko' : 'HPV and cancer risk'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom kønsvorter selv er ufarlige, er det vigtigt at forstå HPV&apos;s rolle i forhold til kræft:'
                  : 'Although genital warts themselves are harmless, it is important to understand HPV&apos;s role in relation to cancer:'}
              </p>
              <ul>
                <li>
                  <strong>{isDa ? 'Højrisiko HPV' : 'High-risk HPV'}</strong>
                  {isDa
                    ? ': HPV-type 16 og 18 er ansvarlige for de fleste tilfælde af livmoderhalskræft samt kræft i anus, penis, vagina og mundsvælg.'
                    : ': HPV types 16 and 18 are responsible for most cases of cervical cancer as well as cancer of the anus, penis, vagina and oropharynx.'}
                </li>
                <li>
                  <strong>{isDa ? 'Regelmæssig screening' : 'Regular screening'}</strong>
                  {isDa
                    ? ': Kvinder bør følge de anbefalede screeningsprogrammer for livmoderhalskræft (celleprøve/HPV-test).'
                    : ': Women should follow recommended cervical cancer screening programs (Pap smear/HPV test).'}
                </li>
                <li>
                  <strong>{isDa ? 'HPV-vaccination' : 'HPV vaccination'}</strong>
                  {isDa
                    ? ': Vaccinen beskytter mod de mest almindelige kræftfremkaldende HPV-typer og anbefales til både unge piger og drenge.'
                    : ': The vaccine protects against the most common cancer-causing HPV types and is recommended for both young girls and boys.'}
                </li>
              </ul>

              {/* Transmission */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Hvordan smitter HPV?' : 'How does HPV spread?'}
              </h2>
              <p>
                {isDa
                  ? 'HPV overføres primært gennem:'
                  : 'HPV is primarily transmitted through:'}
              </p>
              <ul>
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
                  ? 'HPV kan overføres selv når en inficeret person ikke har synlige vorter. Kondomer reducerer risikoen, men beskytter ikke fuldt, da vorter kan sidde på områder der ikke dækkes.'
                  : 'HPV can be transmitted even when an infected person has no visible warts. Condoms reduce the risk but do not provide full protection, as warts can occur on areas not covered.'}
              </p>

              {/* Symptoms */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Symptomer på kønsvorter' : 'Symptoms of genital warts'}
              </h2>
              <p>
                {isDa ? 'Kønsvorter viser sig ofte som:' : 'Genital warts often appear as:'}
              </p>
              <ul>
                <li>
                  {isDa
                    ? 'Små, flade, kødfarvede eller grålige bump'
                    : 'Small, flat, flesh-colored or grayish bumps'}
                </li>
                <li>
                  {isDa
                    ? 'Små, blomkålsagtige udvækster (vorter)'
                    : 'Small, cauliflower-like growths (warts)'}
                </li>
                <li>
                  {isDa
                    ? 'Enkelte eller klynger af vorter'
                    : 'Single or clusters of warts'}
                </li>
                <li>
                  {isDa
                    ? 'Kløe, ubehag eller let blødning'
                    : 'Itching, discomfort or slight bleeding'}
                </li>
              </ul>
              <p>
                {isDa
                  ? 'Inkubationsperioden (tid fra smitte til synlige vorter) varierer fra uger til måneder, og nogle personer udvikler aldrig synlige vorter trods HPV-infektion.'
                  : 'The incubation period (time from infection to visible warts) varies from weeks to months, and some people never develop visible warts despite HPV infection.'}
              </p>

              {/* Treatment */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Behandling af kønsvorter' : 'Treatment of genital warts'}
              </h2>
              <p>
                {isDa
                  ? 'Selvom kønsvorter ofte forsvinder af sig selv over tid, vælger mange at få behandling af kosmetiske årsager eller for at lindre symptomer. Behandlingsmulighederne inkluderer:'
                  : 'Although genital warts often disappear on their own over time, many choose to receive treatment for cosmetic reasons or to relieve symptoms. Treatment options include:'}
              </p>

              <h3 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">
                {isDa ? 'Topisk behandling' : 'Topical treatment'}
              </h3>
              <ul>
                <li>
                  <strong>{isDa ? 'Imiquimod (Aldara)' : 'Imiquimod (Aldara)'}</strong>
                  {isDa
                    ? ': En creme der stimulerer immunforsvaret til at bekæmpe HPV.'
                    : ': A cream that stimulates the immune system to fight HPV.'}
                </li>
                <li>
                  <strong>{isDa ? 'Podophyllotoxin' : 'Podophyllotoxin'}</strong>
                  {isDa
                    ? ': Opløsning eller creme der ødelægger vorternevævet.'
                    : ': Solution or cream that destroys wart tissue.'}
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1a237e] mt-8 mb-4">
                {isDa ? 'Procedurer' : 'Procedures'}
              </h3>
              <ul>
                <li>
                  <strong>{isDa ? 'Kryoterapi' : 'Cryotherapy'}</strong>
                  {isDa
                    ? ': Frysning af vorterne med flydende kvælstof.'
                    : ': Freezing the warts with liquid nitrogen.'}
                </li>
                <li>
                  <strong>{isDa ? 'Kirurgisk fjernelse' : 'Surgical removal'}</strong>
                  {isDa
                    ? ': Fjernelse med sakser eller skalpel under lokalbedøvelse.'
                    : ': Removal with scissors or scalpel under local anesthesia.'}
                </li>
                <li>
                  <strong>{isDa ? 'Laserbehandling' : 'Laser treatment'}</strong>
                  {isDa
                    ? ': Brug af laserlys til at ødelægge vorterne.'
                    : ': Using laser light to destroy the warts.'}
                </li>
              </ul>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                {isDa ? 'Ofte stillede spørgsmål' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan stilles diagnosen?' : 'How is the diagnosis made?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Kønsvorter kan normalt identificeres ved visuel undersøgelse. Din læge kan bruge et forstørrelsessinstrument (kolposkop) til at undersøge vagina og livmoderhals.'
                      : 'Genital warts can usually be identified by visual examination. Your doctor may use a magnification instrument (colposcope) to examine the vagina and cervix.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Hvordan forebygges kønsvorter?' : 'How are genital warts prevented?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Den bedste forebyggelse er HPV-vaccination (Gardasil 9), som beskytter mod 9 HPV-typer. Konsistent kondombrug reducerer også risikoen, men fjerner den ikke helt.'
                      : 'The best prevention is HPV vaccination (Gardasil 9), which protects against 9 HPV types. Consistent condom use also reduces the risk, but does not eliminate it entirely.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">
                    {isDa ? 'Kan kønsvorter komme tilbage?' : 'Can genital warts come back?'}
                  </h3>
                  <p>
                    {isDa
                      ? 'Ja, kønsvorter kan komme tilbage, da HPV ikke kan helbredes, kun behandles. Virus kan forblive i kroppen i latent form.'
                      : 'Yes, genital warts can come back because HPV cannot be cured, only treated. The virus can remain in the body in a latent form.'}
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
                    ? 'Hvis du har mistanke om kønsvorter eller HPV, kan du få en personlig vurdering fra en certificeret læge via SKIND — diskret og uden ventetid.'
                    : 'If you suspect genital warts or HPV, you can get a personal assessment from a certified doctor via SKIND — discreetly and without a waiting list.'}
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
                    ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Kontakt altid en læge for personlig rådgivning og vurdering.'
                    : 'This article is for informational purposes only and does not replace professional medical advice. Always consult a doctor for personal guidance and assessment.'}
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
