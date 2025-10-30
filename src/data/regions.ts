export interface Region {
  id: string;
  name: string;
  slug: string;
  provinces: string[]; // Array de slugs de provincias
  description: string;
}

export const regionsData: Region[] = [
  {
    id: 'andalucia',
    name: 'Andalucía',
    slug: 'andalucia',
    provinces: ['almeria', 'cadiz', 'cordoba', 'granada', 'huelva', 'jaen', 'malaga', 'sevilla'],
    description:
      'Andalucía es la comunidad autónoma más poblada de España. Comparamos inmobiliarias que no cobran al vendedor en las 8 provincias andaluzas.',
  },
  {
    id: 'aragon',
    name: 'Aragón',
    slug: 'aragon',
    provinces: ['huesca', 'teruel', 'zaragoza'],
    description:
      'Aragón, situada en el noreste de España. Comparamos agencias sin gastos para el vendedor en las 3 provincias aragonesas.',
  },
  {
    id: 'asturias',
    name: 'Principado de Asturias',
    slug: 'asturias',
    provinces: ['asturias'],
    description:
      'Asturias, comunidad uniprovincial del norte de España. Ahorra miles de euros vendiendo sin comisión.',
  },
  {
    id: 'baleares',
    name: 'Islas Baleares',
    slug: 'baleares',
    provinces: ['baleares'],
    description:
      'Islas Baleares, en el Mediterráneo. Comparamos inmobiliarias sin gastos para el vendedor en todas las islas.',
  },
  {
    id: 'canarias',
    name: 'Canarias',
    slug: 'canarias',
    provinces: ['las-palmas', 'santa-cruz-de-tenerife'],
    description:
      'Canarias, archipiélago atlántico. Comparamos agencias que no cobran al vendedor en las 2 provincias canarias.',
  },
  {
    id: 'cantabria',
    name: 'Cantabria',
    slug: 'cantabria',
    provinces: ['cantabria'],
    description:
      'Cantabria, en el norte de España. Vende sin comisión con las mejores agencias inmobiliarias.',
  },
  {
    id: 'castilla-la-mancha',
    name: 'Castilla-La Mancha',
    slug: 'castilla-la-mancha',
    provinces: ['albacete', 'ciudad-real', 'cuenca', 'guadalajara', 'toledo'],
    description:
      'Castilla-La Mancha, en el centro de España. Comparamos inmobiliarias sin gastos vendedor en las 5 provincias.',
  },
  {
    id: 'castilla-y-leon',
    name: 'Castilla y León',
    slug: 'castilla-y-leon',
    provinces: ['avila', 'burgos', 'leon', 'palencia', 'salamanca', 'segovia', 'soria', 'valladolid', 'zamora'],
    description:
      'Castilla y León, la comunidad más extensa de España. Ahorra miles de euros en las 9 provincias.',
  },
  {
    id: 'cataluna',
    name: 'Cataluña',
    slug: 'cataluna',
    provinces: ['barcelona', 'girona', 'lleida', 'tarragona'],
    description:
      'Cataluña, en el noreste mediterráneo. Comparamos agencias sin comisión vendedor en las 4 provincias catalanas.',
  },
  {
    id: 'comunidad-valenciana',
    name: 'Comunidad Valenciana',
    slug: 'comunidad-valenciana',
    provinces: ['alicante', 'castellon', 'valencia'],
    description:
      'Comunidad Valenciana, costa mediterránea. Vende sin gastos con las mejores inmobiliarias en las 3 provincias.',
  },
  {
    id: 'extremadura',
    name: 'Extremadura',
    slug: 'extremadura',
    provinces: ['badajoz', 'caceres'],
    description:
      'Extremadura, en el suroeste peninsular. Comparamos agencias sin comisión vendedor en Badajoz y Cáceres.',
  },
  {
    id: 'galicia',
    name: 'Galicia',
    slug: 'galicia',
    provinces: ['a-coruna', 'lugo', 'ourense', 'pontevedra'],
    description:
      'Galicia, en el noroeste de España. Ahorra miles de euros vendiendo sin comisión en las 4 provincias gallegas.',
  },
  {
    id: 'madrid',
    name: 'Comunidad de Madrid',
    slug: 'madrid',
    provinces: ['madrid'],
    description:
      'Comunidad de Madrid, centro económico de España. Comparamos las mejores inmobiliarias sin gastos para el vendedor.',
  },
  {
    id: 'murcia',
    name: 'Región de Murcia',
    slug: 'murcia',
    provinces: ['murcia'],
    description:
      'Región de Murcia, sureste mediterráneo. Vende sin comisión con agencias verificadas.',
  },
  {
    id: 'navarra',
    name: 'Comunidad Foral de Navarra',
    slug: 'navarra',
    provinces: ['navarra'],
    description:
      'Navarra, en el norte de España. Comparamos inmobiliarias sin gastos vendedor.',
  },
  {
    id: 'pais-vasco',
    name: 'País Vasco',
    slug: 'pais-vasco',
    provinces: ['alava', 'guipuzcoa', 'vizcaya'],
    description:
      'País Vasco, en el norte peninsular. Ahorra miles de euros en Álava, Guipúzcoa y Vizcaya.',
  },
  {
    id: 'la-rioja',
    name: 'La Rioja',
    slug: 'la-rioja',
    provinces: ['la-rioja'],
    description:
      'La Rioja, comunidad uniprovincial del norte. Vende sin comisión con las mejores agencias.',
  },
  {
    id: 'ceuta',
    name: 'Ceuta',
    slug: 'ceuta',
    provinces: ['ceuta'],
    description:
      'Ceuta, ciudad autónoma en el norte de África. Comparamos agencias sin comisión vendedor.',
  },
  {
    id: 'melilla',
    name: 'Melilla',
    slug: 'melilla',
    provinces: ['melilla'],
    description:
      'Melilla, ciudad autónoma en el norte de África. Vende sin gastos con las mejores inmobiliarias.',
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regionsData.find((region) => region.slug === slug);
}

export function getAllRegions(): Region[] {
  return regionsData;
}

// Helper para identificar si una región es uniprovincial
export function isUniprovincialRegion(regionSlug: string): boolean {
  const region = getRegionBySlug(regionSlug);
  return region ? region.provinces.length === 1 && region.provinces[0] === regionSlug : false;
}
