// Pattern universel Radix :
// Root → Trigger → Portal → Content (→ Arrow)

import * as Tooltip from '@radix-ui/react-tooltip'

function TermWithTooltip({ term, definition }: { term: string; definition: string }) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {/* asChild = Radix ne crée pas de div,
              il greffe son comportement sur ton élément */}
          <span className="keyword">{term}</span>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          {/* Portal = rendu hors du flux DOM, évite les overflow:hidden */}
          <Tooltip.Content className="tooltip-content" sideOffset={6}>
            {definition}
            <Tooltip.Arrow className="tooltip-arrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TermWithTooltip
