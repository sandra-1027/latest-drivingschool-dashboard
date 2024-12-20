import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
  const token = await getToken({ req });

  // Protect Admin, Staff, and User routes
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith('/admin') && (!token || token.role !== 'admin')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (url.pathname.startsWith('/staff') && (!token || token.role !== 'staff')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (url.pathname.startsWith('/user') && (!token || token.role !== 'user')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
