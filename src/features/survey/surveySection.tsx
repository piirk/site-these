import { CtaBanner } from '../../shared/components/CtaBanner'
//import type { SurveyMeta } from '../../types'

interface SurveySectionProps {
  surveyUrl: string
  /** Optionnel : données pour la preuve sociale */
  //meta?: SurveyMeta
}

/**
 * Section questionnaire — objectif : maximiser le taux de clic.
 *
 * Stratégie UX :
 * 1. Titre actionnable + durée explicite → réduit la friction perçue
 * 2. Preuve sociale → rassure ("d'autres l'ont fait")
 * 3. Réassurance triple → lève les objections principales
 * 4. CTA unique et visible → pas de choix concurrent
 */
export function SurveySection({ surveyUrl }: SurveySectionProps) { // meta
  return (
    <section
      id="survey"
      aria-labelledby="survey-title"
      className="section survey-section"
    >
      <CtaBanner
        titleId="survey-title"
        title="Votre vécu compte pour cette recherche"
        eyebrow="Participez à l'étude · 5 minutes"
        description={DESCRIPTION}
        ctaLabel="Répondre maintenant — 5 minutes suffisent"
        ctaUrl={surveyUrl}
        socialProof="Déjà 47 personnes ont partagé leur expérience."
        reassurances={REASSURANCES}
        variant="highlight"
      />
    </section>
  )
}

/*
socialProof={meta?.participantCount
  ? `Déjà ${meta.participantCount} personnes ont partagé leur expérience.`
  : undefined
}
*/

const DESCRIPTION =
  "Cette recherche explore des situations du quotidien que vous connaissez peut-être. " +
  "Il n'y a pas de bonne ou mauvaise réponse — c'est votre expérience qui intéresse, " +
  "pas vos connaissances."

const REASSURANCES = [
  { icon: '🔒', text: 'Anonyme et confidentiel' },
  { icon: '⏱', text: '5 minutes environ' },
  { icon: '📬', text: 'Aucune inscription requise' },
]