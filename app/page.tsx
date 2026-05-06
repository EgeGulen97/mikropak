import { homeContent } from "../content";
import ContactForm from "./components/ContactForm";
import Image from "next/image";

export default function Home() {
  const images = {
    hero: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?auto=format&fit=crop&w=2200&q=80",
    corrugator:
      "https://images.unsplash.com/photo-1764745021344-317b80f09e40?auto=format&fit=crop&w=1400&q=80",
    flexo:
      "https://images.unsplash.com/photo-1758183961426-88d64eb5f787?auto=format&fit=crop&w=1400&q=80",
    dieCut:
      "https://images.unsplash.com/photo-1764114235916-74de69e6851f?auto=format&fit=crop&w=1400&q=80",
    digital:
      "https://images.unsplash.com/photo-1513828418004-7aa1c7e5c824?auto=format&fit=crop&w=1400&q=80",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* 2. Large hero section */}
      <section
        id="hero"
        className="relative border-b border-slate-100 bg-gradient-to-b from-slate-50/60 via-white to-white"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.12) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:px-6 md:py-16 lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {homeContent.hero.eyebrow}
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[2.9rem] md:leading-[1.05]">
              {homeContent.hero.titleLine1}
              <span className="block text-slate-700">
                {homeContent.hero.titleLine2}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-slate-700">
              {homeContent.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f]"
              >
                {homeContent.hero.primaryCta}
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-[#E6005C] hover:bg-[#E6005C]/5"
              >
                {homeContent.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-[12px]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {homeContent.stats.experience.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#E6005C]">
                  {homeContent.stats.experience.value}
                </p>
                <p className="mt-1 text-[15px] leading-[1.7] text-slate-600">
                  {homeContent.stats.experience.description}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {homeContent.stats.installedLines.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#E6005C]">
                  {homeContent.stats.installedLines.value}
                </p>
                <p className="mt-1 text-[15px] leading-[1.7] text-slate-600">
                  {homeContent.stats.installedLines.description}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {homeContent.stats.brands.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#E6005C]">
                  {homeContent.stats.brands.value}
                </p>
                <p className="mt-1 text-[15px] leading-[1.7] text-slate-600">
                  {homeContent.stats.brands.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-stretch">
            <div className="relative w-full min-h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-[0_26px_80px_rgba(11,15,25,0.65)] md:min-h-[460px]">
              <Image
                src="/images/hero/hero.png"
                alt="Ambalaj üretiminde kullanılan oluklu mukavva üretim hattı makinesi"
                width={1024}
                height={1536}
                priority
                quality={92}
                sizes="(min-width: 768px) 55vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover hero-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-slate-950/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust indicators */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <div className="max-w-xl md:w-5/12">
            <p className="text-[0.8rem] md:text-[0.95rem] font-semibold uppercase tracking-[0.28em] text-slate-600">
              {homeContent.trust.title}
            </p>
            <div className="mt-2 h-0.5 w-14 rounded-full bg-[#E6005C]" />
            <p className="mt-2 text-[16px] leading-[1.7] text-slate-700">
              {homeContent.trust.subtitle}
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              {homeContent.trust.description}
            </p>
          </div>

          <div className="grid w-full items-stretch gap-4 text-[13px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:w-7/12">
            {homeContent.trust.cards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-2xl border-l-4 border-[#E6005C] bg-white px-7 py-6 shadow-sm shadow-slate-900/5 md:col-span-1 col-span-1 md:col-auto"
              >
                <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  {card.title}
                </p>
              <p className="mt-3 text-[14px] font-normal leading-[1.7] text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions cards */}
      <section
        id="solutions"
        className="border-b border-slate-100 bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-18">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[1.7rem] font-semibold tracking-tight text-slate-900 md:text-[2rem]">
            {homeContent.solutions.title}
          </h2>
          <div className="mt-3 h-[3px] w-14 rounded-full bg-[#E6005C]" />
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-slate-700">
            {homeContent.solutions.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {homeContent.solutions.categories.map((cat) => {
            let src = "";
            let alt = "";
            switch (cat.key) {
              case "corrugator":
                src = "/images/machines/xinguang_oluklu_hatti.png";
                alt = "Xinguang oluklu mukavva üretim hattı";
                break;
              case "flexo":
                src = "/images/machines/inline-flexo-baski.png";
                alt = "Inline flexo baskı makinesi";
                break;
              case "digital":
                src = "/images/machines/digital-printing-machine.png";
                alt = "Oluklu mukavva için endüstriyel dijital baskı makinesi";
                break;
              case "dieCut":
                src = "/images/machines/die_cutting.jpg";
                alt = "Rotary kalıp kesim makinesi";
                break;
              case "labeling":
                src = "/images/machines/Model_A_Litho-Labeler.png";
                alt = "Otomatik litho etiketleme makinesi";
                break;
              case "spareParts":
                src = "/images/machines/single-facer.jpg";
                alt =
                  "Single facer ondüle makinesi ve corrugator vals sistemi";
                break;
              default:
                src = "/images/machines/xinguang_oluklu_hatti.png";
                alt = "Oluklu mukavva üretim hattı makinesi";
            }
            return (
              <article
                key={cat.key}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition-transform transition-shadow duration-200 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      width={1200}
                      height={675}
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full rounded-2xl object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-4 md:px-6 md:pt-5">
                  <div>
                    <h3 className="text-[1.02rem] font-semibold tracking-tight text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.7] text-slate-700">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      type="button"
                      className="text-[12px] font-semibold text-[#E6005C] underline-offset-4 hover:underline"
                    >
                      Detayları İncele
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        </div>
      </section>

      {/* 5. Represented brands section */}
      <section
        id="brands"
        className="border-b border-slate-100 bg-white py-14"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                {homeContent.manufacturers.eyebrow}
              </p>
              <div className="mt-2 h-0.5 w-24 rounded-full bg-[#E6005C]" />
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                {homeContent.manufacturers.title}
              </h2>
              <p className="mt-1.5 max-w-md text-[15px] leading-[1.7] text-slate-700">
                {homeContent.manufacturers.description}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {homeContent.manufacturers.logos.map((logo) => {
                const srcMap: Record<string, string> = {
                  Xinguang: "/images/logos/xinguang_logo.png",
                  Fengming: "/images/logos/fengming-logo.png",
                  HCMOOG: "/images/logos/hcmoog.png",
                  Automatan: "/images/logos/automatan_logo.jpg",
                  "Opti-Color": "/images/logos/opti-color-logo.png",
                  Xingbao: "/images/logos/xingbao.jpg",
                  Mingyang: "/images/logos/mingyang.png",
                  Soper: "/images/logos/soper.png",
                };
                const src = srcMap[logo.name] ?? "";
                return (
                  <div
                    key={logo.name}
                    className="group flex min-h-[96px] items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 px-2.5 py-2.5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-[#E6005C]/30 hover:bg-white hover:shadow-lg hover:shadow-slate-900/10"
                  >
                    <div className="flex w-full items-center justify-center">
                      <Image
                        src={src}
                        alt={`${logo.name} makine üreticisi logosu`}
                        width={240}
                        height={96}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="mx-auto h-16 max-h-20 object-contain transition duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Installed corrugated solutions */}
      <section className="border-y border-slate-100 bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {homeContent.installed.eyebrow}
            </p>
            <div className="mt-2 h-0.5 w-24 rounded-full bg-[#E6005C]" />
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              {homeContent.installed.title}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-slate-700">
              {homeContent.installed.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeContent.installed.groups.map((group) => (
              <div
                key={group.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm shadow-slate-900/5"
              >
                <div className="mb-3 flex items-center gap-3 text-slate-800">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0 text-[#E6005C]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21V9l5-3 5 3v12" />
                    <path d="M8 21v-6h4" />
                    <path d="M13 13h8v8H3" />
                    <path d="M17 9V5h2v4" />
                  </svg>
                  <p className="text-[14px] font-semibold tracking-tight text-slate-900">
                    {group.title}
                  </p>
                </div>
                <ul className="mt-1 space-y-1.5 text-[13px] text-slate-700">
                  {group.locations.map((location) => (
                    <li key={location} className="flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 flex-shrink-0 text-[#E6005C]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 21s-4.5-4.7-4.5-8.5A4.5 4.5 0 0 1 16.5 12.5C16.5 16.3 12 21 12 21z" />
                        <circle cx="12" cy="12.5" r="1.4" />
                      </svg>
                      <span>{location}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-10">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">
                {homeContent.installed.referencesTitle}
              </h3>
              <div className="h-px flex-1 rounded-full bg-slate-200" />
            </div>
            <p className="mb-6 max-w-2xl text-[13px] leading-relaxed text-slate-600">
              {homeContent.installed.referencesDescription}
            </p>
            <div className="relative mt-4 overflow-x-auto">
              <div className="flex items-center justify-between gap-8 py-3 md:justify-center">
                {homeContent.installed.referenceLogos.map((ref) => {
                  const altMap: Record<string, string> = {
                    Vestel: "Vestel referans logo",
                    Atapak: "Atapak referans logo",
                    Global: "Global Ambalaj referans logo",
                    Oba: "Oba Makarna referans logo",
                    Pehlivanoğlu: "Pehlivanoğlu referans logo",
                    "Patrol Packon": "Patrol Packon referans logo",
                  };
                  const alt = altMap[ref.name] ?? `${ref.name} referans logo`;
                  return (
                  <div
                    key={ref.name}
                    className="flex min-h-[80px] min-w-[140px] items-center justify-center px-4"
                  >
                    <Image
                      src={ref.file}
                      alt={alt}
                      width={180}
                      height={60}
                      className="h-12 max-h-14 w-auto object-contain opacity-90 transition duration-300 hover:scale-105 hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact / teklif — dark, balanced two-column */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#0a0f1a] text-slate-100"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f1626] via-[#0a0f1a] to-[#070b12]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-14">
            <div className="max-w-xl lg:pt-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                {homeContent.contact.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 md:text-[1.75rem] md:leading-snug">
                {homeContent.contact.title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.65] text-slate-400 md:mt-4 md:text-[16px]">
                {homeContent.contact.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${homeContent.contact.email}`}
                  className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.04] px-5 py-2.5 text-[13px] font-medium text-slate-200 shadow-sm shadow-black/20 transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {homeContent.contact.email}
                </a>
                <a
                  href={`tel:${homeContent.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center rounded-full border border-white/[0.14] bg-white/[0.04] px-5 py-2.5 text-[13px] font-medium text-slate-200 shadow-sm shadow-black/20 transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {homeContent.contact.phone}
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:max-w-none">
              <ContactForm
                contact={homeContent.contact}
                variant="dark"
              />
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-[#06090f]">
          <div className="mx-auto max-w-6xl px-4 py-8 text-[12px] text-slate-400 md:px-6 md:py-10 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1 md:max-w-xs">
                <p className="font-semibold text-slate-100">
                  Mikropak Ambalaj San. Tic. Ltd. Şti.
                </p>
                <p>İstanbul / Türkiye</p>
                <p>bilgi@mikropak.com</p>
                <p>+90 546 264 19 44</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 text-[12px] font-medium text-slate-300 md:pt-1">
                <a href="#hero" className="transition hover:text-white">
                  Ana Sayfa
                </a>
                <a href="#solutions" className="transition hover:text-white">
                  Çözümler
                </a>
                <a href="#brands" className="transition hover:text-white">
                  Markalar
                </a>
                <a href="/hakkimizda" className="transition hover:text-white">
                  Hakkımızda
                </a>
                <a href="#contact" className="transition hover:text-white">
                  İletişim
                </a>
              </div>

              <div className="space-y-1 text-center md:text-right md:pt-0">
                <p className="text-slate-200">
                  Ambalaj makineleri Türkiye mümessilliği
                </p>
                <p>© 2026 Mikropak Ambalaj</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
