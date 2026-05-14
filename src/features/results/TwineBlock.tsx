// features/results/TwineBlock.tsx

interface TwineBlockProps {
  url: string
}

/**
 * TwineBlock — invitation au parcours interactif Twine.
 *
 * Choix délibéré : lien externe, pas d'iframe.
 * Raisons :
 * - Les iframes Twine sont fragiles sur mobile (scroll capturé, viewport incorrect)
 * - Un nouvel onglet donne toute la place à l'expérience Twine
 * - Plus simple à maintenir — si l'URL change, un seul endroit à modifier
 *
 * Le bloc doit donner envie d'entrer dans le parcours —
 * courte mise en contexte + affordance claire.
 */
export function TwineBlock({ url }: TwineBlockProps) {
  return (
    <div className="twine-block">
      <div className="twine-block__preview" aria-hidden="true">
        <span className="twine-block__icon">◈</span>
      </div>
      <div className="twine-block__body">
        <p className="twine-block__teaser">
          Dans ce parcours, vous ferez face aux mêmes situations
          que les enseignantes observées — et vous devrez choisir.
          Il n'y a pas de bonne réponse. C'est le principe.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary btn--md twine-block__cta"
          aria-label="Ouvrir le parcours interactif dans un nouvel onglet"
        >
          Entrer dans le parcours →
        </a>
      </div>
    </div>
  )
}
