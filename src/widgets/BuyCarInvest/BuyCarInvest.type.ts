import React from "react";
export interface IBuyCarInvest {
  title: string;
  subTitle: string;
  btnText?: string;
  btnSlot?: React.ReactNode;
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
