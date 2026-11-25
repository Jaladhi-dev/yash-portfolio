const CHEVRON_PATHS = {
  right: 'M9 5l7 7-7 7',
  down: 'M5 9l7 7 7-7',
  left: 'M15 5l-7 7 7 7',
  up: 'M5 15l7-7 7 7',
}

/**
 * Reusable directional chevron SVG icon.
 *
 * @param {object} props
 * @param {'right' | 'down' | 'left' | 'up'} [props.direction='right'] - Arrow orientation.
 * @param {string} [props.className=''] - Optional SVG class name.
 * @param {number} [props.strokeWidth=3] - Stroke thickness.
 * @returns {JSX.Element} Decorative chevron SVG icon.
 */
export function ChevronIcon({
  direction = 'right',
  className = '',
  strokeWidth = 3,
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={CHEVRON_PATHS[direction] ?? CHEVRON_PATHS.right} />
    </svg>
  )
}
