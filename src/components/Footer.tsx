'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/Icons';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslation(lang);
  const isDa = lang === 'da';

  // ActiveCampaign newsletter form: the script fills the ._form_1 container below.
  useEffect(() => {
    if (document.querySelector('script[src*="activehosted.com/f/embed.php?id=1"]')) return;
    const script = document.createElement('script');
    script.src = 'https://skinchangeai.activehosted.com/f/embed.php?id=1';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const columns = [
    {
      title: isDa ? 'Om os' : 'About us',
      links: [
        { href: `/${lang}/about`, label: t.nav.about },
        { href: `/${lang}/contact`, label: t.footer.contact },
      ],
    },
    {
      title: 'Support',
      links: [
        { href: `/${lang}/faq`, label: t.nav.faq },
        { href: `/${lang}/privacy-policy`, label: t.footer.privacy },
        { href: `/${lang}/terms-conditions`, label: t.footer.terms },
        { href: `/${lang}/image-credits`, label: isDa ? 'Billedkreditering' : 'Image credits' },
      ],
    },
  ];

  const socials = [
    { href: 'https://www.facebook.com/skinchangeai', label: 'Facebook', Icon: FacebookIcon },
    { href: 'https://www.instagram.com/skinchangeai', label: 'Instagram', Icon: InstagramIcon },
    { href: 'https://www.linkedin.com/company/skinchange', label: 'LinkedIn', Icon: LinkedInIcon },
  ];

  return (
    <footer id="site-footer" className="bg-ink text-white">
      <div className="mx-auto flex max-w-page flex-col gap-9 px-5 pb-7 pt-14 md:px-10 lg:gap-16 lg:pb-9 lg:pt-[88px] xl:px-20">
        <div className="flex flex-col gap-9 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:gap-5">
            <Link href={`/${lang}`} aria-label={isDa ? 'SKIND – til forsiden' : 'SKIND – home'} className="flex rounded-2xl bg-white px-3.5 py-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/SKIND LOGO.svg" alt="SKIND" width={108} height={36} className="block h-[34px] w-[102px] lg:h-9 lg:w-[108px]" />
            </Link>
            <p className="text-[17px] leading-normal text-on-ink-muted">
              {isDa ? 'Danmarks hurtigste hudklinik' : "Denmark's fastest dermatological clinic"}
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-white/[0.16]"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:col-start-6 lg:gap-6">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col lg:gap-1.5">
                <h2 className="mb-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-on-ink-faint lg:mb-2.5">{col.title}</h2>
                {col.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="flex min-h-11 items-center text-base text-white transition-colors hover:text-signal lg:min-h-9"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <div className="min-h-[112px] lg:col-span-3 lg:col-start-10 lg:min-h-[150px]">
            <div className="_form_1" />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-sm leading-normal text-on-ink-faint lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:pt-6 lg:text-[15px]">
          <span>
            © 2024 {t.footer.company} - {t.footer.cvr}
          </span>
          <a href="mailto:info@skinchange.ai" className="text-on-ink-muted transition-colors hover:text-white">
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
