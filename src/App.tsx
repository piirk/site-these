import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { Navbar } from './features/layout/Navbar'
import { Footer } from './features/layout/Footer'
import { CookieConsentBanner } from './features/layout/CookieConsentBanner'
import { SurveySection } from './features/survey/SurveySection'
import { HeroSection }   from './features/hero/HeroSection'
import { WhySection }    from './features/why/WhySection'
import { PeopleSection } from './features/people/PeopleSection'
import { MethodSection } from './features/method/MethodSection'
import { ResultsSection } from './features/results/ResultsSection'

import { useCookieConsent } from './hooks/useCookieConsent'
import { siteConfig } from './data/config'
import { memes } from './data/results'

export function App() {
  const { consent, accept, refuse, reset } = useCookieConsent()

  return (
    <>
      {/* outside <main> — position: fixed */}
      <Navbar surveyUrl={siteConfig.surveyUrl} />

      <main>
        <HeroSection />
        <WhySection />
        <PeopleSection />
        <MethodSection />
        <ResultsSection
          bookPdfUrl="/assets/livret-soutenance.pdf"
          bookCoverUrl="/assets/livret-cover.webp"
          memes={memes}
          thesisUrl={siteConfig.thesisUrl}
        />

        <SurveySection surveyUrl={siteConfig.surveyUrl} />
      </main>

      <Footer
        surveyUrl={siteConfig.surveyUrl}
        thesisUrl={siteConfig.thesisUrl}
        contactEmail={siteConfig.contactEmail}
        onResetConsent={reset}
      />

      {consent === 'unset' && (
        <CookieConsentBanner onAccept={accept} onRefuse={refuse} />
      )}

      {consent === 'accepted' && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  )
}

export default App
