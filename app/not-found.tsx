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
            עמוד לא נמצא
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            העמוד שאתה מחפש לא קיים או הועבר למיקום אחר.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">
              <Link href="/">חזרה לדף הבית</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">צור קשר עם התמיכה</Link>
            </Button>
          </div>
          <div className="mt-12 rounded-lg border bg-card p-6 text-left">
            <h2 className="font-serif text-xl font-semibold">
              מחפש המלצות מוזיקה?
            </h2>
            <p className="mt-2 text-muted-foreground">
              גלה את האוסף שלנו של פלייליסטים מיוחדים לפעילויות ספציפיות, מצבי רוח,
              ורגעים. יש לנו מוזיקה לטיפוס, צפייה בכוכבים, תכנות, מדיטציה,
              ועוד תרחישים ייחודיים רבים.
            </p>
            <div className="mt-4">
              <Button variant="ghost">
                <Link href="/">עיין בכל ההמלצות</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}