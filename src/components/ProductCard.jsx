import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/siteData";

// Renders a single product. Product data comes entirely from
// src/data/siteData.js — this component only handles display.
export default function ProductCard({ product }) {
  const enquiryMessage = `Hi, I'd like to enquire about "${product.name}" (${product.size}).`;

  return (
    <article className="group rounded-card overflow-hidden bg-surface border border-line shadow-card hover:shadow-lift transition-shadow flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-ink/80 text-white text-[11px] font-semibold px-3 py-1 tracking-wide backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
        <p className="text-sm text-stone mt-1">Size: {product.size}</p>
        <p className="text-accent font-semibold mt-2 text-lg">{product.price}</p>

        <div className="mt-5 flex flex-col gap-2.5 pt-1 mt-auto">
          <button
            type="button"
            className="w-full rounded-full border border-ink/20 text-ink text-sm font-semibold py-2.5 hover:border-ink/40 transition-colors"
          >
            View Details
          </button>
          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-moss text-white text-sm font-semibold py-2.5 hover:opacity-90 transition-opacity"
          >
            <FaWhatsapp className="text-base" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
