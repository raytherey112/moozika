import Image from "next/image"
import { Disc3 } from "lucide-react"
import type { Album } from "@/config/albums"
import { PlatformLinks } from "@/components/platform-links"

type AlbumFeatureProps = {
  album: Album
}

/**
 * The album promo block shown at the top of every article: cover art on one
 * side, title/artist and all streaming links on the other.
 */
export function AlbumFeature({ album }: AlbumFeatureProps) {
  return (
    <section
      aria-label={`Featured album: ${album.title}`}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="grid gap-0 sm:grid-cols-[minmax(0,220px)_1fr]">
        <div className="relative aspect-square w-full sm:h-full">
          <Image
            src={album.cover || "/placeholder.svg"}
            alt={`${album.title} album cover by ${album.artist}`}
            fill
            sizes="(max-width: 640px) 100vw, 220px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 p-6">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
            <Disc3 className="size-4" />
            Featured album
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold leading-tight text-card-foreground text-balance">
              {album.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              by {album.artist}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Listen now
            </p>
            <PlatformLinks links={album.links} albumTitle={album.title} />
          </div>
        </div>
      </div>
    </section>
  )
}
