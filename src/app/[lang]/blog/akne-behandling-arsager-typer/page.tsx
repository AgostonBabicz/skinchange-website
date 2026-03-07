import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Link from 'next/link';
import Script from 'next/script';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Akne: Årsager, Typer og Effektiv Behandling | SKIND',
    description: 'Komplet guide til akne behandling. Lær om hormonelle udslet, bakterielle infektioner, behandlingsmuligheder og hvordan du får ren hud. Skrevet af speciallæge Peter Bjerring.',
    keywords: 'akne behandling, akne årsager, bumser behandling, uren hud, hormonelle udslet, akne medicin, akne ar, hudlæge akne',
    alternates: {
      canonical: 'https://www.skinchange.dk/da/blog/akne-behandling-arsager-typer',
    },
  };
}

export default function AkneArticle({ params: { lang } }: PageProps) {
  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Akne: Årsager, Typer og Effektiv Behandling',
    description: 'Komplet guide til akne behandling. Lær om hormonelle udslet, bakterielle infektioner og behandlingsmuligheder.',
    image: 'https://www.skinchange.dk/skinchange-website/blog/akne.jpg',
    datePublished: '2025-03-03',
    dateModified: '2025-03-03',
    author: {
      '@type': 'Person',
      name: 'Peter Bjerring',
      jobTitle: 'Speciallæge i hudsygdomme',
      url: 'https://www.skinchange.dk/da/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SKIND',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.skinchange.dk/SKIND_logo_dark.svg'
      }
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient'
    }
  };

  // FAQ Schema for this article
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hvad forårsager akne?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Akne forårsages primært af fire faktorer: Overskydende talgproduktion, tilstoppede porer, bakterier (Cutibacterium acnes) og betændelse. Hormonelle ændringer, især under puberteten, graviditet eller menstruation, kan forværre akne.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hvad er den bedste behandling mod akne?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Den bedste akne behandling afhænger af sværhedsgraden. Mild akne kan behandles med benzoylperoxid eller salicylsyre. Moderat til svær akne kræver ofte receptpligtig medicin som retinoider (Differin, Basiron) eller antibiotika. I svære tilfælde kan isotretinoin (Roaccutan) være nødvendigt.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kan akne forsvinde af sig selv?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mild akne kan forsvinde af sig selv, især efter puberteten. Men moderat til svær akne kræver ofte behandling for at forhindre ardannelse og forværring. Tidlig behandling giver de bedste resultater.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hvilken kost forværrer akne?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Forskning viser, at fødevarer med højt glykæmisk indeks (sukker, hvidt brød), mejeriprodukter og fedtholdig mad kan forværre akne hos nogle mennesker. Et kosthold rigt på frugt, grøntsager og omega-3 fedtsyrer kan hjælpe.'
        }
      }
    ]
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
        
        {/* Article Header */}
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href={`/${lang}`} className="hover:text-[#304ffe]">Forside</Link>
              <span className="mx-2">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-[#304ffe]">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Akne Behandling</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#304ffe]/10 text-[#304ffe] text-sm font-semibold px-3 py-1 rounded-full">
                Hudsygdomme
              </span>
              <span className="text-gray-500 text-sm">3. marts 2025</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">8 min læsetid</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display">
              Akne: Årsager, Typer og Effektiv Behandling
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-[#304ffe] to-[#1a237e] rounded-full flex items-center justify-center text-white font-bold">
                PB
              </div>
              <div>
                <p className="font-semibold text-gray-900">Peter Bjerring</p>
                <p className="text-sm text-gray-600">Speciallæge i hudsygdomme • 30+ års erfaring</p>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                <strong>Akne er Danmarks mest almindelige hudsygdom</strong>, som rammer op mod 80% af alle unge mellem 12 og 25 år. Men akne er ikke kun et teenageproblem – mange voksne lider også af hudorme, bumser og dybe cyster.
              </p>
              <p>
                I denne komplette guide vil jeg forklare, hvad der forårsager akne, de forskellige typer, og mest vigtigt: <strong>hvordan du effektivt behandler akne</strong> og får ren, sund hud igen.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-[#1a237e] mb-4">Indholdsfortegnelse</h2>
              <ul className="space-y-2">
                <li><a href="#hvad-er-akne" className="text-[#304ffe] hover:underline">Hvad er akne?</a></li>
                <li><a href="#arsager" className="text-[#304ffe] hover:underline">Hvad forårsager akne?</a></li>
                <li><a href="#typer" className="text-[#304ffe] hover:underline">Forskellige typer af akne</a></li>
                <li><a href="#behandling" className="text-[#304ffe] hover:underline">Akne behandling – hvad virker?</a></li>
                <li><a href="#receptpligtig" className="text-[#304ffe] hover:underline">Receptpligtig medicin mod akne</a></li>
                <li><a href="#kost" className="text-[#304ffe] hover:underline">Kost og livsstil</a></li>
                <li><a href="#ar" className="text-[#304ffe] hover:underline">Akne ar – forebyggelse og behandling</a></li>
                <li><a href="#hvem" className="text-[#304ffe] hover:underline">Hvem får akne?</a></li>
                <li><a href="#faq" className="text-[#304ffe] hover:underline">Ofte stillede spørgsmål</a></li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none text-gray-700">
              
              <h2 id="hvad-er-akne" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Hvad er akne?
              </h2>
              <p>
                Akne (acne vulgaris) er en kronisk betændelsestilstand i hudens talgkirtler og hårfollikler. Det viser sig som:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Komedoner (hudorme):</strong> Tilstoppede porer – enten åbne (sorte) eller lukkede (hvide)</li>
                <li><strong>Papler:</strong> Røde, hævede knopper uden synligt indhold</li>
                <li><strong>Pustler:</strong> Betændte bumser med gul/hvidt indhold (pus)</li>
                <li><strong>Noduli og cyster:</strong> Dybe, smertefulde knuder under huden</li>
              </ul>
              <p>
                Akne opstår typisk i ansigtet, på ryggen, brystet og skuldrene – områder med mange talgkirtler.
              </p>

              <h2 id="arsager" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Hvad forårsager akne? De 4 hovedårsager
              </h2>
              <p>
                Akne udvikles gennem en kombination af fire faktorer:
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">1. Øget talgproduktion</h3>
              <p>
                <strong>Testosteron og andre hormoner</strong> stimulerer talgkirtlerne til at producere mere fedt (talg). Dette er grunden til, at akne ofte starter i puberteten, hvor hormonniveauerne stiger kraftigt.
              </p>
              <p>
                Hos voksne kvinder kan hormonelle udsving i forbindelse med menstruation, graviditet eller PCOS også udløse akne.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">2. Tilstoppede porer</h3>
              <p>
                Når døde hudceller ikke fjernes effektivt, blander de sig med talg og tilstopper hårfolliklerne. Dette danner <strong>komedoner</strong> – hudorme, der er forstadiet til betændt akne.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">3. Bakterier (Cutibacterium acnes)</h3>
              <p>
                Bakterien <em>Cutibacterium acnes</em> (tidligere kaldet Propionibacterium acnes) lever normalt på huden. Men når porerne er tilstoppede, trives bakterien i det fedt-rige miljø og forårsager betændelse.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">4. Betændelse</h3>
              <p>
                Når immunsystemet reagerer på bakterierne, opstår rødme, hævelse og smerte. Dette er de synlige, røde bumser og cyster.
              </p>

              <div className="bg-[#1a237e]/5 border-l-4 border-[#304ffe] p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-[#1a237e] mb-2">Faktorer der kan forværre akne:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Stress (øger kortisol, som stimulerer talgproduktion)</li>
                  <li>Medicin (steroider, lithium, visse p-piller)</li>
                  <li>Kosmetik der tilstopper porer (comedogenic)</li>
                  <li>Rengøringsprodukter der udtørrer huden (modreaktion med mere talg)</li>
                  <li>At klemme bumser (spreder betændelse og forårsager ar)</li>
                </ul>
              </div>

              <h2 id="typer" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Forskellige typer af akne
              </h2>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Komédonal akne (mild)</h3>
              <p>
                <strong>Karakteristika:</strong> Hudorme (åbne og lukkede) uden betændelse<br/>
                <strong>Lokalisation:</strong> Pande, næse, hage (T-zonen)<br/>
                <strong>Behandling:</strong> Over-the-counter produkter med salicylsyre eller benzoylperoxid
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Inflammatorisk akne (moderat)</h3>
              <p>
                <strong>Karakteristika:</strong> Røde papler og pustler (betændte bumser)<br/>
                <strong>Lokalisation:</strong> Ansigt, ryg, bryst<br/>
                <strong>Behandling:</strong> Topisk antibiotika, retinoider eller kombination
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Nodulocystisk akne (svær)</h3>
              <p>
                <strong>Karakteristika:</strong> Dybe, smertefulde noduli og cyster. Høj risiko for ardannelse.<br/>
                <strong>Lokalisation:</strong> Ansigt, især kinder og kæbe. Også ryg og bryst.<br/>
                <strong>Behandling:</strong> Systemisk behandling (isotretinoin eller antibiotika). Kræver altid hudlæge.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Andre akne-varianter</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Akne conglobata:</strong> Meget svær form med sammenvoksede cyster</li>
                <li><strong>Akne fulminans:</strong> Akut svær akne med feber og ledsmerter</li>
                <li><strong>Acne mechanica:</strong> Udløst af friktion (f.eks. sportsudstyr)</li>
                <li><strong>Maskne:</strong> Akne forårsaget af mundbind (øget fugt og friktion)</li>
              </ul>

              <h2 id="behandling" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Akne behandling – hvad virker?
              </h2>
              <p>
                Effektiv akne behandling kræver en skræddersyet tilgang baseret på sværhedsgraden. Her er de mest anvendte behandlingsmetoder:
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">1. Topisk (lokal) behandling</h3>
              <p className="font-semibold mb-2">Over-the-counter (håndkøb):</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Benzoylperoxid (2,5-10%):</strong> Dræber bakterier og fjerner døde hudceller. God effekt mod milde bumser. Kan udtørre huden.</li>
                <li><strong>Salicylsyre (BHA, 0,5-2%):</strong> Opløser talg i porerne. Effektiv mod hudorme.</li>
                <li><strong>Glykolsyre (AHA):</strong> Eksfolierer hudoverfladen. God til at forbedre hudtekstur og ar.</li>
                <li><strong>Niacinamid (4-5%):</strong> Regulerer talg og reducerer betændelse. Mild og velegnet til følsom hud.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">2. Receptpligtig topisk behandling</h3>
              <p className="font-semibold mb-2">Kræver konsultation med hudlæge:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 my-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-2 text-left">Præparat</th>
                      <th className="border px-4 py-2 text-left">Virker mod</th>
                      <th className="border px-4 py-2 text-left">Bivirkninger</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">Differin (adapalene)</td>
                      <td className="border px-4 py-2">Komedoner, milde bumser</td>
                      <td className="border px-4 py-2">Udtørring, rødme, solfølsomhed</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">Basiron (benzoylperoxid)</td>
                      <td className="border px-4 py-2">Betændte bumser</td>
                      <td className="border px-4 py-2">Blegning af tøj, irritation</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">Zineryt (erythromycin + zink)</td>
                      <td className="border px-4 py-2">Betændelsesakne</td>
                      <td className="border px-4 py-2">Sjældne, mild irritation</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-semibold">Dalacin (clindamycin)</td>
                      <td className="border px-4 py-2">Moderat betændelsesakne</td>
                      <td className="border px-4 py-2">Resistensudvikling ved monoterapi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="receptpligtig" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Systemisk (indvortes) behandling
              </h2>
              <p>
                Ved moderat til svær akne, eller når topisk behandling ikke er tilstrækkelig, kan systemisk behandling være nødvendig:
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Antibiotika</h3>
              <p>
                <strong>Tetracykliner</strong> (doxycyclin, lymecyclin) eller <strong>makrolider</strong> (erythromycin) anvendes til at reducere betændelse og bakterier. Behandlingen varer typisk 3-6 måneder.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Vigtigt:</strong> Antibiotika bør altid kombineres med topisk behandling (f.eks. benzoylperoxid) for at forhindre antibiotikaresistens.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Hormonel behandling (kvinder)</h3>
              <p>
                <strong>Anti-androgen p-piller</strong> (f.eks. Yasmin, Diane-35) kan reducere talgproduktionen ved at blokere mandlige hormoner. Velegnet til kvinder med hormonel akne.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Isotretinoin (Roaccutan) – &quot;guldstandarden&quot;</h3>
              <p>
                <strong>Isotretinoin</strong> er et A-vitamin derivat og den mest effektive akne behandling. Det reducerer talgproduktion, forhindrer tilstoppede porer og har anti-inflammatorisk effekt.
              </p>
              <p className="font-semibold text-[#1a237e] mt-4">Fordele:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Op til 85% oplever permanent helbredelse efter én kur</li>
                <li>Effektiv mod alle typer akne, inklusive svær cystisk akne</li>
                <li>Forebygger ardannelse</li>
              </ul>
              <p className="font-semibold text-[#1a237e] mt-4">Bivirkninger og forholdsregler:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Alvorlig udtørring af hud, læber og øjne</li>
                <li><strong>Graviditetsforbud:</strong> Meget foster skadeligt. To former for prævention påkrævet.</li>
                <li>Leverpåvirkning (kræver blodprøvekontrol)</li>
                <li>Påvirkning af humør (depression i sjældne tilfælde)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Behandlingen varer 6-9 måneder og kræver tæt opfølgning af hudlæge.
              </p>

              <h2 id="kost" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Kost og livsstil: Hvad virker mod akne?
              </h2>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Fødevarer der kan forværre akne</h3>
              <p>Forskning viser sammenhæng mellem følgende kostfaktorer og akne:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Højt glykæmisk indeks:</strong> Sukker, hvidt brød, pasta, ris og søde drikkevarer øger insulin, som stimulerer talgproduktion</li>
                <li><strong>Mejeriprodukter:</strong> Især skummetmælk kan forværre akne hos nogle mennesker (hormoner i mælk)</li>
                <li><strong>Hurtigmat:</strong> Fedtholdig, forarbejdet mad med højt sukkerindhold</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Fødevarer der kan hjælpe</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Omega-3 fedtsyrer:</strong> Fed fisk (laks, makrel), hørfrø, valnødder (anti-inflammatorisk)</li>
                <li><strong>Zink:</strong> Oysters, kød, græskarkerner (regulerer talgproduktion)</li>
                <li><strong>Probiotika:</strong> Yoghurt, kefir, surkål (tarm-hud-akse)</li>
                <li><strong>Grøntsager og frugter:</strong> Antioxidanter og fiber stabiliserer blodsukker</li>
                <li><strong>Grøn te:</strong> Anti-inflammatorisk og antioxidant</li>
              </ul>

              <div className="bg-[#304ffe]/5 border-l-4 border-[#304ffe] p-6 my-8 rounded-r-lg">
                <p className="font-semibold text-[#1a237e] mb-2">Anbefaling: Prøv en 30-dages kostomlægning</p>
                <p className="text-sm">
                  Fjern sukker, hvidt mel og mejeriprodukter i 30 dage og observer effekten på din hud. Hold en dagbog over kost og hudtilstand.
                </p>
              </div>

              <h2 id="ar" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Akne ar – forebyggelse og behandling
              </h2>
              <p>
                <strong>Tidlig behandling er den bedste forebyggelse mod ar.</strong> Jo længere akne ubehandlet, jo større risiko for ardannelse.
              </p>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Typer af akne ar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Atrofiske ar (ice pick/boxcar):</strong> Små &quot;huller&quot; i huden</li>
                <li><strong>Hypertrofiske ar:</strong> Ophobet væv der står op fra huden</li>
                <li><strong>Keloide ar:</strong> Store, røde ar der vokser udover sårområdet</li>
                <li><strong>Post-inflammatorisk hyperpigmentation:</strong> Mørke pletter efter bumser (ikke egentlige ar)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1a237e] mt-8 mb-4">Behandling af akne ar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Retinoider:</strong> Forbedrer hudtekstur over tid</li>
                <li><strong>Kemisk peeling:</strong> AHA/BHA syrer fjerner overhuden</li>
                <li><strong>Mikrodermabrasion:</strong> Mekanisk eksfoliering</li>
                <li><strong>Laserbehandling:</strong> Fraktioneret CO2 laser eller Erbium laser</li>
                <li><strong>Microneedling:</strong> Stimulerer kollagenproduktion</li>
                <li><strong>Fyldstoffer:</strong> Hyaluronsyre til at udfylde dybe ar</li>
              </ul>

              <h2 id="hvem" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Hvem får akne?
              </h2>
              <p>
                Akne kan ramme alle, men visse grupper er mere udsatte:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Teenagere (12-25 år):</strong> 85% oplever akne i puberteten</li>
                <li><strong>Voksne kvinder:</strong> 12-22% har akne efter 25 år, ofte hormonelt udløst</li>
                <li><strong>Personer med arvelig disposition:</strong> Hvis forældre havde svær akne, øges risikoen</li>
                <li><strong>Personer med hormonelle forstyrrelser:</strong> PCOS, Cushings syndrom</li>
              </ul>

              <h2 id="hvornaar" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Hvornår skal du søge lægehjælp?
              </h2>
              <p>
                Overvej konsultation hos en hudlæge hvis:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aknen er moderat til svær (mange betændte bumser)</li>
                <li>Over-the-counter behandling ikke hjælper efter 2-3 måneder</li>
                <li>Aknen påvirker dit selvværd eller sociale liv</li>
                <li>Du udvikler ar eller mørke pletter</li>
                <li>Aknen pludseligt forværres</li>
              </ul>

              <div className="bg-[#1a237e] text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Få professionel hjælp online</h3>
                <p className="mb-6">
                  Hos SKIND kan du få en diagnose og personlig behandlingsplan fra en certificeret hudlæge – uden at forlade hjemmet. Upload billeder af din hud, og modtag svar inden for 48 timer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${lang}/download`}
                    className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#1a237e] rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    Download appen
                  </Link>
                  <Link
                    href={`/${lang}/faq`}
                    className="inline-flex justify-center items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                  >
                    Læs mere om online konsultation
                  </Link>
                </div>
              </div>

              <h2 id="faq" className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Ofte stillede spørgsmål om akne
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">Kan akne forsvinde af sig selv?</h3>
                  <p>Mild akne kan forsvinde efter puberteten, men moderat til svær akne kræver behandling. Jo tidligere behandlingen startes, jo bedre resultater og mindre risiko for ar.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">Kan makeup forværre akne?</h3>
                  <p>Ja, hvis du bruger comedogenic (poretilstoppende) produkter. Vælg altid non-comedogenic, oliefri makeup. Husk at fjerne makeup grundigt inden sengetid.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">Hvor lang tid tager akne behandling?</h3>
                  <p>Du kan forvente at se forbedring efter 4-8 uger, men fuld effekt kan tage 3-6 måneder. Væsentligt med tålmodighed og konsistent behandling.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">Bliver akne værre før den bliver bedre?</h3>
                  <p>Ja, især ved start på retinoider (&quot;purging&quot;) kan huden se værre ud de første 4-6 uger. Dette er normalt og tegn på at behandlingen virker.</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1a237e] mb-2">Kan sol hjælpe mod akne?</h3>
                  <p>Kortvarigt kan sol tørre bumser ud, men langsigtet forværres akne af solskader. UV-stråler skader hudbarrieren og kan forårsage mørke pletter efter bumser.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#1a237e] mt-12 mb-6">
                Konklusion
              </h2>
              <p>
                Akne er en kompleks hudsygdom med flere årsager, men <strong>effektiv behandling findes</strong>. Nøglen er at:
              </p>
              <ol className="list-decimal pl-6 space-y-2 my-4">
                <li>Identificere sværhedsgraden</li>
                <li>Vælge den rette behandling (topisk, systemisk eller kombination)</li>
                <li>Være konsistent med behandlingen i 3-6 måneder</li>
                <li>Overveje kostomlægning (lav glykæmisk belastning)</li>
                <li>Søge professionel hjælp ved moderat til svær akne</li>
              </ol>
              <p>
                Hos SKIND står vi klar til at hjælpe dig med at få den rette diagnose og behandling. <Link href={`/${lang}/download`} className="text-[#304ffe] hover:underline font-semibold">Download appen</Link> og få kontakt til en hudlæge i dag.
              </p>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-sm text-gray-500">
                  <strong>Ansvarsfraskrivelse:</strong> Denne artikel er udelukkende til informationsformål og erstatter ikke professionel lægehjælp. Konsulter altid en hudlæge før du starter behandling. Diagnose og behandling kræver individuel vurdering.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  <strong>Kilder:</strong> Denne artikel er baseret på videnskabelig litteratur, herunder guidelines fra European Academy of Dermatology and Venereology (EADV) og Dansk Dermatologisk Selskab.
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
