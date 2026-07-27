import React, { useEffect, useRef, useState } from "react";
import MiniChart from "./MiniChart";

const Hero = () => {
  const [kpis, setKpis] = useState([
    { value: "$2.4M", delta: "▲ 14.2%", up: true },
    { value: "84.1K", delta: "▲ 8.7%", up: true },
    { value: "2.1%", delta: "▼ 0.4%", up: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setKpis((prev) =>
        prev.map((k) => ({
          ...k,
          value: k.value.replace(/\d+\.?\d*/, (match) => {
            const num = parseFloat(match) + (Math.random() - 0.5) * 0.15;
            return num.toFixed(1);
          }),
        })),
      );
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "SQL", pct: 94 },
    { name: "Python", pct: 88 },
    { name: "Tableau", pct: 82 },
    { name: "Spark", pct: 71 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgba(0,212,200,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10">
        <p className="font-jetbrains text-xs text-teal tracking-[0.15em] uppercase mb-5 flex items-center gap-2.5">
          <span className="w-8 h-px bg-teal inline-block"></span>
          Data Analyst · BI Engineer
        </p>

        <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
          I turn raw data
          <br />
          <span className="text-teal">into clear decisions</span>
        </h1>

        <p className="text-base text-muted max-w-md leading-relaxed mb-10">
          Hi, I'm Alex Morgan. I design dashboards, build data pipelines, and
          uncover patterns that drive measurable business outcomes — using
          Python, SQL, and a healthy obsession with clean charts.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 md:mt-0">
        <div className="bg-panel border border-border rounded-xl p-7 shadow-glow shadow-glow-lg">
          <div className="flex items-center justify-between mb-5">
            <span className="font-jetbrains text-xs text-muted tracking-wider uppercase">
              Revenue Analytics — Q2 2026
            </span>
            <span className="flex items-center gap-1.5 font-jetbrains text-xs text-green-400 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow"></span>
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className="bg-teal/5 border border-border rounded-lg p-3.5"
              >
                <div className="font-jetbrains text-[0.6rem] text-muted tracking-wider uppercase mb-1.5">
                  {["Revenue", "Users", "Churn"][i]}
                </div>
                <div className="font-space-grotesk text-xl font-bold text-cream">
                  {kpi.value}
                </div>
                <div
                  className={`text-xs mt-0.5 ${kpi.up ? "text-green-400" : "text-red-400"}`}
                >
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <div className="font-jetbrains text-[0.62rem] text-muted mb-2">
              WEEKLY REVENUE TREND
            </div>
            <MiniChart />
          </div>

          <div className="space-y-2">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2.5">
                <span className="font-jetbrains text-[0.62rem] text-muted w-14 flex-shrink-0 truncate">
                  {skill.name}
                </span>
                <div className="flex-1 h-1.5 bg-white/6 rounded overflow-hidden">
                  <div
                    className="h-full rounded bg-gradient-to-r from-teal to-gold transition-all duration-1000"
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
                <span className="font-jetbrains text-[0.6rem] text-teal w-8 text-right">
                  {skill.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
