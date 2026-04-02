# SkinChange GEO Metrics — Tracking Framework

**Purpose:** Objectively measurable KPIs to evaluate GEO (Generative Engine Optimization) effectiveness over time.
**Created:** April 2, 2026
**Review Cadence:** Monthly (first of each month)

---

## Metric Categories

| Category | Weight | Owner |
|----------|--------|-------|
| 1. Structured Data Health | 25% | Automated (schema audit) |
| 2. Content Quality | 20% | Content audit |
| 3. Technical SEO | 20% | Site audit |
| 4. AI Overview Eligibility | 20% | Manual assessment |
| 5. Search Visibility | 15% | GSC / external tools |

---

## Category 1: Structured Data Health (25%)

### 1.1 Schema Coverage Score
**What:** % of pages with valid, complete JSON-LD schema
**How to measure:**
```bash
# Count pages with JSON-LD vs total pages
grep -r "application/ld+json" dist/ --include="*.html" | wc -l
# Total HTML pages
find dist/ -name "*.html" | wc -l
```
**Target:** 100% of indexable pages have schema

### 1.2 Schema Validation Score
**What:** % of JSON-LD blocks passing schema.org validation (no errors)
**How to measure:** Use Google Rich Results Test API or `npm run schema-validate`
**Target:** 100% valid (0 errors)

### 1.3 Schema Completeness Index
**What:** Are all recommended fields present per schema type?
**How to measure:** Checklist audit per page type

| Schema Type | Required Fields | Optional but Recommended |
|-------------|-----------------|--------------------------|
| MedicalOrganization | name, url, logo, address, geo | telephone, openingHours, sameAs |
| Article | headline, image, author, datePublished, dateModified | speakable, partOf |
| FAQPage | mainEntity (all questions answered) | — |
| HowTo | name, step[].text | step[].name, image |
| SoftwareApplication | name, operatingSystem, applicationCategory | offers, aggregateRating |

**Target:** 95% of recommended fields populated

### 1.4 SpeakableSpecification Coverage
**What:** % of Article and FAQPage schemas with `speech.speakableSpecification`
**How to measure:**
```bash
grep -c "SpeakableSpecification" dist/da/blog/*/index.html | grep -v ":0"
```
**Target:** 100% of Article + FAQ pages

### 1.5 MedicalCode (ICD-11) Coverage
**What:** % of disease blog articles with proper MedicalCode/ICD-11
**How to measure:**
```bash
grep -c "MedicalCode" dist/da/blog/*/index.html
# Against total disease articles (should be 19)
```
**Target:** 100% (19/19 articles)

### 1.6 Author Schema Depth
**What:** Does Peter Bjerring have a resolvable author page with full credentials?
**How to measure:**
- [ ] Author page exists at `/da/about/peter-bjerring`
- [ ] Author page has full Person schema
- [ ] All blog articles link to author page
**Target:** All 3 conditions = YES

---

## Category 2: Content Quality (20%)

### 2.1 FAQ Answer Length
**What:** Average word count of FAQ acceptedAnswers
**How to measure:**
```bash
# Extract acceptedAnswer text from all FAQ pages, count words
grep -oP '(?<="acceptedAnswer":\{[^}]*"text":")[^"]+' dist/da/faq/*/index.html | awk '{sum+=NF} END {print sum/NR}'
```
**Target:** ≥50 words per answer (3-5 sentences)

### 2.2 FAQ Answer Sentence Count
**What:** % of FAQ answers with ≥3 sentences
**How to measure:** Parse and count sentence-ending punctuation
**Target:** ≥90% of answers meet ≥3 sentences

### 2.3 Q&A Heading Pattern Compliance
**What:** % of blog articles using `## Question` + paragraph pattern for AI extractability
**How to measure:** Manual audit or regex scan for `##\\s+[HvadHvordanHvornår].*\\?` followed by paragraph
**Target:** 100% of blog articles

### 2.4 Internal Link Density
**What:** Average internal links per blog article
**How to measure:**
```bash
# Count internal links per blog article
grep -oP 'href="(/da/|/en/)' dist/da/blog/*/index.html | sort | uniq -c | awk '{sum+=$1; count++} END {print sum/count}'
```
**Target:** ≥5 internal links per article

### 2.5 Related Content Coverage
**What:** % of blog articles with a "Related conditions" or "Related articles" section
**How to measure:** Grep for section headers containing "Relateret" or "Related"
**Target:** 100% of articles

---

## Category 3: Technical SEO (20%)

### 3.1 Core Web Vitals Status
**What:** % of pages passing Core Web Vitals thresholds
**How to measure:** Google Search Console → Core Web Vitals report
**Targets:**
| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| LCP | <2.5s | 2.5-4s | >4s |
| FID | <100ms | 100-300ms | >300ms |
| CLS | <0.1 | 0.1-0.25 | >0.25 |

**Target:** ≥95% of pages in "Good"

### 3.2 Mobile Friendliness
**What:** Google mobile usability report
**How to measure:** GSC → Mobile Usability report
**Target:** 0 errors

### 3.3 Sitemap Freshness
**What:** % of sitemap entries with accurate lastmod (not build timestamp)
**How to measure:**
```bash
# Check if lastmod matches build date for all entries (bad) or varies (good)
grep -oP '(?<=<lastmod>)[^<]+' public/sitemap.xml | sort -u | wc -l
# If >1 unique value, freshness is likely correct
```
**Target:** Each URL has its own lastmod based on actual publish/update date

### 3.4 hreflang Correctness
**What:** All hreflang tags use region codes (da-DK, en-GB)
**How to measure:**
```bash
grep -r "hreflang" dist/ | grep -v "da-DK\|en-GB"
# Should return 0 results
```
**Target:** 0 incorrect hreflang entries

### 3.5 Canonical URL Consistency
**What:** 100% of pages have correct self-referential canonical
**How to measure:** Automated audit
**Target:** 100% compliance

### 3.6 Robots.txt & robots meta
**What:** No unintended blocking of indexable content
**How to measure:** GSC → URL Inspection tool spot checks
**Target:** 0 misconfigured blocks

---

## Category 4: AI Overview Eligibility (20%)

### 4.1 E-E-A-T Signal Score
**What:** Composite score of Experience, Expertise, Authoritativeness, Trustworthiness signals
**How to measure:** Manual audit checklist

| Signal | What to Check | Points |
|--------|--------------|--------|
| Experience | Real doctor photos, real patient testimonials, real clinic address | 0-25 |
| Expertise | Author credentials on page, MedicalCode on disease articles | 0-25 |
| Authoritativeness | Backlinks from health sites, Wikipedia citations, press mentions | 0-25 |
| Trustworthiness | SSL, medical disclaimers, contact info, privacy policy | 0-25 |

**Target:** ≥80/100

### 4.2 HowTo Schema Coverage
**What:** Guide page has valid HowTo schema
**How to measure:**
```bash
grep -c "HowTo" dist/da/guide/index.html
```
**Target:** ≥1 HowTo schema on guide page

### 4.3 Structured Data for AI Crawlers
**What:** No .txt fallback files stripping schema (critical blocker)
**How to measure:**
```bash
find dist/ -name "*.txt" | wc -l
# Should be 0 or minimal
```
**Target:** 0 .txt files in dist output

### 4.4 Breadcrumb Schema Coverage
**What:** % of inner pages with BreadcrumbList schema
**How to measure:**
```bash
grep -c "BreadcrumbList" dist/da/blog/*/index.html | grep -v ":0" | wc -l
```
**Target:** 100% of inner pages (blog, FAQ sub-pages, about, download)

### 4.5 Organization Schema Depth
**What:** MedicalOrganization has geo-coordinates and complete contact info
**How to measure:** Manual JSON-LD audit
**Target:** All recommended fields present

---

## Category 5: Search Visibility (15%)

### 5.1 Impressions (GSC)
**What:** Total search impressions for tracked queries
**How to measure:** Google Search Console → Performance report
**Target:** MoM growth ≥10%

### 5.2 Click-Through Rate (CTR)
**What:** Overall CTR for site
**How to measure:** GSC → Performance
**Target:** ≥2% overall

### 5.3 Ranking Positions
**What:** Average position for target keywords
**Tracked keywords:**
- "online hudlæge" (primary)
- "hudlæge online Danmark"
- "acne behandling online"
- "eksem online læge"
- "psoriasis diagnose app"
- "online dermatologist Denmark"

**How to measure:** GSC Position column or Ahrefs/Semrush
**Target:** Top 10 for primary, Top 20 for secondary

### 5.4 Indexed Pages
**What:** % of submitted pages actually indexed
**How to measure:**
```bash
# GSC URL Inspection API or
site:skinchange.dk in Google
```
**Target:** ≥95% indexed

### 5.5 Core Indexable Pages Status
**What:** These 10 pages MUST be indexed and error-free:
1. Homepage (DA)
2. Homepage (EN)
3. Blog index
4. FAQ hub
5. Guide page
6. About page
7. Download page
8. Contact page
9. 1 sample disease article (e.g., acne)
10. 1 sample FAQ sub-page

**How to measure:** GSC URL Inspection
**Target:** 10/10 indexed, 0 errors

---

## Monthly Audit Checklist

Copy this to `memory/daily/YYYY-MM-01.md` each month:

```
# GEO Metrics Audit — YYYY-MM

## Date: YYYY-MM-01
## Auditor: [name]

### 1. Structured Data (Target: 100% compliance)
- [ ] Schema coverage: X/Y pages (X%)
- [ ] Validation errors: X
- [ ] Speakable coverage: X%
- [ ] ICD-11 coverage: X/19 articles
- [ ] Author page: YES/NO

### 2. Content Quality
- [ ] Avg FAQ answer length: X words
- [ ] FAQ answers ≥3 sentences: X%
- [ ] Q&A pattern compliance: X%
- [ ] Avg internal links/article: X

### 3. Technical SEO
- [ ] LCP: Xs (target <2.5s)
- [ ] FID: Xms (target <100ms)
- [ ] CLS: X (target <0.1)
- [ ] Mobile errors: X
- [ ] Sitemap lastmod correct: YES/NO
- [ ] hreflang errors: X

### 4. AI Overview Eligibility
- [ ] E-E-A-T Score: X/100
- [ ] HowTo schema on guide: YES/NO
- [ ] .txt files removed: YES/NO
- [ ] Breadcrumb coverage: X%

### 5. Search Visibility (GSC Data)
- [ ] Impressions (MoM): X (+/-X%)
- [ ] CTR: X%
- [ ] Avg position (primary kw): X
- [ ] Indexed pages: X%

## Issues Found
1. 
2. 
3. 

## Actions for Next Month
1.
2.
3.
```

---

## Automated Monitoring Setup

Add to CI/CD (GitHub Actions) after each deploy:

```yaml
- name: GEO Schema Audit
  run: |
    # Check schema coverage
    SCHEMA_COUNT=$(grep -r "application/ld+json" dist/ --include="*.html" | wc -l)
    TOTAL_HTML=$(find dist/ -name "*.html" | wc -l)
    echo "Schema coverage: $SCHEMA_COUNT/$TOTAL_HTML"
    
    # Check for .txt files (GEO blocker)
    TXT_COUNT=$(find dist/ -name "*.txt" | wc -l)
    if [ "$TXT_COUNT" -gt 0 ]; then
      echo "WARNING: $TXT_COUNT .txt files found — these strip schema!"
    fi
    
    # Check speakable
    SPEAKABLE=$(grep -c "SpeakableSpecification" dist/da/blog/*/index.html 2>/dev/null | grep -v ":0" | wc -l)
    echo "Articles with speakable: $SPEAKABLE"
```

---

## Baseline Metrics (April 2026)

| Metric | Current (Est.) | Target | Deadline |
|--------|-----------------|--------|----------|
| Schema coverage | ~70% | 100% | Week 1 |
| Schema validation errors | Unknown | 0 | Week 1 |
| Speakable coverage | 0% | 100% | Week 1 |
| ICD-11 coverage | 0% | 100% | Week 2 |
| FAQ answer length | ~15 words | ≥50 words | Week 3 |
| .txt files | 19+ | 0 | Week 1 |
| Breadcrumb schema | 0% | 100% | Week 3 |
| E-E-A-T Score | ~40/100 | ≥80/100 | Week 4 |
| Author page | No | Yes | Week 2 |
| hreflang errors | Unknown | 0 | Week 4 |

---

*Last updated: April 2, 2026*
*Next review: May 1, 2026*
