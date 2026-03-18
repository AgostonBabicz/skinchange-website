// Root layout — intentionally minimal.
// The [lang]/layout.tsx handles <html lang=...> and all metadata.
// This file must NOT render its own <html> or <body> to avoid nesting.
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skinchange.dk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children as React.ReactElement;
}
