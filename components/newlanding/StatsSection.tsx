import Image from "next/image";
import { Globe2, Users, ArrowLeftRight, Wallet, RefreshCw } from "lucide-react";
import { ZoomIn, TiltCard, CountUp } from "./motion";

const stats = [
  { icon: <Users className="w-7 h-7 text-blue-400" />, value: 1, suffix: "M+", desc: "Trader accounts", bg: "bg-[#111]" },
  { icon: <ArrowLeftRight className="w-7 h-7 text-blue-400" />, value: 30, suffix: "M+", desc: "Monthly transactions", bg: "bg-[#0a0a0a]" },
  { icon: <Wallet className="w-7 h-7 text-blue-400" />, value: 16, prefix: "$", suffix: "M+", desc: "Average monthly payouts", bg: "bg-[#0a0a0a]" },
  { icon: <RefreshCw className="w-7 h-7 text-blue-400" />, value: 211, prefix: "$", suffix: "M", desc: "Monthly trade turnover", bg: "bg-[#111]" },
];

export default function StatsSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Large card */}
          <ZoomIn className="col-span-2 lg:row-span-2 group">
            <TiltCard className="rounded-2xl h-full">
              <div className="relative rounded-2xl overflow-hidden min-h-[260px] h-full bg-[#0d1829]">
                <Image
                  src="/sample-landing/960.webp"
                  alt="World map"
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full min-h-[260px]">
                  <Globe2 className="w-7 h-7 text-blue-400 mb-4 animate-pulse" />
                  <div className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                    <CountUp value={130} suffix="+" />
                    <br />countries
                  </div>
                  <p className="text-gray-300 text-sm mt-3 max-w-xs">
                    We support all, so traders from all over the world could enjoy and profit anytime
                  </p>
                </div>
              </div>
            </TiltCard>
          </ZoomIn>

          {/* 4 stat cards */}
          {stats.map((s, i) => (
            <ZoomIn key={s.desc} delay={0.08 * (i + 1)} className="group">
              <TiltCard className="rounded-2xl h-full">
                <div className={`${s.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[160px] h-full border border-white/5 transition-colors duration-300 group-hover:border-blue-500/40`}>
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 w-fit">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white">
                      <CountUp value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} duration={2.2} />
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </ZoomIn>
          ))}

        </div>
      </div>
    </section>
  );
}
