/**
 * Reusable directional chevron SVG icon.
 *
 * @param {object} props
 * @param {string} [props.className=''] - Optional SVG class name.
 * @param {number} [props.strokeWidth=3] - Stroke thickness.
 * @returns {JSX.Element} Decorative chevron SVG icon.
 */
export function ChevronIcon({ className = '', strokeWidth = 3 }) {
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
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}
