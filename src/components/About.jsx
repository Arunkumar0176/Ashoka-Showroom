import SwatchStrip from "./SwatchStrip";

// Edit the description text below to change the About Us copy.
export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="rounded-card overflow-hidden shadow-lift order-2 lg:order-1">
          <img
            src="/images/about.png"
            alt="Inside the Ashoka Tiles & Hardware showroom"
            className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            About Ashoka Tiles
          </h2>
          <p className="text-stone mt-6 text-base sm:text-lg leading-relaxed">
            At Ashoka Tiles, we bring quality, style and value
            together under one roof. Explore our collection of premium tiles
            and hardware products designed to give your home a beautiful and
            modern look.
          </p>
          <SwatchStrip className="mt-8 rounded-full overflow-hidden h-2.5" />
        </div>
      </div>
    </section>
  );
}
