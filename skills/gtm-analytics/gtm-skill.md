# Skill: GTM + Analytics + Tracking

## מתי להשתמש
הקמת מעקב המרות, GTM, GA4, Meta Pixel, אימות tracking.

---

## GTM — מבנה בסיסי

### היררכיה
```
GTM Container
├── Tags (מה לשלוח)
│   ├── GA4 Configuration Tag
│   ├── GA4 Event Tags
│   ├── Google Ads Conversion
│   └── Meta Pixel
├── Triggers (מתי לשלוח)
│   ├── Page View
│   ├── Click - Button
│   ├── Form Submission
│   └── Custom Event (from dataLayer)
└── Variables (מה לשלוח)
    ├── Built-in (Page URL, Click Text)
    ├── Data Layer Variables
    └── Custom JavaScript
```

---

## DataLayer — הבסיס של הכל

### Push בסיסי
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'add_to_cart',
  'ecommerce': {
    'currency': '{{ config.commerce.currencyCode }}', // e.g. 'ILS'
    'value': product.price,
    'items': [{
      'item_id': product.sku,
      'item_name': product.title,
      'category': product.category,
      'price': product.price,
      'quantity': 1
    }]
  }
});
```

### Events קריטיים לאיקומרס
```javascript
// view_item — צפייה בדף מוצר
dataLayer.push({ event: 'view_item', ecommerce: { items: [...] }});

// add_to_cart
dataLayer.push({ event: 'add_to_cart', ecommerce: { items: [...] }});

// begin_checkout
dataLayer.push({ event: 'begin_checkout', ecommerce: { items: [...] }});

// purchase — הכי חשוב!
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: order.id,
    value: order.total,
    currency: '{{ config.commerce.currencyCode }}',
    items: [...]
  }
});
```

---

## GA4 — Setup נכון

### Events שחייבים להיות
1. `page_view` — אוטומטי
2. `session_start` — אוטומטי
3. `view_item_list` — בדף קולקשן
4. `view_item` — בדף מוצר
5. `add_to_cart`
6. `begin_checkout`
7. `add_payment_info`
8. `purchase`

### Conversions — מה לסמן
- `purchase` ← חובה
- `begin_checkout` ← חשוב למדידת נשירה
- `generate_lead` ← לאתרי שירות

---

## Google Ads Conversion Tracking

### Enhanced Conversions (חובה ב-2024)
```html
<!-- בדף תודה / Order Confirmation -->
<script>
gtag('event', 'conversion', {
  'send_to': '{{ config.analytics.googleAdsConversionId }}',
  'value': {{ order.total_price | divided_by: 100.0 }},
  'currency': '{{ config.commerce.currencyCode }}',
  'transaction_id': '{{ order.order_number }}',
  'email': '{{ customer.email }}' // Enhanced Conversion
});
</script>
```

---

## Meta Pixel + CAPI (Server-Side)

### למה CAPI קריטי ב-2024
- iOS 17+ חוסם pixels
- Ad Blockers
- CAPI = שליחה מהשרת, עוקפת הכל

### Shopify — הפעלת CAPI
1. Marketing → Add sales channel → Facebook & Instagram
2. הגדר CAPI בהגדרות הפייסבוק בשופיפיי
3. בדוק Event Match Quality > 7.0

---

## Consent Mode v2 (GDPR)

```javascript
// לפני כל טאג GTM
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});

// אחרי שהמשתמש מסכים
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted'
});
```

---

## אימות — רשימת בדיקות

- [ ] GTM Preview Mode — כל event מופעל?
- [ ] GA4 DebugView — events מגיעים?
- [ ] Google Tag Assistant — תקין?
- [ ] Meta Pixel Helper — events נכונים?
- [ ] Purchase event — לא כפול (deduplication)?
- [ ] Value נכון? (לא שקלים × 100)
- [ ] Transaction ID ייחודי?
