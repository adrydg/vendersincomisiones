import Link from 'next/link';
import { getMadridMetropolitanCities, buildCityURL } from '@/data/cities';

export default function Footer() {
  const madridCities = getMadridMetropolitanCities();

  // Dividir ciudades de Madrid en dos columnas
  const madridFirstHalf = madridCities.slice(0, Math.ceil(madridCities.length / 2));
  const madridSecondHalf = madridCities.slice(Math.ceil(madridCities.length / 2));

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Sección superior: Información de la empresa */}
        <div className="mb-12 max-w-3xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Vender Sin Comisiones</h3>
          <p className="text-gray-400 mb-6 text-lg">
            Comparamos las mejores inmobiliarias de España que NO cobran comisión al vendedor.
            Ahorra miles de euros en gastos de venta. Servicio gratuito y sin compromiso.
          </p>
        </div>

        {/* Secciones: Legal, Navegación, Servicios, Información */}
        <div className="border-t border-gray-800 pt-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Enlaces legales */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/aviso-legal" className="text-sm hover:text-emerald-400 transition-colors">
                    Aviso Legal
                  </Link>
                </li>
                <li>
                  <Link href="/politica-privacidad" className="text-sm hover:text-emerald-400 transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/politica-cookies" className="text-sm hover:text-emerald-400 transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-condiciones" className="text-sm hover:text-emerald-400 transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Enlaces del sitio */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-emerald-400 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/comparador" className="text-sm hover:text-emerald-400 transition-colors">
                    Comparador
                  </Link>
                </li>
                <li>
                  <Link href="/ciudades" className="text-sm hover:text-emerald-400 transition-colors">
                    Ciudades
                  </Link>
                </li>
                <li>
                  <Link href="/noticias" className="text-sm hover:text-emerald-400 transition-colors">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm hover:text-emerald-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li className="text-sm">Vender sin comisiones vendedor</li>
                <li className="text-sm">Comparador de agencias</li>
                <li className="text-sm">Ahorro garantizado</li>
                <li className="text-sm">Múltiples ofertas</li>
              </ul>
            </div>

            {/* Información */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Información</h4>
              <p className="text-sm text-gray-400">
                Comparamos inmobiliarias que NO cobran al vendedor en toda España.
                Ahorra entre 9.000€ y 15.000€ en gastos de venta.
              </p>
            </div>
          </div>
        </div>

        {/* Ciudades y Comunidades Autónomas organizadas */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloque 1: Comunidad de Madrid (2 columnas) */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                {/* Columna 1: Madrid (primera mitad) */}
                <div>
                  <div className="space-y-2">
                    {madridFirstHalf.map((city) => (
                      <Link
                        key={city.slug}
                        href={buildCityURL(city)}
                        className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Columna 2: Madrid (segunda mitad) */}
                <div>
                  <div className="space-y-2">
                    {madridSecondHalf.map((city) => (
                      <Link
                        key={city.slug}
                        href={buildCityURL(city)}
                        className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque 2: Resto de Comunidades Autónomas */}
            <div>
              <div className="space-y-2">
                <Link
                  href="/andalucia"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Andalucía
                </Link>
                <Link
                  href="/aragon"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Aragón
                </Link>
                <Link
                  href="/asturias"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Asturias
                </Link>
                <Link
                  href="/baleares"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Islas Baleares
                </Link>
                <Link
                  href="/canarias"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Canarias
                </Link>
                <Link
                  href="/cantabria"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Cantabria
                </Link>
                <Link
                  href="/castilla-la-mancha"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Castilla-La Mancha
                </Link>
                <Link
                  href="/castilla-y-leon"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Castilla y León
                </Link>
                <Link
                  href="/cataluna"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Cataluña
                </Link>
                <Link
                  href="/comunidad-valenciana"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Comunidad Valenciana
                </Link>
                <Link
                  href="/extremadura"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Extremadura
                </Link>
                <Link
                  href="/galicia"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Galicia
                </Link>
                <Link
                  href="/la-rioja"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  La Rioja
                </Link>
                <Link
                  href="/murcia"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Murcia
                </Link>
                <Link
                  href="/navarra"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Navarra
                </Link>
                <Link
                  href="/pais-vasco"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  País Vasco
                </Link>
                <Link
                  href="/ceuta"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Ceuta
                </Link>
                <Link
                  href="/melilla"
                  className="block hover:underline text-gray-400 hover:text-emerald-400 text-sm transition-colors"
                >
                  Melilla
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vender Sin Comisiones. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">
              Comparador de inmobiliarias sin gastos para el vendedor. Ahorra miles de euros en toda España.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
