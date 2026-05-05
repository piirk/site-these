import { useState, useEffect, useRef } from 'react'

/**
 * useScrollSpy
 *
 * Observe les sections via IntersectionObserver et retourne l'id
 * de la section actuellement visible à l'écran.
 *
 * Choix techniques :
 * - IntersectionObserver : natif, performant, pas de listener scroll
 * - rootMargin négatif : déclenche quand la section est bien "centrée"
 *   dans la fenêtre, pas dès qu'un pixel est visible
 * - threshold: 0 : suffisant combiné au rootMargin
 */

interface UseScrollSpyOptions {
  /** ids des sections à observer, dans l'ordre d'apparition */
  sectionIds: string[]
  /**
   * Marge négative en haut = compense la navbar sticky.
   * Doit correspondre à --navbar-height + un peu de buffer.
   * Défaut : '-80px 0px -60% 0px'
   */
  rootMargin?: string
}

export function useScrollSpy({
  sectionIds,
  rootMargin = '-80px 0px -60% 0px',
}: UseScrollSpyOptions): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  // Ref pour éviter de recréer l'observer à chaque render
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Nettoie l'observer précédent si les ids changent
    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // On ne traite que les sections qui entrent dans la zone
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        // Si plusieurs sections visibles simultanément (rare),
        // on prend celle la plus haute dans le document
        const topmost = visible.reduce((best, entry) =>
          entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best
        )

        setActiveId(topmost.target.id)
      },
      { rootMargin, threshold: 0 }
    )

    const observer = observerRef.current

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}