# Project Standards & Strict Engineering Rules (`yash-portfolio`)

> **MANDATORY PRE-FLIGHT RULE:**  
> Before creating, editing, refactoring, or scaffolding **any** file in this repository, every developer and AI agent **MUST** read this `skills.md` file in full and validate the planned work against every rule below. No code may violate these rules unless the user explicitly overrides a specific rule in writing.

---

## 1. Tech Stack & Runtime Baseline

- **Framework:** React 19+ (JavaScript + JSX, ES Modules `"type": "module"`).
- **Bundler:** Vite 8+.
- **Linting:** ESLint 10+ with `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
- **Styling:** Modern CSS (CSS Modules `*.module.css` + global CSS Custom Properties design tokens in `src/styles/`), or explicitly approved utility/CSS-in-zero-runtime solution. Zero runtime CSS-in-JS libraries (no `styled-components` / `emotion`) to protect TBT/INP and bundle size.
- **Target Quality:** Production-grade portfolio achieving **Lighthouse 95–100** across Performance, Accessibility, Best Practices, and SEO.

---

## 2. Strict Folder & File Structure

All source files live under `src/`. Never place components, hooks, or business logic in `public/` or root.

```text
yash-portfolio/
├── public/                        # Static unhashed assets only (favicon, robots.txt, sitemap.xml, og-image.webp)
├── src/
│   ├── assets/                    # Imported/bundled media (optimized SVG icons, AVIF/WebP images, local fonts)
│   │   ├── icons/
│   │   └── images/
│   ├── components/                # Reusable, domain-agnostic UI primitives & shared layout blocks
│   │   ├── ui/                    # Atomic UI controls (Button, Card, Badge, Tag, SectionHeading, Modal)
│   │   │   └── Button/
│   │   │       ├── Button.jsx
│   │   │       └── Button.module.css
│   │   └── layout/                # App shell pieces (Navbar, Footer, Container, SkipLink, PageLoader)
│   ├── features/                  # Domain/section-specific modules (lazy-loadable sections & sub-components)
│   │   ├── hero/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── contact/
│   │       ├── components/        # Sub-components private to this feature
│   │       ├── hooks/             # Hooks private to this feature
│   │       └── ContactSection.jsx # Feature entry component
│   ├── data/                      # Static structured content & portfolio copy (projects.js, experience.js, profile.js)
│   ├── hooks/                     # Shared custom React hooks (useMediaQuery, useScrollSpy, usePrefersReducedMotion)
│   ├── styles/                    # Global design system & base stylesheets
│   │   ├── tokens.css             # All CSS custom properties (colors, typography, spacing, radii, shadows, z-index)
│   │   ├── reset.css              # Modern accessible CSS reset
│   │   └── global.css             # Base typography, utilities (.sr-only, .container), focus-visible defaults
│   ├── utils/                     # Pure, side-effect-free helper functions (formatDate, cn, validators)
│   ├── constants/                 # App-wide constants, routes, breakpoints, SEO metadata defaults
│   ├── App.jsx                    # Root composition, ErrorBoundary, Suspense boundaries
│   └── main.jsx                   # Entry point only (mounts <StrictMode><App /></StrictMode>)
├── index.html                     # Semantic HTML shell, critical meta tags, font preconnects
├── vite.config.js                 # Alias configuration, chunk splitting, build optimization
├── eslint.config.js               # Strict ESLint rules
├── AGENTS.md                      # Enforces reading skills.md before any task
└── skills.md                      # Single source of truth for all project standards
```

### 2.1 File Naming & Export Rules

1. **Components (`*.jsx`):** `PascalCase` matching the exported component name (e.g., `ProjectCard.jsx` exports `ProjectCard`).
2. **Component Styles (`*.module.css`):** `PascalCase` matching its component (e.g., `ProjectCard.module.css`).
3. **Hooks (`use*.js`):** `camelCase` prefixed with `use` (e.g., `useScrollSpy.js`).
4. **Utilities, Data & Constants (`*.js`):** `camelCase` (e.g., `formatDate.js`, `projectsData.js`, `siteConfig.js`).
5. **Named Exports Preferred:** Use **named exports** for all components, hooks, and utilities (`export function Button(...) {}`). Reserve `export default` **only** for lazy-loaded route/section entry modules required by `React.lazy()`.
6. **No Deep Barrel Files (`index.js`):** Avoid `index.js` re-export barrels across `components/` or `utils/` because they hurt Vite tree-shaking and can break `eslint-plugin-react-refresh`. Import directly from the module file using path aliases (e.g., `@/components/ui/Button/Button`).
7. **Feature Encapsulation:** Code inside `src/features/<feature>/` must never import private internals from another feature. Shared code must be promoted to `src/components/`, `src/hooks/`, or `src/utils/`.

---

## 3. Strict React & JavaScript Coding Standards

### 3.1 Component Design & Clean Code

1. **Functional Components Only:** Class components are forbidden except for an `ErrorBoundary` if no library boundary is used.
2. **Single Responsibility & Size Cap:**
   - Keep components focused and under **150 lines**. If a component grows larger, decompose it into sub-components or extract logic into a custom hook.
   - Keep functions/helpers small with shallow nesting (max 2–3 levels); use **early returns** instead of deep `if/else` chains.
3. **Pure Rendering:**
   - Never mutate props, state, or external variables during render.
   - Never trigger side effects (`fetch`, DOM manipulation, timers, `localStorage`) directly in the component body—always use event handlers or `useEffect` (only when synchronizing with an external system).
4. **Props & JSDoc Contracts:**
   - Destructure props directly in the function signature with sensible defaults.
   - Spread props (`{...rest}`) are allowed **only** on atomic UI primitives (`Button`, `Input`) and must never leak invalid DOM attributes.
   - Every reusable component, custom hook, and utility function must include a concise JSDoc comment describing its purpose, parameters (`@param`), and return value (`@returns`).
5. **Derived State Rule:** Never duplicate props or existing state in `useState` + `useEffect`. Compute derived values directly during render.
6. **Keys in Lists:** Never use array `index` as a React `key` for dynamic, filterable, or reorderable lists. Always use stable unique IDs (e.g., `project.id` or `project.slug`).
7. **Data Separation:** Never hardcode long copy arrays, project lists, experience timelines, or social links inside JSX. Store all portfolio content in `src/data/` so UI components remain clean and data-driven.
8. **No Dead Code or Debug Logs:** `console.log`, commented-out JSX blocks, unused imports, and unused CSS classes are strictly forbidden.
9. **React Fast Refresh Compliance:** Files exporting React components must **only** export React components (keep constants/helpers in separate files so Vite HMR stays fast and `react-refresh/only-export-components` passes).

### 3.2 Error Handling & Resilience

1. Wrap major async/lazy sections and the root app in an **ErrorBoundary** with a clean fallback UI.
2. Every `React.lazy` boundary must have a `<Suspense fallback={...}>` whose fallback matches the section's approximate height or skeleton to prevent layout shift (CLS).
3. External links (`target="_blank"`) **must always** include `rel="noopener noreferrer"`.

### 3.3 Import Ordering

Keep imports cleanly grouped in this order (blank line between groups):
1. React / core framework imports (`react`, `react-dom`)
2. Third-party packages (e.g., `lucide-react`)
3. Internal aliases (`@/components/...`, `@/hooks/...`, `@/data/...`, `@/utils/...`)
4. Relative local imports (`./SubComponent`)
5. Stylesheets (`./Component.module.css`)

---

## 4. High-Performance Engineering Rules (Core Web Vitals)

### 4.1 Core Web Vitals Targets

| Metric | Target | Enforcement Rule |
| :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | **< 2.0s** | Hero section renders eagerly (no `React.lazy` on Hero); hero image preloaded with `fetchPriority="high"`. |
| **INP** (Interaction to Next Paint) | **< 100ms** | Keep main thread light; debounce/throttle scroll listeners or prefer `IntersectionObserver`; avoid heavy synchronous work in event handlers. |
| **CLS** (Cumulative Layout Shift) | **0.00** | Explicit `width` & `height` or `aspect-ratio` on every image/media/iframe; `Suspense` fallbacks reserve space; `font-display: swap` with metric-compatible fallback fonts. |

### 4.2 Code Splitting & Bundle Budget

1. **Eager vs. Lazy Loading:**
   - **Above-the-fold** (`Navbar`, `HeroSection`) MUST be bundled eagerly for instant first paint.
   - **Below-the-fold** heavy sections (`ProjectsSection`, `ExperienceSection`, `ContactSection`, modals) SHOULD be code-split with `React.lazy()` + `<Suspense>`.
2. **Dependency Discipline:**
   - Do **not** install heavy libraries (e.g., full `lodash`, `moment`, oversized UI kits, or heavy 3D/animation engines) when native browser APIs (`Intl`, `IntersectionObserver`, CSS animations) or small tree-shakeable packages suffice.
   - Always verify bundle impact with `npm run build` chunk sizes. Initial JS entry chunk (gzipped) should remain lean (target **< 80 KB gzipped** for core portfolio shell).
3. **Vite Optimization:** Configure `resolve.alias` (`@` -> `src`) and clean `manualChunks` in `vite.config.js` to separate `react-vendor` from feature chunks.

### 4.3 Media, SVG & Font Optimization

1. **Image Formats:** Use modern formats (**AVIF** / **WebP**) for raster photos and screenshots. Never commit uncompressed multi-megabyte PNG/JPG files.
2. **Responsive Images & Dimensions:**
   - Every `<img>` MUST define explicit `width` and `height` (or CSS `aspect-ratio`) to prevent CLS.
   - Below-the-fold images MUST use `loading="lazy"` and `decoding="async"`.
   - Above-the-fold hero image MUST NOT use `loading="lazy"` and SHOULD use `fetchPriority="high"` and `decoding="sync"`.
3. **SVGs:** Inline only small UI icons or import via clean SVG components; optimize all SVGs (strip editor metadata, unused `<defs>`, and comments).
4. **Fonts:** Load at most 2 font families (e.g., 1 display/heading + 1 body, or 1 variable sans + 1 mono) with limited weights, `<link rel="preconnect">`, and `font-display: swap`.

### 4.4 Animations & Scroll Performance

1. **GPU-Composited Properties Only:** Animate **only** `transform`, `opacity`, and `filter` (sparingly). Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`.
2. **IntersectionObserver Over Scroll Events:** Use `IntersectionObserver` for scroll-reveal animations and active nav highlighting. Never attach unthrottled `window.scroll` handlers that read layout properties (`offsetTop`, `getBoundingClientRect`).
3. **Reduced Motion:** Every animation and smooth-scroll behavior MUST respect `@media (prefers-reduced-motion: reduce)`.

### 4.5 React Re-render Discipline

1. Keep state as **local** as possible (colocate state in the component that owns it; avoid putting transient UI state like hover or modal open flags at the `App` root).
2. Avoid creating inline object/array literals or anonymous closures when passing props to `React.memo`-wrapped components.
3. Only use `React.memo`, `useMemo`, and `useCallback` where profiling or stable-reference requirements justify them (e.g., expensive filtering, observer callbacks, memoized card grids)—never cargo-cult them everywhere.

---

## 5. Strict UI/UX, Design System & Accessibility Rules

### 5.1 Design System & CSS Tokens (`src/styles/tokens.css`)

1. **Zero Magic Values:** Colors, font sizes, spacing, border radii, shadows, transitions, and z-index layers MUST come from CSS custom properties (`--color-*`, `--space-*`, `--text-*`, `--radius-*`, `--z-*`). Hardcoded hex colors or arbitrary pixel spacings inside feature CSS files are forbidden.
2. **Typography Scale:** Use fluid typography with `clamp()` for headings and readable line lengths (`max-width: 65ch` for body prose; `line-height: 1.5–1.7` for body, `1.1–1.25` for headings).
3. **Spacing & Rhythm:** Follow a consistent 4px/8px spatial grid (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
4. **Visual Restraint:** Maintain clear visual hierarchy, generous whitespace, consistent card geometry, and at most 1 primary accent + 1 subtle secondary accent per theme.
5. **Theme Support:** If dark/light theme is supported, define semantic surface/text tokens (`--color-bg`, `--color-surface`, `--color-text-primary`, `--color-text-muted`, `--color-border`, `--color-accent`) rather than raw color names so theme switching requires zero component CSS changes.

### 5.2 Responsive Design (Mobile-First)

1. Write base CSS for **mobile (320px–480px)** first, then enhance upward with `min-width` media queries (`48rem` / 768px, `64rem` / 1024px, `80rem` / 1280px).
2. Zero horizontal overflow (`scrollWidth <= innerWidth`) at every viewport from `320px` to `1920px`.
3. Touch targets for interactive buttons/links MUST be at least **44×44px** on touch viewports.

### 5.3 Accessibility (WCAG 2.1 AA Mandatory)

1. **Semantic HTML5:** Use `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<article>`, and `<footer>`. Never use clickable `<div>` or `<span>` for actions—use `<button type="button">` for actions and `<a href="...">` for navigation.
2. **Heading Hierarchy:** Exactly **one** `<h1>` per page. Never skip heading levels (`h1` -> `h2` -> `h3`).
3. **Skip Link & Keyboard Navigation:** Include a visually hidden "Skip to main content" link as the first focusable element. Every interactive control must be reachable and operable via keyboard (`Tab`, `Enter`, `Space`, `Escape` for modals/drawers).
4. **Focus Visibility:** Never write `outline: none` without a clear `:focus-visible` ring using a high-contrast design token.
5. **Color Contrast:** Normal text >= **4.5:1**, large text & UI borders/icons >= **3:1**.
6. **Alternative Text:** Meaningful `alt` text on informative images; `alt=""` and `aria-hidden="true"` on purely decorative images/icons. Icon-only buttons MUST have `aria-label`.

### 5.4 SEO & Metadata (`index.html`)

1. Unique, descriptive `<title>` and `<meta name="description">`.
2. Open Graph (`og:title`, `og:description`, `og:type`, `og:image`) and Twitter Card tags.
3. Canonical URL `<link rel="canonical">` and valid JSON-LD `Person` / `WebSite` structured data when deploying.

---

## 6. Mandatory Definition of Done (Verification Checklist)

Before marking **any** feature, component, or change complete:

1. **Standards Audit:** Re-verify against `skills.md` (folder placement, naming, JSDoc, tokens, no hardcoded data in JSX, lazy/eager rules, a11y).
2. **Static Analysis:** Run `npm run lint` — must pass with **0 errors and 0 warnings**.
3. **Production Build:** Run `npm run build` — must succeed cleanly with zero broken imports and healthy chunk sizes.
4. **Runtime & Visual Verification:** Confirm zero console errors/warnings, responsive layout across mobile/tablet/desktop, keyboard tabbing & focus visibility, and `prefers-reduced-motion` safety.
