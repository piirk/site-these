import * as Tooltip from '@radix-ui/react-tooltip'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice'

interface TermTooltipProps {
  term: string
  definition: string
}

/**
 * Conteneur Portal dédié — hors de #root.
 * Évite le bug Radix où aria-hidden="true" est posé sur #root ET
 * sur les enfants directs de body (dont le Portal lui-même).
 *
 * Requiert dans index.html :
 *   <div id="portal-root"></div>  (après <div id="root">)
 */
function getPortalContainer(): HTMLElement | undefined {
  return document.getElementById('portal-root') ?? undefined
}

export function TermTooltip({ term, definition }: TermTooltipProps) {
  const isTouch = useIsTouchDevice()

  return isTouch
    ? <TermBottomSheet term={term} definition={definition} />
    : <TermDesktopTooltip term={term} definition={definition} />
}

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
        <Tooltip.Portal container={getPortalContainer()}>
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

function TermBottomSheet({ term, definition }: TermTooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
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

      <Dialog.Portal container={getPortalContainer()}>
        <Dialog.Overlay className="term-sheet-overlay" />
        <Dialog.Content className="term-sheet">
          <Dialog.Title className="term-sheet__term">
            {term}
          </Dialog.Title>

          <Dialog.Description asChild>
            <p className="term-sheet__definition">{definition}</p>
          </Dialog.Description>

          <Dialog.Close
            className="term-sheet__close"
            aria-label={`Fermer la définition de ${term}`}
          >
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
