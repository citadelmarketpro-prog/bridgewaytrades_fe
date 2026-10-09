import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to activate your BridgewayTrades account and start copy trading.",
  alternates: { canonical: "https://bridgewaytrades.com/verify-email" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Verify Your BridgewayTrades Email",
    description: "Activate your BridgewayTrades account by verifying your email address.",
    url: "https://bridgewaytrades.com/verify-email",
  },
};

export default function VerifyEmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
