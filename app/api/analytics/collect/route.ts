import { sameOrigin } from "@/lib/analytics/request";
import { NextRequest } from "next/server";
import { validate } from "@/lib/analytics/data";
import { configured, save } from "@/lib/analytics/store";
import { authorized } from "@/lib/analytics/auth";
export const runtime = "nodejs";
const limits = new Map<string, { at: number; count: number }>();
export async function POST(req: NextRequest) {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production")
    return new Response(null, { status: 204 });
  const origin = req.headers.get("origin");
  if (!sameOrigin(req)) return new Response(null, { status: 403 });
  if (!configured()) return new Response(null, { status: 503 });
  if (
    req.headers.get("dnt") === "1" ||
    req.headers.get("sec-gpc") === "1" ||
    (await authorized()) ||
    /bot|crawler|spider|headless/i.test(req.headers.get("user-agent") || "")
  )
    return new Response(null, { status: 204 });
  if (Number(req.headers.get("content-length") || 0) > 16000)
    return new Response(null, { status: 413 });
  const text = await req.text();
  if (text.length > 16000) return new Response(null, { status: 413 });
  let parsed;
  try {
    parsed = validate(JSON.parse(text));
  } catch {
    return new Response(null, { status: 400 });
  }
  if (!parsed) return new Response(null, { status: 400 });
  const now = Date.now();
  const key = parsed.visitor;
  const limit = limits.get(key);
  if (limit && now - limit.at < 60000 && limit.count >= 10)
    return new Response(null, { status: 429 });
  if (limits.size > 5000) limits.clear();
  limits.set(key, {
    at: limit && now - limit.at < 60000 ? limit.at : now,
    count: limit && now - limit.at < 60000 ? limit.count + 1 : 1,
  });
  const geo = (name: string) => {
    try {
      return decodeURIComponent(req.headers.get(name) || "").slice(0, 80);
    } catch {
      return "";
    }
  };
  try {
    await save({
      ...parsed,
      day: new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" }),
      updated: new Date().toISOString(),
      country: process.env.VERCEL ? geo("x-vercel-ip-country") : "本地测试",
      region: process.env.VERCEL
        ? [geo("x-vercel-ip-country-region"), geo("x-vercel-ip-city")]
            .filter(Boolean)
            .join(" / ")
        : "",
    });
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 503 });
  }
}
