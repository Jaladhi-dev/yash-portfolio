import legacyWall960 from '@/assets/images/legacy-wall-960.jpg'
import legacyWall1600 from '@/assets/images/legacy-wall-1600.jpg'
import legacyWall1920 from '@/assets/images/legacy-wall-1920.jpg'
import legacyWall2560 from '@/assets/images/legacy-wall-2560.jpg'
import mascotPeek from '@/assets/images/mascot-peek.png'

/**
 * Structured content, category cards, and responsive backdrop for the 5th screen.
 */
export const PROJECTS_HUB_DATA = {
  headingLabel: 'Selected design categories and projects',
  background: {
    src: legacyWall1920,
    srcSet: `${legacyWall960} 960w, ${legacyWall1600} 1600w, ${legacyWall1920} 1920w, ${legacyWall2560} 2560w`,
    sizes: '100vw',
    width: 1920,
    height: 1080,
  },
  categories: [
    {
      id: 'graphic-visuals',
      slot: 'topLeft',
      titleLines: ['Graphic Visuals'],
      subtitleLines: ['Coz good ideas deserve good visuals.'],
      href: '#graphic-visuals',
      hoverAngle: '-1.5deg',
    },
    {
      id: 'illustrations',
      slot: 'topRight',
      titleLines: ['Illustrations'],
      subtitleLines: ['a place where i draw out my thoughts.'],
      href: '#illustrations',
      hoverAngle: '1.5deg',
      peekAsset: {
        src: mascotPeek,
        width: 474,
        height: 394,
      },
    },
    {
      id: 'interfaces-designed',
      slot: 'bottomLeft',
      titleLines: ['Interfaces', 'Designed'],
      subtitleLines: [
        'to make complex tasks simpler, clearer',
        'and easier to navigate.',
      ],
      href: '#interfaces-designed',
      hoverAngle: '1.25deg',
    },
    {
      id: 'proud-projects',
      slot: 'bottomRight',
      titleLines: ['& some very', 'proud projects'],
      subtitleLines: [
        'Exploring ideas across product, service',
        'and interaction design.',
      ],
      href: '#proud-projects',
      hoverAngle: '-1.5deg',
    },
  ],
}
