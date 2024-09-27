import type { ReactElement } from "react";

export interface ISpoilerGroupProps {
  spoilers: {
    title: string;
    content: string | ReactElement;
    isNeedBorderBottom?: boolean;
  }[];
  renderContent?: (title: string, content: string | ReactElement) => ReactElement
}
