# SKIND website — content, dermatology & design audit

**Date:** 2 August 2026
**Scope:** 26 blog articles (bilingual DA/EN), the 127-question FAQ corpus, blog imagery, design system.
**Method:** every article and the full FAQ read in both languages; the site built (`npm run build`) and the rendered static HTML measured, grepped and viewed in a browser. Every finding below was verified against source or built output — quotes are verbatim.
**Status:** audit only. No site files were changed.

---

## 1. Start here

Ten findings, ordered by how much damage they do. Everything is verified as **shipping in the current production build** unless stated.

| # | Finding | File |
|---|---|---|
| 1 | **Melanoma article states the core statistic backwards.** "Seven in ten cases arise from existing moles" — the evidence is the inverse: ~70% of melanomas arise *de novo* on normal skin. The page teaches readers to watch old moles and implicitly discount new spots. | `blog/melanoma:221,225` |
| 2 | **Two corrupted strings ship to Danish readers.** `"...synlige, når manDry the affected area with a magnifying glass."` and `"...i et forsøg på at eliminere what that perceives as foreign"`. | `blog/lichen-planus:322,346` |
| 3 | **Urticaria recommends ranitidine** — withdrawn worldwide in 2020 (NDMA contamination, EMA suspension). Cannot be prescribed in Denmark. | `blog/urticaria-hives:387` |
| 4 | **Cellulitis, shingles and insect-sting route urgent cases into a 48-hour photo queue.** Insect-sting's CTA literally invites someone having "a severe allergic reaction" to open the app. Shingles' 48-hour promise collides with its own 72-hour antiviral window. Cellulitis' CTA contradicts its own "seek medical help immediately". | `blog/insect-sting:114`, `blog/herpes-zoster-shingles:481`, `blog/cellulitis:464` |
| 5 | **A fabricated clinical sign.** Melanoma warns about `"birdshot"` patterns — not a dermatological term — and describes a *nail* finding while labelling it lentigo maligna, a *facial* melanoma. | `blog/melanoma:321` |
| 6 | **No structured data reaches the served HTML.** All 56 JSON-LD blocks across 32 files are injected client-side by `next/script`. Verified: zero `<script type="application/ld+json">` tags anywhere in `dist/`. | site-wide |
| 7 | **Scabies tells everyone to apply permethrin "from the neck down"** with no exception for infants, young children, the elderly or immunocompromised patients, who need scalp/face/palms/soles treated. | `blog/scabies:371` |
| 8 | **A logic inversion, in both languages:** "the lighter your skin, the greater the risk, **because less melanin provides natural protection**". It says the opposite of what is meant. | `blog/melanoma:375,376` |
| 9 | **Non-words and foreign words in the Danish copy** — `Weigert` (German surname used for "weather"), `observatiå`, `Kleine`, `insektmide`, `effektigt`, `mennesker.trigger`. Visible to every native speaker. | 20+ locations |
| 10 | **Article hero images are rendered illegible** by a blue blend overlay — on a dermatology site you cannot see the condition. | all 26 |

**The good news:** the FAQ corpus has **perfect DA/EN parity** (127 questions each, same order, zero numeric mismatches). Heading structures on the full-length articles are question-shaped and answer-first, which is exactly right for AI citation. Most ICD-11 codes check out. `melanoma`'s CTA is the only one that correctly says "assessment" rather than "diagnosis", and its acral/skin-of-colour paragraph is genuinely better than most competitors'.

---

## 2. Technical SEO / GEO

### 2.1 Structured data never reaches crawlers (critical, site-wide)

Every schema is emitted through `next/script`:

```jsx
<Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={...} />
```

`next/script` defaults to `afterInteractive` — it injects the tag **via JavaScript after hydration**. In the static export the JSON exists only escaped inside the React Flight payload:

```
<script>self.__next_f.push([1,"[\"$\",\"$L7\",null,{\"id\":\"faq-category-schema\",\"type\":\"application/ld+json\",…
```

Verified across `dist/`: **zero** literal `<script type="application/ld+json">` elements on any page — blog, FAQ, homepage. **56 schema blocks across 32 source files** are affected.

Googlebot renders JavaScript and will usually still see it. **GPTBot, ClaudeBot, PerplexityBot and CCBot do not.** For a site with a written GEO strategy this nullifies the entire structured-data investment for exactly the audience it was built for.

> `GEO-PLAN.md` lists these schemas under **"What You Already Have (Working Foundation)"**. That premise is false; the plan needs revisiting on this point.

**Fix** — a plain tag in a server component *is* serialized into the HTML:

```jsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
```

> Separately: `GEO-PLAN.md` §2.1 recommends deleting the `.txt` files from `dist/`. **Don't.** Those are Next.js RSC payloads required for client-side navigation; deleting them breaks soft navigation. (The stale `index.txt` committed at the repo root *is* junk and can go.)

### 2.2 Sitemap lists 8 of 26 articles

`src/app/sitemap.ts` hardcodes `blogSlugs` with 8 entries. **18 are missing**, including every skin-cancer page:

`actinic-keratosis, alopecia-areata, basal-cell-carcinoma, cellulitis, contact-dermatitis, genital-warts, hemangioma, impetigo, insect-sting, lichen-planus, melanoma, molluscum-contagiosum, psoriasis, regular-mole, scabies, seborrheic-dermatitis, seborrheic-keratosis, squamous-cell-carcinoma`

Derive it from the filesystem so it cannot drift again.

### 2.3 FAQ schema contradicts the visible page — and itself

- On **every** article, the `faqSchema` questions differ from the questions rendered on the page. Zero overlap on cellulitis, eczema, and all six of batch 2. Google requires FAQ markup to reflect visible content.
- Worse: **75 question strings are byte-identical between the blog schemas and the diseases FAQ schema, and 55 of those pair the identical question with a *different* answer.** One domain, two competing canonical answers to "Hvad er psoriasis?".
- The four short posts emit **no FAQ schema at all** — despite finished Q&A pairs already sitting unused in `faq-data.ts:1377–1550`.

### 2.4 FAQ questions carry no heading semantics

5 of 6 FAQ category pages contain **no `<h2>` or `<h3>`** — just `<h1>` and the footer's `<h4>`s. Every question is a `<span>`.

| Page | Headings |
|---|---|
| how-it-works, pricing, privacy-security, app, contact | h1 ×1, h4 ×2 (footer only) |
| diseases | h1 ×1, h2 ×24, h4 ×2 |

The visible answer text *is* server-rendered (140 `<details>` elements with full text), so the accordion isn't hiding content — but the questions have no heading weight.

Also missing on all six category pages: **hreflang** (each sets only `alternates.canonical`) and **BreadcrumbList** (a visible breadcrumb is rendered but never marked up). The hub's `ItemList` URLs omit the trailing slash `trailingSlash: true` produces, so every one points at a redirect.

### 2.5 Zero internal links between articles

No article links to any sibling. Ready-made clusters exist and are named in prose but never linked — melanoma names basal-cell and squamous-cell carcinoma verbatim and links neither; `regular-mole` closes with "Early detection of melanoma saves lives" and doesn't link the melanoma article.

### 2.6 English pages show Danish date format

All 26 use `<span>7. {isDa ? 'april' : 'April'} 2026</span>` → English renders **"7. April 2026"**. The blog *listing* correctly renders "April 7, 2026", so the two disagree.

### 2.7 Read-time claims inflated on 25 of 26

Measured from rendered HTML at 200 wpm:

| Article | EN words | Claimed | Actual | Article | EN words | Claimed | Actual |
|---|---|---|---|---|---|---|---|
| insect-sting | 316 | 5 min | **2** | contact-dermatitis | 963 | 7 min | 5 |
| regular-mole | 324 | 5 min | **2** | vitiligo | 963 | 7 min | 5 |
| hemangioma | 331 | 5 min | **2** | urticaria-hives | 970 | 6 min | 5 |
| actinic-keratosis | 352 | 6 min | **2** | alopecia-areata | 982 | 6 min | 5 |
| genital-warts | 617 | 6 min | 3 | herpes-zoster | 982 | 7 min | 5 |
| acne | 739 | 6 min | 4 | melanoma | 989 | 7 min | 5 |
| molluscum | 766 | 6 min | 4 | eczema | 994 | 7 min | 5 |
| cellulitis | 814 | 6 min | 4 | squamous-cell-ca | 1001 | 7 min | 5 |
| seborrheic-dermatitis | 842 | 6 min | 4 | herpes-simplex | 1040 | 6 min | 5 |
| seborrheic-keratosis | 842 | 5 min | 4 | tinea-ringworm | 1064 | 7 min | 5 |
| lichen-planus | 880 | 6 min | 4 | basal-cell-ca | 1338 | 7 min | **7 ✓** |
| psoriasis | 882 | 7 min | 4 | | | | |
| impetigo | 902 | 6 min | 5 | **median** | **920** | | |
| rosacea | 920 | 6 min | 5 | **total** | **21,746** | | |
| scabies | 933 | 7 min | 5 | | | | |

### 2.8 Over-length metadata

Titles over ~60 chars: squamous-cell-carcinoma (77/74), eczema (74/76), basal-cell-carcinoma (74/73), herpes-simplex (74/76), melanoma (70/76), molluscum (69/71), seborrheic-dermatitis (69/72), seborrheic-keratosis (68/68), genital-warts (68/66), herpes-zoster (72), contact-dermatitis (66/67), urticaria (65/72), tinea (64/65), alopecia (63/65).

Descriptions over ~160: alopecia (196), genital-warts (187), seborrheic-keratosis (184/175), squamous-cell-ca (184/170), impetigo (182), melanoma (182/176), basal-cell-ca (181), vitiligo (179/172), scabies (174), tinea (174/173), herpes-simplex (172/170), seborrheic-dermatitis (172), psoriasis (164), urticaria (164).

`hemangioma` (134/123) is the opposite problem — too short.

### 2.9 Danish keyword misses

The Danish copy repeatedly uses terms Danes don't search for, and omits the ones they do:

- **`atletfod`** (×4, a calque) instead of **`fodsvamp`** — and `fotsvamp` (Norwegian) in the FAQ
- **`lyskeeksem`** instead of **`lyskesvamp`** — also the wrong disease class (see §6)
- **`børnesår`**, the colloquial Danish name for impetigo, appears nowhere
- **`rosen`**, the everyday Danish word for erysipelas, appears nowhere on the cellulitis page
- **`fnat`** missing from scabies keywords; the slug is `scabies` while all Danish copy says `skab`
- **`kontakteksem`** is in the contact-dermatitis keywords but never in the body

Also: `eksem`/`eczema` appears in the psoriasis, seborrheic-dermatitis and lichen-planus keyword lists — unrelated conditions, and it cannibalises the dedicated eczema post.

---

## 3. Length and structural consistency

### 3.1 Four articles are a different product

`actinic-keratosis`, `hemangioma`, `insect-sting`, `regular-mole`: ~125 source lines vs ~500, and **316–352 words** vs a median of 920. They claim 5–6 minute reads against 1.3–1.6 minutes of content — up to **3.9× overstated**.

Each lacks: FAQ schema, author block, second intro paragraph, ICD box, `<h3>` subheadings (they have one each, and it's the CTA), styled treatment cards, `<ul>` classes, and the full disclaimer. Their US spelling also breaks the UK convention of the rest, confirming a different source.

**The two weakest disclaimers sit on `actinic-keratosis` (precancerous) and `regular-mole` (melanoma differentiation)** — exactly the two that most need a strong "see a doctor" line.

Bring all four to the ~900-word template, or merge them. Ready-made FAQ content for all four already exists in `faq-data.ts:1377–1550`.

### 3.2 Disclaimer has 7 variants

16 articles share one wording; the 4 short posts use a truncated version dropping "always consult a dermatologist"; 6 others each differ. Standardise in a shared component.

### 3.3 Category taxonomy is half singletons

| EN category | Posts |
|---|---|
| Skin Conditions | 17 |
| Skin Cancer | 3 |
| Benign Skin Growths | 2 |
| Skin Reactions / Skin Changes / Sexually Transmitted Infections / Precancerous Condition | 1 each |

English also uses **"Skin Conditions"** as the card category but **"Skin Diseases"** as the section header for the same concept; Danish correctly uses `Hudsygdomme` for both. And `herpes-simplex-virus` is badged "Skin Conditions" while `genital-warts` is "Sexually Transmitted Infections" — HSV-2 is equally an STI.

### 3.4 Author attribution contradicts itself

8 articles (`acne`, `eczema`, `rosacea`, `tinea`, `urticaria`, `vitiligo`, `herpes-simplex`, `herpes-zoster`) declare `name: 'Peter Bjerring', jobTitle: 'Consultant Dermatologist'` in JSON-LD while every visible byline says "SkinChange.AI / Medical editorial team".

Either a named dermatologist is reviewing this — in which case hiding them wastes real credibility on YMYL medical pages — or the schema asserts authorship the page contradicts. Pick one.

---

## 4. Imagery and design

### 4.1 The hero treatment destroys the clinical photo

```jsx
<div className="... bg-gradient-to-br from-[#304ffe] to-[#1a237e]">
  <img className="w-full h-full object-cover mix-blend-overlay opacity-60" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/60 to-transparent" />
```

A clinical photograph at 60% opacity in `mix-blend-overlay` over a saturated blue gradient, plus a second blue gradient on top. Rendered, the psoriasis hero is an essentially uniform blue rectangle — the condition is invisible.

The blog *listing* renders the same files with no blend mode and they read fine, so the site already contradicts itself on how to present these assets. (Even the opacity is inconsistent: 23 posts at `opacity-60`, 3 at `opacity-50`.)

**Fix, free:** drop `mix-blend-overlay` and the opacity. Consider a neutral surface with `object-contain` so portrait clinical images aren't cropped to a 16:7 letterbox.

### 4.2 Two articles use off-brand hero colours

`cellulitis` uses a red gradient (`#c62828` → `#8e0000`), `lichen-planus` purple (`#6a1b9a` → `#4a148c`); the other 24 use brand blue. With the blend mode these render as visibly red and purple heroes.

### 4.3 Source images are inconsistent, and some are wrong

| Image | Size | Dimensions | Issue |
|---|---|---|---|
| blog-hemangioma.jpg | 3.4 MB | 2560×2832 | Casual iPhone photo, hand-drawn arrow, fabric in frame |
| blog-insect-sting.jpg | 924 KB | 1800×1200 | A mosquito on a leaf — not a skin reaction; a tropical *Aedes*, not Danish-relevant |
| blog-cellulitis.jpg | 96 KB | 1200×525 | Microscopy imagery, not a skin presentation |
| blog-mole.jpg | 168 KB | 976×1023 | **Shows a pearly, centrally-crusted papule beside a ruler — reads as basal cell carcinoma, not a benign nevus.** Labelling this "regular mole" teaches the wrong baseline. Worth a dermatologist's eye before anything else here. |
| blog-acne / rosacea / vitiligo / tinea / urticaria / scabies / herpes-simplex | 16–28 KB | **330 px wide** | Thumbnail-grade; upscaled ~2.7× in an 896 px container |
| blog-melanoma.jpg | 1.0 MB | 2450×1705 | Good quality, but one of the most reused public-domain melanoma photos on the web |

Aspect ratios span 0.75–2.29 against a `16/7` (2.29) container, so nearly every image is heavily cropped. Only `blog-cellulitis.jpg` natively matches.

**No image carries any attribution or licence note** — verified, zero references in `src/`. Several are characteristic Wikipedia/DermNet thumbnail widths. Worth a licensing review independent of design.

### 4.4 Free performance win

Blog images total **10 MB**, served unoptimised (`images.unoptimized: true`, which is required for static export — so pre-compressing the files is the fix, not `next/image`). Re-encoding `blog-hemangioma.jpg` at 1600 px / q80: **3.4 MB → 400 KB**, no visible difference at display size. Across the set that recovers roughly 7–8 MB.

Article heroes also use raw `<img>` with no `width`/`height`/`fetchpriority` while the listing uses `next/image`. Unify.

### 4.5 Design tokens defined but unused

`tailwind.config.ts` defines full `primary`, `nordic` and `accent` scales. The blog hardcodes hex **721 times** (`#1a237e` ×552, `#304ffe` ×169) plus 5 one-off colours. The `accent` token is used **once** in the whole codebase. A rebrand currently means 721 edits.

---

## 5. Language quality

Danish is the primary market (`x-default` → `/da/`), and Danish is where the worst copy is.

### 5.1 Non-words, foreign words and corrupted strings (all verified in the built HTML)

| File:line | Text | Should be | Note |
|---|---|---|---|
| lichen-planus:322 | `når manDry the affected area with a magnifying glass.` | full Danish sentence | **Truncated mid-word + English fragment spliced on. Ships live.** |
| lichen-planus:346 | `at eliminere what that perceives as foreign` | `at fjerne noget, de opfatter som fremmed` | **Untranslated, itself ungrammatical. Ships live.** |
| psoriasis:411 | `Weigert` | `Vejr` | German surname used as Danish for "Weather" |
| psoriasis:290 | `body folds` | `hudfolder` | Untranslated |
| psoriasis:108 | `Familiehændelse` | `Arvelighed` | Means "family event" |
| rosacea:279 | `Kleine` | `Små` | German |
| vitiligo:418 | `hauttransplantation` | `hudtransplantation` | German ("Haut") |
| seborrheic-dermatitis:298 | `mennesker.trigger den` | `mennesker udløser den` | Full stop mid-sentence + English verb |
| seborrheic-dermatitis:387 | `kortkurstbehandling` | `korttidsbehandling` | Not a word |
| molluscum:394 | `observatiå` | `observation` | Not a word |
| molluscum:248 | `(omental)` | `(umbilikation)` | *Omental* = of the abdominal omentum |
| scabies:218 | `insektmide` | `mide` | Mites are arachnids |
| scabies:360 | `effektigt` | `effektivt` | Not a word |
| scabies:270 | `snorlige` | `bugtede` | Means "dead straight"; **EN says "serpentine" — opposite meanings**, and burrows *are* serpiginous |
| tinea:457 | `hartnakket` | `hårdnakket` | German |
| herpes-simplex:319 | `Helningsfasen` | `Helingsfasen` | *Helning* = slope. `herpes-zoster:289` gets it right — the two contradict |
| herpes-simplex:314 | `sæderne` | `balderne` | Means "the seats"; EN says "buttocks" |
| impetigo:363 | `dengruppe` | `den gruppe` | Missing space — visible typo |
| insect-sting:87,111 | `bugs` | `insekter` | **Untranslated English, twice** |
| seborrheic-keratosis:437 | `krats ikke i væksternes` | `krads ikke i væksterne` | Invalid imperative + wrong case |
| acne:93,245 | `hårfollikkler` | `hårfollikler` | ×2 |
| alopecia-areata:101 | `Håravfallet` | `Hårtabet` | Norwegian |
| vitiligo:337 | `plettvis` | `pletvis` | Norwegian |
| contact-dermatitis:100,306,458 | `irritérende` | `irriterende` | Spurious accent ×3 |
| urticaria:253,258,287,293 | `kvabler` / `kvabel` | `kvadler` / `kvaddel` | Not a Danish word, ×4 |
| urticaria:327 | `soluticaria` | `solurticaria` | Typo |
| herpes-zoster:389,415 | `post-herpeticsk` | `postherpetisk` | ×2 |
| lichen-planus:456,460,481 | `retinoidere` | `retinoider` | Wrong plural ×3 |
| cellulitis:284 | `det nederste ben` | `underbenet` | Calque |
| cellulitis:398 | `et løst bandage` | `en løs bandage` | Wrong gender |
| actinic-keratosis:105 | `spidsbelastningstider` | `midt på dagen (kl. 12–15)` | Electricity-grid jargon |
| actinic-keratosis:93 | `lyshuede` | `lyshudede` | *Hue* = cap |

**In `faq-data.ts`:** `fotsvamp`→`fodsvamp` (:51), `atletfod`→`fodsvamp` (×4), `lyskeeksem`→`lyskesvamp`, `graverlinjer`→`gravegange`, `lyshuede`→`lyshudede`, `sengetæger`→`væggelus`, `Melanoma`→`melanom` (×3), `Basalcellcarcinom`→`basalcellekarcinom` (×4), `flade cellerne`→`pladecellerne`, `non-bulløs`→`ikke-bulløs`, `selvanalyse`→`selvundersøgelse` (×3), split compounds `SKIND appen`, `håndkøbs antihistaminer`, `hudlæge konsultation`.

Recurring classes to sweep: split compounds, Norwegianisms, spurious accents, gender/number agreement (`svær eksem`→`svært eksem`, `blød tøj`→`blødt tøj`, `Intens(e) kløe`, `overskyet dage`→`overskyede dage`).

### 5.2 The same term spelled two ways

- `seborrheisk` (seborrheic-dermatitis, and ×7 in `faq-data.ts`) vs `seboroisk` (seborrheic-keratosis). **Danish standard is `seboroisk`.**
- `Basalcellcarcinom` → should be `Basalcellekarcinom`; Danish prefers `-karcinom` over `-carcinom`.
- `melanoma` vs `melanom` inside the same Danish files.
- ABCDE called both `-metoden` and `-reglen`.
- SPF advice: `SPF 50+` in one FAQ answer, `SPF 30+` in three others.

### 5.3 English mixes US and UK

UK dominates roughly 5:1 (`moisturise`, `characterised`, `colour`, `tumour`, `metastasise`, `anaesthesia`, `faecal`, `sulphur`, `millimetres`). Violations: `genital-warts` is fully US; the four short posts are US; `melanoma` has `nevi` (should be `naevi`) in an otherwise UK file; `cellulitis:317` has `Lymphedema` where the same file uses `lymphoedema` twice; `seborrheic-dermatitis` pairs a US title with UK `seborrhoea`.

Recommend standardising on **UK English** — already the majority, and it suits an EU audience.

### 5.4 14 of 26 English alt texts are written in Danish

In `blog/page.tsx`, the `en` array contains: `Eksem atopisk dermatitis behandling` · `Nældefeber urticaria behandling` · `Ringorm tinea svampeinfektion behandling` · `Helvedesild herpes zoster behandling` · `Skab mideinfektion behandling` · `Kontaktdermatitis hudreaktion behandling` · `Lichen planus kløende knopper behandling` · `Molluscum contagiosum virusinfektion behandling` · `Impetigo bakteriel hudinfektion behandling` · `Seborrheisk dermatitis behandling` · `Vitiligo depigmenterede pletter behandling` · `Rosacea kronisk hudlidelse rødme…` · `Herpes simplex virus HSV behandling` · `Acne vulgaralis hudlidelse behandling af akne`

The last also misspells **`vulgaralis`** (→ `vulgaris`), in both languages. All alt text is keyword-strung rather than descriptive.

### 5.5 Hard-coded Danish leaking into English pages

`regular-mole:99–101` — three of the five ABCDE labels are **not wrapped in a ternary**, so English readers see `A – Asymmetri:`, `B – Kant (Border):`, `C – Farve (Color):`. On the site's flagship mole-triage block. (D and E happen to be identical in both languages, which is why it went unnoticed.)

Also `psoriasis:485` renders Danish `Smalspektret UVB` on the English page.

---

## 6. Dermatological accuracy

Ordered by patient risk. Proposed wording is given in both languages so a clinician can approve or amend line by line.

### 6.1 Critical

**Melanoma — the central statistic is inverted.** `melanoma:221/225`: *"Seven in ten cases arise from existing moles"*. The largest meta-analysis (Pampena et al., JAAD 2017) found ~29% of melanomas are nevus-associated — **~70% arise de novo on normal skin**. As published, the page directs surveillance at old moles and away from new spots.
EN: *"Around seven in ten melanomas appear as a completely new spot on normal skin rather than in an existing mole — so a new or changing mark matters just as much as a mole you have always had."*
DA: *"Omkring syv ud af ti melanomer opstår som en helt ny plet på normal hud og ikke i et eksisterende modermærke — en ny eller forandret plet er derfor mindst lige så vigtig som et modermærke, du altid har haft."*

**Melanoma — a fabricated sign.** `melanoma:321`: *"watch for 'birdshot' patterns of dark brown to black streaks, which can be an early sign of lentigo maligna"*. "Birdshot" is not a dermatological descriptor. Dark longitudinal streaks describe **subungual melanoma** (a nail finding); **lentigo maligna** is a flat, irregularly pigmented patch on sun-damaged facial skin. The sentence gives a face-melanoma label to a nail sign under an invented name. Replace with separate, correctly-named descriptions of both, including Hutchinson's sign.

**Melanoma — logic inversion, both languages.** `melanoma:375/376`: *"because less melanin provides natural protection against UV rays"* → *"because less melanin means less natural protection"*.

**Lichen planus — wrong drug.** `lichen-planus:456/460/481` names **isotretinoin** (the acne retinoid) as the oral retinoid for LP. The evidence-based agent is **acitretin**. Systemic corticosteroids — usual first-line for severe LP — are absent, as is any teratogenicity warning (acitretin requires pregnancy avoidance for three years after stopping).

**Lichen planus — two corrupted strings ship live** (see §5.1).

**Urticaria — recommends a withdrawn drug.** `urticaria-hives:387/388` suggests adding an H2-antihistamine, *"e.g. ranitidine"*. Ranitidine was withdrawn worldwide in 2020 (NDMA; EMA suspension). Current EAACI/EuroGuiDerm guidance also no longer includes H2-antihistamines as a step: 2nd-gen H1 → up-dose to 4× → omalizumab → ciclosporin.

**Insect-sting — the CTA invites an anaphylaxis patient to use the app.** `insect-sting:114`: *"If you experience a severe allergic reaction or infection from an insect bite, you can get a quick assessment via the SKIND app."* It also contradicts the article's own red-flag list three paragraphs above. Compounding it, that red-flag section (`:98–105`) **never says "anaphylaxis", never gives 112, and never mentions an adrenaline auto-injector** — while the sibling `urticaria-hives:397` does say "Ring 112".

**Shingles — the product promise collides with the treatment window.** The page states three times that antivirals must start **within 72 hours**, then offers *"Get a diagnosis within 48 hours"* by photo. A patient who notices the rash on day 1 and uploads on day 2 is past the window when the reply lands.

**Cellulitis — CTA routes an acute infection into a 48-hour queue.** `cellulitis:464` offers a 48-hour diagnosis while `:134` says *"Seek medical help immediately"* and `:368` says treatment is always required. There is also **no red-flag panel for necrotising fasciitis or sepsis** — the only warning is buried in a treatment tile.

**Scabies — permethrin instruction omits who needs head-and-neck treatment.** `scabies:371` says *"from the neck down"* with no exception. Infants, young children, the elderly and immunocompromised patients need scalp, face, neck, palms and soles treated. Followed literally in an infant this causes treatment failure and continued household transmission.

**Seborrheic keratosis — "completely harmless" stated above the caveat.** The page says *"fuldstændig harmløse / completely harmless"* and *"not linked to skin cancer"* high up, admitting only much later that it can be hard to distinguish from melanoma. SK is the most common clinical mimic of melanoma.
EN: *"Seborrheic keratosis itself is benign and does not turn into cancer. However, it can look very similar to melanoma and other skin cancers, so any pigmented growth you are unsure about should be assessed by a dermatologist."*
DA: *"Seboroisk keratose er i sig selv godartet og udvikler sig ikke til kræft. Den kan dog ligne modermærkekræft og anden hudkræft til forveksling, så enhver pigmenteret hudforandring, du er i tvivl om, bør vurderes af en hudlæge."*

**Psoriasis — NB-UVB defined as its own opposite.** `psoriasis:479–489` describes **NB-UVB** as *"Broadband UVB light"*, then separately lists *"Smalspektret UVB"* as "more effective than broadband UVB". NB-UVB **is** narrowband UVB — one therapy listed twice, defined wrongly.

**Hemangioma — wrong numbers on an infant page.** `hemangioma:97`: *"about 1 in 10 babies have them at birth"*. Infantile haemangiomas affect ~**4–5%** of infants, and only ~**30% are present at birth**. Duplicated at `faq-data.ts:1539`. `hemangioma:103`'s red-flag list also omits every genuinely urgent presentation: periocular, "beard-distribution"/subglottic (airway), ulceration, ≥5 lesions, large segmental facial (PHACE), lumbosacral (LUMBAR) — and the time-critical point that propranolol works best started during proliferation, so at-risk lesions need review by ~1 month.

**Actinic keratosis — no progression risk and no red-flag section at all**, on a page badged "Precancerous Condition". It is the only article in the set with no "when to see a doctor" heading. The Danish also says AK is not *"kræftfremkaldende"* (**carcinogenic**) where the English says "not cancerous itself" — a different and meaningless claim.

**Regular mole — ABCDE only.** Nodular and amelanotic melanomas are often symmetric, evenly coloured and under 6 mm; they fail every ABCDE criterion yet are the fastest-growing subtypes. The **ugly duckling sign** and the **EFG rule** (Elevated, Firm, Growing >1 month) are both absent, as is any risk-factor content. The same gap exists on the melanoma page.

### 6.2 High

- **Contact dermatitis — wrong ICD-11 code.** Both languages cite **ED60**, which is *acquired hypermelanosis*. Correct: **EK00** (allergic) / **EK02** (irritant).
- **Basal cell carcinoma — Danish cites two codes in one sentence:** *"klassificeret som **ED80** … (kode **2C32**)"*. ED80 is the **acne** code — the same one this repo's acne article uses. English correctly says only 2C32.
- **Seborrheic keratosis cites `L82`**, an ICD-10 code, presented as ICD-11 (which uses 2F21). `melanoma:457` similarly gives C43 without labelling it ICD-10.
- **Contact dermatitis — latex filed under type IV delayed allergens.** Latex is the classic **type I** IgE-mediated allergen and can cause anaphylaxis.
- **Eczema — gluten listed as a trigger.** Not established for atopic dermatitis; the gluten-driven skin disease is dermatitis herpetiformis. Encourages elimination diets, which risk deficiency and paradoxically increase true food allergy.
- **Eczema — eczema herpeticum never mentioned.** The key AD emergency.
- **Herpes simplex — no red-flag guidance at all** for eczema herpeticum, ocular HSV, neonatal herpes or encephalitis. Also: HSV-1 latency placed "near the spinal cord" (it's the trigeminal ganglion), and suppression benefit understated (~70–80% recurrence reduction; the ~50% figure is transmission).
- **Impetigo — nursery exclusion given as 24 hours.** Danish and UK guidance is **48 hours**. Also: **staphylococcal scalded skin syndrome** omitted from a page aimed at parents of 2–6-year-olds, and "OTC treatment" advice that doesn't match Danish pharmacy reality.
- **Shingles — DA and EN state opposite facts.** DA says shingles is *"langt mere udbredt i Europa"*; EN says *"similarly prevalent"*. The Danish claim is also false. Also: herpes zoster ophthalmicus present but buried, with Hutchinson's sign, Ramsay Hunt and disseminated zoster all absent; rash timeline implies 4–8 weeks (actual 2–4 total); Shingrix presented as "recommended" without noting it is self-paid in Denmark.
- **Tinea — `lyskeeksem`** labels tinea cruris as eczema, the exact confusion that leads to steroid use on a fungal infection (tinea incognito). Also recommends **griseofulvin**, no longer marketed in Denmark, and overstates onychomycosis treatment duration.
- **Genital warts — photo triage of anogenital lesions** cannot exclude condyloma lata (syphilis), molluscum, normal variants, VIN/PIN/AIN or verrucous SCC. Also omits that podophyllotoxin and imiquimod are **contraindicated in pregnancy**, and misattributes cancer risk to HPV 6/11.
- **Molluscum — podophyllotoxin and cantharidin presented as home creams.** Cantharidin is clinician-applied; podophyllotoxin is contraindicated in children — and this article's readers are parents of young children. Potassium hydroxide, the actual mainstay, is missing.
- **Rosacea — no warning against topical steroids**, the single most important safety point in rosacea education.
- **Acne — isotretinoin with no mention of teratogenicity**, the Pregnancy Prevention Programme, or that in Denmark only a dermatologist may initiate it.
- **Squamous cell carcinoma — no high-risk-feature list**, while the page says SCC "rarely spreads". Also conflates transplant (65–100×) and HIV (~2–5×) risk into one "10–100×" figure.
- **Basal cell carcinoma — "far more common in men".** Danish register data gives ~1:1.1, with women somewhat higher under 45.
- **Vitiligo — ruxolitinib presented without its indication limits** (EU: non-segmental with facial involvement, age 12+).
- **Alopecia areata — no guidance distinguishing scarring alopecia** (permanent, urgent); prevalence understated by an order of magnitude; "average age of onset 25–35" is both a range-as-average and contradicts the adjacent sentence.
- **Lichen planus — lichen planopilaris and erosive vulvovaginal LP not named**, and their irreversibility not stated. Also the "6 Ps" lists five, with Polygonal and Planar definitions swapped and "Planes" invented.

### 6.3 Medium

Grouped by theme; full per-file detail is in the agent reports.

- **Outdated or incomplete drug guidance:** rosacea (ivermectin 1% and brimonidine absent; *H. pylori* stated as established when contested); eczema (JAK inhibitors and IL-13 biologics absent; calcineurin inhibitors said to have no side effects; "prescribed by a dermatologist" wrong for Denmark); acne (oral antibiotic monotherapy); cellulitis (5–14 days vs current 5–7); psoriasis (biologics oversold without TB screening; ciclosporin misfiled as a DMARD); shingles (opioids ranked above gabapentin for neuropathic pain).
- **Missing red flags:** seborrheic dermatitis (sudden severe disease as a presenting sign of another condition); scabies (post-scabetic itch, the main cause of unnecessary re-treatment; ivermectin contraindications; crusted scabies unexplained); cellulitis (bilateral leg redness is usually *not* cellulitis; periorbital cellulitis in children); molluscum (STI screening in adults, safeguarding in children).
- **Statistics needing sourcing or correction:** urticaria (chronic idiopathic share understated at 50%, actual >80%); lichen planus (1–2% is the *oral* figure); vitiligo (0.5–2%, not 1–2%); seborrheic keratosis (>90% over 60, not >80%); SCC (global incidence "hundreds of thousands" vs millions); HSV (WHO 2016 figures, wrong denominator); melanoma (cure rates quoted without stage — stage I is ~99%, not "over 90%").
- **Internal contradictions:** seborrheic dermatitis warns against prolonged facial steroids then recommends steroids 20 lines later; eczema says "full control" and "cannot be cured"; BCC has a "family history" bullet whose text describes personal history.
- **Denmark-specific mismatches:** melanoma sunscreen advice inverts Kræftens Bekæmpelse's shade-first hierarchy and omits Denmark's very high incidence; genital warts uses US "Pap smear" framing; lichen planus recommends hepatitis C screening that isn't Danish practice; insect-sting describes fire-ant stings (not present in Denmark) and never mentions wasps or bees, which cause most Danish sting anaphylaxis.
- **Diagnosis limits never stated:** no page says BCC/melanoma require biopsy, or that dermoscopy is needed. This matters directly against the 48-hour photo CTA.

---

## 7. The FAQ corpus

**Parity is excellent** — 127 DA / 127 EN, identical order, zero numeric mismatches. That's worth keeping.

**But the four subGroups at `faq-data.ts:1376–1547`** (`regular-mole`, `actinic-keratosis`, `insect-sting`, `hemangioma`) are visibly a bad merge: 4 questions instead of 5, no `icon`, different indentation, single-line formatting, and all the US spellings cluster there. Line 1376 reads `},    {`.

### 7.1 Contradictions the user can actually hit

| Claim | Version A | Version B |
|---|---|---|
| What 298 DKK covers | "one skin condition… diagnosis and treatment plan" (`faq-data.ts:97`) | "…diagnosis, treatment plan and **follow-up**" (homepage schema, `page.tsx:118`) |
| Pay before or after | "you will **not be charged**" if unassessable (`:55/:77`) | "within 48 hours after uploading your images **and paying**" (`page.tsx:99`) |
| Cancer scope | "we can **assess** suspicious moles… and refer" (`:51/:73`) | "dermatologists **diagnose**… **skin cancer** within 48 hours" (`layout.tsx:34`) |
| Response time | "We **guarantee** within 48 hours" (`:47`) | "without undue delay… longer in busy periods" (`:171`) | plus a testimonial claiming 24 hours |
| Covered conditions | 12-item list (`:51`) | different 7-item list (`page.tsx:87`) |

Neither eczema nor genital warts has a `diseases` subGroup, though both have full articles.

### 7.2 Regulatory gaps

- **`:127/:133` over-claims three times in one answer:** *"Ja, absolut… overholder alle gældende regler… Vi deler aldrig dine data med tredjeparter uden dit samtykke."* Under GDPR, processors are third parties and lawful disclosure occurs on bases other than consent (legal obligation, Danish medical-records duties).
- **Nothing anywhere says what photo review cannot do** — not one of 127 answers states that a remote assessment cannot exclude skin cancer.
- **Only 2 of 127 answers contain any urgent-care instruction.** Cellulitis says it "requires prompt treatment" but never says don't wait 48 hours.
- **Children's consent underspecified** (`:59/:81`): no lower age, nothing on shared custody, nothing on 15–17-year-olds' own confidentiality rights under sundhedsloven.
- **Entirely absent:** data retention period (despite a dedicated Privacy category holding one question), right of withdrawal / refunds, prescriptions (though `recept online` is a targeted keyword), doctor authorisation details, complaints route (Styrelsen for Patientklager), and whether a non-Danish resident without MitID can use the service at all.
- `"certificeret hudlæge"` is a calque of US "board-certified"; the Danish category is *speciallæge i hud- og kønssygdomme*.

### 7.3 Answer length and phrasing

EN: min 10 words, max 67, median 40, mean 41. **Nothing is bloated** — the problem is the opposite. The six shortest answers are the commercially important ones:

- `:106` — 18 w — **"What does it cost?"** — no payment methods, no refunds, no exclusions
- `:184` — 10 w — "Can I call you?" — no address, no hours, no email
- `:80` — 14 w — "Can I use SKIND for my children?"
- `:76`, `:180`, `:916` — 20–21 w

Question phrasing is templated rather than search-shaped: **"Who gets X?" ×22**, **"What does X look like?" ×20**, **"What should I remember about X treatment?" ×18** — nobody types that last one. "What causes X?" appears **once**; "How is X treated?" **once**.

`FaqSubGroup.icon` is set on 20 of 24 subgroups and **never rendered** — dead data.

---

## 8. Suggested order of work

**Phase 1 — patient safety (do first)**
1. `insect-sting` CTA + anaphylaxis red flags (112, adrenaline pen, wasps/bees).
2. `melanoma:221/225` inverted statistic; `:321` fabricated "birdshot" sign; `:375` melanin inversion.
3. `lichen-planus:322/346` corrupted strings; `:456` isotretinoin → acitretin.
4. `urticaria-hives:387` remove ranitidine; update to current algorithm.
5. `cellulitis` CTA + necrotising fasciitis/sepsis panel; `herpes-zoster` 72-hour conflict.
6. `scabies` permethrin exception; `impetigo` 24h → 48h; `hemangioma` infant figures and red flags.
7. `eczema` gluten + eczema herpeticum; `seborrheic-keratosis` "harmless" reframe; `psoriasis` NB-UVB; `rosacea` steroid warning; `acne` isotretinoin.
8. Fix the four wrong ICD codes and verify the rest.
9. Add the "what a photo cannot do" caveat to the FAQ and to every cancer-adjacent page.
10. Have a dermatologist look at `blog-mole.jpg`.

**Phase 2 — technical SEO/GEO (small diffs, large effect)**
11. `<Script>` → `<script>` for all 56 JSON-LD blocks.
12. Generate the sitemap from the filesystem.
13. Align FAQ schema to visible content; resolve the 55 duplicate-question/different-answer collisions; render FAQ questions as headings.
14. Add hreflang and BreadcrumbList to the six FAQ category pages.
15. Fix the date format; correct read times.

**Phase 3 — language**
16. Danish sweep using §5.1 and the recurring classes.
17. `regular-mole:99–101` hard-coded Danish in the English ABCDE block.
18. Replace the 14 Danish alt texts; fix `vulgaralis`.
19. Settle `seboroisk`, `-karcinom`, `melanom`, and UK English site-wide.
20. Replace `atletfod`/`lyskeeksem`/`fotsvamp`; add `fodsvamp`, `børnesår`, `rosen`, `fnat`, `kontakteksem`.

**Phase 4 — consistency and design**
21. Remove `mix-blend-overlay`; normalise the two off-brand hero gradients.
22. Recompress images (~10 MB → ~2 MB).
23. Expand or merge the four short articles (FAQ content already exists in `faq-data.ts`).
24. Standardise the disclaimer; collapse singleton categories; resolve author attribution.
25. Fill the FAQ gaps: refunds, prescriptions, data retention, doctor credentials, complaints route, MitID requirement.
26. Replace hardcoded hex with design tokens; add internal cross-links.
