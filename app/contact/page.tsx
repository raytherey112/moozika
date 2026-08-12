import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "צור קשר",
  description: `צור קשר עם ${siteConfig.name}. פנה אלינו לשאלות, הצעות או משוב על המלצות המוזיקה שלנו.`,
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">צור קשר</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            יש לך שאלות, הצעות או משוב על המלצות המוזיקה שלנו? נשמח לשמוע ממך.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">בקשות כלליות</h2>
              <p className="mt-2 text-muted-foreground">
                לשאלות כלליות על המלצות המוזיקה שלנו, פונקציונליות האתר, או הצעות לתוכן חדש, אנא שלח לנו דוא"ל ל:
              </p>
              <div className="mt-4">
                <Button variant="outline">
                  <a href={`mailto:${siteConfig.contactEmail}`}>
                    {siteConfig.contactEmail}
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">בקשות משפטיות</h2>
              <p className="mt-2 text-muted-foreground">
                לשאלות פרטיות, זכויות יוצרים או עניינים משפטיים אחרים, אנא בדוק את הדפים המשפטיים שלנו תחילה:
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="ghost" size="sm">
                  <Link href="/privacy">מדיניות פרטיות</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Link href="/terms">תנאי שימוש</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Link href="/cookies">מדיניות עוגיות</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">שאלות נפוצות</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium">האם אוכל להציע המלצות מוזיקה ספציפיות?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  כן! אנחנו תמיד מחפשים תרחישים ופעילויות חדשות ליצור המלצות מוזיקה. אם יש לך פעילות, מצב רוח או תרחיש ספציפי שהיית רוצה שנכסה, אנא בידיעתנו.
                </p>
              </div>
              <div>
                <h3 className="font-medium">האם יש לכם קישורים שותפים עם פלטפורמות סטרימינג?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  לא. אנחנו מספקים קישורים ישירים לפלטפורמות סטרימינג לנוחותך, אך אנחנו לא מקבלים כל פיצוי או עמלות שותפים בעבור קליקים או זרמים.
                </p>
              </div>
              <div>
                <h3 className="font-medium">האם אוכל להגיש את המוזיקה שלי לשיקול?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  כרגע, אנחנו מציגים אלבומים אינסטרומנטליים ספציפיים. אנחנו לא מקבלים הגשות כרגע, אך זה עשוי להשתנות בעתיד.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">זמן תגובה</h2>
            <p className="mt-2 text-muted-foreground">
              אנחנו שואפים לענות על כל הבקשות תוך 2-3 ימי עבודה. שימו לב שאנחנו אולי לא נוכל להשיב לכל הודעה בנפרד, במיוחד אם שאלות דומות טופלו בסעיף השאלות הנפוצות שלנו.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl font-semibold">דרכים נוספות לגלות</h2>
            <p className="mt-2 text-muted-foreground">
              בזמן שאתה כאן, למה לא לגלות חלק מהמלצות המוזיקה הפופולריות שלנו?
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Link href="/music-for-climbing">מוזיקה לטיפוס</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-stargazing">מוזיקה לצפייה בכוכבים</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-meditation">מוזיקה למדיטציה</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-coding">מוזיקה לקידוד</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}