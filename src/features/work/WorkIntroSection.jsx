import { Fragment } from 'react'

import { Container } from '@/components/layout/Container/Container'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage/ResponsiveImage'
import { Typography } from '@/components/ui/Typography/Typography'
import { WORK_INTRO_DATA } from '@/data/workIntroData'

import styles from './WorkIntroSection.module.css'

/**
 * Lazy-loaded Work Intro section (3rd screen) pairing the refractive coffee
 * glass artwork with the versatile design journey statement.
 *
 * @returns {JSX.Element} Work intro section.
 */
export function WorkIntroSection() {
  const { subtitleLines, headingLines, artwork } = WORK_INTRO_DATA

  return (
    <section
      id="work"
      className={styles.workIntro}
      aria-labelledby="work-intro-heading"
    >
      <Container size="wide" className={styles.contentLayer}>
        <div className={styles.grid}>
          <div className={styles.textColumn}>
            <Typography as="p" variant="heroSubtitle" tone="heroInk">
              {subtitleLines.map((line, idx) => (
                <Fragment key={line}>
                  <span className={styles.line}>{line}</span>
                  {idx < subtitleLines.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </Typography>

            <Typography
              id="work-intro-heading"
              as="h2"
              variant="statement"
              tone="heroInk"
              className={styles.heading}
            >
              {headingLines.map((line, idx) => (
                <Fragment key={line}>
                  <span className={styles.line}>{line}</span>
                  {idx < headingLines.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </Typography>
          </div>

          <div className={styles.artworkColumn}>
            <div className={styles.artworkFrame}>
              <ResponsiveImage
                src={artwork.src}
                srcSet={artwork.srcSet}
                sizes={artwork.sizes}
                width={artwork.width}
                height={artwork.height}
                alt={artwork.alt}
                fit="contain"
                objectPosition="center bottom"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WorkIntroSection
