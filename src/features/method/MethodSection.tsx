// features/method/MethodSection.tsx

import { MethodStep } from './MethodStep'
import { TermTooltip } from './TermTooltip'

/**
 * MethodSection — les coulisses de la recherche.
 *
 * Structure narrative en 4 temps :
 * 1. La présence terrain → ancrage concret, humain
 * 2. La collecte         → micro, enregistrements, tri
 * 3. L'analyse           → cadre théorique vulgarisé
 * 4. La question         → pivot vers les résultats
 *
 * Choix UX :
 * - Voix à la première personne conservée : "Je suis allée…"
 *   C'est un atout rare dans la vulgarisation scientifique.
 *   Ça humanise et différencie du ton institutionnel.
 * - Les termes académiques sont intégrés inline avec TermTooltip :
 *   l'utilisateur curieux obtient la définition, les autres passent
 * - La question finale ("travail invisible") est hors du flux des étapes :
 *   elle appartient à la transition vers ResultsSection
 */
export function MethodSection() {
  return (
    <section id="method" className="section method-section" aria-labelledby="method-title">
      <div className="section__inner method-section__inner">

        {/* ── Header ── */}
        <header className="method-section__header">
          <p className="method-section__eyebrow">Comment ça s'est passé</p>
          <h2 id="method-title" className="section__title">
            Une année dans les classes
          </h2>
          <p className="method-section__intro">
            Pas de questionnaire envoyé par mail, pas d'entretien en bureau.
            Pour comprendre ce qui se passe vraiment en cours,
            il fallait y être — semaine après semaine.
          </p>
        </header>

        {/* ── Étapes ── */}
        <ol className="method-section__steps" aria-label="Étapes de la recherche">

          <MethodStep index={1} heading="S'immerger sur le terrain">
            <p>
              Pendant toute l'année scolaire 2021–2022, je me suis rendue chaque
              semaine dans deux lycées accueillant des classes{' '}
              <TermTooltip
                term="UPE2A"
                definition="Unité Pédagogique pour Élèves Allophones Arrivants : classe spécialisée qui accueille des élèves nouvellement arrivés en France ne maîtrisant pas encore le français."
              />{' '}
              : le lundi dans l'un, le mardi dans l'autre.
            </p>
            <p>
              À la manière d'une{' '}
              <TermTooltip
                term="ethnographe"
                definition="Chercheuse qui s'immerge dans un milieu pour l'observer de l'intérieur, comme une exploratrice découvrant une culture inconnue — sans a priori, avec un carnet."
              />{' '}
              , j'observais, je notais, je restais en retrait.
              À la fin de l'année : beaucoup… beaucoup de pages de notes.
            </p>
          </MethodStep>

          <MethodStep index={2} heading="Enregistrer et trier">
            <p>
              En parallèle, un micro posé dans la classe captait tout ce qui se disait.
              Ces enregistrements permettent ce qu'on appelle une{' '}
              <TermTooltip
                term="analyse interactionnelle"
                definition="Méthode qui étudie les échanges verbaux dans le détail : qui dit quoi, comment, à quel moment — pour comprendre ce qui se joue dans une conversation."
              />{' '}
              : étudier les échanges mot à mot.
            </p>
            <p>
              J'ai ensuite fait un tri. Pas tout, seulement les passages où la discussion
              s'éloignait de la transmission de la langue — ces moments où quelque chose
              d'autre se passait.
            </p>
          </MethodStep>

          <MethodStep index={3} heading="Analyser avec des outils">
            <p>
              Pour donner du sens à ces passages, j'ai eu recours à ce qu'on appelle
              un{' '}
              <TermTooltip
                term="cadre théorique"
                definition="Ensemble de concepts et de théories déjà établis par d'autres chercheurs, qui servent de grille de lecture pour interpréter les observations de terrain."
              />{' '}
              : des théories existantes sur le fonctionnement des échanges en classe,
              sur les relations et les identités qui s'y construisent.
            </p>
            <p>
              Mais aussi des théories sur le travail lui-même — notamment la distinction
              entre ce qu'on <em>est censé faire</em> et ce qu'on <em>fait vraiment</em>,
              ce qu'on tente, ce qu'on évite, ce qu'on fait sans que personne ne le demande.
            </p>
          </MethodStep>

          <MethodStep index={4} heading="Une question qui émerge" isLast>
            <p>
              Au fil de l'analyse, une notion s'est imposée : une partie essentielle
              du travail de ces enseignantes n'apparaît dans aucune fiche de poste.
              Elle n'est ni enseignée, ni reconnue, ni nommée.
            </p>
            <p className="method-step__body-emphasis">
              C'est ce travail-là que la recherche cherche à rendre visible.
            </p>
          </MethodStep>

        </ol>

      </div>
    </section>
  )
}
