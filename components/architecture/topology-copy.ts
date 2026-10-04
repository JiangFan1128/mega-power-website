import type { Locale } from "@/lib/i18n";

export const topologyCopy: Record<
  Locale,
  {
    bus: string;
    busDetail: string;
    grid: string;
    gridDetail: string;
    siteTransformer: string;
    converter: string;
    converterDetail: string;
    integrated: string;
    vehicles: string[];
    notes: Record<string, string>;
  }
> = {
  en: {
    bus: "AC Bus / PCC",
    busDetail:
      "Common AC connection and switchgear; protection and metering are simplified.",
    grid: "Grid supply",
    gridDetail:
      "Site supply via the required protection and voltage interface.",
    siteTransformer: "Site supply transformer",
    converter: "Bidirectional PCS",
    converterDetail:
      "DC/AC conversion between the battery and the site AC bus.",
    integrated: "Integrated battery + PCS",
    vehicles: ["Passenger EV", "Electric bus", "Electric truck"],
    notes: {
      grid: "AC-coupled concept: PV (including its inverter) and wind connect through their own voltage interfaces to the common AC bus. Battery storage connects through its own bidirectional PCS. Purple dashed links represent commands and telemetry, not electrical power.",
      frequency:
        "Grid ↔ transformer ↔ integrated PCS + battery. EMS exchanges supervisory setpoints and telemetry; fast frequency response is handled locally by the PCS/controller. Opposite power directions represent alternative operating states.",
      ev: "Three independent station configurations. Grid input supplies the integrated charger or power-conversion system; battery storage supports the charging bus through a bidirectional interface. Vehicle charging is one-way here; V2G is not assumed. The detailed AC/DC coupling depends on the selected equipment.",
      mobile:
        "Grid-side equipment charges battery cabins; amber dashed paths represent physical battery transport, swap and return—not cables. At the destination, the battery supplies the load through off-grid conversion. Backup cabins join the same logistics cycle.",
      commercial:
        "Three independent project scales. Grid supply and storage meet at a site AC bus; the load only consumes power. Small/medium storage is represented as an integrated battery + PCS; the large system has a separate PCS and battery. Export to the grid is not assumed.",
    },
  },
  ja: {
    bus: "交流母線 / 連系点",
    busDetail: "共通の交流接続点。開閉・保護・計測設備は簡略表示です。",
    grid: "系統電源",
    gridDetail: "必要な保護設備と電圧インターフェースを介して受電します。",
    siteTransformer: "受電用変圧器",
    converter: "双方向 PCS",
    converterDetail: "蓄電池と構内交流母線の間で直流・交流を変換します。",
    integrated: "蓄電池・PCS 一体構成",
    vehicles: ["電気乗用車", "電気バス", "電気トラック"],
    notes: {
      grid: "交流結合の概念図です。太陽光（インバータを含む）と風力は個別の電圧インターフェースから共通交流母線へ接続し、蓄電池は専用の双方向 PCS を介して接続します。紫色の破線は制御指令・状態情報を示し、電力線ではありません。",
      frequency:
        "系統 ↔ 変圧器 ↔ PCS・蓄電池システム。EMS は上位指令と状態情報を連携し、高速な周波数応答は PCS・ローカル制御器が担います。電力の逆方向表示は別の運転状態を表します。",
      ev: "3 種類の独立した充電拠点構成です。系統電源は一体型充電器または電力変換システムへ入り、蓄電池は双方向インターフェースを介して充電を支援します。車両への充電のみを示し、V2G は想定していません。詳細な AC/DC 接続は採用機器によります。",
      mobile:
        "系統側で電池キャビンを充電し、現地へ搬送・交換します。オレンジ色の破線は実際の輸送・返送であり、電力ケーブルではありません。現地では独立電源用変換設備を介して負荷へ給電し、予備電池も同じ物流に加わります。",
      commercial:
        "3 種類の独立した案件規模を示します。系統と蓄電設備は構内交流母線で接続し、負荷は電力を消費します。小・中規模は蓄電池・PCS の一体構成、大規模は別置 PCS と電池です。系統への逆潮流は想定していません。",
    },
  },
  zh: {
    bus: "交流母线 / 并网点",
    busDetail: "公共交流连接点，开关、保护与计量设备作简化表示。",
    grid: "电网电源",
    gridDetail: "经所需保护与电压接口接入站点。",
    siteTransformer: "站点进线变压器",
    converter: "双向 PCS",
    converterDetail: "在电池直流侧与站点交流母线之间进行双向变流。",
    integrated: "电池 + PCS 一体系统",
    vehicles: ["电动乘用车", "电动公交车", "电动重卡"],
    notes: {
      grid: "采用交流耦合示意：光伏（含逆变环节）与风电通过各自电压接口接入公共交流母线；电池通过独立双向 PCS 接入。紫色虚线表示控制指令与状态回传，不是供电线路。",
      frequency:
        "电网 ↔ 变压器 ↔ PCS 与电池系统。EMS 负责上层指令及状态交互，快速调频由 PCS 与本地控制器执行。双向电能动画交替表示不同运行状态，不代表同时充放电。",
      ev: "三个独立充电站配置。电网输入接入一体充电器或功率变换系统，储能经双向接口支撑充电母线。车辆端只表示充电，不默认具备 V2G。具体交直流耦合方式取决于所选设备。",
      mobile:
        "电网侧设备为电池舱充电，再将电池实际运输、换装到用电侧。橙色虚线表示运输和返程，不是电缆。现场电池经离网变流设备向负载供电，备用电池纳入同一周转流程。",
      commercial:
        "三个独立项目规模：电网电源与储能在站点交流母线汇合，负载仅消耗电能。小、中型储能以电池与 PCS 一体系统表示，大型系统采用独立 PCS 与电池。不默认向公共电网反送电。",
    },
  },
};
