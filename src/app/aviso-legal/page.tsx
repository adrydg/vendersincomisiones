import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aviso Legal | Inmobiliarias Centro Madrid',
  description: 'Aviso legal del sitio web Inmobiliarias Centro Madrid. Información sobre propiedad intelectual, condiciones de uso y responsabilidades.',
  alternates: {
    canonical: 'https://www.vendersincomisiones.es/aviso-legal',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datos identificativos</h2>
                <p className="mb-4">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los siguientes datos:
                </p>
                <ul className="list-none mb-4 space-y-2">
                  <li><strong>Titular:</strong> Inmobiliarias Centro Madrid</li>
                  <li><strong>Domicilio:</strong> Madrid, España</li>
                  <li><strong>Teléfono:</strong> +34 663 61 61 47</li>
                  <li><strong>Sitio Web:</strong> <Link href="/" className="text-blue-600 hover:underline">www.vendersincomisiones.es</Link></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objeto</h2>
                <p className="mb-4">
                  El titular del sitio web pone a disposición de los usuarios el presente documento, que regula el uso del sitio web <Link href="/" className="text-blue-600 hover:underline">www.vendersincomisiones.es</Link>, con el fin de dar cumplimiento a las obligaciones que dispone la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso del sitio web.
                </p>
                <p>
                  Cualquier persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de acceso y uso del sitio web</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.1. Carácter gratuito del acceso y uso del sitio web</h3>
                <p className="mb-4">
                  La prestación de los servicios por parte de Inmobiliarias Centro Madrid tiene carácter gratuito para todos los usuarios. No obstante, algunos de los servicios suministrados por Inmobiliarias Centro Madrid a través del sitio web están sujetos al pago de un precio determinado por las agencias inmobiliarias colaboradoras en las condiciones que se determinen en las correspondientes ofertas comerciales.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.2. Registro de usuario</h3>
                <p className="mb-4">
                  Con carácter general la prestación de los Servicios no exige la previa suscripción o registro de los Usuarios. No obstante, para utilizar algunos servicios es necesario que el usuario proporcione algunos datos personales, tales como nombre, email, teléfono, y dirección de la vivienda a valorar. Estos datos serán tratados conforme a lo establecido en nuestra <Link href="/politica-privacidad" className="text-blue-600 hover:underline">Política de Privacidad</Link>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3.3. Veracidad de la información</h3>
                <p className="mb-4">
                  Toda la información que facilita el Usuario tiene que ser veraz. A estos efectos, el Usuario garantiza la autenticidad de los datos comunicados a través de los formularios para la suscripción de los Servicios. Será responsabilidad del Usuario mantener toda la información facilitada a Inmobiliarias Centro Madrid permanentemente actualizada de forma que responda, en cada momento, a su situación real. En todo caso, el Usuario será el único responsable de las manifestaciones falsas o inexactas que realice y de los perjuicios que cause a Inmobiliarias Centro Madrid o a terceros.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contenidos del sitio web</h2>
                <p className="mb-4">
                  Los contenidos de este sitio web han sido elaborados e incluidos por Inmobiliarias Centro Madrid utilizando fuentes internas y externas con la máxima diligencia y profesionalidad, a título meramente informativo.
                </p>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid no garantiza ni se responsabiliza del uso que los usuarios puedan hacer de los contenidos de la página web. Asimismo, tampoco garantiza la licitud, fiabilidad, utilidad, veracidad, exactitud, exhaustividad y actualidad de dichos contenidos.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1. Información sobre inmobiliarias</h3>
                <p className="mb-4">
                  La información proporcionada sobre las agencias inmobiliarias (comisiones, servicios, opiniones, etc.) es orientativa y puede estar sujeta a cambios. Recomendamos confirmar directamente con cada agencia las condiciones exactas antes de contratar sus servicios.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2. Precios y valoraciones</h3>
                <p className="mb-4">
                  Los datos sobre precios por metro cuadrado, valoraciones de barrios y tendencias del mercado son estimaciones basadas en fuentes públicas y análisis propios. No constituyen tasaciones oficiales ni garantías de precio de venta o compra. Para una valoración precisa de su inmueble, debe consultar con profesionales certificados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad intelectual e industrial</h2>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid es titular o licenciatario de todos los derechos de propiedad intelectual e industrial del sitio web, así como de los elementos contenidos en el mismo (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
                </p>
                <p className="mb-4">
                  Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Inmobiliarias Centro Madrid.
                </p>
                <p>
                  El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de Inmobiliarias Centro Madrid. Podrá visualizar los elementos del sitio web e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado. El usuario deberá abstenerse de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en las páginas de Inmobiliarias Centro Madrid.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Enlaces externos</h2>
                <p className="mb-4">
                  Las páginas del sitio web de Inmobiliarias Centro Madrid proporcionan enlaces a otros sitios web propios y contenidos que son propiedad de terceros con la finalidad exclusiva de facilitar a los usuarios información sobre servicios de agencias inmobiliarias colaboradoras y otros recursos de interés.
                </p>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid no se hace responsable del contenido de dichas páginas web y no actúa en modo alguno como garante ni como parte responsable de los servicios y/o información que se pudiera ofrecer a terceros a través de los enlaces de terceros.
                </p>
                <p>
                  Se concede al usuario un derecho limitado, revocable y no exclusivo a crear enlaces a la página principal del sitio web exclusivamente para uso privado y no comercial. Los sitios web que incluyan enlace a nuestro sitio web no pueden dar a entender que existe una relación con Inmobiliarias Centro Madrid, no pueden manifestar ni dar a entender que Inmobiliarias Centro Madrid ha autorizado tal enlace, ni incluir marcas, denominaciones, nombres comerciales, logotipos u otros signos distintivos de nuestra sociedad.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Exclusión de garantías y de responsabilidad</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.1. De la información del sitio web</h3>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid no garantiza la licitud, fiabilidad, utilidad, veracidad o exactitud de la información, los servicios o los contenidos ofrecidos a través del sitio web. El contenido del sitio web es de carácter general y tiene una finalidad meramente informativa, sin que se garantice plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.
                </p>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid excluye, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos.</li>
                  <li>La infracción de la ley, la moral y las buenas costumbres o el orden público como consecuencia de la transmisión, difusión, almacenamiento, puesta a disposición, recepción, obtención o acceso a los contenidos.</li>
                  <li>Los daños producidos en los equipos informáticos de los usuarios durante el uso del sitio web.</li>
                  <li>La introducción de virus o cualquier otra alteración ajena en el sistema informático del usuario.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7.2. Servicios de agencias inmobiliarias</h3>
                <p className="mb-4">
                  Inmobiliarias Centro Madrid actúa únicamente como intermediario entre usuarios y agencias inmobiliarias colaboradoras. No somos parte en ningún contrato que se pueda establecer entre el usuario y las agencias inmobiliarias. Por tanto, no asumimos responsabilidad alguna sobre:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>La calidad de los servicios prestados por las agencias inmobiliarias</li>
                  <li>El cumplimiento de las ofertas y compromisos asumidos por las agencias</li>
                  <li>Las valoraciones, tasaciones o estimaciones proporcionadas por las agencias</li>
                  <li>Los contratos de intermediación inmobiliaria que se formalicen</li>
                  <li>Las comisiones y condiciones comerciales ofrecidas</li>
                </ul>
                <p>
                  Recomendamos encarecidamente a los usuarios verificar la información proporcionada y leer detenidamente cualquier contrato antes de firmarlo.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ley aplicable y jurisdicción</h2>
                <p className="mb-4">
                  Las presentes Condiciones Generales se rigen por la legislación española.
                </p>
                <p>
                  Para la resolución de cualquier controversia que pudiera surgir en relación con el sitio web o las actividades en él desarrolladas, será de aplicación la legislación española, sometiéndose las partes expresamente a los Juzgados y Tribunales de Madrid capital.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
                <p className="mb-4">
                  Para cualquier consulta o comunicación relacionada con este Aviso Legal, puede contactarnos a través de:
                </p>
                <p className="mb-2"><strong>Teléfono:</strong> +34 663 61 61 47</p>
                <p><strong>Formulario de contacto:</strong> <Link href="/contacto" className="text-blue-600 hover:underline">www.vendersincomisiones.es/contacto</Link></p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Páginas relacionadas</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/politica-privacidad" className="text-blue-600 hover:underline font-semibold">
                    Política de Privacidad
                  </Link>
                  <Link href="/politica-cookies" className="text-blue-600 hover:underline font-semibold">
                    Política de Cookies
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
