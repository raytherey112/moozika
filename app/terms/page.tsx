import type { Metadata } from "next"
import Link from "next/link"
import LegalLayout from "../layout-legal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "תנאי השימוש",
  description: `תנאי השימוש עבור ${siteConfig.name}. קרא את התנאים וההגבלות שלנו.`,
}

export default function TermsPage() {
  return (
    <LegalLayout>
      <div className="prose prose-lg dark:prose-invert">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">תנאי השימוש</h1>
        <p className="text-muted-foreground">
          עדכון אחרון: {new Date().toLocaleDateString("he-IL", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">קבלת התנאים</h2>
          <p>
            בגישה והשימוש ב-{siteConfig.name} ({siteConfig.url}), אתה מסכים ומאשר כי אתה קשור
            בתנאים וההקדמות של הסכם זה. אם אינך מסכים לעמוד בתנאים אלה,
            אנא אל תשתמש באתר זה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">תיאור השירות</h2>
          <p>
            {siteConfig.name} היא אתר המלצות מוזיקה המספק פלייליסטים ומוזיקה
            המלצות אלבומים עבור פעילויות, מצבי רוח ותרחישים ספציפיים. האתר כולל
            קישורים לפלטפורמות סטרימינג מוזיקה של צד שלישי שבהן תוכל להקשיב למוזיקה המומלצת.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">הגנת קניין רוחני</h2>
          <h3 className="font-serif text-xl font-semibold mt-4">התוכן שלנו</h3>
          <p>
            כל התוכן באתר זה, כולל טקסט, גרפיקה, לוגוים, תמונות, והרכבה
            שלהם, הוא רכוש של {siteConfig.name} או ספקי התוכן שלה וגנוי על
            זכויות יוצרים וחוקים נוספים להגנה על קניין רוחני.
          </p>

          <h3 className="font-serif text-xl font-semibold mt-4">מוזיקה של צדדים שלישיים</h3>
          <p>
            אלבומי המוזיקה והפלייליסטים המוצגים באתר שלנו הם רכוש של בעליהם
            זכויות יוצרים בהתאמה. אנחנו לא תובעים בעלות על תוכן המוזיקה. אנחנו מספקים קישורים ל
            פלטפורמות סטרימינג מורשות שבהן תוכל לגשת חוקית למוזיקה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">אחריות המשתמש</h2>
          <p>בעת שימוש באתר שלנו, אתה מסכים שלא:</p>
          <ul>
            <li>תשתמש באתר לכל מטרה בלתי חוקית</li>
            <li>תנסה להשיג גישה לא מורשית לכל חלק מהאתר</li>
            <li>תשתמש בכל אמצעים אוטומטיים לגישה לאתר ללא הרשותנו</li>
            <li>תפריע לפעולה או הפרעה לאתר או לשרתים</li>
            <li>תשכפל, תשכפל, תעתיק, או תמכור מחדש כל חלק מהאתר</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">קישורים לצדדים שלישיים</h2>
          <p>
            האתר שלנו כולל קישורים לאתרי אינטרנט של צדדים שלישיים, במיוחד פלטפורמות סטרימינג מוזיקה
            (Spotify, Apple Music, Amazon Music, YouTube, YouTube Music). אנחנו לא שולטים באתרים אלה ו
            לא אחראים לתוכנם, מדיניות הפרטיות שלהם, או כללי הנוהג שלהם.
          </p>
          <p>
            השימוש שלך באתרי אינטרנט של צדדים שלישיים כפוף לתנאים וההגבלות שלהם בהתאמה.
            אנחנו מעודדים אותך לבדוק את תנאים ומדיניות הפרטיות של כל אתרי צדדים שלישיים שתבקר בהם.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">הבהרת אחריות</h2>
          <p>
            האתר מסופק על בסיס "כמו שהוא" ו"כפי שהוא זמין". אנחנו לא עורכים או
            הצהרות או ערבויות מסוג כלשהו, מפורש או משתמע, לגבי פעולה
            האתר או המידע, התוכן, החומרים או המוצרים הכלולים באתר.
          </p>
          <p>
            אנחנו לא מבטיחים שהאתר יהיה ללא הפרעה, בזמן, בטוח או ללא שגיאות.
            אנחנו לא אחראים לזמינות, איכות או חוקיות של מוזיקה בפלטפורמות סטרימינג של צדדים שלישיים.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">הגבלת אחריות</h2>
          <p>
            במידה המרבית המותרת על ידי חוק, {siteConfig.name} לא תהיה אחראית עבור כל
            נזק ישיר, עקיף, מקרי, מיוחד, כתוצאה, או מעונה, כולל אך לא מוגבל
            לנזקים בגלל הפסדי רווחים, טוב כוונה, שימוש, נתונים, או הפסדים אחרים
            נבעו מ:
          </p>
          <ul>
            <li>השימוש או חוסר היכולת להשתמש באתר</li>
            <li>גישה לא מורשית או שינוי של ההעברות או הנתונים שלך</li>
            <li>הצהרות או התנהגות של כל צד שלישי באתר</li>
            <li>כל עניין אחר הקשור לאתר</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">פיצוי</h2>
          <p>
            אתה מסכים להגן, להגן, ולהגן {siteConfig.name}, הקציניים, המנהלים,
            עובדים, סוכנים, וקשורים מכל דרישה, דרישה, נזק, או הפסד, כולל סביר
            עלויות עריכויות, הנובעות מהשימוש שלך באתר או הפרה של תנאים אלה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">שינויים בתנאים</h2>
          <p>
            אנחנו שומרים על הזכות לשנות תנאים אלה בכל עת. אנחנו נספק הודעה על שינויים משמעותיים על ידי
            הפוסט של תנאים מעודכנים בדף זה ועדכון תאריך "עדכון אחרון".
            השימוש המתמשך שלך באתר לאחר שינויים כאלה מהווה קבלה שלך של התנאים החדשים.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">חוק שלוט</h2>
          <p>
            תנאים אלה יופעלו ויותרגמו בהתאם לחוקים של השיפוט
            כאשר {siteConfig.name} פועלת, ללא שום התייחסות להוראות התנגדות חוק שלה.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold">יצור קשר</h2>
          <p>
            אם יש לך שאלות לגבי תנאים אלה, אנא צור איתנו קשר:
          </p>
          <p className="mt-2">
            <Link href="/contact" className="text-primary hover:underline font-medium underline decoration-primary">
              דף יצור קשר
            </Link>
          </p>
        </section>
      </div>
    </LegalLayout>
  )
}