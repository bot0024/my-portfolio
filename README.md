<div align="center">

# Dip Nalawade — Cybersecurity Portfolio

**SOC operations · SIEM monitoring · Incident response · Security automation**

[**Live site →**](https://bot0024.github.io/my-portfolio/)

[![GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-blue?logo=github)](https://bot0024.github.io/my-portfolio/)
![No build step](https://img.shields.io/badge/build-none-success)
![HTML CSS JS](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-informational)

</div>

---

## About

A responsive single-page portfolio for a cybersecurity graduate focused on SOC operations, SIEM monitoring, threat investigation, and response automation. It showcases hands-on lab work, projects, field notes, and a one-click resume download.

## Features

- Light and dark themes with a consistent design system
- Filterable skills grid with bundled local SVG icons (no third-party icon CDNs)
- Project cards with hover effects and links to each repository
- Field notes with full-text modal previews
- Achievement counters, experience and education timelines
- Direct resume PDF download
- Fully responsive, with scroll-reveal animations

## Featured projects

| Project | Focus |
| --- | --- |
| [SOAR Active Directory Containment Lab](https://github.com/bot0024/soar-ad-containment-lab) | Tines + Jira + Wazuh automated response |
| [SOC Home Lab](https://github.com/bot0024/soc-lab-opensoure) | Threat detection, SIEM and incident response |
| [Global Threat Intelligence with Cloud Honeypots](https://github.com/bot0024/Project-Global-Threat-Intelligence-Analysis-using-Cloud-Based-Honeypots) | T-Pot honeypots and threat analysis |
| [Nmap Network Analyzer](https://github.com/bot0024/nmap-network-analyzer) | Network recon and packet analysis |

## Tech stack

Plain **HTML, CSS and JavaScript**. No framework, no build pipeline, no dependencies.

## Project structure

```text
my-portfolio/
├── index.html            # Page shell and section containers
├── portfolio-data.js     # All editable content (single source of truth)
├── script.js             # Rendering, theme switch, filters, animations
├── style.css             # Design tokens, layout, light/dark themes
├── assets/
│   ├── skill-icons/      # Local SVG skill icons
│   └── Dip-Nalawade-Resume.pdf
└── *.png                 # Project illustrations
```

## Updating the content

Edit **`portfolio-data.js`** only. No HTML or CSS changes are needed.

| To change | Edit |
| --- | --- |
| Name, intro, about text | `profile` |
| Skills and categories | `skills` |
| Projects and links | `projects` |
| Field notes | `blogNotes` |
| Stats and certifications | `achievements` |
| Work history | `experience` |
| Education | `education` |
| Email, GitHub, LinkedIn, resume path | `profile.contact`, `profile.resume` |

To use your own project image, set `imageUrl` on a project to the image path.

## Run locally

Open `index.html` in any browser. Or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

**GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → Branch: `master`, folder `/ (root)`.

Netlify, Cloudflare Pages and Vercel also work: drop in the folder, no build command needed.

## Contact

- Email: [dipnalawade24@gmail.com](mailto:dipnalawade24@gmail.com)
- LinkedIn: [dip-nalawade](https://www.linkedin.com/in/dip-nalawade/)
- GitHub: [bot0024](https://github.com/bot0024)
