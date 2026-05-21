import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from '@phosphor-icons/react'

interface LegalNoticesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contactEmail: string
}

export function LegalNoticesDialog({ open, onOpenChange, contactEmail }: LegalNoticesDialogProps) {
  const portalRoot = document.getElementById('portal-root') ?? undefined

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal container={portalRoot}>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="legal-notices-dialog" aria-describedby={undefined}>
          <div className="legal-notices-dialog__header">
            <Dialog.Title className="legal-notices-dialog__title">
              Mentions légales
            </Dialog.Title>
            <Dialog.Close className="legal-notices-dialog__close" aria-label="Fermer les mentions légales">
              <XIcon size={20} weight="bold" />
            </Dialog.Close>
          </div>

          <div className="legal-notices-dialog__body">
            <section className="legal-notices-dialog__section">
              <h3 className="legal-notices-dialog__section-title">Éditeur du site</h3>
              <p>Manon BOUCHARÉCHAS</p>
              <p>Laboratoire LIDILEM · Université Grenoble Alpes · 2026</p>
              <p>
                <a href={`mailto:${contactEmail}`} className="legal-notices-dialog__link">
                  {contactEmail}
                </a>
              </p>
            </section>

            <section className="legal-notices-dialog__section">
              <h3 className="legal-notices-dialog__section-title">Conception et développement</h3>
              <p>
                <a
                  href="https://github.com/piirk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-notices-dialog__link"
                >
                  piirk
                </a>
              </p>
            </section>

            <section className="legal-notices-dialog__section">
              <h3 className="legal-notices-dialog__section-title">Hébergement</h3>
              <p>
                Vercel Inc.{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-notices-dialog__link"
                >
                  vercel.com
                </a>
              </p>
            </section>

            <section className="legal-notices-dialog__section">
              <h3 className="legal-notices-dialog__section-title">Contact</h3>
              <p>
                Pour toute question relative à ce site ou à la recherche :{' '}
                <a href={`mailto:${contactEmail}`} className="legal-notices-dialog__link">
                  {contactEmail}
                </a>
              </p>
            </section>

            <section className="legal-notices-dialog__section">
              <h3 className="legal-notices-dialog__section-title">Droits d'auteur · mèmes</h3>
              <p>
                Les mèmes reproduits sur ce site l'ont été à des fins d'illustration dans le cadre d'une recherche académique.
                Leur utilisation s'appuie sur le droit à la parodie et à la citation prévu à l'article L122-5
                du Code de la propriété intellectuelle français.
              </p>
            </section>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
