"use client";

import Image from "next/image";
import { useState } from "react";

import { productFamilies } from "@/content/products";
import type { Locale } from "@/lib/i18n";

type ProductFamilyTabsProps = {
  locale: Locale;
};

export function ProductFamilyTabs({ locale }: ProductFamilyTabsProps) {
  const [selected, setSelected] = useState(productFamilies[0].key);
  const activeFamily =
    productFamilies.find((family) => family.key === selected) ?? productFamilies[0];
  const labels = {
    en: { family: "Product Family", count: "products" },
    ja: { family: "製品ファミリー", count: "製品" },
    zh: { family: "产品家族", count: "个产品" },
  }[locale];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {productFamilies.map((family) => {
          const active = family.key === activeFamily.key;

          return (
            <button
              key={family.key}
              className={[
                "rounded-full border px-4 py-2 text-sm font-semibold",
                active
                  ? "border-mega-accent bg-mega-accent text-mega-dark"
                  : "border-white/10 bg-white/5 text-mega-muted hover:border-mega-accent/40 hover:text-white",
              ].join(" ")}
              onClick={() => setSelected(family.key)}
              type="button"
            >
              {family.title[locale]}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="panel-strong p-6 md:col-span-3">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <div className="eyebrow">{labels.family}</div>
              <h3 className="text-2xl font-bold">{activeFamily.title[locale]}</h3>
              <p className="section-subtitle max-w-2xl">
                {activeFamily.description[locale]}
              </p>
            </div>
            <div className="rounded-full border border-mega-accent/20 bg-mega-accent/10 px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.14rem] text-mega-accent">
              {activeFamily.products.length} {labels.count}
            </div>
          </div>
        </div>

        {activeFamily.products.map((product) => (
          <article
            key={product.model}
            className="overflow-hidden rounded-[16px] border border-[rgba(45,212,168,0.08)] bg-mega-surface shadow-panelSoft transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(45,212,168,0.2)]"
          >
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#dce9ea] to-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,94,92,0.18),transparent_55%)]" />
              <Image
                alt={product.name}
                className="relative z-10 h-full w-full object-contain p-4"
                height={420}
                src={product.image}
                width={420}
              />
            </div>
            <div className="space-y-5 p-6">
              <div className="space-y-2">
                <div className="micro-label">
                  {activeFamily.title[locale]}
                </div>
                <h4 className="text-[1.05rem] font-bold leading-[1.3] tracking-[-0.01em] text-white">
                  {product.name}
                </h4>
                <div className="model-copy">
                  {product.model}
                </div>
                <p className="card-copy">
                  {product.description[locale]}
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div
                    key={`${product.model}-${spec.label}`}
                    className="rounded-[14px] border border-white/10 bg-black/10 p-3"
                  >
                    <div className="spec-label">
                      {spec.label}
                    </div>
                    <div className="spec-value">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
