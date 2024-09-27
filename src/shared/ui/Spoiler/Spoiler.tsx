import { useState, useRef, useEffect } from "react";
import type { ISpoilerProps } from "./Spoiler.types";
import * as styles from "./Spoiler.module.pcss";
import PlusIcon from "@assets/icons/plus.svg";
import MinusIcon from "@assets/icons/minus.svg";

export const Spoiler = ({
  title,
  children,
  isOpened = false,
  index,
}: ISpoilerProps) => {
  const [isOpen, setIsOpen] = useState(isOpened);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSpoiler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const height = content.scrollHeight;
      content.style.setProperty(
        "--spoilerContentMaxHeight",
        isOpen ? `${height}px` : "0px"
      );
    }
  }, [isOpen]);

  return (
    <div className={styles.spoiler}>
      <div className={styles.spoilerTitle} onClick={toggleSpoiler}>
        <span className={styles.spoilerTitleLabel}>{title}</span>
        <button className={styles.spoilerToggle}>
          {isOpen ? (
            <MinusIcon
              color="var(--colorPrimary)"
              width={"100%"}
              height={"100%"}
            />
          ) : (
            <PlusIcon
              color="var(--colorOrange)"
              width={"100%"}
              height={"100%"}
            />
          )}
        </button>
      </div>

      <div
        className={`${styles.spoilerContent} ${isOpen ? styles.spoilerContentOpen : ""}`}
        ref={contentRef}>
        {children}
      </div>
    </div>
  );
};
