import dogsPack750 from '@/assets/images/dogs-pack-750.png'
import dogsPack1280 from '@/assets/images/dogs-pack-1280.png'
import dogsPack1600 from '@/assets/images/dogs-pack-1600.png'

/**
 * Structured content and responsive cutout artwork configuration for the 4th screen.
 */
export const SERIOUS_DATA = {
  captionLines: [
    'We smell you are here',
    'just for some serious',
    'business',
  ],
  cta: {
    label: 'Fine, yes',
    ariaLabel: 'Continue to selected projects',
    href: '#projects',
  },
  artwork: {
    src: dogsPack1600,
    srcSet: `${dogsPack750} 750w, ${dogsPack1280} 1280w, ${dogsPack1600} 1600w`,
    sizes: '100vw',
    width: 1600,
    height: 888,
    alt: 'Playful close-up group of a cat, dogs, a lamb, and a decorated yak looking into the camera',
  },
}
