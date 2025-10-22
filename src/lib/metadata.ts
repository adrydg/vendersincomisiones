import { Metadata } from 'next';

export const siteConfig = {
  name: 'Vender Sin Comisiones - Vende tu piso sin que el comprador pague comisión',
  description: '🏠 Vende tu piso sin que el comprador pague comisión. Venta más rápida y al mejor precio. Las mejores inmobiliarias de Madrid te ayudan a vender eliminando la comisión del comprador. ✅ Valoración gratuita ✅ Sin compromiso ✅ Vende más rápido',
  url: 'https://www.vendersincomisiones.es',
  ogImage: '/og-image.jpg',
  keywords: [
    // Keywords principales - Sin comisiones
    'vender sin comisiones madrid',
    'vender piso sin comisiones comprador',
    'inmobiliaria sin comisión comprador madrid',
    'vender casa sin comisiones madrid',
    'venta sin comisiones inmobiliaria',

    // Concepto - Ahorro comprador
    'comprar piso sin comisiones madrid',
    'piso sin comisión compradorr madrid',
    'compra sin comisiones madrid',
    'venta sin gastos comprador',
    'inmobiliaria 0% comisión comprador',

    // Localizaciones Madrid
    'vender sin comisiones centro madrid',
    'vender sin comisiones salamanca madrid',
    'vender sin comisiones chamberi madrid',
    'vender sin comisiones retiro madrid',

    // Intención de búsqueda - Venta
    'vender piso rapido madrid',
    'vender casa rapido madrid',
    'vender vivienda madrid',
    'venta rapida piso madrid',
    'como vender piso rapido',
    'vender piso en semanas madrid',

    // Servicios venta
    'tasación vivienda gratuita madrid',
    'valoración piso gratis madrid',
    'valoracion gratuita madrid',
    'tasar piso gratis madrid',

    // Comparativas
    'comparador inmobiliarias madrid',
    'mejores inmobiliarias madrid',
    'inmobiliarias baratas madrid',
    'agencias inmobiliarias madrid sin comisiones',

    // Beneficios vendedor
    'vender piso mejor precio madrid',
    'vender casa precio alto madrid',
    'maximizar venta piso',
    'vender vivienda sin rebajar',

    // Long-tail - Problema/Solución
    'mi piso no se vende que hago',
    'como atraer compradores piso',
    'vender piso mercado estancado',
    'piso lleva meses venta',
    'porque no se vende mi piso',

    // Marcas inmobiliarias
    'gilmar madrid sin comisiones',
    'engel volkers sin comision comprador',
    'tecnocasa madrid',
    'redpiso madrid',

    // Keywords por barrios principales
    'vender piso salamanca',
    'vender piso chamberi',
    'vender piso retiro',
    'vender piso chueca',
    'vender piso malasaña',
    'vender piso la latina',
    'vender piso sol madrid',
    'vender piso chamartin',
    'vender piso moncloa',

    // Tipos de propiedad
    'vender ático madrid',
    'vender estudio madrid',
    'vender piso reformado madrid',
    'vender piso obra nueva madrid',

    // Servicios complementarios
    'home staging madrid',
    'fotografía inmobiliaria madrid',
    'asesor inmobiliario madrid',

    // Urgencia
    'vender piso urgente madrid',
    'venta rapida vivienda',
    'necesito vender piso ya',
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
    description: '🏠 Vende tu piso sin que el comprador pague comisión. Venta más rápida y al mejor precio. Las mejores inmobiliarias eliminan la comisión del comprador para que vendas antes.',
    siteName: 'Vender Sin Comisiones',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vender Sin Comisiones - Vende tu piso sin que el comprador pague comisión',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vender Sin Comisiones - El comprador no paga | Venta más rápida',
    description: '🏠 Elimina la comisión del comprador y vende más rápido. Valoración gratuita. ✅ Sin compromiso ✅ Venta al mejor precio',
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
