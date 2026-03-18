import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { languages, defaultLanguage } from "@/lib/i18n";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

type LangParams = { lang: string };

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const lang = params.lang || defaultLanguage;
  const isDa = lang === 'da';
  
  const title = isDa 
    ? "SKIND | Online Hudklinik" 
    : "SKIND | Online Skin Clinic";
    
  const description = isDa
    ? "Danmarks online hudklinik. Certificerede hudlæger diagnosticerer akne, eksem, psoriasis og hudkræft inden for 48 timer. Sikker MitID login."
    : "Denmark's online skin clinic. Certified dermatologists diagnose acne, eczema, psoriasis and skin cancer within 48 hours. Secure MitID login.";
    
  const ogImage = "https://www.skinchange.dk/og-image.jpg";

  return {
    title,
    description,
    keywords: isDa
      ? ["online hudlæge", "digital dermatologi", "hudlæge online", "hudproblem diagnose", "akne behandling", "eksem behandling", "online hudkonsultation", "hudkræft scanning", "Peter Bjerring"]
      : ["online dermatologist Denmark", "digital dermatology", "skin diagnosis online", "acne treatment online", "eczema treatment online", "online skin consultation"],
    authors: [{ name: "SkinChange.AI ApS" }],
    creator: "SkinChange.AI ApS",
    publisher: "SkinChange.AI ApS",
    metadataBase: new URL("https://www.skinchange.dk"),
    alternates: {
      canonical: `https://www.skinchange.dk/${lang}`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da',
        'da': 'https://www.skinchange.dk/da',
        'en': 'https://www.skinchange.dk/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale: isDa ? "da_DK" : "en_US",
      url: `https://www.skinchange.dk/${lang}`,
      siteName: "SKIND",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isDa ? "SKIND - Online Hudklinik" : "SKIND - Online Skin Clinic",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@skinchangeai",
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://www.skinchange.dk/#organization",
      "name": "SkinChange.AI ApS",
      "alternateName": "SKIND",
      "url": "https://www.skinchange.dk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.skinchange.dk/SKIND_logo_dark.svg",
        "width": 675,
        "height": 225
      },
      "description": "Danmarks førende online hudklinik. Få en diagnose inden for 48 timer.",
      "medicalSpecialty": "Dermatology",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "DK",
        "addressRegion": "Hovedstaden"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@skinchange.ai",
        "availableLanguage": ["Danish", "English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/skinchange",
        "https://www.facebook.com/skinchangeai",
        "https://www.instagram.com/skinchangeai"
      ]
    },
    {
      "@type": "Physician",
      "@id": "https://www.skinchange.dk/#peter-bjerring",
      "name": "Peter Bjerring",
      "medicalSpecialty": "Dermatology",
      "jobTitle": "Speciallæge i hudsygdomme",
      "worksFor": {
        "@id": "https://www.skinchange.dk/#organization"
      },
      "alumniOf": "Dansk Dermatologisk Selskab",
      "knowsAbout": ["Hudsygdomme", "Akne", "Eksem", "Psoriasis", "Hudkræft"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.skinchange.dk/#website",
      "url": "https://www.skinchange.dk",
      "name": "SKIND",
      "publisher": {
        "@id": "https://www.skinchange.dk/#organization"
      },
      "inLanguage": ["da", "en"]
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.skinchange.dk/#webpage",
      "url": "https://www.skinchange.dk",
      "name": "SKIND | Online Hudklinik",
      "isPartOf": {
        "@id": "https://www.skinchange.dk/#website"
      },
      "about": {
        "@id": "https://www.skinchange.dk/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://www.skinchange.dk/og-image.jpg"
      },
      "description": "Danmarks førende online hudklinik. Få en diagnose inden for 48 timer."
    },
    {
      "@type": "Service",
      "@id": "https://www.skinchange.dk/#service",
      "name": "Online hudkonsultation",
      "provider": {
        "@id": "https://www.skinchange.dk/#organization"
      },
      "serviceType": "Online Dermatology Consultation",
      "areaServed": {
        "@type": "Country",
        "name": "Denmark"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Digital Platform",
        "serviceUrl": "https://www.skinchange.dk"
      },
      "offers": {
        "@type": "Offer",
        "price": "298",
        "priceCurrency": "DKK",
        "description": "Prisen dækker én hudlidelse"
      }
    }
  ]
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LangParams;
}) {
  return (
    <html lang={params.lang} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-[#1a237e]">
        {children}
      </body>
    </html>
  );
}
