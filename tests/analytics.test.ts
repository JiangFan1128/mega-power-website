import { test } from "node:test";
import assert from "node:assert/strict";
import { validate, summarize, type Visit } from "../lib/analytics/data";
const base = {
  id: "11111111-1111-4111-8111-111111111111",
  visitor: "22222222-2222-4222-8222-222222222222",
  session: "33333333-3333-4333-8333-333333333333",
  path: "/ja/scenarios",
  sequence: 1,
  seconds: 10,
  sections: { architecture: 10 },
  referrer: "example.com",
  device: "手机",
};
test("collector rejects private paths, oversized durations and overlapping section time", () => {
  assert(validate(base));
  assert.equal(validate({ ...base, path: "/admin/analytics" }), null);
  assert.equal(validate({ ...base, path: "/en/about?email=private" }), null);
  assert.equal(validate({ ...base, seconds: Infinity }), null);
  assert.equal(validate({ ...base, sections: { a: 9, b: 9 } }), null);
});
test("cumulative heartbeat snapshots count each pageview once, using newest sequence even out of order", () => {
  const v = {
    ...base,
    country: "JP",
    region: "13",
    day: "2026-10-06",
    updated: new Date().toISOString(),
  } as Visit;
  const result = summarize([
    { ...v, sequence: 2, seconds: 40, sections: { architecture: 40 } },
    v,
    v,
  ]);
  assert.equal(result.views, 1);
  assert.equal(result.seconds, 40);
  assert.equal(result.visitors, 1);
  assert.equal(result.sections[0].seconds, 40);
});
test("page transitions retain one visitor and session with separate page view totals", () => {
  const v = {
    ...base,
    country: "JP",
    region: "13",
    day: "2026-10-06",
    updated: new Date().toISOString(),
  } as Visit;
  const result = summarize([
    v,
    { ...v, id: "44444444-4444-4444-8444-444444444444", path: "/ja/products" },
  ]);
  assert.equal(result.views, 2);
  assert.equal(result.visitors, 1);
  assert.equal(result.sessions, 1);
  assert.equal(result.pages.length, 2);
});
