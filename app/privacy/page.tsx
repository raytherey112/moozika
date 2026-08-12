import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: `מדיניות פרטיות עבור ${siteConfig.name}. למד איך אנחנו מטפלים בנתונים שלך ובפרטיות שלך.`,
}

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">מדיניות פרטיות</h1>
        <p className="text-muted-foreground">
          עודכן לאחרונה: {new Date().toLocaleDateString("he-IL", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">מבוא</h2>
          <p>
            מדיניות פרטיות זו מתארת כיצד {siteConfig.name} ("אנחנו", "שלנו", או "אותנו") אוספת, משתמשת,
            ומשתפת את המידע האישי שלך כשאתה משתמש באתר שלנו {siteConfig.url} ("האתר").
          </p>
          <p>
            אנחנו מחויבים להגן על הפרטיות שלך ולהבטיח שקיפות לגבי פרקטיקות הנתונים שלנו.
            אתר זה משמש בעיקר כפלטפורמת תוכן להמלצות מוזיקה ואינו דורש יצירת חשבון או איסוף נתונים אישיים נרחבים.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">מידע שאנו אוספים</h2>
          <h3 className="font-serif text-xl font-semibold mt-4">מידע הנאסף אוטומטית</h3>
          <p>
            כשאתה מבקר באתר שלנו, אנו אוספים אוטומטית מידע מסוים על המכשיר שלך ועל
            פעילות הגלישה, כולל:
          </p>
          <ul>
            <li>כתובת IP</li>
            <li>סוג דפדפן וגרסה</li>
            <li>מערכת הפעלה</li>
            <li>אתר ממנו הגעת</li>
            <li>עמודים שנצפו וזמן שבילית בעמודים</li>
            <li>תאריך ושעת ביקור</li>
          </ul>

          <h3 className="font-serif text-xl font-semibold mt-4">נתוני אנליטיקה</h3>
          <p>
            אנחנו משתמשים ב-Vercel Analytics כדי להבין איך מבקרים משתמשים באתר שלנו. שירות זה אוסף
            נתונים אנונימיים על תעבורת אתר והתנהגות משתמשים. הנתונים מצטברים ולא ניתן
            להשתמש בהם כדי לזהות משתמשים בודדים.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">כיצד אנו משתמשים במידע שלך</h2>
          <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
          <ul>
            <li>לניתוח ביצועי האתר ושיפור חוויית המשתמש</li>
            <li>להבין איזה תוכן הכי שווה למבקרים</li>
            <li>לזיהוי ומניעת בעיות אבטחה</li>
            <li>לעמידה בחובות משפטיות</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">שירותי צד שלישי</h2>
          <h3 className="font-serif text-xl font-semibold mt-4">פלטפורמות סטרימינג</h3>
          <p>
            האתר שלנו מכיל קישורים לפלטפורמות סטרימינג מוזיקה של צד שלישי (Spotify, Apple Music,
            Amazon Music, YouTube, YouTube Music). כשאתה לוחץ על הקישורים האלה, תופנה
            לאתרים שלהם. אנחנו לא שולטים באתרים חיצוניים אלה ומדיניות הפרטיות שלהם
            עשויה להיות שונה משלנו.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">ספקי אנליטיקה</h3>
          <p>
            אנחנו משתמשים ב-Vercel Analytics לאנליטיקה של האתר. מדיניות הפרטיות של Vercel שולטת
            באיסוף ושימוש שלהם בנתוני אנליטיקה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">הזכויות שלך</h2>
          <p>
            תלוי במיקום שלך, ייתכן שיש לך זכויות מסוימות לגבי המידע האישי שלך,
            כולל:
          </p>
          <ul>
            <li>הזכות לגשת למידע האישי שאנו מחזיקים עליך</li>
            <li>הזכות לבקש תיקון של מידע לא מדויק</li>
            <li>הזכות לבקש מחיקה של המידע האישי שלך</li>
            <li>הזכות להתנגד או להגביל פעילויות עיבוד מסוימות</li>
          </ul>
          <p>
            כדי להפעיל כל אחת מהזכויות האלה, אנא צור איתנו קשר באמצעות המידע שמסופק ב
            סעיף יצירת הקשר למטה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">אבטחת נתונים</h2>
          <p>
            אנחנו מיישמים אמצעי אבטחה סבירים כדי להגן על המידע שאנו אוספים. עם זאת,
            אף שיטת העברה דרך האינטרנט או אחסון אלקטרוני אינה 100% מאובטחת, ואנחנו
            לא יכולים להבטיח אבטחה מוחלטת.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">פרטיות ילדים</h2>
          <p>
            האתר שלנו אינו מיועד לילדים מתחת לגיל 13. אנחנו לא אוספים במודע
            מידע אישי מילדים מתחת לגיל 13. אם אתה הורה או אפוטרופוס ומאמין
            שילדך סיפק לנו מידע אישי, אנא צור איתנו קשר.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">שינויים במדיניות זו</h2>
          <p>
            אנחנו עשויים לעדכן את מדיניות הפרטיות הזו מעת לעת. אנחנו נודיע לך על כל שינוי על ידי
            פרסום מדיניות הפרטיות החדשה בעמוד זה ועדכון תאריך "עודכן לאחרונה".
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">צור קשר</h2>
          <p>
            אם יש לך שאלות כלשהן לגבי מדיניות פרטיות זו, אנא צור איתנו קשר ב:
          </p>
          <p className="mt-2">
            <Link href="/contact" className="text-primary hover:underline font-medium underline decoration-primary">
              דף יצירת קשר
            </Link>
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}