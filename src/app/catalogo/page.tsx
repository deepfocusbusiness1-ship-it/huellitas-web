"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import EncarguesRopa from "@/components/EncarguesRopa";
import { productos, whatsappGeneral, type Categoria } from "@/data/productos";

// ── Paleta Huellitas ────────────────────────────────────────
// Verde oscuro:  #1c3a2f
// Dorado:        #c9912a
// Crema/fondo:   #f0ebe3

const categorias: { valor: Categoria | "todos"; etiqueta: string; emoji: string }[] = [
  { valor: "todos",    etiqueta: "Todo",      emoji: "🐾" },
  { valor: "perros",   etiqueta: "Perros",    emoji: "🐶" },
  { valor: "gatos",    etiqueta: "Gatos",     emoji: "🐱" },
  { valor: "juguetes", etiqueta: "Juguetes",  emoji: "🎾" },
  { valor: "camas",    etiqueta: "Camas",     emoji: "🏠" },
  { valor: "ropa",     etiqueta: "Ropa",      emoji: "🧥" },
];

const categoriasValidas = categorias.map((c) => c.valor);

const WHATSAPP_ICON_SM = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.5l5.797-1.522A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.367l-.36-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12c0-5.465 4.435-9.9 9.9-9.9 5.464 0 9.9 4.435 9.9 9.9 0 5.464-4.436 9.9-9.9 9.9z" />
  </svg>
);

// ── Componente interno que usa useSearchParams ──────────────
function CatalogoContenido() {
  const searchParams = useSearchParams();
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria | "todos">("todos");

  // Leer el parámetro ?categoria= de la URL al cargar
  useEffect(() => {
    const param = searchParams.get("categoria") as Categoria | "todos" | null;
    if (param && categoriasValidas.includes(param)) {
      setCategoriaActiva(param);
    }
  }, [searchParams]);

  const productosFiltrados =
    categoriaActiva === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  const mostrarEncargues =
    categoriaActiva === "todos" || categoriaActiva === "ropa";

  // Título dinámico según categoría activa
  const tituloCategoria = categorias.find((c) => c.valor === categoriaActiva);

  return (
    <main style={{ background: "#f0ebe3", minHeight: "100vh" }}>

      {/* ── HERO HEADER ──────────────────────────────────── */}
      <section
        className="relative px-4 py-14 text-center overflow-hidden"
        style={{ background: "#1c3a2f" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #c9912a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c9912a 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: "#c9912a" }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#c9912a" }}
            >
              Pets Shop · Santa Fe, Argentina
            </span>
            <div className="h-px w-8" style={{ background: "#c9912a" }} />
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#ffffff", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {categoriaActiva === "todos" ? (
              <>
                Todo para el bienestar{" "}
                <span style={{ color: "#c9912a", fontStyle: "italic" }}>de tu mascota.</span>
              </>
            ) : (
              <>
                {tituloCategoria?.emoji}{" "}
                <span style={{ color: "#c9912a", fontStyle: "italic" }}>
                  {tituloCategoria?.etiqueta}
                </span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base" style={{ color: "#9ab8a8" }}>
            Consultá precios por WhatsApp y recibilo en la puerta de tu casa.
          </p>

          <span
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold px-5 py-2 rounded-full border"
            style={{
              borderColor: "rgba(201,145,42,0.4)",
              color: "#c9912a",
              background: "rgba(201,145,42,0.08)",
            }}
          >
            🚚 Envío sin cargo en Santa Fe Capital
          </span>
        </div>
      </section>

      {/* ── FILTROS ──────────────────────────────────────── */}
      <div
        className="sticky top-0 z-20 border-b"
        style={{ background: "#1c3a2f", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {categorias.map(({ valor, etiqueta, emoji }) => (
            <button
              key={valor}
              onClick={() => setCategoriaActiva(valor)}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200"
              style={
                categoriaActiva === valor
                  ? { background: "#c9912a", color: "#1c3a2f" }
                  : {
                      background: "transparent",
                      color: "#9ab8a8",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }
              }
            >
              <span>{emoji}</span>
              {etiqueta}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENIDO ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

        {productosFiltrados.length > 0 && (
          <p className="text-sm" style={{ color: "#8a9e94" }}>
            {productosFiltrados.length} producto
            {productosFiltrados.length !== 1 ? "s" : ""} encontrado
            {productosFiltrados.length !== 1 ? "s" : ""}
          </p>
        )}

        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🐾</p>
            <p
              className="text-lg font-bold"
              style={{ color: "#1c3a2f", fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Próximamente más productos.
            </p>
            <p className="text-sm mt-1" style={{ color: "#8a9e94" }}>
              Mientras tanto, consultanos por WhatsApp.
            </p>
          </div>
        )}

        {mostrarEncargues && <EncarguesRopa />}

        {/* CTA consulta general */}
        <div
          className="rounded-2xl px-6 py-10 text-center"
          style={{ background: "#f5f0e8", border: "1px solid #e2d9ce" }}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#c9912a" }}
          >
            ¿Tenés alguna consulta?
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: "#1c3a2f", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Tu mascota merece{" "}
            <span style={{ color: "#c9912a", fontStyle: "italic" }}>lo mejor.</span>
          </h3>
          <p className="text-sm mb-6" style={{ color: "#5a6e65" }}>
            Escribinos y te asesoramos sin compromiso. Respondemos rápido y con gusto.
          </p>
          <a
            href={whatsappGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-200"
            style={{ background: "#c9912a", color: "#1c3a2f" }}
          >
            {WHATSAPP_ICON_SM}
            Escribinos por WhatsApp
          </a>
          <p className="text-xs mt-3 tracking-widest" style={{ color: "#9ab8a8" }}>
            Respondemos en minutos · Sin costo
          </p>
        </div>
      </div>

      {/* ── BOTÓN FLOTANTE WHATSAPP ───────────────────────── */}
      <a
        href={whatsappGeneral()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full transition-all duration-200 hover:scale-110"
        style={{ background: "#c9912a", boxShadow: "0 4px 20px rgba(201,145,42,0.4)" }}
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1c3a2f" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.5l5.797-1.522A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.367l-.36-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12c0-5.465 4.435-9.9 9.9-9.9 5.464 0 9.9 4.435 9.9 9.9 0 5.464-4.436 9.9-9.9 9.9z" />
        </svg>
      </a>
    </main>
  );
}

// ── Wrapper con Suspense (requerido por Next.js para useSearchParams) ──
export default function CatalogoPage() {
  return (
    <Suspense fallback={
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#f0ebe3" }}
      >
        <p style={{ color: "#1c3a2f", fontFamily: "Georgia, serif", fontSize: "1.2rem" }}>
          Cargando catálogo... 🐾
        </p>
      </div>
    }>
      <CatalogoContenido />
    </Suspense>
  );
}
