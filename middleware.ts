import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // ADD THIS LINE: Define paths that are publicly accessible (not protected)
  publicRoutes: [
    '/', 
    '/sign-in', 
    '/sign-up', 
    '/sign-in/(.*)', // Includes any sub-paths Clerk might use for sign-in (e.g., /sign-in/sso)
    '/sign-up/(.*)', // Includes any sub-paths Clerk might use for sign-up
    '/api/webhooks', // Required if your project uses webhooks
  ],
});

export const config = {
  // This matcher is still fine, as the publicRoutes array handles the exceptions.
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};