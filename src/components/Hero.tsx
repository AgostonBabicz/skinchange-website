'use client';

import Link from 'next/link';
import { Shield, Clock } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = getTranslation(lang);
  const isDa = lang === 'da';

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#1a237e]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#304ffe]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#304ffe]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#00e5ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* MitID Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 animate-fade-in">
              <Shield className="w-4 h-4 text-[#00e5ff] mr-2" />
              <span className="text-white/90 text-sm font-medium">{t.hero.mitid}</span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight font-display animate-fade-up">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl lg:text-4xl font-semibold text-white/90 mb-6 animate-fade-up delay-100">
              {t.hero.subtitle}
            </h2>
            <p className="text-lg lg:text-xl text-white/70 mb-6 max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-200 leading-relaxed">
              {t.hero.description}
            </p>
            
            {/* Price */}
            <div className="mb-10 animate-fade-up delay-250">
              <span className="text-4xl lg:text-5xl font-bold text-[#00e5ff]">{t.hero.price}</span>
              <span className="text-white/60 ml-2">{t.hero.priceNote}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Link
                href={`/${lang}/download`}
                className="bg-white text-[#1a237e] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
              >
                {t.hero.cta}
              </Link>
              <Link
                href={`/${lang}/guide`}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                {isDa ? 'Se brugervejledning' : 'See user guide'}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 animate-fade-up delay-500">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="w-5 h-5 text-[#00e5ff]" />
                <span>{isDa ? 'Sikker & krypteret' : 'Secure & encrypted'}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-5 h-5 text-[#00e5ff]" />
                <span>{isDa ? '48 timers garanti' : '48 hour guarantee'}</span>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative hidden lg:block animate-float">
            <div className="relative mx-auto w-80">
              <div className="bg-white rounded-[3rem] p-3 shadow-2xl shadow-black/30">
                <div className="bg-[#304ffe] rounded-[2.5rem] p-6 aspect-[9/19] relative overflow-hidden">
                  {/* App content */}
                  <div className="flex items-center justify-between text-white mb-8">
                    <span className="font-bold text-lg">SKIND</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#00e5ff] rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-[#00e5ff]/50 rounded-full" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{isDa ? 'Velkommen til SKIND' : 'Welcome to SKIND'}</h3>
                  <p className="text-white/70 text-sm mb-8">{isDa ? 'Din personlige hudklinik i lommen' : 'Your personal skin clinic in your pocket'}</p>
                  
                  <button className="w-full bg-white text-[#304ffe] font-bold py-3 rounded-xl mb-6">
                    {isDa ? 'Ny sag' : 'New case'}
                  </button>
                  
                  <div className="bg-[#1a237e]/50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/60">{isDa ? 'Sag fra 26/1/2026' : 'Case from 26/1/2026'}</p>
                        <p className="text-sm text-white">{isDa ? 'Status: Vurderet ✓' : 'Status: Reviewed ✓'}</p>
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00e5ff]/20 rounded-full blur-2xl" />
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#00e5ff] text-[#1a237e] font-bold py-2 px-4 rounded-full shadow-lg text-sm">
                15.000+ {isDa ? 'patienter' : 'patients'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
