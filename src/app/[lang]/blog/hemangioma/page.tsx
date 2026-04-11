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
        title: 'Hvad er Hæmangiom? Årsager, Symptomer og Behandling | SKIND',
        description: 'Lær om hæmangiomer: hvad de er, hvordan de ser ud, hvem der rammes, og hvornår behandling er nødvendig. Fra SKIND hudlæger.',
        keywords: 'hæmangiom, kirsebærhæmangiom, jordbærhæmangiom, godartet hudvækst, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/da/blog/hemangioma',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/hemangioma', da: 'https://www.skinchange.dk/da/blog/hemangioma', en: 'https://www.skinchange.dk/en/blog/hemangioma' },
        },
      }
    : {
        title: 'What is Hemangioma? Causes, Symptoms and Treatment | SKIND',
        description: 'Learn about hemangiomas: what they are, what they look like, who they affect, and when treatment is needed. From SKIND dermatologists.',
        keywords: 'hemangioma, cherry angioma, strawberry hemangioma, benign skin growth, SKIND',
        alternates: {
          canonical: 'https://www.skinchange.dk/en/blog/hemangioma',
          languages: { 'x-default': 'https://www.skinchange.dk/da/blog/hemangioma', da: 'https://www.skinchange.dk/da/blog/hemangioma', en: 'https://www.skinchange.dk/en/blog/hemangioma' },
        },
      };
}

export default function HemangiomaPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isDa ? 'Hæmangiom: Årsager, Symptomer og Behandling' : 'Hemangioma: Causes, Symptoms and Treatment',
    description: isDa ? 'Alt om hæmangiomer: hvad de er, behandlingsmuligheder og hvornår læge er nødvendig.' : 'Everything about hemangiomas: what they are, treatment options and when a doctor is needed.',
    image: '/blog-hemangioma.jpg',
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
              <span className="text-gray-900">{isDa ? 'Hæmangiom' : 'Hemangioma'}</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">{isDa ? 'Godartede Hudvækster' : 'Benign Skin Growths'}</span>
              <span className="text-gray-500 text-sm">11. {isDa ? 'april' : 'April'} 2026</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{isDa ? '5 min læsetid' : '5 min read'}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              {isDa ? 'Hvad er Hæmangiom? Årsager, Symptomer og Behandling' : 'What is Hemangioma? Causes, Symptoms and Treatment'}
            </h1>
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/blog-hemangioma.jpg" alt={isDa ? 'Kirsebærhæmangiom på hud' : 'Cherry hemangioma on skin'} className="w-full h-full object-cover mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/60 to-transparent" />
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                {isDa
                  ? <><strong>Hæmangiomer er godartede (ikke-kræftfremkaldende) hudvækster</strong> der består af en unormal ophobning af blodkar. De er mest almindelige hos spædbørn men kan også forekomme hos voksne, hvor kirsebærhæmangiomer er den hyppigste form.</>
                  : <><strong>Hemangiomas are benign (non-cancerous) skin growths</strong> consisting of an abnormal buildup of blood vessels. They are most common in infants but can also occur in adults, where cherry hemangiomas are the most frequent form.</>}
              </p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvad er et hæmangiom?' : 'What is a hemangioma?'}</h2>
              <p>{isDa ? 'Et hæmangiom er en godartet tumor der består af en unormal ophobning af blodkar. Disse vækster kan forekomme overalt på kroppen men findes oftest på huden eller indre organer som leveren. Den præcise årsag er ukendt, men de menes at være relateret til genetiske faktorer og muligvis hormonelle påvirkninger.' : 'A hemangioma is a benign tumor consisting of an abnormal buildup of blood vessels. These growths can appear anywhere on the body but are most commonly found on the skin or internal organs such as the liver. The exact cause is unknown, but they are believed to be related to genetic factors and possibly hormonal influences.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Typer af hæmangiomer' : 'Types of hemangiomas'}</h2>
              <ul>
                <li><strong>{isDa ? 'Infantile hæmangiomer (jordbærhæmangiomer):' : 'Infantile hemangiomas (strawberry hemangiomas):'}</strong> {isDa ? 'Ses hos spædbørn og vokser ofte hurtigt i de første måneder før de langsomt krymper.' : 'Seen in infants and often grow rapidly in the first months before slowly shrinking.'}</li>
                <li><strong>{isDa ? 'Kirsebærhæmangiomer:' : 'Cherry hemangiomas:'}</strong> {isDa ? 'Almindelige hos voksne over 30 år, især over 75. De viser sig som små, røde eller lilla knuder.' : 'Common in adults over 30, especially over 75. They appear as small, red or purple bumps.'}</li>
                <li><strong>{isDa ? 'Cavernøse hæmangiomer:' : 'Cavernous hemangiomas:'}</strong> {isDa ? 'Dybere placerede hæmangiomer der kan påvirke indre organer.' : 'Deeper hemangiomas that may affect internal organs.'}</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvem får hæmangiomer?' : 'Who gets hemangiomas?'}</h2>
              <p>{isDa ? 'Hæmangiomer er mest almindelige hos spædbørn, hvor omkring 1 ud af 10 babyer har dem ved fødslen. De er mere udbredte hos piger, for tidligt fødte spædbørn og dem med lav fødselsvægt. Hos voksne ses kirsebærhæmangiomer oftere hos personer over 30 år.' : 'Hemangiomas are most common in infants, with about 1 in 10 babies having them at birth. They are more prevalent in females, premature infants and those with low birth weight. In adults, cherry hemangiomas are more common in people over 30.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Behandling af hæmangiomer' : 'Treatment of hemangiomas'}</h2>
              <p>{isDa ? 'De fleste infantile hæmangiomer forsvinder af sig selv inden for få år og kræver ingen behandling. Hvis behandling er nødvendig (f.eks. hvis hæmangiomet påvirker syn eller vejrtrækning), kan beta-blokkere som propranolol bruges. Voksne kirsebærhæmangiomer behandles typisk kun af kosmetiske årsager med laserterapi.' : 'Most infantile hemangiomas resolve on their own within a few years and require no treatment. If treatment is needed (e.g. if the hemangioma affects vision or breathing), beta-blockers such as propranolol may be used. Adult cherry hemangiomas are typically treated only for cosmetic reasons with laser therapy.'}</p>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">{isDa ? 'Hvornår skal du søge læge?' : 'When should you see a doctor?'}</h2>
              <p>{isDa ? 'Konsulter en hudlæge hvis et hæmangiom vokser usædvanligt hurtigt, bløder, forårsager smerte, eller hvis du bemærker ændringer der kan indikere en mere alvorlig tilstand.' : 'Consult a dermatologist if a hemangioma grows unusually rapidly, bleeds, causes pain, or if you notice changes that may indicate a more serious condition.'}</p>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">{isDa ? 'Få en vurdering af et hæmangiom' : 'Get a hemangioma assessment'}</h3>
                <p className="mb-6">{isDa ? 'Hvis du er bekymret for et hæmangiom, kan du få en personlig vurdering fra en certificeret hudlæge via SKIND-appen.' : 'If you are concerned about a hemangioma, you can get a personal assessment from a certified dermatologist via the SKIND app.'}</p>
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
