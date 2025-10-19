import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.hostname === 'www.otherwaysco.com') {
    url.hostname = 'otherwaysco.com';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

