// shared/hooks/useIsTouchDevice.ts
import { useState, useEffect } from 'react'

/**
 * Détecte si l'appareil est tactile (pas de vraie capacité hover).
 *
 * On utilise `(hover: none)` plutôt que la largeur d'écran :
 * - Un iPad en landscape peut faire 1024px mais reste tactile
 * - Un petit laptop 768px a un vrai hover
 * - C'est la bonne sémantique pour ce cas d'usage
 *
 * SSR-safe : retourne false par défaut (pas de window côté serveur).
 * Vite/React client-only → pas de problème ici, mais bonne pratique.
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: none)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)')

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches)
    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [])

  return isTouch
}
