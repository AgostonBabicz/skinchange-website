export const languages = ['da', 'en'];
export const defaultLanguage = 'da';

export type Language = 'da' | 'en';

export const translations = {
  da: {
    nav: {
      about: 'Om os',
      guide: 'Sådan bruger du appen',
      download: 'Download appen',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Hent appen',
    },
    hero: {
      title: 'SKIND',
      subtitle: 'Få en diagnose indenfor 48 timer',
      description: 'Dine fotos analyseres af speciallæger i hudsygdomme',
      cta: 'Hent Appen',
      mitid: 'MitID Verificeret',
      price: '298 kr.',
      priceNote: 'Prisen dækker én hudlidelse',
    },
    stats: {
      cases: 'Behandlede sager',
      time: 'Timers diagnose',
      doctors: 'Certificerede læger',
      rating: 'Patienttilfredshed',
    },
    features: {
      title: 'Så nemt er det',
      subtitle: 'Tre simple trin fra dit første symptom til din behandlingsplan',
      step1: {
        title: 'Upload billeder',
        desc: 'Tag klare billeder af dit hudproblem og besvar nogle simple spørgsmål om dine symptomer.',
      },
      step2: {
        title: 'Lægen vurderer',
        desc: 'En certificeret hudlæge gennemgår din sag og stiller en diagnose inden for 48 timer.',
      },
      step3: {
        title: 'Få behandling',
        desc: 'Modtag din personlige behandlingsplan med ICD-10 kode og recept direkte i appen.',
      },
    },
    peter: {
      title: 'Mød vores førende hudlæge',
      name: 'Peter Bjerring',
      role: 'Speciallæge i hudsygdomme',
      description: 'Peter Bjerring er en af Danmarks mest erfarne hudlæger og grundlægger af SkinChange. Med over 30 års erfaring i dermatologi har han hjulpet tusindvis af patienter med hudproblemer.',
      readMore: 'Læs mere om Peter',
      fullDescription: `Peter Bjerring er speciallæge i hudsygdomme og har praktiseret dermatologi i mere end 30 år. Han har arbejdet på flere af Danmarks førende hospitaler og har specialiseret sig i både medicinsk og kosmetisk dermatologi.

Som grundlægger af SkinChange har Peter visionen om at gøre specialistbehandling af hudsygdomme tilgængelig for alle danskere, uanset hvor de bor. Han tror på, at teknologi kan hjælpe med at overvinde barrierer i sundhedsvæsenet og give patienter hurtigere adgang til kvalificeret hjælp.

Peter er medlem af Dansk Dermatologisk Selskab og har publiseret adskillige videnskabelige artikler om hudsygdomme. Han er kendt for sin empatiske tilgang og evne til at forklare komplekse medicinske problemstillinger på en forståelig måde.`,
    },
    partners: {
      title: 'Vi samarbejder med',
    },
    diseases: {
      title: 'Typiske hudproblemer vi behandler',
      subtitle: 'Vores specialister kan hjælpe med en bred vifte af hudsygdomme',
      items: [
        { name: 'Akne', desc: 'Uren hud og bumser' },
        { name: 'Eksem', desc: 'Irriteret og kløende hud' },
        { name: 'Psoriasis', desc: 'Skællende hudpletter' },
        { name: 'Hudkræft', desc: 'Mistanke om forandringer' },
        { name: 'Rosacea', desc: 'Rødme og blodkar' },
        { name: 'Skæl', desc: 'Flassende hovedbund' },
        { name: 'Kønsvorter', desc: 'HPV-relaterede forandringer' },
        { name: 'Forkølelsessår', desc: 'Herpes simplex behandling' },
      ],
    },
    userGuide: {
      title: 'Sådan bruger du SKIND',
      subtitle: 'Følg disse simple trin for at få hjælp til dit hudproblem',
    },
    feedback: {
      title: 'Hvad vores patienter siger',
      subtitle: 'Læs om oplevelser fra virkelige brugere af SkinChange',
      items: [
        {
          text: 'Jeg var overrasket over hvor nemt og hurtigt det var. Jeg fik svar inden for 24 timer og behandlingen hjalp mit eksem på få dage.',
          author: 'Maria S.',
          condition: 'Eksem',
        },
        {
          text: 'Endelig en løsning hvor jeg ikke behøver at vente uger på at komme til hudlægen. Fantastisk service!',
          author: 'Lars K.',
          condition: 'Psoriasis',
        },
        {
          text: 'Jeg var nervøs for at sende billeder, men lægen var meget professionel og svarede hurtigt. Kan varmt anbefales.',
          author: 'Sofie M.',
          condition: 'Akne',
        },
        {
          text: 'Som studerende er det svært at finde tid til lægebesøg. Med SkinChange kunne jeg få hjælp på en aften efter forelæsninger.',
          author: 'Jakob R.',
          condition: 'Rosacea',
        },
      ],
    },
    availability: {
      title: 'Tilgængelig i hele Europa',
      subtitle: 'Vi arbejder på at gøre SkinChange tilgængelig i hele EU',
    },
    footer: {
      privacy: 'Privatlivspolitik',
      terms: 'Vilkår & Betingelser',
      about: 'Om os',
      contact: 'Kontakt os',
      faq: 'FAQ',
      company: 'SkinChange.AI ApS',
      cvr: 'CVR: 43156179',
      email: 'info@skinchange.ai',
    },
  },
  en: {
    nav: {
      about: 'About us',
      guide: 'How to use the app',
      download: 'Download the app',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get the app',
    },
    hero: {
      title: 'SKIND',
      subtitle: 'Get a diagnosis within 48 hours',
      description: 'Your photos are analyzed by specialist dermatologists',
      cta: 'Get the App',
      mitid: 'MitID Verified',
      price: '€40',
      priceNote: 'Price covers one skin condition',
    },
    stats: {
      cases: 'Cases handled',
      time: 'Hour diagnosis',
      doctors: 'Certified doctors',
      rating: 'Patient satisfaction',
    },
    features: {
      title: 'How it works',
      subtitle: 'Three simple steps from your first symptom to your treatment plan',
      step1: {
        title: 'Upload photos',
        desc: 'Take clear photos of your skin problem and answer some simple questions about your symptoms.',
      },
      step2: {
        title: 'Doctor reviews',
        desc: 'A certified dermatologist reviews your case and provides a diagnosis within 48 hours.',
      },
      step3: {
        title: 'Get treatment',
        desc: 'Receive your personalized treatment plan with ICD-10 code and prescription directly in the app.',
      },
    },
    peter: {
      title: 'Meet our leading dermatologist',
      name: 'Peter Bjerring',
      role: 'Specialist in skin diseases',
      description: 'Peter Bjerring is one of Denmark\'s most experienced dermatologists and founder of SkinChange. With over 30 years of experience in dermatology, he has helped thousands of patients with skin problems.',
      readMore: 'Read more about Peter',
      fullDescription: `Peter Bjerring is a specialist in skin diseases and has practiced dermatology for more than 30 years. He has worked at several of Denmark\'s leading hospitals and has specialized in both medical and cosmetic dermatology.

As the founder of SkinChange, Peter\'s vision is to make specialist treatment of skin diseases accessible to all Danes, regardless of where they live. He believes that technology can help overcome barriers in the healthcare system and give patients faster access to qualified help.

Peter is a member of the Danish Dermatological Society and has published numerous scientific articles on skin diseases. He is known for his empathetic approach and ability to explain complex medical issues in an understandable way.`,
    },
    partners: {
      title: 'We collaborate with',
    },
    diseases: {
      title: 'Typical skin problems we treat',
      subtitle: 'Our specialists can help with a wide range of skin conditions',
      items: [
        { name: 'Acne', desc: 'Blemishes and pimples' },
        { name: 'Eczema', desc: 'Irritated and itchy skin' },
        { name: 'Psoriasis', desc: 'Scaly skin patches' },
        { name: 'Skin Cancer', desc: 'Suspicious changes' },
        { name: 'Rosacea', desc: 'Redness and visible blood vessels' },
        { name: 'Dandruff', desc: 'Flaky scalp' },
        { name: 'Genital Warts', desc: 'HPV-related changes' },
        { name: 'Cold Sores', desc: 'Herpes simplex treatment' },
      ],
    },
    userGuide: {
      title: 'How to use SKIND',
      subtitle: 'Follow these simple steps to get help with your skin problem',
    },
    feedback: {
      title: 'What our patients say',
      subtitle: 'Read about experiences from real users of SkinChange',
      items: [
        {
          text: 'I was surprised at how easy and quick it was. I got a response within 24 hours and the treatment helped my eczema within days.',
          author: 'Maria S.',
          condition: 'Eczema',
        },
        {
          text: 'Finally a solution where I don\'t have to wait weeks to see a dermatologist. Fantastic service!',
          author: 'Lars K.',
          condition: 'Psoriasis',
        },
        {
          text: 'I was nervous about sending photos, but the doctor was very professional and responded quickly. Highly recommended.',
          author: 'Sofie M.',
          condition: 'Acne',
        },
        {
          text: 'As a student, it\'s hard to find time for doctor visits. With SkinChange, I could get help in the evening after lectures.',
          author: 'Jakob R.',
          condition: 'Rosacea',
        },
      ],
    },
    availability: {
      title: 'Available throughout Europe',
      subtitle: 'We are working to make SkinChange available throughout the EU',
    },
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      about: 'About us',
      contact: 'Contact us',
      faq: 'FAQ',
      company: 'SkinChange.AI ApS',
      cvr: 'CVR: 43156179',
      email: 'info@skinchange.ai',
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations[defaultLanguage];
}
