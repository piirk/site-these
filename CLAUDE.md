# CLAUDE.md — Contexte du projet

---

## Le projet

Site de vulgarisation scientifique présentant une recherche doctorale
sur le travail des enseignants d'UPE2A (classes accueillant des élèves
allophones nouvellement arrivés en France).

**Objectifs du site :**
- Rendre accessible une thèse en sciences du langage
- Humaniser la recherche (ton humain, pas institutionnel)
- Récolter des réponses à un questionnaire (objectif principal)
- Narration progressive en scroll unique

---

## Stack

- React + TypeScript
- Vite
- SCSS (modules partiels avec `@use`)
- Radix UI (uniquement pour les interactions utiles)
- Architecture feature-based

---

## Conventions de nommage importantes

- Tout ce qui concerne le questionnaire s'appelle **Survey**
  (`SurveySection`, `surveyUrl`, `SurveyMeta`, etc.)
- Jamais `Questionnaire` dans le code

---

## Architecture des dossiers

```
src/
├── features/
│   ├── hero/           HeroSection
│   ├── why/            WhySection + FindingBlock
│   ├── people/         PeopleSection + PeoplePortrait
│   ├── method/         MethodSection + MethodStep
│   ├── results/        ResultsSection + FormatBlock + BookViewer + MemeGrid + TwineBlock
│   ├── survey/         SurveySection
│   └── layout/         Navbar + StickyCtaBtn (à faire)
├── shared/
│   ├── components/     CtaBanner, TermTooltip
│   └── ui/             Button
├── hooks/
│   ├── useScrollSpy.ts
│   └── useIsTouchDevice.ts
├── data/
│   ├── config.ts       siteConfig (surveyUrl, etc.)
│   └── results.ts      memes[]
├── types/
│   └── index.ts        Person, Meme, SurveyMeta, SiteConfig...
└── styles/
    ├── main.scss       point d'entrée (@use de tous les partiels)
    ├── _tokens.scss    variables CSS (:root)
    ├── _global.scss    reset, body, #root, .section
    ├── _radix.scss     tooltip-content, dialog styles Radix
    ├── _term-tooltip.scss  .term-trigger, .term-sheet, bottom sheet mobile
    ├── _components.scss    .btn, .cta-banner
    ├── _navbar.scss
    ├── _hero.scss
    ├── _why.scss
    ├── _method.scss
    ├── _people.scss
    ├── _results.scss
    └── _survey.scss
```

---

## Sections existantes (dans l'ordre de la page)

| Section | id | Statut |
|---|---|---|
| HeroSection | `#hero` | ✅ |
| WhySection | `#why` | ✅ |
| PeopleSection | `#people` | ✅ |
| MethodSection | `#method` | ✅ |
| ResultsSection | `#results` | ✅ |
| SurveySection | `#survey` | ✅ |

---

## Composants partagés clés

### `Button`
```tsx
// as="a" pour les liens, as="button" (défaut) pour les actions
// variants : primary | secondary | ghost
// sizes : sm | md | lg
// prop label = aria-label (obligatoire)
<Button as="a" href={url} label="Texte accessible" variant="primary" size="lg" />
```

### `TermTooltip`
```tsx
// Desktop : Radix Tooltip au hover
// Mobile (hover: none + pointer: coarse) : Radix Dialog bottom sheet
// Requiert <div id="portal-root"></div> dans index.html (après #root)
<TermTooltip term="ethnographe" definition="Définition vulgarisée..." />
```

### `CtaBanner`
```tsx
// Utilisé dans SurveySection et en rappel dans ResultsSection
<CtaBanner
  eyebrow="Texte petit au-dessus"
  titleId="id-pour-aria"
  title="Titre principal"
  description="Texte explicatif"
  ctaLabel="Texte du bouton"
  ctaUrl={surveyUrl}
  socialProof="Déjà 47 personnes ont répondu."  // optionnel
  reassurances={[{ icon: '🔒', text: 'Anonyme' }]}  // optionnel
  variant="default | highlight"
/>
```

---

## Radix UI — règles d'utilisation

- `TermTooltip` → `@radix-ui/react-tooltip` + `@radix-ui/react-dialog`
- `MemeGrid` lightbox → `@radix-ui/react-dialog`
- Navbar burger → **PAS de Radix** (état React simple, évite conflit Dialog)
- Tous les Portals utilisent `container={document.getElementById('portal-root')}`

### Bug connu résolu
Radix Dialog posait `aria-hidden="true"` sur ses propres portals quand
ils étaient enfants directs de `body`. Solution : `<div id="portal-root">`
dans `index.html` passé comme `container` à chaque `Dialog.Portal`.

---

## SCSS — règles

- Pas de `isolation: isolate` sur `#root` (bloque les Radix Portals)
- `scroll-padding-top: calc(var(--navbar-height) + 1rem)` sur `html`
- `padding-top: var(--navbar-height)` sur `#root`
- Variables dans `_tokens.scss`, jamais en dur dans les composants
- Ordre des `@use` dans main.scss : tokens → global → radix → term-tooltip
  → components → navbar → hero → why → method → people → results → survey

---

## Philosophie UX/UI

- Ton humain, voix à la 1ère personne conservée dans le contenu
- Pas de cards génériques style "team members"
- Beaucoup d'air et de respiration entre les éléments
- Forte hiérarchie typographique (eyebrow → titre → intro → corps)
- Eyebrow pattern : `font-ui`, 0.8rem, uppercase, letter-spacing, border-left accent
- Palette : blanc chaud (`#faf9f7`), terre cuite accent (`#c85a2a`),
  serif pour les titres (Playfair Display), serif pour le corps (Source Serif 4),
  sans-serif pour l'UI (DM Sans)
- Transitions : `--duration-fast: 150ms`, `--duration-normal: 220ms`

---

## À faire (prochaines étapes)

- [ ] `StickyCtaBtn` — bouton flottant visible au scroll sur toute la page
- [ ] Intégrer les vrais assets (PDF livret, cover, memes, URL Twine)
