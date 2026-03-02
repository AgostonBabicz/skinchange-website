import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SkinChange | Online Dermatologisk Klinik",
  description: "Danmarks førende online dermatologiske klinik. Få en diagnose inden for 48 timer. Certificerede hudlæger, sikker MitID login, behandlingsplan med det samme.",
  keywords: ["online hudlæge", "digital dermatologi", "hudlæge online konsultation", "hudproblem diagnose", "akne behandling online"],
  openGraph: {
    title: "SkinChange | Online Dermatologisk Klinik",
    description: "Danmarks førende online dermatologiske klinik. Få en diagnose inden for 48 timer.",
    type: "website",
    locale: "da_DK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
