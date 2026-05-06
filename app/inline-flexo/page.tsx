import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inline Flexo (Tabakadan Tabakaya) | Mikropak Ambalaj",
  description:
    "Tabakadan tabakaya inline flexo baskı sistemleri. Die cutter ve rotary cutter ile entegre hat yapısı, esnek üretim ve hızlı iş değişimi.",
};

export default function InlineFlexoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              INLINE FLEXO
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.6rem]">
              Tabakadan Tabakaya Üretim
            </h1>
            <p className="mt-3 max-w-[44rem] text-[16px] leading-[1.7] text-slate-700">
              Kutu üretimine direkt geçiş hedefiyle, die cutter ve rotary cutter
              ile entegre inline flexo sistemler projeye özel kurgulanır.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="max-w-5xl rounded-[16px] border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Detay Talep Edin
            </h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
              Ürün tipi ve hız hedefinize göre inline flexo hat taslağını
              teknik ekibimizle değerlendirelim.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </section>
    </main>
  );
}

