import { Button } from '../../shared/ui/Button'

export function HeroSection() {
  return (
    <section id="hero" className="section hero-section" aria-labelledby="hero-title">
      <div className="section__inner hero-section__inner">

        {/*
          Eyebrow : contexte disciplinaire
          Court, factuel — ancre l'identité académique sans intimider
        */}
        <p className="eyebrow">
          Recherche doctorale · Sciences du langage
        </p>

        {/*
          Titre : formulation officielle du projet, légèrement adaptée
          "vraiment" = mot fort, crée la curiosité, annonce la démarche
        */}
        <h1 id="hero-title" className="hero-section__title">
          Pour décrire ce que font <em>vraiment</em> les enseignants d'UPE2A
        </h1>

        {/*
          Chapeau : résumé du site en deux phrases
          On évite "thèse" / "doctorat" à ce stade — on garde ça pour WhySection
          On annonce les deux espaces (comprendre / donner son avis)
          sans les nommer encore explicitement
        */}
        <p className="hero-section__lead">
          Ce site présente les résultats d'une recherche menée dans des classes
          accueillant des élèves allophones, autour de ces moments de
          «&nbsp;défocalisation&nbsp;» où le cours déborde du cadre habituel
          — et de ce qu'ils révèlent sur le travail des enseignants.
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

        {/*
          Note discrète sur les infos supplémentaires accessibles au survol
          Le document source mentionne explicitement cette intention
          Petit texte en muted — pas un CTA, juste une invitation à explorer
        */}
        <p className="hero-section__hint">
          Tout au long du site, des informations supplémentaires sont accessibles
          en survolant les termes soulignés.
        </p>

        <div className="hero-section__scroll-hint" aria-hidden="true">
          <span className="hero-section__scroll-arrow" />
        </div>

      </div>
    </section>
  )
}
