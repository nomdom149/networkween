import { Section, FadeUp, SectionDivider } from "./Section";
import crown from "@/assets/crown.png";

interface ManifestProps {
  showDivider?: boolean;
}

export const Manifeste = ({ showDivider = true }: ManifestProps) => {
  return (
    <>
      <Section className="text-center">
        <FadeUp>
          <img 
            src={crown} 
            alt="" 
            aria-hidden="true"
            className="crown-divider mx-auto mb-12 md:mb-16" 
          />
        </FadeUp>

        <div className="max-w-2xl mx-auto space-y-8">
          <FadeUp delay={0.1}>
            <p className="body-elegant-lg">
              Certaines femmes n'ont plus envie de se vendre.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="body-elegant-lg">
              Ni de se justifier.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="body-elegant-lg">
              Ni de surjouer.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.5}>
            <div className="py-8 space-y-4">
              <p className="body-elegant-lg">Elles savent écouter.</p>
              <p className="body-elegant-lg">Elles savent ressentir.</p>
              <p className="body-elegant-lg">Elles savent reconnaître une rencontre juste.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="font-display text-2xl md:text-3xl text-primary font-light">
              NetworKween est né de cette posture.
            </p>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="pt-12 space-y-4">
              <p className="body-elegant">L'intention relationnelle précède toute attente.</p>
              <p className="body-elegant">La présence compte plus que la performance.</p>
              <p className="body-elegant">La relation passe avant l'opportunité.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.8}>
            <p className="font-display text-xl md:text-2xl text-foreground/70 italic pt-8">
              Tout n'est pas dit.
              <br />
              Et c'est volontaire.
            </p>
          </FadeUp>
        </div>
      </Section>
      {showDivider && <SectionDivider />}
    </>
  );
};
