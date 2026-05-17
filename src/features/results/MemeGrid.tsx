// features/results/MemeGrid.tsx
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import type { Meme } from '../../types/index'

interface MemeGridProps {
  memes: Meme[]
}

/**
 * MemeGrid — grille de memes avec lightbox simple.
 *
 * Choix UX :
 * - Grille 2 colonnes desktop, 1 colonne mobile
 * - Scroll vertical — plus naturel qu'un carousel pour ce type de contenu
 * - Lightbox au clic : Radix Dialog (déjà utilisé dans TermTooltip)
 * - La légende (caption) est visible directement sous chaque image —
 *   elle fait partie de la lecture, pas un tooltip caché
 *
 * State local uniquement : quel meme est ouvert en lightbox.
 * Null = aucun. Simple et suffisant.
 */
export function MemeGrid({ memes }: MemeGridProps) {
  const [selected, setSelected] = useState<Meme | null>(null)

  return (
    <>
      <ul className="meme-grid" aria-label="Galerie de memes">
        {memes.map((meme) => (
          <li key={meme.id} className="meme-grid__item">
            <button
              className="meme-grid__trigger"
              onClick={() => setSelected(meme)}
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

      {/* Lightbox */}
      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => { if (!open) setSelected(null) }}
      >
        <Dialog.Portal container={document.getElementById('portal-root') ?? undefined}>
          <Dialog.Overlay className="meme-lightbox-overlay" />
          <Dialog.Content className="meme-lightbox" aria-label={selected?.altText}>
            <Dialog.Title className="sr-only">
              {selected?.altText}
            </Dialog.Title>
            <Dialog.Description className="sr-only">
              {selected?.caption}
            </Dialog.Description>

            {selected && (
              <>
                <img
                  src={selected.imageUrl}
                  alt={selected.altText}
                  className="meme-lightbox__img"
                />
                {selected.caption && <p className="meme-lightbox__caption">{selected.caption}</p>}
              </>
            )}

            <Dialog.Close
              className="meme-lightbox__close"
              aria-label="Fermer"
            >
              ✕
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
