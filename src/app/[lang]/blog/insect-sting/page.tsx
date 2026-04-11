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
        title: 'Insektbid og Stik: Behandling og Forebyggelse | SKIND',
        description: 'Lær om insektbid og stik: hvad de er, hvordan de ser ud, hvem der rammes, og hvordan du forebygger og behandler dem. Fra SKIND hudlæger.',
        keywords: 'insektbid, myggestik, bi-stik, hvepsestik, allergisk reaktion, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/insect-sting',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/insect-sting', da: 'https://www.skinchange.dk/da/blog/insect-sting', en: 'https://www.skinchange.dk/en/blog/insect-sting' },
        },
      }
    : {
        title: 'Insect Bites and Stings: Treatment and Prevention | SKIND',
        description: 'Learn about insect bites and stings: what they are, how they look, who they affect, and how to prevent and treat them. From SKIND dermatologists.',
        keywords: 'insect bite, mosquito bite, bee sting, wasp sting, allergic reaction, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/insect-sting',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/insect-sting', da: 'https://www.skinchange.dk/da/blog/insect-sting', en: 'https://www.skinchange.dk/en/blog/insect-sting' },
        },
      };
}

export default function InsectStingPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa ? 'Insektbid og Stik: Behandling og Forebyggelse' : 'Insect Bites and Stings: Treatment and Prevention',
    description: isDa ? 'Alt om insektbid og stik: behandling og forebyggelse.' : 'Everything about insect bites and stings: treatment and prevention.',
    image: '/blog-insect-sting.jpg',
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
    author: { '@type': 'Person', '@id': 'https://www.skinchange.dk/#skinchange-ai', name: 'SkinChange.AI' },
    publisher: { '@type': 'Organization', name: 'SKIND', logo: { '@type': 'ImageObject', url: 'https://www.skinchange.dk/SKIND_logo_dark.svg' } },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="min-h-screen bg-white">
        <Navigation lang={lang} />
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href={`/${lang}`} className="hover:text-[#304ffe]">{isDa ? 'Forside' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-[#304ffe]">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{isDa ? 'Insektbid og Stik' : 'Insect Bites and Stings'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Hudreaktioner' : 'Skin Reactions'}</span>
              <span className="text-gray-500 text-sm">11. {isDa ? 'april' : 'April'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '5 min læsetid' : '5 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa ? 'Insektbid og Stik: Behandling og Forebyggelse' : 'Insect Bites and Stings: Treatment and Prevention'}
            </h1>
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blog-insect-sting.jpg" alt={isDa ? 'Myg på menneskehud' : 'Mosquito on human skin'} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/60 to-transparent" />
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                {isDa
                  ? <><strong>Insektbid og stik er yderst almindelige</strong>, især i sommermånederne. Selvom de fleste er harmløse, kan nogle forårsage allergiske reaktioner eller infektioner. Det er vigtigt at vide, hvordan du forebygger og behandler dem korrekt.</>
                  : <><strong>Insect bites and stings are extremely common</strong>, especially during summer months. While most are harmless, some can cause allergic reactions or infections. It is important to know how to prevent and treat them properly.</>}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad er insektbid og stik?' : 'What are insect bites and stings?'}</h2>
              <p>{isDa ? 'Insektbid og stik opstår når bugs munddele eller stikkeapparat bruges mod huden. Myg, fluer, myrer, sengetæger og edderkopper er almindelige årsager. Nogle insekt bid forsvinder af sig selv, mens andre kan kræve behandling.' : 'Insect bites and stings occur when bugs use their mouthparts or stinging apparatus against the skin. Mosquitoes, flies, ants, bedbugs and spiders are common causes. Some insect bites resolve on their own while others may require treatment.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan ser insektbid ud?' : 'What do insect bites look like?'}</h2>
              <p>{isDa ? 'Insektbid viser sig typisk som små, røde, hævede knopper på huden. Almindelige typer:' : 'Insect bites typically appear as small, red, swollen bumps on the skin. Common types include:'}</p>
              <ul>
                <li><strong>{isDa ? 'Myggestik:' : 'Mosquito bites:'}</strong> {isDa ? 'Små, runde, kløende røde knopper.' : 'Small, round, itchy red bumps.'}</li>
                <li><strong>{isDa ? 'Sengetægebid:' : 'Bedbug bites:'}</strong> {isDa ? 'Røde, kløende hævelser, ofte i linjer eller klynger.' : 'Red, itchy welts, often in lines or clusters.'}</li>
                <li><strong>{isDa ? 'Myrebid:' : 'Ant bites:'}</strong> {isDa ? 'Røde, hævede knopper der kan udvikle en lille blære.' : 'Red, swollen bumps that may develop a small blister.'}</li>
                <li><strong>{isDa ? 'Flåtbid:' : 'Tick bites:'}</strong> {isDa ? 'Kan efterlade et rødt mærke og i sjældne tilfælde overføre sygdomme.' : 'May leave a red mark and in rare cases transmit diseases.'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvornår skal du søge lægehjælp?' : 'When should you seek medical help?'}</h2>
              <p>{isDa ? 'Søg øjeblikkelig lægehjælp hvis du oplever:' : 'Seek immediate medical help if you experience:'}</p>
              <ul>
                <li>{isDa ? 'Vejrtrækningsbesvær eller hævelse af ansigt eller hals' : 'Difficulty breathing or swelling of the face or throat'}</li>
                <li>{isDa ? 'Udbredt nældefeber eller kløe over hele kroppen' : 'Widespread hives or itching over the entire body'}</li>
                <li>{isDa ? 'Kvalme, opkastning eller svimmelhed' : 'Nausea, vomiting, or dizziness'}</li>
                <li>{isDa ? 'Tegn på infektion (feber, pus, stigende rødme)' : 'Signs of infection (fever, pus, increasing redness)'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Behandling af insektbid' : 'Treatment of insect bites'}</h2>
              <p>{isDa ? 'De fleste insektbid kan behandles derhjemme: vask det berørte område med sæbe og vand, påfør en kold kompres for at reducere hævelse, og brug håndkøbs antihistaminer eller hydrocortisoncreme for kløe. Undgå at klø for at forebygge infektion.' : 'Most insect bites can be treated at home: wash the affected area with soap and water, apply a cold compress to reduce swelling, and use over-the-counter antihistamines or hydrocortisone cream for itching. Avoid scratching to prevent infection.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Forebyggelse' : 'Prevention'}</h2>
              <p>{isDa ? 'Brug insektmiddel med DEET, bær beskyttende tøj, undgå områder med høj insektaktivitet, og undgå stærk parfume der kan tiltrække bugs.' : 'Use insect repellent with DEET, wear protective clothing, avoid areas with high insect activity, and avoid strong perfume that may attract bugs.'}</p>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få hjælp til alvorlige insektbid' : 'Get help for severe insect bites'}</h3>
                <p className="mb-6">{isDa ? 'Hvis du oplever en alvorlig allergisk reaktion eller infektion fra et insektbid, kan du få hurtig vurdering via SKIND-appen.' : 'If you experience a severe allergic reaction or infection from an insect bite, you can get a quick assessment via the SKIND app.'}</p>
                <Link href={`/${lang}/download`} className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#1a237e] rounded-full font-semibold hover:bg-white/90 transition-colors">
                  {isDa ? 'Download appen' : 'Download the app'}
                </Link>
              </div>
              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-sm text-gray-500"><strong>{isDa ? 'Ansvarsfraskrivelse:' : 'Disclaimer:'}</strong> {isDa ? 'Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp.' : 'This article is for informational purposes only and does not replace professional medical advice.'}</p>
              </div>
            </div>
          </div>
        </article>
        <Footer lang={lang} />
      </main>
    </>
  );
}
