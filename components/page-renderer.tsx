import Link from "next/link";

import { ProductGallery } from "@/components/product-gallery";
import { ProductFamilyTabs } from "@/components/product-family-tabs";
import { ScenariosDecisionHub } from "@/components/scenarios-decision-hub";
import { productFamilies } from "@/content/products";
import type {
  HeroContent,
  ScenarioCard,
  ScenarioDetail,
  SectionLead,
  SiteContent,
  SolutionItem,
  TrustItem,
} from "@/content/types";
import { pageKeyToHref, type Locale, type PageKey } from "@/lib/i18n";

type PageRendererProps = {
  locale: Locale;
  page: PageKey;
  content: SiteContent;
};

function SectionIntro({ section }: { section: SectionLead }) {
  return (
    <div className="space-y-4">
      <div className="eyebrow">{section.label}</div>
      <h2 className="section-title max-w-4xl">{section.title}</h2>
      {section.body ? (
        <p className="section-subtitle max-w-3xl">{section.body}</p>
      ) : null}
    </div>
  );
}

function ProductSectionIntro({
  locale,
  section,
}: {
  locale: Locale;
  section: SectionLead;
}) {
  const actionLabel = {
    en: "View Products",
    ja: "製品ページへ",
    zh: "查看产品页",
  }[locale];

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <SectionIntro section={section} />
      <Link className="home-button-secondary shrink-0" href={pageKeyToHref(locale, "products")}>
        {actionLabel}
      </Link>
    </div>
  );
}

function ServiceIconBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-mega-accent/20 bg-mega-accent/10 text-mega-accent">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons: Array<() => React.ReactNode> = [
    () => (
      <>
        <path d="M4 18V8.5A2.5 2.5 0 0 1 6.5 6H10l2 2h5.5A2.5 2.5 0 0 1 20 10.5V18" />
        <path d="M4 18h16" />
        <path d="M8 12h8" />
      </>
    ),
    () => (
      <>
        <path d="M7 7a8 8 0 0 1 10 10" />
        <path d="M7 11a4 4 0 0 1 6 6" />
        <path d="M6 18h.01" />
        <path d="M18 6l-4 4" />
      </>
    ),
    () => (
      <>
        <path d="M6 18 18 6" />
        <path d="M9 6h9v9" />
        <path d="M6 12v6h6" />
      </>
    ),
    () => (
      <>
        <path d="M6 8.5 12 5l6 3.5v7L12 19l-6-3.5z" />
        <path d="M12 5v14" />
        <path d="M6 8.5 12 12l6-3.5" />
      </>
    ),
    () => (
      <>
        <path d="M12 3v7" />
        <path d="M9 7h6" />
        <path d="M5 14a7 7 0 1 0 14 0" />
      </>
    ),
    () => (
      <>
        <path d="M12 4v8" />
        <path d="M8 8h8" />
        <path d="M6 20v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      </>
    ),
    () => (
      <>
        <path d="M7 18v-5" />
        <path d="M12 18V9" />
        <path d="M17 18v-8" />
        <path d="M5 18h14" />
      </>
    ),
    () => (
      <>
        <path d="M6 8h12" />
        <path d="M8 8V6h8v2" />
        <path d="M7 8v10" />
        <path d="M17 8v10" />
        <path d="M9.5 12h5" />
        <path d="M9.5 15h5" />
      </>
    ),
  ];

  const IconMarkup = icons[index] ?? icons[0];
  return (
    <ServiceIconBase>
      <IconMarkup />
    </ServiceIconBase>
  );
}

function HomeScenarioIntro({
  section,
  showGuide = true,
}: {
  section: SectionLead & { guide?: string };
  showGuide?: boolean;
}) {
  return (
    <div className="space-y-5">
      <div className="eyebrow">{section.label}</div>
      <h2 className="section-title max-w-4xl">
        {section.title}
      </h2>
      <p className="max-w-[46rem] text-[1.1rem] leading-[1.72] text-mega-muted">
        {section.body}
      </p>
      {showGuide && section.guide ? (
        <div className="inline-flex items-center rounded-full border border-mega-accent/20 bg-[rgba(18,62,67,0.56)] px-4 py-3 text-[0.88rem] leading-[1.5] text-[#89d9c5]">
          {section.guide}
        </div>
      ) : null}
    </div>
  );
}

function HomeScenarioPreviewGrid({
  items,
  locale,
  action,
  solutionItems,
}: {
  items: ScenarioCard[];
  locale: Locale;
  action?: { label: string; page: PageKey };
  solutionItems: SolutionItem[];
}) {
  const cardCopy = {
    en: "Explore all scenarios.",
    ja: "全シナリオを見る。",
    zh: "查看全部应用场景。",
  }[locale];
  const openLabel = {
    en: "Open page",
    ja: "ページを見る",
    zh: "进入页面",
  }[locale];
  const pathLabel = {
    en: "Recommended Path",
    ja: "推奨ソリューション",
    zh: "推荐解决路径",
  }[locale];
  const pathSummaryLabel = {
      en: "Typical response logic",
      ja: "典型的な対応ロジック",
      zh: "典型解决逻辑",
  }[locale];
  const solutionOrder = [0, 1, 2, 3, 4];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const solution = solutionItems[solutionOrder[index]];

        return (
          <article
            key={item.title}
            className="panel flex min-h-[21.5rem] flex-col rounded-[18px] border border-[#35577f]/65 bg-[linear-gradient(150deg,rgba(18,34,56,0.96),rgba(23,50,82,0.84))] p-5"
          >
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-mega-accent/12 bg-mega-accent/10 font-mono text-[0.76rem] font-bold uppercase tracking-[0.16em] text-mega-accent">
                {item.badge ?? item.title.slice(0, 2)}
              </div>
              <h3 className="text-[1.22rem] font-bold leading-[1.28] tracking-[-0.025em] text-white">
                {item.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.68] text-mega-muted">
                {item.preview ?? item.summary}
              </p>
            </div>
            {solution ? (
              <div className="mt-auto pt-5">
                <div className="flex min-h-[7.25rem] flex-col rounded-[12px] border border-mega-accent/12 bg-[rgba(8,17,32,0.35)] p-4">
                  <div className="font-mono text-[0.66rem] uppercase tracking-[0.14rem] text-mega-accent">
                    {pathLabel}
                  </div>
                  <div className="mt-2 text-[0.95rem] font-semibold leading-[1.35] text-white">
                    {solution.title}
                  </div>
                  <p className="mt-2 text-[0.82rem] leading-[1.55] text-mega-muted">
                    {solution.summary}
                  </p>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
      {action ? (
        <Link
          className="group relative flex min-h-[21.5rem] flex-col overflow-hidden rounded-[18px] border border-[#4f709a]/80 bg-[linear-gradient(135deg,rgba(12,64,69,0.92),rgba(10,29,49,0.96)_62%,rgba(8,22,39,0.98))] p-5 shadow-[0_24px_54px_rgba(0,0,0,0.34)] transition hover:-translate-y-1 hover:border-mega-energy/45"
          href={pageKeyToHref(locale, action.page)}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(45,212,168,0.16),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(0,229,255,0.12),transparent_28%)] opacity-95" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-[10px] border border-mega-accent/22 bg-[rgba(8,35,43,0.42)] text-[1rem] font-bold text-mega-accent shadow-[0_0_0_1px_rgba(45,212,168,0.04)]">
              {"->"}
            </div>
            <div className="relative font-mono text-[0.74rem] uppercase tracking-[0.16rem] text-mega-accent/95 transition group-hover:text-mega-energy">
              {openLabel}
            </div>
          </div>
          <div className="relative mt-4 space-y-3">
            <h3 className="text-[1.45rem] font-extrabold leading-[1.18] tracking-[-0.03em] text-white">
              {action.label}
            </h3>
            <p className="max-w-[18rem] text-[0.92rem] leading-[1.65] text-mega-text/80">
              {cardCopy}
            </p>
          </div>
          <div className="relative mt-auto pt-5">
            <div className="flex min-h-[7.25rem] flex-col rounded-[12px] border border-mega-accent/14 bg-[rgba(7,23,39,0.34)] p-4 text-[0.8rem] leading-[1.55] text-[#a9d8d8]">
              {pathSummaryLabel}
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
}

function renderHeroTitle(title: string, locale: Locale) {
  const lineSets: Record<Locale, string[] | null> = {
    en: ["Empowering Global", "Sustainable Energy", "Development"],
    ja: ["グローバルな", "持続可能エネルギー", "開発を推進"],
    zh: ["赋能全球", "可持续能源", "发展"],
  };
  const highlightByLocale: Record<Locale, string> = {
    en: "Sustainable Energy",
    ja: "持続可能エネルギー",
    zh: "可持续能源",
  };

  const lines = lineSets[locale];
  const highlight = highlightByLocale[locale];

  if (lines) {
    return lines.map((line) => (
      <span
        className={line === highlight ? "block pb-[0.08em] bg-gradient-to-r from-mega-accent to-mega-energy bg-clip-text text-transparent" : "block"}
        key={line}
      >
        {line}
      </span>
    ));
  }

  const index = title.indexOf(highlight);

  if (index === -1) {
    return title;
  }

  return (
    <>
      {title.slice(0, index)}
      <span className="bg-gradient-to-r from-mega-accent to-mega-energy bg-clip-text text-transparent">
        {highlight}
      </span>
      {title.slice(index + highlight.length)}
    </>
  );
}

function PageHero({
  title,
  subtitle,
  highlight,
  locale,
  eyebrow = "MEGA",
}: {
  title: string;
  subtitle: string;
  highlight?: string;
  locale: Locale;
  eyebrow?: string;
}) {
  const titleIndex = highlight ? title.indexOf(highlight) : -1;
  const highlightNoWrap = locale === "en" || locale === "ja";

  return (
    <section className="section-space relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.44] lg:hidden"
        style={{ backgroundImage: "url('/images/hero/hero02.png')" }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-[0.44] lg:block"
        style={{ backgroundImage: "url('/images/hero/hero01.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,31,0.9)_0%,rgba(7,20,42,0.8)_34%,rgba(10,28,57,0.58)_58%,rgba(11,30,59,0.66)_100%)]" />
      <div className="absolute inset-0 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 bg-grid-fade bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]" />
      <div className="shell relative">
        <div className="max-w-5xl rounded-[20px] border border-[#35577f]/72 bg-transparent p-7 shadow-panel backdrop-blur-[2px] sm:p-10 lg:p-14">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-4 max-w-4xl text-[clamp(1.74rem,7vw,2.95rem)] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[clamp(2.45rem,6vw,4.2rem)] lg:text-[clamp(3rem,5vw,5rem)]">
            {titleIndex >= 0 && highlight ? (
              <>
                {title.slice(0, titleIndex)}
                <span
                  className={[
                    "bg-gradient-to-r from-mega-accent to-mega-energy bg-clip-text text-transparent",
                    highlightNoWrap ? "sm:whitespace-nowrap" : "",
                  ].join(" ")}
                >
                  {highlight}
                </span>
                {title.slice(titleIndex + highlight.length)}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="section-subtitle mt-6 max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function Hero({ hero, locale }: { hero: HeroContent; locale: Locale }) {
  const heroCopy = {
    en: {
      note: "Scenario-first positioning keeps customer operating environments above hardware selection.",
      capabilities: "Integrated Capabilities",
    },
    ja: {
      note: "シナリオを先に置くことで、ハードウェア選定の前に顧客の運用環境を伝えます。",
      capabilities: "統合能力",
    },
    zh: {
      note: "以场景为先的表达方式，让客户运行环境先于硬件选型被理解。",
      capabilities: "综合能力",
    },
  }[locale];
  const heroTitleClass = {
    en: "max-w-[56rem] text-[clamp(2rem,4.35vw,4.95rem)] leading-[1.01]",
    ja: "max-w-[52rem] text-[clamp(1.82rem,3.8vw,4.3rem)] leading-[1.06]",
    zh: "max-w-[47rem] text-[clamp(1.9rem,3.95vw,4.65rem)] leading-[1.04]",
  }[locale];
  const heroSubtitleClass = {
    en: "max-w-[50rem] text-[1.08rem] leading-[1.72]",
    ja: "max-w-[46rem] text-[1.02rem] leading-[1.78]",
    zh: "max-w-[44rem] text-[1.02rem] leading-[1.78]",
  }[locale];

  return (
    <section className="relative overflow-hidden py-14 lg:min-h-[calc(82vh-80px)] lg:py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.68] lg:hidden"
        style={{ backgroundImage: "url('/images/hero/hero02.png')" }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-[0.68] lg:block"
        style={{ backgroundImage: "url('/images/hero/hero01.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,26,0.94)_0%,rgba(5,17,38,0.86)_28%,rgba(6,22,48,0.58)_54%,rgba(7,26,55,0.68)_100%)]" />
      <div className="absolute inset-0 bg-hero-radial opacity-70" />
      <div className="absolute inset-0 bg-grid-fade bg-[size:72px_72px] opacity-25 [mask-image:radial-gradient(circle_at_center,black_22%,transparent_82%)]" />
      <div className="absolute right-[-14rem] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,168,0.14),transparent_65%)] lg:block" />
      <div className="absolute right-[4rem] top-1/2 hidden h-[25rem] w-[25rem] -translate-y-1/2 rounded-full border border-[rgba(45,212,168,0.18)] lg:block" />
      <div className="absolute right-[7.5rem] top-1/2 hidden h-[17rem] w-[17rem] -translate-y-1/2 rounded-full border border-dashed border-[rgba(45,212,168,0.08)] lg:block" />
      <div className="shell relative">
        <div className="max-w-[62rem] space-y-7 lg:ml-10 xl:ml-14">
          <div className="space-y-5">
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1 className={`${heroTitleClass} hero-title-main font-extrabold tracking-[-0.04em]`}>
              {renderHeroTitle(hero.title, locale)}
            </h1>
            <p className={`${heroSubtitleClass} text-mega-muted`}>
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="home-button-primary"
                href={pageKeyToHref(locale, hero.primaryCta.page)}
              >
                {hero.primaryCta.label}
              </Link>
              {hero.secondaryCta ? (
                <Link
                  className="home-button-secondary"
                  href={pageKeyToHref(locale, hero.secondaryCta.page)}
                >
                  {hero.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="max-w-[56rem] space-y-4 border-t border-[#35577f]/55 pt-6">
            <div className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mega-accent sm:text-xs sm:tracking-[0.34em]">
              {heroCopy.capabilities}
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10 sm:gap-y-6 xl:grid-cols-4">
              {hero.stats?.map((item) => (
                <div className="text-center sm:text-left" key={item.label}>
                  <div className="hero-stat-value">{item.value}</div>
                  <div className="hero-stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScenarioGrid({ items, locale }: { items: ScenarioCard[]; locale: Locale }) {
  const labels = {
    en: {
      help: "Recommended Solution",
      fit: "Best Fit For",
    },
    ja: {
      help: "Recommended Solution",
      fit: "Best Fit For",
    },
    zh: {
      help: "推荐解决路径",
      fit: "适用场景",
    },
  }[locale];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="panel min-h-[23rem] rounded-[22px] border border-[#35577f]/70 bg-[linear-gradient(150deg,rgba(18,34,56,0.98),rgba(23,50,82,0.88))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-mega-accent/12 bg-mega-accent/10 font-mono text-[0.78rem] font-bold uppercase tracking-[0.18em] text-mega-accent">
            {item.badge ?? item.title.slice(0, 2)}
          </div>
          <h3 className="mt-6 max-w-[15ch] text-[clamp(1.55rem,2.6vw,1.9rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#b7d7d9]">{item.summary}</p>
          {item.approach ? (
            <div className="mt-5">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.14rem] text-[#77d9c0]">
                {labels.help}
              </div>
              <p className="mt-2 text-[0.92rem] leading-[1.78] text-mega-muted">{item.approach}</p>
            </div>
          ) : null}
          {item.fit ? (
            <div className="mt-5">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.14rem] text-[#77d9c0]">
                {labels.fit}
              </div>
              <p className="mt-2 text-[0.92rem] leading-[1.78] text-[#bfd9da]">{item.fit}</p>
            </div>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-mega-accent/15 bg-mega-accent/10 px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.18rem] text-mega-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function SolutionGrid({ items }: { items: SolutionItem[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="panel p-6">
          <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.025em] text-mega-text">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-[1.7] text-mega-muted">{item.summary}</p>
          <ul className="mt-5 space-y-3">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-[0.9rem] leading-7 text-mega-text">
                <span className="mt-2 h-2 w-2 rounded-full bg-mega-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function DetailGrid({ items, locale }: { items: ScenarioDetail[]; locale: Locale }) {
  const labels = {
    en: {
      problem: "Problem",
      approach: "MEGA Approach",
      outcome: "Outcome Direction",
    },
    ja: {
      problem: "課題",
      approach: "MEGA の対応",
      outcome: "期待される効果",
    },
    zh: {
      problem: "问题",
      approach: "MEGA 方案思路",
      outcome: "价值方向",
    },
  }[locale];

  return (
    <div className="grid gap-5 xl:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="panel p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-mega-text">{item.title}</h3>
          <div className="mt-6 grid gap-5">
            <div>
              <div className="eyebrow">
                {labels.problem}
              </div>
              <p className="card-copy mt-2">{item.problem}</p>
            </div>
            <div>
              <div className="eyebrow">
                {labels.approach}
              </div>
              <p className="card-copy mt-2">{item.approach}</p>
            </div>
            <div>
              <div className="eyebrow">
                {labels.outcome}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full border border-mega-border/55 bg-black/10 px-3 py-1.5 text-sm text-mega-text"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ScenarioSolutionSections({
  locale,
  previews,
  scenarios,
  solutions,
  platformBullets,
  safetyBullets,
  serviceBullets,
}: {
  locale: Locale;
  previews: ScenarioCard[];
  scenarios: ScenarioDetail[];
  solutions: SolutionItem[];
  platformBullets: string[];
  safetyBullets: string[];
  serviceBullets: string[];
}) {
  const labels = {
    en: {
      challenge: "Main Challenge",
      stack: "Recommended Solution Stack",
      products: "Typical Product Families",
      platform: "Platform Support",
      safety: "Safety & Service Support",
    },
    ja: {
      challenge: "主な課題",
      stack: "推奨ソリューション構成",
      products: "代表的な製品ファミリー",
      platform: "プラットフォーム支援",
      safety: "安全・サービス支援",
    },
    zh: {
      challenge: "主要问题",
      stack: "推荐解决方案组合",
      products: "典型产品家族",
      platform: "平台支撑",
      safety: "安全与服务支撑",
    },
  }[locale];

  const familyTitles = {
    grid: productFamilies.find((family) => family.key === "grid")?.title[locale] ?? "Grid",
    pvess: productFamilies.find((family) => family.key === "pvess")?.title[locale] ?? "PV-ESS",
    transport:
      productFamilies.find((family) => family.key === "transport")?.title[locale] ??
      "Transport",
    ci: productFamilies.find((family) => family.key === "ci")?.title[locale] ?? "C&I",
  };

  const productMap = [
    [familyTitles.grid],
    [familyTitles.grid],
    [familyTitles.pvess],
    [familyTitles.ci],
    [familyTitles.transport],
  ];

  const pairings = scenarios.slice(0, 5).map((scenario, index) => {
    const solutionOrder = [0, 1, 2, 4, 3];
    const solution = solutions[solutionOrder[index]];
    const preview = previews[index];

    return {
      preview,
      scenario,
      solution,
      products: productMap[index],
    };
  });

  return (
    <div className="space-y-6">
      {pairings.map(({ preview, scenario, solution, products }) => (
        <article
          className="panel-strong grid gap-6 overflow-hidden p-6 lg:grid-cols-[0.96fr_1.04fr] lg:p-7"
          key={preview?.title ?? scenario.title}
        >
          <div className="space-y-5">
            <div className="eyebrow">{labels.challenge}</div>
            <h3 className="text-[clamp(1.45rem,2.6vw,2rem)] font-extrabold leading-[1.16] tracking-[-0.03em] text-mega-text">
              {preview?.title ?? scenario.title}
            </h3>
            {preview?.preview ? (
              <p className="text-[0.98rem] font-semibold leading-[1.65] text-[#d8eef7]">
                {preview.preview}
              </p>
            ) : null}
            <p className="card-copy text-[0.96rem] leading-[1.72] text-mega-text">
              {preview?.summary ?? scenario.problem}
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <div className="eyebrow">{labels.stack}</div>
              <h4 className="mt-2 text-[1.22rem] font-bold leading-[1.25] text-mega-text">
                {solution.title}
              </h4>
              <p className="mt-3 card-copy">{solution.summary}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[16px] border border-[#35577f]/60 bg-[rgba(8,17,32,0.38)] p-4">
                <div className="micro-label">{labels.products}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {products.map((product) => (
                    <span
                      className="rounded-full border border-mega-accent/15 bg-mega-accent/10 px-3 py-1 text-[0.72rem] font-mono uppercase tracking-[0.14rem] text-mega-accent"
                      key={`${scenario.title}-${product}`}
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[16px] border border-[#35577f]/60 bg-[rgba(8,17,32,0.38)] p-4">
                <div className="micro-label">{labels.platform}</div>
                <ul className="mt-3 space-y-2">
                  {platformBullets.slice(0, 3).map((bullet) => (
                    <li className="card-copy" key={`${scenario.title}-${bullet}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[16px] border border-[#35577f]/60 bg-[rgba(8,17,32,0.38)] p-4">
              <div className="micro-label">{labels.safety}</div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {[...safetyBullets.slice(0, 2), ...serviceBullets.slice(0, 2)].map((bullet) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.8rem] leading-[1.4] text-mega-text"
                    key={`${scenario.title}-${bullet}`}
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[16px] border border-[#35577f]/60 bg-[rgba(8,17,32,0.38)] p-4">
              <div className="micro-label">
                {locale === "en"
                  ? "Solution Outcomes"
                  : locale === "ja"
                    ? "期待される効果"
                    : "方案价值方向"}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {scenario.benefits.map((benefit) => (
                  <span
                    className="rounded-full border border-mega-border/55 bg-white/5 px-3 py-1.5 text-[0.8rem] text-mega-text"
                    key={`${scenario.title}-${benefit}`}
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function SolutionOverviewMatrix({
  locale,
  scenarios,
  solutions,
}: {
  locale: Locale;
  scenarios: ScenarioDetail[];
  solutions: SolutionItem[];
}) {
  const label = {
    en: "Best Matched Scenarios",
    ja: "適合するシナリオ",
    zh: "适配场景",
  }[locale];

  const map = [
    [scenarios[0]?.title, scenarios[5]?.title],
    [scenarios[1]?.title, scenarios[5]?.title],
    [scenarios[2]?.title, scenarios[5]?.title],
    [scenarios[4]?.title, scenarios[5]?.title],
    [scenarios[3]?.title, scenarios[5]?.title],
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {solutions.map((solution, index) => (
        <article className="panel p-5" key={solution.title}>
          <div className="micro-label">{label}</div>
          <h3 className="mt-3 card-title">{solution.title}</h3>
          <p className="mt-3 card-copy">{solution.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {map[index].filter(Boolean).map((scenario) => (
              <span
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.78rem] text-mega-text"
                key={`${solution.title}-${scenario}`}
              >
                {scenario}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function TrustGrid({ items }: { items: TrustItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className="panel p-6">
          <h3 className="text-[1rem] font-bold leading-[1.35] text-mega-text">{item.title}</h3>
          <p className="mt-3 text-[0.85rem] leading-[1.55] text-mega-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function BulletPanel({
  title,
  label,
  body,
  bullets,
}: {
  title: string;
  label: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div className="panel-strong p-6 sm:p-8">
      <div className="eyebrow">{label}</div>
      <h3 className="mt-4 text-2xl font-bold text-mega-text">{title}</h3>
      <p className="card-copy mt-4">{body}</p>
      <ul className="mt-6 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-[0.9rem] leading-7 text-mega-text">
            <span className="mt-2 h-2 w-2 rounded-full bg-mega-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlatformManagementSection({
  section,
}: {
  section: SiteContent["platform"]["management"];
}) {
  return (
    <section className="section-space bg-black/10">
      <div className="shell space-y-8">
        <SectionIntro section={section} />
        <div className="flex flex-wrap gap-3">
          {section.systems.map((system) => (
            <span
              className="rounded-full border border-mega-accent/15 bg-mega-accent/10 px-4 py-2 text-[0.72rem] font-mono uppercase tracking-[0.16rem] text-mega-accent"
              key={system}
            >
              {system}
            </span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.highlights.map((item) => (
            <article className="panel p-6" key={item.title}>
              <h3 className="text-[1.15rem] font-bold leading-[1.28] text-mega-text">
                {item.title}
              </h3>
              <p className="mt-3 card-copy">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSecuritySection({
  section,
}: {
  section: SiteContent["platform"]["security"];
}) {
  return (
    <section className="section-space">
      <div className="shell space-y-8">
        <SectionIntro section={section} />
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel-strong p-6 sm:p-8">
            <div className="eyebrow">
              {section.label}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-mega-text">
              {section.title}
            </h3>
            <div className="mt-6 grid gap-3">
              {section.deployment.map((item) => (
                <div
                  className="rounded-[16px] border border-[#35577f]/60 bg-[rgba(8,17,32,0.38)] px-4 py-3 text-[0.95rem] text-mega-text"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {section.safeguards.map((item) => (
              <article className="panel p-6" key={item.title}>
                <div className="font-mono text-[2rem] font-bold leading-none text-mega-accent">
                  {item.title}
                </div>
                <p className="mt-4 card-copy text-[0.94rem] leading-[1.72]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCapabilitySection({
  intro,
  capability,
}: {
  intro: SectionLead;
  capability: SiteContent["platform"]["capability"];
}) {
  return (
    <section className="section-space">
      <div className="shell space-y-8">
        <div className="space-y-5">
          <SectionIntro section={intro} />
          <div className="flex flex-wrap gap-3">
            {capability.pills.map((pill) => (
              <span
                className="rounded-full border border-[#5ccfd5]/45 bg-[rgba(137,221,226,0.18)] px-4 py-2 text-[0.72rem] font-mono font-semibold uppercase tracking-[0.16rem] text-[#0b6f7a]"
                key={pill}
              >
                {pill}
              </span>
            ))}
          </div>
          <div className="panel p-5 sm:p-6">
            <div className="eyebrow">{capability.explainer.label}</div>
            <p className="mt-3 max-w-4xl text-[0.95rem] leading-[1.75] text-mega-muted">
              {capability.explainer.body}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {capability.explainer.systems.map((item) => (
                <div
                  className="rounded-[12px] border border-mega-border/60 bg-[rgba(137,221,226,0.08)] px-4 py-3"
                  key={`${item.name}-${item.title}`}
                >
                  <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16rem] text-[#0b6f7a]">
                    {item.name}
                  </div>
                  <div className="mt-1 text-[0.82rem] font-medium text-mega-text">
                    {item.title}
                  </div>
                </div>
              ))}
              <div className="rounded-[12px] border border-mega-accent/25 bg-mega-accent/10 px-4 py-3">
                <div className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16rem] text-mega-accent">
                  {capability.explainer.recorder.name}
                </div>
                <div className="mt-1 text-[0.82rem] font-medium text-mega-text">
                  {capability.explainer.recorder.title}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="panel-strong relative overflow-hidden p-8 sm:p-10">
            <div className="relative space-y-8">
              <div className="space-y-4">
                <div className="eyebrow">{capability.base.label}</div>
                <h3 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-mega-text">
                  {capability.base.title}
                </h3>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {capability.base.items.map((item) => (
                  <article className="rounded-[18px] border border-white/10 bg-white/5 p-6" key={item.name}>
                    <div className="font-mono text-[1.6rem] font-bold leading-none text-mega-accent sm:text-[2rem]">
                      {item.name}
                    </div>
                    <h4 className="mt-3 text-[1rem] font-bold text-mega-text">{item.title}</h4>
                    <p className="mt-3 text-[0.9rem] leading-[1.7] text-mega-muted">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="panel p-8 sm:p-10">
            <div className="space-y-4">
              <div className="eyebrow">{capability.control.label}</div>
              <h3 className="text-[clamp(1.7rem,2.7vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.03em] text-mega-text">
                {capability.control.title}
              </h3>
            </div>
            <div className="mt-8 space-y-8">
              {capability.control.items.map((item) => (
                <div className="border-l-2 border-white/10 pl-5" key={item.name}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-[1.6rem] font-bold leading-none text-mega-text sm:text-[2rem]">
                      {item.name}
                    </div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.16rem] text-mega-muted">
                      {item.title}
                    </div>
                  </div>
                  <p className="mt-3 text-[0.9rem] leading-[1.7] text-mega-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-2">
          <div className="flex items-center gap-4">
            <div className="eyebrow">{capability.brain.label}</div>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="space-y-4">
            <h3 className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-extrabold leading-[1.16] tracking-[-0.03em] text-mega-text">
              {capability.brain.title}
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {capability.brain.items.map((item) => (
              <article className="panel p-6 sm:p-7" key={item.name}>
                <div className="font-mono text-[1.6rem] font-bold leading-none text-mega-accent sm:text-[2rem]">
                  {item.name}
                </div>
                <div className="mt-2 text-[0.72rem] font-mono uppercase tracking-[0.14rem] text-mega-muted">
                  {item.title}
                </div>
                <p className="mt-4 text-[0.9rem] leading-[1.75] text-mega-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({
  locale,
  title,
  body,
  label,
  action,
  buttonClassName = "button-primary",
}: {
  locale: Locale;
  title: string;
  body: string;
  label: string;
  action: { label: string; page: PageKey };
  buttonClassName?: string;
}) {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="panel-strong cta-surface p-8 sm:p-10 lg:p-14">
          <div className="eyebrow">{label}</div>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="section-title">{title}</h2>
              <p className="section-subtitle">{body}</p>
            </div>
            <Link className={buttonClassName} href={pageKeyToHref(locale, action.page)}>
              {action.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ locale, content }: { locale: Locale; content: SiteContent }) {
  const homeLabels = {
    en: "Integrated Scope",
    ja: "統合領域",
    zh: "综合范围",
  }[locale];

  return (
    <>
      <Hero hero={content.home.hero} locale={locale} />

      <section className="section-space">
        <div className="shell space-y-8">
          <HomeScenarioIntro section={content.home.scenarios} showGuide={false} />
          <HomeScenarioPreviewGrid
            action={content.home.scenarios.action}
            items={content.home.scenarios.items}
            locale={locale}
            solutionItems={content.home.solutions.items}
          />
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <BulletPanel
            body={content.home.platform.body}
            bullets={content.home.platform.bullets}
            label={content.home.platform.label}
            title={content.home.platform.title}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {content.platform.modules.slice(0, 4).map((module) => (
              <article key={module.name} className="panel p-6">
                <div className="font-mono text-[1.5rem] font-bold leading-none text-mega-accent sm:text-[1.8rem]">
                  {module.name}
                </div>
                <h3 className="mt-2 text-[0.92rem] font-bold text-mega-text">{module.title}</h3>
                <p className="mt-3 text-[0.85rem] leading-[1.6] text-mega-muted">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-black/10">
        <div className="shell space-y-8">
          <ProductSectionIntro locale={locale} section={content.home.products} />
          <ProductFamilyTabs locale={locale} />
        </div>
      </section>

      <section className="section-space">
        <div className="shell space-y-8">
          <SectionIntro section={content.home.services} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.home.services.items.map((item) => (
              <article key={item.title} className="panel p-6">
                <h3 className="text-[0.95rem] font-bold text-mega-text">{item.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-[1.55] text-mega-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-strong p-8">
            <SectionIntro section={content.home.value} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {content.home.solutions.items.slice(0, 4).map((item) => (
              <div key={item.title} className="panel p-6">
                <div className="eyebrow">
                  {homeLabels}
                </div>
                <h3 className="mt-3 card-title">{item.title}</h3>
                <p className="mt-3 card-copy">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        action={content.home.cta.action}
        buttonClassName="home-button-primary"
        body={content.home.cta.body}
        label={content.home.cta.label}
        locale={locale}
        title={content.home.cta.title}
      />
    </>
  );
}

export function PageRenderer({ locale, page, content }: PageRendererProps) {
  switch (page) {
    case "home":
      return <HomePage content={content} locale={locale} />;
    case "scenarios":
      return (
        <>
          <PageHero {...content.scenarios.hero} eyebrow={content.navigation.scenarios} locale={locale} />
          <section className="section-space pb-0">
            <div className="shell space-y-8">
              <SectionIntro section={content.scenarios.intro} />
            </div>
          </section>
          <ScenariosDecisionHub
            locale={locale}
            panels={content.scenarios.panels.slice(0, 5)}
            selectorLabel={content.scenarios.selectorLabel}
          />
          <CTASection locale={locale} {...content.scenarios.cta} />
        </>
      );
    case "solutions":
      return (
        <>
          <PageHero {...content.solutions.hero} eyebrow={content.navigation.solutions} locale={locale} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.solutions.intro} />
              <SolutionGrid items={content.solutions.items} />
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell space-y-8">
              <BulletPanel {...content.scenarios.mapping} />
              <SolutionOverviewMatrix
                locale={locale}
                scenarios={content.scenarios.details}
                solutions={content.solutions.items}
              />
            </div>
          </section>
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.safety.intro} />
              <TrustGrid items={content.safety.items} />
            </div>
          </section>
          <CTASection locale={locale} {...content.solutions.cta} />
        </>
      );
    case "platform":
      return (
        <>
          <PageHero {...content.platform.hero} eyebrow={content.navigation.platform} locale={locale} />
          <PlatformCapabilitySection
            capability={content.platform.capability}
            intro={content.platform.intro}
          />
          <PlatformSecuritySection section={content.platform.security} />
          <PlatformManagementSection section={content.platform.management} />
          <CTASection locale={locale} {...content.platform.cta} />
        </>
      );
    case "products":
      return (
        <>
          <PageHero {...content.products.hero} eyebrow={content.navigation.products} locale={locale} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.products.intro} />
              <ProductGallery locale={locale} />
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell">
              <BulletPanel {...content.products.related} />
            </div>
          </section>
          <CTASection locale={locale} {...content.products.cta} />
        </>
      );
    case "safety":
      return (
        <>
          <PageHero {...content.safety.hero} eyebrow={content.navigation.safety} locale={locale} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.safety.intro} />
              <TrustGrid items={content.safety.items} />
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell">
              <BulletPanel {...content.safety.japan} />
            </div>
          </section>
          <CTASection locale={locale} {...content.safety.cta} />
        </>
      );
    case "services":
      return (
        <>
          <PageHero {...content.services.hero} eyebrow={content.navigation.services} locale={locale} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.services.intro} />
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-5">
                  {content.services.strategy.map((item, index) => (
                    <article key={item.title} className="panel p-6">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <ServiceIcon index={index} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[0.95rem] font-bold text-mega-text">{item.title}</h3>
                          <p className="mt-2 text-[0.85rem] leading-[1.55] text-mega-muted">{item.body}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="space-y-5">
                  {content.services.mechanism.map((item, index) => (
                    <article key={item.title} className="panel p-6">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <ServiceIcon index={index + 4} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[0.95rem] font-bold text-mega-text">{item.title}</h3>
                          <p className="mt-2 text-[0.85rem] leading-[1.55] text-mega-muted">{item.body}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <CTASection locale={locale} {...content.services.cta} />
        </>
      );
    case "about":
      return (
        <>
          <PageHero {...content.about.hero} eyebrow={content.navigation.about} locale={locale} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.about.intro} />
              <TrustGrid items={content.about.pillars} />
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="grid gap-5">
                {content.contact.items.map((item) => (
                  <article key={item.label} className="panel p-6">
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-mega-accent">
                      {item.label}
                    </div>
                    <div className="mt-3 whitespace-pre-line text-lg font-semibold leading-[1.55] text-mega-text">
                      {item.value}
                    </div>
                  </article>
                ))}
              </div>
              <div className="panel overflow-hidden p-0">
                <iframe
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={content.contact.mapEmbed}
            title="Company location map"
                />
              </div>
            </div>
          </section>
        </>
      );
    case "contact":
      return (
        <>
          <PageHero {...content.contact.hero} eyebrow={content.navigation.contact} locale={locale} />
          <section className="section-space">
            <div className="shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="panel-strong p-8">
                <SectionIntro section={content.contact.intro} />
              </div>
              <div className="grid gap-5">
                {content.contact.items.map((item) => (
                  <article key={item.label} className="panel p-6">
                    <div className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-mega-accent">
                      {item.label}
                    </div>
                    <div className="mt-3 text-xl font-semibold text-mega-text">
                      {item.value}
                    </div>
                  </article>
                ))}
                <div className="panel p-6 text-[0.9rem] leading-[1.6] text-mega-muted">
                  {content.contact.note}
                </div>
              </div>
            </div>
          </section>
        </>
      );
  }
}
