import heroMountain960 from '@/assets/images/hero-mountain-960.jpg'
import heroMountain1600 from '@/assets/images/hero-mountain-1600.jpg'
import heroMountain1920 from '@/assets/images/hero-mountain-1920.jpg'
import heroMountain2560 from '@/assets/images/hero-mountain-2560.jpg'

/**
 * Structured content and responsive media configuration for the Home Hero section.
 */
export const HERO_DATA = {
  headingLines: ["This isn't a", 'collection of', 'perfect work.'],
  subtitleLines: [
    "It's a collection of decisions. Some you'll agree with.",
    "Some you won't. That's enough.",
  ],
  quote: {
    text: 'Creativity takes courage.',
    attribution: '-Henri Matisse',
  },
  background: {
    src: heroMountain1920,
    srcSet: `${heroMountain960} 960w, ${heroMountain1600} 1600w, ${heroMountain1920} 1920w, ${heroMountain2560} 2560w`,
    sizes: '100vw',
    width: 1920,
    height: 1080,
    objectPosition: 'center bottom',
  },
}
