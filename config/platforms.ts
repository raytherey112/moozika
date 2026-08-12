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
  { key: "spotify", label: "ספוטיפיי" },
  { key: "appleMusic", label: "אפל מיוזיק" },
  { key: "amazonMusic", label: "אמזון מיוזיק" },
  { key: "youtubeMusic", label: "יוטיוב מיוזיק" },
  { key: "youtube", label: "יוטיוב" },
]
