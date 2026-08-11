/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Central color palette — change these values to re-theme the whole site.
        bg: "#FAF7F2", // warm porcelain background
        surface: "#FFFFFF", // card / panel surface
        ink: "#2B2622", // primary text — warm near-black
        stone: "#8C8578", // secondary / muted text
        line: "#E6DFD3", // hairline borders & dividers
        accent: "#A8502C", // brick terracotta — primary brand accent
        "accent-dark": "#7C3A1F", // hover / pressed state for accent
        clay: "#C97A4A", // lighter clay tone for subtle highlights
        moss: "#5C6653", // secondary accent — muted sage, used sparingly
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(43, 38, 34, 0.04), 0 8px 24px rgba(43, 38, 34, 0.06)",
        lift: "0 4px 8px rgba(43, 38, 34, 0.06), 0 16px 40px rgba(43, 38, 34, 0.10)",
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};
