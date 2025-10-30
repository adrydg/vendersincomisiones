import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Inmobiliarias Centro Madrid',
  description: 'Términos y condiciones de uso de los servicios de Inmobiliarias Centro Madrid. Derechos y obligaciones de usuarios y agencias inmobiliarias.',
  alternates: {
    canonical: 'https://www.vendersincomisiones.es/terminos-condiciones',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TerminosCondicionesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones de Uso</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los términos</h2>
                <p className="mb-4">
                  Estos Términos y Condiciones regulan el uso del sitio web <Link href="/" className="text-blue-600 hover:underline">www.vendersincomisiones.es</Link> (en adelante, &quot;el Sitio Web&quot;) y los servicios ofrecidos a través del mismo por Inmobiliarias Centro Madrid (en adelante, &quot;ICM&quot; o &quot;nosotros&quot;).
                </p>
                <p className="mb-4">
                  Al acceder y utilizar este Sitio Web, usted (en adelante, &quot;el Usuario&quot;) acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, no debe utilizar el Sitio Web.
                </p>
                <p>
                  ICM se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor en el momento de su publicación en el Sitio Web. Es responsabilidad del Usuario revisar periódicamente estos términos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del servicio</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1. Naturaleza del servicio</h3>
                <p className="mb-4">
                  ICM es una plataforma informativa y de intermediación que conecta a usuarios que desean vender, comprar o alquilar inmuebles en el centro de Madrid con agencias inmobiliarias especializadas en la zona.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2. Servicios ofrecidos</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Información comparativa:</strong> Información sobre agencias inmobiliarias, sus servicios, comisiones y valoraciones.</li>
                  <li><strong>Conexión con agencias:</strong> Facilitamos el contacto entre usuarios y hasta 3 agencias inmobiliarias que operan en su zona.</li>
                  <li><strong>Contenido informativo:</strong> Artículos, guías y noticias sobre el mercado inmobiliario del centro de Madrid.</li>
                  <li><strong>Información de barrios:</strong> Datos sobre los diferentes barrios del centro de Madrid, precios, servicios y características.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.3. Gratuidad del servicio para usuarios</h3>
                <p className="mb-4">
                  Todos los servicios ofrecidos a los usuarios finales (vendedores, compradores, arrendadores, arrendatarios) son completamente gratuitos. Los usuarios no pagan ninguna tarifa a ICM por:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Solicitar valoraciones de su inmueble</li>
                  <li>Recibir contacto de agencias inmobiliarias</li>
                  <li>Acceder a la información del sitio web</li>
                  <li>Comparar agencias inmobiliarias</li>
                </ul>
                <p>
                  Las agencias inmobiliarias pueden cobrar sus propias comisiones directamente al usuario según los servicios contratados. Estas comisiones son independientes de ICM y deben ser acordadas directamente entre el usuario y la agencia.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Obligaciones y responsabilidades del usuario</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1. Uso correcto del servicio</h3>
                <p className="mb-4">El Usuario se compromete a:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Proporcionar información veraz, exacta y actualizada</li>
                  <li>No utilizar el servicio con fines fraudulentos o ilegales</li>
                  <li>No suplantar la identidad de terceros</li>
                  <li>No enviar solicitudes masivas o automatizadas</li>
                  <li>Respetar los derechos de propiedad intelectual e industrial</li>
                  <li>No interferir con el correcto funcionamiento del Sitio Web</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2. Veracidad de los datos del inmueble</h3>
                <p className="mb-4">
                  Cuando el Usuario solicita una valoración de su inmueble, se compromete a proporcionar información veraz sobre:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ubicación exacta del inmueble</li>
                  <li>Características del inmueble (superficie, habitaciones, estado, etc.)</li>
                  <li>Titularidad del inmueble (debe ser propietario o estar autorizado)</li>
                  <li>Datos de contacto correctos</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3. Relación con las agencias</h3>
                <p className="mb-4">
                  El Usuario entiende y acepta que:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>ICM no es parte en ningún contrato entre el Usuario y las agencias inmobiliarias</li>
                  <li>Las condiciones comerciales se negocian directamente con cada agencia</li>
                  <li>El Usuario es libre de aceptar o rechazar las ofertas recibidas</li>
                  <li>No existe obligación de contratar con ninguna de las agencias contactadas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitación de responsabilidad</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1. Responsabilidad de ICM</h3>
                <p className="mb-4">
                  ICM actúa exclusivamente como intermediario y plataforma informativa. Por tanto, ICM no será responsable de:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>La calidad, exactitud o idoneidad de los servicios prestados por las agencias inmobiliarias</li>
                  <li>Las valoraciones, tasaciones o estimaciones proporcionadas por las agencias</li>
                  <li>Los contratos celebrados entre usuarios y agencias</li>
                  <li>Las comisiones cobradas por las agencias inmobiliarias</li>
                  <li>Los plazos de venta, alquiler o compra de inmuebles</li>
                  <li>Las disputas que puedan surgir entre usuarios y agencias</li>
                  <li>La veracidad de la información proporcionada por las agencias sobre sus servicios</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2. Información del sitio web</h3>
                <p className="mb-4">
                  La información publicada en el Sitio Web (precios por m², valoraciones de barrios, estadísticas de mercado, etc.) tiene carácter meramente informativo y orientativo. ICM no garantiza:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>La exactitud absoluta de los datos publicados</li>
                  <li>La actualización en tiempo real de la información</li>
                  <li>Que los precios publicados coincidan con los reales del mercado en cada momento</li>
                  <li>Que las opiniones de usuarios sean verificadas o exactas</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3. Disponibilidad del servicio</h3>
                <p className="mb-4">
                  ICM no garantiza la disponibilidad y continuidad del Sitio Web ni de los servicios. ICM no será responsable por interrupciones del servicio causadas por:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Mantenimiento técnico programado o urgente</li>
                  <li>Fallos en los sistemas de telecomunicaciones</li>
                  <li>Ataques informáticos o acciones de terceros</li>
                  <li>Causas de fuerza mayor</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad intelectual</h2>
                <p className="mb-4">
                  Todos los contenidos del Sitio Web (textos, imágenes, logotipos, diseño, código fuente, etc.) son propiedad de ICM o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
                </p>
                <p className="mb-4">
                  El Usuario puede:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Visualizar el contenido</li>
                  <li>Descargar o imprimir contenido para uso personal no comercial</li>
                  <li>Compartir enlaces a artículos o páginas del sitio</li>
                </ul>
                <p className="mb-4">
                  El Usuario NO puede:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Reproducir, distribuir o comunicar públicamente los contenidos sin autorización</li>
                  <li>Modificar o transformar los contenidos</li>
                  <li>Utilizar los contenidos con fines comerciales</li>
                  <li>Realizar ingeniería inversa del código fuente</li>
                  <li>Extraer datos masivamente (web scraping) sin autorización</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protección de datos personales</h2>
                <p className="mb-4">
                  El tratamiento de los datos personales de los usuarios se rige por lo establecido en nuestra <Link href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</Link>, que forma parte integrante de estos Términos y Condiciones.
                </p>
                <p className="mb-4">
                  Al utilizar el servicio y proporcionar sus datos, el Usuario:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Consiente expresamente el tratamiento de sus datos según la Política de Privacidad</li>
                  <li>Consiente que sus datos sean compartidos con las agencias inmobiliarias colaboradoras</li>
                  <li>Entiende que puede ejercer sus derechos de acceso, rectificación, supresión, etc.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Política de cancelación y devoluciones</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1. Cancelación del servicio</h3>
                <p className="mb-4">
                  Dado que todos los servicios de ICM son gratuitos para los usuarios, no existe un proceso de cancelación formal. El usuario puede:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Dejar de utilizar el servicio en cualquier momento sin notificación</li>
                  <li>Solicitar la eliminación de sus datos personales según lo establecido en la Política de Privacidad</li>
                  <li>Contactar con las agencias directamente para detener las comunicaciones comerciales</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2. Relación con agencias</h3>
                <p className="mb-4">
                  Si el Usuario ha firmado un contrato con una agencia inmobiliaria, las condiciones de cancelación se regirán por lo establecido en dicho contrato. ICM no interviene en estas relaciones contractuales.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones del servicio</h2>
                <p className="mb-4">
                  ICM se reserva el derecho de:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Modificar, suspender o descontinuar cualquier aspecto del Sitio Web o servicios</li>
                  <li>Cambiar las agencias colaboradoras</li>
                  <li>Actualizar la información publicada</li>
                  <li>Introducir nuevas funcionalidades o eliminar existentes</li>
                </ul>
                <p>
                  ICM intentará notificar a los usuarios de cambios significativos con antelación razonable cuando sea posible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Terminación del acceso</h2>
                <p className="mb-4">
                  ICM se reserva el derecho de terminar o suspender el acceso de un Usuario al Sitio Web, sin previo aviso, en caso de:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Incumplimiento de estos Términos y Condiciones</li>
                  <li>Uso fraudulento o ilegal del servicio</li>
                  <li>Proporcionar información falsa o engañosa</li>
                  <li>Conducta que perjudique a ICM, a las agencias o a otros usuarios</li>
                  <li>Abuso del servicio (spam, solicitudes masivas, etc.)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Enlaces a terceros</h2>
                <p className="mb-4">
                  El Sitio Web puede contener enlaces a sitios web de agencias inmobiliarias y otros terceros. ICM no controla ni es responsable del contenido de estos sitios externos.
                </p>
                <p>
                  El Usuario accede a sitios de terceros bajo su propia responsabilidad y debe revisar los términos y políticas de privacidad de esos sitios.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnización</h2>
                <p className="mb-4">
                  El Usuario acepta indemnizar y mantener indemne a ICM, sus directivos, empleados y colaboradores de cualquier reclamación, daño, pérdida, responsabilidad y gasto (incluidos honorarios legales razonables) que surjan de:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>El uso indebido del Sitio Web o servicios</li>
                  <li>La violación de estos Términos y Condiciones</li>
                  <li>La violación de derechos de terceros</li>
                  <li>Información falsa o engañosa proporcionada por el Usuario</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Ley aplicable y jurisdicción</h2>
                <p className="mb-4">
                  Estos Términos y Condiciones se rigen por la legislación española.
                </p>
                <p className="mb-4">
                  Para la resolución de cualquier controversia que pudiera surgir en relación con el uso del Sitio Web o la interpretación de estos Términos, las partes se someten expresamente a los Juzgados y Tribunales de Madrid capital.
                </p>
                <p>
                  Si el Usuario es un consumidor, podrá acudir a los sistemas alternativos de resolución de conflictos de consumo conforme a la legislación vigente.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Divisibilidad</h2>
                <p>
                  Si cualquier disposición de estos Términos y Condiciones fuera declarada nula o inaplicable por resolución judicial o administrativa, dicha nulidad o inaplicabilidad no afectará a las demás disposiciones, que seguirán siendo válidas y aplicables.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contacto</h2>
                <p className="mb-4">
                  Para cualquier pregunta, aclaración o sugerencia sobre estos Términos y Condiciones, puede contactarnos:
                </p>
                <p className="mb-2"><strong>Teléfono:</strong> +34 663 61 61 47</p>
                <p className="mb-2"><strong>Formulario de contacto:</strong> <Link href="/contacto" className="text-blue-600 hover:underline">www.vendersincomisiones.es/contacto</Link></p>
              </section>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <p className="text-sm font-semibold mb-2">Al utilizar el Sitio Web, usted confirma que:</p>
                <ul className="text-sm list-disc pl-6 space-y-1">
                  <li>Ha leído y comprendido estos Términos y Condiciones</li>
                  <li>Acepta quedar vinculado por estos términos</li>
                  <li>Tiene capacidad legal para aceptar estos términos</li>
                  <li>Cumplirá con todas las obligaciones establecidas</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Páginas relacionadas</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/politica-privacidad" className="text-blue-600 hover:underline font-semibold">
                    Política de Privacidad
                  </Link>
                  <Link href="/politica-cookies" className="text-blue-600 hover:underline font-semibold">
                    Política de Cookies
                  </Link>
                  <Link href="/aviso-legal" className="text-blue-600 hover:underline font-semibold">
                    Aviso Legal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
