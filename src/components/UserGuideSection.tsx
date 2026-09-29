'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface UserGuideSectionProps {
  lang: Language;
  showHeading?: boolean;
}

interface Step {
  title: string;
  text: string;
}

// One entry per mockup in public/app/guide-{n}-{lang}.svg, in the order of the in-app flow.
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
// The mockup's height follows the screen height, so the page title, the phone, the step text and the
// controls fit on one screen. The budget subtracts the nav, the title, the text block and the controls.
// Width follows from the mockup's aspect ratio (380 x 769), capped by the slide width.
const MOCKUP_HEIGHT =
  '[--mock-h:min(calc(min(60vw,280px)*2.02),max(250px,calc(100svh-430px)))] sm:[--mock-h:min(567px,max(300px,calc(100svh-420px)))] lg:[--mock-h:min(607px,max(300px,calc(100svh-500px)))]';
// Mockups are large SVGs; only mount those within this many steps of the active one.
const PRELOAD_DISTANCE = 2;

const withinReach = (center: number, count: number) =>
  Array.from({ length: PRELOAD_DISTANCE * 2 + 1 }, (_, k) => center - PRELOAD_DISTANCE + k).filter(
    (i) => i >= 0 && i < count,
  );

export default function UserGuideSection({ lang, showHeading = true }: UserGuideSectionProps) {
  const isDa = lang === 'da';
  const steps = STEPS[lang];
  const last = steps.length - 1;
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState<Set<number>>(() => new Set(withinReach(0, steps.length)));
  // Lazy until the carousel is near the viewport, then eager so the steps on either side are ready before they slide in.
  const [nearView, setNearView] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const node = regionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setNearView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNearView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(last, index));
    setCurrent(next);
    setMounted((prev) => new Set(Array.from(prev).concat(withinReach(next, steps.length))));
  };
  const stepLabel = (index: number) =>
    isDa ? `Trin ${index + 1} af ${steps.length}` : `Step ${index + 1} of ${steps.length}`;

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

  const navButtonClass =
    'w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/90';

  return (
    <section
      id="user-guide"
      className={`bg-primary-900 overflow-hidden ${showHeading ? 'py-16 lg:py-24' : 'pt-5 pb-16 lg:pt-8 lg:pb-24'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 font-display">
              {isDa ? 'Sådan bruger du SKIND-appen' : 'How to use the SKIND app'}
            </h2>
            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {isDa
                ? 'Syv trin fra du opretter din sag, til du har svar fra hudlægen.'
                : 'Seven steps from creating your case to your answer from the dermatologist.'}
            </p>
          </div>
        )}

        <div className={`relative ${MOCKUP_HEIGHT}`}>
        <div
          ref={regionRef}
          role="region"
          aria-roledescription={isDa ? 'karrusel' : 'carousel'}
          aria-label={isDa ? 'Brugervejledning til SKIND-appen' : 'SKIND app user guide'}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
          className="grid [--guide-step:74%] sm:[--guide-step:100%] lg:[--guide-step:108%] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff] focus-visible:ring-offset-4 focus-visible:ring-offset-primary-900 rounded-2xl"
        >
          {steps.map((step, index) => {
            const offset = index - current;
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const isNeighbour = distance === 1;
            const scale = isActive ? 1 : isNeighbour ? 0.86 : 0.7;

            return (
              <div
                key={index}
                role={isActive ? 'group' : undefined}
                aria-roledescription={isActive ? (isDa ? 'trin' : 'slide') : undefined}
                aria-label={isActive ? stepLabel(index) : undefined}
                aria-hidden={!isActive}
                onClick={isNeighbour ? () => goTo(index) : undefined}
                style={{
                  transform: `translateX(calc(${offset} * var(--guide-step))) scale(${scale})`,
                  zIndex: 30 - distance,
                }}
                className={`col-start-1 row-start-1 justify-self-center w-[60vw] max-w-[280px] sm:w-[280px] lg:w-[300px] lg:max-w-[300px] origin-center select-none transition-[transform,opacity,filter] duration-500 ease-out-expo motion-reduce:transition-none ${
                  isActive
                    ? 'opacity-100'
                    : isNeighbour
                      ? 'opacity-40 saturate-50 cursor-pointer hover:opacity-60'
                      : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="h-[var(--mock-h)]">
                {mounted.has(index) ? (
                  <Image
                    src={`/app/guide-${index + 1}-${lang}.svg`}
                    alt={isDa ? `Skærmbillede fra SKIND-appen: ${step.title}` : `Screenshot of the SKIND app: ${step.title}`}
                    width={380}
                    height={769}
                    loading={nearView ? 'eager' : 'lazy'}
                    draggable={false}
                    className="h-full w-auto mx-auto"
                  />
                ) : null}
                </div>
                <div
                  className={`mt-4 text-center transition-opacity duration-500 motion-reduce:transition-none max-sm:relative max-sm:left-1/2 max-sm:w-[calc(100vw-2rem)] max-sm:-translate-x-1/2 ${
                    isActive ? '' : 'max-sm:opacity-0'
                  }`}
                >
                  <p className="text-sm font-semibold text-[#00e5ff] mb-1">{stepLabel(index)}</p>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2">{step.title}</h3>
                  <p className="text-[15px] lg:text-base text-white/70 leading-relaxed">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* On phones the arrows sit on the sides of the mockup, so the controls take no extra height. */}
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className={`sm:hidden absolute left-0 top-[calc(var(--mock-h)/2)] -translate-y-1/2 z-40 !w-10 !h-10 ${navButtonClass}`}
          aria-label={isDa ? 'Forrige trin' : 'Previous step'}
        >
          <ChevronLeft className="w-5 h-5 text-primary-900" />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current === last}
          className={`sm:hidden absolute right-0 top-[calc(var(--mock-h)/2)] -translate-y-1/2 z-40 !w-10 !h-10 ${navButtonClass}`}
          aria-label={isDa ? 'Næste trin' : 'Next step'}
        >
          <ChevronRight className="w-5 h-5 text-primary-900" />
        </button>
        </div>

        <p className="sr-only" aria-live="polite">
          {stepLabel(current)}: {steps[current].title}
        </p>

        <div className="flex items-center justify-center gap-6 mt-4 sm:mt-6">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className={`max-sm:hidden ${navButtonClass}`}
            aria-label={isDa ? 'Forrige trin' : 'Previous step'}
          >
            <ChevronLeft className="w-6 h-6 text-primary-900" />
          </button>

          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-current={index === current ? 'step' : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'bg-[#00e5ff] w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={stepLabel(index)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === last}
            className={`max-sm:hidden ${navButtonClass}`}
            aria-label={isDa ? 'Næste trin' : 'Next step'}
          >
            <ChevronRight className="w-6 h-6 text-primary-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
