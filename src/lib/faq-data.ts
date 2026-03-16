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
    ],
  },
];
