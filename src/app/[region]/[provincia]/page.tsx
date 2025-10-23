import { Metadata } from 'next';
import Link from 'next/link';
import { getAllProvinces, getProvinceBySlug } from '@/data/provinces';
import { getRegionBySlug } from '@/data/regions';
import { getCitiesByProvince } from '@/data/cities';

interface PageProps {
  params: Promise<{
    region: string;
    provincia: string;
  }>;
}

export async function generateStaticParams() {
  const provinces = getAllProvinces();

  return provinces.map((province) => ({
    region: province.regionSlug,
    provincia: province.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region: regionSlug, provincia: provinciaSlug } = await params;
  const province = getProvinceBySlug(provinciaSlug);
  const region = getRegionBySlug(regionSlug);

  if (!province || !region) {
    return {
      title: 'Provincia no encontrada',
    };
  }

  const title = `Vender Sin Comisión Vendedor en ${province.name} - Ahorra hasta 15.000€`;
  const description = `💰 Comparamos las mejores inmobiliarias de ${province.name}, ${region.name} que NO te cobran comisión como vendedor. Ahorra entre 9.000€ y 15.000€ en gastos de venta.`;

  return {
    title,
    description,
    keywords: [
      `vender sin comisiones ${province.name}`,
      `vender casa sin comisiones vendedor ${province.name}`,
      `inmobiliarias ${province.name} sin gastos vendedor`,
      `vender piso ${province.name} sin comisión`,
      `agencias inmobiliarias ${province.name}`,
      `comparador inmobiliarias ${province.name}`,
      `vender sin gastos ${region.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function ProvincePage({ params }: PageProps) {
  const { region: regionSlug, provincia: provinciaSlug } = await params;
  const province = getProvinceBySlug(provinciaSlug);
  const region = getRegionBySlug(regionSlug);
  const cities = province ? getCitiesByProvince(province.slug) : [];

  if (!province || !region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Provincia no encontrada</h1>
          <Link href="/" className="text-amber-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const featuredCities = cities.filter((c) => c.featured);
  const allCitiesSorted = [...cities].sort((a, b) => b.population - a.population);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {region.name} → {province.name}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              <span className="font-bold">Vender Sin Comisión Vendedor en {province.name}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
              {province.description}
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
              href={`/${region.slug}`}
              className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors shadow-md border border-slate-200"
            >
              Ver {region.name}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {province.population.toLocaleString('es-ES')}
              </div>
              <div className="text-slate-600">Habitantes</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">{cities.length}</div>
              <div className="text-slate-600">Ciudades Disponibles</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">0€</div>
              <div className="text-slate-600">Comisión Vendedor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      {featuredCities.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ciudades Destacadas de {province.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${region.slug}/${province.slug}/vender-sin-comision-vendedor-en-${city.slug}`}
                  className="bg-slate-50 p-6 rounded-xl hover:bg-amber-50 transition-colors border border-slate-200 hover:border-amber-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-amber-600">{city.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Vende tu casa sin pagar comisión en {city.name}
                  </p>
                  <div className="text-sm text-slate-500">
                    {city.population.toLocaleString('es-ES')} habitantes
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Cities */}
      {allCitiesSorted.length > 0 && (
        <section className="py-20 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Todas las Ciudades de {province.name}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allCitiesSorted.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${region.slug}/${province.slug}/vender-sin-comision-vendedor-en-${city.slug}`}
                  className="bg-white p-4 rounded-lg hover:bg-amber-50 transition-colors text-center border border-slate-200 hover:border-amber-300"
                >
                  <div className="font-semibold text-amber-600">{city.name}</div>
                  <div className="text-xs text-slate-500 mt-1">
                    {(city.population / 1000).toFixed(0)}k hab.
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ventajas de Vender Sin Comisión en {province.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Ahorra entre 9.000€ y 15.000€</h3>
              <p className="text-slate-600">
                En {province.name}, las comisiones tradicionales pueden costar una fortuna. Con nuestras
                inmobiliarias asociadas, tú no pagas nada como vendedor.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Servicio Completo Incluido</h3>
              <p className="text-slate-600">
                Fotografía profesional, publicación en los principales portales, gestión de visitas y asesoramiento
                legal. Todo sin coste para ti.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Compara y Elige</h3>
              <p className="text-slate-600">
                Recibe múltiples ofertas de las mejores agencias de {province.name}. Compara servicios, condiciones
                y elige la mejor opción para ti.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Proceso Rápido</h3>
              <p className="text-slate-600">
                Solicita tu comparación ahora y recibe respuestas de agencias verificadas en menos de 24 horas.
                Simple y sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo Funciona en {province.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Solicita Comparación</h3>
              <p className="text-slate-600">
                Completa el formulario con los datos de tu propiedad en {province.name}. Tarda menos de 2 minutos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Recibe Ofertas</h3>
              <p className="text-slate-600">
                Las mejores inmobiliarias de {province.name} te contactarán con sus propuestas. Todas sin comisión
                para ti.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Compara y Vende</h3>
              <p className="text-slate-600">
                Analiza las ofertas, elige la mejor opción y vende tu casa ahorrando miles de euros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Vender Sin Comisión en {province.name}?
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
