import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiX, FiChevronLeft, FiChevronRight, FiShare2, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { categories, whatsappLink } from "../data/siteData";
import Header from "./Header";
import Footer from "./Footer";

function getTileImages(tile) {
  if (tile.images && tile.images.length > 0) return tile.images;
  if (tile.image) return [tile.image];
  return [];
}

/* ─── Flipkart/Amazon-style Image Viewer ─── */
function ImageViewer({ tile, onClose, categoryName }) {
  const images = getTileImages(tile);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [copied, setCopied] = useState(false);
  const thumbRef = useRef(null);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Reset on tile change
  useEffect(() => { setCurrent(0); }, [tile]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbRef.current) {
      const active = thumbRef.current.querySelector("[data-active='true']");
      if (active) active.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }
  }, [current]);

  // Touch swipe
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  const handleShare = async () => {
    const text = `Check out "${tile.name}" at Ashoka Tiles!\n${window.location.href}`;
    if (navigator.share) {
      try { await navigator.share({ title: tile.name, text, url: window.location.href }); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col" role="dialog" aria-modal="true">

      {/* Close button top-right */}
      <button onClick={onClose} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full border border-line bg-white shadow flex items-center justify-center text-ink hover:bg-bg transition-colors" aria-label="Close">
        <FiX size={16} />
      </button>

      {/* ── Body: thumbnails + main image ── */}
      <div className="flex-1 flex overflow-hidden">

        {/* Desktop: vertical thumbnail sidebar */}
        {images.length > 1 && (
          <div
            ref={thumbRef}
            className="hidden sm:flex flex-col gap-2 w-20 shrink-0 overflow-y-auto py-4 px-2 border-r border-line"
          >
            {images.map((img, i) => (
              <button
                key={i}
                data-active={i === current ? "true" : "false"}
                onClick={() => setCurrent(i)}
                className={`shrink-0 w-full aspect-square rounded overflow-hidden border-2 transition-all ${
                  i === current ? "border-accent shadow-sm scale-105" : "border-transparent opacity-60 hover:opacity-100 hover:border-stone/40"
                }`}
              >
                <img src={img} alt={`${tile.name} view ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Main image */}
        <div
          className="flex-1 flex items-center justify-center relative bg-white overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            key={current}
            src={images[current]}
            alt={`${tile.name} - view ${current + 1}`}
            className="max-h-full max-w-full object-contain p-4 sm:p-8 transition-opacity duration-200"
            style={{ animation: "fadeIn 0.2s ease" }}
          />

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 sm:left-4 w-9 h-9 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
                aria-label="Previous image"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 sm:right-4 w-9 h-9 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-ink hover:bg-bg transition-colors"
                aria-label="Next image"
              >
                <FiChevronRight size={18} />
              </button>
            </>
          )}

          {/* Counter badge */}
          {images.length > 1 && (
            <span className="absolute bottom-3 right-3 bg-ink/60 text-white text-[11px] px-2.5 py-1 rounded-full">
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      </div>

      {/* Mobile: horizontal thumbnail strip */}
      {images.length > 1 && (
        <div
          ref={thumbRef}
          className="sm:hidden shrink-0 flex gap-2 overflow-x-auto px-4 py-3 border-t border-line"
        >
          {images.map((img, i) => (
            <button
              key={i}
              data-active={i === current ? "true" : "false"}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-14 h-14 rounded overflow-hidden border-2 transition-all ${
                i === current ? "border-accent scale-105" : "border-transparent opacity-55 hover:opacity-90"
              }`}
            >
              <img src={img} alt={`view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Mobile: WhatsApp + dot indicators */}
      <div className="sm:hidden shrink-0 flex items-center justify-between px-4 py-3 border-t border-line gap-3">
        {images.length > 1 ? (
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? "w-4 h-2 bg-accent" : "w-2 h-2 bg-stone/30"}`}
              />
            ))}
          </div>
        ) : <div />}
        <a
          href={whatsappLink(`Hi, I'm interested in "${tile.name}" from ${categoryName}. Please share details.`)}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-moss px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
        >
          <FaWhatsapp /> Enquire
        </a>
      </div>

      {/* Bottom info bar — all screen sizes */}
      <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 border-t border-line gap-3">
        <div className="min-w-0">
          <p className="font-display text-sm sm:text-base font-semibold text-ink truncate">{tile.name}</p>
          <p className="text-xs text-stone mt-0.5">
            {tile.size && `Size: ${tile.size}`}{tile.size && tile.price && " · "}{tile.price}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={handleShare} className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-stone hover:text-accent transition-colors" title={copied ? "Copied!" : "Share"}>
            {copied ? <FiCheck size={14} className="text-moss" /> : <FiShare2 size={14} />}
          </button>
          <a
            href={whatsappLink(`Hi, I'm interested in "${tile.name}" from ${categoryName}. Please share details.`)}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-moss px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp /> Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Category Page ─── */
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
        <ImageViewer
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
                target="_blank" rel="noopener noreferrer"
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
                      <h3 className="font-display text-base font-semibold text-ink">{tile.name}</h3>
                      {tile.size && <p className="text-xs text-stone mt-1">Size: {tile.size}</p>}
                      {tile.price && <p className="text-accent font-semibold mt-1 text-sm">{tile.price}</p>}
                      {tile.description && <p className="text-xs text-stone mt-2 leading-relaxed">{tile.description}</p>}
                      <a
                        href={whatsappLink(`Hi, I'm interested in "${tile.name}" from ${category.name}. Please share details.`)}
                        target="_blank" rel="noopener noreferrer"
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
