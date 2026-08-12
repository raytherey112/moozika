"use client"

import { useState, useEffect } from "react"
import { 
  Accessibility, 
  X, 
  Type, 
  ZoomIn, 
  ZoomOut, 
  Contrast,
  Eye,
  Sun,
  Moon,
  RotateCcw
} from "lucide-react"

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState("normal")
  const [isDark, setIsDark] = useState(false)
  const [isGrayscale, setIsGrayscale] = useState(false)
  const [letterSpacing, setLetterSpacing] = useState("normal")
  const [lineHeight, setLineHeight] = useState("normal")

  // Load saved preferences
  useEffect(() => {
    const savedFontSize = localStorage.getItem("a11y-font-size")
    const savedContrast = localStorage.getItem("a11y-contrast")
    const savedDark = localStorage.getItem("a11y-dark")
    const savedGrayscale = localStorage.getItem("a11y-grayscale")
    const savedLetterSpacing = localStorage.getItem("a11y-letter-spacing")
    const savedLineHeight = localStorage.getItem("a11y-line-height")

    if (savedFontSize) setFontSize(Number(savedFontSize))
    if (savedContrast) setContrast(savedContrast)
    if (savedDark) setIsDark(savedDark === "true")
    if (savedGrayscale) setIsGrayscale(savedGrayscale === "true")
    if (savedLetterSpacing) setLetterSpacing(savedLetterSpacing)
    if (savedLineHeight) setLineHeight(savedLineHeight)
  }, [])

  // Apply font size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    localStorage.setItem("a11y-font-size", fontSize.toString())
  }, [fontSize])

  // Apply contrast
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("high-contrast", "low-contrast")
    if (contrast === "high") {
      root.classList.add("high-contrast")
    } else if (contrast === "low") {
      root.classList.add("low-contrast")
    }
    localStorage.setItem("a11y-contrast", contrast)
  }, [contrast])

  // Apply dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("a11y-dark", isDark.toString())
  }, [isDark])

  // Apply grayscale
  useEffect(() => {
    if (isGrayscale) {
      document.documentElement.classList.add("grayscale")
    } else {
      document.documentElement.classList.remove("grayscale")
    }
    localStorage.setItem("a11y-grayscale", isGrayscale.toString())
  }, [isGrayscale])

  // Apply letter spacing
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("letter-spacing-wide", "letter-spacing-wider")
    if (letterSpacing === "wide") {
      root.classList.add("letter-spacing-wide")
    } else if (letterSpacing === "wider") {
      root.classList.add("letter-spacing-wider")
    }
    localStorage.setItem("a11y-letter-spacing", letterSpacing)
  }, [letterSpacing])

  // Apply line height
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("line-height-relaxed", "line-height-loose")
    if (lineHeight === "relaxed") {
      root.classList.add("line-height-relaxed")
    } else if (lineHeight === "loose") {
      root.classList.add("line-height-loose")
    }
    localStorage.setItem("a11y-line-height", lineHeight)
  }, [lineHeight])

  const resetAll = () => {
    setFontSize(100)
    setContrast("normal")
    setIsDark(false)
    setIsGrayscale(false)
    setLetterSpacing("normal")
    setLineHeight("normal")
    localStorage.removeItem("a11y-font-size")
    localStorage.removeItem("a11y-contrast")
    localStorage.removeItem("a11y-dark")
    localStorage.removeItem("a11y-grayscale")
    localStorage.removeItem("a11y-letter-spacing")
    localStorage.removeItem("a11y-line-height")
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="size-6" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 rounded-lg border border-border bg-background shadow-2xl">
          <div className="flex items-center justify-between border-b border-border bg-muted/30 p-4">
            <h2 className="flex items-center gap-2 font-semibold text-lg">
              <Accessibility className="size-5" />
              נגישות
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 hover:bg-muted"
              aria-label="סגור תפריט נגישות"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Font Size */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Type className="size-4" />
                  גודל טקסט
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                    className="rounded-md border border-border p-2 hover:bg-muted"
                    aria-label="הקטן טקסט"
                    disabled={fontSize <= 80}
                  >
                    <ZoomOut className="size-4" />
                  </button>
                  <span className="flex-1 text-center text-sm font-medium">
                    {fontSize}%
                  </span>
                  <button
                    onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                    className="rounded-md border border-border p-2 hover:bg-muted"
                    aria-label="הגדל טקסט"
                    disabled={fontSize >= 150}
                  >
                    <ZoomIn className="size-4" />
                  </button>
                </div>
              </div>

              {/* Contrast */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Contrast className="size-4" />
                  ניגודיות
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setContrast("normal")}
                    className={`rounded-md border p-2 text-sm ${
                      contrast === "normal"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    רגילה
                  </button>
                  <button
                    onClick={() => setContrast("high")}
                    className={`rounded-md border p-2 text-sm ${
                      contrast === "high"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    גבוהה
                  </button>
                  <button
                    onClick={() => setContrast("low")}
                    className={`rounded-md border p-2 text-sm ${
                      contrast === "low"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    נמוכה
                  </button>
                </div>
              </div>

              {/* Letter Spacing */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Type className="size-4" />
                  ריווח אותיות
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setLetterSpacing("normal")}
                    className={`rounded-md border p-2 text-sm ${
                      letterSpacing === "normal"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() => setLetterSpacing("wide")}
                    className={`rounded-md border p-2 text-sm ${
                      letterSpacing === "wide"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    רחב
                  </button>
                  <button
                    onClick={() => setLetterSpacing("wider")}
                    className={`rounded-md border p-2 text-sm ${
                      letterSpacing === "wider"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    רחב מאוד
                  </button>
                </div>
              </div>

              {/* Line Height */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Type className="size-4" />
                  גובה שורה
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setLineHeight("normal")}
                    className={`rounded-md border p-2 text-sm ${
                      lineHeight === "normal"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() => setLineHeight("relaxed")}
                    className={`rounded-md border p-2 text-sm ${
                      lineHeight === "relaxed"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    מרווח
                  </button>
                  <button
                    onClick={() => setLineHeight("loose")}
                    className={`rounded-md border p-2 text-sm ${
                      lineHeight === "loose"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    רחוק
                  </button>
                </div>
              </div>

              {/* Dark Mode */}
              <div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex w-full items-center justify-between rounded-md border border-border p-3 hover:bg-muted"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
                    מצב כהה
                  </span>
                  <div
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      isDark ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform ${
                        isDark ? "translate-x-[-20px]" : "translate-x-[2px]"
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Grayscale */}
              <div>
                <button
                  onClick={() => setIsGrayscale(!isGrayscale)}
                  className="flex w-full items-center justify-between rounded-md border border-border p-3 hover:bg-muted"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Eye className="size-4" />
                    גווני אפור
                  </span>
                  <div
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      isGrayscale ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform ${
                        isGrayscale ? "translate-x-[-20px]" : "translate-x-[2px]"
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Reset */}
              <div className="pt-2">
                <button
                  onClick={resetAll}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-muted p-3 text-sm font-medium hover:bg-muted/80"
                >
                  <RotateCcw className="size-4" />
                  אפס הכל
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
