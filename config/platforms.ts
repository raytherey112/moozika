/**
 * ============================================================================
 * STREAMING PLATFORMS
 * ============================================================================
 * Controls how each streaming service button is labelled and the order they
 * appear in. The `key` must match a key in an album's `links` object
 * (see config/albums.ts). Reorder this array to reorder the buttons.
 * ----------------------------------------------------------------------------
 */

import type { StreamingLinks } from "@/config/albums"

export type Platform = {
  key: keyof StreamingLinks
  label: string
}

export const platforms: Platform[] = [
  { key: "spotify", label: "Spotify" },
  { key: "appleMusic", label: "Apple Music" },
  { key: "amazonMusic", label: "Amazon Music" },
  { key: "youtubeMusic", label: "YouTube Music" },
  { key: "youtube", label: "YouTube" },
]
