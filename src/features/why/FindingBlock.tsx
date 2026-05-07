// features/why/FindingBlock.tsx

interface FindingBlockProps {
  index: number       // numéro affiché (01, 02…)
  heading: string     // accroche courte — ce que l'œil lit en premier
  body: string        // développement — une ou deux phrases max
}

/**
 * FindingBlock — un constat de terrain.
 *
 * Choix UX :
 * - Le numéro en grand crée du rythme et indique qu'il y en a plusieurs
 * - L'accroche est distincte du corps : lecture en deux temps
 *   (survol → lecture complète si intéressé)
 * - Pas de card, pas de bordure : juste de la typographie et de l'espace
 */
export function FindingBlock({ index, heading, body }: FindingBlockProps) {
  const indexLabel = String(index).padStart(2, '0')

  return (
    <article className="finding-block" aria-label={`Constat ${indexLabel}`}>
      <span className="finding-block__index" aria-hidden="true">
        {indexLabel}
      </span>
      <div className="finding-block__content">
        <p className="finding-block__heading">{heading}</p>
        <p className="finding-block__body">{body}</p>
      </div>
    </article>
  )
}
