import type { Locale, PageKey } from "@/lib/i18n";

export type LinkAction = {
  label: string;
  page: PageKey;
};

export type MetadataContent = {
  title: string;
  description: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: LinkAction;
  secondaryCta?: LinkAction;
  stats?: HeroStat[];
};

export type SectionLead = {
  label: string;
  title: string;
  body: string;
};

export type ScenarioCard = {
  badge?: string;
  title: string;
  summary: string;
  preview?: string;
  approach?: string;
  fit?: string;
  tags: string[];
};

export type ScenarioDetail = {
  title: string;
  problem: string;
  approach: string;
  benefits: string[];
};

export type SolutionItem = {
  title: string;
  summary: string;
  bullets: string[];
};

export type PlatformModule = {
  name: string;
  title: string;
  description: string;
};

export type PlatformCapabilityGroup = {
  label: string;
  title: string;
  body?: string;
  items: PlatformModule[];
};

export type TrustItem = {
  title: string;
  body: string;
};

export type ServiceItem = {
  title: string;
  body: string;
};

export type ContactItem = {
  label: string;
  value: string;
};

export type ProductFamilyKey = "grid" | "pvess" | "transport" | "ci";

export type ProductSpec = {
  label: string;
  value: string;
};

export type LocalizedText = Record<Locale, string>;

export type Product = {
  family: ProductFamilyKey;
  name: string;
  model: string;
  description: LocalizedText;
  image: string;
  specs: ProductSpec[];
};

export type ProductFamily = {
  key: ProductFamilyKey;
  title: LocalizedText;
  description: LocalizedText;
  products: Product[];
};

export type SiteContent = {
  localeLabel: string;
  navigation: Record<PageKey, string>;
  footer: {
    summary: string;
    address: string;
    note: string;
  };
  home: {
    metadata: MetadataContent;
    hero: HeroContent;
    value: SectionLead;
    scenarios: SectionLead & {
      items: ScenarioCard[];
      guide?: string;
      footerNote?: string;
      action?: LinkAction;
    };
    solutions: SectionLead & { items: SolutionItem[] };
    platform: SectionLead & { bullets: string[] };
    products: SectionLead;
    safety: SectionLead & { bullets: string[] };
    services: SectionLead & { items: ServiceItem[] };
    cta: SectionLead & { action: LinkAction };
  };
  scenarios: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    details: ScenarioDetail[];
    japanBlock: SectionLead & { bullets: string[] };
    mapping: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  solutions: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    items: SolutionItem[];
    cta: SectionLead & { action: LinkAction };
  };
  platform: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    capability: {
      pills: string[];
      base: PlatformCapabilityGroup;
      control: PlatformCapabilityGroup;
      brain: PlatformCapabilityGroup;
    };
    modules: PlatformModule[];
    workflow: SectionLead & { bullets: string[] };
    security: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  products: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    related: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  safety: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    items: TrustItem[];
    japan: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  services: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    strategy: ServiceItem[];
    mechanism: ServiceItem[];
    japan: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  about: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    pillars: TrustItem[];
    japan: SectionLead & { body: string };
    cta: SectionLead & { action: LinkAction };
  };
  contact: {
    metadata: MetadataContent;
    hero: {
      title: string;
      subtitle: string;
    };
    intro: SectionLead;
    items: ContactItem[];
    note: string;
  };
};
