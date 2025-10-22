import { Agency } from '@/types/agency';

// Schema.org para SEO estructurado
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Inmobiliarias Centro de Madrid',
    description: 'Comparador de agencias inmobiliarias en Centro de Madrid. Encuentra las mejores inmobiliarias para comprar, vender o alquilar tu vivienda.',
    url: 'https://www.inmobilariascentromadrid.es',
    logo: 'https://www.inmobilariascentromadrid.es/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Centro de Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'City',
      name: 'Centro de Madrid',
      containedIn: {
        '@type': 'AdministrativeArea',
        name: 'Madrid',
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish', 'es'],
    },
    sameAs: [
      'https://www.facebook.com/inmobiliarias.centromadrid',
      'https://www.twitter.com/inocentromadrid',
    ],
  };
}

export function generateRealEstateAgencySchema(agency: Agency) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: agency.name,
    description: agency.description,
    url: agency.website,
    telephone: agency.contactPhone,
    email: agency.contactEmail,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: agency.rating,
      reviewCount: agency.reviewsCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: agency.coverage.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
