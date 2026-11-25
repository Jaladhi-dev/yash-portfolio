import { SkipLink } from '@/components/layout/SkipLink/SkipLink'
import { HeroSection } from '@/features/hero/HeroSection'

/**
 * Root application component composing landmark layout and portfolio sections.
 *
 * @returns {JSX.Element} Portfolio application root.
 */
export function App() {
  return (
    <>
      <SkipLink targetId="main-content" />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  )
}
