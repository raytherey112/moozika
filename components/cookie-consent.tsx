"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Small delay to avoid showing immediately on page load
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-4 shadow-lg md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-lg md:border">
      <div className="space-y-3">
        <div>
          <h3 className="font-serif text-lg font-semibold">Cookie Preferences</h3>
          <p className="text-sm text-muted-foreground">
            We use cookies to analyze website traffic and optimize your experience. By accepting,
            you agree to our use of cookies for analytics purposes.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button onClick={acceptCookies} size="sm" className="flex-1">
            Accept All
          </Button>
          <Button onClick={rejectCookies} variant="outline" size="sm" className="flex-1">
            Reject Non-Essential
          </Button>
          <Button variant="ghost" size="sm">
            <Link href="/cookies">View our Cookie Policy</Link>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          You can change your preferences at any time by visiting our{" "}
          <Link href="/cookies" className="text-primary hover:underline font-medium underline decoration-primary">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}