'use client';

import Image from 'next/image';
import { Language } from '@/lib/i18n';

interface StatsProps {
  lang: Language;
}

// Copy these by hand from the public profile whenever they change: dk.trustpilot.com/review/skinchange.ai
// Trustpilot's brand rules: the score must be accurate, carry the word "TrustScore", sit next to their
// unaltered logo and link to the profile. A static star-rating image is not allowed, so there is none.
const TRUSTPILOT = {
  score: 4.0,
  reviews: 3,
  checked: '2026-09-28',
  url: { da: 'https://dk.trustpilot.com/review/skinchange.ai', en: 'https://www.trustpilot.com/review/skinchange.ai' },
};

export default function Stats({ lang }: StatsProps) {
  const isDa = lang === 'da';
  const trustScore = TRUSTPILOT.score.toLocaleString(isDa ? 'da-DK' : 'en-GB', { minimumFractionDigits: 1 });
  const reviewCount = isDa
    ? `${TRUSTPILOT.reviews} ${TRUSTPILOT.reviews === 1 ? 'anmeldelse' : 'anmeldelser'}`
    : `${TRUSTPILOT.reviews} ${TRUSTPILOT.reviews === 1 ? 'review' : 'reviews'}`;

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-[#00e5ff] bg-clip-text text-transparent">
              100+
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Behandlede sager' : 'Cases handled'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] bg-clip-text text-transparent">
              48
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Timers diagnose' : 'Hour diagnosis'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-[#00e5ff] bg-clip-text text-transparent">
              2
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Certificerede læger' : 'Certified doctors'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] bg-clip-text text-transparent">
              5/5
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Anmeldelser' : 'Reviews'}
            </p>
          </div>
          <a
            href={TRUSTPILOT.url[lang]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              isDa
                ? `TrustScore ${trustScore} på Trustpilot, baseret på ${reviewCount}. Åbner i et nyt vindue.`
                : `TrustScore ${trustScore} on Trustpilot, based on ${reviewCount}. Opens in a new window.`
            }
            className="group col-span-2 lg:col-span-1 flex flex-col items-center text-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
          >
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-[#00e5ff] bg-clip-text text-transparent">
              {trustScore}
            </p>
            <Image
              src="/logos/trustpilot-logo-black.svg"
              alt="Trustpilot"
              width={98}
              height={24}
              className="h-6 w-auto mb-2"
            />
            <p className="text-gray-600 text-sm lg:text-base font-medium underline-offset-2 group-hover:underline">
              TrustScore · {reviewCount}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
