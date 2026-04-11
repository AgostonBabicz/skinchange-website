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
        title: 'Hvad er Aktinisk Keratose? Behandling og Forebyggelse | SKIND',
        description: 'Lær om aktinisk keratose (solkeratose): hvad det er, hvordan det ser ud, hvem der rammes, og hvilke behandlinger der findes. Fra SKIND hudlæger.',
        keywords: 'aktinisk keratose, solkeratose, præcancerøs, hudkræft, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/actinic-keratosis',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/actinic-keratosis', da: 'https://www.skinchange.dk/da/blog/actinic-keratosis', en: 'https://www.skinchange.dk/en/blog/actinic-keratosis' },
        },
      }
    : {
        title: 'What is Actinic Keratosis? Treatment and Prevention | SKIND',
        description: 'Learn about actinic keratosis (solar keratosis): what it is, what it looks like, who it affects, and what treatments are available. From SKIND dermatologists.',
        keywords: 'actinic keratosis, solar keratosis, precancerous, skin cancer, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/actinic-keratosis',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/actinic-keratosis', da: 'https://www.skinchange.dk/da/blog/actinic-keratosis', en: 'https://www.skinchange.dk/en/blog/actinic-keratosis' },
        },
      };
}

export default function ActinicKeratosisPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa ? 'Aktinisk Keratose: Årsager, Symptomer og Behandling' : 'Actinic Keratosis: Causes, Symptoms and Treatment',
    description: isDa ? 'Alt om aktinisk keratose: hvad det er, behandlingsmuligheder og forebyggelse.' : 'Everything about actinic keratosis: what it is, treatment options and prevention.',
    image: '/blog-actinic-keratosis.jpg',
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
              <span className="text-gray-900">{isDa ? 'Aktinisk Keratose' : 'Actinic Keratosis'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Præcancerøs Tilstand' : 'Precancerous Condition'}</span>
              <span className="text-gray-500 text-sm">11. {isDa ? 'april' : 'April'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '6 min læsetid' : '6 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa ? 'Hvad er Aktinisk Keratose? Årsager, Symptomer og Behandling' : 'What is Actinic Keratosis? Causes, Symptoms and Treatment'}
            </h1>
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blog-actinic-keratosis.jpg" alt={isDa ? 'Aktinisk keratose på solbeskadiget hud' : 'Actinic keratosis on sun-damaged skin'} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/60 to-transparent" />
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                {isDa
                  ? <><strong>Aktinisk keratose (AK), også kaldet solkeratose, er en præcancerøs hudtilstand</strong> karakteriseret ved ru, skællende pletter på huden. Den udvikles på grund af langvarig eksponering for ultraviolet (UV) stråling og kan i nogle tilfælde udvikle sig til pladecellecarcinom (hudkræft).</>
                  : <><strong>Actinic keratosis (AK), also known as solar keratosis, is a precancerous skin condition</strong> characterized by rough, scaly patches on the skin. It develops due to long-term exposure to ultraviolet (UV) radiation and can in some cases progress to squamous cell carcinoma (skin cancer).</>}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad er aktinisk keratose?' : 'What is actinic keratosis?'}</h2>
              <p>{isDa ? 'Aktinisk keratose opstår når hudceller kaldet keratinocytter beskadiges af kumulativ UV-eksponering over tid. Denne skade ændrer cellernes DNA, hvilket får dem til at vokse unormalt. Selvom AK ikke i sig selv er kræftfremkaldende, betragtes det som en forløber for pladecellecarcinom.' : 'Actinic keratosis occurs when skin cells called keratinocytes are damaged by cumulative UV exposure over time. This damage alters the cells\' DNA, causing them to grow abnormally. While not cancerous itself, AK is considered a precursor to squamous cell carcinoma.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan ser aktinisk keratose ud?' : 'What does actinic keratosis look like?'}</h2>
              <p>{isDa ? 'AK fremstår typisk som små, ru eller skællende pletter på huden der kan være lyserøde, røde eller brune. De kan føles som sandpapir ved berøring og kan være nemmere at mærke end at se. Almindelige steder inkluderer områder der ofte udsættes for sol: ansigt, ører, læber, skaldet hovedbund, nakke, underarme og hænder.' : 'AK typically appears as small, rough, or scaly patches on the skin that may be pink, red, or brown. They can feel like sandpaper to the touch and may be easier to feel than see. Common locations include areas frequently exposed to the sun: face, ears, lips, bald scalp, neck, forearms, and backs of hands.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvem får aktinisk keratose?' : 'Who gets actinic keratosis?'}</h2>
              <p>{isDa ? 'AK er mest almindelig hos lyshuede personer over 40 år, men det kan påvirke alle med en historie af betydelig soleksponering. Personer med svækket immunforsvar, dem der arbejder udendørs, og personer der har brugt solarier har højere risiko.' : 'AK is most common in fair-skinned individuals over 40, but it can affect anyone with a history of significant sun exposure. People with weakened immune systems, those who work outdoors, and individuals who have used tanning beds are at higher risk.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Behandling af aktinisk keratose' : 'Treatment of actinic keratosis'}</h2>
              <p>{isDa ? 'Behandlingsmuligheder inkluderer:' : 'Treatment options include:'}</p>
              <ul>
                <li><strong>{isDa ? 'Kryoterapi (frysning):' : 'Cryotherapy (freezing)'}</strong> {isDa ? 'Den mest almindelige behandling, hvor flydende kvælstof bruges til at ødelægge de unormale celler.' : 'The most common treatment, using liquid nitrogen to destroy the abnormal cells.'}</li>
                <li><strong>{isDa ? 'Topiske lægemidler:' : 'Topical medications:'}</strong> {isDa ? 'Cremer som 5-fluorouracil (5-FU) eller imiquimod der påføres direkte på læsionerne.' : 'Creams such as 5-fluorouracil (5-FU) or imiquimod applied directly to the lesions.'}</li>
                <li><strong>{isDa ? 'Fotodynamisk terapi:' : 'Photodynamic therapy:'}</strong> {isDa ? 'En lysaktivérende creme kombineret med specifikt lys til at ødelægge unormale celler.' : 'A light-activating cream combined with specific light to destroy abnormal cells.'}</li>
                <li><strong>{isDa ? 'Kirurgisk fjernelse:' : 'Surgical removal:'}</strong> {isDa ? 'I nogle tilfælde kan lægen skrabe eller skære læsionen væk.' : 'In some cases, the doctor may scrape or cut the lesion away.'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Forebyggelse' : 'Prevention'}</h2>
              <p>{isDa ? 'Forebyggelse er nøglen: Brug bredspektret solcreme med SPF 30 eller højere dagligt, bær beskyttende tøj, undgå solen i spidsbelastningstider, og brug aldrig solarier.' : 'Prevention is key: Use broad-spectrum sunscreen with SPF 30 or higher daily, wear protective clothing, avoid peak sun hours, and never use tanning beds.'}</p>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få en vurdering af aktinisk keratose' : 'Get an actinic keratosis assessment'}</h3>
                <p className="mb-6">{isDa ? 'Hvis du har mistænkelige pletter på huden, kan du få en personlig vurdering fra en certificeret hudlæge via SKIND-appen — hurtigt og diskret.' : 'If you have suspicious patches on your skin, you can get a personal assessment from a certified dermatologist via the SKIND app — quickly and discreetly.'}</p>
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
