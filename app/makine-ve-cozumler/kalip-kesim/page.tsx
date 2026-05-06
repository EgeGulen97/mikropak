import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kalıp Kesim Makineleri | Hassas Kesim Çözümleri | Mikropak Ambalaj",
  description:
    "Oluklu mukavva ve karton uygulamaları için kalıp kesim makineleri: hassas kesim, yüksek hız, tekrar edilebilir kalite ve üretim hattı entegrasyonuna uygun çözümler.",
};

export default function DieCuttingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                Kalıp Kesim Makineleri
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-slate-700">
                Hassas kesim geometrisi, yüksek hat hızı ve tekrar edilebilir üretim
                performansı için rotary ve flatbed kalıp kesim sistemleri.
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
                  src="/images/machines/die_cutting.jpg"
                  alt="Kalıp kesim makinesi endüstriyel üretim görseli"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-12 text-left text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200/85">
                  Referans Sistem
                </p>
                <p className="mt-1 text-[16px] font-bold leading-none text-white">
                  Hassas Kesim / Yüksek Tekrar
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/machines/die_cutting.jpg"
                  alt="Kalıp kesim sistemi referans görseli"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEM ÖZETİ */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Sistem Özeti
              </h2>
              <p className="mt-3 max-w-[60ch] text-[14px] leading-[1.7] text-slate-600">
                Kalıp kesim hattında hassasiyet, hız ve tekrar doğruluğu; ürün
                kalitesi ile fire oranını doğrudan etkileyen temel kriterlerdir.
              </p>

              <div className="mt-6 divide-y divide-slate-200">
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Kesim Tipi
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Rotary / Flatbed
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Çalışma Eni
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    1600 – 2800 mm
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Üretim Hızı
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    150 – 300 tabaka/dk
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Kesim Hassasiyeti
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Yüksek Tekrar Doğruluğu
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Entegrasyon
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Hat İçi Senkron Çalışma
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ul className="mt-6 space-y-2.5">
                {[
                  [
                    "Hassas Kesim",
                    "Kritik ürün geometrilerinde tutarlı kesim kalitesi sağlar",
                  ],
                  [
                    "Yüksek Hız",
                    "Üretim ritmini koruyarak kapasite hedeflerini destekler",
                  ],
                  [
                    "Tekrar Edilebilirlik",
                    "Uzun üretim serilerinde stabil proses performansı sunar",
                  ],
                  [
                    "Hat Entegrasyonu",
                    "Baskı ve taşıma sistemleriyle uyumlu üretim akışı sağlar",
                  ],
                ].map(([title, desc], idx) => (
                  <li
                    key={title}
                    className={`flex gap-3 rounded-[10px] px-4 py-2.5 shadow-[0_3px_10px_rgba(15,23,42,0.04)] ${
                      idx === 0
                        ? "border border-slate-400 bg-white"
                        : "border border-slate-300 bg-white"
                    }`}
                  >
                    <span className="mt-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <div>
                      <p className="text-[15px] font-bold text-slate-900">{title}</p>
                      <p className="mt-1 text-[13px] leading-[1.6] text-slate-600">
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
                  src="/images/logos/mikropak.png"
                  alt="Mikropak Ambalaj logo"
                  width={84}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Çözüm Ortağı
                </span>
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Üretici Hakkında
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Kalıp kesimde proses güvenliği ve saha kararlılığı
              </h2>

              <div className="mt-6 max-w-[54ch] space-y-3 text-[15px] leading-[1.75] text-slate-700">
                <p>
                  Üretici altyapısı, yüksek devirli kesim senaryolarında ölçü
                  kararlılığı ve tekrar doğruluğu odaklı sistem tasarımı sunar.
                </p>
                <p>
                  Mikropak, hat planlama, teknik koordinasyon ve devreye alma
                  süreçlerinde üretim hedefinize uygun proje yönetimi sağlar.
                </p>
              </div>
            </div>

            <div className="lg:mt-16">
              <div className="rounded-[14px] border border-slate-700 bg-slate-900/70 px-5 py-5 shadow-[0_10px_26px_rgba(2,6,23,0.30)] backdrop-blur-[2px]">
                <div className="flex items-start gap-4">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-200">
                      Üretim Odak Alanları
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-3.5">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Hassas kesim ve düşük fire hedefi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Yüksek hızda stabil proses yönetimi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Baskı ve taşıma hatlarıyla entegrasyon
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Uzun vadeli tekrar performansı
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-slate-900/70 px-6 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="mt-0 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Kalıp kesim yatırımınız için doğru sistemi birlikte planlayalım
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Ürün geometriniz ve kapasite hedefinize uygun kesim sistemi için
                teknik ekibimizle iletişime geçin.
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

              <p className="text-[13px] font-medium text-slate-200/75">
                Her proje, üretim hattının gereksinimlerine göre özel yapılandırılır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
