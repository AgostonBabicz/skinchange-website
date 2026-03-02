'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface FeedbackSectionProps {
  lang: Language;
}

export default function FeedbackSection({ lang }: FeedbackSectionProps) {
  const isDa = lang === 'da';
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbackItems = [
    {
      name: 'Jofrajen',
      text: isDa 
        ? 'Havde et stort modermærke på ryggen. Vi tog billeder af mærket. Og meget hurtigt kom der svar, at den skulle undersøges nærmere. Kontaktede min læge og henvist til specialist på sygehus og fik det fjernet.'
        : 'Had a large mole on my back. We took pictures of the mark. And very quickly came the answer that it should be examined further. Contacted my doctor and was referred to a specialist at the hospital and had it removed.'
    },
    {
      name: 'Lozije',
      text: isDa
        ? 'Fint at man kan tage og sende et billede hvis man er bekymret for en hudforandring og få direkte svar fra en speciallæge i dermatologi'
        : 'Nice that you can take and send a picture if you are concerned about a skin change and get direct answers from a specialist in dermatology'
    },
    {
      name: 'Liv',
      text: isDa
        ? 'Tak for jeres hurtige svar og GENIALE app. I gør en forskel.'
        : 'Thanks for your quick response and GENIUS app. You make a difference.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbackItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbackItems.length) % feedbackItems.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
            {isDa ? 'Hvad vores patienter siger' : 'What our patients say'}
          </h2>
        </div>

        {/* Feedback Carousel */}
        <div className="relative bg-gray-50 rounded-3xl p-8 lg:p-12">
          <Quote className="w-12 h-12 text-[#304ffe]/20 mb-6" />
          
          <div className="min-h-[200px] flex flex-col justify-center">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
              &ldquo;{feedbackItems[currentSlide].text}&rdquo;
            </p>
            <p className="text-lg font-semibold text-[#304ffe]">
              {feedbackItems[currentSlide].name}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-[#1a237e]" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {feedbackItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-[#304ffe] w-8' 
                      : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-[#1a237e]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
