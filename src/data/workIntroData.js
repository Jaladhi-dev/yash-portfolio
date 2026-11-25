import craftGlass600 from '@/assets/images/craft-glass-600.png'
import craftGlass915 from '@/assets/images/craft-glass-915.png'

/**
 * Structured content and responsive media configuration for the Work Intro (3rd) section.
 */
export const WORK_INTRO_DATA = {
  subtitleLines: [
    'From briefs to personal passions, this is a showcase',
    'of my versatile design journey.',
  ],
  headingLines: [
    'Designing across screens,',
    'stories, spaces and',
    'everything in between.',
  ],
  artwork: {
    src: craftGlass915,
    srcSet: `${craftGlass600} 600w, ${craftGlass915} 915w`,
    sizes: '(max-width: 47.99rem) 90vw, 46vw',
    width: 915,
    height: 1024,
    alt: 'Overhead glass of dark coffee casting a warm caustic light refraction onto a white surface',
  },
}
