import { Swiper } from "swiper";
import { Button } from "../../shared/ui/Button";
import * as styles from "./CustomNavigation.module.pcss";
import RightIcon from "@assets/icons/arrowRight.svg";
import LeftIcon from "@assets/icons/arrowLeft.svg";


interface CustomNavigationButtonsProps {
  swiperRef: {
    current: {
      swiper: {
        swiper: Swiper;
      };
    };
  };
}

export const CustomNavigationButtons = ({
  swiperRef,
}: CustomNavigationButtonsProps) => {
  const handlePrev = () => {
    const swiper = swiperRef.current?.swiper.swiper;
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    const swiper = swiperRef.current?.swiper.swiper;
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <Button
        onClick={handlePrev}
        className={styles.btnPrev}
        variant="outline"
        iconBefore={<LeftIcon />}
      />

      <Button
        onClick={handleNext}
        className={styles.btnNext}
        variant="outline"
        iconAfter={<RightIcon />}
      />
    </>
  );
};
