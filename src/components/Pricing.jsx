import { pricingTiers, pricingNote } from "../data/siteData";

export default function Pricing() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Starting Prices
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.label}
              className="rounded-card bg-bg border border-line p-6 sm:p-8 text-center"
            >
              <p className="text-sm text-stone uppercase tracking-wide">{tier.label}</p>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-accent mt-3">
                {tier.price}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-stone mt-8 text-center max-w-xl mx-auto">
          {pricingNote}
        </p>
      </div>
    </section>
  );
}
