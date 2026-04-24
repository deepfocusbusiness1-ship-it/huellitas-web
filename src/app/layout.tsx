import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// ⚠️ FIX: título y descripción genéricos reemplazados por los reales del negocio
export const metadata: Metadata = {
  title: 'Huellitas Pets Shop | Nutrición Premium y Diseño Exclusivo — Santa Fe',
  description:
    'Tienda especializada en nutrición premium para mascotas: Royal Canin, Purina Pro Plan, Eukanuba y más. Camas, accesorios y ropa de temporada. Envío SIN CARGO en Santa Fe.',
  icons: {
    icon: [{ url: '/assets/images/app_logo.png', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ⚠️ FIX: lang="en" → lang="es" (el sitio es en español)
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
