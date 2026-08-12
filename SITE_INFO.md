# מידע על האתר - Moozika

## פרטי האתר

### כתובות וקשר
- 🌐 **כתובת האתר:** https://moozika.webapp.you
- 📧 **אימייל צור קשר:** dmiles.apps@gmail.com
- 📧 **אימייל נגישות:** dmiles.apps@gmail.com

### מידע SEO
- **שם האתר:** Moozika
- **תיאור:** אלבומי אינסטרומנטליים מיוחדים לטיפוס, צפייה בכוכבים, תכנות ופעילויות ממוקדות אחרות
- **שפה:** עברית (he)
- **Locale:** he_IL
- **כיוון:** RTL

## קבצים שעודכנו עם הכתובת והאימייל

✅ **config/site.ts** - הגדרות ראשיות
  - `url: "https://moozika.webapp.you"`
  - `contactEmail: "dmiles.apps@gmail.com"`

✅ **app/contact/page.tsx** - דף יצירת קשר
  - כפתור אימייל משתמש ב-`siteConfig.contactEmail`

✅ **app/accessibility/page.tsx** - הצהרת נגישות
  - 2 מקומות עם אימייל רכז נגישות
  - משתמש ב-`siteConfig.contactEmail`

✅ **app/sitemap.ts** - Sitemap XML
  - משתמש ב-`siteConfig.url` לכל הקישורים
  - נוסף דף /accessibility

✅ **app/robots.ts** - Robots.txt
  - משתמש ב-`siteConfig.url` ל-host ו-sitemap

✅ **README.md** - תיעוד
  - עודכן עם כתובת ואימייל
  - מידע מפורט על הפרויקט

## דפים באתר

### דפים ראשיים
- `/` - דף הבית
- `/articles` - כל הכתבות (234+)
- `/about` - אודות
- `/contact` - צור קשר

### דפים משפטיים (בעברית)
- `/accessibility` - הצהרת נגישות ⭐ חדש
- `/privacy` - מדיניות פרטיות
- `/terms` - תנאי שימוש
- `/cookies` - מדיניות עוגיות

### דפים דינמיים
- `/[slug]` - 234+ כתבות מוזיקה

## תכונות נגישות

✅ **תפריט נגישות** - כפתור קבוע שמאל למטה
  - הגדלת/הקטנת טקסט (80%-150%)
  - שינוי ניגודיות (רגילה, גבוהה, נמוכה)
  - ריווח אותיות (רגיל, רחב, רחב מאוד)
  - גובה שורה (רגיל, מרווח, רחוק)
  - מצב כהה/בהיר
  - גווני אפור
  - איפוס הכל

✅ **תקנים**
  - WCAG 2.1 רמה AA
  - תקן ישראלי ת"י 5568
  - תקנות שוויון זכויות 2013

## SEO Features

✅ **Sitemap**
  - `/sitemap.xml`
  - כל הדפים כלולים
  - עדכון אוטומטי

✅ **Robots.txt**
  - `/robots.txt`
  - מאפשר סריקה מלאה
  - מפנה ל-sitemap

✅ **Structured Data**
  - Article Schema
  - FAQPage Schema
  - BreadcrumbList Schema
  - Organization Schema

✅ **Meta Tags**
  - Open Graph
  - Twitter Cards
  - Canonical URLs
  - Meta Description
  - Meta Keywords

## כתבות

📝 **234+ כתבות מוזיקה** בנושאים:
  - מוזיקה לפעילויות (טיפוס, ריצה, קידוד)
  - מוזיקה למצבי רוח
  - פלייליסטים
  - שירים חדשים
  - אלבומים

## טכנולוגיות

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel
- **Icons:** Lucide React

## קישורי מוזיקה

כל כתבה מקושרת לפלטפורמות:
- Spotify
- Apple Music
- Amazon Music
- YouTube
- YouTube Music

## עדכונים אחרונים

✅ 26 כתבות חדשות נוספו
✅ תרגום מלא לעברית
✅ לוגו חדש (O עם אוזניות)
✅ תפריט נגישות מקצועי
✅ הצהרת נגישות מלאה
✅ כתובת ואימייל עודכנו
✅ Footer מעודכן עם כל הקישורים

## הערות חשובות

⚠️ **כל המטא-דאטה משתמשת ב-siteConfig.url**
  - אין צורך לעדכן ידנית בכל מקום
  - שינוי ב-config/site.ts מעדכן הכל

⚠️ **כל האימיילים משתמשים ב-siteConfig.contactEmail**
  - אין צורך לעדכן ידנית בכל מקום
  - שינוי ב-config/site.ts מעדכן הכל

## בדיקות לפני פרסום

- [ ] בדוק שהאתר עובד ב-https://moozika.webapp.you
- [ ] בדוק ש-sitemap נגיש ב-/sitemap.xml
- [ ] בדוק ש-robots.txt נגיש ב-/robots.txt
- [ ] בדוק שתפריט הנגישות פועל
- [ ] בדוק שכל הקישורים בFooter עובדים
- [ ] שלח אימייל בדיקה ל-dmiles.apps@gmail.com
- [ ] בדוק Open Graph tags עם https://www.opengraph.xyz/
- [ ] בדוק נגישות עם WAVE או axe DevTools

---

📅 עדכון אחרון: {new Date().toLocaleDateString("he-IL")}
👨‍💻 מפתח: Dmiles
