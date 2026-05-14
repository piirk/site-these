// features/results/FormatBlock.tsx
import type { ReactNode } from 'react'

interface FormatBlockProps {
  /** Titre éditorial — "En feuilletant", "En images", "En jouant" */
  title: string
  /** Phrase qui explique pourquoi ce format existe */
  description: string
  /** Le contenu du format (BookViewer, MemeGrid, TwineBlock) */
  children: ReactNode
  /** Id pour ancrage éventuel */
  id?: string
}

/**
 * FormatBlock — wrapper narratif pour chaque format de restitution.
 *
 * Rôle : garantir la cohérence entre les trois formats
 * sans les rendre visuellement identiques.
 * Le contenu (children) peut être très différent d'un format à l'autre —
 * seule l'intro (titre + description) est standardisée.
 *
 * Pas de state, pas de logique — purement présentationnel.
 */
export function FormatBlock({ title, description, children, id }: FormatBlockProps) {
  return (
    <div className="format-block" id={id}>
      <header className="format-block__header">
        <h3 className="format-block__title">{title}</h3>
        <p className="format-block__description">{description}</p>
      </header>
      <div className="format-block__content">
        {children}
      </div>
    </div>
  )
}
