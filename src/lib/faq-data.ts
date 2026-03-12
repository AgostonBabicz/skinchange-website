export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  slug: string;
  icon: string;
  titleDa: string;
  titleEn: string;
  descriptionDa: string;
  descriptionEn: string;
  questions: {
    da: FaqQuestion[];
    en: FaqQuestion[];
  };
}

export const faqCategories: FaqCategory[] = [
  {
    slug: 'how-it-works',
    icon: '🩺',
    titleDa: 'Sådan fungerer det',
    titleEn: 'How It Works',
    descriptionDa: 'Lær hvordan du bruger SKIND, og hvad du kan forvente.',
    descriptionEn: 'Learn how to use SKIND and what to expect.',
    questions: {
      da: [
        {
          question: 'Hvordan fungerer SKIND?',
          answer: 'Download vores app, opret en profil med MitID, tag billeder af dit hudproblem og besvar nogle spørgsmål om dine symptomer. En certificeret hudlæge gennemgår din sag og sender dig en diagnose og behandlingsplan inden for 48 timer. Du modtager svaret direkte i appen.'
        },
        {
          question: 'Hvor hurtigt får jeg svar?',
          answer: 'Vi garanterer svar inden for 48 timer, men de fleste patienter modtager deres diagnose inden for 24 timer. Du får besked i appen så snart lægen har gennemgået din sag.'
        },
        {
          question: 'Hvilke hudproblemer kan I hjælpe med?',
          answer: 'Vi kan diagnosticere og behandle de fleste almindelige hudsygdomme, herunder akne, eksem, psoriasis, rosacea, skæl, seboroisk dermatitis, fotsvamp, neglesvamp, herpes simplex (forkølelsessår), kønsvorter, soleksem, og mange andre tilstande. Vi kan også vurdere mistænkelige modermærker og hudforandringer og henvise videre ved behov.'
        },
        {
          question: 'Hvad hvis jeres læger ikke kan vurdere sagen og stille en diagnose?',
          answer: 'Hvis de informationer du giver, er utilstrækkelige for at vores læger kan lave en ordentlig vurdering, bliver du ikke opkrævet.'
        },
        {
          question: 'Kan jeg bruge SKIND til mine børn?',
          answer: 'Ja, du kan oprette sager for dine børn under 18 år gennem din egen profil.'
        }
      ],
      en: [
        {
          question: 'How does SKIND work?',
          answer: 'Download our app, create a profile with MitID, take photos of your skin problem and answer some questions about your symptoms. A certified dermatologist reviews your case and sends you a diagnosis and treatment plan within 48 hours. You receive the response directly in the app.'
        },
        {
          question: 'How quickly do I get a response?',
          answer: 'We guarantee a response within 48 hours, but most patients receive their diagnosis within 24 hours. You get notified in the app as soon as the doctor has reviewed your case.'
        },
        {
          question: 'What skin problems can you help with?',
          answer: 'We can diagnose and treat most common skin conditions, including acne, eczema, psoriasis, rosacea, dandruff, seborrheic dermatitis, athlete\'s foot, nail fungus, herpes simplex (cold sores), genital warts, sun eczema, and many other conditions. We can also assess suspicious moles and skin changes and refer you further if needed.'
        },
        {
          question: 'What if your doctors cannot assess the case and make a diagnosis?',
          answer: 'If the information you provide is insufficient for our doctors to make a proper assessment, you will not be charged.'
        },
        {
          question: 'Can I use SKIND for my children?',
          answer: 'Yes, you can create cases for your children under 18 through your own profile.'
        }
      ]
    }
  },
  {
    slug: 'pricing',
    icon: '💳',
    titleDa: 'Pris & Forsikring',
    titleEn: 'Pricing & Insurance',
    descriptionDa: 'Alt om pris og forsikringsdækning.',
    descriptionEn: 'Everything about pricing and insurance coverage.',
    questions: {
      da: [
        {
          question: 'Hvad koster det?',
          answer: 'En konsultation koster 298 DKK (€40). Prisen dækker én hudlidelse og inkluderer diagnose og behandlingsplan.'
        },
        {
          question: 'Er SKIND dækket af sygesikringen?',
          answer: 'Nej, SKIND er en privat sundhedstjeneste og dækkes ikke af den offentlige sygesikring. Prisen er 298 DKK (€40) pr. konsultation, og du betaler direkte i appen.'
        }
      ],
      en: [
        {
          question: 'What does it cost?',
          answer: 'A consultation costs 298 DKK (€40). The price covers one skin condition and includes diagnosis and treatment plan.'
        },
        {
          question: 'Is SKIND covered by health insurance?',
          answer: 'No, SKIND is a private healthcare service and is not covered by public health insurance. The price is 298 DKK (€40) per consultation, and you pay directly in the app.'
        }
      ]
    }
  },
  {
    slug: 'privacy-security',
    icon: '🔒',
    titleDa: 'Sikkerhed & Privatliv',
    titleEn: 'Privacy & Security',
    descriptionDa: 'Hvordan vi beskytter dine data og privatliv.',
    descriptionEn: 'How we protect your data and privacy.',
    questions: {
      da: [
        {
          question: 'Er det sikkert at bruge SKIND?',
          answer: 'Ja, absolut. Vi bruger MitID til sikker login og verificering af din identitet. Alle billeder og data gemmes sikkert på servere i EU. Vores platform overholder alle gældende regler om databeskyttelse i sundhedssektoren i EU, herunder GDPR. Vi deler aldrig dine data med tredjeparter uden dit samtykke.'
        }
      ],
      en: [
        {
          question: 'Is it safe to use SKIND?',
          answer: 'Yes, absolutely. We use MitID for secure login and verification of your identity. All photos and data are stored securely on servers in the EU. Our platform complies with all applicable regulations regarding data protection in the healthcare sector in the EU, including GDPR. We never share your data with third parties without your consent.'
        }
      ]
    }
  },
  {
    slug: 'app',
    icon: '📱',
    titleDa: 'Appen',
    titleEn: 'The App',
    descriptionDa: 'Information om SKIND appen og understøttede enheder.',
    descriptionEn: 'Information about the SKIND app and supported devices.',
    questions: {
      da: [
        {
          question: 'Hvilke enheder understøtter appen?',
          answer: 'SKIND appen er tilgængelig til både iPhone (iOS 14 eller nyere) og Android (Android 8 eller nyere). Du kan downloade appen fra App Store eller Google Play.'
        }
      ],
      en: [
        {
          question: 'Which devices does the app support?',
          answer: 'The SKIND app is available for both iPhone (iOS 14 or newer) and Android (Android 8 or newer). You can download the app from the App Store or Google Play.'
        }
      ]
    }
  },
  {
    slug: 'contact',
    icon: '✉️',
    titleDa: 'Kontakt & Support',
    titleEn: 'Contact & Support',
    descriptionDa: 'Kontakt os og få support.',
    descriptionEn: 'Contact us and get support.',
    questions: {
      da: [
        {
          question: 'Hvor hurtigt får jeg svar på henvendelser?',
          answer: 'Vi besvarer alle henvendelser uden ugrundet ophold. I tider med travlhed og uden for normal arbejdstid må der forventes længere svartid.'
        },
        {
          question: 'Kan jeg ringe til jer?',
          answer: 'Vi foretrækker email kontakt for at sikre dokumentation og kvalitetssikring.'
        }
      ],
      en: [
        {
          question: 'How quickly will I get a response to inquiries?',
          answer: 'We respond to all inquiries without delay. At times of hurry and outside normal business hours more time should be expected.'
        },
        {
          question: 'Can I call you?',
          answer: 'We prefer email contact to ensure documentation and quality assurance.'
        }
      ]
    }
  },
  {
    slug: 'diseases',
    icon: '🔬',
    titleDa: 'Hudsygdomme',
    titleEn: 'Skin Conditions',
    descriptionDa: 'Lær om de mest almindelige hudsygdomme, deres symptomer og behandlingsmuligheder.',
    descriptionEn: 'Learn about the most common skin conditions, their symptoms and treatment options.',
    questions: {
      da: [
        {
          question: 'Hvad er Acne?',
          answer:
            'Acne er en almindelig hudlidelse, der påvirker talgkirtler og hårfollikkler. Det forårsager bumser, hudorme, hvide knopper og nogle gange dybere knopper afhængigt af sværhedsgraden. Acne er ikke smitsomt.',
        },
        {
          question: 'Hvordan ser Acne ud?',
          answer:
            'Acne kan manifestere sig forskelligt for alle, men almindelige tegn inkluderer: Hudorme og hvide knopper (tilstoppede porer på grund af overskydende olie og døde hudceller), bumser (små, røde knopper der kan indeholde pus), og knuder og cyster (dybere, smertefulde knopper dannet under huden).',
        },
        {
          question: 'Hvorfor opstår Acne?',
          answer:
            'Flere faktorer bidrager til acne: Øget olieproduktion (hormoner, genetik og visse medicin kan stimulere talgkirtlerne), tilstoppede porer (døde hudceller og overskydende olie tilstopper porerne og fanger bakterier), og bakterieovervækst (bakterien Cutibacterium acnes bidrager til inflammation og dannelse af bumser).',
        },
        {
          question: 'Hvem får Acne?',
          answer:
            'Acne er utrolig almindelig og påvirker de fleste mennesker på et tidspunkt i deres liv, primært under puberteten på grund af hormonelle ændringer. Dog kan voksne også opleve acne.',
        },
        {
          question: 'Hvad skal jeg huske om Acne behandling?',
          answer:
            'Vedvarende behandling er nøglen. Undgå at kradse eller klemme – det kan forværre inflammation og give arvæv. Vær forsigtig med din hud: hård skrubning eller produkter kan irritere den. Dermatologer kan vurdere din specifikke acne-type og anbefale den mest effektive behandlingsplan. Acne kan påvirke selvværdet, men du er ikke alene – søg støtte fra sundhedspersonale hvis nødvendigt.',
        },
      ],
      en: [
        {
          question: 'What is Acne?',
          answer:
            'Acne is a common skin condition affecting oil glands and hair follicles. It causes pimples, blackheads, whiteheads, and sometimes deeper bumps depending on its severity. Acne is not contagious.',
        },
        {
          question: 'What does Acne look like?',
          answer:
            'Acne can manifest differently for everyone, but common signs include: blackheads and whiteheads (plugged pores due to excess oil and dead skin cells), pimples (small red bumps that may contain pus), and nodules and cysts (deeper, painful bumps forming under the skin).',
        },
        {
          question: 'Why does Acne happen?',
          answer:
            'Several factors contribute to acne: increased oil production (hormones, genetics, and certain medications can stimulate oil glands), plugged pores (dead skin cells and excess oil can clog pores, trapping bacteria and inflammation), and bacterial overgrowth (Cutibacterium acnes contributes to inflammation and pimple formation).',
        },
        {
          question: 'Who gets Acne?',
          answer:
            'Acne is incredibly common, affecting most people at some point in their lives, primarily during adolescence due to hormonal changes. However, adults can also experience acne.',
        },
        {
          question: 'What should I remember about Acne treatment?',
          answer:
            'Consistent treatment is key. Don\'t pick or squeeze — this can worsen inflammation and scarring. Be gentle with your skin, as harsh scrubbing or products can irritate it. Dermatologists can assess your specific acne type and recommend the most effective treatment plan. Acne can impact self-esteem, but remember you\'re not alone — seek support from healthcare professionals if needed.',
        },
      ],
    },
  },
];
