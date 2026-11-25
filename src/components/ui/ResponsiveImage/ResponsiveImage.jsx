import styles from './ResponsiveImage.module.css'

/**
 * Performance-optimized responsive image component enforcing explicit dimensions,
 * srcSet delivery, and eager/lazy loading strategy.
 *
 * @param {object} props
 * @param {string} props.src - Default fallback image URL.
 * @param {string} [props.srcSet] - Responsive image candidate list.
 * @param {string} [props.sizes='100vw'] - Media-conditioned image layout width.
 * @param {number} props.width - Intrinsic image width to prevent layout shift.
 * @param {number} props.height - Intrinsic image height to prevent layout shift.
 * @param {string} [props.alt=''] - Accessible description (empty when decorative).
 * @param {boolean} [props.decorative=false] - Marks image as purely decorative.
 * @param {boolean} [props.priority=false] - Enables high-priority eager loading for LCP images.
 * @param {'cover' | 'contain'} [props.fit='cover'] - CSS object-fit behavior.
 * @param {string} [props.objectPosition='center'] - CSS object-position value.
 * @param {string} [props.className=''] - Optional wrapper class name.
 * @param {string} [props.imgClassName=''] - Optional img element class name.
 * @returns {JSX.Element} Responsive picture/image element.
 */
export function ResponsiveImage({
  src,
  srcSet,
  sizes = '100vw',
  width,
  height,
  alt = '',
  decorative = false,
  priority = false,
  fit = 'cover',
  objectPosition = 'center',
  className = '',
  imgClassName = '',
}) {
  const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ')
  const imageClasses = [
    styles.image,
    fit === 'contain' ? styles.contain : styles.cover,
    imgClassName,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <picture className={wrapperClasses}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        width={width}
        height={height}
        alt={decorative ? '' : alt}
        aria-hidden={decorative ? 'true' : undefined}
        loading={priority ? undefined : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        className={imageClasses}
        style={{ objectPosition }}
      />
    </picture>
  )
}
