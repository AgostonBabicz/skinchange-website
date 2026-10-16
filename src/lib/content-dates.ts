// Date of the last real content change per route (YYYY-MM-DD), without the /da or /en prefix.
// It feeds the sitemap <lastmod> and every article's schema.org dateModified, so search and AI engines
// see when a page's text actually changed rather than the build time.
//
// Update the entry in the same commit whenever you change a page's text, facts or main image.
// Do not bump it for layout, styling, typo or refactoring commits.
//
// Where the current values come from (git history of the repo):
//   2026-05-27  5f721b1 / afc58f4  Danish T&C and privacy policy text
//   2026-08-02  4715861  content and medical-accuracy rewrite of all 26 articles and the FAQ
//   2026-09-22  549f8b5  FAQ "how to create a case for your child" (how-it-works)
//   2026-09-28  661de35  four wrong article images replaced; blog index cards updated
//   2026-09-28  177c979  user guide: step instructions added to the carousel
//   2026-09-30  5705af4  redesign: new stats strip on home, Peter Bjerring's CV on about,
//                        App Store link moved to the Danish store on download
//   2026-10-14           home hero headline (diagnosis and treatment plan); hives article image replaced
//   2026-10-15           home hero headline: diagnose, behandlingsplan og recept
export const contentDates: Record<string, string> = {
  '': '2026-10-15',
  '/about': '2026-09-30',
  '/download': '2026-09-30',
  '/faq': '2026-08-02',
  '/faq/how-it-works': '2026-09-22',
  '/faq/pricing': '2026-08-02',
  '/faq/privacy-security': '2026-08-02',
  '/faq/app': '2026-08-02',
  '/faq/contact': '2026-08-02',
  '/faq/diseases': '2026-08-02',
  '/blog': '2026-09-28',
  '/guide': '2026-09-28',
  '/contact': '2026-08-02',
  '/privacy-policy': '2026-05-27',
  '/terms-conditions': '2026-05-27',

  '/blog/acne': '2026-08-02',
  '/blog/actinic-keratosis': '2026-08-02',
  '/blog/alopecia-areata': '2026-08-02',
  '/blog/basal-cell-carcinoma': '2026-08-02',
  '/blog/cellulitis': '2026-09-28',
  '/blog/contact-dermatitis': '2026-08-02',
  '/blog/eczema-atopic-dermatitis': '2026-08-02',
  '/blog/genital-warts': '2026-08-02',
  '/blog/hemangioma': '2026-08-02',
  '/blog/herpes-simplex-virus': '2026-08-02',
  '/blog/herpes-zoster-shingles': '2026-08-02',
  '/blog/impetigo': '2026-08-02',
  '/blog/insect-sting': '2026-09-28',
  '/blog/lichen-planus': '2026-09-28',
  '/blog/melanoma': '2026-08-02',
  '/blog/molluscum-contagiosum': '2026-08-02',
  '/blog/psoriasis': '2026-08-02',
  '/blog/regular-mole': '2026-08-02',
  '/blog/rosacea': '2026-08-02',
  '/blog/scabies': '2026-08-02',
  '/blog/seborrheic-dermatitis': '2026-08-02',
  '/blog/seborrheic-keratosis': '2026-09-28',
  '/blog/squamous-cell-carcinoma': '2026-08-02',
  '/blog/tinea-infections-ringworm': '2026-08-02',
  '/blog/urticaria-hives': '2026-10-14',
  '/blog/vitiligo': '2026-08-02',
};

// Fails the build when a route has no date, so a new page cannot ship with a guessed one.
export function lastContentChange(path: string): string {
  const date = contentDates[path];
  if (!date) {
    throw new Error(`src/lib/content-dates.ts has no entry for "${path}". Add the date of its last content change.`);
  }
  return date;
}
