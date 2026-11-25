import { Fragment } from 'react'

import { Container } from '@/components/layout/Container/Container'
import { CircleIconButton } from '@/components/ui/CircleIconButton/CircleIconButton'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage/ResponsiveImage'
import { Typography } from '@/components/ui/Typography/Typography'
import { SERIOUS_DATA } from '@/data/seriousData'

import styles from './SeriousSection.module.css'

/**
 * Lazy-loaded 4th screen featuring the yellow canvas, full-width bottom
 * animal cutout pack, playful DynaPuff caption, and "Fine, yes" CTA.
 *
 * @returns {JSX.Element} Serious business transition section.
 */
export function SeriousSection() {
  const { captionLines, cta, artwork } = SERIOUS_DATA

  return (
    <section
      id="serious-business"
      className={styles.serious}
      aria-labelledby="serious-heading"
    >
      <Container size="wide" className={styles.contentLayer}>
        <div className={styles.inner}>
          <div className={styles.captionBlock}>
            <Typography as="p" variant="playful" tone="heroInk">
              {captionLines.map((line, idx) => (
                <Fragment key={line}>
                  <span className={styles.line}>{line}</span>
                  {idx < captionLines.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </Typography>

            <svg
              className={styles.captionLineSvg}
              viewBox="0 0 110 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 4C34 19 72 22 106 16" />
            </svg>
          </div>

          <div className={styles.ctaBlock}>
            <Typography
              id="serious-heading"
              as="h2"
              variant="statement"
              align="center"
              className={styles.ctaText}
            >
              {cta.label}
            </Typography>

            <CircleIconButton
              href={cta.href}
              ariaLabel={cta.ariaLabel}
              direction="down"
              className={styles.ctaButton}
            />
          </div>
        </div>
      </Container>

      <div className={styles.artworkLayer}>
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
            imgClassName={styles.artworkImage}
          />
        </div>
      </div>
    </section>
  )
}

export default SeriousSection
