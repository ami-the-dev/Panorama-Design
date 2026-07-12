import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "../data/content";
import SafeImage from "./SafeImage";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative bg-glass py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mullion-line-dark pt-6 mb-14">
          <p className="font-mono text-xs tracking-[0.25em] text-brass uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-char leading-tight text-balance">
            Supreme Griham <span className="italic text-brass">in Every Space</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {galleryImages.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(src)}
              className="group relative aspect-square overflow-hidden bg-dusk"
            >
              <SafeImage
                src={src}
                alt={`Panorama Design installation ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-glass opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-glass hover:text-brass-light"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={active}
              alt="Panorama Design installation, enlarged"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
