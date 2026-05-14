"use client";

import { useState } from "react";
import { whatsappEncargue, opcionesEncargue } from "@/data/productos";

// Paleta Huellitas
// Verde oscuro:  #1c3a2f
// Dorado:        #c9912a
// Crema/fondo:   #f0ebe3

const WHATSAPP_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.5l5.797-1.522A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.031-1.367l-.36-.214-3.742.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12c0-5.465 4.435-9.9 9.9-9.9 5.464 0 9.9 4.435 9.9 9.9 0 5.464-4.436 9.9-9.9 9.9z" />
  </svg>
);

export default function EncarguesRopa() {
  const [seleccion, setSeleccion] = useState("");
  const [detalle, setDetalle] = useState("");

  const mensajeFinal = seleccion
    ? seleccion === "Otro diseño (lo describís en el mensaje)"
      ? detalle
      : `${seleccion}${detalle ? ` — Detalle: ${detalle}` : ""}`
    : "";

  return (
    <section
      className="rounded-2xl overflow-hidden"
      style={{ background: "#1c3a2f" }}
    >
      {/* Header de la sección */}
      <div className="px-6 pt-8 pb-6 md:px-10">
        {/* Etiqueta estilo web */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-6" style={{ background: "#c9912a" }} />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#c9912a" }}
          >
            Encargues especiales
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-1"
          style={{
            color: "#ffffff",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Ropa{" "}
          <span style={{ color: "#c9912a", fontStyle: "italic" }}>
            personalizada.
          </span>
        </h2>

        <p className="text-base leading-relaxed mt-3 max-w-lg" style={{ color: "#9ab8a8" }}>
          ¿Querés que tu perro o gato luzca la camiseta de Argentina o la del
          equipo de tu corazón? Pedí tu encargue y lo coordinamos por WhatsApp.
          Diseños únicos, tela suave y tallado a medida. 🐾
        </p>
      </div>

      {/* Opciones */}
      <div
        className="px-6 pb-6 md:px-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mt-6 mb-3"
          style={{ color: "#9ab8a8" }}
        >
          Elegí una opción
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          {opcionesEncargue.map((opcion) => (
            <button
              key={opcion}
              onClick={() => {
                setSeleccion(opcion);
                setDetalle("");
              }}
              className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                seleccion === opcion
                  ? {
                      background: "#c9912a",
                      color: "#1c3a2f",
                      border: "2px solid #c9912a",
                    }
                  : {
                      background: "rgba(255,255,255,0.06)",
                      color: "#d4e8dc",
                      border: "2px solid rgba(255,255,255,0.12)",
                    }
              }
            >
              {opcion}
            </button>
          ))}
        </div>

        {/* Campo de detalle */}
        {seleccion && (
          <div className="mb-5">
            <label
              className="block text-xs font-bold tracking-widest uppercase mb-2"
              style={{ color: "#9ab8a8" }}
            >
              {seleccion === "Otro diseño (lo describís en el mensaje)"
                ? "Describí lo que querés"
                : "Detalle adicional (talle, color, nombre de la mascota…)"}
            </label>
            <textarea
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              placeholder={
                seleccion === "Otro diseño (lo describís en el mensaje)"
                  ? "Ej: Remera de Boca Juniors talle M para golden retriever…"
                  : "Ej: Talle M, color celeste, nombre 'Coco' bordado…"
              }
              rows={3}
              className="w-full px-4 py-3 text-sm rounded-xl resize-none focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff",
              }}
            />
          </div>
        )}

        {/* Botón */}
        <a
          href={mensajeFinal ? whatsappEncargue(mensajeFinal) : "#"}
          target={mensajeFinal ? "_blank" : undefined}
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!mensajeFinal) {
              e.preventDefault();
              alert("Por favor seleccioná una opción primero.");
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-200"
          style={
            mensajeFinal
              ? { background: "#c9912a", color: "#1c3a2f", cursor: "pointer" }
              : {
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.3)",
                  cursor: "not-allowed",
                }
          }
        >
          {WHATSAPP_ICON}
          Pedir encargue por WhatsApp
        </a>

        <p className="text-xs mt-3" style={{ color: "#6a9080" }}>
          Coordinamos talle, diseño y precio. Entrega aprox. 5–7 días hábiles.
        </p>
      </div>
    </section>
  );
}
