import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Cookies | Inmobiliarias Centro Madrid',
  description: 'Información sobre el uso de cookies en el sitio web de Inmobiliarias Centro Madrid. Tipos de cookies, finalidad y gestión de preferencias.',
  alternates: {
    canonical: 'https://www.inmobiliariascentromadrid.es/politica-cookies',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Cookies</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ¿Qué son las cookies?</h2>
                <p className="mb-4">
                  Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su ordenador. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                </p>
                <p>
                  Las cookies permiten a un sitio web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de cookies según su finalidad</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies técnicas (necesarias)</h3>
                  <p className="mb-2">
                    Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
                  </p>
                  <p className="italic text-gray-600">
                    Ejemplo: Cookies de sesión, cookies de seguridad
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de análisis o medición</h3>
                  <p className="mb-2">
                    Son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.
                  </p>
                  <p className="italic text-gray-600">
                    Ejemplo: Google Analytics
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de preferencias o personalización</h3>
                  <p className="mb-2">
                    Son aquellas que permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.
                  </p>
                  <p className="italic text-gray-600">
                    Ejemplo: Idioma, configuración de región, preferencias de visualización
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies publicitarias o de marketing</h3>
                  <p className="mb-2">
                    Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
                  </p>
                  <p className="italic text-gray-600">
                    Actualmente, no utilizamos cookies publicitarias de terceros
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies utilizadas en este sitio web</h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cookie</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tipo</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Finalidad</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duración</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">_ga</td>
                        <td className="border border-gray-300 px-4 py-3">Análisis</td>
                        <td className="border border-gray-300 px-4 py-3">Google Analytics - Distinguir usuarios</td>
                        <td className="border border-gray-300 px-4 py-3">2 años</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">_ga_#</td>
                        <td className="border border-gray-300 px-4 py-3">Análisis</td>
                        <td className="border border-gray-300 px-4 py-3">Google Analytics - Recopilar datos de estadísticas</td>
                        <td className="border border-gray-300 px-4 py-3">2 años</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">_gid</td>
                        <td className="border border-gray-300 px-4 py-3">Análisis</td>
                        <td className="border border-gray-300 px-4 py-3">Google Analytics - Distinguir usuarios</td>
                        <td className="border border-gray-300 px-4 py-3">24 horas</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">cookie_consent</td>
                        <td className="border border-gray-300 px-4 py-3">Técnica</td>
                        <td className="border border-gray-300 px-4 py-3">Guardar preferencias de cookies</td>
                        <td className="border border-gray-300 px-4 py-3">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="mb-4 text-sm">
                    Este sitio web utiliza Google Analytics, un servicio de analítica web prestado por Google, Inc., una compañía de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos (&quot;Google&quot;).
                  </p>
                  <p className="mb-4 text-sm">
                    Google Analytics utiliza &quot;cookies&quot;, que son archivos de texto ubicados en su ordenador, para ayudar al sitio web a analizar el uso que hacen los usuarios del sitio web. La información que genera la cookie acerca de su uso del sitio web (incluyendo su dirección IP) será directamente transmitida y archivada por Google en los servidores de Estados Unidos.
                  </p>
                  <p className="text-sm">
                    Puede encontrar más información sobre el uso de las cookies por parte de Google Analytics en: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. ¿Cómo gestionar las cookies?</h2>
                <p className="mb-4">
                  Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                </p>
                <p className="mb-6">
                  A continuación puede acceder a la configuración de los navegadores web más frecuentes para aceptar, instalar o desactivar las cookies:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-3">
                  <li>
                    <strong>Google Chrome:</strong>{' '}
                    <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Configurar y eliminar cookies
                    </a>
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong>{' '}
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Habilitar y deshabilitar cookies
                    </a>
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong>{' '}
                    <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Eliminar las cookies
                    </a>
                  </li>
                  <li>
                    <strong>Safari (macOS):</strong>{' '}
                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Gestionar cookies y datos
                    </a>
                  </li>
                  <li>
                    <strong>Safari (iOS):</strong>{' '}
                    <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Borrar historial y datos
                    </a>
                  </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <p className="text-sm">
                    <strong>Nota importante:</strong> Si desactiva todas las cookies, es posible que algunas funcionalidades del sitio web no funcionen correctamente. Las cookies técnicas son necesarias para el correcto funcionamiento del sitio.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies de terceros</h2>
                <p className="mb-4">
                  Este sitio web utiliza servicios de terceros para recopilar información con fines estadísticos. Los terceros que utilizamos son:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Google Analytics:</strong> Análisis de tráfico y comportamiento de usuarios</li>
                  <li><strong>Vercel Analytics:</strong> Métricas de rendimiento del sitio web</li>
                </ul>
                <p>
                  Estas empresas pueden utilizar los datos recopilados para mejorar sus propios servicios y para ofrecer servicios a otras empresas. Puede obtener más información sobre sus prácticas de privacidad en sus respectivas políticas de privacidad.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Desactivación de Google Analytics</h2>
                <p className="mb-4">
                  Si desea rechazar las cookies analíticas de Google Analytics en todos los navegadores, puede hacerlo accediendo a:{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Actualización de la Política de Cookies</h2>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
                </p>
                <p className="mb-4">
                  Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios bien mediante un aviso informativo en el sitio web, o a través de correo electrónico a los usuarios registrados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Más información</h2>
                <p className="mb-4">
                  Para cualquier duda sobre el uso de cookies en este sitio web, puede contactarnos en:
                </p>
                <p className="mb-2"><strong>Email:</strong> contacto@inmobiliariascentromadrid.es</p>
                <p>
                  También puede consultar nuestra <Link href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</Link> para obtener más información sobre cómo tratamos sus datos personales.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Páginas relacionadas</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/politica-privacidad" className="text-blue-600 hover:underline font-semibold">
                    Política de Privacidad
                  </Link>
                  <Link href="/aviso-legal" className="text-blue-600 hover:underline font-semibold">
                    Aviso Legal
                  </Link>
                  <Link href="/terminos-condiciones" className="text-blue-600 hover:underline font-semibold">
                    Términos y Condiciones
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
