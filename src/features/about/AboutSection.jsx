import { Fragment } from 'react'

import { Container } from '@/components/layout/Container/Container'
import { CircleIconButton } from '@/components/ui/CircleIconButton/CircleIconButton'
import { HoverTilt } from '@/components/ui/HoverTilt/HoverTilt'
import { ChevronIcon } from '@/components/ui/Icons/ChevronIcon'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage/ResponsiveImage'
import { Typography } from '@/components/ui/Typography/Typography'
import { ABOUT_DATA } from '@/data/aboutData'

import styles from './AboutSection.module.css'

/**
 * Lazy-loaded About Intro section displaying the statement callout stack,
 * tilted CTA tag, and "This is me" pointer directed at the portrait subject.
 *
 * @returns {JSX.Element} About intro section.
 */
export function AboutSection() {
  const { headingLines, cta, meCallout, background } = ABOUT_DATA

  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-statement-heading"
    >
      <div className={styles.backdrop}>
        <ResponsiveImage
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={background.width}
          height={background.height}
          imgClassName={styles.backdropImage}
          decorative
        />
      </div>

      <div className={styles.scrim} aria-hidden="true" />

      <Container size="wide" className={styles.contentLayer}>
        <div className={styles.inner}>
          <div className={styles.calloutStack}>
            <HoverTilt
              className={styles.whiteBox}
              restAngle="0deg"
              hoverAngle="var(--tilt-subtle-hover)"
            >
              <Typography
                id="about-statement-heading"
                as="h2"
                variant="statement"
                tone="heroInk"
              >
                {headingLines.map((line, idx) => (
                  <Fragment key={line}>
                    <span className={styles.statementLine}>{line}</span>
                    {idx < headingLines.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
              </Typography>
            </HoverTilt>

            <HoverTilt
              as="a"
              className={styles.yellowBox}
              href={cta.href}
              restAngle="var(--tilt-callout)"
              hoverAngle="var(--tilt-callout-hover)"
            >
              <Typography as="span" variant="statementMedium" tone="white">
                {cta.label}
              </Typography>
              <ChevronIcon className={styles.yellowChevron} strokeWidth={3.25} />
            </HoverTilt>
          </div>

          <div className={styles.meArea}>
            <div className={styles.meArrow} aria-hidden="true">
              <ResponsiveImage
                src={meCallout.arrow.src}
                width={meCallout.arrow.width}
                height={meCallout.arrow.height}
                fit="contain"
                decorative
              />
            </div>

            <Typography
              as="p"
              variant="statement"
              tone="white"
              align="center"
              className={styles.meLabel}
            >
              {meCallout.label}
            </Typography>

            <CircleIconButton
              href={meCallout.href}
              ariaLabel={meCallout.ariaLabel}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
