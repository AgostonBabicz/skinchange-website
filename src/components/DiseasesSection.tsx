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
          {t.diseases.items.map((disease, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                {disease.name}
              </h3>
              <p className="text-white/60 text-sm">
                {disease.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
