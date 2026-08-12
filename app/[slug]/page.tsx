import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { siteConfig } from "@/config/site"
import { articles, getArticleBySlug } from "@/config/articles"
import { getAlbumById } from "@/config/albums"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AlbumFeature } from "@/components/album-feature"
import { ArticleCard } from "@/components/article-card"
import { JsonLd } from "@/components/json-ld"

type PageProps = {
  params: Promise<{ slug: string }>
}

/** Pre-render every article at build time. */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) return {}

  const title = article.metaTitle ?? article.title
  const url = `${siteConfig.url}/${article.slug}`

  return {
    title,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/${article.slug}` },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description: article.metaDescription,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: article.heroImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.metaDescription,
      images: [article.heroImage],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const album = getAlbumById(article.albumId)
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)
  const url = `${siteConfig.url}/${article.slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `${siteConfig.url}${article.heroImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@type": "Person", name: siteConfig.artist },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: article.keywords.join(", "),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "בית",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: url,
      },
    ],
  }

  const faqSchema =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <SiteHeader />

      <main>
        {/* Hero image */}
        <div className="relative h-[42vh] min-h-[300px] w-full sm:h-[52vh]">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt={article.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                {article.searchTerm}
              </p>
              <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            כל הקולקציות
          </Link>

          {/* Album promo at the very top */}
          {album ? (
            <AlbumFeature album={album} />
          ) : (
            <p className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
              האלבום לא נמצא. בדוק את ה-{" "}
              <code className="text-foreground">albumId</code> של הכתבה
              בקובץ ההגדרות.
            </p>
          )}

          {/* Intro */}
          <p className="mt-10 text-lg leading-relaxed text-foreground/90 text-pretty">
            {article.intro}
          </p>

          {/* Sections */}
          <div className="mt-8 flex flex-col gap-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* FAQ */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="mt-12 border-t border-border/60 pt-8">
              <h2 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
                שאלות נפוצות
              </h2>
              <dl className="mt-4 flex flex-col gap-5">
                {article.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-medium text-foreground">
                      {faq.question}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-muted-foreground text-pretty">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Listen again */}
          {album && (
            <section className="mt-12 border-t border-border/60 pt-8">
              <h2 className="mb-4 font-serif text-xl font-semibold tracking-tight">
                מוכן להקשיב?
              </h2>
              <AlbumFeature album={album} />
            </section>
          )}
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section
            aria-labelledby="related-heading"
            className="mx-auto max-w-6xl px-4 py-6 sm:px-6"
          >
            <h2
              id="related-heading"
              className="mb-6 font-serif text-2xl font-semibold tracking-tight"
            >
              קולקציות נוספות
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  )
}
