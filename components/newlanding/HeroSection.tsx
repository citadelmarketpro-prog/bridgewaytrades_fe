import Image from "next/image";
import Link from "next/link";
import { FadeLeft, FadeRight, Magnetic, DriftGlow, FloatY, FadeInNow, CyclingBadge } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const integrations = [
  "Interactive Brokers", "tastytrade", "Tradier",
  "eOption", "Magnifi", "Olive Invest",
  "JP Morgan", "HSBC", "Citibank",
];

const headlineText = "Purpose-Driven Copytrading, Built on Innovation and Transparency";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: darkGradient }}
    >
      {/* Ambient drifting glow orbs */}
      <DriftGlow
        className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full"
        color="rgba(0,82,255,0.35)"
        x={40}
        y={30}
        duration={14}
      />
      <DriftGlow
        className="absolute -bottom-40 right-[-10%] w-[480px] h-[480px] rounded-full"
        color="rgba(91,141,255,0.28)"
        x={-30}
        y={-40}
        duration={17}
        delay={1}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <FadeLeft className="flex-1 max-w-xl">

          {/* Integration Badge */}
          <div className="mb-6">
            <CyclingBadge items={integrations} label="Integrates with" />
          </div>

          <FadeInNow delay={0.2} duration={0.7} y={20}>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{
                background: "linear-gradient(180deg,#fff 0%,#a8c4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headlineText}
            </h1>
          </FadeInNow>
          <FadeInNow delay={0.75} className="text-gray-300 text-base leading-relaxed mb-8">
            Trade smarter, not harder, by automatically mirroring the strategies of top-performing investors, giving you a smarter way to grow your portfolio with confidence, transparency, and control.
          </FadeInNow>
          <FadeInNow delay={0.9} className="flex gap-3 flex-wrap">
            <Magnetic strength={0.4}>
              <Link
                href="/register"
                className="relative overflow-hidden px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors no-underline inline-block shadow-[0_0_0_rgba(0,82,255,0.4)] hover:shadow-[0_0_30px_rgba(0,82,255,0.55)] duration-300"
              >
                Register
              </Link>
            </Magnetic>
            <Magnetic strength={0.4}>
              <Link
                href="/login"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors no-underline inline-block"
              >
                Login
              </Link>
            </Magnetic>
          </FadeInNow>
        </FadeLeft>

        <FadeRight delay={0.15} className="relative w-full h-[320px] sm:h-[380px] md:flex-1 md:max-w-[480px] md:h-[340px] lg:max-w-lg lg:h-[380px]">
          <FloatY className="absolute inset-0" distance={14} duration={5}>
            <Image
              src="/sample-landing/hero_image.png"
              alt="Trading platform"
              fill
              sizes="(min-width: 1024px) 512px, (min-width: 768px) 480px, 100vw"
              className="object-contain object-center"
              priority
            />
          </FloatY>
          <FloatY className="absolute left-[20%] top-0" distance={18} rotate={6} duration={6}>
            <Image src="/sample-landing/hero-img1.svg" alt="" width={80} height={80} />
          </FloatY>
          <FloatY className="absolute left-[20%] top-[60%]" distance={-16} rotate={-6} duration={7} delay={0.5}>
            <Image src="/sample-landing/hero-img2.svg" alt="" width={80} height={80} />
          </FloatY>
        </FadeRight>
      </div>
    </section>
  );
}
