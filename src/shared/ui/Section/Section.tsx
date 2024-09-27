import React, { forwardRef } from "react";
import type { ISectionProps } from "./Section.types";
import * as styles from "./Section.module.pcss";
import classnames from "classnames";

export const Section = forwardRef<HTMLElement, ISectionProps>(
  ({ children, className }, ref) => {
    const classNames = classnames(styles.section, className);
    return (
      <section ref={ref} className={classNames}>
        {children}
      </section>
    );
  }
);
