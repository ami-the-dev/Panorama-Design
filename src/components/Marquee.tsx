export default function Marquee() {
  const items = [
    "Supreme Industries — 80+ Years of Trust",
    "ISO 9001 · 14001 · 18001 Certified",
    "DecoShield Technology — First in India",
    "20 Year Profile Warranty",
    "European Machinery & Technology",
    "Smart Lock & Alexa Integration",
    "Free Home Visit — Gurugram & Delhi",
    "Up to 40dB Noise Reduction",
  ];

  return (
    <div className="bg-brass-light text-ink py-4 overflow-hidden border-y border-brass-light/20">
      <div className="flex whitespace-nowrap animate-marquee gap-12">
        {[...items, ...items].map((text, i) => (
          <span key={i} className="flex items-center gap-6 text-sm tracking-wider">
            <span className="font-serif italic">✦</span>
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
