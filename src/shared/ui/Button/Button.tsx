import React, { forwardRef } from "react";
import type { IButtonProps } from "./Button.types";
import * as styles from "./Button.module.pcss";
import classnames from "classnames";

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = "outline",
      color = "var(--btnColor)",
      text,
      iconBefore,
      iconAfter,
      className,
      ...props
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const buttonClass = classnames(styles.button, styles[variant], className);

    return (
      <button className={buttonClass} ref={ref} {...props}>
        {!!iconBefore && (
          <span className={styles.iconBefore}>{iconBefore}</span>
        )}
        {text}
        {!!iconAfter && <span className={styles.iconAfter}>{iconAfter}</span>}
      </button>
    );
  }
);

export { Button };
