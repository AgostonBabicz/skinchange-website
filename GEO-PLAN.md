# SkinChange GEO Audit — March 2026
## Generative Engine Optimization Plan

---

## Executive Summary

This document is a structured GEO (Generative Engine Optimization) plan for skinchange.dk / skinchange-website. It covers technical schema gaps, content quality issues, semantic markup improvements, and a prioritized 4-week roadmap for implementation.

**Scope:** All pages — homepage, blog articles (19), FAQ hub + sub-pages, guide, about, download, contact.
**Languages:** Danish (primary, DA) and English (EN).
**Last updated:** March 31, 2026

---

## Part 1: What You Already Have (Working Foundation)

- Next.js static site generation — fast loads, clean HTML
- JSON-LD: MedicalOrganization, Physician, Service, FAQPage, Article schemas
- Open Graph + Twitter Cards + canonical URLs + hreflang (DA/EN)
- Dual-language (DA/EN) support throughout
- Sitemap.xml + robots.txt properly configured
- 19 blog articles with FAQPage schema on each
- Medical disclaimers on all article pages

---

## Part 2: Critical GEO Gaps (AI Overview Blockers)

These are the issues most likely to prevent SkinChange from appearing in AI Overviews and semantic search results.

### 2.1 Plain-text blog fallbacks (CRITICAL)

Every blog article has two output files:
- `/dist/da/blog/acne/index.html` — full HTML with schema
- `/dist/da/blog/acne/index.txt` — plain text, NO HTML, NO JSON-LD

The `.txt` files strip all schema, navigation, and styling. AI Overview engines that hit the `.txt` URL see a raw text page with zero structured data. This is actively hurting your AI visibility.

**Action:** Delete the `.txt` files from the dist output, or reconfigure the build pipeline to stop generating them.

### 2.2 Missing HowTo Schema on Guide page

The guide page (`/da/guide/`) teaches users how to use the SKIND app step by step. This is a prime target for HowTo rich results — a schema type that AI Overview engines pull from directly into featured answers.

**Currently:** No HowTo schema.
**Needed:**
```json
{
  "@type": "HowTo",
  "name": "Sådan bruger du SKIND appen",
  "step": [
    { "@type": "HowToStep", "name": "Download appen", "text": "..." },
    { "@type": "HowToStep", "name": "Tag billeder", "text": "..." },
    { "@type": "HowToStep", "name": "Besvar spørgsmål", "text": "..." },
    { "@type": "HowToStep", "name": "Modtag diagnose", "text": "..." }
  ]
}
```

### 2.3 No SpeakableSpecification

Google's AI Overviews on health/medical content require `SpeakableSpecification`. This marks which parts of a page are safe for AI to quote directly in search summaries.

**Missing from all Article and FAQPage schemas:**
```json
"speech": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "h2", ".faq-answer"]
}
```

### 2.4 No Author page / Person schema depth

Peter Bjerring is referenced as:
```json
{ "@type": "Person", "@id": "https://www.skinchange.dk/#peter-bjerring", "name": "Peter Bjerring" }
```

But there is:
- No resolvable author page (e.g., `/da/about/peter-bjerring`)
- No Wikipedia-style credentials block on the About page
- No photo with alt text describing his full credentials
- No way for an AI to verify E-E-A-T signals

**E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness) is the core of health content ranking in AI Overviews.

**Actions:**
1. Create an author page for Peter Bjerring at `/da/about/peter-bjerring` with full bio
2. Add full credentials: "Speciallæge i hudsygdomme, 300+ publikationer, 500+ internationale foredrag, adjunkt professor Aalborg Universitet"
3. On the About page, add a dedicated Person schema for Peter that matches the `@id`

### 2.5 Sitemap shows identical lastmod for all blog posts

Every blog URL in sitemap.xml has:
```
<lastmod>2026-03-26T10:43:40.616Z</lastmod>
```

This is the build timestamp — not the actual article publish or update date. AI/semantic crawlers use `lastmod` as a freshness signal. Each article should carry its own `datePublished` and `dateModified`.

---

## Part 3: High-Priority GEO Improvements

### 3.1 Missing Schemas by Page Type

| Page | Missing Schema | Priority |
|------|---------------|----------|
| Blog articles | HowTo (treatment steps), ImageObject (cover), proper dateModified | HIGH |
| Guide | HowTo, VideoObject (if a video tutorial exists) | HIGH |
| About | AboutPage, full Person for Peter + Brian | HIGH |
| Download | SoftwareApplication (the app itself) | HIGH |
| FAQ sub-pages | BreadcrumbList on all inner pages | MEDIUM |
| Homepage | AggregateRating, Review (patient testimonials) | MEDIUM |

### 3.2 No ICD-11 / MedicalCode on disease articles

Each of the 19 disease blog posts should include a structured medical code so AI engines can link content to authoritative medical knowledge graphs.

**Add to each disease article schema:**
```json
"diagnosis": {
  "@type": "MedicalCode",
  "code": "ED80",
  "codingSystem": "ICD-11",
  "name": "Acne vulgaris"
}
```

Examples by disease:
- Acne → ED80
- Eczema/Atopic Dermatitis → EA80
- Psoriasis → EA90
- Rosacea → ED56
- Melanoma → 2C30
- Basal Cell Carcinoma → 2C71
- Squamous Cell Carcinoma → 2C72
- Impetigo → 1F40
- Herpes Simplex → 1E74
- Herpes Zoster → 1E89
- Scabies → 1G04
- Vitiligo → EC20
- Urticaria → EE40
- Lichen Planus → EA20
- Molluscum Contagiosum → 1F01.1
- Tinea/ Ringworm → 1F28–1F2F
- Cellulitis → 1B50
- Contact Dermatitis → EC10–EC1Z

### 3.3 No localized Service schema per language

Your current Service schema is Danish-only. Create a separate Service entry for the English version at `/en/` with `areaServed: "DK"` and English-language description.

### 3.4 Missing GeoCoordinates

The address in MedicalOrganization has country and region but no lat/lng. AI and map-based services need precise coordinates.

```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 55.3845,
  "longitude": 10.3878
}
```

Note: Use the actual Vejle coordinates ( Hindbærhaven 48, 7120 Vejle Ø).

### 3.5 No SoftwareApplication / MobileApplication schema

The download page promotes an app but has no schema. Add:
```json
{
  "@type": "SoftwareApplication",
  "name": "SKIND",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "MedicalApp",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "DKK" }
}
```

---

## Part 4: Content & Semantic Improvements

### 4.1 FAQ answers too short for AI extraction

AI Overviews need 3–5 sentences minimum in natural-language Q&A format. Current FAQ answers are often 1 sentence.

**Current:**
> "Du modtager en diagnose og behandlingsplan inden for 48 timer."

**Better (3-5 sentences):**
> "Når du har uploadet dine billeder af hudproblemet og betalt de 298 kr., gennemgår en af vores certificerede Speciallæger i hudsygdomme din sag. Du modtager svar — inklusiv diagnose og en personlig behandlingsplan — inden for 48 timer. Hvis vi finder tegn på noget alvorligt, får du klar besked om næste skridt. Behandlingsplanen kan inkludere recept, som du kan hente på ethvert dansk apotek."

Apply this expansion to ALL FAQ acceptedAnswers across all FAQ sub-pages.

### 4.2 Blog articles lack internal linking depth

The acne article links to the eczema article — good. But:
- No "Related conditions" section linking to all 19 disease articles
- No sidebar with links to the FAQ, guide, or about page
- No "Author" link under every article that goes to Peter Bjerring's bio
- No "Last updated" date visible in the article body

AI wants contextual depth. Every article should reference at least 3-5 related pages.

### 4.3 No Q&A subheadings pattern consistency

AI extracts answers from heading + paragraph pairs like:
- `## Hvad er acne?` + paragraph
- `## Hvordan behandles acne?` + paragraph

Audit ALL 19 blog articles for this pattern. Articles that don't use it should be updated.

### 4.4 FAQ schema on non-FAQ pages

Currently: Homepage has FAQ schema ✓
Missing: Download, About, and Contact pages could all carry FAQ schema for relevant common questions:
- Download: "Which devices does SKIND work on?", "Is the app free?"
- About: "Who founded SKIND?", "Are your dermatologists certified?"
- Contact: "How do I reach support?", "What languages do you support?"

### 4.5 Patient testimonial schema

The homepage has a testimonial section but no Review/AggregateRating schema. Add:
```json
{
  "@type": "Review",
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "author": { "@type": "Person", "name": "Jofrajen" },
  "reviewBody": "Havde et stort modermærke på ryggen...",
  "itemReviewed": { "@id": "https://www.skinchange.dk/#service" }
}
```

---

## Part 5: Technical / Structural Issues

### 5.1 og-image.jpg is missing or a placeholder

`og:image` points to `/og-image.jpg` — this file should be a branded 1200×630 image with the SKIND logo, tagline ("Online Hudlæge | Diagnose inden for 48 timer"), and a clean visual. This is the image that appears when links are shared on Facebook, LinkedIn, and in AI chat interfaces.

### 5.2 Google site verification is placeholder

```html
<meta name="google-site-verification" content="your-google-verification-code" />
```
This needs the real value from Google Search Console to enable indexing control and Core Web Vitals data.

### 5.3 hreflang region codes incomplete

Current: `hreflang="da"` and `hreflang="en"`
Should be: `hreflang="da-DK"` and `hreflang="en-GB"` (or appropriate region codes)

### 5.4 No breadcrumb schema on inner pages

All inner pages (blog articles, FAQ sub-pages, about, download) are missing BreadcrumbList schema. This helps AI understand site hierarchy and improves internal link signal flow.

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Forside", "item": "https://www.skinchange.dk/da" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.skinchange.dk/da/blog" },
    { "@type": "ListItem", "position": 3, "name": "Acne" }
  ]
}
```

### 5.5 Article images not structured as ImageObject

Current blog article image:
```json
"image": "/blog-acne.jpg"
```

Should be:
```json
"image": {
  "@type": "ImageObject",
  "url": "/blog-acne.jpg",
  "width": 1200,
  "height": 630
}
```

---

## Part 6: Prioritized 4-Week Roadmap

### Week 1 — Foundation (Critical Fixes)
- [ ] Fix/delete the `.txt` blog fallbacks from dist
- [ ] Add HowTo schema to guide page
- [ ] Add SpeakableSpecification to all Article schemas
- [ ] Fix sitemap `lastmod` to use actual article publish dates
- [ ] Create/replace og-image.jpg with branded 1200×630 image

### Week 2 — Schema Depth
- [ ] Add MedicalCode/ICD-11 to all 19 disease articles
- [ ] Add SoftwareApplication schema to download page
- [ ] Create author page for Peter Bjerring
- [ ] Add geo-coordinates to MedicalOrganization schema
- [ ] Add AggregateRating + Review schema to homepage
- [ ] Add full Person schema for Peter matching @id reference

### Week 3 — Content Quality
- [ ] Expand ALL FAQ answers to 3-5 sentences each
- [ ] Add FAQ schema to Download + About + Contact pages
- [ ] Add related-articles section with 3-5 links to all blog posts
- [ ] Audit and fix all blog article heading → paragraph Q&A patterns
- [ ] Add breadcrumb schema to all inner pages

### Week 4 — Refinement
- [ ] Fix hreflang to use region codes (da-DK, en-GB)
- [ ] Replace placeholder Google verification code with real value
- [ ] Audit all images for descriptive alt text
- [ ] Add VideoObject schema to guide page if video exists
- [ ] Submit updated sitemap to Google Search Console
- [ ] Set up monitoring in Google Search Console

---

## Appendix: Key Schema Types to Implement

| Schema Type | Use Case | Pages |
|------------|----------|-------|
| HowTo | Step-by-step instructions | Guide page |
| SpeakableSpecification | AI-quotable sections | All Article + FAQ pages |
| MedicalCode/ICD-11 | Disease classification | All 19 disease articles |
| SoftwareApplication | Mobile app | Download page |
| SoftwareApplication/Mobile | App store listings | /da/download |
| AboutPage | About the organization | About page |
| BreadcrumbList | Navigation path | All inner pages |
| Review + AggregateRating | Patient testimonials | Homepage |
| ImageObject | Proper image metadata | All pages with images |
| GeoCoordinates | Physical location | Organization schema |
| Author (Person) | E-E-A-T for content | About + Author page |

---

*Plan prepared: March 31, 2026*
*Agent: SkinChange Web Agent (OpenClaw)*
