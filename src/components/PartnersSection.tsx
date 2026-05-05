'use client';

import Image from 'next/image';
import { Language } from '@/lib/i18n';

interface PartnersSectionProps {
  lang: Language;
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const isDa = lang === 'da';

  // Aspect ratios: Partner_1=4.3:1, Partner_2=3.85:1, KOLLAB=5.6:1, NEW&=3:1, Partner_4=3.87:1
  const partners = [
    { src: '/Partner_1.png', alt: 'Teknologisk Institut', invert: false, width: 180, height: 42 },
    { src: '/Partner_2.svg', alt: 'Privathospitalet Mølholm', invert: true, width: 160, height: 42 },
    { src: '/Partner_Kollab.svg', alt: 'KOLLAB', invert: true, width: 140, height: 25 },
    { src: '/Partner_New.png', alt: 'NEW&', invert: false, width: 120, height: 40 },
    { src: '/Partner_4.svg', alt: 'C2IT Greenhouse', invert: true, width: 160, height: 41 },
  ];

  const disclaimer = isDa 
    ? "Vi samarbejder med Teknologisk Institut, Uptime Development og C2IT Greenhouse"
    : "We collaborate with Teknologisk Institut, Uptime Development and C2IT Greenhouse";

  return (
    <section className="py-20 bg-[#1a237e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <p className="text-center text-white/60 text-sm font-medium uppercase tracking-wider mb-10">
          {isDa ? 'Vi samarbejder med' : 'We collaborate with'}
        </p>
        
        {/* Partner logos - consistent sizing */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="opacity-90 hover:opacity-100 transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={`object-contain ${partner.invert ? 'filter brightness-0 invert' : ''}`}
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
