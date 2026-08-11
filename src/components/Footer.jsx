import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SHOP_INFO, whatsappLink } from "../data/siteData";
import SwatchStrip from "./SwatchStrip";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Tiles", href: "#collection" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <SwatchStrip />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl font-semibold text-white">Ashoka Tiles</p>
          <p className="text-sm text-white/60 mt-2">{SHOP_INFO.tagline}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Quick Links</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Follow Us</p>
          <div className="flex gap-3">
            <a
              href={SHOP_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FiInstagram />
            </a>
            <a
              href={SHOP_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FiFacebook />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-white/50">
          © {year} Ashoka Tiles. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
