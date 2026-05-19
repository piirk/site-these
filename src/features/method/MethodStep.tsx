import type { ReactNode } from 'react'

interface MethodStepProps {
  index: number
  heading: string
  children: ReactNode
  isLast?: boolean
}

export function MethodStep({ index, heading, children, isLast = false }: MethodStepProps) {
  const indexLabel = String(index).padStart(2, '0')

  return (
    <article
      className={`method-step ${isLast ? 'method-step--last' : ''}`}
      aria-label={`Étape ${indexLabel} : ${heading}`}
    >
      <div className="method-step__track" aria-hidden="true">
        <span className="method-step__number">{indexLabel}</span>
        {!isLast && <span className="method-step__connector" />}
      </div>

      <div className="method-step__content">
        <h3 className="method-step__heading">{heading}</h3>
        <div className="method-step__body">{children}</div>
      </div>
    </article>
  )
}
