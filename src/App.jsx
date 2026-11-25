import { lazy, Suspense } from 'react'

import { ParallaxSection } from '@/components/layout/ParallaxSection/ParallaxSection'
import { SectionLoader } from '@/components/layout/SectionLoader/SectionLoader'
import { SkipLink } from '@/components/layout/SkipLink/SkipLink'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary/ErrorBoundary'
import { HeroSection } from '@/features/hero/HeroSection'

const AboutSection = lazy(() => import('@/features/about/AboutSection'))
const WorkIntroSection = lazy(() => import('@/features/work/WorkIntroSection'))

/**
 * Root application component composing landmark layout and parallax portfolio pages.
 *
 * @returns {JSX.Element} Portfolio application root.
 */
export function App() {
  return (
    <>
      <SkipLink targetId="main-content" />
      <main id="main-content">
        <ParallaxSection layer={1}>
          <HeroSection />
        </ParallaxSection>

        <ParallaxSection layer={2}>
          <ErrorBoundary>
            <Suspense
              fallback={<SectionLoader label="Loading about section" />}
            >
              <AboutSection />
            </Suspense>
          </ErrorBoundary>
        </ParallaxSection>

        <ParallaxSection layer={3}>
          <ErrorBoundary>
            <Suspense
              fallback={<SectionLoader label="Loading work intro section" />}
            >
              <WorkIntroSection />
            </Suspense>
          </ErrorBoundary>
        </ParallaxSection>
      </main>
    </>
  )
}
