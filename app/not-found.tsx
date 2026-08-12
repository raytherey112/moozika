import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
          <div className="mt-12 rounded-lg border bg-card p-6 text-left">
            <h2 className="font-serif text-xl font-semibold">
              Looking for music recommendations?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore our collection of curated playlists for specific activities, moods,
              and moments. We have music for climbing, stargazing, coding, meditation,
              and many more unique scenarios.
            </p>
            <div className="mt-4">
              <Button variant="ghost">
                <Link href="/">Browse All Recommendations</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}