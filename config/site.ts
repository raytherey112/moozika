/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 * Global settings for the whole site. Edit these values to rebrand the site,
 * change the domain (important for SEO / sitemaps), or update social links.
 * ----------------------------------------------------------------------------
 */

export const siteConfig = {
  /** Brand name shown in the header, footer and page titles. */
  name: "Moozika",

  /** Short tagline used on the homepage and as a fallback description. */
  tagline: "מוזיקה לרגעים שחשובים",

  /** One-line description used for SEO meta tags on the homepage. */
  description:
    "אלבומי אינסטרומנטליים מיוחדים לטיפוס, צפייה בכוכבים, תכנות ופעילויות ממוקדות אחרות. האזינו בספוטיפיי, אפל מיוזיק, אמזון מיוזיק ויוטיוב.",

  /**
   * The canonical production URL (no trailing slash).
   * IMPORTANT: update this to your real domain before going live — it is used
   * for canonical URLs, sitemap.xml, robots.txt and Open Graph tags.
   */
  url: "https://moozika.webapp.you",

  /** Name of the artist / label behind the music (used in structured data). */
  artist: "Dmiles",

  /** Contact email for inquiries, accessibility, and support. */
  contactEmail: "dmiles.apps@gmail.com",

  /** Default Open Graph image (relative to /public). */
  ogImage: "/images/heroes/climbing.png",

  /** Primary artist / label links, shown in the footer. */
  mainLinks: {
    spotify: "https://open.spotify.com/artist/6D4gOIMLSHMZDjTyxGcz78",
    appleMusic: "https://music.apple.com/us/artist/dmiles/1850332649",
    amazonMusic: "https://music.amazon.com/artists/B07GZ4TZ4R/dmiles",
    youtube: "https://www.youtube.com/@Dmiles/playlists",
    youtubeMusic: "https://music.youtube.com/channel/UC_8WOrxGdLYa2W_EL6x0XaQ",
  },

  /** Language + locale used in <html lang> and Open Graph locale. */
  language: "he",
  locale: "he_IL",
} as const

export type SiteConfig = typeof siteConfig
