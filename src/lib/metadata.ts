import { Metadata } from 'next';

export const siteConfig = {
  name: 'Vender Sin Comisiones - Vende tu casa sin que el comprador pague comisión',
  description: '🏠 Vende tu casa sin que el comprador pague comisión en toda España. Venta más rápida y al mejor precio. Las mejores inmobiliarias eliminan la comisión del comprador. ✅ Valoración gratuita ✅ Sin compromiso ✅ Vende más rápido',
  url: 'https://www.vendersincomisiones.es',
  ogImage: '/og-image.jpg',
  keywords: [
    // Keywords principales - Sin comisiones
    'vender sin comisiones',
    'vender casa sin comisiones vendedor',
    'vender piso sin comisiones comprador',
    'inmobiliaria sin comisión comprador',
    'venta sin comisiones inmobiliaria',
    'vender casa sin comisiones españa',

    // Concepto - Ahorro comprador
    'comprar casa sin comisiones',
    'piso sin comisión comprador',
    'compra sin comisiones',
    'venta sin gastos comprador',
    'inmobiliaria 0% comisión comprador',

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
    title: 'Vender Sin Comisiones - El comprador no paga comisión | Vende más rápido',
    description: '🏠 Vende tu casa sin que el comprador pague comisión en toda España. Venta más rápida y al mejor precio. Las mejores inmobiliarias eliminan la comisión del comprador.',
    siteName: 'Vender Sin Comisiones',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vender Sin Comisiones - Vende tu casa sin que el comprador pague comisión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vender Sin Comisiones - El comprador no paga | Venta más rápida',
    description: '🏠 Elimina la comisión del comprador y vende más rápido en toda España. Valoración gratuita. ✅ Sin compromiso ✅ Venta al mejor precio',
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
