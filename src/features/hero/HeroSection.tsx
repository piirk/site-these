import { Button } from '../../shared/ui/Button'

export function HeroSection() {
  return (
    <section id="hero" className="section hero-section" aria-labelledby="hero-title">
      <div className="section__inner hero-section__inner">

        <p className="eyebrow">
          Recherche doctorale · Sciences du langage
        </p>

        <h1 id="hero-title" className="hero-section__title">
          Pour décrire ce que font <em>vraiment</em> les enseignants d'UPE2A
        </h1>

        <p className="hero-section__lead">
          Ce site présente les résultats d'une recherche menée dans des classes
          accueillant des élèves allophones, autour de ces moments de
          «&nbsp;défocalisation&nbsp;» où le cours déborde du cadre habituel, 
          et de ce qu'ils révèlent sur le travail des enseignants.
        </p>

        <div className="hero-section__cta-group">
          <Button
            as="a"
            href="#why"
            label="Découvrir la recherche"
            variant="primary"
            size="lg"
          />
        </div>

        <p className="hero-section__hint">
          Les termes soulignés cachent des définitions&nbsp;: survolez-les ou appuyez dessus.
        </p>

        <div className="hero-section__scroll-hint" aria-hidden="true">
          <span className="hero-section__scroll-arrow" />
        </div>

      </div>
    </section>
  )
}
