# Skill: Shopify — מומחיות מלאה

## מתי להשתמש בסקיל הזה
כשעובדים על חנות Shopify — בין אם זה בניה מאפס, אופטימיזציה, או פתרון בעיות.

---

## ארכיטקטורה של חנות Shopify

### מבנה בסיסי
- **Theme** — Liquid templates (layout, templates, sections, snippets)
- **Products** — Variants, Metafields, Collections
- **Checkout** — מוגבל בעריכה ב-Basic, פתוח ב-Plus
- **Apps** — לא להתמכר. כל app = JavaScript נוסף = איטיות

### Liquid — שפת התבניות
```liquid
{% comment %} לולאה על מוצרים בקולקשן {% endcomment %}
{% for product in collection.products %}
  <div class="product-card">
    <img src="{{ product.featured_image | img_url: '400x' }}" alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
    {% if product.available %}
      <button>{{ 'products.product.add_to_cart' | t }}</button>
    {% else %}
      <p>{{ 'products.product.sold_out' | t }}</p>
    {% endif %}
  </div>
{% endfor %}
```

### Metafields — שדות מותאמים אישית
```liquid
{% comment %} הצגת metafield מותאם {% endcomment %}
{{ product.metafields.custom.ingredients }}
{{ product.metafields.reviews.rating }}
```

---

## Sections & Blocks (Online Store 2.0)

```liquid
{% comment %} section schema לסקשן הניתן לעריכה {% endcomment %}
{% schema %}
{
  "name": "Hero Banner",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "כותרת",
      "default": "{{ config.brand.tagline }}"
    },
    {
      "type": "image_picker",
      "id": "image",
      "label": "תמונה"
    }
  ]
}
{% endschema %}
```

---

## Apps — מה כן ומה לא

### כן להתקין
- **Klaviyo** — email marketing (חובה לאיקומרס)
- **Yotpo / Judge.me** — ביקורות
- **ReConvert** — thank you page optimization
- **Loox** — photo reviews
- **Gempages / Pagefly** — page builder מתקדם

### לא להתקין (יש פתרון native)
- App לספירה לאחור — אפשר ב-JS פשוט
- App לבאנרים — אפשר בsection מותאם
- App לפופאפ exit-intent — Klaviyo עושה את זה

---

## Checkout Optimization (Plus בלבד)
- הוספת trust badges
- Cross-sell products
- Custom fields (gift message, date picker)
- Checkout Extensibility (2024+)

---

## Markets — מכירה בינלאומית
```javascript
// זיהוי שוק נוכחי (locales/currency מוגדרים ב-config.json → platform.locales / commerce.currencyCode)
const market = Shopify.locale;
const currency = Shopify.currency.active;
```

---

## דברים שכל מפתח Shopify חייב לדעת
1. **Never edit theme files directly** — תמיד duplicate ועבוד על קופיה
2. **Section schema** — כל section צריך schema כדי שיהיה editable
3. **Performance** — כל app שמוסיפים — בדוק ב-PageSpeed לפני ואחרי
4. **Liquid limitations** — אין לולאות nested מורכבות, אין math מתקדם — שלח ל-JS
5. **Webhooks** — לאוטומציות, תמיד עדיף webhook על polling
