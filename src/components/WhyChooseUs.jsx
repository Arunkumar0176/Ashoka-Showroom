import { GiDiamonds } from "react-icons/gi";
import { FiGrid, FiShield, FiTag } from "react-icons/fi";

const reasons = [
  {
    icon: GiDiamonds,
    title: "Premium Quality",
    description: "Quality tiles and hardware products for modern spaces.",
  },
  {
    icon: FiGrid,
    title: "Wide Collection",
    description: "Multiple designs, colors, sizes and finishes.",
  },
  {
    icon: FiShield,
    title: "Trusted Service",
    description: "Customer-focused service and helpful guidance.",
  },
  {
    icon: FiTag,
    title: "Best Value",
    description: "Premium-looking products at competitive prices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-semibold">
            Our Promise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-3">
            Why Choose Ashoka 
            Tiles?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-card bg-surface border border-line p-7 shadow-card hover:shadow-lift transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl mb-5">
                <Icon />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="text-sm text-stone mt-2 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
