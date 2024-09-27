export const isMetaMaskInstalled = () => {
  return Boolean(window.ethereum && window.ethereum.isMetaMask);
};

export const isPhantomInstalled = () => {
  return Boolean(window.solana && window.solana.isPhantom);
};

export const isRTL = () => document.documentElement.dir === "rtl";
