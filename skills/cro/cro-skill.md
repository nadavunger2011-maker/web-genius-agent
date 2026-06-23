# Skill: CRO — Conversion Rate Optimization

## מתי להשתמש
כשרוצים להעלות את אחוז ההמרה — בלי להוציא יותר כסף על פרסום.

---

## מתודולוגיית CRO

### התהליך הנכון
```
1. Research (לא לדלג על זה!)
   ↓
2. Hypothesis (מה אנחנו בודקים ולמה?)
   ↓
3. Prioritization (ICE Score)
   ↓
4. Test
   ↓
5. Analyze
   ↓
6. Iterate
```

### ICE Score לתעדוף
| שיפור | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score |
|-------|--------------|-------------------|-------------|-----------|
| שינוי CTA | 8 | 9 | 9 | 26 |
| A/B headline | 7 | 7 | 8 | 22 |
| Redesign checkout | 9 | 5 | 3 | 17 |

---

## Research — איפה מוצאים מה לתקן

### כמותי (מה קורה)
- **GA4 Funnel** — איפה נושרים?
- **Heatmaps** — איפה לוחצים? מה מפספסים?
- **Session Recordings** — Hotjar / Clarity

### איכותי (למה קורה)
- **Exit surveys** — "מה מנע ממך לרכוש?"
- **Customer interviews** — 5 שיחות = יותר insights מ-500 surveys
- **Reviews mining** — קרא ביקורות של מתחרים

---

## דף מוצר — הסדר הנכון

```
Hero Image (גדול, איכותי, על רקע לבן)
↓
H1 — שם מוצר + תועלת עיקרית
↓
Rating Stars + מספר ביקורות (קישור לביקורות)
↓
מחיר (+ compare at price אם יש מבצע)
↓
Variants (Size, Color) — ויזואלי, לא dropdown
↓
[CTA ראשי] — "הוסף לסל" — בולט, מעל fold
↓
Trust Signals — משלוח חינם | החזרה ב-30 יום | מאובטח
↓
Short Description — 3 bullet points, תועלות בלבד
↓
Accordion — פרטים מלאים | מידות | שאלות נפוצות
↓
ביקורות לקוחות (עם תמונות!)
↓
מוצרים קשורים / Upsell
```

---

## Checkout Optimization

### נקודות נשירה שכיחות
1. **Forced account creation** — הוסף Guest Checkout
2. **Shipping costs surprise** — הצג עלות משלוח מוקדם
3. **מעט אפשרויות תשלום** — הוסף Apple Pay, Google Pay
4. **טפסים ארוכים** — Address autocomplete (Google Places API)
5. **חוסר אמון** — SSL badge, ביקורות, מדיניות החזרה

### Quick Wins בצ'קאאוט
```
✓ Progress bar (שלב 1/3)
✓ אייקוני תשלום (Visa, Mastercard, PayPal)
✓ "הזמנה מאובטחת" ליד CTA
✓ Phone number autocomplete
✓ מדיניות החזרה בפופאפ (לא redirect)
```

---

## A/B Testing — עשה ואל תעשה

### עשה
- בדוק **דבר אחד בכל פעם**
- המתן ל-**statistical significance (95%)**
- הפעל לפחות **2 שבועות** (עונתיות)
- חשב **sample size** לפני שמתחיל

### Sample Size Calculator
```
Baseline CR: 2%
Minimum Detectable Effect: 20% improvement (→ 2.4%)
Confidence: 95%
Power: 80%
→ צריך ~8,000 visitors per variant
```

### אל תעשה
- אל תפסיק טסט אחרי יום כי "רואה תוצאות"
- אל תבדוק בתקופות חריגות (חגים, מבצעים)
- אל תשנה כמה דברים במקביל
