"use client";

import Image from "next/image";
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.5l5.797-1.522A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.367l-.36-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12c0-5.465 4.435-9.9 9.9-9.9 5.464 0 9.9 4.435 9.9 9.9 0 5.464-4.436 9.9-9.9 9.9z" />
  </svg>
);

export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#ffffff",
        border: "1px solid #e2d9ce",
        boxShadow: "0 2px 8px rgba(28,58,47,0.07)",
      }}
    >
      {/* Imagen */}
      <div
        className="relative w-full h-48 overflow-hidden"
        style={{ background: "#f0ebe3" }}
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/placeholder-producto.png";
          }}
        />

        {/* Badge subcategoría */}
        {producto.subcategoria && (
          <span
            className="absolute top-3 left-3 text-xs font-bold tracking-widest px-2.5 py-1 rounded-full uppercase"
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
            className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
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
          style={{ color: "#1c3a2f", fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {producto.nombre}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "#5a6e65" }}>
          {producto.descripcion}
        </p>

        {/* Envío sin cargo */}
        <p className="text-xs font-semibold flex items-center gap-1.5" style={{ color: "#2d5a3d" }}>
          <span>🚚</span> Envío sin cargo en Santa Fe Capital
        </p>

        {/* Botón WhatsApp — estilo dorado como la web */}
        <a
          href={whatsappProducto(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center justify-center gap-2 font-bold text-sm py-3 px-4 rounded-xl tracking-wide transition-all duration-200 uppercase"
          style={{
            background: "#c9912a",
            color: "#1c3a2f",
          }}
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
