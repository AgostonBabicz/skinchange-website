'use client';

import { Language, getTranslation } from '@/lib/i18n';
import { Users, Clock, Award } from 'lucide-react';

interface StatsProps {
  lang: Language;
}

export default function Stats({ lang }: StatsProps) {
  const t = getTranslation(lang);

  const stats = [
    { 
      number: '100+', 
      label: lang === 'da' ? 'Cases handled' : 'Cases handled',
      icon: Users,
      color: 'from-white to-white/80'
    },
    { 
      number: '48', 
      label: lang === 'da' ? 'Hour diagnosis' : 'Hour diagnosis',
      icon: Clock,
      color: 'from-[#00e5ff] to-[#00b8d4]'
    },
    { 
      number: '2', 
      label: lang === 'da' ? 'Certified doctors' : 'Certified doctors',
      icon: Users,
      color: 'from-white to-white/80'
    },
    { 
      number: '5/5', 
      label: lang === 'da' ? 'Reviews' : 'Reviews',
      icon: Award,
      color: 'from-[#00e5ff] to-[#00b8d4]'
    },
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <p className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </p>
              <p className="text-gray-600 text-sm lg:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
