// Container.tsx
import React from "react";
import * as styles from "./Container.module.pcss";
import classnames from "classnames";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
  const classNames = classnames(styles.container, className);
  return <div className={classNames}>{children}</div>;
};
