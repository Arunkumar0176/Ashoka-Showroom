import { FiPhone, FiMapPin, FiClock, FiHome } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SHOP_INFO, whatsappLink } from "../data/siteData";

const infoRows = [
  { icon: FiHome, label: "Address", value: SHOP_INFO.address },
  { icon: FiPhone, label: "Phone", value: SHOP_INFO.phoneDisplay },
  { icon: FiClock, label: "Opening Hours", value: SHOP_INFO.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        <div>
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Visit Our Showroom
          </h2>
          <p className="font-display text-xl text-ink mt-6">Ashoka Tiles</p>

          <dl className="mt-6 space-y-5">
            {infoRows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <Icon />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-stone">{label}</dt>
                  <dd className="text-ink font-medium">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
            <a
              href={SHOP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              <FiMapPin />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Embedded map preview — links out to the full Google Maps location */}
        <a
          href={SHOP_INFO.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-card overflow-hidden border border-line shadow-card min-h-[260px] sm:min-h-[340px] flex items-center justify-center bg-surface"
        >
          <div className="text-center px-8">
            <FiMapPin className="mx-auto text-4xl text-accent" />
            <p className="mt-4 font-display text-lg text-ink font-semibold">
              {SHOP_INFO.name}
            </p>
            <p className="text-sm text-stone mt-2">
              Tap to open our exact location in Google Maps
            </p>
          </div>
          <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
        </a>
      </div>
    </section>
  );
}
