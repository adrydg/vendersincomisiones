import Link from 'next/link';
import { getMadridMetropolitanCities } from '@/data/cities';

export default function Footer() {
  const madridCities = getMadridMetropolitanCities();

  // Dividir ciudades en grupos para mejor visualización
  const citiesGroup1 = madridCities.slice(0, 7);
  const citiesGroup2 = madridCities.slice(7, 14);
  const citiesGroup3 = madridCities.slice(14);

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
              Vende tu casa sin que el comprador pague comisión. Las mejores
              inmobiliarias de España eliminan la comisión del comprador para que
              vendas más rápido y al mejor precio.
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
                <Link href="/barrios" className="text-sm hover:text-white transition-colors">
                  Barrios
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
              <li className="text-sm">Vender sin comisiones</li>
              <li className="text-sm">Valoración gratuita</li>
              <li className="text-sm">Venta rápida</li>
              <li className="text-sm">Ahorro comprador</li>
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
            Vender Casa Sin Comisiones en la Comunidad de Madrid
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-4 gap-y-2">
            {citiesGroup1.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/vender-casa-sin-comisiones-vendedor`}
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
                href={`/${city.slug}/vender-casa-sin-comisiones-vendedor`}
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2 mt-2">
            {citiesGroup3.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/vender-casa-sin-comisiones-vendedor`}
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Principales ciudades de España */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white text-base font-semibold mb-6 text-center">
            Vender Sin Comisiones en España
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-center">
            <Link href="/barcelona/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Barcelona
            </Link>
            <Link href="/valencia/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Valencia
            </Link>
            <Link href="/sevilla/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Sevilla
            </Link>
            <Link href="/malaga/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Málaga
            </Link>
            <Link href="/zaragoza/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Zaragoza
            </Link>
            <Link href="/bilbao/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Bilbao
            </Link>
            <Link href="/alicante/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Alicante
            </Link>
            <Link href="/cordoba/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Córdoba
            </Link>
            <Link href="/valladolid/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Valladolid
            </Link>
            <Link href="/granada/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Granada
            </Link>
            <Link href="/murcia/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Murcia
            </Link>
            <Link href="/palma-de-mallorca/vender-casa-sin-comisiones-vendedor" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
              Palma
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vender Sin Comisiones. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            Vende tu casa sin que el comprador pague comisión en toda España. Venta más rápida y al mejor precio.
          </p>
        </div>
      </div>
    </footer>
  );
}
