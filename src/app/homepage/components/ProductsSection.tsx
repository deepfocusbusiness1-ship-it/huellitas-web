"use client";

import React, { useEffect, useRef } from "react";
import siteConfig from "../config/site.config.json";

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLDivElement>(".product-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("card-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const whatsappBase = siteConfig.brand.whatsappUrl;

  const cardBgs = ["#1a3d22", "#1e2e3a", "#2e1e1a"];

  return (
    <section id="productos" className="py-24 md:py-32" style={{ background: "#ede7d9" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
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
                Lo que encontrás en nuestro local
              </p>
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#1a2e1e",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Todo para el bienestar
              <br />
              <span style={{ fontStyle: "italic", color: "#c9952a", fontWeight: 400 }}>
                de tu mascota.
              </span>
            </h2>
          </div>

          <a
            href={whatsappBase}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "14px 28px",
              background: "#1a2e1e",
              color: "#c9952a",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "all 0.25s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#2d4433";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a2e1e";
            }}
          >
            Consultar todo →
          </a>
        </div>

        {/* Products grid */}
        <div
          ref={sectionRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
          className="md:grid-cols-3 grid-cols-1"
        >
          {siteConfig.products.map((product, i) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                opacity: 0,
                transform: "translateY(32px)",
                transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
                background: cardBgs[i] ?? "#1a3d22",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".card-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".card-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              {/* Image with dark overlay */}
              <div style={{ height: "260px", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ display: "block", filter: "brightness(0.55)", transition: "transform 0.6s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Hover gold overlay */}
              <div
                className="card-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(201,149,42,0.08)",
                  opacity: 0,
                  transition: "opacity 0.35s",
                  pointerEvents: "none",
                }}
              />

              {/* Content */}
              <div
                style={{
                  padding: "28px 32px 32px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Category badge */}
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "12px",
                    padding: "4px 14px",
                    border: "1px solid rgba(201,149,42,0.4)",
                    borderRadius: "100px",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#ddb356",
                    alignSelf: "flex-start",
                  }}
                >
                  {product.category}
                </span>

                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    fontWeight: 600,
                    lineHeight: 1.15,
                    marginBottom: "10px",
                  }}
                >
                  {product.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {product.description}
                </p>

                {/* Brand tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {product.brands.map((brand) => (
                    <span
                      key={brand}
                      style={{
                        fontSize: "0.65rem",
                        padding: "4px 10px",
                        background: "rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "100px",
                        fontWeight: 600,
                      }}
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={whatsappBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "14px 24px",
                    background: "#c9952a",
                    color: "#1a2e1e",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: "2px",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#ddb356";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#c9952a";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  {product.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @media (max-width: 768px) {
          #productos .md\\:grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
