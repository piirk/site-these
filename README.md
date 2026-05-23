# Défocales-UPE2A

A science communication website presenting doctoral research on the work of UPE2A teachers
(pedagogical units for newly arrived allophone students in France).

Designed to make a linguistics thesis accessible to a general audience, and to collect
responses to a research survey.

→ [defocales-upe2a.com](https://defocales-upe2a.com)

---

## Stack

- React 19 + TypeScript
- Vite
- SCSS (partials, BEM architecture)
- Radix UI (Tooltip, Dialog)
- Phosphor Icons
- Vercel (hosting + Analytics + Speed Insights)

## Local development

```bash
npm install
npm run dev
```

## Structure

```
src/
├── features/       # Page sections (hero, why, people, method, results, survey, layout)
├── shared/         # Shared components (Button, TermTooltip)
├── hooks/          # useScrollSpy, useTheme, useIsTouchDevice, useCookieConsent
├── data/           # siteConfig, memes
├── types/          # Shared TypeScript types
└── styles/         # Global SCSS organized by tokens, components and features
```

## Deployment

The site deploys automatically to Vercel on every push to `main`.

---

## Licenses

This repository is published under **two separate licenses** depending on the nature of the content.

### Source code — MIT License

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

### Editorial content — CC BY-NC-ND 4.0

The texts, images, and editorial content of this site are the property of
Manon Boucharéchas and are published under the
[Creative Commons Attribution – NonCommercial – NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/) license.

You are free to share this content provided you: credit the author,
do not use it for commercial purposes, and do not modify it.
