'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface UserGuideSectionProps {
  lang: Language;
}

export default function UserGuideSection({ lang }: UserGuideSectionProps) {
  const isDa = lang === 'da';
  const [currentSlide, setCurrentSlide] = useState(0);

  const guideImages = isDa 
    ? [
        '/skinchange-website/User_guide_DA_1.svg',
        '/skinchange-website/User_guide_DA_2.svg',
        '/skinchange-website/User_guide_DA_3.svg',
        '/skinchange-website/User_guide_DA_4.svg',
        '/skinchange-website/User_guide_DA_5.svg',
        '/skinchange-website/User_guide_DA_6.svg',
      ]
    : [
        '/skinchange-website/User_guide_EN_1.svg',
        '/skinchange-website/User_guide_EN_2.svg',
        '/skinchange-website/User_guide_EN_3.svg',
        '/skinchange-website/User_guide_EN_4.svg',
        '/skinchange-website/User_guide_EN_5.svg',
        '/skinchange-website/User_guide_EN_6.svg',
      ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guideImages.length) % guideImages.length);
  };

  return (
    <section id="user-guide" className="py-24 lg:py-32 bg-[#1a237e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            {isDa ? 'Sådan bruger du SKIND' : 'How to use SKIND'}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {isDa ? 'Følg disse simple trin for at få hjælp til dit hudproblem' : 'Follow these simple steps to get help for your skin problem'}
          </p>
        </div>

        {/* Carousel - No white rectangle, clean design */}
        <div className="relative">
          {/* Main image - no background, no padding */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={guideImages[currentSlide]}
              alt={`User guide step ${currentSlide + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Step indicator - positioned bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
            {currentSlide + 1} / {guideImages.length}
          </div>

          {/* Navigation buttons - cleaner design */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a237e]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#1a237e]" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {guideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-[#00e5ff] w-8' 
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
