import type { NextRequest } from "next/server";
export function sameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const url = new URL(origin);
    if (url.host !== req.headers.get("host")) return false;
    if (process.env.VERCEL_ENV === "production")
      return [
        "https://www.megapowerjp.com",
        "https://megapowerjp.com",
      ].includes(origin);
    return ["http:", "https:"].includes(url.protocol);
  } catch {
    return false;
  }
}
