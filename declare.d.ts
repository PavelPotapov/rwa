declare module "*.pcss" {
  const content: { [key: string]: string };
  export = content;
}

declare module "*.jpg";
declare module "*.png";

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface Window {
  ethereum?: any;
  solana?: {
    connect: () => Promise<void>;
    publicKey: PublicKey;
    isPhantom: boolean;
  };
}
