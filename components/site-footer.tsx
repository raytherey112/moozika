import Link from "next/link"
import { siteConfig } from "@/config/site"

const footerLinks: { label: string; href: string }[] = [
  { label: "Spotify", href: siteConfig.mainLinks.spotify },
  { label: "Apple Music", href: siteConfig.mainLinks.appleMusic },
  { label: "Amazon Music", href: siteConfig.mainLinks.amazonMusic },
  { label: "YouTube Music", href: siteConfig.mainLinks.youtubeMusic },
  { label: "YouTube", href: siteConfig.mainLinks.youtube },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-serif text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground text-pretty">
            {siteConfig.tagline}. Music by {siteConfig.artist}.
          </p>
        </div>

        <nav aria-label="Listen on" className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <Link href="/articles" className="hover:text-foreground">
                Browse All
              </Link>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
