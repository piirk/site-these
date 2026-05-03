import { SurveySection } from './features/survey/SurveySection'
import { siteConfig } from './data/config.ts'
 
function App() {
  return (
    <main>
      {/* ... autres sections ... */}
 
      <SurveySection surveyUrl={siteConfig.surveyUrl} />
 
      {/* StickyCtaBtn pointe vers la même URL */}
    </main>
  )
}

export default App
