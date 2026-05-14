// features/results/BookViewer.tsx

interface BookViewerProps {
  /** URL du PDF à ouvrir */
  pdfUrl: string
  /** Image de couverture */
  coverUrl: string
  /** Titre du livret */
  title: string
  /** Nombre de pages (affiché comme info) */
  pageCount?: number
}

/**
 * BookViewer — MVP.
 *
 * Version actuelle : couverture + lien PDF.
 * Pas de flip book pour l'instant — la complexité n'est pas justifiée
 * avant de savoir si les visiteurs interagissent avec ce contenu.
 *
 * Ce qu'un vrai BookViewer demanderait plus tard :
 * - gestion des pages (useState<number>)
 * - swipe mobile (touch events ou bibliothèque légère)
 * - images par page en webp optimisé
 * - lazy loading
 * → À construire si les analytics montrent un vrai usage.
 *
 * La couverture est cliquable — c'est l'affordance principale.
 * Le bouton texte en dessous est le fallback accessible.
 */
export function BookViewer({ pdfUrl, coverUrl, title, pageCount }: BookViewerProps) {
  return (
    <div className="book-viewer">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="book-viewer__cover-link"
        aria-label={`Ouvrir le livret "${title}" en PDF`}
      >
        <div className="book-viewer__cover">
          <img
            src={coverUrl}
            alt={`Couverture du livret : ${title}`}
            className="book-viewer__cover-img"
          />
          {/* Overlay au hover — indique que c'est interactif */}
          <div className="book-viewer__cover-overlay" aria-hidden="true">
            <span className="book-viewer__cover-icon">↗</span>
          </div>
        </div>
      </a>

      <div className="book-viewer__meta">
        {pageCount && (
          <span className="book-viewer__page-count">{pageCount} pages</span>
        )}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="book-viewer__pdf-link"
        >
          Ouvrir le livret (PDF)
        </a>
      </div>
    </div>
  )
}
