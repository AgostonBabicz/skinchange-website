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

  const captions = isDa
    ? [
        'Startskærm: tryk på Ny Undersøgelse',
        'Trin 1 af 14: tag oversigtsfoto og nærbilleder',
        'Trin 2 af 14: markér placeringen på kroppen',
        'Trin 3 af 14: besvar spørgsmål om hudlidelsen',
        'Trin 13 af 14: udfyld kontaktoplysninger',
        'Trin 14 af 14: opsummering og betaling, 298 DKK',
        'Sagsoversigt: diagnose og behandlingsplan fra hudlægen',
      ]
    : [
        'Home screen: tap New Case',
        'Step 1 of 14: take overview and close-up photos',
        'Step 2 of 14: mark the location on the body',
        'Step 3 of 14: answer questions about the skin condition',
        'Step 13 of 14: fill in contact details',
        'Step 14 of 14: summary and payment, 298 DKK',
        'Case overview: diagnosis and treatment plan from the dermatologist',
      ];
  const guideImages = captions.map((_, i) => `/app/guide-${i + 1}-${isDa ? 'da' : 'en'}.svg`);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % guideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + guideImages.length) % guideImages.length);
  };

  return (
    <section id="user-guide" className="py-24 lg:py-32 bg-primary-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel - No white rectangle, clean design */}
        <div className="relative">
          {/* Main image - no background, no padding */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={guideImages[currentSlide]}
              alt={captions[currentSlide]}
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
            <ChevronLeft className="w-6 h-6 text-primary-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary-900" />
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
