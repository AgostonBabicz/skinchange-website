import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  params: { lang: Language };
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
  sectionHeader?: string;
}

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa 
      ? 'Blog om Hudsygdomme & Behandling | SKIND' 
      : 'Skin Disease & Treatment Blog | SKIND',
    description: isDa 
      ? 'Få ekspertråd om hudsygdomme, behandling af akne, eksem, psoriasis og meget mere. Læs artikler skrevet af certificerede hudlæger.' 
      : 'Get expert advice on skin diseases, acne treatment, eczema, psoriasis and more. Articles written by certified dermatologists.',
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/blog`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/blog',
        da: 'https://www.skinchange.dk/da/blog',
        en: 'https://www.skinchange.dk/en/blog',
      },
    },
  };
}

const blogPosts: { da: BlogPost[]; en: BlogPost[] } = {
  da: [
    {
      slug: 'alopecia-areata',
      title: 'Hvad er Alopecia Areata? Årsager, Symptomer og Behandling',
      excerpt: 'Alopecia areata er en autoimmun hudlidelse, hvor immunsystemet angriber hårsækkene. Lær hvad det er, hvem der rammes, og hvilke behandlinger der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '3. april 2026',
      image: '/blog-alopecia-areata.jpg',
      imageAlt: 'Rund plet med hårtab i hovedbunden forårsaget af alopecia areata',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'acne',
      title: 'Hvad er Acne? Årsager, Symptomer og Behandling',
      excerpt: 'Acne er en af de mest udbredte hudlidelser i verden. Lær hvad acne er, hvad der forårsager det, hvem der rammes og hvilke behandlingsmuligheder der findes.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '12. marts 2026',
      image: '/blog-acne.jpg',
      imageAlt: 'Betændt acne med papler og pustler på panden',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'eczema-atopic-dermatitis',
      title: 'Hvad er Eksem (Atopisk Dermatitis)? Årsager, Symptomer og Behandling',
      excerpt: 'Eksem påvirker op mod 20% af børn og 3% af voksne. Lær hvad atopisk dermatitis er, hvad der udløser det, og hvilke behandlingsmuligheder der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '12. marts 2026',
      image: '/blog-eczema.jpg',
      imageAlt: 'Tør, rød og betændt hudplet med atopisk eksem',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'rosacea',
      title: 'Hvad er Rosacea? Årsager, Symptomer og Behandling',
      excerpt: 'Rosacea er en kronisk hudlidelse der forårsager vedvarende rødme, synlige blodkar og undertiden bumser i ansigtet. Lær hvad der udløser det, og hvad du kan gøre.',
      category: 'Hudsygdomme',
      readTime: '5 min',
      date: '13. marts 2026',
      image: '/blog-rosacea.jpg',
      imageAlt: 'Vedvarende rødme og synlige blodkar i ansigtet ved rosacea',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'urticaria-hives',
      title: 'Hvad er Nældefeber (Urticaria)? Årsager, Symptomer og Behandling',
      excerpt: 'Nældefeber rammer op mod 20% af befolkningen i løbet af livet. Lær hvad urticaria er, hvad der udløser de hævede kløende knopper, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '14. marts 2026',
      image: '/blog-urticaria-hives.jpg',
      imageAlt: 'Hævede, lyse kvadler omgivet af rødme, typisk for nældefeber',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'herpes-simplex-virus',
      title: 'Hvad er Herpes Simplex Virus (HSV)? Årsager, Symptomer og Behandling',
      excerpt: 'Herpes simplex virus (HSV) er en af de mest udbredte virale infektioner på verdensplan. Lær hvad der adskiller HSV-1 fra HSV-2, hvordan udbrud ser ud, og hvilken behandling der hjælper.',
      category: 'Hudsygdomme',
      readTime: '8 min',
      date: '15. marts 2026',
      image: '/blog-herpes-simplex.jpg',
      imageAlt: 'Klynge af små blærer på læben forårsaget af herpes simplex',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'herpes-zoster-shingles',
      title: 'Hvad er Helvedesild (Herpes Zoster)? Årsager, Symptomer og Behandling',
      excerpt: 'Helvedesild rammer ca. én ud af tre mennesker i løbet af livet. Lær hvad helvedesild er, hvem der er i risiko, hvad det smertefulde udslæt ser ud, og hvilken behandling der virker bedst.',
      category: 'Hudsygdomme',
      readTime: '8 min',
      date: '16. marts 2026',
      image: '/blog-herpes-zoster.jpg',
      imageAlt: 'Bælte af blærer på den ene side af kroppen ved helvedesild',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'tinea-infections-ringworm',
      title: 'Hvad er Ringorm (Tinea)? Årsager, Symptomer og Behandling',
      excerpt: 'Ringorm er ikke en orm – det er en svampeinfektion. Lær om de forskellige typer tinea-infektioner, hvad der forårsager dem, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '17. marts 2026',
      image: '/blog-tinea-ringworm.jpg',
      imageAlt: 'Ringformet, skællende plet med hævet kant, typisk for ringorm',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'seborrheic-dermatitis',
      title: 'Hvad er Seboroisk Dermatitis? Årsager, Symptomer og Behandling',
      excerpt: 'Seboroisk dermatitis er en af de mest almindelige hudlidelser, der rammer op mod 5% af befolkningen. Lær hvad det er, hvad der forårsager det, og hvilke behandlinger der virker.',
      category: 'Hudsygdomme',
      readTime: '5 min',
      date: '19. marts 2026',
      image: '/blog-seborrheic-dermatitis.jpg',
      imageAlt: 'Fedtet gul skældannelse og rødme ved seboroisk dermatitis',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'vitiligo',
      title: 'Hvad er Vitiligo? Årsager, Symptomer og Behandling',
      excerpt: 'Vitiligo er en autoimmun hudlidelse, der forårsager hvide, afpigmenterede pletter på huden. Lær hvad vitiligo er, hvorfor immunsystemet angriber pigmentcellerne, og hvilke behandlinger der kan hjælpe.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '18. marts 2026',
      image: '/blog-vitiligo.jpg',
      imageAlt: 'Skarpt afgrænsede hvide pletter med tab af pigment ved vitiligo',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'scabies',
      title: 'Hvad er Skab? Årsager, Symptomer og Behandling',
      excerpt: 'Skab er en af de mest smitsomme hudlidelser. Lær hvad skab er, hvorfor det smitter så let, hvordan det ser ud, og hvilke behandlinger der effektivt fjerner miden.',
      category: 'Hudsygdomme',
      readTime: '5 min',
      date: '20. marts 2026',
      image: '/blog-scabies.jpg',
      imageAlt: 'Udslæt med små røde knopper og gravegange ved skab',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'contact-dermatitis',
      title: 'Hvad er Kontaktdermatitis? Årsager, Symptomer og Behandling',
      excerpt: 'Kontaktdermatitis opstår når huden reagerer på et stof, den har været i kontakt med. Lær om de to hovedtyper — irritativ og allergisk — og hvad du kan gøre.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '19. marts 2026',
      image: '/blog-contact-dermatitis.jpg',
      imageAlt: 'Rød, betændt hudplet der hvor huden har været i kontakt med et irriterende stof',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'lichen-planus',
      title: 'Hvad er Lichen Planus? Årsager, Symptomer og Behandling',
      excerpt: 'Lichen planus er en kronisk, inflammatorisk hudlidelse, der forårsager lilla, fladtoppede, kløende knopper. Lær hvad det er, og hvilke behandlinger der kan lindre symptomerne.',
      category: 'Hudsygdomme',
      readTime: '8 min',
      date: '21. marts 2026',
      image: '/blog-lichen-planus.jpg',
      imageAlt: 'Lilla, fladtoppede kløende knopper ved lichen planus',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'molluscum-contagiosum',
      title: 'Hvad er Molluscum Contagiosum? Årsager, Symptomer og Behandling',
      excerpt: 'Molluscum contagiosum er en udbredt virusbaseret hudinfektion, der viser sig som små, perlemorsagtige knopper. Lær hvordan det smitter, og hvilke behandlinger der findes.',
      category: 'Hudsygdomme',
      readTime: '4 min',
      date: '22. marts 2026',
      image: '/blog-molluscum-contagiosum.jpg',
      imageAlt: 'Små perlemorsagtige knopper med central fordybning ved molluscum contagiosum',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'impetigo',
      title: 'Hvad er Impetigo? Årsager, Symptomer og Behandling',
      excerpt: 'Impetigo er en af de mest almindelige bakterielle hudinfektioner hos børn. Lær hvad impetigo er, hvordan honningfarvede skorper ser ud, og hvilken behandling der virker.',
      category: 'Hudsygdomme',
      readTime: '7 min',
      date: '23. marts 2026',
      image: '/blog-impetigo.jpg',
      imageAlt: 'Honningfarvede skorper omkring munden ved impetigo',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'cellulitis',
      title: 'Hvad er Cellulitis? Årsager, Symptomer og Behandling',
      excerpt: 'Cellulitis er en alvorlig bakteriel hudinfektion, der kræver hurtig behandling. Lær hvad cellulitis er, hvordan det ser ud, og hvorfor tidlig diagnose er afgørende.',
      category: 'Hudsygdomme',
      readTime: '6 min',
      date: '24. marts 2026',
      image: '/blog-cellulitis.jpg',
      imageAlt: 'Varmt område med rødme og hævelse, der breder sig, ved cellulitis',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'melanoma',
      title: 'Hvad er Modermærkekræft (Melanom)? Årsager, Symptomer og Behandling',
      excerpt: 'Modermærkekræft er den farligste form for hudkræft. Lær hvordan du bruger ABCDE-metoden til at genkende faresignaler tidligt, og hvorfor tidlig diagnose er afgørende for helbredelsen.',
      category: 'Hudkræft',
      readTime: '9 min',
      date: '26. marts 2026',
      image: '/blog-melanoma.jpg',
      imageAlt: 'Asymmetrisk modermærke med uregelmæssig kant og ujævn farve',
      sectionHeader: 'Hudkræft',
    },
    {
      slug: 'basal-cell-carcinoma',
      title: 'Hvad er Basalcellekarcinom (BCC)? Årsager, Symptomer og Behandling',
      excerpt: 'Basalcellekarcinom (BCC) er den hyppigste form for hudkræft. Lær hvad det er, hvordan det ser ud, hvem der er i risiko, og hvilke behandlingsmuligheder der findes.',
      category: 'Hudkræft',
      readTime: '8 min',
      date: '28. marts 2026',
      image: '/blog-basal-cell-carcinoma.jpg',
      imageAlt: 'Perleagtig, hævet knude med synlige små blodkar ved basalcellekarcinom',
      sectionHeader: 'Hudkræft',
    },
    {
      slug: 'squamous-cell-carcinoma',
      title: 'Hvad er Pladecellekarcinom (SCC)? Årsager, Symptomer og Behandling',
      excerpt: 'Pladecellekarcinom (SCC) er den næsthyppigste form for hudkræft. Lær hvad det er, hvordan det ser ud, hvem der er i risiko, og hvilke behandlinger der findes.',
      category: 'Hudkræft',
      readTime: '6 min',
      date: '29. marts 2026',
      image: '/blog-squamous-cell-carcinoma.jpg',
      imageAlt: 'Skællende, skorpet og fast knude ved pladecellekarcinom',
      sectionHeader: 'Hudkræft',
    },
    {
      slug: 'psoriasis',
      title: 'Hvad er Psoriasis? Årsager, Symptomer og Behandling',
      excerpt: 'Psoriasis er en kronisk, autoimmun hudsygdom, der rammer millioner. Lær hvad det er, hvad der forårsager det, og hvilke behandlinger der findes.',
      category: 'Hudsygdomme',
      readTime: '5 min',
      date: '7. april 2026',
      image: '/blog-psoriasis.jpg',
      imageAlt: 'Hævede røde plaques dækket af sølvfarvede skæl ved psoriasis',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'genital-warts',
      title: 'Hvad er Kønsvorter (HPV)? Årsager, Symptomer og Behandling',
      excerpt: 'Kønsvorter (kondylomer) er en af de mest almindelige seksuelt overførte infektioner. Lær hvad de er, hvordan HPV smitter, og hvilke behandlinger der findes.',
      category: 'Seksuelt overførte infektioner',
      readTime: '8 min',
      date: '8. april 2026',
      image: '/blog-hpv.jpg',
      imageAlt: 'Illustration af humant papillomavirus, som forårsager kønsvorter',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'regular-mole',
      title: 'Almindelige Modermærker (Nevi)',
      excerpt: 'Lær om almindelige modermærker: hvad de er, ABCDE-reglen, og hvornår du bør søge læge.',
      category: 'Godartede Hudvækster',
      readTime: '8 min',
      date: '11. april 2026',
      image: '/blog-mole.jpg',
      imageAlt: 'Nærbillede af en hudforandring ved siden af en målestok',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'seborrheic-keratosis',
      title: 'Hvad er Seboroisk Keratose? Årsager, Symptomer og Behandling',
      excerpt: 'Seboroisk keratose (senilvorter) er en almindelig, godartet hudvækst hos ældre voksne. Lær hvad det er, om det er farligt, og hvilke behandlingsmuligheder der findes.',
      category: 'Godartede Hudvækster',
      readTime: '6 min',
      date: '26. juni 2026',
      image: '/blog-seborrheic-keratosis.jpg',
      imageAlt: 'Flere vortelignende, påklistrede brune vækster ved seboroisk keratose',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'actinic-keratosis',
      title: 'Hvad er Aktinisk Keratose? Årsager, Symptomer og Behandling',
      excerpt: 'Aktinisk keratose er en præcancerøs hudtilstand fra UV-stråling. Lær om symptomer, behandling og forebyggelse.',
      category: 'Præcancerøs Tilstand',
      readTime: '8 min',
      date: '11. april 2026',
      image: '/blog-actinic-keratosis.jpg',
      imageAlt: 'Ru, skællende pletter på solskadet hud ved aktinisk keratose',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'insect-sting',
      title: 'Insektbid og Stik: Behandling og Forebyggelse',
      excerpt: 'Insektbid og stik er almindelige. Lær hvordan du forebygger, behandler og hvornår du skal søge læge.',
      category: 'Hudsygdomme',
      readTime: '9 min',
      date: '11. april 2026',
      image: '/blog-insect-sting.jpg',
      imageAlt: 'Nærbillede af en myg, en almindelig årsag til insektbid',
      sectionHeader: 'Hudsygdomme',
    },
    {
      slug: 'hemangioma',
      title: 'Hvad er Hæmangiom? Årsager, Symptomer og Behandling',
      excerpt: 'Hæmangiomer er godartede hudvækster fra blodkar. Lær om de forskellige typer og hvornår behandling er nødvendig.',
      category: 'Godartede Hudvækster',
      readTime: '9 min',
      date: '11. april 2026',
      image: '/blog-hemangioma.jpg',
      imageAlt: 'Lille, klarrød kirsebærhæmangiom på huden',
      sectionHeader: 'Hudsygdomme',
    },
  ],
  en: [
    {
      slug: 'alopecia-areata',
      title: 'What is Alopecia Areata? Causes, Symptoms and Treatment',
      excerpt: 'Alopecia areata is an autoimmune skin condition where the immune system attacks hair follicles. Learn what it is, who it affects, and which treatments can help.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'April 3, 2026',
      image: '/blog-alopecia-areata.jpg',
      imageAlt: 'Round patch of hair loss on the scalp caused by alopecia areata',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'acne',
      title: 'What is Acne? Causes, Symptoms and Treatment',
      excerpt: 'Acne is one of the most common skin conditions in the world. Learn what acne is, what causes it, who gets it and what treatment options are available.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 12, 2026',
      image: '/blog-acne.jpg',
      imageAlt: 'Inflammatory acne with papules and pustules across the forehead',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'eczema-atopic-dermatitis',
      title: 'What is Eczema (Atopic Dermatitis)? Causes, Symptoms and Treatment',
      excerpt: 'Eczema affects up to 20% of children and 3% of adults worldwide. Learn what atopic dermatitis is, what triggers it, and which treatment options can help.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 12, 2026',
      image: '/blog-eczema.jpg',
      imageAlt: 'Dry, red, inflamed patch of atopic eczema',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'rosacea',
      title: 'What is Rosacea? Causes, Symptoms and Treatment',
      excerpt: 'Rosacea is a chronic skin condition causing persistent facial redness, visible blood vessels and sometimes bumps. Learn what triggers it and what you can do.',
      category: 'Skin Conditions',
      readTime: '5 min',
      date: 'March 13, 2026',
      image: '/blog-rosacea.jpg',
      imageAlt: 'Persistent facial redness and visible blood vessels typical of rosacea',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'urticaria-hives',
      title: 'What is Urticaria (Hives)? Causes, Symptoms and Treatment',
      excerpt: 'Urticaria affects up to 20% of people at some point in their lives. Learn what hives are, what triggers the raised itchy welts, and which treatments work.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 14, 2026',
      image: '/blog-urticaria-hives.jpg',
      imageAlt: 'Raised, pale wheals surrounded by redness, typical of urticaria',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'herpes-simplex-virus',
      title: 'What is Herpes Simplex Virus (HSV)? Causes, Symptoms and Treatment',
      excerpt: 'Herpes simplex virus (HSV) is one of the most widespread viral infections in the world. Learn how HSV-1 and HSV-2 differ, what outbreaks look like, and which treatment options are available.',
      category: 'Skin Conditions',
      readTime: '8 min',
      date: 'March 15, 2026',
      image: '/blog-herpes-simplex.jpg',
      imageAlt: 'Cluster of small blisters on the lip caused by herpes simplex virus',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'herpes-zoster-shingles',
      title: 'What is Shingles (Herpes Zoster)? Causes, Symptoms and Treatment',
      excerpt: 'Shingles affects about one in three people during their lifetime. Learn what shingles is, who is at risk, what the painful rash looks like, and which treatment works best.',
      category: 'Skin Conditions',
      readTime: '8 min',
      date: 'March 16, 2026',
      image: '/blog-herpes-zoster.jpg',
      imageAlt: 'Band of blisters on one side of the torso caused by shingles',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'tinea-infections-ringworm',
      title: 'What is Ringworm (Tinea)? Causes, Symptoms and Treatment',
      excerpt: "Ringworm is not a worm — it is a fungal infection. Learn about the different types of tinea infections, what causes them, and which treatment works.",
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 17, 2026',
      image: '/blog-tinea-ringworm.jpg',
      imageAlt: 'Ring-shaped scaly patch with a raised border, typical of ringworm',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'seborrheic-dermatitis',
      title: 'What is Seborrhoeic Dermatitis? Causes, Symptoms and Treatment',
      excerpt: 'Seborrhoeic dermatitis is one of the most common skin conditions, affecting up to 5% of the population. Learn what it is, what causes it, and which treatments work.',
      category: 'Skin Conditions',
      readTime: '5 min',
      date: 'March 19, 2026',
      image: '/blog-seborrheic-dermatitis.jpg',
      imageAlt: 'Greasy yellow scaling and redness of seborrhoeic dermatitis',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'vitiligo',
      title: 'What is Vitiligo? Causes, Symptoms and Treatment',
      excerpt: 'Vitiligo is an autoimmune skin condition that causes white, depigmented patches on the skin. Learn what vitiligo is, why the immune system attacks pigment cells, and which treatments can help.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 18, 2026',
      image: '/blog-vitiligo.jpg',
      imageAlt: 'Sharply defined white patches of depigmented skin caused by vitiligo',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'scabies',
      title: 'What is Scabies? Causes, Symptoms and Treatment',
      excerpt: 'Scabies is one of the most contagious skin conditions. Learn what scabies is, why it spreads so easily, what it looks like, and which treatments effectively eliminate the mites.',
      category: 'Skin Conditions',
      readTime: '5 min',
      date: 'March 20, 2026',
      image: '/blog-scabies.jpg',
      imageAlt: 'Scabies rash with small red bumps and burrow tracks on the skin',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'contact-dermatitis',
      title: 'What is Contact Dermatitis? Causes, Symptoms and Treatment',
      excerpt: 'Contact dermatitis occurs when the skin reacts to a substance it has touched. Learn about the two main types — irritant and allergic — and what you can do about it.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 19, 2026',
      image: '/blog-contact-dermatitis.jpg',
      imageAlt: 'Red, inflamed patch of contact dermatitis where the skin met an irritant',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'lichen-planus',
      title: 'What is Lichen Planus? Causes, Symptoms and Treatment',
      excerpt: 'Lichen planus is a chronic, inflammatory skin condition causing purple, flat-topped, itchy bumps. Learn what it is and which treatments can help relieve symptoms.',
      category: 'Skin Conditions',
      readTime: '8 min',
      date: 'March 21, 2026',
      image: '/blog-lichen-planus.jpg',
      imageAlt: 'Purple, flat-topped itchy bumps of lichen planus',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'molluscum-contagiosum',
      title: 'What is Molluscum Contagiosum? Causes, Symptoms and Treatment',
      excerpt: 'Molluscum contagiosum is a common viral skin infection that appears as small, pearly white bumps. Learn how it spreads, who gets it, and what treatment options are available.',
      category: 'Skin Conditions',
      readTime: '4 min',
      date: 'March 22, 2026',
      image: '/blog-molluscum-contagiosum.jpg',
      imageAlt: 'Small pearly bumps with a central dimple, typical of molluscum contagiosum',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'impetigo',
      title: 'What is Impetigo? Causes, Symptoms and Treatment',
      excerpt: 'Impetigo is one of the most common bacterial skin infections in children. Learn what impetigo is, what honey-crusted sores look like, and which treatment works.',
      category: 'Skin Conditions',
      readTime: '7 min',
      date: 'March 23, 2026',
      image: '/blog-impetigo.jpg',
      imageAlt: 'Honey-coloured crusts around the mouth caused by impetigo',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'cellulitis',
      title: 'What is Cellulitis? Causes, Symptoms and Treatment',
      excerpt: 'Cellulitis is a serious bacterial skin infection that requires prompt treatment. Learn what cellulitis is, what it looks like, and why early diagnosis is crucial.',
      category: 'Skin Conditions',
      readTime: '6 min',
      date: 'March 24, 2026',
      image: '/blog-cellulitis.jpg',
      imageAlt: 'Warm, spreading area of redness and swelling caused by cellulitis',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'melanoma',
      title: 'What is Melanoma (Skin Cancer)? Causes, Symptoms and Treatment',
      excerpt: 'Melanoma is the most dangerous form of skin cancer. Learn how to use the ABCDE method to recognise warning signs early, and why early detection is critical for a cure.',
      category: 'Skin Cancer',
      readTime: '9 min',
      date: 'March 26, 2026',
      image: '/blog-melanoma.jpg',
      imageAlt: 'Asymmetric mole with irregular borders and uneven colour',
      sectionHeader: 'Skin Cancer',
    },
    {
      slug: 'basal-cell-carcinoma',
      title: 'What is Basal Cell Carcinoma (BCC)? Causes, Symptoms and Treatment',
      excerpt: 'Basal cell carcinoma (BCC) is the most common form of skin cancer. Learn what it is, what it looks like, who is at risk, and what treatment options are available.',
      category: 'Skin Cancer',
      readTime: '8 min',
      date: 'March 28, 2026',
      image: '/blog-basal-cell-carcinoma.jpg',
      imageAlt: 'Pearly, raised nodule with visible small blood vessels, typical of basal cell carcinoma',
      sectionHeader: 'Skin Cancer',
    },
    {
      slug: 'squamous-cell-carcinoma',
      title: 'What is Squamous Cell Carcinoma (SCC)? Causes, Symptoms and Treatment',
      excerpt: 'Squamous cell carcinoma (SCC) is the second most common form of skin cancer. Learn what it is, what it looks like, who is at risk, and which treatments are available.',
      category: 'Skin Cancer',
      readTime: '6 min',
      date: 'March 29, 2026',
      image: '/blog-squamous-cell-carcinoma.jpg',
      imageAlt: 'Scaly, crusted, firm nodule typical of squamous cell carcinoma',
      sectionHeader: 'Skin Cancer',
    },
    {
      slug: 'psoriasis',
      title: 'What is Psoriasis? Causes, Symptoms and Treatment',
      excerpt: 'Psoriasis is a chronic, autoimmune skin disease affecting millions. Learn what it is, what causes it, and which treatments are available.',
      category: 'Skin Conditions',
      readTime: '5 min',
      date: 'April 7, 2026',
      image: '/blog-psoriasis.jpg',
      imageAlt: 'Raised red plaques covered with silvery scale, typical of psoriasis',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'genital-warts',
      title: 'What are Genital Warts (HPV)? Causes, Symptoms and Treatment',
      excerpt: 'Genital warts (condylomata acuminata) are one of the most common sexually transmitted infections. Learn what they are, how HPV spreads, and what treatments are available.',
      category: 'Sexually Transmitted Infections',
      readTime: '8 min',
      date: 'April 8, 2026',
      image: '/blog-hpv.jpg',
      imageAlt: 'Illustration of human papillomavirus, the cause of genital warts',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'regular-mole',
      title: 'Regular Moles (Nevi): What You Need to Know',
      excerpt: 'Learn about regular moles: what they are, the ABCDE rule, and when you should see a doctor.',
      category: 'Benign Skin Growths',
      readTime: '8 min',
      date: 'April 11, 2026',
      image: '/blog-mole.jpg',
      imageAlt: 'Close-up of a skin lesion next to a measuring scale',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'seborrheic-keratosis',
      title: 'What is Seborrhoeic Keratosis? Causes, Symptoms and Treatment',
      excerpt: 'Seborrhoeic keratosis (senile warts) is a common, benign skin growth in older adults. Learn what it is, whether it is dangerous, and what treatment options exist.',
      category: 'Benign Skin Growths',
      readTime: '6 min',
      date: 'June 26, 2026',
      image: '/blog-seborrheic-keratosis.jpg',
      imageAlt: 'Several warty, stuck-on brown growths typical of seborrhoeic keratosis',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'actinic-keratosis',
      title: 'What is Actinic Keratosis? Causes, Symptoms and Treatment',
      excerpt: 'Actinic keratosis is a precancerous skin condition from UV exposure. Learn about symptoms, treatment and prevention.',
      category: 'Precancerous Condition',
      readTime: '8 min',
      date: 'April 11, 2026',
      image: '/blog-actinic-keratosis.jpg',
      imageAlt: 'Rough, scaly patches on sun-damaged skin, typical of actinic keratosis',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'insect-sting',
      title: 'Insect Bites and Stings: Treatment and Prevention',
      excerpt: 'Insect bites and stings are common. Learn how to prevent, treat them, and when to see a doctor.',
      category: 'Skin Conditions',
      readTime: '9 min',
      date: 'April 11, 2026',
      image: '/blog-insect-sting.jpg',
      imageAlt: 'Close-up of a mosquito, a common cause of insect bites',
      sectionHeader: 'Skin Conditions',
    },
    {
      slug: 'hemangioma',
      title: 'What is Hemangioma? Causes, Symptoms and Treatment',
      excerpt: 'Hemangiomas are benign skin growths from blood vessels. Learn about the different types and when treatment is needed.',
      category: 'Benign Skin Growths',
      readTime: '9 min',
      date: 'April 11, 2026',
      image: '/blog-hemangioma.jpg',
      imageAlt: 'A small, bright red cherry angioma on the skin',
      sectionHeader: 'Skin Conditions',
    },
  ],
};

export default function BlogPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';
  const allPosts = isDa ? blogPosts.da : blogPosts.en;
  const skinCancerPosts = allPosts.filter(p => p.sectionHeader === 'Hudkræft' || p.sectionHeader === 'Skin Cancer');
  const generalPosts = allPosts.filter(p => p.sectionHeader === 'Hudsygdomme' || p.sectionHeader === 'Skin Conditions');

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation lang={lang} />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-display">
            {isDa ? 'Vores Blog' : 'Our Blog'}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {isDa 
              ? 'Ekspertråd om hudsygdomme, behandlinger og hudpleje fra certificerede hudlæger'
              : 'Expert advice on skin diseases, treatments and skincare from certified dermatologists'}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="diseases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalPosts.map((post, index) => (
              <Link 
                key={index}
                href={`/${lang}/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Cover Image */}
                  <div className="aspect-[16/10] relative bg-gradient-to-br from-primary to-primary-900">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-primary-900 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} {isDa ? 'læsetid' : 'read'}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                      {isDa ? 'Læs mere' : 'Read more'}
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Cancer Section */}
      {skinCancerPosts.length > 0 && (
        <section id="skin-cancer" className="py-20 bg-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-display">
                {isDa ? 'Hudkræft' : 'Skin Cancer'}
              </h2>
              <p className="text-white/70 mt-2">
                {isDa
                  ? 'Lær om de forskellige former for hudkræft, deres symptomer og behandling'
                  : 'Learn about the different forms of skin cancer, their symptoms and treatment'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skinCancerPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/${lang}/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-white/10">
                    <div className="aspect-[16/10] relative bg-gradient-to-br from-primary to-primary-900">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-primary-900 text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-white/60 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} {isDa ? 'læsetid' : 'read'}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-[#00e5ff] font-semibold text-sm">
                        {isDa ? 'Læs mere' : 'Read more'}
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {isDa ? 'Har du et hudproblem?' : 'Do you have a skin problem?'}
          </h2>
          <p className="text-xl text-white/70 mb-8">
            {isDa 
              ? 'Få en professionel diagnose inden for 48 timer'
              : 'Get a professional diagnosis within 48 hours'}
          </p>
          <Link
            href={`/${lang}/download`}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            {isDa ? 'Download appen' : 'Download the app'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
