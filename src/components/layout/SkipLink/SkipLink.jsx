import styles from './SkipLink.module.css'

/**
 * Keyboard-accessible skip link allowing screen reader and keyboard users
 * to jump directly to main page content.
 *
 * @param {object} props
 * @param {string} [props.targetId='main-content'] - Target landmark element ID.
 * @param {string} [props.label='Skip to main content'] - Accessible link label.
 * @returns {JSX.Element} Skip link anchor.
 */
export function SkipLink({
  targetId = 'main-content',
  label = 'Skip to main content',
}) {
  return (
    <a className={styles.skipLink} href={`#${targetId}`}>
      {label}
    </a>
  )
}
