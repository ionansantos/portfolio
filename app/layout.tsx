import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ionan Santos — Backend Developer",
  description: "Ionan Santos. Backend developer especializado em APIs, integrações e sistemas escaláveis.",
  openGraph: {
    title: "Ionan Santos — Backend Developer",
    description: "APIs, integrações e sistemas escaláveis.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Ionan Santos — Backend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ionan Santos — Backend Developer",
    description: "APIs, integrações e sistemas escaláveis.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
