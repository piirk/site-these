import { Button } from '../../shared/ui/Button'

interface TwineBlockProps {
  url: string
}

// external link, not iframe — Twine iframes break on mobile (captured scroll, wrong viewport)
export function TwineBlock({ url }: TwineBlockProps) {
  return (
    <div className="twine-block">
      <div className="twine-block__preview" aria-hidden="true">
        <span className="twine-block__icon">◈</span>
      </div>
      <div className="twine-block__body">
        <p className="twine-block__teaser">
          Dans ce parcours, vous ferez face aux mêmes situations
          que les enseignantes observées, et vous devrez choisir.
          Il n'y a pas de bonne réponse. C'est le principe.
        </p>
        <Button
          as="a"
          href={url}
          target="_blank"
          variant="secondary"
          size="md"
          label="Entrer dans le parcours →"
          ariaLabel="Ouvrir le parcours interactif dans un nouvel onglet"
        />
      </div>
    </div>
  )
}
