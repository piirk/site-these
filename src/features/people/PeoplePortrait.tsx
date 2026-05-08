// features/people/PersonPortrait.tsx
import type { ReactNode } from 'react'

interface PersonPortraitProps {
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
 * PersonPortrait — un portrait sobre, pas une carte.
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
export function PersonPortrait({
  avatar,
  name,
  role,
  children,
  variant = 'default',
}: PersonPortraitProps) {
  return (
    <article
      className={`person-portrait person-portrait--${variant}`}
      aria-label={`${name}, ${role}`}
    >
      <div className="person-portrait__avatar" aria-hidden="true">
        {avatar}
      </div>
      <div className="person-portrait__body">
        <header className="person-portrait__header">
          <span className="person-portrait__name">{name}</span>
          <span className="person-portrait__role">{role}</span>
        </header>
        <div className="person-portrait__text">
          {children}
        </div>
      </div>
    </article>
  )
}
