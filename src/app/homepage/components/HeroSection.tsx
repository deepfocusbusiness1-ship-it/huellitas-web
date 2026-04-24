"use client";

import React, { useEffect, useRef } from "react";
import siteConfig from "../config/site.config.json";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Full-bleed background image using standard <img> */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover object-center"
          style={{ display: "block" }}
        />
        {/* Gradient overlay — bottom-heavy for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,15,20,0.97) 0%, rgba(10,15,20,0.6) 45%, rgba(10,15,20,0.15) 75%, rgba(10,15,20,0.05) 100%)",
          }}
        />
      </div>

      {/* Floating badge — top right */}
      <div className="absolute top-32 right-6 z-20 md:top-36 md:right-12">
        <div
          className="badge-float px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            animation: "badgeFloat 3s ease-in-out infinite",
          }}
        >
          🚚 {siteConfig.hero.badge}
        </div>
      </div>

      {/* Hero content */}
      <div ref={heroRef} className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-2xl">
          {/* Category pill */}
          <div className="mb-5 inline-flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ background: "#e8523a" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Santa Fe, Argentina
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-black leading-none mb-4 tracking-tighter"
            style={{
              fontFamily: "'Fraunces', 'Plus Jakarta Sans', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.brand.name}
          </h1>

          {/* Subheadline */}
          <p
            className="font-semibold mb-3"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#f0c060",
              letterSpacing: "-0.01em",
            }}
          >
            {siteConfig.hero.subheadline}
          </p>

          {/* Body */}
          <p
            className="mb-10 leading-relaxed"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "480px",
            }}
          >
            {siteConfig.hero.body}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 font-bold rounded-full transition-all duration-300"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "16px 32px",
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
                boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(37,211,102,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.35)";
              }}
            >
              <WhatsAppIcon />
              {siteConfig.hero.cta.primary}
            </a>

            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                padding: "16px 32px",
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
            >
              {siteConfig.hero.cta.secondary}
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}