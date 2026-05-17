import type { ReactNode } from 'react'

interface PeoplePortraitProps {
  avatar: string
  name: string
  role: string
  children: ReactNode
  variant?: 'default' | 'featured'
}
export function PeoplePortrait({
  avatar,
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
        {avatar}
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
