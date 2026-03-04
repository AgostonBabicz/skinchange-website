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
      subtitle: 'Danmarks hurtigste dermatologiske klinik',
      description: 'Dine fotos analyseres af speciallæger i hudsygdomme',
      cta: 'Hent Appen',
      mitid: 'MitID Verificeret',
      price: '298 DKK',
      priceNote: '(€40) pr. konsultation',
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
        desc: 'Modtag din diagnose og personlige behandlingsplan direkte i appen.',
      },
    },
    peter: {
      title: 'Mød vores førende hudlæge',
      name: 'Peter Bjerring',
      role: 'Ansvarlig Læge',
      description: 'Ekspert i dermatologi, laserbehandlinger og hudkræft. Adjungeret professor, Aalborg Universitet. 300+ publikationer, 500+ internationale foredrag.',
      readMore: 'Læs mere om Peter',
      fullDescription: `Peter Bjerring, Speciallæge i hudsygdomme, professor, Dr.med.

Uddannelse
1980: Master of Science (Med.), Aarhus Universitet
1988: Speciallæge i dermatovenerologi, Danmark
2001: Speciallæge i dermatovenerologi, Norge
2004: Speciallæge i dermato-venereologi, Holland

Erfaring
1993–2018: Klinikchef, Dermatologisk Afdeling (HudCenter Mølholm), Privathospital Mølholm, Vejle, København og Aarhus
2001–2007: Administrerende direktør, Mølholm Privathospital, Vejle og Aarhus
2004–2018: Overlæge og Medicinsk direktør, Mølholm Privathospital, Vejle og Aarhus
2018–nu: Klinisk professor, Senior konsulent og Speciallæge, Dermatologisk Afdeling, Aalborg Universitetshospital
2018–2022: Professor i Dermato-Venereologi, Aalborg Universitet
2022–nu: Adjunkt professor, Aalborg Universitet

Specialisering
Klassisk dermatologi (Almindelige hudsygdomme)
Dermatologisk laserkirurgi
Hudkræftbehandling (medicinsk, kirurgisk og fototerapi)
Kosmetisk laserbehandling
Kosmetisk medicinsk dermatologi
Fotodermatologi

Forskning og undervisning
Har publiceret mere end 300 videnskabelige artikler inden for hudsygdomme, laserbehandling og hudkræftbehandling
Har holdt mere end 500 foredrag ved internationale videnskabelige møder og kongresser verden over

Faglige medlemskaber
Dansk Dermatologisk Selskab (DDS)
European Academy for Dermato-Venereology (EADV)
Dansk Dermatologisk Organisation (DDO)
European Society for Lasers and Energy-based Devices (ESLD - past president)
American Academy of Dermatology (AAD)
American Society for Lasers in Surgery and Medicine (ASLMS)
The International Peeling Society

Hædersbevisninger
Ridder af Dannebrog
Dansk Dermatologisk Selskabs Hæderspris
Caroline and William Mark Memorial Award (Hæderspris fra American Society for Lasers In Medicine and Surgery)
William Nielsen Prisen`,
    },
    partners: {
      title: 'Vi samarbejder med',
    },
    diseases: {
      title: 'Typiske hudproblemer vi behandler',
      subtitle: 'Vores specialister kan hjælpe med en bred vifte af hudsygdomme',
      items: [
        { name: 'Hudkræft', desc: 'Mistanke om forandringer' },
        { name: 'Akne', desc: 'Uren hud og bumser' },
        { name: 'Eksem', desc: 'Irriteret og kløende hud' },
        { name: 'Psoriasis', desc: 'Skællende hudpletter' },
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
      subtitle: 'Denmark\'s fastest dermatological clinic',
      description: 'Your photos are analyzed by specialist dermatologists',
      cta: 'Get the App',
      mitid: 'MitID Verified',
      price: '298 DKK',
      priceNote: '(€40) per consultation',
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
        desc: 'Receive your diagnose and personalized treatment plan directly in the app.',
      },
    },
    peter: {
      title: 'Meet our leading dermatologist',
      name: 'Peter Bjerring',
      role: 'Ansvarlig Læge',
      description: 'Expert in dermatology, laser treatments and skin cancer. Adjunct professor, Aalborg University. 300+ publications, 500+ international lectures.',
      readMore: 'Read more about Peter',
      fullDescription: `Peter Bjerring, Specialist in skin diseases, professor, Dr.med.

Training
1980: Master of Science (Med.), Aarhus University
1988: Specialist in dermatovenerology, Denmark
2001: Specialist in dermatovenerology, Norway
2004: Specialist in dermato-venereology, Netherlands

Experience
1993–2018: Head of Clinic, Dermatology Department (HudCenter Mølholm), Private Hospital Mølholm, Vejle, Copenhagen and Aarhus
2001–2007: Managing Director, Mølholm Private Hospital, Vejle and Aarhus
2004–2018: Chief Physician and Chief Medical Officer, Mølholm Private Hospital, Vejle and Aarhus
2018–Present: Clinical Professor, Senior Consultant and Specialist, Department of Dermatology, Aalborg University Hospital
2018–2022: Chair Professor in Dermato-Venereology, Aalborg University
2022–Present: Adjunct professor, Aalborg University

Specialization
Classical dermatology (Common skin diseases)
Dermatological laser surgery
Skin cancer treatment (medical, surgical and phototherapy)
Cosmetic laser treatment
Cosmetic medical dermatology
Photodermatology

Research and teaching
Has published more than 300 scientific articles within skin diseases, laser treatment and skin cancer treatment
Has given more than 500 lectures at international scientific meetings and congresses worldwide

Professional memberships
Danish Dermatological Society (DDS)
European Academy for Dermato-Venereology (EADV)
Danish Dermatologists' Organization (DDO)
European Society for Lasers and Energy-based Devices (ESLD - past president)
American Academy of Dermatology (AAD)
American Society for Lasers in Surgery and Medicine (ASLMS)
The International Peeling Society

Recognitions
Knight of the Dannebrog
Danish Dermatological Society's Honorary Award
Caroline and William Mark Memorial Award (Honorary award from the American Society for Lasers In Medicine and Surgery)
William Nielsen Prize`,
    },
    partners: {
      title: 'We collaborate with',
    },
    diseases: {
      title: 'Typical skin problems we treat',
      subtitle: 'Our specialists can help with a wide range of skin conditions',
      items: [
        { name: 'Skin Cancer', desc: 'Suspicious changes' },
        { name: 'Acne', desc: 'Blemishes and pimples' },
        { name: 'Eczema', desc: 'Irritated and itchy skin' },
        { name: 'Psoriasis', desc: 'Scaly skin patches' },
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
