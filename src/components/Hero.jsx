import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SHOP_INFO } from "../data/siteData";
import SwatchStrip from "./SwatchStrip";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        {/* Background image — change this file to update the hero photo */}
        <img
          src="/images/hero.png"
          alt="Premium tile showroom display at Ashoka Tiles & Hardware"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-16 sm:pb-20">
          <p className="animate-fade-up text-clay text-sm sm:text-base tracking-[0.25em] uppercase font-medium mb-4">
            Premium Tiles &middot; Quality SanitaryWare &middot; Trusted Service
          </p>
          <h1 className="animate-fade-up font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold text-white max-w-3xl">
            Transform Your Space with Premium Tiles
          </h1>
          <p className="animate-fade-up mt-5 text-base sm:text-lg text-white/85 max-w-xl">
            Premium Tiles &amp; SanitaryWare for Beautiful Homes and Modern Spaces
          </p>

          <div className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#collection"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Explore Tiles
              <FiArrowRight />
            </a>
            <a
              href={SHOP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/40 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <FiMapPin />
              Visit Our Showroom
            </a>
          </div>
        </div>
      </div>
      <SwatchStrip />
    </section>
  );
}
