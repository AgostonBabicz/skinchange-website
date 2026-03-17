import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SKIND | Danmarks førende online hudklinik",
  description: "Få en professionel huddiagnose inden for 48 timer. Direkte fra certificerede hudlæger til din telefon. Sikker MitID login. Danmarks største digitale dermatologiske platform.",
  keywords: [
    "online hudlæge danmark",
    "digital dermatologi", 
    "hudlæge online konsultation",
    "hudproblem diagnose online",
    "akne behandling online",
    "eksem hudlæge online",
    "online hudklinik",
    "digital hudklinik"
  ],
  authors: [{ name: "SKIND" }],
  creator: "SKIND",
  publisher: "SKIND",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://www.skinchange.dk",
    siteName: "SKIND",
    title: "SKIND | Online Hudklinik",
    description: "Danmarks førende online hudklinik. Diagnose inden for 48 timer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKIND | Online Hudklinik",
    description: "Danmarks førende online hudklinik",
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
    <html lang="da" className={`${roboto.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
