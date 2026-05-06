import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrePrintFlexoVideoPlayer from "./PrePrintFlexoVideoPlayer";

export const metadata: Metadata = {
  title: "Pre-Print Flexo Baskı Sistemleri | Yongcheng | Mikropak Ambalaj",
  description:
    "Bobinden bobine pre-print flexo baskı sistemleri. Düşük gramajlı kağıtlarda yüksek hız, kayıt stabilitesi ve merkezi üretim yapısı ile yüksek fire kontrolü hedeflenir.",
};

export default function PrePrintFlexoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                PRE-PRINT FLEXO (BOBİNDEN BOBİNE)
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.6rem]">
                Yüksek Kapasiteli Pre-Print Flexo Baskı Sistemleri
              </h1>
              <p className="mt-4 max-w-[56ch] text-[16px] leading-[1.7] text-slate-700">
                Bobinden bobine üretim yapısı ile düşük gramajlı kağıtlarda
                yüksek hız ve stabil baskı kalitesi sunar.
              </p>

              <div className="mt-6">
                <p className="text-[13px] font-semibold text-slate-900">
                  <span className="text-[#0B1F35]">Highlight:</span>{" "}
                  Yüksek hacimli üretim · Düşük fire oranı · Stabil baskı kalitesi
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-[1.05] hover:-translate-y-[1px]"
                >
                  Teklif Talep Et
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[12px] bg-slate-900 shadow-[0_22px_90px_rgba(15,23,42,0.10)]">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/images/machines/inline-flexo-baski.png"
                  alt="Pre-print flexo baskı makinesi ve hat içi endüstriyel çalışma görseli"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/12 to-black/0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SİSTEM ÖZETİ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                SİSTEM ÖZETİ
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Pre-Print Flexo Baskı Sisteminin Yapısı
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  ["Çalışma Yapısı", "Bobinden bobine"],
                  ["Baskı Türü", "Flexo pre-print"],
                  ["Uygulama", "Corrugator öncesi baskı"],
                  ["Üretim Tipi", "Yüksek hacimli üretim"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {label}
                    </p>
                    <p className="text-[16px] font-semibold text-slate-900">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Sağladığı avantajlar
              </h3>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.7] text-slate-700">
                {[
                  "Yüksek üretim verimliliği",
                  "Düşük fire oranı",
                  "Stabil baskı kalitesi",
                  "Sürekli üretim akışı",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEDEN PRE-PRINT */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              YÖNLENDİRİCİ SEÇİM
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Pre-Print Flexo Neden Tercih Edilir?
            </h2>

            <ul className="mt-8 space-y-3 text-[16px] leading-[1.8] text-slate-700">
              {[
                "Düşük gramajlı kağıtlarda yüksek performans",
                "Merkezi üretim yapısı ile kalite tutarlılığı",
                "Uzun üretim serilerinde maliyet avantajı",
                "Corrugator hattı ile yüksek uyum",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TEKNİK YETENEKLER */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Sistem Konfigürasyonu
            </h2>

            <ul className="mt-8 space-y-3 text-[16px] leading-[1.8] text-slate-700">
              {[
                "İstenen renk adedine göre baskı ünitesi konfigürasyonu",
                "Otomatik register kontrol sistemleri",
                "Yüksek hassasiyetli baskı",
                "Inline rotary cutter ve kesim entegrasyon opsiyonları",
                "Farklı kağıt tiplerine uyum",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VİDEO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Pre-Print Hattını Çalışırken Görün
            </h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
              Yongcheng pre-print flexo baskı sistemlerinin üretim sürecini ve çalışma prensibini inceleyin.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <PrePrintFlexoVideoPlayer />
          </div>
        </div>
      </section>

      {/* KULLANIM ALANLARI */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Uygulama Alanları
            </h2>

            <ul className="mt-8 space-y-3 text-[16px] leading-[1.8] text-slate-700">
              {[
                "Yüksek hacimli kutu üretimi",
                "Marka baskılı oluklu mukavva üretimi",
                "Gıda ve FMCG ambalajları",
                "Endüstriyel ambalaj üretimi",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ÜRETİCİ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                ÜRETİCİ
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Yongcheng Hakkında
              </h2>
              <p className="mt-6 text-[16px] leading-[1.8] text-slate-700">
                Yongcheng, pre-print flexo baskı sistemlerinde uzmanlaşmış, yüksek
                hızlı ve stabil üretim çözümleri geliştiren üreticiler arasında yer
                alır.
              </p>
            </div>

            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Üretim yaklaşımı
              </h3>
              <ul className="mt-4 space-y-3 text-[16px] leading-[1.8] text-slate-700">
                {[
                  "Kayıt stabilitesi odaklı kurulum yaklaşımı",
                  "Yüksek hız çalışma düzeni",
                  "Süreklilik hedefli proses uyumu",
                  "Hat entegrasyonu ile uyumlu mimari",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-slate-900/70 px-6 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Projeniz için doğru pre-print sistemini birlikte planlayalım
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Üretim hedeflerinize uygun konfigürasyonu teknik ekibimizle
                birlikte belirleyin.
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
                  Teknik Görüşme Planla
                </Link>
              </div>
              <p className="text-[13px] font-medium text-slate-200/75">
                Her proje, ihtiyaca özel olarak konfigüre edilmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

