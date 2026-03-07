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

const blogPosts = {
  da: [
    {
      slug: 'akne-behandling-arsager-typer',
      title: 'Akne: Årsager, Typer og Effektiv Behandling',
      excerpt: 'Alt du behøver at vide om akne - fra hormonelle udslet til bakterielle infektioner. Lær hvordan du får ren hud med den rette behandling.',
      image: '/skinchange-website/blog/akne.jpg',
      category: 'Hudsygdomme',
      readTime: '8 min',
      date: '3. marts 2025',
    },
    {
      slug: 'eksem-behandling-kløe',
      title: 'Eksem: Sådan Stopper du Kløen og Får Sund Hud',
      excerpt: 'Atopisk eksem, kontakteksem og nummulært eksem - lær forskellene og find den bedste behandling for din type eksem.',
      image: '/skinchange-website/blog/eksem.jpg',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '28. februar 2025',
    },
    {
      slug: 'psoriasis-behandling-livsstil',
      title: 'Psoriasis: Livsstil, Behandling og Daglig Pleje',
      excerpt: 'Psoriasis er mere end en hudsygdom. Lær om triggers, behandlingsmuligheder og hvordan du lever bedst med psoriasis.',
      image: '/skinchange-website/blog/psoriasis.jpg',
      category: 'Kronisk Hudsygdom',
      readTime: '10 min',
      date: '25. februar 2025',
    },
    {
      slug: 'modermaerker-hudkraeft',
      title: 'Modermærker: Hvornår Skal du Være Bekymret?',
      excerpt: 'Kend tegnene på farlige modermærker og hudkræft. Lær ABCDE-reglen og hvornår du skal søge lægehjælp.',
      image: '/skinchange-website/blog/modermaerker.jpg',
      category: 'Hudkræft',
      readTime: '6 min',
      date: '20. februar 2025',
    },
    {
      slug: 'online-hudlaege-guide',
      title: 'Online Hudlæge: Komplet Guide til Digital Konsultation',
      excerpt: 'Hvordan fungerer online hudlæge konsultation? Er det sikkert? Hvad koster det? Få svar på alle dine spørgsmål.',
      image: '/skinchange-website/blog/online-hudlaege.jpg',
      category: 'Teledermatologi',
      readTime: '5 min',
      date: '15. februar 2025',
    },
    {
      slug: 'rosacea-roedme-behandling',
      title: 'Rosacea: Behandling af Rødme og Synlige Blodkar',
      excerpt: 'Rosacea kan være generende, men den rette behandling kan hjælpe. Lær om triggers og behandlingsmuligheder.',
      image: '/skinchange-website/blog/rosacea.jpg',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '10. februar 2025',
    },
  ],
  en: [
    {
      slug: 'acne-treatment-causes-types',
      title: 'Acne: Causes, Types and Effective Treatment',
      excerpt: 'Everything you need to know about acne - from hormonal breakouts to bacterial infections. Learn how to get clear skin with the right treatment.',
      image: '/skinchange-website/blog/acne.jpg',
      category: 'Skin Conditions',
      readTime: '8 min',
      date: 'March 3, 2025',
    },
    {
      slug: 'eczema-treatment-itch',
      title: 'Eczema: How to Stop the Itching and Get Healthy Skin',
      excerpt: 'Atopic eczema, contact dermatitis and nummular eczema - learn the differences and find the best treatment for your type.',
      image: '/skinchange-website/blog/eczema.jpg',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'February 28, 2025',
    },
    {
      slug: 'psoriasis-treatment-lifestyle',
      title: 'Psoriasis: Lifestyle, Treatment and Daily Care',
      excerpt: 'Psoriasis is more than a skin disease. Learn about triggers, treatment options and how to live well with psoriasis.',
      image: '/skinchange-website/blog/psoriasis.jpg',
      category: 'Chronic Skin Disease',
      readTime: '10 min',
      date: 'February 25, 2025',
    },
    {
      slug: 'moles-skin-cancer',
      title: 'Moles: When Should You Be Concerned?',
      excerpt: 'Know the signs of dangerous moles and skin cancer. Learn the ABCDE rule and when to seek medical help.',
      image: '/skinchange-website/blog/moles.jpg',
      category: 'Skin Cancer',
      readTime: '6 min',
      date: 'February 20, 2025',
    },
    {
      slug: 'online-dermatologist-guide',
      title: 'Online Dermatologist: Complete Guide to Digital Consultation',
      excerpt: 'How does online dermatologist consultation work? Is it safe? What does it cost? Get answers to all your questions.',
      image: '/skinchange-website/blog/online-dermatologist.jpg',
      category: 'Teledermatology',
      readTime: '5 min',
      date: 'February 15, 2025',
    },
    {
      slug: 'rosacea-redness-treatment',
      title: 'Rosacea: Treatment for Redness and Visible Blood Vessels',
      excerpt: 'Rosacea can be troublesome, but the right treatment can help. Learn about triggers and treatment options.',
      image: '/skinchange-website/blog/rosacea.jpg',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'February 10, 2025',
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
