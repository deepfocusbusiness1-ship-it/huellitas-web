"use client";

import { useState } from "react";
import { whatsappProducto, type Producto } from "@/data/productos";

// Paleta Huellitas
// Verde oscuro:  #1c3a2f
// Dorado:        #c9912a
// Crema/fondo:   #f0ebe3
// Verde medio:   #2d5a3d

interface ProductCardProps {
  producto: Producto;
}

const WHATSAPP_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 flex-shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.5l5.797-1.522A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.367l-.36-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12c0-5.465 4.435-9.9 9.9-9.9 5.464 0 9.9 4.435 9.9 9.9 0 5.464-4.436 9.9-9.9 9.9z" />
  </svg>
);

export default function ProductCard({ producto }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listaImagenes =
    producto.imagenes && producto.imagenes.length > 0
      ? producto.imagenes
      : [producto.imagen];

  const currentItem = listaImagenes[currentIndex];
  const currentUrl = typeof currentItem === "string" ? currentItem : currentItem.url;
  const currentLabel =
    typeof currentItem === "object"
      ? currentItem.etiqueta || currentItem.nombre
      : null;

  const hasMultiple = listaImagenes.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? listaImagenes.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === listaImagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#ffffff",
        border: "1px solid #e2d9ce",
        boxShadow: "0 2px 8px rgba(28,58,47,0.07)",
      }}
    >
      {/* Imagen + Galería */}
      <div
        className="relative w-full overflow-hidden select-none"
        style={{ height: "220px", background: "#f0ebe3" }}
      >
        <img
          src={currentUrl}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Flecha Izquierda */}
        {hasMultiple && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
            style={{
              background: "rgba(28, 58, 47, 0.8)",
              color: "#ffffff",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Flecha Derecha */}
        {hasMultiple && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente imagen"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
            style={{
              background: "rgba(28, 58, 47, 0.8)",
              color: "#ffffff",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Indicador de Puntos (Dots) */}
        {hasMultiple && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            {listaImagenes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-4 bg-[#c9912a]" : "w-2 bg-white/60"
                }`}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Badge subcategoría */}
        {producto.subcategoria && (
          <span
            className="absolute top-3 left-3 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full uppercase z-10"
            style={{
              background: "rgba(28,58,47,0.85)",
              color: "#c9912a",
              backdropFilter: "blur(4px)",
            }}
          >
            {producto.subcategoria}
          </span>
        )}

        {/* Badge destacado */}
        {producto.destacado && (
          <span
            className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full z-10"
            style={{ background: "#c9912a", color: "#1c3a2f" }}
          >
            ★ Destacado
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3
          className="font-bold text-base leading-snug"
          style={{
            color: "#1c3a2f",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {producto.nombre}
        </h3>

        {/* Etiqueta de la variante/estilo si existe */}
        {currentLabel && (
          <div
            className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg w-fit"
            style={{ background: "#e6ede8", color: "#1c3a2f", border: "1px solid #c8dbc9" }}
          >
            <span style={{ color: "#c9912a" }}>✦</span> {currentLabel}
          </div>
        )}

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#5a6e65" }}
        >
          {producto.descripcion}
        </p>

        {/* Envío sin cargo */}
        <p
          className="text-xs font-semibold flex items-center gap-1.5"
          style={{ color: "#2d5a3d" }}
        >
          <span>🚚</span> Envío sin cargo en Santa Fe Capital
        </p>

        {/* Botón WhatsApp */}
        <a
          href={whatsappProducto(
            currentLabel
              ? `${producto.nombre} - ${currentLabel}`
              : producto.nombre
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).ValkyaTrack) {
              (window as any).ValkyaTrack("chat");
            }
          }}
          className="mt-1 flex items-center justify-center gap-2 font-bold text-sm py-3 px-4 rounded-xl tracking-wide transition-all duration-200 uppercase"
          style={{ background: "#c9912a", color: "#1c3a2f" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#b8801f";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#c9912a";
          }}
        >
          {WHATSAPP_ICON}
          Consultar precio
        </a>
      </div>
    </div>
  );
}

