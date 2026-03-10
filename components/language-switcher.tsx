"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  labels: Record<Locale, string>;
};

export function LanguageSwitcher({
  currentLocale,
  labels,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const currentPath =
    pathname.startsWith(`/${currentLocale}`)
      ? pathname.slice(currentLocale.length + 1) || ""
      : "";

  return (
    <label className="relative block">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        className="h-11 min-w-[5.35rem] appearance-none rounded-[10px] border border-mega-accent/70 bg-mega-accent px-4 pr-10 text-xs font-bold uppercase tracking-[0.24em] text-mega-dark shadow-[0_14px_30px_rgba(45,212,168,0.18)] outline-none transition hover:brightness-105 focus:border-mega-accent focus:ring-2 focus:ring-mega-accent/30"
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          router.push(`/${nextLocale}${currentPath}`);
        }}
        value={currentLocale}
      >
        {locales.map((locale) => (
          <option className="bg-[#0b1a1f] text-mega-text" key={locale} value={locale}>
            {labels[locale]}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[0.7rem] text-mega-dark/80">
        v
      </span>
    </label>
  );
}
