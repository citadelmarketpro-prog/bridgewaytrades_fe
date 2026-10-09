import Image from "next/image";
import { FadeUp, ZoomIn } from "./motion";

const stockFeatures = [
  { img: "/sample-landing/pair.svg", head: "500+ Global Stocks", body: "Trade stocks from NYSE, NASDAQ, LSE and other top global exchanges — all from one account." },
  { img: "/sample-landing/leverage.svg", head: "Up to 1:20 Leverage", body: "Amplify your stock positions with leverage up to 1:20 to maximise exposure with less capital." },
  { img: "/sample-landing/spread.svg", head: "Fractional Shares", body: "Invest in high-value stocks with as little as $1, making premium equities accessible to every trader." },
  { img: "/sample-landing/speed.svg", head: "High Execution Speed", body: "Order execution from 0.1 seconds for a smoother and fast trading experience." },
];

export default function ForexSection() {
  return (
    <section className="py-14 sm:py-20 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Why trade Stocks with us?</h2>
          <p className="text-gray-600 mb-8 text-sm">
            All you need to become a trading guru gathered in one place: education, analytics, video lessons, trading tips, market news, and so much more!
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockFeatures.map((f, i) => (
            <ZoomIn key={i} delay={0.08 * i}>
              <div>
                <Image src={f.img} alt={f.head} width={40} height={40} className="mb-3" />
                <h3 className="text-gray-900 font-semibold text-base mt-0 mb-1">{f.head}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
}
