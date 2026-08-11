import { useState } from "react";
import { FiMenu, FiX, FiMapPin } from "react-icons/fi";
import { SHOP_INFO } from "../data/siteData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tiles", href: "#collection" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-tight">
            <span className="font-display text-xl sm:text-2xl font-semibold text-ink">
              Ashoka
            </span>
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-stone">
              Tiles Showroom
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={SHOP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              <FiMapPin className="text-base" />
              Get Directions
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ink"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-line bg-bg animate-fade-up">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-base font-medium text-ink/85 border-b border-line/70 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SHOP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
            >
              <FiMapPin className="text-base" />
              Get Directions
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
