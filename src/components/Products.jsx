import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sanitarywareItems } from "../data/siteData";

export default function Products() {
  return (
    <section id="products" className="py-14 sm:py-20 lg:py-28 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Sanitaryware
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Our Premium Sanitaryware Collection
          </h2>
          <p className="text-stone mt-4 text-base sm:text-lg">
            Explore our range of premium sanitaryware — crafted for comfort, style and lasting quality.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {sanitarywareItems.map((item) => (
            <Link
              key={item.slug}
              to={`/sanitaryware/${item.slug}`}
              className="group rounded-card overflow-hidden bg-bg border border-line shadow-card hover:shadow-lift transition-shadow block"
            >
              <div className="h-28 sm:h-36 lg:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-display text-base font-semibold text-ink">{item.name}</h3>
                <p className="text-xs text-stone mt-1.5 leading-relaxed">{item.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-accent">
                  View Collection <FiArrowUpRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
