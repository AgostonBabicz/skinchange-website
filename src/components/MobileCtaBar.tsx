'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Language, getTranslation } from '@/lib/i18n';

interface MobileCtaBarProps {
  lang: Language;
}

// Phones only: once the hero's download button has scrolled away, a slim bar slides up from the
// bottom, and it slides away again when the footer comes into view. It never covers the first screen.
export default function MobileCtaBar({ lang }: MobileCtaBarProps) {
  const t = getTranslation(lang);
  const isDa = lang === 'da';
  const [heroGone, setHeroGone] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const hero = document.getElementById('hero-cta');
    const footer = document.getElementById('site-footer');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) setHeroGone(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        if (entry.target === footer) setFooterVisible(entry.isIntersecting);
      });
    });
    if (hero) observer.observe(hero);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const shown = heroGone && !footerVisible;

  return (
    <div
      aria-hidden={!shown}
      className={`fixed inset-x-3 bottom-3 z-40 transition-transform duration-300 ease-soft lg:hidden ${shown ? 'translate-y-0' : 'pointer-events-none translate-y-[140%]'}`}
    >
      <div className="flex items-center justify-between gap-2 rounded-full bg-ink py-2 pl-5 pr-2 text-white shadow-chip">
        <span className="flex flex-col text-xs leading-[1.3] text-on-ink-muted">
          <strong className="text-[15px] text-white">{t.hero.price}</strong>
          {isDa ? 'pr. konsultation' : 'per consultation'}
        </span>
        <Link
          href={`/${lang}/download`}
          tabIndex={shown ? undefined : -1}
          className="flex h-11 items-center rounded-full bg-white px-5 text-[15px] font-bold text-ink active:scale-[0.98]"
        >
          {t.nav.cta}
        </Link>
      </div>
    </div>
  );
}
