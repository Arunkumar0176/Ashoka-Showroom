import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../data/siteData";

export default function Categories() {
  return (
    <section id="collection" className="py-14 sm:py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Our Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Explore Our Collection
          </h2>
          <p className="text-stone mt-4 text-base sm:text-lg">
            Eight curated categories, each built for a different part of the home —
            browse by space to find the right tile for every room.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/collections/${category.slug}`}
              className="group rounded-card overflow-hidden bg-surface border border-line shadow-card hover:shadow-lift transition-shadow block"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.name} at Ashoka Tiles`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {category.name}
                </h3>
                <p className="text-sm text-stone mt-2 leading-relaxed">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent group-hover:text-accent-dark transition-colors">
                  View Collection
                  <FiArrowUpRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
