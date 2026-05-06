import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { homeContent } from "../../content";
import { brandProfiles } from "./brandData";

export const metadata: Metadata = {
  title: "Global Üreticiler | Mikropak Ambalaj",
  description:
    "Mikropak Ambalaj, oluklu mukavva ve ambalaj üretim teknolojilerinde dünya çapında lider markaların Türkiye temsilciliğini yürütmektedir.",
};

const heroTitle = "Dünya Lideri Üreticilerle Güçlü İş Ortaklıkları";
const heroDescription =
  "Mikropak Ambalaj, ambalaj ve oluklu mukavva üretim teknolojilerinde dünya çapında lider üreticilerle iş birliği yaparak, Türkiye’de yüksek verimlilik, sürdürülebilirlik ve kalite odaklı çözümler sunar.";

const heroEyebrow = "TEMSİL ETTİĞİMİZ GLOBAL ÜRETİCİLER";

export default function UreticilerPage() {
  const gridBrands = homeContent.manufacturers.logos
    .map((logo) => brandProfiles.find((brand) => brand.name === logo.name))
    .filter((brand) => !!brand);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/ureticiler.png')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.18) 42%, rgba(0,0,0,0.07) 70%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-0 w-[68%] backdrop-blur-[1px] md:w-[60%] lg:w-[52%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 58%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid min-h-[470px] items-center md:min-h-[500px]">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                {heroEyebrow}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-[2.7rem]">
                {heroTitle}
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-white/85">
                {heroDescription}
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-3">
                {[
                  { value: "10+", label: "Global Marka" },
                  { value: "30+ Yıl", label: "Sektör Deneyimi" },
                  { value: "Türkiye Geneli", label: "Kurulu Hat ve Projeler" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/20 bg-white/[0.06] px-3 py-3 shadow-[0_12px_36px_rgba(2,6,23,0.18)] backdrop-blur-[10px] transition-transform transition-shadow duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_42px_rgba(236,72,153,0.22)]"
                  >
                    <p className="text-[15px] font-semibold leading-none text-white">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium leading-[1.35] text-white/80">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#manufacturers-grid"
                  className="inline-flex items-center rounded-full bg-[#E6005C] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition-transform hover:scale-[1.02] hover:bg-[#cc004f] hover:shadow-[0_18px_50px_rgba(230,0,92,0.25)]"
                >
                  Üreticileri Keşfet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO GRID */}
      <section
        id="manufacturers-grid"
        className="border-b border-slate-100 bg-white py-14"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                {homeContent.manufacturers.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                {homeContent.manufacturers.title}
              </h2>
              <p className="mt-1.5 max-w-md text-[15px] leading-[1.7] text-slate-700">
                {homeContent.manufacturers.description}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {gridBrands.map((brand) => {
                return (
                  <Link
                    key={brand.slug}
                    href={`/ureticiler/${brand.slug}`}
                    className="group flex min-h-[170px] flex-col items-center justify-start rounded-xl border border-slate-200/70 bg-white/70 px-3 py-4 text-center shadow-sm shadow-slate-900/5 transition hover:-translate-y-[2px] hover:border-[#E6005C]/30 hover:bg-white hover:shadow-lg hover:shadow-slate-900/10 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6005C]"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logosu`}
                        width={240}
                        height={96}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="mx-auto h-16 max-h-20 object-contain transition duration-300 group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-3 text-[13px] font-semibold tracking-tight text-slate-900">
                      {brand.name}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-[1.6] text-slate-600">
                      {brand.shortDescription}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BU ÜRETİCİLERLE ÇALIŞMANIN AVANTAJLARI */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Bu üreticilerle çalışmanın avantajları
            </h2>
            <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
              Proje süreçlerinizi hızlandıran ve üretim kalitenizi destekleyen güçlü iş ortaklığı yaklaşımı.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Global kalite standartları",
              "Kanıtlanmış endüstriyel performans",
              "Güvenilir teknik destek",
              "Yedek parça erişimi",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200/85 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_18px_50px_rgba(230,0,92,0.14)]"
              >
                <span className="mt-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#E6005C]" />
                <span className="text-[14px] font-semibold leading-[1.6] text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-slate-900/70 px-6 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Projeniz için en doğru üreticiyle çalışın
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-200/90">
                Kapasite hedeflerinize uygun çözüm için ekibimizle iletişime geçin.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-3 md:w-auto md:items-end">
              <Link
                href="/iletisim"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f] hover:shadow-[0_18px_50px_rgba(230,0,92,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:w-auto"
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

