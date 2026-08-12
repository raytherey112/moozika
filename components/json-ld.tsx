/**
 * Renders a JSON-LD structured-data script tag for SEO / rich results.
 * Pass any schema.org object as `data`.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static content generated from config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
