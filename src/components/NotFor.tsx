import { Section, FadeUp, SectionDivider } from "./Section";

interface NotForProps {
  showDivider?: boolean;
}

export const NotFor = ({ showDivider = true }: NotForProps) => {
  const notList = [
    "un networking ouvert",
    "un espace de prospection",
    "un accélérateur de ventes",
    "un outil de visibilité",
  ];

  return (
    <>
      <Section className="text-center">
        <FadeUp>
          <h2 className="heading-section mb-12 md:mb-16">
            Ce que NetworKween n'est pas
          </h2>
        </FadeUp>

        <div className="max-w-lg mx-auto">
          <FadeUp delay={0.1}>
            <p className="body-elegant-lg mb-8">NetworKween n'est pas :</p>
          </FadeUp>

          <div className="space-y-4 mb-12">
            {notList.map((item, index) => (
              <FadeUp key={index} delay={0.15 * (index + 1)}>
                <p className="body-elegant">– {item}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.8}>
            <div className="pt-8 border-t border-primary/20">
              <p className="body-elegant pt-6">
                Si c'est ce que tu cherches,
                <br />
                <span className="text-foreground/60">ce lieu ne te conviendra pas.</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
