import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section, FadeUp, SectionDivider } from "./Section";
import photo1 from "@/assets/IMG_8824.JPG";
import photo2 from "@/assets/IMG_9464.jpeg";
import photo3 from "@/assets/gallery-group.jpeg";
import photo4 from "@/assets/couv18.png";
import photo5 from "@/assets/IMG_2459.JPG";
import photo6 from "@/assets/GRPE6-juju-pascaline.jpg";
import photo7 from "@/assets/IMG_4295.jpeg";
import photo8Asset from "@/assets/IMG_6023.jpeg.asset.json";
import photo9Asset from "@/assets/IMG_7418.jpeg.asset.json";
import photo10 from "@/assets/network-queen.jpg";
import photo11 from "@/assets/network-queen-2.jpg";
import photo12 from "@/assets/network-queen-3.jpg";
import photo13 from "@/assets/network-queen-4.jpg";

interface GalleryProps {
  showDivider?: boolean;
}

export const Gallery = ({ showDivider = true }: GalleryProps) => {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8Asset.url, photo9Asset.url, photo10, photo11, photo12, photo13];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Section className="text-center bg-midnight-light">
        <FadeUp>
          <h2 className="heading-section mb-8 md:mb-12">Les rencontres</h2>
        </FadeUp>

        <div className="max-w-xl mx-auto mb-16">
          <FadeUp delay={0.1}>
            <p className="body-elegant mb-3">Formats confidentiels.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="body-elegant mb-3">Peu de participantes.</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="body-elegant mb-3">Lieux choisis.</p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="body-elegant">Atmosphère calme.</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-16">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                onClick={() => setActiveIndex(index)}
                className="aspect-[3/4] overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-midnight/50 group-hover:opacity-0 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="pt-8 border-t border-primary/20 max-w-lg mx-auto">
            <p className="body-elegant pt-6">
              Les événements ne sont pas publics.
            </p>
            <p className="body-elegant mt-2 text-foreground/60">
              Les invitations sont ciblées.
            </p>
          </div>
        </FadeUp>
      </Section>
      {showDivider && <SectionDivider />}

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[100] bg-midnight/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
          >
            <motion.img
              key={activeIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={images[activeIndex]}
              alt=""
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
