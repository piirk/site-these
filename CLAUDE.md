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
- Phosphor Icons (`@phosphor-icons/react`) — icônes dans PeopleSection, SurveySection, LegalNoticesDialog
- Architecture feature-based

---

## Conventions de nommage

- **Tout le code est en anglais** : variables, fonctions, noms de fichiers, classes CSS
  (le contenu textuel du site reste en français)
- Tout ce qui concerne le questionnaire s'appelle **Survey**
  (`SurveySection`, `surveyUrl`, `SurveyMeta`, etc.) — jamais `Questionnaire`
- Classes CSS en BEM : `.block__element--modifier`
- Le pattern eyebrow est une classe partagée `.eyebrow` (définie dans `_components.scss`)

---

## Architecture des dossiers

```
src/
├── features/
│   ├── hero/           HeroSection
│   ├── why/            WhySection + FindingBlock
│   ├── people/         PeopleSection + PeoplePortrait
│   ├── method/         MethodSection + MethodStep
│   ├── results/        ResultsSection + FormatBlock + BookViewer + MemeGrid
│   │                   TwineBlock (inactif — Twine pas encore existant)
│   ├── survey/         SurveySection + CtaBanner (inactif — conservé pour usage futur)
│   └── layout/         Navbar + Footer + LegalNoticesDialog + CookieConsentBanner
├── shared/
│   ├── components/     TermTooltip
│   └── ui/             Button
├── hooks/
│   ├── useScrollSpy.ts
│   ├── useIsTouchDevice.ts
│   └── useCookieConsent.ts
├── data/
│   ├── config.ts       siteConfig (surveyUrl, thesisUrl, contactEmail)
│   └── results.ts      memes[]
├── types/
│   └── index.ts        Person, Meme, SurveyMeta, SiteConfig...
└── styles/
    ├── main.scss           point d'entrée (@use de tous les partiels)
    ├── tokens.scss         variables CSS (:root)
    ├── global.scss         reset, body, #root, .section
    ├── radix.scss          tooltip-content, dialog styles Radix
    ├── term-tooltip.scss   .term-trigger, .term-sheet, bottom sheet mobile
    ├── components.scss     .btn, .eyebrow
    ├── navbar.scss
    ├── hero.scss
    ├── why.scss
    ├── method.scss
    ├── people.scss
    ├── results.scss
    ├── survey.scss         .survey-section, .cta-banner (inactif)
    ├── footer.scss         .site-footer, .legal-notices-dialog
    └── cookie-consent.scss .cookie-banner (bannière RGPD)
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
| Footer | — | ✅ |

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
// Mobile (hover: none + pointer: coarse) : Radix Dialog bottom sheet (non draggable — pas de faux affordance)
// Requiert <div id="portal-root"></div> dans index.html (après #root)
<TermTooltip term="ethnographe" definition="Définition vulgarisée..." />
```

### `CtaBanner` (`features/survey/CtaBanner.tsx`)
```tsx
// Composant interne à la feature survey — actuellement inactif (SurveySection redesignée)
// Conservé pour un éventuel usage futur
<CtaBanner
  eyebrow="Texte petit au-dessus"
  titleId="id-pour-aria"
  title="Titre principal"
  description="Texte explicatif"
  ctaLabel="Texte du bouton"
  ctaUrl={surveyUrl}
  socialProof="Déjà 47 personnes ont répondu."  // optionnel
  reassurances={[{ icon: <LockSimpleIcon size={16} weight="bold" />, text: 'Anonyme' }]}  // optionnel — icon est ReactNode (Phosphor)
  variant="default | highlight"
/>
```

### `CookieConsentBanner` (`features/layout/CookieConsentBanner.tsx`)
```tsx
// Bannière RGPD/CNIL fixe en bas de page — pas de Radix, HTML natif
// Montée uniquement si consent === 'unset' (localStorage key: 'cookie-consent')
// Focus auto sur "Accepter" au montage (accessibilité clavier)
// Analytics Vercel conditionnés au consentement dans App.tsx
// Bouton "Cookies" dans le footer pour rouvrir (onResetConsent prop)
// useCookieConsent hook : { consent, accept, refuse, reset }
```

### `LegalNoticesDialog` (`features/layout/LegalNoticesDialog.tsx`)
```tsx
// Radix Dialog centré, ouvert depuis le footer
// Contenu : éditeur, conception, hébergement, contact, droits mèmes
// Keyframe dédié `legal-dialog-in` (intègre translate(-50%,-50%) pour éviter flash bas-droite)
<LegalNoticesDialog open={legalOpen} onOpenChange={setLegalOpen} contactEmail={contactEmail} />
```

---

## Radix UI — règles d'utilisation

- `TermTooltip` → `@radix-ui/react-tooltip` + `@radix-ui/react-dialog`
- `MemeGrid` lightbox → `@radix-ui/react-dialog`
- `LegalNoticesDialog` → `@radix-ui/react-dialog` (centré, scrollable, ouvert depuis le footer)
- Navbar burger → **PAS de Radix** (état React simple, évite conflit Dialog)
- Tous les Portals utilisent `container={document.getElementById('portal-root')}`

### Bug connu résolu
Radix Dialog posait `aria-hidden="true"` sur ses propres portals quand
ils étaient enfants directs de `body`. Solution : `<div id="portal-root">`
dans `index.html` passé comme `container` à chaque `Dialog.Portal`.

---

## SCSS — règles

- Pas de `isolation: isolate` sur `#root` (bloque les Radix Portals)
- `scroll-padding-top: var(--navbar-height)` sur `html`
- `padding-top: var(--navbar-height)` sur `#root`
- Variables dans `tokens.scss`, jamais en dur dans les composants
- Ordre des `@use` dans main.scss : `tokens` → `global` → `radix` → `term-tooltip`
  → `components` → `navbar` → `hero` → `why` → `method` → `people` → `results` → `survey` → `footer` → `cookie-consent`
- BEM nesting : tous les `__éléments` et `--modifiers` sont nestés sous leur bloc parent
  ```scss
  .block {
    &--modifier { }
    &__element { }
  }
  ```
- Les media queries sont déclarées **inline** dans l'élément concerné, pas dans un bloc séparé en bas de fichier
- `main.tsx` importe `./styles/main.scss` directement — Vite compile le SCSS nativement (pas de compilation manuelle)

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

- [x] Intégrer les vrais assets (PDF livret, memes) — déposer dans `public/assets/` (cf. structure dans le code)
- [x] **[avec Manon]** Révision des textes via le doc retour de Manon (skill Boileau)
- [x] Vérifier avec Manon si les pseudonymes des enseignantes sont à préciser — déplacer ou élargir la note "Tous les prénoms sont des pseudonymes" en conséquence (`PeopleSection`)
- [x] Créer une favicon aux couleurs du site — option A choisie (monogramme "D" blanc sur fond terre cuite, `favicon-option-a.svg` copié dans `favicon.svg`)
- [x] Titre du site : **Défocales-UPE2A**
- [x] Revoir PeopleSection pour l'intégration des pseudonymes (cf. doc)
- [x] Remplacer les emojis des `reassurances` dans `CtaBanner` (SurveySection) par des icônes Phosphor (`LockSimpleIcon`, `TimerIcon`, `EnvelopeSimpleIcon`)
- [x] Faire le footer
- [x] Corriger l'orthographe du nom dans le footer : "Boucharéchas" (avec accent)
- [x] Intégrer le lien vers la thèse de Manon : https://theses.hal.science/tel-05578702
- [x] Ajouter les mentions légales (LegalNoticesDialog) — ouvert depuis le footer, lien GitHub "piirk"
- [x] Revoir la qualité de SurveySection — redesignée pour s'aligner sur les autres sections (plus de CtaBanner centré)
- [x] Installer et implémenter les analytics Vercel
- [x] Implémenter la gestion de consentement cookies (RGPD/CNIL) — `useCookieConsent`, `CookieConsentBanner`, analytics conditionnés
- [ ] Activer TwineBlock quand le parcours Twine sera créé
- [ ] Accessibilité : audit complet (score Lighthouse, contrastes couleurs WCAG AA, focus visible, aria-labels, navigation clavier) — inclut les alt texts des mèmes (`src/data/results.ts`)
- [x] SEO : balises meta (title, description, og:image, og:url…), sitemap, robots.txt
- [x] Passer sur tous les fichiers et retirer les commentaires superflus (description du WHAT)

**Éventuellement, si décidé :**
- Ajouter une section "À venir" (lien vers corpus)
- Ajouter des liens vers les publications scientifiques s'appuyant sur la recherche
