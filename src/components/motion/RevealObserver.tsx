'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Adds the "comes into focus" reveal to every [data-reveal] element as it scrolls into view.
// Content is visible by default; hiding only starts once this has mounted (see globals.css),
// and anything already on screen at that moment stays put, so nothing flickers.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)'));
    const viewport = window.innerHeight;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewport * 0.92 && rect.bottom > 0) el.classList.add('is-revealed');
    });
    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );
    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
