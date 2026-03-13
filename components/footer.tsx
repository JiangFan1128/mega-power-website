import Image from "next/image";
import Link from "next/link";

import type { SiteContent } from "@/content/types";
import { pageKeyToHref, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  content: SiteContent;
};

export function Footer({ locale, content }: FooterProps) {
  const footerCopy = {
    en: {
      navLabel: "Navigation",
      groups: [
        { title: "Explore", pages: ["scenarios", "products"] as const },
        { title: "Capabilities", pages: ["platform", "services"] as const },
        { title: "Company", pages: ["about"] as const },
      ],
    },
    ja: {
      navLabel: "Navigation",
      groups: [
        { title: "Explore", pages: ["scenarios", "products"] as const },
        { title: "Capabilities", pages: ["platform", "services"] as const },
        { title: "Company", pages: ["about"] as const },
      ],
    },
    zh: {
      navLabel: "Navigation",
      groups: [
        { title: "Explore", pages: ["scenarios", "products"] as const },
        { title: "Capabilities", pages: ["platform", "services"] as const },
        { title: "Company", pages: ["about"] as const },
      ],
    },
  }[locale];

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="shell grid gap-12 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-0">
            <span className="relative block h-[3.05rem] w-[3.7rem] shrink-0">
              <Image
                alt="MEGA POWER logo"
                className="object-contain"
                fill
                sizes="60px"
                src="/images/brand/mega-power-logo.png"
              />
            </span>
            <div className="flex min-h-10 items-center">
              <div className="whitespace-nowrap text-[1.04rem] font-semibold leading-none tracking-[0.03em] text-white xl:text-[1.1rem]">
                MEGA POWER TECHNOLOGY
              </div>
            </div>
          </div>
          <p className="max-w-[25rem] text-[0.92rem] leading-[1.78] text-mega-muted">
            {content.footer.summary}
          </p>
        </div>

        <div className="space-y-6 lg:pt-2">
          <div className="eyebrow">{footerCopy.navLabel}</div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerCopy.groups.map((group) => (
              <div key={group.title} className="space-y-4">
                <div className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                  {group.title}
                </div>
                <div className="grid gap-3">
                  {group.pages.map((page) => (
                    <Link
                      key={page}
                      className="text-[0.96rem] text-mega-muted hover:text-white"
                      href={pageKeyToHref(locale, page)}
                    >
                      {content.navigation[page]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/8 pt-5 text-[0.78rem] uppercase tracking-[0.16em] text-white/35">
            MEGA POWER
          </div>
        </div>
      </div>
    </footer>
  );
}
