import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Contact us for questions, suggestions, or feedback about our music recommendations.`,
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions, suggestions, or feedback about our music recommendations? We'd love to hear from you.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">General Inquiries</h2>
              <p className="mt-2 text-muted-foreground">
                For general questions about our music recommendations, website functionality, or
                suggestions for new content, please email us at:
              </p>
              <div className="mt-4">
                <Button variant="outline">
                  <a href={`mailto:contact@${siteConfig.url.replace('https://', '')}`}>
                    contact@{siteConfig.url.replace('https://', '')}
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">Legal Inquiries</h2>
              <p className="mt-2 text-muted-foreground">
                For privacy concerns, copyright questions, or other legal matters, please review our
                legal pages first:
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="ghost" size="sm">
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Link href="/terms">Terms of Service</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Link href="/cookies">Cookie Policy</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium">Can I request specific music recommendations?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes! We're always looking for new scenarios and activities to create music recommendations for.
                  If you have a specific activity, mood, or scenario you'd like us to cover, please let us know.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Do you have affiliate links with streaming platforms?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No. We provide direct links to streaming platforms for your convenience, but we do not
                  receive any compensation or affiliate commissions for clicks or streams.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Can I submit my music for consideration?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Currently, we feature specific instrumental albums. We're not accepting submissions
                  at this time, but this may change in the future.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">Response Time</h2>
            <p className="mt-2 text-muted-foreground">
              We strive to respond to all inquiries within 2-3 business days. Please note that we may
              not be able to respond to every message individually, especially if similar questions
              have been addressed in our FAQ section.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl font-semibold">Other Ways to Explore</h2>
            <p className="mt-2 text-muted-foreground">
              While you're here, why not explore some of our popular music recommendations?
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Link href="/music-for-climbing">Music for Climbing</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-stargazing">Music for Stargazing</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-meditation">Music for Meditation</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-coding">Music for Coding</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}