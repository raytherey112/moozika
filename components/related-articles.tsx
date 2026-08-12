import Link from "next/link"
import { articles } from "@/config/articles"
import type { Article } from "@/config/articles"
import { ArticleCard } from "./article-card"

type RelatedArticlesProps = {
  currentArticle: Article
  maxArticles?: number
}

export function RelatedArticles({
  currentArticle,
  maxArticles = 3,
}: RelatedArticlesProps) {
  // Find related articles by keywords overlap
  const relatedArticles = articles
    .filter((article) => article.slug !== currentArticle.slug)
    .map((article) => {
      const currentKeywords = new Set(currentArticle.keywords.map((k) => k.toLowerCase()))
      const articleKeywords = new Set(article.keywords.map((k) => k.toLowerCase()))
      
      // Count keyword matches
      const matches = [...currentKeywords].filter((k) => articleKeywords.has(k)).length
      
      return { article, matches }
    })
    .filter((item) => item.matches > 0)
    .sort((a, b) => b.matches - a.matches)
    .slice(0, maxArticles)
    .map((item) => item.article)

  if (relatedArticles.length === 0) return null

  return (
    <section className="mt-16 border-t border-border/60 pt-12">
      <h2 className="font-serif text-2xl font-semibold mb-6">Related Recommendations</h2>
      <p className="text-muted-foreground mb-6">
        Explore more music for similar activities and moments.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
