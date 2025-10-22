import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgencyCollaborationForm from '@/components/AgencyCollaborationForm';

export const metadata: Metadata = {
  title: 'Colabora con Nosotros - Inmobiliarias Centro de Madrid',
  description: 'Únete a nuestra red de agencias colaboradoras y recibe leads cualificados de clientes interesados en vender o comprar en Centro de Madrid.',
  alternates: {
    canonical: 'https://www.vendersincomisiones.es/colaborar',
  },
};

export default function ColaborarPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤝 Programa de Colaboración
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Únete a Nuestra Red de Agencias
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recibe leads cualificados de clientes interesados en vender o comprar vivienda en Centro de Madrid.
              Sin costes de captación, solo paga por resultados.
            </p>
          </div>

          {/* Beneficios para agencias */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Leads Cualificados</h3>
              <p className="text-sm text-gray-600">
                Clientes reales listos para vender o comprar. Sin perder tiempo en contactos fríos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Pago por Resultado</h3>
              <p className="text-sm text-gray-600">
                Solo pagas cuando cierras una operación. Sin cuotas mensuales ni costes fijos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-green-500">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Visibilidad Premium</h3>
              <p className="text-sm text-gray-600">
                Aparece en nuestro ranking de mejores inmobiliarias de Centro de Madrid.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <AgencyCollaborationForm />

          {/* Información adicional */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                ¿Cómo funciona la colaboración?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Solicita colaborar</h3>
                  <p className="text-sm text-gray-600">
                    Completa el formulario con los datos de tu agencia
                  </p>
                </div>
                <div>
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recibe leads</h3>
                  <p className="text-sm text-gray-600">
                    Te enviamos clientes potenciales de tu zona de especialización
                  </p>
                </div>
                <div>
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cierra operaciones</h3>
                  <p className="text-sm text-gray-600">
                    Contacta con el cliente y cierra la venta. Paga solo por éxito.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ específico */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ¿Cuánto cuesta aparecer en la plataforma?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No hay costes de alta ni cuotas mensuales. Solo pagas una comisión cuando cierras una operación a través de nuestros leads.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ¿Cuántos leads recibiré?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    El número de leads depende de tu zona de especialización y disponibilidad. Cada lead se comparte con máximo 2-3 agencias para aumentar la calidad.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    ¿Qué comisión debo pagar?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    La comisión varía según el tipo de operación. Te contactaremos para explicarte las condiciones comerciales detalladamente.
                  </p>
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
