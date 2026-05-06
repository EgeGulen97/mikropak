import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DigitalPrintingVideoPlayer from "./DigitalPrintingVideoPlayer";

/**
 * Ana hero görseli — kendi dosyanızla değiştirin:
 * `public/images/machines/digital-printing-hero.png`
 */
const DIGITAL_PRINTING_HERO = "/images/machines/digital-printing-hero.png";

/**
 * Video önizlemesi — bu YouTube videosuna ait görsel (kS1cMA63Pzs).
 * Daha yüksek çözünürlük / farklı an için dosyanın üzerine yazın (makine stoğu kullanılmaz).
 */
const DIGITAL_PRINTING_VIDEO_FRAME =
  "/images/machines/digital-printing-video-frame.jpg";

const technicalSpecs = [
  { label: "Model", value: "MY2600-FAQ" },
  { label: "Baskı Kafa Modülü", value: "Epson I3200A1" },
  { label: "Mürekkep Tipi", value: "CMYK su bazlı çevre dostu mürekkep" },
  { label: "Baskı Yüksekliği", value: "2 – 3 mm" },
  { label: "Baskı Çözünürlüğü", value: "600 dpi" },
  { label: "Hat Hızı", value: "60 – 120 m/dk" },
  {
    label: "Baskı Formatı",
    value: "1800 mm'ye kadar baskı genişliği / sınırsız uzunluk",
  },
  {
    label: "Besleme Sistemi",
    value: "Lead edge otomatik besleme ve çıkış sistemi",
  },
  { label: "Güç Tüketimi", value: "10 kW" },
  { label: "Elektrik Beslemesi", value: "AC 380V ±10%, 50–60Hz" },
] as const;

const highlightFeatures = [
  [
    "Hızlı Üretim",
    "Single Pass yapı ile sürekli akışta yüksek üretim hızı.",
  ],
  [
    "Net ve Kararlı Baskı",
    "600 dpi çözünürlük ile daha tutarlı baskı sonuçları.",
  ],
  [
    "Endüstriyel Besleme Yapısı",
    "Lead edge otomatik besleme ile düzenli üretim akışı.",
  ],
  [
    "Çevre Dostu Baskı",
    "Su bazlı CMYK mürekkep ile daha sürdürülebilir üretim.",
  ],
] as const;

export const metadata: Metadata = {
  title:
    "Dijital Baskı Sistemleri | Single Pass | Mingyang | Mikropak Ambalaj",
  description:
    "Oluklu mukavva için endüstriyel Single Pass dijital baskı: Mingyang tabanlı yüksek hız, yüksek çözünürlük, otomasyon ve esnek üretim. Mikropak ile teknik destek.",
};

export default function DigitalPrintingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO — sadece statik görsel, video yok */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                Oluklu Mukavva İçin Endüstriyel Dijital Baskı Sistemleri
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-slate-700">
                Single Pass teknolojisi ile yüksek hız, yüksek çözünürlük ve üretim
                esnekliğini bir araya getiren dijital baskı çözümleri.
              </p>
              <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Single Pass • Yüksek çözünürlük • Endüstriyel üretim
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-[#E6005C] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f]"
                >
                  Teklif Talep Et
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[16px] bg-slate-200 shadow-[0_22px_90px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/80">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={DIGITAL_PRINTING_HERO}
                  alt="Dijital baskı sistemi — ana görsel"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO — hero dışında */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <DigitalPrintingVideoPlayer posterSrc={DIGITAL_PRINTING_VIDEO_FRAME} />
        </div>
      </section>

      {/* Teknik + öne çıkanlar — düz yüzey, minimal çerçeve */}
      <section className="border-t border-slate-100/90 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Teknik Özellikler ve Uygulama
          </h2>
          <p className="mt-3 max-w-[52ch] text-[14px] leading-[1.65] text-slate-600">
            Single Pass dijital baskı sistemleri; yüksek hız, sürekli üretim ve
            endüstriyel verimlilik sunar.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-0">
            <div className="min-w-0">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-7">
                {technicalSpecs.map((row) => (
                  <div key={row.label} className="min-w-0">
                    <p className="text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-slate-400">
                      {row.label}
                    </p>
                    <p className="mt-1.5 text-[15px] font-semibold leading-snug tracking-tight text-slate-900">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <ul className="flex flex-col gap-3 sm:gap-3.5">
                {highlightFeatures.map(([title, desc]) => (
                  <li key={title} className="flex gap-2 py-0.5">
                    <span className="mt-[0.4rem] inline-flex h-[3px] w-[3px] flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold tracking-tight text-slate-900 sm:text-[14px]">
                        {title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-[1.6] text-slate-600">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND / MANUFACTURER */}
      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2">
                <Image
                  src="/images/logos/mingyang.png"
                  alt="Mingyang logo"
                  width={84}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Üretici ortağı
                </span>
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Güvenilirlik
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Güçlü Üretim Altyapısı
              </h2>

              <div className="mt-6 max-w-[54ch] text-[15px] leading-[1.75] text-slate-700">
                <p>
                  Gelişmiş üretim altyapısı ve dijital baskı teknolojilerine
                  odaklanan üretici iş ortaklıkları ile endüstriyel seviyede
                  çözümler sunulmaktadır.
                </p>
              </div>
            </div>

            <div className="lg:mt-16">
              <div className="rounded-[14px] border border-slate-700 bg-slate-900/70 px-5 py-5 shadow-[0_10px_26px_rgba(2,6,23,0.30)] backdrop-blur-[2px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-200">
                  Öne çıkan odak
                </p>
                <ul className="mt-4 space-y-3.5">
                  {[
                    "Single Pass üretim hattı yaklaşımı",
                    "Teknik konfigürasyon desteği",
                    "Devreye alma süreçlerinde koordinasyon",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                      <span className="text-[15px] leading-[1.7] text-slate-100">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-slate-900/70 px-6 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="mt-0 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Dijital Baskı Sistemleri ile Üretiminizi Geliştirin
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Üretim ihtiyaçlarınıza en uygun dijital baskı çözümünü belirlemek
                için bizimle iletişime geçin.
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-3 md:items-end">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-[1.05] hover:-translate-y-[1px]"
              >
                Teklif Talep Et
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
