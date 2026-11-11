import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SHOP_INFO } from "../data/siteData";

const goldDark  = 'linear-gradient(90deg,#7A5C10,#A67C32,#C9A84C,#B08D3B,#8B6914)';
const goldBright = 'linear-gradient(90deg,#C9A84C,#E8C84A,#F0D060,#E8C84A,#C9A84C)';
const goldMid   = 'linear-gradient(90deg,#8B6914,#B08D3B,#D4AF37,#A67C32,#8B6914)';
const clipStyle = { WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' };

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        {/* Background image — change this file to update the hero photo */}
        <img
          src="/images/hero.png"
          alt="Premium tile showroom display at Ashoka Trading Company"
          className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />

        {/* Premium Tagline — centered overlay with tile reveal animation */}
        <div className="absolute top-1 sm:top-2 left-0 right-0 z-10 flex flex-col items-center text-center px-4">

          {/* Tile wipe shimmer */}
          <div className="relative w-full max-w-xl overflow-hidden h-0" aria-hidden="true">
            <div className="tagline-tile absolute top-0 bottom-0 w-20"
              style={{ background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.45),transparent)', left:0 }}
            />
          </div>

          {/* Line 1 — BIHAR'S NO. 1 CHOICE */}
          <span className="tagline-line-1 block tracking-[0.15em] uppercase font-semibold mb-0 text-sm sm:text-base lg:text-xl"
            style={{ background: goldMid, ...clipStyle }}
          >
            Bihar&rsquo;s&nbsp;
            <strong style={{ background: goldBright, ...clipStyle, fontWeight: 900, fontSize: '1.2em' }}>
              No.&nbsp;1
            </strong>
            &nbsp;Choice
          </span>

          {/* Thin divider */}
          <div className="tagline-line-1 w-12 sm:w-20 h-px mb-1.5"
            style={{ background:'linear-gradient(90deg,transparent,#B08D3B,transparent)' }}
          />

          {/* Line 2 — YOUR TRUST. OUR QUALITY. */}
          <p className="tagline-line-2 font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-[0.08em] uppercase leading-tight"
            style={{ background: goldDark, ...clipStyle }}
          >
            Your Trust.&nbsp; Our Quality.
          </p>

          {/* Line 3 — ASHOKA'S LEGACY. */}
          <p className="tagline-line-3 font-display text-base sm:text-xl lg:text-2xl font-semibold tracking-[0.2em] uppercase leading-tight italic"
            style={{ background: goldMid, ...clipStyle }}
          >
            Ashoka&rsquo;s Legacy.
          </p>

        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-end pb-10 sm:pb-16 lg:pb-20">
          <p className="animate-fade-up text-[#f2f2f0] text-sm sm:text-lg tracking-[0.2em] uppercase font-medium mb-2 font-black — 900 font-semibold">
            Premium Tiles &middot; Quality SanitaryWare &middot; Hardware &middot; Trusted Service
          </p>
          <h1 className="animate-fade-up font-display text-4xl sm:text-6xl lg:text-8xl leading-[1.08] font-semibold text-[#f2f2f0] max-w-5xl ">
            Imagine It. Visualize It. Make It Yours.
          </h1>
          <p className="animate-fade-up mt-3 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#ecc79c] font-semibold max-w-xl">
            Visualize Luxury in Your Space Before You Choose.
          </p>

          <div className="animate-fade-up mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#collection"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Explore Tiles
              <FiArrowRight />
            </a>
            <a
              href={SHOP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/40 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <FiMapPin />
              Visit Our Showroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
