import { isMediaQuery } from "@web3r/flowerkit/css";
import { getDebouncedFn } from "@web3r/flowerkit/fn";
import { useEffect, useState } from "react";
import { MEDIA_QUERIES_POINTS } from "@shared/config";

/**
 * Хук получает состояние адаптивного вида
 * @return {{isMobile: boolean, isTablet: boolean, isTabletMedium: boolean, isTablet: boolean}}
 */
export const useAdaptiveState = () => {
  const getIsMobile = () => !!isMediaQuery(`(${MEDIA_QUERIES_POINTS.mobile})`);

  const getIsTabletMinimum = () =>
    !!isMediaQuery(`(${MEDIA_QUERIES_POINTS.tabletMinimum})`);

  const getIsTabletMedium = () =>
    !!isMediaQuery(`(${MEDIA_QUERIES_POINTS.tabletMedium})`);

  const getIsTablet = () => !!isMediaQuery(`(${MEDIA_QUERIES_POINTS.tablet})`);

  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isTabletMinimum, setIsTabletMinimum] = useState(getIsTabletMinimum());
  const [isTabletMedium, setIsTabletMedium] = useState(getIsTabletMedium());
  const [isTablet, setIsTablet] = useState(getIsTablet());

  useEffect(() => {
    const onResize: EventListener = getDebouncedFn(() => {
      setIsMobile(getIsMobile());
      setIsTabletMinimum(getIsTabletMinimum());
      setIsTabletMedium(getIsTabletMedium());
      setIsTablet(getIsTablet());
    }) as EventListener;

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    isMobile,
    isTabletMinimum,
    isTabletMedium,
    isTablet,
  };
};
