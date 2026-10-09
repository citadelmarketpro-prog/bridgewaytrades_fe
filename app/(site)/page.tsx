import type { Metadata } from "next";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import LiquidityProvidersSection from "@/components/site/LiquidityProvidersSection";
import HeroSection from "@/components/newlanding/HeroSection";
import PlatformSection from "@/components/newlanding/PlatformSection";
import AboutSection from "@/components/newlanding/AboutSection";
import StatsSection from "@/components/newlanding/StatsSection";
import TrustedSection from "@/components/newlanding/TrustedSection";
import FeaturesSection from "@/components/newlanding/FeaturesSection";
import StockDerivativesSection from "@/components/newlanding/StockDerivativesSection";
import MirrorTradingSection from "@/components/newlanding/MirrorTradingSection";
import ForexSection from "@/components/newlanding/ForexSection";
import WhyCopyTradingSection from "@/components/newlanding/WhyCopyTradingSection";
import StocksSection from "@/components/newlanding/StocksSection";
import FindYourselfSection from "@/components/newlanding/FindYourselfSection";
import PayLessSection from "@/components/newlanding/PayLessSection";
import TradingFingertipsSection from "@/components/newlanding/TradingFingertipsSection";
import BecomeProSection from "@/components/newlanding/BecomeProSection";
import LandingExtrasSection from "@/components/newlanding/LandingExtrasSection";
import PagePreloader from "@/components/PagePreloader";

export const metadata: Metadata = {
  title: "Copy Futures, Options & Contracts with Precision",
  description:
    "BridgewayTrades lets you mirror real-time stock, futures, and options trades from top-performing experts. AutoGuard™ protection, AI signals, zero commission — start copy trading today.",
  alternates: { canonical: "https://bridgewaytrades.com" },
  openGraph: {
    title: "BridgewayTrades — Copy Futures, Options & Contracts with Precision",
    description:
      "Mirror real-time trades from top experts. AutoGuard™ risk management, AI signals, zero commission.",
    url: "https://bridgewaytrades.com",
    images: [{ url: "https://bridgewaytrades.com/opengraph-image.png", width: 1200, height: 630, alt: "BridgewayTrades Copy Trading Platform" }],
  },
};

export default function Home() {
  return (
    <PagePreloader>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://bridgewaytrades.com/#organization",
                name: "BridgewayTrades",
                url: "https://bridgewaytrades.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bridgewaytrades.com/android-chrome-512x512.png",
                },
                sameAs: [],
                description:
                  "BridgewayTrades is a copy trading platform for futures, options, and contracts. Mirror trades from top-performing experts with real-time precision.",
              },
              {
                "@type": "WebSite",
                "@id": "https://bridgewaytrades.com/#website",
                url: "https://bridgewaytrades.com",
                name: "BridgewayTrades",
                publisher: { "@id": "https://bridgewaytrades.com/#organization" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://bridgewaytrades.com/explore-traders?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://bridgewaytrades.com/#webpage",
                url: "https://bridgewaytrades.com",
                name: "BridgewayTrades — Copy Futures, Options & Contracts with Precision",
                isPartOf: { "@id": "https://bridgewaytrades.com/#website" },
                about: { "@id": "https://bridgewaytrades.com/#organization" },
                description:
                  "Mirror real-time stock and options trades from top-performing traders. Precision, flexibility, and transparency — straight to your fingertips.",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is BridgewayTrades?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "BridgewayTrades is a copy trading platform that lets you mirror real-time trades from top-performing expert traders across futures, options, and contracts.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does copy trading work on BridgewayTrades?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sign up, choose an expert trader, set your investment amount, and BridgewayTrades automatically mirrors every trade they make in your portfolio in real time.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is AutoGuard™?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "AutoGuard™ is BridgewayTrades's proprietary risk management system that applies automatic stop-loss, trailing stops, and position-size limits to every copied trade.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does BridgewayTrades charge commission?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. BridgewayTrades charges zero commission on US equity trades. There are no per-trade fees and no hidden charges.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <main className="pt-16 lg:pt-20 font-sans bg-white landing-grid-bg">
        <HeroSection />
        <PlatformSection />
        <AboutSection />
        <StatsSection />
        <TrustedSection />
        <FeaturesSection />
        <StockDerivativesSection />
        <MirrorTradingSection />
        <ForexSection />
        <WhyCopyTradingSection />
        <StocksSection />
        <FindYourselfSection />
        <PayLessSection />
        <TradingFingertipsSection />
        <BecomeProSection />
        <LandingExtrasSection />
        <LiquidityProvidersSection />
        <Footer />
      </main>
    </PagePreloader>
  );
}
