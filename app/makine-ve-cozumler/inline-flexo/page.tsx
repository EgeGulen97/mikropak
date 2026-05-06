import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import YouTubeLiteEmbed from "../../components/YouTubeLiteEmbed";

export const metadata: Metadata = {
  title: "ZhenXing Inline Flexo Baskı Hatları | Yüksek Performans | Mikropak Ambalaj",
  description:
    "ZhenXing inline flexo: tabakadan tabakaya üretim, printer–slotter–rotary die cutter entegrasyonu, full servo yapı ve yüksek hızlı levha üretimi. Teknik destek ve konfigürasyon.",
};

const sistemOzetiSatirlari = [
  ["Üretim Akışı", "Tabakadan Tabakaya"],
  [
    "Makine Yapısı",
    "Inline Flexo (Printer Slotter Die Cutter)",
  ],
  ["Kesim Sistemi", "Slotter + Rotary Die Cutter Entegre"],
  ["Besleme", "Lead Edge / Vakum Transfer Sistem"],
  ["Konfigürasyon", "Full Servo / Modüler Ünite Yapısı"],
  ["Baskı Genişliği", "1200 – 1600 mm"],
  [
    "Maks. Tabaka Ölçüsü",
    "1250 × 2900 mm – 1650 × 3700 mm",
  ],
  ["Kapasite", "Dakikada 220 – 320 levha"],
] as const;

export default function InlineFlexoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                Yüksek Performanslı Inline Flexo Baskı Hatları
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-slate-700">
                ZhenXing inline flexo sistemleri; baskı, kesim ve istifleme
                süreçlerini tek hat üzerinde birleştirerek yüksek hız, stabil
                kalite ve maksimum üretim verimliliği sunar.
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

            <div className="relative overflow-hidden rounded-[16px] bg-slate-900 shadow-[0_22px_90px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/machines/inline-flexo-baski.png"
                  alt="ZhenXing inline flexo baskı hattı görseli"
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
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-12 text-left text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200/85">
                  ZhenXing · Inline Flexo
                </p>
                <p className="mt-1 text-[16px] font-bold leading-none text-white">
                  Üretim videosu
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <YouTubeLiteEmbed
                  videoId="9jiRXJQTqHE"
                  title="ZhenXing inline flexo baskı hattı — üretim videosu"
                  posterSrc="/images/machines/zhenxing-inline-flexo-video-poster.jpg"
                  disableYoutubePosterFallback
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEKNİK GENEL BAKIŞ / HAT YAPISI — birleşik teknik blok */}
      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200/55 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.035)] md:p-8 lg:p-10">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-slate-500">
              TEKNİK GENEL BAKIŞ
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-[1.85rem] md:leading-tight">
              Inline Flexo Hat Yapısı
            </h2>
            <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.75] text-slate-600">
              ZhenXing inline flexo makineleri; tabakadan tabakaya üretim
              akışında baskı, slotting ve rotary die cutting işlemlerini tek hat
              üzerinde entegre şekilde sunar. Yüksek hız, hassas kontrol ve modüler
              yapı sayesinde endüstriyel üretimde güçlü bir hat mimarisi
              oluşturur.
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-0">
              {/* Sol: teknik özet — hafif yüzey, tablo değil */}
              <div className="min-w-0 lg:pr-8 xl:pr-10">
                <div className="rounded-lg border border-slate-200/45 bg-[#fcfcfd] px-5 py-6 shadow-[0_2px_14px_rgba(15,23,42,0.04)] sm:px-6 sm:py-7">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-8 lg:gap-x-9">
                    {sistemOzetiSatirlari.map(([label, value]) => (
                      <div key={label} className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase leading-snug tracking-[0.2em] text-slate-500">
                          {label}
                        </p>
                        <p className="mt-2 text-[14px] font-semibold leading-snug text-slate-900 sm:text-[15px]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sağ: aynı üst hizada, düz kartlar */}
              <div className="min-w-0 border-t border-slate-100 pt-10 lg:border-l lg:border-slate-100/90 lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
                <ul className="flex flex-col gap-2">
                  {[
                    [
                      "Hat mimarisi",
                      "Printer, slotter ve rotary die cutter ünitelerinin tek hatta senkronize çalışması.",
                    ],
                    [
                      "Servo ve otomasyon",
                      "Full servo yapı ile hassas ayar, tekrar edilebilir üretim ve kontrollü süreç yönetimi.",
                    ],
                    [
                      "Besleme esnekliği",
                      "Lead edge ve vakum transfer seçenekleri ile farklı üretim ihtiyaçlarına uyum.",
                    ],
                    [
                      "Üretim kapasitesi",
                      "Dakikada 220 – 320 levha aralığında yüksek hacimli üretim performansı.",
                    ],
                  ].map(([title, desc]) => (
                    <li
                      key={title}
                      className="flex gap-2 rounded-md border border-slate-200/65 bg-[#fcfcfd] px-2.5 py-1.5"
                    >
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]/90" />
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold tracking-tight text-slate-900 sm:text-[16px]">
                          {title}
                        </p>
                        <p className="mt-0.5 text-[12px] leading-[1.65] text-slate-900">
                          {desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Bu Inline Flexo Sistemi Ne Sağlar?
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {[
              [
                "Yüksek Üretim Hızı",
                "Dakikada yüksek adet üretim kapasitesi ile sipariş sürelerini kısaltır.",
              ],
              [
                "Tek Hat Üzerinde Üretim",
                "Baskı, kesim ve slotting işlemleri tek sistemde tamamlanır.",
              ],
              [
                "Stabil ve Kaliteli Baskı",
                "Servo kontrollü yapı ile yüksek baskı hassasiyeti sağlar.",
              ],
              [
                "Hızlı İş Değişimi",
                "Otomatik ayar sistemleri ile farklı işlere hızlı geçiş yapılır.",
              ],
            ].map(([title, desc]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#E6005C]" />
                  <div>
                    <h3 className="text-[15px] font-bold tracking-tight text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.65] text-slate-600">
                      {desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCER — ZHENXING */}
      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
            <div>
              <div className="inline-flex items-center gap-3.5">
                <div className="inline-flex items-center justify-center rounded-xl bg-slate-50/95 px-3 py-2 ring-1 ring-slate-200/60">
                  <Image
                    src="/images/logos/xingbao.png"
                    alt="Xingbao logo"
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain object-center md:h-9 md:max-h-[40px]"
                  />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Üretici
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                ZhenXing ile Inline Flexo Üretim Yaklaşımı
              </h2>

              <div className="mt-6 max-w-[54ch] space-y-3 text-[15px] leading-[1.75] text-slate-700">
                <p>
                  ZhenXing, yüksek hızlı inline flexo makinelerinde otomasyon,
                  servo kontrol ve dayanıklı mekanik yapı ile öne çıkan global
                  üreticilerden biridir.
                </p>
                <p>
                  Mikropak, proje ihtiyaçlarına uygun hat konfigürasyonu, kurulum
                  ve devreye alma süreçlerinde uçtan uca destek sunar.
                </p>
              </div>
            </div>

            <div className="lg:mt-10">
              <div className="rounded-[14px] border border-slate-800/70 bg-slate-900/70 px-5 py-6 shadow-[0_12px_30px_rgba(2,6,23,0.22)] backdrop-blur-[2px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-200">
                  Öne çıkan yetkinlikler
                </p>
                <ul className="mt-4 space-y-3.5">
                  {[
                    "Inline printer–slotter–die cutter hat entegrasyonu",
                    "Full servo ve modüler ünite esnekliği",
                    "Lead edge / vakum transfer besleme seçenekleri",
                    "Yüksek levha/dakika kapasitesi (modele bağlı)",
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
                Inline Flexo Sisteminizi Birlikte Belirleyelim
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Üretim kapasitenize ve yatırım hedeflerinize en uygun inline
                flexo çözümü için teknik ekibimizle iletişime geçin.
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-3 md:items-end">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-[1.05] hover:-translate-y-[1px]"
                >
                  Teklif Talep Et
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:border-[#E6005C] hover:bg-slate-800/60 hover:-translate-y-[1px]"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
