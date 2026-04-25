"use client";

import React, { useEffect, useRef } from "react";
import siteConfig from "../config/site.config.json";

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loc-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ubicacion" style={{ background: "#f5f0e8" }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className="loc-container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition:
              "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Left: Info */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
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
                Dónde encontrarnos
              </p>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#1a2e1e",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Visitanos en
              <br />
              <span style={{ color: "#c9952a", fontStyle: "italic", fontWeight: 400 }}>
                Santa Fe.
              </span>
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "440px",
                fontWeight: 300,
              }}
            >
              Encontrá todo lo que tu mascota necesita en nuestro local. Te asesoramos
              personalmente para elegir el mejor producto.
            </p>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "40px" }}>
              <InfoCard
                icon={<PinIcon />}
                label="Dirección"
                value={`${siteConfig.brand.address}, ${siteConfig.brand.city}`}
              />
              <InfoCard
                icon={<CardIcon />}
                label="Medios de pago"
                value={siteConfig.brand.paymentNote}
              />
              <InfoCard
                icon={<TruckIcon />}
                label="Envío"
                value="Sin cargo en Santa Fe Capital"
              />
            </div>

            {/* CTA */}
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: "#1a2e1e",
                color: "#c9952a",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#2d4433";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1a2e1e";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <WhatsAppIconSmall />
              Consultar por WhatsApp
            </a>
          </div>

          {/* Right: Map placeholder */}
          <div
            style={{
              height: "460px",
              background: "#1a2e1e",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {/* Decorative circle bg */}
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "rgba(201,149,42,0.06)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                pointerEvents: "none",
              }}
            />

            {/* Pin circle */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(201,149,42,0.15)",
                border: "1px solid rgba(201,149,42,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span style={{ fontSize: "28px" }}>📍</span>
            </div>

            <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#ddb356",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                Huellitas Pets Shop
              </p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem" }}>
                San Martín 2171, Local 26
              </p>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", marginTop: "2px" }}>
                (3000) Santa Fe, Argentina
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=San+Martín+2171+Santa+Fe+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 24px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#c9952a",
                border: "1px solid rgba(201,149,42,0.4)",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "all 0.2s",
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9952a";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,149,42,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,149,42,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .loc-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "18px 22px",
        background: "#ffffff",
        borderLeft: "3px solid #c9952a",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          background: "#1a2e1e",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9952a",
            marginBottom: "3px",
          }}
        >
          {label}
        </p>
        <p style={{ color: "#1a1a1a", fontSize: "0.9rem", fontWeight: 400 }}>{value}</p>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9952a">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9952a">
      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9952a">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function WhatsAppIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
