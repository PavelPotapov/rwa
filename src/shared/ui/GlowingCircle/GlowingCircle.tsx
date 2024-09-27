import React, { forwardRef } from "react";
import * as styles from "./GlowingCircle.module.pcss";

interface IGlowingCircleProps {
  top: string | number;
  left: string | number;
  color: string;
  width?: string | number;
  height?: string | number;
  delay?: string;
}

const GlowingCircle = forwardRef<HTMLDivElement, IGlowingCircleProps>(
  (
    {
      top,
      left,
      color,
      width = 7,
      height = 7,
      delay = "0.3s",
    }: IGlowingCircleProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const circleStyle = {
      top: typeof top === "number" ? `${top}px` : `${top}`,
      left: typeof left === "number" ? `${left}px` : `${left}`,
      "--circleColor": color,
      width: typeof width === "number" ? `${width}px` : `${width}`,
      height: typeof height === "number" ? `${height}px` : `${height}`,
      "--glowingCircleDelay": delay,
    } as React.CSSProperties;

    return <div className={styles.circle} style={circleStyle} ref={ref} />;
  }
);

export { GlowingCircle };
