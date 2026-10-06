import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { AnalyticsPrivacy } from "@/components/analytics/privacy";
import { AnalyticsTracker } from "@/components/analytics/tracker";
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
    <div className="site-shell min-h-screen bg-transparent text-mega-text" data-locale={locale}>
      {(process.env.VERCEL_ENV === "production" || process.env.ANALYTICS_LOCAL_DIR) && <AnalyticsTracker />}
      <Header locale={locale} navigation={content.navigation} />
      <main>{children}</main>
      <Footer content={content} locale={locale} />
      <AnalyticsPrivacy locale={locale} />
    </div>
  );
}
