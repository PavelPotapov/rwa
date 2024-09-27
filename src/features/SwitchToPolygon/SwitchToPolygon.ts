import { useEffect } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import { polygon } from "wagmi/chains";

export const SwitchToPolygon = () => {
  const { switchChain } = useSwitchChain();
  const { connector } = useAccount();

  useEffect(() => {
    const switchToPolygon = async () => {
      if (connector) {
        try {
          await switchChain?.({ chainId: polygon.id });
        } catch (error) {}
      }
    };
    switchToPolygon();
  }, [connector, switchChain]);

  return null;
};
