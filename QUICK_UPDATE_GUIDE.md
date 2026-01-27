# 🚀 Quick Portfolio Update Guide

## The Only File You Need to Edit: `/app/frontend/src/mock.js`

Your entire portfolio is driven by data in this one file!

---

## 📋 Most Common Updates

### 1. Update Resume (2 steps)

**Step 1:** Replace the resume file
```bash
# Copy your new resume to public folder
cp ~/path/to/your/resume.pdf /app/frontend/public/resume.pdf
```

**Step 2:** Update filename in `/app/frontend/src/mock.js` (if changed)
```javascript
resumeFile: "/resume.pdf",
resumeFileName: "Your_Name_Resume.pdf"
```

✅ **Done!** Download button works automatically.

---

### 2. Add a New Project

Open `/app/frontend/src/mock.js`, find `projects:` array, and add:

```javascript
{
  id: 4,  // Increment the ID
  title: "Your New Project Name",
  description: "Engineering-focused description with problems and tradeoffs...",
  tech: ["Tech1", "Tech2", "Tech3"],
  outcomes: [
    "Key outcome 1",
    "Key outcome 2",
    "Key outcome 3"
  ],
  link: "https://github.com/username/project"
}
```

💡 **Pro Tip:** Write descriptions that show engineering thinking:
- What problem did you solve?
- What tradeoffs did you consider?
- What were the measurable outcomes?

---

### 3. Update Stats

In `/app/frontend/src/mock.js`, edit the `stats:` array:

```javascript
stats: [
  { 
    label: "Projects Built", 
    value: "15+",  // Update this
    context: "spanning AI, automation, and full-stack"  // And this
  }
]
```

---

### 4. Update Skills

Add/remove/edit in the `skills:` array:

```javascript
{
  category: "New Category Name",
  items: [
    { name: "Skill Name", level: 85 }  // 0-100
  ]
}
```

---

### 5. Update Education

```javascript
education: [
  {
    degree: "Your Degree Name",
    institution: "University/School Name",
    score: "GPA: X.XX or Percentage: XX%",
    year: "Year Range"
  }
]
```

---

### 6. Add Certifications

```javascript
certifications: [
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    link: "https://credential-url.com"
  }
]
```

💡 **Pro Tip:** Leave the array empty if you don't have certifications yet - it will show a nice placeholder!

---

### 7. Update Contact Info

```javascript
personal: {
  email: "newemail@example.com",
  location: "New City, Country",
  availability: "New status message",
  social: {
    github: "https://github.com/newusername",
    linkedin: "https://linkedin.com/in/newusername"
  }
}
```

---

## 🎯 File Locations

```
/app/
├── frontend/
│   ├── public/
│   │   └── resume.pdf          ← Your resume goes here
│   └── src/
│       └── mock.js             ← Edit this for all content
├── DATA_GUIDE.md               ← Detailed documentation
└── QUICK_UPDATE_GUIDE.md       ← This file (quick reference)
```

---

## ⚡ Quick Commands

**View the site:**
```bash
# Already running at http://localhost:3000
```

**Check if resume exists:**
```bash
ls -lh /app/frontend/public/resume.pdf
```

**Edit portfolio data:**
```bash
# Use any editor
nano /app/frontend/src/mock.js
# or
vim /app/frontend/src/mock.js
```

---

## ✅ Testing Checklist

After making changes:

- [ ] Save `/app/frontend/src/mock.js`
- [ ] Refresh browser (hot reload should work)
- [ ] Check all sections for typos
- [ ] Test resume download button
- [ ] Verify all links work

---

## 🐛 Quick Troubleshooting

**Changes not showing?**
- Save `mock.js` and refresh browser
- Check browser console (F12) for errors

**Resume download not working?**
- Verify file exists: `ls /app/frontend/public/resume.pdf`
- Check filename matches `resumeFile` in `mock.js`

**Site looks broken?**
- Check `mock.js` for missing commas or brackets
- Look for syntax errors in the console

---

## 📝 Content Writing Tips

### For Hero Section:
❌ "I build apps with React and Python"
✅ "I design systems where performance and correctness matter"

### For Projects:
❌ "Built an app with cool features"
✅ "Built a system where latency constraints required careful tradeoffs between accuracy and speed"

### For Philosophy:
❌ "I'm passionate about coding"
✅ "I prefer simple architectures that scale over clever solutions that don't"

**Remember:** Show HOW you think, not just what you know!

---

## 🚀 You're All Set!

Most updates take **less than 5 minutes**:
1. Edit `mock.js`
2. Save
3. Refresh
4. Done!

For detailed documentation, see `/app/DATA_GUIDE.md`

---

**Last Updated:** January 2025
