import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleCard } from "@/components/article-card"
import { SearchBar } from "@/components/search-bar"
import { articles } from "@/config/articles"
import { siteConfig } from "@/config/site"
import ArticlesClient from "./articles-client"

export const metadata: Metadata = {
  title: "All Music Recommendations",
  description: `Browse all ${articles.length} curated music recommendations for specific activities, moods, and moments on ${siteConfig.name}.`,
}

export default function AllArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold md:text-4xl">All Music Recommendations</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Browse all {articles.length} curated music recommendations for specific activities, moods, and moments.
            </p>
            
            {/* Search Bar */}
            <div className="mt-6 max-w-md">
              <SearchBar />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {articles.length} articles
              </span>
              <span>•</span>
              <span>Click any card to read and listen</span>
            </div>
          </div>

          {/* Client component for interactive features with Suspense */}
          <Suspense fallback={
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.slice(0, 6).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          }>
            <ArticlesClient />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}