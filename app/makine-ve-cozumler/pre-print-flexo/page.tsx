import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import YouTubeLiteEmbed from "../../components/YouTubeLiteEmbed";

export const metadata: Metadata = {
  title:
    "Flexo Pre-Print Sistemleri | Fengming | Oluklu Mukavva | Mikropak Ambalaj",
  description:
    "Fengming flexo pre-print sistemleri: yüksek hız, hassas register, servo kontrollü yapı, sleeve / petal / full servo sleeve tipleri ve oluklu mukavva için endüstriyel flexo baskı çözümleri.",
};

const prePrintConfigurations = [
  {
    title: "Yüksek Hızlı Sleeve Type Flexo Pre-Print Baskı Sistemleri",
    text: "Sleeve tip flexo pre-print sistemleri, bobinden bobine flexo baskı süreçlerinde süreklilik ve stabil baskı kalitesi sunar; yüksek hızlı oluklu mukavva üretiminde hızlı sleeve değişimiyle duruşları azaltır, hassas register kontrolüyle hatta tutarlı sonuçlar üretir. Endüstriyel ölçekte baskı ve hat performansını birlikte taşır.",
    highlights: [
      "Yüksek hızda stabil flexo baskı ve sürekli üretim",
      "Hızlı sleeve değişimi, düşük duruş süresi",
      "Oluklu mukavva hatlarında hassas register",
    ] as const,
    imageSrc: "/images/machines/full-servo-flexo-printing-machine.jpg",
    imageAlt:
      "Sleeve type flexo pre-print baskı sistemi — oluklu mukavva üretimi",
  },
  {
    title: "Esnek Üretim İçin Petal Type Flexo Pre-Print Baskı Sistemleri",
    text: "Bağımsız baskı üniteleriyle kurgulanan petal tip flexo pre-print sistemleri, orta ve kısa tirajlarda hızlı iş değişimine uygundur; bobinden bobine flexo baskı hatlarında da esnek üretim akışında yüksek baskı doğruluğunu korur. Farklı iş profillerine çevik uyum, pre-print sistemlerinde operasyonel rahatlık sağlar.",
    highlights: [
      "Bağımsız ünitelerle esnek, ölçeklenebilir üretim",
      "Orta ve kısa tirajlarda hızlı iş geçişleri",
      "Yüksek baskı doğruluğu ve tekrarlanabilir kalite",
    ] as const,
    imageSrc:
      "/images/machines/petal-type-flexographic-printing-machine-servo-drive.jpg",
    imageAlt:
      "Petal type flexo pre-print baskı — bağımsız baskı üniteleri",
  },
  {
    title: "Plastiksiz Kaplama ile Entegre Flexo Baskı ve Kaplama Sistemi",
    text: "FM-T1020 ile sunulan plastiksiz kaplama teknolojisi, klasik plastik film kullanımına alternatif sunarak sürdürülebilir üretimi destekler. Flexo baskı ve kaplamayı tek hat üzerinde birleştirir; enerji ve malzeme verimliliğiyle çevresel ve operasyonel faydaları bir arada sunar.",
    highlights: [
      "Plastiksiz kaplama ile sürdürülebilir üretim",
      "Tek hat üzerinde baskı ve kaplama verimliliği",
      "Çevresel ve operasyonel avantajlar",
    ] as const,
    imageSrc: "/images/machines/no-plastic-coating-machine.jpg",
    imageAlt:
      "FM-T1020 entegre flexo baskı ve plastiksiz kaplama — tek hat üretim",
  },
] as const;

export default function PrePrintFlexoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                Oluklu Mukavva İçin Yüksek Performanslı Flexo Pre-Print Sistemleri
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-slate-700">
                Yüksek hız, hassas register ve gelişmiş otomasyon altyapısı ile
                flexo pre-print sistemleri; yüksek kalite baskı ve üretim
                sürekliliğini bir araya getirir.
              </p>
              <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Yüksek hız • Hassas register • Servo kontrollü yapı
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
              <div className="relative aspect-[16/10] w-full p-5 md:p-7">
                <Image
                  src="/images/machines/pre-printing-wide-flexographic-printing-machine.jpg"
                  alt="Flexo pre-print baskı hattı — endüstriyel görsel"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-12 text-left text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200/85">
                  Referans Sistem
                </p>
                <p className="mt-1 text-[16px] font-bold leading-none text-white">
                  Flexo Pre-Print / Fengming
                </p>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <YouTubeLiteEmbed
                  videoId="OJBksER9nPI"
                  title="Flexo Pre-Print / Fengming — Üretim Videosu"
                  posterSrc="/images/machines/pre-printing-wide-flexographic-printing-machine.jpg"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexo pre-print system configurations — engineering blocks */}
      <section className="border-t border-slate-100 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Flexo Baskı ve Pre-Print Sistem Konfigürasyonları
          </h2>
          <p className="mt-4 max-w-[68ch] text-[15px] leading-[1.75] text-slate-600">
            Oluklu mukavva üretiminde endüstriyel flexo baskı ve flexo pre-print
            çözümleri; hız, baskı kalitesi ve hat sürekliliğini birlikte hedefler.
            Aşağıdaki pre-print sistemleri, üretim hacminize göre seçilir—tutarlı
            flexo baskı (flekso baskı) sonuçları için tasarlanmıştır.
          </p>

          <div className="mt-16 space-y-24 md:space-y-28">
            {prePrintConfigurations.map((block) => (
              <article
                key={block.title}
                className="group grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-16"
              >
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_26px_80px_rgba(15,23,42,0.16)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,0,92,0.18),transparent_55%)]" />
                  <div className="relative aspect-[16/10] w-full p-5 md:p-7">
                    <Image
                      src={block.imageSrc}
                      alt={block.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="max-w-xl lg:max-w-none">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                    Sistem tipi
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-[2rem]">
                    {block.title}
                  </h3>
                  <p className="mt-4 max-w-[56ch] text-[15px] leading-[1.75] text-slate-700">
                    {block.text}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {block.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-[12px] font-medium text-slate-700 shadow-sm shadow-slate-900/5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f] hover:shadow-[0_18px_50px_rgba(230,0,92,0.22)]"
                    >
                      Konfigürasyon Talep Et
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-20 max-w-[68ch] text-[15px] leading-[1.75] text-slate-600">
            Oluklu mukavva hattınız için en uygun flexo baskı ve flexo pre-print
            konfigürasyonunu birlikte netleştirmek üzere bizimle iletişime
            geçin.
          </p>
        </div>
      </section>

      {/* TRUST — FENGMING */}
      <section className="bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative h-9 w-[138px] opacity-90">
                  <Image
                    src="/images/logos/fengming-logo.png"
                    alt="Fengming logo"
                    fill
                    sizes="138px"
                    className="object-contain object-left"
                  />
                </div>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-600">
                  ÜRETİCİ PARTNER
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Fengming ile Güçlü Üretim Ortaklığı
              </h2>

              <div className="mt-6 max-w-[54ch] text-[15px] leading-[1.75] text-slate-700">
                <p>
                  Mikropak, flexo pre-print ve bobinden bobine flexo baskı
                  çözümlerinde güçlü üretici iş ortaklıklarıyla projelere değer
                  katar. Fengming’in üretim tecrübesi ve teknik altyapısı, oluklu
                  mukavva uygulamalarında yüksek kalite ve operasyonel süreklilik
                  sağlar.
                </p>
                <p className="mt-4">
                  Pre-print sistemlerinden servo kontrollü flexo baskı çözümlerine
                  kadar farklı üretim ihtiyaçlarına uygun konfigürasyonlar, proje
                  bazlı değerlendirme ile sunulur.
                </p>
              </div>
            </div>

            <div className="lg:mt-10">
              <div className="rounded-[16px] border border-slate-800/70 bg-slate-900/70 px-6 py-6 shadow-[0_12px_30px_rgba(2,6,23,0.22)] backdrop-blur-[2px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-200">
                  ÖNE ÇIKAN YETKİNLİKLER
                </p>
                <ul className="mt-4 space-y-3.5">
                  {[
                    "Flexo pre-print sistem konfigürasyonları",
                    "Servo ve register hassasiyeti",
                    "Bobinden bobine flexo baskı çözümleri",
                    "Oluklu mukavva uygulamalarına uyum",
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

      {/* APPLICATION AREAS */}
      <section className="border-t border-slate-100 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16 xl:gap-20">
            <div className="max-w-xl lg:max-w-none">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Kullanım Alanları
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-slate-700">
                <p>
                  Flexo pre-print; oluklu mukavva üretimi ve bobinden bobine flexo
                  baskı hatlarında, yüksek hacimli ambalaj operasyonlarında öne çıkar.
                  Sürekli üretim ve tutarlı baskı standardı hedefleyen tesisler için
                  uygundur.
                </p>
                <p>
                  Baskı oluklamadan önce kağıtta yapılır; gramaj ve maliyet
                  optimizasyonu ile ürün ağırlığını düşürür. Koli ve ambalajın yanı
                  sıra paper cup ve kağıt poşet gibi yüksek adetli kağıt ürünlerde de
                  değerlendirilebilir.
                </p>
              </div>
              <p className="mt-10 text-[15px] font-medium leading-snug text-slate-800">
                Üretim yapınıza uygun en verimli pre-print çözümü doğru
                konfigürasyon ile belirlenir.
              </p>
            </div>

            <aside className="rounded-2xl border border-slate-200/90 bg-white/80 p-8 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-[2px] md:p-10">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Neler Kazanırsınız?
              </h3>
              <ul className="mt-8 space-y-5 text-[15px] leading-snug text-slate-800">
                {[
                  "Düşük gramajla hammadde tasarrufu",
                  "Hafif ürün ve lojistik avantajı",
                  "Tutarlı baskı kalitesi ve hat sürekliliği",
                  "Üretim hedefine göre esnek konfigürasyon",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3.5">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E6005C]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-slate-900/70 px-6 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="mt-0 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Üretiminiz İçin Doğru Flexo Pre-Print Çözümünü Birlikte
                Belirleyelim
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Üretim hedeflerinize en uygun flexo baskı çözümünü belirlemek için
                bizimle iletişime geçin.
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
