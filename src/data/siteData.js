// =====================================================================
// CENTRAL DATA FILE
// Edit everything here — shop info, products, categories, prices.
// You should never need to touch the component files to update content.
// =====================================================================

// ---------------------------------------------------------------------
// 1. SHOP INFORMATION
// Replace the placeholder phone number, address and hours below with
// your real details. The phone number is used for both the "Call Now"
// button and the WhatsApp button, so you only need to change it once.
// ---------------------------------------------------------------------
export const SHOP_INFO = {
  name: "Ashoka Tiles",
  tagline: "Premium Tiles & SanitaryWare for Your Dream Home",

  // Replace with your real 10-digit number (no spaces, with country code for WhatsApp).
  phoneDisplay: "+91-9939846959",
  phoneCallLink: "tel:+919939846959",
  whatsappNumber: "919939846959", // country code + number, no "+" or spaces
  whatsappMessage:
    "Hi, I'd like to enquire about tiles and SanitaryWare products.",

  address: "Lakri Bazar, Mirganj Road, Siwan, Bihar",
  hours: " Monday-Sunday, (7:00 AM – 8:00 PM)",

  // Your Google Maps share link — used by every "Get Directions" button.
  mapsLink: "https://maps.app.goo.gl/Ui4uj1uBqRpLGV5V7",

  social: {
    instagram: "https://www.instagram.com/ashoka_tiles1?igsh=Njc0aHFicmJid28w",
    facebook: "#",
  },
};

export function whatsappLink(customMessage) {
  const message = encodeURIComponent(
    customMessage || SHOP_INFO.whatsappMessage,
  );
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${message}`;
}

// ---------------------------------------------------------------------
// 2. PRODUCT CATEGORIES
// Shown in the "Explore Our Collection" section.
// "image" paths point to /public/images — replace the files there with
// your own photos, keeping the same filenames, or update the paths.
// ---------------------------------------------------------------------
export const categories = [
  {
    name: "Floor Tiles",
    slug: "floor-tiles",
    description: "Durable, elegant tiles built for everyday living spaces.",
    image: "/images/category/floorPF.png",
    tiles: [
      { name: "Floor Tile 1", size: "2 × 4 ft", price: "₹270 / Box", image: "/images/tiles/tiles1PF.png" },
    ],
  },
  {
    name: "Wall Tiles",
    slug: "wall-tiles",
    description: "Glossy and matte finishes to elevate any wall.",
    image: "/images/category/wallPF.png",
    tiles: [
      { name: "Wall Tile 1", size: "2 × 4 ft", price: "₹270 / Box", image: "/images/tiles/tiles2PF.png" },
    ],
  },
  {
    name: "Bathroom Tiles",
    slug: "bathroom-tiles",
    description: "Water-resistant tiles designed for lasting shine.",
    image: "/images/category/BathroomPF.png",
    tiles: [
      { name: "Bathroom Tile 1", size: "2 × 4 ft", price: "₹270 / Box", image: "/images/tiles/tiles3PF.png" },
    ],
  },
  {
    name: "Kitchen Tiles",
    slug: "kitchen-tiles",
    description: "Stain-resistant tiles for hardworking kitchens.",
    image: "/images/category/KitchenPF.png",
    tiles: [
      { name: "Kitchen Tile 1", size: "2 × 4 ft", price: "₹270 / Box", image: "/images/tiles/tiles4PF.png" },
    ],
  },
  {
    name: "Living Room Tiles",
    slug: "living-room-tiles",
    description: "Statement tiles that anchor your living space.",
    image: "/images/category/LivingRoomPF.png",
    tiles: [
      { name: "Living Room Tile 1", size: "2 × 4 ft", price: "₹270 / Box", image: "/images/tiles/tiles1PF.png" },
    ],
  },
  {
    name: "Outdoor Tiles",
    slug: "outdoor-tiles",
    description: "Weatherproof tiles for patios, balconies and courtyards.",
    image: "/images/category/outdoorPF.png",
    tiles: [
      { name: "Outdoor Tile 1", size: "2 × 4 ft", price: "₹270 / Box", image: "/images/tiles/tiles2PF.png" },
    ],
  },
  {
    name: "Marble Finish Tiles",
    slug: "marble-finish-tiles",
    description: "The look of natural marble, made for daily use.",
    image: "/images/category/marbelPF.png",
    tiles: [
      { name: "Marble Tile 1", size: "2 × 4 ft", price: "₹600 / Box", image: "/images/tiles/tiles3PF.png" },
    ],
  },
  {
    name: "Premium Tiles",
    slug: "premium-tiles",
    description: "Our finest imported and designer tile collections.",
    image: "/images/category/PremiumPF.png",
    tiles: [
      { name: "Premium Tile 1", size: "2 × 4 ft", price: "₹600 / Box", image: "/images/tiles/tiles4PF.png" },
    ],
  },
];

// ---------------------------------------------------------------------
// 3. FEATURED PRODUCTS
// Add, remove or edit products by editing this array only.
// "image" paths point to /public/images/ — replace those files with
// real product photos using the same filenames, or add new files and
// update the path here.
// ---------------------------------------------------------------------
export const products = [
  {
    id: 1,
    name: "Premium Marble Finish Tile",
    category: "Floor Tiles",
    size: "4 × 2 ft",
    price: "₹85 / sq.ft.",
    image: "/images/tiles/tiles1PF.png",
  },
  {
    id: 2,
    name: "Royal Gloss Wall Tile",
    category: "Wall Tiles",
    size: "2 × 4 ft",
    price: "₹65 / sq.ft.",
    image: "/images/tiles/tiles2PF.png",
  },
  {
    id: 3,
    name: "Luxury Bathroom Tile",
    category: "Bathroom Tiles",
    size: "2 × 4 ft",
    price: "₹75 / sq.ft.",
    image: "/images/tiles/tiles3PF.png",
  },
  {
    id: 4,
    name: "Premium Kitchen Tile",
    category: "Kitchen Tiles",
    size: "2 × 4 ft",
    price: "₹70 / sq.ft.",
    image: "/images/tiles/tiles4PF.png",
  },
];

// ---------------------------------------------------------------------
// 4. HARDWARE COLLECTION
// Shown in the "Premium Hardware Collection" section.
// ---------------------------------------------------------------------
export const hardwareItems = [
  {
    name: "Bathroom Fittings",
    description: "Complete fitting solutions for modern bathrooms.",
    image: "/images/hardware-bathroom-fittings.jpg",
  },
  {
    name: "Taps",
    description: "Durable, corrosion-resistant taps in multiple finishes.",
    image: "/images/hardware-taps.jpg",
  },
  {
    name: "Shower",
    description: "Rain showers and hand showers for a spa-like feel.",
    image: "/images/hardware-shower.jpg",
  },
  {
    name: "Hot & Cold Mixer",
    description: "Smooth-control mixers for consistent water temperature.",
    image: "/images/hardware-mixer.jpg",
  },
  {
    name: "Kitchen Fittings",
    description: "Sinks, faucets and fittings built for daily use.",
    image: "/images/hardware-kitchen-fittings.jpg",
  },
  {
    name: "Sanitary Accessories",
    description: "Towel rails, holders and everyday bathroom essentials.",
    image: "/images/hardware-sanitary-accessories.jpg",
  },
  {
    name: "Other Hardware Products",
    description: "A wider range of fittings and hardware — ask in-store.",
    image: "/images/hardware-other.jpg",
  },
];

// ---------------------------------------------------------------------
// 5. STARTING PRICES
// Shown in the pricing section. Edit the "price" values as needed.
// ---------------------------------------------------------------------
export const pricingTiers = [
  { label: "Tiles Starting From", price: "₹270 / Box." },
  { label: "Premium Tiles", price: "₹600+ / Box." },
  { label: "Bathroom Fittings", price: "₹280 / Box." },
];

export const pricingNote =
  "Prices may vary according to design, size and availability. Contact us for the latest price.";
