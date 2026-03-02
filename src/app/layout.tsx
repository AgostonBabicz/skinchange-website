import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "SkinChange | Danmarks førende online dermatologiske klinik",
  description: "Få en professionel huddiagnose inden for 48 timer. Direkte fra certificerede hudlæger til din telefon. Sikker MitID login. Danmarks største digitale dermatologiske platform.",
  keywords: [
    "online hudlæge danmark",
    "digital dermatologi", 
    "hudlæge online konsultation",
    "hudproblem diagnose online",
    "akne behandling online",
    "eksem hudlæge online",
    "online hudklinik",
    "digital dermatologisk klinik"
  ],
  authors: [{ name: "SkinChange" }],
  creator: "SkinChange",
  publisher: "SkinChange",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://www.skinchange.dk",
    siteName: "SkinChange",
    title: "SkinChange | Online Dermatologisk Klinik",
    description: "Danmarks førende online dermatologiske klinik. Diagnose inden for 48 timer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinChange | Online Dermatologisk Klinik",
    description: "Danmarks førende online dermatologiske klinik",
  },
  alternates: {
    canonical: "https://www.skinchange.dk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
