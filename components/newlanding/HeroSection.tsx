"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, Magnetic } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const integrations = [
  "Interactive Brokers", "tastytrade", "Tradier",
  "eOption", "Magnifi", "Olive Invest",
  "JP Morgan", "HSBC", "Citibank",
];

const headlineText = "Purpose-Driven Copytrading, Built on Innovation and Transparency";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % integrations.length);
        setAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: darkGradient }}
    >
      {/* Ambient drifting glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,82,255,0.35) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[-10%] w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(91,141,255,0.28) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <FadeLeft className="flex-1 max-w-xl">

          {/* Integration Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-xs font-medium">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-gray-400 whitespace-nowrap">Integrates with</span>
              <span
                className="inline-block w-[160px]"
                style={{
                  opacity: animating ? 0 : 1,
                  filter: animating ? "blur(4px)" : "blur(0px)",
                  transform: animating ? "translateY(8px) scale(0.92)" : "translateY(0) scale(1)",
                  transition: "opacity 0.4s, transform 0.4s, filter 0.4s",
                }}
              >
                <span className="font-semibold text-white whitespace-nowrap">{integrations[activeIndex]}</span>
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
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
          </motion.div>
          <motion.p
            className="text-gray-300 text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: "easeOut" }}
          >
            Trade smarter, not harder, by automatically mirroring the strategies of top-performing investors, giving you a smarter way to grow your portfolio with confidence, transparency, and control.
          </motion.p>
          <motion.div
            className="flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>
        </FadeLeft>

        <FadeRight delay={0.15} className="relative w-full h-[320px] sm:h-[380px] md:flex-1 md:max-w-[480px] md:h-[340px] lg:max-w-lg lg:h-[380px]">
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/sample-landing/hero_image.png"
              alt="Trading platform"
              fill
              sizes="(min-width: 1024px) 512px, (min-width: 768px) 480px, 100vw"
              className="object-contain object-center"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute left-[20%] top-0"
            animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/sample-landing/hero-img1.svg" alt="" width={80} height={80} />
          </motion.div>
          <motion.div
            className="absolute left-[20%] top-[60%]"
            animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Image src="/sample-landing/hero-img2.svg" alt="" width={80} height={80} />
          </motion.div>
        </FadeRight>
      </div>
    </section>
  );
}
