import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token && !request.nextUrl.pathname.startsWith("/")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!token && !request.nextUrl.pathname.startsWith("/user/login")) {
    return Response.redirect(new URL("/user/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/user/profile"],
};
