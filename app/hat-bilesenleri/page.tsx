import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oluklu Mukavva Hat Bileşenleri | Mikropak Ambalaj",
  description:
    "Oluklu mukavva üretim hatlarında kullanılan ana bileşenler: ondüle grubu, slitter scorer, NC cutter, double facer ve hattın taşıma/istifleme sistemleri. Entegre hat konfigürasyonu için Mikropak desteği.",
};

const componentGroups = [
  {
    title: "Ondüle & Üretim",
    items: [
      { title: "Single Facer", desc: "Ondüle grubunun ana elemanı" },
      { title: "Double Facer", desc: "Son yüzey hazırlığı ve şekillendirme" },
      { title: "Preheater Sistemleri", desc: "Isıl hazırlık ve süreç stabilitesi" },
    ],
  },
  {
    title: "Kesim & Şekillendirme",
    items: [
      { title: "Slitter Scorer", desc: "Bölme ve skorlama" },
      { title: "NC Cutter", desc: "NC kontrollü kesim" },
    ],
  },
  {
    title: "Taşıma & İstifleme",
    items: [
      { title: "Asansör Sistemleri", desc: "Hat sonu akışının düzenlenmesi" },
      { title: "Palet Üstü Toplama Sistemleri", desc: "Toplama ve istifleme akışı" },
    ],
  },
  {
    title: "Diğer",
    items: [
      { title: "Hidrolik Bobin Ayakları", desc: "Besleme ve proses hazırlığı" },
      { title: "Ondüle Valsleri", desc: "Ondüle grubu proses güvenliği" },
      { title: "Üretim Yönetim Sistemleri (PMS)", desc: "Üretim planlama ve izlenebilirlik" },
    ],
  },
];

export default function HatBilesenleriPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
              ENTEGRE HAT SİSTEMİ
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-[2.6rem]">
              Oluklu Mukavva Hat Bileşenleri
            </h1>
            <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
              Oluklu mukavva üretim hatlarında kullanılan tüm ana ekipmanlar ve sistem çözümleri.
            </p>
            <p className="mt-4 text-[14px] leading-[1.7] text-slate-600">
              Tek üretici uyumu · Entegre sistem yaklaşımı · Projeye özel konfigürasyon
            </p>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-[72ch]">
              <p className="text-[16px] leading-[1.8] text-slate-700">
                Oluklu mukavva üretim hatları, ondüle grubu, kesim sistemleri, taşıma ve istifleme çözümleri ile birlikte
                bütünsel bir üretim sistemidir. Hat içi bileşenlerin uyumu; hız, kalite kararlılığı ve uzun vadeli performans üzerinde
                doğrudan etkilidir.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] text-slate-700">
                Corrugator line yapılandırması yapılırken her bileşenin kapasite aralığı, çalışma düzeni ve proses etkisi birlikte değerlendirilir.
                Uygun konfigürasyon, hat stabilitesini artırır ve üretim verimliliğini sürdürülebilir hale getirir.
              </p>
              <p className="mt-4 text-[16px] leading-[1.8] text-slate-700">
                Bu nedenle doğru bileşen seçimi kadar, bileşenler arası entegrasyonun doğru yönetilmesi de kritik bir yatırım karar unsurudur.
                Mikropak, proje bazlı planlama ve teknik koordinasyon yaklaşımıyla hattın uçtan uca kurgusunu yönetir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT GRID */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Bileşen Kategorileri
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {componentGroups.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.title} className="border-t border-slate-200/80 pt-3">
                        <Link
                          href={`/hat-bilesenleri?detay=${encodeURIComponent(item.title)}`}
                          className="group inline-flex w-full items-start justify-between gap-4 text-left"
                          aria-label={`${item.title} bileşenini detaylı incele`}
                        >
                          <span className="min-w-0">
                            <span className="block text-[15px] font-semibold text-slate-900 group-hover:text-[#E6005C] transition-colors">
                              {item.title}
                            </span>
                            <span className="block mt-1 text-[14px] leading-[1.7] text-slate-600">
                              {item.desc}
                            </span>
                          </span>
                          <span className="mt-1 shrink-0 text-[14px] font-semibold text-[#E6005C] opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SEO BLOCK */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Teknik Planlama Etkisi
            </h2>
            <p className="mt-4 max-w-[75ch] text-[16px] leading-[1.8] text-slate-700">
              Doğru bileşen seçimi ve entegrasyon yönetimi, corrugator line üzerinde üretim verimliliğini artırır. Hat hızının
              kararlı çalışması, kalite sapmalarını azaltır ve işletme maliyetlerini kontrol altında tutar. Otomasyon sistemleri
              (PMS dâhil) süreç izlenebilirliğini güçlendirirken uzun vadeli yatırım değerini destekler.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                ["Üretim verimliliği", "Hat içi dengeli akış ve kararlılık."],
                ["Hat hızı optimizasyonu", "Kapsite ve proses uyumu ile süreklilik."],
                ["Otomasyon sistemleri", "Operasyonel kontrol ve izlenebilirlik."],
                ["Uzun vadeli yatırım değeri", "Planlı bakım ve sürdürülebilir performans."],
              ].map(([t, d]) => (
                <div key={t} className="space-y-2 border-t border-slate-200/80 pt-5">
                  <p className="text-[15px] font-semibold text-slate-900">{t}</p>
                  <p className="text-[14px] leading-[1.7] text-slate-700">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-[70ch]">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Projeniz için doğru hat bileşenlerini birlikte belirleyelim
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-slate-200/90">
                Bileşenler arası entegrasyonu ve çalışma düzenini teknik ekibimizle birlikte planlayın.
              </p>
            </div>

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
      </section>
    </main>
  );
}

