// shared/components/TermTooltip.tsx
//
// Installation requise (déjà fait) :
//   npm install @radix-ui/react-tooltip @radix-ui/react-dialog

import * as Tooltip from '@radix-ui/react-tooltip'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice.ts'

interface TermTooltipProps {
  /** Le terme affiché inline dans le texte */
  term: string
  /** La définition vulgarisée — peut être longue */
  definition: string
}

/**
 * TermTooltip — composant adaptatif desktop/mobile.
 *
 * Desktop (hover disponible) :
 *   → Radix Tooltip, apparaît au hover et au focus clavier
 *   → Comportement natif, léger, non intrusif
 *
 * Mobile (hover: none) :
 *   → Radix Dialog en bottom sheet
 *   → S'ouvre au tap, se ferme en tapant en dehors ou sur ×
 *   → Confortable à lire, pattern reconnu nativement
 *
 * API identique dans les deux cas :
 *   <TermTooltip term="ethnographe" definition="..." />
 *   Aucun changement nécessaire dans les sections existantes.
 */
export function TermTooltip({ term, definition }: TermTooltipProps) {
  const isTouch = useIsTouchDevice()

  return isTouch
    ? <TermBottomSheet term={term} definition={definition} />
    : <TermDesktopTooltip term={term} definition={definition} />
}

// ── Desktop : Radix Tooltip ───────────────────────────────────────────────────

function TermDesktopTooltip({ term, definition }: TermTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span
            className="term-trigger"
            tabIndex={0}
            role="note"
            aria-label={`${term} : ${definition}`}
          >
            {term}
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="tooltip-content"
            sideOffset={6}
            side="top"
            collisionPadding={16}
          >
            {definition}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

// ── Mobile : Radix Dialog en bottom sheet ────────────────────────────────────

function TermBottomSheet({ term, definition }: TermTooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {/*
          Le span est identique au trigger desktop :
          même classe, même accessibilité
          seul le comportement au clic change
        */}
        <span
          className="term-trigger"
          role="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setOpen(true)
            }
          }}
        >
          {term}
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay semi-transparent — ferme au tap */}
        <Dialog.Overlay className="term-sheet-overlay" />

        <Dialog.Content
          className="term-sheet"
          // Annonce le contenu aux lecteurs d'écran
          aria-describedby="term-sheet-definition"
        >
          {/* Poignée visuelle — indique que c'est un drawer */}
          <div className="term-sheet__handle" aria-hidden="true" />

          <Dialog.Title className="term-sheet__term">
            {term}
          </Dialog.Title>

          <p id="term-sheet-definition" className="term-sheet__definition">
            {definition}
          </p>

          <Dialog.Close className="term-sheet__close" aria-label="Fermer">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
