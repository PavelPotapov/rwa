import type { ReactElement } from "react";

export interface IPageLayoutProps {
  children: ReactElement;
  headerSlot?: ReactElement;
  className?: string;
}
