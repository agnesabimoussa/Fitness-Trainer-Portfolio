import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getInitial = () => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getInitial);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);

    // Safari < 14
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", onChange);
    } else {
      mediaQueryList.addListener(onChange);
    }

    setMatches(mediaQueryList.matches);

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", onChange);
      } else {
        mediaQueryList.removeListener(onChange);
      }
    };
  }, [query]);

  return matches;
}

export function useIsMobile(breakpointPx = 768) {
  // Matches existing logic: window.innerWidth < 768
  return useMediaQuery(`(max-width: ${breakpointPx - 1}px)`);
}

