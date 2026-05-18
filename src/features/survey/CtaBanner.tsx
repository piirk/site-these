import { Button } from '../../shared/ui/Button'

import type { ReactNode } from 'react'

interface Reassurance {
  icon: ReactNode
  text: string
}

interface CtaBannerProps {
  /** Eyebrow : petit texte au-dessus du titre (contexte, durée) */
  eyebrow?: string
  /** id pour aria-labelledby depuis la section parente */
  titleId?: string
  title: string
  description?: string
  ctaLabel: string
  ctaUrl: string
  /** Phrase de preuve sociale */
  socialProof?: string
  /** Liste de réassurances (icône + texte court) */
  reassurances?: Reassurance[]
  variant?: 'default' | 'highlight'
  className?: string
}

export function CtaBanner({
  eyebrow,
  titleId,
  title,
  description,
  ctaLabel,
  ctaUrl,
  socialProof,
  reassurances,
  variant = 'default',
  className = '',
}: CtaBannerProps) {
  return (
    <div
      className={`cta-banner cta-banner--${variant} ${className}`.trim()}
      role="region"
      aria-labelledby={titleId}
    >
      <div className="cta-banner__body">
        {eyebrow && (
          <p className="cta-banner__eyebrow" aria-hidden="true">
            {eyebrow}
          </p>
        )}

        <h2 id={titleId} className="cta-banner__title">
          {title}
        </h2>

        {description && (
          <p className="cta-banner__description">{description}</p>
        )}

        {socialProof && (
          <p className="cta-banner__social-proof" aria-live="polite">
            ✓ {socialProof}
          </p>
        )}
      </div>

      <div className="cta-banner__action">
        <Button
          as="a"
          href={ctaUrl}
          target="_blank"
          label={ctaLabel}
          variant="primary"
          size="lg"
        />

        {reassurances && reassurances.length > 0 && (
          <ul className="cta-banner__reassurances" aria-label="Informations pratiques">
            {reassurances.map(({ icon, text }) => (
              <li key={text} className="cta-banner__reassurance-item">
                <span aria-hidden="true">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
