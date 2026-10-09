import Image from "next/image";
import Link from "next/link";
import { FadeUp, ZoomIn, Magnetic, TiltCard, HoverWiggle, PulseGlow } from "./motion";

const awards = [
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/top-trusted-financial-institution-2024-min.svg",
  "/sample-landing/most-trusted-forex-broker-global-2024-min.svg",
  "/sample-landing/best-fx-broker-global-2024-min.svg",
  "/sample-landing/best-customer-support-global-2024-min.svg",
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/most-transparent-broker-asia-2024-min.svg",
];

const values = [
  {
    head: "Transparency",
    body: "We believe in open and honest communication. All trading performance, strategies, and fees are clearly disclosed so users can make informed decisions with full confidence.",
  },
  {
    head: "Trust & Security",
    body: "Our platform is built with robust security measures and a commitment to safeguarding our users' funds and data. We prioritize ethical practices to build long-term trust with every trader.",
  },
  {
    head: "Empowerment",
    body: "We simplify investing by making professional trading accessible to everyone. Through intuitive tools and expert-curated strategies, we help users grow their portfolios with ease and confidence.",
  },
];

export default function LandingExtrasSection() {
  return (
    <>
      {/* Our Values */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ZoomIn key={i} delay={0.1 * i}>
                <TiltCard>
                  <div
                    className="rounded-xl p-6 min-h-44 shadow-md hover:shadow-xl transition-shadow duration-300"
                    style={{
                      backgroundImage: "url('/sample-landing/chat-bg.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h3 className="text-gray-900 font-bold text-lg mb-2">{v.head}</h3>
                    <p className="text-gray-800 text-sm leading-relaxed m-0">{v.body}</p>
                  </div>
                </TiltCard>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Everywhere banner */}
      <section>
        <ZoomIn>
          <Image
            src="/sample-landing/trade_everywhere.webp"
            alt="Trade Anywhere"
            width={1920}
            height={600}
            className="w-full h-auto"
          />
        </ZoomIn>
      </section>

      {/* Achievements */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Achievements</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {awards.map((src, i) => (
              <ZoomIn key={i} delay={0.06 * i} className="flex justify-center">
                <HoverWiggle>
                  <Image
                    src={src}
                    alt="Award"
                    width={130}
                    height={110}
                    className="h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </HoverWiggle>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-28 sm:py-36"
        style={{
          backgroundImage: "url('/sample-landing/66585fe0e1dc7e70cc75d804_cta-10.webp')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <FadeUp>
            <div className="relative">
              <PulseGlow className="absolute -inset-6 rounded-[2.5rem] -z-10" />
              <div className="relative bg-[#181c25] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border border-blue-500/20">
                <div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                    Trade with a trusted broker
                  </h2>
                  <p className="text-white text-base">
                    Use our demo account and learn how to trade by using risk-free virtual funds.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                  <Magnetic className="block w-full sm:w-auto">
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-blue-600 text-white font-extrabold rounded-full text-base hover:bg-blue-500 transition-colors no-underline w-full sm:w-auto"
                    >
                      Try free demo
                    </Link>
                  </Magnetic>
                  <Magnetic className="block w-full sm:w-auto">
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-extrabold rounded-full text-base hover:bg-blue-500 transition-colors no-underline w-full sm:w-auto"
                    >
                      Trader&apos;s Hub
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
