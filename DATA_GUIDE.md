# Portfolio Data Management Guide

## Overview
This entire portfolio content is managed through a single file: `/app/frontend/src/mock.js`

This makes updating your portfolio as simple as editing one file!

---

## Quick Start: How to Update Portfolio

### 1. **Update Personal Information**
Edit `/app/frontend/src/mock.js` → `personal` section

```javascript
personal: {
  name: "Name",
  title: "Title",
  email: "email@example.com",
  location: "City, Country",
  // ... etc
}
```

### 2. **Add Resume**

**Step 1:** Place resume PDF file in `/app/frontend/public/`

Example:
```bash
# Copy resume to the public folder
cp ~/Downloads/my-resume.pdf /app/frontend/public/resume.pdf
```

**Step 2:** Update the resume path in `mock.js`

```javascript
personal: {
  resumeFile: "/resume.pdf",  // Path relative to public folder
  resumeFileName: "Resume.pdf"  // Download filename
}
```

**That's it!** The download button will automatically work.

---

### 3. **Update Stats**

Edit the `stats` array:

```javascript
stats: [
  { 
    label: "Projects Built",     // What you're counting
    value: "15+",                 // The number
    context: "spanning AI systems..."  // Why it matters
  },
  // Add more stats...
]
```

**Pro Tip:** Add context to make numbers meaningful!

---

### 4. **Update Philosophy**

Edit the `philosophy` array (3-5 principles):

```javascript
philosophy: [
  "Your first engineering principle...",
  "Your second principle...",
  "Your third principle..."
]
```

**Pro Tip:** Show HOW you think, not just what you know!

---

### 5. **Update Skills**

Edit the `skills` array:

```javascript
skills: [
  {
    category: "Category Name",
    items: [
      { name: "Skill Name", level: 85 },  // level: 0-100
      // Add more skills...
    ]
  },
  // Add more categories...
]
```

**To add a new skill category:**
1. Copy an existing category structure
2. Update the category name and items
3. Save the file

---

### 6. **Update Projects**

Edit the `projects` array:

```javascript
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Engineering-focused description highlighting problems and tradeoffs",
    tech: ["Tech1", "Tech2", "Tech3"],
    outcomes: [
      "Key outcome 1",
      "Key outcome 2",
      "Key outcome 3"
    ],
    link: "https://github.com/yourusername/project"  // or "#" if no link
  },
  // Add more projects...
]
```

**Pro Tip:** Write projects as engineering stories:
- What was the problem?
- What tradeoffs did you consider?
- What were the outcomes?

Avoid generic feature lists!

---

### 7. **Update Social Links**

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
}
```

---

## File Structure

```
/app/
├── frontend/
│   ├── public/
│   │   └── resume.pdf          ← Place your resume here
│   ├── src/
│   │   ├── mock.js             ← Edit this file to update content
│   │   ├── pages/
│   │   │   └── Portfolio.jsx   ← Don't edit (displays data)
│   │   └── styles/
│   │       └── portfolio.css   ← Don't edit (styling)
│   └── ...
└── DATA_GUIDE.md               ← This file (reference)
```

---

## Common Tasks

### Adding a New Project

1. Open `/app/frontend/src/mock.js`
2. Find the `projects` array
3. Copy an existing project structure
4. Paste it at the end (before the closing `]`)
5. Update the `id` (increment by 1)
6. Update all fields with your project details
7. Save the file

### Removing a Project

1. Open `/app/frontend/src/mock.js`
2. Find the project you want to remove
3. Delete the entire project object (including commas)
4. Save the file

### Updating Your Resume

1. Replace `/app/frontend/public/resume.pdf` with your new resume
2. If you changed the filename, update `resumeFile` in `mock.js`
3. Save and refresh

---

## Testing Your Changes

1. Save `mock.js` after making changes
2. Refresh your browser (the site has hot-reload enabled)
3. Check that your changes appear correctly
4. Test the resume download button

---

## Troubleshooting

**Q: My changes aren't showing up**
- A: Make sure you saved `mock.js` and refreshed your browser
- A: Check the browser console for any errors (F12 → Console tab)

**Q: Resume download isn't working**
- A: Verify the file exists at `/app/frontend/public/resume.pdf`
- A: Check that `resumeFile` path in `mock.js` matches the filename
- A: Refresh the page and try again

**Q: The site looks broken after my changes**
- A: Check `mock.js` for syntax errors (missing commas, brackets, quotes)
- A: Revert to a previous version and make changes more carefully

---

## Best Practices

### ✅ DO:
- Keep descriptions focused on engineering thinking
- Add context to stats (why they matter)
- Update regularly with new projects and skills
- Test resume download after updating
- Use engineering language (problems, tradeoffs, outcomes)

### ❌ DON'T:
- Don't edit `Portfolio.jsx` or `portfolio.css` unless you know React/CSS
- Don't use generic buzzwords without substance
- Don't inflate skill levels unrealistically
- Don't forget to save `mock.js` after changes
- Don't remove required fields (the site might break)

---

## Need Help?

If we need to make changes beyond what's covered here:

1. **Design changes:** Edit `/app/frontend/src/styles/portfolio.css`
2. **Layout changes:** Edit `/app/frontend/src/pages/Portfolio.jsx`
3. **Data structure changes:** Edit both `mock.js` and `Portfolio.jsx`

But for 99% of updates, you only need to edit `mock.js`!

---

**Remember:** Portfolio is a living document. Update it regularly as you:
- Complete new projects
- Learn new skills
- Gain new experiences
- Refine your engineering philosophy