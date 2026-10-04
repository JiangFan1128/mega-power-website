"use client";

import type { ReactNode } from "react";
import { ArchitectureScene } from "./architecture/architecture-scene";
import { useMemo, useRef, useState } from "react";

import type {
  ScenarioDecisionArchitecture,
  ScenarioDecisionArchitectureChip,
  ScenarioDecisionIcon,
  ScenarioDecisionPanel,
} from "@/content/types";
import type { Locale } from "@/lib/i18n";

type ScenariosDecisionHubProps = {
  locale: Locale;
  selectorLabel: string;
  panels: ScenarioDecisionPanel[];
};

function ScenarioSelectorIcon({ icon }: { icon: ScenarioDecisionIcon }) {
  const paths: Record<ScenarioDecisionIcon, ReactNode> = {
    grid: (
      <>
        <path d="M4 18h16" />
        <path d="M6 18V9l6-4 6 4v9" />
        <path d="M9 18v-4h6v4" />
      </>
    ),
    frequency: (
      <>
        <path d="M4 12h3l2-4 4 8 2-4h5" />
        <path d="M7 5h10" />
        <path d="M7 19h10" />
      </>
    ),
    ev: (
      <>
        <path d="M9 6h6l1 5H8l1-5Z" />
        <path d="M7 11h10v7H7z" />
        <path d="M10 18v2" />
        <path d="M14 18v2" />
        <path d="M17 9h2v4" />
      </>
    ),
    mobile: (
      <>
        <path d="M4 15h12l2-4h2v4h-1" />
        <path d="M6 15V9h8v6" />
        <path d="M8 18h.01" />
        <path d="M17 18h.01" />
        <path d="M7 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
        <path d="M16 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
      </>
    ),
    commercial: (
      <>
        <path d="M5 19V7l4-2 4 2 4-2v14" />
        <path d="M9 11h.01" />
        <path d="M9 15h.01" />
        <path d="M13 11h.01" />
        <path d="M13 15h.01" />
      </>
    ),
    japan: (
      <>
        <path d="M9 4c1.8 2 2.2 3.7 2.2 5.2 0 1.4-.6 2.5-1.4 3.5-.7.9-1.3 1.8-1.3 3 0 1.5 1 2.8 2.5 3.3" />
        <path d="M15 5c1.1 1.1 1.8 2.4 1.8 4 0 1.8-.9 3-2.1 4.3-.8.9-1.5 1.8-1.5 3.2 0 1 .4 1.9 1 2.5" />
      </>
    ),
  };

  return (
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
      {paths[icon]}
    </svg>
  );
}

function ArchitectureChips({
  chips,
}: {
  chips: ScenarioDecisionArchitectureChip[];
}) {
  if (chips.length === 0) {
    return null;
  }

  const toneClass = (tone?: ScenarioDecisionArchitectureChip["tone"]) => {
    if (tone === "warning") {
      return "text-mega-warning";
    }

    if (tone === "energy") {
      return "text-mega-energy";
    }

    return "text-mega-accent";
  };

  return (
    <div className="mt-5 flex flex-wrap gap-4 border-t border-dashed border-mega-accent/18 pt-4">
      {chips.map((chip) => (
        <div
          className="flex items-center gap-2 text-[0.78rem] leading-[1.5] text-white/74"
          key={`${chip.name}-${chip.detail}`}
        >
          <span
            className={`font-mono font-semibold uppercase tracking-[0.08rem] ${toneClass(chip.tone)}`}
          >
            {chip.name}
          </span>
          <span>{chip.detail}</span>
        </div>
      ))}
    </div>
  );
}

function ArchitectureSection({
  architecture,
  scenario,
  locale,
}: {
  architecture: ScenarioDecisionArchitecture;
  scenario: string;
  locale: Locale;
}) {
  return (
    <section
      id="system-architecture"
      className="scroll-mt-24 rounded-[18px] border border-[#35577f]/55 bg-[rgba(15,34,41,0.82)] p-4 sm:p-8"
    >
      <div className="eyebrow">{architecture.label}</div>
      <ArchitectureScene
        architecture={architecture}
        scenario={scenario}
        locale={locale}
      />
      <ArchitectureChips chips={architecture.chips ?? []} />
    </section>
  );
}

export function ScenariosDecisionHub({
  locale,
  selectorLabel,
  panels,
}: ScenariosDecisionHubProps) {
  const [activeKey, setActiveKey] = useState(panels[0]?.key ?? "");
  const panelRef = useRef<HTMLDivElement | null>(null);

  const activePanel = useMemo(
    () => panels.find((panel) => panel.key === activeKey) ?? panels[0],
    [activeKey, panels],
  );

  const supportHeadings = {
    en: {
      metrics: "Key Metrics",
      products: "Mapped Product Families",
    },
    ja: {
      metrics: "主要指標",
      products: "対応製品ファミリー",
    },
    zh: {
      metrics: "关键指标",
      products: "对应产品家族",
    },
  }[locale];

  if (!activePanel) {
    return null;
  }

  return (
    <section className="section-space pt-8">
      <div className="shell space-y-8">
        <div className="space-y-4">
          <div className="eyebrow text-mega-muted">{selectorLabel}</div>
          <div
            aria-label={selectorLabel}
            className="flex gap-2 overflow-x-auto pb-2"
            role="tablist"
          >
            {panels.map((panel) => {
              const isActive = panel.key === activePanel.key;

              return (
                <button
                  aria-controls={`scenario-panel-${panel.key}`}
                  aria-selected={isActive}
                  className={`group flex min-w-[15rem] shrink-0 items-center gap-3 rounded-[12px] border px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-mega-accent bg-[rgba(24,56,64,0.9)] text-white shadow-[0_0_24px_rgba(45,212,168,0.12)]"
                      : "border-[#35577f]/55 bg-[rgba(19,45,54,0.78)] text-[#eef6fb] hover:border-mega-accent/25 hover:bg-[rgba(24,56,64,0.86)] hover:text-white"
                  }`}
                  id={`scenario-tab-${panel.key}`}
                  key={panel.key}
                  onClick={() => {
                    setActiveKey(panel.key);
                    panelRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }}
                  role="tab"
                  type="button"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border ${
                      isActive
                        ? "border-mega-accent/30 bg-mega-accent/16 text-mega-accent"
                        : "border-[#35577f]/55 bg-[rgba(10,22,36,0.5)] text-[#d5e2ed] group-hover:border-mega-accent/20 group-hover:text-mega-accent"
                    }`}
                  >
                    <ScenarioSelectorIcon icon={panel.icon} />
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-[0.88rem] font-semibold leading-[1.3] ${isActive ? "text-white" : "text-[#eef6fb]"}`}
                    >
                      {panel.buttonTitle}
                    </div>
                    <div
                      className={`mt-1 text-[0.7rem] leading-[1.35] ${
                        isActive ? "text-[#dfe9f2]" : "text-[#cad8e3]"
                      }`}
                    >
                      {panel.buttonSubtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="animate-[fade-in-up_420ms_ease-out] space-y-7"
          id={`scenario-panel-${activePanel.key}`}
          key={activePanel.key}
          ref={panelRef}
          role="tabpanel"
        >
          <div className="grid gap-6 border-t border-mega-accent/15 pt-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18rem] text-mega-warning">
                {activePanel.problemLabel}
              </div>
              <h2 className="max-w-[26rem] text-[clamp(1.8rem,3vw,2.45rem)] font-extrabold leading-[1.14] tracking-[-0.03em] text-mega-text">
                {activePanel.problemTitle}
              </h2>
              <p className="max-w-[34rem] text-[0.98rem] leading-[1.78] text-mega-muted">
                {activePanel.problemBody}
              </p>
            </div>

            <article className="relative overflow-hidden rounded-[18px] border border-mega-accent/16 bg-[linear-gradient(150deg,rgba(19,45,54,0.88),rgba(24,56,64,0.78))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#2dd4a8,#00e5ff)]" />
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18rem] text-mega-accent">
                {activePanel.solutionLabel}
              </div>
              <h3 className="mt-3 text-[1.4rem] font-bold leading-[1.22] tracking-[-0.025em] text-white">
                {activePanel.solutionTitle}
              </h3>
              <p className="mt-3 text-[0.94rem] leading-[1.78] text-[#d9e5ef]">
                {activePanel.solutionBody}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activePanel.solutionValues.map((value) => (
                  <span
                    className="rounded-[8px] border border-mega-accent/16 bg-mega-accent/10 px-3 py-[0.42rem] text-[0.74rem] font-medium text-mega-accent"
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-4">
            <div className="eyebrow text-mega-muted">
              {supportHeadings.metrics}
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {activePanel.metrics.map((metric) => (
                <article
                  className="rounded-[14px] border border-[#35577f]/55 bg-[rgba(19,45,54,0.76)] px-5 py-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-mega-accent/18"
                  key={`${metric.value}-${metric.label}`}
                >
                  <div className="font-mono text-[1.6rem] font-semibold leading-none text-mega-accent sm:text-[1.9rem]">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-[0.78rem] leading-[1.55] text-[#d7e3ee]">
                    {metric.label}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {activePanel.architecture ? (
            <ArchitectureSection
              architecture={activePanel.architecture}
              scenario={activePanel.key}
              locale={locale}
            />
          ) : null}

          <section className="space-y-4">
            <div className="eyebrow text-mega-muted">
              {activePanel.productsLabel || supportHeadings.products}
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {activePanel.products.map((product) => (
                <article
                  className="rounded-[16px] border border-[#35577f]/55 bg-[linear-gradient(150deg,rgba(19,45,54,0.88),rgba(24,56,64,0.72))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:border-mega-accent/18"
                  key={`${product.model}-${product.title}`}
                >
                  <h3 className="text-[1rem] font-bold leading-[1.4] text-white">
                    {product.title}
                  </h3>
                  <div className="mt-2 font-mono text-[0.64rem] uppercase tracking-[0.1rem] text-[#dce7f1] sm:text-[0.72rem] sm:tracking-[0.12rem]">
                    {product.model}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.highlights.map((highlight) => (
                      <span
                        className="rounded-[6px] bg-[rgba(45,212,168,0.08)] px-3 py-[0.34rem] text-[0.72rem] leading-none text-[#c3e9df]"
                        key={highlight}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-5 xl:grid-cols-2">
            <article className="rounded-[16px] border border-[#35577f]/55 bg-[linear-gradient(150deg,rgba(19,45,54,0.84),rgba(24,56,64,0.68))] p-6">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18rem] text-mega-energy">
                {activePanel.platform.label}
              </div>
              <h3 className="mt-3 text-[1.04rem] font-bold text-white">
                {activePanel.platform.title}
              </h3>
              <div className="mt-5 space-y-3">
                {activePanel.platform.items.map((item) => (
                  <div
                    className="flex gap-3 text-[0.88rem] leading-[1.6] text-white/80"
                    key={item}
                  >
                    <span className="mt-[0.48rem] h-[6px] w-[6px] shrink-0 rounded-full bg-mega-energy" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[16px] border border-[#5d5264]/50 bg-[linear-gradient(150deg,rgba(31,30,39,0.82),rgba(46,37,33,0.64))] p-6">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.18rem] text-mega-warning">
                {activePanel.service.label}
              </div>
              <h3 className="mt-3 text-[1.04rem] font-bold text-white">
                {activePanel.service.title}
              </h3>
              <div className="mt-5 space-y-3">
                {activePanel.service.items.map((item) => (
                  <div
                    className="flex gap-3 text-[0.88rem] leading-[1.6] text-white/80"
                    key={item}
                  >
                    <span className="mt-[0.48rem] h-[6px] w-[6px] shrink-0 rounded-full bg-mega-warning" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
