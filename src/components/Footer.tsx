import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { navLinks, business } from "../data/content";
import { buildWhatsAppLink, defaultEnquiryMessage } from "../data/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-dusk text-mist/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-brass-light/15">
          <div>
            <p className="font-display text-xl text-glass">
              PANORAMA <span className="italic text-brass-light">DESIGN</span>
            </p>
            <p className="font-mono text-[11px] tracking-wider text-mist/50 mt-1 uppercase">
              {business.tagline}
            </p>
            <p className="text-sm text-mist/65 mt-4 leading-relaxed max-w-xs">
              Authorised Supreme Griham channel partner serving {business.region}.
              Engineered uPVC doors and windows, free consultation and full
              after-sales support.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-mist/50 mb-4">
             Company
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex items-center gap-2 hover:text-brass-light transition-colors">
                    <ChevronRight size={12} className="text-brass-light" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-mist/50 mb-4">
              Our Products
            </p>
             <ul className="space-y-2 text-sm">
              <li><a href="#slider-windows" className="inline-flex items-center gap-2 hover:text-brass-light transition-colors"><ChevronRight size={12} className="text-brass-light" />Slider Windows</a></li>
              <li><a href="#casement-windows" className="inline-flex items-center gap-2 hover:text-brass-light transition-colors"><ChevronRight size={12} className="text-brass-light" />Casement Windows</a></li>
              <li><a href="#tilt-turn-windows" className="inline-flex items-center gap-2 hover:text-brass-light transition-colors"><ChevronRight size={12} className="text-brass-light" />Tilt & Turn Windows</a></li>
              <li><a href="#sliding-doors" className="inline-flex items-center gap-2 hover:text-brass-light transition-colors"><ChevronRight size={12} className="text-brass-light" />Sliding Doors</a></li>
              <li><a href="#casement-doors" className="inline-flex items-center gap-2 hover:text-brass-light transition-colors"><ChevronRight size={12} className="text-brass-light" />Casement Doors</a></li>
              <li><a href="#smart-lock-doors" className="inline-flex items-center gap-2 hover:text-brass-light transition-colors"><ChevronRight size={12} className="text-brass-light" />Smart Lock Doors</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-mist/50 mb-4">
              Contact
            </p>
             <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-brass-light shrink-0" />
                {business.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brass-light shrink-0" />
                {business.email}
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brass-light shrink-0 mt-0.5" />
                {business.address}
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-brass-light/15">
              <a href="#" aria-label="Facebook" className="hover:text-mist/50 text-brass-light transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-mist/50 text-brass-light transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-mist/50 text-brass-light transition-colors">
                <Linkedin size={18} />
              </a>
              <a
                href={buildWhatsAppLink(defaultEnquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transition-colors"
                style={{ color: "#25D366" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#d9ad75"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#25D366"}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-mist/50 text-center pt-8">
          &copy; {new Date().getFullYear()} {business.brandName}. All rights reserved. An
          authorised Supreme Griham channel partner.
        </p>
      </div>
    </footer>
  );
}
