import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { languages, defaultLanguage } from "@/lib/i18n";

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
  
  return {
    title: isDa 
      ? "SkinChange | Online Dermatologisk Klinik" 
      : "SkinChange | Online Dermatology Clinic",
    description: isDa
      ? "Danmarks førende online dermatologiske klinik. Få en diagnose inden for 48 timer. Certificerede hudlæger, sikker MitID login."
      : "Denmark's leading online dermatology clinic. Get a diagnosis within 48 hours. Certified dermatologists, secure MitID login.",
    keywords: isDa
      ? ["online hudlæge", "digital dermatologi", "hudlæge online", "hudproblem diagnose", "akne behandling"]
      : ["online dermatologist", "digital dermatology", "skin diagnosis online", "acne treatment", "eczema treatment"],
    alternates: {
      canonical: `https://www.skinchange.dk/${lang}`,
      languages: {
        'da': 'https://www.skinchange.dk/da',
        'en': 'https://www.skinchange.dk/',
      },
    },
    openGraph: {
      type: "website",
      locale: isDa ? "da_DK" : "en_US",
      url: `https://www.skinchange.dk/${lang}`,
      siteName: "SkinChange",
      title: isDa ? "SkinChange | Online Dermatologisk Klinik" : "SkinChange | Online Dermatology Clinic",
      description: isDa 
        ? "Danmarks førende online dermatologiske klinik. Diagnose inden for 48 timer."
        : "Denmark's leading online dermatology clinic. Diagnosis within 48 hours.",
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LangParams;
}) {
  return (
    <html lang={params.lang} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-[#1a237e]">
        {children}
      </body>
    </html>
  );
}
