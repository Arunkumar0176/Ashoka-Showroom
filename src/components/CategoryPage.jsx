import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { categories, whatsappLink } from "../data/siteData";
import Header from "./Header";
import Footer from "./Footer";

function Lightbox({ tiles, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const tile = tiles[current];

  const prev = () => setCurrent((i) => (i - 1 + tiles.length) % tiles.length);
  const next = () => setCurrent((i) => (i + 1) % tiles.length);

  const handleKey = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center px-4"
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <FiX size={20} />
      </button>

      {/* Prev */}
      {tiles.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <FiChevronLeft size={22} />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-3xl w-full rounded-card overflow-hidden shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={tile.image}
          alt={tile.name}
          className="w-full max-h-[70vh] object-contain bg-surface"
        />
        <div className="bg-surface px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">{tile.name}</p>
            <p className="text-sm text-stone mt-0.5">
              {tile.size && `Size: ${tile.size}`}
              {tile.size && tile.price && " · "}
              {tile.price && tile.price}
            </p>
          </div>
          <a
            href={whatsappLink(`Hi, I'm interested in "${tile.name}". Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp /> Enquire
          </a>
        </div>
        {tiles.length > 1 && (
          <p className="bg-surface text-center text-xs text-stone pb-3">
            {current + 1} / {tiles.length}
          </p>
        )}
      </div>

      {/* Next */}
      {tiles.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <FiChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

export default function CategoryPage() {
  const { slug } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-bg flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-3xl font-semibold text-ink">Category Not Found</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors">
            <FiArrowLeft /> Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />

      {lightboxIndex !== null && (
        <Lightbox
          tiles={category.tiles}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <main className="flex-1">
        {/* Hero banner */}
        <div className="relative h-48 sm:h-64 lg:h-80 w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-end pb-8 sm:pb-10">
            <Link
              to="/#collection"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium mb-4 transition-colors w-fit"
            >
              <FiArrowLeft /> Back to Collection
            </Link>
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
              Our Collection
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-2">
              {category.name}
            </h1>
            <p className="text-white/75 mt-2 text-sm sm:text-base max-w-xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Tiles grid */}
        <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
          {category.tiles.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-ink font-semibold">Coming Soon</p>
              <p className="text-stone mt-3 text-base">
                We're updating our {category.name} collection. Visit our showroom or contact us for availability.
              </p>
              <a
                href={whatsappLink(`Hi, I'm interested in ${category.name}. Please share available options.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <FaWhatsapp /> Enquire on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.tiles.map((tile, i) => (
                <article
                  key={i}
                  className="group rounded-card overflow-hidden bg-surface border border-line shadow-card hover:shadow-lift transition-shadow flex flex-col"
                >
                  {/* Clickable image */}
                  <button
                    type="button"
                    className="relative aspect-square overflow-hidden w-full"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`View ${tile.name} in full size`}
                  >
                    <img
                      src={tile.image}
                      alt={tile.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-ink text-xs font-semibold px-3 py-1.5 rounded-full">
                        View Full
                      </span>
                    </span>
                  </button>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-display text-base font-semibold text-ink">{tile.name}</h3>
                    {tile.size && <p className="text-xs text-stone mt-1">Size: {tile.size}</p>}
                    {tile.price && <p className="text-accent font-semibold mt-1 text-sm">{tile.price}</p>}
                    {tile.description && <p className="text-xs text-stone mt-2 leading-relaxed">{tile.description}</p>}
                    <a
                      href={whatsappLink(`Hi, I'm interested in "${tile.name}" from ${category.name}. Please share details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-3 w-full inline-flex items-center justify-center gap-2 rounded-full bg-moss text-white text-xs font-semibold py-2.5 hover:opacity-90 transition-opacity"
                    >
                      <FaWhatsapp /> Enquire
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Other categories */}
        <section className="bg-surface border-t border-line py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-6">
              Explore Other Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories
                .filter((c) => c.slug !== slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/collections/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
                  >
                    {c.name} <FiArrowUpRight className="text-xs" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
