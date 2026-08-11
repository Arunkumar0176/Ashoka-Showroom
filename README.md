# Ashoka Tiles & Hardware — Website

A modern, responsive showroom website built with React, Vite, Tailwind CSS
and React Icons.

## 1. Run the project

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 2. Folder structure

```
src/
├── components/     One file per section (Header, Hero, Products, etc.)
├── data/
│   └── siteData.js   ALL editable content lives here
├── App.jsx          Assembles the sections in order
├── main.jsx         React entry point
└── index.css        Tailwind + global styles

public/
└── images/          All images. Replace files here, keep filenames,
                      or change the paths in siteData.js
```

## 3. Everything you'll want to edit lives in `src/data/siteData.js`

| What you want to change            | Where                                             |
|-------------------------------------|----------------------------------------------------|
| Shop name / tagline                 | `SHOP_INFO.name`, `SHOP_INFO.tagline`               |
| Phone number (Call Now + WhatsApp)  | `SHOP_INFO.phoneDisplay`, `phoneCallLink`, `whatsappNumber` |
| Address                             | `SHOP_INFO.address`                                 |
| Business hours                      | `SHOP_INFO.hours`                                   |
| Google Maps link ("Get Directions") | `SHOP_INFO.mapsLink`                                |
| Add / remove / edit products        | the `products` array                                |
| Add / remove / edit categories      | the `categories` array                              |
| Add / remove / edit hardware items  | the `hardwareItems` array                           |
| Starting prices                     | `pricingTiers` and `pricingNote`                    |
| Instagram / Facebook links          | `SHOP_INFO.social`                                  |

You never need to open a component file to update content — just edit this
one data file.

### Adding a new product

```js
{
  id: 5,
  name: "Your New Tile Name",
  category: "Floor Tiles",
  size: "2 × 2 ft",
  price: "₹60 / sq.ft.",
  image: "/images/tile5.jpg", // add this file to public/images/
}
```

## 4. Replacing images

Every image is a placeholder generated for this project, clearly labelled
"Replace this image" so it's obvious what to swap. To replace one:

1. Add your real photo to `public/images/`.
2. Either keep the same filename (e.g. `hero.jpg`) so it's replaced
   automatically, or give it a new name and update the matching `image`
   path in `siteData.js`.

Recommended sizes: hero ~1600×1000px, category/product cards ~900×700px,
hardware cards ~800×650px. JPG or PNG both work.

## 5. Changing colors

Open `tailwind.config.js` → `theme.extend.colors`. The palette:

- `accent` (#A8502C) — buttons, links, highlights (the brand's terracotta)
- `ink` (#2B2622) — primary text and dark sections
- `stone` (#8C8578) — secondary/muted text
- `bg` (#FAF7F2) — page background
- `surface` (#FFFFFF) — cards and panels
- `moss` (#5C6653) — used for WhatsApp buttons

Change any hex value and every component using that color updates
automatically.

## 6. Placeholder information used in this build

Because real details weren't provided, these placeholders were used and
should be replaced in `siteData.js` before going live:

- Phone number: `+91 XXXXX XXXXX`
- Address: `Add your showroom address here`
- Business hours: `Add business hours here`
- Instagram / Facebook links: `#`

The Google Maps link you provided is already wired in:
`https://maps.app.goo.gl/Ui4uj1uBqRpLGV5V7`

## 7. Notes

- This is a frontend-only site — no backend or database required.
- "View Details" on product cards is currently a static button (no detail
  page) to keep the project simple, as requested. It can be wired up to a
  modal or a router later if needed.
- Icons come from `react-icons` (Feather icon set, plus one accent icon
  from Game Icons and the WhatsApp glyph from Font Awesome).
