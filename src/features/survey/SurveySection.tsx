import { LockSimpleIcon, TimerIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react'
import { Button } from '../../shared/ui/Button'
import type { SurveyMeta } from '../../types'

interface SurveySectionProps {
  surveyUrl: string
  meta?: SurveyMeta
}

export function SurveySection({ surveyUrl, meta }: SurveySectionProps) {
  return (
    <section
      id="survey"
      aria-labelledby="survey-title"
      className="section survey-section"
    >
      <div className="section__inner">

        <header className="survey-section__header">
          <p className="eyebrow" aria-hidden="true">Donnez votre avis</p>
          <h2 id="survey-title" className="section__title">
            Votre retour compte pour cette recherche
          </h2>
          <p className="survey-section__description">{DESCRIPTION}</p>
        </header>

        {meta?.participantCount && (
          <p className="survey-section__social-proof" aria-live="polite">
            ✓ Déjà {meta.participantCount} personnes ont partagé leur avis.
          </p>
        )}

        <div className="survey-section__cta">
          <Button
            as="a"
            href={surveyUrl}
            target="_blank"
            label="Répondre au questionnaire · 5 minutes"
            variant="primary"
            size="lg"
          />
        </div>

        <ul className="survey-section__reassurances" aria-label="Informations pratiques">
          {REASSURANCES.map(({ icon, text }) => (
            <li key={text} className="survey-section__reassurance-item">
              <span aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

const DESCRIPTION =
  "J'ai créé ce site et réfléchi à des formats de restitution plus légers " +
  "parce qu'il me semble essentiel que les enseignants concernés par les études " +
  "aient accès aux savoirs qu'ils contribuent eux-mêmes à créer. " +
  "Votre retour (sur la forme du site, le livret, les memes, ou sur le fond) " +
  "m'est précieux pour valider à la fois les résultats et ces nouvelles façons de les partager."

const REASSURANCES = [
  { icon: <LockSimpleIcon size={16} weight="bold" />, text: 'Anonyme et confidentiel' },
  { icon: <TimerIcon size={16} weight="bold" />, text: '5 minutes environ' },
  { icon: <EnvelopeSimpleIcon size={16} weight="bold" />, text: 'Aucune inscription requise' },
]
