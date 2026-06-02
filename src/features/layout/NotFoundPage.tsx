import { Button } from '../../shared/ui/Button'

export function NotFoundPage() {
  return (
    <main className="not-found">
      <a href="/" className="not-found__brand" aria-label="Défocales-UPE2A — Retour à l'accueil">
        Défocales-UPE2A
      </a>
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page introuvable</h1>
      <p className="not-found__body">
        Le lien est peut-être cassé, ou cette page a été déplacée.
      </p>
      <Button
        as="a"
        href="/"
        label="Retour à l'accueil"
        variant="primary"
        size="md"
      />
    </main>
  )
}
