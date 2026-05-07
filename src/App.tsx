// App.tsx — Assemblage final
// Montre l'intégration Navbar + sections + SurveySection (renommée)

import { Navbar } from './features/layout/Navbar'
import { SurveySection } from './features/survey/SurveySection'
import { HeroSection }   from './features/hero/HeroSection'
import { WhySection }    from './features/why/WhySection'
// import { PeopleSection } from './features/people/PeopleSection'
// import { MethodSection } from './features/method/MethodSection'
// import { ResultsSection } from './features/results/ResultsSection'

import { siteConfig } from './data/config'

export function App() {
  return (
    <>
      {/* Navbar sticky — en dehors du <main> car position: fixed */}
      <Navbar surveyUrl={siteConfig.surveyUrl} />

      <main>
        {/* Chaque section a son id qui correspond aux NAV_ITEMS */}
        <HeroSection surveyUrl={siteConfig.surveyUrl} />
        <WhySection />
        <section id="people"  className="section"><p>People</p></section>
        <section id="method"  className="section"><p>Method</p></section>
        <section id="results" className="section"><p>Results</p></section>

        {/* id="survey" est posé dans SurveySection directement */}
        <SurveySection surveyUrl={siteConfig.surveyUrl} />
      </main>
    </>
  )
}

export default App

// ─── data/config.ts ───────────────────────────────────────────────────────────
// (à créer séparément)
//
// import type { SiteConfig } from '../types'
//
// export const siteConfig: SiteConfig = {
//   surveyUrl: 'https://tally.so/r/ton-id-ici',
//   researchTitle: 'Titre de la recherche',
//   researchTagline: 'Phrase d\'accroche',
// }