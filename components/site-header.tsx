import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { SearchBar } from "./search-bar"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <Image 
            src="/logo.svg" 
            alt="Moozika logo" 
            width={32} 
            height={32}
            className="size-8"
          />
          <span className="font-serif">{siteConfig.name}</span>
        </Link>

        {/* Search Bar - Hidden on mobile, shown on desktop */}
        <div className="hidden flex-1 max-w-md md:block">
          <Suspense fallback={
            <div className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm">
              טוען חיפוש...
            </div>
          }>
            <SearchBar />
          </Suspense>
        </div>

        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            בית
          </Link>
          <Link
            href="/articles"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            כל המוזיקה
          </Link>
          <Link
            href="/#collection"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            מומלצים
          </Link>
        </nav>
      </div>
      
      {/* Search Bar - Mobile version */}
      <div className="border-t border-border/60 px-4 py-3 md:hidden">
        <Suspense fallback={
          <div className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm">
            טוען חיפוש...
          </div>
        }>
          <SearchBar />
        </Suspense>
      </div>
    </header>
  )
}
