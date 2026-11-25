import thisIsMeArrow from '@/assets/icons/this-is-me-arrow.png'
import aboutMeadow960 from '@/assets/images/about-meadow-960.jpg'
import aboutMeadow1600 from '@/assets/images/about-meadow-1600.jpg'
import aboutMeadow1920 from '@/assets/images/about-meadow-1920.jpg'
import aboutMeadow2560 from '@/assets/images/about-meadow-2560.jpg'

/**
 * Structured content and responsive media configuration for the About Intro section.
 */
export const ABOUT_DATA = {
  headingLines: [
    'I turn ideas, problems',
    'and possibilities into',
    'visual experiences.',
  ],
  cta: {
    label: 'Jump to that',
    href: '#work',
  },
  meCallout: {
    label: 'This is me',
    ariaLabel: 'Learn more about me',
    href: '#about-details',
    arrow: {
      src: thisIsMeArrow,
      width: 428,
      height: 270,
    },
  },
  background: {
    src: aboutMeadow1920,
    srcSet: `${aboutMeadow960} 960w, ${aboutMeadow1600} 1600w, ${aboutMeadow1920} 1920w, ${aboutMeadow2560} 2560w`,
    sizes: '100vw',
    width: 1920,
    height: 1080,
  },
}
