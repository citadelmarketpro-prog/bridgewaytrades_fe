import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Leader Trader — BridgewayTrades",
  description: "Share your trading expertise on BridgewayTrades and earn from your followers. Apply to become a Leader Trader, set your strategy, and let others copy your success.",
  alternates: { canonical: "https://bridgewaytrades.com/leader" },
  openGraph: {
    title: "Become a Leader Trader on BridgewayTrades",
    description: "Share your trades, earn from followers, and grow your reputation on BridgewayTrades.",
    url: "https://bridgewaytrades.com/leader",
  },
};

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
