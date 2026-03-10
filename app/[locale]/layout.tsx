import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSiteContent } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale as Locale);

  return (
    <div className="min-h-screen bg-transparent text-mega-text">
      <Header locale={locale} navigation={content.navigation} />
      <main>{children}</main>
      <Footer content={content} locale={locale} />
    </div>
  );
}

