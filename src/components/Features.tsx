'use client';

import { Smartphone, Stethoscope, CheckCircle } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface FeaturesProps {
  lang: Language;
}

export default function Features({ lang }: FeaturesProps) {
  const t = getTranslation(lang);

  const features = [
    {
      step: '1',
      title: t.features.step1.title,
      description: t.features.step1.desc,
      icon: Smartphone,
    },
    {
      step: '2',
      title: t.features.step2.title,
      description: t.features.step2.desc,
      icon: Stethoscope,
    },
    {
      step: '3',
      title: t.features.step3.title,
      description: t.features.step3.desc,
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#304ffe] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a237e] transition-colors">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Step number */}
              <div className="w-8 h-8 bg-[#00e5ff] rounded-full flex items-center justify-center -mt-14 mb-4 ml-20 text-[#1a237e] font-bold text-sm">
                {feature.step}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection line (desktop) */}
        <div className="hidden md:block relative mt-[-16rem]">
          <div className="absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#304ffe]/20 via-[#304ffe]/40 to-[#304ffe]/20" />
        </div>
      </div>
    </section>
  );
}
