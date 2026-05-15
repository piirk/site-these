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
        <HeroSection surveyUrl={siteConfig.surveyUrl} />
        <WhySection />
        <PeopleSection />
        <MethodSection />
         <ResultsSection
          surveyUrl={siteConfig.surveyUrl}
          bookPdfUrl="/assets/livret-soutenance.pdf"
          bookCoverUrl="/assets/livret-cover.jpg"
          twineUrl="https://twinery.org/2/#/stories/62cf8941-a724-4cb6-92f5-ee2745771e67"
          memes={memes}
        />

        {/* id="survey" est posé dans SurveySection directement */}
        <SurveySection surveyUrl={siteConfig.surveyUrl} />
      </main>
    </>
  )
}

export default App
