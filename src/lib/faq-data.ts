export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqSubGroup {
  slug: string;
  nameDa: string;
  nameEn: string;
  icon?: string;
  questions: {
    da: FaqQuestion[];
    en: FaqQuestion[];
  };
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
  subGroups?: FaqSubGroup[];
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
    questions: { da: [], en: [] },
    subGroups: [
      {
        slug: 'seborrheic-dermatitis',
        nameDa: 'Seborrheisk Dermatitis',
        nameEn: 'Seborrheic Dermatitis',
        icon: '🧴',
        questions: {
          da: [
            {
              question: 'Hvad er seborrheisk dermatitis?',
              answer:
                'Seborrheisk dermatitis er en almindelig, kronisk hudlidelse, der forårsager røde, skællende og fedtede pletter på hovedbunden, i ansigtet og på andre olieholdige områder. Den er ikke smitsom og udgør ingen alvorlig sundhedsrisiko.',
            },
            {
              question: 'Hvordan ser seborrheisk dermatitis ud?',
              answer:
                'Typiske tegn inkluderer skællende, røde pletter på hovedbunden (skæl), øjenbrynene, siderne af næsen og bag ørerne. Hos spædbørn ses karakteristiske gullige, fedtede skæl på hovedbunden (vuggekant).',
            },
            {
              question: 'Hvorfor opstår seborrheisk dermatitis?',
              answer:
                'Flere faktorer bidrager: overproduktion af talg skaber et miljø, hvor gærsvampen Malassezia trives og udløser inflammation. Genetik, hormonelle faktorer og et svækket immunsystem øger også risikoen.',
            },
            {
              question: 'Hvem får seborrheisk dermatitis?',
              answer:
                'Alle kan rammes. Spædbørn under tre måneder udvikler ofte vuggekant. Voksne mellem 30–50 år er hyppigst ramt, særligt mænd. Personer med HIV/AIDS eller svækket immunsystem har markant højere risiko.',
            },
            {
              question: 'Hvad skal jeg huske om behandling af seborrheisk dermatitis?',
              answer:
                'Konsistent behandling er nøglen. Svampedræbende shampoo (ketoconazol, zinkpyrithion) er førstevalgsbehandling mod skæl. Creme med steroid eller svampedræbende creme behandler ansigts- og kropsbetændelse. Stresshåndtering og skånsom hudpleje reducerer udbrud. Der er ingen kur, men tilstanden kan holdes under kontrol.',
            },
          ],
          en: [
            {
              question: 'What is seborrheic dermatitis?',
              answer:
                'Seborrheic dermatitis is a common, chronic skin condition causing red, scaly and greasy patches on the scalp, face and other oily areas of the body. It is not contagious and poses no serious health risk.',
            },
            {
              question: 'What does seborrheic dermatitis look like?',
              answer:
                'Typical signs include scaly, red patches on the scalp (dandruff), eyebrows, sides of the nose and behind the ears. In infants, characteristic yellowish, greasy scales appear on the scalp (cradle cap).',
            },
            {
              question: 'Why does seborrheic dermatitis happen?',
              answer:
                'Several factors contribute: overproduction of sebum creates an environment where the yeast Malassezia thrives and triggers inflammation. Genetics, hormonal factors and a weakened immune system also increase the risk.',
            },
            {
              question: 'Who gets seborrheic dermatitis?',
              answer:
                'Anyone can be affected. Infants under three months often develop cradle cap. Adults between 30–50 years are most commonly affected, particularly men. People with HIV/AIDS or weakened immune systems have a significantly higher risk.',
            },
            {
              question: 'What should I remember about seborrheic dermatitis treatment?',
              answer:
                "Consistent treatment is key. Antifungal shampoos (ketoconazole, zinc pyrithione) are first-line for dandruff. Steroid or antifungal creams treat facial and body inflammation. Stress management and gentle skincare reduce flare-ups. There is no cure, but the condition can be kept under control.",
            },
          ],
        },
      },
      {
        slug: 'acne',
        nameDa: 'Acne',
        nameEn: 'Acne',
        icon: '💊',
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
                "Consistent treatment is key. Don't pick or squeeze — this can worsen inflammation and scarring. Be gentle with your skin, as harsh scrubbing or products can irritate it. Dermatologists can assess your specific acne type and recommend the most effective treatment plan. Acne can impact self-esteem, but remember you're not alone — seek support from healthcare professionals if needed.",
            },
          ],
        },
      },
      {
        slug: 'rosacea',
        nameDa: 'Rosacea',
        nameEn: 'Rosacea',
        icon: '🌹',
        questions: {
          da: [
            {
              question: 'Hvad er rosacea?',
              answer:
                'Rosacea er en kronisk hudlidelse, der forårsager vedvarende rødme, synlige blodkar og undertiden bumser eller pustler i ansigtet. Det er ikke smitsomt, men kan være vedvarende og frustrerende for dem, der er ramt.',
            },
            {
              question: 'Hvordan ser rosacea ud?',
              answer:
                'Rosacea viser sig typisk som rødme og flushing i midten af ansigtet, tynde synlige blodkar (telangiektasi) på kinderne og næsen, samt røde papler der kan ligne acne. I svære tilfælde kan næsehuden fortykkes (rhinophyma), og øjnene kan blive røde og irriterede (okulær rosacea).',
            },
            {
              question: 'Hvorfor opstår rosacea?',
              answer:
                'Den præcise årsag er ukendt, men bidragende faktorer inkluderer overaktive blodkar i ansigtet, betændelsesreaktioner udløst af sollys, visse fødevarer og mider, samt genetisk disposition. Forskning tyder også på, at ubalancer i tarmbakterierne kan spille en rolle.',
            },
            {
              question: 'Hvem får rosacea?',
              answer:
                'Rosacea er mest almindelig hos voksne med lys hud og lyst hår eller øjne, særligt dem med keltisk eller nordeuropæisk baggrund. Tilstanden er hyppigst hos voksne mellem 40 og 50 år, og dem med familiehistorie af rosacea er i øget risiko.',
            },
            {
              question: 'Hvad skal jeg huske om rosacea behandling?',
              answer:
                'Rosacea kan håndteres med topiske medicin som metronidazol og azelainsyre, orale antibiotika ved moderat til svær rosacea, og laserbehandling for synlige blodkar. Det er afgørende at identificere og undgå personlige udløsere som stærk mad, alkohol og sollys, og at bruge skånsom, parfumefri hudpleje med solcreme.',
            },
          ],
          en: [
            {
              question: 'What is rosacea?',
              answer:
                'Rosacea is a chronic skin condition that causes persistent redness, visible blood vessels and sometimes bumps or pustules on the face. It is not contagious, but can be persistent and frustrating for those affected.',
            },
            {
              question: 'What does rosacea look like?',
              answer:
                'Rosacea typically presents as flushing and redness of the central face, thin visible blood vessels (telangiectasia) on the cheeks and nose, and red papules that can resemble acne. In severe cases the skin on the nose can thicken (rhinophyma), and the eyes can become red and irritated (ocular rosacea).',
            },
            {
              question: 'Why does rosacea happen?',
              answer:
                'The exact cause is unknown, but contributing factors include overactive blood vessels in the face, inflammatory reactions triggered by sunlight, certain foods and mites, and genetic predisposition. Research also suggests that imbalances in gut bacteria may play a role.',
            },
            {
              question: 'Who gets rosacea?',
              answer:
                'Rosacea is most common in fair-skinned adults with light hair or eyes, particularly those of Celtic or Northern European descent. The condition is most frequent in adults between 40 and 50 years old, and those with a family history of rosacea are at increased risk.',
            },
            {
              question: 'What should I remember about rosacea treatment?',
              answer:
                'Rosacea can be managed with topical medications such as metronidazole and azelaic acid, oral antibiotics for moderate to severe rosacea, and laser therapy for visible blood vessels. It is essential to identify and avoid personal triggers such as spicy food, alcohol and sunlight, and to use gentle, fragrance-free skincare with sunscreen.',
            },
          ],
        },
      },
      {
        slug: 'urticaria-hives',
        nameDa: 'Nældefeber (Urticaria)',
        nameEn: 'Urticaria (Hives)',
        icon: '🌡️',
        questions: {
          da: [
            {
              question: 'Hvad er nældefeber (urticaria)?',
              answer:
                'Nældefeber er en almindelig hudlidelse, der forårsager hævede, kløende røde knopper (kvabler), der pludselig opstår og kan forsvinde igen inden for timer. Det er ikke smitsomt og skyldes frigivelse af histamin fra mastceller i huden.',
            },
            {
              question: 'Hvordan ser nældefeber ud?',
              answer:
                'Nældefeber viser sig som hævede, røde kvabler med blegt center, der kan variere fra få millimeter til flere centimeter i størrelse. Knopperne er intenst kløende, kan opstå overalt på kroppen, og kan smelte sammen til større arealer. En enkelt kvabel forsvinder normalt inden for 1–24 timer uden at efterlade mærker.',
            },
            {
              question: 'Hvorfor opstår nældefeber?',
              answer:
                'Nældefeber opstår, når mastceller frigiver histamin i huden. Udløsere inkluderer allergener (nødder, skaldyr, penicillin, insektbid), fysiske faktorer (tryk, kulde, varme, sollys, anstrengelse) og interne faktorer (infektioner, stress, autoimmune tilstande). I op mod 50% af kroniske tilfælde kan årsagen ikke identificeres (idiopatisk).',
            },
            {
              question: 'Hvem får nældefeber?',
              answer:
                'Alle kan få nældefeber, men det er mere almindeligt hos voksne. Akut urticaria ses hyppigst hos børn og unge voksne, mens kronisk urticaria oftest rammer kvinder i alderen 20–40 år. Op mod 20% af befolkningen oplever nældefeber på et tidspunkt i livet.',
            },
            {
              question: 'Hvad skal jeg huske om nældefeber behandling?',
              answer:
                'Ikke-sederende antihistaminer (cetirizin, loratadin) er primær behandling og virker bedst ved regelmæssig dosering. Identificer og undgå din personlige udløser – en symptom-dagbog og allergitest kan hjælpe. Søg straks hjælp ved hævelse i svælget eller vejrtrækningsbesvær, da det kan være tegn på anafylaksi. Kronisk urticaria kan behandles med biologiske lægemidler som omalizumab.',
            },
          ],
          en: [
            {
              question: 'What is urticaria (hives)?',
              answer:
                'Urticaria (hives) is a common skin condition causing raised, itchy red welts (wheals) that appear suddenly and can disappear within hours. It is not contagious and is caused by histamine release from mast cells in the skin.',
            },
            {
              question: 'What does urticaria look like?',
              answer:
                'Urticaria appears as raised, red welts with pale centres that can range from a few millimetres to several centimetres in size. The welts are intensely itchy, can appear anywhere on the body, and may merge into larger areas. An individual weal typically resolves within 1–24 hours without leaving a mark.',
            },
            {
              question: 'Why does urticaria happen?',
              answer:
                'Urticaria occurs when mast cells release histamine in the skin. Triggers include allergens (nuts, shellfish, penicillin, insect stings), physical factors (pressure, cold, heat, sunlight, exercise) and internal factors (infections, stress, autoimmune conditions). In up to 50% of chronic cases no cause can be identified (idiopathic).',
            },
            {
              question: 'Who gets urticaria?',
              answer:
                'Anyone can get urticaria, but it is more common in adults. Acute urticaria is most frequent in children and young adults, while chronic urticaria most often affects women aged 20–40. Up to 20% of people experience hives at some point in their lives.',
            },
            {
              question: 'What should I remember about urticaria treatment?',
              answer:
                'Non-sedating antihistamines (cetirizine, loratadine) are the primary treatment and work best with regular dosing. Identify and avoid your personal trigger — a symptom diary and allergy testing can help. Seek emergency help immediately for throat swelling or breathing difficulty, as this may indicate anaphylaxis. Chronic urticaria can be treated with biologics such as omalizumab.',
            },
          ],
        },
      },
      {
        slug: 'herpes-simplex-virus',
        nameDa: 'Herpes Simplex Virus (HSV)',
        nameEn: 'Herpes Simplex Virus (HSV)',
        icon: '🦠',
        questions: {
          da: [
            {
              question: 'Hvad er herpes simplex virus (HSV)?',
              answer:
                'HSV er en almindelig, livslang viral infektion, der forårsager udbrud af små, smertefulde blærer på huden og slimhinderne. HSV-1 forårsager typisk forkølelsessår om munden, mens HSV-2 primært er forbundet med genital herpes. Virussen forbliver inaktiv i nervesystemet og kan reaktivere og give fremtidige udbrud.',
            },
            {
              question: 'Hvordan ser et HSV-udbrud ud?',
              answer:
                'Et udbrud begynder typisk med prikken eller kløe i det berørte område (prodromalfasen). Herefter opstår væskefyldte blærer i klynger, som er smertefulde. Blærerne brister og danner skorper, og symptomerne forsvinder normalt inden for 2–4 uger ved det første udbrud og hurtigere ved efterfølgende udbrud.',
            },
            {
              question: 'Hvorfor opstår HSV-udbrud?',
              answer:
                'HSV smitter gennem direkte kontakt med inficeret hud eller kropsvæsker og etablerer sig latent i sensoriske nerveceller. Udbrud kan udløses af stress, svækket immunsystem, soleksponering, hormonelle ændringer eller febersygdomme. Virus kan desuden smitte asymptomatisk (uden synlige blærer).',
            },
            {
              question: 'Hvem får HSV?',
              answer:
                'HSV er ekstremt udbredt. WHO estimerer, at ca. 67% af verdens befolkning under 50 år bærer HSV-1, mens ca. 11% bærer HSV-2. Mange smittede oplever aldrig tydelige symptomer og ved ikke, at de er inficerede.',
            },
            {
              question: 'Hvad skal jeg huske om HSV behandling?',
              answer:
                'Der er ingen kur mod HSV, men antivirale midler som aciclovir, valaciclovir eller famciclovir kan afkorte og mildne udbrud. Ved hyppige udbrud anbefales daglig suppressionsbehandling. Åben kommunikation med seksuelle partnere og brug af kondom reducerer smitterisikoen. Søg professionel hjælp ved hyppige udbrud eller under graviditet.',
            },
          ],
          en: [
            {
              question: 'What is herpes simplex virus (HSV)?',
              answer:
                'HSV is a common, lifelong viral infection that causes outbreaks of small, painful blisters on the skin and mucous membranes. HSV-1 typically causes oral herpes (cold sores), while HSV-2 is primarily associated with genital herpes. The virus remains dormant in the nervous system and can reactivate to cause future outbreaks.',
            },
            {
              question: 'What does an HSV outbreak look like?',
              answer:
                'An outbreak typically begins with tingling or itching in the affected area (prodromal phase), followed by clusters of fluid-filled blisters that are painful. The blisters burst and form crusts, with symptoms usually clearing within 2–4 weeks during the first outbreak and more quickly during subsequent outbreaks.',
            },
            {
              question: 'Why do HSV outbreaks happen?',
              answer:
                'HSV spreads through direct contact with infected skin or bodily fluids and establishes itself latently in sensory nerve cells. Outbreaks can be triggered by stress, a weakened immune system, sun exposure, hormonal changes or febrile illness. The virus can also be transmitted asymptomatically (without visible blisters).',
            },
            {
              question: 'Who gets HSV?',
              answer:
                'HSV is extremely widespread. The WHO estimates that approximately 67% of the global population under 50 carries HSV-1, while approximately 11% carry HSV-2. Many infected individuals never experience noticeable symptoms and do not know they are infected.',
            },
            {
              question: 'What should I remember about HSV treatment?',
              answer:
                "There is no cure for HSV, but antiviral medications such as aciclovir, valaciclovir or famciclovir can shorten and reduce the severity of outbreaks. For frequent outbreaks, daily suppressive therapy is recommended. Open communication with sexual partners and condom use reduces transmission risk. Seek professional help for frequent outbreaks or during pregnancy.",
            },
          ],
        },
      },
      {
        slug: 'herpes-zoster-shingles',
        nameDa: 'Helvedesild (Herpes Zoster)',
        nameEn: 'Shingles (Herpes Zoster)',
        icon: '⚡',
        questions: {
          da: [
            {
              question: 'Hvad er helvedesild?',
              answer:
                'Helvedesild er en viral infektion forårsaget af varicella-zoster-virus – den samme virus, der forårsager skoldkopper. Efter at have haft skoldkopper forbliver virussen inaktiv i nervesystemet og kan reaktivere sig år senere, rejse langs nervebaner til huden og forårsage et smertefuldt udslæt langs én side af kroppen.',
            },
            {
              question: 'Hvordan ser helvedesild ud?',
              answer:
                'Helvedesild starter typisk med brændende smerte eller prikken på ét sted (prodromalfasen), efterfulgt af et rødt udslæt i et bånd langs nervebanen – oftest på torso, men muligvis ansigt eller øjne. Inden for dage opstår væskefyldte blærer, der brister og danner gule skorper. Heling tager normalt 2–4 uger.',
            },
            {
              question: 'Hvorfor opstår helvedesild?',
              answer:
                'Helvedesild opstår, når immunforsvaret ikke er stærkt nok til at holde varicella-zoster-virus inaktivt. De vigtigste faktorer er alder (risikoen stiger markant efter 50 år), svækket immunforsvar (fx ved HIV, kræft eller immunsupprimerende medicin) og alvorlig stress, der midlertidigt svækker immunforsvaret.',
            },
            {
              question: 'Hvem får helvedesild?',
              answer:
                'Alle der har haft skoldkopper kan udvikle helvedesild. Cirka én ud af tre mennesker vil rammes i løbet af livet. Risikoen stiger kraftigt efter 50 år, og ældre over 80 har 8–10 gange højere risiko end 20-årige. Immunsvækkede er særligt sårbare og kan opleve mere alvorlige udbrud.',
            },
            {
              question: 'Hvad skal jeg huske om helvedesild behandling?',
              answer:
                'Søg lægehjælp straks – antivirale midler som valaciclovir eller aciclovir er mest effektive inden for 72 timer fra udslættets start. Vaccination (Shingrix) anbefales til alle over 50 og reducerer risikoen med op til 90%. Post-herpeticsk neuralgi (PHN) – vedvarende smerter efter heling – er den hyppigste komplikation; tidlig behandling er den bedste forebyggelse.',
            },
          ],
          en: [
            {
              question: 'What is shingles?',
              answer:
                'Shingles is a viral infection caused by the varicella-zoster virus — the same virus that causes chickenpox. After recovering from chickenpox, the virus lies dormant in the nervous system and can reactivate years later, travelling along nerve pathways to the skin and causing a painful rash on one side of the body.',
            },
            {
              question: 'What does shingles look like?',
              answer:
                'Shingles typically begins with burning pain or tingling in a specific area (prodromal phase), followed by a red rash in a band along the nerve pathway — most often on the torso, but possibly the face or near the eyes. Within days fluid-filled blisters develop, burst and form yellow crusts. Healing usually takes 2–4 weeks.',
            },
            {
              question: 'Why does shingles happen?',
              answer:
                'Shingles occurs when the immune system is no longer strong enough to keep the varicella-zoster virus dormant. The key factors are age (risk increases markedly after 50), a weakened immune system (e.g. from HIV, cancer or immunosuppressive medication) and severe stress that temporarily impairs immune function.',
            },
            {
              question: 'Who gets shingles?',
              answer:
                'Anyone who has had chickenpox can develop shingles. Approximately one in three people will be affected during their lifetime. Risk increases sharply after age 50, and adults over 80 have 8–10 times the risk of those in their 20s. Immunocompromised individuals are particularly vulnerable and may experience more severe outbreaks.',
            },
            {
              question: 'What should I remember about shingles treatment?',
              answer:
                'Seek medical attention immediately — antiviral medications such as valaciclovir or aciclovir are most effective within 72 hours of rash onset. Vaccination (Shingrix) is recommended for all adults over 50 and reduces the risk by up to 90%. Post-herpetic neuralgia (PHN) — persistent pain after healing — is the most common complication; early treatment is the best prevention.',
            },
          ],
        },
      },
      {
        slug: 'tinea-infections-ringworm',
        nameDa: 'Ringorm (Tinea)',
        nameEn: 'Ringworm (Tinea)',
        icon: '🍄',
        questions: {
          da: [
            {
              question: 'Hvad er ringorm (tinea)?',
              answer:
                'Ringorm er ikke en orm, men en svampeinfektion forårsaget af dermatofytter — svampe der ernærer sig af keratin i hud, hår og negle. Der er flere typer: tinea corporis (kroppen), tinea cruris (lysken), tinea pedis (atletfod), tinea capitis (hovedbunden) og tinea unguium (negle). Det er smitsomt og kan spredes via direkte kontakt, dyr og forurenede genstande.',
            },
            {
              question: 'Hvordan ser ringorm ud?',
              answer:
                'Det typiske tegn på ringorm på kroppen er en cirkulær, rød, kløende plet med hævet kant og ofte klart center — deraf navnet. Atletfod giver kløe, skæl og brændende fornemmelse mellem tæerne. Ringorm på hovedbunden forårsager skæl og hårtab. Negleinfektion giver misfarvede, tykke og smuldrende negle.',
            },
            {
              question: 'Hvorfor opstår tinea-infektioner?',
              answer:
                'Dermatofytter trives i varme, fugtige miljøer. Svedtendens, stramtsiddende tøj, deling af personlige genstande som håndklæder og sko, kontakt med inficerede dyr og ophold i omklædningsrum og fællesbrusere øger alle risikoen. Et svækket immunforsvar gør dig mere sårbar over for svære infektioner.',
            },
            {
              question: 'Hvem får tinea-infektioner?',
              answer:
                'Alle kan få ringorm, men børn er særligt tilbøjelige til tinea capitis. Sportsfolk og aktive mennesker er i øget risiko for atletfod og lyskeeksem. Beboere i tætte miljøer som kollegier og plejehjem, dyreejere og immunsvækkede er også mere sårbare.',
            },
            {
              question: 'Hvad skal jeg huske om behandling af ringorm?',
              answer:
                'Topiske svampedræbende midler (clotrimazol, miconazol, terbinafin) er effektive mod mild tinea corporis, tinea cruris og atletfod — behandl mindst 2 uger efter symptomernes forsvinden. Tinea capitis og negleinfektion kræver altid receptpligtig oral behandling. Behandl inficerede kæledyr, og undgå deling af håndklæder og sko for at forebygge gensmitte.',
            },
          ],
          en: [
            {
              question: 'What is ringworm (tinea)?',
              answer:
                'Ringworm is not a worm, but a fungal infection caused by dermatophytes — fungi that feed on keratin in skin, hair and nails. There are several types: tinea corporis (body), tinea cruris (groin/jock itch), tinea pedis (athlete\'s foot), tinea capitis (scalp) and tinea unguium (nails). It is contagious and can spread through direct contact, animals and contaminated objects.',
            },
            {
              question: 'What does ringworm look like?',
              answer:
                'The classic sign of body ringworm is a circular, red, itchy patch with a raised border and often a clear centre — hence the name. Athlete\'s foot causes itching, scaling and burning between the toes. Scalp ringworm causes scaling and hair loss. Nail infection causes discoloured, thickened and crumbly nails.',
            },
            {
              question: 'Why do tinea infections happen?',
              answer:
                'Dermatophytes thrive in warm, moist environments. Heavy sweating, tight-fitting clothing, sharing personal items such as towels and shoes, contact with infected animals, and time spent in locker rooms and shared showers all increase the risk. A weakened immune system makes you more vulnerable to severe infections.',
            },
            {
              question: 'Who gets tinea infections?',
              answer:
                'Anyone can get ringworm, but children are particularly prone to tinea capitis (scalp ringworm). Athletes and active people have an increased risk of athlete\'s foot and jock itch. People living in close-quarters settings such as dormitories and nursing homes, pet owners, and immunocompromised individuals are also more vulnerable.',
            },
            {
              question: 'What should I remember about ringworm treatment?',
              answer:
                'Topical antifungals (clotrimazole, miconazole, terbinafine) are effective for mild tinea corporis, tinea cruris and athlete\'s foot — treat for at least 2 weeks after symptoms disappear. Tinea capitis and nail infection always require prescription oral treatment. Treat infected pets, and avoid sharing towels and shoes to prevent reinfection.',
            },
          ],
        },
      },
      {
        slug: 'vitiligo',
        nameDa: 'Vitiligo',
        nameEn: 'Vitiligo',
        icon: '🤍',
        questions: {
          da: [
            {
              question: 'Hvad er vitiligo?',
              answer:
                'Vitiligo er en ikke-smitsom autoimmun hudlidelse, hvor immunsystemet fejlagtigt angriber og ødelægger melanocytterne – de pigmentproducerende celler i huden. Resultatet er glatte, hvide pletter (afpigmenterede områder) der kan opstå overalt på kroppen. Tilstanden er ikke forårsaget af noget du har gjort forkert og udgør ikke en trussel mod din generelle sundhed.',
            },
            {
              question: 'Hvordan ser vitiligo ud?',
              answer:
                'Vitiligo viser sig som glatte, hvide og tydeligt afgrænsede pletter på huden. Pletterne kan variere fra få millimeter til store dele af kroppen og opstår oftest i ansigtet, på hænderne, armene og benene. I visse tilfælde mister håret i de berørte områder også sin farve. Tilstanden kan optræde symmetrisk på begge sider (generaliseret vitiligo) eller begrænse sig til ét område (fokal vitiligo).',
            },
            {
              question: 'Hvorfor opstår vitiligo?',
              answer:
                'Vitiligo skyldes en autoimmun reaktion, hvor T-lymfocytter angriber melanocytterne. Genetisk disposition spiller en vigtig rolle – 20–30% af dem med vitiligo har et familiemedlem med samme tilstand. Udløsende faktorer kan inkludere alvorlig stress, hudskader (Köbner-fænomenet) og solskoldninger. Vitiligo er desuden associeret med øget risiko for andre autoimmune sygdomme som skjoldbruskkirtelsygdom og alopecia areata.',
            },
            {
              question: 'Hvem får vitiligo?',
              answer:
                'Vitiligo rammer ca. 1–2% af verdens befolkning uanset race, etnicitet, køn eller alder. Halvdelen af alle tilfælde debuterer før 20-årsalderen. Risikoen er forhøjet ved familiehistorie med vitiligo eller andre autoimmune sygdomme. Tilstanden er ofte mere synlig – og psykisk belastende – hos personer med mørkere hudtone.',
            },
            {
              question: 'Hvad skal jeg huske om vitiligo behandling?',
              answer:
                'Der er ingen kur mod vitiligo, men behandlinger som topiske kortikosteroider, calcineurinhæmmere, smalspektret UVB-lysbehandling og nye JAK-hæmmere (ruxolitinib) kan bremse spredningen og hjælpe med repigmentering. Brug altid solcreme SPF 50+ på afpigmenterede områder, da de brænder let. Søg en hudlæge tidligt – jo tidligere behandling startes, jo bedre er udsigterne.',
            },
          ],
          en: [
            {
              question: 'What is vitiligo?',
              answer:
                'Vitiligo is a non-contagious autoimmune skin condition in which the immune system mistakenly attacks and destroys melanocytes — the pigment-producing cells in the skin. The result is smooth, white patches (depigmented areas) that can appear anywhere on the body. The condition is not caused by anything you have done wrong and does not pose a threat to your overall health.',
            },
            {
              question: 'What does vitiligo look like?',
              answer:
                'Vitiligo presents as smooth, white and clearly defined patches on the skin. The patches can range from a few millimetres to large areas of the body and most commonly appear on the face, hands, arms and legs. In some cases, hair in the affected areas also loses its colour. The condition can appear symmetrically on both sides (generalised vitiligo) or be limited to one area (focal vitiligo).',
            },
            {
              question: 'Why does vitiligo happen?',
              answer:
                'Vitiligo is caused by an autoimmune reaction in which T-lymphocytes attack melanocytes. Genetic predisposition plays an important role — 20–30% of people with vitiligo have a family member with the same condition. Triggering factors may include severe stress, skin injury (Köbner phenomenon) and sunburn. Vitiligo is also associated with an increased risk of other autoimmune diseases such as thyroid disease and alopecia areata.',
            },
            {
              question: 'Who gets vitiligo?',
              answer:
                'Vitiligo affects approximately 1–2% of the world\'s population regardless of race, ethnicity, gender or age. Half of all cases begin before the age of 20. The risk is elevated with a family history of vitiligo or other autoimmune diseases. The condition is often more visible — and psychologically distressing — in people with darker skin tones.',
            },
            {
              question: 'What should I remember about vitiligo treatment?',
              answer:
                'There is no cure for vitiligo, but treatments such as topical corticosteroids, calcineurin inhibitors, narrowband UVB light therapy and new JAK inhibitors (ruxolitinib) can slow the spread and help with repigmentation. Always use sunscreen SPF 50+ on depigmented areas as they burn easily. Seek a dermatologist early — the sooner treatment begins, the better the outlook.',
            },
          ],
        },
      },
      {
        slug: 'contact-dermatitis',
        nameDa: 'Kontaktdermatitis',
        nameEn: 'Contact Dermatitis',
        icon: '🖐️',
        questions: {
          da: [
            {
              question: 'Hvad er kontaktdermatitis?',
              answer:
                'Kontaktdermatitis er en betændelsestilstand i huden, der opstår når huden reagerer på et stof, den har været i kontakt med. Der findes to hovedtyper: irritativ kontaktdermatitis forårsaget af direkte skade på hudens barriere, og allergisk kontaktdermatitis der skyldes en immunreaktion mod et specifikt allergen. Tilstanden er ikke smitsom.',
            },
            {
              question: 'Hvordan ser kontaktdermatitis ud?',
              answer:
                'Typiske tegn inkluderer rødme og hævelse på de berørte områder, intens kløe og brændende fornemmelser, små blærer eller knopper, og i kroniske tilfælde tør, revnet og skællende hud. Udslættet optræder typisk på hænder, håndled, arme og ansigt.',
            },
            {
              question: 'Hvorfor opstår kontaktdermatitis?',
              answer:
                'Irritativ kontaktdermatitis opstår når et stof direkte skader hudens barriere — eksempler inkluderer sæber, rengøringsmidler og opløsningsmidler. Allergisk kontaktdermatitis involverer en forsinket immunreaktion mod et allergen såsom nikkel, parfumer eller latex. Begge typer kan udløses af stress og underliggende hudtilstande.',
            },
            {
              question: 'Hvem får kontaktdermatitis?',
              answer:
                'Alle kan udvikle kontaktdermatitis. Personer med atopisk eksem er mere modtagelige pga. en svækket hudbarriere. Erhverv med høj eksponering for kemikalier — frisører, laboranter, mekanikere og sundhedspersonale — har forhøjet risiko. Nikkelallergi er en af de mest udbredte kontaktallergier globalt.',
            },
            {
              question: 'Hvad skal jeg huske om behandling af kontaktdermatitis?',
              answer:
                'Identificer og undgå udløseren — dette er det vigtigste skridt. Kortikosteroidcremer er standardbehandling mod inflammation og kløe. Brug beskyttelseshandsker, vælg parfumefrie produkter, og hold huden fugtet med milde fugtighedscremer. Ved svær allergisk dermatitis kan en hudlæge anbefale stærkere topikale steroider eller andre lægemidler.',
            },
          ],
          en: [
            {
              question: 'What is contact dermatitis?',
              answer:
                'Contact dermatitis is an inflammatory skin condition that occurs when the skin reacts to a substance it has touched. There are two main types: irritant contact dermatitis caused by direct damage to the skin barrier, and allergic contact dermatitis caused by an immune reaction to a specific allergen. The condition is not contagious.',
            },
            {
              question: 'What does contact dermatitis look like?',
              answer:
                'Typical signs include redness and swelling on the affected areas, intense itching and burning sensations, small blisters or bumps, and in chronic cases dry, cracked and scaly skin. The rash typically appears on the hands, wrists, arms and face.',
            },
            {
              question: 'Why does contact dermatitis happen?',
              answer:
                'Irritant contact dermatitis occurs when a substance directly damages the skin barrier — examples include soaps, detergents and solvents. Allergic contact dermatitis involves a delayed immune reaction against an allergen such as nickel, fragrances or latex. Both types can be triggered by stress and underlying skin conditions.',
            },
            {
              question: 'Who gets contact dermatitis?',
              answer:
                'Anyone can develop contact dermatitis. People with atopic eczema are more susceptible due to a weakened skin barrier. Occupations with high exposure to chemicals — hairdressers, laboratory workers, mechanics and healthcare workers — have elevated risk. Nickel allergy is one of the most common contact allergies globally.',
            },
            {
              question: 'What should I remember about contact dermatitis treatment?',
              answer:
                "Identify and avoid the trigger — this is the most important step. Corticosteroid creams are the standard treatment for inflammation and itching. Wear protective gloves, choose fragrance-free products, and keep the skin moisturised with gentle moisturisers. For severe allergic dermatitis, a dermatologist may recommend stronger topical steroids or other medications.",
            },
          ],
        },
      },
      {
        slug: 'lichen-planus',
        nameDa: 'Lichen Planus',
        nameEn: 'Lichen Planus',
        icon: '🟣',
        questions: {
          da: [
            {
              question: 'Hvad er lichen planus?',
              answer:
                'Lichen planus er en kronisk, inflammatorisk hudlidelse, der forårsager lilla, fladtoppede, kløende knopper på huden. Den præcise årsag er ukendt, men det menes at være en autoimmun reaktion, hvor immunsystemet fejlagtigt angriber sunde hudceller.',
            },
            {
              question: 'Hvordan ser lichen planus ud?',
              answer:
                'Lichen planus viser sig typisk som lilla, fladtoppede knopper med fine, hvide linjer på overfladen (Wickham-striber). Knopperne kan være intense at kløe og forekomme overalt på kroppen, men ses oftest på håndled, ankler, lænd og mundslimhinden.',
            },
            {
              question: 'Hvorfor opstår lichen planus?',
              answer:
                'Den præcise årsag er ukendt, men autoimmune reaktioner, visse lægemidler (blodtryksmedicin, NSAID), hepatitis C-infektion og stress menes alle at spille en rolle i at udløse tilstanden.',
            },
            {
              question: 'Hvem får lichen planus?',
              answer:
                'Lichen planus kan ramme alle i alle aldre, men forekommer hyppigst hos voksne mellem 30 og 60 år og er mere almindeligt hos kvinder. Personer med autoimmune sygdomme har en øget risiko.',
            },
            {
              question: 'Hvad skal jeg huske om lichen planus behandling?',
              answer:
                'Der findes ingen kur, men topiske kortikosteroider, calcineurinhæmmere, lysbehandling og i svære tilfælde orale retinoidere kan lindre symptomerne. Stresshåndtering er en vigtig del af behandlingen, da stress kan forværre udbrud.',
            },
          ],
          en: [
            {
              question: 'What is lichen planus?',
              answer:
                'Lichen planus is a chronic, inflammatory skin condition causing purple, flat-topped, itchy bumps on the skin. The exact cause is unknown, but it is thought to be an autoimmune reaction where the immune system mistakenly attacks healthy skin cells.',
            },
            {
              question: 'What does lichen planus look like?',
              answer:
                'Lichen planus typically presents as purple, flat-topped bumps with fine, white lines on the surface (Wickham striae). The bumps can be intensely itchy and appear anywhere on the body, but are most common on the wrists, ankles, lower back and oral mucosa.',
            },
            {
              question: 'Why does lichen planus happen?',
              answer:
                'The exact cause is unknown, but autoimmune reactions, certain medications (blood pressure drugs, NSAIDs), hepatitis C infection and stress are all thought to play a role in triggering the condition.',
            },
            {
              question: 'Who gets lichen planus?',
              answer:
                'Lichen planus can affect anyone at any age, but most commonly occurs in adults between 30 and 60 years old and is more prevalent in women. People with autoimmune conditions have an elevated risk.',
            },
            {
              question: 'What should I remember about lichen planus treatment?',
              answer:
                "There is no cure, but topical corticosteroids, calcineurin inhibitors, light therapy and in severe cases oral retinoids can relieve symptoms. Stress management is an important part of treatment, as stress can worsen flare-ups.",
            },
          ],
        },
      },
      {
        slug: 'psoriasis',
        nameDa: 'Psoriasis',
        nameEn: 'Psoriasis',
        icon: '🔴',
        questions: {
          da: [
            {
              question: 'Hvad er Psoriasis?',
              answer:
                'Psoriasis er en kronisk hudlidelse, der forårsager røde, skællende pletter på forskellige områder af din krop. Det er vigtigt at huske, at det ikke er smitsomt, så du kan ikke sprede det til andre.',
            },
            {
              question: 'Hvordan ser Psoriasis ud?',
              answer:
                'Psoriasis viser sig typisk som tykke, hævede pletter med sølvhvide skæl. Disse pletter kan være kløende og ubehagelige, og de påvirker ofte albuer, knæ, hovedbund og lænd. Dog kan de optræde overalt på din krop.',
            },
            {
              question: 'Hvorfor opstår Psoriasis?',
              answer:
                'Den præcise årsag til psoriasis er ukendt, men det er forbundet med et problem med immunsystemet, der fremskynder produktionen af hudceller. Dette får celler til at opbygge sig hurtigere end de kan skalle af, hvilket fører til den synlige skældannelse. Genetik og visse udløsere som stress, infektioner eller visse medicin kan også spille en rolle.',
            },
            {
              question: 'Hvem får Psoriasis?',
              answer:
                'Psoriasis kan påvirke alle, uanset alder eller køn. Mens det er mere almindeligt hos voksne, kan det også forekomme hos børn. Du er mere tilbøjelig til at udvikle det, hvis du har en familiehistorie med tilstanden.',
            },
            {
              question: 'Hvad skal jeg huske om Psoriasis behandling?',
              answer:
                'At håndtere psoriasis er afgørende – der er ingen kur, men forskellige behandlinger som cremer, salver, lysbehandling eller medicin kan hjælpe med at kontrollere symptomerne. Udløsere spiller ofte en rolle, så identificer og undgå personlige udløsere som stress, visse fødevarer eller skrappe sæber. Tøv ikke med at drøfte det med din hudlæge, der kan tilpasse en behandlingsplan til dine behov.',
            },
          ],
          en: [
            {
              question: 'What is Psoriasis?',
              answer:
                "Psoriasis is a chronic skin condition that causes red, scaly patches to appear on different areas of your body. It's important to remember that it's not contagious, so you can't spread it to others.",
            },
            {
              question: 'What does Psoriasis look like?',
              answer:
                'Psoriasis typically shows up as thick, raised patches with silvery-white scales. These patches can be itchy and uncomfortable, and they often affect the elbows, knees, scalp, and lower back. However, they can appear anywhere on your body.',
            },
            {
              question: 'Why does Psoriasis happen?',
              answer:
                "The exact cause of psoriasis is unknown, but it's linked to an issue with the immune system that speeds up skin cell production. This causes cells to build up faster than they can shed, leading to the visible scaling. Genetics and certain triggers like stress, infections, or some medications can also play a role.",
            },
            {
              question: 'Who gets Psoriasis?',
              answer:
                "Psoriasis can affect anyone, regardless of age or gender. While it's more common in adults, it can also occur in children. You're more likely to develop it if you have a family history of the condition.",
            },
            {
              question: 'What should I remember about Psoriasis treatment?',
              answer:
                "Managing psoriasis is key — there's no cure, but various treatments including creams, ointments, light therapy, or medications can help control symptoms and improve your quality of life. Triggers often play a role, so identify and avoid your personal triggers like stress, certain foods, or harsh soaps. Don't hesitate to discuss it with your dermatologist, who can tailor a treatment plan specific to your needs.",
            },
          ],
        },
      },
      {
        slug: 'scabies',
        nameDa: 'Skab',
        nameEn: 'Scabies',
        icon: '🕷️',
        questions: {
          da: [
            {
              question: 'Hvad er skab?',
              answer:
                'Skab er en smitsom hudinfektion forårsaget af sarcoptes scabiei-miden, der graver sig ind i hudens yderste lag og forårsager intens kløe og irritation. Det smitter via tæt hud-til-hud kontakt eller i sjældne tilfælde via delte genstande som sengetøj eller håndklæder.',
            },
            {
              question: 'Hvordan ser skab ud?',
              answer:
                'Skab viser sig typisk som intens kløe (især om natten), små røde knopper på håndled, fingre, albuer, armhuler og kønsorganer, samt tynde, lyse graverlinjer i huden der markerer midenes tunneler.',
            },
            {
              question: 'Hvorfor smitter skab?',
              answer:
                'Skab smitter primært gennem direkte, udvidet hud-til-hud kontakt med en smittet person. Kort håndtryk giver sjældent smitte. Miden kan også overføres via delte genstande, men overlever kun 2–3 dage uden for menneskets hud.',
            },
            {
              question: 'Hvem får skab?',
              answer:
                'Alle kan få skab uanset alder, køn eller hygiejnestandard. Det er mere udbredt i tætte boforhold, ved seksuel kontakt, i institutionelle miljøer (plejehjem, fængsler) og hos personer med svækket immunsystem.',
            },
            {
              question: 'Hvad skal jeg huske om skab behandling?',
              answer:
                'Skab behandles med topiske skabmidler (permethrin 5%) eller orale midler (ivermectin) ordineret af en læge. Alle i tæt kontakt skal behandles samtidig – også uden symptomer. Tøj og sengetøj vaskes ved mindst 50°C, og hjemmet støvsuges grundigt.',
            },
          ],
          en: [
            {
              question: 'What is scabies?',
              answer:
                'Scabies is a contagious skin infestation caused by the sarcoptes scabiei mite, which burrows into the outermost layer of the skin causing intense itching and irritation. It spreads through close skin-to-skin contact or in rare cases via shared objects such as bedding or towels.',
            },
            {
              question: 'What does scabies look like?',
              answer:
                'Scabies typically presents as intense itching (especially at night), small red bumps on the wrists, fingers, elbows, armpits and genitals, and thin, light-coloured burrow lines in the skin that mark the mites\' tunnels.',
            },
            {
              question: 'Why does scabies spread?',
              answer:
                'Scabies spreads primarily through direct, extended skin-to-skin contact with an infected person. Brief contact such as a handshake rarely transmits it. The mite can also be transferred via shared objects, but only survives 2–3 days outside human skin.',
            },
            {
              question: 'Who gets scabies?',
              answer:
                'Anyone can get scabies regardless of age, gender or hygiene standard. It is more common in close living conditions, through sexual contact, in institutional settings (nursing homes, prisons) and in people with weakened immune systems.',
            },
            {
              question: 'What should I remember about scabies treatment?',
              answer:
                'Scabies is treated with topical scabicides (permethrin 5%) or oral medication (ivermectin) prescribed by a doctor. All close contacts must be treated simultaneously — even without symptoms. Clothing and bedding are washed at at least 50°C, and the home is thoroughly vacuumed.',
            },
          ],
        },
      },
      {
        slug: 'molluscum-contagiosum',
        nameDa: 'Molluscum Contagiosum',
        nameEn: 'Molluscum Contagiosum',
        icon: '🔵',
        questions: {
          da: [
            {
              question: 'Hvad er molluscum contagiosum?',
              answer:
                'Molluscum contagiosum er en almindelig, virusbaseret hudinfektion forårsaget af et poxvirus. Den viser sig som små, perlemorsagtige knopper med en central fordybning. Tilstanden er mest almindelig hos børn, men kan ramme alle.',
            },
            {
              question: 'Hvordan smitter molluscum contagiosum?',
              answer:
                'Virussen spreder sig gennem direkte hud-til-hud kontakt med en inficeret person eller via forurenede genstande som håndklæder, vaskeklude, legetøj og legepladsudstyr. At skrabe eller pille ved eksisterende knopper kan også sprede virussen til andre områder af huden.',
            },
            {
              question: 'Hvem får molluscum contagiosum?',
              answer:
                'Molluscum contagiosum er mest almindeligt hos børn mellem 1–10 år, men det kan ramme personer i alle aldre. Individer med et svækket immunsystem er mere modtagelige og kan opleve flere eller større knopper.',
            },
            {
              question: 'Hvordan behandles molluscum contagiosum?',
              answer:
                'Behandling kan inkludere kryoterapi (frysning med flydende kvælstof), topiske lægemidler (salicylsyre, cantharidin) eller curettage (kirurgisk fjernelse med en steril curette). Da knopperne ofte forsvinder af sig selv, kan man også vælge at observere tilstanden.',
            },
            {
              question: 'Hvad skal jeg huske om forebyggelse?',
              answer:
                'Undgå at pille eller skrabe knopperne, vask hænder regelmæssigt, undgå at dele personlige genstande som håndklæder, og rengør fælles legetøj og overflader. Dæk knopperne til ved tæt kontakt med andre for at reducere smitterisikoen.',
            },
          ],
          en: [
            {
              question: 'What is molluscum contagiosum?',
              answer:
                'Molluscum contagiosum is a common viral skin infection caused by a poxvirus. It appears as small, pearly white bumps with a central dimple. The condition is most common in children but can affect anyone.',
            },
            {
              question: 'How does molluscum contagiosum spread?',
              answer:
                'The virus spreads through direct skin-to-skin contact with an infected person or via contaminated objects such as towels, washcloths, shared toys and playground equipment. Scratching or picking existing bumps can also spread the virus to other areas of the skin.',
            },
            {
              question: 'Who gets molluscum contagiosum?',
              answer:
                'Molluscum contagiosum is most common in children between 1–10 years old, but it can affect people of any age. Individuals with weakened immune systems are more susceptible and may develop more or larger bumps.',
            },
            {
              question: 'How is molluscum contagiosum treated?',
              answer:
                'Treatment may include cryotherapy (freezing with liquid nitrogen), topical medications (salicylic acid, cantharidin) or curettage (surgical removal with a sterile curette). Since bumps often resolve on their own, watchful waiting is also an option.',
            },
            {
              question: 'What should I remember about prevention?',
              answer:
                "Avoid picking or scratching the bumps, wash your hands regularly, avoid sharing personal items such as towels, and clean shared toys and surfaces. Cover the bumps during close contact with others to reduce the risk of transmission.",
            },
          ],
        },
      },
    ],
  },
];
