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
    <section className="py-24" style={{ background: "#f7f5f0" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className="cta-inner rounded-[2.5rem] overflow-hidden relative"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            background: "linear-gradient(135deg, #0e1a14 0%, #1a3025 50%, #0d2318 100%)",
            padding: "clamp(2.5rem, 6vw, 5rem)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(240,192,96,0.06)",
              top: "-80px",
              right: "-60px",
              pointerEvents: "none",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(37,211,102,0.05)",
              bottom: "-60px",
              left: "-40px",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10 text-center space-y-8">
            <div>
              <p
                className="font-bold uppercase tracking-widest mb-4"
                style={{ fontSize: "0.65rem", color: "#f0c060", letterSpacing: "0.3em" }}
              >
                ¿Tenés alguna consulta?
              </p>
              <h2
                className="font-black tracking-tighter leading-none"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#ffffff",
                }}
              >
                Tu mascota merece
                <br />
                <span style={{ color: "#f0c060", fontStyle: "italic", fontWeight: 400 }}>
                  lo mejor.
                </span>
              </h2>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "1rem",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Escribinos y te asesoramos sin compromiso. Respondemos rápido y con gusto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-bold rounded-full transition-all duration-300"
                style={{
                  padding: "18px 40px",
                  background: "#25D366",
                  color: "#fff",
                  fontSize: "1rem",
                  boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px) scale(1.02)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 40px rgba(37,211,102,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0) scale(1)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.35)";
                }}
              >
                <WhatsAppIconMed />
                Escribinos por WhatsApp
              </a>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}