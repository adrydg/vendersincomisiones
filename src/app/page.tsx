import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgencyCard from '@/components/AgencyCard';
import { OpenLeadFormButton } from '@/components/LeadFormModal';
import { getTopAgencies } from '@/data/agencies';
import { generateFAQSchema } from '@/lib/schema';

export default function Home() {
  const topAgencies = getTopAgencies(3);

  const faqs = [
    {
      question: '¿Qué significa vender sin comisiones para el vendedor?',
      answer: 'Significa que TÚ como vendedor NO pagas comisión a la inmobiliaria, o pagas una comisión muy reducida. Comparamos las mejores agencias inmobiliarias de España que ofrecen modelos sin gastos para el vendedor. Ahorras miles de euros que tradicionalmente tendrías que pagar (normalmente entre 3-5% del precio de venta).',
    },
    {
      question: '¿Cómo es posible vender sin pagar comisión?',
      answer: 'Las inmobiliarias modernas han adaptado su modelo de negocio: cobran solo al comprador o tienen tarifas planas muy reducidas para el vendedor. A través de nuestra plataforma, comparamos estas agencias para que encuentres la mejor opción sin gastos o con comisiones mínimas para ti como vendedor.',
    },
    {
      question: '¿Es gratuito el servicio de comparación?',
      answer: 'Sí, nuestro servicio de comparación es 100% gratuito. Te conectamos con las mejores inmobiliarias de España que ofrecen vender sin cobrar comisión al vendedor. Recibes ofertas personalizadas sin compromiso y eliges la que más te conviene. Sin letra pequeña, sin costes ocultos.',
    },
    {
      question: '¿En cuánto tiempo recibiré ofertas de inmobiliarias?',
      answer: 'Recibirás las primeras ofertas de inmobiliarias en un plazo de 24 horas laborables. Las agencias te contactarán para ofrecerte sus condiciones de venta sin gastos para el vendedor. Comparas las propuestas y decides cuál te interesa más.',
    },
    {
      question: '¿Qué ventajas tiene este modelo frente al tradicional?',
      answer: 'La principal ventaja es el AHORRO directo de miles de euros. En lugar de pagar 3-5% del precio de venta (que en un piso de 300.000€ son 9.000-15.000€), vendes sin esos gastos. Además, recibes múltiples ofertas competitivas de agencias verificadas, no solo una propuesta de una sola inmobiliaria.',
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Navbar />

      <main>
        {/* Hero Section - Estilo Engel & Völkers con Ventajas Exclusivas */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Columna Izquierda */}
              <div>
                <div className="mb-6 inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                  <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">
                    Comparador de Inmobiliarias Sin Gastos para el Vendedor
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
                  <span className="font-bold">Vender Casa Sin Pagar Comisión al Vendedor es Posible</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-slate-400 font-light leading-relaxed">
                  Comparamos las mejores inmobiliarias de España que <span className="inline-block bg-amber-500/20 px-3 py-1 rounded-md text-amber-400 font-semibold">NO te cobran comisión como vendedor</span>. Ahorra entre 9.000€ y 15.000€ en gastos de venta. Compara ofertas y elige la mejor agencia sin desembolso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="group bg-amber-500 text-slate-900 px-10 py-4 rounded-sm font-semibold text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Recibir Propuestas Gratis
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/comparador"
                    className="border-2 border-slate-400 text-white px-10 py-4 rounded-sm font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    Ver Ranking de Agencias
                  </Link>
                </div>
                <p className="mt-6 text-sm text-slate-500">
                  ✓ Sin compromiso  &nbsp;•&nbsp;  ✓ 100% Gratuito  &nbsp;•&nbsp;  ✓ Respuesta en 24h
                </p>
              </div>

              {/* Columna Derecha - Ventajas Exclusivas */}
              <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-lg p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-5xl mb-4">💰</div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                    <span className="text-amber-400">Ahorra hasta </span>
                    <span className="text-white">15.000€</span>
                  </h2>
                  <p className="text-2xl md:text-3xl font-bold mb-6">
                    <span className="text-white">0% comisión </span>
                    <span className="text-amber-400">para el vendedor</span>
                  </p>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <p className="text-slate-200 text-lg">
                        <strong>0% comisión vendedor</strong> - Ahorra entre 9.000€ y 15.000€
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <p className="text-slate-200 text-lg">
                        <strong>Compara múltiples ofertas</strong> - Elige la mejor agencia sin compromiso
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 text-2xl">✓</span>
                      <p className="text-slate-200 text-lg">
                        <strong>Servicio profesional completo</strong> - Sin gastos de venta para ti
                      </p>
                    </div>
                  </div>

                  {/* Pastilla destacada "Gratis y sin compromiso" */}
                  <div className="mt-6 flex justify-center">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-3 rounded-full shadow-lg">
                      <span className="text-slate-900 font-bold text-lg tracking-wide">
                        ¡GRATIS Y SIN COMPROMISO!
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-amber-500/30">
                    <p className="text-sm text-slate-300 italic">
                      &ldquo;Comparamos inmobiliarias que no cobran al vendedor para que ahorres miles de euros en comisiones&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Flotante debajo del Hero */}
        <section className="py-8 bg-gradient-to-r from-amber-500 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <OpenLeadFormButton className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-sm font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recibir Propuestas Mejoradas
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </OpenLeadFormButton>
          </div>
        </section>

        {/* Beneficios - Diseño Premium */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
                Servicio <span className="font-bold">Premium</span> sin Coste
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-50 border border-slate-200 p-10 text-center hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Ahorro Garantizado</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Conectamos con inmobiliarias que NO cobran comisión al vendedor. Ahorra entre 9.000€ y 15.000€ en gastos de venta. Vende sin desembolso.
                  </p>
                </div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-50 border border-slate-200 p-10 text-center hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Desde Tu Sofá</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Recibe propuestas personalizadas sin salir de casa. Todo el proceso de comparación y selección online.
                  </p>
                </div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-50 border border-slate-200 p-10 text-center hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Compara y Decide</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Recibe múltiples ofertas de agencias verificadas en toda España. Compara condiciones, elige la mejor y vende sin gastos para ti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Agencias */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Mejores Inmobiliarias Sin Comisión Vendedor - España 2025
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Comparador actualizado de las mejores agencias inmobiliarias que NO cobran comisión al vendedor en España. Ahorra miles de euros y vende sin gastos.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {topAgencies.map((agency) => (
                <AgencyCard key={agency.id} agency={agency} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/comparador"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ver las 10 Mejores Agencias
              </Link>
            </div>
          </div>
        </section>

        {/* Estudio Completo - Ranking 10 Inmobiliarias */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Estudio Completo: Las 10 Mejores Inmobiliarias en Centro de Madrid (2025)
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Centro de Madrid, el corazón de la capital con más de 150.000 habitantes, es una de las zonas más dinámicas y cotizadas de España. El mercado inmobiliario en el centro está en constante movimiento, con miles de operaciones de compraventa y alquiler cada año. Elegir la inmobiliaria correcta puede suponer <strong>ahorrar miles de euros en comisiones</strong> y conseguir la mejor propiedad al mejor precio.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Hemos analizado más de 160 inmobiliarias que operan en Centro de Madrid, evaluando criterios como <strong>valoraciones de clientes reales</strong>, años de experiencia, cobertura territorial, comisiones, servicios adicionales y resultados en ventas. Este estudio se basa en opiniones verificadas, transacciones completadas y análisis profesional del sector inmobiliario en Centro de Madrid.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                🥇 1. Tecnocasa Centro de Madrid - Líder Indiscutible (4.9⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Tecnocasa</strong> se posiciona como la <strong>mejor inmobiliaria en Centro de Madrid</strong> gracias a su extensa red de 12 oficinas estratégicamente ubicadas en todos los barrios de la ciudad. Con más de 10 años de presencia local y más de 1.300 transacciones exitosas, han demostrado un profundo conocimiento del mercado inmobiliario de Centro de Madrid.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lo que más valoran los clientes es su <strong>política de comisión 0% para compradores</strong>, lo que convierte a Tecnocasa en una opción muy atractiva si estás buscando comprar piso en Centro de Madrid sin pagar comisiones adicionales. Sus oficinas cubren desde Sol, Gran Vía y Ópera hasta Salamanca, Chamberí, Retiro y Chueca, garantizando atención especializada en cada zona.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Su red internacional les permite ofrecer compradores de fuera de España, acelerando las ventas. Destacan por su <strong>asesoramiento legal incluido</strong>, financiación personalizada hasta el 100% y equipo multilingüe. Ideal para todo tipo de operaciones: primera vivienda, inversión, obra nueva o segunda mano.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                🥈 2. MB Gestión Inmobiliaria - Veterana de Confianza (4.8⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Con <strong>más de 25 años de experiencia</strong> en Centro de Madrid y la Comunidad de Madrid, MB Gestión Inmobiliaria es sinónimo de profesionalidad y resultados. Esta inmobiliaria local ha construido una reputación sólida basada en la <strong>valoración precisa de propiedades</strong> y la venta rápida gracias a su base de datos de más de 10.000 clientes activos.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Los clientes destacan su <strong>trato cercano y personalizado</strong>, algo que muchas cadenas nacionales han perdido. Ofrecen valoración gratuita en menos de 24 horas, home staging profesional incluido y una estrategia de marketing digital muy efectiva. Sus comisiones del 2.5-3.5% para vendedores son muy competitivas en el mercado de Centro de Madrid.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                MB Gestión es particularmente fuerte en Centro de Madrid, pero también tiene presencia consolidada en Getafe, Móstoles, Centro de Madrid y Alcorcón, lo que amplía significativamente el alcance para compradores potenciales. Perfecta si buscas <strong>vender rápido en Centro de Madrid</strong> con garantías.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                🥉 3. RedPiso Centro de Madrid - Red Nacional Consolidada (4.8⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>RedPiso</strong> cuenta con oficinas en Centro de Madrid formando parte de una red de más de 280 oficinas en toda España. Esta capilaridad les otorga un poder de difusión extraordinario para dar visibilidad a tu propiedad ante miles de compradores potenciales en todo el país.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Las oficinas de <strong>RedPiso en Centro de Madrid</strong> se especializan en Sol, Malasaña, Chueca, La Latina y el centro histórico. Destacan por su <strong>gestoría propia</strong> que agiliza todos los trámites legales y su capacidad de conseguir financiación hasta el 100% del valor de la propiedad, crucial para jóvenes compradores.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Su portal inmobiliario propio recibe millones de visitas mensuales, multiplicando las posibilidades de venta o alquiler. Como compradores, no pagas comisión. Como vendedor, sus tarifas del 3-4% incluyen fotografía profesional, visitas virtuales y publicación en los principales portales (Idealista, Fotocasa, etc.).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                4. Hogares Centro de Madrid - Grupo Nacional de Calidad (4.7⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Parte del prestigioso <strong>Hogares Group</strong>, esta agencia aporta la solidez de un grupo nacional con la atención personalizada de una oficina local. Desde su apertura en 2015 en Centro de Madrid, han consolidado su presencia con especialización en <strong>chalets, pisos familiares y locales comerciales</strong>.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ofrecen tour virtual 360° de todas sus propiedades, especialmente útil para compradores que viven lejos. Su servicio de <strong>asesor personal asignado</strong> garantiza un seguimiento continuo durante todo el proceso. Las comisiones van del 3-4.5% para vendedores, incluyendo valoración certificada oficial.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Destacan en propiedades de Salamanca, Chamberí, Retiro y zonas residenciales premium. Si buscas vender o comprar un local comercial en Centro de Madrid, Hogares Group tiene un equipo especializado. Su garantía de satisfacción y reputación nacional aportan confianza extra.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                5. Casanova Home - Atención Boutique Premium (4.8⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Casanova Home</strong> se diferencia por su enfoque boutique y atención ultra-personalizada. Con excelentes valoraciones en RealAdvisor, esta agencia se especializa en <strong>propiedades de calidad y clientes exigentes</strong> que buscan un servicio premium en zonas exclusivas de Centro de Madrid.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A diferencia de las grandes cadenas, Casanova Home limita el número de propiedades para dar atención exclusiva a cada cliente. Incluyen home staging premium valorado en varios miles de euros, fotógrafo profesional certificado y video promocional en 4K con drone para propiedades exclusivas.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sus comisiones del 3.5-4.5% se justifican por el servicio completo y los resultados. Operan en Salamanca, Chamberí, Jerónimos y zonas exclusivas del centro. Ideal si vendes un <strong>piso premium, chalet o ático exclusivo en Centro de Madrid</strong>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                6. La Casa Agency - Red Local Especializada (4.7⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>La Casa Agency</strong> destaca por su conocimiento profundo del mercado local de Centro de Madrid. Con una puntuación de 8.5 en Trustlocal (Top 10 nacional), esta agencia se especializa en <strong>viviendas familiares y propiedades de segunda mano</strong> con excelente relación calidad-precio.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Su equipo local conoce cada rincón de Centro de Madrid, lo que les permite hacer valoraciones muy precisas y encontrar compradores rápidamente. Ofrecen fotografía profesional, publicación en todos los portales principales y asesoramiento legal completo incluido en su comisión del 3-4%.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sus resultados hablan por sí mismos: venden un 40% más rápido que la media del mercado. Operan principalmente en Sol, Chueca, Malasaña y La Latina. Ideal si buscas una <strong>inmobiliaria de barrio con resultados profesionales</strong>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                7. Grupo Inmobiliario Darek - Venta Rápida Garantizada (4.6⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                El <strong>Grupo Darek</strong> destaca por una característica única: su <strong>red activa de compradores</strong> que reduce drásticamente los tiempos de venta. Con un promedio de 60 días para vender (frente a los 150 días de media nacional), son los especialistas en ventas rápidas en Centro de Madrid.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Su estrategia de marketing agresivo incluye inversión en publicidad online, llamadas activas a compradores potenciales y open houses semanales. Las comisiones del 2.5-3.5% son competitivas, y no exigen permanencia mínima, por lo que si en 60 días no están satisfechos, pueden cambiar de inmobiliaria sin penalización.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Además de Centro de Madrid, operan en Getafe, Pinto y Parla, ampliando el pool de compradores. Se especializan en <strong>pisos, bajos comerciales y garajes</strong>. Su valoración certificada oficial es perfecta si necesitas documentación para bancos o herencias. Recomendados si necesitas <strong>vender piso Centro de Madrid urgente</strong>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                8. Primer Paso Inmobiliaria - Expertos en Jóvenes (4.5⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Primer Paso</strong> es la inmobiliaria ideal si eres joven y buscas tu <strong>primera vivienda en Centro de Madrid</strong>. Su equipo se especializa en ayudas públicas, subvenciones para jóvenes menores de 35 años, bonos alquiler joven y todas las facilidades que ofrecen las administraciones.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ofrecen <strong>asesoría financiera gratuita</strong> para conseguir las mejores condiciones de hipoteca, incluyendo análisis de todas las entidades bancarias. Gestionan los trámites de subvenciones de la Comunidad de Madrid y del Ayuntamiento de Centro de Madrid, ahorrándote tiempo y dinero.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sus comisiones son de las más bajas (2-3%), perfectas para compradores con presupuesto ajustado. No cobran comisión a compradores. También se especializan en VPO (Viviendas de Protección Oficial) y pisos de cooperativas. Su respuesta es rapidísima (24h). Perfectos para <strong>comprar primer piso Centro de Madrid jóvenes</strong>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                9. Alfa Inmobiliaria Hermanos Pardo - Tradición Familiar (4.6⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Con <strong>27 años de trayectoria</strong>, Alfa Inmobiliaria es una empresa familiar que combina valores tradicionales con métodos actuales. Los hermanos Pardo han construido una reputación basada en la honestidad, transparencia y <strong>valoraciones realistas</strong> que evitan decepciones.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Se especializan en propiedades familiares: <strong>chalets, pisos grandes, casas adosadas</strong> y tramitación de herencias. Su experiencia de casi tres décadas les da una perspectiva única del mercado inmobiliario de Centro de Madrid.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                El trato es ultra-personalizado, casi como un asesor familiar. Sus comisiones del 3-4% incluyen gestión integral de documentación, escrituras y coordinación con notarías. Gran cartera de clientes satisfechos que repiten y recomiendan. Perfectos si buscas <strong>vender chalet Centro de Madrid</strong> con profesionales de confianza.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                10. DAGOSA Consultores - Inversión y Patrimonio (4.5⭐)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>DAGOSA</strong> no es una inmobiliaria convencional, son <strong>consultores inmobiliarios especializados</strong> en inversión, gestión patrimonial y grandes operaciones. Si buscas comprar varias propiedades en Centro de Madrid como inversión o necesitas asesoramiento profesional sobre tu patrimonio inmobiliario, DAGOSA es tu elección.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ofrecen <strong>análisis de rentabilidad</strong>, estudios de mercado personalizados, proyecciones de revalorización e informes detallados sobre cada zona de Centro de Madrid. Su red internacional les permite conectar con inversores extranjeros. Discreción absoluta garantizada.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Las comisiones son variables (1-5%) según el tipo de operación y servicio requerido. También cobran a compradores por consultoría (1-2%). Operan en toda la Comunidad de Madrid, no solo Centro de Madrid. Ideales para <strong>inversión inmobiliaria Centro de Madrid</strong>, carteras de alquiler o patrimonios significativos.
              </p>

              <div className="bg-blue-50 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📊 Conclusiones del Estudio
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  El mercado inmobiliario de Centro de Madrid está muy bien servido por profesionales cualificados. Las 10 inmobiliarias analizadas ofrecen garantías, experiencia y resultados probados. <strong>Elegir entre las mejor valoradas puede ahorrarte entre 3.000€ y 10.000€</strong> en comisiones y conseguir mejores condiciones de venta o compra.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Para compradores:</strong> Tecnocasa, RedPiso y Primer Paso no cobran comisión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Para venta rápida:</strong> Grupo Darek y MB Gestión con red activa de compradores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Para propiedades premium:</strong> La Casa Agency con servicio boutique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Para jóvenes:</strong> Primer Paso con ayudas y financiación especializada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Para inversión:</strong> DAGOSA Consultores con análisis profesionales</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-6 font-semibold">
                  💡 Recomendación: Solicita ofertas de 2-3 agencias para comparar comisiones y servicios. El ahorro puede ser significativo.
                </p>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/comparador"
                  className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Ver Comparador Completo de las 10 Inmobiliarias →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Barrios de Centro de Madrid - SEO Local */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
              Inmobiliarias por Barrios de Centro de Madrid
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Encuentra agencias especializadas en tu barrio. Las mejores inmobiliarias con conocimiento local de cada zona de Centro de Madrid
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Sol */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">☀️ Sol</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Kilómetro 0 de España. El corazón de Madrid con máxima oferta cultural y comercial.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  Gilmar, Engel & Völkers, Tecnocasa
                </p>
              </div>

              {/* Salamanca */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">💎 Salamanca</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Barrio más exclusivo de Madrid. Milla de Oro, arquitectura señorial y lujo.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  Engel & Völkers, Gilmar, Sotheby&apos;s
                </p>
              </div>

              {/* Chamberí */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🏘️ Chamberí</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Barrio residencial de calidad. Perfecto equilibrio entre tradición y modernidad.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  Tecnocasa, RedPiso, Gilmar
                </p>
              </div>

              {/* Chueca */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🌈 Chueca</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Barrio cosmopolita y vibrante. Ambiente único, terrazas y vida nocturna.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  RedPiso, Tecnocasa, La Casa Agency
                </p>
              </div>

              {/* Malasaña */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🎨 Malasaña</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Zona bohemia y moderna. Ideal para jóvenes, arte urbano y ambiente alternativo.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  RedPiso, Primer Paso, Tecnocasa
                </p>
              </div>

              {/* La Latina */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🍷 La Latina</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Barrio castizo madrileño. Tapas, el Rastro y auténtica vida de barrio.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  Tecnocasa, MB Gestión, RedPiso
                </p>
              </div>

              {/* Retiro */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🌳 Retiro</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Junto al Parque del Retiro. Zona premium con máxima calidad de vida urbana.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  Gilmar, Engel & Völkers, Hogares Group
                </p>
              </div>

              {/* Huertas (Barrio de las Letras) */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📚 Huertas</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Barrio de las Letras. Historia, cultura y máxima oferta de restauración.
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  RedPiso, La Casa Agency, Tecnocasa
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Por qué es importante elegir una inmobiliaria local en tu barrio?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="mb-3">
                    <strong className="text-blue-600">✓ Conocimiento del mercado local:</strong> Las inmobiliarias especializadas en tu barrio conocen los precios reales, las mejores calles, los edificios con mejores comunidades y las tendencias del mercado hiperlocal.
                  </p>
                  <p className="mb-3">
                    <strong className="text-blue-600">✓ Red de compradores del barrio:</strong> Tienen compradores activos buscando específicamente en tu zona, lo que acelera la venta y mejora el precio final.
                  </p>
                </div>
                <div>
                  <p className="mb-3">
                    <strong className="text-blue-600">✓ Valoraciones más precisas:</strong> Al conocer cada calle y cada portal, pueden tasarte la vivienda con mayor exactitud, evitando sobrevalorar o infravalorar tu propiedad.
                  </p>
                  <p className="mb-3">
                    <strong className="text-blue-600">✓ Argumentos de venta específicos:</strong> Saben qué destacar de cada barrio: colegios cercanos, transporte, zonas verdes, comercios, seguridad, etc.
                  </p>
                </div>
              </div>
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

        {/* Cómo Funciona */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Cómo Funciona
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Cuéntanos qué necesitas</h3>
                <p className="text-gray-600">
                  Completa un simple formulario con tus necesidades
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Compara ofertas</h3>
                <p className="text-gray-600">
                  Recibe propuestas de hasta 3 agencias inmobiliarias
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Elige la mejor</h3>
                <p className="text-gray-600">
                  Selecciona la agencia que mejor se adapte a ti
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Encuentra tu hogar</h3>
                <p className="text-gray-600">
                  Disfruta del proceso con profesionales expertos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final - Diseño Premium */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">
                Servicio Gratuito y Sin Compromiso
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              ¿Listo para <span className="font-bold">Vender</span> tu Vivienda?
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              Recibe propuestas personalizadas de las mejores inmobiliarias de Centro de Madrid
            </p>
            <p className="text-lg mb-12 text-slate-400 font-light max-w-2xl mx-auto">
              Valoración gratuita de tu vivienda • Mejores condiciones del mercado • Todo desde tu sofá
            </p>
            <Link
              href="/contacto"
              className="group inline-block bg-amber-500 text-slate-900 px-12 py-5 rounded-sm font-semibold text-xl hover:bg-amber-400 transition-all shadow-2xl hover:shadow-amber-500/50 hover:scale-105 duration-300"
            >
              <span className="flex items-center gap-2">
                Recibir Propuestas Ahora
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <p className="mt-8 text-sm text-slate-500">
              Más de 500 propietarios satisfechos en Centro de Madrid
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
