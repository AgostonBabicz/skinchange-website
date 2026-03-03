# SkinChange SEO & GEO Analysis - Comprehensive Strategy Report

## Executive Summary

SkinChange.dk is a telemedicine platform connecting patients with dermatologists. While the site has good foundational SEO elements, there are significant opportunities to improve visibility, attract qualified traffic, and convert visitors into patients.

---

## Current SEO Audit Results

### ✅ What's Working Well

| Element | Status | Notes |
|---------|--------|-------|
| Meta Titles | ✅ Good | Properly localized for DA/EN |
| Meta Descriptions | ✅ Good | Clear value propositions |
| Canonical URLs | ✅ Implemented | Prevents duplicate content issues |
| Open Graph Tags | ✅ Present | Social sharing optimization |
| Mobile Responsiveness | ✅ Working | Next.js provides good mobile defaults |
| Page Speed | ✅ Fast | Static generation via Next.js |
| Structured Data | ✅ Implemented | Proper JSON-LD for Organization |
| SSL/HTTPS | ✅ Secure | Essential for health sites |
| H1 Structure | ✅ Proper | Single H1 per page |

### ⚠️ Areas Needing Improvement

| Element | Priority | Issue | Impact |
|---------|----------|-------|--------|
| XML Sitemap | 🔴 High | Missing patient-focused keywords | Indexation |
| Blog/Content | 🔴 High | No content marketing | Organic traffic |
| Local SEO | 🔴 High | Missing Google Business Profile | Local visibility |
| Keyword Strategy | 🟡 Medium | No targeted keyword mapping | Rankings |
| Internal Linking | 🟡 Medium | Minimal cross-linking | Page authority |
| Image Alt Text | 🟡 Medium | Some generic descriptions | Accessibility & SEO |
| FAQ Schema | 🟡 Medium | Not marked up properly | Rich snippets |
| Core Web Vitals | 🟡 Medium | Needs monitoring | Rankings |

---

## Keyword Research & Strategy

### Primary Keywords (High Intent, High Competition)

| Danish Keyword | English Equivalent | Volume | Intent | Difficulty |
|----------------|-------------------|--------|--------|------------|
| online hudlæge | online dermatologist | Medium | High | Medium |
| hudlæge online | dermatologist online | Medium | High | Medium |
| teledermatologi | teledermatology | Low | High | Low |
| akne behandling | acne treatment | High | Medium | High |
| eksem behandling | eczema treatment | High | Medium | High |
| hudkræft tjek | skin cancer check | Medium | High | Medium |
| hudlæge konsultation | dermatologist consultation | Medium | High | Medium |

### Long-Tail Keywords (Lower Competition, Higher Conversion)

**Danish:**
- "få diagnose på hududslæt online"
- "hudlæge uden henvisning online"
- "billig hudlæge konsultation"
- "modermærke tjek online"
- "psoriasis behandling recept"
- "rosacea behandling danmark"

**English:**
- "get skin diagnosis online"
- "online dermatologist consultation Europe"
- "prescription for skin condition online"
- "skin cancer screening online"
- "telemedicine dermatology Denmark"
- "mitid verified healthcare app"

---

## Content Strategy Recommendations

### 1. Educational Blog (Priority: 🔴 HIGH)

Build authority and capture informational search traffic:

**Content Pillars:**

```
Pillar 1: Skin Conditions & Treatment
├── Akne: Årsager, typer og behandling [Target: "behandling af akne"]
├── Eksem: Sådan stopper du kløen [Target: "behandling af eksem"]
├── Psoriasis: Livsstil og behandling [Target: "psoriasis behandling"]
├── Rosacea: Rødme i ansigtet [Target: "rosacea behandling"]
├── Hudkræft: Kend tegnene [Target: "hudkræft symptomer"]
└── Modermærker: Hvornår skal du være bekymret? [Target: "modermærker kræft"]

Pillar 2: Telemedicine & Digital Health
├── Hvordan fungerer online hudlæge konsultation?
├── Fordele ved telemedicin for hudsygdomme
├── Er online hudlæge konsultation sikker?
├── GDPR og din sundhedsdata
└── MitID i sundhedsapps: Sådan virker det

Pillar 3: Skincare & Prevention
├── Solbeskyttelse: Guide til SPF
├── Vinterhud: Sådan undgår du tør hud
├── Børnehud: Almindelige problemer
└── Sådan fotograferer du dit hudproblem
```

**Content Specifications:**
- **Length:** 1,500-2,500 words per pillar page
- **Format:** Include videos, infographics, comparison tables
- **Update Frequency:** 2-4 posts per month
- **Language:** Match site language (DA/EN versions)

### 2. Patient Success Stories (Priority: 🟡 MEDIUM)

Before/after cases (with consent) for social proof:
- Video testimonials
- Written case studies with outcomes
- How SkinChange helped specific conditions

### 3. Comparison Pages (Priority: 🟡 MEDIUM)

- "Online hudlæge vs. traditionel hudlæge"
- "SkinChange vs. [competitors]"
- "Pris sammenligning: Online hudpleje"

---

## Technical SEO Recommendations

### 1. Add FAQ Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Hvordan fungerer SkinChange?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Du downloader appen, tager billeder af dit hudproblem, og en certificeret hudlæge gennemgår din sag inden for 48 timer..."
    }
  }]
}
```

### 2. Implement Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "about": {
    "@type": "MedicalProcedure",
    "name": "Online Dermatology Consultation",
    "procedureType": "Telemedicine dermatology consultation"
  }
}
```

### 3. Improve Image SEO

Current: `<Image src="..." alt="Peter" />`
Improved: `<Image src="..." alt="Peter Bjerring - Speciallæge i hudsygdomme og grundlægger af SkinChange" />`

### 4. Add Breadcrumb Navigation

```html
<nav aria-label="breadcrumb">
  <ol>
    <li><a href="/da">Forside</a></li>
    <li><a href="/da/faq">FAQ</a></li>
  </ol>
</nav>
```

---

## Local SEO Strategy

### Priority Actions:

1. **Google Business Profile (CRITICAL)**
   - Claim/verify: SkinChange.AI ApS
   - Address: Hindbærhaven 48, 7120 Vejle Ø
   - Categories: Dermatologist, Telemedicine Service, Healthcare Provider
   - Add: Photos, services, business hours
   - Request reviews from patients

2. **Local Citations**
   - Submit to Danish business directories:
     - Krak.dk
     - DeGuleSider.dk
     - Facebook Business Page
   - Healthcare-specific:
     - Sundhed.dk (if applicable)
     - Patienthåndbogen

3. **Local Landing Pages**
   Create pages targeting:
   - "Hundlæge Vejle"
   - "Hundlæge København"
   - "Hundlæge Aarhus"
   - "Hundlæge Odense"
   - "Online hudlæge Danmark"

4. **Review Generation Strategy**
   - In-app review prompts after successful consultations
   - Email follow-up requesting Trustpilot/Google reviews
   - Video testimonial campaign

---

## Traffic Enrichment Strategies

### 1. Search Engine Marketing (SEM)

**Google Ads Campaign Structure:**

```
Campaign 1: Brand Terms
├── Ad Group: SkinChange Brand
├── Keywords: "skinchange", "skind app", "skind hudlæge"
└── Goal: Protect and dominate brand SERP

Campaign 2: High-Intent Service Terms
├── Ad Group: Online Dermatology
├── Keywords: "online hudlæge", "hudlæge online", "teledermatologi"
├── USP: "Diagnose inden for 48 timer | Certificerede hudlæger"
└── Goal: Capture ready-to-convert users

Campaign 3: Condition-Specific
├── Ad Group: Acne Treatment
├── Keywords: "akne behandling", "behandling af bumser", "acne læge"
├── Ad Group: Eczema Treatment
├── Keywords: "eksem behandling", "kløende hud behandling"
└── Goal: Target users with specific conditions

Campaign 4: Retargeting
├── Audience: Website visitors who didn't convert
├── Message: "Få 20% rabat på din første konsultation"
└── Goal: Re-engage and convert
```

**Budget Allocation:**
- Brand protection: 20%
- Service terms: 40%
- Condition terms: 30%
- Retargeting: 10%

### 2. Social Media Advertising

**Facebook/Instagram Ads:**
- Target: Women 25-45 (primary research shows they're more likely to seek dermatological help)
- Interest targeting: Skincare, health apps, telemedicine
- Lookalike audiences from existing patient data
- Carousel ads showing app interface
- Video testimonials

**LinkedIn Ads:**
- Target corporate healthcare decision-makers
- B2B partnership opportunities
- Healthcare innovation positioning

### 3. Content Marketing Distribution

| Channel | Content Type | Frequency | Goal |
|---------|--------------|-----------|------|
| YouTube | Educational videos on skin conditions | Weekly | Brand authority |
| TikTok | Skin tips, app features, testimonials | 3-5x/week | Younger demographic |
| Instagram | Before/after (compliant), skincare tips | Daily | Brand awareness |
| LinkedIn | Healthcare innovation, company news | 2x/week | B2B partnerships |
| Newsletter | Skin tips, promotions, new features | Weekly | Retention |

### 4. Partnership & Referral Traffic

**Strategic Partnerships:**

1. **Pharmacies (apoteker)**
   - Co-marketing campaigns
   - In-store QR codes for online consultation
   - Prescription fulfillment partnership

2. **General Practitioners**
   - Referral program
   - "When unsure, refer to SkinChange"
   - Medical education about telemedicine

3. **Health Insurance Companies**
   - Integration into insurance apps
   - Discounted rates for members

4. **Employers (Corporate Wellness)**
   - Employee benefit packages
   - Corporate health programs
   - Stress-related skin condition support

5. **Beauty/Wellness Industry**
   - Beauty clinics (cross-referral)
   - Skincare brands (affiliate/sponsored content)
   - Influencer partnerships

---

## Conversion Rate Optimization (CRO)

### Current Funnel Analysis:

```
Homepage Visit → Download App → Registration → Consultation Request
     100%            40%           25%            15%
```

### Optimization Opportunities:

1. **Add Social Proof Above the Fold**
   - Patient count: "15,000+ patienter behandlet"
   - Star rating: "4.8/5 stjerner på Trustpilot"
   - "Godkendt af Styrelsen for Patientsikkerhed"

2. **Price Transparency**
   - Show pricing prominently: "298 kr. per konsultation"
   - Comparison: "Spar op til 500 kr. vs. traditionel hudlæge"

3. **Risk Reversal**
   - "Ikke tilfreds? Pengene tilbage garanti"
   - "Certificerede hudlæger med 30+ års erfaring"

4. **Live Chat/Support**
   - Add chatbot for immediate questions
   - "Har du spørgsmål? Chat med os live"

5. **Exit-Intent Popups**
   - Offer first-time discount
   - "Få 50 kr. rabat på din første konsultation"

6. **Trust Signals**
   - MitID verified badge
   - GDPR compliance badge
   - Danish Medical Association membership
   - Media mentions/press coverage

---

## Competitive Analysis

### Main Competitors:
1. **Dr.Dropin** (Norwegian, expanding to DK)
2. **Kry** (Swedish, already in DK)
3. **Practio** (Danish, vaccination focus)
4. **Local private dermatology clinics**

### Competitive Advantages to Emphasize:
- ✅ Specialization: Only dermatology (vs. general telemedicine)
- ✅ Speed: 48-hour guarantee
- ✅ Price: Transparent 298 DKK pricing
- ✅ Expertise: Peter Bjerring's reputation
- ✅ Verification: Government-approved (MitID)

---

## Key Performance Indicators (KPIs)

### Traffic Metrics:
| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| Organic Traffic | Baseline | +50% | +150% |
| Direct Traffic | Baseline | +30% | +50% |
| Referral Traffic | Baseline | +100% | +200% |
| Total Visitors | Baseline | +40% | +100% |

### Conversion Metrics:
| Metric | Current | Target |
|--------|---------|--------|
| App Download Rate | ~? | +25% |
| Registration Rate | ~? | +30% |
| Consultation Booking | ~? | +35% |
| Cost per Acquisition | ~? | -20% |

### Brand Metrics:
- Brand search volume
- Direct traffic growth
- Social media followers
- Review count and rating

---

## 90-Day Action Plan

### Month 1: Foundation
- [ ] Set up Google Business Profile
- [ ] Implement FAQ Schema on all pages
- [ ] Start Google Ads (brand + high-intent)
- [ ] Publish 4 blog posts (content pillars)
- [ ] Optimize image alt text across site
- [ ] Set up Google Search Console monitoring

### Month 2: Authority Building
- [ ] Launch content hub on skin conditions
- [ ] Implement review generation system
- [ ] Partner outreach (pharmacies, GPs)
- [ ] Social media content calendar execution
- [ ] Technical SEO audit fixes
- [ ] 8 additional blog posts

### Month 3: Scale & Optimize
- [ ] Expand Google Ads (condition-specific)
- [ ] Launch retargeting campaigns
- [ ] Influencer partnerships
- [ ] Email marketing automation
- [ ] CRO testing (A/B tests)
- [ ] Analyze & optimize based on data

---

## Expected ROI

**Investment Areas & Expected Returns:**

| Investment | Monthly Cost | Expected Return |
|------------|--------------|-----------------|
| Content Marketing | 8,000-15,000 DKK | 3-5x in organic traffic value |
| Google Ads | 15,000-30,000 DKK | 4-6x ROAS |
| SEO Tech/Consulting | 5,000-10,000 DKK | Long-term compounding |
| Social Media Ads | 8,000-12,000 DKK | Brand awareness + direct conversions |
| Partnerships | Time/effort | Referral traffic (low cost) |

**Projected Outcomes (6 months):**
- 150% increase in organic traffic
- 200% increase in consultation bookings
- Top 3 rankings for primary keywords ("online hudlæge", etc.)
- 100+ patient reviews on Google
- Established as thought leader in Danish digital dermatology

---

## Tools Recommended

1. **Analytics:** Google Analytics 4, Google Search Console
2. **Rank Tracking:** Ahrefs or SEMrush
3. **SEO Audit:** Screaming Frog
4. **Content Research:** AnswerThePublic, AlsoAsked
5. **Social Media:** Hootsuite or Buffer
6. **Email Marketing:** Mailchimp or ConvertKit
7. **Review Management:** Trustpilot Business
8. **Heatmaps/Hotjar:** Hotjar or FullStory

---

*Report generated: March 2025*
*Next review: Monthly with quarterly deep-dives*
