import React from "react";

export interface INftCardProps {
  title: string;
  image: string;
  altText?: string;
  year: string;
  yearTitle: string;
  capacityTitle: string;
  capacity: string;
  nftTitle: string;
  countNft: string | number;
  allNft: string | number;
  priceTitle: string;
  price: string;
  btnSlot?: React.ReactNode;
  className?: string;
  btnText?: string;
}

export type INftCardPropsWithoutExtras = Omit<
  INftCardProps,
  "btnSlot" | "className"
>;
