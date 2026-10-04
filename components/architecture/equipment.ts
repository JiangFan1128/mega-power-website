import type { ModelKind, SceneNode } from "./layout";

// Equipment identifiers are shared by repeated instances, never their wiring.
export function equipmentGroups(nodes: SceneNode[]) {
  const groups: {
    title: string;
    model: ModelKind;
    indices: number[];
    details: string[];
    items: string[];
  }[] = [];
  nodes.forEach((node, index) => {
    let group = groups.find(
      (g) => g.model === node.model && g.title === node.title,
    );
    if (!group) {
      group = {
        title: node.title,
        model: node.model,
        indices: [],
        details: [],
        items: [],
      };
      groups.push(group);
    }
    group.indices.push(index);
    if (node.detail && !group.details.includes(node.detail))
      group.details.push(node.detail);
    for (const item of node.items ?? [])
      if (!group.items.includes(item)) group.items.push(item);
  });
  return groups;
}

export const equipmentColors: Record<ModelKind, string> = {
  solar: "#ffd36a",
  wind: "#ffd36a",
  grid: "#81b9ff",
  busbar: "#81b9ff",
  transformer: "#ffb080",
  battery: "#6ee0b0",
  control: "#dc99ff",
  charger: "#71d9ef",
  car: "#efa9d0",
  bus: "#efa9d0",
  truck: "#efa9d0",
  factory: "#ccd5e2",
};
