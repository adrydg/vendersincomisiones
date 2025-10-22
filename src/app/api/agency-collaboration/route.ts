import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface AgencyCollaborationData {
  agencyName: string;
  contactName: string;
  email: string;
  phone: string;
  website?: string;
  message?: string;
  acceptedTerms: boolean;
}

export async function POST(request: Request) {
  // API Key hardcoded (mismo que leads)
  const resend = new Resend('re_J5LsDA51_Ax8asBbqPoZJTuZqP6umtxfp');

  try {
    const data: AgencyCollaborationData = await request.json();

    // Validación básica
    if (!data.agencyName || !data.contactName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    if (!data.acceptedTerms) {
      return NextResponse.json(
        { error: 'Debes aceptar los términos y condiciones' },
        { status: 400 }
      );
    }

    // Preparar contenido del email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🤝 Nueva Solicitud de Colaboración</h1>
        </div>

        <div style="background-color: #f9fafb; padding: 30px;">
          <div style="background-color: white; border-radius: 8px; padding: 25px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #059669; margin-top: 0;">Datos de la Agencia</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Nombre de la Inmobiliaria:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${data.agencyName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Persona de Contacto:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${data.contactName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${data.email}" style="color: #059669;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Teléfono:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${data.phone}" style="color: #059669;">${data.phone}</a></td>
              </tr>
              ${data.website ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><strong>Sitio Web:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="${data.website}" target="_blank" style="color: #059669;">${data.website}</a></td>
              </tr>
              ` : ''}
            </table>

            ${data.message ? `
            <div style="margin-top: 25px; padding: 20px; background-color: #f0fdf4; border-left: 4px solid #059669; border-radius: 4px;">
              <h3 style="color: #065f46; margin: 0 0 10px 0; font-size: 16px;">Mensaje adicional:</h3>
              <p style="color: #047857; margin: 0; white-space: pre-line;">${data.message}</p>
            </div>
            ` : ''}
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #78350f; font-size: 14px;">
              <strong>⚡ Acción requerida:</strong> Contactar con ${data.contactName} en las próximas 48 horas para explicar el programa de colaboración.
            </p>
          </div>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">
            Solicitud recibida desde: <strong>www.inmobiliariascentromadrid.es/colaborar</strong><br />
            Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
          </p>
        </div>
      </div>
    `;

    // Enviar email al administrador
    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'a.durandez@gmail.com',
      subject: `🤝 Nueva Agencia Quiere Colaborar: ${data.agencyName}`,
      html: emailContent,
      replyTo: data.email,
    });

    if (error) {
      console.error('Error al enviar email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el formulario' },
        { status: 500 }
      );
    }

    // Email de confirmación a la agencia
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: data.email,
        subject: '✅ Solicitud de Colaboración Recibida - Inmobiliarias Centro de Madrid',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

              <!-- Header -->
              <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">✅ ¡Solicitud Recibida!</h1>
                <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Gracias por tu interés en colaborar</p>
              </div>

              <!-- Main Content -->
              <div style="padding: 40px 30px;">
                <p style="color: #1f2937; font-size: 18px; margin: 0 0 20px 0;">
                  Hola <strong>${data.contactName}</strong>,
                </p>

                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                  Hemos recibido correctamente tu solicitud para colaborar con <strong style="color: #059669;">Inmobiliarias Centro de Madrid</strong>.
                </p>

                <div style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; margin: 30px 0; border-radius: 4px;">
                  <h2 style="color: #065f46; margin: 0 0 15px 0; font-size: 20px;">
                    📋 Datos recibidos
                  </h2>
                  <ul style="color: #047857; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li><strong>Agencia:</strong> ${data.agencyName}</li>
                    <li><strong>Contacto:</strong> ${data.contactName}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                    <li><strong>Teléfono:</strong> ${data.phone}</li>
                    ${data.website ? `<li><strong>Web:</strong> ${data.website}</li>` : ''}
                  </ul>
                </div>

                <div style="background-color: #eff6ff; padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0;">
                  <div style="font-size: 48px; margin-bottom: 15px;">⏱️</div>
                  <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 22px;">Próximos pasos</h3>
                  <p style="color: #1e3a8a; margin: 0; font-size: 16px;">Nuestro equipo revisará tu solicitud y te contactará en las próximas <strong>48 horas</strong> para explicarte las condiciones de colaboración.</p>
                </div>

                <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0;">
                  <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">
                    🎯 Ventajas de colaborar con nosotros
                  </h3>
                  <ul style="color: #78350f; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li>Leads cualificados de clientes reales</li>
                    <li>Pago solo por resultados (sin cuotas fijas)</li>
                    <li>Visibilidad en nuestro ranking</li>
                    <li>Sin costes de captación</li>
                  </ul>
                </div>

                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                  Un cordial saludo,<br />
                  <strong style="color: #059669;">Equipo de Inmobiliarias Centro de Madrid</strong>
                </p>
              </div>

              <!-- Footer -->
              <div style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                  Este email ha sido enviado desde <a href="https://www.inmobiliariascentromadrid.es" style="color: #059669; text-decoration: none;">www.inmobiliariascentromadrid.es</a>
                </p>
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  © ${new Date().getFullYear()} Inmobiliarias Centro de Madrid. Todos los derechos reservados.
                </p>
              </div>

            </div>
          </body>
          </html>
        `,
      });
    } catch (confirmError) {
      console.error('Error al enviar email de confirmación:', confirmError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Solicitud enviada correctamente',
        id: emailData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en el endpoint /api/agency-collaboration:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
