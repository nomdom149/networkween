import { Section, FadeUp, SectionDivider } from "./Section";

interface EventsProps {
  showDivider?: boolean;
}

export const Events = ({ showDivider = true }: EventsProps) => {
  return (
    <>
      <Section className="text-center">
        <FadeUp>
          <h2 className="heading-section mb-12 md:mb-16">Événements à venir</h2>
        </FadeUp>

        <div className="max-w-lg mx-auto">
          <FadeUp delay={0.2}>
            <p className="body-elegant-lg mb-8">
              Les prochains rendez-vous ne sont pas annoncés publiquement.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="body-elegant">
              Ils sont proposés directement
              <br />
              aux femmes invitées ou sélectionnées.
            </p>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
