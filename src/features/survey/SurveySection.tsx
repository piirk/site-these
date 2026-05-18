import { LockSimpleIcon, TimerIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react'
import { CtaBanner } from './CtaBanner'
import type { SurveyMeta } from '../../types'

interface SurveySectionProps {
  surveyUrl: string
  meta?: SurveyMeta
}

/**
 * SurveySection — révisée avec le contenu source.
 *
 * La formulation d'origine de la chercheuse est précieuse :
 * elle explique *pourquoi* elle a fait ce site et ce que les réponses
 * lui apportent concrètement. C'est bien plus convaincant qu'un CTA générique.
 *
 * Deux niveaux de lecture :
 * - Titre + description : pourquoi votre avis compte (raison personnelle, engagée)
 * - Réassurances : lever les objections pratiques (durée, anonymat)
 */
export function SurveySection({ surveyUrl, meta }: SurveySectionProps) {
  return (
    <section
      id="survey"
      aria-labelledby="survey-title"
      className="section survey-section"
    >
      <CtaBanner
        titleId="survey-title"
        eyebrow="Donnez votre avis"
        title="Votre retour compte pour cette recherche"
        description={DESCRIPTION}
        ctaLabel="Répondre au questionnaire — 5 minutes"
        ctaUrl={surveyUrl}
        socialProof={
          meta?.participantCount
            ? `Déjà ${meta.participantCount} personnes ont partagé leur avis.`
            : undefined
        }
        reassurances={REASSURANCES}
        variant="highlight"
      />
    </section>
  )
}

// Fidèle à la formulation de la chercheuse, légèrement resserrée.
// On garde le "je" — cohérence avec la voix du reste du site.
const DESCRIPTION =
  "J'ai créé ce site et réfléchi à des formats de restitution plus légers " +
  "parce qu'il me semble essentiel que les enseignants concernés par les études " +
  "aient accès aux savoirs qu'ils contribuent eux-mêmes à créer. " +
  "Votre retour — sur la forme du site, le livret, les memes, ou sur le fond — " +
  "m'est précieux pour valider à la fois les résultats et ces nouvelles façons de les partager."

const REASSURANCES = [
  { icon: <LockSimpleIcon size={16} weight="bold" />, text: 'Anonyme et confidentiel' },
  { icon: <TimerIcon size={16} weight="bold" />, text: '5 minutes environ' },
  { icon: <EnvelopeSimpleIcon size={16} weight="bold" />, text: 'Aucune inscription requise' },
]
