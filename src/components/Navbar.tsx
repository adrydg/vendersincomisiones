'use client';

import Link from 'next/link';
import { OpenLeadFormButton } from './LeadFormModal';

export default function Navbar() {

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

            <Link
              href="/ciudades"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Ciudades
            </Link>

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
