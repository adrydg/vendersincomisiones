'use client';

import { useState } from 'react';

interface AgencyFormData {
  agencyName: string;
  contactName: string;
  email: string;
  phone: string;
  website?: string;
  message?: string;
  acceptedTerms: boolean;
}

export default function AgencyCollaborationForm() {
  const [formData, setFormData] = useState<AgencyFormData>({
    agencyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    acceptedTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      setErrorMessage('Debes aceptar los términos y condiciones');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/agency-collaboration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setSubmitStatus('success');
      setFormData({
        agencyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        acceptedTerms: false,
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            ¡Solicitud Recibida!
          </h2>
          <p className="text-green-800 mb-6">
            Gracias por tu interés en colaborar con nosotros. Nos pondremos en contacto contigo en menos de 48 horas para explicarte el programa de colaboración.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Datos de tu Agencia
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre de la inmobiliaria */}
        <div>
          <label htmlFor="agencyName" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de la Inmobiliaria <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="agencyName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Ej: Inmobiliaria Alcorcón Centro"
            value={formData.agencyName}
            onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
          />
        </div>

        {/* Nombre de contacto */}
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de Contacto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Ej: Juan Pérez"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
          />
        </div>

        {/* Email y Teléfono en fila */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="contacto@tuagencia.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="916 XX XX XX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Website (opcional) */}
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
            Sitio Web (opcional)
          </label>
          <input
            type="url"
            id="website"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="https://www.tuagencia.com"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>

        {/* Mensaje adicional */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje adicional (opcional)
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            placeholder="Cuéntanos sobre tu agencia, zonas de especialización, experiencia..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Checkbox términos */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            checked={formData.acceptedTerms}
            onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            Acepto la política de privacidad y los términos de colaboración. Autorizo a ser contactado para explicarme las condiciones comerciales.
          </label>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
            {errorMessage}
          </div>
        )}

        {/* Botón submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Colaboración'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Al enviar este formulario, un miembro de nuestro equipo te contactará para explicarte las condiciones de colaboración.
        </p>
      </form>
    </div>
  );
}
