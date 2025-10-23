import { Metadata } from 'next';
import Link from 'next/link';
import { getAllRegions, getRegionBySlug } from '@/data/regions';
import { getProvincesByRegion } from '@/data/provinces';
import { getCitiesByRegion } from '@/data/cities';

interface PageProps {
  params: Promise<{
    region: string;
  }>;
}

export async function generateStaticParams() {
  const regions = getAllRegions();
  return regions.map((region) => ({
    region: region.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);

  if (!region) {
    return {
      title: 'Región no encontrada',
    };
  }

  const title = `Vender Sin Comisión Vendedor en ${region.name} - Ahorra hasta 15.000€`;
  const description = `💰 Comparamos las mejores inmobiliarias de ${region.name} que NO te cobran comisión como vendedor. Ahorra entre 9.000€ y 15.000€ en gastos de venta. Cobertura en todas las provincias.`;

  return {
    title,
    description,
    keywords: [
      `vender sin comisiones ${region.name}`,
      `vender casa sin comisiones vendedor ${region.name}`,
      `inmobiliarias ${region.name} sin gastos vendedor`,
      `vender piso ${region.name} sin comisión`,
      `agencias inmobiliarias ${region.name}`,
      `comparador inmobiliarias ${region.name}`,
      `vender sin gastos`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function RegionPage({ params }: PageProps) {
  const { region: regionSlug } = await params;
  const region = getRegionBySlug(regionSlug);
  const provinces = region ? getProvincesByRegion(region.slug) : [];
  const cities = region ? getCitiesByRegion(region.slug) : [];

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Región no encontrada</h1>
          <Link href="/" className="text-amber-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const featuredCities = cities.filter((c) => c.featured).slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {region.name}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              <span className="font-bold">Vender Sin Comisión Vendedor en {region.name}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              {region.description}
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
            <Link
              href="/ciudades"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors shadow-md border border-slate-200"
            >
              Ver Todas las Ciudades
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">9.000-15.000€</div>
              <div className="text-slate-600">Ahorro Promedio</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">{provinces.length}</div>
              <div className="text-slate-600">Provincias Disponibles</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">0€</div>
              <div className="text-slate-600">Comisión Vendedor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Provinces Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Provincias de {region.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinces.map((province) => (
              <Link
                key={province.slug}
                href={`/${region.slug}/${province.slug}`}
                className="bg-slate-50 p-6 rounded-xl hover:bg-amber-50 transition-colors border border-slate-200 hover:border-amber-300"
              >
                <h3 className="text-xl font-bold mb-2 text-amber-600">{province.name}</h3>
                <p className="text-slate-600 text-sm mb-3">{province.description}</p>
                <div className="text-sm text-slate-500">
                  {province.population.toLocaleString('es-ES')} habitantes
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      {featuredCities.length > 0 && (
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ciudades Destacadas de {region.name}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.regionSlug}/${city.provinceSlug}/vender-sin-comision-vendedor-en-${city.slug}`}
                  className="bg-white p-4 rounded-lg hover:bg-amber-50 transition-colors text-center border border-slate-200 hover:border-amber-300"
                >
                  <div className="font-semibold text-amber-600">{city.name}</div>
                  <div className="text-xs text-slate-500 mt-1">
                    {(city.population / 1000).toFixed(0)}k hab.
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/ciudades" className="text-amber-600 hover:underline font-semibold">
                Ver todas las ciudades →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por Qué Vender Sin Comisión en {region.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg font-bold mb-2">Ahorra Miles de €</h3>
              <p className="text-slate-600 text-sm">
                Evita pagar entre 9.000€ y 15.000€ en comisiones de venta
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-lg font-bold mb-2">Servicio Completo</h3>
              <p className="text-slate-600 text-sm">
                Fotografía, publicación y gestión incluida sin coste
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2">Múltiples Ofertas</h3>
              <p className="text-slate-600 text-sm">
                Compara agencias verificadas sin compromiso
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Rápido y Fácil</h3>
              <p className="text-slate-600 text-sm">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Vender Sin Comisión en {region.name}?
          </h2>
          <p className="text-xl mb-8 text-amber-50">
            Compara las mejores inmobiliarias que no cobran al vendedor
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
