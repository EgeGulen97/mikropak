import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveNavLink from "./components/ActiveNavLink";
import WhatsAppButton from "./components/WhatsAppButton";
import SiteHeader from "./components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mikropak Ambalaj | Oluklu Mukavva ve Ambalaj Makine Çözümleri",
  description:
    "Oluklu mukavva üretim hatları, flexo ve dijital baskı makineleri için profesyonel çözümler. Mikropak ile doğru üretim hattını planlayın.",
  openGraph: {
    title: "Mikropak Ambalaj | Oluklu Mukavva ve Ambalaj Makine Çözümleri",
    description:
      "Oluklu mukavva üretim hatları, flexo ve dijital baskı makineleri için profesyonel çözümler. Mikropak ile doğru üretim hattını planlayın.",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.png",
        alt: "Mikropak Ambalaj — oluklu mukavva ve ambalaj makine çözümleri",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mikropak Ambalaj",
    url: "https://mikropak.com",
    logo: "https://mikropak.com/images/logos/mikropak.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+905462641944",
        contactType: "customer service",
      },
    ],
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />

        {/* Prevent content under fixed header */}
        <div className="pt-20">{children}</div>

        <WhatsAppButton />
      </body>
    </html>
  );
}
