import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTracking(gaId) {
  const location = useLocation();

  useEffect(() => {
    if (!gaId || !window.gtag) return;

    window.gtag("config", gaId, {
      page_path: location.pathname,
    });
  }, [location, gaId]);
}
