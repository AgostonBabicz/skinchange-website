'use client';

import Image from 'next/image';
import { Language, getTranslation } from '@/lib/i18n';

interface AvailabilitySectionProps {
  lang: Language;
}

export default function AvailabilitySection({ lang }: AvailabilitySectionProps) {
  const t = getTranslation(lang);

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Badge */}
          <div className="relative w-full max-w-md aspect-[3/1]">
            <Image
              src={lang === 'da' ? '/skinchange-website/Availability_badge_DA.svg' : '/skinchange-website/Availability_badge_EN.svg'}
              alt={t.availability.title}
              fill
              className="object-contain"
            />
          </div>
          
          {/* EU Stars */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-10">
              <Image
                src="/skinchange-website/EU stars.svg"
                alt="EU"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[#1a237e] font-semibold">
                {t.availability.title}
              </p>
              <p className="text-gray-500 text-sm">
                {t.availability.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
