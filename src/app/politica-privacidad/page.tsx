import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Inmobiliarias Centro Madrid',
  description: 'Política de privacidad y protección de datos de Inmobiliarias Centro Madrid. Información sobre el tratamiento de datos personales según RGPD y LOPD.',
  alternates: {
    canonical: 'https://www.inmobiliariascentromadrid.es/politica-privacidad',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-sm text-gray-500 mb-8">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información al usuario</h2>
                <p className="mb-4">
                  <strong>Inmobiliarias Centro Madrid</strong>, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
                </p>
                <p className="mb-4">
                  En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.
                </p>
                <p>
                  Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si acepta las medidas de esta Política, acepta que tratemos sus datos personales como se define en esta Política.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Contacto</h2>
                <p className="mb-2"><strong>Denominación social:</strong> Inmobiliarias Centro Madrid</p>
                <p className="mb-2"><strong>Dirección:</strong> Madrid, España</p>
                <p className="mb-2"><strong>Email:</strong> contacto@inmobiliariascentromadrid.es</p>
                <p className="mb-2"><strong>Sitio Web:</strong> <Link href="/" className="text-blue-600 hover:underline">www.inmobiliariascentromadrid.es</Link></p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Principios que aplicamos a su información personal</h2>
                <p className="mb-4">En el tratamiento de sus datos personales, aplicaremos los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos (RGPD):</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Principio de licitud, lealtad y transparencia:</strong> Siempre vamos a requerir su consentimiento para el tratamiento de sus datos personales para uno o varios fines específicos que le informaremos previamente con absoluta transparencia.</li>
                  <li><strong>Principio de minimización de datos:</strong> Solo vamos a solicitar datos estrictamente necesarios en relación con los fines para los que los requerimos. Los mínimos posibles.</li>
                  <li><strong>Principio de limitación del plazo de conservación:</strong> Los datos serán mantenidos durante no más tiempo del necesario para los fines del tratamiento, en función a la finalidad, le informaremos del plazo de conservación correspondiente, en el caso de suscripciones, periódicamente revisaremos nuestras listas y eliminaremos aquellos registros inactivos durante un tiempo considerable.</li>
                  <li><strong>Principio de integridad y confidencialidad:</strong> Sus datos serán tratados de tal manera que se garantice una seguridad adecuada de los datos personales y se garantice confidencialidad. Debe saber que tomamos todas las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de nuestros usuarios por parte de terceros.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. ¿Cómo hemos obtenido sus datos?</h2>
                <p className="mb-4">Los datos personales que tratamos en Inmobiliarias Centro Madrid proceden de:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Formulario de contacto</li>
                  <li>Formulario de solicitud de valoraciones</li>
                  <li>Suscripción a newsletter (si aplica)</li>
                  <li>Comentarios en artículos (si aplica)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. ¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
                <p className="mb-4">Cualquier persona tiene derecho a obtener confirmación sobre si en Inmobiliarias Centro Madrid estamos tratando datos personales que les conciernan, o no.</p>
                <p className="mb-4">Las personas interesadas tienen derecho a:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Solicitar el acceso</strong> a los datos personales relativos al interesado</li>
                  <li><strong>Solicitar su rectificación</strong> o supresión</li>
                  <li><strong>Solicitar la limitación</strong> de su tratamiento</li>
                  <li><strong>Oponerse al tratamiento</strong></li>
                  <li><strong>Solicitar la portabilidad</strong> de los datos</li>
                </ul>
                <p className="mb-4">
                  Los interesados podrán acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
                </p>
                <p className="mb-4">
                  En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. Inmobiliarias Centro Madrid dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.
                </p>
                <p className="mb-4">
                  Podrá ejercitar materialmente sus derechos de la siguiente forma: contactando con Inmobiliarias Centro Madrid en contacto@inmobiliariascentromadrid.es
                </p>
                <p className="mb-4">
                  Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.
                </p>
                <p className="mb-4">
                  En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente a través de su sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aepd.es</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Finalidad del tratamiento de datos personales</h2>
                <p className="mb-4">Cuando usted se conecta a nuestro sitio web o utiliza nuestros servicios, está aceptando que tratemos su información personal de acuerdo con esta Política. Tratamos sus datos con las siguientes finalidades:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Para gestionar su solicitud de valoración de vivienda</li>
                  <li>Para conectarle con agencias inmobiliarias colaboradoras</li>
                  <li>Para responder a sus consultas y solicitudes de información</li>
                  <li>Para mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Para el envío de comunicaciones comerciales (solo con su consentimiento previo)</li>
                  <li>Para el cumplimiento de obligaciones legales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. ¿Por cuánto tiempo conservaremos sus datos?</h2>
                <p className="mb-4">Los datos personales serán conservados mientras:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Mantenga su consentimiento para el tratamiento (pudiendo revocarlo en cualquier momento)</li>
                  <li>Sea necesario para cumplir con obligaciones legales</li>
                  <li>Puedan derivarse responsabilidades de la relación contractual</li>
                </ul>
                <p>
                  Cuando ya no sean necesarios para esta finalidad, se eliminarán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. ¿A qué destinatarios se comunicarán sus datos?</h2>
                <p className="mb-4">Sus datos podrán ser comunicados a:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Agencias inmobiliarias colaboradoras:</strong> Cuando solicite una valoración, sus datos se compartirán con hasta 3 agencias que operan en su zona para que puedan contactarle con ofertas personalizadas.</li>
                  <li><strong>Proveedores de servicios tecnológicos:</strong> Como plataformas de email (Resend) o sistemas de gestión de leads (n8n), que actúan como encargados del tratamiento bajo estrictas medidas de seguridad.</li>
                  <li><strong>Autoridades públicas:</strong> Cuando sea legalmente requerido.</li>
                </ul>
                <p>
                  No compartimos sus datos personales con terceros para fines de marketing sin su consentimiento explícito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Navegación</h2>
                <p className="mb-4">
                  Al navegar por nuestro sitio web se pueden recoger datos no identificables, que pueden incluir, direcciones IP, ubicación geográfica (aproximadamente), un registro de cómo se utilizan los servicios y sitios, y otros datos que no pueden ser utilizados para identificarle.
                </p>
                <p className="mb-4">
                  Entre los datos no identificativos están también los relacionados a sus hábitos de navegación a través de servicios de terceros como Google Analytics. Este servicio analítico de Google utiliza cookies que recopilan la información de navegación del usuario (incluyendo su dirección IP) y se envía, almacena y gestiona en los servidores de Google bajo sus condiciones de privacidad.
                </p>
                <p>
                  Puede consultar más información sobre las cookies en nuestra <Link href="/politica-cookies" className="text-blue-600 hover:underline">Política de Cookies</Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Exactitud y veracidad de los datos</h2>
                <p className="mb-4">
                  Usted se compromete a que los datos facilitados sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.
                </p>
                <p>
                  Como usuario del sitio web es el único responsable de la veracidad y corrección de los datos que remita exonerando a Inmobiliarias Centro Madrid de cualquier responsabilidad al respecto.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Aceptación y cambios en esta política de privacidad</h2>
                <p className="mb-4">
                  Es necesario que el usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas.
                </p>
                <p className="mb-4">
                  Esta Política de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
                </p>
                <p>
                  Inmobiliarias Centro Madrid se compromete a comunicar dichos cambios, siendo responsabilidad del usuario revisar periódicamente esta Política para estar adecuadamente informado sobre cómo y para qué usamos su información personal.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Seguridad de los datos</h2>
                <p className="mb-4">
                  Para proteger sus datos personales, tomamos precauciones razonables y seguimos las mejores prácticas de la industria para asegurarnos de que no sean perdidos, malversados, accedidos, divulgados, alterados o destruidos de manera inapropiada.
                </p>
                <p>
                  Nuestro sitio web utiliza conexión segura HTTPS en todas las páginas. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Páginas relacionadas</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="/politica-cookies" className="text-blue-600 hover:underline font-semibold">
                    Política de Cookies
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
