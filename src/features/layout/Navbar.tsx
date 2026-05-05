import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { Button } from '../../shared/ui/Button'

// ── Types ──────────────────────────────────────────────────────────────────────

interface NavItem {
  id: string       // correspond à l'id de la <section>
  label: string    // texte affiché dans la nav
}

interface NavbarProps {
  surveyUrl: string  // renommé de questionnaireUrl → surveyUrl
}

// ── Données ────────────────────────────────────────────────────────────────────
// Centralisées ici car propres à la navigation.
// Si un jour tu externalises, déplace dans data/navigation.ts.

const NAV_ITEMS: NavItem[] = [
  { id: 'hero',    label: 'Accueil' },
  { id: 'why',     label: 'Pourquoi' },
  { id: 'people',  label: 'Qui ?' },
  { id: 'method',  label: 'Méthode' },
  { id: 'results', label: 'Résultats' },
  { id: 'survey',  label: 'Questionnaire' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

// ── Composant ──────────────────────────────────────────────────────────────────

/**
 * Navbar sticky avec :
 * - scroll-spy via IntersectionObserver (useScrollSpy)
 * - fond flouté qui apparaît après scroll
 * - lien CTA "Donner mon avis" toujours visible
 * - menu mobile via Radix Dialog (accessibilité native)
 *
 * Pas de React Router — navigation par ancres HTML natives.
 */
export function Navbar({ surveyUrl }: NavbarProps) {
  const activeId = useScrollSpy({ sectionIds: SECTION_IDS })
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Fond flouté après 20px de scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ferme le menu mobile au resize (si on passe en desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Navigation principale">

        {/* ── Logo / titre court ── */}
        <a href="#hero" className="navbar__brand" aria-label="Retour en haut">
          Recherche
        </a>

        {/* ── Liens desktop ── */}
        <ul className="navbar__links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink item={item} isActive={activeId === item.id} />
            </li>
          ))}
        </ul>

        {/* ── CTA toujours visible (desktop) ── */}
        <Button
          as="a"
          href={surveyUrl}
          target="_blank"
          label="Donner mon avis"
          variant="primary"
          size="sm"
          className="navbar__cta"
        />

        {/* ── Menu burger (mobile) via Radix Dialog ── */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button
              className="navbar__burger"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {/* Icône burger SVG — pas de dépendance icône */}
              <span className="navbar__burger-bar" aria-hidden="true" />
              <span className="navbar__burger-bar" aria-hidden="true" />
              <span className="navbar__burger-bar" aria-hidden="true" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="navbar__mobile-overlay" />
            <Dialog.Content
              className="navbar__mobile-drawer"
              aria-label="Menu de navigation"
            >
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>

              <ul className="navbar__mobile-links" role="list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      item={item}
                      isActive={activeId === item.id}
                      onClick={() => setMobileOpen(false)}
                      mobile
                    />
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={surveyUrl}
                target="_blank"
                label="Donner mon avis"
                variant="primary"
                size="md"
                className="navbar__mobile-cta"
                onClick={() => setMobileOpen(false)}
              />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </nav>
    </header>
  )
}

// ── NavLink ────────────────────────────────────────────────────────────────────

interface NavLinkProps {
  item: NavItem
  isActive: boolean
  onClick?: () => void
  mobile?: boolean
}

function NavLink({ item, isActive, onClick, mobile = false }: NavLinkProps) {
  return (
    <a
      href={`#${item.id}`}
      className={[
        mobile ? 'navbar__mobile-link' : 'navbar__link',
        isActive ? 'is-active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-current={isActive ? 'location' : undefined}
      onClick={onClick}
    >
      {item.label}
    </a>
  )
}