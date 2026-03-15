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
    address: "TWG Kojimachi 5F, 3-10-1 Kojimachi, Chiyoda-ku, Tokyo 102-0083, Japan",
    note:
    "MEGA POWER combines system architecture, digital control, and long-term service support for modern energy deployment.",
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
      secondaryCta: { label: "View Platform", page: "platform" },
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
      title: "Find the right solution path for your operating scenario",
      body:
        "Not every project faces the same constraint. Some need stronger renewable integration, some struggle with grid limits, some are under pressure to reduce industrial energy costs, and others need temporary or emergency power resilience. On the homepage, each scenario is paired with a solution direction so visitors can move from problem recognition to system thinking more naturally.",
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
        "Browse the main product families by deployment role, with clear model references, key specifications, and scenario fit.",
    },
    safety: {
      label: "Safety",
      title: "Engineered for reliability, traceability, and operational confidence",
      body:
        "MEGA POWER builds safety into hardware, warning logic, event recording, and maintainability as one operating architecture rather than treating safety as an isolated claim.",
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
      title: "Service readiness built for disciplined long-term operation",
      body:
        "MEGA POWER frames service as an operating capability: local response structure, preventive maintenance, training, spare-parts readiness, and partner collaboration are organized to support long-term project continuity.",
      items: [
        {
          title: "Localized service structure",
          body: "Service delivery is organized around local market understanding, tailored execution, and partner coordination instead of a purely remote support posture.",
        },
        {
          title: "Emergency response path",
          body: "A 7×24 emergency-response path helps operating sites handle urgent incidents faster and reduce interruption time.",
        },
        {
          title: "Preventive maintenance discipline",
          body: "Periodic inspection, structured maintenance planning, and workflow visibility are used to reduce avoidable failure risk over the long run.",
        },
        {
          title: "Training and spare-parts readiness",
          body: "Operator training, technical updates, and spare-parts support help customers keep systems stable while lowering avoidable service burden.",
        },
      ],
    },
    cta: {
      label: "Scenarios",
      title: "The scenarios page is the best place to continue from here",
      body: "If you want to move from a high-level company overview into concrete project fit, the scenarios page shows how operating environments align with solution logic, product families, platform support, and service readiness.",
      action: { label: "Explore Scenarios", page: "scenarios" },
    },
  },
  scenarios: {
    metadata: {
      title: "Scenarios | MEGA POWER",
      description:
        "Energy scenarios page covering grid integration, frequency regulation, weak-grid charging, C&I optimization, emergency power, and Japan-specific deployment needs.",
    },
    hero: {
      title: "Find the right MEGA POWER solution by operating scenario",
      subtitle:
        "Start from the customer's real operating environment, then move directly into the integrated solution stack, product families, digital capability, and support logic that fit best.",
      highlight: "operating scenario",
    },
    intro: {
      label: "Scenario Logic",
      title: "Move from operating challenge to the right solution path",
      body:
        "Each scenario below pairs the operating challenge with a recommended solution stack, product families, platform capability, safety logic, and service readiness.",
    },
    selectorLabel: "Choose the operating scenario you are facing",
    panels: [
      {
        key: "grid",
        icon: "grid",
        buttonTitle: "Grid & Renewable Integration",
        buttonSubtitle: "Wind Farms · PV Stations",
        problemLabel: "Customer Challenge",
        problemTitle:
          "Renewable output is unstable, curtailment risk rises, and interconnection compliance gets harder",
        problemBody:
          "Wind and solar output are naturally intermittent. Generation peaks often miss demand peaks, while grid operators expect storage support to improve stability and dispatch flexibility. Without the right architecture, renewable projects face lower absorption efficiency and higher curtailment pressure.",
        solutionLabel: "MEGA POWER Response",
        solutionTitle: "Grid-side energy storage solution",
        solutionBody:
          "MEGA POWER deploys megawatt-class storage on the grid side or generation side, shifting energy over time while coordinating with digital dispatch logic to smooth renewable output, support grid balancing, and improve operating flexibility.",
        solutionValues: [
          "Higher renewable absorption",
          "Peak shaving and shifting",
          "Grid flexibility",
          "Black start readiness",
        ],
        metrics: [
          { value: "<50ms", label: "Active / reactive power response" },
          { value: "2750kW", label: "Maximum single-container output" },
          { value: "5MWh", label: "Single battery cabin capacity" },
          { value: "28 Days", label: "BWS advance warning window" },
        ],
        architecture: {
          kind: "flow",
          label: "System Architecture Snapshot",
          rows: [
            {
              arrow: "→",
              nodes: [
                { title: "PV Station", subtitle: "Solar generation" },
                { title: "PV Step-up Container", subtitle: "Voltage elevation" },
                {
                  title: "PCS Step-up Cabin",
                  subtitle: "Conversion + step-up",
                  tone: "highlight",
                },
                { title: "Grid", subtitle: "Utility interconnection" },
                {
                  title: "MCS / EMS",
                  subtitle: "Digital management layer",
                  tone: "platform",
                },
              ],
            },
            {
              arrow: "↗",
              nodes: [
                { title: "Wind Farm", subtitle: "Wind generation" },
                { title: "Wind Step-up", subtitle: "Collection side" },
              ],
            },
            {
              arrow: "↗",
              nodes: [
                { title: "Battery Cabin", subtitle: "5015kWh LFP" },
                {
                  title: "PCS Step-up Cabin",
                  subtitle: "Conversion + grid support",
                  tone: "highlight",
                },
              ],
            },
          ],
        },
        productsLabel: "Mapped Product Families",
        products: [
          {
            title: "PCS Step-up Container (Cluster)",
            model: "iBCS100-2500B/20-AC",
            highlights: ["2500kW rated", "12 DC channels", "20kV", "IP54 / PCS IP66"],
          },
          {
            title: "PCS Step-up Container (Integrated)",
            model: "iBCS100-2500A/20-AC",
            highlights: ["2750kW max", "20/35kV", "≤18T", "Integrated deployment"],
          },
          {
            title: "DC Battery Storage Container",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh LFP", "Liquid cooling", "IP54", "Utility-scale ready"],
          },
        ],
        platform: {
          label: "Platform Support",
          title: "Digital visibility from dispatch to traceability",
          items: [
            "HCS for millisecond-class control response",
            "BWS for up to 28-day battery fault warning",
            "EMS for dispatch coordination and optimization",
            "EDR for full-process event traceability",
          ],
        },
        service: {
          label: "Service Readiness",
          title: "Execution support for utility-scale deployment",
          items: [
            "Site-level engineering coordination for grid-side projects",
            "Preventive maintenance plans for long operating cycles",
            "Spare-parts and remote support logic for uptime-critical sites",
          ],
        },
      },
      {
        key: "frequency",
        icon: "frequency",
        buttonTitle: "Frequency Regulation",
        buttonSubtitle: "Fast Grid Response · Microgrids",
        problemLabel: "Customer Challenge",
        problemTitle:
          "Frequency deviations require faster and more stable response than conventional regulation can deliver",
        problemBody:
          "When grid frequency moves around its target, thermal or hydropower response is often too slow or too coarse. High-response power systems need precise, repeatable adjustment that can follow dispatch signals continuously and with very low delay.",
        solutionLabel: "MEGA POWER Response",
        solutionTitle: "Frequency regulation storage solution",
        solutionBody:
          "MEGA POWER combines storage power conversion, high-speed control, and event traceability to create a frequency-regulation stack that responds rapidly, follows dispatch precisely, and supports ancillary-service value.",
        solutionValues: [
          "Millisecond response",
          "Bidirectional regulation",
          "Ancillary-service value",
          "Stable 50Hz support",
        ],
        metrics: [
          { value: "<50ms", label: "Dispatch response latency" },
          { value: "2500kW", label: "Bidirectional regulation power" },
          { value: "50Hz", label: "Grid target tracking" },
          { value: "EDR", label: "Full event traceability" },
        ],
        architecture: {
          kind: "flow",
          label: "System Architecture Snapshot",
          rows: [
            {
              align: "center",
              arrow: "⇌",
              nodes: [
                { title: "Grid", subtitle: "Frequency target" },
                { title: "Step-up Container", subtitle: "Voltage interface" },
                {
                  title: "PCS-ES Storage",
                  subtitle: "Bidirectional power response",
                  tone: "highlight",
                },
              ],
            },
            {
              align: "end",
              arrow: "⇌",
              nodes: [
                {
                  title: "Dispatch Center",
                  subtitle: "Instruction source",
                  tone: "platform",
                },
                {
                  title: "EMS",
                  subtitle: "Energy management system",
                  tone: "platform",
                },
              ],
            },
          ],
          chips: [
            { name: "HCS", detail: "Millisecond-class frequency regulation" },
            { name: "BWS", detail: "Up to 28-day early warning" },
            { name: "EDR", detail: "Event data traceability" },
            { name: "OMS", detail: "Work orders and progress tracking" },
          ],
        },
        productsLabel: "Mapped Product Families",
        products: [
          {
            title: "PCS Step-up Container (Cluster)",
            model: "iBCS100-2500B/20-AC",
            highlights: ["2500kW rated", "Fast frequency support", "12 DC channels"],
          },
          {
            title: "PCS Step-up Container (Integrated)",
            model: "iBCS100-2500A/20-AC",
            highlights: ["2750kW max", "20/35kV", "Integrated microgrid use"],
          },
          {
            title: "DC Battery Storage Container",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh LFP", "Liquid cooling", "High-cycle operation"],
          },
        ],
        platform: {
          label: "Platform Support",
          title: "Closed-loop control for high-response regulation",
          items: [
            "HCS for millisecond-class synchronized control",
            "EDR for frequency-event traceability and post-analysis",
            "OMS for structured alarm response and work orders",
            "BMS / BWS for battery-state awareness under rapid cycling",
          ],
        },
        service: {
          label: "Service Readiness",
          title: "Keep regulation performance and availability stable",
          items: [
            "7×24 emergency response path for critical dispatch systems",
            "Preventive maintenance that reduces revenue-impacting downtime",
            "Fast spare-parts readiness for key conversion components",
          ],
        },
      },
      {
        key: "ev",
        icon: "ev",
        buttonTitle: "EV Charging",
        buttonSubtitle: "Weak Grid · High Power",
        problemLabel: "Customer Challenge",
        problemTitle:
          "High-power charging is needed, but the site has weak-grid access, limited capacity, or no grid at all",
        problemBody:
          "Bus depots, heavy-truck corridors, logistics hubs, and passenger-car fast charging sites often face distribution limits. Upgrading the grid can be slow and expensive, while some sites need a charging deployment path immediately.",
        solutionLabel: "MEGA POWER Response",
        solutionTitle: "Integrated PV-ESS-charging solution",
        solutionBody:
          "MEGA POWER combines photovoltaic generation, storage, and charging through AC/DC coupled system design, making it possible to build high-power charging stations under weak-grid, no-grid, or space-constrained conditions with much more flexibility.",
        solutionValues: [
          "Virtual capacity expansion",
          "On-grid / off-grid switching",
          "Modular deployment",
          "6S+EDR smart O&M",
        ],
        metrics: [
          { value: "200kW", label: "Passenger-car HPC node" },
          { value: "240kW×N", label: "Bus depot multi-gun charging" },
          { value: "480kW×N", label: "Heavy-truck supercharging" },
          { value: "1440kW", label: "Power cabinet rated output" },
        ],
        architecture: {
          kind: "tiers",
          label: "Three-tier Charging Station Architecture",
          tiers: [
            {
              icon: "🚗",
              title: "HPC Power Node",
              power: "120kW × 2 · Max 200kW",
              description:
                "Input power below 50kW, suitable for passenger-car fast charging at community and retail sites.",
              items: ["Integrated storage charger × N"],
            },
            {
              icon: "🚌",
              title: "E-Bus Depot",
              power: "240kW × N",
              description:
                "A modular combination of battery cabinets, power cabinets, and charging terminals for depot charging.",
              items: ["Battery storage cabinet × N", "Power cabinet × N", "Charging terminal × N"],
            },
            {
              icon: "🚛",
              title: "Megawatt Charging Corridor / XFC",
              power: "480kW × N",
              description:
                "Designed for heavy-truck supercharging and ultra-fast charging hubs with scalable output blocks.",
              items: ["Battery storage cabinet × N", "Power cabinet × N", "High-power terminal × N"],
            },
          ],
          chips: [
            { name: "EMS", detail: "Cloud monitoring platform" },
            { name: "OMS", detail: "Automated work-order flow" },
            { name: "BTS", detail: "EV battery health analysis", tone: "energy" },
          ],
        },
        productsLabel: "Mapped Product Families",
        products: [
          {
            title: "PV-Storage Hybrid Unit",
            model: "iPES100-100-215-AC-100",
            highlights: ["100kW AC", "215.04kWh", "2×50kW PV input", "IP55"],
          },
          {
            title: "Energy Storage Integrated Charger",
            model: "iEFC100-80/120-AL-C",
            highlights: ["120kW rated", "186 / 209kWh", "DC200-1000V", "IP55"],
          },
          {
            title: "Power Cabinet & Charging Terminal",
            model: "iEFC Series",
            highlights: ["1440kW cabinet", "12 outputs", "2×600A + 10×250A"],
          },
        ],
        platform: {
          label: "Platform Support",
          title: "Charging operations, monitoring, and strategy in one layer",
          items: [
            "EMS for charging and storage strategy dispatch",
            "OMS for station monitoring and work-order execution",
            "BWS for battery abnormality warning inside storage assets",
            "EDR for charging-site event recording and analysis",
          ],
        },
        service: {
          label: "Service Readiness",
          title: "Keep charging stations running with less interruption",
          items: [
            "Customer training to reduce operational error on site",
            "Periodic inspection to lower charging-equipment failure risk",
            "Partner collaboration to extend local response coverage",
          ],
        },
      },
      {
        key: "mobile",
        icon: "mobile",
        buttonTitle: "Mobile & Emergency Power",
        buttonSubtitle: "Off-grid · Temporary Sites",
        problemLabel: "Customer Challenge",
        problemTitle:
          "Remote or emergency sites need power fast, without waiting for permanent infrastructure",
        problemBody:
          "Disaster recovery, temporary construction, remote mining, and field operations cannot always wait for fixed electrical infrastructure. What matters is how fast a power system can move, deploy, and recover service continuity on site.",
        solutionLabel: "MEGA POWER Response",
        solutionTitle: "Transportable storage solution",
        solutionBody:
          "MEGA POWER uses containerized, trailer-based, and vehicle-based energy systems to create rapid-deployment power capability, with anti-vibration design, liquid cooling, and modular field dispatch suitable for mobile use cases.",
        solutionValues: [
          "Rapid deployment",
          "Vehicle-grade anti-vibration",
          "Battery turnover flexibility",
          "Independent off-grid supply",
        ],
        metrics: [
          { value: "10,000+", label: "Quick-connect interface cycles" },
          { value: "2500kW", label: "Off-grid rated discharge output" },
          { value: "6000", label: "Battery cycles at 95% DOD" },
          { value: "A1", label: "Flame-retardant material class" },
        ],
        architecture: {
          kind: "turnover",
          label: "Charge / Discharge Turnover Architecture",
          topLabel: "Charging Side (Grid End)",
          topNodes: [
            { title: "Grid", subtitle: "Utility source" },
            {
              title: "Grid-connected Charging Cabin",
              subtitle: "Charging-side conversion",
              tone: "highlight",
            },
            { title: "Charging Battery Cabin", subtitle: "Charging-oriented" },
          ],
          middleNodes: [
            {
              title: "Battery Turnover",
              subtitle: "Swap and circulation",
              tone: "highlight",
            },
            { title: "Backup Battery Cabin", subtitle: "Standby pack" },
          ],
          bottomLabel: "Discharging Side (Load End)",
          bottomNodes: [
            { title: "Discharging Battery Cabin", subtitle: "Discharging-oriented" },
            {
              title: "Off-grid Discharging Cabin",
              subtitle: "Independent supply",
              tone: "highlight",
            },
            { title: "Load", subtitle: "Site-side consumption" },
          ],
          chips: [
            { name: "SCS", detail: "Sudden-load stability control" },
            { name: "DMS", detail: "Charge / discharge dispatch management", tone: "energy" },
            { name: "BWS", detail: "Up to 28-day warning" },
            { name: "EDR", detail: "Incident traceability" },
          ],
        },
        productsLabel: "Mapped Product Families",
        products: [
          {
            title: "Grid-connected Charging Container",
            model: "iBCS100-1725A/10-AC",
            highlights: ["1725kW", "10kV", "≤13T", "Rapid deployment"],
          },
          {
            title: "Off-grid Discharging Container",
            model: "iBCS100-2x2500A/10-AC",
            highlights: ["2510kW", "2500kW off-grid", "10kV", "IP54 / PCS IP66"],
          },
          {
            title: "Battery Storage Transport Vehicle",
            model: "iESS100-3343B2-LC-M",
            highlights: ["6000 cycles", "Anti-vibration", "Liquid cooling", "IP54 / C4"],
          },
        ],
        platform: {
          label: "Platform Support",
          title: "Field dispatch intelligence for unstable operating conditions",
          items: [
            "SCS logic for sudden-load stability control",
            "DMS-style dispatch control for mobile charge / discharge scheduling",
            "BWS / EDR for warning and incident traceability in the field",
            "OMS workflow visibility for remote service coordination",
          ],
        },
        service: {
          label: "Service Readiness",
          title: "Fast support for urgent and temporary deployments",
          items: [
            "7×24 emergency hotline for high-priority incidents",
            "Spare-parts network to shorten recovery time on critical components",
            "Field training to reduce avoidable setup and operation errors",
          ],
        },
      },
      {
        key: "commercial",
        icon: "commercial",
        buttonTitle: "Commercial & Industrial",
        buttonSubtitle: "Factories · Campuses",
        problemLabel: "Customer Challenge",
        problemTitle:
          "Electricity costs keep rising, while power interruptions directly impact operating continuity",
        problemBody:
          "Factories, buildings, hospitals, schools, and commercial parks are under pressure to reduce electricity cost, lower peak-demand exposure, and strengthen resilience against interruption at the same time.",
        solutionLabel: "MEGA POWER Response",
        solutionTitle: "Commercial & industrial storage solution",
        solutionBody:
          "MEGA POWER provides flexible storage configurations from cabinet-level deployment to multi-megawatt-hour systems, helping customers optimize load profiles, improve backup capability, and progress toward lower-carbon operation with controllable system logic.",
        solutionValues: [
          "Peak shaving and cost control",
          "Backup power resilience",
          "Flexible capacity scaling",
          "Low-carbon transition",
        ],
        metrics: [
          { value: "≤2MWh", label: "Small users with 261kWh cabinets × N" },
          { value: "2-10MWh", label: "Medium users with 418kWh cabinets × N" },
          { value: "≥5MWh", label: "Large users with utility-scale cabins × N" },
          { value: "≥88%", label: "System conversion efficiency" },
        ],
        architecture: {
          kind: "scale",
          label: "Configuration by Project Scale",
          columns: [
            {
              title: "≤ 2MWh",
              subtitle: "Small-scale users",
              input: "0.4kV input",
              items: ["261kWh storage cabinet × N"],
            },
            {
              title: "2-10MWh",
              subtitle: "Medium-scale users",
              input: "10kV input",
              items: ["Step-up transformer", "418kWh storage cabinet × N"],
            },
            {
              title: "≥ 5MWh",
              subtitle: "Large-scale users",
              input: "≥10kV input",
              items: ["PCS step-up cabin", "5MWh container × N"],
            },
          ],
          chips: [
            { name: "EMS", detail: "Cloud monitoring platform" },
            { name: "ECS", detail: "Intelligent capacity sizing" },
            { name: "EDR", detail: "Event traceability" },
            { name: "OMS", detail: "Work-order management" },
          ],
        },
        productsLabel: "Mapped Product Families",
        products: [
          {
            title: "Distributed Storage Cabinet (125kW)",
            model: "iDPS100-125/261 LC",
            highlights: ["125kW", "261kWh", "AC380V", "IP55"],
          },
          {
            title: "Distributed Storage Cabinet (200kW)",
            model: "iDPS200-200/418 LC",
            highlights: ["200kW", "418kWh", "AC690V", "IP55 / C4"],
          },
          {
            title: "DC Battery Storage Container",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh", "Liquid cooling", "Large-site scaling"],
          },
        ],
        platform: {
          label: "Platform Support",
          title: "Capacity planning, optimization, and visible operation",
          items: [
            "ECS for more accurate capacity planning and operating decisions",
            "EMS for charge / discharge strategy and site-level optimization",
            "OMS for monitoring, maintenance workflow, and task visibility",
            "OTA support for structured remote updates",
          ],
        },
        service: {
          label: "Service Readiness",
          title: "Custom delivery and long-term site support",
          items: [
            "Site survey and capacity assessment before deployment",
            "Grid-connection coordination and project support logic",
            "Preventive maintenance plans for long operating cycles",
          ],
        },
      },
      {
        key: "japan",
        icon: "japan",
        buttonTitle: "Japan Market",
        buttonSubtitle: "Compact Sites · Reliability",
        problemLabel: "Market Requirement",
        problemTitle:
          "Projects in Japan demand tighter coordination around compact sites, reliability, maintainability, and communication trust",
        problemBody:
          "Japan projects often combine limited installation space, high reliability expectations, demanding operating discipline, and strong sensitivity around service quality and long-term maintainability. The deployment logic must respect those operating realities from the start.",
        solutionLabel: "MEGA POWER Response",
        solutionTitle: "Japan-oriented deployment approach",
        solutionBody:
          "MEGA POWER frames Japan deployment through compact integration, reliability-first system design, transparent digital monitoring, and service communication that supports long-term operating confidence rather than short-term hardware delivery only.",
        solutionValues: [
          "Compact integrated design",
          "Reliability-first planning",
          "Maintainable long-term operation",
          "Localized support readiness",
        ],
        metrics: [
          { value: "IP55", label: "Outdoor protection for climate exposure" },
          { value: "C4", label: "Anti-corrosion class for harsh environments" },
          { value: "6S+EDR", label: "Patented safety architecture" },
          { value: "Tokyo", label: "Local business presence" },
        ],
        productsLabel: "Mapped Product Families",
        products: [
          {
            title: "Distributed Storage Cabinet (125kW)",
            model: "iDPS100-125/261 LC",
            highlights: ["Compact cabinet", "261kWh", "IP55", "Site-friendly format"],
          },
          {
            title: "Energy Storage Integrated Charger",
            model: "iEFC100-80/120-AL-C",
            highlights: ["Integrated charging", "209kWh", "Weak-grid fit"],
          },
          {
            title: "PCS Step-up Container (Integrated)",
            model: "iBCS100-2500A/20-AC",
            highlights: ["Integrated deployment", "20/35kV", "Utility-ready"],
          },
        ],
        platform: {
          label: "Platform Support",
          title: "Operational visibility and controllable risk for compact deployments",
          items: [
            "EMS for localized monitoring and operating transparency",
            "BWS for earlier abnormality detection in battery assets",
            "EDR for objective incident traceability and review",
            "OMS for maintenance workflow visibility across long-term operation",
          ],
        },
        service: {
          label: "Service Readiness",
          title: "Localized execution and communication trust",
          items: [
            "Tokyo-based business presence for closer coordination",
            "Structured cross-cultural communication in project delivery",
            "Continuous technical support instead of one-time handoff",
            "Partner collaboration for local execution coverage",
          ],
        },
      },
    ],
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
      label: "Platform",
      title: "The platform page shows how these scenario-based systems are monitored, controlled, and supported in operation",
      body: "Once the operating scenario is clear, the next useful step is to understand the digital layer behind dispatch, warning, traceability, and O&M workflow.",
      action: { label: "Explore Platform Capability", page: "platform" },
    },
  },
  solutions: {
    metadata: {
      title: "Solutions | MEGA POWER",
      description:
        "Five integrated solution systems spanning utility storage, frequency regulation, PV-ESS-charging, transportable storage, and C&I energy storage.",
    },
    hero: {
      title: "Solution architecture overview for MEGA POWER systems",
      subtitle:
        "This page is a short overview of the main solution systems. The full scenario-to-solution matching logic lives on the Scenarios page.",
      highlight: "MEGA POWER systems",
    },
    intro: {
      label: "Solution Framework",
      title: "A concise overview of the main solution stacks",
      body:
        "Use this page to understand the overall solution portfolio, then go back to Scenarios when you need the full mapping from customer environment to deployment logic.",
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
      label: "Scenarios",
      title: "Go back to the complete scenario-to-solution decision page",
      body: "The Scenarios page is now the main place to match operating environments with solution logic, product families, platform support, and service readiness.",
      action: { label: "View Scenarios", page: "scenarios" },
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
        "MEGA POWER connects data visibility, event traceability, control logic, and field maintenance workflows in one platform layer.",
      highlight: "platform capability",
    },
    intro: {
      label: "6S+EDR Capability",
      title: "Shift from passive remediation toward proactive prevention",
      body:
        "Backed by long-term industry data accumulation and local real-time processing, MEGA POWER adds an enhanced safety layer to conventional storage architecture to address the sector's core pain points.",
    },
    capability: {
      pills: ["AI Powered", "ms-level Response", "Full Lifecycle Logging"],
      explainer: {
        label: "What 6S + EDR Means",
        body:
          "Here, 6S refers to six core system layers inside the MEGA POWER architecture: BWS, HCS, PCS, BMS, EMS, and OMS. EDR adds event recording and fault traceability, completing the 6S+EDR safety architecture.",
        systems: [
          { name: "BWS", title: "Battery Warning System" },
          { name: "HCS", title: "High-speed Control System" },
          { name: "PCS", title: "Power Conversion System" },
          { name: "BMS", title: "Battery Management System" },
          { name: "EMS", title: "Energy Management System" },
          { name: "OMS", title: "Operations & Maintenance System" },
        ],
        recorder: { name: "EDR", title: "Event Data Recorder" },
      },
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
    management: {
      label: "Digital Energy Management Platform",
      title: "Comprehensive data storage, visualized analysis, and safer O&M coordination",
      body:
        "MEGA POWER brings event recording, strategy dispatch, monitoring, warning, and O&M execution into one digital operating layer for energy storage systems of different scales.",
      systems: ["EDR", "ECS", "EMS", "OMS", "BWS"],
      highlights: [
        {
          title: "Comprehensive Data Storage",
          body: "Record station data, operating events, and lifecycle status in one platform layer instead of scattering information across separate tools.",
        },
        {
          title: "Visualized Analysis",
          body: "Turn operating data into dashboards, alarms, and trends that make performance, exceptions, and safety status easier to interpret.",
        },
        {
          title: "Intelligent Strategy Dispatch",
          body: "Use EMS logic to coordinate charge-discharge strategy, system partitioning, and control execution with better operating context.",
        },
        {
          title: "Precise Early Warning",
          body: "Combine BWS and recorded operating data so teams can identify abnormal trends earlier and respond before issues escalate.",
        },
        {
          title: "Safety Analysis",
          body: "Support fault review and safety analysis through event traceability, multi-source records, and consistent system-level visibility.",
        },
        {
          title: "Efficiency in O&M and Monitoring",
          body: "Connect monitoring, work-order generation, and progress tracking so plant O&M becomes more structured and visible.",
        },
      ],
    },
    security: {
      label: "EMS On-Premises Deployment & Data Safety",
      title: "Localized deployment by project scale with layered security safeguards",
      body:
        "MEGA POWER supports localized EMS deployment for small-scale, medium-scale, and large-scale projects with layered safeguards across data collection, transmission, storage, access control, server protection, and audit management.",
      deployment: [
        "Small-scale deployment: under 1 MWh",
        "Medium-scale deployment: 1 MWh to 5 MWh",
        "Large-scale deployment: above 5 MWh",
      ],
      safeguards: [
        {
          title: "E2EE",
          body: "Use TLS 1.3 in transmission and AES-256 in storage so data remains protected across collection, transfer, and retention.",
        },
        {
          title: "RBAC",
          body: "Apply role-based access policies so personnel only reach the datasets and API interfaces that match their job responsibilities.",
        },
        {
          title: "MFA",
          body: "Require multi-factor authentication through password and dynamic verification to strengthen account-level protection.",
        },
        {
          title: "Log Audit",
          body: "Write operations into an immutable log layer so teams can query user behavior, operation type, and time-based activity for audit review.",
        },
      ],
    },
    cta: {
      label: "Products",
      title: "The product page brings these platform-enabled systems back to the equipment families behind them",
      body: "After reviewing warning, control, and O&M capability, you can continue into the product families to see how MEGA POWER organizes the hardware layer that supports each solution.",
      action: { label: "Browse Product Families", page: "products" },
    },
  },
  products: {
    metadata: {
      title: "Products | MEGA POWER",
      description:
        "MEGA POWER product families organized by grid, PV-ESS-charging, transportable, and C&I use cases, with clear specifications and deployment relevance.",
    },
    hero: {
      title: "Core products supporting each solution family",
      subtitle:
        "Review the core MEGA POWER product families by deployment role, with clear model references, visual comparison, and practical technical highlights.",
      highlight: "Core products",
    },
    intro: {
      label: "Product Families",
      title: "Readable product architecture for future expansion",
      body:
        "This page gives decision-makers a clear view of each product family, key specifications, and typical deployment fit, making it easier to move from solution planning to equipment selection.",
    },
    related: {
      label: "Related Solutions",
      title: "Products are shown as components of a wider solution system",
      body:
        "These families support the utility-scale, frequency regulation, PV-ESS-charging, transportable, and distributed storage architectures described throughout the site.",
      bullets: ["Grid and renewable integration", "Fast frequency response", "Weak-grid and high-power charging", "Transportable and emergency deployment", "Commercial and industrial optimization"],
    },
    cta: {
      label: "Services",
      title: "The service page explains how these product families are supported after delivery",
      body: "The equipment story is only part of the system value. Service readiness, preventive maintenance, training, and response structure complete the long-term operating picture.",
      action: { label: "Review Service Readiness", page: "services" },
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
        "MEGA POWER helps customers operate with more clarity and less uncertainty through integrated safety logic and system-level operating control.",
      highlight: "traceability",
    },
    intro: {
      label: "Safety Architecture",
      title: "A system-level view of protection, response, and maintainability",
      body:
        "This safety architecture combines battery warning, partitioned control, event recording, fire protection linkage, and maintenance visibility across the operating lifecycle.",
    },
    items: [
      { title: "Multi-layer protection", body: "MEGA POWER applies protection across cell, PACK, system, and operating layers rather than relying on a single equipment feature." },
      { title: "Warning and response", body: "Battery warning, incident recording, and control logic improve fault awareness and response speed." },
      { title: "Event traceability", body: "EDR positions traceability as a source of operational confidence and post-event clarity." },
      { title: "O&M efficiency", body: "Monitoring and work-order logic help maintenance teams move from passive troubleshooting to structured action." },
    ],
    japan: {
      label: "Japan-facing Trust",
      title: "Reliability messaging aligned with Japan market expectations",
      body:
        "In Japan, MEGA POWER emphasizes operational confidence, maintainability, disciplined communication, and resilient long-term use under constrained site conditions.",
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
        "Service page for MEGA POWER covering O&M strategy, localized service logic, partner collaboration, and technical continuity.",
    },
    hero: {
      title: "Service and O&M designed for long-term partnership",
      subtitle:
        "Service is part of the product experience. The site positions O&M, communication, and support readiness as integral to long-term system value.",
      highlight: "long-term partnership",
    },
    intro: {
      label: "Service Strategy",
      title: "Localized support logic with long-term operational discipline",
      body: "",
    },
    strategy: [
      { title: "Localized service team model", body: "MEGA POWER organizes service around local market understanding and tailored execution instead of relying on a purely remote support posture." },
      { title: "Cross-cultural communication training", body: "Communication readiness matters for international collaboration, alignment, and long-term project trust." },
      { title: "Continuous technical support and updates", body: "MEGA POWER treats technical continuity as an ongoing operating discipline rather than a post-delivery add-on." },
      { title: "Partner network expansion", body: "Local partnerships help extend response capability, market understanding, and service coverage." },
    ],
    mechanism: [
      { title: "Emergency fault resolution", body: "A 7×24 emergency hotline supports urgent after-sales response when operating issues need immediate attention." },
      { title: "Preventive maintenance", body: "Periodic inspection and preventive maintenance are used to reduce system failure risk and support continuity." },
      { title: "Customer training and support", body: "Online and on-site training help operators use the system correctly and lower avoidable service burden." },
      { title: "Replacement parts readiness", body: "A replacement-parts network helps shorten repair time for critical components and improve service continuity." },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
      bullets: ["Maintainability for long operating horizons", "Structured communication with project stakeholders", "Support readiness under constrained site conditions", "Partner-friendly collaboration logic"],
    },
    cta: {
      label: "About",
      title: "See how service capability fits into the full MEGA POWER offering",
      body: "If you want to understand how delivery, platform capability, products, and long-term support work together, the About page gives a clearer company-level view.",
      action: { label: "Read About MEGA POWER", page: "about" },
    },
  },
  about: {
    metadata: {
      title: "About | MEGA POWER",
      description:
        "About MEGA POWER page covering company introduction, integrated digital green energy positioning, and mission.",
    },
    hero: {
      title: "About MEGA POWER",
      subtitle:
        "Integrated digital green energy solutions for a changing energy landscape, combining power, storage, charging, digital control, and service capability.",
      highlight: "MEGA POWER",
    },
    intro: {
      label: "Company Introduction",
      title: "An integrated digital green energy solutions provider",
      body:
        "MEGA POWER goes beyond standalone hardware by combining integrated energy architecture, digital operating capability, and service readiness in one offering.",
    },
    pillars: [
      { title: "Integrated solution logic", body: "MEGA POWER connects photovoltaic generation, storage, charging, and digital management into one coherent solution framework." },
      { title: "Scenario-based market approach", body: "MEGA POWER addresses grid, industry, transport, charging, and emergency use cases instead of presenting isolated equipment categories." },
      { title: "Platform and safety differentiation", body: "Digital warning, traceability, monitoring, and O&M workflow logic strengthen system trust and operational visibility." },
      { title: "Operational support mindset", body: "Long-term maintainability and localized delivery logic support stable operation from deployment through daily use." },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
    },
    cta: {
      label: "Contact",
      title: "Open a business conversation",
      body: "Use the company information below to connect with MEGA POWER for project discussions and business communication.",
      action: { label: "About MEGA POWER", page: "about" },
    },
  },
  contact: {
    metadata: {
      title: "Company Information | MEGA POWER",
      description: "Basic MEGA POWER company information section covering company name, address context, and pending contact details.",
    },
    hero: {
      title: "Contact MEGA POWER",
      subtitle:
        "Use the company information below to reach MEGA POWER for project discussions, business communication, and deployment coordination.",
      highlight: "MEGA POWER",
    },
    intro: {
      label: "Company Information",
      title: "Company information",
      body:
        "Find the core company details for business communication and project coordination with MEGA POWER.",
    },
    items: [
      { label: "Company", value: "MEGA POWER CO., LTD" },
      {
        label: "Address",
        value: "TWG Kojimachi 5F\n3-10-1 Kojimachi, Chiyoda-ku\nTokyo 102-0083, Japan",
      },
    ],
    note:
      "Additional contact channels such as phone and email can be shared directly during project coordination when required.",
    mapEmbed:
      "https://www.google.com/maps?q=%E3%80%92102-0083%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E9%BA%B9%E7%94%BA3-10-1%20TWG%20%E9%BA%B9%E7%94%BA%205F&output=embed",
  },
};
