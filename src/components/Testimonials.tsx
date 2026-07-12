import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-dusk py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs tracking-[0.25em] text-brass-light uppercase mb-4">
            Customer Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-glass leading-tight text-balance">
            What the neighbourhood <span className="italic text-brass-light">is saying.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 border border-brass-light/15 bg-dusk/60 backdrop-blur-sm rounded-sm p-6"
              style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.25)" }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-brass-light text-brass-light" />
                ))}
              </div>
              <blockquote className="text-mist/80 leading-relaxed text-sm">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 pt-3 border-t border-brass-light/15">
                <p className="font-display text-base text-glass">{t.name}</p>
                <p className="font-mono text-xs text-mist/50 mt-0.5">{t.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
