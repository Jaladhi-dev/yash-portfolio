import { ChevronIcon } from '@/components/ui/Icons/ChevronIcon'

import styles from './CircleIconButton.module.css'

/**
 * Reusable accessible circular action button or anchor with directional icon.
 *
 * @param {object} props
 * @param {string} props.ariaLabel - Accessible label describing the action.
 * @param {string} [props.href] - Optional link target; renders `<button>` when omitted.
 * @param {() => void} [props.onClick] - Optional click handler.
 * @param {import('react').ReactNode} [props.icon] - Custom icon node; defaults to `ChevronIcon`.
 * @param {string} [props.className=''] - Optional extra class name.
 * @returns {JSX.Element} Circular button or link element.
 */
export function CircleIconButton({
  ariaLabel,
  href,
  onClick,
  icon,
  className = '',
}) {
  const classes = [styles.button, className].filter(Boolean).join(' ')
  const content = icon ?? <ChevronIcon className={styles.icon} strokeWidth={3.25} />

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
