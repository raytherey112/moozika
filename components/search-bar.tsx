"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { articles } from "@/config/articles"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<typeof articles>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([])
      return
    }

    const searchTerms = query.toLowerCase().split(" ").filter(term => term.length > 0)
    
    const filtered = articles.filter(article => {
      const searchableText = `${article.title} ${article.searchTerm} ${article.keywords.join(" ")} ${article.excerpt}`.toLowerCase()
      return searchTerms.every(term => searchableText.includes(term))
    }).slice(0, 5) // Limit to 5 suggestions

    setSuggestions(filtered)
    setIsOpen(filtered.length > 0)
  }, [query])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/articles?search=${encodeURIComponent(query.trim())}`)
      setQuery("")
      setIsOpen(false)
    }
  }

  const handleSuggestionClick = (slug: string) => {
    router.push(`/${slug}`)
    setQuery("")
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search music recommendations..."
          className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-lg border border-border bg-background shadow-lg">
          <div className="p-2">
            <p className="mb-1 text-xs font-medium text-muted-foreground">
              {suggestions.length} suggestion{suggestions.length !== 1 ? "s" : ""}
            </p>
            {suggestions.map((article) => (
              <button
                key={article.slug}
                className="flex w-full items-start gap-3 rounded-md p-2 text-left hover:bg-muted"
                onMouseDown={() => handleSuggestionClick(article.slug)}
              >
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">{article.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {article.searchTerm}
                  </p>
                </div>
              </button>
            ))}
            {query.trim() && (
              <button
                className="mt-1 flex w-full items-center justify-between rounded-md p-2 text-sm text-primary hover:bg-muted"
                onMouseDown={() => {
                  router.push(`/articles?search=${encodeURIComponent(query.trim())}`)
                  setQuery("")
                  setIsOpen(false)
                }}
              >
                <span>View all results for "{query}"</span>
                <Search className="size-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}