# Dip Nalawade — Cybersecurity Portfolio

A responsive single-page cybersecurity portfolio with a light/dark visual system, IBM Plex Mono typography, blue accents, scroll reveals, interactive skill filters, animated project cards, blog-note previews, achievement counters, and a direct one-click resume PDF download.

---

## ⚡ How to Update the Website (Zero Code / Zero Build)

All content is decoupled into a single configuration file: **[`portfolio-data.js`](portfolio-data.js)**.  
**You do not need to edit complex HTML or CSS to update your website.**

Anyone can open `portfolio-data.js` in a text editor to update:
1. **Projects**: Add, delete, or modify titles, descriptions, tech stacks, links, and illustration types (`soar`, `siem`, `network`, `scan`, or custom `imageUrl`).
2. **Skills & Categories**: Add/remove skills with auto-numbering and category counts.
3. **Blog & Field Notes**: Update draft titles, descriptions, and full modal dialog content.
4. **Achievements**: Update TryHackMe stats, honeypot numbers, certifications, or tools.
5. **Experience & Education**: Update dates, titles, descriptions, and bullet points.
6. **Contact & Social Links**: Update email address, LinkedIn URL, GitHub URL, and resume path.

All formatting, styling, animations, 3D card tilts, dialog previews, and theme switching are automatically handled and preserved.

---

## 🚀 Run Locally
Double-click `index.html` or open it in any web browser.  
No Node.js, npm install, or build pipeline is required.

---

## 📂 Project Structure
```
dip-cyber-portfolio-theme-update/
├── index.html          # Semantic HTML shell with clean section containers
├── portfolio-data.js   # Single source of truth for all content and data
├── script.js           # Rendering engine, theme switch, 3D tilt & observers
├── style.css           # Design tokens, layouts, light/dark themes & animations
├── README.md           # Documentation & instructions
└── assets/
    └── Dip-Nalawade-Resume.pdf  # Downloadable PDF resume
```

---

## 🛠️ Deploy to Web
Upload the folder contents to:
- **GitHub Pages**: Push to a repository, go to `Settings` → `Pages` → Select `main` branch root.
- **Netlify / Cloudflare Pages / Vercel**: Drag and drop this folder directly.


### Skill icons

Skill icons are bundled as local SVG files in `assets/skill-icons/`, so they work offline and do not depend on third-party icon CDNs. Each skill entry in `portfolio-data.js` points to its own SVG asset.
