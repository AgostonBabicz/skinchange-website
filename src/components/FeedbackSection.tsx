import { Language } from '@/lib/i18n';
import { QuoteMark } from '@/components/ui/Icons';

interface FeedbackSectionProps {
  lang: Language;
}

export default function FeedbackSection({ lang }: FeedbackSectionProps) {
  const isDa = lang === 'da';

  const feedbackItems = [
    {
      name: 'Jofrajen',
      text: isDa
        ? 'Havde et stort modermærke på ryggen. Vi tog billeder af mærket. Og meget hurtigt kom der svar, at den skulle undersøges nærmere. Kontaktede min læge og henvist til specialist på sygehus og fik det fjernet.'
        : 'Had a large mole on my back. We took pictures of the mark. And very quickly came the answer that it should be examined further. Contacted my doctor and was referred to a specialist at the hospital and had it removed.',
    },
    {
      name: 'Lozije',
      text: isDa
        ? 'Fint at man kan tage og sende et billede hvis man er bekymret for en hudforandring og få direkte svar fra en speciallæge i dermatologi'
        : 'Nice that you can take and send a picture if you are concerned about a skin change and get direct answers from a specialist in dermatology',
    },
    {
      name: 'Liv',
      text: isDa
        ? 'Tak for jeres hurtige svar og GENIALE app. I gør en forskel.'
        : 'Thanks for your quick response and GENIUS app. You make a difference.',
    },
  ];

  return (
    <section aria-labelledby="h-feedback" className="mx-auto max-w-page pt-[72px] lg:px-10 lg:py-32 xl:px-20">
      <h2
        id="h-feedback"
        data-reveal
        className="px-5 font-display text-[32px] font-bold leading-[1.05] tracking-[-0.035em] md:px-10 lg:px-0 lg:text-[56px] lg:leading-[1.02]"
      >
        {isDa ? 'Hvad vores patienter siger' : 'What our patients say'}
      </h2>
      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 md:px-10 lg:mt-12 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0">
        {feedbackItems.map((item, index) => {
          const dark = index === feedbackItems.length - 1;
          return (
            <figure
              key={item.name}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
              className={`m-0 flex w-[300px] shrink-0 snap-start flex-col gap-4 rounded-[28px] p-7 lg:w-auto lg:gap-5 lg:p-9 ${
                dark ? 'bg-ink text-white' : 'border border-line bg-white text-ink'
              }`}
            >
              <QuoteMark size={30} className={`h-[26px] w-[26px] lg:h-[30px] lg:w-[30px] ${dark ? 'text-signal' : 'text-brand'}`} />
              <blockquote
                className={
                  dark
                    ? 'font-display text-2xl font-semibold leading-[1.2] tracking-[-0.02em] lg:text-[30px]'
                    : 'text-[17px] leading-[1.55] lg:text-[19px]'
                }
              >
                {item.text}
              </blockquote>
              <figcaption className={`mt-auto text-sm font-semibold lg:text-[15px] ${dark ? 'text-signal' : 'text-brand'}`}>{item.name}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
