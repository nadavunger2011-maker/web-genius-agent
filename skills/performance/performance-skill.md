# Skill: Performance & Core Web Vitals

## מתי להשתמש
בעיות מהירות, ציון PageSpeed נמוך, Core Web Vitals כושלים, אתר איטי.

---

## אבחון מהיר

### כלים
1. **PageSpeed Insights** — pagespeed.web.dev (בדוק mobile בלבד!)
2. **WebPageTest** — webpagetest.org (waterfall chart מפורט)
3. **Lighthouse** — ב-Chrome DevTools
4. **GTmetrix** — ברמת waterfall

### מה הציון הנדרש
| ציון | Shopify | WordPress |
|------|---------|-----------|
| טוב | > 60 | > 80 |
| בינוני | 40-60 | 60-80 |
| גרוע | < 40 | < 60 |
*(Shopify נמוך יותר כי Liquid + apps)*

---

## LCP — Largest Contentful Paint

### הבעיה: התמונה הראשית טוענת לאט

```html
<!-- WRONG: תמונה lazy loaded -->
<img src="hero.jpg" loading="lazy" alt="Hero">

<!-- RIGHT: תמונה ראשית ללא lazy loading + preload -->
<link rel="preload" as="image" href="hero.webp">
<img src="hero.webp" loading="eager" fetchpriority="high" alt="Hero">
```

### Shopify — LCP Fix
```liquid
{% comment %} בsection של ה-hero {% endcomment %}
<img
  src="{{ section.settings.image | img_url: '1200x' }}"
  srcset="
    {{ section.settings.image | img_url: '400x' }} 400w,
    {{ section.settings.image | img_url: '800x' }} 800w,
    {{ section.settings.image | img_url: '1200x' }} 1200w
  "
  sizes="100vw"
  loading="eager"
  fetchpriority="high"
  alt="{{ section.settings.image.alt }}"
>
```

---

## CLS — Cumulative Layout Shift

### הבעיה: אלמנטים קופצים בטעינה

```css
/* WRONG: תמונה ללא dimensions */
img { width: 100%; }

/* RIGHT: שמור מקום לתמונה */
img {
  width: 100%;
  aspect-ratio: 16/9; /* או height ידני */
}

/* Fonts — מנע FOUT */
@font-face {
  font-display: optional; /* לא מחכה לfont */
}
```

---

## JavaScript — הרוצח הגדול ביותר

```javascript
// בדוק כמה JS יש:
// DevTools → Network → JS → Sort by Size

// Defer non-critical scripts
<script src="analytics.js" defer></script>

// Async scripts שלא חוסמים render
<script src="chat-widget.js" async></script>
```

### Shopify Apps — Rule of Thumb
כל app מוסיף 50-200ms לטעינה. מעל 5 apps → בעיה.

---

## Images — Quick Wins

```bash
# המרה ל-WebP (חצי גודל, אותה איכות)
# Shopify: אוטומטי עם | img_url
# WordPress: Imagify / ShortPixel plugin

# גדלים נכונים
Hero: 1200px רוחב מקסימום
Product: 800×800px
Thumbnail: 400×400px
Blog: 800px רוחב
```

---

## Caching Strategy

### WordPress
```
WP Rocket Settings:
✓ Page Cache
✓ Browser Caching
✓ GZIP Compression
✓ Minify CSS/JS
✓ Lazy Load Images
✓ Preload Key Requests
```

### Shopify
- Cache אוטומטי על Shopify CDN
- בעיה: Apps עם JavaScript עוקפים cache
- פתרון: בדוק אילו apps באמת נחוצים
