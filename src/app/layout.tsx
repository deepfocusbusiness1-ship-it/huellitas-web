import React from "react";
import type { Metadata, Viewport } from "next";
import "../styles/index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ⚠️ FIX: título y descripción genéricos reemplazados por los reales del negocio
export const metadata: Metadata = {
  title:
    "Huellitas Pets Shop | Nutrición Premium y Diseño Exclusivo — Santa Fe",
  description:
    "Tienda especializada en nutrición premium para mascotas: Royal Canin, Purina Pro Plan, Eukanuba y más. Camas, accesorios y ropa de temporada. Envío SIN CARGO en Santa Fe.",
  icons: {
    icon: [{ url: "/assets/images/app_logo.png", type: "image/x-icon" }],
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ⚠️ FIX: lang="en" → lang="es" (el sitio es en español)
  return (
    <html lang="es">
      <body>
        {children}
        <Script id="valkya-analytics" strategy="afterInteractive">
          {`
            (function() {
              const supabaseUrl = 'https://geovzkhxkxqdmymoeyxg.supabase.co';
              const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlb3Z6a2h4a3hxZG15bW9leXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjE4ODMsImV4cCI6MjA5NzczNzg4M30.dwETwY_lQfIeZa8BscSY1YIYHoQOkzWeAtUXO4t6tKY';
              const clientId = 'c_1783268517071';

              async function enviarEvento(tipoEvento) {
                try {
                  await fetch(supabaseUrl + '/rest/v1/vk_bot_events', {
                    method: 'POST',
                    headers: {
                      'apikey': supabaseKey,
                      'Authorization': 'Bearer ' + supabaseKey,
                      'Content-Type': 'application/json',
                      'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                      client_id: clientId,
                      event_type: tipoEvento
                    })
                  });
                } catch (err) {
                  console.error('Error al registrar métrica en Valkya:', err);
                }
              }

              // Registrar vista al cargar
              enviarEvento('view');

              // Exponer función global
              window.ValkyaTrack = enviarEvento;
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
