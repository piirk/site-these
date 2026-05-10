// shared/hooks/useIsTouchDevice.ts
import { useState, useEffect } from 'react'

/**
 * Détecte si l'appareil est tactile.
 *
 * Changement clé vs version précédente :
 * - useLayoutEffect retiré : il interagit mal avec StrictMode en dev
 * - On écoute les deux media queries pour être robuste
 * - Fallback sur navigator.maxTouchPoints si matchMedia ne suffit pas
 *   (cas des DevTools Chrome qui ne simulent pas pointer: coarse)
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState<boolean>(detectTouch)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)')
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isTouch
}

function detectTouch(): boolean {
  // 1. Media query — la plus fiable sur vrai appareil
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return true
  }
  // 2. Fallback : touch points > 0 couvre les cas où DevTools
  //    simule le mobile sans changer les media queries
  if (navigator.maxTouchPoints > 0) {
    return true
  }
  return false
}