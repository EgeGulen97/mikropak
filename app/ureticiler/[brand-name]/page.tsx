import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import { brandProfiles, getBrandBySlug } from "../brandData";

type PageProps = {
  params: Promise<{ "brand-name": string }>;
};

export async function generateStaticParams() {
  return brandProfiles.map((brand) => ({ "brand-name": brand.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { "brand-name": brandName } = await params;
  const brand = getBrandBySlug(brandName);

  if (!brand) {
    return {
      title: "Üretici Bulunamadı | Mikropak Ambalaj",
    };
  }

  return {
    title: `${brand.name} | Üretici Profili | Mikropak Ambalaj`,
    description: brand.description,
  };
}

export default async function BrandDetailPage({ params }: PageProps) {
  const { "brand-name": brandName } = await params;
  const brand = getBrandBySlug(brandName);

  if (!brand) notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/ureticiler"
              className="inline-flex items-center text-[12px] font-medium text-slate-500 transition hover:text-slate-700"
            >
              ← Üreticilere geri dön
            </Link>
            <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 md:flex-row md:items-center">
              <Image
                src={brand.logo}
                alt={`${brand.name} logosu`}
                width={320}
                height={128}
                className="h-20 w-auto object-contain"
              />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.3rem]">
                  {brand.name}
                </h1>
                <p className="mt-3 text-[15px] leading-[1.75] text-slate-700">
                  {brand.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <div className="max-w-4xl rounded-2xl border border-slate-200/80 bg-slate-50/60 px-6 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Uzmanlık Alanı
            </p>
            <p className="mt-2 text-[15px] leading-[1.75] text-slate-700">
              {brand.specialization}
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Mikropak ile çalışma yaklaşımı
            </h2>
            <p className="mt-3 text-[14px] leading-[1.75] text-slate-600">
              Marka temsilciliği, teknik koordinasyon ve proje planlama süreçlerinde
              üretici ile müşteri tarafı arasında şeffaf ve sürdürülebilir bir iletişim
              modeli uygulanır.
            </p>
            <div className="mt-6">
              <Link
                href="/iletisim"
                className="inline-flex items-center rounded-full bg-[#E6005C] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#E6005C]/30 transition hover:bg-[#cc004f]"
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

