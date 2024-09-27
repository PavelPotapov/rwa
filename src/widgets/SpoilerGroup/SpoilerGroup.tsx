import { Spoiler } from "../../shared/ui/Spoiler";
import type { ISpoilerGroupProps } from "./SpoilerGroup.types";
import * as styles from "./SpoilerGroup.module.pcss";
import faq from "@images/faq.png";
import car from "@images/colors-car.png";
import background from "@assets/images/background-faq.png";
import classnames from "classnames";
import { useEffect, useRef } from "react";
import {
  animateOnceOnScroll,
  slideInFromRight,
  slideInFromLeft,
} from "@shared/animations/scrollAnimations";

export const SpoilerGroup = ({
  spoilers,
  renderContent,
}: ISpoilerGroupProps) => {
  const spoilerRefs = useRef<(HTMLLIElement | null)[]>([]);
  const faqRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    spoilerRefs.current.forEach((item, index) => {
      animateOnceOnScroll(
        item,
        {
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0, duration: 1 },
        },
        "top 85%",
        index * 0.2
      );
    });

    if (faqRef.current) {
      slideInFromLeft(faqRef.current);
    }

    if (carRef.current) {
      slideInFromRight(carRef.current, { delay: 0.5 });
    }
  }, []);

  return (
    <div className={styles.spoilerGroup}>
      <div className={styles.faq} ref={faqRef}>
        <img src={faq} alt="faq" width={892} height={446} loading="lazy" />
      </div>
      <img
        ref={carRef}
        src={car}
        alt="car"
        width={645}
        height={645}
        loading="lazy"
        className={styles.car}
      />
      <ul
        className={classnames(
          styles.spoilerGroupSpoilers,
          styles.spoilerGroupList
        )}>
        {spoilers.map((spoiler, index) => (
          <li
            className={styles.borderBottom}
            key={index}
            ref={(el) => (spoilerRefs.current[index] = el)}>
            <Spoiler title={spoiler.title}>
              {renderContent
                ? renderContent(spoiler.title, spoiler.content)
                : spoiler.content}
            </Spoiler>
          </li>
        ))}
      </ul>
      <img
        src={background}
        alt="background"
        width={"100%"}
        height={"100%"}
        loading="lazy"
        className={styles.background}
      />
    </div>
  );
};
