import { Section, FadeUp, SectionDivider } from "./Section";

interface CadreProps {
  showDivider?: boolean;
}

export const Cadre = ({ showDivider = true }: CadreProps) => {
  const items = [
    "Groupes volontairement restreints.",
    "Absence de pitch imposé.",
    "Temps long.",
    "Confidentialité des échanges.",
  ];

  return (
    <>
      <Section className="text-center">
        <FadeUp>
          <h2 className="heading-section mb-12 md:mb-16">Le cadre</h2>
        </FadeUp>

        <div className="max-w-xl mx-auto">
          <div className="space-y-5 mb-12">
            {items.map((item, index) => (
              <FadeUp key={index} delay={0.1 * (index + 1)}>
                <p className="body-elegant-lg">{item}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.6}>
            <p className="font-display text-xl md:text-2xl text-primary italic">
              Ce cadre n'est pas négociable.
            </p>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
