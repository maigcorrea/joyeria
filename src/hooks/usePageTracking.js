// src/hooks/usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTracking(gaId) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!gaId || !window.gtag) return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [gaId, pathname]);
}
