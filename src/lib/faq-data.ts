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
          answer: 'Download vores app, opret en profil med MitID, tag billeder af dit hudproblem og besvar nogle spørgsmål om dine symptomer. En speciallæge i hud- og kønssygdomme gennemgår din sag og sender dig en vurdering, en diagnose og en behandlingsplan. Du modtager svaret direkte i appen, normalt inden for 48 timer.'
        },
        {
          question: 'Hvor hurtigt får jeg svar?',
          answer: 'Du får normalt svar inden for 48 timer, efter du har indsendt din sag. De fleste sager bliver besvaret inden for 24 timer. Tager det længere, kontakter vi dig. Du får besked i appen, så snart lægen har gennemgået din sag.'
        },
        {
          question: 'Hvilke hudproblemer kan I hjælpe med?',
          answer: 'Vi vurderer og behandler de fleste almindelige hudsygdomme: akne, eksem, kontakteksem, psoriasis, rosacea, nældefeber, seboroisk dermatitis og skæl, ringorm og fodsvamp, neglesvamp, skab, impetigo, herpes simplex (forkølelsessår), helvedesild, molluscum contagiosum, kønsvorter, vitiligo, alopecia areata, lichen planus og soleksem. Vi vurderer også mistænkelige modermærker og hudforandringer og henviser dig videre, hvis der er brug for en fysisk undersøgelse.'
        },
        {
          question: 'Hvad sker der, hvis I ikke kan stille en diagnose?',
          answer: 'Betalingen trækkes, når du indsender din sag. Hvis billederne eller oplysningerne ikke er tilstrækkelige til, at vores læger kan lave en forsvarlig vurdering, beder vi dig først om at supplere med flere billeder eller oplysninger. Kan sagen stadig ikke vurderes, refunderer vi betalingen til den betalingsmetode, du brugte, og vi fortæller dig, hvor du i stedet kan blive undersøgt fysisk.'
        },
        {
          question: 'Hvad kan en vurdering ud fra billeder ikke?',
          answer: 'En vurdering ud fra billeder kan ikke udelukke hudkræft. Ser lægen noget, der kræver nærmere undersøgelse, får du besked om at blive undersøgt fysisk — og vi hjælper dig videre. En mistænkelig plet skal ses med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.'
        },
        {
          question: 'Hvornår skal jeg ikke bruge SKIND?',
          answer: 'Har du feber, hastigt spredende rødme, kraftige smerter eller vejrtrækningsbesvær, skal du kontakte lægen, lægevagten eller 112 — brug ikke SKIND. SKIND er til hudlidelser, der ikke er akutte.'
        },
        {
          question: 'Kan jeg bruge SKIND til mine børn?',
          answer: 'Ja. Du kan oprette en sag for et barn under 18 år gennem din egen profil, hvis du har del i forældremyndigheden. Ved fælles forældremyndighed kan hver af forældrene oprette sagen, men I bør være enige om den. Du afgiver en tro og love-erklæring i appen. Unge på 15–17 år kan selv samtykke til behandling efter sundhedsloven og har ret til fortrolighed — også over for forældrene.'
        },
        {
          question: 'Hvem er lægerne bag SKIND?',
          answer: 'Din sag vurderes af to speciallæger i hud- og kønssygdomme med dansk autorisation fra Styrelsen for Patientsikkerhed. De har selvstændigt sundhedsfagligt ansvar efter autorisationsloven og er underlagt tavshedspligt efter sundhedsloven. En ansvarlig læge er udpeget og gennemgår regelmæssigt sagerne. Alle vurderinger foretages af mennesker — ikke af en algoritme.'
        },
        {
          question: 'Kan I udskrive recept, og hvordan får jeg medicinen?',
          answer: 'Vurderer hudlægen, at du har brug for receptpligtig behandling, udstedes recepten elektronisk, og din behandlingsplan ligger i appen. Du får besked i appen, når recepten er klar, og hvordan du henter medicinen. Bor du uden for Danmark, kan en dansk recept ikke altid indløses lokalt — kontakt os, før du opretter sagen.'
        },
        {
          question: 'Kan jeg bruge SKIND, hvis jeg ikke har MitID eller CPR-nummer?',
          answer: 'SKIND er tilgængelig for kunder bosat i EU og EØS (EU samt Norge, Island og Liechtenstein). Opretter du en sag fra et land uden for EU/EØS, får du besked om, at tjenesten ikke er tilgængelig for dig. Login og identitetsverifikation sker med MitID, som kræver et dansk CPR-nummer. Bor du i EU/EØS uden MitID, så kontakt os på info@skinchange.ai, før du opretter en sag, så vi kan vejlede dig.'
        }
      ],
      en: [
        {
          question: 'How does SKIND work?',
          answer: 'Download our app, create a profile with MitID, take photos of your skin problem and answer some questions about your symptoms. A specialist in dermatology and venereology reviews your case and sends you an assessment, a diagnosis and a treatment plan. You receive the response directly in the app, normally within 48 hours.'
        },
        {
          question: 'How quickly do I get a response?',
          answer: 'You will normally receive a response within 48 hours of submitting your case. Most cases are answered within 24 hours. If it takes longer, we will contact you. You get notified in the app as soon as the dermatologist has reviewed your case.'
        },
        {
          question: 'What skin problems can you help with?',
          answer: 'We assess and treat most common skin conditions: acne, eczema, contact dermatitis, psoriasis, rosacea, urticaria, seborrhoeic dermatitis and dandruff, ringworm and athlete\'s foot, nail fungus, scabies, impetigo, herpes simplex (cold sores), shingles, molluscum contagiosum, genital warts, vitiligo, alopecia areata, lichen planus and polymorphic light eruption (sun allergy). We also assess suspicious moles and skin changes and refer you onward if an in-person examination is needed.'
        },
        {
          question: 'What happens if you cannot make a diagnosis?',
          answer: 'Payment is taken when you submit your case. If the photos or the information are not enough for our dermatologists to make a sound assessment, we first ask you to add more photos or details. If the case still cannot be assessed, we refund the payment to the method you used, and we tell you where to be examined in person instead.'
        },
        {
          question: 'What can a photo assessment not do?',
          answer: 'An assessment based on photos cannot rule out skin cancer. If the dermatologist sees anything that needs closer examination, you will be told to be seen in person, and we will help you get there. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal for laboratory analysis.'
        },
        {
          question: 'When should I not use SKIND?',
          answer: 'If you have a fever, rapidly spreading redness, severe pain or difficulty breathing, contact your doctor, the out-of-hours service or call 112 — do not use SKIND. SKIND is for skin conditions that are not acute.'
        },
        {
          question: 'Can I use SKIND for my children?',
          answer: 'Yes. You can create a case for a child under 18 through your own profile if you hold parental responsibility. Where custody is shared, either parent may create the case, but you should agree on it first. You submit a sworn declaration in the app. Under the Danish Health Act, 15–17-year-olds can consent to treatment themselves and have their own right to confidentiality — including from their parents.'
        },
        {
          question: 'Who are the doctors behind SKIND?',
          answer: 'Your case is assessed by two specialists in dermatology and venereology (speciallæge i hud- og kønssygdomme) holding Danish authorisation from the Danish Patient Safety Authority. They carry independent professional responsibility under the Danish Authorisation Act and are bound by medical confidentiality under the Danish Health Act. A responsible physician is appointed and reviews cases regularly. Every assessment is made by a human, not an algorithm.'
        },
        {
          question: 'Can you issue prescriptions, and how do I collect the medicine?',
          answer: 'If the dermatologist decides you need prescription treatment, the prescription is issued electronically and your treatment plan is available in the app. You are notified in the app when the prescription is ready and how to collect the medicine. If you live outside Denmark, a Danish prescription cannot always be dispensed locally — contact us before submitting a case.'
        },
        {
          question: 'Can I use SKIND without MitID or a Danish CPR number?',
          answer: 'SKIND is available to customers residing in the EU and the EEA (the EU plus Norway, Iceland and Liechtenstein). If you try to create a case from a country outside the EU/EEA, you are told the service is not available to you. Login and identity verification use MitID, which requires a Danish CPR number. If you live in the EU/EEA without MitID, contact us at info@skinchange.ai before submitting a case and we will advise you.'
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
          question: 'Hvad koster en online hudlægekonsultation?',
          answer: 'En konsultation koster 298 DKK (€40). Prisen dækker én hudlidelse og inkluderer lægens vurdering, diagnose, behandlingsplan og opfølgende spørgsmål om netop den sag. Du betaler med betalingskort i appen, når du indsender sagen — der er intet abonnement og ingen automatisk fornyelse. Et nyt, andet hudproblem koster en ny konsultation. Kan sagen ikke vurderes, refunderer vi betalingen.'
        },
        {
          question: 'Er SKIND dækket af sygesikringen?',
          answer: 'Nej, SKIND er en privat sundhedstjeneste og dækkes ikke af den offentlige sygesikring. Prisen er 298 DKK (€40) pr. konsultation, og du betaler direkte i appen. Du får en kvittering i appen, som du kan bruge, hvis din private sundhedsforsikring dækker online lægekonsultationer — spørg dit forsikringsselskab.'
        },
        {
          question: 'Kan jeg få pengene tilbage, hvis jeg fortryder?',
          answer: 'Ja. Vi giver fuld refusion uden spørgsmål: skriv til info@skinchange.ai inden for 30 dage efter, at du har indsendt sagen. Du behøver ikke begrunde det, og pengene er tilbage på din oprindelige betalingsmetode senest 14 dage efter, vi har modtaget anmodningen. Du har desuden 14 dages lovbestemt fortrydelsesret efter forbrugeraftaleloven. Fordi du beder os om at gå i gang med vurderingen med det samme, bortfalder den lovbestemte ret, når vurderingen er fuldt udført — men vores 30-dages refusion gælder stadig.'
        }
      ],
      en: [
        {
          question: 'How much does an online dermatologist consultation cost?',
          answer: 'A consultation costs 298 DKK (€40). The price covers one skin condition and includes the dermatologist\'s assessment, diagnosis, treatment plan and follow-up questions about that case. You pay by card in the app when you submit the case — there is no subscription and no automatic renewal. A new, separate skin problem costs a new consultation. If the case cannot be assessed, we refund the payment.'
        },
        {
          question: 'Is SKIND covered by health insurance?',
          answer: 'No, SKIND is a private healthcare service and is not covered by public health insurance. The price is 298 DKK (€40) per consultation, and you pay directly in the app. You receive a receipt in the app that you can use if your private health insurance covers online medical consultations — ask your insurer.'
        },
        {
          question: 'Can I get a refund if I change my mind?',
          answer: 'Yes. We offer a full refund, no questions asked: email info@skinchange.ai within 30 days of submitting your case. You do not need to give a reason, and the money is returned to your original payment method within 14 days of us receiving the request. You also have the statutory 14-day right of withdrawal under the Danish Consumer Contracts Act. Because you ask us to begin the assessment immediately, that statutory right ends once the assessment has been fully performed — but our 30-day refund still applies.'
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
          answer: 'Vi behandler dine oplysninger efter GDPR og de danske regler for sundhedsjournaler. Login sker med MitID, og data opbevares på servere i EU. Vi videregiver kun oplysninger til andre, når du beder om det, eller når loven kræver det — se vores privatlivspolitik.'
        },
        {
          question: 'Hvor længe gemmer I mine billeder og oplysninger?',
          answer: 'Din patientjournal — billeder, symptombeskrivelser og lægens vurdering — opbevares i mindst 10 år fra seneste optegnelse, som journalføringsbekendtgørelsen kræver. Pligten gælder også, hvis du sletter din konto. Betalingsoplysninger gemmes i 5 år efter regnskabsårets udløb efter bogføringsloven, supportkorrespondance i op til 3 år og tekniske brugsdata i op til 12 måneder. Se privatlivspolitikken for detaljerne.'
        }
      ],
      en: [
        {
          question: 'Is it safe to use SKIND?',
          answer: 'We handle your data under the GDPR and Danish health-records rules. Login uses MitID and data is stored on servers in the EU. We disclose data to others only when you ask us to, or where the law requires it — see our privacy policy.'
        },
        {
          question: 'How long do you keep my photos and information?',
          answer: 'Your patient record — photos, symptom descriptions and the dermatologist\'s assessment — is kept for at least 10 years from the most recent entry, as required by the Danish Patient Records Order. That duty applies even if you delete your account. Payment data is kept for 5 years after the end of the financial year under the Danish Bookkeeping Act, support correspondence for up to 3 years, and technical usage data for up to 12 months. See the privacy policy for details.'
        }
      ]
    }
  },
  {
    slug: 'app',
    icon: '📱',
    titleDa: 'Appen',
    titleEn: 'The App',
    descriptionDa: 'Information om SKIND-appen og understøttede enheder.',
    descriptionEn: 'Information about the SKIND app and supported devices.',
    questions: {
      da: [
        {
          question: 'Hvilke enheder understøtter appen?',
          answer: 'SKIND-appen er tilgængelig til både iPhone (iOS 14 eller nyere) og Android (version 8 eller nyere). Du kan downloade appen fra App Store eller Google Play.'
        }
      ],
      en: [
        {
          question: 'Which devices does the app support?',
          answer: 'The SKIND app is available for both iPhone (iOS 14 or newer) and Android (version 8 or newer). You can download the app from the App Store or Google Play.'
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
          question: 'Hvor lang tid tager det at få svar fra support?',
          answer: 'Vi besvarer alle henvendelser hurtigst muligt. I travle perioder og uden for normal arbejdstid må du regne med længere svartid. Support handler om appen, betaling og praktiske spørgsmål — svaret på selve din hudsag kommer fra lægen i appen, normalt inden for 48 timer. Haster det med et helbredsproblem, skal du kontakte din læge, lægevagten eller 112.'
        },
        {
          question: 'Kan jeg ringe til jer?',
          answer: 'Ja. Du kan ringe på +45 20 60 75 88 eller skrive til info@skinchange.ai. Vi foretrækker e-mail til almindelige henvendelser, fordi det giver dokumentation og kvalitetssikring. Send aldrig helbredsoplysninger eller billeder af huden pr. almindelig e-mail — brug appen, som er krypteret. Telefonen er bemandet på hverdage. Får du ikke fat i os, så skriv til info@skinchange.ai, og vi vender tilbage hurtigst muligt.'
        },
        {
          question: 'Hvordan klager jeg over en behandling eller et køb?',
          answer: 'Skriv først til info@skinchange.ai, så forsøger vi at løse det. Er du utilfreds med det sundhedsfaglige — fx hudlægens vurdering — kan du klage til Styrelsen for Patientklager (stpk@stpk.dk). Mener du, at du har fået en skade, kan du søge erstatning hos Patienterstatningen. Klager over betaling eller aftalen hører under Mæglingsteamet for Forbrugerklager / Forbrugerklagenævnet, og klager over vores databehandling hører under Datatilsynet.'
        }
      ],
      en: [
        {
          question: 'How long does support take to reply?',
          answer: 'We respond to all enquiries without undue delay. During busy periods and outside normal business hours, response times may be longer. Support covers the app, payment and practical questions — the answer to your actual skin case comes from the dermatologist in the app, normally within 48 hours. If a health problem is urgent, contact your doctor, the out-of-hours service or call 112.'
        },
        {
          question: 'Can I call you?',
          answer: 'Yes. You can call +45 20 60 75 88 or write to info@skinchange.ai. We prefer email for ordinary enquiries because it gives us documentation and quality assurance. Never send health information or photos of your skin by ordinary email — use the app, which is encrypted. The phone is staffed on weekdays. If you cannot reach us, email info@skinchange.ai and we will get back to you as soon as possible.'
        },
        {
          question: 'How do I complain about my treatment or my purchase?',
          answer: 'Write to info@skinchange.ai first so we can try to resolve it. If you are unhappy with the medical side — for example the dermatologist\'s assessment — you can complain to the Danish Agency for Patient Complaints (Styrelsen for Patientklager, stpk@stpk.dk). If you believe you have been harmed, you can claim compensation from the Danish Patient Compensation Association (Patienterstatningen). Complaints about payment or the contract go to the Danish Consumer Complaints Board, and complaints about our data handling go to Datatilsynet.'
        }
      ]
    }
  },
  {
    slug: 'diseases',
    icon: '🔬',
    titleDa: 'Hudsygdomme',
    titleEn: 'Skin Conditions',
    descriptionDa: 'Lær om de mest almindelige hudsygdomme, deres symptomer og behandlingsmuligheder. Indholdet er generel information og erstatter ikke en individuel lægelig vurdering.',
    descriptionEn: 'Learn about the most common skin conditions, their symptoms and treatment options. This is general information and does not replace an individual medical assessment.',
    questions: { da: [], en: [] },
    subGroups: [
      {
        slug: 'seborrheic-dermatitis',
        nameDa: 'Seboroisk Dermatitis',
        nameEn: 'Seborrhoeic Dermatitis',
        icon: '🧴',
        questions: {
          da: [
            {
              question: 'Hvad er seboroisk dermatitis?',
              answer:
                'Seboroisk dermatitis er en almindelig, kronisk hudlidelse, der forårsager røde, skællende og fedtede pletter på hovedbunden, i ansigtet og på andre olieholdige områder. Den er ikke smitsom og udgør ingen alvorlig sundhedsrisiko.',
            },
            {
              question: 'Hvordan ser seboroisk dermatitis ud?',
              answer:
                'Typiske tegn inkluderer skællende, røde pletter på hovedbunden (skæl), øjenbrynene, siderne af næsen og bag ørerne. Hos spædbørn ses karakteristiske gullige, fedtede skæl på hovedbunden (vuggekant).',
            },
            {
              question: 'Hvad forårsager seboroisk dermatitis?',
              answer:
                'Flere faktorer bidrager: overproduktion af talg skaber et miljø, hvor gærsvampen Malassezia trives og udløser inflammation. Genetik, hormonelle faktorer og et svækket immunsystem øger også risikoen.',
            },
            {
              question: 'Hvem får seboroisk dermatitis?',
              answer:
                'Alle kan rammes. Spædbørn under tre måneder udvikler ofte vuggekant. Voksne mellem 30–50 år er hyppigst ramt, særligt mænd. Personer med HIV/AIDS eller svækket immunsystem har markant højere risiko.',
            },
            {
              question: 'Hvordan behandles seboroisk dermatitis?',
              answer:
                'Konsistent behandling er nøglen. Svampedræbende shampoo (ketoconazol, zinkpyrithion) er førstevalgsbehandling mod skæl. Creme med steroid eller svampedræbende creme behandler ansigts- og kropsbetændelse. Stresshåndtering og skånsom hudpleje reducerer udbrud. Der er ingen kur, men tilstanden kan holdes under kontrol.',
            },
          ],
          en: [
            {
              question: 'What is seborrhoeic dermatitis?',
              answer:
                'Seborrhoeic dermatitis is a common, chronic skin condition causing red, scaly and greasy patches on the scalp, face and other oily areas of the body. It is not contagious and poses no serious health risk.',
            },
            {
              question: 'What does seborrhoeic dermatitis look like?',
              answer:
                'Typical signs include scaly, red patches on the scalp (dandruff), eyebrows, sides of the nose and behind the ears. In infants, characteristic yellowish, greasy scales appear on the scalp (cradle cap).',
            },
            {
              question: 'What causes seborrhoeic dermatitis?',
              answer:
                'Several factors contribute: overproduction of sebum creates an environment where the yeast Malassezia thrives and triggers inflammation. Genetics, hormonal factors and a weakened immune system also increase the risk.',
            },
            {
              question: 'Who gets seborrhoeic dermatitis?',
              answer:
                'Anyone can be affected. Infants under three months often develop cradle cap. Adults between 30–50 years are most commonly affected, particularly men. People with HIV/AIDS or weakened immune systems have a significantly higher risk.',
            },
            {
              question: 'How is seborrhoeic dermatitis treated?',
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
              question: 'Hvad er acne?',
              answer:
                'Acne er en almindelig hudlidelse, der påvirker talgkirtler og hårfollikler. Den forårsager bumser, hudorme, hvide knopper og nogle gange dybere knopper afhængigt af sværhedsgraden. Acne er ikke smitsom.',
            },
            {
              question: 'Hvordan ser acne ud?',
              answer:
                'Acne kan manifestere sig forskelligt for alle, men almindelige tegn inkluderer: Hudorme og hvide knopper (tilstoppede porer på grund af overskydende olie og døde hudceller), bumser (små, røde knopper, der kan indeholde pus), og knuder og cyster (dybere, smertefulde knopper dannet under huden).',
            },
            {
              question: 'Hvad forårsager acne?',
              answer:
                'Flere faktorer bidrager til acne: Øget olieproduktion (hormoner, genetik og visse lægemidler kan stimulere talgkirtlerne), tilstoppede porer (døde hudceller og overskydende olie tilstopper porerne og fanger bakterier), og bakterieovervækst (bakterien Cutibacterium acnes bidrager til inflammation og dannelse af bumser).',
            },
            {
              question: 'Hvem får acne?',
              answer:
                'Acne er utrolig almindelig og påvirker de fleste mennesker på et tidspunkt i deres liv, primært under puberteten på grund af hormonelle ændringer. Dog kan voksne også opleve acne.',
            },
            {
              question: 'Hvordan behandles acne?',
              answer:
                'Vedvarende behandling er nøglen. Undgå at kradse eller klemme – det kan forværre inflammation og give arvæv. Vær forsigtig med din hud: hård skrubning eller produkter kan irritere den. Dermatologer kan vurdere din specifikke acne-type og anbefale den mest effektive behandlingsplan. Acne kan påvirke selvværdet, men du er ikke alene – søg støtte fra sundhedspersonale, hvis der er behov for det.',
            },
          ],
          en: [
            {
              question: 'What is acne?',
              answer:
                'Acne is a common skin condition affecting oil glands and hair follicles. It causes pimples, blackheads, whiteheads, and sometimes deeper bumps depending on its severity. Acne is not contagious.',
            },
            {
              question: 'What does acne look like?',
              answer:
                'Acne can manifest differently for everyone, but common signs include: blackheads and whiteheads (plugged pores due to excess oil and dead skin cells), pimples (small red bumps that may contain pus), and nodules and cysts (deeper, painful bumps forming under the skin).',
            },
            {
              question: 'What causes acne?',
              answer:
                'Several factors contribute to acne: increased oil production (hormones, genetics, and certain medications can stimulate oil glands), plugged pores (dead skin cells and excess oil can clog pores, trapping bacteria and inflammation), and bacterial overgrowth (Cutibacterium acnes contributes to inflammation and pimple formation).',
            },
            {
              question: 'Who gets acne?',
              answer:
                'Acne is incredibly common, affecting most people at some point in their lives, primarily during adolescence due to hormonal changes. However, adults can also experience acne.',
            },
            {
              question: 'How is acne treated?',
              answer:
                "Consistent treatment is key. Don't pick or squeeze — this can worsen inflammation and scarring. Be gentle with your skin, as harsh scrubbing or products can irritate it. Dermatologists can assess your specific acne type and recommend the most effective treatment plan. Acne can impact self-esteem, but keep in mind that you are not alone — seek support from healthcare professionals if needed.",
            },
          ],
        },
      },
      {
        slug: 'eczema-atopic-dermatitis',
        nameDa: 'Eksem (Atopisk Dermatitis)',
        nameEn: 'Eczema (Atopic Dermatitis)',
        icon: '💧',
        questions: {
          da: [
            {
              question: 'Hvad er eksem (atopisk dermatitis)?',
              answer:
                'Atopisk dermatitis – i daglig tale eksem – er en kronisk, inflammatorisk hudlidelse, der gør huden rød, tør og kløende. "Atopisk" henviser til en arvelig tendens til allergiske reaktioner, og tilstanden hænger tæt sammen med astma og høfeber i det, der kaldes den atopiske triade. Eksem er ikke smitsomt.',
            },
            {
              question: 'Hvordan ser eksem ud?',
              answer:
                'Eksem viser sig som tørre, skællende og røde pletter, ofte med rifter fra kløe, og i svære tilfælde med væskende eller sprukken hud. Hos voksne sidder det hyppigst på indersiden af albuerne og i knæhaserne samt på håndled, nakke og i ansigtet. Hos spædbørn og småbørn ses det ofte i ansigtet og på kroppen.',
            },
            {
              question: 'Hvad forårsager eksem?',
              answer:
                'Hudbarrieren er svækket, så irritanter og allergener lettere trænger ind, og fugt fordamper ud — en mutation i genet for filaggrin er en hyppig årsag. Samtidig er immunsystemet indstillet på en allergisk type inflammation og overreagerer på fx husstøvmider, hudafskalning fra kæledyr eller sæbe. Eksem løber i familier sammen med astma og høfeber.',
            },
            {
              question: 'Hvem får eksem?',
              answer:
                'Op mod 20% af alle børn har atopisk dermatitis. Tilstanden opstår ofte i det første leveår og bliver for mange bedre i løbet af barndommen eller teenageårene. Voksne kan også have eksem, især hvis der er astma, høfeber eller eksem i familien. Personer med vådt arbejde eller hyppig håndvask er særligt udsatte.',
            },
            {
              question: 'Hvordan behandles eksem?',
              answer:
                'Fugtighedscreme mindst to gange dagligt – også mellem udbrud – er den vigtigste daglige behandling. Under udbrud dæmper kortikosteroidcreme inflammation og kløe; mild hydrokortison 1% fås i håndkøb, mens stærkere steroider kræver recept. Calcineurinhæmmere som tacrolimus og pimecrolimus er et steroidfrit alternativ til ansigt og hals. Ved svært eksem kan en hudlæge tilbyde biologisk behandling, JAK-hæmmere eller lysbehandling.',
            },
          ],
          en: [
            {
              question: 'What is eczema (atopic dermatitis)?',
              answer:
                'Atopic dermatitis — commonly known as eczema — is a chronic, inflammatory skin condition that makes the skin red, dry and itchy. "Atopic" refers to a hereditary tendency towards allergic reactions, and the condition is closely linked to asthma and hay fever in what is called the atopic triad. Eczema is not contagious.',
            },
            {
              question: 'What does eczema look like?',
              answer:
                'Eczema appears as dry, scaly, red patches, often with scratch marks, and in severe cases with weeping or cracked skin. In adults it most commonly affects the insides of the elbows and the backs of the knees, along with the wrists, neck and face. In infants and young children it often appears on the face and torso.',
            },
            {
              question: 'What causes eczema?',
              answer:
                'The skin barrier is impaired, so irritants and allergens penetrate more easily and moisture evaporates out — a mutation in the filaggrin gene is a common cause. At the same time the immune system is tuned towards an allergic type of inflammation and overreacts to house dust mites, pet dander or soap. Eczema runs in families alongside asthma and hay fever.',
            },
            {
              question: 'Who gets eczema?',
              answer:
                'Up to 20% of all children have atopic dermatitis. The condition often develops in the first year of life and improves for many during childhood or the teenage years. Adults can have eczema too, especially where asthma, hay fever or eczema runs in the family. People doing wet work or washing their hands frequently are particularly exposed.',
            },
            {
              question: 'How is eczema treated?',
              answer:
                'A moisturiser at least twice daily — including between flares — is the most important daily treatment. During flares, corticosteroid cream suppresses inflammation and itching; mild hydrocortisone 1% is available over the counter, while stronger steroids need a prescription. Calcineurin inhibitors such as tacrolimus and pimecrolimus are a steroid-free option for the face and neck. For severe eczema a dermatologist can offer biological treatment, JAK inhibitors or phototherapy.',
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
                'Rosacea er en kronisk hudlidelse, der forårsager vedvarende rødme, synlige blodkar og undertiden bumser eller pustler i ansigtet. Den er ikke smitsom, men kan være vedvarende og frustrerende for dem, der er ramt.',
            },
            {
              question: 'Hvordan ser rosacea ud?',
              answer:
                'Rosacea viser sig typisk som rødme og blussen i midten af ansigtet, tynde synlige blodkar (telangiektasi) på kinderne og næsen, samt røde papler, der kan ligne acne. I svære tilfælde kan næsehuden fortykkes (rhinophyma), og øjnene kan blive røde og irriterede (okulær rosacea).',
            },
            {
              question: 'Hvad forårsager rosacea?',
              answer:
                'Den præcise årsag er ukendt, men bidragende faktorer inkluderer overaktive blodkar i ansigtet, betændelsesreaktioner udløst af sollys, visse fødevarer og mider, samt genetisk disposition. Forskning tyder også på, at ubalancer i tarmbakterierne kan spille en rolle.',
            },
            {
              question: 'Hvem får rosacea?',
              answer:
                'Rosacea er mest almindelig hos voksne med lys hud og lyst hår eller øjne, særligt dem med keltisk eller nordeuropæisk baggrund. Tilstanden er hyppigst hos voksne mellem 40 og 50 år, og dem med familiehistorie af rosacea er i øget risiko.',
            },
            {
              question: 'Hvordan behandles rosacea?',
              answer:
                'Rosacea kan håndteres med topiske lægemidler som metronidazol og azelainsyre, orale antibiotika ved moderat til svær rosacea, og laserbehandling for synlige blodkar. Det er afgørende at identificere og undgå personlige udløsere som stærk mad, alkohol og sollys, og at bruge skånsom, parfumefri hudpleje med solcreme.',
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
              question: 'What causes rosacea?',
              answer:
                'The exact cause is unknown, but contributing factors include overactive blood vessels in the face, inflammatory reactions triggered by sunlight, certain foods and mites, and genetic predisposition. Research also suggests that imbalances in gut bacteria may play a role.',
            },
            {
              question: 'Who gets rosacea?',
              answer:
                'Rosacea is most common in fair-skinned adults with light hair or eyes, particularly those of Celtic or Northern European descent. The condition is most frequent in adults between 40 and 50 years old, and those with a family history of rosacea are at increased risk.',
            },
            {
              question: 'How is rosacea treated?',
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
                'Nældefeber er en almindelig hudlidelse, der forårsager hævede, kløende røde knopper (kvadler), der pludselig opstår og kan forsvinde igen inden for timer. Den er ikke smitsom og skyldes frigivelse af histamin fra mastceller i huden.',
            },
            {
              question: 'Hvordan ser nældefeber ud?',
              answer:
                'Nældefeber viser sig som hævede, røde kvadler med blegt center, der kan variere fra få millimeter til flere centimeter i størrelse. Knopperne er intenst kløende, kan opstå overalt på kroppen, og kan smelte sammen til større arealer. En enkelt kvaddel forsvinder normalt inden for 1–24 timer uden at efterlade mærker.',
            },
            {
              question: 'Hvad forårsager nældefeber?',
              answer:
                'Nældefeber opstår, når mastceller frigiver histamin i huden. Udløsere inkluderer allergener (nødder, skaldyr, penicillin, insektbid), fysiske faktorer (tryk, kulde, varme, sollys, anstrengelse) og interne faktorer (infektioner, stress, autoimmune tilstande). I op mod 50% af kroniske tilfælde kan årsagen ikke identificeres (idiopatisk).',
            },
            {
              question: 'Hvem får nældefeber?',
              answer:
                'Alle kan få nældefeber, men det er mere almindeligt hos voksne. Akut urticaria ses hyppigst hos børn og unge voksne, mens kronisk urticaria oftest rammer kvinder i alderen 20–40 år. Op mod 20% af befolkningen oplever nældefeber på et tidspunkt i livet.',
            },
            {
              question: 'Hvordan behandles nældefeber?',
              answer:
                'Ikke-sederende antihistaminer (cetirizin, loratadin) er primær behandling og virker bedst ved regelmæssig dosering. Identificer og undgå din personlige udløser – en symptom-dagbog og allergitest kan hjælpe. Søg straks hjælp ved hævelse i svælget eller vejrtrækningsbesvær, da det kan være tegn på anafylaksi. Kronisk urticaria kan behandles med biologiske lægemidler som omalizumab.',
            },
          ],
          en: [
            {
              question: 'What is urticaria (hives)?',
              answer:
                'Urticaria (hives) is a common skin condition causing raised, itchy red wheals that appear suddenly and can disappear within hours. It is not contagious and is caused by histamine release from mast cells in the skin.',
            },
            {
              question: 'What does urticaria look like?',
              answer:
                'Urticaria appears as raised, red wheals with pale centres that can range from a few millimetres to several centimetres in size. The wheals are intensely itchy, can appear anywhere on the body, and may merge into larger areas. An individual wheal typically resolves within 1–24 hours without leaving a mark.',
            },
            {
              question: 'What causes urticaria?',
              answer:
                'Urticaria occurs when mast cells release histamine in the skin. Triggers include allergens (nuts, shellfish, penicillin, insect stings), physical factors (pressure, cold, heat, sunlight, exercise) and internal factors (infections, stress, autoimmune conditions). In up to 50% of chronic cases no cause can be identified (idiopathic).',
            },
            {
              question: 'Who gets urticaria?',
              answer:
                'Anyone can get urticaria, but it is more common in adults. Acute urticaria is most frequent in children and young adults, while chronic urticaria most often affects women aged 20–40. Up to 20% of people experience hives at some point in their lives.',
            },
            {
              question: 'How is urticaria treated?',
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
              question: 'Hvad forårsager HSV-udbrud?',
              answer:
                'HSV smitter gennem direkte kontakt med inficeret hud eller kropsvæsker og etablerer sig latent i sensoriske nerveceller. Udbrud kan udløses af stress, svækket immunsystem, soleksponering, hormonelle ændringer eller febersygdomme. Virus kan desuden smitte asymptomatisk (uden synlige blærer).',
            },
            {
              question: 'Hvem får HSV?',
              answer:
                'HSV er ekstremt udbredt. WHO estimerer, at ca. 67% af verdens befolkning under 50 år bærer HSV-1, mens ca. 11% bærer HSV-2. Mange smittede oplever aldrig tydelige symptomer og ved ikke, at de er inficerede.',
            },
            {
              question: 'Hvordan behandles HSV?',
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
              question: 'What causes HSV outbreaks?',
              answer:
                'HSV spreads through direct contact with infected skin or bodily fluids and establishes itself latently in sensory nerve cells. Outbreaks can be triggered by stress, a weakened immune system, sun exposure, hormonal changes or febrile illness. The virus can also be transmitted asymptomatically (without visible blisters).',
            },
            {
              question: 'Who gets HSV?',
              answer:
                'HSV is extremely widespread. The WHO estimates that approximately 67% of the global population under 50 carries HSV-1, while approximately 11% carry HSV-2. Many infected individuals never experience noticeable symptoms and do not know they are infected.',
            },
            {
              question: 'How is HSV treated?',
              answer:
                "There is no cure for HSV, but antiviral medications such as aciclovir, valaciclovir or famciclovir can shorten and reduce the severity of outbreaks. For frequent outbreaks, daily suppressive therapy is recommended. Open communication with sexual partners and condom use reduces transmission risk. Seek professional help for frequent outbreaks or during pregnancy.",
            },
          ],
        },
      },
      {
        slug: 'genital-warts',
        nameDa: 'Kønsvorter (HPV)',
        nameEn: 'Genital Warts (HPV)',
        icon: '🧫',
        questions: {
          da: [
            {
              question: 'Hvad er kønsvorter?',
              answer:
                'Kønsvorter, også kaldet kondylomer, er små, kødfulde udvækster eller hudfarvede knopper på eller omkring kønsorganerne og anus, sjældnere i mund eller svælg. De skyldes humant papillomavirus (HPV) og er en af de mest almindelige seksuelt overførte infektioner.',
            },
            {
              question: 'Hvordan ser kønsvorter ud?',
              answer:
                'Kønsvorter ligner ofte små, flade, hudfarvede knopper eller små, blomkålsagtige udvækster. De kan sidde enkeltvis eller i klynger. Hos kvinder ses de typisk på skamlæberne, i skeden, på livmoderhalsen eller omkring anus; hos mænd på penis, pungen eller omkring anus. De gør sjældent ondt, men kan klø eller bløde.',
            },
            {
              question: 'Hvordan smitter HPV?',
              answer:
                'HPV smitter ved vaginalt, oralt eller analt samleje og ved tæt hud-mod-hud-kontakt i kønsområdet. Virus kan overføres, selv når den smittede ikke har synlige vorter. Kondom reducerer risikoen, men fjerner den ikke, da vorterne kan sidde på områder, kondomet ikke dækker. Der går uger til måneder fra smitte til synlige vorter.',
            },
            {
              question: 'Hvem får kønsvorter?',
              answer:
                'HPV-type 6 og 11 står for ca. 90% af alle tilfælde af kønsvorter og regnes som lavrisikotyper, fordi de sjældent giver kræft. Alle seksuelt aktive kan smittes, og forekomsten er højest hos unge voksne. Rygere og personer med svækket immunforsvar får oftere vorter, og de vender oftere tilbage.',
            },
            {
              question: 'Hvordan behandles kønsvorter, og kan de forebygges?',
              answer:
                'Kønsvorter forsvinder ofte af sig selv, men mange vælger behandling: cremer til hjemmebrug, frysning (kryoterapi), kirurgisk fjernelse, laser eller elektrokirurgi. Valget afhænger af vorternes størrelse, antal og placering. Den bedste forebyggelse er HPV-vaccination (Gardasil 9), som beskytter mod 9 HPV-typer, og konsekvent kondombrug reducerer risikoen yderligere.',
            },
          ],
          en: [
            {
              question: 'What are genital warts?',
              answer:
                'Genital warts, also called condylomata acuminata, are small, fleshy growths or skin-coloured bumps on or around the genitals and anus, and more rarely in the mouth or throat. They are caused by the human papillomavirus (HPV) and are one of the most common sexually transmitted infections.',
            },
            {
              question: 'What do genital warts look like?',
              answer:
                'Genital warts often resemble small, flat, skin-coloured bumps or small, cauliflower-like growths. They can be single or form clusters. In women they are typically found on the labia, inside the vagina, on the cervix or around the anus; in men on the penis, scrotum or around the anus. They rarely hurt, but can itch or bleed.',
            },
            {
              question: 'How does HPV spread?',
              answer:
                'HPV spreads through vaginal, oral or anal intercourse and through close skin-to-skin contact in the genital area. The virus can be passed on even when the infected person has no visible warts. Condoms reduce the risk but do not remove it, as warts can sit on areas a condom does not cover. It takes weeks to months from infection to visible warts.',
            },
            {
              question: 'Who gets genital warts?',
              answer:
                'HPV types 6 and 11 cause approximately 90% of all genital wart cases and are classed as low-risk because they rarely cause cancer. Anyone who is sexually active can be infected, and rates are highest in young adults. Smokers and people with a weakened immune system develop warts more often, and the warts recur more often.',
            },
            {
              question: 'How are genital warts treated, and can they be prevented?',
              answer:
                'Genital warts often clear on their own, but many people choose treatment: creams applied at home, freezing (cryotherapy), surgical removal, laser or electrosurgery. The choice depends on the size, number and location of the warts. The best prevention is HPV vaccination (Gardasil 9), which protects against 9 HPV types, and consistent condom use reduces the risk further.',
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
                'Helvedesild starter typisk med brændende smerte eller prikken på ét sted (prodromalfasen), efterfulgt af et rødt udslæt i et bånd langs nervebanen – oftest på kroppen, men muligvis ansigt eller øjne. Inden for dage opstår væskefyldte blærer, der brister og danner gule skorper. Heling tager normalt 2–4 uger.',
            },
            {
              question: 'Hvad forårsager helvedesild?',
              answer:
                'Helvedesild opstår, når immunforsvaret ikke er stærkt nok til at holde varicella-zoster-virus inaktivt. De vigtigste faktorer er alder (risikoen stiger markant efter 50 år), svækket immunforsvar (fx ved HIV, kræft eller immunsupprimerende medicin) og alvorlig stress, der midlertidigt svækker immunforsvaret.',
            },
            {
              question: 'Hvem får helvedesild?',
              answer:
                'Alle, der har haft skoldkopper, kan udvikle helvedesild. Cirka én ud af tre mennesker vil rammes i løbet af livet. Risikoen stiger kraftigt efter 50 år, og ældre over 80 har 8–10 gange højere risiko end 20-årige. Immunsvækkede er særligt sårbare og kan opleve mere alvorlige udbrud.',
            },
            {
              question: 'Hvordan behandles helvedesild?',
              answer:
                'Søg lægehjælp samme dag – vent ikke på et onlinesvar inden for 48 timer, hvis du har mistanke om helvedesild. Antivirale midler som valaciclovir eller aciclovir er mest effektive inden for 72 timer fra udslættets start. Vaccination (Shingrix) anbefales til alle over 50 og reducerer risikoen med op til 90%. Postherpetisk neuralgi (PHN) – vedvarende smerter efter heling – er den hyppigste komplikation; tidlig behandling er den bedste forebyggelse.',
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
              question: 'What causes shingles?',
              answer:
                'Shingles occurs when the immune system is no longer strong enough to keep the varicella-zoster virus dormant. The key factors are age (risk increases markedly after 50), a weakened immune system (e.g. from HIV, cancer or immunosuppressive medication) and severe stress that temporarily impairs immune function.',
            },
            {
              question: 'Who gets shingles?',
              answer:
                'Anyone who has had chickenpox can develop shingles. Approximately one in three people will be affected during their lifetime. Risk increases sharply after age 50, and adults over 80 have 8–10 times the risk of those in their 20s. Immunocompromised individuals are particularly vulnerable and may experience more severe outbreaks.',
            },
            {
              question: 'How is shingles treated?',
              answer:
                'Seek medical care the same day — do not wait for a 48-hour online reply if you suspect shingles. Antiviral medications such as valaciclovir or aciclovir are most effective within 72 hours of rash onset. Vaccination (Shingrix) is recommended for all adults over 50 and reduces the risk by up to 90%. Post-herpetic neuralgia (PHN) — persistent pain after healing — is the most common complication; early treatment is the best prevention.',
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
                'Ringorm er ikke en orm, men en svampeinfektion forårsaget af dermatofytter — svampe, der ernærer sig af keratin i hud, hår og negle. Der er flere typer: tinea corporis (kroppen), tinea cruris (lysken), tinea pedis (fodsvamp), tinea capitis (hovedbunden) og tinea unguium (negle). Den er smitsom og kan spredes via direkte kontakt, dyr og forurenede genstande.',
            },
            {
              question: 'Hvordan ser ringorm ud?',
              answer:
                'Det typiske tegn på ringorm på kroppen er en cirkulær, rød, kløende plet med hævet kant og ofte klart center — deraf navnet. Fodsvamp giver kløe, skæl og brændende fornemmelse mellem tæerne. Ringorm på hovedbunden forårsager skæl og hårtab. Negleinfektion giver misfarvede, tykke og smuldrende negle.',
            },
            {
              question: 'Hvad forårsager tinea-infektioner?',
              answer:
                'Dermatofytter trives i varme, fugtige miljøer. Svedtendens, stramtsiddende tøj, deling af personlige genstande som håndklæder og sko, kontakt med inficerede dyr og ophold i omklædningsrum og fællesbrusere øger alle risikoen. Et svækket immunforsvar gør dig mere sårbar over for svære infektioner.',
            },
            {
              question: 'Hvem får tinea-infektioner?',
              answer:
                'Alle kan få ringorm, men børn er særligt tilbøjelige til tinea capitis. Sportsfolk og aktive mennesker er i øget risiko for fodsvamp og lyskesvamp. Beboere i tætte miljøer som kollegier og plejehjem, dyreejere og immunsvækkede er også mere sårbare.',
            },
            {
              question: 'Hvordan behandles ringorm?',
              answer:
                'Topiske svampedræbende midler (clotrimazol, miconazol, terbinafin) er effektive mod mild tinea corporis, tinea cruris og fodsvamp — behandl mindst 2 uger efter symptomernes forsvinden. Tinea capitis og negleinfektion kræver altid receptpligtig oral behandling. Behandl inficerede kæledyr, og undgå deling af håndklæder og sko for at forebygge gensmitte.',
            },
          ],
          en: [
            {
              question: 'What is ringworm (tinea)?',
              answer:
                'Ringworm is not a worm, but a fungal infection caused by dermatophytes — fungi that feed on keratin in skin, hair and nails. There are several types: tinea corporis (body), tinea cruris (groin), tinea pedis (athlete\'s foot), tinea capitis (scalp) and tinea unguium (nails). It is contagious and can spread through direct contact, animals and contaminated objects.',
            },
            {
              question: 'What does ringworm look like?',
              answer:
                'The classic sign of body ringworm is a circular, red, itchy patch with a raised border and often a clear centre — hence the name. Athlete\'s foot causes itching, scaling and burning between the toes. Scalp ringworm causes scaling and hair loss. Nail infection causes discoloured, thickened and crumbly nails.',
            },
            {
              question: 'What causes tinea infections?',
              answer:
                'Dermatophytes thrive in warm, moist environments. Heavy sweating, tight-fitting clothing, sharing personal items such as towels and shoes, contact with infected animals, and time spent in locker rooms and shared showers all increase the risk. A weakened immune system makes you more vulnerable to severe infections.',
            },
            {
              question: 'Who gets tinea infections?',
              answer:
                'Anyone can get ringworm, but children are particularly prone to tinea capitis (scalp ringworm). Athletes and active people have an increased risk of athlete\'s foot and tinea cruris (groin ringworm). People living in close-quarters settings such as dormitories and nursing homes, pet owners, and immunocompromised individuals are also more vulnerable.',
            },
            {
              question: 'How is ringworm treated?',
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
              question: 'Hvad forårsager vitiligo?',
              answer:
                'Vitiligo skyldes en autoimmun reaktion, hvor T-lymfocytter angriber melanocytterne. Genetisk disposition spiller en vigtig rolle – 20–30% af dem med vitiligo har et familiemedlem med samme tilstand. Udløsende faktorer kan inkludere alvorlig stress, hudskader (Köbner-fænomenet) og solskoldninger. Vitiligo er desuden associeret med øget risiko for andre autoimmune sygdomme som skjoldbruskkirtelsygdom og alopecia areata.',
            },
            {
              question: 'Hvem får vitiligo?',
              answer:
                'Vitiligo rammer ca. 1–2% af verdens befolkning uanset race, etnicitet, køn eller alder. Halvdelen af alle tilfælde debuterer før 20-årsalderen. Risikoen er forhøjet ved familiehistorie med vitiligo eller andre autoimmune sygdomme. Tilstanden er ofte mere synlig – og psykisk belastende – hos personer med mørkere hudtone.',
            },
            {
              question: 'Hvordan behandles vitiligo?',
              answer:
                'Der er ingen kur mod vitiligo, men behandlinger som topiske kortikosteroider, calcineurinhæmmere, smalspektret UVB-lysbehandling og nye JAK-hæmmere (ruxolitinib) kan bremse spredningen og hjælpe med repigmentering. Brug altid solcreme SPF 30+ på afpigmenterede områder, da de brænder let. Søg en hudlæge tidligt – jo tidligere behandling startes, jo bedre er udsigterne.',
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
              question: 'What causes vitiligo?',
              answer:
                'Vitiligo is caused by an autoimmune reaction in which T-lymphocytes attack melanocytes. Genetic predisposition plays an important role — 20–30% of people with vitiligo have a family member with the same condition. Triggering factors may include severe stress, skin injury (Köbner phenomenon) and sunburn. Vitiligo is also associated with an increased risk of other autoimmune diseases such as thyroid disease and alopecia areata.',
            },
            {
              question: 'Who gets vitiligo?',
              answer:
                'Vitiligo affects approximately 1–2% of the world\'s population regardless of race, ethnicity, gender or age. Half of all cases begin before the age of 20. The risk is elevated with a family history of vitiligo or other autoimmune diseases. The condition is often more visible — and psychologically distressing — in people with darker skin tones.',
            },
            {
              question: 'How is vitiligo treated?',
              answer:
                'There is no cure for vitiligo, but treatments such as topical corticosteroids, calcineurin inhibitors, narrowband UVB light therapy and new JAK inhibitors (ruxolitinib) can slow the spread and help with repigmentation. Always use sunscreen SPF 30+ on depigmented areas as they burn easily. Seek a dermatologist early — the sooner treatment begins, the better the outlook.',
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
                'Kontaktdermatitis er en betændelsestilstand i huden, der opstår, når huden reagerer på et stof, den har været i kontakt med. Der findes to hovedtyper: irritativ kontaktdermatitis forårsaget af direkte skade på hudens barriere, og allergisk kontaktdermatitis, der skyldes en immunreaktion mod et specifikt allergen. Tilstanden er ikke smitsom.',
            },
            {
              question: 'Hvordan ser kontaktdermatitis ud?',
              answer:
                'Typiske tegn inkluderer rødme og hævelse på de berørte områder, intens kløe og brændende fornemmelser, små blærer eller knopper, og i kroniske tilfælde tør, revnet og skællende hud. Udslættet optræder typisk på hænder, håndled, arme og ansigt.',
            },
            {
              question: 'Hvad forårsager kontaktdermatitis?',
              answer:
                'Irritativ kontaktdermatitis opstår, når et stof direkte skader hudens barriere — eksempler inkluderer sæber, rengøringsmidler og opløsningsmidler. Allergisk kontaktdermatitis involverer en forsinket immunreaktion mod et allergen såsom nikkel, parfumer eller latex. Begge typer kan udløses af stress og underliggende hudtilstande.',
            },
            {
              question: 'Hvem får kontaktdermatitis?',
              answer:
                'Alle kan udvikle kontaktdermatitis. Personer med atopisk eksem er mere modtagelige pga. en svækket hudbarriere. Erhverv med høj eksponering for kemikalier — frisører, laboranter, mekanikere og sundhedspersonale — har forhøjet risiko. Nikkelallergi er en af de mest udbredte kontaktallergier globalt.',
            },
            {
              question: 'Hvordan behandles kontaktdermatitis?',
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
              question: 'What causes contact dermatitis?',
              answer:
                'Irritant contact dermatitis occurs when a substance directly damages the skin barrier — examples include soaps, detergents and solvents. Allergic contact dermatitis involves a delayed immune reaction against an allergen such as nickel, fragrances or latex. Both types can be triggered by stress and underlying skin conditions.',
            },
            {
              question: 'Who gets contact dermatitis?',
              answer:
                'Anyone can develop contact dermatitis. People with atopic eczema are more susceptible due to a weakened skin barrier. Occupations with high exposure to chemicals — hairdressers, laboratory workers, mechanics and healthcare workers — have elevated risk. Nickel allergy is one of the most common contact allergies globally.',
            },
            {
              question: 'How is contact dermatitis treated?',
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
                'Lichen planus viser sig typisk som lilla, fladtoppede knopper med fine, hvide linjer på overfladen (Wickham-striber). Knopperne kan klø intenst og forekomme overalt på kroppen, men ses oftest på håndled, ankler, lænd og mundslimhinden.',
            },
            {
              question: 'Hvad forårsager lichen planus?',
              answer:
                'Den præcise årsag er ukendt, men autoimmune reaktioner, visse lægemidler (blodtryksmedicin, NSAID), hepatitis C-infektion og stress menes alle at spille en rolle i at udløse tilstanden.',
            },
            {
              question: 'Hvem får lichen planus?',
              answer:
                'Lichen planus kan ramme alle i alle aldre, men forekommer hyppigst hos voksne mellem 30 og 60 år og er mere almindeligt hos kvinder. Personer med autoimmune sygdomme har en øget risiko.',
            },
            {
              question: 'Hvordan behandles lichen planus?',
              answer:
                'Der findes ingen kur, men topiske kortikosteroider, calcineurinhæmmere, lysbehandling og i svære tilfælde orale retinoider kan lindre symptomerne. Stresshåndtering er en vigtig del af behandlingen, da stress kan forværre udbrud.',
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
              question: 'What causes lichen planus?',
              answer:
                'The exact cause is unknown, but autoimmune reactions, certain medications (blood pressure drugs, NSAIDs), hepatitis C infection and stress are all thought to play a role in triggering the condition.',
            },
            {
              question: 'Who gets lichen planus?',
              answer:
                'Lichen planus can affect anyone at any age, but most commonly occurs in adults between 30 and 60 years old and is more prevalent in women. People with autoimmune conditions have an elevated risk.',
            },
            {
              question: 'How is lichen planus treated?',
              answer:
                "There is no cure, but topical corticosteroids, calcineurin inhibitors, light therapy and in severe cases oral retinoids can relieve symptoms. Stress management is an important part of treatment, as stress can worsen flare-ups.",
            },
          ],
        },
      },
      {
        slug: 'alopecia-areata',
        nameDa: 'Alopecia Areata',
        nameEn: 'Alopecia Areata',
        icon: '💇',
        questions: {
          da: [
            {
              question: 'Hvad er alopecia areata?',
              answer:
                'Alopecia areata er en autoimmun hudlidelse, hvor immunsystemets T-celler fejlagtigt angriber hårsækkene, hvilket fører til pludseligt hårtab i veldefinerede runde eller ovale pletter. Tilstanden er ikke smitsom.',
            },
            {
              question: 'Hvordan ser alopecia areata ud?',
              answer:
                'Alopecia areata viser sig typisk som veldefinerede, runde eller ovale pletter uden hår på hovedbunden. Pletterne er som regel glatte og skælløse. Hårtabet kan også påvirke skæg, øjenbryn, øjenvipper og andre kropsområder.',
            },
            {
              question: 'Hvad forårsager alopecia areata?',
              answer:
                'Alopecia areata skyldes en autoimmun reaktion, hvor T-celler fejlagtigt angriber og ødelægger hårsækkene. Genetik, stress og visse andre autoimmune sygdomme kan bidrage til at udløse tilstanden.',
            },
            {
              question: 'Hvem får alopecia areata?',
              answer:
                'Alle kan udvikle alopecia areata, men tilstanden debuterer ofte i barndommen eller tidlig voksenalder. Ca. 2% af befolkningen rammes i løbet af livet, og der er ofte en familiehistorie med alopecia eller andre autoimmune sygdomme.',
            },
            {
              question: 'Kan alopecia areata behandles?',
              answer:
                'Ja, selvom der ikke er en enkelt kur, findes der effektive behandlinger. Disse inkluderer topiske kortikosteroider, intralesionelle steroidinjektioner, immunterapi og nyere JAK-hæmmere som baricitinib og ritlecitinib. Behandlingen vælges ud fra sværhedsgrad og individuelle faktorer.',
            },
          ],
          en: [
            {
              question: 'What is alopecia areata?',
              answer:
                'Alopecia areata is an autoimmune skin condition in which the immune system\'s T-cells mistakenly attack the hair follicles, leading to sudden hair loss in well-defined round or oval patches. The condition is not contagious.',
            },
            {
              question: 'What does alopecia areata look like?',
              answer:
                'Alopecia areata typically appears as well-defined, round or oval patches of hair loss on the scalp. The patches are usually smooth and without scaling. Hair loss can also affect the beard, eyebrows, eyelashes and other body areas.',
            },
            {
              question: 'What causes alopecia areata?',
              answer:
                'Alopecia areata is caused by an autoimmune reaction in which T-cells mistakenly attack and destroy hair follicles. Genetics, stress and certain other autoimmune diseases can contribute to triggering the condition.',
            },
            {
              question: 'Who gets alopecia areata?',
              answer:
                'Anyone can develop alopecia areata, but the condition often begins in childhood or early adulthood. Approximately 2% of the population is affected at some point in their lives, and there is frequently a family history of alopecia or other autoimmune diseases.',
            },
            {
              question: 'Can alopecia areata be treated?',
              answer:
                'Yes, although there is no single cure, effective treatments exist. These include topical corticosteroids, intralesional steroid injections, immunotherapy and newer JAK inhibitors such as baricitinib and ritlecitinib. Treatment is chosen based on severity and individual factors.',
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
              question: 'Hvad er psoriasis?',
              answer:
                'Psoriasis er en kronisk hudlidelse, der forårsager røde, skællende pletter på forskellige områder af din krop. Det er vigtigt at huske, at det ikke er smitsomt, så du kan ikke sprede det til andre.',
            },
            {
              question: 'Hvordan ser psoriasis ud?',
              answer:
                'Psoriasis viser sig typisk som tykke, hævede pletter med sølvhvide skæl. Disse pletter kan være kløende og ubehagelige, og de påvirker ofte albuer, knæ, hovedbund og lænd. Dog kan de optræde overalt på din krop.',
            },
            {
              question: 'Hvad forårsager psoriasis?',
              answer:
                'Den præcise årsag til psoriasis er ukendt, men det er forbundet med et problem med immunsystemet, der fremskynder produktionen af hudceller. Dette får cellerne til at hobe sig op hurtigere, end de kan skalle af, hvilket fører til den synlige skældannelse. Genetik og visse udløsere som stress, infektioner eller visse lægemidler kan også spille en rolle.',
            },
            {
              question: 'Hvem får psoriasis?',
              answer:
                'Psoriasis kan påvirke alle, uanset alder eller køn. Selvom det er mere almindeligt hos voksne, kan det også forekomme hos børn. Du er mere tilbøjelig til at udvikle det, hvis du har en familiehistorie med tilstanden.',
            },
            {
              question: 'Hvordan behandles psoriasis?',
              answer:
                'At håndtere psoriasis er afgørende – der er ingen kur, men forskellige behandlinger som cremer, salver, lysbehandling eller medicin kan hjælpe med at kontrollere symptomerne og forbedre livskvaliteten. Udløsere spiller ofte en rolle, så identificer og undgå personlige udløsere som stress, visse fødevarer eller skrappe sæber. Tøv ikke med at drøfte det med din hudlæge, der kan tilpasse en behandlingsplan til dine behov.',
            },
          ],
          en: [
            {
              question: 'What is psoriasis?',
              answer:
                "Psoriasis is a chronic skin condition that causes red, scaly patches on various areas of the body. It is important to remember that it is not contagious, so you cannot pass it on to anyone else.",
            },
            {
              question: 'What does psoriasis look like?',
              answer:
                "Psoriasis typically presents as thick, raised patches with silvery-white scales. These patches can be itchy and uncomfortable and most commonly affect the elbows, knees, scalp and lower back, though they can appear anywhere on your body.",
            },
            {
              question: 'What causes psoriasis?',
              answer:
                "The exact cause of psoriasis is unknown, but it is linked to an overactive immune response that speeds up skin cell production. This causes cells to build up faster than they can shed, leading to the visible scaling. Genetics and certain triggers such as stress, infections or certain medications can also play a role.",
            },
            {
              question: 'Who gets psoriasis?',
              answer:
                "Psoriasis can affect anyone, regardless of age or gender. While it is more common in adults, it can also occur in children. You are more likely to develop it if you have a family history of the condition.",
            },
            {
              question: 'How is psoriasis treated?',
              answer:
                "Managing psoriasis is key — there is no cure, but various treatments including creams, ointments, light therapy and medications can help control symptoms and improve quality of life. Triggers often play a role, so identify and avoid personal triggers such as stress, certain foods or harsh soaps. Do not hesitate to discuss it with your dermatologist, who can tailor a treatment plan to your needs.",
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
                'Skab er en smitsom hudinfektion forårsaget af miden Sarcoptes scabiei, der graver sig ind i hudens yderste lag og forårsager intens kløe og irritation. Det smitter via tæt hud-til-hud kontakt eller i sjældne tilfælde via delte genstande som sengetøj eller håndklæder.',
            },
            {
              question: 'Hvordan ser skab ud?',
              answer:
                'Skab viser sig typisk som intens kløe (især om natten), små røde knopper på håndled, fingre, albuer, armhuler og kønsorganer, samt tynde, lyse gravegange i huden, der markerer midernes tunneler.',
            },
            {
              question: 'Hvordan smitter skab?',
              answer:
                'Skab smitter primært gennem direkte, udvidet hud-til-hud kontakt med en smittet person. Kort håndtryk giver sjældent smitte. Miden kan også overføres via delte genstande, men overlever kun 2–3 dage uden for menneskets hud.',
            },
            {
              question: 'Hvem får skab?',
              answer:
                'Alle kan få skab uanset alder, køn eller hygiejnestandard. Det er mere udbredt i tætte boforhold, ved seksuel kontakt, i institutionelle miljøer (plejehjem, fængsler) og hos personer med svækket immunsystem.',
            },
            {
              question: 'Hvordan behandles skab?',
              answer:
                'Skab behandles med midler mod skab (permethrin 5%) eller orale midler (ivermectin) ordineret af en læge. Alle i tæt kontakt skal behandles samtidig – også uden symptomer. Tøj og sengetøj vaskes ved mindst 50°C, og hjemmet støvsuges grundigt.',
            },
          ],
          en: [
            {
              question: 'What is scabies?',
              answer:
                'Scabies is a contagious skin infestation caused by the mite Sarcoptes scabiei, which burrows into the outermost layer of the skin causing intense itching and irritation. It spreads through close skin-to-skin contact or in rare cases via shared objects such as bedding or towels.',
            },
            {
              question: 'What does scabies look like?',
              answer:
                'Scabies typically presents as intense itching (especially at night), small red bumps on the wrists, fingers, elbows, armpits and genitals, and thin, light-coloured burrow lines in the skin that mark the mites\' tunnels.',
            },
            {
              question: 'How does scabies spread?',
              answer:
                'Scabies spreads primarily through direct, extended skin-to-skin contact with an infected person. Brief contact such as a handshake rarely transmits it. The mite can also be transferred via shared objects, but only survives 2–3 days outside human skin.',
            },
            {
              question: 'Who gets scabies?',
              answer:
                'Anyone can get scabies regardless of age, gender or hygiene standard. It is more common in close living conditions, through sexual contact, in institutional settings (nursing homes, prisons) and in people with weakened immune systems.',
            },
            {
              question: 'How is scabies treated?',
              answer:
                'Scabies is treated with topical scabicides (permethrin 5%) or oral medication (ivermectin) prescribed by a doctor. All close contacts must be treated simultaneously — even without symptoms. Clothing and bedding are washed at 50°C or above, and the home is thoroughly vacuumed.',
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
              question: 'Hvordan undgår jeg, at molluscum contagiosum spreder sig?',
              answer:
                'Undgå at pille eller skrabe knopperne, vask dine hænder regelmæssigt, undgå at dele personlige genstande som håndklæder, og rengør fælles legetøj og overflader. Dæk knopperne til ved tæt kontakt med andre for at reducere smitterisikoen.',
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
              question: 'How do I stop molluscum contagiosum spreading?',
              answer:
                "Avoid picking or scratching the bumps, wash your hands regularly, avoid sharing personal items such as towels, and clean shared toys and surfaces. Cover the bumps during close contact with others to reduce the risk of transmission.",
            },
          ],
        },
      },
      {
        slug: 'impetigo',
        nameDa: 'Impetigo',
        nameEn: 'Impetigo',
        icon: '🦠',
        questions: {
          da: [
            {
              question: 'Hvad er impetigo?',
              answer:
                'Impetigo er en bakteriel hudinfektion, der påvirker hudens yderste lag. Der findes to hovedtyper: ikke-bulløs impetigo med honningfarvede skorper og bulløs impetigo med større væskefyldte blærer. Begge typer er smitsomme og kan spredes via direkte kontakt.',
            },
            {
              question: 'Hvordan ser impetigo ud?',
              answer:
                'Impetigo viser sig typisk som røde, irriterede pletter omkring munden og næsen med små blærer, der brister og efterlader honningfarvede eller gule skorper. Ved bulløs impetigo er blærerne større og ses ofte på kroppen og armene.',
            },
            {
              question: 'Hvad forårsager impetigo?',
              answer:
                'Impetigo opstår, når Staphylococcus aureus eller Streptococcus pyogenes trænger ind i huden gennem snit, skrammer, insektbid eller revner. Sygdommen smitter via direkte kontakt med en inficeret person eller via forurenede genstande som håndklæder og legetøj.',
            },
            {
              question: 'Hvem får impetigo?',
              answer:
                'Impetigo rammer hyppigst børn mellem 2 og 6 år, særligt i tætte miljøer som børnehaver. Voksne kan også rammes, især personer med eksem, dermatitis eller et svækket immunsystem.',
            },
            {
              question: 'Hvordan behandles impetigo?',
              answer:
                'Impetigo behandles normalt med topiske antibiotiske cremer (f.eks. fusidinsyre eller mupirocin) eller orale antibiotika ved mere udbredt infektion. God hygiejne, at holde sår rene og dækkede, og at undgå at dele håndklæder er afgørende for at forebygge spredning.',
            },
          ],
          en: [
            {
              question: 'What is impetigo?',
              answer:
                'Impetigo is a bacterial skin infection affecting the outermost layers of the skin. There are two main types: non-bullous impetigo with honey-coloured crusts and bullous impetigo with larger fluid-filled blisters. Both types are contagious and can spread through direct contact.',
            },
            {
              question: 'What does impetigo look like?',
              answer:
                'Impetigo typically appears as red, irritated patches around the mouth and nose with small blisters that burst leaving honey-coloured or yellow crusts. In bullous impetigo the blisters are larger and most commonly seen on the trunk and arms.',
            },
            {
              question: 'What causes impetigo?',
              answer:
                'Impetigo occurs when Staphylococcus aureus or Streptococcus pyogenes enter the skin through cuts, scrapes, insect bites or cracks. The disease spreads via direct contact with an infected person or via contaminated objects such as towels and toys.',
            },
            {
              question: 'Who gets impetigo?',
              answer:
                'Impetigo most commonly affects children between 2 and 6 years, especially in close settings such as nurseries. Adults can also be affected, particularly people with eczema, dermatitis or a weakened immune system.',
            },
            {
              question: 'How is impetigo treated?',
              answer:
                'Impetigo is usually treated with topical antibiotic creams (e.g. fusidic acid or mupirocin) or oral antibiotics for more widespread infection. Good hygiene, keeping wounds clean and covered, and avoiding sharing towels are essential to prevent spread.',
            },
          ],
        },
      },
      {
        slug: 'cellulitis',
        nameDa: 'Cellulitis',
        nameEn: 'Cellulitis',
        icon: '🔴',
        questions: {
          da: [
            {
              question: 'Hvad er cellulitis?',
              answer:
                'Cellulitis er en akut bakteriel infektion i hudens dybere lag (dermis og subkutant væv), der forårsager rødme, hævelse, varme og smerter i det berørte område. Det kræver hurtig behandling med antibiotika for at forebygge alvorlige komplikationer. Vent ikke på et onlinesvar inden for 48 timer — kontakt din egen læge eller lægevagten samme dag.',
            },
            {
              question: 'Hvordan ser cellulitis ud?',
              answer:
                'Cellulitis viser sig typisk som et afgrænset rødt, hævet og varmt område på huden — ofte på skinnebenet. Området føles smertefuldt, og huden kan se stram og skinnende ud. Ved mere alvorlig infektion kan der forekomme feber og kulderystelser.',
            },
            {
              question: 'Hvad forårsager cellulitis?',
              answer:
                'Cellulitis opstår, når bakterier (typisk streptokokker eller stafylokokker) trænger ind i huden gennem et brud i hudbarrieren — eksempelvis et snit, en skramme, et insektbid eller en revne. Kroniske hudtilstande, lymfødem og diabetes øger risikoen betydeligt.',
            },
            {
              question: 'Hvem får cellulitis?',
              answer:
                'Alle kan udvikle cellulitis, men børn, ældre, personer med diabetes og immunsvækkede er mest sårbare. Personer med kroniske hudtilstande som eksem har også forhøjet risiko.',
            },
            {
              question: 'Hvordan behandles cellulitis?',
              answer:
                'Cellulitis behandles med antibiotika — typisk 5–14 dage. Mild til moderat cellulitis behandles med tabletter, mens svær cellulitis kan kræve intravenøs antibiotika på hospital. Hvile, elevation af det berørte område og god sårpleje er vigtige dele af behandlingen.',
            },
          ],
          en: [
            {
              question: 'What is cellulitis?',
              answer:
                'Cellulitis is an acute bacterial infection of the deeper layers of the skin (dermis and subcutaneous tissue), causing redness, swelling, warmth and pain in the affected area. It requires prompt antibiotic treatment to prevent serious complications. Do not wait for a 48-hour online reply — contact your own doctor or the out-of-hours service the same day.',
            },
            {
              question: 'What does cellulitis look like?',
              answer:
                'Cellulitis typically appears as a well-defined red, swollen and warm area on the skin — most commonly on the shin. The area feels painful and the skin may appear tight and shiny. With more serious infection, fever and chills may occur.',
            },
            {
              question: 'What causes cellulitis?',
              answer:
                'Cellulitis occurs when bacteria (typically streptococci or staphylococci) enter the skin through a break in the skin barrier — such as a cut, scrape, insect bite or crack. Chronic skin conditions, lymphoedema and diabetes significantly increase the risk.',
            },
            {
              question: 'Who gets cellulitis?',
              answer:
                'Anyone can develop cellulitis, but children, older adults, people with diabetes and the immunocompromised are most vulnerable. People with chronic skin conditions such as eczema also have an elevated risk.',
            },
            {
              question: 'How is cellulitis treated?',
              answer:
                'Cellulitis is treated with antibiotics — typically for 5–14 days. Mild to moderate cellulitis is treated with tablets, while severe cellulitis may require intravenous antibiotics in hospital. Rest, elevation of the affected area and good wound care are important parts of treatment.',
            },
          ],
        },
      },
      {
        slug: 'melanoma',
        nameDa: 'Modermærkekræft (melanom)',
        nameEn: 'Melanoma',
        icon: '☀️',
        questions: {
          da: [
            {
              question: 'Hvad er modermærkekræft (melanom)?',
              answer:
                'Modermærkekræft (melanom) er en ondartet tumorsygdom, der opstår fra melanocytterne – de pigmentproducerende celler i huden. Den adskiller sig fra andre hudkræftformer ved at kunne sprede sig til andre dele af kroppen, hvis den ikke behandles rettidigt.',
            },
            {
              question: 'Hvordan genkender jeg modermærkekræft tidligt?',
              answer:
                'Brug ABCDE-reglen: Asymmetri (A), Begrænsning – uregelmæssig kant (B), Couleur – flere farver i samme mærke (C), Diameter over 6 mm (D) og Evolution – ændring i størrelse, form eller farve over tid (E). Kontakt en hudlæge, hvis du observerer ét eller flere af disse tegn.',
            },
            {
              question: 'Hvad er de vigtigste risikofaktorer for modermærkekræft?',
              answer:
                'Ultraviolet (UV) stråling fra solen er den primære årsag. Andre faktorer inkluderer lys hudfarve, familiehistorie med modermærkekræft, tilstedeværelsen af mange eller atypiske modermærker, og alvorlige solskoldninger – særligt i barndommen.',
            },
            {
              question: 'Hvem får modermærkekræft?',
              answer:
                'Alle kan rammes, men risikogruppen omfatter personer med lys hud og lyse øjne, personer med familiehistorie, personer med mange modermærker (>50), og personer, der har haft alvorlige solskoldninger i barndommen. Solarier øger også risikoen markant.',
            },
            {
              question: 'Hvordan behandles modermærkekræft?',
              answer:
                'Kirurgisk fjernelse er standardbehandling, og ved tidlig, tynd melanom er helbredelsesraten over 90%. Ved fremskreden sygdom kan immunterapi (checkpoint-hæmmere) og målrettet terapi markant forbedre overlevelsesraten. Forebyggelse – solcreme SPF 30+, undgå solarier, månedlig selvundersøgelse af huden – er den bedste strategi.',
            },
          ],
          en: [
            {
              question: 'What is melanoma?',
              answer:
                'Melanoma is a malignant tumour arising from melanocytes — the pigment-producing cells in the skin. It differs from other forms of skin cancer in its ability to spread to other parts of the body if left untreated.',
            },
            {
              question: 'How do I recognise melanoma early?',
              answer:
                'Use the ABCDE rule: Asymmetry (A), Border irregularity (B), Colour variation (C), Diameter greater than 6 mm (D), and Evolving — any change in size, shape or colour over time (E). Contact a dermatologist if you observe one or more of these signs.',
            },
            {
              question: 'What are the main risk factors for melanoma?',
              answer:
                'Ultraviolet (UV) radiation from the sun is the primary cause. Other factors include fair skin tone, a family history of melanoma, the presence of many or atypical moles, and severe sunburns — especially in childhood.',
            },
            {
              question: 'Who gets melanoma?',
              answer:
                'Anyone can be affected, but higher-risk groups include people with fair skin and light eyes, those with a family history, people with many moles (>50), and those who had severe sunburns in childhood. Tanning beds also significantly increase the risk.',
            },
            {
              question: 'How is melanoma treated?',
              answer:
                'Surgical removal is the standard treatment, and for early-stage, thin melanoma the cure rate is above 90%. For advanced disease, immunotherapy (checkpoint inhibitors) and targeted therapy can significantly improve survival rates. Prevention — SPF 30+ sunscreen, avoiding tanning beds, monthly self-examination — is the best strategy.',
            },
          ],
        },
      },
      {
        slug: 'basal-cell-carcinoma',
        nameDa: 'Basalcellekarcinom (BCC)',
        nameEn: 'Basal Cell Carcinoma (BCC)',
        icon: '☀️',
        questions: {
          da: [
            {
              question: 'Hvad er basalcellekarcinom (BCC)?',
              answer:
                'Basalcellekarcinom (BCC) er den hyppigste form for hudkræft. Den udvikler sig fra basalcellerne i den nederste del af overhuden og vokser langsomt. BCC spreder sig sjældent til andre dele af kroppen, men ubehandlet kan den vokse dybt og beskadige omkringliggende væv.',
            },
            {
              question: 'Hvordan ser basalcellekarcinom ud?',
              answer:
                'BCC viser sig oftest som en perleagtig eller voksagtig knude med en glat, gennemsigtig overflade, eller som en flad, lyserød eller rød plet med let forhøjede kanter. Det kan også ligne et lille ar eller have synlige blodkar i væksten.',
            },
            {
              question: 'Hvad forårsager basalcellekarcinom?',
              answer:
                'Den primære årsag er kronisk eksponering for ultraviolet (UV) stråling fra solen eller solarier. UV-stråling beskadiger DNA\'et i hudcellerne, og når skaden ophobes over tid, kan basalcellerne begynde at vokse ukontrollabelt. Risikofaktorer inkluderer lys hudfarve, høj alder, svækket immunsystem og familiehistorie med hudkræft.',
            },
            {
              question: 'Hvem får basalcellekarcinom?',
              answer:
                'BCC rammer hyppigst personer over 50 år med lys hud og lyse øjne. Kronisk soleksponering – særligt i barndommen – er den vigtigste risikofaktor. Organtransplantationsmodtagere og personer med HIV har 10–100 gange højere risiko end den generelle befolkning.',
            },
            {
              question: 'Hvordan behandles basalcellekarcinom?',
              answer:
                'BCC kan behandles meget effektivt: ved små, tidligt opdagede og velafgrænsede svulster er helbredelsesraten over 95%. Kirurgisk fjernelse er standardbehandling; Mohs-kirurgi (mikrografisk kirurgi) anvendes ofte i ansigtet for at bevare mest mulig sund hud. Forebyggelse med solcreme SPF 30+ året rundt og regelmæssig selvundersøgelse af huden er den bedste strategi.',
            },
          ],
          en: [
            {
              question: 'What is basal cell carcinoma (BCC)?',
              answer:
                'Basal cell carcinoma (BCC) is the most common form of skin cancer. It develops from basal cells in the lower part of the epidermis and grows slowly. BCC rarely spreads to other parts of the body, but left untreated it can grow deep and damage surrounding tissue.',
            },
            {
              question: 'What does basal cell carcinoma look like?',
              answer:
                'BCC most often appears as a pearly or waxy bump with a smooth, translucent surface, or as a flat, pink or red patch with slightly raised edges. It may also resemble a small scar or have visible blood vessels within the growth.',
            },
            {
              question: 'What causes basal cell carcinoma?',
              answer:
                "The primary cause is chronic exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV radiation damages the DNA in skin cells, and when this damage accumulates over time, basal cells can begin to grow uncontrollably. Risk factors include fair skin tone, older age, immune suppression and a family history of skin cancer.",
            },
            {
              question: 'Who gets basal cell carcinoma?',
              answer:
                'BCC most commonly affects people over 50 years old with fair skin and light eyes. Chronic sun exposure — especially during childhood — is the most important risk factor. Organ transplant recipients and people with HIV have a 10–100 times higher risk than the general population.',
            },
            {
              question: 'How is basal cell carcinoma treated?',
              answer:
                "BCC is highly treatable: for small, early-stage, well-defined tumours the cure rate is over 95%. Surgical removal is the standard treatment; Mohs surgery (microscopically controlled surgery) is often used on the face to preserve as much healthy skin as possible. Prevention — year-round SPF 30+ sunscreen, avoiding tanning beds and regular skin self-examination — is the best strategy.",
            },
          ],
        },
      },
      {
        slug: 'squamous-cell-carcinoma',
        nameDa: 'Pladecellekarcinom (SCC)',
        nameEn: 'Squamous Cell Carcinoma (SCC)',
        icon: '☀️',
        questions: {
          da: [
            {
              question: 'Hvad er pladecellekarcinom (SCC)?',
              answer:
                'Pladecellekarcinom (SCC) er den næsthyppigste form for hudkræft og udvikler sig fra pladecellerne i hudens yderste lag. Den vokser langsomt, men kan i sjældne tilfælde sprede sig til andre dele af kroppen, især hos immunsvækkede.',
            },
            {
              question: 'Hvordan ser pladecellekarcinom ud?',
              answer:
                'SCC viser sig typisk som en rød, skællende plet med ru overflade, en fast vortelignende knude, et sår, der ikke heler, eller en flad lyserød/rød plet med forhøjet kant. Den opstår oftest på soleksponerede områder som ansigt, ører, nakke og hænder.',
            },
            {
              question: 'Hvad forårsager pladecellekarcinom?',
              answer:
                "Den primære årsag er kronisk eksponering for ultraviolet (UV) stråling fra solen eller solarier. UV-stråling beskadiger DNA'et i pladecellerne over tid, og de kan begynde at vokse ukontrollabelt. Risikofaktorer inkluderer lys hudfarve, tidligere solskoldninger og svækket immunsystem.",
            },
            {
              question: 'Hvem får pladecellekarcinom?',
              answer:
                'SCC rammer hyppigst personer over 50 år med lys hud. Mænd har generelt højere forekomst end kvinder. Immunsvækkede, organtransplantationsmodtagere og personer med aktiniske keratoser har markant forhøjet risiko.',
            },
            {
              question: 'Hvordan behandles pladecellekarcinom?',
              answer:
                'Kirurgisk fjernelse er standardbehandling, og ved tidlig, lokaliseret SCC uden spredning er helbredelsesraten over 95%. Mohs-kirurgi anvendes ofte i ansigtet. Forebyggelse med SPF 30+ solcreme året rundt, undgå solarier og månedlig selvundersøgelse af huden er den bedste strategi.',
            },
          ],
          en: [
            {
              question: 'What is squamous cell carcinoma (SCC)?',
              answer:
                'Squamous cell carcinoma (SCC) is the second most common form of skin cancer, developing from the squamous cells in the outermost layer of the skin. It grows slowly but in rare cases can spread to other parts of the body, especially in the immunocompromised.',
            },
            {
              question: 'What does squamous cell carcinoma look like?',
              answer:
                'SCC typically appears as a red, scaly patch with a rough surface, a firm wart-like bump, a sore that does not heal, or a flat pink/red patch with a raised edge. It most commonly occurs on sun-exposed areas such as the face, ears, neck and hands.',
            },
            {
              question: 'What causes squamous cell carcinoma?',
              answer:
                "The primary cause is chronic exposure to ultraviolet (UV) radiation from the sun or tanning beds. UV radiation damages the DNA in squamous cells over time, and they can begin to grow uncontrollably. Risk factors include fair skin tone, previous sunburns and a weakened immune system.",
            },
            {
              question: 'Who gets squamous cell carcinoma?',
              answer:
                'SCC most commonly affects people over 50 with fair skin. Men generally have a higher incidence than women. The immunocompromised, organ transplant recipients and people with actinic keratoses have a significantly elevated risk.',
            },
            {
              question: 'How is squamous cell carcinoma treated?',
              answer:
                "Surgical removal is the standard treatment, and for early-stage, localised SCC that has not spread the cure rate is over 95%. Mohs surgery is often used on the face. Prevention — year-round SPF 30+ sunscreen, avoiding tanning beds and monthly skin self-examination — is the best strategy.",
            },
          ],
        },
      },
      {
        slug: 'regular-mole',
        nameDa: 'Almindeligt Modermærke',
        nameEn: 'Regular Mole',
        icon: '⚫',
        questions: {
          da: [
            {
              question: 'Hvad er et almindeligt modermærke?',
              answer:
                'Modermærker, også kaldet nævi, er godartede hudvækster, der opstår, når pigmentproducerende celler (melanocytter) i huden vokser i klynger. De er normalt ufarlige og giver ikke fysisk ubehag.',
            },
            {
              question: 'Hvordan ser et modermærke ud?',
              answer:
                'Modermærker er typisk små, runde eller ovale pletter på huden. De kan være flade eller hævede, og farven varierer fra lyserød til brun eller sort. De fleste modermærker er mindre end 6 millimeter i diameter.',
            },
            {
              question: 'Hvem får modermærker?',
              answer:
                'Næsten alle har modermærker. De fleste udvikler dem i løbet af barndommen og den tidlige voksenalder. En voksen har i gennemsnit mellem 10 og 40 modermærker.',
            },
            {
              question: 'Hvornår skal jeg være bekymret for et modermærke?',
              answer:
                'De fleste modermærker er harmløse, men det er vigtigt at holde øje med dem for ændringer, der kan indikere hudkræft, især melanom. Brug ABCDE-reglen: Asymmetri, Begrænsning (uregelmæssig kant), Couleur (farve), Diameter (>6 mm) og Evolution (ændring).',
            },
            {
              question: 'Kan I vurdere et modermærke ud fra et billede?',
              answer:
                'En billedvurdering kan sige, om et modermærke ser bekymrende nok ud til at skulle ses ved fysisk fremmøde, og hvor hurtigt. Den kan ikke udelukke hudkræft. En mistænkelig plet skal undersøges med dermatoskop, og er der tvivl, skal den fjernes og undersøges i mikroskop.',
            },
          ],
          en: [
            {
              question: 'What is a regular mole?',
              answer:
                'Moles, also called naevi, are benign skin growths that occur when pigment-producing cells (melanocytes) in the skin grow in clusters. They are usually harmless and do not cause physical discomfort.',
            },
            {
              question: 'What does a regular mole look like?',
              answer:
                'Moles are typically small, round or oval spots on the skin. They can be flat or raised, and their colour ranges from pink to brown or black. Most moles are less than 6 millimetres in diameter.',
            },
            {
              question: 'Who gets moles?',
              answer:
                'Almost everyone has moles. Most people develop them during childhood and early adulthood. On average, an adult has between 10 and 40 moles.',
            },
            {
              question: 'When should I be concerned about a mole?',
              answer:
                'Most moles are harmless, but it is important to watch them for changes that may indicate skin cancer, especially melanoma. Use the ABCDE rule: Asymmetry, Border (irregularity), Colour, Diameter (>6 mm) and Evolution (change).',
            },
            {
              question: 'Can you assess a mole from a photo?',
              answer:
                'A photo assessment can tell you whether a mole looks concerning enough to be seen in person, and how quickly. It cannot rule out skin cancer. A suspicious spot needs examination with a dermatoscope and, if there is any doubt, removal of the lesion for laboratory analysis.',
            },
          ],
        },
      },
      {
        slug: 'actinic-keratosis',
        nameDa: 'Aktinisk Keratose',
        nameEn: 'Actinic Keratosis',
        icon: '☀️',
        questions: {
          da: [
            {
              question: 'Hvad er aktinisk keratose?',
              answer:
                'Aktinisk keratose (AK), også kaldet solkeratose, er en præcancerøs hudtilstand med ru, skællende pletter på huden. Forandringerne skyldes mange års eksponering for ultraviolet (UV) stråling, typisk fra solen eller solarier.',
            },
            {
              question: 'Hvordan ser aktinisk keratose ud?',
              answer:
                'AK viser sig typisk som små, ru eller skællende pletter på huden, der kan være lyserøde, røde eller brune. De kan føles som sandpapir ved berøring og ses ofte i områder, der jævnligt udsættes for sol, såsom ansigt, ører, læber, skaldet hovedbund, nakke og hænder.',
            },
            {
              question: 'Hvem får aktinisk keratose?',
              answer:
                'AK er mest almindelig hos lyshudede personer over 40 år, men den kan ramme alle, som har været meget udsat for sol. Personer med svækket immunforsvar og dem, der har brugt solarier, har højere risiko.',
            },
            {
              question: 'Hvordan behandles aktinisk keratose?',
              answer:
                'Tidlig opdagelse og behandling er afgørende, da AK kan udvikle sig til pladecellekarcinom (hudkræft), hvis den ikke behandles. Behandlingsmulighederne omfatter topiske lægemidler, kryoterapi (frysning), fotodynamisk terapi og kirurgisk fjernelse.',
            },
            {
              question: 'Hvordan forebygger jeg aktinisk keratose?',
              answer:
                'Solbeskyttelse er den vigtigste forebyggelse. Brug solcreme med SPF 30+ hver dag året rundt på ansigt, ører, nakke, hænder og skaldet hovedbund, undgå solarier, og brug hat og dækkende tøj midt på dagen. Har du allerede haft aktinisk keratose, bør du få huden tjekket regelmæssigt, da nye pletter er hyppige.',
            },
          ],
          en: [
            {
              question: 'What is actinic keratosis?',
              answer:
                'Actinic keratosis (AK), also known as solar keratosis, is a precancerous skin condition characterised by rough, scaly patches on the skin. The lesions develop after years of exposure to ultraviolet (UV) radiation, typically from the sun or tanning beds.',
            },
            {
              question: 'What does actinic keratosis look like?',
              answer:
                'AK typically appears as small, rough or scaly patches on the skin that may be pink, red or brown. They can feel like sandpaper to the touch and are often found on sun-exposed areas such as the face, ears, lips, bald scalp, neck and hands.',
            },
            {
              question: 'Who gets actinic keratosis?',
              answer:
                'AK is most common in fair-skinned people over 40, but it can affect anyone with a history of significant sun exposure. People with weakened immune systems and those who have used tanning beds are at higher risk.',
            },
            {
              question: 'How is actinic keratosis treated?',
              answer:
                'Early detection and treatment is crucial, as AK can progress to squamous cell carcinoma (skin cancer) if left untreated. Treatment options include topical medications, cryotherapy (freezing), photodynamic therapy and surgical removal.',
            },
            {
              question: 'How can I prevent actinic keratosis?',
              answer:
                'Sun protection is the most important step. Use SPF 30+ sunscreen every day, year-round, on the face, ears, neck, hands and bald scalp, avoid tanning beds, and wear a hat and covering clothing in the middle of the day. If you have already had actinic keratosis, have your skin checked regularly, as new lesions are common.',
            },
          ],
        },
      },
      {
        slug: 'insect-sting',
        nameDa: 'Insektbid og Stik',
        nameEn: 'Insect Bites and Stings',
        icon: '🦟',
        questions: {
          da: [
            {
              question: 'Hvad er insektbid og stik?',
              answer:
                'Insektbid og stik dækker over skader fra munddele eller stikkeapparat hos fx myg, fluer, myrer, væggelus, bier, hvepse og edderkopper. Bid fra myg, fluer og væggelus involverer ikke gift, mens stik fra bier, hvepse og visse myrer gør. Begge dele kan give ubehag og i nogle tilfælde allergiske reaktioner.',
            },
            {
              question: 'Hvordan ser insektbid ud?',
              answer:
                'Insektbid viser sig typisk som små, røde, hævede knopper på huden. De kan være kløende, smertefulde eller begge dele. Myggestik ses typisk som små, runde, kløende røde knopper. Væggelusbid optræder ofte i linjer eller klynger.',
            },
            {
              question: 'Hvem rammes af insektbid?',
              answer:
                'Alle kan blive bidt eller stukket. Faktorer, der øger risikoen, omfatter tid udendørs i skov og på græsarealer, ophold i eller rejser til områder med mange insekter og ubeskyttet hud i insektfyldte miljøer.',
            },
            {
              question: 'Hvordan behandler jeg et insektbid eller -stik?',
              answer:
                'De fleste bid og stik er harmløse og forsvinder af sig selv inden for et par dage. Rens det berørte område med sæbe og vand, læg et koldt omslag for at reducere hævelsen, og brug håndkøbsantihistaminer mod kløe. Sidder en brod i huden, skal den skrabes ud.',
            },
            {
              question: 'Hvornår skal jeg søge læge efter et insektbid?',
              answer:
                'Ring 112 ved hævelse i ansigt eller svælg, vejrtrækningsbesvær, svimmelhed eller udbredt nældefeber — det kan være anafylaksi. Har du fået en adrenalinpen (fx EpiPen eller Jext) ordineret, skal du bruge den med det samme. Kontakt din læge samme dag, hvis rødmen breder sig hurtigt, området bliver varmt og ømt, eller du får feber.',
            },
          ],
          en: [
            {
              question: 'What are insect bites and stings?',
              answer:
                'Insect bites and stings cover injuries from the mouthparts or stinging apparatus of creatures such as mosquitoes, flies, ants, bedbugs, bees, wasps and spiders. Bites from mosquitoes, flies and bedbugs do not involve venom, whereas stings from bees, wasps and some ants do. Either can cause discomfort and in some cases allergic reactions.',
            },
            {
              question: 'What do insect bites look like?',
              answer:
                'Insect bites typically appear as small, red, swollen bumps on the skin. They can be itchy, painful, or both. Mosquito bites typically appear as small, round, itchy red bumps. Bedbug bites often appear in lines or clusters.',
            },
            {
              question: 'Who is affected by insect bites?',
              answer:
                'Anyone can be bitten or stung. Factors that increase the risk include time outdoors in woodland and grassland, living in or travelling to areas with large insect populations, and having unprotected skin in insect-prone environments.',
            },
            {
              question: 'How do I treat an insect bite or sting?',
              answer:
                'Most bites and stings are harmless and settle on their own within a few days. Clean the affected area with soap and water, apply a cold compress to reduce the swelling, and use over-the-counter antihistamines for the itching. If a sting is left in the skin, scrape it out.',
            },
            {
              question: 'When should I see a doctor after an insect bite?',
              answer:
                'Call 112 for swelling of the face or throat, difficulty breathing, dizziness or widespread hives — this can be anaphylaxis. If you have been prescribed an adrenaline auto-injector (for example EpiPen or Jext), use it immediately. Contact your doctor the same day if the redness spreads quickly, the area becomes hot and tender, or you develop a fever.',
            },
          ],
        },
      },
      {
        slug: 'hemangioma',
        nameDa: 'Hæmangiom',
        nameEn: 'Haemangioma',
        icon: '🩸',
        questions: {
          da: [
            {
              question: 'Hvad er et hæmangiom?',
              answer:
                'Et hæmangiom er en godartet (ikke-ondartet) svulst, der består af en unormal ophobning af blodkar. Væksterne kan sidde overalt på kroppen, men findes oftest på huden eller i indre organer som leveren.',
            },
            {
              question: 'Hvordan ser et hæmangiom ud?',
              answer:
                'Hæmangiomer fremstår typisk som røde eller lilla knuder på lys hud og som brunlige på mørkere hud. De kan være flade eller hævede og kan ligne et modermærke. Almindelige typer er infantile hæmangiomer (jordbærmærker) og kirsebærhæmangiomer.',
            },
            {
              question: 'Hvem får hæmangiomer?',
              answer:
                'Hæmangiomer ses hos ca. 4–5% af spædbørn. Kun omkring en tredjedel er synlige ved fødslen — resten viser sig i løbet af de første leveuger. De er hyppigere hos piger, for tidligt fødte og børn med lav fødselsvægt. Voksne, især over 75 år, kan udvikle kirsebærhæmangiomer.',
            },
            {
              question: 'Hvordan behandles hæmangiomer?',
              answer:
                'Hæmangiomer er normalt harmløse og forsvinder ofte af sig selv, især hos spædbørn. Regelmæssig kontrol hos en læge anbefales for at sikre, at de ikke giver komplikationer. Behandlingsmulighederne omfatter topiske eller orale lægemidler, laserbehandling eller kirurgisk fjernelse, hvis det er nødvendigt.',
            },
            {
              question: 'Hvornår skal et hæmangiom hos et barn undersøges?',
              answer:
                'Få barnet undersøgt, hvis hæmangiomet sidder ved øje, næse, mund, øre eller i bleområdet, hvis det vokser hurtigt i de første leveuger, hvis der er mere end fem, eller hvis huden brister og bliver til et sår. Behandling med propranolol virker bedst, når den startes tidligt — typisk inden for de første måneder.',
            },
          ],
          en: [
            {
              question: 'What is a haemangioma?',
              answer:
                'A haemangioma is a benign (non-cancerous) tumour consisting of an abnormal buildup of blood vessels. These growths can appear anywhere on the body but are most commonly found on the skin or in internal organs such as the liver.',
            },
            {
              question: 'What does a haemangioma look like?',
              answer:
                'Haemangiomas typically appear as red or purple bumps on light skin and brownish on darker skin. They can be flat or raised and may resemble a mole. Common types include infantile haemangiomas (strawberry marks) and cherry haemangiomas.',
            },
            {
              question: 'Who gets haemangiomas?',
              answer:
                'Haemangiomas affect roughly 4–5% of infants. Only about a third are visible at birth — the rest appear during the first weeks of life. They are more common in girls, premature babies and those with low birth weight. Adults, especially those over 75, can develop cherry haemangiomas.',
            },
            {
              question: 'How are haemangiomas treated?',
              answer:
                'Haemangiomas are usually harmless and often resolve on their own, especially in infants. Regular review by a doctor is recommended to make sure they do not cause complications. Treatment options include topical or oral medication, laser therapy or surgical removal if necessary.',
            },
            {
              question: 'When should a haemangioma in a child be examined?',
              answer:
                'Have the child seen if the haemangioma is near the eye, nose, mouth, ear or nappy area, if it grows quickly in the first weeks of life, if there are more than five, or if the skin breaks down into an ulcer. Propranolol treatment works best when started early — typically within the first few months.',
            },
          ],
        },
      },
      {
        slug: 'seborrheic-keratosis',
        nameDa: 'Seboroisk Keratose',
        nameEn: 'Seborrhoeic Keratosis',
        icon: '🟤',
        questions: {
          da: [
            {
              question: 'Hvad er seboroisk keratose?',
              answer:
                'Seboroisk keratose – også kaldet senilvorter eller seboroiske vorter – er en almindelig, godartet hudvækst, der opstår, når man bliver ældre. Den må ikke forveksles med pigmentpletter (lentigines), som er en anden slags forandring. De optræder ofte som brune, sorte eller lysebrune pletter på huden med en ru eller voksagtig tekstur. Selvom de kan se bekymrende ud, er de fuldstændig harmløse.',
            },
            {
              question: 'Hvad forårsager seboroisk keratose?',
              answer:
                'Den præcise årsag til seboroisk keratose er stadig ukendt, og tilstanden er ikke smitsom. Det kan være arveligt, hvilket antyder en genetisk faktor. Udsættelse for sollys og stigende alder kan øge risikoen for at udvikle disse vækster, da de er mest almindelige hos midaldrende og ældre voksne.',
            },
            {
              question: 'Er seboroisk keratose farligt?',
              answer:
                'Nej, seboroisk keratose er godartet – det forårsager ikke kræft og er ikke forbundet med hudkræft. Nogle mennesker bekymrer sig dog, fordi væksterne kan ligne andre hudtilstande. Hvis du er i tvivl om en hudforandring, bør du altid få den vurderet af en hudlæge.',
            },
            {
              question: 'Hvad er behandlingsmulighederne for seboroisk keratose?',
              answer:
                'Seboroisk keratose kræver normalt ikke behandling, medmindre det medfører ubehag eller påvirker din selvtillid. Almindelige behandlingsmuligheder er kryoterapi (frysning), curettage (afskrabning) og laserterapi. Disse udføres af en læge og er effektive til at fjerne væksterne.',
            },
            {
              question: 'Hvordan passer jeg på seboroisk keratose?',
              answer:
                'Undgå at pille eller kradse i væksterne – det kan forårsage blødning eller øge risikoen for infektion. Brug solbeskyttelse for at forebygge andre solrelaterede hudproblemer. Fugtighedscreme kan reducere tørhed og mild irritation, selvom seboroisk keratose normalt ikke er smertefuld.',
            },
          ],
          en: [
            {
              question: 'What is seborrhoeic keratosis?',
              answer:
                'Seborrhoeic keratosis — also known as senile warts (or seborrhoeic warts) — is a common, benign skin growth that appears as people age. It should not be confused with solar lentigines (age spots), which are a different kind of lesion. They often appear as brown, black or light tan patches on the skin with a rough or waxy texture. Although they can look worrisome, they are completely harmless.',
            },
            {
              question: 'What causes seborrhoeic keratosis?',
              answer:
                'The exact cause of seborrhoeic keratosis is still unknown, and the condition is not contagious. It may run in families, suggesting a genetic factor. Exposure to sunlight and increasing age can raise the chances of developing these growths, as they are most common in middle-aged and older adults.',
            },
            {
              question: 'Is seborrhoeic keratosis dangerous?',
              answer:
                'No, seborrhoeic keratosis is benign — it does not cause cancer and is not linked to skin cancer. However, some people worry because the growths can look similar to other skin conditions. If you are uncertain about a skin change, you should always have it assessed by a dermatologist.',
            },
            {
              question: 'What are the treatment options for seborrhoeic keratosis?',
              answer:
                'Seborrhoeic keratosis does not typically require treatment unless it is causing discomfort or affecting your confidence. Common treatment options include cryotherapy (freezing), curettage (scraping) and laser therapy. These are performed by a doctor and are effective at removing the growths.',
            },
            {
              question: 'How should I care for seborrhoeic keratosis?',
              answer:
                'Avoid picking or scratching the growths — this can cause bleeding or increase the risk of infection. Use sun protection to prevent other sun-related skin problems. Moisturisers can help reduce dryness and mild irritation, although seborrhoeic keratosis is usually not painful.',
            },
          ],
        },
      },
    ],
  },
];
