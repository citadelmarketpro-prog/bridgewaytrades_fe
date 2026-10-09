import Link from "next/link";
import { FadeUp, ZoomIn, TiltCard, Magnetic } from "./motion";

const cardStyles = [
  { bg: "", bgColor: "#0046d9", headColor: "text-white", textColor: "text-white/90" },
  { bg: "/sample-landing/chat-bg.jpg", bgColor: "", headColor: "text-gray-900", textColor: "text-gray-700" },
  { bg: "", bgColor: "#0046d9", headColor: "text-white", textColor: "text-white/90" },
  { bg: "/sample-landing/chat-bg.jpg", bgColor: "", headColor: "text-gray-900", textColor: "text-gray-700" },
];

const cards = [
  {
    head: "Clear Investment Processes",
    body: "Our transparent investment processes detail how each investment team identifies and implements investment opportunities and the risk/return profile to be expected. We believe that strict adherence to these guidelines is one of the most effective forms of risk management.",
  },
  {
    head: "ESG Integration",
    body: "As a signatory of the United Nations-supported Principles for Responsible Investment (UN PRI) initiative, we're committed to investing responsibly and supported by a global team of dedicated ESG specialists whose recommendations help shape the investment process.",
  },
  {
    head: "Robust Oversight",
    body: "Portfolio risk management is supplemented by our independent risk and quantitative analytics team — which partners with investment teams to measure behavioral biases and other risks but reports to senior investment management — and an operational risk management function that assesses risk across the complex.",
  },
  {
    head: "High-Conviction, Risk-Aware Portfolios",
    body: "Our focus on proprietary, security-level research allows us to build high-conviction, differentiated portfolios. Our risk management processes provide valuable insight to help our teams understand potential outcomes.",
  },
];

export default function FindYourselfSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-10 leading-tight">
            Find Yourself on BridgewayTrades
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <ZoomIn key={i} delay={0.08 * i}>
              <TiltCard className="h-full">
                <div
                  className="relative rounded-2xl overflow-hidden min-h-72 h-full flex flex-col"
                  style={
                    cardStyles[i].bg
                      ? { backgroundImage: `url('${cardStyles[i].bg}')`, backgroundSize: "cover", backgroundPosition: "center" }
                      : { backgroundColor: cardStyles[i].bgColor }
                  }
                >
                  <div className="relative z-10 p-8 flex flex-col gap-4">
                    <h3 className={`text-sm font-extrabold uppercase tracking-widest ${cardStyles[i].headColor}`}>
                      {card.head}
                    </h3>
                    <p className={`text-sm leading-relaxed m-0 ${cardStyles[i].textColor}`}>{card.body}</p>
                  </div>
                </div>
              </TiltCard>
            </ZoomIn>
          ))}
        </div>
        <div className="mt-10 flex justify-start">
          <Magnetic>
            <Link
              href="/register"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors no-underline inline-block"
            >
              Get Started
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
