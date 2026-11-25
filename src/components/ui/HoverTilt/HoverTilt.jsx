import styles from './HoverTilt.module.css'

/**
 * Reusable GPU-composited hover tilt/rotate wrapper for cards, callout boxes,
 * and interactive elements. Respects `prefers-reduced-motion`.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as='div'] - Rendered HTML element tag.
 * @param {string} [props.restAngle] - Resting rotation CSS angle (e.g., `'-4.5deg'`).
 * @param {string} [props.hoverAngle] - Hover/focus rotation CSS angle (e.g., `'-1.5deg'`).
 * @param {string} [props.className=''] - Optional extra class name.
 * @param {object} [props.style] - Optional inline style overrides.
 * @param {import('react').ReactNode} props.children - Inner content.
 * @returns {JSX.Element} Element with reusable hover-rotate behavior.
 */
export function HoverTilt({
  as: Component = 'div',
  restAngle,
  hoverAngle,
  className = '',
  style,
  children,
  ...rest
}) {
  const classes = [styles.tilt, className].filter(Boolean).join(' ')
  const tiltVars = {
    ...(restAngle !== undefined ? { '--tilt-rest': restAngle } : null),
    ...(hoverAngle !== undefined ? { '--tilt-hover': hoverAngle } : null),
    ...style,
  }

  return (
    <Component
      className={classes}
      style={Object.keys(tiltVars).length > 0 ? tiltVars : undefined}
      {...rest}
    >
      {children}
    </Component>
  )
}
