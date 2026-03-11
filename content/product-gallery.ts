import type { Locale } from "@/lib/i18n";

export type ProductGalleryFamilyKey =
  | "microgrid"
  | "pv-ess"
  | "transport"
  | "distributed";

export type ProductGalleryFamily = {
  key: ProductGalleryFamilyKey;
  title: Record<Locale, string>;
};

export type ProductGalleryItem = {
  family: ProductGalleryFamilyKey;
  title: Record<Locale, string>;
  model: string;
  image: string;
};

export const productGalleryFamilies: ProductGalleryFamily[] = [
  {
    key: "microgrid",
    title: {
      en: "Microgrid / Frequency",
      ja: "マイクログリッド / 調周",
      zh: "微网 / 调频",
    },
  },
  {
    key: "pv-ess",
    title: {
      en: "PV-ESS-Charging",
      ja: "光储充",
      zh: "光储充",
    },
  },
  {
    key: "transport",
    title: {
      en: "Transportable Storage",
      ja: "可搬型蓄電",
      zh: "移动储能",
    },
  },
  {
    key: "distributed",
    title: {
      en: "Distributed Storage",
      ja: "分散型蓄電",
      zh: "分布式储能",
    },
  },
];

export const productGalleryItems: ProductGalleryItem[] = [
  {
    family: "microgrid",
    title: {
      en: "PCS-Integrated Step-up Container (Cluster)",
      ja: "PCS-Integrated Step-up Container (Cluster)",
      zh: "PCS-Integrated Step-up Container (Cluster)",
    },
    model: "iBCS100-2500B/20-AC",
    image: "/images/products/gallery/product-page-16.png",
  },
  {
    family: "microgrid",
    title: {
      en: "PCS-Integrated Step-up Container (Integrated)",
      ja: "PCS-Integrated Step-up Container (Integrated)",
      zh: "PCS-Integrated Step-up Container (Integrated)",
    },
    model: "iBCS100-2500A/20-AC",
    image: "/images/products/gallery/product-page-17.png",
  },
  {
    family: "microgrid",
    title: {
      en: "DC Battery Storage Container",
      ja: "DC Battery Storage Container",
      zh: "DC Battery Storage Container",
    },
    model: "iESS100-5015B2-LC",
    image: "/images/products/gallery/product-page-18.png",
  },
  {
    family: "pv-ess",
    title: {
      en: "PV-Storage Hybrid Unit",
      ja: "PV-Storage Hybrid Unit",
      zh: "PV-Storage Hybrid Unit",
    },
    model: "iPES100-100-215-AC-100",
    image: "/images/products/gallery/product-page-19.png",
  },
  {
    family: "pv-ess",
    title: {
      en: "Energy Storage Integrated Charger",
      ja: "Energy Storage Integrated Charger",
      zh: "Energy Storage Integrated Charger",
    },
    model: "iEFC100-80/120-AL-C",
    image: "/images/products/gallery/product-page-20.png",
  },
  {
    family: "pv-ess",
    title: {
      en: "PV-ESS-Charging Power Cabinet & Terminal",
      ja: "PV-ESS-Charging Power Cabinet & Terminal",
      zh: "PV-ESS-Charging Power Cabinet & Terminal",
    },
    model: "iEFC Series",
    image: "/images/products/gallery/product-page-21.png",
  },
  {
    family: "transport",
    title: {
      en: "Grid-Connected Charging Container",
      ja: "Grid-Connected Charging Container",
      zh: "Grid-Connected Charging Container",
    },
    model: "iBCS100-1725A/10-AC",
    image: "/images/products/gallery/product-page-22.png",
  },
  {
    family: "transport",
    title: {
      en: "Off-Grid Discharging Container",
      ja: "Off-Grid Discharging Container",
      zh: "Off-Grid Discharging Container",
    },
    model: "iBCS100-2x2500A/10-AC",
    image: "/images/products/gallery/product-page-23.png",
  },
  {
    family: "transport",
    title: {
      en: "Battery Storage Transport Vehicle",
      ja: "Battery Storage Transport Vehicle",
      zh: "Battery Storage Transport Vehicle",
    },
    model: "iESS100-3343B2-LC-M",
    image: "/images/products/gallery/product-page-24.png",
  },
  {
    family: "distributed",
    title: {
      en: "Distributed Energy Storage Cabinet",
      ja: "Distributed Energy Storage Cabinet",
      zh: "Distributed Energy Storage Cabinet",
    },
    model: "iDPS100-125/261 LC / iDPS200-200/418 LC",
    image: "/images/products/gallery/product-page-25.png",
  },
];
