// features/method/MethodStep.tsx
import type { ReactNode } from 'react'

interface MethodStepProps {
  index: number
  heading: string
  children: ReactNode // ReactNode pour permettre les TermTooltip inline
  isLast?: boolean
}

/**
 * MethodStep — une étape du processus de recherche.
 *
 * Choix structurels :
 * - children (ReactNode) plutôt que body (string) : permet d'injecter
 *   des <TermTooltip> directement dans le texte sans contorsion
 * - isLast masque le connecteur sous la dernière étape
 * - Le connecteur vertical est CSS pur (pseudo-élément) : pas de SVG,
 *   pas de composant dédié — c'est la solution la plus maintenable
 */
export function MethodStep({ index, heading, children, isLast = false }: MethodStepProps) {
  const indexLabel = String(index).padStart(2, '0')

  return (
    <article
      className={`method-step ${isLast ? 'method-step--last' : ''}`}
      aria-label={`Étape ${indexLabel} : ${heading}`}
    >
      {/* Colonne gauche : numéro + connecteur */}
      <div className="method-step__track" aria-hidden="true">
        <span className="method-step__number">{indexLabel}</span>
        {!isLast && <span className="method-step__connector" />}
      </div>

      {/* Colonne droite : contenu */}
      <div className="method-step__content">
        <h3 className="method-step__heading">{heading}</h3>
        <div className="method-step__body">{children}</div>
      </div>
    </article>
  )
}
