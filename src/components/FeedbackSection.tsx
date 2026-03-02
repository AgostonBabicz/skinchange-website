'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface FeedbackSectionProps {
  lang: Language;
}

export default function FeedbackSection({ lang }: FeedbackSectionProps) {
  const t = getTranslation(lang);
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbackItems = t.feedback.items;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbackItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbackItems.length) % feedbackItems.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
            {t.feedback.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.feedback.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote card */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[#304ffe]/20" />
            
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{feedbackItems[currentSlide].text}&rdquo;
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#304ffe] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">
                    {feedbackItems[currentSlide].author.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-[#1a237e] text-lg">
                  {feedbackItems[currentSlide].author}
                </p>
                <p className="text-[#304ffe] text-sm">
                  {feedbackItems[currentSlide].condition}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a237e]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#1a237e]" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {feedbackItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#304ffe] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
