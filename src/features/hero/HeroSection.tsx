import { Button } from '../../shared/ui/Button'

interface HeroSectionProps {
  surveyUrl: string
}

/**
 * HeroSection — première impression du site.
 *
 * Hiérarchie visuelle (ordre de lecture naturel) :
 * 1. Eyebrow   → contexte ("Recherche doctorale") — ancre l'identité
 * 2. Titre h1  → accroche émotionnelle, pas académique
 * 3. Chapeau   → 1-2 phrases max, bénéfice utilisateur
 * 4. CTA pair  → Survey (primaire) + Découvrir (secondaire/ancre)
 *
 * Choix UX :
 * - Le CTA "Donner mon avis" est le bouton de gauche (sens de lecture, œil naturel)
 * - "Découvrir" est secondaire : scroll vers #why, pas une sortie du site
 * - Pas d'image hero pour garder le focus sur le texte et le CTA
 */
export function HeroSection({ surveyUrl }: HeroSectionProps) {
  return (
    <section id="hero" className="section hero-section" aria-labelledby="hero-title">
      <div className="section__inner hero-section__inner">

        <p className="hero-section__eyebrow">
          Recherche doctorale · Sciences de l'éducation
        </p>

        <h1 id="hero-title" className="hero-section__title">
          Ce qui se passe vraiment<br />
          dans une salle de classe
        </h1>

        <p className="hero-section__lead">
          Une chercheuse s'est immergée dans le quotidien d'enseignants
          et d'élèves pour comprendre comment ils se coordonnent, s'adaptent,
          et font tenir ensemble une situation d'apprentissage.
        </p>

        <div className="hero-section__cta-group">
          <Button
            as="a"
            href={surveyUrl}
            target="_blank"
            label="Donner mon avis — 5 minutes"
            variant="primary"
            size="lg"
          />
          <Button
            as="a"
            href="#why"
            label="Découvrir la recherche"
            variant="secondary"
            size="lg"
          />
        </div>

        {/* Indicateur scroll discret */}
        <div className="hero-section__scroll-hint" aria-hidden="true">
          <span className="hero-section__scroll-arrow" />
        </div>

      </div>
    </section>
  )
}
