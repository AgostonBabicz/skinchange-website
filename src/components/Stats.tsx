import { Language } from '@/lib/i18n';
import CountUp from '@/components/motion/CountUp';

interface StatsProps {
  lang: Language;
}

// Copy these by hand from the public profile whenever they change: dk.trustpilot.com/review/skinchange.ai
// Trustpilot's brand rules: the score must be accurate, carry the word "TrustScore", sit next to their
// unaltered logo and link to the profile. A static star-rating image is not allowed, so there is none,
// and the score is not animated.
const TRUSTPILOT = {
  score: 4.0,
  reviews: 3,
  checked: '2026-09-28',
  url: { da: 'https://dk.trustpilot.com/review/skinchange.ai', en: 'https://www.trustpilot.com/review/skinchange.ai' },
};

const numberClass =
  'font-display text-[40px] font-bold leading-none tracking-[-0.045em] lg:text-[52px] xl:text-[60px]';
const labelClass = 'text-sm text-body lg:text-base';
const cellClass =
  'flex flex-col gap-1.5 rounded-3xl border border-line bg-white p-5 lg:gap-2.5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-7 xl:p-9';

export default function Stats({ lang }: StatsProps) {
  const isDa = lang === 'da';
  const trustScore = TRUSTPILOT.score.toLocaleString(isDa ? 'da-DK' : 'en-GB', { minimumFractionDigits: 1 });
  const reviewCount = isDa
    ? `${TRUSTPILOT.reviews} ${TRUSTPILOT.reviews === 1 ? 'anmeldelse' : 'anmeldelser'}`
    : `${TRUSTPILOT.reviews} ${TRUSTPILOT.reviews === 1 ? 'review' : 'reviews'}`;

  return (
    <section aria-label={isDa ? 'SKIND i tal' : 'SKIND in numbers'} className="mx-auto max-w-page px-4 pt-8 md:px-10 lg:pb-28 lg:pt-0 xl:px-20">
      <div
        data-reveal
        className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-0 lg:rounded-[28px] lg:border lg:border-line lg:bg-white lg:shadow-card"
      >
        <div className={`${cellClass} lg:border-r lg:border-line`}>
          <span className={numberClass}>
            <CountUp value={5000} lang={lang} suffix="+" />
          </span>
          <span className={labelClass}>Downloads</span>
        </div>
        <div className={`${cellClass} lg:border-r lg:border-line`}>
          <span className={numberClass}>
            <CountUp value={48} lang={lang} />
          </span>
          <span className={labelClass}>{isDa ? 'Timers diagnose' : 'Hour diagnosis'}</span>
        </div>
        <div className={`${cellClass} lg:border-r lg:border-line`}>
          <span className={numberClass}>
            <CountUp value={2} lang={lang} />
          </span>
          <span className={labelClass}>{isDa ? 'Certificerede læger' : 'Certified doctors'}</span>
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
          className={`${cellClass} group text-ink`}
        >
          <span className={numberClass}>{trustScore}</span>
          <span className="flex flex-col gap-1.5 lg:flex-row lg:flex-wrap lg:items-center lg:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/trustpilot-logo-black.svg"
              alt="Trustpilot"
              width={98}
              height={24}
              className="block h-5 w-[82px] lg:h-6 lg:w-[98px]"
            />
            <span className={`${labelClass} leading-[1.35] underline-offset-2 group-hover:underline`}>TrustScore · {reviewCount}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
