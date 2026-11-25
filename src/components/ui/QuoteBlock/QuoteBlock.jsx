import { Typography } from '@/components/ui/Typography/Typography'

import styles from './QuoteBlock.module.css'

/**
 * Reusable quote and attribution block built with semantic `<figure>` and `<blockquote>`.
 *
 * @param {object} props
 * @param {string} props.quote - Primary quote text.
 * @param {string} props.attribution - Author or source attribution line.
 * @param {'heading' | 'primary' | 'secondary' | 'muted' | 'inverse' | 'heroInk'} [props.tone='primary'] - Semantic ink token.
 * @param {'left' | 'center' | 'right'} [props.align='center'] - Text alignment.
 * @param {string} [props.className=''] - Optional extra class name.
 * @returns {JSX.Element} Accessible quote block.
 */
export function QuoteBlock({
  quote,
  attribution,
  tone = 'primary',
  align = 'center',
  className = '',
}) {
  const classes = [styles.figure, className].filter(Boolean).join(' ')

  return (
    <figure className={classes}>
      <blockquote className={styles.quote}>
        <Typography as="p" variant="heroSubtitle" tone={tone} align={align}>
          {quote}
        </Typography>
      </blockquote>
      <figcaption className={styles.attribution}>
        <Typography as="span" variant="heroSubtitle" tone={tone} align={align}>
          {attribution}
        </Typography>
      </figcaption>
    </figure>
  )
}
