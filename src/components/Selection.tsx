import { Section, FadeUp, SectionDivider } from "./Section";
import crown from "@/assets/crown.png";

interface SelectionProps {
  showDivider?: boolean;
}

export const Selection = ({ showDivider = true }: SelectionProps) => {
  return (
    <>
      <Section className="text-center bg-midnight-light">
        <FadeUp>
          <img 
            src={crown} 
            alt="" 
            aria-hidden="true"
            className="crown-divider mx-auto mb-12 md:mb-16" 
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="heading-section mb-12 md:mb-16">La sélection</h2>
        </FadeUp>

        <div className="max-w-lg mx-auto">
          <FadeUp delay={0.2}>
            <p className="body-elegant-lg mb-10">
              NetworKween fonctionne par sélection.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="space-y-3 mb-10">
              <p className="body-elegant text-foreground/60">Il ne s'agit pas de chiffre d'affaires.</p>
              <p className="body-elegant text-foreground/60">Ni de notoriété.</p>
              <p className="body-elegant text-foreground/60">Ni de statut.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="space-y-3 mb-10">
              <p className="body-elegant-lg">Il s'agit de posture.</p>
              <p className="body-elegant-lg">D'intention.</p>
              <p className="body-elegant-lg">De cohérence.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <p className="font-display text-xl md:text-2xl text-foreground/60 italic pt-8">
              Toutes les demandes ne reçoivent pas de suite.
            </p>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
