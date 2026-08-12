import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/config/articles"

type ArticleCardProps = {
  article: Article
  /** When true, the card spans wider and shows a taller image (feature slot). */
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60"
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? "aspect-[16/10]" : "aspect-[3/2]"
        }`}
      >
        <Image
          src={article.heroImage || "/placeholder.svg"}
          alt={article.heroAlt}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          {article.searchTerm}
        </p>
        <h3
          className={`font-serif font-semibold leading-tight text-card-foreground text-balance ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground text-pretty">
          {article.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-foreground">
          Read &amp; listen
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
