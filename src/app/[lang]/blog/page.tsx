import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Link from 'next/link';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa 
      ? 'Blog om Hudsygdomme & Behandling | SKIND' 
      : 'Skin Disease & Treatment Blog | SKIND',
    description: isDa 
      ? 'Få ekspertråd om hudsygdomme, behandling af akne, eksem, psoriasis og meget mere. Læs artikler skrevet af certificerede hudlæger.' 
      : 'Get expert advice on skin diseases, acne treatment, eczema, psoriasis and more. Articles written by certified dermatologists.',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/blog`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/blog',
        da: 'https://www.skinchange.dk/da/blog',
        en: 'https://www.skinchange.dk/en/blog',
      },
    },
  };
}

// Only list articles that have actual pages.
// The cron job appends to this list when each new disease is processed.
const blogPosts = {
  da: [
    {
      slug: 'acne',
      title: 'Hvad er Acne? Årsager, Symptomer og Behandling',
      excerpt: 'Acne er en af de mest udbredte hudlidelser i verden. Lær hvad acne er, hvad der forårsager det, hvem der rammes og hvilke behandlingsmuligheder der findes.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '12. marts 2025',
    },
    {
      slug: 'eczema-atopic-dermatitis',
      title: 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling',
      excerpt: 'Eksem påvirker op mod 20% af børn og 3% af voksne. Lær hvad atopisk dermatitis er, hvad der udløser det, og hvilke behandlingsmuligheder der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '12. marts 2026',
    },
    {
      slug: 'rosacea',
      title: 'Hvad er Rosacea? Årsager, Symptomer og Behandling',
      excerpt: 'Rosacea er en kronisk hudlidelse der forårsager vedvarende rødme, synlige blodkar og undertiden bumser i ansigtet. Lær hvad der udløser det, og hvad du kan gøre.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '13. marts 2026',
    },
    {
      slug: 'urticaria-hives',
      title: 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling',
      excerpt: 'Nældefeber rammer op mod 20% af befolkningen i løbet af livet. Lær hvad urticaria er, hvad der udløser de hævede kløende knopper, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '14. marts 2026',
    },
    {
      slug: 'herpes-simplex-virus',
      title: 'Hvad er Herpes Simplex Virus (HSV)? Årsager, Symptomer og Behandling',
      excerpt: 'Herpes simplex virus (HSV) er en af de mest udbredte virale infektioner på verdensplan. Lær hvad der adskiller HSV-1 fra HSV-2, hvordan udbrud ser ud, og hvilken behandling der hjælper.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '15. marts 2026',
    },
    {
      slug: 'herpes-zoster-shingles',
      title: 'Hvad er Helvedesild (Herpes Zoster)? Årsager, Symptomer og Behandling',
      excerpt: 'Helvedesild rammer ca. én ud af tre mennesker i løbet af livet. Lær hvad helvedesild er, hvem der er i risiko, hvad det smertefulde udslæt ser ud, og hvilken behandling der virker bedst.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '16. marts 2026',
    },
    {
      slug: 'tinea-infections-ringworm',
      title: 'Hvad er Ringorm (Tinea)? Årsager, Symptomer og Behandling',
      excerpt: 'Ringorm er ikke en orm – det er en svampeinfektion. Lær om de forskellige typer tinea-infektioner (atletfod, lyskeeksem, ringorm på kroppen og negle), hvad der forårsager dem, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '17. marts 2026',
    },
    {
      slug: 'seborrheic-dermatitis',
      title: 'Hvad er Seborrheisk Dermatitis? Årsager, Symptomer og Behandling',
      excerpt: 'Seborrheisk dermatitis er en af de mest almindelige hudlidelser, der rammer op mod 5% af befolkningen. Lær hvad det er, hvad der forårsager det, og hvilke behandlinger der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '19. marts 2026',
    },
    {
      slug: 'vitiligo',
      title: 'Hvad er Vitiligo? Årsager, Symptomer og Behandling',
      excerpt: 'Vitiligo er en autoimmun hudlidelse, der forårsager hvide, afpigmenterede pletter på huden. Lær hvad vitiligo er, hvorfor immunsystemet angriber pigmentcellerne, hvem der rammes, og hvilke behandlinger der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '18. marts 2026',
    },
    {
      slug: 'scabies',
      title: 'Hvad er Skab? Årsager, Symptomer og Behandling',
      excerpt: 'Skab er en af de mest smitsomme hudlidelser. Lær hvad skab er, hvorfor det smitter så let, hvordan det ser ud, og hvilke behandlinger der effektivt fjerner miden.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '20. marts 2026',
    },
    {
      slug: 'contact-dermatitis',
      title: 'Hvad er Kontaktdermatitis? Årsager, Symptomer og Behandling',
      excerpt: 'Kontaktdermatitis er en af de mest almindelige hudlidelser og opstår når huden reagerer på et stof, den har været i kontakt med. Lær om de to hovedtyper — irritativ og allergisk — og hvad du kan gøre.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '19. marts 2026',
    },
    {
      slug: 'lichen-planus',
      title: 'Hvad er Lichen Planus? Årsager, Symptomer og Behandling',
      excerpt: 'Lichen planus er en kronisk, inflammatorisk hudlidelse, der forårsager lilla, fladtoppede, kløende knopper. Lær hvad det er, hvordan det ser ud, og hvilke behandlinger der kan lindre symptomerne.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '21. marts 2026',
    },
    {
      slug: 'molluscum-contagiosum',
      title: 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling',
      excerpt: 'Molluscum contagiosum er en udbredt virusbaseret hudinfektion, der viser sig som små, perlemorsagtige knopper. Lær hvordan det smitter, hvem der rammes, og hvilke behandlinger der findes.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '22. marts 2026',
    },
    {
      slug: 'impetigo',
      title: 'Hvad er Impetigo? Årsager, Symptomer og Behandling',
      excerpt: 'Impetigo er en af de mest almindelige bakterielle hudinfektioner hos børn. Lær hvad impetigo er, hvordan honningfarvede skorper ser ud, hvem der rammes, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '23. marts 2026',
    },
  ],
  en: [
    {
      slug: 'acne',
      title: 'What is Acne? Causes, Symptoms and Treatment',
      excerpt: 'Acne is one of the most common skin conditions in the world. Learn what acne is, what causes it, who gets it and what treatment options are available.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 12, 2025',
    },
    {
      slug: 'eczema-atopic-dermatitis',
      title: 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment',
      excerpt: 'Eczema affects up to 20% of children and 3% of adults worldwide. Learn what atopic dermatitis is, what triggers it, and which treatment options can help.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 12, 2026',
    },
    {
      slug: 'rosacea',
      title: 'What is Rosacea? Causes, Symptoms and Treatment',
      excerpt: 'Rosacea is a chronic skin condition causing persistent facial redness, visible blood vessels and sometimes bumps. Learn what triggers it and what you can do.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 13, 2026',
    },
    {
      slug: 'urticaria-hives',
      title: 'What is Urticaria (Hives)? Causes, Symptoms and Treatment',
      excerpt: 'Urticaria affects up to 20% of people at some point in their lives. Learn what hives are, what triggers the raised itchy welts, and which treatments work.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 14, 2026',
    },
    {
      slug: 'herpes-simplex-virus',
      title: 'What is Herpes Simplex Virus (HSV)? Causes, Symptoms and Treatment',
      excerpt: 'Herpes simplex virus (HSV) is one of the most widespread viral infections in the world. Learn how HSV-1 and HSV-2 differ, what outbreaks look like, and which treatment options are available.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 15, 2026',
    },
    {
      slug: 'herpes-zoster-shingles',
      title: 'What is Shingles (Herpes Zoster)? Causes, Symptoms and Treatment',
      excerpt: 'Shingles affects about one in three people during their lifetime. Learn what shingles is, who is at risk, what the painful rash looks like, and which treatment works best.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 16, 2026',
    },
    {
      slug: 'tinea-infections-ringworm',
      title: 'What is Ringworm (Tinea)? Causes, Symptoms and Treatment',
      excerpt: 'Ringworm is not a worm — it is a fungal infection. Learn about the different types of tinea infections (athlete\'s foot, jock itch, body ringworm and nail fungus), what causes them, and which treatment works.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 17, 2026',
    },
    {
      slug: 'seborrheic-dermatitis',
      title: 'What is Seborrheic Dermatitis? Causes, Symptoms and Treatment',
      excerpt: 'Seborrheic dermatitis is one of the most common skin conditions, affecting up to 5% of the population. Learn what it is, what causes it, and which treatments work.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 19, 2026',
    },
    {
      slug: 'vitiligo',
      title: 'What is Vitiligo? Causes, Symptoms and Treatment',
      excerpt: 'Vitiligo is an autoimmune skin condition that causes white, depigmented patches on the skin. Learn what vitiligo is, why the immune system attacks pigment cells, who gets it, and which treatments can help.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 18, 2026',
    },
    {
      slug: 'scabies',
      title: 'What is Scabies? Causes, Symptoms and Treatment',
      excerpt: 'Scabies is one of the most contagious skin conditions. Learn what scabies is, why it spreads so easily, what it looks like, and which treatments effectively eliminate the mites.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 20, 2026',
    },
    {
      slug: 'contact-dermatitis',
      title: 'What is Contact Dermatitis? Causes, Symptoms and Treatment',
      excerpt: 'Contact dermatitis is one of the most common skin conditions, occurring when the skin reacts to a substance it has touched. Learn about the two main types — irritant and allergic — and what you can do about it.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 19, 2026',
    },
    {
      slug: 'lichen-planus',
      title: 'What is Lichen Planus? Causes, Symptoms and Treatment',
      excerpt: 'Lichen planus is a chronic, inflammatory skin condition causing purple, flat-topped, itchy bumps. Learn what it is, how it looks, and which treatments can help relieve symptoms.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 21, 2026',
    },
    {
      slug: 'molluscum-contagiosum',
      title: 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment',
      excerpt: 'Molluscum contagiosum is a common viral skin infection that appears as small, pearly white bumps. Learn how it spreads, who gets it, and what treatment options are available.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 22, 2026',
    },
    {
      slug: 'impetigo',
      title: 'What is Impetigo? Causes, Symptoms and Treatment',
      excerpt: 'Impetigo is one of the most common bacterial skin infections in children. Learn what impetigo is, what honey-crusted sores look like, who gets it, and which treatment works.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 23, 2026',
    },
  ],
};

export default function BlogPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';
  const posts = isDa ? blogPosts.da : blogPosts.en;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation lang={lang} />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#1a237e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
            {isDa ? 'Vores Blog' : 'Our Blog'}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {isDa 
              ? 'Ekspertråd om hudsygdomme, behandlinger og hudpleje fra certificerede hudlæger'
              : 'Expert advice on skin diseases, treatments and skincare from certified dermatologists'}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="diseases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link 
                key={index}
                href={`/${lang}/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#304ffe] to-[#1a237e] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/30">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-[#1a237e] text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} {isDa ? 'læsetid' : 'read'}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[#1a237e] mb-3 group-hover:text-[#304ffe] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4 flex items-center text-[#304ffe] font-semibold text-sm">
                      {isDa ? 'Læs mere' : 'Read more'}
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a237e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {isDa ? 'Har du et hudproblem?' : 'Do you have a skin problem?'}
          </h2>
          <p className="text-xl text-white/70 mb-8">
            {isDa 
              ? 'Få en professionel diagnose inden for 48 timer'
              : 'Get a professional diagnosis within 48 hours'}
          </p>
          <Link
            href={`/${lang}/download`}
            className="inline-flex items-center px-8 py-4 bg-white text-[#1a237e] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            {isDa ? 'Download appen' : 'Download the app'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
