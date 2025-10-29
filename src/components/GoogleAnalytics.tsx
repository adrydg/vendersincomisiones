'use client';

import Script from 'next/script';

/**
 * Componente de Google Analytics 4 para Vender Sin Comisiones
 *
 * Este componente carga Google Analytics de manera optimizada usando Next.js Script.
 * Se carga con strategy="afterInteractive" para no bloquear la carga inicial de la página.
 *
 * ID de medición: G-JWSD843DGC (Vender Sin Comisiones)
 *
 * Uso: Añadir en el layout principal (app/layout.tsx) para que se ejecute en todas las páginas.
 */
export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-JWSD843DGC';

  return (
    <>
      {/* Google Analytics 4 - Script de carga */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Google Analytics 4 - Configuración */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
