import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "אודותינו",
  description: `למדו על ${siteConfig.name} — המשימה שלנו לחבר אנשים למוזיקה הנכונה לכל רגע ופעילות.`,
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl font-bold md:text-4xl">אודות {siteConfig.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            מחברים אנשים למוזיקה הנכונה לכל רגע, פעילות ומצב רוח.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">המשימה שלנו</h2>
              <p className="mt-2 text-muted-foreground">
                אנחנו מאמינים שמוזיקה צריכה להיות ספציפית כמו הרגעים שהיא מלווה. במקום פלייליסטים גנריים, אנחנו יוצרים המלצות ממוקדות לפעילויות ספציפיות, מצבי רוח ותרחישים — עוזרים לכם למצוא בדיוק את המוזיקה הנכונה לכל מה שאתם עושים.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">איך זה עובד</h2>
              <p className="mt-2 text-muted-foreground">
                כל עמוד באתר שלנו מיועד למונח חיפוש ספציפי שאנשים עשויים להקליד בגוגל. כשמישהו מחפש "מוזיקה לטיפוס" או "מוזיקה למדיטציה", הוא מוצא עמוד ייעודי עם מוזיקה אינסטרומנטלית שנבחרה בקפידה למטרה המדויקת הזו.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">הפילוסופיה שלנו</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium">איכות על כמות</h3>
                <p className="mt-1 text-muted-foreground">
                  אנחנו מציגים בחירה קוריית של אלבומים אינסטרומנטליים במקום להציף אתכם באפשרויות אינסופיות. כל המלצה נבחרה לכשירותה לפעילויות ומצבי רוח ספציפיים.
                </p>
              </div>
              <div>
                <h3 className="font-medium">המלצות כנות</h3>
                <p className="mt-1 text-muted-foreground">
                  אנחנו כותבים רק על מוזיקה שאנחנו באמת מאמינים שהיא עובדת למטרה המדויקת. התיאורים שלנו כנים, מעשיים, וממוקדים על איך המוזיקה בעצם פועלת בחיים האמיתיים.
                </p>
              </div>
              <div>
                <h3 className="font-medium">גישה לכל</h3>
                <p className="mt-1 text-muted-foreground">
                  כל אלבום שהנחנו זמין בפלטפורמות סטרימינג ראשיות. אנחנו מספקים קישורים ישירים ל-Spotify, Apple Music, Amazon Music, YouTube, ו-YouTube Music — אתה בוחר בשירות המועדף שלך.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">למאזיניים</h2>
              <p className="mt-2 text-muted-foreground">
                גלו מוזיקה מתאימה בדיוק לפעילויות שלכם. בין אם אתם טיפסים, מקודדים, מדיטציה, או פשוט משתכחים, אנחנו מצאנו אלבומים אינסטרומנטליים שמשלימים את החוויה מבלי להסיח דעתכם ממנה.
              </p>
              <div className="mt-4">
                <Button>
                  <Link href="/">גלו המלצות</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold">לאמנים</h2>
              <p className="mt-2 text-muted-foreground">
                אנחנו עוזרים למוזיקה אינסטרומנטלית למצוא את קהל היעד שלה בחיבור אותה לשימושים ופעילויות ספציפיות. התמקדות שלנו בהקשר עוזרת למאזיניים לגלות מוזיקה שהם אולי לא יימצאו דרך גלישה מסורתית.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">גישת התוכן שלנו</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="font-medium">ממוקד</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  כל עמוד מטפל במונח חיפוש ופעילות ספציפית אחת בלבד
                </p>
              </div>
              <div>
                <h3 className="font-medium">תמציתי</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  מידע ברור ומעשי ללא אורך מיותר
                </p>
              </div>
              <div>
                <h3 className="font-medium">ויזואלי</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  תמונות גיבור יפות ורלוונטיות לכל המלצה
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-serif text-xl font-semibold">גלו את ההמלצות שלנו</h2>
            <p className="mt-2 text-muted-foreground">
              התחיל לגלות מוזיקה מותאמת לפעילויות שלך:
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
              <Button variant="outline" size="sm">
                <Link href="/music-for-baking">מוזיקה לאפייה</Link>
              </Button>
              <Button variant="outline" size="sm">
                <Link href="/music-for-reading-fantasy">מוזיקה לקריאה</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h2 className="font-serif text-xl font-semibold">יצור קשר והמלצות</h2>
            <p className="mt-2 text-muted-foreground">
              יש הצעות להמלצות מוזיקה חדשות במפגשים ספציפיים? רוצה לתת משוב על האתר שלנו? היינו שמחים לשמוע ממך.
            </p>
            <div className="mt-4">
              <Button variant="outline">
                <Link href="/contact">צור קשר</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}