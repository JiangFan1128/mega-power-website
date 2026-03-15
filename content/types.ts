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

export type PageHeroContent = {
  title: string;
  subtitle: string;
  highlight?: string;
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

export type ScenarioDecisionIcon =
  | "grid"
  | "frequency"
  | "ev"
  | "mobile"
  | "commercial"
  | "japan";

export type ScenarioDecisionMetric = {
  value: string;
  label: string;
};

export type ScenarioDecisionProduct = {
  title: string;
  model: string;
  highlights: string[];
};

export type ScenarioDecisionSupport = {
  label: string;
  title: string;
  items: string[];
};

export type ScenarioDecisionArchitectureNode = {
  title: string;
  subtitle?: string;
  tone?: "default" | "highlight" | "platform";
};

export type ScenarioDecisionArchitectureFlowRow = {
  nodes: ScenarioDecisionArchitectureNode[];
  align?: "start" | "center" | "end";
  arrow?: string;
};

export type ScenarioDecisionArchitectureChip = {
  name: string;
  detail: string;
  tone?: "accent" | "energy" | "warning";
};

export type ScenarioDecisionArchitectureFlow = {
  kind: "flow";
  label: string;
  rows: ScenarioDecisionArchitectureFlowRow[];
  chips?: ScenarioDecisionArchitectureChip[];
};

export type ScenarioDecisionArchitectureScaleColumn = {
  title: string;
  subtitle: string;
  input: string;
  items: string[];
};

export type ScenarioDecisionArchitectureScale = {
  kind: "scale";
  label: string;
  columns: ScenarioDecisionArchitectureScaleColumn[];
  chips?: ScenarioDecisionArchitectureChip[];
};

export type ScenarioDecisionArchitectureTier = {
  icon: string;
  title: string;
  power: string;
  description: string;
  items: string[];
};

export type ScenarioDecisionArchitectureTiers = {
  kind: "tiers";
  label: string;
  tiers: ScenarioDecisionArchitectureTier[];
  chips?: ScenarioDecisionArchitectureChip[];
};

export type ScenarioDecisionArchitectureTurnover = {
  kind: "turnover";
  label: string;
  topLabel: string;
  topNodes: ScenarioDecisionArchitectureNode[];
  middleNodes: ScenarioDecisionArchitectureNode[];
  bottomLabel: string;
  bottomNodes: ScenarioDecisionArchitectureNode[];
  chips?: ScenarioDecisionArchitectureChip[];
};

export type ScenarioDecisionArchitecture =
  | ScenarioDecisionArchitectureFlow
  | ScenarioDecisionArchitectureScale
  | ScenarioDecisionArchitectureTiers
  | ScenarioDecisionArchitectureTurnover;

export type ScenarioDecisionPanel = {
  key: string;
  icon: ScenarioDecisionIcon;
  buttonTitle: string;
  buttonSubtitle: string;
  problemLabel: string;
  problemTitle: string;
  problemBody: string;
  solutionLabel: string;
  solutionTitle: string;
  solutionBody: string;
  solutionValues: string[];
  metrics: ScenarioDecisionMetric[];
  architecture?: ScenarioDecisionArchitecture;
  productsLabel: string;
  products: ScenarioDecisionProduct[];
  platform: ScenarioDecisionSupport;
  service: ScenarioDecisionSupport;
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

export type PlatformFeatureCard = {
  title: string;
  body: string;
};

export type PlatformCapabilityGroup = {
  label: string;
  title: string;
  body?: string;
  items: PlatformModule[];
};

export type PlatformCapabilityExplainer = {
  label: string;
  body: string;
  systems: Array<{
    name: string;
    title: string;
  }>;
  recorder: {
    name: string;
    title: string;
  };
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
    hero: PageHeroContent;
    intro: SectionLead;
    selectorLabel: string;
    panels: ScenarioDecisionPanel[];
    details: ScenarioDetail[];
    japanBlock: SectionLead & { bullets: string[] };
    mapping: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  solutions: {
    metadata: MetadataContent;
    hero: PageHeroContent;
    intro: SectionLead;
    items: SolutionItem[];
    cta: SectionLead & { action: LinkAction };
  };
  platform: {
    metadata: MetadataContent;
    hero: PageHeroContent;
      intro: SectionLead;
      capability: {
        pills: string[];
        explainer: PlatformCapabilityExplainer;
        base: PlatformCapabilityGroup;
        control: PlatformCapabilityGroup;
        brain: PlatformCapabilityGroup;
      };
    management: SectionLead & {
      systems: string[];
      highlights: PlatformFeatureCard[];
    };
    modules: PlatformModule[];
    security: SectionLead & {
      deployment: string[];
      safeguards: PlatformFeatureCard[];
    };
    cta: SectionLead & { action: LinkAction };
  };
  products: {
    metadata: MetadataContent;
    hero: PageHeroContent;
    intro: SectionLead;
    related: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  safety: {
    metadata: MetadataContent;
    hero: PageHeroContent;
    intro: SectionLead;
    items: TrustItem[];
    japan: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  services: {
    metadata: MetadataContent;
    hero: PageHeroContent;
    intro: SectionLead;
    strategy: ServiceItem[];
    mechanism: ServiceItem[];
    japan: SectionLead & { bullets: string[] };
    cta: SectionLead & { action: LinkAction };
  };
  about: {
    metadata: MetadataContent;
    hero: PageHeroContent;
    intro: SectionLead;
    pillars: TrustItem[];
    japan: SectionLead & { body: string };
    cta: SectionLead & { action: LinkAction };
  };
  contact: {
    metadata: MetadataContent;
    hero: PageHeroContent;
    intro: SectionLead;
    items: ContactItem[];
    note: string;
    mapEmbed: string;
  };
};
