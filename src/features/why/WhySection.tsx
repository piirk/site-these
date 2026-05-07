// features/why/WhySection.tsx

import { FindingBlock } from './FindingBlock'

/**
 * WhySection — genèse et motivation du projet doctoral.
 *
 * Structure narrative (3 temps) :
 * 1. Ancrage      → d'où vient ce projet, en une phrase humaine
 * 2. Les constats → deux observations de terrain (FindingBlock)
 * 3. La question  → pivot narratif, ouvre vers la suite du site
 *
 * Choix UX :
 * - Peu de texte par bloc : l'utilisateur avance naturellement
 * - La question finale est typographiquement isolée :
 *   c'est l'idée centrale du site, elle mérite de l'espace
 * - Pas d'images : le texte seul doit suffire — évite le décor
 * - Les FindingBlock sont en colonne sur mobile, côte à côte sur desktop
 *   → crée une tension visuelle entre les deux constats
 */
export function WhySection() {
  return (
    <section id="why" className="section why-section" aria-labelledby="why-title">
      <div className="section__inner why-section__inner">

        {/* ── 1. Ancrage ── */}
        <header className="why-section__header">
          <p className="why-section__eyebrow">Pourquoi cette recherche</p>
          <h2 id="why-title" className="why-section__title section__title">
            Tout a commencé par une question simple
          </h2>
          <p className="why-section__intro">
            En travaillant avec des enseignants de classes UPE2A —
            ces classes qui accueillent des élèves allophones nouvellement arrivés —
            quelque chose d'étrange est apparu : entre ce que les professeurs
            <em> disent</em> vivre et ce qu'on <em>observe</em> en classe,
            il y a un écart.
          </p>
        </header>

        {/* ── 2. Les constats ── */}
        <div className="why-section__findings" role="list">
          <FindingBlock
            index={1}
            heading="Un malaise difficile à nommer"
            body={
              "Quand on leur demande comment ça se passe, les enseignants d'UPE2A " +
              "évoquent souvent une fatigue, une incertitude, parfois un sentiment " +
              "de ne pas vraiment « faire cours ». Quelque chose résiste."
            }
          />
          <FindingBlock
            index={2}
            heading="Des classes qui débordent du cadre"
            body={
              "Sur le terrain, les observations racontent autre chose : " +
              "des moments imprévus, des échanges qui sortent du script, " +
              "des situations où l'enseignant improvise, négocie, invente. " +
              "Ça ne ressemble pas à un cours traditionnel. Et pourtant, ça fonctionne."
            }
          />
        </div>

        {/* ── 3. La question pivot ── */}
        <div className="why-section__pivot" aria-label="Question centrale de la recherche">
          <p className="why-section__pivot-text">
            Et si ces deux éléments étaient liés&nbsp;?
          </p>
          <p className="why-section__pivot-sub">
            C'est cette intuition qui est au cœur de la recherche.
          </p>
        </div>

      </div>
    </section>
  )
}
