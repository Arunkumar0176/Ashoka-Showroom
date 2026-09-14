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
            About Ashoka
          </h2>
          <p className="text-stone mt-5 text-base sm:text-lg leading-relaxed">
  Founded in 2001 by Mr. Ashok Gupta in Siwan, Bihar, Ashoka brings over
  26 years of experience in tiles, hardware and sanitaryware, built on a
  simple vision — to provide quality products for beautiful homes.

  Over the years, we discovered a common challenge: customers could see a
  tiles in the showroom, but often found it difficult to imagine how it would
  actually look in their own home.
  <br /><br />
  This inspired us to take Ashoka beyond the traditional showroom. Today,
  we are building a visualization-focused platform where customers can
  explore premium products and visualize how they can look in their own
  spaces before making a decision.
</p>
        </div>
      </div>
    </section>
  );
}
