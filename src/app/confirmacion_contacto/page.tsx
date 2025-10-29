'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ConfirmacionContacto() {
  useEffect(() => {
    // Track conversion event in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'Lead',
        event_label: 'Formulario Completado',
        value: 1,
      });

      // Track as page view
      window.gtag('event', 'page_view', {
        page_title: 'Confirmación de Contacto',
        page_location: window.location.href,
        page_path: '/confirmacion_contacto',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 rounded-full p-6 inline-block">
              <svg
                className="w-16 h-16 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¡Solicitud Recibida Correctamente!
          </h1>

          <p className="text-lg text-gray-800 mb-6">
            Hemos recibido tu solicitud. Las mejores inmobiliarias de tu zona se pondrán en contacto contigo en las próximas 24 horas.
          </p>

          {/* Info Box */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              ¿Qué Ocurre Ahora?
            </h2>
            <ul className="text-left space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <span>Recibirás un email de confirmación con los detalles de tu solicitud</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏢</span>
                <span>Hasta 3 inmobiliarias verificadas recibirán tu solicitud</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <span>Te contactarán en menos de 24 horas para ofrecerte propuestas sin compromiso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <span>Compara y ahorra hasta 15.000€ en comisiones</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">24h</div>
              <div className="text-xs md:text-sm text-gray-900">Tiempo de Respuesta</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-green-600">0€</div>
              <div className="text-xs md:text-sm text-gray-900">Comisión Vendedor</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-amber-600">100%</div>
              <div className="text-xs md:text-sm text-gray-900">Gratis y Sin Compromiso</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Volver al Inicio
            </Link>
            <Link
              href="/ciudades"
              className="bg-white text-amber-600 border-2 border-amber-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors"
            >
              Explorar Ciudades
            </Link>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-700 mt-8">
            Si no recibes ninguna llamada en 48 horas, por favor revisa tu carpeta de spam o{' '}
            <Link href="/contacto" className="text-amber-600 hover:underline font-semibold">
              contáctanos
            </Link>
            .
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-sm font-semibold text-gray-900">Datos Protegidos</div>
            <div className="text-xs text-gray-700">RGPD Compliant</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-sm font-semibold text-gray-900">Agencias Verificadas</div>
            <div className="text-xs text-gray-700">Solo profesionales</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-md">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm font-semibold text-gray-900">Miles de Clientes</div>
            <div className="text-xs text-gray-700">Satisfechos</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
