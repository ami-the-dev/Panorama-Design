import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/content";
import SafeImage from "./SafeImage";

const tabs = [
  { id: "windows", label: "Windows", icon: "🪟" },
  { id: "doors", label: "Doors", icon: "🚪" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Products() {
  const [activeTab, setActiveTab] = useState<TabId>("windows");

  const filtered = products.filter((p) => {
    if (activeTab === "windows") return p.category === "window";
    if (activeTab === "doors") return p.category === "door" || p.category === "accessory";
    return true;
  });

  return (
    <section id="products" className="relative bg-ink py-24 md:py-32 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mullion-line-dark pt-6 mb-14">
          <p className="font-mono text-xs tracking-[0.25em] text-brass-light uppercase mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-glass leading-tight text-balance">
            Supreme Griham <span className="italic text-brass-light">engineered.</span>
          </h2>
          <p className="mt-5 text-mist/80 leading-relaxed">
            The complete Supreme Griham system range — chosen for how a space is
            used, not just how it looks.
          </p>
        </div>

        <div className="flex items-center gap-1 mb-10 border border-steel/20 rounded-sm p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-body transition-colors rounded-sm ${
                activeTab === tab.id
                  ? "bg-brass-light text-ink"
                  : "text-mist/70 hover:text-glass"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden bg-dusk border border-steel/20 hover:border-brass-light/50 transition-colors"
              >
                <div className="relative overflow-hidden">
                  <SafeImage
                    src={product.image}
                    alt={product.title}
                    className="w-full object-contain bg-dusk transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dusk via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wider uppercase bg-brass-light text-ink px-2 py-1 rounded-sm">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-glass mb-2">{product.title}</h3>
                  <p className="text-sm text-mist/70 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="font-mono text-[10px] tracking-wide uppercase text-steel border border-steel/30 rounded-sm px-2 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
