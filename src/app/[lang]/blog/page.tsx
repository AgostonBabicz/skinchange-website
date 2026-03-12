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
  };
}

// Only list articles that have actual pages.
// The cron job appends to this list when each new disease is processed.
const blogPosts = {
  da: [
    {
      slug: 'akne-behandling-arsager-typer',
      title: 'Akne: Årsager, Typer og Effektiv Behandling',
      excerpt: 'Alt du behøver at vide om akne - fra hormonelle udslet til bakterielle infektioner. Lær hvordan du får ren hud med den rette behandling.',
      category: 'Hudsygdomme',
      readTime: '8 min',
      date: '3. marts 2025',
    },
    {
      slug: 'acne',
      title: 'Hvad er Acne? Årsager, Symptomer og Behandling',
      excerpt: 'Acne er en af de mest udbredte hudlidelser i verden. Lær hvad acne er, hvad der forårsager det, hvem der rammes og hvilke behandlingsmuligheder der findes.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '12. marts 2025',
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
      <section className="py-20 bg-white">
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
