import { en } from "@/content/en";
import { ja } from "@/content/ja";
import { zh } from "@/content/zh";
import type { SiteContent } from "@/content/types";
import type { Locale, PageKey } from "@/lib/i18n";

const contentMap: Record<Locale, SiteContent> = {
  en,
  ja,
  zh,
};

export function getSiteContent(locale: Locale): SiteContent {
  return contentMap[locale];
}

export function getMetadataForPage(content: SiteContent, page: PageKey) {
  switch (page) {
    case "home":
      return content.home.metadata;
    case "scenarios":
      return content.scenarios.metadata;
    case "solutions":
      return content.solutions.metadata;
    case "platform":
      return content.platform.metadata;
    case "products":
      return content.products.metadata;
    case "safety":
      return content.safety.metadata;
    case "services":
      return content.services.metadata;
    case "about":
      return content.about.metadata;
    case "contact":
      return content.contact.metadata;
  }
}
