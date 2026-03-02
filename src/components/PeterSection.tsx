'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface PeterSectionProps {
  lang: Language;
}

export default function PeterSection({ lang }: PeterSectionProps) {
  const t = getTranslation(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/skinchange-website/Peter.jpeg"
                  alt={t.peter.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#304ffe]/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00e5ff]/10 rounded-full blur-xl" />
            </div>

            {/* Content */}
            <div>
              <p className="text-[#304ffe] font-semibold mb-4 uppercase tracking-wider text-sm">
                {t.peter.title}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
                {t.peter.name}
              </h2>
              <p className="text-xl text-[#304ffe] font-medium mb-6">
                {t.peter.role}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.peter.description}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center bg-[#304ffe] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a237e] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.peter.readMore}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/skinchange-website/Peter.jpeg"
                    alt={t.peter.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a237e]">{t.peter.name}</h3>
                  <p className="text-[#304ffe]">{t.peter.role}</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {t.peter.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
