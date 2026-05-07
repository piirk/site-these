import { useState, useEffect, useRef } from 'react'

interface UseScrollSpyOptions {
  sectionIds: string[]
}

/**
 * useScrollSpy — version corrigée.
 *
 * Problèmes de la version précédente :
 * 1. rootMargin `-60%` en bas excluait les sections courtes qui ne
 *    remplissaient jamais la zone d'activation → mauvaise section active
 * 2. Pas de fallback quand aucune section n'était dans la zone
 *
 * Nouvelle approche : deux observers complémentaires.
 *
 * Observer A (scroll vers le bas) :
 *   rootMargin: '-80px 0px -40% 0px'
 *   → s'active quand le haut d'une section passe sous la navbar
 *
 * Observer B (fallback position absolue) :
 *   En parallèle, on calcule quelle section est la plus proche
 *   du haut de la fenêtre via getBoundingClientRect au scroll.
 *   C'est le filet de sécurité.
 *
 * En pratique : on utilise une seule stratégie robuste —
 * calculer au scroll quelle section est "en vue" en haut de page.
 * C'est légèrement moins "pur" que l'IntersectionObserver seul,
 * mais fiable à 100% quelle que soit la hauteur des sections.
 */
export function useScrollSpy({ sectionIds }: UseScrollSpyOptions): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const NAVBAR_HEIGHT = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-height')
        .trim()
    ) || 64

    // Offset : on active une section quand son haut passe ce seuil
    // navbar + petite marge de confort
    const OFFSET = NAVBAR_HEIGHT + 24

    function getActiveId(): string {
      // On parcourt les sections dans l'ordre inverse :
      // la première dont le haut est AU-DESSUS du offset est la section active
      const sections = sectionIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: string; el: HTMLElement } => s.el !== null)

      // Si on est tout en bas de la page, activer la dernière section
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      if (scrollBottom >= docHeight - 4) {
        return sectionIds[sectionIds.length - 1] ?? activeId
      }

      // Sinon : dernière section dont le top est dépassé par le scroll
      let result = sections[0]?.id ?? sectionIds[0]

      for (const { id, el } of sections) {
        const top = el.getBoundingClientRect().top + window.scrollY
        if (window.scrollY + OFFSET >= top) {
          result = id
        }
      }

      return result
    }

    function handleScroll() {
      // RAF pour ne pas calculer à chaque pixel
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        setActiveId(getActiveId())
        rafRef.current = null
      })
    }

    // Calcul initial (page peut déjà être scrollée au montage)
    setActiveId(getActiveId())

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds])

  return activeId
}
