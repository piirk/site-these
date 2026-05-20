import { MethodStep } from './MethodStep'
import { TermTooltip } from '../../shared/components/TermTooltip'

export function MethodSection() {
  return (
    <section id="method" className="section method-section" aria-labelledby="method-title">
      <div className="section__inner method-section__inner">

        <header className="method-section__header">
          <p className="eyebrow">Comment ça s'est passé</p>
          <h2 id="method-title" className="section__title">
            Une année dans les classes
          </h2>
          <p className="method-section__intro">
            Pas de questionnaire envoyé par mail : pour comprendre 
            ce qui se passe vraiment en cours,
            il fallait y être, semaine après semaine.
          </p>
        </header>

        <ol className="method-section__steps" aria-label="Étapes de la recherche">

          <MethodStep index={1} heading="S'immerger sur le terrain">
            <p>
              Pendant toute l'année scolaire 2021–2022, je me suis rendue chaque
              semaine dans deux lycées : le lundi dans le lycée Montagne,
              le mardi dans le lycée Ville. À chaque fois, une journée entière
              passée dans la classe UPE2A aux côtés des enseignantes.
            </p>
            <p>
              À la manière d'une{' '}
              <TermTooltip
                term="ethnographe"
                definition="Chercheuse qui s'immerge dans un milieu pour l'observer de l'intérieur, comme une exploratrice découvrant une culture inconnue, sans a priori, carnet à la main."
              />
              , j'observais, je notais, je restais plus ou moins en retrait.
              Résultats : à la fin de l'année : beaucoup… beaucoup de pages de notes !
            </p>
          </MethodStep>

          <MethodStep index={2} heading="Enregistrer, puis trier">
            <p>
              En parallèle des notes, un micro posé en classe captait
              tout ce qui se disait. Ces enregistrements permettent de réaliser
              une{' '}
              <TermTooltip
                term="analyse interactionnelle"
                definition="Méthode qui étudie les échanges verbaux dans le détail : qui dit quoi, comment, à quel moment, pour comprendre ce qui se joue vraiment dans une conversation."
              />{' '}
              : étudier les échanges mot à mot.
            </p>
            <p>
              J'ai ensuite fait un tri. Je n'ai pas tout analysé, seulement les passages où
              la discussion s'éloignait des questions de transmission de la langue.
              Ce sont ces moments-là précisément, sur lesquels je me suis penchée.
            </p>
          </MethodStep>

          <MethodStep index={3} heading="Analyser avec un cadre théorique">
            <p>
              Pour donner du sens à ces passages, on s'appuie sur des concepts
              et des théories déjà existants : c'est ce qu'on appelle un{' '}
              <TermTooltip
                term="cadre théorique"
                definition="Ensemble de théories et concepts établis par d'autres chercheurs, qui servent de grille de lecture pour interpréter ses propres observations de terrain."
              />
              .
            </p>
            <p>
              J'en ai mobilisé un, pluridisciplinaire. D'abord, des théories sur
              le fonctionnement des échanges en classe : comment les identités,
              les rôles et les relations s'y construisent, quels en sont
              les enjeux affectifs.
            </p>
            <p>
              Ensuite, des théories sur l'activité professionnelle, notamment
              la distinction entre ce qui est <em>prescrit</em> (ce qu'on est
              censé faire) et ce qui est <em>réellement fait</em> : ce qu'on
              tente, ce qu'on évite, ce qu'on fait sans que personne ne le demande.
              C'est cette partie qui m'intéresse particulièrement.
            </p>
          </MethodStep>

          <MethodStep index={4} heading="Et donc : le travail invisible" isLast>
            <p>
              Au fil de l'analyse, un résultat s'est imposé : une partie essentielle
              du travail de ces enseignantes n'apparaît dans aucune fiche de poste.
              Elle n'est ni enseignée, ni reconnue, ni nommée.
            </p>
            <p>
              S'intéresser aux moments qui s'éloignent du cadre typique permet de 
              mettre au jour le <em>travail invisible</em> effectué par ces deux
              enseignantes.
            </p>
            <p>
              Plutôt qu'un exposé théorique de trois cents pages,
              j'ai voulu en proposer une restitution plus légère, plus accessible.
              C'est ce que vous trouverez dans la section suivante.
            </p>
            <p className="method-step__body-emphasis">
              C'est ce travail-là que cette recherche vise à rendre visible.
            </p>
          </MethodStep>

        </ol>

      </div>
    </section>
  )
}
