"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n";

const visibleLocales = locales.filter((locale) => locale !== "zh");

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
  const selectValue = currentLocale === "zh" ? "" : currentLocale;

  const currentPath =
    pathname.startsWith(`/${currentLocale}`)
      ? pathname.slice(currentLocale.length + 1) || ""
      : "";

  return (
    <div className="flex items-center gap-3">
      <span className="toolbar-label">Language</span>
      <label className="relative block">
        <span className="sr-only">Language</span>
        <select
          aria-label="Language"
          className="toolbar-select"
          onChange={(event) => {
            const nextLocale = event.target.value as Locale;
            router.push(`/${nextLocale}${currentPath}`);
          }}
          value={selectValue}
        >
          {currentLocale === "zh" ? (
            <option className="toolbar-option" disabled hidden value="">
              Language
            </option>
          ) : null}
          {visibleLocales.map((locale) => (
            <option className="toolbar-option" key={locale} value={locale}>
              {labels[locale]}
            </option>
          ))}
        </select>
        <span className="toolbar-caret pointer-events-none absolute inset-y-0 right-3 flex items-center text-[0.82rem]">
          ▾
        </span>
      </label>
    </div>
  );
}
