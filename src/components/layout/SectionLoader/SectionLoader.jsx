import styles from './SectionLoader.module.css'

/**
 * Full-section height-reserving Suspense fallback preventing layout shift (CLS).
 *
 * @param {object} props
 * @param {string} [props.label='Loading section'] - Screen reader status label.
 * @returns {JSX.Element} Accessible section placeholder.
 */
export function SectionLoader({ label = 'Loading section' }) {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <span className="sr-only">{label}</span>
    </div>
  )
}
