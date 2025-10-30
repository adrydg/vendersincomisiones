'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0.5">
            <div className="text-2xl font-bold text-gray-900">
              Vender<span className="text-blue-700">SinComisiones</span>
            </div>
            <p className="text-xs text-gray-600 font-normal">
              Vende tu casa y no pagues comisión de agencia
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/ciudades"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Ciudades
            </Link>
            <Link
              href="/comparador"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Comparador
            </Link>
            <Link
              href="/colaborar"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Colaborar
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/comparador"
              className="bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md"
            >
              Solicitar Ofertas
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/ciudades"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ciudades
              </Link>
              <Link
                href="/comparador"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparador
              </Link>
              <Link
                href="/colaborar"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Colaborar
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="/comparador"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Ofertas
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
