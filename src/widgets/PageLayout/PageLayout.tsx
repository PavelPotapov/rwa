import * as s from "./PageLayout.module.pcss";
import type * as T from "./PageLayout.types";
import classnames from "classnames";

export const PageLayout = (props: T.IPageLayoutProps) => {
  const { children, className } = props;

  return (
    <div className={classnames(s.root, className)}>
      <header>{props.headerSlot}</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
