import Link from "next/link"
import { ArrowRight, Headphones } from "lucide-react"
import { siteConfig } from "@/config/site"
import { articles } from "@/config/articles"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleCard } from "@/components/article-card"
import { JsonLd } from "@/components/json-ld"

export default function HomePage() {
  const [featured, ...rest] = articles

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/articles?search={search_term_string}`,
      },
      query_input: "required name=search_term_string",
    },
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.mainLinks.spotify,
      siteConfig.mainLinks.appleMusic,
      siteConfig.mainLinks.amazonMusic,
      siteConfig.mainLinks.youtube,
      siteConfig.mainLinks.youtubeMusic,
    ],
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} collection`,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/${article.slug}`,
      name: article.title,
    })),
  }

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={collectionSchema} />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
            <Headphones className="size-4" />
            Curated instrumental music
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#collection"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse the collection
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={siteConfig.mainLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              Follow the artist
            </a>
          </div>
        </section>

        {/* Collection */}
        <section
          id="collection"
          aria-labelledby="collection-heading"
          className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 sm:px-6"
        >
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div>
              <h2
                id="collection-heading"
                className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Music for every moment
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                One album, hand-picked for each occasion.
              </p>
            </div>
            <Link
              href="/articles"
              className="text-sm font-medium text-primary hover:underline underline decoration-primary"
            >
              View all {articles.length} recommendations →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="md:col-span-2">
              <ArticleCard article={featured} featured />
            </div>
            {rest.slice(0, 1).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(1).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
