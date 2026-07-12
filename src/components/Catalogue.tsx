import { motion } from "framer-motion";
import { Download, Frame, DoorOpen, ShieldCheck, Settings } from "lucide-react";
import { buildWhatsAppLink, defaultEnquiryMessage } from "../data/whatsapp";

const catalogCards = [
  { icon: Frame, title: "Windows", body: "Slider, casement & tilt-turn styles for every room." },
  { icon: DoorOpen, title: "Doors", body: "Sliding, casement & smart lock entry doors." },
  { icon: ShieldCheck, title: "Security", body: "Multi-point locking & toughened glass options." },
  { icon: Settings, title: "Custom", body: "Colour, grid, and hardware personalisation." },
];

export default function Catalogue() {
  return (
    <section className="relative bg-glass py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl text-char leading-tight text-balance">
              Supreme Griham  <span className="italic text-brass">Product Catalogue.</span>
            </h2>
            <p className="mt-3 text-char/65 leading-relaxed">
              Explore the complete range of Supreme Griham uPVC doors and windows — engineered for Indian homes with German precision.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <a
              href={buildWhatsAppLink(defaultEnquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brass text-white px-6 py-3 rounded-sm font-medium hover:bg-brass-light transition-colors text-sm"
            >
              <Download size={18} />
              Get Free Catalogue
            </a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {catalogCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-brass/15 bg-white/60 backdrop-blur-sm rounded-sm p-5"
              style={{ boxShadow: "-4px 4px 12px rgba(0,0,0,0.15)" }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brass/10 mb-4">
                <card.icon size={18} className="text-brass" />
              </span>
              <h3 className="font-display text-lg text-char mb-1">{card.title}</h3>
              <p className="text-sm text-char/65 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
