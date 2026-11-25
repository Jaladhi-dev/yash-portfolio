import { useRef } from 'react'

import { useParallax } from '@/hooks/useParallax'

import styles from './ParallaxSection.module.css'

/**
 * Reusable full-viewport parallax page wrapper creating a seamless edge-to-edge
 * sticky curtain transition and depth veil between consecutive pages.
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children - Section content.
 * @param {number} [props.layer=1] - Stacking z-index order across consecutive pages.
 * @param {boolean} [props.sticky=true] - Pins section at top while the next page slides over.
 * @param {boolean} [props.dimOnExit=true] - Gently dims outgoing page during transition.
 * @param {string} [props.className=''] - Optional extra class name on outer track.
 * @returns {JSX.Element} Parallax page track and frame.
 */
export function ParallaxSection({
  children,
  layer = 1,
  sticky = true,
  dimOnExit = true,
  className = '',
}) {
  const trackRef = useRef(null)
  useParallax(trackRef)

  const trackClasses = [styles.track, className].filter(Boolean).join(' ')
  const frameClasses = [styles.frame, sticky ? styles.sticky : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={trackRef} className={trackClasses} style={{ zIndex: layer }}>
      <div className={frameClasses}>
        {children}
        {dimOnExit ? <div className={styles.veil} aria-hidden="true" /> : null}
      </div>
    </div>
  )
}
