import { motion } from "framer-motion";
import { Section, FadeUp } from "./Section";

interface ContactProps {
  showFooter?: boolean;
  showTitle?: boolean;
}

export const Contact = ({ showFooter = true, showTitle = true }: ContactProps) => {
  return (
    <Section className="text-center min-h-[70vh] flex flex-col items-center justify-center">
      {showTitle && (
        <FadeUp>
          <h2 className="heading-section mb-12 md:mb-16">Manifester son intérêt</h2>
        </FadeUp>
      )}

      <div className="max-w-lg mx-auto">
        <FadeUp delay={0.2}>
          <p className="body-elegant-lg mb-4">
            NetworKween n'ouvre pas ses portes.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="font-display text-2xl md:text-3xl text-foreground font-light mb-10">
            Elle les entrouvre.
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="body-elegant text-foreground/60 mb-16">
            Manifester son intérêt
            <br />
            ne garantit pas l'accès.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <motion.a
            href="mailto:contact@networkween.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 border border-primary/40 text-primary font-display text-lg tracking-wider hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
          >
            Écrire
          </motion.a>
        </FadeUp>
      </div>
    </Section>
  );
};
