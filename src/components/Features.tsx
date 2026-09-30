import { Language, getTranslation } from '@/lib/i18n';

interface FeaturesProps {
  lang: Language;
}

export default function Features({ lang }: FeaturesProps) {
  const t = getTranslation(lang);
  const isDa = lang === 'da';

  const steps = [
    {
      n: '01',
      title: t.features.step1.title,
      text: t.features.step1.desc,
      image: `/app/guide-2-${lang}.webp`,
      alt: isDa ? 'SKIND-appens skærm til oversigtsfoto og nærbilleder' : 'The SKIND app screen for the overview photo and close-ups',
      stage: 'bg-brand-tint',
      ring: 'border-brand/[0.16]',
    },
    {
      n: '02',
      title: t.features.step2.title,
      text: t.features.step2.desc,
      image: `/app/guide-4-${lang}.webp`,
      alt: isDa ? 'SKIND-appens spørgsmål om, hvornår hudlidelsen startede' : 'The SKIND app question about when the skin condition started',
      stage: 'bg-paper-deep',
      ring: 'border-ink/10',
    },
    {
      n: '03',
      title: t.features.step3.title,
      text: t.features.step3.desc,
      image: `/app/guide-7-${lang}.webp`,
      alt: isDa ? 'SKIND-appen viser hudlægens diagnose og behandlingsplan' : "The SKIND app showing the dermatologist's diagnosis and treatment plan",
      stage: 'bg-ink',
      ring: 'border-signal/20',
    },
  ];

  return (
    <section aria-labelledby="h-peg" className="mx-auto max-w-page px-4 pt-[72px] md:px-10 lg:pb-32 lg:pt-0 xl:px-20">
      <div data-reveal className="flex flex-col gap-3.5 px-1 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:px-0">
        {/* "POINT - CLICK - SEND" is wider than the Danish line, so on phones it scales with the screen to stay on one line. */}
        <h2
          id="h-peg"
          className={`font-display font-extrabold leading-none tracking-[-0.045em] lg:col-span-8 lg:text-[64px] lg:leading-[0.95] xl:text-[80px] ${
            isDa ? 'text-[40px]' : 'whitespace-nowrap text-[min(40px,8.5vw)] lg:whitespace-normal'
          }`}
        >
          {t.features.title}
        </h2>
        <p className="text-[17px] leading-[1.55] text-body lg:col-span-4 lg:col-start-9 lg:text-[19px]">{t.features.subtitle}</p>
      </div>

      <div className="mt-7 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {steps.map((step, i) => (
          <div key={step.n} data-reveal style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}>
          <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white transition-[transform,box-shadow] duration-300 ease-soft hover:-translate-y-1 hover:shadow-lift lg:rounded-[32px]">
            <div className={`relative h-[200px] overflow-hidden lg:h-80 ${step.stage}`}>
              <div aria-hidden="true" className={`absolute left-1/2 top-[70%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border lg:top-[62%] lg:h-[420px] lg:w-[420px] ${step.ring}`} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={step.image}
                alt={step.alt}
                width={380}
                height={770}
                loading="lazy"
                className="absolute left-1/2 top-7 ml-[-90px] h-[364px] w-[180px] lg:top-10 lg:ml-[-115px] lg:h-[465px] lg:w-[230px]"
              />
            </div>
            <div className="flex flex-col gap-2 px-6 pb-6 pt-[22px] lg:gap-2.5 lg:px-8 lg:pb-8 lg:pt-7">
              <span className="font-display text-sm font-bold text-brand lg:text-[15px]">{step.n}</span>
              <h3 className="font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.015em] lg:text-[26px]">{step.title}</h3>
              <p className="text-[15px] leading-[1.6] text-body lg:text-base">{step.text}</p>
            </div>
          </article>
          </div>
        ))}
      </div>
    </section>
  );
}
