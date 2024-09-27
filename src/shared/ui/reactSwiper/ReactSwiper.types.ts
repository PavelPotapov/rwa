import React from "react";
import type { SwiperOptions } from "swiper/types";

type SwiperSlideProps = {
  [key: string]: React.ReactNode;
};

export type slidesPerViewType = "auto" | number;

export type ReactSwiperProps = {
  baseClass?: string;
  extraClasses?: string;
  extraAttrs?: React.HTMLProps<HTMLDivElement>;
  swiperCfg?: SwiperOptions;
  slidesProps: SwiperSlideProps[];
  id?: string;
  renderFn?: (props: SwiperSlideProps) => React.ReactNode | string;
  navigationSlot?: React.ReactNode;
};
