import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Makine ve Çözümler | Mikropak Ambalaj",
  description:
    "Oluklu mukavva üretimi, baskı ve karton işleme süreçleri için makine ve teknoloji çözümleri. Üretim hedefinize uygun hat, baskı, kesim ve otomasyon sistemlerini keşfedin.",
};

const machineCards = [
  {
    href: "/makine-ve-cozumler/oluklu-mukavva-hatlari/xinguang",
    label: "ANA ÜRETİM HATTI",
    title: "Oluklu Mukavva Hatları",
    context: "Yüksek hacimli üretim yatırımları için ideal",
    description:
      "Kapasite hedefinize uygun hat konfigürasyonu ile stabil üretim ve verimlilik odaklı corrugator çözümleri.",
    features: [
      "Hız ve stabilite optimizasyonu",
      "Hat entegrasyonu ve planlama",
      "Devreye alma koordinasyonu",
    ],
    image: {
      src: "/images/machines/xinguang_oluklu_hatti.png",
      alt: "Oluklu mukavva üretim hattı (corrugator) görseli",
    },
  },
  {
    href: "/makine-ve-cozumler/pre-print-flexo",
    label: "BASKI SİSTEMİ",
    title: "Pre-Print Flexo Baskı Makineleri",
    context: "Bobinden bobine üretim odaklı baskı yatırımları için",
    description:
      "Düşük gramajlı kağıtlarda verimlilik, yüksek baskı kalitesi ve yüksek hız hedefleri için pre-print flexo çözümleri.",
    features: [
      "Bobinden bobine üretim",
      "Yüksek hız ve kayıt stabilitesi",
      "Düşük gramaj verimliliği",
    ],
    image: {
      src: "/images/machines/pre-printing-wide-flexographic-printing-machine.jpg",
      alt: "Pre-print flexo baskı hattı görseli",
    },
  },
  {
    href: "/makine-ve-cozumler/inline-flexo",
    label: "BASKI SİSTEMİ",
    title: "Inline Flexo Baskı Makineleri",
    context: "Tabakadan tabakaya yüksek kapasiteli üretim için",
    description:
      "Rotary die cutter entegrasyonu, esnek konfigürasyon ve yüksek üretim kapasitesi için inline flexo sistemleri.",
    features: [
      "Tabakadan tabakaya üretim",
      "Rotary die cutter entegrasyonu",
      "Esnek konfigürasyon",
    ],
    image: {
      src: "/images/machines/inline-flexo-baski.png",
      alt: "Inline flexo baskı makinesi görseli",
    },
  },
  {
    href: "/makine-ve-cozumler/kalip-kesim",
    label: "KESİM TEKNOLOJİSİ",
    title: "Kalıp Kesim Makineleri",
    context: "Hassas kesim ve düşük fire ihtiyaçları için",
    description:
      "Oluklu ve karton ürünlerde hassasiyet ve proses güvenliği için rotary ve flatbed kesim çözümleri.",
    features: [
      "Rotary & flatbed alternatifleri",
      "Hassasiyet ve düşük fire hedefi",
      "Hat içi senkron çalışma",
    ],
    image: {
      src: "/images/machines/die_cutting.jpg",
      alt: "Kalıp kesim makinesi görseli",
    },
  },
  {
    href: "/makine-ve-cozumler/dijital-baski",
    label: "DİJİTAL TEKNOLOJİ",
    title: "Dijital Baskı Sistemleri",
    context: "Kısa tiraj ve hızlı iş değişimi için",
    description:
      "Kısa tiraj ve kişiselleştirme için endüstriyel single pass / multi pass dijital baskı çözümleri.",
    features: ["Single pass & multi pass mimarisi", "Hızlı iş değişimi", "Veri odaklı üretim esnekliği"],
    image: {
      src: "/images/machines/digital-printing-machine.png",
      alt: "Endüstriyel dijital baskı makinesi görseli",
    },
  },
  {
    href: "/makine-ve-cozumler/otomasyon",
    label: "OTOMASYON",
    title: "Otomasyon ve Yardımcı Sistemler",
    context: "Hat sonu akışını güçlendirmek için",
    description:
      "Etiketleme, besleme ve robotik yardımcı sistemlerle akış, verimlilik ve izlenebilirlik.",
    features: [
      "Otomatik etiketleme çözümleri",
      "Robotik besleme opsiyonları",
      "İzlenebilirlik ve akış desteği",
    ],
    image: {
      src: "/images/machines/Model_A_Litho-Labeler.png",
      alt: "Otomasyon ve etiketleme sistemleri görseli",
    },
  },
  {
    href: "/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri",
    label: "DESTEK ÜRÜNLERİ",
    title: "Yedek Parça ve Hat Bileşenleri",
    context: "Üretim sürekliliği ve planlı bakım için",
    description:
      "Kritik yedek parça ve hat bileşenleriyle hızlı tedarik, doğru eşleştirme ve planlı bakım yaklaşımı.",
    features: [
      "Oluklu vals ve kesim bileşenleri",
      "Kritik yedek parça tedariki",
      "Servis koordinasyonu",
    ],
    image: {
      src: "/images/machines/single-facer.jpg",
      alt: "Ondüle vals ve yedek parça çözümleri görseli",
    },
  },
] as const;

const solutionGuide = [
  {
    title: "Yüksek hacimli üretim hedefi",
    text: "Hat kapasitesi, enerji verimliliği ve stabilite odaklı corrugator konfigürasyonlarını önceliklendirin.",
  },
  {
    title: "Baskı kalitesi odaklı üretim",
    text: "Kayıt kontrolü, tekrar edilebilir kalite ve hat içi otomasyonla flexo ve dijital baskı seçeneklerini değerlendirin.",
  },
  {
    title: "Hassas kesim ihtiyaçları",
    text: "Ürün tipinize göre rotary veya flatbed çözümlerle düşük fire ve proses güvenliğini hedefleyin.",
  },
  {
    title: "Hat sonu otomasyon ihtiyacı",
    text: "Etiketleme, besleme ve robotik yardımcı sistemlerle akışı güçlendirin, izlenebilirliği artırın.",
  },
] as const;

const whyMikropak = [
  {
    title: "Mühendislik yaklaşımı",
    text: "İhtiyacı netleştirir, konfigürasyonu hedefe göre belirleriz.",
  },
  {
    title: "Entegrasyon kabiliyeti",
    text: "Hat içi uyumu kurar, darboğazları daha baştan azaltırız.",
  },
  {
    title: "Saha deneyimi",
    text: "Devreye alma sürecinde riskleri düşürür, geçişi hızlandırırız.",
  },
  {
    title: "Satış sonrası destek",
    text: "Yedek parça ve servis koordinasyonunda yanınızda oluruz.",
  },
] as const;

export default function MachineAndSolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* PAGE INTRO */}
      <section className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              MAKİNE KATALOĞU
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.4rem]">
              Makine ve Üretim Çözümleri
            </h1>
            <p className="mt-3 max-w-[44rem] text-[16px] leading-[1.7] text-slate-700">
              İhtiyacınıza uygun sistemleri aşağıda kategori bazında inceleyin.
            </p>
          </div>
        </div>
      </section>

      {/* MACHINE CARDS */}
      <section
        id="kartlar"
        className="border-b border-slate-100 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <div className="space-y-7">
            {machineCards.map((card, idx) => (
              <Link
                key={card.href}
                href={card.href}
                aria-label={`${card.title} sistemlerini incele`}
                className={`group block overflow-hidden rounded-[24px] border bg-white shadow-[0_14px_52px_rgba(15,23,42,0.09)] transition duration-200 hover:-translate-y-[4px] hover:shadow-[0_30px_90px_rgba(15,23,42,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6005C]/60 ${
                  idx === 0
                    ? "border-[#E6005C]/25 bg-[#E6005C]/[0.03] hover:border-[#E6005C]/35"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="grid gap-0 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                  <div className="relative overflow-hidden bg-slate-900 md:border-r md:border-slate-200">
                    <div className="aspect-[16/10] w-full">
                      <Image
                        src={card.image.src}
                        alt={card.image.alt}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04] contrast-[1.05] saturate-[1.02]"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/0" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-7">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                        {card.label}
                      </p>
                      <h3 className="mt-2 text-[19px] font-semibold tracking-tight text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] font-medium text-slate-500">
                        {card.context}
                      </p>
                      <div className="mt-4 h-px w-full bg-slate-200/80" />
                      <p className="mt-4 text-[15px] leading-[1.7] text-slate-700">
                        {card.description}
                      </p>
                      <div className="mt-5 grid gap-2 text-[13px] text-slate-700 sm:grid-cols-3">
                        {card.features.map((f) => (
                          <div
                            key={f}
                            className="rounded-2xl bg-slate-100/80 px-3 py-2"
                          >
                            <p className="font-semibold text-slate-900">{f}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="relative inline-flex items-center gap-1 text-[13px] font-semibold text-slate-600 transition group-hover:text-[#E6005C]">
                        Sistemleri İncele
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          →
                        </span>
                        <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full bg-[#E6005C] transition-all duration-200 group-hover:w-full" />
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                        Kategori {idx + 1}/6
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION GUIDE */}
      <section className="border-b border-slate-100 bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                ÇÖZÜM REHBERİ
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Üretiminiz İçin Doğru Çözümü Seçin
              </h2>
              <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
                Hedeflerinize göre önceliklerinizi belirleyin; doğru teknoloji
                kombinasyonunu birlikte kurgulayalım.
              </p>
            </div>
            <div className="grid gap-4 md:max-w-2xl md:grid-cols-2">
              {solutionGuide.map((s) => (
                <Link
                  key={s.title}
                  href="#kartlar"
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10"
                >
                  <p className="text-[13px] font-semibold tracking-tight text-slate-900">
                    {s.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-slate-700">
                    {s.text}
                  </p>
                  <p className="mt-4 text-[12px] font-semibold text-[#E6005C] underline-offset-4 group-hover:underline">
                    İlgili sistemleri incele →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY MIKROPAK */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                NEDEN MİKROPAK AMBALAJ?
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Neden Mikropak ile çalışmalısınız?
              </h2>
              <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
                Net hedef, doğru üretici ve kontrollü devreye alma için süreci
                sadeleştiririz.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyMikropak.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm shadow-slate-900/5"
              >
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-slate-700/80 bg-slate-900/60 px-6 py-10 shadow-lg shadow-black/25 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                PROJE ODAKLI PLANLAMA
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Projeniz İçin En Doğru Makine Konfigürasyonunu Birlikte
                Belirleyelim
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-slate-300">
                Yatırımınız için en doğru sistem seçimini birlikte planlayalım.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f]"
              >
                Teklif Talep Et
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:border-[#E6005C] hover:bg-slate-800"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

