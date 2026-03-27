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
    about: "关于公司",
    contact: "联系",
  },
  footer: {
    summary:
      "MEGA POWER TECHNOLOGY 将储能、充电、数字控制与长期服务整合为一套面向绿色能源部署的统一运行系统。",
    address: "〒102-0084 东京都千代田区二番町1-2 番町ハイム637-B",
    note:
      "MEGA POWER TECHNOLOGY 将系统架构、数字控制与长期服务支持整合为面向现代能源部署的一体化能力。",
  },
  home: {
    metadata: {
      title: "MEGA POWER TECHNOLOGY | 综合数字绿色能源解决方案",
      description:
        "以场景为先，突出大储、调频、光储充一体、数字平台、安全能力与日本市场适配的 MEGA POWER TECHNOLOGY 企业官网。",
    },
    hero: {
      eyebrow: "MEGA POWER TECHNOLOGY",
      title: "赋能全球可持续能源发展",
      subtitle:
        "MEGA POWER TECHNOLOGY 将光伏、灵活储能、高效充电与智能管理整合，面向电网、工业、交通与充电基础设施提供综合数字绿色能源解决方案。",
      primaryCta: { label: "查看应用场景", page: "scenarios" },
      secondaryCta: { label: "查看平台能力", page: "platform" },
      stats: [
        { value: "20+", label: "20+ 年行业经验" },
        { value: "6S+EDR", label: "专利安全系统" },
        { value: "<50ms", label: "调频响应延迟" },
        { value: "28 天", label: "提前故障检测" },
      ],
    },
    value: {
      label: "整合方案的价值",
      title: "从核心设备到数字化管理，按一个能源系统整体构建",
      body:
        "MEGA POWER TECHNOLOGY 面向的不只是采购单机硬件的客户。公司将变流、储能、充电、数字监控、预警与运维逻辑整合为一体，使系统更易部署、管理与扩展。",
    },
    scenarios: {
      label: "应用场景",
      title: "从运行场景出发，找到更适合的解决路径",
      body:
        "并不是每个项目面对的约束都相同。有些项目首先要解决新能源并网波动，有些受限于电网容量，有些承受工商业降本压力，还有一些更关注临时或应急供电韧性。首页会把场景判断与对应的解决方向放在一起，让访问者更自然地从问题识别走向系统理解。",
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
        "MEGA POWER TECHNOLOGY 通过储能与数字化调度能力的结合，提升系统灵活性、电能质量和新能源消纳表现。",
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
        "按部署角色浏览主要产品家族，快速了解型号、关键参数与适配场景。",
    },
    safety: {
      label: "Safety",
      title: "围绕可靠性、可追溯性与运行信心进行设计",
      body:
        "MEGA POWER TECHNOLOGY 将安全能力融入硬件、预警逻辑、事件记录和可维护性之中，形成一体化的运行架构。",
      bullets: ["多层级安全逻辑", "早期预警", "数字化事件追溯", "更高效的运维支持", "以可靠性为先的系统思维"],
    },
    services: {
      label: "Services",
      title: "面向长期稳定运行构建的服务准备",
      body:
        "公司将服务作为运行能力的一部分来建设，本地响应组织、预防性维护、客户培训、备件准备和伙伴协同都服务于长期项目连续性。",
      items: [
        { title: "本地化服务结构", body: "围绕本地市场理解、定制化执行和伙伴协同来组织服务能力，而不是完全依赖远程支持。" },
        { title: "紧急响应路径", body: "通过 7×24 紧急响应机制，帮助高优先级事件更快进入处置流程，并尽量缩短运行中断时间。" },
        { title: "预防性维护纪律", body: "通过周期巡检、计划性维护和流程可视化降低可避免的故障风险。" },
        { title: "培训与备件准备", body: "通过客户培训、持续技术支持和关键备件准备，帮助系统保持稳定运行并降低误操作带来的服务负担。" },
      ],
    },
    cta: {
      label: "Scenarios",
      title: "如果你想从概览继续进入更具体的项目判断，最适合下一步查看的是应用场景页面",
      body: "在那里可以直接看到不同运行环境对应的解决方案逻辑、产品家族、平台支撑和服务准备，更容易判断哪些系统更适合你的项目。",
      action: { label: "查看应用场景", page: "scenarios" },
    },
  },
  scenarios: {
    metadata: {
      title: "应用场景 | MEGA POWER TECHNOLOGY",
      description:
        "覆盖并网、新能源、调频、弱电网充电、工商业优化、应急供电及日本市场部署诉求的场景页面。",
    },
    hero: {
      title: "按运行场景找到最合适的解决方案",
      subtitle:
        "先从客户的真实运行环境出发，再直接看到对应的解决方案组合、产品家族、平台能力与服务支撑逻辑。",
      highlight: "运行场景",
    },
    intro: {
      label: "Scenario Logic",
      title: "从运行问题直接走向方案判断",
      body:
        "下列每个场景都会直接连接对应的推荐解决方案组合、典型产品家族、平台能力、安全逻辑与服务准备，而不是让用户再跳去别的页面拼接信息。",
    },
    selectorLabel: "选择你当前面临的运行场景",
    panels: [
      {
        key: "grid",
        icon: "grid",
        buttonTitle: "电网与新能源并网",
        buttonSubtitle: "风电场 · 光伏电站",
        problemLabel: "客户面临的问题",
        problemTitle: "新能源出力不稳定，弃电率升高，并网合规压力持续加大",
        problemBody:
          "风电和光伏发电天然存在间歇性，发电高峰与用电高峰并不总是匹配。电网侧越来越希望项目通过储能提升稳定性和调度灵活性，否则更容易面临消纳不足、限电和并网考核压力。",
        solutionLabel: "推荐解决路径",
        solutionTitle: "电网侧储能解决方案",
        solutionBody:
          "MEGA POWER 在电网侧或发电侧部署 MW 级储能系统，通过时间维度转移能量，并与数字调度逻辑联动，实现平滑出力、削峰移峰、电网支撑和更高的新能源消纳能力。",
        solutionValues: ["提升新能源消纳", "削峰移峰", "增强电网灵活性", "黑启动准备"],
        metrics: [
          { value: "<50ms", label: "有功 / 无功功率调节响应" },
          { value: "2750kW", label: "单集装箱最大输出功率" },
          { value: "5MWh", label: "单电池舱容量" },
          { value: "28 天", label: "BWS 提前预警窗口" },
        ],
        architecture: {
          kind: "flow",
          label: "系统架构概览",
          rows: [
            {
              arrow: "→",
              nodes: [
                { title: "光伏电站", subtitle: "PV Station" },
                { title: "PV 升压舱", subtitle: "Step-up Container" },
                { title: "PCS 升压一体舱", subtitle: "变流 + 升压", tone: "highlight" },
                { title: "电网", subtitle: "Grid" },
                { title: "MCS / EMS", subtitle: "数字管理平台", tone: "platform" },
              ],
            },
            {
              arrow: "↗",
              nodes: [
                { title: "风力发电", subtitle: "Wind Farm" },
                { title: "Wind 升压舱", subtitle: "Step-up Container" },
              ],
            },
            {
              arrow: "↗",
              nodes: [
                { title: "电池储能舱", subtitle: "5015kWh LFP" },
                { title: "PCS 升压一体舱", subtitle: "变流 + 电网支撑", tone: "highlight" },
              ],
            },
          ],
        },
        productsLabel: "对应产品家族",
        products: [
          {
            title: "PCS 升压一体舱（簇式）",
            model: "iBCS100-2500B/20-AC",
            highlights: ["2500kW 额定", "12 路 DC 通道", "20kV", "IP54 / PCS IP66"],
          },
          {
            title: "PCS 升压一体舱（集成式）",
            model: "iBCS100-2500A/20-AC",
            highlights: ["2750kW 最大", "20/35kV", "≤18T", "一体化部署"],
          },
          {
            title: "DC 电池储能集装箱",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh LFP", "液冷", "IP54", "适配大储"],
          },
        ],
        platform: {
          label: "平台能力支撑",
          title: "从调度到追溯的数字化可视能力",
          items: [
            "HCS 提供毫秒级控制响应",
            "BWS 提供最长 28 天的电池故障预警",
            "EMS 负责调度协调与策略优化",
            "EDR 负责全过程事件追溯",
          ],
        },
        service: {
          label: "服务准备",
          title: "面向公用事业级项目的交付支持",
          items: [
            "面向电网侧项目的站级工程协调",
            "适合长周期运行的预防性维护计划",
            "关键站点可用的备件和远程支持逻辑",
          ],
        },
      },
      {
        key: "frequency",
        icon: "frequency",
        buttonTitle: "调频与电网稳定",
        buttonSubtitle: "快速响应 · 微电网",
        problemLabel: "客户面临的问题",
        problemTitle: "频率偏差需要比传统调节方式更快、更稳定的响应",
        problemBody:
          "当电网频率围绕目标值波动时，传统热电或水电调节往往速度不够快、精度也不够高。高响应系统需要连续、低延迟、可重复的调频能力，才能更好地跟随调度指令。",
        solutionLabel: "推荐解决路径",
        solutionTitle: "调频储能解决方案",
        solutionBody:
          "MEGA POWER TECHNOLOGY 将储能变流、高速控制和事件追溯能力整合为调频方案，实现更快响应、更精准跟随和更连续的辅助服务价值输出。",
        solutionValues: ["毫秒级响应", "双向调节", "辅助服务价值", "稳定支撑 50Hz"],
        metrics: [
          { value: "<50ms", label: "调度响应延迟" },
          { value: "2500kW", label: "双向调节功率" },
          { value: "50Hz", label: "目标频率跟踪" },
          { value: "EDR", label: "全过程事件留痕" },
        ],
        architecture: {
          kind: "flow",
          label: "系统架构概览",
          rows: [
            {
              align: "center",
              arrow: "⇌",
              nodes: [
                { title: "电网", subtitle: "Grid" },
                { title: "升压舱", subtitle: "Step-up Container" },
                { title: "PCS-ES 变流储能", subtitle: "Battery Storage Container", tone: "highlight" },
              ],
            },
            {
              align: "end",
              arrow: "⇌",
              nodes: [
                { title: "调度中心", subtitle: "Dispatch Center", tone: "platform" },
                { title: "EMS", subtitle: "能量管理系统", tone: "platform" },
              ],
            },
          ],
          chips: [
            { name: "HCS", detail: "毫秒级频率调节" },
            { name: "BWS", detail: "28 天提前预警" },
            { name: "EDR", detail: "事件数据追溯" },
            { name: "OMS", detail: "工单与进度跟踪" },
          ],
        },
        productsLabel: "对应产品家族",
        products: [
          {
            title: "PCS 升压一体舱（簇式）",
            model: "iBCS100-2500B/20-AC",
            highlights: ["2500kW 额定", "快速调频", "12 路 DC 通道"],
          },
          {
            title: "PCS 升压一体舱（集成式）",
            model: "iBCS100-2500A/20-AC",
            highlights: ["2750kW 最大", "20/35kV", "适合微电网"],
          },
          {
            title: "DC 电池储能集装箱",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh LFP", "液冷", "适合高频循环"],
          },
        ],
        platform: {
          label: "平台能力支撑",
          title: "面向高响应调频的闭环控制",
          items: [
            "HCS 提供毫秒级同步控制",
            "EDR 记录调频事件并支持事后分析",
            "OMS 支撑告警响应和工单流程",
            "BMS / BWS 强化高频循环下的电池状态感知",
          ],
        },
        service: {
          label: "服务准备",
          title: "保障调频收益和可用性的稳定性",
          items: [
            "面向关键调度系统的 7×24 紧急响应",
            "通过预防性维护减少停机损失",
            "关键变流部件的快速备件支持",
          ],
        },
      },
      {
        key: "ev",
        icon: "ev",
        buttonTitle: "EV 充电",
        buttonSubtitle: "弱电网 · 大功率",
        problemLabel: "客户面临的问题",
        problemTitle: "需要建设大功率充电站，但站点弱电网、容量受限，甚至没有电网接入",
        problemBody:
          "公交场站、重卡走廊、物流园和乘用车快充站常常受制于配电容量。电网扩容周期长、成本高，而很多站点又希望尽快形成稳定充电能力。",
        solutionLabel: "推荐解决路径",
        solutionTitle: "光储充一体解决方案",
        solutionBody:
          "MEGA POWER TECHNOLOGY 通过 AC / DC 耦合的系统设计，把光伏、储能和充电整合为可调度的微网结构，让弱电网、离网或场地受限条件下的大功率充电部署更灵活。",
        solutionValues: ["虚拟增容", "并离网切换", "模块化部署", "6S+EDR 智能运维"],
        metrics: [
          { value: "200kW", label: "乘用车快充节点" },
          { value: "240kW×N", label: "公交场站多枪充电" },
          { value: "480kW×N", label: "重卡超充配置" },
          { value: "1440kW", label: "功率柜额定输出" },
        ],
        architecture: {
          kind: "tiers",
          label: "三级充电站配置架构",
          tiers: [
            {
              icon: "🚗",
              title: "HPC Power Node",
              power: "120kW × 2 · MAX 200kW",
              description: "输入功率 <50kW，适用于社区、商超等场景的乘用车快充配置。",
              items: ["储充一体机 × N"],
            },
            {
              icon: "🚌",
              title: "E-Bus 公交场站",
              power: "240kW × N",
              description: "由电池储能柜、功率柜和充电终端组成的模块化组合。",
              items: ["电池储能柜 × N", "功率柜 × N", "充电终端 × N"],
            },
            {
              icon: "🚛",
              title: "兆瓦充电走廊 / XFC",
              power: "480kW × N",
              description: "面向重卡超充和超快充电力园区的可扩展配置。",
              items: ["电池储能柜 × N", "功率柜 × N", "大功率终端 × N"],
            },
          ],
          chips: [
            { name: "EMS", detail: "云端监控平台" },
            { name: "OMS", detail: "自动工单流程" },
            { name: "BTS", detail: "EV 电池健康分析", tone: "energy" },
          ],
        },
        productsLabel: "对应产品家族",
        products: [
          {
            title: "光储一体机",
            model: "iPES100-100-215-AC-100",
            highlights: ["100kW AC", "215.04kWh", "2×50kW 光伏输入", "IP55"],
          },
          {
            title: "储能一体式充电机",
            model: "iEFC100-80/120-AL-C",
            highlights: ["120kW 额定", "186 / 209kWh", "DC200-1000V", "IP55"],
          },
          {
            title: "功率柜与高功率终端",
            model: "iEFC Series",
            highlights: ["1440kW 功率柜", "12 路输出", "2×600A + 10×250A"],
          },
        ],
        platform: {
          label: "平台能力支撑",
          title: "把充电运营、监控和策略调度放进同一层",
          items: [
            "EMS 负责充电与储能策略调度",
            "OMS 负责站点监控和工单执行",
            "BWS 负责储能电池异常预警",
            "EDR 负责充电站事件记录与分析",
          ],
        },
        service: {
          label: "服务准备",
          title: "让充电站更稳定地持续运营",
          items: [
            "通过客户培训降低现场误操作",
            "通过定期巡检降低设备故障风险",
            "通过伙伴协作扩大本地响应覆盖",
          ],
        },
      },
      {
        key: "mobile",
        icon: "mobile",
        buttonTitle: "移动与应急供电",
        buttonSubtitle: "离网 · 临时场站",
        problemLabel: "客户面临的问题",
        problemTitle: "远程或应急场地需要快速供电，无法等待固定基础设施建设完成",
        problemBody:
          "灾害救援、临时施工、偏远矿区和现场作业，往往没有条件先建设永久电力设施。真正关键的是电力系统能否快速移动、快速部署，并在到场后尽快恢复供电能力。",
        solutionLabel: "推荐解决路径",
        solutionTitle: "可运输储能解决方案",
        solutionBody:
          "MEGA POWER TECHNOLOGY 通过集装箱、拖车和车辆式能源系统，建立快速部署的供电能力，并结合抗振设计、液冷和模块化调度，适配各种移动能源场景。",
        solutionValues: ["快速部署", "车规级抗振", "电池周转灵活", "独立离网供电"],
        metrics: [
          { value: "10,000+", label: "快插接口循环寿命" },
          { value: "2500kW", label: "离网额定放电功率" },
          { value: "6000", label: "95%DOD 条件下电池循环次数" },
          { value: "A1", label: "阻燃材料等级" },
        ],
        architecture: {
          kind: "turnover",
          label: "充放电周转架构",
          topLabel: "充电侧（电网端）",
          topNodes: [
            { title: "电网", subtitle: "Grid" },
            { title: "并网充电舱", subtitle: "Grid-connected Charging", tone: "highlight" },
            { title: "充电电池舱", subtitle: "Charging-oriented" },
          ],
          middleNodes: [
            { title: "电池周转", subtitle: "Battery Turnover", tone: "highlight" },
            { title: "备用电池舱", subtitle: "Backup Battery" },
          ],
          bottomLabel: "放电侧（负载端）",
          bottomNodes: [
            { title: "放电电池舱", subtitle: "Discharging-oriented" },
            { title: "离网放电舱", subtitle: "Off-grid Discharging", tone: "highlight" },
            { title: "负载", subtitle: "Load" },
          ],
          chips: [
            { name: "SCS", detail: "突变负载稳定控制" },
            { name: "DMS", detail: "充放电调度管理", tone: "energy" },
            { name: "BWS", detail: "28 天预警" },
            { name: "EDR", detail: "事件追溯" },
          ],
        },
        productsLabel: "对应产品家族",
        products: [
          {
            title: "并网充电集装箱",
            model: "iBCS100-1725A/10-AC",
            highlights: ["1725kW", "10kV", "≤13T", "快速部署"],
          },
          {
            title: "离网放电集装箱",
            model: "iBCS100-2x2500A/10-AC",
            highlights: ["2510kW", "2500kW 离网输出", "10kV", "IP54 / PCS IP66"],
          },
          {
            title: "电池储能运输车",
            model: "iESS100-3343B2-LC-M",
            highlights: ["6000 次循环", "抗振设计", "液冷", "IP54 / C4"],
          },
        ],
        platform: {
          label: "平台能力支撑",
          title: "适配不稳定场地条件的调度智能",
          items: [
            "SCS 支撑突变负载下的稳定控制",
            "DMS 式调度逻辑协调移动场景充放电",
            "BWS / EDR 提供现场预警与事件追溯",
            "OMS 让远程服务流程更可见",
          ],
        },
        service: {
          label: "服务准备",
          title: "面向紧急和临时部署的快速支撑",
          items: [
            "7×24 紧急热线处理高优先级事件",
            "通过备件网络缩短关键部件恢复时间",
            "通过现场培训减少搭建和运行错误",
          ],
        },
      },
      {
        key: "commercial",
        icon: "commercial",
        buttonTitle: "工商业优化",
        buttonSubtitle: "工厂 · 园区",
        problemLabel: "客户面临的问题",
        problemTitle: "电费成本不断上升，而供电中断会直接影响业务连续性",
        problemBody:
          "工厂、商业建筑、医院、学校和产业园区，不仅需要降低电费和需量压力，还要增强在停电或波动条件下的供电韧性，同时兼顾绿色转型目标。",
        solutionLabel: "推荐解决路径",
        solutionTitle: "工商业储能解决方案",
        solutionBody:
          "MEGA POWER TECHNOLOGY 提供从储能柜到多 MWh 系统的灵活配置，帮助客户优化负荷曲线、提升备用能力，并通过可控的系统逻辑支持更低碳、更稳定的长期运行。",
        solutionValues: ["削峰降本", "备用电源韧性", "灵活扩容", "低碳转型"],
        metrics: [
          { value: "≤2MWh", label: "小型用户：261kWh 储能柜 × N" },
          { value: "2-10MWh", label: "中型用户：418kWh 储能柜 × N" },
          { value: "≥5MWh", label: "大型用户：大储舱 × N" },
          { value: "≥88%", label: "系统转换效率" },
        ],
        architecture: {
          kind: "scale",
          label: "按规模配置架构",
          columns: [
            {
              title: "≤ 2MWh",
              subtitle: "小型用户",
              input: "0.4kV 输入",
              items: ["261kWh 储能柜 × N"],
            },
            {
              title: "2-10MWh",
              subtitle: "中型用户",
              input: "10kV 输入",
              items: ["升压变压器", "418kWh 储能柜 × N"],
            },
            {
              title: "≥ 5MWh",
              subtitle: "大型用户",
              input: "≥10kV 输入",
              items: ["PCS 升压一体舱", "5MWh 集装箱 × N"],
            },
          ],
          chips: [
            { name: "EMS", detail: "云端监控平台" },
            { name: "ECS", detail: "智能容量测算" },
            { name: "EDR", detail: "事件追溯" },
            { name: "OMS", detail: "工单管理" },
          ],
        },
        productsLabel: "对应产品家族",
        products: [
          {
            title: "分布式储能柜（125kW）",
            model: "iDPS100-125/261 LC",
            highlights: ["125kW", "261kWh", "AC380V", "IP55"],
          },
          {
            title: "分布式储能柜（200kW）",
            model: "iDPS200-200/418 LC",
            highlights: ["200kW", "418kWh", "AC690V", "IP55 / C4"],
          },
          {
            title: "DC 电池储能集装箱",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh", "液冷", "支持大型站点扩展"],
          },
        ],
        platform: {
          label: "平台能力支撑",
          title: "把容量决策、优化控制和运行可视化结合起来",
          items: [
            "ECS 提高容量评估和方案决策精度",
            "EMS 负责充放电策略和站点级优化",
            "OMS 提供监控、维护流程和任务可见性",
            "OTA 支撑结构化远程升级",
          ],
        },
        service: {
          label: "服务准备",
          title: "定制化交付与长期站点支持",
          items: [
            "部署前现场勘测和容量评估",
            "并网协调与项目支持逻辑",
            "适合长期运行的预防性维护计划",
          ],
        },
      },
      {
        key: "japan",
        icon: "japan",
        buttonTitle: "日本市场",
        buttonSubtitle: "紧凑场地 · 可靠性",
        problemLabel: "市场特殊需求",
        problemTitle: "日本项目对紧凑场地、可靠性、可维护性和沟通信任有更高要求",
        problemBody:
          "日本项目往往同时面对安装空间受限、设备可靠性要求高、运行纪律严格，以及对服务质量和长期维护性更敏感等现实条件，部署逻辑必须从一开始就尊重这些运行环境。",
        solutionLabel: "推荐解决路径",
        solutionTitle: "面向日本市场的部署方式",
        solutionBody:
          "公司以紧凑集成设计、以可靠性为先的系统思路、透明的数字化监控和有支撑力的服务沟通，建立面向日本项目的长期运行信心，而不是只交付硬件。",
        solutionValues: ["紧凑集成设计", "可靠性优先", "长期可维护运行", "本地化支持准备"],
        metrics: [
          { value: "IP55", label: "适应户外气候的防护等级" },
          { value: "C4", label: "高湿与沿海环境防腐等级" },
          { value: "6S+EDR", label: "专利安全体系" },
          { value: "Tokyo", label: "本地业务支持据点" },
        ],
        productsLabel: "对应产品家族",
        products: [
          {
            title: "分布式储能柜（125kW）",
            model: "iDPS100-125/261 LC",
            highlights: ["紧凑型柜体", "261kWh", "IP55", "适合受限场地"],
          },
          {
            title: "储能一体式充电机",
            model: "iEFC100-80/120-AL-C",
            highlights: ["一体化充电", "209kWh", "适合弱电网"],
          },
          {
            title: "PCS 升压一体舱（集成式）",
            model: "iBCS100-2500A/20-AC",
            highlights: ["集成部署", "20/35kV", "适合大型项目"],
          },
        ],
        platform: {
          label: "平台能力支撑",
          title: "为紧凑部署建立更可控的运行可视性",
          items: [
            "EMS 提供本地化监控和运行透明度",
            "BWS 更早发现电池异常趋势",
            "EDR 支撑客观的事故追溯和复盘",
            "OMS 支撑长期运行中的维护流程透明",
          ],
        },
        service: {
          label: "服务准备",
          title: "建立本地执行力与沟通信任",
          items: [
            "东京业务据点支撑更紧密的项目沟通",
            "跨文化沟通方法提升交付清晰度",
            "持续技术支持而非一次性交付",
            "通过伙伴协作扩大本地执行覆盖",
          ],
        },
      },
    ],
    details: [
      { title: "电网与新能源并网", problem: "新能源项目需要更强的稳定性、控制能力与调度灵活性。", approach: "MEGA POWER 结合储能与数字能源逻辑，同时支持电网侧和新能源侧应用。", benefits: ["提升新能源消纳", "支持削峰与平衡", "增强系统灵活性", "强化电网支撑"] },
      { title: "调频与电网稳定", problem: "动态调频要求极快且精准的功率调节能力。", approach: "公司通过储能调频能力支持稳定、可响应的电网运行。", benefits: ["快速响应", "精准调节", "双向功率调节", "提升运营价值"] },
      { title: "弱电网或受限场地 EV 充电", problem: "充电需求可能迅速超过电网容量和站点条件。", approach: "MEGA POWER TECHNOLOGY 将储能、充电和数字监控整合，提升部署灵活性。", benefits: ["减轻电网扩容压力", "平滑峰值需求", "支持模块化部署", "提升充电连续性"] },
      { title: "工商业成本优化", problem: "工商业用户需要在降低能耗成本的同时保持稳定运行。", approach: "公司提供基于储能的能量优化与可控电力支撑。", benefits: ["降低峰值需量压力", "增强能源灵活性", "提高连续性", "支持低碳转型"] },
      { title: "离网 / 临时 / 应急供电", problem: "远程或应急站点往往缺乏可用的永久电网接入。", approach: "MEGA POWER TECHNOLOGY 通过可运输能源系统实现快速部署与灵活供能。", benefits: ["快速部署", "灵活适应场地", "移动供电能力", "更强应急韧性"] },
      { title: "日本市场部署需求", problem: "日本项目通常对场地限制、可靠性与维护性有更高要求。", approach: "公司以紧凑集成、运行信心、沟通信任与支持准备来组织日本市场部署表达。", benefits: ["适配受限场地", "以可靠性为先", "可维护的长期运行", "更清晰的沟通支持"] },
    ],
    japanBlock: {
      label: "Japan Priority",
      title: "面向日本运行现实的能源部署表达",
      body:
        "日本市场相关内容保持务实，不夸大法规或运营承诺，重点强调韧性、受限场地、可维护性、支持准备与沟通信任。",
      bullets: ["受限场地条件", "可靠性优先", "备电与韧性意识", "可维护性与安全", "支持准备与沟通质量"],
    },
    mapping: {
      label: "解决路径逻辑",
      title: "把场景需求映射为综合方案逻辑",
      body:
        "MEGA POWER 不把设备、软件与运维拆开讲，而是把产品、数字模块与服务流程整合为同一运行体系。",
      bullets: ["按电网或站点条件匹配储能架构", "预警、监控与事件追溯", "在容量受限条件下实现充电与调度控制", "面向长期运行的服务准备"],
    },
    cta: {
      label: "Platform",
      title: "平台能力页面会进一步说明这些场景系统在运行中的监控、控制与支撑逻辑",
      body: "当场景判断已经明确，下一步更值得看的，是背后的数字化能力如何参与调度、预警、追溯和运维流程。",
      action: { label: "查看平台能力", page: "platform" },
    },
  },
  solutions: {
    metadata: {
      title: "解决方案 | MEGA POWER TECHNOLOGY",
      description:
        "覆盖大储、调频、光储充一体、可运输储能与工商业储能的五大综合解决方案。",
    },
    hero: {
      title: "MEGA POWER 解决方案体系总览",
      subtitle:
        "这里是解决方案组合的简明总览。完整的“场景到方案”匹配逻辑已经放到应用场景页面中。",
      highlight: "MEGA POWER",
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
      title: "平台能力 | MEGA POWER TECHNOLOGY",
      description:
        "覆盖预警、追溯、监控、控制、运维流程与数据安全的 MEGA POWER 数字平台页面。",
    },
    hero: {
      title: "跨越预警、控制与运维的平台能力",
      subtitle:
        "平台层不是附属功能，而是差异化能力。它连接数据可视化、事件追溯、控制逻辑与现场运维流程。",
      highlight: "平台能力",
    },
    intro: {
      label: "6S+EDR Capability",
      title: "从“被动补救”转向“主动预防”",
      body:
        "依托长期行业数据积累与本地实时处理能力，MEGA POWER 在传统储能架构基础上增加安全增强层，用于回应行业核心痛点。",
    },
    capability: {
      pills: ["AI 驱动", "毫秒级响应", "全生命周期留痕"],
      explainer: {
        label: "6S + EDR 的含义",
        body:
          "这里的 6S 指的是 MEGA POWER 架构中的 6 个核心系统层：BWS、HCS、PCS、BMS、EMS 和 OMS。EDR 则负责事件记录与故障追溯，共同构成 6S+EDR 安全架构。",
        systems: [
          { name: "BWS", title: "电池预警系统" },
          { name: "HCS", title: "高速控制系统" },
          { name: "PCS", title: "功率变换系统" },
          { name: "BMS", title: "电池管理系统" },
          { name: "EMS", title: "能源管理系统" },
          { name: "OMS", title: "运维系统" },
        ],
        recorder: { name: "EDR", title: "事件数据记录系统" },
      },
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
        "公司支持面向小型、中型和大型项目的本地化 EMS 部署，并在数据采集、传输、存储、访问控制、服务器保护和审计管理等层面建立了分层安全保障。",
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
      label: "Products",
      title: "产品页面会把这些平台能力背后的设备家族进一步展开",
      body: "看完预警、控制和运维能力之后，可以继续到产品页面了解支撑这些方案的设备家族和核心配置方式。",
      action: { label: "浏览产品家族", page: "products" },
    },
  },
  products: {
    metadata: {
      title: "产品 | MEGA POWER TECHNOLOGY",
      description:
        "覆盖电网、光储充、可运输与工商业应用的 MEGA POWER 产品家族，清晰呈现关键规格与部署适配关系。",
    },
    hero: {
      title: "支撑各类解决方案的核心产品",
      subtitle:
        "从部署角色出发浏览 MEGA POWER 核心产品家族，快速了解型号、关键参数和应用适配关系。",
      highlight: "核心产品",
    },
    intro: {
      label: "Product Families",
      title: "面向后续扩展的可读型产品架构",
      body:
        "本页帮助你从产品家族、关键参数和典型应用三个维度快速建立判断，更高效地从方案规划走向设备选型。",
    },
    related: {
      label: "Related Solutions",
      title: "产品始终作为更大方案系统的一部分呈现",
      body:
        "这些产品族分别支撑大储、调频、光储充一体、可运输储能与分布式储能架构。",
      bullets: ["电网与新能源并网", "快速调频", "弱电网与大功率充电", "可运输与应急部署", "工商业优化"],
    },
    cta: {
      label: "Services",
      title: "服务页面会进一步说明这些产品在交付后的支持方式",
      body: "设备只是系统的一部分，培训、预防性维护、备件准备和响应机制共同决定了长期运行体验。",
      action: { label: "查看服务能力", page: "services" },
    },
  },
  safety: {
    metadata: {
      title: "安全与可靠性 | MEGA POWER TECHNOLOGY",
      description:
        "涵盖多层防护、预警响应、事件追溯、运维效率以及日本市场信任表达的页面。",
    },
    hero: {
      title: "把安全、追溯与运行信心内建到系统中",
      subtitle:
        "MEGA POWER TECHNOLOGY 通过综合安全逻辑与系统化运行控制，帮助客户降低运行中的不确定性。",
      highlight: "追溯",
    },
    intro: {
      label: "Safety Architecture",
      title: "从系统层面理解防护、响应与可维护性",
      body:
        "安全能力覆盖电池预警、分区控制、事件记录、防火联动与维护可视化，而不是单点功能。",
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
        "面向日本市场，MEGA POWER 更强调运行信心、可维护性、规范沟通，以及受限场地条件下的长期稳定运行。",
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
      title: "服务 | MEGA POWER TECHNOLOGY",
      description:
        "围绕运维策略、本地化服务、伙伴协同与技术连续性的服务页面。",
    },
    hero: {
      title: "为长期合作而设计的服务与运维",
      subtitle:
        "服务是产品体验的一部分。网站把运维、沟通和支持准备视为长期系统价值的重要组成。",
      highlight: "长期合作",
    },
    intro: {
      label: "Service Strategy",
      title: "兼顾本地响应与长期运行纪律的服务逻辑",
      body: "",
    },
    strategy: [
      { title: "本地化服务团队模型", body: "MEGA POWER 围绕本地市场理解和定制化支持来组织服务能力。" },
      { title: "跨文化沟通训练", body: "把国际协同中的沟通质量视为长期合作的重要基础。" },
      { title: "持续技术支持与更新", body: "公司将交付后的持续技术支持与更新视为长期运行的一部分，而不是一次性交付后的附加项。" },
      { title: "伙伴网络扩展", body: "通过本地伙伴提升服务覆盖与响应能力。" },
    ],
    mechanism: [
      { title: "紧急故障处理", body: "7×24 紧急热线机制可支持售后紧急响应，帮助现场更快进入处置流程。" },
      { title: "预防性维护", body: "通过定期巡检和预防维护降低故障风险并保障连续运行。" },
      { title: "客户培训与支持", body: "通过线上和现场培训减少误操作带来的服务负担。" },
      { title: "备件快速响应", body: "通过备件网络缩短关键部件的修复时间，并提升服务连续性。" },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
      bullets: ["面向长期运行的可维护性", "与项目相关方的结构化沟通", "受限场地下的支持准备", "适合伙伴协同的服务逻辑"],
    },
    cta: {
      label: "About",
      title: "About 页面会把服务能力放回到整体公司定位中",
      body: "如果你想从更完整的公司视角理解交付、平台、产品和长期支持之间的关系，可以继续查看 About 页面。",
      action: { label: "查看 About 页面", page: "about" },
    },
  },
  about: {
    metadata: {
      title: "关于公司 | MEGA POWER TECHNOLOGY",
      description:
        "展示 MEGA POWER TECHNOLOGY 作为综合数字绿色能源解决方案提供商的公司定位与能力。",
    },
    hero: {
      title: "关于公司",
      subtitle:
        "面向变化中的能源格局，MEGA POWER TECHNOLOGY 以电力、储能、充电、数字控制与服务能力构建综合数字绿色能源解决方案。",
      highlight: "MEGA POWER",
    },
    intro: {
      label: "Company Introduction",
      title: "定位为综合数字绿色能源解决方案提供商，而非单一硬件厂商",
      body:
        "MEGA POWER TECHNOLOGY 不只提供硬件产品，还把综合能源架构、数字化运行能力和服务准备整合为一个完整方案。",
    },
    pillars: [
      { title: "综合解决方案逻辑", body: "把光伏、储能、充电与数字管理连接为一个统一框架。" },
      { title: "以场景为先的市场方法", body: "围绕电网、工业、交通、充电与应急等真实运行场景组织解决方案表达。" },
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
      body: "你可以通过下方公司信息开展项目交流和业务沟通。",
      action: { label: "查看公司信息", page: "about" },
    },
  },
  contact: {
    metadata: {
      title: "公司信息 | MEGA POWER TECHNOLOGY",
      description: "包含公司名称、所在地背景以及待确认联系方式字段的基础公司信息区块。",
    },
    hero: {
      title: "公司信息",
      subtitle:
        "以下为项目沟通、业务咨询和部署协调所需的公司信息。",
      highlight: "MEGA POWER",
    },
    intro: {
      label: "Company Information",
      title: "公司信息",
      body:
        "在这里查看核心公司信息，便于项目沟通与业务联系。",
    },
    items: [
      { label: "公司", value: "MEGA POWER TECHNOLOGY CO., LTD." },
      { label: "地址", value: "〒102-0084\n东京都千代田区二番町1-2\n番町ハイム637-B" },
    ],
    note:
      "如需更多联系方式，可在项目沟通过程中由相关团队进一步提供。",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6176343097136!2d139.73810179999998!3d35.6864159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c646178ab73%3A0x6a25c1427f6845a5!2zSmFwYW4sIOOAkjEwMi0wMDg0IFRva3lvLCBDaGl5b2RhIENpdHksIE5pYmFuY2jFjSwgMeKIkjIg55Wq55S644OP44Kk44OgIDYzNw!5e0!3m2!1sen!2sus!4v1773691732795!5m2!1sen!2sus",
  },
};
