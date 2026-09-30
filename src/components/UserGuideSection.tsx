'use client';

import { useRef, useState } from 'react';
import { Language } from '@/lib/i18n';
import { ChevronLeft, ChevronRight } from '@/components/ui/Icons';

interface UserGuideSectionProps {
  lang: Language;
  // "home": dark panel with its own heading (home page). "page": panel only, under the guide page's H1.
  variant?: 'home' | 'page';
}

interface Step {
  title: string;
  text: string;
}

// One entry per screenshot in public/app/guide-{n}-{lang}.webp, in the order of the in-app flow.
const STEPS: Record<Language, Step[]> = {
  da: [
    {
      title: 'Opret en ny sag',
      text: 'Log ind med MitID, og tryk på Ny Undersøgelse. Du kan oprette en sag for dig selv eller for dit barn.',
    },
    {
      title: 'Tag billederne',
      text: 'Tag et oversigtsbillede på 30–50 cm afstand og mindst to skarpe nærbilleder. Godt lys gør en stor forskel.',
    },
    {
      title: 'Vis, hvor det sidder',
      text: 'Tryk på det eller de steder på kroppen, hvor du har hudforandringen. Du kan zoome ind og ud.',
    },
    {
      title: 'Besvar spørgsmålene',
      text: 'Svar på korte spørgsmål om dine symptomer, fx hvornår du første gang lagde mærke til dem.',
    },
    {
      title: 'Tjek dine oplysninger',
      text: 'Bekræft dit navn og din e-mail, så vi kan give dig besked, når hudlægen har svaret.',
    },
    {
      title: 'Gennemse og betal',
      text: 'Se en opsummering af din sag. Konsultationen koster 298 kr., og beløbet trækkes kun, hvis lægen kan hjælpe dig videre.',
    },
    {
      title: 'Få svar fra hudlægen',
      text: 'Du får normalt svar inden for 48 timer med en vurdering og en behandlingsplan direkte i appen.',
    },
  ],
  en: [
    {
      title: 'Start a new case',
      text: 'Log in with MitID and tap New Case. You can create a case for yourself or for your child.',
    },
    {
      title: 'Take the photos',
      text: 'Take an overview photo from 30–50 cm and at least two sharp close-ups. Good light makes a big difference.',
    },
    {
      title: 'Show where it is',
      text: 'Tap the place or places on the body where the skin change is. You can zoom in and out.',
    },
    {
      title: 'Answer the questions',
      text: 'Answer a few short questions about your symptoms, such as when you first noticed them.',
    },
    {
      title: 'Check your details',
      text: 'Confirm your name and email so we can let you know when the dermatologist has replied.',
    },
    {
      title: 'Review and pay',
      text: 'See a summary of your case. A consultation costs 298 DKK, and you are only charged if the doctor can help you further.',
    },
    {
      title: "Get your dermatologist's answer",
      text: 'You normally receive an answer within 48 hours, with an assessment and a treatment plan, right in the app.',
    },
  ],
};

const SWIPE_THRESHOLD = 40;
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export default function UserGuideSection({ lang, variant = 'home' }: UserGuideSectionProps) {
  const isDa = lang === 'da';
  const steps = STEPS[lang];
  const last = steps.length - 1;
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => setCurrent(Math.max(0, Math.min(last, index)));
  const stepLabel = (index: number) => (isDa ? `Trin ${index + 1} af ${steps.length}` : `Step ${index + 1} of ${steps.length}`);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) goTo(current + (dx < 0 ? 1 : -1));
  };

  // Coverflow position of each screenshot: the active one centred, neighbours smaller and dimmed.
  const slideStyle = (index: number, step: number): React.CSSProperties => {
    const offset = index - current;
    const distance = Math.abs(offset);
    return {
      transform: `translateX(${offset * step}%) scale(${distance === 0 ? 1 : distance === 1 ? 0.84 : 0.7})`,
      opacity: distance === 0 ? 1 : distance === 1 ? 0.38 : 0,
      filter: `saturate(${distance === 0 ? 1 : 0.4})`,
      zIndex: 10 - distance,
      transition: `transform 700ms ${EASE}, opacity 700ms ${EASE}, filter 700ms linear`,
    };
  };

  const screenshot = (index: number) => ({
    src: `/app/guide-${index + 1}-${lang}.webp`,
    alt: isDa ? `Skærmbillede fra SKIND-appen: ${steps[index].title}` : `Screenshot of the SKIND app: ${steps[index].title}`,
  });

  const arrowButton =
    'flex items-center justify-center rounded-full bg-white text-ink transition hover:bg-white/90 active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-30';

  const rings = (sizes: [number, number, number?]) => (
    <>
      {sizes.map((size, i) =>
        size ? (
          <span
            key={size}
            aria-hidden="true"
            style={{ width: size, height: size }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
              i === 0 ? 'border-signal/10' : i === 1 ? 'border-signal/[0.14]' : 'border-signal/20'
            }`}
          />
        ) : null,
      )}
    </>
  );

  const isHome = variant === 'home';

  const panel = (
    <div
      className={`overflow-hidden bg-ink text-white ${
        isHome
          ? 'rounded-[32px] pb-[22px] pt-8 lg:rounded-[48px] lg:px-20 lg:pb-24 lg:pt-[104px]'
          : 'rounded-[32px] pb-[22px] pt-[18px] lg:rounded-[40px] lg:px-14 lg:py-10'
      }`}
    >
      {isHome && (
        <div className="flex flex-col gap-2 px-6 pb-1.5 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:px-0 lg:pb-0">
          <h2 id="h-guide" className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em] lg:col-span-7 lg:text-[56px] lg:leading-[1.02] lg:tracking-[-0.035em]">
            {isDa ? 'Sådan bruger du SKIND-appen' : 'How to use the SKIND app'}
          </h2>
          <p className="text-[15px] leading-[1.55] text-on-ink-muted lg:col-span-4 lg:col-start-9 lg:text-[19px]">
            {isDa
              ? 'Syv trin fra du opretter din sag, til du har svar fra hudlægen.'
              : 'Seven steps from creating your case to your answer from the dermatologist.'}
          </p>
        </div>
      )}

      <div
        role="region"
        aria-roledescription={isDa ? 'karrusel' : 'carousel'}
        aria-label={isDa ? 'Brugervejledning til SKIND-appen' : 'SKIND app user guide'}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={`rounded-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal ${isHome ? 'mt-3.5 lg:mt-14' : ''}`}
      >
        {/* Desktop: all seven steps as a list next to the coverflow. */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-6">
          <ol className="flex flex-col gap-1 lg:col-span-5">
            {steps.map((step, index) => {
              const active = index === current;
              const done = index < current;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    aria-current={active ? 'step' : undefined}
                    className={`flex min-h-14 w-full items-start gap-4 rounded-[20px] px-[18px] py-3 text-left transition-colors duration-300 ease-soft ${
                      active ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[15px] font-bold transition-colors duration-300 ${
                        active ? 'bg-signal text-ink' : done ? 'bg-signal/[0.14] text-signal' : 'bg-white/[0.08] text-on-ink-muted'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="flex flex-col pt-1">
                      <span className={`text-lg font-semibold leading-[1.3] ${active ? 'text-white' : 'text-on-ink-soft'}`}>{step.title}</span>
                      <span
                        className="grid transition-[grid-template-rows] duration-300 ease-soft"
                        style={{ gridTemplateRows: active ? '1fr' : '0fr' }}
                      >
                        <span className="min-h-0 overflow-hidden">
                          <span className="block pt-1.5 text-base leading-[1.6] text-on-ink-soft">{step.text}</span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col items-center gap-4 lg:col-span-7">
            <div className="relative h-[452px] w-full overflow-hidden">
              {rings([700, 520, 340])}
              {steps.map((step, index) => {
                const distance = Math.abs(index - current);
                const { src, alt } = screenshot(index);
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    width={380}
                    height={770}
                    loading={distance <= 1 ? 'eager' : 'lazy'}
                    draggable={false}
                    aria-hidden={distance !== 0}
                    onClick={distance === 1 ? () => goTo(index) : undefined}
                    style={slideStyle(index, 104)}
                    className={`absolute left-1/2 top-2 ml-[-108px] h-[437px] w-[216px] select-none ${distance === 1 ? 'cursor-pointer' : ''}`}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-[22px]">
              <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label={isDa ? 'Forrige trin' : 'Previous step'} className={`${arrowButton} h-12 w-12`}>
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {steps.map((step, index) => (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={stepLabel(index)}
                    aria-current={index === current ? 'step' : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ease-soft ${index === current ? 'w-7 bg-signal' : 'w-2 bg-white/[0.28] hover:bg-white/50'}`}
                  />
                ))}
              </div>
              <button type="button" onClick={() => goTo(current + 1)} disabled={current === last} aria-label={isDa ? 'Næste trin' : 'Next step'} className={`${arrowButton} h-12 w-12`}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Phones: coverflow with arrows on the sides, the step text and dots below. */}
        <div className="flex flex-col items-center gap-3.5 lg:hidden">
          <div
            className="relative h-[392px] w-full"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={onTouchEnd}
          >
            {rings([460, 300])}
            {steps.map((step, index) => {
              const distance = Math.abs(index - current);
              const { src, alt } = screenshot(index);
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={alt}
                  width={380}
                  height={770}
                  loading={distance <= 1 ? 'eager' : 'lazy'}
                  draggable={false}
                  aria-hidden={distance !== 0}
                  style={slideStyle(index, 76)}
                  className="absolute left-1/2 top-0.5 ml-[-96px] h-[388px] w-48 select-none"
                />
              );
            })}
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label={isDa ? 'Forrige trin' : 'Previous step'}
              className={`${arrowButton} absolute left-2.5 top-1/2 z-20 -mt-[22px] h-11 w-11 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)]`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={current === last}
              aria-label={isDa ? 'Næste trin' : 'Next step'}
              className={`${arrowButton} absolute right-2.5 top-1/2 z-20 -mt-[22px] h-11 w-11 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)]`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex min-h-[116px] flex-col items-center gap-1 px-[22px] text-center">
            <span className="text-sm font-semibold text-signal">{stepLabel(current)}</span>
            <h3 className="font-display text-[22px] font-bold leading-[1.2] tracking-[-0.015em]">{steps[current].title}</h3>
            <p className="mt-1 text-[15px] leading-[1.55] text-on-ink-soft">{steps[current].text}</p>
          </div>
          <div className="flex items-center gap-0.5">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={stepLabel(index)}
                aria-current={index === current ? 'step' : undefined}
                className={`flex h-8 items-center justify-center ${index === current ? 'w-[38px]' : 'w-[22px]'}`}
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ease-soft ${index === current ? 'w-[26px] bg-signal' : 'w-2 bg-white/[0.28]'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-live" aria-live="polite">
        {stepLabel(current)}: {steps[current].title}
      </p>
    </div>
  );

  if (isHome) {
    return (
      <section id="user-guide" aria-labelledby="h-guide" className="px-3 lg:px-6">
        <div data-reveal className="mx-auto max-w-[1392px]">
          {panel}
        </div>
      </section>
    );
  }

  return (
    <section id="user-guide" className="mx-auto max-w-page px-3 lg:px-10 xl:px-20">
      <div data-reveal style={{ ['--reveal-delay' as string]: '200ms' }}>
        {panel}
      </div>
    </section>
  );
}
