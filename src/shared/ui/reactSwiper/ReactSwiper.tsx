import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import {
  FreeMode,
  Autoplay,
  Pagination,
  Navigation,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { defaultCfg } from "./config";
import type { ReactSwiperProps } from "./ReactSwiper.types";
import "swiper/swiper-bundle.css";
import * as styles from "./ReactSwiper.module.pcss";

export const ReactSwiper = forwardRef(
  (
    { swiperCfg, slidesProps, renderFn, navigationSlot }: ReactSwiperProps,
    ref
  ) => {
    const swiperRef = useRef(null);

    useImperativeHandle(ref, () => ({
      swiper: swiperRef.current,
    }));

    const swiperConfig = {
      ...defaultCfg,
      ...swiperCfg,
    };

    return (
      <>
        <Swiper
          className={styles.reactSwiper}
          ref={swiperRef}
          modules={[EffectCube, Autoplay, Pagination, Navigation]}
          {...swiperConfig}>
          {slidesProps.map((props, index) => (
            <SwiperSlide key={index}>{renderFn && renderFn(props)}</SwiperSlide>
          ))}
        </Swiper>
        {navigationSlot && navigationSlot}
      </>
    );
  }
);
