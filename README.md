# 🧠 Web Genius Agent

סוכן AI ברמת גאון לבניית אתרים וחנויות איקומרס.

מכסה: Shopify · WordPress/Elementor/WooCommerce · SEO · CRO · GTM · UI/UX · Copywriting · Email · Canva

---

## 📁 מבנה הפרויקט

```
web-genius-agent/
│
├── system-prompt/          ← הפרומפט הראשי של הסוכן (טען אותו ראשון)
│
├── skills/                 ← ידע מעמיק לפי תחום
│   ├── shopify/            ← Liquid, Apps, Checkout, Markets
│   ├── wordpress/          ← Elementor, WooCommerce, Hooks, Plugins
│   ├── seo/                ← Technical, On-Page, E-Commerce SEO
│   ├── copywriting/        ← Frameworks, Product Pages, Landing Pages
│   ├── ui-ux/              ← Patterns, Wireframes, Design Principles
│   ├── cro/                ← A/B Testing, Heatmaps, Checkout Optimization
│   ├── gtm-analytics/      ← GTM Setup, GA4, Conversions, Meta Pixel
│   ├── email-retention/    ← Klaviyo Flows, Segmentation, Email Design
│   ├── funnel-strategy/    ← TOFU/MOFU/BOFU, Offer Design, LTV
│   ├── canva/              ← Visual Assets, Banners, Product Images
│   └── performance/        ← Core Web Vitals, Speed, Mobile-First
│
├── templates/              ← תבניות מוכנות לשימוש
│   ├── landing-page/       ← מבנה דף נחיתה ממיר
│   ├── product-page/       ← מבנה דף מוצר לאיקומרס
│   └── email-flows/        ← רצפי אימייל (Welcome, Cart, Win-back)
│
├── checklists/             ← רשימות תיוג לפני השקה ואופטימיזציה
│
└── docs/                   ← מדריכים ומסמכים תומכים
```

---

## 🚀 איך מתחילים

### שלב 1 — Clone לנייד או מחשב
```bash
git clone https://github.com/YOUR_USERNAME/web-genius-agent.git
```

### שלב 2 — טען את הסוכן
1. פתח את `system-prompt/main-system-prompt.md`
2. העתק את כל התוכן
3. הדבק אותו כ-System Prompt ב-Claude Project שלך (או בכל AI אחר)

### שלב 3 — הוסף סקילים רלוונטיים
לכל שיחה, הוסף את הסקיל המתאים מתיקיית `skills/` כ-context נוסף.

---

## ✏️ איך מעדכנים מהנייד

**GitHub Mobile App:**
1. פתח קובץ
2. לחץ על עיפרון (✏️)
3. ערוך → Commit changes

**או דרך github.dev (browser):**
1. בדף ה-repo לחץ על `.` (נקודה) — נפתח VS Code בדפדפן
2. ערוך כל מה שצריך
3. שמור ו-commit

---

## 📌 טיפ חשוב

כשמוסיפים ידע חדש לסקיל — תמיד כתבו **למה** לא רק **מה**.
הסוכן מבין לוגיקה עסקית, לא רק הוראות.
