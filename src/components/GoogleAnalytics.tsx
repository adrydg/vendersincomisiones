'use client';

import Script from 'next/script';

/**
 * Componente de Google Analytics 4 y Google Ads para Vender Sin Comisiones
 *
 * Este componente carga Google Analytics y Google Ads de manera optimizada usando Next.js Script.
 * Se carga con strategy="afterInteractive" para no bloquear la carga inicial de la página.
 *
 * IDs de medición:
 * - Google Analytics: G-JWSD843DGC (Vender Sin Comisiones)
 * - Google Ads: AW-17610611430
 *
 * Uso: Añadir en el layout principal (app/layout.tsx) para que se ejecute en todas las páginas.
 */
export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-JWSD843DGC';
  const GOOGLE_ADS_ID = 'AW-17610611430';

  return (
    <>
      {/* Google Tag (gtag.js) - Script de carga */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="lazyOnload"
      />

      {/* Google Analytics 4 y Google Ads - Configuración */}
      <Script id="google-analytics-ads" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Google Ads Configuration
          gtag('config', '${GOOGLE_ADS_ID}', {
            page_path: window.location.pathname,
          });

          // Google Analytics Configuration
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
