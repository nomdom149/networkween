import { Section, FadeUp, SectionDivider } from "./Section";

interface ConceptProps {
  showDivider?: boolean;
  alternateTitle?: boolean;
}

export const Concept = ({ showDivider = true, alternateTitle = false }: ConceptProps) => {
  return (
    <>
      <Section className="text-center bg-midnight-light">
        <FadeUp>
          <h2 className="heading-section mb-12 md:mb-16">
            {alternateTitle ? "Une intuition relationnelle" : "Le concept"}
          </h2>
        </FadeUp>

        <div className="max-w-2xl mx-auto space-y-8">
          <FadeUp delay={0.1}>
            <p className="body-elegant-lg">
              Chez NetworKween, on ne vient pas chercher des contrats.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="font-display text-2xl md:text-3xl text-foreground font-light py-4">
              On vient poser une intention relationnelle.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="pt-8 space-y-4">
              <p className="body-elegant">Être disponible à l'échange.</p>
              <p className="body-elegant">Écouter sans stratégie immédiate.</p>
              <p className="body-elegant">Observer ce qui résonne.</p>
              <p className="body-elegant">Laisser émerger.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="pt-12 border-t border-primary/20 mt-12">
              <p className="body-elegant-lg pt-8">
                Les mises en relation sont privilégiées.
              </p>
              <p className="body-elegant mt-4 text-foreground/60">
                Les contrats ne sont jamais un objectif.
              </p>
            </div>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
