import { Metadata } from 'next';
import Link from 'next/link';
import { getAllNeighborhoods } from '@/data/neighborhoods';
import { OpenLeadFormButton } from '@/components/LeadFormModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vende tu Casa en Centro de Madrid por Barrios - Descuentos hasta 30% en Comisiones',
  description:
    '🏠 Vende tu casa en cualquier barrio de Centro de Madrid con descuentos exclusivos hasta 30%. Sol, Salamanca, Chamberí, Retiro, Chueca, Malasaña, La Latina. ✅ Ofertas mejoradas ✅ Valoración gratuita ✅ Sin compromiso',
  keywords: [
    'vender casa centro madrid por barrios',
    'vender piso centro madrid',
    'barrios centro madrid',
    'zonas centro madrid',
    'donde vender centro madrid',
    'mejores barrios centro madrid',
    'inmobiliarias por barrio centro madrid',
    'precios por barrio centro madrid',
    'sol madrid',
    'salamanca madrid',
    'chamberi madrid',
    'retiro madrid',
    'chueca madrid',
    'malasaña madrid',
    'la latina madrid',
    'huertas madrid',
    'vender con descuento centro madrid',
    'tasacion gratuita centro madrid',
  ],
};

export default function BarriosPage() {
  const neighborhoods = getAllNeighborhoods();

  // Ordenar por población (más grande primero)
  const sortedNeighborhoods = [...neighborhoods].sort((a, b) => b.population - a.population);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Barrios de Centro de Madrid
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Explora todos los barrios de Centro de Madrid: características, precios, servicios e
            inmobiliarias especializadas en cada zona. Encuentra tu hogar ideal.
          </p>
        </div>
      </section>

      {/* Comparativa Rápida */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Comparativa de Barrios (2025)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Barrio
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Habitantes
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Precio Venta (€/m²)
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Precio Alquiler (€/m²)
                  </th>
                  <th className="border-b-2 border-blue-600 p-4 font-bold text-gray-900">
                    Características
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedNeighborhoods.map((neighborhood) => (
                  <tr key={neighborhood.id} className="hover:bg-gray-50">
                    <td className="border-b border-gray-200 p-4">
                      <Link
                        href={`/${neighborhood.slug}`}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {neighborhood.name}
                      </Link>
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-700">
                      {neighborhood.population.toLocaleString()}
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-700 font-semibold">
                      {neighborhood.averagePricePerM2.sale}
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-700 font-semibold">
                      {neighborhood.averagePricePerM2.rent}
                    </td>
                    <td className="border-b border-gray-200 p-4 text-gray-600 text-sm">
                      {neighborhood.keyFeatures[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grid de Barrios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Guía Detallada por Barrio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNeighborhoods.map((neighborhood) => (
              <article
                key={neighborhood.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{neighborhood.name}</h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span>👥 {neighborhood.population.toLocaleString()}</span>
                    <span>📍 {neighborhood.area}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{neighborhood.description}</p>

                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-50 p-2 rounded">
                        <div className="text-xs text-gray-600">Venta</div>
                        <div className="font-bold text-blue-600">
                          {neighborhood.averagePricePerM2.sale}
                        </div>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <div className="text-xs text-gray-600">Alquiler</div>
                        <div className="font-bold text-green-600">
                          {neighborhood.averagePricePerM2.rent}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Ventajas:</h4>
                    <ul className="space-y-1">
                      {neighborhood.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
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
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Transporte:</h4>
                    <div className="flex flex-wrap gap-1">
                      {neighborhood.transportLinks.slice(0, 2).map((link, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {link.split(' - ')[0] || link.substring(0, 20)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/${neighborhood.slug}`}
                    className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver Inmobiliarias en {neighborhood.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Barrios - Solicitar Oferta Mejorada */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                ¿Quieres vender en tu barrio?
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
              Solicitar Oferta Mejorada en mi Barrio
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

      {/* Información adicional SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none text-gray-900">
            <h2>Guía Completa de los Barrios de Centro de Madrid (2025)</h2>

            <p className="text-xl text-gray-700">
              Centro de Madrid es una ciudad con <strong>193.000 habitantes</strong> situada en la zona
              sur de la Comunidad de Madrid. Cada barrio tiene su propia personalidad, precios y
              ventajas. Esta guía te ayudará a decidir dónde vivir en Centro de Madrid.
            </p>

            <h3>¿Cuál es el Mejor Barrio de Centro de Madrid?</h3>

            <p>
              La respuesta depende de tus necesidades y presupuesto:
            </p>

            <ul>
              <li>
                <strong>Mejor zona exclusiva:</strong> Loranca y La Avanzada (chalets y
                urbanizaciones modernas)
              </li>
              <li>
                <strong>Mejor relación calidad-precio:</strong> La Serna y Vivero (pisos amplios a
                buen precio)
              </li>
              <li>
                <strong>Mejor conectividad:</strong> Centro de Madrid Centro y Hospital (Metro L12 y
                Cercanías)
              </li>
              <li>
                <strong>Mejor para familias:</strong> Parque de los Estados y El Molino (colegios y
                zonas verdes)
              </li>
              <li>
                <strong>Más económico:</strong> Vivero (1.600€-1.900€/m²)
              </li>
              <li>
                <strong>Más moderno:</strong> Loranca y Parque de los Estados (construcción reciente)
              </li>
            </ul>

            <h3>Precios de Vivienda por Barrio en Centro de Madrid (2025)</h3>

            <p>Estos son los precios medios actualizados por barrio:</p>

            <ol>
              <li>
                <strong>La Avanzada:</strong> 2.400€ - 2.900€/m² (chalets)
              </li>
              <li>
                <strong>Loranca:</strong> 2.300€ - 2.700€/m²
              </li>
              <li>
                <strong>Hospital:</strong> 2.100€ - 2.450€/m²
              </li>
              <li>
                <strong>Centro de Madrid Centro:</strong> 2.100€ - 2.400€/m²
              </li>
              <li>
                <strong>Parque de los Estados:</strong> 2.200€ - 2.550€/m²
              </li>
              <li>
                <strong>El Molino:</strong> 2.000€ - 2.300€/m²
              </li>
              <li>
                <strong>La Serna:</strong> 1.800€ - 2.100€/m²
              </li>
              <li>
                <strong>Vivero:</strong> 1.600€ - 1.900€/m²
              </li>
            </ol>

            <h3>Conectividad: Metro y Transporte por Barrio</h3>

            <p>
              Centro de Madrid está conectada con Madrid a través de la <strong>Línea 12 del Metro</strong>{' '}
              (Metro Ligero) y <strong>Cercanías Renfe</strong>:
            </p>

            <ul>
              <li>
                <strong>Metro L12:</strong> Centro de Madrid Central, Loranca, La Serna, Hospital de
                Centro de Madrid, Parque de los Estados
              </li>
              <li>
                <strong>Cercanías:</strong> Estación de Centro de Madrid (líneas C-3 y C-4)
              </li>
              <li>
                <strong>Autobuses interurbanos:</strong> Líneas 492, 493, 494, 496, 497, 498
                (conexión con Madrid, Getafe, Móstoles)
              </li>
            </ul>

            <h3>Servicios Educativos: Colegios por Barrio</h3>

            <p>
              Centro de Madrid cuenta con más de <strong>30 colegios públicos</strong>, varios colegios
              concertados y el <strong>campus de la Universidad Rey Juan Carlos</strong>.
            </p>

            <p>Algunos de los centros más destacados:</p>

            <ul>
              <li>
                <strong>Highlands School Los Fresnos:</strong> Colegio bilingüe privado en Loranca
              </li>
              <li>
                <strong>Colegio Europeo de Madrid:</strong> Colegio bilingüe en zona Hospital
              </li>
              <li>
                <strong>Universidad Rey Juan Carlos:</strong> Campus en Centro de Madrid
              </li>
            </ul>

            <h3>Servicios Sanitarios</h3>

            <p>
              El <strong>Hospital Universitario de Centro de Madrid</strong> es el principal centro
              sanitario, situado en el barrio Hospital. Además, cada barrio cuenta con su propio
              centro de salud.
            </p>

            <h3>¿Cómo Encontrar Inmobiliaria en Tu Barrio?</h3>

            <p>
              Cada barrio de Centro de Madrid tiene inmobiliarias especializadas que conocen el mercado
              local. En nuestra web encontrarás:
            </p>

            <ul>
              <li>Listado de inmobiliarias por barrio</li>
              <li>Opiniones verificadas de clientes</li>
              <li>Comparativa de comisiones</li>
              <li>Formulario para recibir ofertas sin compromiso</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                💡 Consejo: Solicita ofertas de 3-4 inmobiliarias
              </p>
              <p className="text-gray-700">
                Para obtener el mejor precio y servicio, contacta con varias agencias inmobiliarias
                del barrio que te interesa. Compara ofertas, comisiones y servicios incluidos.
              </p>
            </div>

            <h3>Conclusión: ¿Dónde Vivir en Centro de Madrid?</h3>

            <p>
              Centro de Madrid ofrece opciones para todos los perfiles:
            </p>

            <ul>
              <li>
                <strong>Jóvenes profesionales:</strong> Centro de Madrid Centro o Hospital (Metro
                directo a Madrid)
              </li>
              <li>
                <strong>Familias con niños:</strong> Parque de los Estados, El Molino o Loranca
                (colegios y zonas verdes)
              </li>
              <li>
                <strong>Buscan exclusividad:</strong> La Avanzada (chalets con jardín)
              </li>
              <li>
                <strong>Primera vivienda:</strong> La Serna o Vivero (mejores precios)
              </li>
              <li>
                <strong>Inversores:</strong> Loranca y Hospital (revalorización constante)
              </li>
            </ul>

            <p className="text-center mt-8">
              <OpenLeadFormButton
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
              >
                Solicitar Ofertas Gratuitas de Inmobiliarias
              </OpenLeadFormButton>
            </p>
          </article>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}
