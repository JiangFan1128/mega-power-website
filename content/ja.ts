import type { SiteContent } from "@/content/types";

export const ja: SiteContent = {
  localeLabel: "日本語",
  navigation: {
    home: "ホーム",
    scenarios: "シナリオ",
    solutions: "ソリューション",
    platform: "プラットフォーム",
    products: "製品",
    safety: "安全・信頼",
    services: "サービス",
    about: "会社概要",
    contact: "問合せ",
  },
  footer: {
    summary:
      "MEGA POWER は蓄電、充電、デジタル制御、長期保守を一体化したグリーンエネルギー運用システムとして提案します。",
    address: "〒102-0083 東京都千代田区麹町3-10-1 TWG 麹町 5F",
    note:
      "MEGA POWER はシステム設計、デジタル制御、長期サポートを一体で提供するエネルギーパートナーです。",
  },
  home: {
    metadata: {
      title: "MEGA POWER | 統合型デジタル・グリーンエネルギーソリューション",
      description:
        "シナリオ起点で、系統用蓄電、調頻、光储充一体、デジタルプラットフォーム、安全性、日本市場対応力を伝える MEGA POWER 企業サイト。",
    },
    hero: {
      eyebrow: "MEGA POWER TECHNOLOGY",
      title: "グローバルな持続可能エネルギー開発を推進",
      subtitle:
        "MEGA POWER は太陽光、柔軟な蓄電、高効率充電、インテリジェント管理を統合し、系統、産業、輸送、充電インフラに向けたデジタル・グリーンエネルギーソリューションを提供します。",
      primaryCta: { label: "導入シナリオを見る", page: "scenarios" },
      secondaryCta: { label: "プラットフォームを見る", page: "platform" },
      stats: [
        { value: "20+", label: "業界経験 20 年以上" },
        { value: "6S+EDR", label: "特許取得済み安全システム" },
        { value: "<50ms", label: "周波数調整レイテンシ" },
        { value: "28 日", label: "事前故障検知" },
      ],
    },
    value: {
      label: "Why MEGA POWER",
      title: "中核設備からデジタル管理まで、一体のエネルギーシステムとして設計",
      body:
        "MEGA POWER は単体ハードウェア以上を求める顧客向けに設計されています。電力変換、蓄電、充電、デジタル監視、警報、O&M ロジックを統合し、導入・運用・拡張しやすいシステムを構築します。",
    },
    scenarios: {
      label: "Scenarios",
      title: "実際の運用シナリオから始め、最適なエネルギーソリューションを見極める",
      body:
        "すべての案件が同じ制約を抱えるわけではありません。再エネ連系の安定化が必要な案件もあれば、系統容量の制約、工場の電力コスト圧力、仮設や非常時のレジリエンスが優先される案件もあります。実際の運用条件から出発したほうが、適切なシステムを見つけやすくなります。",
      action: { label: "シナリオ詳細を見る", page: "scenarios" },
      guide:
        "技術分類を先に理解してもらうのではなく、まず自分の課題だと気づいてもらうための入口にします。",
      items: [
        {
          badge: "GR",
          title: "再エネ出力が不安定なとき、どうすれば系統連系をより安定させられるか？",
          preview: "蓄電とデジタルディスパッチで再エネ連系の安定性と柔軟性を高めます。",
          summary:
            "風力発電所、太陽光発電所、または系統連系型の再エネ案件では、出力変動がディスパッチ圧力、系統安定性要件、連系効率低下を引き起こします。",
          approach:
            "MEGA POWER は蓄電とデジタルディスパッチ機能を組み合わせることで、システム柔軟性、電力品質、再エネ連系性能の向上を支えます。",
          fit: "風力発電所、PV プラント、変電所、系統連系型再エネプロジェクト",
          tags: ["風力発電", "PV プラント", "系統安定", "柔軟ディスパッチ"],
        },
        {
          badge: "FS",
          title: "調頻が遅すぎるとき、どうすればもっと速く安定した応答にできるか？",
          preview: "高応答電力システムに向けて、より速く安定した調頻能力を提供します。",
          summary:
            "電力システムが周波数変動に対してより速い応答を必要とする場合、従来方式は速度、精度、継続性で限界があることがあります。",
          approach:
            "MEGA POWER の蓄電ベース調頻能力は、より高速な電力応答を支え、システム安定性と補助サービス性能の強化に役立ちます。",
          fit: "調頻案件、補助サービス、マイクログリッド、高応答電力システム",
          tags: ["周波数制御", "補助サービス", "マイクログリッド", "高速応答"],
        },
        {
          badge: "EV",
          title: "受電容量が限られていても、どうすれば高出力充電拠点を構築できるか？",
          preview: "弱系統や無電源条件でも高出力充電の導入柔軟性を高めます。",
          summary:
            "バス、物流車両、大型トラック向けの充電インフラを整備したくても、現場が弱系統、容量制約、あるいは無電源地である場合、導入難度は大きく上がります。",
          approach:
            "光储充一体システムにより、MEGA POWER は制約条件下でもより柔軟な高出力充電導入を支援し、信頼性や施工効率が重要な現場に適合します。",
          fit: "弱系統サイト、無電源サイト、バスデポ、トラック充電拠点、物流パーク",
          tags: ["弱系統", "無電源サイト", "バスデポ", "トラック充電"],
        },
        {
          badge: "MP",
          title: "遠隔地・仮設・非常用途では、どうすれば電力をすばやく配備できるか？",
          preview: "可搬型電源を遠隔地、仮設、非常用途にすばやく展開できます。",
          summary:
            "遠隔地、建設現場、鉱山、仮設イベント、災害対応に電力を供給する場合、固定インフラは遅く、硬直的で、コストも高くなりがちです。",
          approach:
            "MEGA POWER の可搬型エネルギーシステムは、より迅速な展開と柔軟な電力供給を可能にし、レジリエンスと早期復旧を重視する案件に適しています。",
          fit: "災害対応、仮設工事電源、鉱山、遠隔地、モバイル配備ニーズ",
          tags: ["災害対応", "仮設電源", "遠隔地", "迅速展開"],
        },
        {
          badge: "CI",
          title: "工場やキャンパスでは、どうすれば電力コストを下げながら供給継続性を高められるか？",
          preview: "工場やキャンパスの電力コスト低減と供給継続性向上を両立します。",
          summary:
            "工場、ビジネスパーク、病院、学校では、電力コスト、運用継続性、レジリエンス、低炭素化目標を同時にバランスさせる必要があります。",
          approach:
            "MEGA POWER の C&I 蓄電ソリューションは、負荷プロファイルを最適化し、エネルギー柔軟性を高め、重要運転条件での電力安定性を強化します。",
          fit: "産業施設、商業パーク、病院、学校、公共インフラ",
          tags: ["産業施設", "商業パーク", "病院・学校", "ピークシェービング"],
        },
      ],
    },
    solutions: {
      label: "Solutions",
      title: "電力・蓄電・充電を横断する統合ソリューション",
      body:
        "MEGA POWER は系統用蓄電、調頻、光储充一体、可搬型エネルギー、C&I 蓄電までを一つの体系で提供します。",
      items: [
        { title: "系統用エネルギー貯蔵", summary: "再エネ連系、ピークシフト、系統支援向けの MW 級システム。", bullets: ["平滑化", "ピークシフト", "ブラックスタート"] },
        { title: "調頻用蓄電", summary: "高速・高精度な電力調整で周波数安定化を支援。", bullets: ["ミリ秒応答", "双方向制御", "収益性"] },
        { title: "光储充一体", summary: "弱系統や高需要地点向けの柔軟な PV・蓄電・充電構成。", bullets: ["仮想増容", "バックアップ", "モジュール導入"] },
        { title: "可搬型エネルギー貯蔵", summary: "緊急・遠隔地・仮設現場向けの移動型エネルギー供給。", bullets: ["迅速立上げ", "柔軟配備", "現場対応力"] },
        { title: "C&I 蓄電", summary: "コスト制御、安定稼働、低炭素化に向けたサイト向け蓄電。", bullets: ["容量計画", "知能制御", "運用コスト低減"] },
      ],
    },
    platform: {
      label: "Platform",
      title: "可視化、警報、制御、O&M を一つのレイヤーで",
      body:
        "MEGA POWER のプラットフォームは、警報、追跡性、監視、ディスパッチ、保守フローを接続し、ライフサイクル全体の透明性と応答性を高めます。",
      bullets: [
        "電池警報と状態認識",
        "イベント追跡と記録",
        "エネルギー管理と制御",
        "O&M ワークフロー支援",
        "データ可視化による運用安心感",
      ],
    },
    products: {
      label: "Products",
      title: "シナリオとシステム役割で整理した中核製品",
      body:
        "導入役割ごとに主要製品ファミリーを整理し、モデル、主要仕様、適用シーンを把握しやすく構成しています。",
    },
    safety: {
      label: "Safety",
      title: "信頼性、追跡性、運用安心感を前提に設計",
      body:
        "安全性は単一機器の訴求ではなく、ハード、警報、記録、保守性を含むシステム設計として示します。",
      bullets: ["多層安全ロジック", "早期警報", "イベント追跡", "高度な O&M 支援", "信頼性重視の設計思想"],
    },
    services: {
      label: "Services",
      title: "長期運用を支えるサービス能力",
      body:
        "MEGA POWER の支援方針は、現地対応、長期保守性、異文化間コミュニケーション、日本市場の期待への適合を重視します。",
      items: [
        { title: "ローカルサービス設計", body: "現地対応、パートナー連携、保守しやすい長期運用を前提に設計します。" },
        { title: "異文化コミュニケーション", body: "国際プロジェクトでの信頼形成と運用品質を支える要素として扱います。" },
        { title: "技術継続性", body: "継続的な更新、予防保全、可視化されたワークフローで不確実性を抑えます。" },
      ],
    },
    cta: {
      label: "Contact",
      title: "MEGA POWER との対話を始める",
      body: "案件条件、導入環境、長期運用の考え方について MEGA POWER と直接ご相談ください。",
      action: { label: "お問い合わせ情報", page: "contact" },
    },
  },
  scenarios: {
    metadata: {
      title: "導入シナリオ | MEGA POWER",
      description:
        "系統連系、調頻、弱系統充電、C&I 最適化、非常電源、日本市場向け導入要件を整理したシナリオページ。",
    },
    hero: {
      title: "運用シナリオから最適な MEGA POWER ソリューションを見つける",
      subtitle:
        "顧客の実際の運用環境から出発し、その場で適したソリューション構成、製品ファミリー、プラットフォーム機能、サービス支援まで確認できる構成です。",
      highlight: "運用シナリオ",
    },
    intro: {
      label: "Scenario Logic",
      title: "一つのページで、シナリオ認識からソリューション判断まで進める",
      body:
        "以下の各シナリオでは、運用課題に対して推奨ソリューション構成、代表製品、プラットフォーム機能、安全ロジック、サービス準備をそのままつなげて示します。",
    },
    selectorLabel: "現在直面している運用シナリオを選択",
    panels: [
      {
        key: "grid",
        icon: "grid",
        buttonTitle: "系統・再エネ連系",
        buttonSubtitle: "風力発電所 · 太陽光発電所",
        problemLabel: "顧客の課題",
        problemTitle: "再エネ出力が不安定で、出力抑制リスクと連系要求への対応負荷が高まる",
        problemBody:
          "風力・太陽光は本質的に出力変動を持ちます。発電ピークと需要ピークが一致しない一方で、系統側は蓄電併設による安定化と柔軟なディスパッチを求めています。適切な構成がないと、消納率低下や出力抑制の圧力が強まります。",
        solutionLabel: "MEGA POWER の対応",
        solutionTitle: "系統側エネルギー貯蔵ソリューション",
        solutionBody:
          "MEGA POWER は系統側または発電側に MW 級蓄電を配置し、時間軸でエネルギーを移しながらデジタルディスパッチと連携して、出力平滑化、ピークシフト、系統支援、再エネ消納向上を実現します。",
        solutionValues: ["再エネ消納向上", "ピークシフト", "系統柔軟性向上", "ブラックスタート対応"],
        metrics: [
          { value: "<50ms", label: "有効 / 無効電力応答" },
          { value: "2750kW", label: "単一コンテナ最大出力" },
          { value: "5MWh", label: "単一電池キャビン容量" },
          { value: "28 日", label: "BWS 事前警報ウィンドウ" },
        ],
        architecture: {
          label: "システム構成イメージ",
          rows: [
            {
              nodes: [
                { title: "PV Station", subtitle: "Solar generation" },
                { title: "Step-up Container", subtitle: "Voltage elevation" },
                { title: "PCS Step-up Cabin", subtitle: "変換 + 昇圧", tone: "highlight" },
                { title: "Grid", subtitle: "Utility interconnection" },
              ],
            },
            {
              nodes: [
                { title: "Wind Farm", subtitle: "Wind generation" },
                { title: "Wind Step-up", subtitle: "Collection side" },
                { title: "MCS / EMS", subtitle: "デジタルディスパッチ", tone: "platform" },
              ],
            },
            {
              nodes: [
                { title: "Battery Cabin", subtitle: "5015kWh LFP" },
                { title: "PCS Step-up Cabin", subtitle: "変換 + 系統支援", tone: "highlight" },
              ],
            },
          ],
        },
        productsLabel: "対応製品ファミリー",
        products: [
          {
            title: "PCS 昇圧コンテナ（クラスタ型）",
            model: "iBCS100-2500B/20-AC",
            highlights: ["2500kW 定格", "12 DC チャネル", "20kV", "IP54 / PCS IP66"],
          },
          {
            title: "PCS 昇圧コンテナ（一体型）",
            model: "iBCS100-2500A/20-AC",
            highlights: ["2750kW 最大", "20/35kV", "≤18T", "一体導入"],
          },
          {
            title: "DC バッテリーコンテナ",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh LFP", "液冷", "IP54", "大規模案件対応"],
          },
        ],
        platform: {
          label: "プラットフォーム支援",
          title: "ディスパッチから追跡性までを見える化",
          items: [
            "HCS によるミリ秒級制御応答",
            "BWS による最大 28 日前の電池異常予兆検知",
            "EMS によるディスパッチ協調と最適化",
            "EDR による全工程イベント追跡",
          ],
        },
        service: {
          label: "サービス体制",
          title: "系統側導入を支える実行支援",
          items: [
            "系統側案件に向けたサイトエンジニアリング調整",
            "長期運転に合わせた予防保全計画",
            "重要サイト向けの予備品・遠隔支援ロジック",
          ],
        },
      },
      {
        key: "frequency",
        icon: "frequency",
        buttonTitle: "調頻・系統安定化",
        buttonSubtitle: "高速応答 · マイクログリッド",
        problemLabel: "顧客の課題",
        problemTitle: "周波数偏差に対して、従来方式より速く安定した応答が必要",
        problemBody:
          "系統周波数が目標値の周辺で揺らぐとき、火力や水力の応答では速度や精度が不足する場合があります。高応答システムには、低遅延で連続的に指令追従できる調頻能力が求められます。",
        solutionLabel: "MEGA POWER の対応",
        solutionTitle: "調頻用蓄電ソリューション",
        solutionBody:
          "MEGA POWER は蓄電変換、高速制御、イベント追跡性を組み合わせ、より速い応答、より精密な追従、より安定した補助サービス価値を実現します。",
        solutionValues: ["ミリ秒級応答", "双方向調整", "補助サービス価値", "50Hz 安定支援"],
        metrics: [
          { value: "<50ms", label: "指令応答レイテンシ" },
          { value: "2500kW", label: "双方向調整出力" },
          { value: "50Hz", label: "目標周波数追従" },
          { value: "EDR", label: "全工程イベント記録" },
        ],
        productsLabel: "対応製品ファミリー",
        products: [
          {
            title: "PCS 昇圧コンテナ（クラスタ型）",
            model: "iBCS100-2500B/20-AC",
            highlights: ["2500kW 定格", "高速調頻", "12 DC チャネル"],
          },
          {
            title: "PCS 昇圧コンテナ（一体型）",
            model: "iBCS100-2500A/20-AC",
            highlights: ["2750kW 最大", "20/35kV", "マイクログリッド対応"],
          },
          {
            title: "DC バッテリーコンテナ",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh LFP", "液冷", "高頻度サイクル対応"],
          },
        ],
        platform: {
          label: "プラットフォーム支援",
          title: "高応答調頻のための閉ループ制御",
          items: [
            "HCS によるミリ秒級同期制御",
            "EDR による調頻イベント追跡と事後分析",
            "OMS によるアラーム対応と作業指示フロー",
            "BMS / BWS による高頻度運転下の電池状態可視化",
          ],
        },
        service: {
          label: "サービス体制",
          title: "調頻性能と可用性を安定維持",
          items: [
            "重要ディスパッチ系統向け 7×24 緊急対応",
            "収益影響を抑える予防保全",
            "主要変換部品向けの迅速な予備品支援",
          ],
        },
      },
      {
        key: "ev",
        icon: "ev",
        buttonTitle: "EV 充電",
        buttonSubtitle: "弱系統 · 高出力",
        problemLabel: "顧客の課題",
        problemTitle: "高出力充電を導入したいが、サイトは弱系統・容量制約・無電源条件にある",
        problemBody:
          "バスデポ、大型車充電回廊、物流拠点、乗用車急速充電サイトでは受電容量が制約になりやすく、系統増強には時間もコストもかかります。早期導入に向けた別の方法が必要です。",
        solutionLabel: "MEGA POWER の対応",
        solutionTitle: "光储充一体ソリューション",
        solutionBody:
          "MEGA POWER は AC / DC 結合のシステム設計で、太陽光、蓄電、充電を一つのマイクログリッドとして統合し、弱系統・無電源・狭小地でも高出力充電をより柔軟に実現します。",
        solutionValues: ["仮想増容", "系統 / オフグリッド切替", "モジュール導入", "6S+EDR スマート O&M"],
        metrics: [
          { value: "200kW", label: "乗用車向け急速充電ノード" },
          { value: "240kW×N", label: "バスデポ多ガン充電" },
          { value: "480kW×N", label: "大型車超急速充電" },
          { value: "1440kW", label: "パワーキャビネット定格出力" },
        ],
        productsLabel: "対応製品ファミリー",
        products: [
          {
            title: "PV・蓄電ハイブリッドユニット",
            model: "iPES100-100-215-AC-100",
            highlights: ["100kW AC", "215.04kWh", "2×50kW PV 入力", "IP55"],
          },
          {
            title: "蓄電一体型充電器",
            model: "iEFC100-80/120-AL-C",
            highlights: ["120kW 定格", "186 / 209kWh", "DC200-1000V", "IP55"],
          },
          {
            title: "パワーキャビネット & 高出力端末",
            model: "iEFC Series",
            highlights: ["1440kW キャビネット", "12 出力", "2×600A + 10×250A"],
          },
        ],
        platform: {
          label: "プラットフォーム支援",
          title: "充電運営、監視、戦略を一つのレイヤーへ",
          items: [
            "EMS による充電・蓄電戦略ディスパッチ",
            "OMS によるサイト監視と作業管理",
            "BWS による蓄電電池の異常予兆検知",
            "EDR による充電サイトイベント記録と分析",
          ],
        },
        service: {
          label: "サービス体制",
          title: "充電サイトの継続運営を支える",
          items: [
            "現場教育で運用ミスを低減",
            "定期点検で設備故障リスクを抑制",
            "パートナー連携で地域対応を拡張",
          ],
        },
      },
      {
        key: "mobile",
        icon: "mobile",
        buttonTitle: "可搬・非常電源",
        buttonSubtitle: "オフグリッド · 仮設現場",
        problemLabel: "顧客の課題",
        problemTitle: "遠隔地や緊急現場では、恒久インフラを待たずに迅速な給電が必要",
        problemBody:
          "災害対応、仮設工事、遠隔鉱山、現場作業では、恒久的な電力インフラを先に整備できないケースが多くあります。求められるのは、移動でき、すぐに使え、早く復旧できる電力です。",
        solutionLabel: "MEGA POWER の対応",
        solutionTitle: "可搬型蓄電ソリューション",
        solutionBody:
          "MEGA POWER はコンテナ、トレーラー、車両型のエネルギーシステムを用い、迅速な電力展開を実現します。耐振動設計、液冷、モジュール型運用により、移動用途にも対応します。",
        solutionValues: ["迅速導入", "車両級耐振動", "電池周転の柔軟性", "独立オフグリッド供給"],
        metrics: [
          { value: "10,000+", label: "クイック接続インターフェース寿命" },
          { value: "2500kW", label: "オフグリッド定格出力" },
          { value: "6000", label: "95%DOD 条件での電池サイクル" },
          { value: "A1", label: "難燃材料クラス" },
        ],
        productsLabel: "対応製品ファミリー",
        products: [
          {
            title: "系統連系型充電コンテナ",
            model: "iBCS100-1725A/10-AC",
            highlights: ["1725kW", "10kV", "≤13T", "迅速導入"],
          },
          {
            title: "オフグリッド放電コンテナ",
            model: "iBCS100-2x2500A/10-AC",
            highlights: ["2510kW", "2500kW オフグリッド", "10kV", "IP54 / PCS IP66"],
          },
          {
            title: "バッテリー輸送車",
            model: "iESS100-3343B2-LC-M",
            highlights: ["6000 サイクル", "耐振動", "液冷", "IP54 / C4"],
          },
        ],
        platform: {
          label: "プラットフォーム支援",
          title: "不安定な現場条件に対応するディスパッチ知能",
          items: [
            "SCS による急変負荷時の安定制御",
            "DMS 的なディスパッチで移動型充放電を調整",
            "BWS / EDR による現場警報と追跡性",
            "OMS による遠隔サービスフロー可視化",
          ],
        },
        service: {
          label: "サービス体制",
          title: "緊急・仮設導入を支える迅速対応",
          items: [
            "高優先度案件向け 7×24 緊急ホットライン",
            "予備品ネットワークで復旧時間を短縮",
            "現地教育で立上げ・運用ミスを抑制",
          ],
        },
      },
      {
        key: "commercial",
        icon: "commercial",
        buttonTitle: "C&I 最適化",
        buttonSubtitle: "工場 · キャンパス",
        problemLabel: "顧客の課題",
        problemTitle: "電力コストは上昇を続け、停電や変動は事業継続性を直接脅かす",
        problemBody:
          "工場、商業施設、病院、学校、産業パークでは、電力コスト低減、ピーク需要抑制、停電時のレジリエンス向上、脱炭素対応を同時に考える必要があります。",
        solutionLabel: "MEGA POWER の対応",
        solutionTitle: "工業・商業向け蓄電ソリューション",
        solutionBody:
          "MEGA POWER はキャビネット単位から複数 MWh クラスまで柔軟に構成でき、負荷最適化、バックアップ強化、低炭素化に向けた制御可能な運用を支えます。",
        solutionValues: ["ピークシェービング", "バックアップレジリエンス", "柔軟な容量拡張", "低炭素転換"],
        metrics: [
          { value: "≤2MWh", label: "小規模：261kWh キャビネット × N" },
          { value: "2-10MWh", label: "中規模：418kWh キャビネット × N" },
          { value: "≥5MWh", label: "大規模：大容量キャビン × N" },
          { value: "≥88%", label: "システム変換効率" },
        ],
        productsLabel: "対応製品ファミリー",
        products: [
          {
            title: "分散型蓄電キャビネット（125kW）",
            model: "iDPS100-125/261 LC",
            highlights: ["125kW", "261kWh", "AC380V", "IP55"],
          },
          {
            title: "分散型蓄電キャビネット（200kW）",
            model: "iDPS200-200/418 LC",
            highlights: ["200kW", "418kWh", "AC690V", "IP55 / C4"],
          },
          {
            title: "DC バッテリーコンテナ",
            model: "iESS100-5015B2-LC",
            highlights: ["5015kWh", "液冷", "大規模拡張対応"],
          },
        ],
        platform: {
          label: "プラットフォーム支援",
          title: "容量判断、最適制御、運用可視化を一体化",
          items: [
            "ECS によるより精度の高い容量判断",
            "EMS による充放電戦略とサイト最適化",
            "OMS による監視と保守ワークフロー可視化",
            "OTA による構造化された遠隔更新",
          ],
        },
        service: {
          label: "サービス体制",
          title: "カスタム導入と長期サイト支援",
          items: [
            "導入前の現地調査と容量評価",
            "系統連系調整とプロジェクト支援",
            "長期運用に向けた予防保全計画",
          ],
        },
      },
      {
        key: "japan",
        icon: "japan",
        buttonTitle: "日本市場",
        buttonSubtitle: "狭小地 · 信頼性",
        problemLabel: "市場要件",
        problemTitle: "日本案件では狭小地、信頼性、保守性、コミュニケーション品質への要求が高い",
        problemBody:
          "日本の案件では、設置スペースの制約、高い信頼性要求、厳格な運用姿勢、サービス品質と長期保守性への高い感度が同時に存在します。導入ロジックは最初からその実態を前提にすべきです。",
        solutionLabel: "MEGA POWER の対応",
        solutionTitle: "日本市場向け導入アプローチ",
        solutionBody:
          "MEGA POWER は、コンパクト統合設計、信頼性重視のシステム思想、透明なデジタル監視、長期運用を支えるサービスコミュニケーションを通じて、日本向けの運用安心感を形成します。",
        solutionValues: ["コンパクト統合設計", "信頼性優先", "長期保守運用", "ローカル支援準備"],
        metrics: [
          { value: "IP55", label: "屋外気候に対応する保護等級" },
          { value: "C4", label: "高湿・沿岸環境向け防食クラス" },
          { value: "6S+EDR", label: "特許安全アーキテクチャ" },
          { value: "Tokyo", label: "現地ビジネス拠点" },
        ],
        productsLabel: "対応製品ファミリー",
        products: [
          {
            title: "分散型蓄電キャビネット（125kW）",
            model: "iDPS100-125/261 LC",
            highlights: ["コンパクト筐体", "261kWh", "IP55", "狭小地向け"],
          },
          {
            title: "蓄電一体型充電器",
            model: "iEFC100-80/120-AL-C",
            highlights: ["統合充電", "209kWh", "弱系統適合"],
          },
          {
            title: "PCS 昇圧コンテナ（一体型）",
            model: "iBCS100-2500A/20-AC",
            highlights: ["一体導入", "20/35kV", "大規模案件対応"],
          },
        ],
        platform: {
          label: "プラットフォーム支援",
          title: "狭小地導入でも運用リスクを見える化しやすくする",
          items: [
            "EMS によるローカル監視と運用透明性",
            "BWS による電池異常傾向の早期検知",
            "EDR による客観的な事故追跡とレビュー",
            "OMS による長期運用時の保守フロー可視化",
          ],
        },
        service: {
          label: "サービス体制",
          title: "ローカル実行力とコミュニケーション信頼",
          items: [
            "東京拠点を基盤とした密な案件調整",
            "異文化コミュニケーションで説明品質を向上",
            "一度きりではない継続技術支援",
            "パートナー連携による地域実行カバレッジ",
          ],
        },
      },
    ],
    details: [
      { title: "系統・再エネ連系", problem: "再エネ案件では、安定性、制御性、需給柔軟性が求められます。", approach: "MEGA POWER は蓄電とデジタル制御を組み合わせ、系統側・発電側双方の用途を支えます。", benefits: ["再エネ導入率向上", "ピークシフト対応", "柔軟性向上", "系統支援強化"] },
      { title: "調頻・系統安定化", problem: "周波数制御には極めて高速かつ高精度な電力調整が必要です。", approach: "MEGA POWER は蓄電ベースの調頻能力で安定した系統応答を支えます。", benefits: ["高速応答", "精密制御", "双方向調整", "運用価値向上"] },
      { title: "弱系統・狭小地の EV 充電", problem: "充電需要は系統容量や敷地条件をすぐに上回ります。", approach: "MEGA POWER は蓄電、充電、デジタル監視を一体化し、柔軟な充電導入を実現します。", benefits: ["系統増強圧力の低減", "需要ピーク平準化", "モジュール展開", "充電継続性向上"] },
      { title: "C&I コスト最適化", problem: "産業・商業ユーザーはコスト低減と安定運用の両立を必要とします。", approach: "MEGA POWER は蓄電によるエネルギー最適化と制御可能な電力支援を提供します。", benefits: ["ピーク需要抑制", "エネルギー柔軟性向上", "継続性強化", "低炭素化支援"] },
      { title: "オフグリッド・非常・仮設電源", problem: "遠隔地や緊急現場では恒久系統が利用できない場合があります。", approach: "MEGA POWER は可搬型システムで迅速立上げと柔軟な給電を実現します。", benefits: ["迅速導入", "現場適応性", "移動電源支援", "レジリエントな非常対応"] },
      { title: "日本市場特有の導入要件", problem: "日本では敷地制約、信頼性、保守性に関する調整がより厳しく求められます。", approach: "MEGA POWER はコンパクト統合、運用安心感、コミュニケーション信頼、支援体制で日本向け導入を設計します。", benefits: ["狭小地適合", "信頼性重視計画", "保守しやすい長期運用", "明確なコミュニケーション"] },
    ],
    japanBlock: {
      label: "Japan Priority",
      title: "日本の運用実態に合わせたエネルギー導入",
      body:
        "日本向けの表現は実務重視です。レジリエンス、狭小地、保守性、支援体制、コミュニケーション信頼を軸に整理します。",
      bullets: ["狭小地条件", "信頼性優先", "バックアップ志向", "保守性と安全性", "支援体制と対話品質"],
    },
    mapping: {
      label: "How MEGA POWER Responds",
      title: "シナリオ需要を統合ソリューションへ接続",
      body:
        "MEGA POWER は機器、ソフトウェア、O&M を分離せず、製品、デジタル機能、サービス運用を一つの仕組みとして提案します。",
      bullets: ["系統・負荷条件に合わせた蓄電アーキテクチャ", "警報・監視・追跡性", "容量制約下での充電・制御", "長期運用を前提にしたサービス設計"],
    },
    cta: {
      label: "Next Step",
      title: "各シナリオを支える製品ファミリーを見る",
      body: "シナリオとソリューション構成を確認した後は、製品ページでパラメータシートと機器ファミリーを確認できます。",
      action: { label: "製品を見る", page: "products" },
    },
  },
  solutions: {
    metadata: {
      title: "ソリューション | MEGA POWER",
      description:
        "系統用蓄電、調頻、光储充一体、可搬型、C&I 蓄電を網羅する 5 つの統合ソリューション。",
    },
    hero: {
      title: "MEGA POWER ソリューション体系の概要",
      subtitle:
        "このページは主要ソリューションの要約です。シナリオからソリューションへの完全な対応関係は Scenarios ページに集約しています。",
      highlight: "MEGA POWER",
    },
    intro: {
      label: "Solution Framework",
      title: "まず主要なソリューション構成を簡潔に把握する",
      body:
        "このページは全体像の把握用です。顧客環境から最適な構成を判断したい場合は、Scenarios ページへ戻る構成にしています。",
    },
    items: [
      { title: "系統用エネルギー貯蔵", summary: "系統側・発電側に導入される MW 級システム。再エネ連系とピーク移行を支援。", bullets: ["風力・太陽光", "ピークシフト", "柔軟性とレジリエンス"] },
      { title: "調頻用蓄電", summary: "目標周波数維持のため、アクティブパワーを高速に調整する蓄電システム。", bullets: ["ミリ秒応答", "高精度追従", "即時出力"] },
      { title: "光储充一体", summary: "無電源地、弱系統、高出力充電向けの PV・蓄電・EV 充電マイクログリッド。", bullets: ["仮想増容", "安定供給", "スマート O&M"] },
      { title: "可搬型エネルギー貯蔵", summary: "コンテナ、トレーラー、車両等で、必要な場所へ電力を届ける可搬型システム。", bullets: ["緊急支援", "遠隔地供給", "仮設対応"] },
      { title: "C&I 蓄電", summary: "企業、商業施設、病院、学校などのコスト制御と安定運用を支える蓄電システム。", bullets: ["コスト管理", "電力安定", "グリーン転換"] },
    ],
    cta: {
      label: "Scenarios",
      title: "完全なシナリオ対応ページに戻る",
      body: "Scenarios ページが、運用環境、ソリューション構成、製品ファミリー、プラットフォーム支援、サービス準備を一体で確認する主ページです。",
      action: { label: "シナリオを見る", page: "scenarios" },
    },
  },
  platform: {
    metadata: {
      title: "プラットフォーム | MEGA POWER",
      description:
        "警報、追跡性、監視、制御、O&M フロー、データ安全性を扱う MEGA POWER のデジタルプラットフォームページ。",
    },
    hero: {
      title: "警報、制御、O&M をつなぐデジタルプラットフォーム能力",
      subtitle:
        "プラットフォームは付属機能ではなく差別化要素です。データ可視化、追跡性、制御ロジック、現場保守をつなげます。",
      highlight: "プラットフォーム能力",
    },
    intro: {
      label: "6S+EDR Capability",
      title: "「事後対応」から「予防主導」へ",
      body:
        "長期の業界データ蓄積とローカルリアルタイム処理を基盤に、MEGA POWER は従来の蓄電アーキテクチャへ安全強化レイヤーを加え、業界の主要課題に対応します。",
    },
    capability: {
      pills: ["AI Driven", "ミリ秒応答", "全生命周期ログ"],
      base: {
        label: "安全基盤",
        title: "リスク予兆と事故トレーサビリティ",
        items: [
          {
            name: "EDR",
            title: "事故データ記録システム",
            description:
              "蓄電システムのブラックボックスとして全工程データを記録し、故障分析と責任判断の客観的根拠を提供します。",
          },
          {
            name: "BWS",
            title: "電池警報システム",
            description:
              "知能アルゴリズムによりリスクの萌芽段階で警報を発し、「事後処理」から「事前防止」へ運用を移行します。",
          },
        ],
      },
      control: {
        label: "制御コア",
        title: "高速応答と物理分離",
        items: [
          {
            name: "HCS",
            title: "高速制御システム",
            description:
              "ローカルリアルタイム処理によりミリ秒級応答を実現し、異常変動時にも即座に保護動作を行います。",
          },
          {
            name: "PCS",
            title: "電力変換システム",
            description:
              "多支路の物理分離設計により故障拡散範囲を抑え、連鎖反応のリスクを低減します。",
          },
        ],
      },
      brain: {
        label: "システムブレイン",
        title: "監視、最適化、ライフサイクル管理",
        items: [
          {
            name: "BMS",
            title: "電池管理システム",
            description:
              "セル電圧や温度などをリアルタイム監視し、PACK レベルの消防連動と合わせて安全運転領域を維持します。",
          },
          {
            name: "EMS",
            title: "エネルギー管理システム",
            description:
              "充放電戦略を最適化するステーション側の頭脳として、運用効率と寿命の両立を図ります。",
          },
          {
            name: "OMS",
            title: "運用保守管理システム",
            description:
              "デジタル監視とプロセス型保守により電站状態の透明性を高め、全生命周期の追跡性を支えます。",
          },
        ],
      },
    },
    modules: [
      { name: "BWS", title: "Battery Warning System", description: "データ駆動の早期異常検知と電池クラスタリスク把握。" },
      { name: "EDR", title: "Event Data Recorder", description: "事故追跡と故障原因解析のための多ソース記録。" },
      { name: "EMS", title: "Energy Management System", description: "ディスパッチ、最適化、区画安全管理を担う制御層。" },
      { name: "OMS", title: "Operations & Maintenance System", description: "リアルタイム監視、作業指示、進捗可視化。" },
      { name: "HCS", title: "High-speed Control System", description: "低遅延同期による高性能制御。" },
      { name: "BMS", title: "Battery Management System", description: "コネクタ温度検知と PACK レベル防火連携。" },
      { name: "PCS", title: "Power Conversion System", description: "電気的・安全的分離を支える変換設計。" },
    ],
    management: {
      label: "デジタルエネルギー管理プラットフォーム",
      title: "データ蓄積、可視化分析、O&M 協調を一つの平台レイヤーに統合",
      body:
        "このプラットフォームは大規模から小規模までの蓄電システム管理に対応し、イベント記録、戦略ディスパッチ、監視、警報、O&M 実行を一体のデジタル運用面として整理します。",
      systems: ["EDR", "ECS", "EMS", "OMS", "BWS"],
      highlights: [
        {
          title: "Comprehensive Data Storage",
          body: "電站データ、運転イベント、ライフサイクル状態を一つのプラットフォームに集約し、情報の分断を減らします。",
        },
        {
          title: "Visualized Analysis",
          body: "可視化画面、トレンド、警報を通じて、運用状況、異常、安心材料を把握しやすくします。",
        },
        {
          title: "Intelligent Strategy Dispatch",
          body: "EMS ロジックで充放電戦略、系統分区、ディスパッチ実行をつなぎ、より文脈を持った制御を支えます。",
        },
        {
          title: "Precise Early Warning",
          body: "BWS と運用データを組み合わせ、異常兆候をより早く捉え、問題が大きくなる前に対応しやすくします。",
        },
        {
          title: "Safety Analysis",
          body: "イベント追跡、多ソース記録、一貫したシステム可視性により、故障解析と安全分析を支えます。",
        },
        {
          title: "Efficiency in O&M and Monitoring",
          body: "監視、作業指示生成、進捗可視化を結び付け、O&M をより構造化し、見える化します。",
        },
      ],
    },
    security: {
      label: "EMS オンプレミス展開とデータ安全保障",
      title: "案件規模に応じたローカル配備と多層データ保護",
      body:
        "資料では、小規模・中規模・大規模案件に応じた EMS ローカル配備と、データ収集、伝送、保存、機能アクセス、サーバ保護、コンプライアンス面の安全設計が示されています。",
      deployment: [
        "小規模配備：1MWh 未満",
        "中規模配備：1MWh から 5MWh",
        "大規模配備：5MWh 超",
      ],
      safeguards: [
        {
          title: "E2EE",
          body: "伝送時は TLS 1.3、保存時は AES-256 を用い、収集から保存までの各段階でデータ保護を強化します。",
        },
        {
          title: "RBAC",
          body: "ロールベースのアクセス制御により、各担当者は自身の職責に応じたデータと API のみにアクセスします。",
        },
        {
          title: "MFA",
          body: "パスワードと動的認証を組み合わせた多要素認証で、アカウント保護を強化します。",
        },
        {
          title: "Log Audit",
          body: "改ざん困難なログレイヤーに操作記録を残し、時間、利用者、操作種別ごとの監査確認を支えます。",
        },
      ],
    },
    cta: {
      label: "Trust Layer",
      title: "プラットフォーム能力がソリューションの信頼性にどうつながるかを見る",
      body: "警報、追跡性、ワークフローは MEGA POWER の信頼価値の中心です。",
      action: { label: "シナリオを見る", page: "scenarios" },
    },
  },
  products: {
    metadata: {
      title: "製品 | MEGA POWER",
      description:
        "系統、光储充、可搬型、C&I の用途ごとに整理した MEGA POWER 製品群。主要仕様と導入適合性をわかりやすく紹介。",
    },
    hero: {
      title: "各ソリューションを支える中核製品",
      subtitle:
        "導入役割ごとに MEGA POWER の主要製品ファミリーを比較し、モデル、主要仕様、適用シーンを把握できます。",
      highlight: "中核製品",
    },
    intro: {
      label: "Product Families",
      title: "今後の拡張に耐える、読みやすい製品アーキテクチャ",
      body:
        "このページでは、製品ファミリー、主要仕様、代表的な適用先を整理し、ソリューション検討から機器選定までをよりスムーズに進められるようにしています。",
    },
    related: {
      label: "Related Solutions",
      title: "製品は単体ではなく、ソリューション構成要素として提示",
      body:
        "各製品群は、系統用、調頻、光储充、可搬型、分散型蓄電のアーキテクチャを支えます。",
      bullets: ["系統・再エネ連系", "高速調頻", "弱系統・高出力充電", "可搬・非常対応", "C&I 最適化"],
    },
    cta: {
      label: "Platform + Service",
      title: "ハードウェアはデジタル制御と保守体制と組で価値を持つ",
      body: "各製品ファミリーは、MEGA POWER のデジタルプラットフォーム、安全設計、長期サポート体制と連動して価値を発揮します。",
      action: { label: "サービスを見る", page: "services" },
    },
  },
  safety: {
    metadata: {
      title: "安全性・信頼性 | MEGA POWER",
      description:
        "多層保護、警報と対応、イベント追跡、O&M 効率、日本市場向け信頼メッセージを扱うページ。",
    },
    hero: {
      title: "安全性、追跡性、運用安心感をシステムに内蔵",
      subtitle:
        "MEGA POWER は、統合された安全ロジックと運用設計によって不確実性を減らす企業として提示されます。",
      highlight: "追跡性",
    },
    intro: {
      label: "Safety Architecture",
      title: "保護、対応、保守性をシステム全体で捉える",
      body:
        "安全性は、電池警報、区画制御、イベント記録、防火連携、保守可視化にまたがる物語として整理します。",
    },
    items: [
      { title: "多層保護", body: "セル、PACK、システム、運用レイヤーまで含めた保護思想を示します。" },
      { title: "警報と対応", body: "警報、記録、制御を組み合わせ、故障認識と対応速度を高めます。" },
      { title: "イベント追跡", body: "EDR により、事故後の原因把握と説明責任を強化します。" },
      { title: "O&M 効率", body: "監視と作業指示により、受動的保守から構造化された保守へ移行します。" },
    ],
    japan: {
      label: "Japan-facing Trust",
      title: "日本市場の期待に沿った信頼性メッセージ",
      body:
        "日本向けには、運用安心感、保守性、規律あるコミュニケーション、狭小地での長期安定運用を重視して表現します。",
      bullets: ["コンパクト導入での安心感", "ライフサイクル全体の保守性", "警報と対応の明確性", "追跡性による信頼形成"],
    },
    cta: {
      label: "Service Readiness",
      title: "安全性と保守性がサービス戦略へどうつながるかを見る",
      body: "プラットフォーム価値は、現実的な O&M 実行とローカル支援体制が伴って初めて成立します。",
      action: { label: "サービスを見る", page: "services" },
    },
  },
  services: {
    metadata: {
      title: "サービス | MEGA POWER",
      description:
        "O&M 戦略、ローカルサービス、パートナー連携、技術継続性を扱うページ。",
    },
    hero: {
      title: "長期パートナーシップのためのサービスと O&M",
      subtitle:
        "サービスは製品体験の一部です。O&M、コミュニケーション、支援準備を長期価値の中核として扱います。",
      highlight: "長期パートナーシップ",
    },
    intro: {
      label: "Service Strategy",
      title: "ローカル対応と長期運用品質を両立するサービス設計",
      body: "",
    },
    strategy: [
      { title: "ローカルサービスチームモデル", body: "市場理解と現地対応を前提としたサービス設計です。" },
      { title: "異文化コミュニケーショントレーニング", body: "国際協業の品質と信頼形成を支える要素です。" },
      { title: "継続的技術支援と更新", body: "導入後も継続する技術支援を重視します。" },
      { title: "パートナーネットワーク拡張", body: "現地パートナーを通じて対応力とカバレッジを高めます。" },
    ],
    mechanism: [
      { title: "障害時の緊急対応", body: "資料では 7 x 24 の緊急ホットラインモデルが示されています。" },
      { title: "予防保全", body: "定期点検と予防保全で障害リスクを下げ、継続運用を支えます。" },
      { title: "顧客教育と支援", body: "オンライン・現地教育で誤操作由来の負荷を減らします。" },
      { title: "交換部品の迅速対応", body: "重要部品の修復時間短縮を目的とした部材対応思想を示します。" },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
      bullets: ["長期運用に耐える保守性", "関係者との構造化された対話", "狭小地条件下での支援準備", "パートナー協業しやすい運用"],
    },
    cta: {
      label: "Company",
      title: "サービス能力を会社全体の位置付けで見る",
      body: "会社情報ページでは、ミッション、統合能力、長期サービスロジックをまとめます。",
      action: { label: "会社情報へ", page: "about" },
    },
  },
  about: {
    metadata: {
      title: "会社情報 | MEGA POWER",
      description:
        "統合型デジタル・グリーンエネルギー企業としての位置付けとミッションを示す MEGA POWER 会社情報ページ。",
    },
    hero: {
      title: "MEGA POWER について",
      subtitle:
        "電力、蓄電、充電、デジタル制御、サービス能力を組み合わせる統合型デジタル・グリーンエネルギーソリューション企業。",
      highlight: "MEGA POWER",
    },
    intro: {
      label: "Company Introduction",
      title: "単なるハードウェア企業ではなく、統合ソリューションプロバイダーとして位置付け",
      body:
        "MEGA POWER の企業ストーリーは、統合エネルギー設計、デジタル運用能力、サービス準備を結びつけて構成します。",
    },
    pillars: [
      { title: "統合ソリューションロジック", body: "太陽光、蓄電、充電、デジタル管理を一体の枠組みで接続します。" },
      { title: "シナリオ起点の市場アプローチ", body: "製品分類ではなく、系統、産業、輸送、充電、非常用途から整理します。" },
      { title: "プラットフォームと安全性の差別化", body: "警報、追跡性、監視、O&M ロジックを戦略能力として扱います。" },
      { title: "運用支援志向", body: "長期保守性とローカル対応をブランドストーリーの中に組み込みます。" },
    ],
    japan: {
      label: "",
      title: "",
      body: "",
    },
    cta: {
      label: "Contact",
      title: "ビジネス対話を始める",
      body: "以下の会社情報を通じて、案件相談やビジネスコミュニケーションを開始できます。",
      action: { label: "会社情報へ", page: "about" },
    },
  },
  contact: {
    metadata: {
      title: "会社情報 | MEGA POWER",
      description: "会社名、所在地文脈、確認待ちの連絡先項目を含む基本会社情報セクション。",
    },
    hero: {
      title: "お問い合わせ",
      subtitle:
        "案件相談、ビジネス連絡、導入調整に向けた会社情報をご案内します。",
      highlight: "お問い合わせ",
    },
    intro: {
      label: "Company Information",
      title: "会社情報",
      body: "MEGA POWER との案件相談やビジネスコミュニケーションに必要な基本情報をご確認いただけます。",
    },
    items: [
      { label: "会社名", value: "MEGA POWER CO., LTD" },
      { label: "住所", value: "〒102-0083\n東京都千代田区麹町3-10-1\nTWG 麹町 5F" },
    ],
    note:
      "追加の連絡先が必要な場合は、案件調整の過程で MEGA POWER チームより個別にご案内します。",
    mapEmbed:
      "https://www.google.com/maps?q=%E3%80%92102-0083%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E9%BA%B9%E7%94%BA3-10-1%20TWG%20%E9%BA%B9%E7%94%BA%205F&output=embed",
  },
};
