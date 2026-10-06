import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
export const cookieName = "mega_admin";
function signature(value: string) {
  return createHmac(
    "sha256",
    process.env.ANALYTICS_ADMIN_PASSWORD || "disabled",
  )
    .update(value)
    .digest("hex");
}
export function matches(a: string, b: string) {
  const x = Buffer.from(signature(a)),
    y = Buffer.from(signature(b));
  return timingSafeEqual(x, y);
}
export function token() {
  const until = String(Date.now() + 12 * 3600_000);
  return `${until}.${signature(until)}`;
}
export async function authorized() {
  if (!process.env.ANALYTICS_ADMIN_PASSWORD) return false;
  const value = (await cookies()).get(cookieName)?.value || "";
  const [until, sig] = value.split(".");
  return (
    /^\d+$/.test(until || "") &&
    Number(until) > Date.now() &&
    Number(until) < Date.now() + 13 * 3600_000 &&
    !!sig &&
    matches(sig, signature(until))
  );
}
