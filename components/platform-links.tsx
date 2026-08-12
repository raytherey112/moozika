import { ArrowUpRight } from "lucide-react"
import type { StreamingLinks } from "@/config/albums"
import { platforms } from "@/config/platforms"

type PlatformLinksProps = {
  links: StreamingLinks
  albumTitle: string
}

/**
 * Renders a button for every streaming service that has a link for this album.
 * Order and labels come from config/platforms.ts.
 */
export function PlatformLinks({ links, albumTitle }: PlatformLinksProps) {
  const available = platforms.filter((p) => links[p.key])

  if (available.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-2">
      {available.map((platform) => (
        <li key={platform.key}>
          <a
            href={links[platform.key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${albumTitle} on ${platform.label}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            {platform.label}
            <ArrowUpRight className="size-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
