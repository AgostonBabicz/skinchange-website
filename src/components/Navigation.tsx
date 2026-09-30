'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { ArrowRight, ChevronDown, CloseIcon, GlobeIcon, MenuIcon, ShieldCheck } from '@/components/ui/Icons';

interface NavigationProps {
  lang: Language;
}

// Floating glass pill on every page. It is fixed to the top, so the component also renders a
// spacer of the same height to keep page content below it.
export default function Navigation({ lang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = getTranslation(lang);
  const isDa = lang === 'da';
  const pathname = usePathname() ?? '';

  // A tab is active on its own page and on any page below it, e.g. /da/blog/acne marks Blog.
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Language links keep the visitor on the same page in the other language.
  const localized = (target: Language) =>
    pathname.startsWith(`/${lang}`) ? `/${target}${pathname.slice(lang.length + 1)}` : `/${target}`;

  const navLinks = [
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/guide`, label: t.nav.guide },
    { href: `/${lang}/download`, label: t.nav.download },
    { href: `/${lang}/faq`, label: t.nav.faq },
    { href: `/${lang}/blog`, label: t.nav.blog },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 lg:px-10 lg:pt-5 xl:px-20">
        <nav
          aria-label={isDa ? 'Hovedmenu' : 'Main menu'}
          className="pointer-events-auto mx-auto flex h-[60px] max-w-[1280px] items-center justify-between gap-3 rounded-full border border-ink/[0.08] bg-white/[0.86] pl-4 pr-2 shadow-pill backdrop-blur-[18px] backdrop-saturate-[1.4] lg:h-16 lg:gap-6 lg:pl-6 lg:pr-2.5"
        >
          <Link href={`/${lang}`} aria-label={isDa ? 'SKIND – til forsiden' : 'SKIND – home'} className="flex min-h-11 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/SKIND LOGO.svg" alt="SKIND" width={105} height={35} className="block h-[30px] w-[90px] lg:h-[35px] lg:w-[105px]" />
          </Link>

          <div className="hidden items-center gap-4 lg:flex xl:gap-[34px]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-11 items-center whitespace-nowrap text-sm font-medium underline decoration-2 underline-offset-[10px] transition-colors xl:text-[15px] ${
                    active ? 'text-ink decoration-brand' : 'text-ink-soft decoration-transparent hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 lg:gap-2.5">
            <div className="group relative hidden lg:block">
              <button
                type="button"
                aria-haspopup="true"
                aria-label={isDa ? 'Sprog: dansk. Skift sprog' : 'Language: English. Change language'}
                className="flex h-11 items-center gap-1.5 rounded-full px-3.5 text-[15px] font-semibold uppercase text-ink transition-colors hover:bg-paper"
              >
                {lang}
                <ChevronDown size={16} />
              </button>
              <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="min-w-[150px] rounded-2xl border border-line bg-white p-1.5 shadow-pill">
                  <Link
                    href={localized('da')}
                    hrefLang="da"
                    className={`flex min-h-11 items-center rounded-xl px-3.5 text-[15px] ${isDa ? 'bg-brand-tint font-semibold text-brand-ink' : 'text-ink hover:bg-paper'}`}
                  >
                    Dansk
                  </Link>
                  <Link
                    href={localized('en')}
                    hrefLang="en"
                    className={`flex min-h-11 items-center rounded-xl px-3.5 text-[15px] ${!isDa ? 'bg-brand-tint font-semibold text-brand-ink' : 'text-ink hover:bg-paper'}`}
                  >
                    English
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href={`/${lang}/download`}
              className="group flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-[18px] text-[15px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(48,79,254,0.9)] transition hover:bg-brand-hover active:scale-[0.98] lg:px-5"
            >
              {t.nav.cta}
              <ArrowRight size={16} className="hidden transition-transform duration-150 group-hover:translate-x-[3px] lg:block" />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={isDa ? 'Åbn menuen' : 'Open the menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-deep text-ink lg:hidden"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </nav>
      </header>
      <div aria-hidden="true" className="h-20 lg:h-[104px]" />

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={isDa ? 'Menu' : 'Menu'}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper animate-fade-in lg:hidden"
        >
          <div className="px-3 pb-2 pt-3">
            <div className="flex h-[60px] items-center justify-between pl-4 pr-2">
              <Link href={`/${lang}`} aria-label={isDa ? 'SKIND – til forsiden' : 'SKIND – home'} className="flex min-h-11 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/SKIND LOGO.svg" alt="SKIND" width={90} height={30} className="block h-[30px] w-[90px]" />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={isDa ? 'Luk menuen' : 'Close the menu'}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white"
              >
                <CloseIcon size={20} />
              </button>
            </div>
          </div>

          <nav aria-label={isDa ? 'Hovedmenu' : 'Main menu'} className="flex flex-col px-6 pt-4">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  style={{ animationDelay: `${40 + i * 40}ms` }}
                  className="flex min-h-16 animate-menu-in items-center justify-between gap-4 border-b border-line font-display text-[28px] font-semibold tracking-[-0.02em] text-ink"
                >
                  <span className={active ? 'underline decoration-brand decoration-2 underline-offset-8' : ''}>{link.label}</span>
                  <ArrowRight size={22} className={active ? 'shrink-0 text-brand' : 'shrink-0 text-muted'} />
                </Link>
              );
            })}
            <Link
              href={localized(isDa ? 'en' : 'da')}
              hrefLang={isDa ? 'en' : 'da'}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: '280ms' }}
              className="flex min-h-16 animate-menu-in items-center gap-2.5 text-[17px] font-semibold text-ink"
            >
              <GlobeIcon size={20} strokeWidth={1.8} />
              {isDa ? 'English' : 'Dansk'}
            </Link>
          </nav>

          <div className="mt-auto flex animate-menu-in flex-col gap-3.5 px-6 pb-8 pt-6 [animation-delay:320ms]">
            <Link
              href={`/${lang}/download`}
              onClick={() => setIsOpen(false)}
              className="flex h-14 items-center justify-center gap-2.5 rounded-full bg-brand text-[17px] font-semibold text-white"
            >
              {t.nav.cta}
              <ArrowRight size={18} />
            </Link>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-ink-soft">
              <ShieldCheck size={16} className="text-brand" />
              {t.hero.mitid}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
