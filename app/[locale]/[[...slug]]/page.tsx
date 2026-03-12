import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { PageRenderer } from "@/components/page-renderer";
import { getMetadataForPage, getSiteContent } from "@/lib/content";
import {
  isLocale,
  locales,
  pageKeys,
  pageSlugs,
  slugToPageKey,
  type Locale,
} from "@/lib/i18n";

type PageParams = {
  locale: string;
  slug?: string[];
};

export async function generateStaticParams() {
  return locales.flatMap((locale) => [
    { locale },
    ...pageKeys
      .filter((page) => page !== "home")
      .map((page) => ({ locale, slug: [pageSlugs[page]] })),
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    return {};
  }

  const page = slugToPageKey(resolved.slug);

  if (!page) {
    return {};
  }

  const content = getSiteContent(resolved.locale);
  const meta = getMetadataForPage(content, page);
  const suffix = resolved.slug?.[0] ? `/${resolved.slug[0]}` : "";

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: resolved.locale,
    },
    alternates: {
      languages: {
        en: `/en${suffix}`,
        ja: `/ja${suffix}`,
        zh: `/zh${suffix}`,
      },
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolved = await params;

  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const page = slugToPageKey(resolved.slug);

  if (!page) {
    notFound();
  }

  const locale = resolved.locale as Locale;
  const content = getSiteContent(locale);

  if (page === "contact") {
    redirect(`/${locale}/about`);
  }

  if (page === "safety" || page === "solutions") {
    redirect(`/${locale}/scenarios`);
  }

  return <PageRenderer content={content} locale={locale} page={page} />;
}
