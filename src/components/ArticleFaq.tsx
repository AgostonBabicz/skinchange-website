'use client';

import { Children, isValidElement, ReactElement, ReactNode, useId, useState } from 'react';
import { PlusIcon } from '@/components/ui/Icons';

interface ArticleFaqProps {
  // one <div> per question, holding the <h3> question followed by the answer
  children: ReactNode;
}

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

// The article's questions and answers. Phones: one card that works as an accordion, first answer
// open (ArticleMobile board). Desktop: every answer shown in its own card (Article board).
// Styles live in src/styles/article.css under .article-faq.
export default function ArticleFaq({ children }: ArticleFaqProps) {
  const baseId = useId();
  const [open, setOpen] = useState(0);
  const items = Children.toArray(children).filter(isValidElement) as ElementWithChildren[];

  return (
    <div className="article-faq">
      {items.map((item, index) => {
        const [question, ...answer] = Children.toArray(item.props.children);
        const questionText = isValidElement(question) ? (question as ElementWithChildren).props.children : question;
        const isOpen = open === index;
        const panelId = `${baseId}-answer-${index}`;

        return (
          <div key={item.key ?? index}>
            <h3>
              <span className="article-faq-question">{questionText}</span>
              <button
                type="button"
                className="article-faq-toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {questionText}
                <span aria-hidden="true" className="article-faq-icon">
                  <PlusIcon size={15} strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            <div id={panelId} className="article-faq-answer" data-open={isOpen ? '' : undefined}>
              <div>{answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
