export interface City {
  name: string;
  slug: string;
  province: string;
  provinceSlug: string;
  region: string;
  regionSlug: string;
  population: number;
  featured: boolean; // Destacada para mostrar en footer
}

// Ciudades principales de la Comunidad de Madrid (zona metropolitana)
export const madridMetropolitanCities: City[] = [
  { name: 'Madrid', slug: 'madrid', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 3305000, featured: true },
  { name: 'Alcorcón', slug: 'alcorcon', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 171000, featured: true },
  { name: 'Leganés', slug: 'leganes', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 188000, featured: true },
  { name: 'Getafe', slug: 'getafe', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 183000, featured: true },
  { name: 'Fuenlabrada', slug: 'fuenlabrada', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 192000, featured: true },
  { name: 'Móstoles', slug: 'mostoles', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 209000, featured: true },
  { name: 'Alcalá de Henares', slug: 'alcala-de-henares', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 195000, featured: true },
  { name: 'Torrejón de Ardoz', slug: 'torrejon-de-ardoz', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 131000, featured: true },
  { name: 'Parla', slug: 'parla', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 130000, featured: true },
  { name: 'Las Rozas', slug: 'las-rozas', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 96000, featured: true },
  { name: 'Majadahonda', slug: 'majadahonda', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 72000, featured: true },
  { name: 'Pozuelo de Alarcón', slug: 'pozuelo-de-alarcon', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 87000, featured: true },
  { name: 'Boadilla del Monte', slug: 'boadilla-del-monte', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 58000, featured: true },
  { name: 'San Sebastián de los Reyes', slug: 'san-sebastian-de-los-reyes', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 89000, featured: true },
  { name: 'Coslada', slug: 'coslada', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 81000, featured: true },
  { name: 'Rivas-Vaciamadrid', slug: 'rivas-vaciamadrid', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 88000, featured: true },
  { name: 'Valdemoro', slug: 'valdemoro', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 75000, featured: true },
  { name: 'Collado Villalba', slug: 'collado-villalba', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 64000, featured: true },
  { name: 'Pinto', slug: 'pinto', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 52000, featured: true },
  { name: 'Arganda del Rey', slug: 'arganda-del-rey', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 56000, featured: true },
  { name: 'Alcobendas', slug: 'alcobendas', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 118000, featured: true },
  { name: 'Villaviciosa de Odón', slug: 'villaviciosa-de-odon', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 27000, featured: true },
  { name: 'San Fernando de Henares', slug: 'san-fernando-de-henares', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 42000, featured: true },
  { name: 'Galapagar', slug: 'galapagar', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 35000, featured: true },
  { name: 'Tres Cantos', slug: 'tres-cantos', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 47000, featured: true },
  { name: 'Griñón', slug: 'grinon', province: 'Madrid', provinceSlug: 'madrid', region: 'Comunidad de Madrid', regionSlug: 'madrid', population: 11000, featured: true },
];

// Ciudades principales de otras provincias de España
export const majorSpanishCities: City[] = [
  // Cataluña
  { name: 'Barcelona', slug: 'barcelona', province: 'Barcelona', provinceSlug: 'barcelona', region: 'Cataluña', regionSlug: 'cataluna', population: 1636000, featured: true },
  { name: 'Girona', slug: 'girona', province: 'Girona', provinceSlug: 'girona', region: 'Cataluña', regionSlug: 'cataluna', population: 103000, featured: true },
  { name: 'Lleida', slug: 'lleida', province: 'Lleida', provinceSlug: 'lleida', region: 'Cataluña', regionSlug: 'cataluna', population: 140000, featured: true },
  { name: 'Tarragona', slug: 'tarragona', province: 'Tarragona', provinceSlug: 'tarragona', region: 'Cataluña', regionSlug: 'cataluna', population: 135000, featured: true },

  // Comunidad Valenciana
  { name: 'Valencia', slug: 'valencia', province: 'Valencia', provinceSlug: 'valencia', region: 'Comunidad Valenciana', regionSlug: 'comunidad-valenciana', population: 792000, featured: true },
  { name: 'Alicante', slug: 'alicante', province: 'Alicante', provinceSlug: 'alicante', region: 'Comunidad Valenciana', regionSlug: 'comunidad-valenciana', population: 337000, featured: true },
  { name: 'Castellón de la Plana', slug: 'castellon-de-la-plana', province: 'Castellón', provinceSlug: 'castellon', region: 'Comunidad Valenciana', regionSlug: 'comunidad-valenciana', population: 170000, featured: true },

  // Andalucía
  { name: 'Sevilla', slug: 'sevilla', province: 'Sevilla', provinceSlug: 'sevilla', region: 'Andalucía', regionSlug: 'andalucia', population: 690000, featured: true },
  { name: 'Málaga', slug: 'malaga', province: 'Málaga', provinceSlug: 'malaga', region: 'Andalucía', regionSlug: 'andalucia', population: 578000, featured: true },
  { name: 'Córdoba', slug: 'cordoba', province: 'Córdoba', provinceSlug: 'cordoba', region: 'Andalucía', regionSlug: 'andalucia', population: 326000, featured: true },
  { name: 'Granada', slug: 'granada', province: 'Granada', provinceSlug: 'granada', region: 'Andalucía', regionSlug: 'andalucia', population: 232000, featured: true },
  { name: 'Cádiz', slug: 'cadiz', province: 'Cádiz', provinceSlug: 'cadiz', region: 'Andalucía', regionSlug: 'andalucia', population: 116000, featured: true },
  { name: 'Jerez de la Frontera', slug: 'jerez-de-la-frontera', province: 'Cádiz', provinceSlug: 'cadiz', region: 'Andalucía', regionSlug: 'andalucia', population: 213000, featured: true },
  { name: 'Almería', slug: 'almeria', province: 'Almería', provinceSlug: 'almeria', region: 'Andalucía', regionSlug: 'andalucia', population: 201000, featured: true },
  { name: 'Huelva', slug: 'huelva', province: 'Huelva', provinceSlug: 'huelva', region: 'Andalucía', regionSlug: 'andalucia', population: 143000, featured: true },
  { name: 'Jaén', slug: 'jaen', province: 'Jaén', provinceSlug: 'jaen', region: 'Andalucía', regionSlug: 'andalucia', population: 112000, featured: true },
  { name: 'Marbella', slug: 'marbella', province: 'Málaga', provinceSlug: 'malaga', region: 'Andalucía', regionSlug: 'andalucia', population: 147000, featured: true },

  // Aragón
  { name: 'Zaragoza', slug: 'zaragoza', province: 'Zaragoza', provinceSlug: 'zaragoza', region: 'Aragón', regionSlug: 'aragon', population: 675000, featured: true },
  { name: 'Huesca', slug: 'huesca', province: 'Huesca', provinceSlug: 'huesca', region: 'Aragón', regionSlug: 'aragon', population: 53000, featured: true },
  { name: 'Teruel', slug: 'teruel', province: 'Teruel', provinceSlug: 'teruel', region: 'Aragón', regionSlug: 'aragon', population: 35000, featured: true },

  // País Vasco
  { name: 'Bilbao', slug: 'bilbao', province: 'Vizcaya', provinceSlug: 'vizcaya', region: 'País Vasco', regionSlug: 'pais-vasco', population: 346000, featured: true },
  { name: 'San Sebastián', slug: 'san-sebastian', province: 'Guipúzcoa', provinceSlug: 'guipuzcoa', region: 'País Vasco', regionSlug: 'pais-vasco', population: 187000, featured: true },
  { name: 'Vitoria-Gasteiz', slug: 'vitoria-gasteiz', province: 'Álava', provinceSlug: 'alava', region: 'País Vasco', regionSlug: 'pais-vasco', population: 254000, featured: true },

  // Región de Murcia
  { name: 'Murcia', slug: 'murcia', province: 'Murcia', provinceSlug: 'murcia', region: 'Región de Murcia', regionSlug: 'murcia', population: 460000, featured: true },

  // Islas Baleares
  { name: 'Palma de Mallorca', slug: 'palma-de-mallorca', province: 'Baleares', provinceSlug: 'baleares', region: 'Islas Baleares', regionSlug: 'baleares', population: 416000, featured: true },

  // Asturias
  { name: 'Gijón', slug: 'gijon', province: 'Asturias', provinceSlug: 'asturias', region: 'Principado de Asturias', regionSlug: 'asturias', population: 273000, featured: true },
  { name: 'Oviedo', slug: 'oviedo', province: 'Asturias', provinceSlug: 'asturias', region: 'Principado de Asturias', regionSlug: 'asturias', population: 220000, featured: true },

  // Galicia
  { name: 'Vigo', slug: 'vigo', province: 'Pontevedra', provinceSlug: 'pontevedra', region: 'Galicia', regionSlug: 'galicia', population: 296000, featured: true },
  { name: 'A Coruña', slug: 'a-coruna', province: 'A Coruña', provinceSlug: 'a-coruna', region: 'Galicia', regionSlug: 'galicia', population: 246000, featured: true },
  { name: 'Santiago de Compostela', slug: 'santiago-de-compostela', province: 'A Coruña', provinceSlug: 'a-coruna', region: 'Galicia', regionSlug: 'galicia', population: 97000, featured: true },
  { name: 'Ourense', slug: 'ourense', province: 'Ourense', provinceSlug: 'ourense', region: 'Galicia', regionSlug: 'galicia', population: 105000, featured: true },
  { name: 'Lugo', slug: 'lugo', province: 'Lugo', provinceSlug: 'lugo', region: 'Galicia', regionSlug: 'galicia', population: 99000, featured: true },
  { name: 'Pontevedra', slug: 'pontevedra', province: 'Pontevedra', provinceSlug: 'pontevedra', region: 'Galicia', regionSlug: 'galicia', population: 83000, featured: true },

  // Cantabria
  { name: 'Santander', slug: 'santander', province: 'Cantabria', provinceSlug: 'cantabria', region: 'Cantabria', regionSlug: 'cantabria', population: 172000, featured: true },

  // Navarra
  { name: 'Pamplona', slug: 'pamplona', province: 'Navarra', provinceSlug: 'navarra', region: 'Comunidad Foral de Navarra', regionSlug: 'navarra', population: 203000, featured: true },

  // Castilla y León
  { name: 'Valladolid', slug: 'valladolid', province: 'Valladolid', provinceSlug: 'valladolid', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 298000, featured: true },
  { name: 'Salamanca', slug: 'salamanca', province: 'Salamanca', provinceSlug: 'salamanca', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 144000, featured: true },
  { name: 'Burgos', slug: 'burgos', province: 'Burgos', provinceSlug: 'burgos', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 175000, featured: true },
  { name: 'León', slug: 'leon', province: 'León', provinceSlug: 'leon', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 124000, featured: true },
  { name: 'Ponferrada', slug: 'ponferrada', province: 'León', provinceSlug: 'leon', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 65000, featured: true },
  { name: 'Segovia', slug: 'segovia', province: 'Segovia', provinceSlug: 'segovia', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 51000, featured: true },
  { name: 'Ávila', slug: 'avila', province: 'Ávila', provinceSlug: 'avila', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 57000, featured: true },
  { name: 'Soria', slug: 'soria', province: 'Soria', provinceSlug: 'soria', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 39000, featured: true },
  { name: 'Palencia', slug: 'palencia', province: 'Palencia', provinceSlug: 'palencia', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 78000, featured: true },
  { name: 'Zamora', slug: 'zamora', province: 'Zamora', provinceSlug: 'zamora', region: 'Castilla y León', regionSlug: 'castilla-y-leon', population: 60000, featured: true },

  // Castilla-La Mancha
  { name: 'Toledo', slug: 'toledo', province: 'Toledo', provinceSlug: 'toledo', region: 'Castilla-La Mancha', regionSlug: 'castilla-la-mancha', population: 85000, featured: true },
  { name: 'Illescas', slug: 'illescas', province: 'Toledo', provinceSlug: 'toledo', region: 'Castilla-La Mancha', regionSlug: 'castilla-la-mancha', population: 30000, featured: true },
  { name: 'Albacete', slug: 'albacete', province: 'Albacete', provinceSlug: 'albacete', region: 'Castilla-La Mancha', regionSlug: 'castilla-la-mancha', population: 174000, featured: true },
  { name: 'Guadalajara', slug: 'guadalajara', province: 'Guadalajara', provinceSlug: 'guadalajara', region: 'Castilla-La Mancha', regionSlug: 'castilla-la-mancha', population: 87000, featured: true },
  { name: 'Ciudad Real', slug: 'ciudad-real', province: 'Ciudad Real', provinceSlug: 'ciudad-real', region: 'Castilla-La Mancha', regionSlug: 'castilla-la-mancha', population: 75000, featured: true },
  { name: 'Cuenca', slug: 'cuenca', province: 'Cuenca', provinceSlug: 'cuenca', region: 'Castilla-La Mancha', regionSlug: 'castilla-la-mancha', population: 54000, featured: true },

  // Extremadura
  { name: 'Badajoz', slug: 'badajoz', province: 'Badajoz', provinceSlug: 'badajoz', region: 'Extremadura', regionSlug: 'extremadura', population: 151000, featured: true },
  { name: 'Cáceres', slug: 'caceres', province: 'Cáceres', provinceSlug: 'caceres', region: 'Extremadura', regionSlug: 'extremadura', population: 96000, featured: true },

  // La Rioja
  { name: 'Logroño', slug: 'logrono', province: 'La Rioja', provinceSlug: 'la-rioja', region: 'La Rioja', regionSlug: 'la-rioja', population: 151000, featured: true },

  // Canarias
  { name: 'Las Palmas de Gran Canaria', slug: 'las-palmas-de-gran-canaria', province: 'Las Palmas', provinceSlug: 'las-palmas', region: 'Canarias', regionSlug: 'canarias', population: 379000, featured: true },
  { name: 'Santa Cruz de Tenerife', slug: 'santa-cruz-de-tenerife', province: 'Santa Cruz de Tenerife', provinceSlug: 'santa-cruz-de-tenerife', region: 'Canarias', regionSlug: 'canarias', population: 208000, featured: true },

  // Ceuta
  { name: 'Ceuta', slug: 'ceuta', province: 'Ceuta', provinceSlug: 'ceuta', region: 'Ceuta', regionSlug: 'ceuta', population: 84000, featured: true },

  // Melilla
  { name: 'Melilla', slug: 'melilla', province: 'Melilla', provinceSlug: 'melilla', region: 'Melilla', regionSlug: 'melilla', population: 86000, featured: true },
];

// Todas las ciudades
export const allCities: City[] = [
  ...madridMetropolitanCities,
  ...majorSpanishCities,
];

// Helper functions
export function getAllCities(): City[] {
  return allCities;
}

export function getCityBySlug(slug: string): City | undefined {
  return allCities.find(city => city.slug === slug);
}

export function getCitiesByRegion(regionSlug: string): City[] {
  return allCities.filter(city => city.regionSlug === regionSlug);
}

export function getCitiesByProvince(provinceSlug: string): City[] {
  return allCities.filter(city => city.provinceSlug === provinceSlug);
}

// Helper para construir URL de ciudad (con o sin provincia según si es uniprovincial)
export function buildCityURL(city: City): string {
  // Comunidades uniprovinciales donde región y provincia tienen el mismo slug
  const uniprovincialRegions = ['madrid', 'asturias', 'cantabria', 'murcia', 'navarra', 'la-rioja', 'baleares', 'ceuta', 'melilla'];

  if (uniprovincialRegions.includes(city.regionSlug)) {
    // Para comunidades uniprovinciales: /madrid/vender-sin-comision-vendedor-en-ciudad
    return `/${city.regionSlug}/vender-sin-comision-vendedor-en-${city.slug}`;
  } else {
    // Para comunidades multiprovinciales: /region/provincia/vender-sin-comision-vendedor-en-ciudad
    return `/${city.regionSlug}/${city.provinceSlug}/vender-sin-comision-vendedor-en-${city.slug}`;
  }
}

export function getFeaturedCities(): City[] {
  return allCities.filter(city => city.featured);
}

export function getMadridMetropolitanCities(): City[] {
  return madridMetropolitanCities;
}

export function getMajorSpanishCities(): City[] {
  return majorSpanishCities;
}
