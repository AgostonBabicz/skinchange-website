import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';
import { ArrowRight } from '@/components/ui/Icons';

interface AvailabilitySectionProps {
  lang: Language;
}

export default function AvailabilitySection({ lang }: AvailabilitySectionProps) {
  const t = getTranslation(lang);

  return (
    <section aria-label={t.availability.title} className="mx-auto max-w-page px-4 pb-[72px] pt-14 md:px-10 lg:pb-32 lg:pt-0 xl:px-20">
      <div
        data-reveal
        className="flex flex-col gap-4 rounded-[28px] border border-line bg-white p-6 lg:flex-row lg:items-center lg:gap-8 lg:rounded-[32px] lg:px-11 lg:py-9"
      >
        <div className="flex items-center gap-4 lg:gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/EU stars.svg" alt="EU" width={92} height={92} loading="lazy" className="block h-16 w-16 shrink-0 lg:h-[92px] lg:w-[92px]" />
          <div className="flex flex-col gap-1 lg:gap-1.5">
            <strong className="font-display text-[21px] font-bold leading-[1.15] tracking-[-0.02em] lg:text-[28px]">{t.availability.title}</strong>
            <span className="text-[15px] leading-[1.45] text-body lg:text-[17px]">{t.availability.subtitle}</span>
          </div>
        </div>
        <Link
          href={`/${lang}/download`}
          className="group flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-brand px-[30px] text-[17px] font-semibold text-white shadow-cta transition hover:-translate-y-px hover:bg-brand-hover hover:shadow-cta-hover active:scale-[0.98] lg:ml-auto lg:h-[58px]"
        >
          {t.hero.cta}
          <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
        </Link>
      </div>
    </section>
  );
}
