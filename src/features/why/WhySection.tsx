import { FindingBlock } from './FindingBlock'

/**
 * WhySection — genèse et motivation du projet doctoral.
 *
 * Structure narrative révisée (4 temps) :
 * 1. Genèse personnelle  → "sortie du master avec encore plus de questions"
 * 2. Les deux constats   → FindingBlock (théorie + terrain)
 * 3. La thèse formulée  → ce que la recherche défend
 * 4. La question pivot   → "Et si c'était en lien ?"
 *
 * Changements vs version initiale :
 * - Ajout du temps de genèse (absent de notre première version)
 *   Il humanise le point de départ et explique pourquoi une doctorante
 *   s'intéresse à ce sujet spécifique
 * - La thèse est maintenant formulée explicitement entre les constats
 *   et la question (fidèle au document source)
 * - Les constats reprennent la nuance théorie/terrain du document
 */
export function WhySection() {
  return (
    <section id="why" className="section why-section" aria-labelledby="why-title">
      <div className="section__inner why-section__inner">

        {/* ── 1. Genèse ── */}
        <header className="why-section__header">
          <p className="why-section__eyebrow">Pourquoi cette recherche</p>
          <h2 id="why-title" className="why-section__title section__title">
            Tout a commencé par trop de questions
          </h2>
          <p className="why-section__intro">
            À la fin d'un travail de master sur les classes UPE2A,
            j'avais plus de questions qu'au départ.
            Alors quand l'opportunité de poursuivre dans le cadre d'un doctorat
            s'est présentée — j'ai accepté.
          </p>
          <p className="why-section__intro">
            Le projet s'est construit autour de deux choses qui semblaient
            ne pas coller ensemble.
          </p>
        </header>

        {/* ── 2. Les deux constats ── */}
        <div className="why-section__findings" role="list">
          <FindingBlock
            index={1}
            heading="Ce que dit la littérature"
            body={
              "Les enseignants d'UPE2A sont décrits dans les textes comme très investis " +
              "dans leur travail — mais ils évoquent aussi un mal-être, " +
              "une impression d'être démunis, de ne pas vraiment « faire cours »."
            }
          />
          <FindingBlock
            index={2}
            heading="Ce qu'on voit sur le terrain"
            body={
              "Dans les cours observés, beaucoup de moments s'éloignent de ce " +
              "qu'on s'attend à trouver dans un cours traditionnel. " +
              "Quelque chose d'autre se passe — et ça fonctionne."
            }
          />
        </div>

        {/* ── 3. La thèse ── */}
        <div className="why-section__thesis">
          <p className="why-section__thesis-label">La thèse défendue</p>
          <blockquote className="why-section__thesis-text">
            Ces moments qui s'écartent du cours attendu sont au cœur
            de la diversification des rôles des enseignants d'UPE2A.
            S'y intéresser permet de rendre visible une partie de leur travail
            — souvent laissée de côté — celle qui les amène à questionner leur métier.
          </blockquote>
        </div>

        {/* ── 4. La question pivot ── */}
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
