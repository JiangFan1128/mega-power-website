export type Visit = {
  id: string;
  visitor: string;
  session: string;
  path: string;
  referrer: string;
  device: string;
  country: string;
  region: string;
  day: string;
  updated: string;
  sequence: number;
  seconds: number;
  sections: Record<string, number>;
};
export function validate(
  body: unknown,
): Omit<Visit, "country" | "region" | "day" | "updated"> | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const uuid = /^[a-f0-9-]{36}$/i;
  if (
    ![b.id, b.visitor, b.session].every(
      (v) => typeof v === "string" && uuid.test(v),
    )
  )
    return null;
  if (
    typeof b.path !== "string" ||
    !/^\/(en|ja|zh)(\/(scenarios|platform|products|services|about))?$/.test(
      b.path,
    )
  )
    return null;
  if (
    !Number.isInteger(b.sequence) ||
    Number(b.sequence) < 0 ||
    Number(b.sequence) > 1440 ||
    typeof b.seconds !== "number" ||
    !Number.isFinite(b.seconds) ||
    b.seconds < 0 ||
    b.seconds > 86400
  )
    return null;
  if (
    !b.sections ||
    typeof b.sections !== "object" ||
    Array.isArray(b.sections)
  )
    return null;
  const sections: Record<string, number> = Object.create(null);
  const entries = Object.entries(b.sections);
  if (entries.length > 60) return null;
  for (const [key, value] of entries) {
    if (
      !key ||
      key.length > 120 ||
      /[<>\x00-\x1f]/.test(key) ||
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value < 0 ||
      value > Number(b.seconds)
    )
      return null;
    sections[key] = Math.round(value);
  }
  if (
    Object.values(sections).reduce((a, b) => a + b, 0) >
    Number(b.seconds) + entries.length
  )
    return null;
  return {
    id: b.id as string,
    visitor: b.visitor as string,
    session: b.session as string,
    path: b.path,
    sequence: Number(b.sequence),
    seconds: Math.round(b.seconds),
    sections,
    referrer:
      typeof b.referrer === "string" && /^[a-z0-9.-]{1,120}$/i.test(b.referrer)
        ? b.referrer
        : "直接访问",
    device: ["手机", "平板", "电脑"].includes(String(b.device))
      ? String(b.device)
      : "未知",
  };
}
export function summarize(records: Visit[]) {
  const latest = new Map<string, Visit>();
  for (const r of records) {
    const prev = latest.get(r.id);
    if (!prev || r.sequence > prev.sequence) latest.set(r.id, r);
  }
  const views = [...latest.values()];
  const group = (key: (v: Visit) => string) => {
    const map = new Map<
      string,
      { name: string; views: number; seconds: number; visitors: Set<string> }
    >();
    for (const v of views) {
      const name = key(v);
      const r = map.get(name) || {
        name,
        views: 0,
        seconds: 0,
        visitors: new Set<string>(),
      };
      r.views++;
      r.seconds += v.seconds;
      r.visitors.add(v.visitor);
      map.set(name, r);
    }
    return [...map.values()]
      .map((r) => ({ ...r, visitors: r.visitors.size }))
      .sort((a, b) => b.views - a.views);
  };
  const sections = new Map<
    string,
    { name: string; views: number; seconds: number }
  >();
  for (const v of views)
    for (const [key, seconds] of Object.entries(v.sections)) {
      if (!seconds) continue;
      const name = `${v.path} · ${key}`;
      const r = sections.get(name) || { name, views: 0, seconds: 0 };
      r.views++;
      r.seconds += seconds;
      sections.set(name, r);
    }
  return {
    views: views.length,
    visitors: new Set(views.map((v) => v.visitor)).size,
    sessions: new Set(views.map((v) => v.session)).size,
    seconds: views.reduce((a, b) => a + b.seconds, 0),
    pages: group((v) => v.path),
    countries: group(
      (v) => [v.country, v.region].filter(Boolean).join(" / ") || "未知",
    ),
    referrers: group((v) => v.referrer),
    devices: group((v) => v.device),
    days: group((v) => v.day).sort((a, b) => a.name.localeCompare(b.name)),
    sections: [...sections.values()].sort((a, b) => b.seconds - a.seconds),
  };
}
