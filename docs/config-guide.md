# ⚙️ config.json — הגדרות המותג/החנות

## מה זה
`config.json` (בשורש הריפו) הוא המקום היחיד שבו יושבים הערכים שמשתנים מלקוח ללקוח: שם המותג, מטבע, סף משלוח חינם, ימי החזרה, צבעי מותג, פונטים, ומזהי אנליטיקס.

כל שאר הריפו (`skills/`, `templates/`) הוא ידע כללי שלא אמור להשתנות בין לקוחות. במקום ערכים קשיחים, הקבצים האלה מפנים לשדות ב-config דרך placeholder בפורמט:

```
{{config.<path>}}
```

לדוגמה `{{config.commerce.currencySymbol}}` → `₪`, `{{config.design.colors.accent}}` → `#e94560`.

## איך יוצרים אתר/חנות חדשה
1. שכפלו את `config.json`.
2. מלאו את הערכים של הלקוח החדש (brand, commerce, design, analytics).
3. אל תגעו ב-`skills/` או ב-`templates/` — הם קוראים מה-config.
4. כשמעבירים את הידע ל-Claude Project / System Prompt, צרפו גם את `config.json` בתור קובץ ראשון — ה-system prompt מנחה את הסוכן לפתור את ה-placeholders מולו לפני שהוא כותב תוכן/קוד ללקוח.

## שדות

| שדה | תיאור |
|---|---|
| `brand.name` | שם המותג/החנות |
| `brand.tagline` | סלוגן |
| `brand.domain` | הדומיין הראשי (לשימוש ב-canonical, hreflang, sitemap) |
| `brand.logoUrl` | קישור ללוגו |
| `brand.language` / `brand.country` | שפת ברירת מחדל ומדינה |
| `platform.type` | `shopify` או `woocommerce` |
| `platform.storeUrl` | כתובת החנות בפלטפורמה |
| `platform.locales` | שפות פעילות (Shopify Markets) |
| `commerce.currencyCode` / `currencySymbol` | קוד ISO ("ILS") וסימן ("₪") |
| `commerce.freeShippingThreshold` | סכום למשלוח חינם |
| `commerce.returnPolicyDays` | ימי החזרה |
| `commerce.orderCutoffTime` | שעת קאט-אוף למשלוח באותו יום |
| `design.colors.*` | פלטת הצבעים של המותג |
| `design.fonts.*` | פונטים לכותרות/גוף |
| `analytics.*` | מזהי GA4 / GTM / Google Ads / Meta Pixel |
| `socialProof.*` | דירוג ומספר ביקורות ברירת מחדל להצגה בדוגמאות |
| `sampleProduct.*` | מוצר לדוגמה שמשמש בתבניות (template) להמחשה בלבד |

## סודות / API keys
`config.json` מיועד לערכים ציבוריים בלבד (מה שגלוי גם ב-HTML/Liquid של האתר עצמו — מזהי GA4/Pixel, צבעים וכו'). **אל תשימו כאן** Shopify Admin API access tokens, מפתחות סודיים של Klaviyo/Meta CAPI וכו'. אלה צריכים להיות משתני סביבה (`SHOPIFY_ADMIN_TOKEN`, `META_CAPI_ACCESS_TOKEN` וכד') בסביבת ההרצה בפועל (השרת/App שמפעיל את האינטגרציה), לא בקובץ שמסונכרן ל-git.
