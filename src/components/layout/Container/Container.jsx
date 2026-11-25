import styles from './Container.module.css'

/**
 * Centered layout container enforcing consistent horizontal gutters and max-width.
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children - Inner content.
 * @param {'default' | 'narrow' | 'wide'} [props.size='default'] - Width constraint preset.
 * @param {string} [props.className=''] - Optional extra class name.
 * @returns {JSX.Element} Container wrapper.
 */
export function Container({ children, size = 'default', className = '' }) {
  const classes = [
    styles.container,
    size === 'narrow' ? styles.narrow : '',
    size === 'wide' ? styles.wide : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
