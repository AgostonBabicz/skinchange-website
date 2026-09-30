import { Language } from '@/lib/i18n';

interface PartnersSectionProps {
  lang: Language;
}

// Logos recoloured for the light background (public/logos/partners). Colour logos are shown in greyscale.
const partners = [
  { src: '/logos/partners/teknologisk.webp', alt: 'Teknologisk Institut', w: 147, h: 34, mono: true },
  { src: '/logos/partners/molholm.svg', alt: 'Privathospitalet Mølholm', w: 131, h: 34, mono: false },
  { src: '/logos/partners/kollab.svg', alt: 'KOLLAB', w: 140, h: 25, mono: false },
  { src: '/logos/partners/new.webp', alt: 'NEW&', w: 102, h: 34, mono: false },
  { src: '/logos/partners/uptime.svg', alt: 'Uptime Development', w: 132, h: 34, mono: true },
  { src: '/logos/partners/greenhouse.webp', alt: 'C2IT Greenhouse', w: 135, h: 34, mono: true },
];

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <>
      {partners.map((p) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${p.src}${hidden ? '-copy' : ''}`}
          src={p.src}
          alt={hidden ? '' : p.alt}
          aria-hidden={hidden ? true : undefined}
          width={p.w}
          height={p.h}
          loading="lazy"
          style={{ ['--w' as string]: `${p.w}px`, ['--h' as string]: `${p.h}px` }}
          className={`block h-[calc(var(--h)*0.82)] w-[calc(var(--w)*0.82)] shrink-0 opacity-85 lg:h-[var(--h)] lg:w-[var(--w)] ${
            p.mono ? 'mix-blend-multiply grayscale' : ''
          }`}
        />
      ))}
    </>
  );
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const isDa = lang === 'da';
  const label = isDa ? 'Vi samarbejder med' : 'We collaborate with';
  const disclaimer = isDa
    ? 'Vi samarbejder med Teknologisk Institut, Uptime Development, C2IT Greenhouse, New& og Privathospitalet Mølholm'
    : 'We collaborate with Teknologisk Institut, Uptime Development, C2IT Greenhouse, New& and Privathospitalet Mølholm';

  return (
    <section aria-label={isDa ? 'Samarbejdspartnere' : 'Partners'} className="mx-auto max-w-page pt-14 md:px-10 lg:pb-32 lg:pt-0 xl:px-20">
      <div data-reveal className="flex flex-col gap-[18px] lg:flex-row lg:items-center lg:gap-12 lg:border-y lg:border-line lg:py-7">
        <p className="px-5 text-xs font-semibold uppercase tracking-[0.08em] text-muted md:px-0 lg:w-[190px] lg:shrink-0 lg:text-[13px]">{label}</p>
        <div className="fade-edges min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee-fast items-center gap-11 hover:[animation-play-state:paused] lg:animate-marquee lg:gap-[72px]">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      </div>
      <p className="mt-[18px] px-5 text-[13px] leading-normal text-muted md:px-0 lg:mt-4 lg:text-sm">{disclaimer}</p>
    </section>
  );
}
