import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

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

const blogPosts = {
  da: [
    {
      slug: 'acne',
      title: 'Hvad er Acne? Årsager, Symptomer og Behandling',
      excerpt: 'Acne er en af de mest udbredte hudlidelser i verden. Lær hvad acne er, hvad der forårsager det, hvem der rammes og hvilke behandlingsmuligheder der findes.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '12. marts 2025',
      image: 'https://images.unsplash.com/photo-1614859324669-927e70f7a474?w=800&q=80',
      imageAlt: 'Acne hudlidelse behandling',
    },
    {
      slug: 'eczema-atopic-dermatitis',
      title: 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling',
      excerpt: 'Eksem påvirker op mod 20% af børn og 3% af voksne. Lær hvad atopisk dermatitis er, hvad der udløser det, og hvilke behandlingsmuligheder der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '12. marts 2026',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
      imageAlt: 'Eksem atopisk dermatitis behandling',
    },
    {
      slug: 'rosacea',
      title: 'Hvad er Rosacea? Årsager, Symptomer og Behandling',
      excerpt: 'Rosacea er en kronisk hudlidelse der forårsager vedvarende rødme, synlige blodkar og undertiden bumser i ansigtet. Lær hvad der udløser det, og hvad du kan gøre.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '13. marts 2026',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80',
      imageAlt: 'Rosacea kronisk hudlidelse',
    },
    {
      slug: 'urticaria-hives',
      title: 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling',
      excerpt: 'Nældefeber rammer op mod 20% af befolkningen i løbet af livet. Lær hvad urticaria er, hvad der udløser de hævede kløende knopper, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '14. marts 2026',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      imageAlt: 'Nældefeber urticaria behandling',
    },
    {
      slug: 'herpes-simplex-virus',
      title: 'Hvad er Herpes Simplex Virus (HSV)? Årsager, Symptomer og Behandling',
      excerpt: 'Herpes simplex virus (HSV) er en af de mest udbredte virale infektioner på verdensplan. Lær hvad der adskiller HSV-1 fra HSV-2, hvordan udbrud ser ud, og hvilken behandling der hjælper.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '15. marts 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      imageAlt: 'Herpes simplex virus HSV behandling',
    },
    {
      slug: 'herpes-zoster-shingles',
      title: 'Hvad er Helvedesild (Herpes Zoster)? Årsager, Symptomer og Behandling',
      excerpt: 'Helvedesild rammer ca. én ud af tre mennesker i løbet af livet. Lær hvad helvedesild er, hvem der er i risiko, hvad det smertefulde udslæt ser ud, og hvilken behandling der virker bedst.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '16. marts 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      imageAlt: 'Helvedesild herpes zoster behandling',
    },
    {
      slug: 'tinea-infections-ringworm',
      title: 'Hvad er Ringorm (Tinea)? Årsager, Symptomer og Behandling',
      excerpt: 'Ringorm er ikke en orm – det er en svampeinfektion. Lær om de forskellige typer tinea-infektioner, hvad der forårsager dem, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '17. marts 2026',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
      imageAlt: 'Ringorm tinea svampeinfektion behandling',
    },
    {
      slug: 'seborrheic-dermatitis',
      title: 'Hvad er Seborrheisk Dermatitis? Årsager, Symptomer og Behandling',
      excerpt: 'Seborrheisk dermatitis er en af de mest almindelige hudlidelser, der rammer op mod 5% af befolkningen. Lær hvad det er, hvad der forårsager det, og hvilke behandlinger der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '19. marts 2026',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
      imageAlt: 'Seborrheisk dermatitis behandling',
    },
    {
      slug: 'vitiligo',
      title: 'Hvad er Vitiligo? Årsager, Symptomer og Behandling',
      excerpt: 'Vitiligo er en autoimmun hudlidelse, der forårsager hvide, afpigmenterede pletter på huden. Lær hvad vitiligo er, hvorfor immunsystemet angriber pigmentcellerne, og hvilke behandlinger der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '18. marts 2026',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
      imageAlt: 'Vitiligo depigmenterede pletter behandling',
    },
    {
      slug: 'scabies',
      title: 'Hvad er Skab? Årsager, Symptomer og Behandling',
      excerpt: 'Skab er en af de mest smitsomme hudlidelser. Lær hvad skab er, hvorfor det smitter så let, hvordan det ser ud, og hvilke behandlinger der effektivt fjerner miden.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '20. marts 2026',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      imageAlt: 'Skab mideinfektion behandling',
    },
    {
      slug: 'contact-dermatitis',
      title: 'Hvad er Kontaktdermatitis? Årsager, Symptomer og Behandling',
      excerpt: 'Kontaktdermatitis opstår når huden reagerer på et stof, den har været i kontakt med. Lær om de to hovedtyper — irritativ og allergisk — og hvad du kan gøre.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '19. marts 2026',
      image: 'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?w=800&q=80',
      imageAlt: 'Kontaktdermatitis hudreaktion behandling',
    },
    {
      slug: 'lichen-planus',
      title: 'Hvad er Lichen Planus? Årsager, Symptomer og Behandling',
      excerpt: 'Lichen planus er en kronisk, inflammatorisk hudlidelse, der forårsager lilla, fladtoppede, kløende knopper. Lær hvad det er, og hvilke behandlinger der kan lindre symptomerne.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '21. marts 2026',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
      imageAlt: 'Lichen planus kløende knopper behandling',
    },
    {
      slug: 'molluscum-contagiosum',
      title: 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling',
      excerpt: 'Molluscum contagiosum er en udbredt virusbaseret hudinfektion, der viser sig som små, perlemorsagtige knopper. Lær hvordan det smitter, og hvilke behandlinger der findes.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '22. marts 2026',
      image: 'https://images.unsplash.com/photo-1614859324669-927e70f7a474?w=800&q=80',
      imageAlt: 'Molluscum contagiosum virusinfektion behandling',
    },
    {
      slug: 'impetigo',
      title: 'Hvad er Impetigo? Årsager, Symptomer og Behandling',
      excerpt: 'Impetigo er en af de mest almindelige bakterielle hudinfektioner hos børn. Lær hvad impetigo er, hvordan honningfarvede skorper ser ud, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '23. marts 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      imageAlt: 'Impetigo bakteriel hudinfektion behandling',
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
      image: 'https://images.unsplash.com/photo-1614859324669-927e70f7a474?w=800&q=80',
      imageAlt: 'Acne skin condition treatment',
    },
    {
      slug: 'eczema-atopic-dermatitis',
      title: 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment',
      excerpt: 'Eczema affects up to 20% of children and 3% of adults worldwide. Learn what atopic dermatitis is, what triggers it, and which treatment options can help.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 12, 2026',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
      imageAlt: 'Eczema atopic dermatitis treatment',
    },
    {
      slug: 'rosacea',
      title: 'What is Rosacea? Causes, Symptoms and Treatment',
      excerpt: 'Rosacea is a chronic skin condition causing persistent facial redness, visible blood vessels and sometimes bumps. Learn what triggers it and what you can do.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 13, 2026',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80',
      imageAlt: 'Rosacea chronic skin condition',
    },
    {
      slug: 'urticaria-hives',
      title: 'What is Urticaria (Hives)? Causes, Symptoms and Treatment',
      excerpt: 'Urticaria affects up to 20% of people at some point in their lives. Learn what hives are, what triggers the raised itchy welts, and which treatments work.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 14, 2026',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      imageAlt: 'Urticaria hives treatment',
    },
    {
      slug: 'herpes-simplex-virus',
      title: 'What is Herpes Simplex Virus (HSV)? Causes, Symptoms and Treatment',
      excerpt: 'Herpes simplex virus (HSV) is one of the most widespread viral infections in the world. Learn how HSV-1 and HSV-2 differ, what outbreaks look like, and which treatment options are available.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 15, 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      imageAlt: 'Herpes simplex virus HSV treatment',
    },
    {
      slug: 'herpes-zoster-shingles',
      title: 'What is Shingles (Herpes Zoster)? Causes, Symptoms and Treatment',
      excerpt: 'Shingles affects about one in three people during their lifetime. Learn what shingles is, who is at risk, what the painful rash looks like, and which treatment works best.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 16, 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      imageAlt: 'Shingles herpes zoster treatment',
    },
    {
      slug: 'tinea-infections-ringworm',
      title: 'What is Ringworm (Tinea)? Causes, Symptoms and Treatment',
      excerpt: "Ringworm is not a worm — it is a fungal infection. Learn about the different types of tinea infections, what causes them, and which treatment works.",
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 17, 2026',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
      imageAlt: 'Ringworm tinea fungal infection treatment',
    },
    {
      slug: 'seborrheic-dermatitis',
      title: 'What is Seborrheic Dermatitis? Causes, Symptoms and Treatment',
      excerpt: 'Seborrheic dermatitis is one of the most common skin conditions, affecting up to 5% of the population. Learn what it is, what causes it, and which treatments work.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 19, 2026',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
      imageAlt: 'Seborrheic dermatitis treatment',
    },
    {
      slug: 'vitiligo',
      title: 'What is Vitiligo? Causes, Symptoms and Treatment',
      excerpt: 'Vitiligo is an autoimmune skin condition that causes white, depigmented patches on the skin. Learn what vitiligo is, why the immune system attacks pigment cells, and which treatments can help.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 18, 2026',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
      imageAlt: 'Vitiligo depigmented patches treatment',
    },
    {
      slug: 'scabies',
      title: 'What is Scabies? Causes, Symptoms and Treatment',
      excerpt: 'Scabies is one of the most contagious skin conditions. Learn what scabies is, why it spreads so easily, what it looks like, and which treatments effectively eliminate the mites.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 20, 2026',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      imageAlt: 'Scabies mite infection treatment',
    },
    {
      slug: 'contact-dermatitis',
      title: 'What is Contact Dermatitis? Causes, Symptoms and Treatment',
      excerpt: 'Contact dermatitis occurs when the skin reacts to a substance it has touched. Learn about the two main types — irritant and allergic — and what you can do about it.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 19, 2026',
      image: 'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?w=800&q=80',
      imageAlt: 'Contact dermatitis skin reaction treatment',
    },
    {
      slug: 'lichen-planus',
      title: 'What is Lichen Planus? Causes, Symptoms and Treatment',
      excerpt: 'Lichen planus is a chronic, inflammatory skin condition causing purple, flat-topped, itchy bumps. Learn what it is and which treatments can help relieve symptoms.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 21, 2026',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
      imageAlt: 'Lichen planus itchy bumps treatment',
    },
    {
      slug: 'molluscum-contagiosum',
      title: 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment',
      excerpt: 'Molluscum contagiosum is a common viral skin infection that appears as small, pearly white bumps. Learn how it spreads, who gets it, and what treatment options are available.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 22, 2026',
      image: 'https://images.unsplash.com/photo-1614859324669-927e70f7a474?w=800&q=80',
      imageAlt: 'Molluscum contagiosum viral infection treatment',
    },
    {
      slug: 'impetigo',
      title: 'What is Impetigo? Causes, Symptoms and Treatment',
      excerpt: 'Impetigo is one of the most common bacterial skin infections in children. Learn what impetigo is, what honey-crusted sores look like, and which treatment works.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 23, 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      imageAlt: 'Impetigo bacterial skin infection treatment',
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
                  {/* Cover Image */}
                  <div className="aspect-[16/10] relative bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
