import { sameOrigin } from "@/lib/analytics/request";
import { NextRequest, NextResponse } from "next/server";
import { cookieName } from "@/lib/analytics/auth";
export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return new Response(null, { status: 403 });
  const response = NextResponse.redirect(
    new URL("/admin/login", req.headers.get("origin")!),
    303,
  );
  response.cookies.delete(cookieName);
  return response;
}
