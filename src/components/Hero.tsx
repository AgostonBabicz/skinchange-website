'use client';

import Link from 'next/link';
import Image from 'next/image';
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
              <Image
                src={isDa ? '/hero-phone-da.jpg' : '/hero-phone-en.jpg'}
                alt="SKIND App"
                width={320}
                height={640}
                className="w-full h-auto rounded-[2.5rem] shadow-2xl shadow-black/30"
                priority
              />
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#00e5ff] text-[#1a237e] font-bold py-2 px-4 rounded-full shadow-lg text-sm">
                1.000+ {isDa ? 'downloads' : 'downloads'}
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
