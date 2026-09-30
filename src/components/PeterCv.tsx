'use client';

import { useState } from 'react';
import { Language } from '@/lib/i18n';
import { peterCv, CvSection } from '@/lib/peter-cv';
import { PlusIcon } from '@/components/ui/Icons';

interface PeterCvProps {
  lang: Language;
}

const cardTitle = 'm-0 font-display text-2xl font-bold tracking-[-0.015em]';
const smallTitle = 'm-0 font-display text-xl font-bold tracking-[-0.01em]';

function Timeline({ section }: { section: CvSection }) {
  return (
    <div className="flex flex-col gap-[18px]">
      <h3 className={cardTitle}>{section.title}</h3>
      <ol className="m-0 flex list-none flex-col p-0">
        {section.items.map((item) => (
          <li key={item.text} className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-t border-line-soft py-3">
            <span className="font-display text-base font-bold tabular-nums text-brand">{item.year}</span>
            <span className="text-base leading-[1.55] text-ink">{item.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PlainList({ section }: { section: CvSection }) {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className={smallTitle}>{section.title}</h3>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        {section.items.map((item) => (
          <li key={item.text} className="text-[15px] leading-normal text-body">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Peter Bjerring's CV: two cards side by side on desktop, accordions on phones.
export default function PeterCv({ lang }: PeterCvProps) {
  const { sections } = peterCv[lang];
  const [education, experience, specialisation, research, memberships, honours] = sections;
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2">
        <div data-reveal className="flex flex-col gap-10 rounded-[32px] border border-line bg-white p-12">
          <Timeline section={education} />
          <Timeline section={experience} />
        </div>
        <div data-reveal style={{ ['--reveal-delay' as string]: '90ms' }} className="flex flex-col gap-10 rounded-[32px] border border-line bg-white p-12">
          <div className="flex flex-col gap-[18px]">
            <h3 className={cardTitle}>{specialisation.title}</h3>
            <div className="flex flex-wrap gap-2">
              {specialisation.items.map((item) => (
                <span key={item.text} className="flex min-h-[38px] items-center rounded-full bg-brand-tint px-3.5 py-1.5 text-[15px] font-medium text-brand-ink">
                  {item.text}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[18px]">
            <h3 className={cardTitle}>{research.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {research.items.map((item) => {
                const figure = item.text.match(/\d+/)?.[0];
                return (
                  <div key={item.text} className="flex flex-col gap-2 rounded-[20px] bg-paper p-5">
                    {figure && (
                      <span aria-hidden="true" className="font-display text-[44px] font-bold leading-none tracking-[-0.04em]">
                        {figure}+
                      </span>
                    )}
                    <span className="text-[15px] leading-[1.55] text-body">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <PlainList section={memberships} />
            <PlainList section={honours} />
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col overflow-hidden rounded-3xl border border-line bg-white lg:hidden">
        {sections.map((section, index) => {
          const isOpen = open === index;
          const panelId = `cv-panel-${index}`;
          return (
            <div key={section.title} className={index === 0 ? '' : 'border-t border-line'}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-[60px] w-full items-center justify-between gap-3 py-2 pl-5 pr-[18px] text-left font-display text-lg font-semibold tracking-[-0.01em] text-ink"
              >
                {section.title}
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ease-soft ${
                    isOpen ? 'rotate-45 bg-brand text-white' : 'bg-brand-tint text-brand'
                  }`}
                >
                  <PlusIcon size={16} strokeWidth={2.2} />
                </span>
              </button>
              <div
                id={panelId}
                className="grid transition-[grid-template-rows] duration-300 ease-soft"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className="m-0 flex list-none flex-col px-5 pb-4 pt-0">
                    {section.items.map((item) => (
                      <li
                        key={item.text}
                        className={`grid gap-3 border-t border-line-soft py-2.5 ${item.year ? 'grid-cols-[92px_minmax(0,1fr)]' : 'grid-cols-1'}`}
                      >
                        {item.year && <span className="font-display text-[15px] font-bold text-brand">{item.year}</span>}
                        <span className="text-[15px] leading-normal text-ink">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
