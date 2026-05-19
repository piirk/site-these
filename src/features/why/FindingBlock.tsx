interface FindingBlockProps {
  index: number       // numéro affiché (01, 02…)
  heading: string     // accroche courte — ce que l'œil lit en premier
  body: string        // développement — une ou deux phrases max
}

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
