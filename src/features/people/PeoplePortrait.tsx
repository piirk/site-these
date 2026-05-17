import type { ReactNode } from 'react'
import type { Icon } from '@phosphor-icons/react'

interface PeoplePortraitProps {
  icon: Icon
  name: string
  role: string
  children: ReactNode
  variant?: 'default' | 'featured'
}
export function PeoplePortrait({
  icon: IconComponent,
  name,
  role,
  children,
  variant = 'default',
}: PeoplePortraitProps) {
  return (
    <article
      className={`people-portrait people-portrait--${variant}`}
      aria-label={`${name}, ${role}`}
    >
      <div className="people-portrait__avatar" aria-hidden="true">
        <IconComponent weight={variant === 'featured' ? 'fill' : 'light'} />
      </div>
      <div className="people-portrait__body">
        <header className="people-portrait__header">
          <span className="people-portrait__name">{name}</span>
          <span className="people-portrait__role">{role}</span>
        </header>
        <div className="people-portrait__text">
          {children}
        </div>
      </div>
    </article>
  )
}
