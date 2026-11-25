import { ChevronIcon } from '@/components/ui/Icons/ChevronIcon'

import styles from './CircleIconButton.module.css'

/**
 * Reusable accessible circular action button, link, or decorative visual indicator.
 *
 * @param {object} props
 * @param {string} [props.ariaLabel] - Accessible label describing the action (required for interactive modes).
 * @param {string} [props.href] - Optional link target; renders `<a>` when provided.
 * @param {() => void} [props.onClick] - Optional click handler.
 * @param {'right' | 'down' | 'left' | 'up'} [props.direction='right'] - Default chevron direction.
 * @param {boolean} [props.decorative=false] - Renders non-interactive `<span>` when nested inside a clickable card.
 * @param {import('react').ReactNode} [props.icon] - Custom icon node; defaults to `ChevronIcon`.
 * @param {string} [props.className=''] - Optional extra class name.
 * @returns {JSX.Element} Circular button, link, or decorative indicator element.
 */
export function CircleIconButton({
  ariaLabel,
  href,
  onClick,
  direction = 'right',
  decorative = false,
  icon,
  className = '',
}) {
  const classes = [styles.button, className].filter(Boolean).join(' ')
  const content = icon ?? (
    <ChevronIcon
      direction={direction}
      className={styles.icon}
      strokeWidth={3.25}
    />
  )

  if (decorative) {
    return (
      <span className={classes} aria-hidden="true">
        {content}
      </span>
    )
  }

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
