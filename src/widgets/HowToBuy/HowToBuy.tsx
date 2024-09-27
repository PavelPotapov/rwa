import { IHowToBuy } from "./HowToBuy.type";
import { HowToBuyArab } from "./HowToBuyArab";
import { HowToBuyEng } from "./HowToBuyEng";
import { HowToBuyHindi } from "./HowToBuyHindi";
import { HowToBuyRu } from "./HowToBuyRu";
import { ReactNode } from "react";
import type { LanguageKey } from "./HowToBuy.type";

const versions: Record<LanguageKey, ReactNode> = {
  ru: <HowToBuyRu />,
  eng: <HowToBuyEng />,
  arab: <HowToBuyArab />,
  hindi: <HowToBuyHindi />,
};

export const HowToBuy = ({ language }: IHowToBuy) => {
  return versions[language] || null;
};
