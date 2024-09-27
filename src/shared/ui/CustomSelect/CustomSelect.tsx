import { useState, useRef, useEffect } from "react";
import * as styles from "./CustomSelect.module.pcss";
import type { ICustomSelectProps } from "./CustomSelect.types";
import ArrowBottom from "@assets/icons/arrowSelect.svg";

export const CustomSelect = ({
  options,
  selected,
  onSelect,
}: ICustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div className={styles.selectHeader} onClick={handleToggle}>
        <span>{selected}</span>
        <div className={`${styles.arrow} ${isOpen ? styles.up : ""}`}>
          <ArrowBottom />
        </div>
      </div>
      {isOpen && (
        <div className={styles.selectOptions}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.selectOption}
              onClick={() => handleSelect(option.value)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
