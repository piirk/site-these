import { useState } from 'react'
import { LegalNoticesDialog } from './LegalNoticesDialog'

interface FooterProps {
  surveyUrl: string
  thesisUrl: string
  contactEmail: string
  onResetConsent: () => void
}

export function Footer({ surveyUrl, thesisUrl, contactEmail, onResetConsent }: FooterProps) {
  const [legalOpen, setLegalOpen] = useState(false)

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
          {'© 2026 · Site conçu par '}
          <a
            href="https://github.com/piirk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de piirk"
            className="site-footer__credits-link"
          >
            piirk
          </a>
          {' · '}
          <button
            className="site-footer__credits-btn"
            onClick={() => setLegalOpen(true)}
          >
            Mentions légales
          </button>
          {' · '}
          <button
            className="site-footer__credits-btn"
            onClick={onResetConsent}
          >
            Cookies
          </button>
        </p>

      </div>

      <LegalNoticesDialog
        open={legalOpen}
        onOpenChange={setLegalOpen}
        contactEmail={contactEmail}
      />
    </footer>
  )
}
