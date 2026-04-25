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
      el.style.transition =
        "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ minHeight: "100svh", background: "#1a2e1e" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.hero.image}
          alt={siteConfig.hero.imageAlt}
          className="w-full h-full object-cover object-center"
          style={{ display: "block", opacity: 0.25 }}
        />
        {/* Gradient overlay — stronger, more premium */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,20,12,0.98) 0%, rgba(10,20,12,0.75) 40%, rgba(10,20,12,0.3) 75%, rgba(10,20,12,0.1) 100%)",
          }}
        />
      </div>

      {/* Decorative gold circle — top right */}
      <div
        className="absolute z-0"
        style={{
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "rgba(201,149,42,0.06)",
          top: "-120px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute z-0"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(201,149,42,0.04)",
          top: "-40px",
          right: "-40px",
          pointerEvents: "none",
        }}
      />

      {/* Floating badge — top right */}
      <div className="absolute top-32 right-6 z-20 md:top-36 md:right-12">
        <div
          style={{
            padding: "10px 20px",
            borderRadius: "100px",
            background: "rgba(201,149,42,0.12)",
            border: "1px solid rgba(201,149,42,0.35)",
            color: "#ddb356",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            animation: "badgeFloat 3s ease-in-out infinite",
          }}
        >
          🚚 {siteConfig.hero.badge}
        </div>
      </div>

      {/* Hero content */}
      <div
        ref={heroRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28 lg:pb-36"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <div style={{ width: "32px", height: "1px", background: "#c9952a" }} />
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9952a",
              }}
            >
              Pets Shop · Santa Fe, Argentina
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Fraunces', 'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Nutrición
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "#ddb356",
                fontWeight: 400,
              }}
            >
              & cuidado
            </span>
            <br />
            premium.
          </h1>

          {/* Body */}
          <p
            style={{
              fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "420px",
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: "44px",
            }}
          >
            {siteConfig.hero.body}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary — dorado, no verde WhatsApp */}
            <a
              href="#productos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px 36px",
                background: "#c9952a",
                color: "#1a2e1e",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#ddb356";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#c9952a";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              {siteConfig.hero.cta.secondary}
            </a>

            {/* Secondary — borde blanco */}
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px 36px",
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)";
              }}
            >
              <WhatsAppIcon />
              {siteConfig.hero.cta.primary}
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
