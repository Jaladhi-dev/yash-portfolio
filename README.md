# Yash Portfolio (`yash-portfolio`)

A high-performance, responsive React JS design portfolio built with **React 19**, **Vite 8**, **CSS Modules**, and strict design-token architecture.

> **Engineering Standards:** All code, folder structure, design tokens, accessibility attributes, and performance optimizations in this repository follow [`skills.md`](./skills.md) (enforced via [`AGENTS.md`](./AGENTS.md)). Always review `skills.md` before creating or modifying files.

---

## Tech Stack

- **UI Library:** React 19 (`react`, `react-dom`)
- **Bundler & Dev Server:** Vite 8 (`@vitejs/plugin-react`) with `@` -> `src/` path alias and `react-vendor` chunk splitting
- **Styling:** CSS Modules (`*.module.css`) + CSS Custom Properties (`src/styles/tokens.css`), zero runtime CSS-in-JS
- **Fonts:** Google Fonts (`Parkinsans`, `DM Sans`, `DynaPuff`) loaded with `preconnect` and `font-display: swap`
- **Linting:** ESLint 10 (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

---

## Design System

### Core Palette
| Token | Hex | Role |
| :--- | :--- | :--- |
| `--palette-primary` | `#FED600` | Primary brand gold, CTAs, interactive highlights |
| `--palette-navy` | `#14273B` | Brand headings, dark surfaces, high-contrast ink on gold/light |
| `--palette-white` | `#FFFFFF` | Light canvas, editorial cards, inverse text on dark imagery |
| `--palette-charcoal` | `#1E1E1E` | Dark theme canvas, body ink |

### Typography
- **Headings / Display:** `Parkinsans` (`400`–`800`)
- **Body / Subtitles:** `DM Sans` (`400`–`700`)
- **Playful Accent Copy:** `DynaPuff` (`400`)

---

## Folder Structure

```text
yash-portfolio/
├── public/                        # Static unhashed assets (favicon.svg, icons.svg)
├── src/
│   ├── assets/
│   │   ├── icons/                 # UI illustration assets (this-is-me-arrow.png)
│   │   └── images/                # Responsive compressed srcSet media
│   ├── components/
│   │   ├── layout/                # Container, ParallaxSection, SectionLoader, SkipLink
│   │   └── ui/                    # CategoryCard, CircleIconButton, ErrorBoundary, HoverTilt,
│   │                              # Icons (ChevronIcon), QuoteBlock, ResponsiveImage, Typography
│   ├── constants/                 # Theme keys and configuration (theme.js)
│   ├── data/                      # Structured copy & media configs (heroData, aboutData,
│   │                              # workIntroData, seriousData, projectsData)
│   ├── features/
│   │   ├── hero/                  # Screen 1: HeroSection (eagerly bundled for fast LCP)
│   │   ├── about/                 # Screen 2: AboutSection (lazy-loaded)
│   │   ├── work/                  # Screen 3: WorkIntroSection (lazy-loaded)
│   │   ├── business/              # Screen 4: SeriousSection (lazy-loaded)
│   │   └── projects/              # Screen 5: ProjectsSection (lazy-loaded)
│   ├── hooks/                     # Custom hooks (useParallax, useTheme)
│   ├── styles/                    # Global stylesheets (reset.css, tokens.css, global.css)
│   ├── App.jsx                    # Root composition, ParallaxSection layers, Suspense & ErrorBoundary
│   └── main.jsx                   # Entry point (<StrictMode><App /></StrictMode>)
├── AGENTS.md                      # Mandatory pre-flight agent rule referencing skills.md
├── skills.md                      # Single source of truth for coding, design & perf rules
├── eslint.config.js               # ESLint flat config
├── vite.config.js                 # Vite alias and manual chunk configuration
└── index.html                     # HTML shell, metadata, and Google Fonts preconnects
```

---

## Performance & Accessibility Architecture

- **LCP & Code Splitting:** `HeroSection` is bundled eagerly with `fetchPriority="high"` and `decoding="sync"`, while below-the-fold screens (`AboutSection`, `WorkIntroSection`, `SeriousSection`, `ProjectsSection`) are code-split using `React.lazy()`, `<Suspense>`, `<SectionLoader>` (reserving `100svh` height for `CLS = 0`), and `<ErrorBoundary>`.
- **Responsive Media:** All raster assets use multi-width `srcSet` candidates with explicit `width`/`height` attributes and `loading="lazy"` on below-the-fold sections.
- **GPU-Only Parallax & Interactions:** `useParallax` combines `IntersectionObserver` with `requestAnimationFrame`-gated passive scroll updates, mutating `--parallax-progress` directly on the DOM without React re-renders. `HoverTilt` and `ParallaxSection` animate only `transform` and `opacity` and respect `@media (prefers-reduced-motion: reduce)`.
- **Accessibility:** Semantic HTML5 landmarks (`<main>`, `<section aria-labelledby>`, `<figure>`/`<blockquote>`), keyboard-accessible `SkipLink`, visible `:focus-visible` outlines, and >= 44×44px interactive touch targets.

---

## Getting Started

### Prerequisites
- **Node.js** `20+` (or `22+` LTS)
- **npm** `10+`

### Installation & Local Development
```bash
npm install
npm run dev
```

### Scripts
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Vite development server with HMR |
| `npm run lint` | Run ESLint across the repository (must pass with 0 errors/warnings) |
| `npm run build` | Build production assets into `dist/` |
| `npm run preview` | Preview the production `dist/` build locally |

---

## Verification Workflow

Before committing or pushing any changes, run:

```bash
npm run lint && npm run build
```

Both checks must pass cleanly per [`skills.md`](./skills.md).

---

## Deployment (GitHub Pages)

To auto-deploy `dist/` on every push to `main`:
1. Configure `base` in `vite.config.js` (`'/yash-portfolio/'` for GitHub Pages project URLs, or `'/'` for a custom domain).
2. Add a GitHub Actions workflow (`.github/workflows/deploy.yml`) running `npm ci`, `npm run lint`, `npm run build`, and deploying `dist/` via `actions/deploy-pages`.
3. In GitHub **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
