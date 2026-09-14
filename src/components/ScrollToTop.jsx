import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const savedPositions = {};

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const navType = useNavigationType();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const locationKey = pathname + search;
    const sameRoute = prevPathname.current === pathname;
    prevPathname.current = pathname;

    if (navType === "POP" && !sameRoute) {
      // Genuine back/forward to a different page — restore saved position
      const saved = savedPositions[locationKey] ?? 0;
      requestAnimationFrame(() => {
        window.scrollTo({ top: saved, behavior: "instant" });
      });
    } else if (navType !== "POP") {
      // Fresh PUSH navigation — scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    // POP to same route (viewer open/close) — do nothing, don't touch scroll

    const save = () => { savedPositions[locationKey] = window.scrollY; };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [pathname, search, navType]);

  return null;
}
