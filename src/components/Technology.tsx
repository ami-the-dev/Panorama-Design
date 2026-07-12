import { motion } from "framer-motion";
import { FlaskConical, Sparkles, Lock, Droplets } from "lucide-react";

const features = [
  {
    eyebrow: "First in India",
    title: "DecoShield Technology",
    body: "Revolutionary surface engineering that brings uPVC to life with realistic wood grains, stone finishes, marble effects and designer patterns fused directly onto the profile.",
    points: [
      "Natural-looking texture with real depth & character",
      "UV-resistant — no fading, peeling or discolouration",
      "Scratch & weather resistant for Indian conditions",
      "Uniform finish even at corners and joints",
    ],
    icon: FlaskConical,
  },
  {
    eyebrow: "New Benchmark",
    title: "Gold Line Architecture",
    body: "India's first metallic gold-coloured architectural groove on uPVC profiles — adding royal opulence to white, black and dark grey frames.",
    points: [
      "Elegant contrast — like premium jewellery for your home",
      "UV-resistant, anti-tarnish — gold lasts for decades",
      "Subtle 2mm or bold wide-casing options",
      "Complements gold handles, locks & curtain rods",
    ],
    icon: Sparkles,
  },
  {
    eyebrow: "Smart Home Ready",
    title: "Smart Lock & Automation",
    body: "Transform your home with intelligent door & window systems integrated with app control, Alexa voice commands and biometric access management.",
    points: [
      "App control from anywhere in the world",
      "Alexa voice command integration",
      "Smart code handle & keyless entry",
      "Access management for family & staff",
    ],
    icon: Lock,
  },
  {
    eyebrow: "Engineering Innovation",
    title: "Co-Extruded Gasket",
    body: "Industry-first gasket permanently fused to the uPVC profile during extrusion — creating an airtight, watertight molecular bond that never shrinks or pulls away.",
    points: [
      "Zero shrinkage — sealed at molecular level",
      "Ultimate monsoon-proof weatherproofing",
      "Enhanced acoustic & thermal insulation",
      "Maintenance-free lifetime performance",
    ],
    icon: Droplets,
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-dusk relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(184, 135, 74) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgb(184, 135, 74) 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-brass-light/40 origin-left" />
            <span className="text-xs uppercase tracking-widest text-brass-light font-semibold">
              Supreme Innovation
            </span>
            <span className="h-px w-10 bg-brass-light/40 origin-right" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl text-glass font-semibold"
          >
            Technologies That <em className="text-brass-light font-medium">Set Us Apart</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-mist/70 max-w-2xl mx-auto"
          >
            Supreme Griham's exclusive innovations — unavailable with any other brand in India.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-brass-light/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-brass-light/60 transition-all"
                style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.3)" }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brass to-brass-light flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-brass-light font-bold mb-2">
                      {feature.eyebrow}
                    </span>
                    <h3 className="font-serif text-2xl text-white font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-mist/70 mt-3 leading-relaxed">
                      {feature.body}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-[#e0d5b0]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-brass-light flex-shrink-0 mt-0.5"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
