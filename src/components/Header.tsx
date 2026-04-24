"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Ubicación", href: "#ubicacion" },
];

const WHATSAPP_URL =
  "https://wa.me/5493425492412?text=Hola%20Huellitas%2C%20vi%20su%20web%20y%20quería%20hacer%20una%20consulta.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[200]"
      style={{
        padding: scrolled ? "10px 24px" : "20px 24px",
        transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl"
        style={{
          padding: "12px 24px",
          background: scrolled
            ? "rgba(14, 26, 20, 0.95)"
            : "rgba(14, 26, 20, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "background 0.4s ease",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-3 group">
          <AppLogo
            size={48}
            text="Huellitas"
            iconName="HeartIcon"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-semibold transition-colors duration-200"
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#f0c060";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-bold rounded-full transition-all duration-300"
            style={{
              padding: "10px 22px",
              background: "#25D366",
              color: "#fff",
              fontSize: "0.8rem",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(37,211,102,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(37,211,102,0.3)";
            }}
          >
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : i === 1
                        ? "opacity: 0" :"rotate(-45deg) translate(5px, -5px)" :"none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl overflow-hidden max-w-7xl mx-auto"
          style={{
            background: "rgba(14, 26, 20, 0.97)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold px-8 py-4 transition-colors"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#f0c060";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="px-8 pt-2 pb-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-bold rounded-full w-full"
                style={{
                  padding: "14px 24px",
                  background: "#25D366",
                  color: "#fff",
                  fontSize: "0.9rem",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}