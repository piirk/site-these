import { useState, useEffect, useCallback } from 'react'
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
          <Dialog.Content className="meme-lightbox" aria-label={selected?.altText}>
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
