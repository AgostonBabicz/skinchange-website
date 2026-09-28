// Source and licence for every photo and illustration used on the blog.
// Keyed by the image path used in the article. Verified against Wikimedia Commons, September 2026.
// Public-domain works need no credit; they are credited anyway for transparency.

export interface ImageCreditEntry {
  slug: string;
  labelDa: string;
  labelEn: string;
  kind: 'photo' | 'illustration' | 'micrograph';
  author: string;
  sourceUrl: string;
  license: 'CC BY 2.5' | 'CC BY 3.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'Public domain';
}

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

const LICENSE_URLS: Record<ImageCreditEntry['license'], string | null> = {
  'CC BY 2.5': 'https://creativecommons.org/licenses/by/2.5/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'Public domain': null,
};

export function licenseUrl(license: ImageCreditEntry['license'], lang: 'da' | 'en'): string | null {
  const base = LICENSE_URLS[license];
  return base ? `${base}deed.${lang}` : null;
}

export const imageCredits: Record<string, ImageCreditEntry> = {
  '/blog-acne.jpg': {
    slug: 'acne', labelDa: 'Akne', labelEn: 'Acne', kind: 'photo',
    author: 'Roshu Bangal', sourceUrl: commons('Acne_vulgaris_on_a_very_oily_skin.jpg'), license: 'CC BY-SA 4.0',
  },
  '/blog-actinic-keratosis.jpg': {
    slug: 'actinic-keratosis', labelDa: 'Aktinisk keratose', labelEn: 'Actinic keratosis', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('SolarAcanthosis.jpg'), license: 'CC BY-SA 4.0',
  },
  '/blog-alopecia-areata.jpg': {
    slug: 'alopecia-areata', labelDa: 'Alopecia areata', labelEn: 'Alopecia areata', kind: 'photo',
    author: 'Abbassyma', sourceUrl: commons('Allopecia_areata.JPG'), license: 'Public domain',
  },
  '/blog-basal-cell-carcinoma.jpg': {
    slug: 'basal-cell-carcinoma', labelDa: 'Basalcellekarcinom', labelEn: 'Basal cell carcinoma', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('Basal_cell_carcinoma2.JPG'), license: 'CC BY 3.0',
  },
  '/blog-cellulitis.jpg': {
    slug: 'cellulitis', labelDa: 'Cellulitis', labelEn: 'Cellulitis', kind: 'photo',
    author: 'RafaelLopez', sourceUrl: commons('Cellulitis3.jpg'), license: 'CC BY-SA 3.0',
  },
  '/blog-contact-dermatitis.jpg': {
    slug: 'contact-dermatitis', labelDa: 'Kontakteksem', labelEn: 'Contact dermatitis', kind: 'illustration',
    author: 'Blausen Medical (BruceBlaus)', sourceUrl: commons('Blausen_0014_AllergicDermatitis.png'), license: 'CC BY 3.0',
  },
  '/blog-eczema.jpg': {
    slug: 'eczema-atopic-dermatitis', labelDa: 'Atopisk eksem', labelEn: 'Atopic eczema', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('Atopy2010.JPG'), license: 'CC BY-SA 3.0',
  },
  '/blog-hpv.jpg': {
    slug: 'genital-warts', labelDa: 'Kønsvorter', labelEn: 'Genital warts', kind: 'micrograph',
    author: 'National Institutes of Health', sourceUrl: commons('Papilloma_Virus_(HPV)_EM.jpg'), license: 'Public domain',
  },
  '/blog-hemangioma.jpg': {
    slug: 'hemangioma', labelDa: 'Hæmangiom', labelEn: 'Haemangioma', kind: 'photo',
    author: 'Midasblenny', sourceUrl: commons('Cherry_angioma.jpg'), license: 'CC BY-SA 4.0',
  },
  '/blog-herpes-simplex.jpg': {
    slug: 'herpes-simplex-virus', labelDa: 'Herpes simplex', labelEn: 'Herpes simplex', kind: 'photo',
    author: 'Centers for Disease Control and Prevention (CDC)', sourceUrl: commons('Herpes(PHIL_1573_lores).jpg'), license: 'Public domain',
  },
  '/blog-herpes-zoster.jpg': {
    slug: 'herpes-zoster-shingles', labelDa: 'Helvedesild', labelEn: 'Shingles', kind: 'photo',
    author: 'Gentgeen', sourceUrl: commons('Herpes_zoster_neck.png'), license: 'CC BY-SA 3.0',
  },
  '/blog-impetigo.jpg': {
    slug: 'impetigo', labelDa: 'Impetigo (børnesår)', labelEn: 'Impetigo', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('Impetigo2020.jpg'), license: 'CC BY-SA 4.0',
  },
  '/blog-insect-sting.jpg': {
    slug: 'insect-sting', labelDa: 'Insektbid og stik', labelEn: 'Insect bites and stings', kind: 'photo',
    author: 'Tomfy', sourceUrl: commons('Tick_bite.jpg'), license: 'CC BY 3.0',
  },
  '/blog-lichen-planus.jpg': {
    slug: 'lichen-planus', labelDa: 'Lichen planus', labelEn: 'Lichen planus', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('Lichen_Planus_(2).JPG'), license: 'CC BY-SA 3.0',
  },
  '/blog-melanoma.jpg': {
    slug: 'melanoma', labelDa: 'Modermærkekræft', labelEn: 'Melanoma', kind: 'photo',
    author: 'National Cancer Institute', sourceUrl: commons('Melanoma.jpg'), license: 'Public domain',
  },
  '/blog-molluscum-contagiosum.jpg': {
    slug: 'molluscum-contagiosum', labelDa: 'Molluscum contagiosum', labelEn: 'Molluscum contagiosum', kind: 'photo',
    author: 'E. van Herk', sourceUrl: commons('Molluscaklein.jpg'), license: 'CC BY-SA 3.0',
  },
  '/blog-psoriasis.jpg': {
    slug: 'psoriasis', labelDa: 'Psoriasis', labelEn: 'Psoriasis', kind: 'photo',
    author: 'Marnanel', sourceUrl: commons('Psoriasis_on_back.jpg'), license: 'CC BY-SA 3.0',
  },
  '/blog-mole.jpg': {
    slug: 'regular-mole', labelDa: 'Modermærker', labelEn: 'Moles', kind: 'photo',
    author: 'Jmarchn', sourceUrl: commons('CompoundNevus1.JPG'), license: 'CC BY-SA 3.0',
  },
  '/blog-rosacea.jpg': {
    slug: 'rosacea', labelDa: 'Rosacea', labelEn: 'Rosacea', kind: 'photo',
    author: 'Sand M., Sand D., Thrandorf C., Paech V., Altmeyer P., Bechara F.G.', sourceUrl: commons('Rosacea.jpg'), license: 'CC BY 2.5',
  },
  '/blog-scabies.jpg': {
    slug: 'scabies', labelDa: 'Fnat (skab)', labelEn: 'Scabies', kind: 'photo',
    author: 'Michael Geary', sourceUrl: commons('Scabies-burrow.jpg'), license: 'Public domain',
  },
  '/blog-seborrheic-dermatitis.jpg': {
    slug: 'seborrheic-dermatitis', labelDa: 'Seboroisk dermatitis', labelEn: 'Seborrhoeic dermatitis', kind: 'photo',
    author: 'Roymishali', sourceUrl: commons('Seborrhoeic_dermatitis_highres.jpg'), license: 'CC BY-SA 3.0',
  },
  '/blog-seborrheic-keratosis.jpg': {
    slug: 'seborrheic-keratosis', labelDa: 'Seboroisk keratose', labelEn: 'Seborrhoeic keratosis', kind: 'photo',
    author: 'Assafn', sourceUrl: commons('Seborrheic_keratosis_closup.jpg'), license: 'CC BY-SA 4.0',
  },
  '/blog-squamous-cell-carcinoma.jpg': {
    slug: 'squamous-cell-carcinoma', labelDa: 'Pladecellekarcinom', labelEn: 'Squamous cell carcinoma', kind: 'photo',
    author: 'National Cancer Institute', sourceUrl: commons('Squamous_Cell_Carcinoma.jpg'), license: 'Public domain',
  },
  '/blog-tinea-ringworm.jpg': {
    slug: 'tinea-infections-ringworm', labelDa: 'Ringorm', labelEn: 'Ringworm', kind: 'photo',
    author: 'CDC / Dr. Lucille K. Georg',
    sourceUrl: commons('Ringworm_on_the_arm,_or_tinea_corporis_due_to_Trichophyton_mentagrophytes_PHIL_2938_lores.jpg'),
    license: 'Public domain',
  },
  '/blog-urticaria-hives.jpg': {
    slug: 'urticaria-hives', labelDa: 'Nældefeber', labelEn: 'Hives', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('EMminor2010.JPG'), license: 'CC BY-SA 3.0',
  },
  '/blog-vitiligo.jpg': {
    slug: 'vitiligo', labelDa: 'Vitiligo', labelEn: 'Vitiligo', kind: 'photo',
    author: 'James Heilman, MD', sourceUrl: commons('Vitiligo2.JPG'), license: 'CC BY-SA 3.0',
  },
};
