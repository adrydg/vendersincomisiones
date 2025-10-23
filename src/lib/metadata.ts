import { Metadata } from 'next';

export const siteConfig = {
  name: 'Vender Sin Comisiones - Comparador de Inmobiliarias Sin Gastos para el Vendedor',
  description: '💰 Comparamos las mejores inmobiliarias de España que NO te cobran comisión como vendedor. Ahorra entre 9.000€ y 15.000€ en gastos de venta. ✅ Servicio gratuito ✅ Sin compromiso ✅ Compara ofertas',
  url: 'https://www.vendersincomisiones.es',
  ogImage: '/og-image.jpg',
  keywords: [
    // Keywords principales - Sin comisiones para el vendedor
    'vender sin comisiones',
    'vender casa sin comisiones vendedor',
    'vender piso sin pagar comisión',
    'inmobiliaria sin comisión vendedor',
    'vender sin gastos',
    'vender casa sin gastos vendedor',
    'inmobiliarias que no cobran al vendedor',
    'vender piso 0 comisión vendedor',

    // Comparador
    'comparador inmobiliarias',
    'comparar inmobiliarias',
    'mejores inmobiliarias sin comisión',
    'agencias inmobiliarias sin gastos vendedor',

    // Comunidad de Madrid - Zona metropolitana
    'vender sin comisiones madrid',
    'vender sin comisiones alcorcón',
    'vender sin comisiones leganés',
    'vender sin comisiones getafe',
    'vender sin comisiones fuenlabrada',
    'vender sin comisiones móstoles',
    'vender sin comisiones alcalá de henares',
    'vender sin comisiones torrejón de ardoz',
    'vender sin comisiones parla',
    'vender sin comisiones las rozas',
    'vender sin comisiones majadahonda',
    'vender sin comisiones pozuelo de alarcón',
    'vender sin comisiones boadilla del monte',
    'vender sin comisiones san sebastián de los reyes',
    'vender sin comisiones coslada',
    'vender sin comisiones rivas-vaciamadrid',
    'vender sin comisiones valdemoro',
    'vender sin comisiones collado villalba',
    'vender sin comisiones pinto',
    'vender sin comisiones arganda del rey',

    // Provincias principales España
    'vender sin comisiones barcelona',
    'vender sin comisiones valencia',
    'vender sin comisiones sevilla',
    'vender sin comisiones málaga',
    'vender sin comisiones zaragoza',
    'vender sin comisiones bilbao',
    'vender sin comisiones alicante',
    'vender sin comisiones córdoba',
    'vender sin comisiones valladolid',
    'vender sin comisiones granada',
    'vender sin comisiones murcia',
    'vender sin comisiones palma de mallorca',
    'vender sin comisiones gijón',
    'vender sin comisiones oviedo',
    'vender sin comisiones vigo',
    'vender sin comisiones santander',
    'vender sin comisiones san sebastián',
    'vender sin comisiones pamplona',
    'vender sin comisiones salamanca',
    'vender sin comisiones burgos',
    'vender sin comisiones toledo',
    'vender sin comisiones badajoz',
    'vender sin comisiones logroño',
    'vender sin comisiones albacete',

    // Intención de búsqueda - Venta
    'vender casa rápido',
    'vender piso rápido',
    'vender vivienda',
    'venta rápida piso',
    'como vender casa rápido',
    'vender piso en semanas',

    // Servicios venta
    'tasación vivienda gratuita',
    'valoración piso gratis',
    'valoración gratuita',
    'tasar piso gratis',

    // Comparativas
    'comparador inmobiliarias',
    'mejores inmobiliarias',
    'inmobiliarias baratas',
    'agencias inmobiliarias sin comisiones',

    // Beneficios vendedor
    'vender piso mejor precio',
    'vender casa precio alto',
    'maximizar venta piso',
    'vender vivienda sin rebajar',

    // Long-tail - Problema/Solución
    'mi piso no se vende que hago',
    'como atraer compradores piso',
    'vender piso mercado estancado',
    'piso lleva meses venta',
    'porque no se vende mi piso',

    // Tipos de propiedad
    'vender ático',
    'vender estudio',
    'vender piso reformado',
    'vender casa adosada',
    'vender chalet',
    'vender apartamento',

    // Servicios complementarios
    'home staging',
    'fotografía inmobiliaria',
    'asesor inmobiliario',

    // Urgencia
    'vender piso urgente',
    'venta rápida vivienda',
    'necesito vender piso ya',
    'vender casa en una semana',
  ],
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | Vender Sin Comisiones`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Vender Sin Comisiones' }],
  creator: 'Vender Sin Comisiones',
  publisher: 'Vender Sin Comisiones',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: 'Vender Sin Comisiones - Comparador de Inmobiliarias Sin Gastos Vendedor',
    description: '💰 Comparamos las mejores inmobiliarias que NO te cobran comisión. Ahorra miles de euros. Vende tu casa sin gastos para ti en toda España.',
    siteName: 'Vender Sin Comisiones',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vender Sin Comisiones - Comparador de inmobiliarias sin gastos para el vendedor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vender Sin Comisiones - Ahorra Miles € en Gastos de Venta',
    description: '💰 Comparamos inmobiliarias que NO cobran al vendedor. Ahorra entre 9.000€ y 15.000€. ✅ Gratis ✅ Sin compromiso ✅ Compara ofertas',
    images: [siteConfig.ogImage],
    creator: '@vendersincomision',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Agregar después de verificar en Search Console
  },
  category: 'Real Estate',
};
