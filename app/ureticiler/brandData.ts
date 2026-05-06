export type BrandProfile = {
  name: string;
  slug: string;
  logo: string;
  shortDescription: string;
  description: string;
  specialization: string;
};

export const brandProfiles: BrandProfile[] = [
  {
    name: "Xinguang",
    slug: "xinguang",
    logo: "/images/logos/xinguang_logo.png",
    shortDescription:
      "Oluklu mukavva üretim hatlarında yüksek kapasite odaklı endüstriyel çözümler sunar.",
    description:
      "Xinguang, yüksek hacimli oluklu mukavva tesisleri için hat mimarisi, üretim sürekliliği ve proses verimliliği odaklı teknolojiler geliştirir.",
    specialization: "Oluklu mukavva hatları ve entegre üretim altyapıları",
  },
  {
    name: "Yongcheng",
    slug: "yongcheng",
    logo: "/images/logos/yongcheng.png",
    shortDescription:
      "Ambalaj üretim süreçlerinde stabil performans ve proses güvenilirliği sunan üretici markadır.",
    description:
      "Yongcheng, üretim hattı verimliliğini artırmaya odaklanan sistem yaklaşımı ile farklı kapasite ihtiyaçlarına uygun çözümler sağlar.",
    specialization: "Üretim süreç ekipmanları ve hat optimizasyon çözümleri",
  },
  {
    name: "HCMOOG",
    slug: "hcmoog",
    logo: "/images/logos/hcmoog.png",
    shortDescription:
      "Baskı ve ambalaj süreçlerinde kalite odaklı, endüstriyel standartlara uygun sistemler geliştirir.",
    description:
      "HCMOOG, üretimde kalite sürekliliğini destekleyen teknoloji bileşenleri ve proses uyumuna odaklı ürün portföyü sunar.",
    specialization: "Baskı kalitesi ve süreç kontrolüne yönelik teknoloji çözümleri",
  },
  {
    name: "Automatan",
    slug: "automatan",
    logo: "/images/logos/automatan_logo.jpg",
    shortDescription:
      "Otomasyon odaklı üretim senaryoları için esnek ve sürdürülebilir entegrasyon çözümleri sunar.",
    description:
      "Automatan, hat içi akışı iyileştiren otomasyon sistemleri ile operasyonel verimlilik ve üretim çevikliği hedeflerini destekler.",
    specialization: "Hat otomasyonu ve üretim entegrasyon sistemleri",
  },
  {
    name: "Opti-Color",
    slug: "opti-color",
    logo: "/images/logos/opti-color-logo.png",
    shortDescription:
      "Renk tutarlılığı ve baskı kalitesini destekleyen uzman teknoloji yaklaşımıyla öne çıkar.",
    description:
      "Opti-Color, baskı süreçlerinde renk stabilitesi ve kalite kontrol gereksinimlerine odaklanan çözümleriyle üretim güvenilirliğini artırır.",
    specialization: "Renk yönetimi ve baskı kalite kontrol teknolojileri",
  },
  {
    name: "Xingbao",
    slug: "xingbao",
    logo: "/images/logos/xingbao.jpg",
    shortDescription:
      "Üretim hatlarında dayanıklılık ve süreklilik sağlayan endüstriyel performans odaklı ürünler sunar.",
    description:
      "Xingbao, uzun dönemli operasyon performansına katkı sağlayan teknik altyapısı ve çözüm yaklaşımıyla üretim hedeflerini destekler.",
    specialization: "Süreklilik odaklı endüstriyel üretim bileşenleri",
  },
  {
    name: "Mingyang",
    slug: "mingyang",
    logo: "/images/logos/mingyang.png",
    shortDescription:
      "Dijital baskı teknolojilerinde hız, kalite ve esnekliği bir araya getiren güçlü üretici markadır.",
    description:
      "Mingyang, dijital baskı altyapılarında tek geçiş yaklaşımı ve endüstriyel üretim ihtiyaçlarına uygun sistem tasarımıyla öne çıkar.",
    specialization: "Dijital baskı sistemleri ve yüksek hızlı üretim teknolojileri",
  },
  {
    name: "Soper",
    slug: "soper",
    logo: "/images/logos/soper.png",
    shortDescription:
      "Ambalaj üretim süreçlerinde operasyonel verimlilik ve proses uyumu sağlayan çözümler geliştirir.",
    description:
      "Soper, üretim hattı güvenilirliği ve performans hedeflerine uygun teknoloji yaklaşımıyla farklı tesis yapılarına entegre çözümler sunar.",
    specialization: "Ambalaj üretimi için proses verimliliği odaklı sistemler",
  },
];

export function getBrandBySlug(slug: string) {
  return brandProfiles.find((brand) => brand.slug === slug);
}

