// App.tsx — Assemblage final
// Montre l'intégration Navbar + sections + SurveySection (renommée)

import { Navbar } from './features/layout/Navbar'
import { SurveySection } from './features/survey/SurveySection'
import { HeroSection }   from './features/hero/HeroSection'
import { WhySection }    from './features/why/WhySection'
import { PeopleSection } from './features/people/PeopleSection'
import { MethodSection } from './features/method/MethodSection'
import { ResultsSection } from './features/results/ResultsSection'

import { siteConfig } from './data/config'
import { memes } from './data/results'

export function App() { 
  return (
    <>
      {/* Navbar sticky — en dehors du <main> car position: fixed */}
      <Navbar surveyUrl={siteConfig.surveyUrl} />

      <main>
        {/* Chaque section a son id qui correspond aux NAV_ITEMS */}
        <HeroSection />
        <WhySection />
        <PeopleSection />
        <MethodSection />
        <ResultsSection
          bookPdfUrl="/assets/livret-soutenance.pdf"
          bookCoverUrl="/assets/livret-cover.jpg"
          memes={memes}
          thesisUrl={siteConfig.thesisUrl}
        />

        {/* id="survey" est posé dans SurveySection directement */}
        <SurveySection surveyUrl={siteConfig.surveyUrl} />
      </main>
    </>
  )
}

export default App
