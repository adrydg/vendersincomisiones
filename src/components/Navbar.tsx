'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { OpenLeadFormButton } from './LeadFormModal';

export default function Navbar() {
  const [isBarriosOpen, setIsBarriosOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsBarriosOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsBarriosOpen(false);
    }, 300); // 300ms delay antes de cerrar
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light text-slate-900">
              Vender <span className="font-bold">Sin Comisiones</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-amber-600 transition-colors">
              Inicio
            </Link>
            <Link
              href="/comparador"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Comparar Agencias
            </Link>
            <Link
              href="/noticias"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Noticias
            </Link>

            {/* Dropdown Barrios */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-slate-700 hover:text-amber-600 transition-colors flex items-center">
                Barrios
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isBarriosOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-sm shadow-2xl border border-slate-200 py-2">
                  <Link
                    href="/barrios"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-semibold border-b border-slate-100"
                  >
                    📍 Ver Todos los Barrios
                  </Link>
                  <Link
                    href="/centro"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Sol / Ópera
                  </Link>
                  <Link
                    href="/salamanca"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Salamanca
                  </Link>
                  <Link
                    href="/chamberi"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Chamberí
                  </Link>
                  <Link
                    href="/retiro"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Retiro
                  </Link>
                  <Link
                    href="/chueca"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Chueca
                  </Link>
                  <Link
                    href="/malasana"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    Malasaña
                  </Link>
                  <Link
                    href="/latina"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                  >
                    La Latina
                  </Link>
                </div>
              )}
            </div>

            <OpenLeadFormButton className="text-slate-700 hover:text-amber-600 transition-colors cursor-pointer">
              Contacto
            </OpenLeadFormButton>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <Link
              href="/colaborar"
              className="bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-sm hover:bg-green-700 transition-all font-semibold shadow-md hover:shadow-lg text-xs sm:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Soy agencia y quiero colaborar</span>
              <span className="sm:hidden">Soy agencia</span>
            </Link>
            <OpenLeadFormButton
              className="bg-amber-500 text-slate-900 px-3 py-2 sm:px-6 sm:py-2 rounded-sm hover:bg-amber-400 transition-all font-semibold shadow-md hover:shadow-lg text-xs sm:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Solicitar Ofertas</span>
              <span className="sm:hidden">Solicitar ofertas</span>
            </OpenLeadFormButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
