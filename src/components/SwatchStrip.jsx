// A row of tile-swatch blocks — the site's recurring signature motif,
// evoking a line of physical tile samples laid out on a showroom counter.
// Reused as a divider between sections.
const swatchColors = ["#A8502C", "#C97A4A", "#5C6653", "#8C8578", "#2B2622", "#E6DFD3"];

export default function SwatchStrip({ className = "" }) {
  return (
    <div className={`flex w-full ${className}`} role="presentation" aria-hidden="true">
      {swatchColors.map((color, index) => (
        <span
          key={index}
          className="h-2 flex-1"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
