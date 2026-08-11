import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SHOP_INFO, whatsappLink } from "../data/siteData";

export default function CTA() {
  return (
    <section className="bg-ink py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold text-white">
          Give Your Home a Premium Look
        </h2>
        <p className="text-white/70 mt-4 text-base sm:text-lg">
          Discover beautiful tiles and quality SanitaryWare products at Ashoka
          Tiles &amp; SanitaryWare.
        </p>

        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href={SHOP_INFO.phoneCallLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            <FiPhone />
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
          <a
            href={SHOP_INFO.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <FiMapPin />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
