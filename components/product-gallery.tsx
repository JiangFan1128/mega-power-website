"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import {
  productGalleryFamilies,
  productGalleryItems,
  type ProductGalleryFamilyKey,
} from "@/content/product-gallery";
import type { Locale } from "@/lib/i18n";

type ProductGalleryProps = {
  locale: Locale;
};

type FilterKey = "all" | ProductGalleryFamilyKey;

export function ProductGallery({ locale }: ProductGalleryProps) {
  const [selected, setSelected] = useState<FilterKey>("all");
  const [preview, setPreview] = useState<{
    src: string;
    alt: string;
    title: string;
    model: string;
  } | null>(null);

  const copy = {
    en: {
      all: "All",
      browse: "Browse by Product Family",
      showing: "products shown",
      zoom: "Click to enlarge",
      preview: "Preview",
      close: "Close",
      model: "Model",
    },
    ja: {
      all: "All",
      browse: "製品ファミリーで絞り込み",
      showing: "製品を表示",
      zoom: "クリックして拡大",
      preview: "プレビュー",
      close: "閉じる",
      model: "Model",
    },
    zh: {
      all: "All",
      browse: "按产品家族筛选",
      showing: "个产品",
      zoom: "点击放大预览",
      preview: "预览",
      close: "关闭",
      model: "型号",
    },
  }[locale];

  const filters = useMemo(
    () => [
      { key: "all" as const, label: copy.all },
      ...productGalleryFamilies.map((family) => ({
        key: family.key,
        label: family.title[locale],
      })),
    ],
    [copy.all, locale],
  );

  const items = useMemo(
    () => {
      const titleByFamily = Object.fromEntries(
        productGalleryFamilies.map((family) => [family.key, family.title[locale]]),
      ) as Record<ProductGalleryFamilyKey, string>;

      return productGalleryItems.map((product) => ({
        familyKey: product.family,
        familyTitle: titleByFamily[product.family],
        name: product.title[locale],
        model: product.model,
        image: product.image,
      }));
    },
    [locale],
  );

  const visibleItems =
    selected === "all" ? items : items.filter((item) => item.familyKey === selected);

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 rounded-[18px] border border-[#35577f]/70 bg-[linear-gradient(150deg,rgba(18,34,56,0.96),rgba(23,50,82,0.84))] p-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="eyebrow">{copy.browse}</div>
            <div className="flex flex-wrap gap-2.5">
              {filters.map((filter) => {
                const active = filter.key === selected;

                return (
                  <button
                    key={filter.key}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                      active
                        ? "border-mega-accent bg-mega-accent text-mega-dark"
                        : "border-white/10 bg-white/5 text-[#e1ebf4] hover:border-mega-accent/40 hover:text-white",
                    ].join(" ")}
                    onClick={() => setSelected(filter.key)}
                    type="button"
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="rounded-full border border-mega-accent/20 bg-mega-accent/10 px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.14rem] text-mega-accent">
            {visibleItems.length} {copy.showing}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {visibleItems.map((item) => (
            <article
              key={item.model}
              className="overflow-hidden rounded-[20px] border border-[#35577f]/70 bg-[linear-gradient(150deg,rgba(18,34,56,0.96),rgba(23,50,82,0.84))] shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-[#4f709a]"
            >
              <button
                aria-label={`${copy.preview}: ${item.name}`}
                className="group relative flex h-[21rem] w-full items-center justify-center overflow-hidden border-b border-[#35577f]/55 bg-[radial-gradient(circle_at_top,rgba(70,162,255,0.16),transparent_52%),linear-gradient(180deg,rgba(233,244,244,0.96),rgba(212,228,230,0.98))] p-4"
                onClick={() =>
                  setPreview({
                    src: item.image,
                    alt: `${item.name} ${item.model}`,
                    title: item.name,
                    model: item.model,
                  })
                }
                type="button"
              >
                <Image
                  alt={`${item.name} ${item.model}`}
                  className="max-h-full w-auto object-contain transition duration-300 group-hover:scale-[1.02]"
                  height={900}
                  src={item.image}
                  width={900}
                />
                <span className="absolute bottom-4 right-4 rounded-full border border-mega-accent/20 bg-[#07181d]/88 px-3 py-1.5 text-[0.68rem] font-mono uppercase tracking-[0.14rem] text-mega-accent">
                  {copy.zoom}
                </span>
              </button>

              <div className="space-y-4 p-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="micro-label">{item.familyTitle}</span>
                  </div>
                  <h3 className="text-[1.4rem] font-extrabold leading-[1.22] tracking-[-0.025em] text-white">
                    {item.name}
                  </h3>
                  <div className="rounded-[14px] border border-white/10 bg-black/10 p-3">
                    <div className="spec-label">{copy.model}</div>
                    <div className="model-copy mt-1 text-[#dce7f1]">{item.model}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(4,10,13,0.86)] p-4 backdrop-blur-sm"
          onClick={() => setPreview(null)}
          role="dialog"
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[20px] border border-[#4f709a]/70 bg-[linear-gradient(145deg,rgba(9,19,34,0.98),rgba(17,35,60,0.98))] shadow-[0_32px_90px_rgba(0,0,0,0.5)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label={copy.close}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-black/35 text-xl text-white hover:border-mega-accent/30 hover:text-mega-accent"
              onClick={() => setPreview(null)}
              type="button"
            >
              ×
            </button>
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="relative flex min-h-[58vh] items-center justify-center bg-[radial-gradient(circle_at_top,rgba(45,212,168,0.12),transparent_40%),linear-gradient(180deg,rgba(230,241,242,0.97),rgba(210,226,228,0.98))] p-6">
                <Image
                  alt={preview.alt}
                  className="max-h-[72vh] w-auto object-contain"
                  height={1400}
                  src={preview.src}
                  width={1400}
                />
              </div>
              <div className="flex flex-col justify-end gap-3 border-t border-mega-accent/10 p-6 lg:border-l lg:border-t-0">
                <div className="micro-label">{copy.preview}</div>
                <h3 className="text-[1.35rem] font-bold leading-[1.25] text-white">
                  {preview.title}
                </h3>
                <div className="model-copy">{preview.model}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
