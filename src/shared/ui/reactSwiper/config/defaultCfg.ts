import type { slidesPerViewType } from "../ReactSwiper.types";

export const defaultCfg = {
  slidesPerView: 1 as slidesPerViewType,
  spaceBetween: 40,
  watchSlidesProgress: true,
  followFinger: true,
  preventInteractionOnTransition: true,
  preventClicks: true,
  roundLengths: true,
  touchRatio: 0.6,
  uniqueNavElements: false,
  loop: true,
  autoplay: {
    delay: 5000,
  },
};
