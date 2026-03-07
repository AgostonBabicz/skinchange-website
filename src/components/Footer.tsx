'use client';

import Link from 'next/link';
import { Language, getTranslation } from '@/lib/i18n';
import Image from 'next/image';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslation(lang);

  const footerLinks = {
    company: [
      { href: `/${lang}/about`, label: t.nav.about },
      { href: `mailto:info@skinchange.ai`, label: t.footer.contact },
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
              <div className="relative bg-white rounded-lg px-3 py-2">
                <Image
                  src="/SKIND_logo_dark.svg"
                  alt="SKIND"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {lang === 'da' 
                ? 'Danmarks hurtigste dermatologiske klinik'
                : 'Denmark\'s fastest dermatological clinic'}
            </p>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden md:block"></div>

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
              <a href="mailto:info@skinchange.ai" className="hover:text-white transition-colors">
                {t.footer.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
