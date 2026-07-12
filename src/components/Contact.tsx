import { useState, FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { business, productInterestOptions } from "../data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState(productInterestOptions[productInterestOptions.length - 1]);
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hi Panorama Design, I'd like to enquire about uPVC doors & windows.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Location: ${location}`,
      `Interested in: ${interest}`,
      details ? `Details: ${details}` : "",
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    setSent(true);
    window.open(`https://wa.me/${business.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-glass py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mullion-line-dark pt-6 mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-brass uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-char leading-tight text-balance">
            Book your free <span className="italic text-brass">site visit.</span>
          </h2>
          <p className="mt-5 text-char/65 leading-relaxed">
            Tell us about your project — we'll schedule a visit, measurement
            and quote, no commitment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5 w-full"
          >
            <div className="border border-brass bg-white/60 backdrop-blur-sm rounded-sm p-5">
              <ContactItem icon={<Phone size={18} />} label="Phone / WhatsApp">
                <a href={`tel:${business.phone}`} className="hover:text-brass transition-colors">
                  {business.phone}
                </a>
              </ContactItem>
            </div>
            <div className="border border-brass bg-white/60 backdrop-blur-sm rounded-sm p-5">
              <ContactItem icon={<Mail size={18} />} label="Email">
                <a href={`mailto:${business.email}`} className="hover:text-brass transition-colors">
                  {business.email}
                </a>
              </ContactItem>
            </div>
            <div className="border border-brass bg-white/60 backdrop-blur-sm rounded-sm p-5">
              <ContactItem icon={<MapPin size={18} />} label="Studio">
                {business.address}
              </ContactItem>
            </div>
            <div className="border border-brass bg-white/60 backdrop-blur-sm rounded-sm p-5">
              <ContactItem icon={<Clock size={18} />} label="Hours">
                {business.hours}
              </ContactItem>
            </div>

            <div className="border border-brass bg-white/60 backdrop-blur-sm rounded-sm overflow-hidden h-48">
              <iframe
                title="Panorama Design Location"
                src="https://www.google.com/maps?q=UG-15+Ocus+Quantum+Mall+Sector-51+Gurugram+Haryana+122001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white/60 backdrop-blur-sm border border-brass rounded-sm p-5 md:p-10 space-y-5 w-full"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field-input"
                  placeholder="Full name"
                />
              </Field>
              <Field label="Phone / WhatsApp">
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="field-input"
                  placeholder="10-digit number"
                  type="tel"
                />
              </Field>
            </div>

            <Field label="Your Location">
              <input
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="field-input"
                placeholder="City / area"
              />
            </Field>

            <Field label="I'm Interested In">
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="field-input"
              >
                {productInterestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Additional Details (optional)">
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="field-input min-h-[100px] resize-none"
                placeholder="Number of windows, sizes, colour preference..."
              />
            </Field>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-brass-light text-ink font-medium py-3.5 rounded-sm hover:bg-ink hover:text-brass-light transition-colors"
            >
              <Send size={18} />
              Send Enquiry via WhatsApp
            </button>

            <p className="text-xs text-char/50 text-center">
              {sent
                ? "Redirecting to WhatsApp — if it didn't open, check your pop-up blocker."
                : "Your details are sent directly to our team via WhatsApp."}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 w-10 h-10 rounded-full border border-brass/40 flex items-center justify-center text-brass">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wider text-char/50">{label}</p>
        <p className="text-char/80 mt-0.5">{children}</p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wider text-char/50 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
