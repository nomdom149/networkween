import { motion } from "framer-motion";
import crown from "@/assets/crown.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-light to-midnight opacity-50" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Logo with Crown */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mb-16 md:mb-20"
        >
          <motion.img
            src={crown}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="w-32 md:w-48 lg:w-56"
          />
          <span 
            className="font-display font-light text-primary text-2xl md:text-3xl lg:text-4xl tracking-[0.3em]"
          >
            NETWORKWEEN
          </span>
        </motion.div>

        {/* Main text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light mb-8"
        >
          Un cercle privé de femmes entrepreneures.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="body-elegant max-w-xl mx-auto mb-6"
        >
          Pensé pour celles qui privilégient
          <br />
          la qualité relationnelle à l'exposition.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display text-lg md:text-xl text-primary italic"
        >
          Accès par sélection.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};
