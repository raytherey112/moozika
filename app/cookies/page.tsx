import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie policy for ${siteConfig.name}. Learn about the cookies we use and how to manage them.`,
}

export default function CookiesPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">Cookie Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you
            visit a website. They are widely used to make websites work more efficiently and provide
            information to the website owners.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">How We Use Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <h3 className="font-serif text-xl font-semibold mt-4">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic functions
            like page navigation and access to secure areas of the website. The website cannot function
            properly without these cookies.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Analytics Cookies</h3>
          <p>
            We use Vercel Analytics to understand how visitors use our Site. These cookies help us
            collect information about how visitors interact with our website, including which pages
            are visited most often, how users navigate between pages, and whether they encounter errors.
            This information is aggregated and anonymous.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Preference Cookies</h3>
          <p>
            These cookies enable the website to remember choices you make (such as your preferred
            language or region) and provide enhanced, more personalized features.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies, including:
          </p>
          <h3 className="font-serif text-xl font-semibold mt-4">Analytics Providers</h3>
          <p>
            Vercel Analytics: We use Vercel Analytics to help us understand how our website is used.
            Vercel's use of cookies is governed by their privacy policy.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Embedded Content</h3>
          <p>
            Pages on this site may include embedded content (e.g., videos, images, articles, etc.).
            Embedded content from other websites behaves in the exact same way as if the visitor has
            visited the other website.
          </p>
          <p>
            These websites may collect data about you, use cookies, embed additional third-party tracking,
            and monitor your interaction with that embedded content, including tracking your interaction
            with the embedded content if you have an account and are logged in to that website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are
            already on your computer and you can set most browsers to prevent them from being placed.
            However, if you do this, you may have to manually adjust some preferences every time you
            visit a site and some services and functionalities may not work.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Browser Settings</h3>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find
            out more about cookies, including how to see what cookies have been set and how to manage
            and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium underline decoration-primary">www.aboutcookies.org</a> or
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium underline decoration-primary"> www.allaboutcookies.org</a>.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Opting Out of Analytics</h3>
          <p>
            To opt out of Vercel Analytics, you can use their opt-out mechanism or adjust your browser
            settings to reject cookies.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Cookie Duration</h2>
          <p>
            Cookies can remain on your device for different periods of time:
          </p>
          <ul>
            <li>
              <strong>Session cookies:</strong> These are temporary cookies that expire when you close
              your browser.
            </li>
            <li>
              <strong>Persistent cookies:</strong> These remain on your device for a set period of time
              or until you delete them.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or
            for other operational, legal, or regulatory reasons. We will notify you of any changes by
            posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us:
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