# Défocales-UPE2A

Science communication website for a linguistics doctoral thesis on UPE2A teachers in France.
Built to make academic research accessible to a general audience and collect survey responses.

→ **[defocales-upe2a.com](https://defocales-upe2a.com)**

---

## Overview

The site presents the doctoral research of Manon Boucharéchas (LIDILEM, Université Grenoble Alpes)
on the work of UPE2A teachers, specialized pedagogical units for newly arrived allophone students
in France.

The design goal was to communicate research findings through a narrative single-scroll experience
rather than a standard academic presentation. Particular attention was paid to editorial tone,
typographic hierarchy, and progressive disclosure of content.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | SCSS (custom architecture, BEM) |
| UI primitives | Radix UI (Tooltip, Dialog) |
| Icons | Phosphor Icons |
| Hosting | Vercel |
| Analytics | Vercel Analytics + Speed Insights (consent-gated) |

---

## Architecture

Feature-based structure: each section of the page owns its components, styles, and logic.
No global state management. No routing.

```
src/
├── features/
│   ├── hero/
│   ├── why/
│   ├── people/
│   ├── method/
│   ├── results/
│   ├── survey/
│   └── layout/         Navbar, Footer, dialogs, cookie consent
├── shared/             Button, TermTooltip
├── hooks/              useScrollSpy, useTheme, useIsTouchDevice, useCookieConsent
├── data/               siteConfig, content arrays
├── types/              Shared TypeScript types
└── styles/             Global SCSS: tokens → reset → components → features
```

SCSS is organized as ordered partials imported through a single `main.scss` entrypoint.
Design tokens (colors, spacing, typography, transitions) are centralized in `tokens.scss`
and exposed as CSS custom properties. Light and dark values are declared as SCSS mixins,
applied via `prefers-color-scheme` and an optional `data-theme` attribute on `<html>`.

---

## Notable decisions

**Dark mode.** `prefers-color-scheme` by default with a manual override persisted in
`localStorage`. A blocking inline script in `<head>` prevents flash of unstyled content on load.

**`TermTooltip`.** In-text glossary component that adapts to input device: Radix Tooltip
on desktop (hover), Radix Dialog bottom sheet on touch (`pointer: coarse`). The bottom sheet
has no drag handle, a deliberate choice to avoid a false affordance.

**`MemeGrid`.** Radix Dialog lightbox with keyboard (← →) and swipe navigation, implemented
with a ref-based drag handler and no gesture library.

**Radix portal isolation.** All Radix portals render into a dedicated `#portal-root` container
to avoid the `aria-hidden` conflict that occurs when portals are direct children of `body`.

**Scroll-spy.** Active section is tracked via `IntersectionObserver` and reflected in the
navbar, implemented in a custom `useScrollSpy` hook.

---

## Accessibility

- WCAG AA contrast compliance across both light and dark themes, verified against computed values
- Full keyboard navigation: focus trap on the mobile menu, visible focus indicators throughout
- `prefers-reduced-motion` respected globally: all CSS transitions and animations opt out when
  the preference is set
- Radix UI handles ARIA semantics for tooltips and dialogs
- Semantic list markup enforced throughout (`<ul>/<ol>` + `<li>`)
- All interactive elements carry explicit accessible labels

---

## Privacy & analytics

Analytics are loaded conditionally based on user consent, managed by a custom `useCookieConsent`
hook. Consent is persisted in `localStorage` with three states: `accepted / refused / unset`.
No third-party CMP or cookie library is used.

---

## SEO

- Full Open Graph and Twitter Card meta tags
- JSON-LD structured data (`Thesis` schema)
- `sitemap.xml` and `robots.txt`
- Canonical URL

---

## Local development

Requires Node 18+. SCSS is compiled natively by Vite, no manual compilation step needed.

```bash
npm install
npm run dev
```

```bash
npm run build      # production build
npm run preview    # preview the build locally
```

---

## Deployment

Automatic deployment to Vercel on every push to `main`.

---

## Licenses

This repository is published under **two separate licenses** depending on the nature of the content.

### Source code · MIT License

Copyright (c) 2026 Baptiste Boucharéchas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Editorial content · CC BY-NC-ND 4.0

The texts, images, and editorial content of this site are the property of
Manon Boucharéchas and are published under the
[Creative Commons Attribution – NonCommercial – NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/) license.

You are free to share this content provided you: credit the author,
do not use it for commercial purposes, and do not modify it.
