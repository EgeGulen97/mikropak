import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CorrugatorVideoPlayer from "../CorrugatorVideoPlayer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mikropak.com"),
  title: "Oluklu Mukavva Üretim Hatları | Corrugator Sistemleri | Mikropak",
  description:
    "Oluklu mukavva üretim hatları (corrugator), yüksek hız ve esnek konfigürasyon seçenekleriyle Mikropak güvencesiyle. Projenize özel çözümler için hemen inceleyin.",
  alternates: {
    canonical: "/makine-ve-cozumler/oluklu-mukavva-hatlari/xinguang",
  },
  openGraph: {
    title: "Oluklu Mukavva Üretim Hatları | Corrugator Sistemleri | Mikropak",
    description:
      "Oluklu mukavva üretim hatları (corrugator), yüksek hız ve esnek konfigürasyon seçenekleriyle Mikropak güvencesiyle. Projenize özel çözümler için hemen inceleyin.",
    type: "website",
    images: [
      {
        url: "/images/machines/xinguang_oluklu_hatti.png",
        alt: "Oluklu mukavva üretim hattı corrugator makine sistemi",
      },
    ],
  },
};

const benefits = [
  "Yüksek hız ve yüksek kapasiteli üretim",
  "Stabil çalışan oluklu mukavva hattı ile kesintisiz üretim",
  "3 / 5 / 7 kat seçenekleri ile esnek ondüle hattı konfigürasyonu",
  "Kesim ve istifleme sistemleriyle tam entegre üretim hattı",
];

const capacityBullets = [
  "Hat genişliği (2200–3300 mm) ve hız kapasitesi projeye göre belirlenir",
  "150–350 m/dk aralığında stabil ve sürekli üretim performansı",
  "Dalga tipi (B, C, E, BC vb.) ve kat sayısına göre üretim esnekliği",
  "Üretim hacmine uygun hat konumlandırma ve akış planlaması",
];

const technicalBullets = [
  "Tam senkronize çalışan corrugator hat yapısı",
  "Yüksek hassasiyetli yapıştırma, kurutma ve kesim istasyonları",
  "Kasetli veya sabit tip ondüle grubu seçenekleri",
  "Otomasyon destekli, operatör bağımlılığını azaltan üretim sistemi",
];

const usageBullets = [
  "Üretim ihtiyacına göre özel hat konfigürasyonu",
  "Farklı dalga kombinasyonları için hızlı geçiş altyapısı",
  "İleriye dönük kapasite artışı için modüler sistem tasarımı",
  "Kesim, istifleme ve taşıma sistemleri ile entegre yapı",
];

const mikropakCards = [
  {
    title: "Saha deneyimi",
    line: "Oluklu mukavva ve ambalaj hatlarında uzun soluklu proje tecrübesi.",
  },
  {
    title: "Global üreticiler",
    line: "Xinguang ve seçkin markalarla doğrudan teknik koordinasyon.",
  },
  {
    title: "Mühendislik desteği",
    line: "Hat seçimi, kapasite planı ve devreye alma süreçlerinde yanınızdayız.",
  },
  {
    title: "Şeffaf iletişim",
    line: "Her proje ihtiyaca göre netleştirilir; teknik netlik önceliklidir.",
  },
];

export default function XinguangCorrugatorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem] md:leading-[1.14]">
                Oluklu Mukavva Üretim Hatları (Corrugator & Ondüle Hatları)
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-700 md:text-[16px]">
                Yüksek kapasite, verimli üretim ve ihtiyaca özel, 3300 mm en ve
                350 m/dk seviyesine kadar çıkan oluklu mukavva üretim hattı
                konfigürasyonları.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-[#E6005C] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f]"
                >
                  Teklif Talep Et
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-[0_22px_90px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/machines/xinguang_oluklu_hatti.png"
                  alt="Oluklu mukavva üretim hattı için corrugator makine sistemi"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-white" aria-labelledby="video-heading">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14 lg:px-8">
          <h2
            id="video-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
          >
            Referans Oluklu Mukavva Hattı — Gerçek Üretim Performansı
          </h2>
          <p className="mt-2 text-[14px] text-slate-600">
            3300 mm çalışma genişliği ve 350 m/dk üretim hızına ulaşabilen, endüstriyel ölçekte stabil ve sürekli üretim sağlayan oluklu mukavva (corrugator) hattı örneği.
          </p>
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-12 text-left text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200/85">
                  Referans Hat
                </p>
                <p className="mt-1 text-[16px] font-bold leading-none text-white">
                  3300 mm / 350 m/dk
                </p>
              </div>
              <CorrugatorVideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Teknik özet — madde listeleri */}
      <section className="bg-[#f8fafc]" aria-labelledby="ozet-bilgiler">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14 lg:px-8">
          <h2
            id="ozet-bilgiler"
            className="text-lg font-semibold text-slate-900 md:text-xl"
          >
            Özet bilgiler
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Kapasite
              </h3>
              <ul className="mt-4 space-y-2.5 text-[14px] leading-snug text-slate-700">
                {capacityBullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-slate-400" aria-hidden>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Teknik
              </h3>
              <ul className="mt-4 space-y-2.5 text-[14px] leading-snug text-slate-700">
                {technicalBullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-slate-400" aria-hidden>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Konfigürasyon
              </h3>
              <ul className="mt-4 space-y-2.5 text-[14px] leading-snug text-slate-700">
                {usageBullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-slate-400" aria-hidden>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEM ÖZETİ */}
      <section className="bg-white" aria-labelledby="sistem-ozeti-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <div className="max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:p-8">
              <h2
                id="sistem-ozeti-heading"
                className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
              >
                Temel Teknik Değerler
              </h2>
              <p className="mt-3 text-[14px] text-slate-600">
                Standart konfigürasyonlara ait tipik teknik değerlerdir. Nihai hat
                yapısı, proje kapsamı ve üretim ihtiyaçlarına göre belirlenir.
              </p>

              <div className="mt-6 divide-y divide-slate-200">
                {[
                  ["Çalışma genişliği", "1000 – 3300 mm"],
                  ["Hat hızı", "150 – 350 m/dk"],
                  ["Kat yapısı", "3 / 5 / 7 kat"],
                  ["Ondüle grubu", "Kasetli veya sabit"],
                  ["Üretim tipi", "Yüksek hacimli üretim"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-2 py-2.5"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </p>
                    <p className="text-[18px] font-semibold leading-none text-slate-800">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* XINGUANG — görsel, kısa */}
      <section
        className="bg-[#0B1F35] text-slate-100"
        aria-labelledby="xinguang-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-4 py-2">
                <Image
                  src="/images/logos/xinguang_logo.png"
                  alt="Xinguang corrugator makine sistemi üreticisi logosu"
                  width={84}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Üretici ortağı
                </span>
              </div>
              <h2
                id="xinguang-heading"
                className="mt-6 text-2xl font-semibold tracking-tight text-white md:text-3xl"
              >
                Xinguang Oluklu Mukavva Hat Çözümleri
              </h2>
              <ul className="mt-6 space-y-2.5 text-[14px] text-slate-300">
                {[
                  "30+ yıl üretim deneyimi",
                  "Çok ülkede devreye alınmış hatlar",
                  "Yüksek hız ve geniş çalışma enleri",
                  "Proje bazlı sistem yaklaşımı",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#E6005C]" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 lg:max-w-md">
              <Image
                src="/images/machines/xinguang_oluklu_hatti.png"
                alt="Xinguang oluklu mukavva üretim hattı corrugator makine sistemi"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-slate-700/80 bg-slate-900/80 px-6 py-10 md:flex-row md:items-center md:gap-10 md:px-10 md:py-12">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl md:leading-snug">
                Oluklu Mukavva Hattınız İçin Doğru Çözümü Birlikte Planlayalım
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                Projenize uygun hat konfigürasyonu, kapasite planlaması ve teknik
                detaylar için bizimle iletişime geçin.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center md:w-auto">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#E6005C] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#cc004f]"
              >
                Teklif Al
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-500 px-7 py-3 text-sm font-semibold text-slate-50 transition hover:border-[#E6005C] hover:bg-slate-800/60"
              >
                Teknik Görüşme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
