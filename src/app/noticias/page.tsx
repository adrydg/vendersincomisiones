import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Noticias y Guías Inmobiliarias Centro Madrid | Blog Experto 2025',
  description: 'Noticias, guías y consejos sobre el mercado inmobiliario en Centro Madrid. Precios, tendencias, mejores barrios para invertir y vender. Información actualizada por expertos.',
  keywords: [
    'noticias inmobiliarias centro madrid',
    'blog inmobiliario madrid',
    'mercado inmobiliario centro madrid',
    'precios vivienda centro madrid',
    'guía vender piso madrid',
    'tendencias inmobiliarias madrid 2025',
  ],
  alternates: {
    canonical: 'https://www.inmobiliariascentromadrid.es/noticias',
  },
  openGraph: {
    title: 'Noticias Inmobiliarias Centro Madrid | Guías y Consejos',
    description: 'Las últimas noticias y guías del mercado inmobiliario en el centro de Madrid.',
    url: 'https://www.inmobiliariascentromadrid.es/noticias',
    type: 'website',
  },
};

const categoryLabels = {
  guia: 'Guías',
  mercado: 'Mercado',
  barrios: 'Barrios',
  noticias: 'Noticias',
};

const categoryColors = {
  guia: 'bg-blue-100 text-blue-800',
  mercado: 'bg-green-100 text-green-800',
  barrios: 'bg-purple-100 text-purple-800',
  noticias: 'bg-amber-100 text-amber-800',
};

export default function NoticiasPage() {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Noticias y Guías Inmobiliarias
            </h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Información actualizada sobre el mercado inmobiliario en el centro de Madrid.
              Guías prácticas, análisis de barrios y consejos de expertos.
            </p>
          </div>
        </section>

        {/* Categorías */}
        <section className="bg-white border-b shadow-sm sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/noticias"
                className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Todos
              </Link>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <Link
                  key={key}
                  href={`/noticias?categoria=${key}`}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Artículo destacado */}
          {featuredArticle && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículo destacado</h2>
              <Link href={`/noticias/${featuredArticle.slug}`}>
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <div className="text-6xl mb-4">📰</div>
                        <p className="text-sm font-semibold">Imagen próximamente</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featuredArticle.category]}`}>
                          {categoryLabels[featuredArticle.category]}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(featuredArticle.publishedAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {featuredArticle.readTime} min lectura
                          </span>
                          <span>•</span>
                          <span>{featuredArticle.author.name}</span>
                        </div>
                        <span className="text-blue-600 font-semibold group-hover:underline">
                          Leer más →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* Lista de artículos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos los artículos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <Link key={article.slug} href={`/noticias/${article.slug}`}>
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col group">
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="text-4xl mb-2">
                          {article.category === 'guia' && '📚'}
                          {article.category === 'mercado' && '📊'}
                          {article.category === 'barrios' && '🏘️'}
                          {article.category === 'noticias' && '📰'}
                        </div>
                        <p className="text-xs font-semibold">Imagen próximamente</p>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                          {categoryLabels[article.category]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime} min
                        </span>
                        <span className="text-blue-600 font-semibold group-hover:underline">
                          Leer más →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para vender tu vivienda?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Solicita valoraciones gratuitas de las mejores inmobiliarias del centro de Madrid.
              Sin compromiso y totalmente personalizado.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Solicitar Valoraciones Gratis
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
