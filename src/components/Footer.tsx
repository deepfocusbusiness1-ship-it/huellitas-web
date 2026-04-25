import React from "react";
import AppLogo from "@/components/ui/AppLogo";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      className="border-t"
      style={{
        background: "#0e1a14",
        borderColor: "rgba(255,255,255,0.06)",
        padding: "48px 24px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* 1. Logo + copyright */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <AppLogo
              size={40}
              text="Huellitas"
              iconName="HeartIcon"
              textStyle={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}
            />
            <span
              className="font-medium"
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}
            >
              © {currentYear} Huellitas Pets Shop — Santa Fe, Argentina
            </span>
          </div>

          {/* 2. NUEVA SECCIÓN: Horarios de Atención */}
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-2" style={{ color: "#f0c060" }}>
              <ClockIcon />
              <span className="font-semibold uppercase tracking-wider" style={{ fontSize: "0.75rem" }}>
                Horarios de Atención
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              Lunes a Sábado: 9:00 a 13:00 — 16:30 a 20:00 hs
            </p>
          </div>

          {/* 3. Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "Inicio", href: "#inicio" },
              { label: "Productos", href: "#productos" },
              { label: "Ubicación", href: "#ubicacion" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold transition-colors duration-200"
                style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#f0c060";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.35)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 4. Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/huellitaspetsshop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Huellitas Pets Shop"
              className="flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: "38px",
                height: "38px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#f0c060";
                (e.currentTarget as HTMLAnchorElement).style.color = "#f0c060";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/5493425492412"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Huellitas Pets Shop"
              className="flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: "38px",
                height: "38px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "#25D366";
                (e.currentTarget as HTMLAnchorElement).style.color = "#25D366";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              <WAIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- ICONOS ---

function ClockIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
