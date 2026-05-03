import { CtaBanner } from '../../shared/components/CtaBanner'
 
interface SurveySectionProps {
  /** URL du questionnaire externe (Tally, Typeform, Framaforms…) */
  surveyUrl: string
}
 
/**
 * Section principale du site — appel à action questionnaire.
 *
 * Choix de conception :
 * - Délègue le rendu visuel à CtaBanner (pas de doublon de structure)
 * - Isole le contenu éditorial ici (textes, id d'ancre)
 * - L'id="survey" est ce que les CTA du Hero ciblent via href="#survey"
 */
export function SurveySection({ surveyUrl }: SurveySectionProps) {
  return (
    <section
      id="survey"
      aria-labelledby="survey-title"
      className="section survey-section"
    >
      <CtaBanner
        title="Donner mon avis (5 min)"
        description={DESCRIPTION}
        ctaLabel="Répondre au questionnaire — 5 minutes suffisent"
        ctaUrl={surveyUrl}
        variant="highlight"
      />
    </section>
  )
}
 
// Isolé pour lisibilité et traduction future
const DESCRIPTION =
  "Cette recherche s'intéresse à des expériences vécues que vous connaissez peut-être. " +
  "Votre regard, même anonyme, contribue directement à enrichir les résultats. " +
  "Le questionnaire prend environ 5 minutes."
