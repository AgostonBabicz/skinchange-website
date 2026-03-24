'use client';

import { Language, getTranslation } from '@/lib/i18n';

interface DiseasesSectionProps {
  lang: Language;
}

export default function DiseasesSection({ lang }: DiseasesSectionProps) {
  const t = getTranslation(lang);

  return (
    <section className="py-24 lg:py-32 bg-[#1a237e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            {t.diseases.title}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t.diseases.subtitle}
          </p>
        </div>

        {/* Disease cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.diseases.items.map((disease, index) => {
            const href = disease.slug ? `/${lang}/blog/${disease.slug}` : null;
            const Wrapper = href ? 'a' : 'div';
            const wrapperProps = href ? { href, className: 'block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group cursor-pointer', 'aria-label': disease.slug ? `${disease.name} — read more` : undefined } : { className: 'bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group' };
            return (
              <Wrapper key={index} {...wrapperProps}>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {disease.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {disease.desc}
                </p>
              </Wrapper>
            );
          })}
        </div>

        {/* Blog link */}
        <div className="text-center mt-12">
          <a
            href={`/${lang}/blog#diseases`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
          >
            {lang === 'da' ? 'Læs om sygdommene i vores blog' : 'Read about conditions in our blog'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
