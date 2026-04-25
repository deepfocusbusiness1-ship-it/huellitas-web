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

  return (
    <section
      style={{
        background: "#c9952a",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 stats-container"
        style={{ padding: "20px 24px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {siteConfig?.stats?.map((stat, i) => (
            <div
              key={i}
              className="stat-item flex items-center justify-center gap-3"
              style={{
                opacity: 0,
                transform: "translateY(12px)",
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
                padding: "18px 24px",
                borderRight: i < 3 ? "1px solid rgba(26,46,30,0.2)" : "none",
              }}
            >
              {/* Separator icon */}
              <span
                style={{
                  color: "#1a2e1e",
                  opacity: 0.5,
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                ✦
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    color: "#1a2e1e",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "2px",
                  }}
                >
                  {stat?.value}
                </p>
                <p
                  style={{
                    fontSize: "0.6rem",
                    color: "rgba(26,46,30,0.65)",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat?.label}
                </p>
              </div>
            </div>
          ))}
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
