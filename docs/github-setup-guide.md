# 🚀 מדריך הקמה ראשונית ב-GitHub

## שלב 1 — צור חשבון GitHub
1. כנס ל-github.com
2. Sign up → צור חשבון

## שלב 2 — צור Repository חדש
1. לחץ על **"+"** → **"New repository"**
2. **Repository name:** `web-genius-agent`
3. **Description:** "AI Agent for Web & Ecommerce"
4. ✅ **Public** (כדי לגשת מכל מקום) / Private אם מעדיף
5. ✅ **Add a README file** — השאר מסומן
6. לחץ **"Create repository"**

## שלב 3 — העלה את הקבצים

### אפשרות A: Upload ישירות (הכי פשוט)
1. בדף ה-repo לחץ **"Add file"** → **"Upload files"**
2. גרור את כל התיקיות מהמחשב
3. Commit message: "Initial commit — full agent setup"
4. לחץ **"Commit changes"**

### אפשרות B: Git מהמחשב (דרגה הבאה)
```bash
git clone https://github.com/YOUR_USERNAME/web-genius-agent.git
cd web-genius-agent

# העתק את כל הקבצים לתיקייה
cp -r /path/to/downloaded/files/* .

git add .
git commit -m "Initial commit — full agent setup"
git push origin main
```

## שלב 4 — גישה מהנייד

### GitHub Mobile
1. הורד **GitHub** מה-App Store / Google Play
2. התחבר עם אותו חשבון
3. Your repositories → web-genius-agent
4. עכשיו אפשר לקרוא ולערוך כל קובץ

### עריכה מהנייד בדפדפן
1. פתח github.com/YOUR_USERNAME/web-genius-agent
2. בחר קובץ
3. לחץ ✏️ → ערוך → Commit
