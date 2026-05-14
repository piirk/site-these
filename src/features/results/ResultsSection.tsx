// features/results/ResultsSection.tsx
import { FormatBlock } from './FormatBlock'
import { BookViewer } from './BookViewer'
import { MemeGrid } from './MemeGrid'
import { TwineBlock } from './TwineBlock'
// import { CtaBanner } from '../../shared/components/CtaBanner'
import type { Meme } from './MemeGrid'

interface ResultsSectionProps {
  surveyUrl: string
  bookPdfUrl: string
  bookCoverUrl: string
  twineUrl: string
  memes: Meme[]
}

/**
 * ResultsSection — orchestrateur pur, zéro logique interne.
 *
 * Structure narrative en 4 temps :
 * 1. Bascule        → transition depuis MethodSection, idée centrale
 * 2. Le livret      → format dense, présenté en premier (attention maximale)
 * 3. Les memes      → rupture de ton, plus léger
 * 4. Twine          → invitation, le plus expérimental
 * + CtaBanner       → rappel Survey avant de quitter la section
 */

// surveyUrl,
export function ResultsSection({
  bookPdfUrl,
  bookCoverUrl,
  twineUrl,
  memes,
}: ResultsSectionProps) {
  return (
    <section id="results" className="section results-section" aria-labelledby="results-title">

      {/* ── 1. Bascule narrative ── */}
      <div className="results-section__intro">
        <div className="section__inner">
          <p className="results-section__eyebrow">Les résultats</p>
          <h2 id="results-title" className="section__title">
            Ce que la recherche permet de voir
          </h2>
          {/* Idée centrale — typographiquement forte, fond coloré */}
          <div className="results-section__thesis-callout">
            <p className="results-section__thesis-text">
              Les enseignants d'UPE2A font bien plus que transmettre
              une langue. Ils construisent des relations, négocient
              des identités, inventent des rôles que personne ne leur
              a demandés — et c'est précisément là que réside
              l'essentiel de leur travail.
            </p>
          </div>
          <p className="results-section__sub">
            Plutôt qu'un exposé théorique, voici trois façons
            d'entrer dans ces résultats.
          </p>
        </div>
      </div>

      {/* ── 2–4. Les formats ── */}
      <div className="results-section__formats">
        <div className="section__inner results-section__formats-inner">

          <FormatBlock
            id="results-book"
            title="En feuilletant"
            description={
              "Le livret résumé, conçu à l'origine pour la soutenance de thèse. " +
              "Il présente les grandes lignes des résultats de manière condensée " +
              "et accessible — sans les 300 pages du manuscrit."
            }
          >
            <BookViewer
              pdfUrl={bookPdfUrl}
              coverUrl={bookCoverUrl}
              title="Livret de soutenance"
              pageCount={24}
            />
          </FormatBlock>

          <FormatBlock
            id="results-memes"
            title="En images"
            description={
              "Des memes, oui. Parce que parfois une image dit mieux " +
              "qu'un paragraphe ce que vivent les enseignants au quotidien. " +
              "Et parce que l'humour est une façon sérieuse de parler " +
              "de choses sérieuses."
            }
          >
            <MemeGrid memes={memes} />
          </FormatBlock>

          <FormatBlock
            id="results-twine"
            title="En jouant"
            description={
              "Un parcours interactif où vous vous retrouvez " +
              "à la place de l'enseignante. Même situation, mêmes choix, " +
              "mêmes contraintes — sans mode d'emploi."
            }
          >
            <TwineBlock url={twineUrl} />
          </FormatBlock>

        </div>
      </div>

      {/* ── Rappel Survey ── */}
      {/*
      <div className="section__inner">
        <CtaBanner
          eyebrow="Avant de continuer"
          title="Ces résultats vous ont parlé ?"
          description="Votre retour — même en deux mots — compte pour la recherche."
          ctaLabel="Donner mon avis — 5 minutes"
          ctaUrl={surveyUrl}
          variant="default"
          className="results-section__survey-reminder"
        />
      </div>
      */}

    </section>
  )
}
