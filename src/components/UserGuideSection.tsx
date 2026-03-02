'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface UserGuideSectionProps {
  lang: Language;
}

export default function UserGuideSection({ lang }: UserGuideSectionProps) {
  const t = getTranslation(lang);
  const [currentSlide, setCurrentSlide] = useState(0);

  const guideImages = lang === 'da' 
    ? [
        '/skinchange-website/User_guide_DA_1.png',
        '/skinchange-website/User_guide_DA_2.png',
        '/skinchange-website/User_guide_DA_3.png',
        '/skinchange-website/User_guide_DA_4.png',
        '/skinchange-website/User_guide_DA_5.png',
        '/skinchange-website/User_guide_DA_6.svg',
      ]
    : [
        '/skinchange-website/User_guide_EN_1.png',
        '/skinchange-website/User_guide_EN_2.png',
        '/skinchange-website/User_guide_EN_3.png',
        '/skinchange-website/User_guide_EN_4.png',
        '/skinchange-website/User_guide_EN_5.png',
        '/skinchange-website/User_guide_EN_6.svg',
      ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guideImages.length) % guideImages.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
            {t.userGuide.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.userGuide.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main image container */}
          <div className="relative aspect-[16/9] bg-white rounded-2xl shadow-xl overflow-hidden">
            <Image
              src={guideImages[currentSlide]}
              alt={`User guide step ${currentSlide + 1}`}
              fill
              className="object-contain p-4"
            />
            
            {/* Step indicator */}
            <div className="absolute top-4 right-4 bg-[#304ffe] text-white px-4 py-2 rounded-full font-semibold text-sm">
              {currentSlide + 1} / {guideImages.length}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a237e]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#1a237e]" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {guideImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#304ffe] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
