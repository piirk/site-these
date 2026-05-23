import { useState } from 'react'

export type ConsentState = 'accepted' | 'refused' | 'unset'

const STORAGE_KEY = 'cookie-consent'

function readConsent(): ConsentState {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'accepted' || stored === 'refused') return stored
  return 'unset'
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(readConsent)

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
  }

  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, 'refused')
    setConsent('refused')
  }

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setConsent('unset')
  }

  return { consent, accept, refuse, reset }
}
