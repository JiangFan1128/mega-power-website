export const locales = ["en", "ja", "zh"] as const;

export type Locale = (typeof locales)[number];

export const pageKeys = [
  "home",
  "scenarios",
  "solutions",
  "platform",
  "products",
  "safety",
  "services",
  "about",
  "contact",
] as const;

export type PageKey = (typeof pageKeys)[number];

export const pageSlugs: Record<PageKey, string> = {
  home: "",
  scenarios: "scenarios",
  solutions: "solutions",
  platform: "platform",
  products: "products",
  safety: "safety",
  services: "services",
  about: "about",
  contact: "contact",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function slugToPageKey(slug?: string[]): PageKey | null {
  if (!slug || slug.length === 0) {
    return "home";
  }

  if (slug.length !== 1) {
    return null;
  }

  const match = Object.entries(pageSlugs).find(([, value]) => value === slug[0]);
  return (match?.[0] as PageKey | undefined) ?? null;
}

export function pageKeyToHref(locale: Locale, page: PageKey): string {
  const suffix = pageSlugs[page];
  return suffix ? `/${locale}/${suffix}` : `/${locale}`;
}

export function pageKeyToPath(page: PageKey): string {
  const suffix = pageSlugs[page];
  return suffix ? `/${suffix}` : "";
}

