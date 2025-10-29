import { Metadata } from 'next';
import Link from 'next/link';
import { getAllRegions } from '@/data/regions';
import { getAllCities, buildCityURL } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Vender Sin Comisión Vendedor en toda España - Ciudades Disponibles',
  description:
    '💰 Comparamos las mejores inmobiliarias que NO te cobran comisión como vendedor en más de 100 ciudades de España. Ahorra entre 9.000€ y 15.000€ en gastos de venta.',
  keywords: [
    'vender sin comisiones España',
    'vender casa sin comisiones vendedor',
    'inmobiliarias sin gastos vendedor',
    'ciudades España vender sin comisión',
    'comparador inmobiliarias España',
    'ahorro comisiones venta',
  ],
};

export default function CiudadesPage() {
  const regions = getAllRegions();
  const allCities = getAllCities();

  // Agrupar ciudades por región
  const citiesByRegion = regions.map((region) => ({
    region,
    cities: allCities
      .filter((city) => city.regionSlug === region.slug)
      .sort((a, b) => b.population - a.population),
  }));

  // Ciudades destacadas (las 12 más grandes)
  const featuredCities = [...allCities]
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Cobertura Nacional
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              <span className="font-bold">Vender Sin Comisión Vendedor en toda España</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-800 font-light leading-relaxed max-w-4xl mx-auto">
              Comparamos las mejores inmobiliarias que{' '}
              <span className="inline-block bg-amber-500/20 px-3 py-1 rounded-md text-amber-700 font-semibold">
                NO te cobran comisión como vendedor
              </span>{' '}
              en más de 100 ciudades de España. Ahorra entre 9.000€ y 15.000€ en gastos de venta.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/comparador"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Comparar Inmobiliarias Gratis
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">19</div>
              <div className="text-slate-800">Comunidades Autónomas</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">52</div>
              <div className="text-slate-800">Provincias</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-slate-800">Ciudades</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">0€</div>
              <div className="text-slate-800">Comisión Vendedor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ciudades Destacadas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={buildCityURL(city)}
                className="bg-slate-50 p-6 rounded-xl hover:bg-amber-50 transition-colors border border-slate-200 hover:border-amber-300 group"
              >
                <h3 className="text-xl font-bold mb-2 text-amber-600 group-hover:text-amber-700">
                  {city.name}
                </h3>
                <p className="text-slate-800 text-sm mb-2">{city.province}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-900">
                    {city.population.toLocaleString('es-ES')} habitantes
                  </span>
                  <span className="text-amber-600 group-hover:text-amber-700 font-semibold text-sm">
                    Ver agencias →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities by Region */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Todas las Ciudades por Comunidad Autónoma
          </h2>

          <div className="space-y-8">
            {citiesByRegion.map(({ region, cities }) => {
              if (cities.length === 0) return null;

              return (
                <div key={region.slug} className="bg-white p-6 rounded-xl shadow-md">
                  <Link
                    href={`/${region.slug}`}
                    className="text-2xl font-bold mb-4 text-amber-600 hover:text-amber-700 inline-block"
                  >
                    {region.name} →
                  </Link>
                  <p className="text-slate-800 mb-6">{region.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={buildCityURL(city)}
                        className="text-slate-900 hover:text-amber-600 hover:underline text-sm p-2 rounded hover:bg-amber-50 transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por Qué Vender Sin Comisión?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg font-bold mb-2">Ahorra Miles de €</h3>
              <p className="text-slate-800 text-sm">
                Evita pagar entre 9.000€ y 15.000€ en comisiones de venta
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-lg font-bold mb-2">Servicio Completo</h3>
              <p className="text-slate-800 text-sm">
                Fotografía, publicación y gestión incluida sin coste
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2">Múltiples Ofertas</h3>
              <p className="text-slate-800 text-sm">
                Compara agencias verificadas sin compromiso en tu ciudad
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Rápido y Fácil</h3>
              <p className="text-slate-800 text-sm">
                Respuesta en menos de 24 horas en cualquier ciudad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Vender Sin Comisión en tu Ciudad?
          </h2>
          <p className="text-xl mb-8 text-amber-50">
            Compara las mejores inmobiliarias que no cobran al vendedor y ahorra hasta 15.000€
          </p>
          <Link
            href="/comparador"
            className="inline-block bg-white text-amber-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Comparar Inmobiliarias Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
