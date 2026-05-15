// features/people/PeoplePortrait.tsx
import type { ReactNode } from 'react'

interface PeoplePortraitProps {
  /** Initiale ou emoji servant d'avatar sobre */
  avatar: string
  /** Prénom ou pseudonyme — pas de nom de famille pour les participants */
  name: string
  /** Rôle court, visible directement */
  role: string
  /** Corps du portrait — ReactNode pour permettre les TermTooltip */
  children: ReactNode
  /** Variante visuelle : la chercheuse est mise en avant différemment */
  variant?: 'default' | 'featured'
}

/**
 * PeoplePortrait — un portrait sobre, pas une carte.
 *
 * Choix UX :
 * - Pas de photo : cohérence avec l'anonymat des participants,
 *   et évite la hiérarchie visuelle froide photo/pas photo
 * - Avatar : initiale dans un cercle — chaleureux, simple, accessible
 * - Pas de bordure, pas d'ombre : le texte seul crée la structure
 * - children ReactNode : permet d'injecter des TermTooltip inline
 *   sans contorsion (même pattern que MethodStep)
 * - variant "featured" pour la chercheuse : légèrement plus de présence
 *   sans créer deux composants différents
 */
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
