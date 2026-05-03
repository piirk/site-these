import { Button } from '../ui/Button'
 
interface CtaBannerProps {
  /** Titre affiché en gros dans le bandeau */
  title: string
  /** Texte d'accompagnement (optionnel) */
  description?: string
  /** Texte du bouton */
  ctaLabel: string
  /** URL cible du CTA */
  ctaUrl: string
  /** Variante visuelle */
  variant?: 'default' | 'highlight'
  /** Classe CSS additionnelle pour personnalisation contextuelle */
  className?: string
}
 
/**
 * Bandeau CTA générique.
 * Utilisé dans QuestionnaireSection (version pleine),
 * et peut être inséré entre d'autres sections (version compacte via className).
 *
 * Choix : composant purement présentationnel, zéro logique interne.
 * Tout vient des props → facile à réutiliser sans surprise.
 */
export function CtaBanner({
  title,
  description,
  ctaLabel,
  ctaUrl,
  variant = 'default',
  className = '',
}: CtaBannerProps) {
  return (
    <div
      className={`cta-banner cta-banner--${variant} ${className}`.trim()} // check clsx plus tard
      role="region"
      aria-label={title}
    >
      <div className="cta-banner__content">
        <h2 className="cta-banner__title">{title}</h2>
        {description && (
          <p className="cta-banner__description">{description}</p>
        )}
      </div>
 
      <Button
        as="a"
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        label={ctaLabel}
        variant="primary"
        size="lg"
      />
    </div>
  )
}
