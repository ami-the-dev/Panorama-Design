import { motion } from "framer-motion";
import {
  Thermometer,
  VolumeX,
  CloudRain,
  Wind,
  Shield,
  Bug,
  Sparkles,
  Recycle,
} from "lucide-react";
import { benefits } from "../data/content";

const benefitIcons = [
  Thermometer,
  VolumeX,
  CloudRain,
  Wind,
  Shield,
  Bug,
  Sparkles,
  Recycle,
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-glass py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mullion-line-dark pt-6 mb-14">
          <p className="font-mono text-xs tracking-[0.25em] text-brass uppercase mb-4">
            Why uPVC
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-char leading-tight text-balance">
            Built for Indian <span className="italic text-brass">conditions.</span>
          </h2>
          <p className="mt-5 text-char/65 leading-relaxed">
            Every advantage here answers a real problem homeowners in this
            region actually deal with — not a generic feature list.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => {
            const Icon = benefitIcons[i];
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="border border-brass/15 bg-white/60 backdrop-blur-sm rounded-sm p-6 hover:bg-white hover:border-brass/40 transition-colors group"
                style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.15)" }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brass/10 group-hover:bg-brass/20 transition-colors mb-4">
                  <Icon size={18} className="text-brass" />
                </span>
                <h3 className="font-display text-lg text-char mb-2">{b.title}</h3>
                <p className="text-sm text-char/65 leading-relaxed">{b.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
