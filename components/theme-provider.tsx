"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Public marketing pages (the (site) route group) are light-mode only —
// no dark mode switching there, regardless of the visitor's system/saved
// preference. Everything else (dashboard, auth, kyc/onboarding) keeps
// normal theme switching. Route groups like "(site)" don't appear in the
// URL, so membership is matched by first path segment instead.
const SITE_ONLY_FIRST_SEGMENTS = new Set([
  "about",
  "affiliate",
  "affiliate-guide",
  "autoguard",
  "broker",
  "conflict-of-interest",
  "cookies-policy",
  "declaration-of-consent",
  "end-user-license-agreement",
  "faq",
  "leader",
  "leader-guide",
  "privacy-policy",
  "risk-disclaimer",
  "terms-of-service",
  "user-guide",
]);

function isSiteOnlyPath(pathname: string): boolean {
  if (pathname === "/") return true;
  const firstSegment = pathname.split("/")[1];
  return SITE_ONLY_FIRST_SEGMENTS.has(firstSegment);
}

export function ThemeProvider({
  children,
  forcedTheme,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const pathname = usePathname();
  const effectiveForcedTheme = isSiteOnlyPath(pathname) ? "light" : forcedTheme;

  return (
    <NextThemesProvider forcedTheme={effectiveForcedTheme} {...props}>
      {children}
    </NextThemesProvider>
  );
}
