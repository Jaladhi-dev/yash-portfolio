import styles from './Typography.module.css'

/**
 * Shared typography primitive enforcing design system font families, scales,
 * line-heights, tracking, and accessible color tokens.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as='p'] - Rendered semantic HTML tag.
 * @param {'heroDisplay' | 'heroSubtitle' | 'playful' | 'statement' | 'statementMedium' | 'h1' | 'h2' | 'h3' | 'body' | 'caption'} [props.variant='body'] - Typographic scale variant.
 * @param {'heading' | 'primary' | 'secondary' | 'muted' | 'inverse' | 'white' | 'heroInk'} [props.tone='primary'] - Semantic color token.
 * @param {'left' | 'center' | 'right'} [props.align='left'] - Text alignment.
 * @param {string} [props.className=''] - Optional extra class name.
 * @param {import('react').ReactNode} props.children - Text or inline nodes.
 * @returns {JSX.Element} Styled semantic typography element.
 */
export function Typography({
  as: Component = 'p',
  variant = 'body',
  tone = 'primary',
  align = 'left',
  className = '',
  children,
  ...rest
}) {
  const classes = [
    styles.base,
    styles[variant],
    styles[`tone-${tone}`],
    styles[`align-${align}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
