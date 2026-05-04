# Graph Report - .  (2026-04-11)

## Corpus Check
- Corpus is ~11,734 words - fits in a single context window. You may not need a graph.

## Summary
- 93 nodes · 116 edges · 12 communities detected
- Extraction: 78% EXTRACTED · 21% INFERRED · 1% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `initializePerformanceOptimizations()` - 7 edges
2. `N1kodevv Personal Portfolio Website` - 7 edges
3. `N1kodevv Brand Logo` - 7 edges
4. `N1kodevv Brand Logo` - 7 edges
5. `N1kodevv Brand Identity` - 7 edges
6. `N1kodevv Brand Logo / Favicon` - 6 edges
7. `emailjs-config.js Configuration File` - 5 edges
8. `server.js Express Backend` - 5 edges
9. `EmailJS Setup Guide` - 4 edges
10. `Frontend Stack (HTML5, CSS3, JS ES6+, Vite, GSAP, Font Awesome, PWA)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `server.js Express Backend` --conceptually_related_to--> `emailjs-config.js Configuration File`  [AMBIGUOUS]
  WARP.md → EMAILJS_SETUP.md
- `POST /api/send Endpoint` --conceptually_related_to--> `EmailJS Template Variables (from_name, reply_to, subject, message)`  [INFERRED]
  WARP.md → EMAILJS_SETUP.md
- `N1kodevv Personal Portfolio Website` --conceptually_related_to--> `Sitemap: https://n1kodev.com/sitemap.xml`  [INFERRED]
  WARP.md → robots.txt
- `N1kodevv Personal Portfolio Website` --conceptually_related_to--> `robots.txt Crawl Policy`  [INFERRED]
  WARP.md → robots.txt

## Hyperedges (group relationships)
- **Contact Form Email System** — warp_api_send, warp_server_js, warp_nodemailer, warp_smtp_config, warp_env_config [EXTRACTED 0.95]
- **EmailJS Integration Configuration** — emailjs_config_js, emailjs_service, emailjs_template, emailjs_public_key [EXTRACTED 1.00]
- **Portfolio Frontend Core Files** — warp_index_html, warp_script_js, warp_style_css, warp_vite, warp_gsap [EXTRACTED 0.90]
- **SEO and Crawl Configuration** — robots_txt, robots_sitemap, robots_allow_all [EXTRACTED 1.00]

## Communities

### Community 0 - "Frontend UI Interactions"
Cohesion: 0.11
Nodes (0): 

### Community 1 - "Site Architecture and SEO"
Cohesion: 0.2
Nodes (11): Crawl Policy: Allow All User-Agents, Sitemap: https://n1kodev.com/sitemap.xml, robots.txt Crawl Policy, Bilingual Portfolio (Georgian/English), Rationale: Static Frontend + Node.js Backend Deployment Split, Frontend Stack (HTML5, CSS3, JS ES6+, Vite, GSAP, Font Awesome, PWA), GSAP Animations Library, WARP.md Project Guidance (+3 more)

### Community 2 - "EmailJS Integration"
Cohesion: 0.31
Nodes (9): emailjs-config.js Configuration File, Contact Form N1kodevv Email Template, EmailJS Free Plan Limits, EmailJS Public Key, Rationale: EmailJS Public Key Client-Side Safety, EmailJS Service, EmailJS Setup Guide, EmailJS Email Template (+1 more)

### Community 3 - "Node.js Backend Server"
Cohesion: 0.32
Nodes (8): GET /api/health Endpoint, POST /api/send Endpoint, Backend Stack (Node.js, Express.js, Nodemailer, CORS), Environment Variables Configuration (.env), Express.js Server, Nodemailer Email Library, server.js Express Backend, SMTP Configuration (Gmail, Outlook, Custom)

### Community 4 - "Logo Design System"
Cohesion: 0.46
Nodes (8): N1kodevv Brand Logo, Microchip / CPU Outline Shape, Circuit Board Motif, Code Angle Brackets, Electric Blue Color (#2196F3 range), Neon Lime Green Color (#8BC34A range), Developer / Tech Brand Identity, Letter N Monogram

### Community 5 - "Brand Logo Variants"
Cohesion: 0.43
Nodes (8): Circuit Board / PCB Motif, Code Angle Brackets, Electric Blue Color (#3333FF approx), Neon Green Color (#00FF33 approx), Letter N Monogram, N1kodevv Brand Logo, Tech / Developer Brand Identity, Transparent Background (No BG)

### Community 6 - "Brand Identity"
Cohesion: 0.39
Nodes (8): N1kodevv Brand Identity, Circuit Board Motif, Code Angle Brackets, Gold/Amber Color (#F5A623 approx), Purple Color (#7B4FBF approx), Developer Portfolio Website, Letter N Monogram, Technology / Software Engineering Identity

### Community 7 - "Performance Optimization"
Cohesion: 0.29
Nodes (7): addCriticalCSS(), initializePerformanceMonitoring(), initializePerformanceOptimizations(), lazyLoadResources(), optimizeCSSDelivery(), optimizeImages(), preloadCriticalResources()

### Community 8 - "Favicon Visual Identity"
Cohesion: 0.48
Nodes (7): Blue Color (#2E9BF5 approx), Circuit Board / PCB Motif, Code Angle Brackets < >, Developer / Tech Portfolio Brand, Lime Green Color (#7FE817 approx), Letter N (Circuit Style), N1kodevv Brand Logo / Favicon

### Community 9 - "Portfolio Core Files"
Cohesion: 0.5
Nodes (4): index.html Main HTML Structure, Portfolio Project Filtering System, script.js Frontend JavaScript, style.css Stylesheet

### Community 10 - "Email Transport Layer"
Cohesion: 0.67
Nodes (0): 

### Community 11 - "EmailJS Config File"
Cohesion: 1.0
Nodes (0): 

## Ambiguous Edges - Review These
- `emailjs-config.js Configuration File` → `server.js Express Backend`  [AMBIGUOUS]
  WARP.md · relation: conceptually_related_to

## Knowledge Gaps
- **14 isolated node(s):** `Rationale: EmailJS Public Key Client-Side Safety`, `EmailJS Free Plan Limits`, `Crawl Policy: Allow All User-Agents`, `WARP.md Project Guidance`, `Vite Build Tooling` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `EmailJS Config File`** (1 nodes): `emailjs-config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `emailjs-config.js Configuration File` and `server.js Express Backend`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `N1kodevv Personal Portfolio Website` connect `Site Architecture and SEO` to `Node.js Backend Server`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `server.js Express Backend` connect `Node.js Backend Server` to `EmailJS Integration`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `Backend Stack (Node.js, Express.js, Nodemailer, CORS)` connect `Node.js Backend Server` to `Site Architecture and SEO`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `N1kodevv Personal Portfolio Website` (e.g. with `robots.txt Crawl Policy` and `Sitemap: https://n1kodev.com/sitemap.xml`) actually correct?**
  _`N1kodevv Personal Portfolio Website` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `N1kodevv Brand Identity` (e.g. with `Developer Portfolio Website` and `Technology / Software Engineering Identity`) actually correct?**
  _`N1kodevv Brand Identity` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Rationale: EmailJS Public Key Client-Side Safety`, `EmailJS Free Plan Limits`, `Crawl Policy: Allow All User-Agents` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._