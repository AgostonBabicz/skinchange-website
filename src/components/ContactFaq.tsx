'use client';

import { useState } from 'react';
import { PlusIcon } from '@/components/ui/Icons';

interface ContactFaqProps {
  items: { q: string; a: string }[];
}

// Contact questions: open cards on desktop, an accordion on phones (first one open).
export default function ContactFaq({ items }: ContactFaqProps) {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div className="hidden flex-col gap-3 lg:flex">
        {items.map((item) => (
          <div key={item.q} className="rounded-3xl border border-line bg-white px-[30px] py-[26px]">
            <h3 className="mb-2 font-display text-[21px] font-semibold">{item.q}</h3>
            <p className="text-[17px] leading-[1.6] text-body">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white lg:hidden">
        {items.map((item, index) => {
          const isOpen = open === index;
          const panelId = `contact-faq-${index}`;
          return (
            <div key={item.q} className={index === 0 ? '' : 'border-t border-line'}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex min-h-[60px] w-full items-center justify-between gap-3 py-3 pl-5 pr-3.5 text-left font-display text-[17px] font-semibold leading-[1.3] text-ink"
                >
                  {item.q}
                  <span
                    aria-hidden="true"
                    className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ease-soft ${
                      isOpen ? 'rotate-45 bg-brand text-white' : 'bg-brand-tint text-brand'
                    }`}
                  >
                    <PlusIcon size={15} strokeWidth={2.2} />
                  </span>
                </button>
              </h3>
              <div id={panelId} className="grid transition-[grid-template-rows] duration-300 ease-soft" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                <div className="min-h-0 overflow-hidden">
                  <p className="px-5 pb-[18px] text-[15px] leading-[1.6] text-body">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
