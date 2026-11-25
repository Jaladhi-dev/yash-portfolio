import { useEffect } from 'react'

/**
 * Tracks a section's scroll progress relative to the viewport and writes
 * `--parallax-progress` (`-1` entering from bottom, `0` aligned at top,
 * `1` scrolled past top) directly to the target element without triggering
 * React re-renders. Uses IntersectionObserver + rAF gating and automatically
 * disables motion when `prefers-reduced-motion: reduce` is enabled.
 *
 * @param {import('react').RefObject<HTMLElement | null>} targetRef - Observed element ref.
 * @param {{ disabled?: boolean }} [options] - Optional configuration flags.
 */
export function useParallax(targetRef, { disabled = false } = {}) {
  useEffect(() => {
    const element = targetRef.current
    if (!element || disabled || typeof window === 'undefined') {
      return undefined
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      element.style.setProperty('--parallax-progress', '0')
      return undefined
    }

    let isVisible = false
    let rafId = 0

    const updateProgress = () => {
      rafId = 0
      const vh = window.innerHeight || 1
      const rect = element.getBoundingClientRect()
      const raw = -rect.top / vh
      const clamped = Math.max(-1, Math.min(1, raw))
      element.style.setProperty('--parallax-progress', clamped.toFixed(4))
    }

    const scheduleUpdate = () => {
      if (!isVisible || rafId !== 0) {
        return
      }
      rafId = window.requestAnimationFrame(updateProgress)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isVisible = Boolean(entry?.isIntersecting)
        if (isVisible) {
          scheduleUpdate()
        }
      },
      { threshold: 0 }
    )

    observer.observe(element)
    updateProgress()

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate, { passive: true })

    const handleMotionChange = (event) => {
      if (event.matches) {
        element.style.setProperty('--parallax-progress', '0')
      }
    }
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      motionQuery.removeEventListener('change', handleMotionChange)
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [targetRef, disabled])
}
