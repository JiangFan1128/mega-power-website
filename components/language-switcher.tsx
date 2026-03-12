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
    <div className="flex items-center gap-3">
      <span className="text-[0.92rem] font-semibold text-[#a9bfd8]">
        Language
      </span>
      <label className="relative block">
        <span className="sr-only">Language</span>
        <select
          aria-label="Language"
          className="h-10 min-w-[5.6rem] appearance-none rounded-[8px] border border-[#4b73b8] bg-[#0d2344] px-4 pr-10 text-[0.92rem] font-semibold text-white outline-none transition hover:border-[#5e85c7] hover:bg-[#10294f] focus:border-[#6b92d2] focus:ring-2 focus:ring-[#6b92d2]/30"
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
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[0.82rem] text-[#d6e3ff]">
          ▾
        </span>
      </label>
    </div>
  );
}
