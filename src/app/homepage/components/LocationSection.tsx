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

  // ⚠️ FIX: mapUrl estaba definida pero NUNCA se usaba — el mapa era un placeholder decorativo.
  // Se reemplaza por un iframe real de Google Maps con la dirección correcta.
  const mapUrl =
    "https://maps.google.com/maps?q=San+Mart%C3%ADn+2171%2C+Santa+Fe%2C+Argentina&output=embed&z=16";

  return (
    <section id="ubicacion" style={{ background: "#0e1a14" }} className="py-24 md:py-32">
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
          <div className="space-y-10">
            <div>
              <p
                className="font-bold uppercase tracking-widest mb-4"
                style={{ fontSize: "0.65rem", color: "#f0c060", letterSpacing: "0.3em" }}
              >
                Dónde encontrarnos
              </p>
              <h2
                className="font-black tracking-tighter leading-none mb-6"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#ffffff",
                }}
              >
                Visitanos en
                <br />
                <span style={{ color: "#f0c060", fontStyle: "italic", fontWeight: 400 }}>
                  Santa Fe.
                </span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
                Encontrá todo lo que tu mascota necesita en nuestro local. Te asesoramos
                personalmente para elegir el mejor producto.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <InfoCard
                icon="📍"
                label="Dirección"
                value={`${siteConfig.brand.address}, ${siteConfig.brand.city}`}
              />
              <InfoCard
                icon="💳"
                label="Medios de pago"
                value={siteConfig.brand.paymentNote}
              />
              <InfoCard
                icon="🚚"
                label="Envío"
                value="Sin cargo en Santa Fe Capital"
              />
            </div>

            {/* CTA */}
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300"
              style={{
                padding: "16px 32px",
                background: "#25D366",
                color: "#fff",
                fontSize: "0.9rem",
                letterSpacing: "0.03em",
                boxShadow: "0 8px 28px rgba(37,211,102,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 12px 36px rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 28px rgba(37,211,102,0.3)";
              }}
            >
              <WhatsAppIconSmall />
              Consultar por WhatsApp
            </a>
          </div>

          {/* Right: Mapa real de Google Maps */}
          {/* ⚠️ FIX: se reemplaza el placeholder decorativo por un iframe real */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              height: "420px",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
            }}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Huellitas Pets Shop — San Martín 2171, Santa Fe"
            />
            {/* Overlay con dirección sobre el mapa */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between"
              style={{
                padding: "14px 18px",
                background: "rgba(14,26,20,0.88)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div>
                <p
                  className="font-black"
                  style={{ color: "#f0c060", fontSize: "0.85rem", fontFamily: "'Fraunces', serif" }}
                >
                  Huellitas Pets Shop
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem" }}>
                  San Martín 2171, Local 26 — Santa Fe
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=San+Martín+2171+Santa+Fe+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold rounded-full transition-all duration-300 flex-shrink-0"
                style={{
                  padding: "8px 18px",
                  fontSize: "0.75rem",
                  background: "rgba(240,192,96,0.15)",
                  color: "#f0c060",
                  border: "1px solid rgba(240,192,96,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(240,192,96,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(240,192,96,0.15)";
                }}
              >
                Ver en Maps →
              </a>
            </div>
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

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div
      className="flex items-start gap-4 rounded-2xl"
      style={{
        padding: "16px 20px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <span className="text-xl mt-0.5">{icon}</span>
      <div>
        <p
          className="font-bold uppercase tracking-widest mb-0.5"
          style={{
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.2em",
          }}
        >
          {label}
        </p>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", fontWeight: 500 }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function WhatsAppIconSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
