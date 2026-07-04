# 📖 איך לעבוד עם ה-Repo הזה

## מה יש כאן ולמה

זה לא סתם תיקיות — זה "המוח" של הסוכן.
כל קובץ מלמד את ה-AI לחשוב ולדעת כמו מומחה בתחום.

---

## 3 דרכי שימוש

### 1️⃣ Claude Project (הכי מומלץ)
1. כנס ל-claude.ai → Projects → New Project
2. הוסף את `system-prompt/main-system-prompt.md` כ-**Project Instructions**
3. Upload קבצי skills רלוונטיים לכל פרויקט
4. כל שיחה בתוך ה-Project תזכר ותשתמש בידע

### 2️⃣ שיחה בודדת
1. פתח שיחה חדשה עם Claude
2. העתק את ה-System Prompt
3. הוסף את הסקיל הספציפי שצריך ("הנה הידע שלי על SEO: ...")
4. שאל את שאלתך

### 3️⃣ API (מתקדם)
```python
import json
import anthropic

with open('config.json') as f:
    site_config = json.load(f)  # הגדרות המותג/החנות — ראו docs/config-guide.md

with open('system-prompt/main-system-prompt.md') as f:
    system = f.read()

with open('skills/seo/seo-skill.md') as f:
    seo_skill = f.read()

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=4096,
    system=system + "\n\n# Site Config:\n" + json.dumps(site_config, ensure_ascii=False)
                  + "\n\n# SEO Knowledge:\n" + seo_skill,
    messages=[{"role": "user", "content": "בצע אודיט SEO לחנות שלי"}]
)
```

> הערה: מפתחות סודיים (Shopify Admin API token, Meta CAPI access token וכד') לא נכנסים ל-`config.json` — הם צריכים לבוא ממשתני סביבה (`os.environ["SHOPIFY_ADMIN_TOKEN"]`) בסקריפט שמריץ את האינטגרציה בפועל.

---

## איך לעדכן מהנייד

### GitHub Mobile App
1. הורד GitHub App מה-Store
2. פתח את ה-repo
3. לחץ על קובץ → ✏️ (עריכה)
4. ערוך → "Commit changes"
5. זהו!

### github.dev (דפדפן בנייד)
1. היכנס ל-github.com/YOUR_USERNAME/web-genius-agent
2. בURL החלף `github.com` ב-`github.dev`
3. נפתח VS Code בדפדפן — ערוך כל מה שצריך

---

## כללים להוספת ידע חדש

### ✅ כן
- כתוב **למה** לא רק **מה** (הסוכן צריך להבין לוגיקה)
- הוסף דוגמאות קוד / דוגמאות אמיתיות
- ציין מתי **לא** להשתמש בטכניקה מסוימת

### ❌ לא
- אל תעתיק מאמרים שלמים — תמצת ל-insight
- אל תוסיף ידע סותר בלי לציין מה עדיף ומתי
- אל תשאיר דברים ב"TODO" — אם לא מוכן, אל תוסיף

---

## מבנה קובץ Skill תקני

```markdown
# Skill: [שם התחום]

## מתי להשתמש
[מתי להפעיל את הידע הזה]

## [נושא ראשי]
[ידע + דוגמאות]

## [נושא שני]
[ידע + דוגמאות]

## טעויות נפוצות
[מה לא לעשות ולמה]
```
