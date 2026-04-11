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
        title: 'Almindelige Modermærker | Hudlæge | SKIND',
        description:
          'Lær om almindelige modermærker (nevi): hvad de er, hvordan de ser ud, hvornår de kan være problematiske, og hvornår du bør søge læge. Fra SKIND hudlæger.',
        keywords: 'modermærke, nevi, hudkræft, melanom, modermærke kontrol, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/regular-mole',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/regular-mole', da: 'https://www.skinchange.dk/da/blog/regular-mole', en: 'https://www.skinchange.dk/en/blog/regular-mole' },
        },
      }
    : {
        title: 'Regular Moles (Nevi) | Dermatologist | SKIND',
        description:
          'Learn about regular moles (nevi): what they are, what they look like, when they may be problematic, and when you should see a doctor. From SKIND dermatologists.',
        keywords: 'mole, nevi, skin cancer, melanoma, mole check, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/regular-mole',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/regular-mole', da: 'https://www.skinchange.dk/da/blog/regular-mole', en: 'https://www.skinchange.dk/en/blog/regular-mole' },
        },
      };
}

export default function RegularMolePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa ? 'Almindelige Modermærker (Nevi)' : 'Regular Moles (Nevi)',
    description: isDa
      ? 'Alt om almindelige modermærker: hvad de er, hvornår de kan være problematiske, og ABCDE-reglen.'
      : 'Everything about regular moles: what they are, when they may be problematic, and the ABCDE rule.',
    image: '/blog-mole.jpg',
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
              <span className="text-gray-900">{isDa ? 'Almindelige Modermærker' : 'Regular Moles'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Hudforandringer' : 'Skin Changes'}</span>
              <span className="text-gray-500 text-sm">11. {isDa ? 'april' : 'April'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '5 min læsetid' : '5 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa ? 'Almindelige Modermærker (Nevi)' : 'Regular Moles (Nevi)'}
            </h1>
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blog-mole.jpg" alt={isDa ? 'Almindeligt modermærke på hud' : 'Regular mole on skin'} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/60 to-transparent" />
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                {isDa
                  ? <><strong>Modermærker er en af de mest almindelige hudforandringer</strong>, og de fleste mennesker har mellem 10 og 40 modermærker på kroppen. Mens de fleste er harmløse, er det vigtigt at kende til tegn der kan indikere, at et modermærke bør undersøges nærmere.</>
                  : <><strong>Moles are one of the most common skin changes</strong>, and most people have between 10 and 40 moles on their body. While most are harmless, it is important to know the signs that indicate a mole should be examined further.</>}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad er et modermærke?' : 'What is a mole?'}</h2>
              <p>{isDa ? 'Modermærker, også kaldet nevi, er almindelige hudvækster der opstår når pigmentproducerende celler (melanocytter) i huden vokser i klynger eller klumper. De er normalt ufarlige og forårsager ikke fysisk ubehag, men de kan påvirke udseendet.' : 'Moles, also called nevi, are common skin growths that occur when pigment-producing cells (melanocytes) in your skin grow in clusters or clumps. They are usually harmless and do not cause physical discomfort, but they can affect your appearance.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvordan ser et modermærke ud?' : 'What does a mole look like?'}</h2>
              <p>{isDa ? 'Modermærker er typisk små, runde eller ovale pletter på huden. De kan være flade eller hævede, og deres farve varierer fra lyserød til brun eller sort. De fleste modermærker er mindre end 6 millimeter i diameter.' : 'Regular moles are typically small, round, or oval-shaped spots on the skin. They can be flat or raised, and their color ranges from pink to brown or black. Most moles are less than 6 millimeters (about 1/4 inch) in diameter.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'ABCDE-reglen: Hvornår skal du være bekymret?' : 'The ABCDE rule: When should you be concerned?'}</h2>
              <p>{isDa ? 'Det er vigtigt at overvåge dine modermærker for forandringer. Brug ABCDE-reglen til at vurdere om et modermærke kan være problematisk:' : 'It is important to monitor your moles for changes. Use the ABCDE rule to assess if a mole may be problematic:'}</p>
              <ul>
                <li><strong>A – Asymmetri:</strong> {isDa ? 'Den ene halvdel ser anderledes ud end den anden.' : 'One half looks different from the other.'}</li>
                <li><strong>B – Kant (Border):</strong> {isDa ? 'Kanten er ujævn, takket eller uregelmæssig.' : 'The edges are uneven, jagged, or irregular.'}</li>
                <li><strong>C – Farve (Color):</strong> {isDa ? 'Farven varierer med forskellige nuancer af brun, sort, rød, hvid eller blå.' : 'The color varies with different shades of brown, black, red, white, or blue.'}</li>
                <li><strong>D – Diameter:</strong> {isDa ? 'Større end 6 millimeter (blyantsviskelæder-størrelse).' : 'Larger than 6 millimeters (pencil eraser size).'}</li>
                <li><strong>E – Evolution:</strong> {isDa ? 'Modermærket ændrer sig i størrelse, form eller farve over tid.' : 'The mole is changing in size, shape, or color over time.'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvornår skal du søge læge?' : 'When should you see a doctor?'}</h2>
              <p>{isDa ? 'Opsøg en hudlæge hvis du bemærker et modermærke der opfylder et eller flere af ABCDE-kriterierne, hvis et modermærke pludselig ændrer sig, eller hvis du er i tvivl. Tidlig opdagelse af melanom redder liv.' : 'Consult a dermatologist if you notice a mole that meets one or more of the ABCDE criteria, if a mole suddenly changes, or if you are unsure. Early detection of melanoma saves lives.'}</p>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få en vurdering af et modermærke' : 'Get a mole assessment'}</h3>
                <p className="mb-6">{isDa ? 'Hvis du er bekymret for et modermærke, kan du få en personlig vurdering fra en certificeret hudlæge via SKIND-appen — hurtigt og diskret.' : 'If you are concerned about a mole, you can get a personal assessment from a certified dermatologist via the SKIND app — quickly and discreetly.'}</p>
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
