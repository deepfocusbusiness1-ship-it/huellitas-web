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

  return (
    <section id="productos" className="py-24 md:py-32" style={{ background: "#f7f5f0" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p
            className="font-bold uppercase tracking-widest mb-3"
            style={{ fontSize: "0.7rem", color: "#e8523a", letterSpacing: "0.3em" }}
          >
            Lo que encontrás en nuestro local
          </p>
          <h2
            className="font-black tracking-tighter leading-none"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#0e1a14",
            }}
          >
            Todo para el bienestar
            <br />
            <span style={{ color: "#4a7c59", fontStyle: "italic", fontWeight: 400 }}>
              de tu mascota.
            </span>
          </h2>
        </div>

        {/* Products grid */}
        <div ref={sectionRef} className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {siteConfig.products.map((product, i) => (
            <div
              key={product.id}
              className="product-card group relative overflow-hidden rounded-3xl flex flex-col"
              style={{
                opacity: 0,
                transform: "translateY(32px)",
                transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
                background: "#fff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ height: "280px", flexShrink: 0 }}>
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ display: "block" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                {/* Category badge */}
                <span
                  className="inline-block mb-3 font-bold uppercase tracking-widest rounded-full px-3 py-1 self-start"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    background: i === 0 ? "#e8f4ec" : i === 1 ? "#f0f4e8" : "#f4e8ec",
                    color: i === 0 ? "#2d6a4f" : i === 1 ? "#4a5d23" : "#8b2635",
                  }}
                >
                  {product.category}
                </span>

                <h3
                  className="font-black tracking-tight mb-3"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.6rem",
                    color: "#0e1a14",
                    lineHeight: 1.1,
                  }}
                >
                  {product.title}
                </h3>

                <p
                  className="leading-relaxed mb-6"
                  style={{
                    fontSize: "0.9rem",
                    color: "#6b7280",
                    lineHeight: 1.7,
                  }}
                >
                  {product.description}
                </p>

                {/* Brand/feature tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {product.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full font-semibold"
                      style={{
                        fontSize: "0.7rem",
                        padding: "4px 10px",
                        background: "#f3f4f6",
                        color: "#374151",
                        border: "1px solid #e5e7eb",
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
                  className="inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 w-full"
                  style={{
                    padding: "14px 24px",
                    fontSize: "0.875rem",
                    background: "#0e1a14",
                    color: "#fff",
                    letterSpacing: "0.03em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#4a7c59";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#0e1a14";
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
      `}</style>
    </section>
  );
}