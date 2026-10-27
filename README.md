# Qualifia Nayyara Ammarani &mdash; Software QA Portfolio

A deployment-ready, executive dark glassmorphic web portfolio tailored for **Software Quality Assurance (QA) Engineer** positions. Built with modern HTML5, CSS3 (Emerald & Teal Assurance theme), and vanilla JavaScript.

---

## 🌟 Key Features

1. **Emerald & Teal Assurance Design System**
   - Executive obsidian dark palette (`#06080e`, `#090d14`) with emerald green (`#10b981`) and teal (`#14b8a6`) ambient glows.
   - Dynamic HTML5 Canvas particles network connecting QA nodes in the background.
   - Glassmorphic navigation bar with scroll state detection and mobile drawer.
   - Interactive 3D tilt hero card featuring Qualifia's professional portrait with floating credential badges.

2. **Interactive QA Workbench (Demo Section)**
   - **Tab 1: OrangeHRM Functional Test Runner & Jira Defect Inspector:**
     - 32 real test cases categorized by Module, Type, Preconditions, Steps, Test Data, and Status.
     - Real-time filters: *All (32)*, *Passed (27)*, *Defects Found (5)*, *Negative/Security*, *UI & Boundary*, *Navigation*.
     - Dynamic Jira Issue Ticket renderer for defects (`QA-OHRM-103`, `QA-OHRM-111`, `QA-OHRM-113`, `QA-OHRM-124`, `QA-OHRM-130`) with severity badges, root cause diagnostics, and QA recommendations.
   - **Tab 2: Datacom Job Simulation & DevTools Telemetry:**
     - Interactive inspection of the *Cinema Finder* map navigation defect (`dispatchMapSnapTo(lat, lng)`).
     - Fullscreen lightbox viewer for the CodeSandbox & Chrome DevTools evidence screenshot.
     - 3-step switcher: Observed Defect & Telemetry, Code Root Cause Analysis (RCA), and QA Verification Matrix.
   - **Tab 3: SIMRS Form Template Data-Mapping Integrity:**
     - Interactive switcher for 4 hospital PDF form templates (Surgical Safety, Discharge Planning, Maternity Monitoring, Medication Instructions).
     - Demonstrating how database field ID mismatches were detected, corrected, and verified with zero clinical data omission.

3. **Flagship Projects & Case Studies**
   - **Human Capital Management (HCM) Web Application:** End-to-end functional QA lifecycle, role-based access testing, and candidate pipeline verification.
   - **Hospital Information System (SIMRS):** 8 printable clinical PDF templates and 5 comprehensive end-user manuals.
   - **Datacom Job Simulation:** Web application review and defect remediation.
   - **AI Entity Extraction in Scientific Articles:** Research paper published at ICICyTA 2025.

4. **Tailored 3-Column Certifications Showcase**
   - Balanced 3-column layout highlighting:
     1. *Jira for Quality Assurance Testing* (Coursera &bull; Oct 2026)
     2. *CompTIA Security+ Preparation Course* (Be Logix &bull; Aug 2024)
     3. *Introduction to Programming with C++* (Be Logix &bull; July 2023)
   - Interactive detail modals with credential IDs, acquired competencies, and syllabus verification.

5. **Contact & WhatsApp Inquiry Engine**
   - Direct links for Email, WhatsApp (`+62 857-9584-8375`), LinkedIn, GitHub, and Location (Bandung, Indonesia).
   - Interactive form that formats and generates automated WhatsApp inquiries with instant toast feedback.

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. **Using Vercel CLI:**
   ```bash
   cd qualifia-qa-portfolio
   npx vercel
   ```
2. **Using Vercel Web Dashboard:**
   - Push this folder to a GitHub repository (e.g. `github.com/qualifia/qa-portfolio`).
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New &rarr; Project**, select your repository, and click **Deploy**.

### Deploying to Netlify
- Drag and drop the `qualifia-qa-portfolio` directory onto [app.netlify.com/drop](https://app.netlify.com/drop).

### Deploying to GitHub Pages
1. Push this folder to `qualifia.github.io` or repository branch `gh-pages`.
2. Under **Settings &rarr; Pages**, choose branch `main` (or `gh-pages`) and root folder `/`.

---

## 📁 Project Structure

```
qualifia-qa-portfolio/
├── index.html                   # Main single-page portfolio layout
├── styles.css                   # Emerald & Teal Assurance CSS design system
├── script.js                    # Interactive logic, QA workbench, modals, canvas
├── vercel.json                  # Clean URL configuration for Vercel
├── README.md                    # Project documentation & deployment guide
└── assets/
    └── images/
        ├── qualifia_profile.png         # Qualifia's formal portrait
        ├── datacom_bug_analysis.png     # Datacom CodeSandbox & DevTools evidence
        └── favicon.png                  # Web browser favicon
```
