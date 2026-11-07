import { Section, FadeUp, SectionDivider } from "./Section";

interface PositioningProps {
  showDivider?: boolean;
}

export const Positioning = ({ showDivider = true }: PositioningProps) => {
  return (
    <>
      <Section className="text-center">
        <FadeUp>
          <p className="body-elegant-lg max-w-xl mx-auto mb-8">
            NetworKween n'est pas un réseau ouvert.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-display text-3xl md:text-4xl text-foreground font-light mb-8">
            C'est un espace choisi.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="body-elegant-lg max-w-md mx-auto">
            Ici, les rencontres ne sont pas nombreuses.
            <br />
            <span className="text-primary">Elles sont justes.</span>
          </p>
        </FadeUp>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
