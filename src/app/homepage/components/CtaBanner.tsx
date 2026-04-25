"use client";

import React, { useEffect, useRef } from "react";
import siteConfig from "../config/site.config.json";

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cta-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" style={{ background: "#ede7d9" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className="cta-inner relative overflow-hidden"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition:
              "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            background: "#1a2e1e",
            padding: "clamp(2.5rem, 6vw, 5rem)",
            borderRadius: "4px",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute"
            style={{
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "rgba(201,149,42,0.06)",
              top: "-100px",
              right: "-80px",
              pointerEvents: "none",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "rgba(201,149,42,0.04)",
              bottom: "-80px",
              left: "-60px",
              pointerEvents: "none",
            }}
          />

          <div
            className="relative z-10"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "28px",
            }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                ¿Tenés alguna consulta?
              </p>
              <div style={{ width: "24px", height: "1px", background: "#c9952a" }} />
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Tu mascota merece
              <br />
              <span style={{ color: "#ddb356", fontStyle: "italic", fontWeight: 400 }}>
                lo mejor.
              </span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "1rem",
                maxWidth: "440px",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Escribinos y te asesoramos sin compromiso. Respondemos rápido y con gusto.
            </p>

            {/* CTA dorado — sin verde WhatsApp */}
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "18px 44px",
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
              <WhatsAppIconMed />
              Escribinos por WhatsApp
            </a>

            <p
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Respondemos en minutos · Sin costo
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .cta-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

function WhatsAppIconMed() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
