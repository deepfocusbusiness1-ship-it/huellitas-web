"use client";

import React, { useEffect, useRef } from "react";

const brands = [
  {
    name: "Royal Canin",
    svg: (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "110px", height: "36px" }}>
        <text x="4" y="28" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="currentColor" letterSpacing="0.5">Royal</text>
        <text x="4" y="40" fontFamily="Georgia, serif" fontSize="11" fontWeight="400" fill="currentColor" letterSpacing="3">CANIN</text>
        <rect x="76" y="10" width="2" height="28" fill="currentColor" opacity="0.4"/>
        <circle cx="90" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M86 20 Q90 14 94 20 Q90 26 86 20Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Pro Plan",
    svg: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100px", height: "36px" }}>
        <rect x="0" y="8" width="42" height="24" rx="2" fill="currentColor" opacity="0.12"/>
        <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900" fill="currentColor" letterSpacing="0.5">PRO</text>
        <text x="48" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="300" fill="currentColor" letterSpacing="1">PLAN</text>
        <line x1="44" y1="10" x2="44" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Pedigree",
    svg: (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "110px", height: "36px" }}>
        <text x="4" y="29" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="-0.5" fontStyle="italic">Pedigree</text>
        <path d="M4 33 L108 33" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Hill's",
    svg: (
      <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "80px", height: "36px" }}>
        <text x="4" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fill="currentColor" letterSpacing="-1">Hill's</text>
        <text x="4" y="38" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="500" fill="currentColor" letterSpacing="2.5">SCIENCE DIET</text>
      </svg>
    ),
  },
  {
    name: "Eukanuba",
    svg: (
      <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "118px", height: "36px" }}>
        <text x="4" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" fill="currentColor" letterSpacing="1">EUKANUBA</text>
        <rect x="4" y="31" width="118" height="1.5" fill="currentColor" opacity="0.25"/>
      </svg>
    ),
  },
  {
    name: "Purina",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "90px", height: "36px" }}>
        <text x="4" y="27" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="0.5">Purina</text>
        <circle cx="82" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M78 16 L82 10 L86 16 L82 22Z" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "Iams",
    svg: (
      <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "70px", height: "36px" }}>
        <rect x="0" y="4" width="72" height="32" rx="16" fill="currentColor" opacity="0.1"/>
        <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="1">IAMS</text>
      </svg>
    ),
  },
  {
    name: "Acana",
    svg: (
      <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "90px", height: "36px" }}>
        <text x="4" y="28" fontFamily="Georgia, serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="0.5">ACANA</text>
        <path d="M4 33 Q50 36 96 33" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
      </svg>
    ),
  },
];

// Duplicamos para el loop infinito
const allBrands = [...brands, ...brands];

export default function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("brands-visible");
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{ background: "#f5f0e8", borderTop: "1px solid rgba(26,46,30,0.07)", borderBottom: "1px solid rgba(26,46,30,0.07)" }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div
          ref={ref}
          className="brands-header flex flex-col md:flex-row md:items-center gap-6"
          style={{
            opacity: 0,
            transform: "translateY(16px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div style={{ width: "24px", height: "1px", background: "#c9952a" }} />
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c9952a",
              }}
            >
              Marcas que trabajamos
            </p>
          </div>
          <div style={{ flex: 1, height: "1px", background: "rgba(26,46,30,0.08)" }} />
          <p
            style={{
              fontSize: "0.75rem",
              color: "#9ca3af",
              fontWeight: 400,
              flexShrink: 0,
              fontStyle: "italic",
            }}
          >
            Nutrición premium certificada
          </p>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #f5f0e8, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #f5f0e8, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "0px",
            animation: "brandScroll 28s linear infinite",
            width: "max-content",
          }}
          onMouseEnter={() => {
            if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (trackRef.current) trackRef.current.style.animationPlayState = "running";
          }}
        >
          {allBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 48px",
                color: "#1a2e1e",
                opacity: 0.35,
                transition: "opacity 0.3s, color 0.3s",
                cursor: "default",
                flexShrink: 0,
                height: "60px",
                borderRight: "1px solid rgba(26,46,30,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.opacity = "0.85";
                (e.currentTarget as HTMLDivElement).style.color = "#c9952a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.opacity = "0.35";
                (e.currentTarget as HTMLDivElement).style.color = "#1a2e1e";
              }}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
