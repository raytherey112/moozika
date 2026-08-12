import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: `הצהרת נגישות עבור ${siteConfig.name}. המחויבות שלנו לנגישות דיגיטלית לכל המשתמשים.`,
}

export default function AccessibilityPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">הצהרת נגישות</h1>
        <p className="text-muted-foreground">
          עדכון אחרון: {new Date().toLocaleDateString("he-IL", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">המחויבות שלנו לנגישות</h2>
          <p>
            {siteConfig.name} מחויב להנגשת האתר לאנשים עם מוגבלויות, בהתאם לתקנות שוויון זכויות 
            לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013 ולתקן הישראלי ת"י 5568.
          </p>
          <p>
            אנו שואפים להבטיח שהאתר שלנו נגיש לכלל המשתמשים, כולל אנשים עם מוגבלויות, 
            בהתאם לתקן הבינלאומי WCAG 2.1 ברמה AA.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">תכונות נגישות באתר</h2>
          <p>האתר כולל תכונות נגישות מתקדמות המאפשרות התאמה אישית:</p>
          <ul>
            <li><strong>הגדלת/הקטנת טקסט:</strong> אפשרות להגדיל או להקטין את גודל הטקסט באתר בטווח 80%-150%</li>
            <li><strong>שינוי ניגודיות:</strong> מצבי ניגודיות גבוהה ונמוכה להתאמה אישית</li>
            <li><strong>ריווח אותיות:</strong> שלוש רמות של ריווח בין אותיות לקריאה נוחה יותר</li>
            <li><strong>גובה שורה:</strong> התאמת המרווח בין שורות לנוחות קריאה מירבית</li>
            <li><strong>מצב כהה:</strong> מעבר בין מצב בהיר לכהה להפחתת עייפות עיניים</li>
            <li><strong>גווני אפור:</strong> הפיכת האתר לשחור-לבן עבור משתמשים עם עיוורון צבעים</li>
            <li><strong>ניווט במקלדת:</strong> תמיכה מלאה בניווט דרך מקלדת בלבד</li>
            <li><strong>תאימות לקורא מסך:</strong> האתר תואם לתוכנות קורא מסך כגון JAWS ו-NVDA</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">כיצד להשתמש בתפריט הנגישות</h2>
          <p>
            תפריט הנגישות זמין בכל עמוד באתר. לחצו על הכפתור העגול עם סמל הנגישות 
            בפינה השמאלית התחתונה של המסך כדי לפתוח את תפריט האפשרויות.
          </p>
          <p>
            כל ההגדרות שתבחרו יישמרו אוטומטית ויחולו בכל ביקור עתידי באתר.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">תאימות לדפדפנים ותוכנות מסייעות</h2>
          <p>האתר נבדק ותואם לעבודה עם:</p>
          <ul>
            <li>דפדפנים מודרניים: Chrome, Firefox, Safari, Edge</li>
            <li>קוראי מסך: JAWS, NVDA, VoiceOver</li>
            <li>תוכנות הגדלה: ZoomText, MAGic</li>
            <li>ניווט במקלדת בלבד</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">תהליך ההנגשה</h2>
          <p>
            האתר עבר הנגשה מקיפה הכוללת:
          </p>
          <ul>
            <li>התאמה לתקנים הבינלאומיים WCAG 2.1 ברמה AA</li>
            <li>בדיקות ידניות עם תוכנות מסייעות</li>
            <li>בדיקות אוטומטיות לזיהוי בעיות נגישות</li>
            <li>עדכונים שוטפים לשמירה על תאימות</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">מגבלות ידועות</h2>
          <p>
            למרות מאמצינו להנגיש את כל חלקי האתר, ייתכנו מגבלות מסוימות:
          </p>
          <ul>
            <li>תוכן וידאו או אודיו חיצוני עשוי להיות בעל מגבלות נגישות משלו</li>
            <li>קישורים לאתרי צד שלישי (פלטפורמות סטרימינג) אינם בשליטתנו</li>
          </ul>
          <p>
            אנו עובדים באופן שוטף על שיפור הנגישות בכל חלקי האתר.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">משוב ותלונות נגישות</h2>
          <p>
            אנו מעריכים משוב ופונים לשיפור מתמיד של הנגישות באתר. אם נתקלתם בבעיית נגישות 
            או מכשול כלשהו בשימוש באתר, אנא פנו אלינו:
          </p>
          <ul>
            <li>דוא"ל: <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">{siteConfig.contactEmail}</a></li>
            <li>דף יצירת קשר: <Link href="/contact" className="text-primary hover:underline">צור קשר</Link></li>
          </ul>
          <p>
            אנו מתחייבים להגיב לכל פניה בנושא נגישות תוך 7 ימי עבודה ולפעול לפתרון הבעיה 
            בהקדם האפשרי.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">רכז נגישות</h2>
          <p>
            למידע נוסף על נגישות האתר או לדיווח על בעיות נגישות, ניתן לפנות לרכז הנגישות שלנו:
          </p>
          <p>
            דוא"ל: <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline font-medium">
              {siteConfig.contactEmail}
            </a>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">עדכוני נגישות</h2>
          <p>
            הצהרת נגישות זו עודכנה לאחרונה ב-{new Date().toLocaleDateString("he-IL", { month: "long", day: "numeric", year: "numeric" })}.
            אנו מבצעים בדיקות נגישות באופן שוטף ומעדכנים את האתר לפי הצורך.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">קישורים נוספים</h2>
          <p>למידע נוסף על נגישות דיגיטלית בישראל:</p>
          <ul>
            <li>
              <a 
                href="https://www.gov.il/he/departments/policies/net_zchuyot_accessibility" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                אתר משרד המשפטים - נגישות דיגיטלית
              </a>
            </li>
            <li>
              <a 
                href="https://www.isoc.org.il/accessibility" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                האגודה הישראלית לאינטרנט - נגישות
              </a>
            </li>
          </ul>
        </section>
      </div>
    </LegalLayout>
  )
}
