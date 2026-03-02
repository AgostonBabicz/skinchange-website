'use client';

import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslation(lang);

  const footerLinks = {
    platform: [
      { href: `/${lang}/for-patients`, label: lang === 'da' ? 'For patienter' : 'For patients' },
      { href: `/${lang}/for-doctors`, label: lang === 'da' ? 'For læger' : 'For doctors' },
      { href: `/${lang}/pricing`, label: lang === 'da' ? 'Priser' : 'Pricing' },
      { href: `/${lang}/download`, label: lang === 'da' ? 'Download' : 'Download' },
    ],
    company: [
      { href: `/${lang}/about`, label: t.nav.about },
      { href: `/${lang}/contact`, label: t.footer.contact },
      { href: `/${lang}/press`, label: lang === 'da' ? 'Presse' : 'Press' },
      { href: `/${lang}/career`, label: lang === 'da' ? 'Karriere' : 'Careers' },
    ],
    support: [
      { href: `/${lang}/faq`, label: t.nav.faq },
      { href: `/${lang}/privacy-policy`, label: t.footer.privacy },
      { href: `/${lang}/terms-conditions`, label: t.footer.terms },
    ],
  };

  return (
    <footer className="bg-[#1a237e] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                  <path d="M8 15a6 6 0 0 0 12 0v-3" />
                  <circle cx="20" cy="10" r="2" />
                </svg>
              </div>
              <span className="text-2xl font-bold">SKIND</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {lang === 'da' 
                ? 'Danmarks førende online dermatologiske klinik'
                : 'Denmark\'s leading online dermatology clinic'}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold mb-4 text-white">{lang === 'da' ? 'Platform' : 'Platform'}</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">{lang === 'da' ? 'Om os' : 'About us'}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-white">{lang === 'da' ? 'Support' : 'Support'}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-white/40 text-sm">
              © 2024 {t.footer.company} - {t.footer.cvr}
            </p>
            <div className="flex items-center gap-4 md:justify-end text-white/40 text-sm">
              <span>{t.footer.email}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
