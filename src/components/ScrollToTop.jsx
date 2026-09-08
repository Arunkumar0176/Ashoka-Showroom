import { useEffect } from "react";
import { useLocation } from "react-router-dom";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}
