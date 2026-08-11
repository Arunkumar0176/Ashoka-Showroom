import { hardwareItems } from "../data/siteData";

export default function Hardware() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Hardware
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Premium Hardware Collection
          </h2>
          <p className="text-stone mt-4 text-base sm:text-lg">
            Beyond tiles, we stock everything needed to finish the job —
            fittings, fixtures and accessories built to last.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {hardwareItems.map((item) => (
            <div
              key={item.name}
              className="rounded-card overflow-hidden bg-surface border border-line shadow-card hover:shadow-lift transition-shadow"
            >
              <div className="h-32 sm:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.name}
                </h3>
                <p className="text-xs text-stone mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
