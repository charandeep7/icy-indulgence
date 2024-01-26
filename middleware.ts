export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/checkout','/specials','/user/:path*'],
};