import { FormatBlock } from './FormatBlock'
import { BookViewer } from './BookViewer'
import { MemeGrid } from './MemeGrid'
import { Button } from '../../shared/ui/Button'
import type { Meme } from '../../types/index'

interface ResultsSectionProps {
  bookPdfUrl: string
  bookCoverUrl: string
  memes: Meme[]
  thesisUrl: string
}

export function ResultsSection({
  bookPdfUrl,
  bookCoverUrl,
  memes,
  thesisUrl,
}: ResultsSectionProps) {
  return (
    <section id="results" className="section results-section" aria-labelledby="results-title">

      <div className="results-section__intro">
        <div className="section__inner">
          <p className="eyebrow">Les résultats</p>
          <h2 id="results-title" className="section__title">
            Ce que la recherche permet de voir
          </h2>
          <div className="results-section__thesis-callout">
            <p className="results-section__thesis-text">
              Les enseignants d'UPE2A font bien plus que transmettre
              une langue. Ils construisent des relations, négocient
              des identités, inventent des rôles que personne ne leur
              a demandés, et c'est précisément là que réside
              l'essentiel de leur travail.
            </p>
          </div>
          <p className="results-section__sub">
            Plutôt qu'un exposé théorique, voici deux façons
            d'entrer dans ces résultats.
          </p>
        </div>
      </div>

      <div className="results-section__formats">
        <div className="section__inner results-section__formats-inner">

          <FormatBlock
            id="results-book"
            title="En feuilletant"
            description={
              "Le livret résumé, conçu à l'origine pour la soutenance de thèse. " +
              "Il présente les grandes lignes des résultats de manière condensée " +
              "et accessible, sans les 300 pages du manuscrit."
            }
          >
            <BookViewer
              pdfUrl={bookPdfUrl}
              coverUrl={bookCoverUrl}
              title="Livret de soutenance"
              pageCount={12}
            />
            <Button
              as="a"
              href={thesisUrl}
              label="Lire le manuscrit complet ↗"
              variant="ghost"
              size="sm"
              target="_blank"
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

        </div>
      </div>

    </section>
  )
}
