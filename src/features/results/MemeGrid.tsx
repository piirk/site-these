import { useState, useEffect, useCallback, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import type { Meme } from '../../types/index'

interface MemeGridProps {
  memes: Meme[]
}

export function MemeGrid({ memes }: MemeGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selected = selectedIndex !== null ? memes[selectedIndex] : null

  const prev = useCallback(() => {
    setSelectedIndex((i) => i !== null ? (i - 1 + memes.length) % memes.length : null)
  }, [memes.length])

  const next = useCallback(() => {
    setSelectedIndex((i) => i !== null ? (i + 1) % memes.length : null)
  }, [memes.length])

  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const resetTransform = useCallback((animate: boolean) => {
    if (!contentRef.current) return
    contentRef.current.style.transition = animate ? 'transform var(--duration-normal) ease' : 'none'
    contentRef.current.style.transform = 'translate(-50%, -50%)'
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    if (contentRef.current) contentRef.current.style.transition = 'none'
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current || !contentRef.current) return
    const dx = e.touches[0].clientX - touchStart.current.x
    contentRef.current.style.transform = `translate(calc(-50% + ${dx * 0.4}px), -50%)`
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return
    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    touchStart.current = null
    const shouldNavigate = Math.abs(dx) >= 50 && Math.abs(dx) >= Math.abs(dy)
    resetTransform(!shouldNavigate)
    if (shouldNavigate) dx < 0 ? next() : prev()
  }, [prev, next, resetTransform])

  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedIndex, prev, next])

  return (
    <>
      <ul className="meme-grid" aria-label="Galerie de memes">
        {memes.map((meme, index) => (
          <li key={meme.id} className="meme-grid__item">
            <button
              className="meme-grid__trigger"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Agrandir : ${meme.altText}`}
            >
              <img
                src={meme.imageUrl}
                alt={meme.altText}
                className="meme-grid__img"
                loading="lazy"
              />
            </button>
            {meme.caption && <p className="meme-grid__caption">{meme.caption}</p>}
          </li>
        ))}
      </ul>

      <Dialog.Root
        open={selectedIndex !== null}
        onOpenChange={(open) => { if (!open) setSelectedIndex(null) }}
      >
        <Dialog.Portal container={document.getElementById('portal-root') ?? undefined}>
          <Dialog.Overlay className="meme-lightbox-overlay" />
          <Dialog.Content ref={contentRef} className="meme-lightbox" aria-label={selected?.altText} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Dialog.Title className="sr-only">{selected?.altText}</Dialog.Title>
            <Dialog.Description className="sr-only">{selected?.caption}</Dialog.Description>

            {selected && (
              <img
                src={selected.imageUrl}
                alt={selected.altText}
                className="meme-lightbox__img"
              />
            )}
            {selected?.caption && <p className="meme-lightbox__caption">{selected.caption}</p>}

            <button className="meme-lightbox__nav meme-lightbox__nav--prev" onClick={prev} aria-label="Image précédente">‹</button>
            <button className="meme-lightbox__nav meme-lightbox__nav--next" onClick={next} aria-label="Image suivante">›</button>

            <Dialog.Close className="meme-lightbox__close" aria-label="Fermer">✕</Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
