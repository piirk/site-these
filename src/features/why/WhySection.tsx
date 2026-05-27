import { FindingBlock } from './FindingBlock'
import { TermTooltip } from '../../shared/components/TermTooltip'

export function WhySection() {
  return (
    <section id="why" className="section why-section" aria-labelledby="why-title">
      <div className="section__inner why-section__inner">

        <header className="why-section__header">
          <p className="eyebrow">Pourquoi cette recherche</p>
          <h2 id="why-title" className="section__title">
            Tout a commencé par trop de questions
          </h2>
          <p className="why-section__intro">
            À la fin d'un travail de master sur les classes{' '}
              <TermTooltip
                term="UPE2A"
                definition="Unité Pédagogique pour Élèves Allophones Arrivants : classe spécialisée qui accueille des élèves nouvellement arrivés en France ne maîtrisant pas encore le français."
              />{', '}
            j'avais plus de questions qu'au départ.
            Alors quand l'opportunité de poursuivre dans le cadre d'un doctorat
            s'est présentée, j'ai accepté.
          </p>
          <p className="why-section__intro">
            Le projet s'est construit autour de deux choses qui semblaient
            ne pas coller ensemble.
          </p>
        </header>

        <ul className="why-section__findings">
          <li>
            <FindingBlock
              index={1}
              heading="Ce que dit la littérature"
              body={
                "Les enseignants d'UPE2A sont décrits dans les textes comme très investis " +
                "dans leur travail, mais ils évoquent aussi un mal-être, " +
                "une impression d'être démunis, de ne pas vraiment « faire cours »."
              }
            />
          </li>
          <li>
            <FindingBlock
              index={2}
              heading="Ce qu'on voit sur le terrain"
              body={
                "Dans les cours observés, beaucoup de moments s'éloignent de ce " +
                "qu'on s'attend à trouver dans un cours traditionnel. " +
                "Quelque chose d'autre se passe, et ça fonctionne."
              }
            />
          </li>
        </ul>

        <div className="why-section__pivot" aria-label="Question centrale de la recherche">
          <p className="why-section__pivot-text">
            Et si ces deux éléments étaient liés&nbsp;?
          </p>
          <p className="why-section__pivot-sub">
            C'est cette intuition qui est au cœur de la recherche.
          </p>
        </div>

        <div className="why-section__thesis">
          <p className="why-section__thesis-label">La thèse défendue</p>
          <blockquote className="why-section__thesis-text">
            Ces moments qui s'écartent du cours attendu sont au cœur
            de la diversification des rôles des enseignants d'UPE2A.
            S'y intéresser permet de rendre visible une partie de leur travail,
            souvent laissée de côté : celle qui les amène à questionner leur métier.
          </blockquote>
        </div>

      </div>
    </section>
  )
}
