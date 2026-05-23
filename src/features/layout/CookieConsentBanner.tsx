import { useEffect, useRef } from 'react'

interface Props {
  onAccept: () => void
  onRefuse: () => void
}

export function CookieConsentBanner({ onAccept, onRefuse }: Props) {
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    acceptRef.current?.focus()
  }, [])

  return (
    <div role="region" aria-label="Gestion des cookies" className="cookie-banner">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          Ce site utilise des cookies de mesure d'audience (Vercel Analytics).
          Aucune donnée personnelle n'est transmise à des tiers.
        </p>
        <div className="cookie-banner__actions">
          <button ref={acceptRef} className="cookie-banner__btn" onClick={onAccept}>
            Accepter
          </button>
          <button className="cookie-banner__btn" onClick={onRefuse}>
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}
