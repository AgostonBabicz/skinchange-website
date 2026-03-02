'use client';

import Image from 'next/image';
import { Language } from '@/lib/i18n';

interface PartnersSectionProps {
  lang: Language;
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const isDa = lang === 'da';

  const partners = [
    { src: '/skinchange-website/Partner_1.png', alt: 'Teknologisk Institut' },
    { src: '/skinchange-website/Partner_2.svg', alt: 'Privathospitalet Mølholm' },
    { src: '/skinchange-website/Partner_3.jpeg', alt: 'Uptime' },
    { src: '/skinchange-website/Partner_4.svg', alt: 'C2IT Greenhouse' },
  ];

  const disclaimer = isDa 
    ? "We have cooperated with Teknologisk Institut, Uptime Development and C2IT Greenhouse during the development of our AI supported solutions"
    : "We have cooperated with Teknologisk Institut, Uptime Development and C2IT Greenhouse during the development of our AI supported solutions";

  return (
    <section className="py-20 bg-[#1a237e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <p className="text-center text-white/60 text-sm font-medium uppercase tracking-wider mb-10">
          {isDa ? 'Vi samarbejder med' : 'We collaborate with'}
        </p>
        
        {/* Partner logos - with proper visibility */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative h-16 w-40 opacity-90 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/50 text-sm max-w-3xl mx-auto">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
