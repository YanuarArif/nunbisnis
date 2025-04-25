import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional | NunBisnis",
  description:
    "Jasa pembuatan website profesional dengan harga terjangkau. Website responsif, modern, dan SEO friendly untuk bisnis Anda.",
  keywords:
    "jasa pembuatan website, website profesional, website bisnis, web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingWhatsAppButton
          phoneNumber="6285725300663"
          showTooltip={false}
        />
      </body>
    </html>
  );
}
