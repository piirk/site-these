// Radix Dialog removed — two simultaneous Dialog.Root caused unpredictable behavior with TermTooltip.

import { useEffect, useState, useRef } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'
import { Button } from '../../shared/ui/Button'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  surveyUrl: string
}

const NAV_ITEMS = [
  { id: 'hero',    label: 'Accueil' },
  { id: 'why',     label: 'Pourquoi' },
  { id: 'people',  label: 'Qui ?' },
  { id: 'method',  label: 'Méthode' },
  { id: 'results', label: 'Résultats' },
  { id: 'survey',  label: 'Questionnaire' },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar({ surveyUrl }: NavbarProps) {
  const activeId = useScrollSpy({ sectionIds: SECTION_IDS })
  const { theme, toggle } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ferme sur resize desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Focus trap + Escape quand le menu est ouvert
  useEffect(() => {
    if (!mobileOpen || !drawerRef.current) return

    const drawer = drawerRef.current
    const focusables = Array.from(
      drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')
    )
    focusables[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        burgerRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  // Bloque le scroll body + rend le drawer inerte (non-tabulable) quand fermé
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (drawerRef.current) {
      if (mobileOpen) {
        drawerRef.current.removeAttribute('inert')
      } else {
        drawerRef.current.setAttribute('inert', '')
      }
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <nav className="navbar__inner" aria-label="Navigation principale">

          <a href="#hero" className="navbar__brand" aria-label="Retour en haut">
            Défocales - UPE2A
          </a>

          <ul className="navbar__links" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink item={item} isActive={activeId === item.id} />
              </li>
            ))}
          </ul>

          <Button
            as="a"
            href={surveyUrl}
            target="_blank"
            label="Donner mon avis"
            variant="primary"
            size="sm"
            className="navbar__cta"
          />

          <div className="navbar__end">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <button
              ref={burgerRef}
              className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="navbar__burger-bar" aria-hidden="true" />
              <span className="navbar__burger-bar" aria-hidden="true" />
              <span className="navbar__burger-bar" aria-hidden="true" />
            </button>
          </div>

        </nav>
      </header>

      {/* Overlay — en dehors du <header> pour couvrir toute la page */}
      {mobileOpen && (
        <div
          className="navbar__mobile-overlay"
          aria-hidden="true"
          onClick={closeMobile}
        />
      )}

      {/* Drawer — géré par état React, pas Radix */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`navbar__mobile-drawer ${mobileOpen ? 'navbar__mobile-drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Menu de navigation"
        aria-modal="true"
      >
        <ul className="navbar__mobile-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                item={item}
                isActive={activeId === item.id}
                onClick={closeMobile}
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
          onClick={closeMobile}
        />
      </div>
    </>
  )
}

interface NavLinkProps {
  item: { id: string; label: string }
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
      ].filter(Boolean).join(' ')}
      aria-current={isActive ? 'location' : undefined}
      onClick={onClick}
    >
      {item.label}
    </a>
  )
}
