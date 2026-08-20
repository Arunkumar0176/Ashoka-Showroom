import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiX, FiChevronLeft, FiChevronRight, FiShare2, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { categories, whatsappLink } from "../data/siteData";
import Header from "./Header";
import Footer from "./Footer";

// Returns array of images whether tile uses `images[]` or single `image`
function getTileImages(tile) {
  if (tile.images && tile.images.length > 0) return tile.images;
  if (tile.image) return [tile.image];
  return [];
}

function ShareButton({ tile, categoryName, stopProp = false }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    if (stopProp) e.stopPropagation();
    const shareText = `Check out "${tile.name}" from ${categoryName} at Ashoka Tiles!\n${window.location.href}`;
    if (navigator.share) {
      try { await navigator.share({ title: tile.name, text: shareText, url: window.location.href }); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="w-8 h-8 rounded-full bg-bg border border-line flex items-center justify-center text-stone hover:text-accent hover:border-accent transition-colors"
      aria-label="Share this tile"
      title={copied ? "Link copied!" : "Share"}
    >
      {copied ? <FiCheck size={14} className="text-moss" /> : <FiShare2 size={14} />}
    </button>
  );
}

function Lightbox({ tile, onClose, categoryName }) {
  const images = getTileImages(tile);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  useEffect(() => { setCurrent(0); }, [tile]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col" onClick={onClose}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-line shrink-0">
        <div>
          <p className="font-display text-base sm:text-lg font-semibold text-ink">{tile.name}</p>
          <p className="text-xs text-stone mt-0.5">
            {tile.size && `Size: ${tile.size}`}{tile.size && tile.price && " · "}{tile.price && tile.price}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ShareButton tile={tile} categoryName={categoryName} />
          <a
            href={whatsappLink(`Hi, I'm interested in "${tile.name}" from ${categoryName}. Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-moss px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp /> Enquire
          </a>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-bg border border-line flex items-center justify-center text-ink hover:bg-line transition-colors"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>
      </div>

      {/* Main image area */}
      <div
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={current}
          src={images[current]}
          alt={`${tile.name} - photo ${current + 1}`}
          className="max-h-full max-w-full object-contain px-16 sm:px-24"
        />

        {/* Left arrow */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 w-10 h-10 rounded-full bg-white border border-line shadow flex items-center justify-center text-ink hover:bg-bg transition-colors"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} />
          </button>
        )}

        {/* Right arrow */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 w-10 h-10 rounded-full bg-white border border-line shadow flex items-center justify-center text-ink hover:bg-bg transition-colors"
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="shrink-0 flex items-center justify-center gap-2 py-5" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-4 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-stone/30 hover:bg-stone/60"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CategoryPage() {
  const { slug } = useParams();
  const [activeTile, setActiveTile] = useState(null);
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

      {activeTile !== null && (
        <Lightbox
          tile={category.tiles[activeTile]}
          onClose={() => setActiveTile(null)}
          categoryName={category.name}
        />
      )}

      <main className="flex-1">
        {/* Hero banner */}
        <div className="relative h-48 sm:h-64 lg:h-80 w-full overflow-hidden">
          <img src={category.image} alt={category.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-end pb-8 sm:pb-10">
            <Link to="/#collection" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium mb-4 transition-colors w-fit">
              <FiArrowLeft /> Back to Collection
            </Link>
            <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">Our Collection</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-2">{category.name}</h1>
            <p className="text-white/75 mt-2 text-sm sm:text-base max-w-xl">{category.description}</p>
          </div>
        </div>

        {/* Tiles grid */}
        <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-8">
          {category.tiles.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-ink font-semibold">Coming Soon</p>
              <p className="text-stone mt-3 text-base">We're updating our {category.name} collection. Visit our showroom or contact us for availability.</p>
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
              {category.tiles.map((tile, i) => {
                const images = getTileImages(tile);
                return (
                  <article key={i} className="group rounded-card overflow-hidden bg-surface border border-line shadow-card hover:shadow-lift transition-shadow flex flex-col">
                    <button
                      type="button"
                      className="relative aspect-square overflow-hidden w-full"
                      onClick={() => setActiveTile(i)}
                      aria-label={`View ${tile.name}`}
                    >
                      <img
                        src={images[0]}
                        alt={tile.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Photo count badge */}
                      {images.length > 1 && (
                        <span className="absolute bottom-2 right-2 bg-ink/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          +{images.length} photos
                        </span>
                      )}
                      <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-ink text-xs font-semibold px-3 py-1.5 rounded-full">
                          View Full
                        </span>
                      </span>
                    </button>

                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-base font-semibold text-ink">{tile.name}</h3>
                        <ShareButton tile={tile} categoryName={category.name} stopProp />
                      </div>
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
                );
              })}
            </div>
          )}
        </section>

        {/* Other categories */}
        <section className="bg-surface border-t border-line py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mb-6">Explore Other Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.filter((c) => c.slug !== slug).map((c) => (
                <Link key={c.slug} to={`/collections/${c.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors">
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
