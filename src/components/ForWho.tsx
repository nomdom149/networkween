import { Section, FadeUp, SectionDivider } from "./Section";

interface ForWhoProps {
  showDivider?: boolean;
}

export const ForWho = ({ showDivider = true }: ForWhoProps) => {
  const traits = [
    "préfèrent les petits cercles",
    "recherchent la profondeur",
    "n'ont plus envie de forcer",
    "accordent de la valeur à la qualité humaine",
  ];

  return (
    <>
      <Section className="text-center">
        <FadeUp>
          <h2 className="heading-section mb-12 md:mb-16">Pour qui</h2>
        </FadeUp>

        <div className="max-w-lg mx-auto">
          <FadeUp delay={0.1}>
            <p className="body-elegant-lg mb-8">
              NetworKween s'adresse aux femmes entrepreneures qui :
            </p>
          </FadeUp>

          <div className="space-y-4 mb-12">
            {traits.map((trait, index) => (
              <FadeUp key={index} delay={0.15 * (index + 1)}>
                <p className="body-elegant">– {trait}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.8}>
            <p className="font-display text-xl md:text-2xl text-primary italic">
              Ce cercle n'est pas conçu pour tout le monde.
            </p>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
