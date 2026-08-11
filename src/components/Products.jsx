import { products } from "../data/siteData";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Featured Tiles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Featured Tiles
          </h2>
          <p className="text-stone mt-4 text-base sm:text-lg">
            A closer look at some of our most-loved tiles. {" "}
            
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
