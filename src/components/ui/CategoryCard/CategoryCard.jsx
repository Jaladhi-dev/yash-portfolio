import { Fragment } from 'react'

import { CircleIconButton } from '@/components/ui/CircleIconButton/CircleIconButton'
import { HoverTilt } from '@/components/ui/HoverTilt/HoverTilt'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage/ResponsiveImage'
import { Typography } from '@/components/ui/Typography/Typography'

import styles from './CategoryCard.module.css'

/**
 * Reusable portfolio category card combining hover rotation (`HoverTilt`),
 * typography hierarchy, optional peeking mascot illustration, and circular action badge.
 *
 * @param {object} props
 * @param {string[]} props.titleLines - Heading lines rendered inside the card.
 * @param {string[]} props.subtitleLines - Supporting subtitle lines.
 * @param {string} props.href - Target section or route URL.
 * @param {string} [props.hoverAngle='-1.5deg'] - Rotation angle on hover/focus.
 * @param {{ src: string, width: number, height: number }} [props.peekAsset] - Optional decorative character peeking from top-right.
 * @param {string} [props.className=''] - Optional wrapper class name for grid positioning.
 * @returns {JSX.Element} Interactive category card.
 */
export function CategoryCard({
  titleLines,
  subtitleLines,
  href,
  hoverAngle = '-1.5deg',
  peekAsset,
  className = '',
}) {
  const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      {peekAsset ? (
        <div className={styles.peek} aria-hidden="true">
          <ResponsiveImage
            src={peekAsset.src}
            width={peekAsset.width}
            height={peekAsset.height}
            fit="contain"
            decorative
          />
        </div>
      ) : null}

      <HoverTilt
        as="a"
        href={href}
        restAngle="0deg"
        hoverAngle={hoverAngle}
        className={styles.card}
      >
        <div className={styles.content}>
          <Typography as="h3" variant="statement" tone="heroInk">
            {titleLines.map((line, idx) => (
              <Fragment key={line}>
                <span className={styles.line}>{line}</span>
                {idx < titleLines.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </Typography>

          <Typography as="p" variant="heroSubtitle" tone="heroInk">
            {subtitleLines.map((line, idx) => (
              <Fragment key={line}>
                <span className={styles.subtitleLine}>{line}</span>
                {idx < subtitleLines.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </Typography>
        </div>

        <CircleIconButton decorative className={styles.action} />
      </HoverTilt>
    </div>
  )
}
