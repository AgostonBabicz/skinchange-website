'use client';

import { useEffect, useRef, useState } from 'react';
import { Language } from '@/lib/i18n';

interface CountUpProps {
  value: number;
  lang: Language;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

// Counts up once, the first time the number scrolls into view. The static HTML carries the
// final value, so crawlers, screen readers and visitors without JavaScript always see it.
export default function CountUp({ value, lang, decimals = 0, suffix = '', duration = 1400 }: CountUpProps) {
  const format = (n: number) =>
    n.toLocaleString(lang === 'da' ? 'da-DK' : 'en-GB', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix;
  const finalText = format(value);
  const [text, setText] = useState(finalText);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setText(format(0));
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = progress >= 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setText(format(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // The number and its formatting are fixed for the lifetime of the component.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
      <span className="sr-live">{finalText}</span>
    </>
  );
}
