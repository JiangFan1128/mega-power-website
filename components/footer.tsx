import Link from "next/link";

import type { SiteContent } from "@/content/types";
import { pageKeyToHref, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  content: SiteContent;
};

const groups = [
  ["scenarios", "solutions", "products"],
  ["platform", "safety", "services"],
  ["about"],
] as const;

export function Footer({ locale, content }: FooterProps) {
  const navLabel = {
    en: "Navigation",
    ja: "ナビゲーション",
    zh: "导航",
  }[locale];

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="shell grid gap-10 py-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,0.8fr)] lg:gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-mega-accent/30 bg-gradient-to-br from-mega-accent to-mega-primary text-sm font-bold text-white">
              MG
            </span>
            <div>
              <div className="text-[1.3rem] font-extrabold leading-none tracking-[-0.5px] text-white">
                MEGA POWER
              </div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.22rem] text-mega-muted">
                Integrated Energy Systems
              </div>
            </div>
          </div>
          <p className="max-w-[27rem] text-[0.9rem] leading-[1.75] text-mega-muted">
            {content.footer.summary}
          </p>
          <p className="max-w-[24rem] whitespace-pre-line text-[0.88rem] font-semibold leading-[1.7] text-white">
            {content.footer.address}
          </p>
        </div>

        {groups.map((group, index) => (
          <div key={index} className="space-y-5">
            <div className="eyebrow">{navLabel}</div>
            <div className="grid gap-3">
              {group.map((page) => (
                <Link
                  key={page}
                  className="text-[0.85rem] text-mega-muted hover:text-white"
                  href={pageKeyToHref(locale, page)}
                >
                  {content.navigation[page]}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
