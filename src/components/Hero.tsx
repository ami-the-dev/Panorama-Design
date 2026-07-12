import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { heroStats } from "../data/content";
import { buildWhatsAppLink, defaultEnquiryMessage } from "../data/whatsapp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink flex flex-col"
    >
      {/* Ambient background layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
        <div className="absolute inset-0 grain-overlay" />
      </div>

      {/* Signature animation: two panes slide apart like a slider window opening */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 w-1/2 z-30 bg-ink"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 right-0 w-1/2 z-30 bg-ink"
      />

      {/* Spacer for fixed navbar */}
      <div className="h-20 shrink-0" />

      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex items-center gap-3 px-4 py-2 mb-6 rounded-full border border-brass-light/25 bg-brass-light/5 backdrop-blur-sm w-auto sm:w-1/2"
            >
              <img
                src="/images/gallery/supreme-logo.png"
                alt="Supreme Griham"
                className="h-7 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
              />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-brass-light uppercase">
                Authorised Channel Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-glass leading-[0.98] text-balance max-w-4xl"
            >
              Frame every <span className="italic text-brass-light">view.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-6 max-w-xl text-mist text-base md:text-lg leading-relaxed"
            >
              Panorama Design brings Supreme Griham's engineered uPVC doors and windows
              into homes across Haryana &amp; Delhi NCR — built for the view you want,
              and the weather you don't.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 0.6 }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={buildWhatsAppLink(defaultEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brass-light text-ink px-7 py-3.5 rounded-sm font-medium hover:bg-glass transition-colors text-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get a Free Site Visit
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 border border-steel/50 text-mist px-7 py-3.5 rounded-sm hover:border-brass-light hover:text-brass-light transition-colors text-center"
              >
                Explore Products
              </a>
            </motion.div>
          </div>

          {/* Right column — features card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.7, ease: "easeOut" }}
            className="mt-10 lg:mt-0 shrink-0"
          >
            <div className="border border-brass-light/20 bg-dusk/40 backdrop-blur-sm rounded-sm p-6 md:p-8 w-full lg:w-72 xl:w-80"
              style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.3)" }}
            >
              <h3 className="font-display text-lg md:text-xl text-brass-light mb-5">
                Why Panorama Design?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-mist">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brass-light shrink-0" />
                  Authorised Supreme Griham Channel Partner
                </li>
                <li className="flex items-start gap-3 text-sm text-mist">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brass-light shrink-0" />
                  Free Home Visit &amp; Measurement
                </li>
                <li className="flex items-start gap-3 text-sm text-mist">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brass-light shrink-0" />
                  Expert Installation Team
                </li>
                <li className="flex items-start gap-3 text-sm text-mist">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brass-light shrink-0" />
                  After-Sales Service Support
                </li>
                <li className="flex items-start gap-3 text-sm text-mist">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brass-light shrink-0" />
                  Serving Gurugram &amp; Delhi NCR
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-brass-light/15 flex items-center gap-2 text-xs font-mono text-brass-light tracking-wide">
                <span className="text-sm">🛡</span> 20 Year Profile Warranty
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full pt-6"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="border border-brass-light/15 bg-dusk/30 backdrop-blur-sm rounded-full px-4 py-2.5 md:px-6 md:py-3 flex items-center gap-3">
              <span className="font-mono text-lg md:text-xl text-brass-light whitespace-nowrap">{stat.value}</span>
              <span className="text-[10px] md:text-xs text-steel leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-steel hover:text-brass-light transition-colors"
        aria-label="Scroll to next section"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
