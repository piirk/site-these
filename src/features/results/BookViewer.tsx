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
