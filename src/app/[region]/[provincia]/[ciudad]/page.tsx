import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCities, getCityBySlug } from '@/data/cities';
import { getProvinceBySlug } from '@/data/provinces';
import { getRegionBySlug, isUniprovincialRegion } from '@/data/regions';
import CityLeadForm from '@/components/CityLeadForm';
import FloatingCTA from '@/components/FloatingCTA';
import { OpenLeadFormButton } from '@/components/LeadFormModal';

interface PageProps {
  params: Promise<{
    region: string;
    provincia: string;
    ciudad: string;
  }>;
}

export async function generateStaticParams() {
  const cities = getAllCities();

  // Solo generar rutas para ciudades de comunidades multiprovinciales
  return cities
    .filter((city) => !isUniprovincialRegion(city.regionSlug))
    .map((city) => ({
      region: city.regionSlug,
      provincia: city.provinceSlug,
      ciudad: city.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region: regionSlug, provincia: provinciaSlug, ciudad: ciudadSlug } = await params;
  const city = getCityBySlug(ciudadSlug);
  const province = getProvinceBySlug(provinciaSlug);
  const region = getRegionBySlug(regionSlug);

  if (!city || !province || !region) {
    return {
      title: 'Ciudad no encontrada',
    };
  }

  const title = `Vender Casa Sin Comisiones en ${city.name} - Inmobiliarias que NO Cobran al Vendedor`;
  const description = `💰 Inmobiliarias que no cobran comisión al vendedor en ${city.name}. Vende tu piso sin comisiones y ahorra entre 9.000€ y 15.000€. Comparador gratuito de agencias en ${province.name}.`;

  return {
    title,
    description,
    keywords: [
      `vender casa sin comisiones en ${city.name}`,
      `vender mi piso sin comision al vendedor ${city.name}`,
      `inmobiliarias que no cobran comision al vendedor ${city.name}`,
      `inmobiliarias sin comisiones al vendedor ${city.name}`,
      `vender piso sin comision ${city.name}`,
      `agencias sin comisiones vendedor ${city.name}`,
      `vender sin comisiones ${city.name}`,
      `inmobiliarias ${city.name} sin gastos vendedor`,
      `comparador inmobiliarias ${city.name}`,
      `vender casa sin gastos ${province.name}`,
      `inmobiliarias sin comisión ${region.name}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { region: regionSlug, provincia: provinciaSlug, ciudad: ciudadSlug } = await params;
  const city = getCityBySlug(ciudadSlug);
  const province = getProvinceBySlug(provinciaSlug);
  const region = getRegionBySlug(regionSlug);

  if (!city || !province || !region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Ciudad no encontrada</h1>
          <Link href="/" className="text-amber-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const averageSavings = '12.000';
  const commissionRate = '3-5%';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {region.name} → {province.name}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-gray-900">
              Vender Sin Comisión Vendedor en {city.name}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-800 font-medium leading-relaxed max-w-4xl mx-auto">
              Comparamos las mejores inmobiliarias de {city.name} que{' '}
              <span className="inline-block bg-amber-500 px-3 py-1 rounded-md text-white font-bold shadow-md">
                NO te cobran comisión como vendedor
              </span>
              . Ahorra entre 9.000€ y 15.000€ en gastos de venta.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <OpenLeadFormButton
              className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                Comparar Inmobiliarias Gratis
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </OpenLeadFormButton>
            <Link
              href="/ciudades"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors shadow-md border border-slate-300"
            >
              Ver Más Ciudades
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{averageSavings}€</div>
              <div className="text-gray-800 font-semibold">Ahorro Promedio</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0€</div>
              <div className="text-gray-800 font-semibold">Comisión Vendedor</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-800 font-semibold">Gratis para Ti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por Qué Vender Sin Comisión en {city.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Ahorra Miles de Euros</h3>
              <p className="text-slate-600">
                En {city.name}, las comisiones tradicionales pueden costar entre 9.000€ y 15.000€. Con nuestras
                inmobiliarias asociadas, tú no pagas nada como vendedor.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Servicio Completo</h3>
              <p className="text-slate-600">
                Fotografía profesional, publicación en portales, gestión de visitas y trámites. Todo incluido sin
                coste para el vendedor.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Comparador Gratuito</h3>
              <p className="text-slate-600">
                Comparamos las mejores agencias de {city.name} para que elijas la que mejor se adapte a tus
                necesidades. Sin compromiso.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Rápido y Sencillo</h3>
              <p className="text-slate-600">
                Recibe múltiples ofertas de agencias verificadas de {province.name} en menos de 24 horas. Compara y
                elige sin presión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo Funciona en {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Solicita Comparación</h3>
              <p className="text-slate-600">
                Completa el formulario con los datos de tu propiedad en {city.name}. Es rápido y sin compromiso.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Recibe Ofertas</h3>
              <p className="text-slate-600">
                Las mejores inmobiliarias de {city.name} te contactarán. Todas sin comisión para el vendedor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Elige y Vende</h3>
              <p className="text-slate-600">
                Compara propuestas, elige la mejor opción y vende tu casa ahorrando miles de euros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Información sobre {city.name}
          </h2>

          <div className="bg-slate-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Ciudad</h3>
                <p className="text-lg">{city.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Provincia</h3>
                <p className="text-lg">{province.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Comunidad Autónoma</h3>
                <p className="text-lg">{region.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">Población</h3>
                <p className="text-lg">{city.population.toLocaleString('es-ES')} habitantes</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="font-semibold text-slate-700 mb-3">
                ¿Cuánto Ahorras Vendiendo Sin Comisión en {city.name}?
              </h3>
              <p className="text-slate-600 mb-4">
                En {city.name}, las inmobiliarias tradicionales cobran entre un {commissionRate} de comisión al
                vendedor. Para una vivienda de valor medio, esto supone entre 9.000€ y 15.000€ en gastos.
              </p>
              <p className="text-slate-600">
                Con las agencias que comparamos en nuestra plataforma, tú como vendedor no pagas nada. El comprador
                asume los gastos de intermediación, lo que te permite ahorrar esa cantidad completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <CityLeadForm cityName={city.name} defaultPropertyType="vender" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Vender Sin Comisión en {city.name}?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Compara las mejores inmobiliarias que no cobran al vendedor y ahorra hasta 15.000€
          </p>
          <OpenLeadFormButton
            className="group inline-flex items-center gap-2 bg-white text-emerald-700 px-10 py-5 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              Comparar Inmobiliarias Gratis
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </OpenLeadFormButton>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Otras ciudades en {province.name}
          </h2>
          <div className="text-center">
            <Link
              href="/ciudades"
              className="text-amber-600 hover:underline font-semibold"
            >
              Ver todas las ciudades →
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA targetId="lead-form" text="Recibir Ofertas Gratis" />
    </div>
  );
}
