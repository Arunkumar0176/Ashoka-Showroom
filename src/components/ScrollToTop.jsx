import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.classList.add("no-smooth");
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("no-smooth");
  }, [pathname]);
  return null;
}
