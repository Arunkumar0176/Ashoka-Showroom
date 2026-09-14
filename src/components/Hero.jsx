import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SHOP_INFO } from "../data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        {/* Background image — change this file to update the hero photo */}
        <img
          src="/images/hero.png"
          alt="Premium tile showroom display at Ashoka Tiles & Hardware"
          className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-end pb-10 sm:pb-16 lg:pb-20">
          <p className="animate-fade-up text-[#f8f4f4] text-sm sm:text-base tracking-[0.2em] uppercase font-medium mb-3 font-black — 900 font-semibold">
            Premium Tiles &middot; Quality SanitaryWare &middot; Hardware &middot; Trusted Service
          </p>
          <h1 className="animate-fade-up font-display text-4xl sm:text-6xl lg:text-8xl leading-[1.08] font-semibold text-[#f2f2f0] max-w-5xl ">
            Imagine It. Visualize It. Make It Yours.
          </h1>
          <p className="animate-fade-up mt-3 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#ecc79c] font-semibold max-w-xl">
            Visualize Luxury in Your Space Before You Choose.
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
    </section>
  );
}
