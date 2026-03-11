"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "@/components/language-switcher";
import { pageKeyToHref, pageSlugs, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  navigation: Record<
    | "home"
    | "scenarios"
    | "solutions"
    | "platform"
    | "products"
    | "safety"
    | "services"
    | "about"
    | "contact",
    string
  >;
};

const order = [
  "home",
  "scenarios",
  "solutions",
  "platform",
  "products",
  "safety",
  "services",
  "about",
] as const;

export function Header({ locale, navigation }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const compactHeader = locale !== "en";
  const menuLabel = {
    en: "Menu",
    ja: "メニュー",
    zh: "菜单",
  }[locale];

  const currentSlug = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[1] ?? "";
  }, [pathname]);

  const languageLabels = {
    en: "EN",
    ja: "JP",
    zh: "CN",
  } satisfies Record<Locale, string>;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1a1fcc] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full items-center justify-between gap-4 px-5 lg:grid lg:min-h-[5.25rem] lg:grid-cols-[minmax(15rem,1fr)_auto_minmax(15rem,1fr)] lg:items-center lg:px-8 xl:px-10 2xl:px-14">
        <Link className="flex shrink-0 items-center gap-3 lg:justify-self-start" href={`/${locale}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-mega-accent/30 bg-gradient-to-br from-mega-accent to-mega-primary text-sm font-bold text-white">
            MG
          </span>
          <div>
            <div className="text-[1.3rem] font-extrabold leading-none tracking-[-0.5px] text-white">
              MEGA POWER
            </div>
            <div
              className={[
                "font-mono text-[0.68rem] uppercase tracking-[0.22rem] text-mega-muted",
                compactHeader ? "hidden 2xl:block" : "",
              ].join(" ")}
            >
              Digital Green Energy
            </div>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-4 xl:gap-5 2xl:gap-6 lg:flex lg:justify-self-center">
          {order.map((page) => {
            const active =
              (page === "home" && currentSlug === "") ||
              pageSlugs[page] === currentSlug;

            return (
              <Link
                key={page}
                className={[
                  "whitespace-nowrap font-medium",
                  compactHeader ? "text-[0.82rem]" : "text-[0.9rem]",
                  active ? "text-mega-accent" : "text-mega-muted hover:text-white",
                ].join(" ")}
                href={pageKeyToHref(locale, page)}
              >
                {navigation[page]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex lg:justify-self-end">
          <LanguageSwitcher currentLocale={locale} labels={languageLabels} />
        </div>

        <button
          aria-expanded={open}
          aria-label={menuLabel}
          className="rounded-[6px] border border-white/10 px-4 py-2 text-[0.9rem] text-mega-text lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {menuLabel}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-mega-dark-mid/95 lg:hidden">
          <div className="mx-auto flex w-full flex-col gap-4 px-5 py-5">
            <div className="flex flex-wrap gap-3">
              <LanguageSwitcher currentLocale={locale} labels={languageLabels} />
            </div>
            <nav className="grid gap-3">
              {order.map((page) => (
                <Link
                  key={page}
                  className="rounded-[14px] border border-white/10 bg-white/5 px-4 py-3 text-[0.9rem] font-medium text-mega-text"
                  href={pageKeyToHref(locale, page)}
                  onClick={() => setOpen(false)}
                >
                  {navigation[page]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
