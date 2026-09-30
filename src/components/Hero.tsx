import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';
import { ArrowRight, ClockIcon, DownloadIcon, LockIcon, ShieldCheck } from '@/components/ui/Icons';

interface HeroProps {
  lang: Language;
}

// Splits "Online Hudlæge — Diagnose inden for 48 Timer" into the three designed lines,
// with the closing "48 Timer" / "48 Hours" in brand blue.
function headlineParts(title: string) {
  const [lead, rest = ''] = title.split(' — ');
  const words = rest.split(' ');
  return { lead, middle: words.slice(0, -2).join(' '), accent: words.slice(-2).join(' ') };
}

export default function Hero({ lang }: HeroProps) {
  const t = getTranslation(lang);
  const isDa = lang === 'da';
  const { lead, middle, accent } = headlineParts(t.hero.title);

  const downloads = isDa ? '5.000+ downloads' : '5,000+ downloads';

  return (
    <section className="relative overflow-x-clip">
      <div className="mx-auto flex max-w-page flex-col px-5 pt-3 md:px-10 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:pb-[104px] lg:pt-8 xl:px-20">
        <div className="flex flex-col items-start lg:col-span-8 lg:pt-14">
          <span className="flex h-[34px] animate-fokus items-center gap-2 rounded-full bg-brand-tint pl-2.5 pr-3.5 text-[13px] font-semibold text-brand-ink lg:h-[38px] lg:pl-3 lg:pr-4 lg:text-sm">
            <ShieldCheck size={16} />
            {t.hero.mitid}
          </span>

          <h1 className="mt-5 animate-fokus font-display text-[38px] font-bold leading-none tracking-[-0.04em] [animation-delay:80ms] lg:mt-7 lg:text-[64px] lg:leading-[0.98] lg:tracking-[-0.045em] xl:text-[78px]">
            {lead} —<br />
            {middle}
            <br />
            <span className="text-brand">{accent}</span>
          </h1>

          <p className="mt-4 animate-fokus text-lg leading-normal text-body [animation-delay:160ms] lg:mt-7 lg:text-[22px]">
            {t.hero.description}
          </p>

          <div className="mt-5 flex animate-fokus items-baseline gap-2.5 [animation-delay:220ms] lg:mt-7 lg:gap-3">
            <span className="font-display text-4xl font-bold leading-none tracking-[-0.04em] lg:text-5xl">{t.hero.price}</span>
            <span className="text-[15px] text-muted lg:text-[17px]">{t.hero.priceNote}</span>
          </div>

          <div id="hero-cta" className="mt-6 flex w-full animate-fokus flex-col gap-2.5 [animation-delay:280ms] sm:w-auto sm:flex-row lg:mt-8 lg:gap-3">
            <Link
              href={`/${lang}/download`}
              className="group flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-brand px-[30px] text-[17px] font-semibold text-white shadow-cta transition hover:-translate-y-px hover:bg-brand-hover hover:shadow-cta-hover active:scale-[0.98] lg:h-[58px]"
            >
              {t.hero.cta}
              <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </Link>
            <Link
              href={`/${lang}/guide`}
              className="flex h-[54px] items-center justify-center rounded-full border border-line-strong px-7 text-[17px] font-semibold text-ink transition hover:-translate-y-px hover:bg-white active:scale-[0.98] lg:h-[58px]"
            >
              {isDa ? 'Se brugervejledning' : 'See user guide'}
            </Link>
          </div>

          <div className="mt-[22px] flex animate-fokus gap-[18px] [animation-delay:340ms] lg:mt-9 lg:gap-7">
            <span className="flex items-center gap-1.5 text-sm font-medium text-body lg:gap-2 lg:text-[15px]">
              <LockIcon size={18} strokeWidth={1.8} className="h-4 w-4 text-brand lg:h-[18px] lg:w-[18px]" />
              {isDa ? 'Sikker & krypteret' : 'Secure & encrypted'}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-body lg:gap-2 lg:text-[15px]">
              <ClockIcon size={18} strokeWidth={1.8} className="h-4 w-4 text-brand lg:h-[18px] lg:w-[18px]" />
              {isDa ? '48 timers garanti' : '48 hour guarantee'}
            </span>
          </div>
        </div>

        {/* Phone with focus rings. On phones it rises from the bottom edge of the first screen. */}
        <div className="relative -mx-5 mt-7 h-[380px] overflow-hidden md:-mx-10 lg:col-span-4 lg:mx-0 lg:mt-0 lg:h-[700px] lg:overflow-visible">
          <div aria-hidden="true" className="absolute left-1/2 top-[62%] h-[600px] w-[600px] animate-ring rounded-full border border-brand/10 [animation-delay:300ms] lg:top-1/2 lg:h-[880px] lg:w-[880px] lg:border-brand/[0.08]" />
          <div aria-hidden="true" className="absolute left-1/2 top-[62%] h-[440px] w-[440px] animate-ring rounded-full border border-brand/[0.14] [animation-delay:200ms] lg:top-1/2 lg:h-[680px] lg:w-[680px] lg:border-brand/[0.12]" />
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 hidden h-[480px] w-[480px] animate-ring rounded-full border border-brand/[0.18] [animation-delay:100ms] lg:block" />
          <div aria-hidden="true" className="absolute left-1/2 top-[62%] h-[300px] w-[300px] animate-ring rounded-full bg-[radial-gradient(closest-side,rgba(48,79,254,0.16),rgba(48,79,254,0))] lg:top-1/2 lg:h-[360px] lg:w-[360px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/app/guide-1-${lang}.webp`}
            alt={isDa ? 'SKIND-appens startskærm med knappen Ny Undersøgelse' : 'The SKIND app home screen with the New Case button'}
            width={380}
            height={770}
            fetchPriority="high"
            className="absolute left-1/2 top-[30px] ml-[-125px] h-[506px] w-[250px] animate-rise drop-shadow-[0_30px_40px_rgba(14,20,56,0.22)] lg:ml-[-158px] lg:h-[640px] lg:w-[316px] lg:drop-shadow-[0_40px_50px_rgba(14,20,56,0.22)]"
          />
          <span className="absolute left-3.5 top-[236px] flex h-10 animate-drift items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-white shadow-chip lg:-left-2 lg:bottom-[132px] lg:top-auto lg:h-[46px] lg:gap-2 lg:px-5 lg:text-[15px]">
            <DownloadIcon size={18} className="h-4 w-4 text-signal lg:h-[18px] lg:w-[18px]" />
            {downloads}
          </span>
        </div>
      </div>
    </section>
  );
}
