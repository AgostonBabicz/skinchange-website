// Peter Bjerring's CV, word for word from the text the site has always shown (home "Læs mere" modal).
// Sections: education, experience, specialisation, research, memberships, honours.
export interface CvItem {
  year?: string;
  text: string;
}

export interface CvSection {
  title: string;
  items: CvItem[];
}

export const peterCv: Record<'da' | 'en', { headline: string; sections: CvSection[] }> = {
  "da": {
    "headline": "Peter Bjerring, Speciallæge i hudsygdomme, professor, Dr.med.",
    "sections": [
      {
        "title": "Uddannelse",
        "items": [
          {
            "year": "1980",
            "text": "Master of Science (Med.), Aarhus Universitet"
          },
          {
            "year": "1988",
            "text": "Speciallæge i dermatovenerologi, Danmark"
          },
          {
            "year": "2001",
            "text": "Speciallæge i dermatovenerologi, Norge"
          },
          {
            "year": "2004",
            "text": "Speciallæge i dermato-venereologi, Holland"
          }
        ]
      },
      {
        "title": "Erfaring",
        "items": [
          {
            "year": "1993–2018",
            "text": "Klinikchef, Dermatologisk Afdeling (HudCenter Mølholm), Privathospital Mølholm, Vejle, København og Aarhus"
          },
          {
            "year": "2001–2007",
            "text": "Administrerende direktør, Mølholm Privathospital, Vejle og Aarhus"
          },
          {
            "year": "2004–2018",
            "text": "Overlæge og Medicinsk direktør, Mølholm Privathospital, Vejle og Aarhus"
          },
          {
            "year": "2018–nu",
            "text": "Klinisk professor, Senior konsulent og Speciallæge, Dermatologisk Afdeling, Aalborg Universitetshospital"
          },
          {
            "year": "2018–2022",
            "text": "Professor i Dermato-Venereologi, Aalborg Universitet"
          },
          {
            "year": "2022–nu",
            "text": "Adjunkt professor, Aalborg Universitet"
          }
        ]
      },
      {
        "title": "Specialisering",
        "items": [
          {
            "text": "Klassisk dermatologi (Almindelige hudsygdomme)"
          },
          {
            "text": "Dermatologisk laserkirurgi"
          },
          {
            "text": "Hudkræftbehandling (medicinsk, kirurgisk og fototerapi)"
          },
          {
            "text": "Kosmetisk laserbehandling"
          },
          {
            "text": "Kosmetisk medicinsk dermatologi"
          },
          {
            "text": "Fotodermatologi"
          }
        ]
      },
      {
        "title": "Forskning og undervisning",
        "items": [
          {
            "text": "Har publiceret mere end 300 videnskabelige artikler inden for hudsygdomme, laserbehandling og hudkræftbehandling"
          },
          {
            "text": "Har holdt mere end 500 foredrag ved internationale videnskabelige møder og kongresser verden over"
          }
        ]
      },
      {
        "title": "Faglige medlemskaber",
        "items": [
          {
            "text": "Dansk Dermatologisk Selskab (DDS)"
          },
          {
            "text": "European Academy for Dermato-Venereology (EADV)"
          },
          {
            "text": "Dansk Dermatologisk Organisation (DDO)"
          },
          {
            "text": "European Society for Lasers and Energy-based Devices (ESLD - past president)"
          },
          {
            "text": "American Academy of Dermatology (AAD)"
          },
          {
            "text": "American Society for Lasers in Surgery and Medicine (ASLMS)"
          },
          {
            "text": "The International Peeling Society"
          }
        ]
      },
      {
        "title": "Hædersbevisninger",
        "items": [
          {
            "text": "Ridder af Dannebrog"
          },
          {
            "text": "Dansk Dermatologisk Selskabs Hæderspris"
          },
          {
            "text": "Caroline and William Mark Memorial Award (Hæderspris fra American Society for Lasers In Medicine and Surgery)"
          },
          {
            "text": "William Nielsen Prisen"
          }
        ]
      }
    ]
  },
  "en": {
    "headline": "Peter Bjerring, Specialist in skin diseases, professor, Dr.med.",
    "sections": [
      {
        "title": "Training",
        "items": [
          {
            "year": "1980",
            "text": "Master of Science (Med.), Aarhus University"
          },
          {
            "year": "1988",
            "text": "Specialist in dermatovenerology, Denmark"
          },
          {
            "year": "2001",
            "text": "Specialist in dermatovenerology, Norway"
          },
          {
            "year": "2004",
            "text": "Specialist in dermato-venereology, Netherlands"
          }
        ]
      },
      {
        "title": "Experience",
        "items": [
          {
            "year": "1993–2018",
            "text": "Head of Clinic, Dermatology Department (HudCenter Mølholm), Private Hospital Mølholm, Vejle, Copenhagen and Aarhus"
          },
          {
            "year": "2001–2007",
            "text": "Managing Director, Mølholm Private Hospital, Vejle and Aarhus"
          },
          {
            "year": "2004–2018",
            "text": "Chief Physician and Chief Medical Officer, Mølholm Private Hospital, Vejle and Aarhus"
          },
          {
            "year": "2018–Present",
            "text": "Clinical Professor, Senior Consultant and Specialist, Department of Dermatology, Aalborg University Hospital"
          },
          {
            "year": "2018–2022",
            "text": "Chair Professor in Dermato-Venereology, Aalborg University"
          },
          {
            "year": "2022–Present",
            "text": "Adjunct professor, Aalborg University"
          }
        ]
      },
      {
        "title": "Specialization",
        "items": [
          {
            "text": "Classical dermatology (Common skin diseases)"
          },
          {
            "text": "Dermatological laser surgery"
          },
          {
            "text": "Skin cancer treatment (medical, surgical and phototherapy)"
          },
          {
            "text": "Cosmetic laser treatment"
          },
          {
            "text": "Cosmetic medical dermatology"
          },
          {
            "text": "Photodermatology"
          }
        ]
      },
      {
        "title": "Research and teaching",
        "items": [
          {
            "text": "Has published more than 300 scientific articles within skin diseases, laser treatment and skin cancer treatment"
          },
          {
            "text": "Has given more than 500 lectures at international scientific meetings and congresses worldwide"
          }
        ]
      },
      {
        "title": "Professional memberships",
        "items": [
          {
            "text": "Danish Dermatological Society (DDS)"
          },
          {
            "text": "European Academy for Dermato-Venereology (EADV)"
          },
          {
            "text": "Danish Dermatologists' Organization (DDO)"
          },
          {
            "text": "European Society for Lasers and Energy-based Devices (ESLD - past president)"
          },
          {
            "text": "American Academy of Dermatology (AAD)"
          },
          {
            "text": "American Society for Lasers in Surgery and Medicine (ASLMS)"
          },
          {
            "text": "The International Peeling Society"
          }
        ]
      },
      {
        "title": "Recognitions",
        "items": [
          {
            "text": "Knight of the Dannebrog"
          },
          {
            "text": "Danish Dermatological Society's Honorary Award"
          },
          {
            "text": "Caroline and William Mark Memorial Award (Honorary award from the American Society for Lasers In Medicine and Surgery)"
          },
          {
            "text": "William Nielsen Prize"
          }
        ]
      }
    ]
  }
};
