# Skill: WordPress / Elementor / WooCommerce

## מתי להשתמש
בניה, עריכה, אופטימיזציה של אתרי WordPress עם Elementor ו/או WooCommerce.

---

## ארכיטקטורה מומלצת

```
WordPress Core
├── Theme: Hello Elementor (קל, מהיר, מינימלי)
├── Page Builder: Elementor Pro
├── WooCommerce (אם איקומרס)
├── ACF (Advanced Custom Fields) — שדות מותאמים
└── Plugins מינימליים — כל plugin = עומס
```

---

## Performance — הבעיה הגדולה של WordPress

### מה מאט אתרי WP
1. תמות כבדות (Avada, Divi עם features לא בשימוש)
2. יותר מדי plugins
3. תמונות לא אופטימלות
4. אין Caching
5. Hosting גרוע

### Stack מהיר
```
Hosting: Kinsta / WP Engine / Cloudways
Cache: WP Rocket (שווה את הכסף)
Images: Imagify / ShortPixel (WebP אוטומטי)
CDN: Cloudflare (חינם)
DB Optimization: WP-Optimize
```

---

## Elementor — טיפים מתקדמים

### Custom CSS בElement
```css
/* ב-Advanced → Custom CSS של כל element */
selector {
  font-family: 'Heebo', sans-serif;
  line-height: 1.6;
}

/* Mobile breakpoint */
@media (max-width: 767px) {
  selector {
    font-size: 16px;
  }
}
```

### Global Colors & Fonts (חובה!)
- Settings → Site Settings → Global Colors
- Settings → Site Settings → Global Fonts
- **לא** לקדד צבעים ישירות בelements — שנה פעם אחת, משפיע בכל מקום

### Dynamic Content
```
Elementor Pro → Dynamic Tags:
- Post Title → כותרת אוטומטית
- Post Excerpt → תיאור קצר
- WooCommerce Price → מחיר מוצר
- ACF Field → כל שדה מותאם
```

---

## WooCommerce — הגדרות קריטיות

### Checkout Optimization
```php
// functions.php — הסר שדות מיותרים מצ'קאאוט
add_filter('woocommerce_checkout_fields', function($fields) {
    unset($fields['billing']['billing_company']);
    unset($fields['billing']['billing_address_2']);
    unset($fields['billing']['billing_state']);
    return $fields;
});

// הוסף Guest Checkout (ודא שמופעל ב-Settings)
// WooCommerce → Settings → Accounts & Privacy
// ✓ Allow customers to place orders without an account
```

### Hooks חשובים
```php
// הוסף תוכן אחרי כפתור "הוסף לסל"
// סף המשלוח החינם והמטבע מגיעים מ-config.json → commerce.freeShippingThreshold / currencySymbol
add_action('woocommerce_after_add_to_cart_button', function() {
    $threshold = get_option('site_config_free_shipping_threshold'); // מוזן מ-config.json
    $currency_symbol = get_option('site_config_currency_symbol');
    echo '<p class="trust-signal">🔒 תשלום מאובטח | 🚚 משלוח חינם מ-' . esc_html($currency_symbol . $threshold) . '</p>';
});

// הוסף תוכן בדף תודה
add_action('woocommerce_thankyou', function($order_id) {
    // GTM dataLayer push, upsell, etc.
});
```

---

## Plugins — מה כן ומה לא

### Core Plugins (חובה)
- **Yoast SEO / RankMath** — SEO
- **WP Rocket** — Cache ו-Performance
- **Wordfence** — אבטחה
- **UpdraftPlus** — Backup

### WooCommerce Plugins (בחר לפי צורך)
- **Klaviyo for WooCommerce** — Email Marketing
- **WooCommerce Subscriptions** — מנויים
- **YITH WooCommerce Wishlist** — רשימת משאלות
- **Cart Abandonment Recovery** — אם אין Klaviyo

### אל תתקין
- Multiple SEO plugins (רק אחד!)
- Page builders מרובים
- Slider plugins כבדים (Revolution Slider וכד')
