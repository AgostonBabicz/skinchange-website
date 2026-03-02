'use client';

import Image from 'next/image';
import { Language, getTranslation } from '@/lib/i18n';

interface PartnersSectionProps {
  lang: Language;
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const t = getTranslation(lang);

  const partners = [
    { src: '/skinchange-website/Partner_1.png', alt: 'Partner 1' },
    { src: '/skinchange-website/Partner_2.svg', alt: 'Partner 2' },
    { src: '/skinchange-website/Partner_3.jpeg', alt: 'Partner 3' },
    { src: '/skinchange-website/Partner_4.svg', alt: 'Partner 4' },
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
          {t.partners.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
