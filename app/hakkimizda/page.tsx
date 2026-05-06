import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda | Mikropak Ambalaj",
  description:
    "Mikropak Ambalaj: 1994’ten beri ambalaj ve oluklu mukavva teknolojilerinde global üreticilerle iş birliği, satıştan kuruluma uçtan uca çözümler.",
};

const bizKimizHighlights = [
  {
    title: "30+ Yıl Sektör Deneyimi",
    line: "Köklü tecrübe ile güçlü projeler",
  },
  {
    title: "Global Üretici Ağı",
    line: "Dünya çapında lider markaların temsilciliği",
  },
  {
    title: "Uçtan Uca Proje ve Kurulum",
    line: "Satıştan devreye almaya kadar kesintisiz destek",
  },
  {
    title: "Güvenilir ve Uzman Ekip",
    line: "Teknik uzmanlık ve uzun vadeli iş ortaklığı",
  },
] as const;

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex min-h-[min(72vh,640px)] items-center overflow-hidden border-b border-slate-200/50">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero.png"
            alt="Endüstriyel ambalaj üretim ortamı"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Single overlay: left darker → right lighter, image stays visible */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/48 to-slate-950/12"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/85">
              MIKROPAK AMBALAJ
            </p>
            <h1 className="mt-6 text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.5rem] md:leading-[1.08] lg:text-[2.75rem]">
              Ambalaj Sektöründe Güvenilir Çözüm Ortağınız
            </h1>
            <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.75] text-white/90 md:text-[18px] md:leading-[1.72]">
              1994 yılından bu yana, global üreticilerle kurduğumuz güçlü iş birlikleri sayesinde müşterilerimize satıştan fabrika kurulumuna kadar uçtan uca çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Biz Kimiz */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-x-16 xl:gap-x-20">
            <div>
              <p className="inline-block text-[12px] font-semibold uppercase tracking-[0.34em] text-slate-600 md:text-[13px] md:tracking-[0.36em] border-b border-slate-300/70 pb-2.5">
                BİZ KİMİZ
              </p>
              <div className="mt-8 max-w-[48ch] space-y-7 text-[16px] leading-[1.88] text-slate-600 md:text-[17px] md:leading-[1.9]">
                <p>
                  Mikropak Ambalaj, 1994 yılında oluklu mukavva üretimi ile sektöre adım atmıştır. Yıllar içinde edindiği tecrübe ile güvenilir bir çözüm ortağı haline gelmiştir.
                </p>
                <p>
                  2012 yılından itibaren Amerika, Çin, Almanya ve İtalya başta olmak üzere dünya çapında önde gelen makine üreticilerinin Türkiye temsilciliğini üstlenmiştir. Bugün, satıştan proje kurulumuna kadar tüm süreçlerde müşterilerine uçtan uca destek sunmaktadır.
                </p>
              </div>
            </div>

            <div className="min-w-0 lg:pl-2">
              <ul className="space-y-11 md:space-y-12">
                {bizKimizHighlights.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6005C]"
                      aria-hidden
                    />
                    <div>
                      <p className="text-[14px] font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                        {item.line}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200/60 bg-[#020617] text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center md:gap-16">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-[1.85rem] md:leading-snug">
                Projeniz için doğru çözüm ortağını seçin
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-300">
                Üretim hedeflerinize uygun çözümler için bizimle iletişime geçin.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#E6005C] px-8 py-3.5 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f] md:w-auto"
            >
              Teklif Talep Et
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
