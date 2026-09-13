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
      { 
        name: "Floor Tile 1", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl1/tilesPF.png",
          "/images/tiles/Floor/Fl1/view1.jpg",
          "/images/tiles/Floor/Fl1/view1.jpg",
        ]
      },
      { 
        name: "Floor Tile 2", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl2/tiles1PF.png",
          "/images/tiles/Floor/Fl2/view1.png",
        ]
      },
      { 
        name: "Floor Tile 3", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl3/tiles1PF.jpg",
          "/images/tiles/Floor/Fl3/view1.jpg",
        ]
      },
      { 
        name: "Floor Tile 4", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl4/PF1.jpg",
          "/images/tiles/Floor/Fl4/view1.png",
        ]
      },
      { 
        name: "Floor Tile 5", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl5/PF1.png",
          "/images/tiles/Floor/Fl5/view1.png",
        ]
      },
      { 
        name: "Floor Tile 6", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl6/PF1.png",
          "/images/tiles/Floor/Fl6/view1.png",
        ]
      },
      { 
        name: "Floor Tile 7", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl7/PF1.png",
          "/images/tiles/Floor/Fl7/view1.png",
        ]
      },
      { 
        name: "Floor Tile 8", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl8/PF1.png",
          
        ]
      },
      { 
        name: "Floor Tile 9", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl9/PF1.png",
          "/images/tiles/Floor/Fl9/view1.png",
        ]
      },
      { 
        name: "Floor Tile 10", 
        size: "2 × 4 ft", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Floor/Fl10/PF1.png",
          "/images/tiles/Floor/Fl10/view1.png",
        ]
      },
    ],
  },
  
  {
    name: "Bathroom Tiles",
    slug: "bathroom-tiles",
    description: "Water-resistant tiles designed for lasting shine.",
    image: "/images/category/BathroomPF.png",
    tiles: [
      { 
        name: "Bathroom Tile 1", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Bathroom/BT1/PF.png",
          "/images/tiles/Bathroom/BT1/view1.png",
          "/images/tiles/Bathroom/BT1/view2.png",
        ]
      },
      { 
        name: "Bathroom Tile 2", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Bathroom/BT2/PF.png",
          "/images/tiles/Bathroom/BT2/view1.png",
          "/images/tiles/Bathroom/BT2/view2.png",
        ]
      },
      { 
        name: "Bathroom Tile 3", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Bathroom/BT3/PF.png",
          "/images/tiles/Bathroom/BT3/view1.png",
          "/images/tiles/Bathroom/BT3/view2.png",
        ]
      },
    ],
  },
  {
    name: "Kitchen Tiles",
    slug: "kitchen-tiles",
    description: "Stain-resistant tiles for hardworking kitchens.",
    image: "/images/category/KitchenPF.png",
    tiles: [
      { 
        name: "Kitchen Tile 1", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC1/KC1.png",
          "/images/tiles/Kitchen/KC1/view1.png",
        ]
      },
      { 
        name: "Kitchen Tile 2", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC2/PF1.png",
          "/images/tiles/Kitchen/KC2/view1.png",
        ]
      },
      { 
        name: "Kitchen Tile 3", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC3/PF.png",
          "/images/tiles/Kitchen/KC3/view1.png",
          "/images/tiles/Kitchen/KC3/view2.png"
        ]
      },
      { 
        name: "Kitchen Tile 4", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC4/PF.png",
          "/images/tiles/Kitchen/KC4/view1.png",
          "/images/tiles/Kitchen/KC4/view2.png"
        ]
      },
      { 
        name: "Kitchen Tile 5", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC5/PF.png",
          "/images/tiles/Kitchen/KC5/view1.png",
          "/images/tiles/Kitchen/KC5/view2.png",
          "/images/tiles/Kitchen/KC5/view3.png"
        ]
      },
      { 
        name: "Kitchen Tile 6", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC6/PF.png",
          "/images/tiles/Kitchen/KC6/view1.png",
          "/images/tiles/Kitchen/KC6/view2.png",
        ]
      },
      { 
        name: "Kitchen Tile 7", 
        size: "12 × 18 inc", 
        description: "Made with high-quality raw materials for long-lasting performance.", 
        images: [
          "/images/tiles/Kitchen/KC7/PF.png",
          "/images/tiles/Kitchen/KC7/view1.png",
          "/images/tiles/Kitchen/KC7/view2.png",
        ]
      },
    ],
  },
  {
    name: "Elevation Tiles",
    slug: "wall-tiles",
    description: "Glossy and matte finishes to elevate any wall.",
    image: "/images/category/wallPF.png",
    tiles: [
      { name: "Elevation Tile 1",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev1/PF.png",
          "/images/tiles/Elevation/Ev1/view1.png",
        ]
       },
       { name: "Elevation Tile 2",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev2/PF.png",
          "/images/tiles/Elevation/Ev2/view1.png",
        ]
       },
       { name: "Elevation Tile 3",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev3/PF.png",
          "/images/tiles/Elevation/Ev3/view1.png",
        ]
       },
       { name: "Elevation Tile 4",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev4/PF.png",
          "/images/tiles/Elevation/Ev4/view1.png",
        ]
       },
       { name: "Elevation Tile 5",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev5/PF.png",
          "/images/tiles/Elevation/Ev5/view1.png",
        ]
       },
       { name: "Elevation Tile 6",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev6/PF.png",
          "/images/tiles/Elevation/Ev6/view1.png",
        ]
       },
       { name: "Elevation Tile 7",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev7/PF.png",
          "/images/tiles/Elevation/Ev7/view1.png",
        ]
       },
       { name: "Elevation Tile 8",
        size: "12 × 18 inc",
        description: "Made with high-quality raw materials for long-lasting performance.",
        images: [
          "/images/tiles/Elevation/Ev8/PF.png",
          "/images/tiles/Elevation/Ev8/view1.png",
        ]
       },
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
// 3. SANITARYWARE COLLECTION
// Shown in the "Sanitaryware" section.
// ---------------------------------------------------------------------
export const sanitarywareItems = [
  {
    name: "Vanity Box",
    slug: "vanity-box",
    description: "Stylish vanity units combining storage and elegance for modern bathrooms.",
    image: "/images/Sanitaryware_cat/vanityPF.png",
    items: [],
  },
  {
    name: "English Seat",
    slug: "english-seat",
    description: "Comfortable, hygienic English-style toilet seats built for daily use.",
    image: "/images/Sanitaryware_cat/SeatPF.png",
    items: [],
  },
  {
    name: "Sink",
    slug: "sink",
    description: "Durable kitchen and utility sinks in multiple sizes and finishes.",
    image: "/images/Sanitaryware_cat/SinkPF.png",
    items: [],
  },
  {
    name: "Basin",
    slug: "basin",
    description: "Wall-hung and counter-top basins crafted for style and functionality.",
    image: "/images/Sanitaryware_cat/BasinPF.png",
    items: [],
  },
  {
    name: "Tank",
    slug: "tank",
    description: "Reliable flush tanks with smooth operation and water-saving design.",
    image: "/images/Sanitaryware_cat/TankPF.png",
    items: [],
  },
  {
    name: "Other",
    slug: "other",
    description: "Explore more sanitaryware essentials — ask us in-store for the full range.",
    image: "/images/Sanitaryware_cat/other.png",
    items: [],
  },
];

// ---------------------------------------------------------------------
// 4. FEATURED PRODUCTS (legacy — kept for reference)
// ---------------------------------------------------------------------
export const products = [
  {
    id: 1,
    name: "Premium Marble Finish Tile",
    category: "Floor Tiles",
    size: "4 × 2 ft",
    image: "/images/tiles/tiles1PF.png",
  },
  {
    id: 2,
    name: "Royal Gloss Wall Tile",
    category: "Wall Tiles",
    size: "2 × 4 ft",
    image: "/images/tiles/tiles2PF/tiles2PF.png",
  },
  {
    id: 3,
    name: "Luxury Bathroom Tile",
    category: "Bathroom Tiles",
    size: "2 × 4 ft",
    image: "/images/tiles/tiles3PF.png",
  },
  {
    id: 4,
    name: "Premium Kitchen Tile",
    category: "Kitchen Tiles",
    size: "2 × 4 ft",
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
    image: "/images/hardware/PF1.png",
  },
  {
    name: "Taps",
    description: "Durable, corrosion-resistant taps in multiple finishes.",
    image: "/images/hardware/PF2.png",
  },
  {
    name: "Shower",
    description: "Rain showers and hand showers for a spa-like feel.",
    image: "/images/hardware/PF3.png",
  },
  {
    name: "Hot & Cold Mixer",
    description: "Smooth-control mixers for consistent water temperature.",
    image: "/images/hardware/PF4.png",
  },
  {
    name: "Kitchen Fittings",
    description: "Sinks, faucets and fittings built for daily use.",
    image: "/images/hardware/PF4.png",
  },
  {
    name: "Sanitary Accessories",
    description: "Towel rails, holders and everyday bathroom essentials.",
    image: "/images/hardware/PF6.png",
  },
  {
    name: "Other Hardware Products",
    description: "A wider range of fittings and hardware — ask in-store.",
    image: "/images/hardware/PF7.png",
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
