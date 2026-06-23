# Skill: UI/UX — עיצוב ממיר

## עקרון על
**Users don't read, they scan.**
עצב לסורקים, לא לקוראים.

---

## Visual Hierarchy — סדר הסריקה

### F-Pattern (קריאת תוכן)
```
████████████████████  ← שורה ראשונה — קוראים הכל
████████
████████████          ← שורה שנייה — קוראים חלק
████████
████████              ← אחר כך — סורקים שמאל בלבד
```

### Z-Pattern (דפי Landing Page)
```
Logo ────────────────── CTA
         ↘
    Content
         ↙
Social Proof ────── Buy Now
```

---

## Typography — כללים לאתרי E-Commerce

```css
/* מינימום לנוחות קריאה */
body {
  font-size: 16px;
  line-height: 1.6;
  color: #2d2d2d; /* לא שחור מלא — פחות מעיק */
}

h1 { font-size: clamp(28px, 5vw, 48px); }
h2 { font-size: clamp(22px, 4vw, 36px); }
h3 { font-size: clamp(18px, 3vw, 24px); }

/* בעברית */
body { font-family: 'Heebo', 'Rubik', sans-serif; }
```

---

## Color System

```css
:root {
  --color-primary: #1a1a2e;    /* צבע מותג */
  --color-accent: #e94560;      /* CTA, Highlights */
  --color-success: #27ae60;     /* ✓ Trust, In Stock */
  --color-warning: #f39c12;     /* ⚠ Limited, Sale */
  --color-text: #2d2d2d;
  --color-text-light: #6b7280;
  --color-bg: #ffffff;
  --color-bg-light: #f9fafb;
  --color-border: #e5e7eb;
}
```

---

## Mobile UX — נקודות כאב נפוצות

### בעיות שגורמות לנשירה במובייל
1. **Tap targets קטנים מ-44×44px** — אצבע לא מדויקת
2. **Form fields קטנים** — מקלדת מסתירה
3. **Popups שמכסים הכל** — בייחוד עם X קטן
4. **Horizontal scroll** — גורם לבלבול
5. **טקסט קטן מ-16px** — גורם ל-zoom אוטומטי

```css
/* Fix tap targets */
button, a, input, select {
  min-height: 44px;
  min-width: 44px;
}

/* Fix form fields */
input, select, textarea {
  font-size: 16px; /* מונע zoom ב-iOS */
}
```

---

## E-Commerce UX Patterns

### Product Grid
```
Desktop: 3-4 columns
Tablet: 2-3 columns
Mobile: 2 columns (לא 1!)

כל כרטיס:
- תמונה ריבועית (1:1)
- שם מוצר (2 שורות מקסימום)
- מחיר + compare at price
- Quick Add לסל (על hover בdesktop)
```

### Filter & Sort UX
```
Mobile: Filter פאנל מהצד (לא dropdown)
Desktop: Filter בסיידבר שמאל
Sort: תמיד ב-top right
Default sort: Best Selling (לא Newest)
```
