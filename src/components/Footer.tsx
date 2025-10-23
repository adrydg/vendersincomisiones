import Link from 'next/link';
import { getMadridMetropolitanCities, type City } from '@/data/cities';
import { getAllRegions } from '@/data/regions';

export default function Footer() {
  const madridCities = getMadridMetropolitanCities();
  const regions = getAllRegions();

  // Dividir ciudades de Madrid en grupos para mejor visualización
  const citiesGroup1 = madridCities.slice(0, 7);
  const citiesGroup2 = madridCities.slice(7, 14);
  const citiesGroup3 = madridCities.slice(14);

  // Helper para construir URL de ciudad
  const buildCityURL = (city: City) => {
    return `/${city.regionSlug}/${city.provinceSlug}/vender-sin-comision-vendedor-en-${city.slug}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sección principal con descripción y enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Sobre nosotros */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Vender Sin Comisiones
            </h3>
            <p className="text-sm text-gray-400">
              Comparamos las mejores inmobiliarias de España que NO cobran
              comisión al vendedor. Ahorra miles de euros en gastos de venta
              y vende tu casa sin desembolso.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/comparador" className="text-sm hover:text-white transition-colors">
                  Comparador
                </Link>
              </li>
              <li>
                <Link href="/ciudades" className="text-sm hover:text-white transition-colors">
                  Ciudades
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-sm hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-sm">Vender sin comisiones vendedor</li>
              <li className="text-sm">Comparador de agencias</li>
              <li className="text-sm">Ahorro garantizado</li>
              <li className="text-sm">Múltiples ofertas</li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/aviso-legal" className="text-sm hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-sm hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-sm hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="text-sm hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de ciudades de la Comunidad de Madrid */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white text-base font-semibold mb-6 text-center">
            Vender Casa Sin Comisiones Vendedor en la Comunidad de Madrid
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-4 gap-y-2">
            {citiesGroup1.map((city) => (
              <Link
                key={city.slug}
                href={buildCityURL(city)}
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-4 gap-y-2 mt-2">
            {citiesGroup2.map((city) => (
              <Link
                key={city.slug}
                href={buildCityURL(city)}
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-4 gap-y-2 mt-2">
            {citiesGroup3.map((city) => (
              <Link
                key={city.slug}
                href={buildCityURL(city)}
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Comunidades Autónomas de España */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white text-base font-semibold mb-6 text-center">
            Vender Sin Comisiones en Todas las Comunidades Autónomas
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2 text-center">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/${region.slug}`}
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                {region.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vender Sin Comisiones. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            Comparador de inmobiliarias sin gastos para el vendedor. Ahorra miles de euros en toda España.
          </p>
        </div>
      </div>
    </footer>
  );
}
