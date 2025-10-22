import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNeighborhoodBySlug, getAllNeighborhoods } from '@/data/neighborhoods';
import { getAllAgencies } from '@/data/agencies';
import AgencyCard from '@/components/AgencyCard';
import { OpenLeadFormButton } from '@/components/LeadFormModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const neighborhoods = getAllNeighborhoods();
  return neighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);

  if (!neighborhood) {
    return {
      title: 'Barrio no encontrado',
    };
  }

  return {
    title: `Vende tu Casa en ${neighborhood.name}, Centro de Madrid con Descuentos hasta 30%`,
    description: `🏠 Vende tu casa en ${neighborhood.name} ahorrando hasta un 30% en comisiones. Ofertas exclusivas de las mejores inmobiliarias de ${neighborhood.name}. ✅ Valoración gratuita ✅ Sin compromiso`,
    keywords: [
      `vender casa ${neighborhood.name.toLowerCase()} centro madrid`,
      `vender piso ${neighborhood.name.toLowerCase()} madrid`,
      `inmobiliarias ${neighborhood.name.toLowerCase()} madrid`,
      `pisos ${neighborhood.name.toLowerCase()} madrid`,
      `comprar piso ${neighborhood.name.toLowerCase()} madrid`,
      `alquilar piso ${neighborhood.name.toLowerCase()} madrid`,
      `agencias inmobiliarias ${neighborhood.name.toLowerCase()} centro madrid`,
      `viviendas ${neighborhood.name.toLowerCase()} madrid`,
      `precio piso ${neighborhood.name.toLowerCase()} madrid`,
      `tasacion ${neighborhood.name.toLowerCase()} madrid`,
      `valoracion gratis ${neighborhood.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `Vende tu Casa en ${neighborhood.name}, Centro de Madrid con Descuentos hasta 30%`,
      description: `Vende tu casa en ${neighborhood.name} ahorrando hasta un 30% en comisiones. Ofertas exclusivas de las mejores inmobiliarias. Valoración gratuita y sin compromiso.`,
      type: 'website',
    },
  };
}

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);

  if (!neighborhood) {
    notFound();
  }

  const allAgencies = getAllAgencies();
  const neighborhoodAgencies = allAgencies.filter((agency) =>
    neighborhood.agencyIds.includes(agency.id)
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
      {/* Header del Barrio */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <Link href="/barrios" className="hover:underline">
              Barrios
            </Link>
            <span className="mx-2">›</span>
            <span>{neighborhood.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Inmobiliarias en {neighborhood.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-6">{neighborhood.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{neighborhood.population.toLocaleString()}</div>
              <div className="text-sm text-blue-100">Habitantes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{neighborhood.averagePricePerM2.sale}</div>
              <div className="text-sm text-blue-100">€/m² venta</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{neighborhood.averagePricePerM2.rent}</div>
              <div className="text-sm text-blue-100">€/m² alquiler</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{neighborhood.area}</div>
              <div className="text-sm text-blue-100">Superficie</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Solicitar Oferta en el Barrio */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                ¿Quieres vender en {neighborhood.name}?
              </h3>
              <p className="text-xl text-blue-100">
                Recibe ofertas mejoradas de las mejores inmobiliarias especializadas en tu zona
              </p>
            </div>
            <OpenLeadFormButton className="group inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-blue-900/50 hover:scale-105 duration-300 cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Solicitar Oferta Mejorada en {neighborhood.name}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </OpenLeadFormButton>
            <p className="text-sm text-blue-200">
              ✓ Gratis y sin compromiso  •  ✓ Agencias verificadas  •  ✓ Respuesta en 24h
            </p>
          </div>
        </div>
      </section>

      {/* Información Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Características Clave */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                🏘️ Características de {neighborhood.name}
              </h2>
              <ul className="space-y-3">
                {neighborhood.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ventajas del Barrio */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">✨ Ventajas de Vivir Aquí</h2>
              <ul className="space-y-3">
                {neighborhood.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Vivienda y Precios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            🏠 Viviendas Disponibles en {neighborhood.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Compra</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {neighborhood.averagePricePerM2.sale}
              </div>
              <p className="text-gray-600 mb-4">Precio medio por m²</p>
              <p className="text-sm text-gray-500">
                Basado en datos de transacciones recientes en {neighborhood.name}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-green-600">Alquiler</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {neighborhood.averagePricePerM2.rent}
              </div>
              <p className="text-gray-600 mb-4">Precio medio por m²/mes</p>
              <p className="text-sm text-gray-500">
                Datos actualizados de alquileres en {neighborhood.name}
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
              Tipos de Vivienda más Comunes
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhood.propertyTypes.map((type, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios y Equipamientos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Servicios y Equipamientos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Transporte */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🚇</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transporte</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {neighborhood.transportLinks.map((link, index) => (
                  <li key={index}>• {link}</li>
                ))}
              </ul>
            </div>

            {/* Educación */}
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Educación</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {neighborhood.schools.map((school, index) => (
                  <li key={index}>• {school}</li>
                ))}
              </ul>
            </div>

            {/* Salud */}
            <div className="bg-red-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Salud</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {neighborhood.healthCenters.map((center, index) => (
                  <li key={index}>• {center}</li>
                ))}
              </ul>
            </div>

            {/* Ocio y Parques */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Parques</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {neighborhood.parks.map((park, index) => (
                  <li key={index}>• {park}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Amenities adicionales */}
          {neighborhood.amenities.length > 0 && (
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Centros Comerciales y Ocio
              </h3>
              <div className="bg-purple-50 rounded-lg p-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {neighborhood.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-2">▶</span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Inmobiliarias del Barrio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Inmobiliarias que Trabajan en {neighborhood.name}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Estas son las mejores agencias inmobiliarias con experiencia demostrada en{' '}
            {neighborhood.name}. Solicita ofertas gratuitas y sin compromiso.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoodAgencies.map((agency) => (
              <AgencyCard key={agency.id} agency={agency} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <OpenLeadFormButton
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
            >
              Solicitar Ofertas de Inmobiliarias en {neighborhood.name}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </OpenLeadFormButton>
          </div>
        </div>
      </section>

      {/* SEO Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none text-gray-900">
            <h2>¿Por Qué Comprar o Alquilar en {neighborhood.name}, Centro de Madrid?</h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              {neighborhood.name} es uno de los barrios más solicitados de Centro de Madrid, con{' '}
              <strong>{neighborhood.population.toLocaleString()} habitantes</strong> y una edad
              media de <strong>{neighborhood.averageAge} años</strong>. Este barrio destaca por su{' '}
              {neighborhood.description.toLowerCase()}
            </p>

            <h3>Precios de Vivienda en {neighborhood.name} (2025)</h3>
            <p>
              El precio medio de la vivienda en {neighborhood.name} se sitúa en{' '}
              <strong>{neighborhood.averagePricePerM2.sale} por metro cuadrado</strong> en venta, y{' '}
              <strong>{neighborhood.averagePricePerM2.rent} por metro cuadrado al mes</strong> en
              alquiler.
            </p>

            <p>
              Para un piso típico de <strong>80 m²</strong> en {neighborhood.name}, estarías
              hablando de:
            </p>
            <ul>
              <li>
                <strong>Compra:</strong> Entre{' '}
                {(
                  parseInt(neighborhood.averagePricePerM2.sale.replace(/[^\d]/g, '')) * 80
                ).toLocaleString()}
                € y{' '}
                {(
                  parseInt(
                    neighborhood.averagePricePerM2.sale.split('-')[1]?.replace(/[^\d]/g, '') ||
                      neighborhood.averagePricePerM2.sale.replace(/[^\d]/g, '')
                  ) * 80
                ).toLocaleString()}
                €
              </li>
              <li>
                <strong>Alquiler:</strong> Entre{' '}
                {(
                  parseInt(neighborhood.averagePricePerM2.rent.replace(/[^\d]/g, '')) * 80
                ).toLocaleString()}
                € y{' '}
                {(
                  parseInt(
                    neighborhood.averagePricePerM2.rent.split('-')[1]?.replace(/[^\d]/g, '') ||
                      neighborhood.averagePricePerM2.rent.replace(/[^\d]/g, '')
                  ) * 80
                ).toLocaleString()}
                € al mes
              </li>
            </ul>

            <h3>Conectividad y Transporte</h3>
            <p>
              Una de las grandes ventajas de {neighborhood.name} es su excelente conectividad:
            </p>
            <ul>
              {neighborhood.transportLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>

            <h3>Educación y Colegios en {neighborhood.name}</h3>
            <p>
              Las familias con niños encontrarán en {neighborhood.name} una excelente oferta
              educativa:
            </p>
            <ul>
              {neighborhood.schools.map((school, index) => (
                <li key={index}>{school}</li>
              ))}
            </ul>

            <h3>Servicios Sanitarios</h3>
            <p>El barrio cuenta con acceso a:</p>
            <ul>
              {neighborhood.healthCenters.map((center, index) => (
                <li key={index}>{center}</li>
              ))}
            </ul>

            <h3>Mejores Inmobiliarias para Comprar o Alquilar en {neighborhood.name}</h3>
            <p>
              Si estás buscando piso en {neighborhood.name}, te recomendamos contactar con las
              agencias inmobiliarias colaboradoras especializadas en esta zona. Todas verificadas y con excelentes resultados.
            </p>

            <h3>Conclusión: ¿Vale la Pena {neighborhood.name}?</h3>
            <p>
              {neighborhood.name} es una excelente opción si buscas{' '}
              {neighborhood.benefits[0].toLowerCase()}. Con un precio medio de{' '}
              <strong>{neighborhood.averagePricePerM2.sale}</strong>, ofrece una de las mejores
              relaciones calidad-precio de Centro de Madrid.
            </p>

            <p>
              <strong>
                Solicita ofertas gratuitas de las mejores inmobiliarias de {neighborhood.name} sin
                compromiso.
              </strong>
            </p>
          </article>

          <div className="mt-12 text-center">
            <OpenLeadFormButton
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-lg cursor-pointer"
            >
              Recibir Ofertas Gratis de Inmobiliarias
            </OpenLeadFormButton>
          </div>
        </div>
      </section>

      {/* Otros Barrios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Explora Otros Barrios de Centro de Madrid
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getAllNeighborhoods()
              .filter((n) => n.id !== neighborhood.id)
              .slice(0, 4)
              .map((n) => (
                <Link
                  key={n.id}
                  href={`/${n.slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{n.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{n.description}</p>
                  <div className="text-blue-600 font-semibold text-sm">
                    Ver inmobiliarias →
                  </div>
                </Link>
              ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/barrios"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Ver Todos los Barrios de Centro de Madrid
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
