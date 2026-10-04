import type { ScenarioDecisionArchitecture } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { topologyCopy } from "./topology-copy";

export type ModelKind =
  | "busbar"
  | "solar"
  | "wind"
  | "grid"
  | "transformer"
  | "battery"
  | "control"
  | "charger"
  | "car"
  | "bus"
  | "truck"
  | "factory";
export type SceneNode = {
  id: string;
  title: string;
  detail: string;
  model: ModelKind;
  x: number;
  z: number;
  scale?: number;
  items?: string[];
};
export type SceneLink = {
  from: string;
  to: string;
  kind: "power" | "data" | "transport";
  bidirectional?: boolean;
  via?: [number, number, number][];
};
export type SceneLayout = { nodes: SceneNode[]; links: SceneLink[] };

// Conceptual architecture, not a vendor electrical single-line diagram.
// AC coupling: https://sam.nrel.gov/images/webinar_files/sam-webinars-2020-battery-fom.pdf
// Battery-buffered charging: https://docs.nlr.gov/docs/fy24osti/89493.pdf
// Model roles and connectivity stay independent of translated titles.
export function architectureLayout(
  architecture: ScenarioDecisionArchitecture,
  scenario: string,
  locale: Locale,
): SceneLayout {
  const text = topologyCopy[locale];
  const nodes: SceneNode[] = [];
  const links: SceneLink[] = [];
  const link = (
    from: string,
    to: string,
    kind: SceneLink["kind"] = "power",
    bidirectional = false,
  ) => links.push({ from, to, kind, bidirectional });
  if (architecture.kind === "flow") {
    const roles: ModelKind[][] =
      scenario === "frequency"
        ? [
            ["grid", "transformer", "battery"],
            ["control", "control"],
          ]
        : [
            ["solar", "transformer", "transformer", "grid", "control"],
            ["wind", "transformer"],
            ["battery", "transformer"],
          ];
    architecture.rows.forEach((row, r) => {
      row.nodes.forEach((node, n) => {
        const x =
          scenario === "frequency"
            ? (n - (row.nodes.length - 1) / 2) * 5
            : r === 0
              ? (n - 2) * 3.5
              : r === 1
                ? -4 + n * 3.5
                : 2 + n * 3.5;
        nodes.push({
          id: `${r}-${n}`,
          title: node.title,
          detail: node.subtitle ?? "",
          model: roles[r]?.[n] ?? "battery",
          x,
          z: r === 0 ? -2 : r === 1 ? 2 : 6,
        });
      });
    });
    if (scenario === "frequency") {
      link("0-0", "0-1", "power", true);
      link("0-1", "0-2", "power", true);
      nodes.find((n) => n.id === "0-2")!.detail += ` · ${text.integrated}`;
      link("1-0", "1-1", "data", true);
      link("1-1", "0-2", "data", true);
    } else {
      // Three aligned source/interface lanes feed a shared collection bus.
      const positions: Record<string, [number, number]> = {
        "0-0": [-6, -4],
        "0-1": [-2, -4],
        "1-0": [-6, 0],
        "1-1": [-2, 0],
        "2-0": [-6, 4],
        "2-1": [-2, 4],
        "0-2": [2, 0],
        "0-3": [6, 0],
        "0-4": [6, -4],
      };
      for (const node of nodes) [node.x, node.z] = positions[node.id];
      // A shared AC bus replaces the duplicate PCS in the old serial drawing.
      const bus = nodes.find((n) => n.id === "0-2")!;
      Object.assign(bus, {
        model: "busbar",
        title: text.bus,
        detail: text.busDetail,
      });
      link("0-0", "0-1");
      link("0-1", "0-2");
      link("1-0", "1-1");
      link("1-1", "0-2");
      link("2-0", "2-1", "power", true);
      link("2-1", "0-2", "power", true);
      link("0-2", "0-3", "power", true);
      for (const id of ["0-0", "1-0", "2-1", "0-2"])
        link("0-4", id, "data", true);
      for (const edge of links) {
        const from = nodes.find((node) => node.id === edge.from)!;
        const to = nodes.find((node) => node.id === edge.to)!;
        if (edge.kind === "power" && edge.to === "0-2" && from.z !== 0)
          edge.via = [
            [0.6, 0.25, from.z],
            [0.6, 0.25, 0],
          ];
        if (edge.kind === "data")
          edge.via = [
            [from.x, 3.6, -5.8],
            [to.x, 3.6, -5.8],
            [to.x, 3.1, to.z],
          ];
      }
    }
  } else if (architecture.kind === "turnover") {
    const rows = [
      architecture.topNodes,
      architecture.middleNodes,
      architecture.bottomNodes,
    ];
    const roles: ModelKind[][] = [
      ["grid", "transformer", "battery"],
      ["truck", "battery"],
      ["battery", "transformer", "factory"],
    ];
    rows.forEach((row, r) =>
      row.forEach((node, n) => {
        nodes.push({
          id: `${r}-${n}`,
          title: node.title,
          detail: node.subtitle ?? "",
          model: roles[r][n],
          x: (n - (row.length - 1) / 2) * 5,
          z: (r - 1) * 4,
        });
        if (n && r !== 1) link(`${r}-${n - 1}`, `${r}-${n}`);
      }),
    );
    link("0-2", "1-0", "transport", true);
    link("1-0", "2-0", "transport", true);
    link("1-1", "1-0", "transport", true);
  } else if (architecture.kind === "tiers") {
    architecture.tiers.forEach((tier, n) => {
      const x = (n - 1) * 5.6;
      nodes.push({
        id: `${n}-grid`,
        title: text.grid,
        detail: text.gridDetail,
        model: "grid",
        x: x - 1.5,
        z: -4.5,
      });
      tier.items.forEach((item, i) => {
        const model: ModelKind =
          n === 0
            ? "charger"
            : i === 0
              ? "battery"
              : i === 1
                ? "transformer"
                : "charger";
        nodes.push({
          id: `${n}-${i}`,
          title: item,
          detail: `${tier.title} · ${tier.power} · ${tier.description}`,
          model,
          x: n > 0 && i === 0 ? x + 1.3 : x,
          z: n === 0 ? 1 : i === 0 ? -4.5 : i === 1 ? 0 : 3.5,
        });
        if (i) link(`${n}-${i - 1}`, `${n}-${i}`, "power", i === 1);
        if (i === (n === 0 ? 0 : 1)) link(`${n}-grid`, `${n}-${i}`);
      });
      const vehicleId = `${n}-vehicle`;
      nodes.push({
        id: vehicleId,
        title: text.vehicles[n],
        detail: `${tier.power} · ${tier.description}`,
        items: tier.items,
        model: (["car", "bus", "truck"] as ModelKind[])[n],
        x,
        z: 7,
      });
      link(`${n}-${tier.items.length - 1}`, vehicleId);
    });
  } else {
    architecture.columns.forEach((column, n) => {
      const x = (n - 1) * 7;
      const detail = `${column.title} · ${column.input}`;
      nodes.push({
        id: `${n}-grid`,
        title: text.grid,
        detail,
        model: "grid",
        x: x - 1.4,
        z: -5,
      });
      nodes.push({
        id: `${n}-bus`,
        title: text.bus,
        detail: text.busDetail,
        model: "busbar",
        x: x - 1.4,
        z: 0,
      });
      nodes.push({
        id: `${n}-load`,
        title: column.subtitle,
        detail,
        model: "factory",
        x: x - 1.4,
        z: 4.5,
        scale: 0.75 + n * 0.15,
      });
      nodes.push({
        id: `${n}-battery`,
        title: column.items[column.items.length - 1],
        detail: n < 2 ? `${detail} · ${text.integrated}` : detail,
        model: "battery",
        x: x + 1.7,
        z: 4.5,
      });
      link(`${n}-bus`, `${n}-load`);
      if (n === 1) {
        nodes.push({
          id: `${n}-transformer`,
          title: text.siteTransformer,
          detail,
          model: "transformer",
          x: x - 1.4,
          z: -2.5,
        });
        link(`${n}-grid`, `${n}-transformer`);
        link(`${n}-transformer`, `${n}-bus`);
      } else link(`${n}-grid`, `${n}-bus`);
      if (n === 2) {
        nodes.push({
          id: `${n}-pcs`,
          title: column.items[0],
          detail: text.converterDetail,
          model: "transformer",
          x: x + 1.7,
          z: 0,
        });
        link(`${n}-battery`, `${n}-pcs`, "power", true);
        link(`${n}-pcs`, `${n}-bus`, "power", true);
      } else link(`${n}-battery`, `${n}-bus`, "power", true);
    });
  }

  return { nodes, links };
}
