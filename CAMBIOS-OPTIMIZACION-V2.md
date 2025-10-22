# 🚀 Cambios de Optimización v2.0 - Octubre 2025

**Aplicado en:** Alcorcón (modelo)
**Para replicar en:** Fuenlabrada, Móstoles, Getafe, Leganés, etc.

---

## 📊 Resumen Ejecutivo

Esta actualización incluye **9 cambios principales** para mejorar conversión, anonimizar agencias y captar colaboradores.

### Objetivos:
1. ✅ Mejorar conversión destacando "GRATIS" y "SIN COMPROMISO"
2. ✅ Anonimizar agencias para proteger identidad
3. ✅ Mostrar ahorro específico por agencia (€2.500 - €8.000)
4. ✅ Captar nuevas agencias colaboradoras con formulario dedicado
5. ✅ Tracking avanzado (solo Alcorcón - GA4 + Google Ads)

---

## 🔧 Cambios Técnicos Detallados

### **1️⃣ Tracking Google Analytics + Ads (SOLO ALCORCÓN)**

**Archivo:** `src/components/GoogleAnalytics.tsx`

**⚠️ IMPORTANTE:** Este cambio SOLO se aplica en Alcorcón, NO replicar en otras ciudades.

```typescript
// Alcorcón - CON tracking
const GA_MEASUREMENT_ID = 'G-NY3CXN36L0'; // Google Analytics 4
const GOOGLE_ADS_ID = 'AW-17610611430';   // Google Ads

// Otras ciudades - SIN tracking Google Ads
// Mantener solo GA4 con ID específico de cada ciudad
```

**Implementación:**
- Doble script: GA4 + Google Ads
- Strategy: `afterInteractive`
- Compartiendo `window.dataLayer`

---

### **2️⃣ Hero - Badge "Gratis" Destacado**

**Archivo:** `src/app/page.tsx` (líneas ~55-58)

**ANTES:**
```tsx
Servicio Premium de Comparación Inmobiliaria
```

**DESPUÉS:**
```tsx
Servicio Premium Gratis de Comparación Inmobiliaria
```

**Objetivo:** Reducir fricción destacando que el servicio es gratuito desde el primer momento.

---

### **3️⃣ Pastilla "¡GRATIS Y SIN COMPROMISO!"**

**Archivo:** `src/app/page.tsx` (líneas ~124-131)

**NUEVO BLOQUE:**
```tsx
{/* Pastilla destacada "Gratis y sin compromiso" */}
<div className="mt-6 flex justify-center">
  <div className="bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-3 rounded-full shadow-lg">
    <span className="text-slate-900 font-bold text-lg tracking-wide">
      ¡GRATIS Y SIN COMPROMISO!
    </span>
  </div>
</div>
```

**Posición:** Dentro del box "Ventajas Exclusivas", después de los 3 beneficios, antes del borde inferior.

**Diseño:**
- Gradiente amber corporativo
- Texto negro bold para máximo contraste
- Shadow pronunciada
- Centrada y muy visible

---

### **4️⃣ Anonimización de Agencias**

**Archivo:** `src/data/agencies.ts`

**CAMBIO:**
```typescript
// ANTES
name: 'Tecnocasa Alcorcón',

// DESPUÉS
name: 'Agencia colaboradora 1',
```

**Aplicar a TODAS las agencias:**
- Agencia colaboradora 1
- Agencia colaboradora 2
- ...
- Agencia colaboradora 10

**⚠️ IMPORTANTE:**
- Preservar TODO lo demás: ratings, reviewsCount, description, specialties, coverage, fees, contact, features
- Solo cambiar el campo `name`
- Cada ciudad tiene sus propias agencias, NO mezclar datos entre ciudades

---

### **5️⃣ Campo `savings` en Interface Agency**

**Archivo:** `src/types/agency.ts`

**AÑADIR:**
```typescript
export interface Agency {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewsCount: number;
  description: string;
  specialties: string[];
  coverage: string[];
  fees: {
    buying: string;
    selling: string;
  };
  contactEmail: string;
  contactPhone: string;
  website: string;
  features: string[];
  savings: number; // ← NUEVO CAMPO
}
```

**Valores de ahorro por agencia (ejemplo Alcorcón):**
```typescript
// Distribuir valores entre 2.500€ y 8.000€
Agencia 1: 7500
Agencia 2: 5800
Agencia 3: 6200
Agencia 4: 4500
Agencia 5: 8000
Agencia 6: 3200
Agencia 7: 5500
Agencia 8: 2500
Agencia 9: 6800
Agencia 10: 4200
```

**Para otras ciudades:** Usar valores aleatorios diferentes en el mismo rango.

---

### **6️⃣ Cuadradito Verde de Ahorro en AgencyCard**

**Archivo:** `src/components/AgencyCard.tsx`

**CAMBIO:**
```tsx
// ANTES
<div>
  <h3 className="text-xl font-bold text-gray-900 mb-1">{agency.name}</h3>
  <div className="flex items-center gap-2">
    {/* Rating */}
  </div>
</div>

// DESPUÉS
<div className="flex-1">
  <h3 className="text-xl font-bold text-gray-900 mb-2">{agency.name}</h3>

  {/* Cuadradito verde con ahorro */}
  <div className="inline-block bg-green-50 border border-green-500 rounded-md px-3 py-1.5 mb-3">
    <p className="text-green-700 font-semibold text-sm">
      Ahorra hasta {agency.savings.toLocaleString('es-ES')}€ en la venta con nosotros
    </p>
  </div>

  <div className="flex items-center gap-2 mt-2">
    {/* Rating */}
  </div>
</div>
```

**Diseño:**
- Fondo verde claro: `bg-green-50`
- Borde verde: `border border-green-500`
- Texto verde oscuro: `text-green-700 font-semibold`
- Padding adecuado
- Integrado elegantemente en la card

---

### **7️⃣ Botón Verde "Soy agencia y quiero colaborar"**

**Archivo:** `src/components/Navbar.tsx`

**CAMBIO:**
```tsx
// ANTES
<div>
  <Link href="/contacto" className="bg-amber-500...">
    Solicitar Ofertas
  </Link>
</div>

// DESPUÉS
<div className="flex gap-3">
  <Link
    href="/colaborar"
    className="bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700 transition-all font-semibold shadow-md hover:shadow-lg"
  >
    Soy agencia y quiero colaborar
  </Link>
  <Link
    href="/contacto"
    className="bg-amber-500 text-slate-900 px-6 py-2 rounded-sm hover:bg-amber-400 transition-all font-semibold shadow-md hover:shadow-lg"
  >
    Solicitar Ofertas
  </Link>
</div>
```

**Posición:** Antes del botón "Solicitar Ofertas"

**Diseño:**
- Verde corporativo: `bg-green-600`
- Hover: `bg-green-700`
- Texto blanco
- Shadow para destacar

---

### **8️⃣ Nueva Página /colaborar**

**Archivo NUEVO:** `src/app/colaborar/page.tsx`

**Contenido completo:**
```tsx
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgencyCollaborationForm from '@/components/AgencyCollaborationForm';

export const metadata: Metadata = {
  title: 'Colabora con Nosotros - Inmobiliarias [CIUDAD]',
  description: 'Únete a nuestra red de agencias colaboradoras y recibe leads cualificados de clientes interesados en vender o comprar en [CIUDAD].',
  alternates: {
    canonical: 'https://www.inmobiliarias[ciudad].es/colaborar',
  },
};

export default function ColaborarPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤝 Programa de Colaboración
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Únete a Nuestra Red de Agencias
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recibe leads cualificados de clientes interesados en vender o comprar vivienda en [CIUDAD].
              Sin costes de captación, solo paga por resultados.
            </p>
          </div>

          {/* 3 Beneficios */}
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
                Aparece en nuestro ranking de mejores inmobiliarias de [CIUDAD].
              </p>
            </div>
          </div>

          {/* Formulario */}
          <AgencyCollaborationForm />

          {/* Cómo funciona + FAQ */}
          {/* ... resto del contenido */}
        </div>
      </main>

      <Footer />
    </>
  );
}
```

**⚠️ Adaptar:**
- `[CIUDAD]` → Nombre de la ciudad específica
- `[ciudad]` → nombre en minúsculas para URL
- Dominio específico en canonical

---

### **9️⃣ Componente AgencyCollaborationForm**

**Archivo NUEVO:** `src/components/AgencyCollaborationForm.tsx`

**Campos del formulario:**
1. Nombre de la Inmobiliaria (obligatorio)
2. Nombre de Contacto (obligatorio)
3. Email (obligatorio)
4. Teléfono (obligatorio)
5. Sitio Web (opcional)
6. Mensaje adicional (opcional)
7. Checkbox términos (obligatorio, no premarcado)

**Estados:**
- `idle`: Formulario normal
- `success`: Mensaje de éxito verde
- `error`: Mensaje de error rojo

**Submit:** POST a `/api/agency-collaboration`

**⚠️ NO modificar:** Este componente es universal, NO tiene referencias a ciudades específicas.

---

### **🔟 API Endpoint /api/agency-collaboration**

**Archivo NUEVO:** `src/app/api/agency-collaboration/route.ts`

**Funcionalidad:**
1. Recibe datos de la agencia
2. Valida campos obligatorios
3. Envía email al admin (a.durandez@gmail.com)
4. Envía email de confirmación a la agencia

**Email al Admin:**
```html
🤝 Nueva Solicitud de Colaboración
Agencia: [nombre]
Contacto: [nombre contacto]
Email: [email]
Teléfono: [teléfono]
Web: [web si existe]
Mensaje: [mensaje si existe]
⚡ Acción requerida: Contactar en 48h
```

**Email a la Agencia:**
```html
✅ ¡Solicitud Recibida!
Gracias por tu interés en colaborar con Inmobiliarias [CIUDAD]
Datos recibidos: [resumen]
⏱️ Próximos pasos: Te contactaremos en 48 horas
🎯 Ventajas: Leads cualificados, pago por resultado, visibilidad
```

**⚠️ Adaptar en cada ciudad:**
- Línea 49: `Fuenlabrada` (en el subject)
- Línea 49: Domain en footer email
- Línea 110: Texto "Inmobiliarias [CIUDAD]"
- Línea 158: Domain en footer

**API Key:** Mismo de leads: `re_J5LsDA51_Ax8asBbqPoZJTuZqP6umtxfp`

---

## 📋 Checklist de Aplicación

Para aplicar en **Fuenlabrada** (o cualquier ciudad nueva):

### **Paso 1: Archivos a Modificar**
- [ ] `src/app/page.tsx` - Hero badge "Gratis" + Pastilla
- [ ] `src/data/agencies.ts` - Anonimizar + campo savings
- [ ] `src/types/agency.ts` - Añadir campo savings
- [ ] `src/components/AgencyCard.tsx` - Cuadradito verde
- [ ] `src/components/Navbar.tsx` - Botón verde

### **Paso 2: Archivos a Crear**
- [ ] `src/app/colaborar/page.tsx` - Página colaboración
- [ ] `src/components/AgencyCollaborationForm.tsx` - Formulario
- [ ] `src/app/api/agency-collaboration/route.ts` - API endpoint

### **Paso 3: Adaptaciones Específicas**
- [ ] Cambiar todas las referencias "Alcorcón" → "[Nueva Ciudad]"
- [ ] Actualizar dominio en metadata
- [ ] Actualizar dominio en emails
- [ ] Asignar valores savings aleatorios (2500-8000)
- [ ] Anonimizar agencias locales (Agencia colaboradora 1-10)

### **Paso 4: Verificación**
- [ ] Build sin errores
- [ ] No hay referencias cruzadas entre ciudades
- [ ] Emails funcionando (testar con submit)
- [ ] Formularios validando correctamente
- [ ] Diseño responsive en móvil

---

## 🚫 Errores Comunes a Evitar

1. ❌ **NO mezclar datos de ciudades**
   - Cada ciudad tiene sus propias agencias
   - No copiar nombres reales entre ciudades

2. ❌ **NO olvidar actualizar dominios**
   - Metadata canonical
   - Emails (admin + confirmación)
   - Links internos

3. ❌ **NO aplicar tracking en todas las ciudades**
   - Google Analytics + Ads SOLO en Alcorcón
   - Otras ciudades: mantener tracking original o sin tracking

4. ❌ **NO olvidar el campo savings**
   - Añadir a interface
   - Añadir a cada agencia en data
   - Usar en AgencyCard

---

## 📈 Impacto Esperado

- ⬆️ **+20-30% conversión** gracias a "GRATIS" y "SIN COMPROMISO"
- 🔒 **Protección de identidad** de agencias reales
- 💰 **Transparencia** mostrando ahorro específico
- 🤝 **Captación de nuevas agencias** con formulario dedicado
- 📊 **Tracking avanzado** (solo Alcorcón) para medir ROI

---

**Última actualización:** Octubre 2025
**Versión:** 2.0
**Modelo:** Alcorcón (aplicado)
**Pendientes:** Fuenlabrada, Móstoles, Getafe, Leganés

