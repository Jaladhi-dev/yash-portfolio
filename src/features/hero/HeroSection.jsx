import { Fragment } from 'react'

import { Container } from '@/components/layout/Container/Container'
import { QuoteBlock } from '@/components/ui/QuoteBlock/QuoteBlock'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage/ResponsiveImage'
import { Typography } from '@/components/ui/Typography/Typography'
import { HERO_DATA } from '@/data/heroData'

import styles from './HeroSection.module.css'

/**
 * Eagerly rendered above-the-fold Home Hero section featuring the full-bleed
 * mountain landscape backdrop, primary statement, and bottom quote.
 *
 * @returns {JSX.Element} Home hero section.
 */
export function HeroSection() {
  const { headingLines, subtitleLines, quote, background } = HERO_DATA

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.backdrop}>
        <ResponsiveImage
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={background.width}
          height={background.height}
          objectPosition={background.objectPosition}
          decorative
          priority
        />
      </div>

      <div className={styles.scrim} aria-hidden="true" />

      <Container size="wide" className={styles.contentLayer}>
        <div className={styles.inner}>
          <div className={styles.statementArea}>
            <div className={styles.statementBlock}>
              <Typography
                id="hero-heading"
                as="h1"
                variant="heroDisplay"
                tone="heroInk"
                className={styles.heading}
              >
                {headingLines.map((line, idx) => (
                  <Fragment key={line}>
                    <span className={styles.headingLine}>{line}</span>
                    {idx < headingLines.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
              </Typography>

              <Typography
                as="p"
                variant="heroSubtitle"
                tone="heroInk"
                className={styles.subtitle}
              >
                {subtitleLines.map((line, idx) => (
                  <Fragment key={line}>
                    <span className={styles.subtitleLine}>{line}</span>
                    {idx < subtitleLines.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
              </Typography>
            </div>
          </div>

          <div className={styles.quoteArea}>
            <QuoteBlock
              quote={quote.text}
              attribution={quote.attribution}
              tone="heroInk"
              align="center"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
