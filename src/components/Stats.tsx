'use client';

import { Language } from '@/lib/i18n';

interface StatsProps {
  lang: Language;
}

export default function Stats({ lang }: StatsProps) {
  const isDa = lang === 'da';

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#304ffe] to-[#00e5ff] bg-clip-text text-transparent">
              100+
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Cases handled' : 'Cases handled'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] bg-clip-text text-transparent">
              48
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Hour diagnosis' : 'Hour diagnosis'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#304ffe] to-[#00e5ff] bg-clip-text text-transparent">
              2
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Certified doctors' : 'Certified doctors'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] bg-clip-text text-transparent">
              5/5
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {isDa ? 'Reviews' : 'Reviews'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
