import { useState, useEffect, useRef } from 'react'

interface UseScrollSpyOptions {
  sectionIds: string[]
}

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
      const sections = sectionIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: string; el: HTMLElement } => s.el !== null)

      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      if (scrollBottom >= docHeight - 4) {
        return sectionIds[sectionIds.length - 1] ?? activeId
      }

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
