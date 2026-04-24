import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huellitas Pets Shop | Nutrición Premium y Diseño Exclusivo — Santa Fe",
  description:
    "Tienda especializada en nutrición premium para mascotas: Royal Canin, Purina Pro Plan, Eukanuba y más. Camas, accesorios y ropa de temporada. Envío SIN CARGO en Santa Fe.",
  keywords:
    "tienda mascotas santa fe, alimentos premium mascotas, royal canin santa fe, purina pro plan, camas mascotas, huellitas pets shop",
  openGraph: {
    title: "Huellitas Pets Shop | Nutrición Premium — Santa Fe",
    description: "Bienestar animal con Envío SIN CARGO en Santa Fe. Royal Canin, Purina Pro Plan, Eukanuba y más.",
    type: "website",
    locale: "es_AR",
  },
};

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
