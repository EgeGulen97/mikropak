import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Slitter Scorer Bıçakları | Corrugator Kesim | Mikropak Ambalaj",
  description:
    "Slitter ve scorer bıçakları: temiz kesim, doğru score derinliği ve hat hızına uyum. Oluklu mukavva hattı için yedek bıçak setleri ve teknik seçim desteği.",
};

export default function SlitterScorerBicaklariPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Yedek Parça / Kesim
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-[2.7rem]">
                Slitter Scorer Bıçakları
              </h1>
              <p className="mt-6 text-[16px] leading-[1.75] text-slate-700">
                Slitter ve scorer performansı; panel boyutları, burulma ve
                kırılma riskleri açısından doğrudan etkilidir. Hat hızına ve
                kesilen malzeme özelliklerine uygun bıçak seçimi kritik öneme
                sahiptir.
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
                  src="/images/machines/slitter-scorer-v2.jpg"
                  alt="Oluklu mukavva hattı kesim ve baskı bölümü görseli"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-[0_16px_38px_rgba(15,23,42,0.10)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/machines/slitter-scorer-v2.jpg"
                  alt="Endüstriyel kesim ve şekillendirme hattı referans görseli"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Sistem Özeti
              </h2>
              <p className="mt-3 max-w-[60ch] text-[14px] leading-[1.7] text-slate-600">
                Bıçak geometrisi, sertlik ve yüzey işlemi; kesim kalitesi ve
                servis ömrü için kritik parametrelerdir.
              </p>
              <div className="mt-6 divide-y divide-slate-200">
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Bıçak Rolü
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Slitter / Scorer
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Kesim Kalınlığı
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Hat spesifikasyonuna göre
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Score Kontrolü
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Derinlik &amp; hat hizası
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Set Uyumu
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    NC / mekanik düzen
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-2 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                    Tedarik
                  </p>
                  <p className="text-[18px] font-semibold leading-none text-slate-700">
                    Proje ve stok planı
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Kullanım alanları ve avantajlar
              </h2>
              <ul className="mt-6 space-y-2.5">
                {[
                  [
                    "Temiz kesim çizgisi",
                    "Pürüzsüz kenar ve düşük yırtılma riski ile daha istikrarlı üretim.",
                  ],
                  [
                    "Doğru score derinliği",
                    "Katlanabilirlik ve paletleme performansı için kontrollü çizgi oluşturma.",
                  ],
                  [
                    "Hat hızına uyum",
                    "Yüksek hızda bile tekrarlanabilir kesim kalitesi hedefi.",
                  ],
                  [
                    "Planlı yenileme",
                    "Aşınma öncesi set değişimi ile planlı duruş ve öngörülebilir maliyet.",
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
                      <p className="text-[15px] font-bold text-slate-900">
                        {title}
                      </p>
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
                Mikropak ile çalışmak
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Doğru bıçak seti için teknik bilgi paylaşımı
              </h2>
              <div className="mt-6 max-w-[54ch] space-y-3 text-[15px] leading-[1.75] text-slate-700">
                <p>
                  Hat markası, kesim konfigürasyonu ve kullanılan oluklu
                  yapıya göre uygun bıçak alternatiflerini değerlendiriyoruz.
                </p>
                <p>
                  <Link
                    href="/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri"
                    className="font-semibold text-[#0B1F35] underline decoration-slate-300 underline-offset-4 hover:text-[#E6005C]"
                  >
                    Yedek parça ana sayfası
                  </Link>{" "}
                  üzerinden tüm ürün gruplarımıza göz atabilirsiniz.
                </p>
              </div>
            </div>

            <div className="lg:mt-16">
              <div className="rounded-[14px] border border-slate-700 bg-slate-900/70 px-5 py-5 shadow-[0_10px_26px_rgba(2,6,23,0.30)] backdrop-blur-[2px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-200">
                  Talep için bilgiler
                </p>
                <ul className="mt-4 space-y-3.5">
                  {[
                    "Slitter / scorer sayısı ve düzeni",
                    "Kesilen tabaka kalınlığı ve flute tipi",
                    "Mevcut bıçak ölçüleri veya kodları",
                    "Hız profili ve şikayet (çapak, aşırı aşınma vb.)",
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

      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[12px] bg-slate-900/70 px-6 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="mt-0 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Slitter ve scorer ihtiyacınızı netleştirelim
              </h2>
              <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.7] text-slate-200/90">
                Teknik detaylarınızla birlikte iletişime geçin; uygun set ve
                termin için çözüm önerelim.
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
                  href="/makine-ve-cozumler/yedek-parca-ve-hat-bilesenleri"
                  className="inline-flex items-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:border-[#E6005C] hover:bg-slate-800/60 hover:-translate-y-[1px]"
                >
                  Tüm yedek parçalar
                </Link>
              </div>
              <p className="text-[13px] font-medium text-slate-200/75">
                Uygunluk kontrolü sonrası fiyatlandırma yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
