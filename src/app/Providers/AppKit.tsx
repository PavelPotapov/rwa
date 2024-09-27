import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, polygonMumbai, Chain } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
//TODO: вынести в env в будущем. 
const projectId = "aeefee6c9594a770de515822986bc05e";

// 2. Define metadata
const metadata = {
  name: "Heritage Classic Car",
  description: "AppKit Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 3. Define chains with correct type
const chains: [Chain, ...Chain[]] = [mainnet, polygon, polygonMumbai];

// 4. Create wagmiConfig
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 5. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

// Define props type for AppKitProvider
interface AppKitProviderProps {
  children: React.ReactNode;
}

// AppKitProvider component
export function AppKitProvider({ children }: AppKitProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
