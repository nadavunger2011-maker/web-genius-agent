# Skill: SEO — מומחיות מלאה

## מתי להשתמש
כל שאלה הקשורה לדירוג בגוגל, מבנה אתר, מחקר מילות מפתח, תוכן.

---

## Technical SEO — רשימת עדיפויות

### 1. Crawlability & Indexing
```
# robots.txt לדוגמה לחנות Shopify
User-agent: *
Disallow: /checkout
Disallow: /cart
Disallow: /account
Disallow: /search
Allow: /

Sitemap: https://your-store.com/sitemap.xml
```

### 2. Structured Data (Schema.org)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "שם המוצר",
  "description": "תיאור המוצר",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "ILS",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

### 3. Core Web Vitals — סף קריטי
| מדד | טוב | צריך שיפור | גרוע |
|-----|-----|-----------|------|
| LCP | < 2.5s | 2.5-4s | > 4s |
| INP | < 200ms | 200-500ms | > 500ms |
| CLS | < 0.1 | 0.1-0.25 | > 0.25 |

---

## מחקר מילות מפתח — תהליך

### 1. Seed Keywords
- מה הלקוח מחפש (לא מה שאתה חושב)
- Google Autocomplete, "People Also Ask"
- Ahrefs / Semrush / Google Keyword Planner

### 2. Intent Mapping
| Intent | מה המחפש רוצה | דף מתאים |
|--------|--------------|---------|
| Informational | ללמוד | בלוג, מדריך |
| Commercial | להשוות | קטגוריה, comparison |
| Transactional | לקנות | דף מוצר, landing page |
| Navigational | למצוא מותג | Homepage, About |

### 3. כלל הזהב
**Volume × Intent Match × Competition = Priority**
- מילה עם 500 חיפושים שמתאימה בדיוק > מילה עם 5000 שלא מתאימה

---

## On-Page SEO — תבנית לכל דף

```
Title Tag: [מילת מפתח ראשית] - [ערך/תועלת] | [מותג]
(50-60 תווים)

Meta Description: [מילת מפתח] + [ערך ספציפי] + [CTA]
(150-160 תווים)

H1: רק אחד בדף, כולל מילת מפתח ראשית
H2-H6: מילות מפתח משניות, מבנה הגיוני

URL: /קטגוריה/מילת-מפתח-ראשית
(קצר, ללא תאריכים, ללא מספרים)
```

---

## E-Commerce SEO — נקודות ייחודיות

### בעיות שכיחות
1. **Duplicate content** — אותו מוצר בכמה קולקשנים
   - פתרון: canonical tag לURL הראשי
2. **Thin content** — דפי מוצר עם 50 מילים
   - פתרון: תיאורים של 300+ מילים עם intent
3. **Faceted navigation** — פילטרים יוצרים אלפי URLs
   - פתרון: noindex על פילטרים, canonical

### Shopify ספציפי
```liquid
{% comment %} Canonical tag בshopify {% endcomment %}
<link rel="canonical" href="{{ canonical_url }}">

{% comment %} Hreflang לאתר רב שפה {% endcomment %}
<link rel="alternate" hreflang="he" href="https://site.com/he/">
<link rel="alternate" hreflang="en" href="https://site.com/en/">
```

---

## כלים חיוניים
- **Google Search Console** — בדוק שבועי
- **Ahrefs / Semrush** — מחקר מתחרים, backlinks
- **Screaming Frog** — audit טכני מלא
- **PageSpeed Insights** — Core Web Vitals
- **Schema Validator** — validator.schema.org
