# Moozika - אתר המלצות מוזיקה בעברית

אתר המלצות מוזיקה אינסטרומנטלית לפעילויות ומצבי רוח שונים, בעברית.

🌐 **כתובת האתר:** [https://moozika.webapp.you](https://moozika.webapp.you)  
📧 **צור קשר:** dmiles.apps@gmail.com

## 📚 מסמכים חשובים

- **[SITE_INFO.md](./SITE_INFO.md)** - מידע מפורט על האתר והגדרות
- **[GOOGLE_SEARCH_CONSOLE_SETUP.md](./GOOGLE_SEARCH_CONSOLE_SETUP.md)** - מדריך מלא להגדרת Google Search Console
- **[SEO_CHECKLIST.md](./SEO_CHECKLIST.md)** - רשימת בדיקה מלאה לSEO
- **[PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md)** - רשימת בדיקה לפני השקת האתר

## תכונות עיקריות

- ✅ **236 כתבות מוזיקה** - המלצות ממוקדות לפעילויות ספציפיות
- ✅ **נגישות מלאה** - תפריט נגישות מתקדם עם WCAG 2.1 AA
- ✅ **עברית מלאה** - כל האתר בעברית, כולל RTL
- ✅ **SEO מותאם** - sitemap, robots.txt, structured data
- ✅ **קישורים לפלטפורמות** - Spotify, Apple Music, Amazon Music, YouTube
- ✅ **דפים משפטיים** - מדיניות פרטיות, תנאי שימוש, הצהרת נגישות
- ✅ **באנר הסכמה לעוגיות** - תואם GDPR ודין ישראלי

## טכנולוגיות

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **TypeScript:** Full type safety
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

זהו פרויקט [Next.js](https://nextjs.org) שנבנה עם [v0](https://v0.app).

## נבנה עם v0

מאגר זה מקושר לפרויקט [v0](https://v0.app). אתה יכול להמשיך בפיתוח על ידי ביקור בקישור למטה — התחל צ'אטים חדשים כדי לבצע שינויים, ו-v0 ידחוף ישירות לפרויקט הזה. כל מיזוג ל-`main` יפורסם אוטומטית.

[המשך לעבוד עם v0 →](https://v0.app/chat/projects/prj_QNt88GgjyYC75nkORGSbV953ipgY)

## התחלה

ראשית, התקן את התלויות:

```bash
npm install
```

אחר כך, הפעל את שרת הפיתוח:

```bash
npm run dev
```

פתח [http://localhost:3000](http://localhost:3000) עם הדפדפן שלך כדי לראות את התוצאה.

## הגדרות אתר

כל ההגדרות הגלובליות של האתר נמצאות ב-`config/site.ts`:

- **כתובת URL:** `https://moozika.webapp.you`
- **אימייל:** `dmiles.apps@gmail.com`
- **שפה:** עברית (he)
- **כיוון:** RTL

## מבנה הפרויקט

```
├── app/                    # Next.js App Router
│   ├── [slug]/            # דפי כתבות דינמיים
│   ├── articles/          # עמוד כל הכתבות
│   ├── about/             # אודות
│   ├── contact/           # צור קשר
│   ├── accessibility/     # הצהרת נגישות
│   ├── privacy/           # מדיניות פרטיות
│   ├── terms/             # תנאי שימוש
│   ├── cookies/           # מדיניות עוגיות
│   ├── layout.tsx         # Layout ראשי
│   └── page.tsx           # דף הבית
├── components/            # קומפוננטות React
│   ├── accessibility-menu.tsx  # תפריט נגישות
│   ├── article-card.tsx        # כרטיס כתבה
│   ├── search-bar.tsx          # חיפוש
│   └── ...
├── config/               # קבצי הגדרות
│   ├── site.ts          # הגדרות אתר גלובליות
│   ├── articles.ts      # כל הכתבות (234+)
│   └── albums.ts        # אלבומי המוזיקה
└── public/              # קבצים סטטיים
    ├── logo.svg         # לוגו האתר
    └── images/          # תמונות
```

## הוספת כתבה חדשה

1. פתח את `config/articles.ts`
2. העתק כתבה קיימת כדוגמה
3. עדכן את השדות:
   - `slug`: כתובת ייחודית (למשל: "music-for-yoga")
   - `searchTerm`: מונח החיפוש בעברית
   - `title`: כותרת הכתבה
   - `albumId`: אלבום מ-`config/albums.ts`
   - `heroImage`: תמונה מ-`/public/images/heroes/`
   - `intro` ו-`sections`: תוכן הכתבה

## SEO

האתר כולל אופטימיזציה מלאה ל-SEO:

- ✅ **Sitemap.xml** - נוצר אוטומטית מכל הכתבות
- ✅ **Robots.txt** - מאפשר סריקה מלאה
- ✅ **Structured Data** - Schema.org (Article, FAQPage, BreadcrumbList)
- ✅ **Meta Tags** - Open Graph, Twitter Cards
- ✅ **Canonical URLs** - כל עמוד עם URL קנוני
- ✅ **Alt Text** - כל התמונות עם תיאור

## נגישות

האתר עומד בתקן WCAG 2.1 רמה AA ועומד בדרישות החוק הישראלי:

- ✅ תפריט נגישות מתקדם
- ✅ תמיכה במקלדת
- ✅ תאימות לקוראי מסך
- ✅ ניגודיות מתאימה
- ✅ גודל טקסט ניתן לשינוי
- ✅ הצהרת נגישות מפורטת

## Scripts

```bash
# פיתוח
npm run dev

# בנייה לפרודקשן
npm run build

# הרצה בפרודקשן
npm start

# בדיקת lint
npm run lint
```

## צור קשר

לשאלות, הצעות או משוב:

- 📧 **Email:** dmiles.apps@gmail.com
- 🌐 **Website:** [https://moozika.webapp.you](https://moozika.webapp.you)
- 📝 **טופס צור קשר:** [https://moozika.webapp.you/contact](https://moozika.webapp.you/contact)

## רישיון

כל הזכויות שמורות © 2026 Moozika

---

Made with ❤️ by Dmiles
