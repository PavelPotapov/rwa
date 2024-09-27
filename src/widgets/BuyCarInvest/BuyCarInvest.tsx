import blueCar from "@assets/images/blue-car.png";
import orangeCar from "@assets/images/orange-car.png";
import * as styles from "./BuyCarInvest.module.pcss";
import { GlowingCircle } from "@shared/ui/GlowingCircle";
import type { IBuyCarInvest } from "./BuyCarInvest.type";
import purpleCircle from "@assets/images/purple-circle.png";
import { useAdaptiveState } from "@shared/lib/hooks";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "@shared/ui/Button";
import RightIcon from "@assets/icons/arrowRight.svg";
import ChatSVG from "@assets/icons/chat.svg";
import WaIcon from "@assets/icons/icon-wa.svg";
import {
  fadeInFromLeft,
  fadeInFromRight,
  slideInFromLeft,
} from "@shared/animations/scrollAnimations";

export const BuyCarInvest = ({
  title,
  subTitle,
  btnSlot,
  onButtonClick,
}: IBuyCarInvest) => {
  const { isTabletMedium, isMobile } = useAdaptiveState();

  const glowingCircles = useMemo(
    () => ({
      circle1: {
        top: isMobile ? "37%" : isTabletMedium ? "29%" : "36%",
        left: isMobile ? "24%" : isTabletMedium ? "58%" : "46%",
      },
      circle2: {
        top: isMobile ? "54%" : isTabletMedium ? "15%" : "20%",
        left: isMobile ? "33%" : isTabletMedium ? "71%" : "59.5%",
      },
      circle3: {
        top: isMobile ? "75%" : isTabletMedium ? "39%" : "26%",
        left: isMobile ? "98%" : isTabletMedium ? "96%" : "83%",
      },
      circle4: {
        top: isMobile ? "38%" : isTabletMedium ? "17%" : "49%",
        left: isMobile ? "-2%" : isTabletMedium ? "93%" : "84%",
      },
    }),
    [isMobile, isTabletMedium]
  );

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const car1Ref = useRef<HTMLDivElement>(null);
  const car2Ref = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLImageElement>(null);
  const glowingCircleRefs = {
    circle1: useRef<HTMLDivElement>(null),
    circle2: useRef<HTMLDivElement>(null),
    circle3: useRef<HTMLDivElement>(null),
    circle4: useRef<HTMLDivElement>(null),
  };
  const buttonRefs = {
    nftBtn: useRef<HTMLDivElement>(null),
    moreBtn: useRef<HTMLButtonElement>(null),
    chatBtn: useRef<HTMLButtonElement>(null),
    waBtn: useRef<HTMLButtonElement>(null),
  };

  useEffect(() => {
    if (titleRef.current) {
      fadeInFromLeft(titleRef.current, 0.2);
    }

    if (subtitleRef.current) {
      fadeInFromLeft(subtitleRef.current, 0.4);
    }

    if (car1Ref.current) {
      fadeInFromRight(car1Ref.current, 0.6);
    }

    if (car2Ref.current) {
      fadeInFromRight(car2Ref.current, 0.8);
    }

    if (circleRef.current) {
      fadeInFromLeft(circleRef.current, 1);
    }

    if (glowingCircleRefs.circle1.current) {
      fadeInFromRight(glowingCircleRefs.circle1.current, 1.2);
    }

    if (glowingCircleRefs.circle2.current) {
      fadeInFromRight(glowingCircleRefs.circle2.current, 1.4);
    }

    if (glowingCircleRefs.circle3.current) {
      fadeInFromRight(glowingCircleRefs.circle3.current, 1.6);
    }

    if (glowingCircleRefs.circle4.current) {
      fadeInFromRight(glowingCircleRefs.circle4.current, 1.8);
    }

    if (buttonRefs.nftBtn.current) {
      fadeInFromLeft(buttonRefs.nftBtn.current, 1.5);
    }

    if (buttonRefs.moreBtn.current) {
      fadeInFromLeft(buttonRefs.moreBtn.current, 2.2);
    }

    if (buttonRefs.chatBtn.current) {
      fadeInFromLeft(buttonRefs.chatBtn.current, 2.4);
    }

    if (buttonRefs.waBtn.current) {
      fadeInFromLeft(buttonRefs.waBtn.current, 2.6);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title} ref={titleRef}>
        {title}
      </h1>
      <p className={styles.subtitle} ref={subtitleRef}>
        {subTitle}
      </p>
      <div className={styles.car1} ref={car1Ref}>
        <img src={blueCar} loading="lazy" alt="blue car" />
      </div>
      <div className={styles.car2} ref={car2Ref}>
        <img src={orangeCar} loading="lazy" alt="blue car" />
      </div>
      <img
        className={styles.circle}
        src={purpleCircle}
        width={130}
        height={130}
        loading="lazy"
        ref={circleRef}
      />
      <div className={styles.nftBtn} ref={buttonRefs.nftBtn}>
        {btnSlot && btnSlot}
      </div>
      <GlowingCircle
        top={glowingCircles.circle1.top}
        left={glowingCircles.circle1.left}
        width={7}
        height={7}
        color="var(--colorElectricIndigo)"
        delay={"1.3s"}
        ref={glowingCircleRefs.circle1}
      />
      <GlowingCircle
        top={glowingCircles.circle2.top}
        left={glowingCircles.circle2.left}
        width={7}
        height={7}
        color="var(--colorSelectiveYellow)"
        delay={"1s"}
        ref={glowingCircleRefs.circle2}
      />
      <GlowingCircle
        top={glowingCircles.circle3.top}
        left={glowingCircles.circle3.left}
        width={7}
        height={7}
        color="var(--colorSelectiveYellow)"
        delay={"1s"}
        ref={glowingCircleRefs.circle3}
      />
      <GlowingCircle
        top={glowingCircles.circle4.top}
        left={glowingCircles.circle4.left}
        width={12}
        height={12}
        color="var(--colorSelectiveYellow)"
        delay={"0.4s"}
        ref={glowingCircleRefs.circle4}
      />
      <Button
        onClick={onButtonClick}
        className={styles.moreBtn}
        iconBefore={<RightIcon />}
        // ref={buttonRefs.moreBtn}
      />
      <Button
        className={styles.chatBtn}
        iconBefore={<ChatSVG width={"100%"} height={"100%"} />}
        variant="filled"
        // ref={buttonRefs.chatBtn}
      />
      <Button
        className={styles.waBtn}
        iconBefore={<WaIcon width={"100%"} height={"100%"} />}
        variant="filled"
        // ref={buttonRefs.waBtn}
      />
    </div>
  );
};
