'use client';

import { useState } from 'react';
import { LeadForm as LeadFormType } from '@/types/agency';

export default function LeadForm() {
  const [formData, setFormData] = useState<LeadFormType>({
    name: '',
    email: '',
    phone: '',
    propertyType: undefined,
    street: '',
    city: '',
    budget: '',
    publishedInAgency: undefined,
    message: '',
    acceptedTerms: true,  // Premarcado
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: undefined,
        street: '',
        city: '',
        budget: '',
        publishedInAgency: undefined,
        message: '',
        acceptedTerms: true,  // Mantener premarcado
      });

      // Scroll al mensaje de éxito
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Recibe Ofertas Personalizadas
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Completa el formulario y recibe propuestas de las mejores agencias inmobiliarias
      </p>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
          ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            ¿Qué deseas hacer?
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, propertyType: 'comprar' }))}
              className={`flex-1 px-4 py-3 rounded-full font-semibold transition-all ${
                formData.propertyType === 'comprar'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Comprar
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, propertyType: 'vender' }))}
              className={`flex-1 px-4 py-3 rounded-full font-semibold transition-all ${
                formData.propertyType === 'vender'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Vender
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, propertyType: 'alquilar' }))}
              className={`flex-1 px-4 py-3 rounded-full font-semibold transition-all ${
                formData.propertyType === 'alquilar'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Alquilar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
              Calle y número
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ej: Calle Mayor 15"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              Población
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ej: Centro de Madrid"
            />
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Importe compraventa deseado
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ej: 200.000€"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            ¿Actualmente publicado en agencia o portales?
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, publishedInAgency: true }))}
              className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all ${
                formData.publishedInAgency === true
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sí
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, publishedInAgency: false }))}
              className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all ${
                formData.publishedInAgency === false
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              No
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Información extra relevante
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Cuéntanos más sobre lo que buscas..."
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="acceptedTerms"
            name="acceptedTerms"
            required
            checked={formData.acceptedTerms}
            onChange={handleChange}
            className="mt-1 mr-2"
          />
          <label htmlFor="acceptedTerms" className="text-sm text-gray-600">
            Acepto la{' '}
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              política de privacidad
            </button>
            {' '}y los{' '}
            <button
              type="button"
              onClick={() => setShowTermsModal(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              términos y condiciones
            </button>
            . Acepto que mis datos sean cedidos a empresas colaboradoras de www.vendersincomisiones.es para gestionar mi solicitud y ofrecerme servicios relacionados con mi interés legítimo. *
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Ofertas Gratis'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          * Campos obligatorios. Recibirás ofertas de hasta 3 agencias en 24 horas.
        </p>
      </form>

      {/* Modal Política de Privacidad */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowPrivacyModal(false)}>
          <div className="bg-white rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Política de Privacidad</h2>
              <button onClick={() => setShowPrivacyModal(false)} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
              <p><strong>Última actualización:</strong> Enero 2025</p>

              <h3 className="text-lg font-bold mt-6">1. Responsable del Tratamiento</h3>
              <p>www.vendersincomisiones.es es responsable del tratamiento de los datos personales que nos facilite a través de este formulario.</p>

              <h3 className="text-lg font-bold mt-6">2. Finalidad del Tratamiento</h3>
              <p>Sus datos personales serán tratados con las siguientes finalidades:</p>
              <ul className="list-disc pl-6">
                <li>Gestionar su solicitud de información sobre servicios inmobiliarios</li>
                <li>Ceder sus datos a empresas colaboradoras (agencias inmobiliarias) para que puedan contactarle con ofertas relacionadas con su solicitud</li>
                <li>Enviarle comunicaciones sobre las ofertas recibidas</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">3. Base Legal</h3>
              <p>El tratamiento de sus datos se basa en:</p>
              <ul className="list-disc pl-6">
                <li><strong>Consentimiento:</strong> Al aceptar esta política, consiente expresamente el tratamiento y cesión de sus datos</li>
                <li><strong>Interés legítimo:</strong> Para gestionar su solicitud de información y conectarle con profesionales del sector inmobiliario</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">4. Destinatarios de los Datos</h3>
              <p>Sus datos serán cedidos a:</p>
              <ul className="list-disc pl-6">
                <li><strong>Agencias inmobiliarias colaboradoras</strong> ubicadas en la zona geográfica de su interés (máximo 3 agencias)</li>
                <li>Las agencias utilizarán sus datos exclusivamente para contactarle y ofrecerle servicios relacionados con su solicitud</li>
                <li>No cedemos sus datos a terceros con fines publicitarios no relacionados con su solicitud</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">5. Conservación de Datos</h3>
              <p>Conservaremos sus datos personales durante:</p>
              <ul className="list-disc pl-6">
                <li>El tiempo necesario para gestionar su solicitud (máximo 12 meses)</li>
                <li>Posteriormente, durante los plazos legales aplicables para atender posibles responsabilidades</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">6. Sus Derechos</h3>
              <p>Puede ejercer los siguientes derechos:</p>
              <ul className="list-disc pl-6">
                <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Retirar consentimiento:</strong> En cualquier momento</li>
              </ul>
              <p className="mt-4">Para ejercer estos derechos, puede contactarnos a través del formulario de contacto o enviando un email indicando su solicitud.</p>

              <h3 className="text-lg font-bold mt-6">7. Seguridad</h3>
              <p>Hemos adoptado medidas técnicas y organizativas para garantizar la seguridad de sus datos y evitar su alteración, pérdida o acceso no autorizado.</p>

              <h3 className="text-lg font-bold mt-6">8. Reclamaciones</h3>
              <p>Tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa.</p>
            </div>
            <button onClick={() => setShowPrivacyModal(false)} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal Términos y Condiciones */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowTermsModal(false)}>
          <div className="bg-white rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Términos y Condiciones</h2>
              <button onClick={() => setShowTermsModal(false)} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
              <p><strong>Última actualización:</strong> Enero 2025</p>

              <h3 className="text-lg font-bold mt-6">1. Objeto del Servicio</h3>
              <p>www.vendersincomisiones.es es una plataforma de intermediación que conecta a personas interesadas en servicios inmobiliarios con agencias profesionales de la zona.</p>

              <h3 className="text-lg font-bold mt-6">2. Funcionamiento del Servicio</h3>
              <ul className="list-disc pl-6">
                <li>El usuario completa un formulario con su solicitud</li>
                <li>Seleccionamos hasta 3 agencias especializadas según la solicitud</li>
                <li>Las agencias reciben los datos y contactan al usuario con ofertas personalizadas</li>
                <li>El usuario elige libremente la agencia que prefiera</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">3. Gratuidad del Servicio</h3>
              <p>El uso de esta plataforma es 100% gratuito para los usuarios. No cobramos ninguna comisión ni tarifa por nuestro servicio de intermediación.</p>

              <h3 className="text-lg font-bold mt-6">4. Ventajas Exclusivas</h3>
              <p>Las agencias colaboradoras ofrecen condiciones mejoradas a los usuarios que llegan a través de nuestra plataforma, incluyendo:</p>
              <ul className="list-disc pl-6">
                <li>Descuentos en comisiones de hasta un 30%</li>
                <li>Servicios premium incluidos (fotografía, home staging, etc.)</li>
                <li>Atención prioritaria</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">5. Responsabilidades</h3>
              <p><strong>De la plataforma:</strong></p>
              <ul className="list-disc pl-6">
                <li>Seleccionar agencias profesionales verificadas</li>
                <li>Proteger los datos personales según RGPD</li>
                <li>Derivar la solicitud en máximo 24 horas</li>
              </ul>
              <p className="mt-4"><strong>Del usuario:</strong></p>
              <ul className="list-disc pl-6">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Responder a las agencias que contacten</li>
                <li>Informar si ya no está interesado en el servicio</li>
              </ul>
              <p className="mt-4"><strong>De las agencias:</strong></p>
              <ul className="list-disc pl-6">
                <li>Contactar al usuario en tiempo razonable</li>
                <li>Ofrecer las condiciones acordadas</li>
                <li>Cumplir con la normativa del sector inmobiliario</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">6. Limitación de Responsabilidad</h3>
              <p>www.vendersincomisiones.es actúa como intermediario. No somos responsables de:</p>
              <ul className="list-disc pl-6">
                <li>Las ofertas, precios o condiciones propuestas por las agencias</li>
                <li>La calidad del servicio prestado por las agencias</li>
                <li>Disputas entre usuario y agencia</li>
              </ul>

              <h3 className="text-lg font-bold mt-6">7. Propiedad Intelectual</h3>
              <p>Todos los contenidos de esta web (textos, imágenes, diseño, etc.) están protegidos por derechos de propiedad intelectual.</p>

              <h3 className="text-lg font-bold mt-6">8. Modificaciones</h3>
              <p>Nos reservamos el derecho a modificar estos términos. Los cambios serán notificados en la web con antelación suficiente.</p>

              <h3 className="text-lg font-bold mt-6">9. Ley Aplicable</h3>
              <p>Estos términos se rigen por la legislación española. Para cualquier controversia, serán competentes los juzgados y tribunales del domicilio del usuario.</p>
            </div>
            <button onClick={() => setShowTermsModal(false)} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
