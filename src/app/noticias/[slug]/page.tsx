import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles, getArticleBySlug, getRecentArticles } from '@/data/articles';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${article.title} | Inmobiliarias Centro Madrid`,
    description: article.excerpt,
    keywords: [
      article.title.toLowerCase(),
      `${article.category} inmobiliario madrid`,
      'centro madrid',
      'vender piso madrid',
      'mercado inmobiliario madrid',
    ],
    alternates: {
      canonical: `https://www.vendersincomisiones.es/noticias/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.vendersincomisiones.es/noticias/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRecentArticles(3).filter(a => a.slug !== article.slug);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Inicio</Link>
              <span>/</span>
              <Link href="/noticias" className="hover:text-blue-600">Noticias</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate">{article.title}</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[article.category]}`}>
                  {categoryLabels[article.category]}
                </span>
                <span className="text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-6 py-6 border-y border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {article.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{article.author.name}</div>
                    <div className="text-sm text-gray-600">{article.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 ml-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{article.readTime} min de lectura</span>
                </div>
              </div>
            </header>

            {/* Imagen destacada placeholder */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-96 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">
                    {article.category === 'guia' && '📚'}
                    {article.category === 'mercado' && '📊'}
                    {article.category === 'barrios' && '🏘️'}
                    {article.category === 'noticias' && '📰'}
                  </div>
                  <p className="text-sm font-semibold">Imagen destacada próximamente</p>
                </div>
              </div>
            </div>

            {/* Contenido del artículo */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-gray-300
                prose-td:p-3 prose-td:border prose-td:border-gray-300
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA dentro del artículo */}
            <div className="my-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Te ha resultado útil esta información?
              </h3>
              <p className="text-gray-600 mb-6">
                Solicita valoraciones personalizadas de las mejores inmobiliarias del centro de Madrid.
                Sin compromiso y totalmente gratis.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Solicitar Valoraciones Gratis
              </Link>
            </div>

            {/* Compartir */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compartir artículo</h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                  Facebook
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Artículos relacionados */}
        {relatedArticles.length > 0 && (
          <section className="bg-white py-16 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">También te puede interesar</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.slug} href={`/noticias/${relatedArticle.slug}`}>
                    <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
                      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                        <div className="text-white text-center p-6">
                          <div className="text-4xl mb-2">
                            {relatedArticle.category === 'guia' && '📚'}
                            {relatedArticle.category === 'mercado' && '📊'}
                            {relatedArticle.category === 'barrios' && '🏘️'}
                            {relatedArticle.category === 'noticias' && '📰'}
                          </div>
                          <p className="text-xs font-semibold">Imagen próximamente</p>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[relatedArticle.category]} w-fit mb-3`}>
                          {categoryLabels[relatedArticle.category]}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                          <span>{relatedArticle.readTime} min lectura</span>
                          <span className="text-blue-600 font-semibold group-hover:underline">
                            Leer más →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
