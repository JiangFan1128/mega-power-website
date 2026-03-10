import type { ProductFamily } from "@/content/types";

export const productFamilies: ProductFamily[] = [
  {
    key: "grid",
    title: {
      en: "Grid & Frequency",
      ja: "系統・周波数調整",
      zh: "电网与调频",
    },
    description: {
      en: "Grid-side storage, frequency regulation, and step-up integration for utility projects.",
      ja: "系統用蓄電、周波数調整、昇圧一体化を担う大規模案件向け製品群。",
      zh: "面向公用事业项目的电网侧储能、调频与升压一体化产品族。",
    },
    products: [
      {
        family: "grid",
        name: "PCS-Integrated Step-up Container (Cluster)",
        model: "iBCS100-2500B/20-AC",
        description: {
          en: "Cluster-type PCS and step-up container for utility storage and fast-response frequency support.",
          ja: "大規模蓄電と高速な周波数応答に対応するクラスタ型 PCS 昇圧コンテナ。",
          zh: "面向大储和快速调频场景的集群式 PCS 升压一体舱。",
        },
        image: "/images/products/grid-cluster.png",
        specs: [
          { label: "Rated Power", value: "2500kW" },
          { label: "DC Channels", value: "12" },
          { label: "Voltage", value: "20kV" },
          { label: "Protection", value: "IP54 / PCS IP66" },
        ],
      },
      {
        family: "grid",
        name: "PCS-Integrated Step-up Container (Integrated)",
        model: "iBCS100-2500A/20-AC",
        description: {
          en: "Integrated PCS step-up container for microgrid and frequency regulation deployment.",
          ja: "マイクログリッドと周波数調整導入に向けた一体型 PCS 昇圧コンテナ。",
          zh: "适用于微电网与调频部署的一体式 PCS 升压舱。",
        },
        image: "/images/products/grid-integrated.png",
        specs: [
          { label: "Rated Power", value: "2750kW" },
          { label: "Grid Voltage", value: "20kV / 35kV" },
          { label: "Weight", value: "≤18T" },
          { label: "Protection", value: "IP54 / PCS IP66" },
        ],
      },
      {
        family: "grid",
        name: "DC Battery Storage Container",
        model: "iESS100-5015B2-LC",
        description: {
          en: "Liquid-cooled LFP battery container built for utility-scale and frequency regulation systems.",
          ja: "大規模蓄電と周波数調整システム向けの液冷 LFP バッテリーコンテナ。",
          zh: "面向大储与调频系统的液冷磷酸铁锂电池舱。",
        },
        image: "/images/products/dc-battery-container.png",
        specs: [
          { label: "Battery Capacity", value: "5015.9kWh" },
          { label: "Battery Type", value: "LFP" },
          { label: "Thermal", value: "Liquid cooling/heating" },
          { label: "Protection", value: "IP54" },
        ],
      },
    ],
  },
  {
    key: "pvess",
    title: {
      en: "PV-ESS-Charging",
      ja: "PV・蓄電・充電",
      zh: "光储充一体",
    },
    description: {
      en: "Hybrid products for weak-grid charging, virtual expansion, and modular EV infrastructure.",
      ja: "弱系統充電、仮想増容、モジュール導入に対応する光储充製品群。",
      zh: "面向弱电网充电、虚拟扩容和模块化 EV 基础设施的光储充产品族。",
    },
    products: [
      {
        family: "pvess",
        name: "PV-Storage Hybrid Unit",
        model: "iPES100-100-215-AC-100",
        description: {
          en: "Hybrid PV and storage unit for compact integrated charging and distributed energy sites.",
          ja: "コンパクトな統合充電拠点や分散型エネルギーサイト向けの PV 蓄電一体機。",
          zh: "适用于紧凑型充电站与分布式能源场景的光储混合设备。",
        },
        image: "/images/products/pv-storage-hybrid.png",
        specs: [
          { label: "AC Power", value: "100kW" },
          { label: "Battery", value: "215.04kWh" },
          { label: "PV Input", value: "2 x 50kW" },
          { label: "Protection", value: "IP55" },
        ],
      },
      {
        family: "pvess",
        name: "Energy Storage Integrated Charger",
        model: "iEFC100-80/120-AL-C",
        description: {
          en: "Integrated charger with onboard storage for weak-grid and space-constrained charging sites.",
          ja: "弱系統や狭小地の充電拠点向けに蓄電を内蔵した一体型充電機。",
          zh: "适用于弱电网和受限场地的储能一体式充电设备。",
        },
        image: "/images/products/storage-integrated-charger.png",
        specs: [
          { label: "Rated Power", value: "120kW" },
          { label: "Battery", value: "186 / 209kWh" },
          { label: "Output Voltage", value: "DC200-1000V" },
          { label: "Protection", value: "IP55" },
        ],
      },
      {
        family: "pvess",
        name: "Power Cabinet & High-Power Charging Terminal",
        model: "iEFC Series",
        description: {
          en: "High-power cabinet and terminal set for bus, truck, and corridor charging deployment.",
          ja: "バス・大型車・高出力充電回廊向けの高出力キャビネットと端末構成。",
          zh: "面向公交、重卡与高功率走廊场景的功率柜与终端组合。",
        },
        image: "/images/products/power-cabinet-terminal.png",
        specs: [
          { label: "Cabinet Power", value: "1440kW" },
          { label: "Output Channels", value: "12" },
          { label: "Terminal Current", value: "2 x 600A + 10 x 250A" },
          { label: "Protection", value: "IP55" },
        ],
      },
    ],
  },
  {
    key: "transport",
    title: {
      en: "Transportable",
      ja: "可搬型",
      zh: "可运输储能",
    },
    description: {
      en: "Rapid-deployment energy systems for off-grid, emergency, and temporary demand.",
      ja: "オフグリッド、緊急、仮設需要に向けた迅速導入型エネルギーシステム。",
      zh: "面向离网、应急和临时需求的快速部署型能源系统。",
    },
    products: [
      {
        family: "transport",
        name: "Grid-Connected Charging Container",
        model: "iBCS100-1725A/10-AC",
        description: {
          en: "Grid-connected charging container for transportable and temporary charging infrastructure.",
          ja: "可搬型および仮設充電インフラ向けの系統連系型充電コンテナ。",
          zh: "适用于可运输及临时充电基础设施的并网充电舱。",
        },
        image: "/images/products/grid-connected-charging-container.png",
        specs: [
          { label: "Rated Power", value: "1725kW" },
          { label: "Grid Voltage", value: "10kV" },
          { label: "Weight", value: "≤13T" },
          { label: "Protection", value: "IP54 / PCS IP66" },
        ],
      },
      {
        family: "transport",
        name: "Off-Grid Discharging Container",
        model: "iBCS100-2x2500A/10-AC",
        description: {
          en: "Containerized off-grid discharge unit for rapid power delivery in remote and emergency sites.",
          ja: "遠隔地や緊急現場で迅速に給電できるコンテナ型オフグリッド放電ユニット。",
          zh: "适用于远程及应急现场快速供电的离网放电集装箱。",
        },
        image: "/images/products/off-grid-discharging-container.png",
        specs: [
          { label: "Rated Power", value: "2510kW" },
          { label: "Off-grid Output", value: "2500kW / 0.69kV" },
          { label: "Grid Voltage", value: "10kV" },
          { label: "Protection", value: "IP54 / PCS IP66" },
        ],
      },
      {
        family: "transport",
        name: "Battery Storage Transport Vehicle",
        model: "iESS100-3343B2-LC-M",
        description: {
          en: "Mobile storage vehicle with anti-vibration design and liquid cooling for field deployment.",
          ja: "耐振動設計と液冷を備えた現場展開向けの可搬型蓄電車両。",
          zh: "具备抗振设计和液冷能力的移动储能运输车。",
        },
        image: "/images/products/battery-transport-vehicle.png",
        specs: [
          { label: "Battery Type", value: "LFP" },
          { label: "Cycles", value: "6000" },
          { label: "Unique Design", value: "Anti Vibration" },
          { label: "Protection", value: "IP54 / C4" },
        ],
      },
    ],
  },
  {
    key: "ci",
    title: {
      en: "C&I / Distributed",
      ja: "産業・分散型",
      zh: "工商业 / 分布式",
    },
    description: {
      en: "Distributed storage cabinets for demand control, stability, and lower operating cost.",
      ja: "需要制御、安定運用、コスト低減に向けた分散型蓄電キャビネット。",
      zh: "面向需量控制、稳定运行和降本的分布式储能柜产品。",
    },
    products: [
      {
        family: "ci",
        name: "Distributed Energy Storage Cabinet (125kW)",
        model: "iDPS100-125/261 LC",
        description: {
          en: "Compact liquid-cooled cabinet for smaller commercial and industrial optimization projects.",
          ja: "小規模な産業・商業最適化案件向けのコンパクト液冷キャビネット。",
          zh: "适用于中小型工商业优化项目的紧凑型液冷储能柜。",
        },
        image: "/images/products/distributed-cabinet-125.png",
        specs: [
          { label: "Rated Power", value: "125kW" },
          { label: "Capacity", value: "261kWh" },
          { label: "Grid Voltage", value: "AC380V" },
          { label: "Protection", value: "IP55" },
        ],
      },
      {
        family: "ci",
        name: "Distributed Energy Storage Cabinet (200kW)",
        model: "iDPS200-200/418 LC",
        description: {
          en: "Higher-capacity cabinet for industrial load management and site-level resilience.",
          ja: "産業負荷管理とサイトレベルのレジリエンス向け高容量キャビネット。",
          zh: "适用于工业负荷管理和站点韧性的更高容量储能柜。",
        },
        image: "/images/products/distributed-cabinet-200.png",
        specs: [
          { label: "Rated Power", value: "200kW" },
          { label: "Capacity", value: "418kWh" },
          { label: "Grid Voltage", value: "AC690V" },
          { label: "Protection", value: "IP55 / C4" },
        ],
      },
    ],
  },
];

