import { motion } from "framer-motion";
import { Shield, BadgeCheck, Sun, Clock, Search, PhoneCall } from "lucide-react";
import { aboutPillars, business } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const pillarIcons = [Shield, BadgeCheck, Sun, Clock, Search, PhoneCall];

export default function About() {
  return (
    <section id="about" className="relative bg-glass py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="border border-brass/15 bg-white/60 backdrop-blur-sm rounded-sm p-6 md:p-8 h-full"
              style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.15)" }}
            >
              <p className="font-mono text-xs tracking-[0.25em] text-brass uppercase mb-4">
                About Panorama Design
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-char leading-tight text-balance">
                A local team, standing behind{" "}
                <span className="italic text-brass">every pane.</span>
              </h2>
              <p className="mt-6 text-char/70 leading-relaxed">
                {business.brandName} is the {business.region} face of Supreme Griham uPVC —
                handling consultation, measurement, manufacturing coordination,
                installation and after-sales as one continuous relationship, not a
                series of handoffs.
              </p>
              <p className="mt-6 text-char/70 leading-relaxed">{business.Owner} is the founder and authorised Supreme Griham channel partner behind Panorama Design — serving homeowners, builders, and architects across Gurugram & Delhi NCR. With a passion for quality living spaces, Ravinder personally oversees every project from first consultation to final installation.</p>
              <p className="mt-4 text-char/70 leading-relaxed">
               When you work with Panorama Design, you deal directly with Ravinder — no middlemen, no call centres. Just expert advice, honest pricing, and the full backing of Supreme Industries' 80-year legacy.
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-5">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-brass/15 bg-white/60 backdrop-blur-sm rounded-sm p-6 hover:bg-ink hover:text-glass hover:border-brass-light/30 transition-all duration-300 group"
                style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.15)" }}
              >
                <span className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brass/10 group-hover:bg-brass-light/20 transition-colors">
                    {(() => {
                      const Icon = pillarIcons[i];
                      return <Icon size={16} className="text-brass group-hover:text-brass-light" />;
                    })()}
                  </span>
                  <span className="font-mono text-xs text-brass group-hover:text-brass-light">
                    0{i + 1}
                  </span>
                </span>
                <h3 className="font-display text-xl mt-3 mb-2">{pillar.title}</h3>
                <p className="text-sm text-char/65 group-hover:text-mist leading-relaxed">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
