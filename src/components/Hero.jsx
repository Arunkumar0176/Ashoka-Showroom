import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SHOP_INFO } from "../data/siteData";
import SwatchStrip from "./SwatchStrip";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[100svh] min-h-[480px] w-full overflow-hidden">
        {/* Background image — change this file to update the hero photo */}
        <img
          src="/images/hero.png"
          alt="Premium tile showroom display at Ashoka Tiles & Hardware"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-end pb-10 sm:pb-16 lg:pb-20">
          <p className="animate-fade-up text-clay text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Premium Tiles &middot; Quality SanitaryWare &middot; Trusted Service
          </p>
          <h1 className="animate-fade-up font-display text-3xl sm:text-5xl lg:text-7xl leading-[1.08] font-semibold text-white max-w-3xl">
            Transform Your Space with Premium Tiles
          </h1>
          <p className="animate-fade-up mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/85 max-w-xl">
            Premium Tiles &amp; SanitaryWare for Beautiful Homes and Modern Spaces
          </p>

          <div className="animate-fade-up mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
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
