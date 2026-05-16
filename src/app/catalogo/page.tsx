"use client";

import { useState } from "react";
import { productos, type Categoria } from "@/data/productos";
import ProductCard from "@/components/ProductCard";

const FILTROS: { valor: Categoria | "todos"; etiqueta: string; emoji: string }[] = [
  { valor: "todos",      etiqueta: "Todos",      emoji: "🐾" },
  { valor: "perros",     etiqueta: "Perros",     emoji: "🐶" },
  { valor: "gatos",      etiqueta: "Gatos",      emoji: "🐱" },
  { valor: "juguetes",   etiqueta: "Juguetes",   emoji: "🎾" },
  { valor: "camas",      etiqueta: "Camas",      emoji: "🛏️" },
  { valor: "ropa",       etiqueta: "Ropa",       emoji: "👕" },
  { valor: "accesorios", etiqueta: "Accesorios", emoji: "🎒" },
  { valor: "higiene",    etiqueta: "Higiene",    emoji: "🛁" },
];

export default function CatalogoPage() {
  const [filtroActivo, setFiltroActivo] = useState<Categoria | "todos">("todos");

  const productosFiltrados =
    filtroActivo === "todos"
      ? productos
      : productos.filter((p) => p.categoria === filtroActivo);

  return (
    <main className="min-h-screen" style={{ background: "#f0ebe3" }}>
      {/* Header */}
      <section
        className="py-12 px-4 text-center"
        style={{ background: "#1c3a2f" }}
      >
        <h1
          className="text-4xl font-bold mb-3"
          style={{
            color: "#c9912a",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Catálogo de Productos
        </h1>
        <p className="text-lg" style={{ color: "#a8c5b0" }}>
          Todo lo que tu mascota necesita, en un solo lugar
        </p>
      </section>

      {/* Filtros */}
      <section className="sticky top-0 z-10 py-4 px-4 shadow-sm" style={{ background: "#f0ebe3" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {FILTROS.map((filtro) => {
            const activo = filtroActivo === filtro.valor;
            return (
              <button
                key={filtro.valor}
                onClick={() => setFiltroActivo(filtro.valor)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200"
                style={{
                  background: activo ? "#1c3a2f" : "#ffffff",
                  color: activo ? "#c9912a" : "#1c3a2f",
                  border: activo ? "2px solid #1c3a2f" : "2px solid #e2d9ce",
                }}
              >
                <span>{filtro.emoji}</span>
                {filtro.etiqueta}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grilla de productos */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {productosFiltrados.length === 0 ? (
          <p className="text-center text-lg" style={{ color: "#5a6e65" }}>
            No hay productos en esta categoría todavía.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}// v2 
