import { strict as assert } from "node:assert";
import { test } from "node:test";
import { architectureLayout } from "../components/architecture/layout";
import { en } from "../content/en";
import { ja } from "../content/ja";
import { zh } from "../content/zh";

function layout(key: string) {
  const panel = en.scenarios.panels.find((p) => p.key === key)!;
  return architectureLayout(panel.architecture!, key, "en");
}
test("all localized graphs have valid, unique endpoints and identical electrical topology", () => {
  for (const panel of en.scenarios.panels.filter((p) => p.architecture)) {
    const graph = layout(panel.key),
      ids = new Set(graph.nodes.map((n) => n.id));
    assert.equal(ids.size, graph.nodes.length);
    for (const edge of graph.links) {
      assert(ids.has(edge.from));
      assert(ids.has(edge.to));
      assert.notEqual(edge.from, edge.to);
    }
    for (const [locale, content] of [
      ["ja", ja],
      ["zh", zh],
    ] as const) {
      const translated = content.scenarios.panels.find(
        (p) => p.key === panel.key,
      )!;
      assert.deepEqual(
        architectureLayout(translated.architecture!, panel.key, locale).links,
        graph.links,
      );
    }
  }
});
test("renewables and battery PCS join an AC bus; no power goes through EMS", () => {
  const graph = layout("grid");
  assert.equal(graph.nodes.find((n) => n.id === "0-2")!.model, "busbar");
  for (const from of ["0-1", "1-1", "2-1"])
    assert(
      graph.links.some(
        (l) => l.from === from && l.to === "0-2" && l.kind === "power",
      ),
    );
  assert(
    graph.links
      .filter((l) => l.from === "0-4" || l.to === "0-4")
      .every((l) => l.kind === "data"),
  );
  assert(
    graph.links.some(
      (l) => l.from === "2-0" && l.to === "2-1" && l.bidirectional,
    ),
  );
});
test("frequency regulation has separate bidirectional power and supervisory links", () => {
  const graph = layout("frequency");
  assert.equal(graph.links.filter((l) => l.kind === "power").length, 2);
  assert(
    graph.links.filter((l) => l.kind === "power").every((l) => l.bidirectional),
  );
  assert(
    graph.links.some(
      (l) => l.from === "1-1" && l.to === "0-2" && l.kind === "data",
    ),
  );
});
test("EV stations have grid supply and do not assume vehicle-to-grid", () => {
  const graph = layout("ev");
  for (let n = 0; n < 3; n++) {
    assert(
      graph.links.some((l) => l.from === `${n}-grid` && l.kind === "power"),
    );
    const vehicle = graph.links.filter(
      (l) => l.to === `${n}-vehicle` || l.from === `${n}-vehicle`,
    );
    assert.equal(vehicle.length, 1);
    assert.equal(vehicle[0].to, `${n}-vehicle`);
    assert(!vehicle[0].bidirectional);
  }
});
test("mobile battery logistics cannot be mistaken for an electric circuit", () => {
  const graph = layout("mobile");
  const truckLinks = graph.links.filter(
    (l) => l.from === "1-0" || l.to === "1-0",
  );
  assert.equal(truckLinks.length, 3);
  assert(truckLinks.every((l) => l.kind === "transport"));
  assert(
    graph.links.some(
      (l) =>
        l.from === "2-1" &&
        l.to === "2-2" &&
        l.kind === "power" &&
        !l.bidirectional,
    ),
  );
});
test("commercial loads are one-way branches, storage is parallel, export is not assumed", () => {
  const graph = layout("commercial");
  for (let n = 0; n < 3; n++) {
    const load = graph.links.filter(
      (l) => l.from === `${n}-load` || l.to === `${n}-load`,
    );
    assert.equal(load.length, 1);
    assert.equal(load[0].from, `${n}-bus`);
    assert(!load[0].bidirectional);
    assert(
      graph.links
        .filter((l) => l.from === `${n}-grid` || l.to === `${n}-grid`)
        .every((l) => !l.bidirectional),
    );
    assert(
      graph.links.some((l) => l.from === `${n}-battery` && l.bidirectional),
    );
  }
});

test("repeated equipment shares an identifier without merging independent station circuits", async () => {
  const { equipmentGroups } =
    await import("../components/architecture/equipment");
  const graph = layout("ev");
  const groups = equipmentGroups(graph.nodes);
  const powerCabinets = groups.filter((g) => g.title === "Power cabinet × N");
  assert.equal(powerCabinets.length, 1);
  assert.equal(powerCabinets[0].indices.length, 2);
  assert.equal(powerCabinets[0].details.length, 2);
  assert.equal(groups.filter((g) => g.model === "grid").length, 1);
  assert.equal(graph.nodes.filter((n) => n.model === "grid").length, 3);
  for (const edge of graph.links)
    assert.equal(edge.from.split("-")[0], edge.to.split("-")[0]);
});
