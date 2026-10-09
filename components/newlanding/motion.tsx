"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode, MouseEvent } from "react";

const vp = { once: true, amount: 0.15 };

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 64, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80, rotate: -3 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 95, damping: 15, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, rotate: 3 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 95, damping: 15, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.65, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 13, delay }}
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a grid/list so its children (StaggerItem) pop in one after another instead of all at once. */
export function StaggerGrid({ children, className = "", stagger = 0.1 }: { children: ReactNode; className?: string; stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={vp}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 46, scale: 0.88, rotate: -2 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { type: "spring", stiffness: 140, damping: 13 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Counts up from 0 to `value` once it scrolls into view. */
export function CountUp({
  value,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(() => (0).toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(
          decimals > 0
            ? v.toFixed(decimals)
            : Math.floor(v).toLocaleString()
        );
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** 3D tilt that follows the cursor — for cards that should feel alive on hover. */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 220, damping: 20 });
  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }
  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.035 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]: unknown[]) =>
              `radial-gradient(260px circle at ${gx} ${gy}, rgba(0,82,255,0.18), transparent 70%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

/** Scales up and gives a little shake on hover — for small badge/award icons. */
export function HoverWiggle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: [0, -3, 3, 0] }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A soft radial glow that slowly pulses — drop behind a CTA card for ambiance. */
export function PulseGlow({ className = "", color = "rgba(0,82,255,0.45)" }: { className?: string; color?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.96, 1.04, 0.96] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** Continuous gentle vertical float (with optional rotation) — for decorative hero imagery. */
export function FloatY({ children, className = "", distance = 14, rotate = 0, duration = 5, delay = 0 }: { children: ReactNode; className?: string; distance?: number; rotate?: number; duration?: number; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={rotate ? { y: [0, -distance, 0], rotate: [0, rotate, 0] } : { y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/** Continuous drift + scale breathing loop — for ambient background glow orbs. */
export function DriftGlow({ className = "", color, x = 30, y = 30, duration = 15, delay = 0 }: { className?: string; color: string; x?: number; y?: number; duration?: number; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      animate={{ x: [0, x, 0], y: [0, y, 0], scale: [1, 1.12, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/** Simple fade+rise entrance with no scroll trigger — animates on mount. */
export function FadeInNow({ children, className = "", delay = 0, duration = 0.6, y = 16 }: { children: ReactNode; className?: string; delay?: number; duration?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** A pill badge that cycles through `items` on a timer with a blur+scale swap transition. */
export function CyclingBadge({ items, label, intervalMs = 2500 }: { items: string[]; label: string; intervalMs?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
        setAnimating(false);
      }, 400);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [items.length, intervalMs]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-xs font-medium">
      <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 animate-pulse" />
      <span className="text-gray-400 whitespace-nowrap">{label}</span>
      <span
        className="inline-block w-[160px]"
        style={{
          opacity: animating ? 0 : 1,
          filter: animating ? "blur(4px)" : "blur(0px)",
          transform: animating ? "translateY(8px) scale(0.92)" : "translateY(0) scale(1)",
          transition: "opacity 0.4s, transform 0.4s, filter 0.4s",
        }}
      >
        <span className="font-semibold text-white whitespace-nowrap">{items[activeIndex]}</span>
      </span>
    </div>
  );
}

/** Pulls the element subtly toward the cursor within its bounds — magnetic buttons. */
export function Magnetic({ children, className = "", strength = 0.35 }: { children: ReactNode; className?: string; strength?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 14 });
  const springY = useSpring(y, { stiffness: 150, damping: 14 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
