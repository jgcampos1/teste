import { useMemo, useEffect, useState } from "react";

export const useDeviceSizes = () => {
  const [isLargeDisplay, setIsLargeDisplay] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeDisplay(window.matchMedia("(min-width: 1024px)").matches);
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
      setIsTablet(window.matchMedia("(max-width: 767px)").matches);
      setIsMobile(window.matchMedia("(max-width: 639px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return useMemo(
    () => ({
      isLargeDisplay,
      isDesktop,
      isTablet,
      isMobile,
    }),
    [isLargeDisplay, isDesktop, isTablet, isMobile]
  );
};
