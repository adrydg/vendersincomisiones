import { Metadata } from 'next';

export const siteConfig = {
  name: 'Vende tu Casa en Centro de Madrid con Descuentos Exclusivos hasta 30%',
  description: '🏠 Vende tu casa en Centro de Madrid ahorrando hasta un 30% en comisiones. Recibe ofertas mejoradas de las mejores inmobiliarias sin salir de casa. ✅ Valoración gratuita ✅ Sin compromiso ✅ Descuentos exclusivos para vendedores.',
  url: 'https://www.inmobiliariascentromadrid.es',
  ogImage: '/og-image.jpg',
  keywords: [
    // Keywords locales principales
    'inmobiliarias centro madrid',
    'agencias inmobiliarias centro madrid',
    'comparador inmobiliarias madrid centro',
    'ranking inmobiliarias centro madrid 2025',

    // Marcas específicas (SEO branded)
    'gilmar madrid',
    'engel volkers madrid',
    'tecnocasa centro madrid',
    'redpiso centro madrid',

    // Intención de búsqueda - Compra
    'comprar piso centro madrid',
    'comprar casa centro madrid',
    'pisos en venta centro madrid',
    'casas en venta centro madrid',
    'viviendas centro madrid',
    'pisos centro madrid',

    // Intención de búsqueda - Venta
    'vender piso centro madrid',
    'vender casa centro madrid',
    'vender vivienda centro madrid',
    'vender piso rapido centro madrid',
    'tasación vivienda centro madrid',
    'valoración piso centro madrid',
    'valoracion gratuita centro madrid',

    // Intención de búsqueda - Alquiler
    'alquilar piso centro madrid',
    'pisos alquiler centro madrid',
    'alquiler centro madrid',

    // Servicios específicos
    'mejores inmobiliarias centro madrid',
    'inmobiliarias baratas centro madrid',
    'agente inmobiliario centro madrid',
    'inmobiliaria sin comisiones centro madrid',
    'inmobiliaria comision 0 centro madrid',

    // Long-tail keywords
    'comparar agencias inmobiliarias centro madrid',
    'opiniones inmobiliarias centro madrid',
    'inmobiliarias madrid centro',
    'inmobiliarias dentro m30 madrid',

    // Keywords por barrios principales (SEO hiperlocal)
    'inmobiliarias salamanca madrid',
    'pisos chamberi madrid',
    'inmobiliarias retiro madrid',
    'pisos sol madrid',
    'inmobiliarias chamartin madrid',
    'pisos la latina madrid',
    'inmobiliarias chueca madrid',
    'pisos malasaña madrid',
    'inmobiliarias gran via madrid',
    'pisos opera madrid',
    'inmobiliarias arganzuela madrid',
    'pisos carabanchel madrid',
    'inmobiliarias moncloa madrid',
    'pisos tetuan madrid',
    'inmobiliarias fuencarral madrid',
    'pisos ciudad lineal madrid',
    'inmobiliarias hortaleza madrid',
    'pisos moratalaz madrid',
    'inmobiliarias vallecas madrid',
    'pisos villaverde madrid',

    // Servicios
    'tasación gratuita madrid',
    'valoración gratis madrid',
    'asesor inmobiliario madrid',
    'home staging madrid',

    // Intención comercial
    'primera vivienda madrid',
    'pisos obra nueva madrid',
    'chalets madrid',
    'locales comerciales madrid',
    'aticos madrid centro',
    'estudios madrid centro',
  ],
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | Inmobiliarias Centro Madrid`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Inmobiliarias Centro Madrid' }],
  creator: 'Inmobiliarias Centro Madrid',
  publisher: 'Inmobiliarias Centro Madrid',
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
    title: 'Vende tu Casa en Centro de Madrid con Descuentos hasta 30% | Ofertas Exclusivas',
    description: '🏠 Vende tu casa ahorrando hasta un 30% en comisiones. Recibe ofertas mejoradas de las mejores inmobiliarias sin salir de casa. Valoración gratuita y descuentos exclusivos para vendedores.',
    siteName: 'Inmobiliarias Centro Madrid',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Vende tu Casa en Centro de Madrid con Descuentos Exclusivos hasta 30%',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vende tu Casa en Centro de Madrid con Descuento hasta 30%',
    description: '🏠 Ahorra hasta 30% en comisiones. Ofertas mejoradas de las mejores inmobiliarias. Valoración gratuita desde tu sofá. ✅ Sin compromiso',
    images: [siteConfig.ogImage],
    creator: '@inmocentromadrid',
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
