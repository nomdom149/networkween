import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 border-t border-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
            <Logo size="sm" className="opacity-60 hover:opacity-80 transition-opacity" />
          </Link>
        </motion.div>

        {/* Navigation links */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
        >
          <Link 
            to="/manifeste" 
            className="text-sm text-muted-foreground/60 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
          >
            Manifeste
          </Link>
          <Link 
            to="/concept" 
            className="text-sm text-muted-foreground/60 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
          >
            Concept
          </Link>
          <Link 
            to="/evenements" 
            className="text-sm text-muted-foreground/60 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
          >
            Événements
          </Link>
          <Link 
            to="/selection" 
            className="text-sm text-muted-foreground/60 hover:text-primary transition-colors duration-300 tracking-wider uppercase"
          >
            Sélection
          </Link>
        </motion.nav>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-muted-foreground/40"
        >
          © {currentYear} NetworKween
        </motion.p>
      </div>
    </footer>
  );
};
