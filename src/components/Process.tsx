import { motion } from "framer-motion";
import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="relative bg-dusk py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-brass-light uppercase mb-4">
            Our Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-glass leading-tight text-balance">
            From Idea to Installation <span className="italic text-brass-light">in 7 Simple Steps</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative h-full"
            >
              <div className="border border-brass/30 bg-white rounded-sm p-5 hover:bg-white/60 hover:backdrop-blur-sm hover:border-brass/15 transition-all group h-full">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brass text-white font-mono text-sm group-hover:border group-hover:border-brass group-hover:bg-glass group-hover:text-brass transition-colors mb-3">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg text-char">{step.title}</h3>
                <p className="text-sm text-char/65 mt-1 leading-relaxed">{step.body}</p>
              </div>
              {i < processSteps.length - 1 && (
                <span className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-[14px] text-white z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
