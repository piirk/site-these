interface FooterProps {
  surveyUrl: string
  thesisUrl: string
}

export function Footer({ surveyUrl, thesisUrl }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner section__inner">

        <p className="site-footer__closing">
          Merci d'être allé jusqu'au bout.{' '}
          Si vous n'avez pas encore répondu au questionnaire,{' '}
          <a href={surveyUrl} target="_blank" rel="noopener noreferrer">
            il reste ouvert
          </a>
          {' : '}votre point de vue compte vraiment pour la suite de ce travail.
        </p>

        <hr className="site-footer__divider" aria-hidden="true" />

        <div className="site-footer__meta">
          <p className="site-footer__research">
            <span className="site-footer__site-name">Défocales-UPE2A</span>
            {' · '}Thèse de doctorat en sciences du langage
          </p>
          <p className="site-footer__institution">
            Manon BOUCHARÉCHAS · Laboratoire LIDILEM · Université Grenoble Alpes · 2026
          </p>
          <a
            href={thesisUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__thesis-link"
          >
            Lire le manuscrit complet ↗
          </a>
        </div>

        <p className="site-footer__credits">
          © 2026 · Site conçu par piirk
        </p>

      </div>
    </footer>
  )
}
