import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';
import { ArrowRight } from '@/components/ui/Icons';

interface DiseasesSectionProps {
  lang: Language;
}

const tileHover = 'transition-[transform,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:shadow-lift';

export default function DiseasesSection({ lang }: DiseasesSectionProps) {
  const t = getTranslation(lang);
  const isDa = lang === 'da';
  const [cancer, ...rest] = t.diseases.items;
  const pairs = rest.slice(0, 6);
  const lastCondition = rest[6];

  return (
    <section aria-labelledby="h-diseases" className="mt-[72px] bg-paper-deep lg:mt-0">
      <div className="mx-auto max-w-page px-4 py-16 md:px-10 lg:py-32 xl:px-20">
        <div data-reveal className="flex flex-col gap-3 px-1 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:px-0">
          <h2 id="h-diseases" className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.035em] lg:col-span-7 lg:text-[56px] lg:leading-[1.02]">
            {t.diseases.title}
          </h2>
          <p className="text-base leading-[1.55] text-body lg:col-span-4 lg:col-start-9 lg:text-[19px]">{t.diseases.subtitle}</p>
        </div>

        <div data-reveal className="mt-7 grid grid-cols-2 gap-3 lg:mt-14 lg:grid-cols-4 lg:grid-rows-[repeat(3,184px)] lg:gap-3 xl:gap-5">
          <Link
            href={`/${lang}/blog#skin-cancer`}
            className={`group relative col-span-2 flex h-[200px] flex-col justify-end gap-2 overflow-hidden rounded-[28px] bg-ink p-6 text-white lg:row-span-2 lg:h-auto lg:gap-2.5 lg:rounded-[32px] lg:p-10 ${tileHover}`}
          >
            <span aria-hidden="true" className="absolute -right-[90px] -top-[90px] h-[300px] w-[300px] rounded-full border border-signal/[0.18] lg:-right-[120px] lg:-top-[120px] lg:h-[460px] lg:w-[460px] lg:border-signal/[0.16]" />
            <span aria-hidden="true" className="absolute -right-[30px] -top-[30px] h-[180px] w-[180px] rounded-full border border-signal/[0.26] lg:-right-10 lg:-top-10 lg:h-[300px] lg:w-[300px] lg:border-signal/[0.24]" />
            <span aria-hidden="true" className="absolute right-10 top-10 hidden h-[140px] w-[140px] rounded-full bg-[radial-gradient(closest-side,rgba(0,229,255,0.22),rgba(0,229,255,0))] lg:block" />
            <span className="relative font-display text-[34px] font-bold leading-none tracking-[-0.035em] lg:text-5xl">{cancer.name}</span>
            <span className="relative flex items-center justify-between gap-3 text-base text-on-ink-soft lg:gap-4 lg:text-lg">
              {cancer.desc}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal text-ink transition-transform duration-300 ease-soft group-hover:translate-x-1 lg:h-12 lg:w-12">
                <ArrowRight size={18} className="lg:h-5 lg:w-5" />
              </span>
            </span>
          </Link>

          {pairs.map((item) => (
            <Link
              key={item.slug}
              href={`/${lang}/blog/${item.slug}`}
              className={`group flex min-h-[140px] flex-col justify-between gap-4 rounded-3xl bg-white p-5 text-ink lg:min-h-0 lg:rounded-[28px] xl:p-7 ${tileHover}`}
            >
              <span className="flex items-start justify-between gap-2 xl:gap-3">
                <span className="font-display text-[21px] font-semibold leading-[1.1] tracking-[-0.02em] lg:text-[22px] xl:text-[min(28px,1.95vw)]">{item.name}</span>
                <ArrowRight size={18} className="mt-0.5 shrink-0 text-brand transition-transform duration-300 ease-soft group-hover:translate-x-1 xl:h-[22px] xl:w-[22px]" />
              </span>
              <span className="text-sm leading-[1.4] text-body lg:text-base">{item.desc}</span>
            </Link>
          ))}

          {lastCondition && (
            <Link
              href={`/${lang}/blog/${lastCondition.slug}`}
              className={`group col-span-2 flex min-h-[96px] items-center justify-between gap-4 rounded-3xl bg-white py-5 pl-6 pr-5 text-ink lg:col-span-1 lg:min-h-0 lg:flex-col lg:items-stretch lg:rounded-[28px] lg:p-5 xl:p-7 ${tileHover}`}
            >
              <span className="flex flex-col gap-1 lg:flex-row lg:items-start lg:justify-between lg:gap-2 xl:gap-3">
                <span className="font-display text-[21px] font-semibold leading-[1.1] tracking-[-0.02em] lg:text-[22px] xl:text-[min(28px,1.95vw)]">{lastCondition.name}</span>
                <span className="text-sm text-body lg:hidden">{lastCondition.desc}</span>
                <ArrowRight size={22} className="hidden h-[18px] w-[18px] shrink-0 text-brand transition-transform duration-300 ease-soft group-hover:translate-x-1 lg:block xl:h-[22px] xl:w-[22px]" />
              </span>
              <ArrowRight size={18} className="shrink-0 text-brand lg:hidden" />
              <span className="hidden text-base leading-[1.4] text-body lg:block">{lastCondition.desc}</span>
            </Link>
          )}

          <Link
            href={`/${lang}/blog#diseases`}
            className={`group col-span-2 flex min-h-[76px] items-center justify-between gap-4 rounded-3xl bg-brand py-4 pl-6 pr-4 text-white lg:col-span-1 lg:min-h-0 lg:flex-col lg:items-start lg:rounded-[28px] lg:p-5 xl:p-7 ${tileHover}`}
          >
            <span className="font-display text-lg font-semibold leading-[1.2] lg:text-[22px] lg:tracking-[-0.015em]">
              {isDa ? 'Læs om sygdommene i vores blog' : 'Read about conditions in our blog'}
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 ease-soft group-hover:translate-x-1 lg:h-12 lg:w-12">
              <ArrowRight size={18} className="lg:h-5 lg:w-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
