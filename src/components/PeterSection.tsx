import Link from 'next/link';
import { Language } from '@/lib/i18n';
import { ArrowRight, QuoteMark } from '@/components/ui/Icons';

interface PeterSectionProps {
  lang: Language;
}

// The doctor and the founder behind SKIND. "Læs mere" opens the About page, which carries Peter's full CV.
export default function PeterSection({ lang }: PeterSectionProps) {
  const isDa = lang === 'da';

  const shortText = isDa
    ? 'Ekspert i dermatologi, laserbehandlinger og hudkræft. Adjunkt professor, Aalborg Universitet. 300+ publikationer, 500+ internationale foredrag.'
    : 'Expert in dermatology, laser treatments and skin cancer. Adjunct professor, Aalborg University. 300+ publications, 500+ international lectures.';

  const brianDescription = isDa
    ? 'Motiveret af at have haft hudkræft 3 gange, hvor jeg har oplevet et udfordrende behandlingsforløb samt at hudkræften blev overset og fejldiagnosticeret af ellers dygtige læger, valgte jeg at kaste mig ind i at blive en del af løsningen, der vil hjælpe alle med hudproblemer – store som små.'
    : 'Motivated by having had skin cancer 3 times, where I experienced a challenging treatment course and where the skin cancer was overlooked and misdiagnosed by otherwise skilled doctors, I chose to throw myself into becoming part of the solution that will help everyone with skin problems - big or small.';

  return (
    <section
      aria-label={isDa ? 'Lægen og stifteren bag SKIND' : 'The doctor and the founder behind SKIND'}
      className="mx-auto max-w-page px-5 py-[72px] md:px-10 lg:py-32 xl:px-20"
    >
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6">
        <article data-reveal className="flex flex-col items-start gap-3.5 lg:gap-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Peter.jpeg"
            alt="Peter Bjerring"
            width={856}
            height={1131}
            loading="lazy"
            className="mb-2 block h-[360px] w-full rounded-[28px] object-cover object-[50%_16%] lg:mb-0 lg:h-[540px] lg:rounded-[32px] lg:object-[50%_18%]"
          />
          <div className="flex flex-col items-start gap-3.5 lg:px-2">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-brand lg:text-[13px]">
              {isDa ? 'Mød vores førende hudlæge' : 'Meet our leading dermatologist'}
            </span>
            <h2 className="font-display text-[34px] font-bold leading-[1.02] tracking-[-0.035em] lg:text-5xl">Peter Bjerring</h2>
            <p className="text-base leading-[1.6] text-body lg:max-w-[560px] lg:text-lg">{shortText}</p>
            <Link
              href={`/${lang}/about`}
              className="group mt-1 flex h-12 items-center gap-2.5 rounded-full border border-line-strong px-5 text-base font-semibold text-ink transition hover:-translate-y-px hover:bg-white active:scale-[0.98] lg:mt-1.5 lg:h-[50px] lg:px-[22px]"
            >
              {isDa ? 'Læs mere' : 'Read more'}
              <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </article>

        <article data-reveal style={{ ['--reveal-delay' as string]: '120ms' }} className="flex flex-col items-start gap-3.5 lg:mt-24 lg:gap-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/About_us_Brian.png"
            alt="Brian Vangsgaard"
            width={854}
            height={1280}
            loading="lazy"
            className="mb-2 block h-[360px] w-full rounded-[28px] object-cover object-[50%_18%] lg:mb-0 lg:h-[540px] lg:rounded-[32px] lg:object-[50%_20%]"
          />
          <div className="flex flex-col items-start gap-3.5 lg:px-2">
            <span className="flex h-7 items-center rounded-full bg-ink px-3 text-xs font-semibold tracking-[0.06em] text-white lg:h-[30px] lg:text-[13px]">CEO</span>
            <h2 className="font-display text-[34px] font-bold leading-[1.02] tracking-[-0.035em] lg:text-5xl">Brian Vangsgaard</h2>
            <blockquote className="text-base leading-[1.65] text-body lg:max-w-[580px] lg:text-lg">
              <QuoteMark size={30} className="mb-2 block h-[26px] w-[26px] text-brand lg:mb-2.5 lg:h-[30px] lg:w-[30px]" />
              {brianDescription}
            </blockquote>
          </div>
        </article>
      </div>
    </section>
  );
}
