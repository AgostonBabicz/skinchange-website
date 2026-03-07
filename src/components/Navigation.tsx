'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface NavigationProps {
  lang: Language;
}

export default function Navigation({ lang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = getTranslation(lang);
  const isDa = lang === 'da';

  const navLinks = [
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/guide`, label: t.nav.guide },
    { href: `/${lang}/download`, label: t.nav.download },
    { href: `/${lang}/faq`, label: t.nav.faq },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a237e]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-3">
            <div className="bg-white rounded-lg px-3 py-2">
              <img
                src="/SKIND_logo_dark.svg"
                alt="SKIND"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors text-sm font-medium">
                <span className="uppercase">{lang}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[120px]">
                <Link href="/da" className={`block px-4 py-2 text-sm ${isDa ? 'text-[#304ffe] font-medium bg-[#304ffe]/5' : 'text-gray-700 hover:bg-gray-50'}`}>
                  Dansk
                </Link>
                <Link href="/en" className={`block px-4 py-2 text-sm ${!isDa ? 'text-[#304ffe] font-medium bg-[#304ffe]/5' : 'text-gray-700 hover:bg-gray-50'}`}>
                  English
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/${lang}/download`}
              className="bg-white text-[#1a237e] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={isDa ? '/en' : '/da'}
                className="text-white/80 hover:text-white transition-colors text-base font-medium pt-4 border-t border-white/10"
              >
                {isDa ? 'English' : 'Dansk'}
              </Link>
              <Link
                href={`/${lang}/download`}
                className="bg-white text-[#1a237e] px-6 py-3 rounded-full font-semibold text-center"
              >
                {t.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
