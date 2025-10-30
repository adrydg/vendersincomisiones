import { MetadataRoute } from 'next';
import { agencies } from '@/data/agencies';
import { articles } from '@/data/articles';
import { getAllRegions } from '@/data/regions';
import { getAllProvinces } from '@/data/provinces';
import { getAllCities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vendersincomisiones.es';

  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/comparador`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ciudades`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/colaborar`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Páginas dinámicas de agencias
  const agencyPages = agencies.map((agency) => ({
    url: `${baseUrl}/comparador/${agency.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Páginas de regiones (comunidades autónomas)
  const regions = getAllRegions();
  const regionPages = regions.map((region) => ({
    url: `${baseUrl}/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Páginas de provincias
  const provinces = getAllProvinces();
  const provincePages = provinces.map((province) => ({
    url: `${baseUrl}/${province.regionSlug}/${province.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Páginas de ciudades
  const cities = getAllCities();
  const cityPages = cities.map((city) => {
    // Comunidades uniprovinciales
    const uniprovincialRegions = ['madrid', 'asturias', 'cantabria', 'murcia', 'navarra', 'la-rioja', 'baleares', 'ceuta', 'melilla'];
    const url = uniprovincialRegions.includes(city.regionSlug)
      ? `${baseUrl}/${city.regionSlug}/vender-sin-comision-vendedor-en-${city.slug}`
      : `${baseUrl}/${city.regionSlug}/${city.provinceSlug}/vender-sin-comision-vendedor-en-${city.slug}`;

    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    };
  });

  // Páginas dinámicas de noticias/artículos
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/noticias/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...agencyPages, ...regionPages, ...provincePages, ...cityPages, ...articlePages];
}
