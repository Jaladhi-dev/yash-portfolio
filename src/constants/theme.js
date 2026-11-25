/**
 * Theme storage key and supported theme identifiers.
 */
export const THEME_STORAGE_KEY = 'yash-portfolio-theme'

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

/**
 * Core brand and standard palette swatches for theme configuration and preview.
 */
export const THEME_SWATCHES = [
  {
    id: 'primary',
    name: 'Primary Gold',
    hex: '#FED600',
    token: '--color-primary',
    usage: 'Primary CTAs, highlights, active accents',
    swatchBg: 'var(--palette-primary)',
    swatchText: 'var(--palette-navy)',
  },
  {
    id: 'navy',
    name: 'Deep Navy',
    hex: '#14273B',
    token: '--color-surface-navy',
    usage: 'Brand headings, dark cards, secondary surfaces',
    swatchBg: 'var(--palette-navy)',
    swatchText: 'var(--palette-white)',
  },
  {
    id: 'white',
    name: 'Pure White',
    hex: '#FFFFFF',
    token: '--palette-white',
    usage: 'Light canvas, dark-mode primary typography',
    swatchBg: 'var(--palette-white)',
    swatchText: 'var(--palette-charcoal)',
  },
  {
    id: 'charcoal',
    name: 'Rich Charcoal',
    hex: '#1E1E1E',
    token: '--palette-charcoal',
    usage: 'Dark canvas, light-mode body typography',
    swatchBg: 'var(--palette-charcoal)',
    swatchText: 'var(--palette-white)',
  },
]
