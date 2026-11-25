import { THEME_SWATCHES, THEMES } from '@/constants/theme'
import { useTheme } from '@/hooks/useTheme'

import styles from './App.module.css'

/**
 * Root application shell displaying the active design tokens and font system.
 *
 * @returns {JSX.Element} Portfolio root view.
 */
export function App() {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true" />
            Yash Portfolio
          </span>

          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? THEMES.LIGHT : THEMES.DARK} theme`}
          >
            {isDark ? 'Light Theme' : 'Dark Theme'} ({theme})
          </button>
        </div>
      </header>

      <main id="main-content" className={`container ${styles.main}`}>
        <section className={styles.hero} aria-labelledby="theme-hero-title">
          <span className={styles.eyebrow}>Theme &amp; Typography Ready</span>
          <h1 id="theme-hero-title">
            Design Tokens Built with Parkinsans &amp; DM Sans
          </h1>
          <p className={styles.subtitle}>
            Configured with primary gold (#FED600), deep navy (#14273B), pure
            white (#FFFFFF), and charcoal (#1E1E1E), plus accessible light and
            dark surface tokens.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.primaryButton}>
              Primary Action
            </button>
            <button type="button" className={styles.secondaryButton}>
              Secondary Action
            </button>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="palette-title">
          <div>
            <h2 id="palette-title">Color System</h2>
            <p className={styles.sectionLead}>
              Core brand palette paired with standard neutral and semantic
              status tokens in <code>src/styles/tokens.css</code>.
            </p>
          </div>

          <ul className={styles.swatchGrid}>
            {THEME_SWATCHES.map((swatch) => (
              <li key={swatch.id} className={styles.swatchCard}>
                <div
                  className={styles.swatchPreview}
                  style={{
                    backgroundColor: swatch.swatchBg,
                    color: swatch.swatchText,
                  }}
                >
                  <span>{swatch.hex}</span>
                </div>
                <div className={styles.swatchBody}>
                  <h3 className={styles.swatchTitle}>{swatch.name}</h3>
                  <code className={styles.swatchToken}>{swatch.token}</code>
                  <p className={styles.swatchUsage}>{swatch.usage}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="typography-title">
          <h2 id="typography-title">Typography Pairing</h2>
          <div className={styles.typeGrid}>
            <article className={styles.typeCard}>
              <span className={styles.typeLabel}>
                --font-heading &middot; Parkinsans (400–800)
              </span>
              <p className={styles.typeHeadingSample}>
                Crafting high-performance digital experiences.
              </p>
            </article>
            <article className={styles.typeCard}>
              <span className={styles.typeLabel}>
                --font-body &middot; DM Sans (400–700)
              </span>
              <p className={styles.typeBodySample}>
                Clean, legible body copy optimized for fast rendering, balanced
                line height, and accessible contrast across light and dark
                themes.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}
