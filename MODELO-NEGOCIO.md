# Modelo de Negocio - Plataforma de Comparación Inmobiliaria

## 📋 Resumen Ejecutivo

Este documento describe el modelo de negocio implementado en la plataforma de comparación de inmobiliarias. **El objetivo es captar leads cualificados y derivarlos a las agencias asociadas, obteniendo mejores condiciones para los clientes gracias a acuerdos comerciales con las inmobiliarias.**

---

## 🎯 Propuesta de Valor

### Para los Clientes (Propietarios):
- ✅ **Ventajas exclusivas**: Descuentos de hasta un 30% en comisiones
- ✅ **Propuestas mejoradas**: Condiciones que no obtendrían yendo directo a la agencia
- ✅ **Servicios premium incluidos**: Home staging, fotografía profesional, etc.
- ✅ **Sin contacto directo**: Nosotros gestionamos la relación con las agencias
- ✅ **Comparación fácil**: Reciben múltiples ofertas sin esfuerzo

### Para las Agencias Inmobiliarias:
- ✅ **Leads cualificados**: Clientes reales listos para vender/comprar
- ✅ **Pago por resultado**: Solo pagan cuando cierran una operación
- ✅ **Visibilidad**: Aparecen en ranking de mejores agencias
- ✅ **Menos competencia**: Compiten solo con 2-3 agencias seleccionadas

---

## 🔄 Flujo de Conversión

```
CLIENTE → FORMULARIO → LEAD A ADMIN → DERIVACIÓN A AGENCIAS → CIERRE → COMISIÓN
```

### Paso 1: Cliente Entra al Sitio
- Ve el ranking de mejores agencias
- Lee sobre ventajas exclusivas
- **NO puede contactar directamente** (botones de llamar eliminados)

### Paso 2: Cliente Completa Formulario
- Datos personales
- Tipo de operación (comprar/vender/alquilar)
- Ubicación
- Importe compraventa deseado
- Mensaje adicional

### Paso 3: Lead Llega al Administrador
- Email a: `a.durandez@gmail.com`
- Contiene todos los datos del cliente
- Reply-to: email del cliente (para responder directo)

### Paso 4: Derivación a Agencias
- El administrador selecciona 2-3 agencias según:
  - Ubicación del inmueble
  - Tipo de operación
  - Rango de precio
  - Especialización de la agencia
- Envía el lead a las agencias seleccionadas
- Las agencias contactan al cliente con propuesta

### Paso 5: Cierre y Comisión
- La agencia cierra la operación
- Paga comisión a la plataforma (% de su comisión)
- El cliente obtiene descuento gracias a la plataforma

---

## 💰 Modelo de Monetización

### Opción 1: Comisión por Cierre (Recomendado)
- La plataforma cobra un **porcentaje de la comisión** de la agencia
- Ejemplo: Agencia cobra 3% al vendedor
  - Agencia paga 20-30% de esa comisión a la plataforma
  - Cliente obtiene descuento del 10-15%
  - Todos ganan

### Opción 2: Pago por Lead
- Agencias pagan por cada lead recibido
- Precio fijo por lead (Ej: 50-100€)
- Riesgo menor para la plataforma

### Opción 3: Suscripción Mensual
- Agencias pagan cuota mensual por aparecer
- Acceso ilimitado a leads
- Modelo más predecible

---

## 🎨 Cambios de Diseño Implementados

### 1. Formulario de Contacto
**Cambio:** "Presupuesto" → "Importe compraventa deseado"
**Motivo:** Más específico, ayuda a cualificar mejor el lead

**Archivo:** `src/components/LeadForm.tsx`
```tsx
<label>Importe compraventa deseado (opcional)</label>
```

### 2. AgencyCard - Sin Contacto Directo
**Cambios:**
- ❌ Botón "Llamar" eliminado
- ❌ Botón "Ver Detalles" eliminado
- ✅ Botón "🎁 Recibir Propuesta Mejorada" (va a /contacto)
- ✅ Texto: "Descuentos exclusivos en comisiones"

**Archivo:** `src/components/AgencyCard.tsx`
```tsx
<Link href="/contacto" className="block w-full bg-amber-500...">
  🎁 Recibir Propuesta Mejorada
</Link>
<p className="text-xs text-center text-gray-500 mt-2">
  Descuentos exclusivos en comisiones
</p>
```

### 3. Hero - Ventajas Exclusivas Destacadas
**Cambios:**
- Layout de 2 columnas en desktop
- Columna derecha: **BOX DESTACADO** con ventajas
- Título: "Consigue Ventajas Exclusivas en las agencias de tu barrio"
- 3 beneficios clave:
  - Descuentos exclusivos hasta 30%
  - Propuestas mejoradas
  - Servicios premium incluidos

**Archivo:** `src/app/page.tsx`
```tsx
<div className="bg-amber-500/10 border-2 border-amber-500/30...">
  <h2>Consigue Ventajas Exclusivas</h2>
  <p>en las agencias de tu barrio</p>
  ...
</div>
```

### 4. Email Configuration
**Configuración HARDCODED** (sin variables de entorno):
```javascript
API Key: 're_J5LsDA51_Ax8asBbqPoZJTuZqP6umtxfp'
FROM: 'onboarding@resend.dev'
TO: 'a.durandez@gmail.com'
```

**Archivo:** `src/app/api/leads/route.ts`

---

## 📊 Métricas Clave a Trackear

1. **Tasa de conversión**: Visitantes → Leads
2. **Calidad del lead**: % de leads que cierran
3. **Valor por lead**: Comisión promedio obtenida
4. **Agencias activas**: Número de agencias pagando
5. **NPS**: Satisfacción de clientes y agencias

---

## 🚀 Para Escalar a Nuevas Ciudades

### Checklist de Replicación:

1. **Copiar proyecto base** (Fuenlabrada como template)
2. **Actualizar datos de ciudad:**
   - Nombre de la ciudad en todos los archivos
   - Barrios según Idealista
   - Agencias locales (investigar top 10)
   - Precios por m² actualizados

3. **Configurar emails:**
   - API Key Resend (hardcoded)
   - TO email: a.durandez@gmail.com

4. **Actualizar URLs y SEO:**
   - Dominio específico de la ciudad
   - Keywords locales
   - Meta descriptions

5. **Deploy en Vercel:**
   - Nuevo proyecto por ciudad
   - Dominio: www.inmobiliarias[CIUDAD].es

### Archivos a Modificar:

```
src/
├── components/
│   ├── LeadForm.tsx ✅
│   └── AgencyCard.tsx ✅
├── app/
│   ├── page.tsx ✅ (Hero con ventajas)
│   └── api/leads/route.ts ✅
├── data/
│   ├── agencies.ts (actualizar con agencias locales)
│   └── neighborhoods.ts (actualizar con barrios)
└── lib/
    └── metadata.ts (SEO local)
```

---

## 🎯 Conversión Optimizada

### Mensaje Principal:
"**No contactes directamente con las agencias. A través de nuestra plataforma, obtienes ventajas exclusivas que no encontrarás yendo directo.**"

### Puntos de Conversión:
1. Hero - Box derecho con ventajas
2. AgencyCard - Botón "Recibir Propuesta Mejorada"
3. CTA Final - "Recibir Propuestas Ahora"
4. Todas las menciones de "descuentos exclusivos"

---

## 📈 Próximos Pasos

1. ✅ **Validar modelo en Fuenlabrada**
2. ⏳ Replicar a Móstoles
3. ⏳ Replicar a Fuenlabrada
4. ⏳ Replicar a Getafe
5. ⏳ Replicar a Leganés

---

## 💡 Tips de Éxito

- **Calidad sobre cantidad**: Mejor 3 leads buenos que 20 malos
- **Respuesta rápida**: Contactar leads en <2 horas aumenta conversión 5x
- **Seguimiento**: Hacer follow-up a los 3 días si no hay respuesta
- **Feedback**: Pedir opinión a clientes que cierran
- **Optimización continua**: A/B testing de mensajes

---

**Última actualización:** Octubre 2025
**Versión:** 1.0 - Modelo Fuenlabrada
