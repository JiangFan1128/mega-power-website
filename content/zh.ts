import type { SiteContent } from "@/content/types";

export const zh: SiteContent = {
  localeLabel: "中文",
  navigation: {
    home: "首页",
    scenarios: "应用场景",
    solutions: "解决方案",
    platform: "平台能力",
    products: "产品",
    safety: "安全与可靠性",
    services: "服务",
    about: "关于 MEGA POWER",
    contact: "联系",
  },
  footer: {
    summary:
      "MEGA POWER 将储能、充电、数字控制与长期服务整合为一套面向绿色能源部署的统一运行系统。",
    address: "MEGA POWER CO., LTD · 东京，日本",
    note:
      "本 MVP 仅基于现有资料呈现核心业务、战略能力与主要产品族。",
  },
  home: {
    metadata: {
      title: "MEGA POWER | 综合数字绿色能源解决方案",
      description:
        "以场景为先，突出大储、调频、光储充一体、数字平台、安全能力与日本市场适配的 MEGA POWER 企业官网。",
    },
    hero: {
      eyebrow: "MEGA POWER TECHNOLOGY",
      title: "赋能全球可持续能源发展",
      subtitle:
        "MEGA POWER 将光伏、灵活储能、高效充电与智能管理整合，面向电网、工业、交通与充电基础设施提供综合数字绿色能源解决方案。",
      primaryCta: { label: "查看应用场景", page: "scenarios" },
      secondaryCta: { label: "查看解决方案", page: "solutions" },
      stats: [
        { value: "20+", label: "20+ 年行业经验" },
        { value: "6S+EDR", label: "专利安全系统" },
        { value: "<50ms", label: "调频响应延迟" },
        { value: "28 天", label: "提前故障检测" },
      ],
    },
    value: {
      label: "Why MEGA POWER",
      title: "从核心设备到数字化管理，按一个能源系统整体构建",
      body:
        "MEGA POWER 面向的不只是采购单机硬件的客户。公司将变流、储能、充电、数字监控、预警与运维逻辑整合为一体，使系统更易部署、管理与扩展。",
    },
    scenarios: {
      label: "应用场景",
      title: "先从真实运行场景出发，再判断最适合的能源解决方案",
      body:
        "并不是每个项目面对的约束都相同。有些项目首先要解决新能源并网波动，有些受限于电网容量，有些承受工商业降本压力，还有一些更关注临时或应急供电韧性。从真实运行条件出发，往往更容易识别最合适的系统方案。",
      action: { label: "查看应用场景", page: "scenarios" },
      guide:
        "让访问者先识别自己的运行问题，而不是先去理解技术分类。",
      items: [
        {
          badge: "GR",
          title: "新能源出力不稳定，怎样让并网更可靠？",
          preview: "通过储能与数字调度能力，提升新能源并网稳定性和灵活性。",
          summary:
            "如果你在运营风电场、光伏电站或并网型新能源项目，出力波动会带来调度压力、电网稳定性要求以及并网效率下降。",
          approach:
            "MEGA POWER 通过储能与数字化调度能力的结合，提升系统灵活性、电能质量和新能源消纳表现。",
          fit: "风电场、光伏电站、变电站及各类并网型新能源项目",
          tags: ["风电场", "光伏电站", "电网稳定", "灵活调度"],
        },
        {
          badge: "FS",
          title: "调频响应太慢，怎样让系统更快更稳？",
          preview: "为高响应电力系统提供更快、更稳的储能调频能力。",
          summary:
            "如果你的电力系统需要更快地响应电网频率波动，传统方式可能在速度、精度和连续性上都存在限制。",
          approach:
            "MEGA POWER 基于储能的调频能力可以提供更快的功率响应，帮助强化系统稳定性和辅助服务表现。",
          fit: "调频项目、辅助服务、微电网以及高响应电力系统",
          tags: ["调频控制", "辅助服务", "微电网", "快速响应"],
        },
        {
          badge: "EV",
          title: "电力容量受限，如何仍然建设大功率充电站？",
          preview: "在弱电网、离网或容量受限条件下更灵活地部署高功率充电。",
          summary:
            "如果你希望为公交、物流车队或重卡部署充电设施，但站点面临容量不足、弱电网甚至无电网接入，建设难度会明显上升。",
          approach:
            "通过光储充一体方案，MEGA POWER 可以在受限条件下支持更灵活的大功率充电部署，尤其适合重视可靠性和建设效率的场景。",
          fit: "弱电网站点、离网站点、公交场站、重卡充电枢纽和物流园区",
          tags: ["弱电网", "离网站点", "公交场站", "重卡充电"],
        },
        {
          badge: "MP",
          title: "面对远程、临时或应急需求，怎样快速完成供电部署？",
          preview: "把可运输电力系统快速带到远程、临时和应急场景。",
          summary:
            "如果你需要为远程区域、施工现场、矿区、临时活动或应急响应供电，固定基础设施往往太慢、太僵硬，或者成本过高。",
          approach:
            "MEGA POWER 的可运输能源系统能实现更快部署和更灵活供能，适合重视韧性和快速恢复的项目。",
          fit: "应急响应、临时施工供电、矿区、远程区域以及移动部署需求",
          tags: ["应急响应", "临时供电", "远程区域", "快速部署"],
        },
        {
          badge: "CI",
          title: "工厂和园区怎样在降低能耗成本的同时提升供电连续性？",
          preview: "帮助工厂和园区降低电费，同时提升供电连续性和韧性。",
          summary:
            "如果你运营工厂、园区、医院或学校，通常需要同时平衡电费成本、运行连续性、韧性要求和低碳转型目标。",
          approach:
            "MEGA POWER 的工商业储能方案可优化负荷曲线、提升能源灵活性，并在关键运行场景下增强供电稳定性。",
          fit: "工业设施、商业园区、医院、学校及公共基础设施",
          tags: ["工业场站", "商业园区", "医院与学校", "削峰"],
        },
      ],
    },
    solutions: {
      label: "Solutions",
      title: "覆盖电力、储能与充电的完整解决方案组合",
      body:
        "MEGA POWER 的解决方案覆盖大储、调频、光储充一体、可运输储能以及工商业储能。",
      items: [
        { title: "电网侧储能", summary: "面向新能源并网、削峰移峰与电网支撑的 MW 级系统。", bullets: ["平滑波动", "削峰移峰", "黑启动能力"] },
        { title: "调频储能", summary: "用于快速、精准调节功率输出的储能系统。", bullets: ["毫秒响应", "双向调节", "运营价值"] },
        { title: "光储充一体", summary: "面向弱电网与高需求站点的灵活光储充部署。", bullets: ["虚拟增容", "备用供电", "模块化部署"] },
        { title: "可运输储能", summary: "适用于应急、远程与临时场景的移动能源平台。", bullets: ["快速启用", "灵活调度", "现场韧性"] },
        { title: "工商业储能", summary: "面向工商业站点的成本控制、稳定运行与低碳转型。", bullets: ["容量规划", "智能控制", "降低成本"] },
      ],
    },
    platform: {
      label: "Platform",
      title: "把可视化、预警、控制与运维放在同一层",
      body:
        "MEGA POWER 的平台能力把预警、追溯、监控、调度与维护流程连接起来，提升全生命周期的透明度与响应速度。",
      bullets: ["电池预警与状态感知", "事件追溯与记录", "能量管理与控制", "运维流程支持", "数据可视化带来的运行信心"],
    },
    products: {
      label: "Products",
      title: "按场景与系统角色组织核心产品",
      body:
        "产品部分直接使用源 PDF 中的真实规格与产品图片，并以可读性优先的方式组织，而不是堆砌参数表。",
    },
    safety: {
      label: "Safety",
      title: "围绕可靠性、可追溯性与运行信心进行设计",
      body:
        "安全不是单一卖点，而是覆盖硬件、预警逻辑、事件记录与可维护性的系统能力。",
      bullets: ["多层级安全逻辑", "早期预警", "数字化事件追溯", "更高效的运维支持", "以可靠性为先的系统思维"],
    },
    services: {
      label: "Services",
      title: "支撑长期运行的服务能力",
      body:
        "MEGA POWER 的服务表达强调本地化准备、长期可维护性、跨文化交付能力，并特别关注日本市场的要求。",
      items: [
        { title: "本地化服务逻辑", body: "围绕本地响应、伙伴协同和长期可维护运行来组织服务能力。" },
        { title: "跨文化沟通", body: "把沟通信任与协同清晰度视为国际项目交付的重要部分。" },
        { title: "技术连续性", body: "通过持续更新、预防性维护与流程可视化降低运行不确定性。" },
      ],
    },
    cta: {
      label: "Contact",
      title: "与 MEGA POWER 开启业务沟通",
      body: "当前 MVP 仅展示基础信息，不设置联系表单。",
      action: { label: "联系信息", page: "contact" },
    },
  },
  scenarios: {
    metadata: {
      title: "应用场景 | MEGA POWER",
      description:
        "覆盖并网、新能源、调频、弱电网充电、工商业优化、应急供电及日本市场部署诉求的场景页面。",
    },
    hero: {
      title: "按运行场景找到最合适的 MEGA POWER 解决方案",
      subtitle:
        "先从客户的真实运行环境出发，再直接看到对应的解决方案组合、产品家族、平台能力与服务支撑逻辑。",
    },
    intro: {
      label: "Scenario Logic",
      title: "在同一页里完成从场景识别到方案判断",
      body:
        "下列每个场景都会直接连接对应的推荐解决方案组合、典型产品家族、平台能力、安全逻辑与服务准备，而不是让用户再跳去别的页面拼接信息。",
    },
    details: [
      { title: "电网与新能源并网", problem: "新能源项目需要更强的稳定性、控制能力与调度灵活性。", approach: "MEGA POWER 结合储能与数字能源逻辑，同时支持电网侧和新能源侧应用。", benefits: ["提升新能源消纳", "支持削峰与平衡", "增强系统灵活性", "强化电网支撑"] },
      { title: "调频与电网稳定", problem: "动态调频要求极快且精准的功率调节能力。", approach: "MEGA POWER 通过储能调频能力支持稳定、可响应的电网运行。", benefits: ["快速响应", "精准调节", "双向功率调节", "提升运营价值"] },
      { title: "弱电网或受限场地 EV 充电", problem: "充电需求可能迅速超过电网容量和站点条件。", approach: "MEGA POWER 将储能、充电和数字监控整合，提升部署灵活性。", benefits: ["减轻电网扩容压力", "平滑峰值需求", "支持模块化部署", "提升充电连续性"] },
      { title: "工商业成本优化", problem: "工商业用户需要在降低能耗成本的同时保持稳定运行。", approach: "MEGA POWER 提供基于储能的能量优化与可控电力支撑。", benefits: ["降低峰值需量压力", "增强能源灵活性", "提高连续性", "支持低碳转型"] },
      { title: "离网 / 临时 / 应急供电", problem: "远程或应急站点往往缺乏可用的永久电网接入。", approach: "MEGA POWER 通过可运输能源系统实现快速部署与灵活供能。", benefits: ["快速部署", "灵活适应场地", "移动供电能力", "更强应急韧性"] },
      { title: "日本市场部署需求", problem: "日本项目通常对场地限制、可靠性与维护性有更高要求。", approach: "MEGA POWER 以紧凑集成、运行信心、沟通信任与支持准备来组织日本市场部署表达。", benefits: ["适配受限场地", "以可靠性为先", "可维护的长期运行", "更清晰的沟通支持"] },
    ],
    japanBlock: {
      label: "Japan Priority",
      title: "面向日本运行现实的能源部署表达",
      body:
        "日本市场相关内容保持务实，不夸大法规或运营承诺，重点强调韧性、受限场地、可维护性、支持准备与沟通信任。",
      bullets: ["受限场地条件", "可靠性优先", "备电与韧性意识", "可维护性与安全", "支持准备与沟通质量"],
    },
    mapping: {
      label: "How MEGA POWER Responds",
      title: "把场景需求映射为综合方案逻辑",
      body:
        "MEGA POWER 不把设备、软件与运维拆开讲，而是把产品、数字模块与服务流程整合为同一运行体系。",
      bullets: ["按电网或站点条件匹配储能架构", "预警、监控与事件追溯", "在容量受限条件下实现充电与调度控制", "面向长期运行的服务准备"],
    },
    cta: {
      label: "Next Step",
      title: "继续查看支撑这些场景系统的产品家族",
      body: "确定了场景和解决方案组合之后，可以继续进入产品页查看参数图和设备家族。",
      action: { label: "查看产品", page: "products" },
    },
  },
  solutions: {
    metadata: {
      title: "解决方案 | MEGA POWER",
      description:
        "覆盖大储、调频、光储充一体、可运输储能与工商业储能的五大综合解决方案。",
    },
    hero: {
      title: "MEGA POWER 解决方案体系总览",
      subtitle:
        "这里是解决方案组合的简明总览。完整的“场景到方案”匹配逻辑已经放到应用场景页面中。",
    },
    intro: {
      label: "Solution Framework",
      title: "先快速理解主要解决方案体系",
      body:
        "本页用于快速浏览整体解决方案组合；如果你要按客户环境判断最合适的方案，应返回应用场景页查看完整映射。",
    },
    items: [
      { title: "电网侧储能", summary: "部署在电网侧或发电侧的 MW 级系统，用于时间移峰与新能源消纳。", bullets: ["风电与光伏", "削峰与平衡", "韧性与灵活性"] },
      { title: "调频储能", summary: "通过快速调节有功功率来维持目标频率的储能系统。", bullets: ["毫秒级响应", "精准跟随指令", "即时功率输出"] },
      { title: "光储充一体", summary: "适用于无网、弱网及大功率充电场景的清洁能源微网方案。", bullets: ["虚拟增容", "稳定供电", "智能运维"] },
      { title: "可运输储能", summary: "以集装箱、拖车、特种车辆等形式，将能源送到需要的地方。", bullets: ["应急救援", "远程供电", "临时场站"] },
      { title: "工商业储能", summary: "面向企业、商业建筑、医院、学校等场景的灵活储能系统。", bullets: ["成本控制", "供电稳定", "绿色转型"] },
    ],
    cta: {
      label: "Scenarios",
      title: "返回完整的场景到方案判断页面",
      body: "应用场景页现在是主决策页，集中展示运行环境、解决方案逻辑、产品家族、平台支撑与服务准备之间的关系。",
      action: { label: "查看应用场景", page: "scenarios" },
    },
  },
  platform: {
    metadata: {
      title: "平台能力 | MEGA POWER",
      description:
        "覆盖预警、追溯、监控、控制、运维流程与数据安全的 MEGA POWER 数字平台页面。",
    },
    hero: {
      title: "跨越预警、控制与运维的平台能力",
      subtitle:
        "平台层不是附属功能，而是差异化能力。它连接数据可视化、事件追溯、控制逻辑与现场运维流程。",
    },
    intro: {
      label: "6S+EDR Capability",
      title: "从“被动补救”转向“主动预防”",
      body:
        "依托长期行业数据积累与本地实时处理能力，MEGA POWER 在传统储能架构基础上增加安全增强层，用于回应行业核心痛点。",
    },
    capability: {
      pills: ["AI 驱动", "毫秒级响应", "全生命周期留痕"],
      base: {
        label: "安全底座",
        title: "风险预判与事故溯源",
        items: [
          {
            name: "EDR",
            title: "事故数据记录系统",
            description:
              "作为储能系统的“黑匣子”，实现全过程数据留痕，为故障分析和责任认定提供真实、客观依据。",
          },
          {
            name: "BWS",
            title: "电池预警系统",
            description:
              "通过智能算法在风险萌芽阶段提前预警，把运行模式从“事后处理”转向“事前防范”。",
          },
        ],
      },
      control: {
        label: "控制核心",
        title: "极速响应与物理隔离",
        items: [
          {
            name: "HCS",
            title: "高速控制系统",
            description:
              "依托本地实时处理能力，实现毫秒级响应，确保异常波动时能够即时执行保护动作。",
          },
          {
            name: "PCS",
            title: "变流控制系统",
            description:
              "采用多支路物理隔离设计，限制故障扩散范围，降低链式反应风险。",
          },
        ],
      },
      brain: {
        label: "系统大脑",
        title: "监测、优化与全生命周期管理",
        items: [
          {
            name: "BMS",
            title: "电池管理系统",
            description:
              "实时监测电芯电压、温度等关键参数，并联动 PACK 级消防逻辑，让硬件始终处于安全区间。",
          },
          {
            name: "EMS",
            title: "能量管理系统",
            description:
              "作为站端大脑优化充放电策略，通过动态智能控制平衡运行效率与系统寿命。",
          },
          {
            name: "OMS",
            title: "运维管理系统",
            description:
              "通过数字化监控与流程化维护提升电站透明度，实现全生命周期可追溯管理。",
          },
        ],
      },
    },
    modules: [
      { name: "BWS", title: "Battery Warning System", description: "基于数据的早期异常预警与电池簇风险识别。" },
      { name: "EDR", title: "Event Data Recorder", description: "面向事故追溯和故障分析的多源事件记录。" },
      { name: "EMS", title: "Energy Management System", description: "负责调度、优化与分区安全管理的控制层。" },
      { name: "OMS", title: "Operations & Maintenance System", description: "实时监控、工单生成与进度可视化。" },
      { name: "HCS", title: "High-speed Control System", description: "基于实时同步的低时延控制能力。" },
      { name: "BMS", title: "Battery Management System", description: "连接器温度检测与 PACK 级联动防火。" },
      { name: "PCS", title: "Power Conversion System", description: "支持电气隔离与安全隔离的变流设计。" },
    ],
    management: {
      label: "数字能源管理平台",
      title: "把数据存储、可视化分析和运维协同放进同一平台层",
      body:
        "平台部分强调其适用于大、中、小型储能系统的综合管理能力，把事件记录、策略调度、监控、预警和运维执行整合为同一个数字运行界面。",
      systems: ["EDR", "ECS", "EMS", "OMS", "BWS"],
      highlights: [
        {
          title: "Comprehensive Data Storage",
          body: "把电站数据、运行事件和全生命周期状态放进同一平台层，而不是分散在多个独立工具里。",
        },
        {
          title: "Visualized Analysis",
          body: "通过可视化大屏、趋势和告警，让运行表现、异常状态与安全情况更容易被识别和解释。",
        },
        {
          title: "Intelligent Strategy Dispatch",
          body: "通过 EMS 逻辑连接充放电策略、系统分区和调度执行，让运行控制更具上下文。",
        },
        {
          title: "Precise Early Warning",
          body: "结合 BWS 与运行数据，对异常趋势进行更早识别，让团队在问题升级前采取行动。",
        },
        {
          title: "Safety Analysis",
          body: "通过事件追溯、多源记录和一致的系统视图，为故障复盘和安全分析提供依据。",
        },
        {
          title: "Efficiency in O&M and Monitoring",
          body: "把监控、工单生成与进度跟踪连接起来，让运维执行更结构化、更可见。",
        },
      ],
    },
    security: {
      label: "EMS 本地化部署与数据安全保障",
      title: "按项目规模部署 EMS，并建立分层数据安全机制",
      body:
        "源资料展示了面向小型、中型和大型项目的本地化 EMS 部署方式，并强调从数据采集、传输、存储、功能访问、服务器保护到合规控制的整体安全设计。",
      deployment: [
        "小型项目部署：1MWh 以下",
        "中型项目部署：1MWh 至 5MWh",
        "大型项目部署：5MWh 以上",
      ],
      safeguards: [
        {
          title: "E2EE",
          body: "在数据传输中采用 TLS 1.3，在存储中采用 AES-256，降低数据在采集、传输和留存过程中的非法访问风险。",
        },
        {
          title: "RBAC",
          body: "通过基于角色的访问策略，让不同岗位人员只访问与职责相关的数据集和接口能力。",
        },
        {
          title: "MFA",
          body: "采用密码加动态校验等多因素认证机制，强化账号层面的访问安全。",
        },
        {
          title: "Log Audit",
          body: "将操作行为写入不可篡改日志系统，支持按时间、用户和操作类型进行审计查询。",
        },
      ],
    },
    cta: {
      label: "Trust Layer",
      title: "查看平台能力如何直接支撑安全与可靠性",
      body: "预警、追溯与流程设计是 MEGA POWER 建立信任的重要基础。",
      action: { label: "安全与可靠性", page: "safety" },
    },
  },
  products: {
    metadata: {
      title: "产品 | MEGA POWER",
      description:
        "基于源 PDF 真实规格和图片整理的 MEGA POWER 产品族，覆盖电网、光储充、可运输与工商业应用。",
    },
    hero: {
      title: "支撑各类解决方案的核心产品",
      subtitle:
        "产品以部署角色和场景适配为维度组织，使用源 PDF 中的真实产品图片与规格信息。",
    },
    intro: {
      label: "Product Families",
      title: "面向后续扩展的可读型产品架构",
      body:
        "本 MVP 聚焦产品族理解、关键参数与场景关联，不提供 PDF 下载，也不把页面做成参数堆叠。",
    },
    related: {
      label: "Related Solutions",
      title: "产品始终作为更大方案系统的一部分呈现",
      body:
        "这些产品族分别支撑大储、调频、光储充一体、可运输储能与分布式储能架构。",
      bullets: ["电网与新能源并网", "快速调频", "弱电网与大功率充电", "可运输与应急部署", "工商业优化"],
    },
    cta: {
      label: "Platform + Service",
      title: "硬件能力必须与数字控制和服务准备一起看",
      body: "MEGA POWER 的产品叙事会回到平台、安全与长期支持能力。",
      action: { label: "查看服务", page: "services" },
    },
  },
  safety: {
    metadata: {
      title: "安全与可靠性 | MEGA POWER",
      description:
        "涵盖多层防护、预警响应、事件追溯、运维效率以及日本市场信任表达的页面。",
    },
    hero: {
      title: "把安全、追溯与运行信心内建到系统中",
      subtitle:
        "MEGA POWER 被呈现为一个通过综合安全逻辑和运行体系帮助客户降低不确定性的企业。",
    },
    intro: {
      label: "Safety Architecture",
      title: "从系统层面理解防护、响应与可维护性",
      body:
        "安全叙事覆盖电池预警、分区控制、事件记录、防火联动与维护可视化，不是单点能力。",
    },
    items: [
      { title: "多层防护", body: "从电芯、PACK、系统到运营层面建立多层防护逻辑。" },
      { title: "预警与响应", body: "通过预警、记录和控制提升故障感知与响应速度。" },
      { title: "事件追溯", body: "EDR 让事故后分析和运营解释更加清晰可信。" },
      { title: "运维效率", body: "监控与工单逻辑帮助团队从被动排障转向结构化运维。" },
    ],
    japan: {
      label: "Japan-facing Trust",
      title: "贴合日本市场预期的可靠性表达",
      body:
        "面向日本市场，安全内容强调运行信心、可维护性、规范沟通与受限场地条件下的长期稳定运行。",
      bullets: ["紧凑部署下的运行信心", "全生命周期可维护性", "清晰的预警与响应可见性", "通过追溯能力建立信任"],
    },
    cta: {
      label: "Service Readiness",
      title: "查看安全与可维护性如何连接到服务策略",
      body: "平台能力只有在真实的运维执行与本地支持逻辑下才真正产生价值。",
      action: { label: "查看服务", page: "services" },
    },
  },
  services: {
    metadata: {
      title: "服务 | MEGA POWER",
      description:
        "围绕运维策略、本地化服务、伙伴协同与技术连续性的服务页面。",
    },
    hero: {
      title: "为长期合作而设计的服务与运维",
      subtitle:
        "服务是产品体验的一部分。网站把运维、沟通和支持准备视为长期系统价值的重要组成。",
    },
    intro: {
      label: "Service Strategy",
      title: "兼顾本地响应与长期运行纪律的服务逻辑",
      body:
        "服务叙事基于源 PDF 中的本地团队、跨文化沟通、持续技术支持和伙伴网络扩展。",
    },
    strategy: [
      { title: "本地化服务团队模型", body: "围绕本地市场理解和定制化支持来组织服务能力。" },
      { title: "跨文化沟通训练", body: "把国际协同中的沟通质量视为长期合作的重要基础。" },
      { title: "持续技术支持与更新", body: "强调交付后的持续技术陪伴，而非一次性交付。" },
      { title: "伙伴网络扩展", body: "通过本地伙伴提升服务覆盖与响应能力。" },
    ],
    mechanism: [
      { title: "紧急故障处理", body: "源资料提到 7 x 24 紧急热线模式，用于售后紧急响应。" },
      { title: "预防性维护", body: "通过定期巡检和预防维护降低故障风险并保障连续运行。" },
      { title: "客户培训与支持", body: "通过线上和现场培训减少误操作带来的服务负担。" },
      { title: "备件快速响应", body: "通过备件网络缩短关键部件的修复时间。" },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
      bullets: ["面向长期运行的可维护性", "与项目相关方的结构化沟通", "受限场地下的支持准备", "适合伙伴协同的服务逻辑"],
    },
    cta: {
      label: "Company",
      title: "从公司定位角度理解服务能力",
      body: "关于页面将把使命、综合能力与长期服务逻辑连接为一个整体叙事。",
      action: { label: "关于 MEGA POWER", page: "about" },
    },
  },
  about: {
    metadata: {
      title: "关于 MEGA POWER | MEGA POWER",
      description:
        "展示 MEGA POWER 作为综合数字绿色能源解决方案提供商的公司定位与能力。",
    },
    hero: {
      title: "关于 MEGA POWER",
      subtitle:
        "面向变化中的能源格局，MEGA POWER 以电力、储能、充电、数字控制与服务能力构建综合数字绿色能源解决方案。",
    },
    intro: {
      label: "Company Introduction",
      title: "定位为综合数字绿色能源解决方案提供商，而非单一硬件厂商",
      body:
        "MEGA POWER 的公司叙事把综合能源架构、数字化运行能力和服务准备连接起来，而不是只展示硬件产品。",
    },
    pillars: [
      { title: "综合解决方案逻辑", body: "把光伏、储能、充电与数字管理连接为一个统一框架。" },
      { title: "以场景为先的市场方法", body: "围绕电网、工业、交通、充电与应急场景组织公司叙事。" },
      { title: "平台与安全差异化", body: "将预警、追溯、监控和运维流程视为战略差异化能力。" },
      { title: "长期运营支持思维", body: "把可维护性与本地化交付逻辑放入品牌故事之中。" },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
    },
    cta: {
      label: "Contact",
      title: "开启业务沟通",
      body: "本阶段已将基础公司信息直接整合进关于页面。",
      action: { label: "关于 MEGA POWER", page: "about" },
    },
  },
  contact: {
    metadata: {
      title: "公司信息 | MEGA POWER",
      description: "包含公司名称、所在地背景以及待确认联系方式字段的基础公司信息区块。",
    },
    hero: {
      title: "联系 MEGA POWER",
      subtitle:
        "用于项目和业务沟通的基础信息。本 MVP 不提供联系表单，也不会补充未经资料支持的运营信息。",
    },
    intro: {
      label: "Company Information",
      title: "用于业务沟通的基础公司信息",
      body:
        "当前网站仅展示源资料中可以确认的公司信息，保持沟通路径简洁、克制且专业。",
    },
    items: [
      { label: "公司", value: "MEGA POWER CO., LTD" },
      { label: "地址", value: "Tokyo, Japan" },
      { label: "电话", value: "待补充已核实信息" },
      { label: "邮箱", value: "待补充已核实信息" },
    ],
    note:
      "当前可核实资料中未提供电话和邮箱，因此此处保留字段但不编造信息；后续确认后可补充。联系表单仍不在现阶段范围内。",
  },
};
