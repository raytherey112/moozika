"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { ArticleCard } from "@/components/article-card"
import { articles } from "@/config/articles"

export default function ArticlesClient() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") || ""
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [filteredArticles, setFilteredArticles] = useState(articles)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredArticles(articles)
      return
    }

    const searchTerms = searchQuery.toLowerCase().split(" ").filter(term => term.length > 0)
    
    const filtered = articles.filter(article => {
      const searchableText = `${article.title} ${article.searchTerm} ${article.keywords.join(" ")} ${article.excerpt}`.toLowerCase()
      return searchTerms.every(term => searchableText.includes(term))
    })

    setFilteredArticles(filtered)
  }, [searchQuery])

  // Group articles by first letter for easier navigation
  const articlesByLetter = useMemo(() => {
    return filteredArticles.reduce((acc, article) => {
      const firstLetter = article.title.charAt(0).toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(article)
      return acc
    }, {} as Record<string, typeof articles>)
  }, [filteredArticles])

  const letters = Object.keys(articlesByLetter).sort()

  if (filteredArticles.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <Search className="mx-auto size-12 text-muted-foreground" />
        <h3 className="mt-4 font-serif text-xl font-semibold">No results found</h3>
        <p className="mt-2 text-muted-foreground">
          No articles match "{searchQuery}". Try a different search term.
        </p>
        <button
          onClick={() => setSearchQuery("")}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-primary/10"
        >
          <X className="size-4" />
          Clear search
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Search results info */}
      {searchQuery && (
        <div className="mb-6 rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                Found {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} for "{searchQuery}"
              </p>
              <p className="text-sm text-muted-foreground">
                Showing results from {letters.length} categor{letters.length !== 1 ? "ies" : "y"}
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-sm hover:bg-primary/10"
            >
              <X className="size-3" />
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Quick navigation by letter */}
      {!searchQuery && filteredArticles.length > 20 && (
        <div className="mb-8 rounded-lg border bg-card p-4">
          <h2 className="font-serif text-lg font-semibold mb-3">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-sm font-medium hover:bg-primary/10 hover:text-primary"
              >
                {letter}
              </a>
            ))}
            <Link
              href="/"
              className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium hover:bg-primary/10 hover:text-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* Articles grouped by letter OR all results if searching */}
      {searchQuery ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-16">
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {letter}
                </span>
                {letter}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({articlesByLetter[letter].length} article{articlesByLetter[letter].length !== 1 ? "s" : ""})
                </span>
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {articlesByLetter[letter].map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Back to top */}
      {!searchQuery && (
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary"
          >
            Back to top
          </a>
        </div>
      )}
    </>
  )
}