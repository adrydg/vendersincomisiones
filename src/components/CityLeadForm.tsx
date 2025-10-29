'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LeadForm } from '@/types/agency';

interface CityLeadFormProps {
  cityName: string;
  defaultPropertyType?: 'comprar' | 'vender' | 'alquilar';
}

export default function CityLeadForm({ cityName, defaultPropertyType = 'vender' }: CityLeadFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<LeadForm>>({
    propertyType: defaultPropertyType,
    city: cityName,
    acceptedTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

      if (response.ok) {
        setSubmitStatus('success');
        // Redirigir a la página de confirmación
        router.push('/confirmacion_contacto');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">¡Solicitud Enviada!</h3>
        <p className="text-green-700 mb-4">
          Las mejores inmobiliarias de {cityName} te contactarán en menos de 24 horas.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-green-600 hover:text-green-800 font-semibold underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 border-2 border-amber-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Recibe Ofertas de Inmobiliarias en {cityName}
        </h3>
        <p className="text-slate-700">
          Compara gratis y ahorra hasta 15.000€ en comisiones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
            placeholder="600 123 456"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
          placeholder="tu@email.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-900 mb-2">
            ¿Qué quieres hacer?
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
          >
            <option value="vender">Vender</option>
            <option value="comprar">Comprar</option>
            <option value="alquilar">Alquilar</option>
          </select>
        </div>

        <div>
          <label htmlFor="street" className="block text-sm font-semibold text-slate-900 mb-2">
            Calle y número
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street || ''}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
            placeholder="C/ Ejemplo, 123"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
          Información adicional (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900"
          placeholder="Cuéntanos más sobre tu inmueble..."
        />
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="acceptedTerms"
            required
            checked={formData.acceptedTerms || false}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
          />
          <span className="text-sm text-slate-700">
            Acepto la{' '}
            <a href="/politica-privacidad" target="_blank" className="text-amber-600 hover:underline">
              política de privacidad
            </a>{' '}
            y los{' '}
            <a href="/terminos-condiciones" target="_blank" className="text-amber-600 hover:underline">
              términos y condiciones
            </a>
            . *
          </span>
        </label>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">
            Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </span>
        ) : (
          '🎁 Recibir Ofertas Gratis'
        )}
      </button>

      <p className="text-center text-xs text-slate-500 mt-4">
        🔒 Tus datos están protegidos y solo se compartirán con inmobiliarias verificadas
      </p>
    </form>
  );
}
