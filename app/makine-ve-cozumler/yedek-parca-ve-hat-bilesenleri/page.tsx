import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Yedek Parça ve Hat Bileşenleri | Oluklu Mukavva | Mikropak Ambalaj",
  description:
    "Oluklu mukavva hatları için yedek parça ve bileşenler: ondüle valsler, bobin ayakları, double facer, ondüle kasatlı grup, slitter scorer, NC cutter ve preheater. Mikropak ile güvenilir endüstriyel tedarik.",
};

const gridItems = [
  {
    title: "Bobin Ayakları",
    description:
      "Hat girişinde güvenli ve dengeli kağıt beslemesi için hidrolik bobin taşıma çözümleri.",
    image: "/images/machines/bobin-ayagi.jpg",
    imageAlt: "Bobin besleme ve hat girişi — endüstriyel üretim görseli",
    href: "/#contact",
    imageContain: true,
  },
  {
    title: "Double Facer",
    description:
      "Double facer bantları ve sıcak bölüm bileşenleri; yapışma kalitesi, sıcaklık dayanımı ve hat hızına uyumlu yedek parça çözümleri.",
    image: "/images/machines/double-facer.jpg",
    imageAlt: "Double facer bileşeni — corrugator hattı görseli",
    href: "/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri/double-facer-sistemleri",
  },
  {
    title: "Ondüle Kasatlı Grup",
    description:
      "Sabit ve kaset tip seçenekleriyle farklı kapasite ve ürün yapılarına uyum.",
    image: "/images/machines/ondule-kasatli-grup.jpg",
    imageAlt: "Ondüle kasatlı grup ve corrugator hattı görseli",
    href: "/#contact",
  },
  {
    title: "Slitter Scorer",
    description:
      "Hassas kesim ve skorlama ile çıkış kalitesini belirleyen kritik hat bileşenleri.",
    image: "/images/machines/slitter-scorer-v2.jpg",
    imageAlt: "Slitter ve scorer kesim ünitesi görseli",
    href: "/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri/slitter-scorer-bicaklari",
  },
  {
    title: "NC Cutter",
    description:
      "Yüksek hızda tekrarlanabilir kesim performansı için NC kontrollü kesim çözümleri.",
    image: "/images/machines/nc-cutter.jpg",
    imageAlt: "NC kontrollü kesim hattı görseli",
    href: "/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri/nc-cutter-sistemleri",
  },
  {
    title: "Pre Heater",
    description:
      "Kontrollü ısıtma ile nem ve sıcaklık dengesini destekleyen preheater bileşenleri.",
    image: "/images/machines/pre-heater.jpg",
    imageAlt: "Preheater ve ondüle hattı — endüstriyel görsel",
    href: "/#contact",
  },
] as const;

const whyMikropak = [
  {
    title: "Uzun ömürlü komponentler",
    text: "Yüksek kalite standartlarına sahip üretici iş ortaklıkları ile uzun süreli kullanım ve düşük bakım ihtiyacı.",
  },
  {
    title: "Teknik destek ve hızlı servis",
    text: "Proje sürecinden devreye almaya kadar teknik destek ve hızlı çözüm odaklı yaklaşım.",
  },
  {
    title: "Proje bazlı çözüm yaklaşımı",
    text: "Standart ürün yerine ihtiyaca özel yapılandırılmış hat ve bileşen çözümleri.",
  },
] as const;

/** Hafif çerçeve */
const imageShell =
  "relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/70";

const linkClass =
  "text-sm font-semibold text-[#0B1F35] underline decoration-transparent underline-offset-4 transition duration-200 hover:text-[#E6005C] hover:underline hover:decoration-[#E6005C]/70";

const primaryBtnClass =
  "inline-flex items-center rounded-full bg-[#E6005C] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#cc004f] hover:shadow-md hover:shadow-[#E6005C]/25";

/** Hero: Vals’e daha yakın üst/alt */
const sectionYHero =
  "px-4 pt-12 pb-9 md:px-6 md:pt-14 md:pb-10 lg:px-8 lg:pt-16 lg:pb-11";

/** Genel bölüm dikey ritim */
const sectionY = "px-4 py-12 md:px-6 md:py-14 lg:px-8 lg:py-16";

export default function SparePartsHubPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-white">
        <div className={`mx-auto max-w-6xl ${sectionYHero}`}>
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2.5rem] md:leading-[1.12]">
                Oluklu Mukavva Hatları için Yedek Parça ve Bileşenler
              </h1>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-700 md:text-[16px]">
                Hat performansını sürdürülebilir kılmak ve üretim verimliliğini
                korumak için kritik yedek parça ve bileşen çözümleri.
              </p>
              <div className="mt-7">
                <Link href="/#contact" className={primaryBtnClass}>
                  Teklif Talep Et
                </Link>
              </div>
            </div>

            <div className={`${imageShell} mx-auto w-full max-w-xl lg:max-w-none`}>
              <div className="relative h-[200px] w-full sm:h-[220px] lg:h-[210px] xl:h-[224px]">
                <Image
                  src="/images/machines/oluklu-hatti.jpg"
                  alt="Oluklu mukavva üretim hattı — endüstriyel görsel"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ondüle Valsleri */}
      <section className="border-t border-slate-200/60 bg-[#f7f8fa]">
        <div className={`mx-auto max-w-6xl ${sectionY}`}>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <span className="inline-block rounded-full border border-[#E6005C]/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8004a]">
                Öncelikli bileşen
              </span>
              <h2 className="mt-3 text-[1.75rem] font-semibold tracking-tight text-slate-900 md:text-[2rem] md:leading-[1.15]">
                Ondüle Valsleri
              </h2>
              <p className="mt-3 max-w-[48ch] text-[15px] leading-[1.65] text-slate-700">
                Tungsten karbür ve hard krom kaplama seçenekleri ile uzun ömürlü
                ve stabil üretim sağlayan ondüle vals çözümleri.
              </p>
              <p className="mt-3 max-w-[48ch] text-[14px] leading-[1.6] text-slate-600">
                Doğru ondüle vals seçimi, üretim kalitesi, enerji verimliliği ve
                hat sürekliliği üzerinde doğrudan etkilidir.
              </p>
              <ul className="mt-4 space-y-1.5 text-[13px] font-medium leading-relaxed text-slate-600">
                <li>• Uzun ömür</li>
                <li>• Stabil üretim</li>
                <li>• Yüksek performans</li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className={`${imageShell}`}>
                <div className="relative aspect-[16/10] w-full min-h-[180px] max-h-[280px] lg:aspect-[16/9] lg:max-h-[260px]">
                  <Image
                    src="/images/machines/single-facer.jpg"
                    alt="Ondüle vals bileşenleri — endüstriyel corrugator görseli"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-3xl border-t border-slate-200/60 pt-8 text-center text-[13px] font-medium leading-relaxed text-slate-600 md:mt-12 md:pt-9 md:text-[14px] lg:mx-auto">
            Global üretici iş ortaklıkları ile yüksek kalite standartlarında
            üretim
          </p>
        </div>
      </section>

      {/* Neden Mikropak? */}
      <section className="border-t border-slate-200/50 bg-white">
        <div className={`mx-auto max-w-6xl ${sectionY}`}>
          <div className="text-center">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Neden Mikropak?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              Oluklu mukavva hatları için güvenilir çözüm ortağınız
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:mt-11 md:grid-cols-3 md:gap-x-10 lg:gap-x-14">
            {whyMikropak.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200/25 bg-[#fafbfc] px-6 py-8 transition duration-300 ease-out hover:-translate-y-0.5 md:px-7 md:py-9"
              >
                <h3 className="text-[15px] font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.65] text-slate-600 md:text-[14px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 öğeli grid */}
      <section className="border-t border-slate-200/50 bg-[#f7f8fa]">
        <div className={`mx-auto max-w-6xl ${sectionY}`}>
          <div className="mb-8 max-w-2xl md:mb-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Hat bileşenleri
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Geniş ürün yelpazesi
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
              Kritik bileşenlerde tek noktadan tedarik ve teknik eşleştirme.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {gridItems.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-4 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#E6005C]/35"
              >
                <div className={`${imageShell} shrink-0 transition duration-300 group-hover:ring-slate-300/80`}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className={
                        "imageContain" in item && item.imageContain
                          ? "object-contain object-center p-3 sm:p-4"
                          : "object-cover object-center"
                      }
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-[1.55] text-slate-600">
                  {item.description}
                </p>
                <p className="mt-4 shrink-0">
                  <Link href={item.href} className={linkClass}>
                    Detaylı incele →
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Görsel ara */}
      <section className="relative min-h-[200px] w-full overflow-hidden md:min-h-[240px]">
        <Image
          src="/images/machines/xinguang_oluklu_hatti.png"
          alt="Oluklu mukavva üretim hattı — endüstriyel geniş görsel"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-900/55 to-slate-900/25"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[200px] max-w-6xl flex-col justify-end px-4 py-10 md:min-h-[240px] md:px-6 md:py-12 lg:px-8">
          <p className="max-w-xl text-[12px] font-medium uppercase tracking-[0.22em] text-slate-300">
            Endüstriyel tedarik
          </p>
          <p className="mt-2 max-w-2xl text-lg font-semibold tracking-tight text-white md:text-xl">
            Kritik bileşenlerde güvenilir çözüm ortağınız
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-slate-50">
        <div className={`mx-auto max-w-6xl ${sectionY}`}>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                Hat konfigürasyonunuza en uygun yedek parçayı birlikte
                belirleyelim
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-300">
                Uzman ekibimizle iletişime geçin, doğru çözümü hızlıca
                planlayalım.
              </p>
            </div>
            <Link href="/#contact" className={primaryBtnClass}>
              Teklif Talep Et
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
