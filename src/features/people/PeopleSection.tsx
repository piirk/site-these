// features/people/PeopleSection.tsx
import { PeoplePortrait } from './PeoplePortrait'
import { TermTooltip } from '../../shared/components/TermTooltip'

/**
 * PeopleSection — les personnes derrière la recherche.
 *
 * Structure narrative (5 temps) :
 * 1. Intro           → pose la relation avant les individus
 * 2. La chercheuse   → à la première personne, affiliations en tooltips
 * 3. Les enseignantes → deux portraits sobres, anonymisés
 * 4. Les élèves      → traitement collectif et sensible
 * 5. La directrice   → ligne discrète en bas
 *
 * Choix éditoriaux :
 * - Les enseignantes sont anonymisées (Enseignante A / B) mais
 *   leurs lycées ont des noms poétiques (Montagne / Ville) — fidèle au doc
 * - Les élèves ne sont pas listés individuellement : ils forment un groupe.
 *   C'est plus juste éthiquement et plus fort narrativement.
 * - La directrice de thèse est présente mais discrète —
 *   le doc source dit "voir avec elle" donc on propose une ligne neutre
 *
 * TermTooltip réutilisé depuis features/method/ :
 * Si tu veux l'extraire dans shared/, c'est le bon moment quand
 * PeopleSection sera stable.
 */
export function PeopleSection() {
  return (
    <section
      id="people"
      className="section people-section"
      aria-labelledby="people-title"
    >
      <div className="section__inner people-section__inner">

        {/* ── Header ── */}
        <header className="people-section__header">
          <p className="eyebrow">Qui ?</p>
          <h2 id="people-title" className="section__title">
            Les personnes au cœur du projet
          </h2>
          <p className="people-section__intro">
            Cette recherche n'aurait pas existé sans deux enseignantes
            qui ont accepté d'ouvrir leurs classes, et sans les élèves
            qui les composaient. Les voici.
          </p>
        </header>

        {/* ── La chercheuse ── */}
        <div className="people-section__group">
          <p className="people-section__group-label" aria-hidden="true">
            La chercheuse
          </p>

          <PeoplePortrait
            avatar="M"
            name="Manon"
            role="Doctorante"
            variant="featured"
          >
            <p>
              Inscrite en{' '}
              <TermTooltip
                term="doctorat"
                definition="Le doctorat est le diplôme du troisième cycle universitaire. Il repose sur la réalisation d'une recherche scientifique originale, publiée sous forme de manuscrit et soutenue devant un jury de chercheurs."
              />{' '}
              au laboratoire{' '}
              <TermTooltip
                term="LIDILEM"
                definition="Linguistique et Didactique des Langues Étrangères et Maternelles — laboratoire de recherche de l'Université Grenoble Alpes spécialisé dans l'étude des langues et de leur enseignement."
              />{' '}
              de l'Université Grenoble Alpes,
              j'ai publié une{' '}
              <TermTooltip
                term="thèse"
                definition="La thèse désigne à la fois l'idée défendue durant le travail doctoral et le document qui en présente les résultats. Une fois soutenue devant un jury, elle confère le grade de docteure."
              />{' '}
              en{' '}
              <TermTooltip
                term="sciences du langage"
                definition="Science humaine qui étudie le langage dans son sens large — ses sons, ses structures, ses usages sociaux. Elle englobe des domaines comme la syntaxe, la phonétique, ou encore la didactique."
              />{' '}
              , spécialité{' '}
              <TermTooltip
                term="didactique du FLES"
                definition="Didactique du Français Langue Étrangère et Seconde : domaine qui s'intéresse à la manière dont le français est enseigné à des personnes qui ne l'ont pas comme langue maternelle."
              />{' '}
              .
            </p>
            <p>
              Ce site, c'est ma façon de partager ce travail au-delà
              du manuscrit de thèse — et de recueillir vos retours.
            </p>
          </PeoplePortrait>
        </div>

        {/* ── Les enseignantes ── */}
        <div className="people-section__group">
          <p className="people-section__group-label" aria-hidden="true">
            Les enseignantes participantes
          </p>

          <div className="people-section__duo">
            <PeoplePortrait
              avatar="M"
              name="Enseignante — lycée Montagne"
              role="Professeure d'UPE2A"
            >
              <p>
                Elle accueille des élèves allophones dans un lycée
                de secteur montagnard. C'est dans sa classe que j'ai
                passé chaque lundi pendant un an à observer, noter,
                comprendre.
              </p>
            </PeoplePortrait>

            <PeoplePortrait
              avatar="V"
              name="Enseignante — lycée Ville"
              role="Professeure d'UPE2A"
            >
              <p>
                Son lycée est en milieu urbain. Chaque mardi, même
                démarche — même carnet, même posture d'observatrice
                discrète. Deux contextes différents, une même curiosité.
              </p>
            </PeoplePortrait>
          </div>
        </div>

        {/* ── Les élèves ── */}
        <div className="people-section__group people-section__group--students">
          <p className="people-section__group-label" aria-hidden="true">
            Les élèves
          </p>

          {/*
            Traitement collectif intentionnel :
            - Pas de portraits individuels (éthique + cohérence anonymat)
            - Un paragraphe qui rend hommage au groupe sans les réduire
            - L'icône "groupe" plutôt qu'une initiale individuelle
          */}
          <div className="people-section__students-block">
            <div className="people-section__students-avatar" aria-hidden="true">
              ◎
            </div>
            <div className="people-section__students-text">
              <p className="people-section__students-heading">
                Des jeunes issus de la migration
              </p>
              <p>
                Nouvellement arrivés en France, souvent peu familiers
                de la langue française, ils composaient les deux classes
                UPE2A observées. Ce sont leurs échanges, leurs silences,
                leurs interactions avec les enseignantes qui sont au cœur
                de l'analyse — sans jamais être nommés ni identifiés.
              </p>
            </div>
          </div>
        </div>

        {/* ── Directrice de thèse ── */}
        {/*
          Ligne discrète — le doc dit "voir avec elle"
          On propose une présence sobre, facilement modifiable
        */}
        <div className="people-section__supervisor" aria-label="Encadrement de la recherche">
          <p className="people-section__supervisor-text">
            Recherche encadrée par{' '}
            <strong>[Catherine Muller]</strong>
            ,{' '}
            <TermTooltip
              term="directrice de thèse"
              definition="Enseignante-chercheuse en poste à l'université qui accompagne et supervise le travail doctoral — elle guide les choix méthodologiques et valide la démarche scientifique."
            />{' '}
            à l'Université Grenoble Alpes.
          </p>
        </div>

      </div>
    </section>
  )
}
