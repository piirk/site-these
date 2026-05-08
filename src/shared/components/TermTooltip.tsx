// features/method/TermTooltip.tsx
// Radix Tooltip pour les termes académiques dans le corps de texte.
// Installation : npm install @radix-ui/react-tooltip

import * as Tooltip from '@radix-ui/react-tooltip'

interface TermTooltipProps {
  term: string
  definition: string
  children?: React.ReactNode
}

/**
 * TermTooltip — met en avant un terme académique avec sa définition vulgarisée.
 *
 * Choix :
 * - asChild sur le Trigger : on garde notre <span class="term"> sans wrapper
 * - Provider local avec delayDuration court : la définition doit être rapide
 *   à accéder, l'utilisateur ne doit pas attendre pour comprendre un terme
 * - Accessible au clavier (tabIndex + focus visible)
 */
export function TermTooltip({ term, definition }: TermTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={150}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span
            className="method-term"
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
