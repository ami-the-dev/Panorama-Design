import { business } from "./content";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encoded}`;
}

export const defaultEnquiryMessage =
  "Hi Panorama Design, I'm interested in Supreme Griham uPVC doors & windows. Please share more details.";
