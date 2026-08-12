import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}. Read our terms and conditions of use.`,
}

export default function TermsPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Acceptance of Terms</h2>
          <p>
            By accessing and using {siteConfig.name} ({siteConfig.url}), you accept and agree to be bound
            by the terms and provision of this agreement. If you do not agree to abide by these terms,
            please do not use this Site.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Description of Service</h2>
          <p>
            {siteConfig.name} is a music recommendation website that provides curated playlists and
            album recommendations for specific activities, moods, and scenarios. The Site contains
            links to third-party music streaming platforms where you can listen to the recommended music.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Intellectual Property</h2>
          <h3 className="font-serif text-xl font-semibold mt-4">Our Content</h3>
          <p>
            All content on this Site, including text, graphics, logos, images, and the compilation
            thereof, is the property of {siteConfig.name} or its content suppliers and protected by
            copyright and other intellectual property laws.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Third-Party Music</h3>
          <p>
            The music albums and playlists featured on our Site are the property of their respective
            copyright holders. We do not claim ownership of the music content. We provide links to
            authorized streaming platforms where you can legally access the music.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">User Responsibilities</h2>
          <p>When using our Site, you agree not to:</p>
          <ul>
            <li>Use the Site for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Use any automated means to access the Site without our permission</li>
            <li>Interfere with or disrupt the Site or servers</li>
            <li>Reproduce, duplicate, copy, or resell any part of the Site</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Third-Party Links</h2>
          <p>
            Our Site contains links to third-party websites, particularly music streaming platforms
            (Spotify, Apple Music, Amazon Music, YouTube, YouTube Music). We do not control these
            websites and are not responsible for their content, privacy policies, or practices.
          </p>
          <p>
            Your use of third-party websites is subject to their respective terms and conditions.
            We encourage you to review the terms and privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an "as is" and "as available" basis. We make no representations or
            warranties of any kind, express or implied, regarding the operation of the Site or the
            information, content, materials, or products included on the Site.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, timely, secure, or error-free.
            We are not responsible for the availability, quality, or legality of music on third-party
            streaming platforms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteConfig.name} shall not be liable for any
            direct, indirect, incidental, special, consequential, or exemplary damages, including but
            not limited to damages for loss of profits, goodwill, use, data, or other intangible losses,
            resulting from:
          </p>
          <ul>
            <li>The use or inability to use the Site</li>
            <li>Unauthorized access to or alteration of your transmissions or data</li>
            <li>Statements or conduct of any third party on the Site</li>
            <li>Any other matter relating to the Site</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless {siteConfig.name}, its officers, directors,
            employees, agents, and affiliates from any claim, demand, damage, or loss, including reasonable
            attorneys' fees, arising out of your use of the Site or violation of these Terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of significant
            changes by posting the updated Terms on this page and updating the "Last updated" date.
            Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
            where {siteConfig.name} operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <p className="mt-2">
            <Link href="/contact" className="text-primary hover:underline font-medium underline decoration-primary">
              Contact Page
            </Link>
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}