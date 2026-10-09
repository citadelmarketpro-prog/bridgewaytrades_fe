import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your BridgewayTrades account and start copying expert traders in real time. Access your portfolio, manage positions, and grow with BridgewayTrades.",
  alternates: { canonical: "https://bridgewaytrades.com/login" },
  robots: { index: true, follow: false },
  openGraph: {
    title: "Log In to BridgewayTrades",
    description: "Access your BridgewayTrades copy trading account.",
    url: "https://bridgewaytrades.com/login",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
