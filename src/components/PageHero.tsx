import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-light to-midnight opacity-50" />
      
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary tracking-wide"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-foreground/70 font-light max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {/* Section separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
    </section>
  );
};
