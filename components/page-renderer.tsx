import Link from "next/link";

import { ProductGallery } from "@/components/product-gallery";
import { ProductFamilyTabs } from "@/components/product-family-tabs";
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
      <p className="section-subtitle max-w-3xl">{section.body}</p>
    </div>
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
}: {
  items: ScenarioCard[];
  locale: Locale;
  action?: { label: string; page: PageKey };
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

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="panel rounded-[18px] border border-[#35577f]/65 bg-[linear-gradient(150deg,rgba(18,34,56,0.96),rgba(23,50,82,0.84))] p-5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-mega-accent/12 bg-mega-accent/10 font-mono text-[0.76rem] font-bold uppercase tracking-[0.16em] text-mega-accent">
            {item.badge ?? item.title.slice(0, 2)}
          </div>
          <h3 className="mt-5 text-[1.28rem] font-bold leading-[1.28] tracking-[-0.025em] text-white">
            {item.title}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-[1.72] text-mega-muted">
            {item.preview ?? item.summary}
          </p>
        </article>
      ))}
      {action ? (
        <Link
          className="group flex min-h-[14.5rem] flex-col justify-between rounded-[18px] border border-[#4f709a]/85 bg-[linear-gradient(145deg,rgba(9,19,34,0.98),rgba(17,35,60,0.98))] p-5 shadow-[0_24px_54px_rgba(0,0,0,0.34)] transition hover:-translate-y-1 hover:border-mega-energy/45 hover:bg-[linear-gradient(145deg,rgba(11,23,40,0.99),rgba(20,40,68,0.99))]"
          href={pageKeyToHref(locale, action.page)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-mega-accent/20 bg-mega-accent/12 text-[1rem] font-bold text-mega-accent">
            {"->"}
          </div>
          <div className="space-y-3">
            <h3 className="text-[1.45rem] font-extrabold leading-[1.18] tracking-[-0.03em] text-white">
              {action.label}
            </h3>
            <p className="max-w-[18rem] text-[0.92rem] leading-[1.65] text-mega-text/72">
              {cardCopy}
            </p>
          </div>
          <div className="font-mono text-[0.74rem] uppercase tracking-[0.16rem] text-mega-accent/90 transition group-hover:text-mega-energy">
            {openLabel}
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
  eyebrow = "MEGA",
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}) {
  return (
    <section className="section-space relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 bg-grid-fade bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]" />
      <div className="shell relative">
        <div className="panel-strong max-w-5xl p-8 sm:p-10 lg:p-14">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display-title mt-4 max-w-4xl">
            {title}
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
    en: "max-w-[56rem] text-[clamp(2.45rem,4.95vw,4.95rem)] leading-[1.01]",
    ja: "max-w-[52rem] text-[clamp(2.12rem,4.35vw,4.3rem)] leading-[1.06]",
    zh: "max-w-[47rem] text-[clamp(2.3rem,4.65vw,4.65rem)] leading-[1.04]",
  }[locale];
  const heroSubtitleClass = {
    en: "max-w-[50rem] text-[1.08rem] leading-[1.72]",
    ja: "max-w-[46rem] text-[1.02rem] leading-[1.78]",
    zh: "max-w-[44rem] text-[1.02rem] leading-[1.78]",
  }[locale];

  return (
    <section className="relative overflow-hidden py-14 lg:min-h-[calc(82vh-80px)] lg:py-16">
      <div className="absolute inset-0 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 bg-grid-fade bg-[size:72px_72px] opacity-25 [mask-image:radial-gradient(circle_at_center,black_22%,transparent_82%)]" />
      <div className="absolute right-[-14rem] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,168,0.14),transparent_65%)] lg:block" />
      <div className="absolute right-[4rem] top-1/2 hidden h-[25rem] w-[25rem] -translate-y-1/2 rounded-full border border-[rgba(45,212,168,0.18)] lg:block" />
      <div className="absolute right-[7.5rem] top-1/2 hidden h-[17rem] w-[17rem] -translate-y-1/2 rounded-full border border-dashed border-[rgba(45,212,168,0.08)] lg:block" />
      <div className="shell relative">
        <div className="max-w-[62rem] space-y-7 lg:ml-10 xl:ml-14">
          <div className="space-y-5">
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1 className={`${heroTitleClass} font-extrabold tracking-[-0.04em] text-white`}>
              {renderHeroTitle(hero.title, locale)}
            </h1>
            <p className={`${heroSubtitleClass} text-mega-muted`}>
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="button-primary"
                href={pageKeyToHref(locale, hero.primaryCta.page)}
              >
                {hero.primaryCta.label}
              </Link>
              {hero.secondaryCta ? (
                <Link
                  className="button-secondary"
                  href={pageKeyToHref(locale, hero.secondaryCta.page)}
                >
                  {hero.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="max-w-[56rem] space-y-4 border-t border-[#35577f]/55 pt-6">
            <div className="font-mono text-xs uppercase tracking-[0.34em] text-mega-accent">
              {heroCopy.capabilities}
            </div>
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
              {hero.stats?.map((item) => (
                <div key={item.label}>
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
      help: "How MEGA POWER Helps",
      fit: "Best Fit For",
    },
    ja: {
      help: "How MEGA POWER Helps",
      fit: "Best Fit For",
    },
    zh: {
      help: "MEGA POWER 如何支持",
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
          <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-[1.2] tracking-[-0.025em] text-white">
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
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
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
                    className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-sm text-white"
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
            <h3 className="text-[clamp(1.45rem,2.6vw,2rem)] font-extrabold leading-[1.16] tracking-[-0.03em] text-white">
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
              <h4 className="mt-2 text-[1.22rem] font-bold leading-[1.25] text-white">
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
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.8rem] text-white"
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
          <h3 className="text-[1rem] font-bold leading-[1.35] text-white">{item.title}</h3>
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
      <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
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
              <h3 className="text-[1.15rem] font-bold leading-[1.28] text-white">
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
            <h3 className="mt-4 text-2xl font-bold text-white">
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
                className="rounded-full border border-mega-accent/15 bg-mega-accent/10 px-4 py-2 text-[0.72rem] font-mono uppercase tracking-[0.16rem] text-mega-accent"
                key={pill}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="panel-strong relative overflow-hidden p-8 sm:p-10">
            <div className="relative space-y-8">
              <div className="space-y-4">
                <div className="eyebrow">{capability.base.label}</div>
                <h3 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
                  {capability.base.title}
                </h3>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {capability.base.items.map((item) => (
                  <article className="rounded-[18px] border border-white/10 bg-white/5 p-6" key={item.name}>
                    <div className="font-mono text-[2rem] font-bold leading-none text-mega-accent">
                      {item.name}
                    </div>
                    <h4 className="mt-3 text-[1rem] font-bold text-white">{item.title}</h4>
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
              <h3 className="text-[clamp(1.7rem,2.7vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.03em] text-white">
                {capability.control.title}
              </h3>
            </div>
            <div className="mt-8 space-y-8">
              {capability.control.items.map((item) => (
                <div className="border-l-2 border-white/10 pl-5" key={item.name}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-mono text-[2rem] font-bold leading-none text-white">
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
            <h3 className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-extrabold leading-[1.16] tracking-[-0.03em] text-white">
              {capability.brain.title}
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {capability.brain.items.map((item) => (
              <article className="panel p-6 sm:p-7" key={item.name}>
                <div className="font-mono text-[2rem] font-bold leading-none text-mega-accent">
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
}: {
  locale: Locale;
  title: string;
  body: string;
  label: string;
  action: { label: string; page: PageKey };
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
            <Link className="button-primary" href={pageKeyToHref(locale, action.page)}>
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
          />
        </div>
      </section>

      <section className="section-space bg-black/10">
        <div className="shell space-y-8">
          <SectionIntro section={content.home.solutions} />
          <SolutionGrid items={content.home.solutions.items} />
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
                <div className="font-mono text-[1.8rem] font-bold leading-none text-mega-accent">
                  {module.name}
                </div>
                <h3 className="mt-2 text-[0.92rem] font-bold text-white">{module.title}</h3>
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
          <SectionIntro section={content.home.products} />
          <ProductFamilyTabs locale={locale} />
        </div>
      </section>

      <section className="section-space">
        <div className="shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <BulletPanel
            body={content.home.safety.body}
            bullets={content.home.safety.bullets}
            label={content.home.safety.label}
            title={content.home.safety.title}
          />
          <BulletPanel
            body={content.services.japan.body}
            bullets={content.services.japan.bullets}
            label={content.services.japan.label}
            title={content.home.services.title}
          />
        </div>
      </section>

      <section className="section-space">
        <div className="shell space-y-8">
          <SectionIntro section={content.home.services} />
          <div className="grid gap-5 md:grid-cols-3">
            {content.home.services.items.map((item) => (
              <article key={item.title} className="panel p-6">
                <h3 className="text-[0.95rem] font-bold text-white">{item.title}</h3>
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
          <PageHero {...content.scenarios.hero} eyebrow={content.navigation.scenarios} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.scenarios.intro} />
              <ScenarioSolutionSections
                locale={locale}
                platformBullets={content.home.platform.bullets}
                previews={content.home.scenarios.items}
                safetyBullets={content.home.safety.bullets}
                scenarios={content.scenarios.details}
                serviceBullets={content.services.japan.bullets}
                solutions={content.solutions.items}
              />
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell grid gap-6 lg:grid-cols-2">
              <BulletPanel {...content.scenarios.japanBlock} />
              <BulletPanel {...content.scenarios.mapping} />
            </div>
          </section>
          <CTASection locale={locale} {...content.scenarios.cta} />
        </>
      );
    case "solutions":
      return (
        <>
          <PageHero {...content.solutions.hero} eyebrow={content.navigation.solutions} />
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
          <CTASection locale={locale} {...content.solutions.cta} />
        </>
      );
    case "platform":
      return (
        <>
          <PageHero {...content.platform.hero} eyebrow={content.navigation.platform} />
          <PlatformCapabilitySection
            capability={content.platform.capability}
            intro={content.platform.intro}
          />
          <PlatformManagementSection section={content.platform.management} />
          <PlatformSecuritySection section={content.platform.security} />
          <CTASection locale={locale} {...content.platform.cta} />
        </>
      );
    case "products":
      return (
        <>
          <PageHero {...content.products.hero} eyebrow={content.navigation.products} />
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
          <PageHero {...content.safety.hero} eyebrow={content.navigation.safety} />
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
          <PageHero {...content.services.hero} eyebrow={content.navigation.services} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.services.intro} />
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-5">
                  {content.services.strategy.map((item) => (
                    <article key={item.title} className="panel p-6">
                      <h3 className="text-[0.95rem] font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-[0.85rem] leading-[1.55] text-mega-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
                <div className="space-y-5">
                  {content.services.mechanism.map((item) => (
                    <article key={item.title} className="panel p-6">
                      <h3 className="text-[0.95rem] font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-[0.85rem] leading-[1.55] text-mega-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell">
              <BulletPanel {...content.services.japan} />
            </div>
          </section>
          <CTASection locale={locale} {...content.services.cta} />
        </>
      );
    case "about":
      return (
        <>
          <PageHero {...content.about.hero} eyebrow={content.navigation.about} />
          <section className="section-space">
            <div className="shell space-y-8">
              <SectionIntro section={content.about.intro} />
              <TrustGrid items={content.about.pillars} />
            </div>
          </section>
          <section className="section-space bg-black/10">
            <div className="shell">
              <div className="panel-strong p-8 sm:p-10">
                <SectionIntro section={content.about.japan} />
              </div>
            </div>
          </section>
          <CTASection locale={locale} {...content.about.cta} />
        </>
      );
    case "contact":
      return (
        <>
          <PageHero {...content.contact.hero} eyebrow={content.navigation.contact} />
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
                    <div className="mt-3 text-xl font-semibold text-white">
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
