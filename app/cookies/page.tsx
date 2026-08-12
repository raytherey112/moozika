import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "מדיניות עוגיות",
  description: `מדיניות עוגיות עבור ${siteConfig.name}. למד על העוגיות שאנו משתמשים ואיך לנהל אותן.`,
}

export default function CookiesPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">מדיניות עוגיות</h1>
        <p className="text-muted-foreground">
          עודכן לאחרונה: {new Date().toLocaleDateString("he-IL", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">מה הן עוגיות</h2>
          <p>
            עוגיות (Cookies) הן קבצי טקסט קטנים שמונחים על המחשב או המכשיר הנייד שלך כשאתה
            מבקר באתר אינטרנט. הן נמצאות בשימוש נרחב כדי לגרום לאתרים לעבוד ביעילות רבה יותר ולספק
            מידע לבעלי האתרים.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">כיצד אנו משתמשים בעוגיות</h2>
          <p>
            אנחנו משתמשים בעוגיות למטרות הבאות:
          </p>
          <h3 className="font-serif text-xl font-semibold mt-4">עוגיות חיוניות</h3>
          <p>
            עוגיות אלו הכרחיות לתפקוד תקין של האתר. הן מאפשרות פונקציות בסיסיות
            כמו ניווט בדפים וגישה לאזורים מאובטחים של האתר. האתר אינו יכול לתפקד
            כראוי ללא עוגיות אלו.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">עוגיות אנליטיקה</h3>
          <p>
            אנחנו משתמשים ב-Vercel Analytics כדי להבין כיצד מבקרים משתמשים באתר שלנו. עוגיות אלו עוזרות לנו
            לאסוף מידע על האופן שבו מבקרים מתקשרים עם האתר שלנו, כולל אילו דפים
            מבוקרים הכי הרבה, כיצד משתמשים מנווטים בין דפים, והאם הם נתקלים בשגיאות.
            מידע זה מצטבר ואנונימי.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">עוגיות העדפות</h3>
          <p>
            עוגיות אלו מאפשרות לאתר לזכור בחירות שאתה עושה (כגון שפה מועדפת
            או אזור) ולספק תכונות משופרות ויותר מותאמות אישית.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">עוגיות צד שלישי</h2>
          <p>
            בנוסף לעוגיות שלנו, אנו עשויים גם להשתמש בעוגיות צד שלישי שונות, כולל:
          </p>
          <h3 className="font-serif text-xl font-semibold mt-4">ספקי אנליטיקה</h3>
          <p>
            Vercel Analytics: אנחנו משתמשים ב-Vercel Analytics כדי לעזור לנו להבין כיצד האתר שלנו נמצא בשימוש.
            השימוש של Vercel בעוגיות כפוף למדיניות הפרטיות שלהם.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">תוכן מוטמע</h3>
          <p>
            דפים באתר זה עשויים לכלול תוכן מוטמע (למשל, סרטונים, תמונות, מאמרים וכו').
            תוכן מוטמע מאתרים אחרים מתנהג בדיוק באותו אופן כאילו המבקר ביקר
            באתר האחר.
          </p>
          <p>
            אתרים אלו עשויים לאסוף נתונים עליך, להשתמש בעוגיות, להטמיע מעקב נוסף של צד שלישי,
            ולנטר את האינטראקציה שלך עם התוכן המוטמע, כולל מעקב אחר האינטראקציה שלך
            עם התוכן המוטמע אם יש לך חשבון ואתה מחובר לאתר זה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">ניהול עוגיות</h2>
          <p>
            אתה יכול לשלוט ו/או למחוק עוגיות כרצונך. אתה יכול למחוק את כל העוגיות שכבר
            נמצאות על המחשב שלך ואתה יכול להגדיר את רוב הדפדפנים למנוע מהן להיות מוצבות.
            עם זאת, אם תעשה זאת, ייתכן שתצטרך להתאים ידנית כמה העדפות בכל פעם שתבקר
            באתר וכמה שירותים ופונקציונליות לא יעבדו.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">הגדרות דפדפן</h3>
          <p>
            רוב דפדפני האינטרנט מאפשרים שליטה מסוימת ברוב העוגיות דרך הגדרות הדפדפן. למידע
            נוסף על עוגיות, כולל כיצד לראות אילו עוגיות הוגדרו וכיצד לנהל
            ולמחוק אותן, בקר ב-<a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium underline decoration-primary">www.aboutcookies.org</a> או
            <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium underline decoration-primary"> www.allaboutcookies.org</a>.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">יציאה מאנליטיקה</h3>
          <p>
            כדי לצאת מ-Vercel Analytics, אתה יכול להשתמש במנגנון היציאה שלהם או להתאים את הגדרות
            הדפדפן שלך לדחות עוגיות.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">משך זמן עוגיות</h2>
          <p>
            עוגיות יכולות להישאר על המכשיר שלך לתקופות זמן שונות:
          </p>
          <ul>
            <li>
              <strong>עוגיות סשן:</strong> אלו עוגיות זמניות שפגות כשאתה סוגר
              את הדפדפן שלך.
            </li>
            <li>
              <strong>עוגיות קבועות:</strong> אלו נשארות על המכשיר שלך לתקופת זמן קבועה
              או עד שאתה מוחק אותן.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">עדכונים למדיניות זו</h2>
          <p>
            אנו עשויים לעדכן את מדיניות העוגיות הזו מעת לעת כדי לשקף שינויים בפרקטיקות שלנו או
            מסיבות תפעוליות, משפטיות או רגולטוריות אחרות. אנו נודיע לך על כל שינוי על ידי
            פרסום מדיניות העוגיות החדשה בעמוד זה ועדכון תאריך "עודכן לאחרונה".
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">צור קשר</h2>
          <p>
            אם יש לך שאלות כלשהן לגבי השימוש שלנו בעוגיות, אנא צור איתנו קשר:
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