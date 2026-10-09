import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your BridgewayTrades account.",
  alternates: { canonical: "https://bridgewaytrades.com/reset-password" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Set a New BridgewayTrades Password",
    description: "Create a new password for your BridgewayTrades copy trading account.",
    url: "https://bridgewaytrades.com/reset-password",
  },
};

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
