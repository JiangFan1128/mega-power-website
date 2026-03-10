import type { SiteContent } from "@/content/types";

export const en: SiteContent = {
  localeLabel: "English",
  navigation: {
    home: "Home",
    scenarios: "Scenarios",
    solutions: "Solutions",
    platform: "Platform",
    products: "Products",
    safety: "Safety & Reliability",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
  footer: {
    summary:
      "MEGA POWER positions energy storage, charging, digital control, and long-term service as one integrated operating system for green energy deployment.",
    address: "MEGA POWER CO., LTD · Tokyo, Japan",
    note:
      "This MVP presents core business information, strategic capabilities, and selected products from the source material only.",
  },
  home: {
    metadata: {
      title: "MEGA POWER | Integrated Digital Green Energy Solutions",
      description:
        "Scenario-first corporate website for MEGA POWER, covering utility storage, frequency regulation, PV-ESS-charging, digital platform capability, safety, and Japan market readiness.",
    },
    hero: {
      eyebrow: "MEGA POWER TECHNOLOGY",
      title: "Empowering Global Sustainable Energy Development",
      subtitle:
        "Integrated digital green energy solutions combining photovoltaic generation, flexible storage, efficient charging, and intelligent management for grid, industry, transport, and charging infrastructure.",
      primaryCta: { label: "Explore Scenarios", page: "scenarios" },
      secondaryCta: { label: "View Solutions", page: "solutions" },
      stats: [
        { value: "20+", label: "Years of Industry Expertise" },
        { value: "6S+EDR", label: "Patented Safety System" },
        { value: "<50ms", label: "Frequency Regulation Latency" },
        { value: "28 Days", label: "Advance Failure Detection" },
      ],
    },
    value: {
      label: "Why MEGA POWER",
      title: "From core equipment to digital management, built as one energy system",
      body:
        "MEGA POWER is designed for customers who need more than standalone hardware. The company integrates power conversion, storage, charging, digital monitoring, warning, and O&M logic into a solution system that is easier to deploy, manage, and scale.",
    },
    scenarios: {
      label: "Scenarios",
      title: "Start with your real operating scenario, then identify the energy solution that fits best",
      body:
        "Not every project faces the same constraint. Some need better renewable integration, some struggle with limited grid capacity, some are under pressure to reduce industrial energy costs, and others need temporary or emergency power resilience. It is often easier to identify the right system when you begin with your actual operating condition.",
      action: { label: "View Scenario Details", page: "scenarios" },
      guide:
        "Help visitors recognize themselves quickly instead of asking them to decode technical categories first.",
      items: [
        {
          badge: "GR",
          title: "Renewable output is unstable. How can grid integration become more reliable?",
          preview: "Support more stable renewable integration with storage and digital dispatch coordination.",
          summary:
            "If you operate a wind farm, solar plant, or grid-connected renewable project, output fluctuation can create dispatch pressure, grid-stability requirements, and lower integration efficiency.",
          approach:
            "By combining energy storage with digital dispatch capability, MEGA POWER helps improve system flexibility, grid quality, and renewable integration performance.",
          fit: "Wind farms, PV plants, substations, and grid-connected renewable projects",
          tags: ["Wind Farms", "PV Plants", "Grid Stability", "Flexible Dispatch"],
        },
        {
          badge: "FS",
          title: "Frequency regulation is too slow. How can response become faster and more stable?",
          preview: "Improve frequency-response speed and stability for high-response power systems.",
          summary:
            "If your power system requires faster response to grid-frequency fluctuations, conventional methods may be limited in speed, precision, and continuity.",
          approach:
            "MEGA POWER's storage-based frequency regulation capability supports faster power response and helps strengthen system stability and ancillary-service performance.",
          fit: "Frequency regulation projects, ancillary services, microgrids, and high-response power systems",
          tags: ["Frequency Control", "Ancillary Services", "Microgrids", "Fast Response"],
        },
        {
          badge: "EV",
          title: "Power capacity is limited. How can you still build a high-power charging site?",
          preview: "Deploy high-power EV charging more flexibly under weak-grid or off-grid constraints.",
          summary:
            "If you want to deploy charging infrastructure for buses, logistics fleets, or heavy-duty trucks, but the site has limited grid capacity, weak-grid conditions, or even no grid access, deployment becomes much harder.",
          approach:
            "Through an integrated PV-ESS-charging system, MEGA POWER supports more flexible high-power charging deployment in constrained conditions, especially where reliability and build efficiency matter.",
          fit: "Weak-grid sites, off-grid sites, bus depots, truck charging hubs, and logistics parks",
          tags: ["Weak-grid", "Off-grid Sites", "Bus Depots", "Truck Charging"],
        },
        {
          badge: "MP",
          title: "For remote, temporary, or emergency use, how can power be deployed quickly?",
          preview: "Bring transportable power to remote, temporary, and emergency operating conditions.",
          summary:
            "If you need to supply power for remote locations, construction sites, mining operations, temporary activities, or emergency response, fixed infrastructure is often too slow, too rigid, or too expensive.",
          approach:
            "MEGA POWER's transportable energy systems enable faster deployment and more flexible power supply, making them suitable for projects that value resilience and rapid recovery.",
          fit: "Emergency response, temporary construction power, mining sites, remote areas, and mobile deployment needs",
          tags: ["Emergency Response", "Temporary Power", "Remote Areas", "Rapid Deployment"],
        },
        {
          badge: "CI",
          title: "How can factories and campuses reduce energy cost while improving power continuity?",
          preview: "Lower electricity cost and strengthen continuity for industrial and campus operations.",
          summary:
            "If you operate a factory, business park, hospital, or school, you are likely balancing electricity cost, operational continuity, resilience expectations, and low-carbon transition goals.",
          approach:
            "MEGA POWER's C&I storage solutions help optimize load profiles, improve energy flexibility, and strengthen power stability in critical operating conditions.",
          fit: "Industrial facilities, commercial parks, hospitals, schools, and public infrastructure",
          tags: ["Industrial Sites", "Commercial Parks", "Hospitals & Schools", "Peak Shaving"],
        },
      ],
    },
    solutions: {
      label: "Solutions",
      title: "A complete solution portfolio across power, storage, and charging",
      body:
        "MEGA POWER's solution system spans utility-scale storage, frequency regulation, integrated PV-ESS-charging, transportable energy systems, and commercial & industrial storage.",
      items: [
        {
          title: "Utility-scale Energy Storage",
          summary: "Megawatt-level systems for renewable integration, peak shifting, and grid support.",
          bullets: ["Renewable smoothing", "Peak shaving", "Black start readiness"],
        },
        {
          title: "Frequency Regulation Storage",
          summary: "Storage-based regulation for fast, precise power adjustment around grid frequency targets.",
          bullets: ["Millisecond response", "Two-way regulation", "Operational value"],
        },
        {
          title: "Integrated PV-ESS-Charging",
          summary: "Flexible solar, storage, and charging deployment for weak-grid and high-demand sites.",
          bullets: ["Virtual expansion", "Backup supply", "Modular rollout"],
        },
        {
          title: "Transportable Energy Storage",
          summary: "Movable platforms for emergency rescue, remote supply, temporary sites, and mining.",
          bullets: ["Rapid setup", "Flexible dispatch", "Field resilience"],
        },
        {
          title: "Commercial & Industrial Energy Storage",
          summary: "Site-level storage systems for energy cost control, reliability, and green transition.",
          bullets: ["Capacity planning", "Intelligent control", "Lower operating cost"],
        },
      ],
    },
    platform: {
      label: "Platform",
      title: "Digital visibility, warning, control, and O&M in one layer",
      body:
        "MEGA POWER's platform capability connects warning, traceability, monitoring, dispatch, and maintenance workflows so that customers gain more transparency and faster response across the system lifecycle.",
      bullets: [
        "Battery warning and system awareness",
        "Event traceability and incident recording",
        "Energy management and dispatch control",
        "O&M workflow generation and progress visibility",
        "Operational confidence through system-wide data",
      ],
    },
    products: {
      label: "Products",
      title: "Core products organized by scenario and system role",
      body:
        "Product families use real specifications and images extracted from the source PDF, structured for readability rather than a dense datasheet experience.",
    },
    safety: {
      label: "Safety",
      title: "Engineered for reliability, traceability, and operational confidence",
      body:
        "Safety is presented as a system architecture spanning hardware, warning logic, event recording, and maintainability, not as a standalone claim.",
      bullets: [
        "Multi-layer safety logic",
        "Early warning and fault awareness",
        "Digital event traceability",
        "Smarter O&M support",
        "Reliability-first system thinking",
      ],
    },
    services: {
      label: "Services",
      title: "Service capability that supports long-term operation",
      body:
        "MEGA POWER's support direction emphasizes local readiness, long-term maintainability, and cross-cultural delivery capability with clear attention to Japan market expectations.",
      items: [
        {
          title: "Localized service logic",
          body: "Service structure is framed around local response, partner collaboration, and maintainable long-term operation.",
        },
        {
          title: "Cross-cultural communication",
          body: "Support readiness includes communication trust and operational clarity for international project teams.",
        },
        {
          title: "Technical continuity",
          body: "Continuous updates, preventive maintenance logic, and workflow visibility reduce operational uncertainty.",
        },
      ],
    },
    cta: {
      label: "Contact",
      title: "Start a conversation with MEGA POWER",
      body: "For this MVP, the site presents basic company information and a simple inquiry path without a contact form.",
      action: { label: "Contact Information", page: "contact" },
    },
  },
  scenarios: {
    metadata: {
      title: "Scenarios | MEGA POWER",
      description:
        "Energy scenarios page covering grid integration, frequency regulation, weak-grid charging, C&I optimization, emergency power, and Japan-specific deployment needs.",
    },
    hero: {
      title: "Energy scenarios, translated into deployable systems",
      subtitle:
        "MEGA POWER approaches energy projects from the customer's operating environment first: grid conditions, land constraints, reliability requirements, charging demand, and service expectations.",
    },
    intro: {
      label: "Scenario Logic",
      title: "Customer environment first, then system architecture",
      body:
        "This page explains the pressure points behind each use case before presenting MEGA POWER's integrated response in storage, charging, digital monitoring, and service support.",
    },
    details: [
      {
        title: "Grid & Renewable Integration",
        problem: "Renewable projects need more stability, control, and dispatch flexibility.",
        approach: "MEGA POWER combines storage and digital energy logic to support both grid-side and renewable-side applications.",
        benefits: ["Improve renewable integration", "Support peak shifting and balancing", "Increase system flexibility", "Strengthen grid support capability"],
      },
      {
        title: "Frequency Regulation & Grid Stability",
        problem: "Dynamic frequency response requires very fast and precise power adjustment.",
        approach: "MEGA POWER uses storage-based frequency regulation capability to support stable and responsive power-system operation.",
        benefits: ["Fast response", "Precise regulation", "Two-way power adjustment", "Better operational value"],
      },
      {
        title: "EV Charging in Weak-grid or Space-constrained Conditions",
        problem: "Charging demand can outgrow grid capacity and site limitations.",
        approach: "MEGA POWER combines storage, charging, and digital monitoring to make charging deployment more flexible.",
        benefits: ["Reduce grid-upgrade pressure", "Smooth demand peaks", "Support modular deployment", "Improve charging continuity"],
      },
      {
        title: "Commercial & Industrial Cost Optimization",
        problem: "Industrial and commercial users need lower energy costs and more stable operation.",
        approach: "MEGA POWER provides storage-based energy optimization and controllable power support for variable site loads.",
        benefits: ["Reduce peak-demand pressure", "Improve energy flexibility", "Strengthen continuity", "Support low-carbon transition"],
      },
      {
        title: "Off-grid / Temporary / Emergency Power",
        problem: "Remote or urgent sites need energy where permanent grid access is limited or unavailable.",
        approach: "MEGA POWER deploys transportable energy systems with rapid setup and flexible supply capability.",
        benefits: ["Rapid deployment", "Adaptable site use", "Mobile power support", "Resilient emergency response"],
      },
      {
        title: "Japan-specific Deployment Needs",
        problem: "Projects in Japan often require tighter coordination around site limits, reliability, and maintainability.",
        approach: "MEGA POWER frames Japan deployment around compact integration, operational confidence, communication trust, and support readiness.",
        benefits: ["Constrained-site fit", "Reliability-first planning", "Maintainable long-term operation", "Clear communication support"],
      },
    ],
    japanBlock: {
      label: "Japan Priority",
      title: "Energy deployment for Japan's operational realities",
      body:
        "Japan-oriented messaging stays practical: resilience, constrained sites, maintainability, support readiness, and communication trust without unsupported regulatory claims.",
      bullets: [
        "Constrained site conditions",
        "Reliability-first expectations",
        "Resilient backup thinking",
        "Maintainability and safety",
        "Support readiness and communication trust",
      ],
    },
    mapping: {
      label: "How MEGA POWER Responds",
      title: "Scenario demand mapped to integrated solution logic",
      body:
        "Across these environments, MEGA POWER combines core products, digital modules, and service workflows rather than treating equipment, software, and O&M as separate layers.",
      bullets: [
        "Storage architecture matched to grid or site operating logic",
        "Digital warning, monitoring, and event traceability",
        "Charging and dispatch control where capacity is constrained",
        "Service readiness designed for long-term operation",
      ],
    },
    cta: {
      label: "Next Step",
      title: "Move from scenario understanding to solution architecture",
      body: "Explore the five solution systems and the product families that support them.",
      action: { label: "View Solutions", page: "solutions" },
    },
  },
  solutions: {
    metadata: {
      title: "Solutions | MEGA POWER",
      description:
        "Five integrated solution systems spanning utility storage, frequency regulation, PV-ESS-charging, transportable storage, and C&I energy storage.",
    },
    hero: {
      title: "Five solution systems, one integrated logic",
      subtitle:
        "MEGA POWER's solution architecture connects core products, digital management, and operational support across grid, industry, transport, and charging scenarios.",
    },
    intro: {
      label: "Solution Framework",
      title: "System design starts with operating conditions, then scales through modular capabilities",
      body:
        "Each solution family combines conversion, storage, control, warning, monitoring, and service logic into a coherent deployment model.",
    },
    items: [
      {
        title: "Utility-scale Energy Storage",
        summary: "Megawatt-level systems deployed on the grid or generation side to shift energy over time and support renewable integration.",
        bullets: ["Wind and PV stations", "Peak shaving and balancing", "Grid resilience and flexibility"],
      },
      {
        title: "Frequency Regulation Storage",
        summary: "Energy storage systems that adjust active power rapidly to maintain target grid frequency around 50Hz.",
        bullets: ["Millisecond-class response", "Precise instruction following", "Zero-latency power delivery"],
      },
      {
        title: "Integrated PV-ESS-Charging",
        summary: "Smart clean-energy microgrid combining PV, storage, and EV charging for no-grid, weak-grid, and heavy-duty charging scenarios.",
        bullets: ["Virtual expansion", "Stable supply", "Smart O&M"],
      },
      {
        title: "Transportable Energy Storage",
        summary: "Movable platforms such as containers, trailers, and vehicles that deliver energy wherever it is needed.",
        bullets: ["Emergency rescue", "Remote power supply", "Temporary site support"],
      },
      {
        title: "Commercial & Industrial Energy Storage",
        summary: "Flexible, intelligent storage systems for enterprises, buildings, hospitals, schools, and public facilities.",
        bullets: ["Cost control", "Power stability", "Green transition"],
      },
    ],
    cta: {
      label: "Products",
      title: "See the hardware families behind the solution systems",
      body: "The product page organizes real models from the source PDF by deployment role and scenario fit.",
      action: { label: "View Products", page: "products" },
    },
  },
  platform: {
    metadata: {
      title: "Platform | MEGA POWER",
      description:
        "Digital platform page for MEGA POWER covering warning, traceability, monitoring, control, O&M workflow, and data security logic.",
    },
    hero: {
      title: "Digital platform capability across warning, control, and O&M",
      subtitle:
        "The platform layer is presented as a differentiator: it connects data visibility, event traceability, control logic, and field maintenance workflows.",
    },
    intro: {
      label: "6S+EDR Capability",
      title: "Shift from passive remediation toward proactive prevention",
      body:
        "Backed by long-term industry data accumulation and local real-time processing, MEGA POWER adds an enhanced safety layer to conventional storage architecture to address the sector's core pain points.",
    },
    capability: {
      pills: ["AI Powered", "ms-level Response", "Full Lifecycle Logging"],
      base: {
        label: "Safety Base",
        title: "Risk prediction and incident traceability",
        items: [
          {
            name: "EDR",
            title: "Event Data Recorder",
            description:
              "The storage system's black box, capturing full-process records to support objective fault analysis and post-incident accountability.",
          },
          {
            name: "BWS",
            title: "Battery Warning System",
            description:
              "Algorithm-driven warning logic that detects risk in its early stage and shifts the operating model from after-the-fact handling to prevention-first response.",
          },
        ],
      },
      control: {
        label: "Control Core",
        title: "High-speed response and physical isolation",
        items: [
          {
            name: "HCS",
            title: "High-speed Control System",
            description:
              "Built on local real-time processing to deliver millisecond-level response when abnormal fluctuation requires immediate protective action.",
          },
          {
            name: "PCS",
            title: "Power Conversion System",
            description:
              "Multi-branch physical isolation design that limits fault propagation range and helps prevent chain reactions.",
          },
        ],
      },
      brain: {
        label: "System Brain",
        title: "Monitoring, optimization, and lifecycle management",
        items: [
          {
            name: "BMS",
            title: "Battery Management System",
            description:
              "Real-time monitoring of cell voltage, temperature, and PACK-level fire linkage so hardware operates within a defined safety window.",
          },
          {
            name: "EMS",
            title: "Energy Management System",
            description:
              "The station-side brain that optimizes charge-discharge strategy and balances operating efficiency with system lifetime.",
          },
          {
            name: "OMS",
            title: "Operations & Maintenance System",
            description:
              "Digital monitoring and process-driven maintenance that improve plant transparency and support full-lifecycle traceability.",
          },
        ],
      },
    },
    modules: [
      { name: "BWS", title: "Battery Warning System", description: "Data-driven warning logic for early anomaly detection and battery-cluster risk awareness." },
      { name: "EDR", title: "Event Data Recorder", description: "Multi-source event recording for credible accident tracing and failure-cause analysis." },
      { name: "EMS", title: "Energy Management System", description: "Dynamic control layer for dispatch, optimization, and system-level partition safety management." },
      { name: "OMS", title: "Operations & Maintenance System", description: "Real-time monitoring, work-order generation, and visible service progress across the operating lifecycle." },
      { name: "HCS", title: "High-speed Control System", description: "Low-latency control based on real-time Ethernet synchronization for better regulation performance." },
      { name: "BMS", title: "Battery Management System", description: "Connector temperature detection and PACK-level fire prevention linkage inside the storage system." },
      { name: "PCS", title: "Power Conversion System", description: "Series multi-branch conversion design supporting electrical and safety isolation." },
    ],
    workflow: {
      label: "Operational Workflow",
      title: "Monitoring and O&M logic designed as a continuous loop",
      body:
        "The platform ties together early warning, event tracing, dispatch strategy, work-order generation, and maintenance execution so that operating teams can act faster and with more context.",
      bullets: ["Precise early warning", "Visualized analysis", "Intelligent strategy dispatch", "Automated work-order generation", "Lifecycle monitoring for distributed and utility-scale systems"],
    },
    security: {
      label: "Data Security",
      title: "On-premises deployment and role-based security logic",
      body:
        "The source material presents deployment options by project scale alongside data collection, transmission, storage, authentication, and audit safeguards.",
      bullets: ["TLS 1.3 and AES-256 encryption", "Role-based access control", "Multi-factor authentication", "Immutable operation logs and audits"],
    },
    cta: {
      label: "Trust Layer",
      title: "See how platform capability connects directly to safety and reliability",
      body: "Warning, traceability, and workflow design are central to MEGA POWER's trust proposition.",
      action: { label: "Safety & Reliability", page: "safety" },
    },
  },
  products: {
    metadata: {
      title: "Products | MEGA POWER",
      description:
        "Real MEGA POWER product families with source-PDF specifications and extracted product images, organized by grid, PV-ESS-charging, transportable, and C&I use cases.",
    },
    hero: {
      title: "Core products supporting each solution family",
      subtitle:
        "Products are organized by deployment role and scenario fit, using real specifications and product images from the source PDF.",
    },
    intro: {
      label: "Product Families",
      title: "Readable product architecture for future expansion",
      body:
        "This MVP focuses on family-level understanding, key specifications, and scenario relevance. It intentionally avoids PDF download flows and dense catalog behavior.",
    },
    related: {
      label: "Related Solutions",
      title: "Products are shown as components of a wider solution system",
      body:
        "These families support the utility-scale, frequency regulation, PV-ESS-charging, transportable, and distributed storage architectures described throughout the site.",
      bullets: ["Grid and renewable integration", "Fast frequency response", "Weak-grid and high-power charging", "Transportable and emergency deployment", "Commercial and industrial optimization"],
    },
    cta: {
      label: "Platform + Service",
      title: "Hardware is paired with digital control and service readiness",
      body: "MEGA POWER's product story is intentionally tied back to platform, safety, and long-term support.",
      action: { label: "View Services", page: "services" },
    },
  },
  safety: {
    metadata: {
      title: "Safety & Reliability | MEGA POWER",
      description:
        "Safety architecture page covering multi-layer protection, warning and response, event traceability, O&M efficiency, and Japan-facing trust messaging.",
    },
    hero: {
      title: "Safety, traceability, and confidence built into the system",
      subtitle:
        "MEGA POWER is presented as a company that helps customers operate with more clarity and less uncertainty through integrated safety and operational logic.",
    },
    intro: {
      label: "Safety Architecture",
      title: "A system-level view of protection, response, and maintainability",
      body:
        "The safety narrative spans battery warning, partitioned control, event recording, fire protection linkage, and maintenance visibility across the operating lifecycle.",
    },
    items: [
      { title: "Multi-layer protection", body: "Protection is described across cell, PACK, system, and operational layers rather than a single equipment feature." },
      { title: "Warning and response", body: "Battery warning, incident recording, and control logic improve fault awareness and response speed." },
      { title: "Event traceability", body: "EDR positions traceability as a source of operational confidence and post-event clarity." },
      { title: "O&M efficiency", body: "Monitoring and work-order logic help maintenance teams move from passive troubleshooting to structured action." },
    ],
    japan: {
      label: "Japan-facing Trust",
      title: "Reliability messaging aligned with Japan market expectations",
      body:
        "For Japan, safety is framed around operational confidence, maintainability, disciplined communication, and resilient long-term use under constrained site conditions.",
      bullets: ["Operational confidence in compact deployments", "Maintainability over the full lifecycle", "Clear warning and response visibility", "Trust-building through system traceability"],
    },
    cta: {
      label: "Service Readiness",
      title: "See how safety and maintainability connect to service strategy",
      body: "Platform capability only becomes valuable when it is backed by realistic O&M execution and local support logic.",
      action: { label: "View Services", page: "services" },
    },
  },
  services: {
    metadata: {
      title: "Services | MEGA POWER",
      description:
        "Service page for MEGA POWER covering O&M strategy, localized service logic, partner collaboration, technical continuity, and Japan support readiness.",
    },
    hero: {
      title: "Service and O&M designed for long-term partnership",
      subtitle:
        "Service is part of the product experience. The site positions O&M, communication, and support readiness as integral to long-term system value.",
    },
    intro: {
      label: "Service Strategy",
      title: "Localized support logic with long-term operational discipline",
      body:
        "The service narrative is built from the source PDF: localized teams, cross-cultural communication, continuous technical updates, and partner-network expansion.",
    },
    strategy: [
      { title: "Localized service team model", body: "Support is framed around local market understanding and tailored service delivery instead of a purely remote support posture." },
      { title: "Cross-cultural communication training", body: "Communication readiness matters for international collaboration, alignment, and long-term project trust." },
      { title: "Continuous technical support and updates", body: "Technical continuity is presented as an ongoing discipline rather than a post-delivery add-on." },
      { title: "Partner network expansion", body: "Local partnerships help extend response capability, market understanding, and service coverage." },
    ],
    mechanism: [
      { title: "Emergency fault resolution", body: "The source material highlights a 7 x 24 emergency hotline model for urgent after-sales support." },
      { title: "Preventive maintenance", body: "Periodic inspection and preventive maintenance are used to reduce system failure risk and support continuity." },
      { title: "Customer training and support", body: "Online and on-site training help operators use the system correctly and lower avoidable service burden." },
      { title: "Replacement parts readiness", body: "A replacement-parts network is described as a way to reduce repair time for critical components." },
    ],
    japan: {
      label: "Japan Support Readiness",
      title: "Service messaging for Japan emphasizes trust, discipline, and maintainability",
      body:
        "Japan-oriented service content focuses on response readiness, communication quality, stable long-term operation, and support logic that respects constrained deployment realities.",
      bullets: ["Maintainability for long operating horizons", "Structured communication with project stakeholders", "Support readiness under constrained site conditions", "Partner-friendly collaboration logic"],
    },
    cta: {
      label: "Company",
      title: "See how service capability fits into MEGA POWER's broader company positioning",
      body: "The about page connects mission, integrated capability, and Japan positioning into one narrative.",
      action: { label: "About MEGA POWER", page: "about" },
    },
  },
  about: {
    metadata: {
      title: "About | MEGA POWER",
      description:
        "About MEGA POWER page covering company introduction, integrated digital green energy positioning, mission, and Japan-Tokyo market orientation.",
    },
    hero: {
      title: "About MEGA POWER",
      subtitle:
        "Integrated digital green energy solutions for a changing energy landscape, combining power, storage, charging, digital control, and service capability.",
    },
    intro: {
      label: "Company Introduction",
      title: "Positioned as an integrated digital green energy solutions provider",
      body:
        "MEGA POWER is not presented as a hardware vendor alone. The company narrative brings together integrated energy architecture, digital operating capability, and service readiness.",
    },
    pillars: [
      { title: "Integrated solution logic", body: "MEGA POWER connects photovoltaic generation, storage, charging, and digital management into one coherent solution framework." },
      { title: "Scenario-based market approach", body: "The company story is organized around grid, industry, transport, charging, and emergency use cases rather than isolated equipment categories." },
      { title: "Platform and safety differentiation", body: "Digital warning, traceability, monitoring, and O&M workflow logic are treated as strategic differentiators." },
      { title: "Operational support mindset", body: "Long-term maintainability and localized delivery logic are built into the brand story from the start." },
    ],
    japan: {
      label: "Japan Positioning",
      title: "Tokyo-based market orientation as part of the company narrative",
      body:
        "The source material places MEGA POWER in Tokyo, Japan. On this website, Japan is reflected through reliability messaging, constrained-site awareness, and support-readiness language rather than unsupported legal or operational claims.",
    },
    cta: {
      label: "Contact",
      title: "Open a business conversation",
      body: "The contact page keeps the inquiry path simple and professional for this MVP.",
      action: { label: "Contact MEGA POWER", page: "contact" },
    },
  },
  contact: {
    metadata: {
      title: "Contact | MEGA POWER",
      description: "Basic MEGA POWER contact page with company information and a simple inquiry note for this MVP.",
    },
    hero: {
      title: "Contact MEGA POWER",
      subtitle:
        "Basic company information for project and business inquiries. This MVP intentionally avoids a contact form and does not invent unsupported operational details.",
    },
    intro: {
      label: "Inquiry Information",
      title: "Simple and professional inquiry path",
      body:
        "The current site presents company identity and location context from the source material while keeping the contact experience minimal.",
    },
    items: [
      { label: "Company", value: "MEGA POWER CO., LTD" },
      { label: "Location", value: "Tokyo, Japan" },
      { label: "Inquiry Type", value: "Project and business discussions" },
    ],
    note:
      "Direct contact details are not expanded beyond the provided source materials in this MVP. A contact form and download workflow are intentionally out of scope for the current phase.",
  },
};
