import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import UserGuideSection from '@/components/UserGuideSection';
import { ArrowRight } from '@/components/ui/Icons';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Sådan bruger du appen | SKIND' : 'How to use the app | SKIND',
    description: isDa
      ? 'En simpel guide til, hvordan du bruger SKIND appen til at få hjælp til dit hudproblem.'
      : 'A simple guide on how to use the SKIND app to get help with your skin problem.',
  };
}

export default function GuidePage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen overflow-x-clip bg-paper">
      <Navigation lang={lang} />

      {/* Title, the seven steps and the controls fit on one screen on phones and on 1440 × 900. */}
      <header className="mx-auto flex max-w-page flex-col gap-2.5 px-5 pb-5 pt-4 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:py-7 xl:px-20">
        <div className="flex animate-fokus flex-col gap-2.5 lg:gap-3.5">
          <span className="hidden text-[13px] font-semibold uppercase tracking-[0.08em] text-brand lg:block">
            {isDa ? 'Brugervejledning' : 'User guide'}
          </span>
          <h1 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] lg:text-[56px] lg:leading-none lg:tracking-[-0.035em]">
            {isDa ? 'Sådan bruger du SKIND' : 'How to use SKIND'}
          </h1>
          <p className="text-base leading-normal text-body lg:text-xl">
            {isDa
              ? 'Følg disse simple trin for at få professionel hjælp til dit hudproblem'
              : 'Follow these simple steps to get professional help with your skin problem'}
          </p>
        </div>
        <p className="mb-1.5 hidden max-w-[300px] animate-fokus text-base leading-[1.55] text-body [animation-delay:120ms] lg:block">
          {isDa
            ? 'Syv trin fra du opretter din sag, til du har svar fra hudlægen.'
            : 'Seven steps from creating your case to your answer from the dermatologist.'}
        </p>
      </header>

      <UserGuideSection lang={lang} variant="page" />

      <section className="mx-auto max-w-page px-3 py-[72px] md:px-10 lg:py-32 xl:px-20">
        <div data-reveal className="flex flex-col overflow-hidden rounded-[32px] bg-brand-tint lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-x-6 lg:rounded-[40px]">
          <div className="flex flex-col gap-[18px] px-6 pt-9 lg:col-span-7 lg:justify-center lg:gap-[22px] lg:py-[72px] lg:pl-[72px] lg:pr-0">
            <h2 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] lg:text-[56px] lg:leading-[1.02] lg:tracking-[-0.035em]">
              {isDa ? 'Klar til at komme i gang?' : 'Ready to get started?'}
            </h2>
            <p className="text-[17px] leading-[1.55] text-body lg:max-w-[520px] lg:text-xl lg:leading-normal">
              {isDa
                ? 'Download appen i dag og få hjælp til dit hudproblem inden for 48 timer'
                : 'Download the app today and get help with your skin problem within 48 hours'}
            </p>
            <Link
              href={`/${lang}/download`}
              className="group flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-[17px] font-semibold text-white shadow-cta transition hover:-translate-y-px hover:bg-brand-hover hover:shadow-cta-hover active:scale-[0.98] lg:h-14 lg:self-start"
            >
              {isDa ? 'Download appen' : 'Download the app'}
              <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
            </Link>
          </div>
          <div className="relative mt-2 h-[250px] lg:col-span-5 lg:mt-0 lg:h-[400px]">
            <span aria-hidden="true" className="absolute left-1/2 top-full h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/[0.18] lg:top-[58%] lg:h-[520px] lg:w-[520px] lg:border-brand/[0.14]" />
            <span aria-hidden="true" className="absolute left-1/2 top-[58%] hidden h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20 lg:block" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/app/guide-7-${lang}.webp`}
              alt={isDa ? 'SKIND-appen viser hudlægens svar med diagnose og behandlingsplan' : "The SKIND app showing the dermatologist's answer with a diagnosis and a treatment plan"}
              width={380}
              height={770}
              loading="lazy"
              className="absolute left-1/2 top-0 ml-[-95px] h-[385px] w-[190px] lg:top-14 lg:ml-[-125px] lg:h-[506px] lg:w-[250px] lg:drop-shadow-[0_30px_40px_rgba(14,20,56,0.25)]"
            />
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
