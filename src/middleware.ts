/** @format */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // periksa login
    // jika belum login
    return NextResponse.rewrite(new URL("/", request.url));
  }
}
