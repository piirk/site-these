import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
 
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'
 
interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  label: string 
  ariaLabel?: string
}
 
type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
  }
 
type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }
 
export type ButtonProps = ButtonAsButton | ButtonAsLink
 
export function Button({ variant = 'primary', size = 'md', label, ariaLabel, ...rest }: ButtonProps) {
  const baseClass = `btn btn--${variant} btn--${size}`
 
  if (rest.as === 'a') {
    const { ...anchorProps } = rest
    return (
      <a
        className={baseClass}
        aria-label={ariaLabel ?? label}
        rel="noopener noreferrer"
        {...anchorProps}
      >
        {label}
      </a>
    )
  }
 
  const { ...buttonProps } = rest as ButtonAsButton & { as?: 'button' }
  return (
    <button
      className={baseClass}
      aria-label={ariaLabel ?? label}
      type="button"
      {...buttonProps}
    >
      {label}
    </button>
  )
}
