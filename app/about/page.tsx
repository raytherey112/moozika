import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our mission to connect people with the right music for every moment and activity.`,
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">About {siteConfig.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Connecting people with the right music for every moment, activity, and mood.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">Our Mission</h2>
              <p className="mt-2 text-muted-foreground">
                We believe that music should be as specific as the moments it accompanies. Instead of
                generic playlists, we create targeted recommendations for specific activities, moods,
                and scenarios — helping you find exactly the right music for whatever you're doing.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">How It Works</h2>
              <p className="mt-2 text-muted-foreground">
                Each page on our site targets a specific search term people might type into Google.
                When someone searches for "music for climbing" or "music for meditation," they find
                a dedicated page with carefully selected instrumental music for that exact purpose.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">Our Philosophy</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium">Quality Over Quantity</h3>
                <p className="mt-1 text-muted-foreground">
                  We feature a curated selection of instrumental albums rather than overwhelming you
                  with endless options. Each recommendation is chosen for its suitability to specific
                  activities and moods.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Honest Recommendations</h3>
                <p className="mt-1 text-muted-foreground">
                  We only write about music we genuinely believe works for the stated purpose. Our
                  descriptions are honest, practical, and focused on how the music actually functions
                  in real-world situations.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Access for All</h3>
                <p className="mt-1 text-muted-foreground">
                  Every album we recommend is available on major streaming platforms. We provide direct
                  links to Spotify, Apple Music, Amazon Music, YouTube, and YouTube Music — you choose
                  your preferred service.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">For Listeners</h2>
              <p className="mt-2 text-muted-foreground">
                Discover music perfectly suited to your activities. Whether you're climbing, coding,
                meditating, or just relaxing, we've found instrumental albums that complement the
                experience without distracting from it.
              </p>
              <div className="mt-4">
                <Button>
                  <Link href="/">Explore Recommendations</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">For Artists</h2>
              <p className="mt-2 text-muted-foreground">
                We help instrumental music find its audience by connecting it with specific use cases
                and activities. Our focus on context helps listeners discover music they might not
                find through traditional browsing.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">Our Content Approach</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="font-medium">Targeted</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Each page addresses one specific search term and activity
                </p>
              </div>
              <div>
                <h3 className="font-medium">Concise</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clear, practical information without unnecessary length
                </p>
              </div>
              <div>
                <h3 className="font-medium">Visual</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Beautiful, relevant hero images for each recommendation
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl font-semibold">Explore Our Recommendations</h2>
            <p className="mt-2 text-muted-foreground">
              Start discovering music tailored to your activities:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Link href="/music-for-climbing">Climbing Music</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-stargazing">Stargazing Music</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-meditation">Meditation Music</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-coding">Coding Music</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-baking">Baking Music</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-reading-fantasy">Reading Music</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">Contact & Feedback</h2>
            <p className="mt-2 text-muted-foreground">
              Have suggestions for new activity-specific music recommendations? Want to provide feedback
              on our site? We'd love to hear from you.
            </p>
            <div className="mt-4">
              <Button variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}