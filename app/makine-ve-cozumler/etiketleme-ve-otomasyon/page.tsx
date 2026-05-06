import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Etiketleme ve Otomasyon Sistemleri | Automatan | Mikropak Ambalaj",
  description:
    "Etiketleme ve otomasyon sistemleri: hat sonu çözümler, üretim verimliliği artırma, üretim takibi ve proses otomasyonu için endüstriyel uygulamalar.",
};

export default function LabelingAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                Etiketleme ve Otomasyon Sistemleri
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-slate-700">
                Hat sonu süreçlerde üretim takibini güçlendiren, verimlilik artıran
                ve operasyon sürekliliğini destekleyen etiketleme ve otomasyon
                çözümleri.
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
                  src="/images/machines/Model_A_Litho-Labeler.png"
                  alt="Etiketleme ve otomasyon sistemi görseli"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL / VIDEO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-12 text-left text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200/85">
                  Referans Sistem
                </p>
                <p className="mt-1 text-[16px] font-bold leading-none text-white">
                  Hat Sonu Etiketleme ve Otomasyon
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/machines/Model_A_Litho-Labeler.png"
                  alt="Hat sonu etiketleme referans görseli"
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
                Etiketleme ve otomasyon altyapısı; hat sonu verimliliği, üretim
                takibi ve proses sürekliliği için dijital kontrol odaklı kurgulanır.
              </p>

              <div className="mt-6 divide-y divide-slate-200">
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Sistem Kapsamı
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Etiketleme / Besleme / İzleme
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Hat Sonu Akışı
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Otomatik Toplama ve Takip
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Operasyon Modu
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Yarı / Tam Otomatik
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Veri Takibi
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Üretim İzlenebilirliği
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Hedef
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Verimlilik ve Süreklilik
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ul className="mt-6 space-y-2.5">
                {[
                  [
                    "Hat Sonu Çözümler",
                    "Çıkış süreçlerinde kontrollü akış ve operasyon standartlaşması",
                  ],
                  [
                    "Verimlilik Artırma",
                    "Tekrarlı operasyonları otomatikleştirerek iş gücü verimliliği",
                  ],
                  [
                    "Üretim Takibi",
                    "Etiketleme ve veri toplama ile izlenebilirlik altyapısı",
                  ],
                  [
                    "Otomasyon Entegrasyonu",
                    "Mevcut hat ekipmanları ile senkron çalışan sistem yaklaşımı",
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
                  src="/images/logos/automatan_logo.jpg"
                  alt="Automatan logo"
                  width={96}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Üretici
                </span>
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
                Üretici Hakkında
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Automatan ile hat sonu otomasyon yaklaşımı
              </h2>

              <div className="mt-6 max-w-[54ch] space-y-3 text-[15px] leading-[1.75] text-slate-700">
                <p>
                  Automatan, etiketleme ve otomasyon çözümlerinde hat sonu verimliliği
                  artıran, izlenebilirlik odaklı sistem mimarisi sunar.
                </p>
                <p>
                  Mikropak, uygulama planlama, teknik entegrasyon ve devreye alma
                  süreçlerinde üretim akışınıza uygun proje desteği sağlar.
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
                      Hat sonu etiketleme ve takip süreçleri
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Üretim verimliliği artırma odaklı otomasyon
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Süreç izlenebilirliği ve veri toplama
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span className="text-[15px] leading-[1.7] text-slate-100">
                      Mevcut hatlarla entegre otomasyon altyapısı
                    </span>
                  </li>
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
                Etiketleme ve otomasyon sisteminizi birlikte planlayalım
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Hat sonu süreçleriniz için verimlilik ve izlenebilirlik odaklı çözüm
                alternatiflerini teknik ekibimizle değerlendirin.
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
