export interface City {
  name: string;
  slug: string;
  province: string;
  region: string;
  population: number;
  featured: boolean; // Destacada para mostrar en footer
}

// Ciudades principales de la Comunidad de Madrid (zona metropolitana)
export const madridMetropolitanCities: City[] = [
  { name: 'Madrid', slug: 'madrid', province: 'Madrid', region: 'Comunidad de Madrid', population: 3305000, featured: true },
  { name: 'Alcorcón', slug: 'alcorcon', province: 'Madrid', region: 'Comunidad de Madrid', population: 171000, featured: true },
  { name: 'Leganés', slug: 'leganes', province: 'Madrid', region: 'Comunidad de Madrid', population: 188000, featured: true },
  { name: 'Getafe', slug: 'getafe', province: 'Madrid', region: 'Comunidad de Madrid', population: 183000, featured: true },
  { name: 'Fuenlabrada', slug: 'fuenlabrada', province: 'Madrid', region: 'Comunidad de Madrid', population: 192000, featured: true },
  { name: 'Móstoles', slug: 'mostoles', province: 'Madrid', region: 'Comunidad de Madrid', population: 209000, featured: true },
  { name: 'Alcalá de Henares', slug: 'alcala-de-henares', province: 'Madrid', region: 'Comunidad de Madrid', population: 195000, featured: true },
  { name: 'Torrejón de Ardoz', slug: 'torrejon-de-ardoz', province: 'Madrid', region: 'Comunidad de Madrid', population: 131000, featured: true },
  { name: 'Parla', slug: 'parla', province: 'Madrid', region: 'Comunidad de Madrid', population: 130000, featured: true },
  { name: 'Las Rozas', slug: 'las-rozas', province: 'Madrid', region: 'Comunidad de Madrid', population: 96000, featured: true },
  { name: 'Majadahonda', slug: 'majadahonda', province: 'Madrid', region: 'Comunidad de Madrid', population: 72000, featured: true },
  { name: 'Pozuelo de Alarcón', slug: 'pozuelo-de-alarcon', province: 'Madrid', region: 'Comunidad de Madrid', population: 87000, featured: true },
  { name: 'Boadilla del Monte', slug: 'boadilla-del-monte', province: 'Madrid', region: 'Comunidad de Madrid', population: 58000, featured: true },
  { name: 'San Sebastián de los Reyes', slug: 'san-sebastian-de-los-reyes', province: 'Madrid', region: 'Comunidad de Madrid', population: 89000, featured: true },
  { name: 'Coslada', slug: 'coslada', province: 'Madrid', region: 'Comunidad de Madrid', population: 81000, featured: true },
  { name: 'Rivas-Vaciamadrid', slug: 'rivas-vaciamadrid', province: 'Madrid', region: 'Comunidad de Madrid', population: 88000, featured: true },
  { name: 'Valdemoro', slug: 'valdemoro', province: 'Madrid', region: 'Comunidad de Madrid', population: 75000, featured: true },
  { name: 'Collado Villalba', slug: 'collado-villalba', province: 'Madrid', region: 'Comunidad de Madrid', population: 64000, featured: true },
  { name: 'Pinto', slug: 'pinto', province: 'Madrid', region: 'Comunidad de Madrid', population: 52000, featured: true },
  { name: 'Arganda del Rey', slug: 'arganda-del-rey', province: 'Madrid', region: 'Comunidad de Madrid', population: 56000, featured: true },
];

// Ciudades principales de otras comunidades autónomas
export const majorSpanishCities: City[] = [
  // Cataluña
  { name: 'Barcelona', slug: 'barcelona', province: 'Barcelona', region: 'Cataluña', population: 1636000, featured: true },

  // Comunidad Valenciana
  { name: 'Valencia', slug: 'valencia', province: 'Valencia', region: 'Comunidad Valenciana', population: 792000, featured: true },
  { name: 'Alicante', slug: 'alicante', province: 'Alicante', region: 'Comunidad Valenciana', population: 337000, featured: true },

  // Andalucía
  { name: 'Sevilla', slug: 'sevilla', province: 'Sevilla', region: 'Andalucía', population: 690000, featured: true },
  { name: 'Málaga', slug: 'malaga', province: 'Málaga', region: 'Andalucía', population: 578000, featured: true },
  { name: 'Córdoba', slug: 'cordoba', province: 'Córdoba', region: 'Andalucía', population: 326000, featured: true },
  { name: 'Granada', slug: 'granada', province: 'Granada', region: 'Andalucía', population: 232000, featured: true },

  // Aragón
  { name: 'Zaragoza', slug: 'zaragoza', province: 'Zaragoza', region: 'Aragón', population: 675000, featured: true },

  // País Vasco
  { name: 'Bilbao', slug: 'bilbao', province: 'Vizcaya', region: 'País Vasco', population: 346000, featured: true },
  { name: 'San Sebastián', slug: 'san-sebastian', province: 'Guipúzcoa', region: 'País Vasco', population: 187000, featured: true },

  // Región de Murcia
  { name: 'Murcia', slug: 'murcia', province: 'Murcia', region: 'Región de Murcia', population: 460000, featured: true },

  // Islas Baleares
  { name: 'Palma de Mallorca', slug: 'palma-de-mallorca', province: 'Baleares', region: 'Islas Baleares', population: 416000, featured: true },

  // Asturias
  { name: 'Gijón', slug: 'gijon', province: 'Asturias', region: 'Asturias', population: 273000, featured: true },
  { name: 'Oviedo', slug: 'oviedo', province: 'Asturias', region: 'Asturias', population: 220000, featured: true },

  // Galicia
  { name: 'Vigo', slug: 'vigo', province: 'Pontevedra', region: 'Galicia', population: 296000, featured: true },

  // Cantabria
  { name: 'Santander', slug: 'santander', province: 'Cantabria', region: 'Cantabria', population: 172000, featured: true },

  // Navarra
  { name: 'Pamplona', slug: 'pamplona', province: 'Navarra', region: 'Navarra', population: 203000, featured: true },

  // Castilla y León
  { name: 'Valladolid', slug: 'valladolid', province: 'Valladolid', region: 'Castilla y León', population: 298000, featured: true },
  { name: 'Salamanca', slug: 'salamanca', province: 'Salamanca', region: 'Castilla y León', population: 144000, featured: true },
  { name: 'Burgos', slug: 'burgos', province: 'Burgos', region: 'Castilla y León', population: 175000, featured: true },

  // Castilla-La Mancha
  { name: 'Toledo', slug: 'toledo', province: 'Toledo', region: 'Castilla-La Mancha', population: 85000, featured: true },
  { name: 'Albacete', slug: 'albacete', province: 'Albacete', region: 'Castilla-La Mancha', population: 174000, featured: true },

  // Extremadura
  { name: 'Badajoz', slug: 'badajoz', province: 'Badajoz', region: 'Extremadura', population: 151000, featured: true },

  // La Rioja
  { name: 'Logroño', slug: 'logrono', province: 'La Rioja', region: 'La Rioja', population: 151000, featured: true },
];

// Todas las ciudades
export const allCities: City[] = [
  ...madridMetropolitanCities,
  ...majorSpanishCities,
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return allCities.find(city => city.slug === slug);
}

export function getCitiesByRegion(region: string): City[] {
  return allCities.filter(city => city.region === region);
}

export function getFeaturedCities(): City[] {
  return allCities.filter(city => city.featured);
}

export function getMadridMetropolitanCities(): City[] {
  return madridMetropolitanCities;
}
