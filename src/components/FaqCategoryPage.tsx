import Link from 'next/link';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import { FaqCategory, FaqQuestion } from '@/lib/faq-data';

interface Props {
  category: FaqCategory;
  lang: Language;
}

function AccordionItem({ q, i }: { q: FaqQuestion; i: number }) {
  return (
    <details
      key={i}
      className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
        <span className="text-xl font-semibold text-[#1a237e] pr-4">{q.question}</span>
        <span className="text-[#304ffe] text-2xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="px-8 pb-8">
        <p className="text-gray-600 leading-relaxed">{q.answer}</p>
      </div>
    </details>
  );
}

export default function FaqCategoryPage({ category, lang }: Props) {
  const isDa = lang === 'da';
  const title = isDa ? category.titleDa : category.titleEn;
  const topLevelQuestions = isDa ? category.questions.da : category.questions.en;
  const hasSubGroups = category.subGroups && category.subGroups.length > 0;

  // Build all questions for JSON-LD schema (top-level + all sub-group questions)
  const allQuestions: FaqQuestion[] = [
    ...topLevelQuestions,
    ...(category.subGroups ?? []).flatMap(sg => isDa ? sg.questions.da : sg.questions.en),
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-category-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Navigation lang={lang} />

        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href={`/${lang}/faq`} className="hover:text-[#1a237e] transition-colors">
                FAQ
              </Link>
              <span className="mx-2">›</span>
              <span className="text-[#1a237e] font-medium">{title}</span>
            </nav>

            {/* Header */}
            <div className="text-center mb-16">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">
                {title}
              </h1>
              <p className="text-xl text-gray-600">
                {isDa ? category.descriptionDa : category.descriptionEn}
              </p>
            </div>

            {/* Top-level Q&As (non-diseases categories) */}
            {topLevelQuestions.length > 0 && (
              <div className="space-y-4 mb-12">
                {topLevelQuestions.map((q, i) => (
                  <AccordionItem key={i} q={q} i={i} />
                ))}
              </div>
            )}

            {/* Sub-groups (e.g. one per disease) — each disease group is collapsible */}
            {hasSubGroups && (
              <div className="space-y-4">
                {category.subGroups!.map((sg) => {
                  const sgName = isDa ? sg.nameDa : sg.nameEn;
                  const sgQuestions = isDa ? sg.questions.da : sg.questions.en;
                  return (
                    <details key={sg.slug} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                      {/* Collapsible disease header */}
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                        <div className="flex items-center gap-3">
                          <h2 className="text-xl font-bold text-[#1a237e]">{sgName}</h2>
                          <span className="text-sm text-gray-400 ml-1">
                            ({sgQuestions.length} {isDa ? 'spørgsmål' : 'questions'})
                          </span>
                        </div>
                        <span className="text-[#304ffe] text-2xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                      </summary>

                      {/* Sub-group Q&As */}
                      <div className="px-4 pb-4 space-y-3">
                        {sgQuestions.map((q, i) => (
                          <AccordionItem key={i} q={q} i={i} />
                        ))}
                      </div>
                    </details>
                  );
                })}
              </div>
            )}

            {/* Back link */}
            <div className="mt-12 mb-4">
              <Link
                href={`/${lang}/faq`}
                className="text-[#304ffe] hover:text-[#1a237e] transition-colors font-medium"
              >
                ← {isDa ? 'Tilbage til FAQ' : 'Back to FAQ'}
              </Link>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                {isDa ? 'Har du flere spørgsmål?' : 'Have more questions?'}
              </p>
              <a
                href="mailto:info@skinchange.ai"
                className="inline-flex items-center justify-center bg-[#304ffe] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a237e] transition-colors"
              >
                {isDa ? 'Kontakt os' : 'Contact us'}
              </a>
            </div>
          </div>
        </section>

        <Footer lang={lang} />
      </main>
    </>
  );
}
