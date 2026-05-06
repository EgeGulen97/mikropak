import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveNavLink from "./components/ActiveNavLink";
import WhatsAppButton from "./components/WhatsAppButton";
import Link from "next/link";
import Image from "next/image";

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
        <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
            <div className="flex items-center">
              <Link href="/#hero" className="inline-flex items-center">
                <Image
                  src="/images/logos/mikropak.png"
                  alt="Mikropak Ambalaj logosu"
                  width={220}
                  height={56}
                  priority
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 text-[13px] font-medium text-slate-600 md:flex">
              <Link
                href="/#hero"
                className="relative pb-1 transition hover:text-[#0B1F35] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E6005C] after:transition-all after:duration-200"
              >
                Ana Sayfa
              </Link>
              <div className="group relative">
                <Link
                  href="/makine-ve-cozumler"
                  className="relative inline-flex items-center gap-1 pb-1 transition hover:text-[#0B1F35] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E6005C] after:transition-all after:duration-200"
                >
                  Makine ve Üretim Çözümleri
                  <span className="text-[11px] text-slate-400 transition group-hover:text-slate-500">
                    ▾
                  </span>
                </Link>

                <div className="invisible absolute left-0 top-full z-50 w-[340px] translate-y-1 opacity-0 transition-[opacity,transform] duration-150 delay-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-0 pt-2">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10">
                    <div className="p-2.5 text-[13px] font-medium text-slate-700">
                      <Link
                        href="/makine-ve-cozumler/oluklu-mukavva-hatlari/xinguang"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Oluklu Mukavva Hatları
                      </Link>
                      <Link
                        href="/makine-ve-cozumler/pre-print-flexo"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Pre-Print Flexo Baskı Makineleri
                      </Link>
                      <Link
                        href="/makine-ve-cozumler/inline-flexo"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Inline Flexo Baskı Makineleri
                      </Link>
                      <Link
                        href="/makine-ve-cozumler/dijital-baski"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Dijital Baskı Sistemleri
                      </Link>
                      <Link
                        href="/makine-ve-cozumler/kalip-kesim"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Kalıp Kesim Makineleri
                      </Link>
                      <Link
                        href="/makine-ve-cozumler/etiketleme-ve-otomasyon"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Etiketleme ve Otomasyon Sistemleri
                      </Link>
                      <Link
                        href="/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri"
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        Yedek Parça ve Hat Bileşenleri
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <ActiveNavLink
                href="/ureticiler"
                className="relative pb-1 transition hover:text-[#0B1F35] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E6005C] after:transition-all after:duration-200"
                activeClassName="text-[#0B1F35] after:w-full"
              >
                Üreticiler
              </ActiveNavLink>
              <ActiveNavLink
                href="/hakkimizda"
                className="relative pb-1 transition hover:text-[#0B1F35] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E6005C] after:transition-all after:duration-200"
                activeClassName="text-[#0B1F35] after:w-full"
              >
                Hakkımızda
              </ActiveNavLink>
              <Link
                href="/#contact"
                className="relative pb-1 transition hover:text-[#0B1F35] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E6005C] after:transition-all after:duration-200"
              >
                İletişim
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[#E6005C] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f]"
              >
                Teklif Talep Et
              </Link>
            </nav>

            {/* Mobile menu (no JS) */}
            <div className="md:hidden">
              <details className="group relative">
                <summary className="list-none cursor-pointer select-none rounded-full border border-slate-300 bg-white px-4 py-2 text-[12px] font-semibold text-slate-800 shadow-sm transition hover:border-[#E6005C] hover:bg-[#E6005C]/5">
                  Menü
                </summary>
                <div className="absolute right-0 mt-3 w-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10">
                  <div className="flex flex-col p-2 text-[13px] font-medium text-slate-700">
                    <Link className="rounded-xl px-3 py-2 hover:bg-slate-50" href="/#hero">
                      Ana Sayfa
                    </Link>
                    <details className="group/details rounded-xl">
                      <summary className="list-none cursor-pointer rounded-xl px-3 py-2 hover:bg-slate-50">
                        <span className="inline-flex items-center gap-1">
                          Makine ve Üretim Çözümleri
                          <span className="text-[11px] text-slate-400 transition group-open/details:rotate-180">
                            ▾
                          </span>
                        </span>
                      </summary>
                      <div className="ml-2 mt-1 border-l border-slate-200 pl-2">
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/oluklu-mukavva-hatlari/xinguang"
                        >
                          Oluklu Mukavva Hatları
                        </Link>
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/pre-print-flexo"
                        >
                          Pre-Print Flexo Baskı Makineleri
                        </Link>
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/inline-flexo"
                        >
                          Inline Flexo Baskı Makineleri
                        </Link>
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/dijital-baski"
                        >
                          Dijital Baskı Sistemleri
                        </Link>
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/kalip-kesim"
                        >
                          Kalıp Kesim Makineleri
                        </Link>
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/etiketleme-ve-otomasyon"
                        >
                          Etiketleme ve Otomasyon Sistemleri
                        </Link>
                        <Link
                          className="block rounded-xl px-3 py-2 hover:bg-slate-50"
                          href="/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri"
                        >
                          Yedek Parça ve Hat Bileşenleri
                        </Link>
                      </div>
                    </details>
                    <ActiveNavLink
                      href="/ureticiler"
                      className="rounded-xl px-3 py-2 hover:bg-slate-50"
                      activeClassName="bg-slate-50 text-slate-900"
                    >
                      Üreticiler
                    </ActiveNavLink>
                    <ActiveNavLink
                      href="/hakkimizda"
                      className="rounded-xl px-3 py-2 hover:bg-slate-50"
                      activeClassName="bg-slate-50 text-slate-900"
                    >
                      Hakkımızda
                    </ActiveNavLink>
                    <Link className="rounded-xl px-3 py-2 hover:bg-slate-50" href="/#contact">
                      İletişim
                    </Link>
                    <div className="my-2 h-px bg-slate-200" />
                    <Link
                      className="rounded-xl bg-[#E6005C] px-3 py-2 text-center text-[12px] font-semibold text-white shadow-sm shadow-[#E6005C]/30 hover:bg-[#cc004f]"
                      href="/#contact"
                    >
                      Teklif Talep Et
                    </Link>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* Prevent content under fixed header */}
        <div className="pt-20">{children}</div>

        <WhatsAppButton />
      </body>
    </html>
  );
}
