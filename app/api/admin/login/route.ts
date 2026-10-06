import { sameOrigin } from "@/lib/analytics/request";
import { NextRequest, NextResponse } from "next/server";
import { cookieName, matches, token } from "@/lib/analytics/auth";
export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return new Response(null, { status: 403 });
  const password = process.env.ANALYTICS_ADMIN_PASSWORD;
  if (!password) return new Response("后台尚未配置", { status: 503 });
  if (Number(req.headers.get("content-length") || 0) > 2048)
    return new Response(null, { status: 413 });
  const form = await req.formData();
  await new Promise((r) => setTimeout(r, 700));
  if (!matches(String(form.get("password") || ""), password))
    return NextResponse.redirect(
      new URL("/admin/login?error=1", req.headers.get("origin")!),
      303,
    );
  const response = NextResponse.redirect(
    new URL("/admin/analytics", req.headers.get("origin")!),
    303,
  );
  response.cookies.set(cookieName, token(), {
    httpOnly: true,
    secure: req.headers.get("origin")!.startsWith("https:"),
    sameSite: "strict",
    path: "/",
    maxAge: 43200,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
