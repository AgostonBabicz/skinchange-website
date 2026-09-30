import { Metadata } from 'next';
import { Language } from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PeterCv from '@/components/PeterCv';
import { peterCv } from '@/lib/peter-cv';
import { QuoteMark } from '@/components/ui/Icons';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Om os | SKIND' : 'About us | SKIND',
    description: isDa 
      ? 'Lær mere om SKIND og vores mission med at gøre dermatologisk behandling tilgængelig for alle.' 
      : 'Learn more about SKIND and our mission to make dermatological care accessible to everyone.',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/about`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/about',
        da: 'https://www.skinchange.dk/da/about',
        en: 'https://www.skinchange.dk/en/about',
      },
    },
  };
}

export default function AboutPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen overflow-x-clip bg-paper">
      <Navigation lang={lang} />

      <header className="mx-auto flex max-w-page flex-col gap-4 px-5 pb-12 pt-4 md:px-10 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pb-[104px] lg:pt-12 xl:px-20">
        <h1 className="animate-fokus font-display text-[56px] font-extrabold leading-[0.95] tracking-[-0.05em] lg:col-span-6 lg:text-[96px] lg:leading-[0.9] xl:text-[120px]">
          {isDa ? 'Om SKIND' : 'About SKIND'}
        </h1>
        <p className="animate-fokus text-lg leading-normal text-body [animation-delay:120ms] lg:col-span-6 lg:col-start-7 lg:text-2xl">
          {isDa
            ? 'Vi er på en mission for at gøre dermatologisk behandling tilgængelig for alle danskere. Ingen ventetider, ingen besvær - bare professionel hudpleje når du har brug for det.'
            : 'We are on a mission to make dermatological care accessible to all Danes. No waiting times, no hassle - just professional skin care when you need it.'}
        </p>
      </header>

      <section aria-labelledby="a-peter" className="mx-auto max-w-page px-5 pb-[72px] md:px-10 lg:pb-32 xl:px-20">
        <div className="flex flex-col items-start gap-3 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:gap-y-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Peter.jpeg"
            alt="Peter Bjerring"
            width={856}
            height={1131}
            data-reveal
            className="mb-3 block h-[420px] w-full rounded-[28px] object-cover object-[50%_15%] lg:col-span-5 lg:mb-0 lg:h-[560px] lg:rounded-[36px]"
          />
          <div data-reveal className="flex flex-col items-start gap-3 self-stretch lg:col-span-6 lg:col-start-7 lg:gap-[18px] lg:self-end lg:pb-2">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-brand lg:text-[13px]">
              {isDa ? 'Mød vores førende hudlæge' : 'Meet our leading dermatologist'}
            </span>
            <h2 id="a-peter" className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] lg:text-[72px] lg:leading-[0.95] lg:tracking-[-0.045em]">
              Peter Bjerring
            </h2>
            <p className="text-[17px] leading-[1.55] text-body lg:text-xl">
              {isDa
                ? 'Ekspert i dermatologi, laserbehandlinger og hudkræft. Adjungeret professor, Aalborg Universitet. 300+ publikationer, 500+ internationale foredrag.'
                : 'Expert in dermatology, laser treatments and skin cancer. Adjunct professor, Aalborg University. 300+ publications, 500+ international lectures.'}
            </p>
            <p className="mt-1 self-stretch border-t border-line pt-3.5 text-[15px] font-semibold leading-[1.45] text-ink lg:mt-2 lg:pt-[18px] lg:text-base">
              {peterCv[lang].headline}
            </p>
          </div>
        </div>
        <PeterCv lang={lang} />
      </section>

      <section aria-labelledby="a-brian" className="bg-paper-deep">
        <div className="mx-auto flex max-w-page flex-col items-start gap-3 px-5 py-[72px] md:px-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:gap-y-0 lg:py-32 xl:px-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/About_us_Brian.png"
            alt="Brian Vangsgaard"
            width={854}
            height={1280}
            loading="lazy"
            data-reveal
            className="mb-3 block h-[420px] w-full rounded-[28px] object-cover object-[50%_18%] lg:order-2 lg:col-span-5 lg:col-start-8 lg:mb-0 lg:h-[600px] lg:rounded-[36px]"
          />
          <div data-reveal className="flex flex-col items-start gap-3 lg:order-1 lg:col-span-6 lg:gap-[18px]">
            <span className="flex h-7 items-center rounded-full bg-ink px-3 text-xs font-semibold tracking-[0.06em] text-white lg:h-[30px] lg:text-[13px]">CEO</span>
            <h2 id="a-brian" className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] lg:text-[72px] lg:leading-[0.95] lg:tracking-[-0.045em]">
              Brian Vangsgaard
            </h2>
            <blockquote className="mt-1 font-display text-xl font-medium leading-[1.35] tracking-[-0.01em] text-ink lg:mt-3 lg:text-[26px]">
              <QuoteMark size={36} className="mb-2.5 block h-7 w-7 text-brand lg:mb-3.5 lg:h-9 lg:w-9" />
              {isDa
                ? 'Motiveret af at have haft hudkræft 3 gange, hvor jeg har oplevet et udfordrende behandlingsforløb samt at hudkræften blev overset og fejldiagnosticeret af ellers dygtige læger, valgte jeg at kaste mig ind i at blive en del af løsningen, der vil hjælpe alle med hudproblemer – store som små.'
                : 'Motivated by having had skin cancer 3 times, where I experienced a challenging treatment course and where the skin cancer was overlooked and misdiagnosed by otherwise skilled doctors, I chose to throw myself into becoming part of the solution that will help everyone with skin problems - big or small.'}
            </blockquote>
          </div>
        </div>
      </section>

      <section aria-label={isDa ? 'Vores historie og mission' : 'Our story and mission'} className="mx-auto max-w-page px-5 py-[72px] md:px-10 lg:py-32 xl:px-20">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-6">
          <div data-reveal className="flex flex-col gap-3 lg:gap-[18px] lg:pr-12">
            <span className="font-display text-sm font-bold text-brand lg:text-[15px]">01</span>
            <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.035em] lg:text-[44px] lg:leading-[1.02]">
              {isDa ? 'Vores historie' : 'Our story'}
            </h2>
            <p className="text-[17px] leading-[1.6] text-body lg:text-[19px]">
              {isDa
                ? 'SKIND blev grundlagt med en klar vision: at revolutionere måden, vi får adgang til dermatologisk behandling på. Ved at kombinere teknologi og medicinsk ekspertise har vi skabt en platform, der gør det muligt at få professionel hjælp til hudproblemer uanset hvor du befinder dig.'
                : 'SKIND was founded with a clear vision: to revolutionize the way we access dermatological care. By combining technology and medical expertise, we have created a platform that makes it possible to get professional help for skin problems no matter where you are.'}
            </p>
          </div>
          <div data-reveal style={{ ['--reveal-delay' as string]: '90ms' }} className="flex flex-col gap-3 lg:gap-[18px] lg:pr-12">
            <span className="font-display text-sm font-bold text-brand lg:text-[15px]">02</span>
            <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.035em] lg:text-[44px] lg:leading-[1.02]">
              {isDa ? 'Vores mission' : 'Our mission'}
            </h2>
            <p className="text-[17px] leading-[1.6] text-body lg:text-[19px]">
              {isDa
                ? 'Vi tror på, at alle fortjener adgang til kvalitetsbehandling af hudsygdomme. Gennem vores platform tilbyder vi hurtig, sikker og professionel hjælp fra certificerede hudlæger.'
                : 'We believe everyone deserves access to quality treatment for skin diseases. Through our platform, we offer fast, secure, and professional help from certified dermatologists.'}
            </p>
          </div>
        </div>
        <div data-reveal className="mt-10 flex flex-col gap-2.5 rounded-[28px] bg-ink px-6 py-7 text-white lg:mt-[88px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:rounded-[36px] lg:px-14 lg:py-12">
          <div className="flex flex-col gap-2.5">
            <h2 className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em] lg:text-[40px] lg:leading-[1.02]">
              {isDa ? 'Kontakt os' : 'Contact us'}
            </h2>
            <p className="text-[17px] leading-[1.55] text-on-ink-muted lg:text-lg">
              {isDa ? 'Har du spørgsmål eller brug for hjælp? Kontakt os på:' : 'Do you have questions or need help? Contact us at:'}
            </p>
          </div>
          <a
            href="mailto:info@skinchange.ai"
            className="mt-1.5 flex min-h-11 items-center font-display text-2xl font-bold tracking-[-0.02em] text-white underline decoration-signal decoration-2 underline-offset-[6px] transition-colors hover:text-signal lg:mt-0 lg:text-4xl lg:tracking-[-0.03em] lg:underline-offset-[10px]"
          >
            info@skinchange.ai
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
