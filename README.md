# Adithya | Developer Portfolio &amp; Technical Case Studies

A developer portfolio and engineering case study hub built with modern vanilla HTML5, CSS3, and JavaScript, featuring real-time GitHub telemetry, in-depth architectural case studies, responsive glassmorphism, and verified project showcases.

**Live Portfolio**: [https://adi140108.github.io/Portfolio/](https://adi140108.github.io/Portfolio/) &bull; **GitHub**: [@Adi140108](https://github.com/Adi140108)

---

## 🌟 Principal Showcases & Detailed Case Studies

1. **[MediKiosk — AI-Assisted Patient Intake & Triage System](medikiosk.html)**
   - *Domain*: Healthcare Systems / Clinical Intake
   - *Architecture*: Next.js, Python/FastAPI, Firebase Firestore, Gemma 4 12B, Vashini API OCR & Speech, Backblaze B2.
   - *Key Highlights*: Dedicated General OPD and Ayurvedic OPD schemas (Prakriti, Agni, Ama), deterministic clinical red-flag interceptor, two-tier OCR fallback pipeline, and clinician triage briefing dashboard.
   - *Case Study*: [`medikiosk.html`](medikiosk.html)

2. **[IP-Sakti — Traditional Knowledge & IP Discovery](ip-sakti.html)**
   - *Competition*: Smart India Hackathon 2026 (Problem Statement 45 — Internal University Selection Round Qualified).
   - *Domain*: LegalTech / Prior-Art Retrieval & Biopiracy Defense.
   - *Architecture*: Python/FastAPI, Hybrid Vector Retrieval + BM25 Lexical Search, Gemma 4 12B, Firebase Firestore, Backblaze B2.
   - *Key Highlights*: Source-bound RAG generation with zero hallucination, taxonomic nomenclature normalization (Sanskrit &rarr; Latin &rarr; Vernacular), immutable citation chains, and statutory compliance cross-referencing (Biological Diversity Act).
   - *Case Study*: [`ip-sakti.html`](ip-sakti.html)

3. **[CODEWARS 4.0 — Competitive Event Platform](https://codewars-4-0.vercel.app/)**
   - *Live Deployment*: [https://codewars-4-0.vercel.app/](https://codewars-4-0.vercel.app/) &bull; [GitHub Repo](https://github.com/Adi140108/CODEWARS-4.0)
   - *Description*: Interactive competitive coding event portal engineered with a cyber-styled UI, dynamic timelines, registration workflows, and rule guidelines.

4. **[MediMind-Ai](https://github.com/Adi140108/MediMind-Ai)** &bull; **[Sehat-Setu](https://github.com/Adi140108/Sehat-Setu)** &bull; **[Nexora Dashboard](https://github.com/Adi140108/Nexora_Dashboard)**
   - Open-source health advisory tools, community clinic bridges, and administrative telemetry portals.

---

## 🚀 Core Platform Features

- **Cyber Obsidian & Solar Amber Design Token System**: Curated 60-30-10 palette with subtle glassmorphism and WCAG AAA contrast.
- **Dynamic Specialty Typewriter**: Reactive headline cycling through Full-Stack, Flutter, and AI development specialties.
- **Live GitHub Repository Explorer**: Real-time integration with the GitHub REST API (`@Adi140108`) supporting multi-criteria search, language filtering, sort orders, and cached offline fallback.
- **Verified Achievements Timeline**: Grounded milestones covering SIH Internal Qualification (PS-45), GDG TechSprint Hackathon Top 10 (Team BitBros), Nexora Technical Club, and InAmigos Foundation Internship.
- **Asynchronous Formspree Contact Form**: Client-side validation with pre-filled email client fallback, clipboard copy, and interactive feedback.
- **Responsive & Accessible**: Mobile-first layout (360px–1440px), visible focus rings, and strict `prefers-reduced-motion` compliance.

---

## 📁 Repository Structure

```text
Portfolio/
├── index.html         # Main portfolio homepage with featured projects & GitHub explorer
├── medikiosk.html     # Dedicated engineering case study for MediKiosk
├── ip-sakti.html      # Dedicated engineering case study for IP-Sakti (SIH PS-45)
├── style.css          # Master stylesheet (tokens, layout, diagrams, responsive media queries)
├── script.js          # Dynamic controller (GitHub API, search/filters, modal manager, forms)
├── README.md          # Technical documentation & project guide
└── .gitignore         # Clean repository ignore list
```

---

## 💻 Local Development

Run the portfolio locally with any static file server:

```bash
# Using Node.js serve
npx serve . -l 5173

# Or using Python 3
python -m http.server 5173
```

Open `http://localhost:5173` in your browser.

---

## 📄 License

MIT License &copy; 2026 [Adithya](https://github.com/Adi140108).
