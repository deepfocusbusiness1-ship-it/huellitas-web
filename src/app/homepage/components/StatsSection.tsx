"use client";

import React, { useEffect, useRef } from "react";
import siteConfig from "../config/site.config.json";

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("stats-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  // ⚠️ FIX: detectar si el valor es numérico o textual para darle tratamiento visual diferente.
  // "Todos" y "Local" en Fraunces a 3rem se veían inconsistentes junto a "6+" y "100%".
  // Los valores textuales ahora reciben un tamaño más moderado y un estilo diferente.
  const isNumericStat = (value: string) =>
    /^[\d%+]+$/.test(value.replace(/\s/g, ""));

  return (
    <section
      className="py-16 border-b"
      style={{
        background: "#0e1a14",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 stats-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {siteConfig?.stats?.map((stat, i) => {
            const isNumeric = isNumericStat(stat.value);
            return (
              <div
                key={i}
                className="text-center md:text-left stat-item"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                }}
              >
                {isNumeric ? (
                  // Valores numéricos: Fraunces grande en dorado
                  <p
                    className="font-black tracking-tighter mb-1"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      color: "#f0c060",
                    }}
                  >
                    {stat.value}
                  </p>
                ) : (
                  // ⚠️ FIX: valores textuales ("Todos", "Local") en tamaño moderado con badge visual
                  <div className="mb-1 flex md:justify-start justify-center">
                    <span
                      className="inline-block font-bold rounded-full px-3 py-1"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.8rem",
                        color: "#f0c060",
                        background: "rgba(240,192,96,0.12)",
                        border: "1px solid rgba(240,192,96,0.25)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                )}
                <p
                  className="font-semibold uppercase tracking-wider"
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.18em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .stats-visible .stat-item {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
