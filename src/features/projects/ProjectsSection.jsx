import { Container } from '@/components/layout/Container/Container'
import { CategoryCard } from '@/components/ui/CategoryCard/CategoryCard'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage/ResponsiveImage'
import { PROJECTS_HUB_DATA } from '@/data/projectsData'

import styles from './ProjectsSection.module.css'

/**
 * Lazy-loaded 5th screen displaying the "WHAT YOU DO IS YOUR LEGACY!"
 * backdrop with four staggered interactive design category cards.
 *
 * @returns {JSX.Element} Projects hub section.
 */
export function ProjectsSection() {
  const { headingLabel, background, categories } = PROJECTS_HUB_DATA

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-hub-heading"
    >
      <h2 id="projects-hub-heading" className="sr-only">
        {headingLabel}
      </h2>

      <div className={styles.backdrop}>
        <ResponsiveImage
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={background.width}
          height={background.height}
          imgClassName={styles.baseBackdropImg}
          decorative
        />

        <div className={styles.mobileCenterBackdrop} aria-hidden="true">
          <ResponsiveImage
            src={background.src}
            srcSet={background.srcSet}
            sizes="180vw"
            width={background.width}
            height={background.height}
            fit="contain"
            objectPosition="center center"
            decorative
          />
        </div>
      </div>

      <Container size="wide" className={styles.contentLayer}>
        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              titleLines={category.titleLines}
              subtitleLines={category.subtitleLines}
              href={category.href}
              hoverAngle={category.hoverAngle}
              peekAsset={category.peekAsset}
              className={styles[`slot-${category.slot}`]}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection
