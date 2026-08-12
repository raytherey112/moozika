import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we handle your data and privacy.`,
}

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Introduction</h2>
          <p>
            This Privacy Policy describes how {siteConfig.name} ("we", "our", or "us") collects, uses,
            and shares your personal information when you use our website {siteConfig.url} (the "Site").
          </p>
          <p>
            We are committed to protecting your privacy and ensuring transparency about our data practices.
            This website primarily serves as a content platform for music recommendations and does not require
            account creation or collect extensive personal data.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Information We Collect</h2>
          <h3 className="font-serif text-xl font-semibold mt-4">Automatically Collected Information</h3>
          <p>
            When you visit our Site, we automatically collect certain information about your device and
            browsing activity, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Date and time of visit</li>
          </ul>

          <h3 className="font-serif text-xl font-semibold mt-4">Analytics Data</h3>
          <p>
            We use Vercel Analytics to understand how visitors use our Site. This service collects
            anonymized data about website traffic and user behavior. The data is aggregated and cannot
            be used to identify individual users.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To analyze website performance and improve user experience</li>
            <li>To understand which content is most valuable to visitors</li>
            <li>To detect and prevent security issues</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Third-Party Services</h2>
          <h3 className="font-serif text-xl font-semibold mt-4">Streaming Platforms</h3>
          <p>
            Our Site contains links to third-party music streaming platforms (Spotify, Apple Music,
            Amazon Music, YouTube, YouTube Music). When you click these links, you will be directed
            to their respective websites. We do not control these external sites and their privacy
            policies may differ from ours.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">Analytics Providers</h3>
          <p>
            We use Vercel Analytics for website analytics. Vercel's privacy policy governs their
            collection and use of analytics data.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information,
            including:
          </p>
          <ul>
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to or restrict certain processing activities</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided in the
            Contact section below.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Data Security</h2>
          <p>
            We implement reasonable security measures to protect the information we collect. However,
            no method of transmission over the internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Children's Privacy</h2>
          <p>
            Our Site is not intended for children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you are a parent or guardian and believe
            your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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