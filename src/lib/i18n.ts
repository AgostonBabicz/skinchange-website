export const languages = ['da', 'en'];
export const defaultLanguage = 'da';

export type Language = 'da' | 'en';

export const translations = {
  da: {
    nav: {
      about: 'Om SKIND',
      guide: 'Brugervejledning',
      download: 'Download',
      faq: 'FAQ',
      cta: 'Hent appen',
    },
    hero: {
      title: 'SKIND',
      subtitle: 'Få en diagnose indenfor 48 timer',
      description: 'Dine fotos analyseres af speciallæger i hudsygdomme',
      cta: 'Hent Appen',
      mitid: 'MitID Verificeret',
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
      about: 'About SKIND',
      guide: 'User Guide',
      download: 'Download',
      faq: 'FAQ',
      cta: 'Get the app',
    },
    hero: {
      title: 'SKIND',
      subtitle: 'Get a diagnosis within 48 hours',
      description: 'Your photos are analyzed by specialist dermatologists',
      cta: 'Get the App',
      mitid: 'MitID Verified',
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
