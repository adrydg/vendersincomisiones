import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { LeadForm } from '@/types/agency';

export async function POST(request: Request) {
  // API Key hardcoded para evitar problemas de variables de entorno
  const resend = new Resend('re_J5LsDA51_Ax8asBbqPoZJTuZqP6umtxfp');
  try {
    const data: LeadForm = await request.json();

    // Validación básica
    if (!data.name || !data.email || !data.phone) {
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

    // ========================================
    // INTEGRACIÓN N8N WEBHOOK
    // ========================================
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (n8nWebhookUrl) {
      try {
        const webhookPayload = {
          // Datos del lead
          nombre: data.name,
          email: data.email,
          telefono: data.phone,
          tipoOperacion: data.propertyType || '',
          calle: data.street || '',
          ciudad: data.city || '',
          presupuesto: data.budget || '',
          publicadoEnAgencia: data.publishedInAgency !== undefined ? (data.publishedInAgency ? 'Sí' : 'No') : '',
          mensaje: data.message || '',

          // Metadata
          origen: 'InmobiliariasCentro de Madrid',
          url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vendersincomisiones.es',
          timestamp: new Date().toISOString(),
          timestampLocal: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
        };

        const webhookResponse = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
        });

        if (!webhookResponse.ok) {
          console.error('Error al enviar a n8n webhook:', webhookResponse.status, webhookResponse.statusText);
        } else {
          console.log('Lead enviado exitosamente a n8n webhook');
        }
      } catch (webhookError) {
        // No bloqueamos el proceso si falla n8n, continuamos con Resend
        console.error('Error al conectar con n8n webhook:', webhookError);
      }
    } else {
      console.warn('N8N_WEBHOOK_URL no está configurada, saltando envío a n8n');
    }

    // Preparar contenido del email
    const emailContent = `
      <h2>Nuevo Lead - Inmobiliarias Centro de Madrid</h2>

      <h3>Datos del Cliente</h3>
      <ul>
        <li><strong>Nombre:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Teléfono:</strong> ${data.phone}</li>
        ${data.propertyType ? `<li><strong>Tipo de operación:</strong> ${data.propertyType}</li>` : ''}
        ${data.street ? `<li><strong>Calle y número:</strong> ${data.street}</li>` : ''}
        ${data.city ? `<li><strong>Población:</strong> ${data.city}</li>` : ''}
        ${data.budget ? `<li><strong>Presupuesto:</strong> ${data.budget}</li>` : ''}
        ${data.publishedInAgency !== undefined ? `<li><strong>¿Publicado en agencia/portales?:</strong> ${data.publishedInAgency ? 'Sí' : 'No'}</li>` : ''}
      </ul>

      ${data.message ? `
      <h3>Información extra relevante</h3>
      <p>${data.message}</p>
      ` : ''}

      <hr />
      <p style="color: #666; font-size: 12px;">
        Lead recibido desde: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vendersincomisiones.es'}<br />
        Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
      </p>
    `;

    // Preparar subject dinámico
    const subjectParts = ['Nuevo Lead Centro de Madrid:', data.name];
    if (data.propertyType) subjectParts.push(`- ${data.propertyType}`);
    if (data.city) subjectParts.push(`en ${data.city}`);
    const subject = subjectParts.join(' ');

    // Enviar email con Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'a.durandez@gmail.com',
      subject,
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

    // Email de confirmación al usuario
    try {
      const confirmationMessage = data.propertyType && data.city
        ? `para <strong>${data.propertyType}</strong> en <strong>${data.city}</strong>`
        : 'sobre servicios inmobiliarios';

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: data.email,
        subject: '🏠 ¡Tu solicitud ha sido recibida! - Inmobiliarias Centro de Madrid',
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
              <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #f59e0b; margin: 0; font-size: 28px; font-weight: bold;">🎁 ¡Gracias por tu solicitud!</h1>
                <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Has dado el primer paso hacia las mejores ofertas</p>
              </div>

              <!-- Main Content -->
              <div style="padding: 40px 30px;">
                <p style="color: #1f2937; font-size: 18px; margin: 0 0 20px 0;">
                  Hola <strong>${data.name}</strong>,
                </p>

                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                  Gracias por haber solicitado información en <strong style="color: #0f172a;">www.vendersincomisiones.es</strong> ${confirmationMessage}.
                </p>

                <!-- Benefits Box -->
                <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 4px;">
                  <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 20px;">
                    🌟 Ventajas exclusivas para ti
                  </h2>
                  <ul style="color: #78350f; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li><strong>Mejor oferta económica garantizada:</strong> Recibirás propuestas con descuentos de hasta un 30% en comisiones que NO encontrarás yendo directo a las agencias</li>
                    <li><strong>Todo desde tu sofá:</strong> Sin desplazamientos, sin visitas a oficinas. Relájate y deja que las mejores agencias compitan por ofrecerte sus mejores condiciones</li>
                    <li><strong>Servicios premium incluidos:</strong> Home staging, fotografía profesional y más, sin coste adicional</li>
                  </ul>
                </div>

                <div style="background-color: #ecfdf5; padding: 25px; border-radius: 8px; text-align: center; margin: 30px 0;">
                  <div style="font-size: 48px; margin-bottom: 15px;">🛋️</div>
                  <h3 style="color: #065f46; margin: 0 0 10px 0; font-size: 22px;">Siéntate en el sofá y disfruta</h3>
                  <p style="color: #047857; margin: 0; font-size: 16px;">Las mejores inmobiliarias de Centro de Madrid te contactarán en menos de <strong>24 horas</strong></p>
                </div>

                ${data.propertyType || data.street || data.city || data.budget ? `
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
                  <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px;">📋 Resumen de tu solicitud:</h3>
                  <ul style="color: #6b7280; margin: 0; padding-left: 20px; line-height: 1.8;">
                    ${data.propertyType ? `<li><strong>Operación:</strong> ${data.propertyType}</li>` : ''}
                    ${data.street ? `<li><strong>Dirección:</strong> ${data.street}</li>` : ''}
                    ${data.city ? `<li><strong>Población:</strong> ${data.city}</li>` : ''}
                    ${data.budget ? `<li><strong>Presupuesto:</strong> ${data.budget}</li>` : ''}
                  </ul>
                </div>
                ` : ''}

                <div style="margin: 30px 0; padding: 20px; background-color: #eff6ff; border-radius: 8px;">
                  <p style="color: #1e40af; margin: 0; font-size: 14px; line-height: 1.6;">
                    💡 <strong>Consejo:</strong> Cuando las agencias te contacten, menciona que vienes de nuestra plataforma para asegurarte de recibir las ventajas exclusivas.
                  </p>
                </div>

                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                  Un cordial saludo,<br />
                  <strong style="color: #0f172a;">Equipo de Inmobiliarias Centro de Madrid</strong>
                </p>
              </div>

              <!-- Footer -->
              <div style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                  Este email ha sido enviado desde <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vendersincomisiones.es'}" style="color: #2563eb; text-decoration: none;">www.vendersincomisiones.es</a>
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
      // Si falla el email de confirmación, no devolvemos error al usuario
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
    console.error('Error en el endpoint /api/leads:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
