'use client';

import { Language } from '@/lib/i18n';

interface PartnersSectionProps {
  lang: Language;
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const isDa = lang === 'da';

  const partners = [
    { src: '/Partner_1.png', alt: 'Teknologisk Institut', width: 180, height: 42, invert: false },
    { src: '/Partner_2.svg', alt: 'Privathospitalet Mølholm', width: 160, height: 42, invert: true },
    { src: '/Partner_Kollab.svg', alt: 'KOLLAB', width: 140, height: 25, invert: true },
    { src: '/Partner_New.png', alt: 'NEW&', width: 120, height: 40, invert: true },
    { src: '/Partner_4.svg', alt: 'C2IT Greenhouse', width: 160, height: 41, invert: true },
  ];

  const disclaimer = isDa 
    ? "Vi samarbejder med Teknologisk Institut, Uptime Development og C2IT Greenhouse"
    : "We collaborate with Teknologisk Institut, Uptime Development and C2IT Greenhouse";

  return (
    <section className="py-20 bg-[#1a237e] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <p className="text-center text-white/60 text-sm font-medium uppercase tracking-wider mb-10">
          {isDa ? 'Vi samarbejder med' : 'We collaborate with'}
        </p>
      </div>

      {/* Scrolling strip with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1a237e] to-transparent z-10 pointer-events-none" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1a237e] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <div className="flex gap-20 animate-scroll-left py-4">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <img
                key={index}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={`object-contain flex-shrink-0 ${partner.invert ? 'brightness-0 invert' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <p className="text-center text-white/50 text-sm max-w-3xl mx-auto">
          {disclaimer}
        </p>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        @media (max-width: 768px) {
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-scroll-left {
            animation: scroll-left 12s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}