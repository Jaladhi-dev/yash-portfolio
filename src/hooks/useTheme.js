import { useCallback, useEffect, useState } from 'react'

import { THEME_STORAGE_KEY, THEMES } from '@/constants/theme'

/**
 * Resolves the initial theme from localStorage or system preference.
 *
 * @returns {'light' | 'dark'} Active theme identifier.
 */
function getInitialTheme() {
  if (typeof window === 'undefined') {
    return THEMES.LIGHT
  }

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === THEMES.LIGHT || stored === THEMES.DARK) {
      return stored
    }
  } catch {
    // Ignore storage access restrictions and fall back to media query.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEMES.DARK
    : THEMES.LIGHT
}

/**
 * Manages the active color theme, syncing `data-theme` on `<html>` and persistence.
 *
 * @returns {{
 *   theme: 'light' | 'dark',
 *   isDark: boolean,
 *   toggleTheme: () => void,
 *   setTheme: (nextTheme: 'light' | 'dark') => void
 * }} Theme state and controls.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Ignore storage write errors in restricted browsing contexts.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK))
  }, [])

  return {
    theme,
    isDark: theme === THEMES.DARK,
    toggleTheme,
    setTheme,
  }
}
